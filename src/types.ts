export type WordCategory =
  | 'homophones'
  | 'gutturals'
  | 'emphatics'
  | 'custom';

export interface WordEntry {
  id: string;
  word: string; // Standard spelling (ktiv male) to check against
  vocalized: string; // With Nikud so TTS pronounces accurately
  sentence: string; // Display context sentence (with blank or full)
  sentenceTts: string; // Vocalized sentence for TTS
  hintEmoji: string; // Emoji + brief meaning
  spellingTip: string; // Memory rule / root / homophone tip
  category: WordCategory;
  isCustom?: boolean;
}

export interface WordStats {
  attempts: number;
  correct: number;
  streak: number;
  bestTimeMs: number | null;
  lastSeen: number;
}

export interface AttemptRecord {
  id: string;
  word: string;
  typed: string;
  isCorrect: boolean;
  timeMs: number;
  timestamp: number;
  coinsEarned: number;
}

export interface ShopItem {
  id: string;
  name: string;
  type: 'companion' | 'theme' | 'confetti';
  icon: string;
  description: string;
  price: number;
  previewClass?: string;
}

export interface PlayerProfile {
  name: string;
  coins: number;
  xp: number;
  currentStreak: number;
  bestStreak: number;
  totalSolved: number;
  totalAttempts: number;
  fastestTimeMs: number | null;
  recentTimesMs: number[];
  unlockedItems: string[];
  equippedCompanion: string;
  equippedTheme: string;
  equippedConfetti: string;
  autoSofit: boolean;
  enabledCategories: WordCategory[];
  wordStats: Record<string, WordStats>;
  history: AttemptRecord[];
}
