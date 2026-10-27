import { CATEGORY_INFO, DEFAULT_WORDS } from '../data/defaultWords';
import { PlayerProfile, WordCategory, WordEntry } from '../types';

const PROFILE_KEY = 'hebrew_spelling_profile_v1';
const CUSTOM_WORDS_KEY = 'hebrew_spelling_custom_words_v1';

export const INITIAL_PROFILE: PlayerProfile = {
  name: 'אלופה',
  coins: 50, // Starter coins so she can try hints or save up
  xp: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalSolved: 0,
  totalAttempts: 0,
  fastestTimeMs: null,
  recentTimesMs: [],
  unlockedItems: ['comp-owl', 'theme-galaxy', 'conf-classic'],
  equippedCompanion: 'comp-owl',
  equippedTheme: 'theme-galaxy',
  equippedConfetti: 'conf-classic',
  autoSofit: false,
  enabledCategories: ['homophones', 'gutturals', 'emphatics', 'custom'],
  wordStats: {},
  history: [],
};

export function loadProfile(): PlayerProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return { ...INITIAL_PROFILE };
    const parsed = JSON.parse(raw);
    const validCategories = (
      (parsed.enabledCategories as WordCategory[]) ||
      INITIAL_PROFILE.enabledCategories
    ).filter((c) => c in CATEGORY_INFO);
    return {
      ...INITIAL_PROFILE,
      ...parsed,
      wordStats: parsed.wordStats || {},
      history: parsed.history || [],
      unlockedItems: parsed.unlockedItems || INITIAL_PROFILE.unlockedItems,
      enabledCategories:
        validCategories.length > 0
          ? validCategories
          : INITIAL_PROFILE.enabledCategories,
    };
  } catch {
    return { ...INITIAL_PROFILE };
  }
}

export function saveProfile(profile: PlayerProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to localStorage', e);
  }
}

export function loadCustomWords(): WordEntry[] {
  try {
    const raw = localStorage.getItem(CUSTOM_WORDS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCustomWords(words: WordEntry[]): void {
  try {
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(words));
  } catch (e) {
    console.error('Failed to save custom words', e);
  }
}

export function getAllActiveWords(
  customWords: WordEntry[],
  enabledCategories: WordCategory[]
): WordEntry[] {
  const all = [...DEFAULT_WORDS, ...customWords];
  const filtered = all.filter((w) => enabledCategories.includes(w.category));
  return filtered.length > 0 ? filtered : all;
}

const recentSessionWordIds: string[] = [];

export function pickNextWord(
  words: WordEntry[],
  profile: PlayerProfile,
  currentWordId?: string
): WordEntry {
  if (words.length === 0) return DEFAULT_WORDS[0];
  if (words.length === 1) return words[0];

  if (currentWordId && !recentSessionWordIds.includes(currentWordId)) {
    recentSessionWordIds.unshift(currentWordId);
    if (recentSessionWordIds.length > 120) {
      recentSessionWordIds.pop();
    }
  }

  // Avoid repeating any of the last N words (up to 80 words or 70% of active pool)
  const cooldownCount = Math.min(80, Math.max(1, Math.floor(words.length * 0.7)));
  const recentHistoryWords = new Set(
    profile.history.slice(0, cooldownCount).map((h) => h.word)
  );
  const recentIds = new Set(recentSessionWordIds.slice(0, cooldownCount));
  if (currentWordId) recentIds.add(currentWordId);

  const nonRecentCandidates = words.filter(
    (w) => !recentIds.has(w.id) && !recentHistoryWords.has(w.word)
  );
  const fallbackCandidates = words.filter((w) => w.id !== currentWordId);
  const pool =
    nonRecentCandidates.length > 0
      ? nonRecentCandidates
      : fallbackCandidates.length > 0
      ? fallbackCandidates
      : words;

  // Weight calculation:
  // - Never seen words get highest priority (6.0) so she sees all words before repeating
  // - Words with mistakes get high weight (5.0) once their cooldown expires
  // - Words already mastered (streak >= 2) get low weight (0.5)
  const weights = pool.map((w) => {
    const stat = profile.wordStats[w.id];
    if (!stat || stat.attempts === 0) return 6.0;
    const accuracy = stat.correct / stat.attempts;
    if (accuracy < 0.6) return 5.0;
    if (stat.streak === 0) return 4.5;
    if (stat.streak >= 2) return 0.5;
    return 1.5;
  });

  const totalWeight = weights.reduce((acc, val) => acc + val, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < pool.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      const chosen = pool[i];
      recentSessionWordIds.unshift(chosen.id);
      if (recentSessionWordIds.length > 120) recentSessionWordIds.pop();
      return chosen;
    }
  }

  const fallback = pool[Math.floor(Math.random() * pool.length)];
  recentSessionWordIds.unshift(fallback.id);
  return fallback;
}

// Encode custom words into a shareable URL parameter for WhatsApp sharing
export function createShareableWordListUrl(words: WordEntry[]): string {
  const compact = words.map((w) => ({
    w: w.word,
    v: w.vocalized,
    s: w.sentence,
    h: w.hintEmoji,
    t: w.spellingTip,
  }));
  const json = JSON.stringify(compact);
  const encoded = btoa(encodeURIComponent(json));
  const url = new URL(window.location.href);
  url.searchParams.set('wordlist', encoded);
  return url.toString();
}

export function parseSharedWordListFromUrl(): WordEntry[] | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get('wordlist');
  if (!encoded) return null;

  try {
    const json = decodeURIComponent(atob(encoded));
    const arr = JSON.parse(json) as Array<{
      w: string;
      v?: string;
      s?: string;
      h?: string;
      t?: string;
    }>;
    if (!Array.isArray(arr) || arr.length === 0) return null;

    return arr
      .filter((item) => item.w && item.w.trim().length > 0)
      .map((item, idx) => {
        const cleanWord = item.w.trim();
        return {
          id: `custom-shared-${Date.now()}-${idx}`,
          word: cleanWord,
          vocalized: item.v?.trim() || cleanWord,
          sentence: item.s?.trim() || `המילה שלמדנו השבוע היא ___.`,
          sentenceTts:
            item.s?.trim().replace('___', item.v?.trim() || cleanWord) ||
            `הַמִּילָה שֶׁלָּמַדְנוּ הַשָּׁבוּעַ הִיא ${item.v?.trim() || cleanWord}.`,
          hintEmoji: item.h?.trim() || '⭐ מילה מהרשימה השבועית',
          spellingTip: item.t?.trim() || `שימי לב לכל אות במילה "${cleanWord}".`,
          category: 'custom' as const,
          isCustom: true,
        };
      });
  } catch {
    return null;
  }
}
