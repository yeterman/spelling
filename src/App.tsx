import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  Volume2,
  Turtle,
  MessageSquareQuote,
  Flame,
  Trophy,
  Timer,
  Sparkles,
  ShoppingBag,
  Settings,
  Lightbulb,
  Compass,
  KeyRound,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import { CATEGORY_INFO, SHOP_ITEMS } from './data/defaultWords';
import {
  AttemptRecord,
  PlayerProfile,
  ShopItem,
  WordCategory,
  WordEntry,
} from './types';
import {
  getAllActiveWords,
  loadCustomWords,
  loadProfile,
  parseSharedWordListFromUrl,
  pickNextWord,
  saveCustomWords,
  saveProfile,
  INITIAL_PROFILE,
} from './services/storage';
import {
  playCoinSound,
  playMistakeSound,
  playSuccessSound,
  speakHebrew,
} from './services/tts';
import {
  HebrewKeyboard,
  convertToSofitIfNeeded,
} from './components/HebrewKeyboard';
import { ShopModal } from './components/ShopModal';
import { ParentManager } from './components/ParentManager';

type GamePhase = 'ready' | 'playing' | 'correct' | 'mistake' | 'retry';

export function App() {
  const [profile, setProfile] = useState<PlayerProfile>(() => loadProfile());
  const [customWords, setCustomWords] = useState<WordEntry[]>(() =>
    loadCustomWords()
  );
  const [sharedBanner, setSharedBanner] = useState<number | null>(null);

  // Active word state
  const [currentWord, setCurrentWord] = useState<WordEntry>(() => {
    const active = getAllActiveWords(
      loadCustomWords(),
      loadProfile().enabledCategories
    );
    return pickNextWord(active, loadProfile());
  });

  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState<GamePhase>('ready');
  const [lastTypedMistake, setLastTypedMistake] = useState('');

  // Hints unlocked for current word
  const [showMeaningHint, setShowMeaningHint] = useState(false);
  const [showTipHint, setShowTipHint] = useState(false);
  const [showSentenceText, setShowSentenceText] = useState(false);

  // Stopwatch state
  const [elapsedMs, setElapsedMs] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const timerIntervalRef = useRef<number | null>(null);

  // Reward breakdown for last solved word
  const [lastReward, setLastReward] = useState<{
    baseCoins: number;
    speedBonus: number;
    comboMultiplier: number;
    totalCoins: number;
    timeMs: number;
    isNewFastest: boolean;
  } | null>(null);

  // Modals
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isParentOpen, setIsParentOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Save profile whenever it changes
  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  // Save custom words whenever they change
  useEffect(() => {
    saveCustomWords(customWords);
  }, [customWords]);

  // Check if URL has shared custom word list (?wordlist=...)
  useEffect(() => {
    const shared = parseSharedWordListFromUrl();
    if (shared && shared.length > 0) {
      setCustomWords((prev) => {
        const existingWords = new Set(prev.map((w) => w.word));
        const uniqueNew = shared.filter((w) => !existingWords.has(w.word));
        return [...uniqueNew, ...prev];
      });
      setProfile((prev) => ({
        ...prev,
        enabledCategories: ['custom'],
      }));
      setSharedBanner(shared.length);
      // Clean URL query param
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, '', cleanUrl);
    }
  }, []);

  // Timer control helpers
  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      window.clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (startTimeRef.current !== null) return;
    const now = performance.now();
    startTimeRef.current = now;
    timerIntervalRef.current = window.setInterval(() => {
      if (startTimeRef.current !== null) {
        setElapsedMs(Math.floor(performance.now() - startTimeRef.current));
      }
    }, 100);
  }, []);

  useEffect(() => {
    return () => stopTimer();
  }, [stopTimer]);

  // Theme & Companion lookup
  const companionItem =
    SHOP_ITEMS.find((i) => i.id === profile.equippedCompanion) || SHOP_ITEMS[0];
  const themeItem =
    SHOP_ITEMS.find((i) => i.id === profile.equippedTheme) ||
    SHOP_ITEMS.find((i) => i.id === 'theme-galaxy')!;
  const accentGradient =
    themeItem.previewClass || 'from-indigo-600 to-purple-600';

  const level = Math.floor(profile.xp / 100) + 1;
  const levelProgress = profile.xp % 100;

  // Combo multiplier calculation
  const getComboMultiplier = (streak: number) => {
    if (streak >= 10) return 3;
    if (streak >= 5) return 2;
    if (streak >= 3) return 1.5;
    return 1;
  };

  const triggerCelebrationConfetti = useCallback(() => {
    const style = profile.equippedConfetti;
    if (style === 'conf-stars') {
      confetti({
        particleCount: 55,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#f59e0b', '#fef08a', '#ffffff'],
        shapes: ['star'],
      });
    } else if (style === 'conf-fire') {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#fb923c', '#facc15', '#ec4899'],
      });
    } else {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.6 },
      });
    }
  }, [profile.equippedConfetti]);

  // Speak the current word and start the timer
  const handleHearWord = (slow = false) => {
    setIsSpeaking(true);
    if (phase === 'ready') {
      setPhase('playing');
      startTimer();
    }
    speakHebrew(currentWord.vocalized, {
      slow,
      audioUrl: !currentWord.isCustom
        ? `./audio/words/${currentWord.id}.mp3`
        : undefined,
      onEnd: () => setIsSpeaking(false),
    });
  };

  const handleHearSentence = () => {
    setShowSentenceText(true);
    setIsSpeaking(true);
    if (phase === 'ready') {
      setPhase('playing');
      startTimer();
    }
    speakHebrew(currentWord.sentenceTts, {
      audioUrl: !currentWord.isCustom
        ? `./audio/sentences/${currentWord.id}.mp3`
        : undefined,
      onEnd: () => setIsSpeaking(false),
    });
  };

  // Load next word
  const loadNextWord = useCallback(
    (overrideCustom?: WordEntry[], overrideCategories?: WordCategory[]) => {
      stopTimer();
      startTimeRef.current = null;
      setElapsedMs(0);
      setTyped('');
      setLastTypedMistake('');
      setPhase('ready');
      setShowMeaningHint(false);
      setShowTipHint(false);
      setShowSentenceText(false);
      setLastReward(null);

      const pool = getAllActiveWords(
        overrideCustom ?? customWords,
        overrideCategories ?? profile.enabledCategories
      );
      const next = pickNextWord(pool, profile, currentWord.id);
      setCurrentWord(next);

      // Auto-speak word after a tiny transition delay
      setTimeout(() => {
        setIsSpeaking(true);
        setPhase('playing');
        const now = performance.now();
        startTimeRef.current = now;
        timerIntervalRef.current = window.setInterval(() => {
          if (startTimeRef.current !== null) {
            setElapsedMs(Math.floor(performance.now() - startTimeRef.current));
          }
        }, 100);
        speakHebrew(next.vocalized, {
          audioUrl: !next.isCustom
            ? `./audio/words/${next.id}.mp3`
            : undefined,
          onEnd: () => setIsSpeaking(false),
        });
      }, 180);
    },
    [
      customWords,
      profile,
      currentWord.id,
      stopTimer,
    ]
  );

  // Handle typing a letter on the custom Hebrew keyboard
  const handleLetterInput = (letter: string) => {
    if (phase === 'correct' || phase === 'mistake') return;
    if (phase === 'ready') {
      setPhase('playing');
      startTimer();
    }
    if (typed.length >= currentWord.word.length + 3) return;
    setTyped((prev) => prev + letter);
  };

  const handleBackspace = () => {
    if (phase === 'correct' || phase === 'mistake') return;
    setTyped((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    if (phase === 'correct' || phase === 'mistake') return;
    setTyped('');
  };

  // Submit & Check Spelling
  const handleSubmit = () => {
    const cleanTarget = currentWord.word.trim();
    const rawTyped = typed.trim();
    if (!rawTyped) return;

    const finalTyped = convertToSofitIfNeeded(rawTyped, profile.autoSofit);
    if (finalTyped !== rawTyped) {
      setTyped(finalTyped);
    }

    // If she is in 'retry' mode (practicing after a mistake)
    if (phase === 'retry') {
      if (finalTyped === cleanTarget) {
        playSuccessSound(1);
        setPhase('correct');
        setLastReward({
          baseCoins: 5,
          speedBonus: 0,
          comboMultiplier: 1,
          totalCoins: 5,
          timeMs: elapsedMs,
          isNewFastest: false,
        });
        setProfile((prev) => ({
          ...prev,
          coins: prev.coins + 5,
          xp: prev.xp + 10,
        }));
      } else {
        playMistakeSound();
        setTyped('');
      }
      return;
    }

    stopTimer();
    const finalTimeMs =
      startTimeRef.current !== null
        ? Math.max(500, Math.floor(performance.now() - startTimeRef.current))
        : 3500;
    setElapsedMs(finalTimeMs);

    const isCorrect = finalTyped === cleanTarget;

    if (isCorrect) {
      const newStreak = profile.currentStreak + 1;
      const newBestStreak = Math.max(profile.bestStreak, newStreak);
      const comboMult = getComboMultiplier(newStreak);

      // Speed bonus calculation
      let speedBonus = 0;
      if (finalTimeMs <= 4500) {
        speedBonus = 15; // Lightning!
      } else if (finalTimeMs <= 8000) {
        speedBonus = 8; // Fast!
      } else if (finalTimeMs <= 12000) {
        speedBonus = 3;
      }

      const baseCoins = 10;
      const totalCoins = Math.round((baseCoins + speedBonus) * comboMult);
      const isNewFastest =
        profile.fastestTimeMs === null || finalTimeMs < profile.fastestTimeMs;

      setLastReward({
        baseCoins,
        speedBonus,
        comboMultiplier: comboMult,
        totalCoins,
        timeMs: finalTimeMs,
        isNewFastest,
      });

      playSuccessSound(newStreak);
      triggerCelebrationConfetti();
      setPhase('correct');

      const prevWordStat = profile.wordStats[currentWord.id] || {
        attempts: 0,
        correct: 0,
        streak: 0,
        bestTimeMs: null,
        lastSeen: 0,
      };

      const record: AttemptRecord = {
        id: `att-${Date.now()}`,
        word: cleanTarget,
        typed: finalTyped,
        isCorrect: true,
        timeMs: finalTimeMs,
        timestamp: Date.now(),
        coinsEarned: totalCoins,
      };

      setProfile((prev) => ({
        ...prev,
        coins: prev.coins + totalCoins,
        xp: prev.xp + 25,
        currentStreak: newStreak,
        bestStreak: newBestStreak,
        totalSolved: prev.totalSolved + 1,
        totalAttempts: prev.totalAttempts + 1,
        fastestTimeMs: isNewFastest ? finalTimeMs : prev.fastestTimeMs,
        recentTimesMs: [finalTimeMs, ...prev.recentTimesMs.slice(0, 29)],
        wordStats: {
          ...prev.wordStats,
          [currentWord.id]: {
            attempts: prevWordStat.attempts + 1,
            correct: prevWordStat.correct + 1,
            streak: prevWordStat.streak + 1,
            bestTimeMs:
              prevWordStat.bestTimeMs === null
                ? finalTimeMs
                : Math.min(prevWordStat.bestTimeMs, finalTimeMs),
            lastSeen: Date.now(),
          },
        },
        history: [record, ...prev.history.slice(0, 49)],
      }));
    } else {
      // Mistake!
      playMistakeSound();
      setLastTypedMistake(finalTyped);
      setPhase('mistake');

      const prevWordStat = profile.wordStats[currentWord.id] || {
        attempts: 0,
        correct: 0,
        streak: 0,
        bestTimeMs: null,
        lastSeen: 0,
      };

      const record: AttemptRecord = {
        id: `att-${Date.now()}`,
        word: cleanTarget,
        typed: finalTyped,
        isCorrect: false,
        timeMs: finalTimeMs,
        timestamp: Date.now(),
        coinsEarned: 0,
      };

      setProfile((prev) => ({
        ...prev,
        currentStreak: 0,
        totalAttempts: prev.totalAttempts + 1,
        wordStats: {
          ...prev.wordStats,
          [currentWord.id]: {
            ...prevWordStat,
            attempts: prevWordStat.attempts + 1,
            streak: 0,
            lastSeen: Date.now(),
          },
        },
        history: [record, ...prev.history.slice(0, 49)],
      }));
    }
  };

  // Start practice-on-mistake retry
  const handleStartRetry = () => {
    setTyped('');
    setPhase('retry');
    speakHebrew(currentWord.vocalized, {
      audioUrl: !currentWord.isCustom
        ? `./audio/words/${currentWord.id}.mp3`
        : undefined,
    });
  };

  // In-game Hints (Spend coins without breaking streak)
  const handleBuyMeaningHint = () => {
    if (showMeaningHint || profile.coins < 10) return;
    playCoinSound();
    setShowMeaningHint(true);
    setProfile((prev) => ({ ...prev, coins: prev.coins - 10 }));
  };

  const handleBuyTipHint = () => {
    if (showTipHint || profile.coins < 15) return;
    playCoinSound();
    setShowTipHint(true);
    setProfile((prev) => ({ ...prev, coins: prev.coins - 15 }));
  };

  const handleRevealNextLetter = () => {
    if (profile.coins < 20) return;
    const target = currentWord.word;
    // Find how many leading characters match target
    let matchLen = 0;
    while (
      matchLen < typed.length &&
      matchLen < target.length &&
      typed[matchLen] === target[matchLen]
    ) {
      matchLen++;
    }
    if (matchLen >= target.length) return;

    playCoinSound();
    const nextCorrectPrefix = target.slice(0, matchLen + 1);
    setTyped(nextCorrectPrefix);
    if (phase === 'ready') {
      setPhase('playing');
      startTimer();
    }
    setProfile((prev) => ({ ...prev, coins: prev.coins - 20 }));
  };

  // Shop buy or equip handler
  const handleShopBuyOrEquip = (item: ShopItem) => {
    const isUnlocked = profile.unlockedItems.includes(item.id);
    setProfile((prev) => {
      const nextUnlocked = isUnlocked
        ? prev.unlockedItems
        : [...prev.unlockedItems, item.id];
      const nextCoins = isUnlocked ? prev.coins : prev.coins - item.price;

      return {
        ...prev,
        coins: nextCoins,
        unlockedItems: nextUnlocked,
        equippedCompanion:
          item.type === 'companion' ? item.id : prev.equippedCompanion,
        equippedTheme: item.type === 'theme' ? item.id : prev.equippedTheme,
        equippedConfetti:
          item.type === 'confetti' ? item.id : prev.equippedConfetti,
      };
    });
  };

  const categoryMeta = CATEGORY_INFO[currentWord.category];
  const currentCombo = getComboMultiplier(profile.currentStreak);

  return (
    <div className="min-h-dvh flex flex-col justify-between bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glow matching equipped theme */}
      <div
        className={`pointer-events-none fixed -top-32 left-1/2 -translate-x-1/2 w-[480px] h-[320px] rounded-full bg-gradient-to-br ${accentGradient} opacity-20 blur-3xl`}
      />

      {/* Shared WhatsApp Word List Notification Banner */}
      {sharedBanner !== null && (
        <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between z-30 shadow-md">
          <span>
            🎉 נוספו {sharedBanner} מילים חדשות לרשימת התרגול האישית!
          </span>
          <button
            type="button"
            onClick={() => setSharedBanner(null)}
            className="underline mr-2"
          >
            הבנתי
          </button>
        </div>
      )}

      {/* Top Gamification Bar */}
      <header className="w-full max-w-md mx-auto px-3 pt-3 pb-2 flex items-center justify-between gap-2 z-10">
        {/* Companion + Level */}
        <button
          type="button"
          onClick={() => setIsShopOpen(true)}
          className="flex items-center gap-2 bg-slate-900/90 border border-white/10 rounded-2xl px-2.5 py-1.5 shadow-md active:scale-95 transition-transform"
        >
          <span className="text-2xl animate-float">{companionItem.icon}</span>
          <div className="text-right">
            <div className="text-[11px] font-extrabold text-indigo-300 leading-none">
              רמה {level}
            </div>
            <div className="w-14 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
              <div
                className={`h-full bg-gradient-to-r ${accentGradient}`}
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        </button>

        {/* Streak & Best Streak Pill */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-2xl px-3 py-1.5 shadow-md">
          <div className="flex items-center gap-1">
            <Flame
              className={`w-5 h-5 ${
                profile.currentStreak >= 3
                  ? 'text-orange-400 fill-orange-400 animate-bounce'
                  : 'text-slate-400'
              }`}
            />
            <span className="font-black text-lg leading-none">
              {profile.currentStreak}
            </span>
          </div>

          {currentCombo > 1 && (
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-[11px] px-1.5 py-0.5 rounded-md">
              x{currentCombo}
            </span>
          )}

          <div className="h-4 w-[1px] bg-white/10 mx-1" />

          <div
            className="flex items-center gap-1 text-xs text-slate-400"
            title="שיא רצף כל הזמנים"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>שיא: {profile.bestStreak}</span>
          </div>
        </div>

        {/* Coins & Settings */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsShopOpen(true)}
            className="flex items-center gap-1 bg-amber-500/15 border border-amber-400/30 rounded-2xl px-2.5 py-1.5 text-amber-300 font-extrabold text-sm active:scale-95 transition-transform"
          >
            <span>🪙</span>
            <span>{profile.coins}</span>
            <ShoppingBag className="w-3.5 h-3.5 ml-0.5 text-amber-200/80" />
          </button>

          <button
            type="button"
            onClick={() => setIsParentOpen(true)}
            title="הגדרות וניהול מילים"
            className="p-2 rounded-2xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white active:scale-95"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Play Area */}
      <main className="flex-1 w-full max-w-md mx-auto px-3 py-1 flex flex-col justify-between gap-2 z-10">
        {/* Category + Live Stopwatch Row */}
        <div className="flex items-center justify-between px-1">
          <button
            type="button"
            onClick={() => setIsParentOpen(true)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${categoryMeta.badgeColor} text-white shadow-sm`}
          >
            <span>{categoryMeta.icon}</span>
            <span>{categoryMeta.label}</span>
          </button>

          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              phase === 'playing' && elapsedMs < 4500
                ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
                : 'bg-slate-900/80 border-white/10 text-slate-300'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>{(elapsedMs / 1000).toFixed(1)} ש׳</span>
            {phase === 'playing' && elapsedMs < 4500 && (
              <span className="text-[10px] text-amber-300 font-extrabold">
                ⚡ בונוס מהירות
              </span>
            )}
          </div>
        </div>

        {/* Audio Trigger Card */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-4 shadow-xl flex flex-col items-center gap-3">
          {phase === 'ready' && (
            <p className="text-xs text-indigo-300 font-semibold">
              לחצי על הכפתור כדי לשמוע את המילה ולהתחיל את השעון! 👇
            </p>
          )}

          {phase === 'retry' && (
            <div className="w-full bg-indigo-500/20 border border-indigo-400/40 rounded-2xl px-3 py-2 text-center">
              <p className="text-xs text-indigo-200 font-bold">
                💪 אימון זיכרון: הקלידי עכשיו את המילה הנכונה{' '}
                <span className="text-white underline font-black">
                  {currentWord.word}
                </span>
              </p>
            </div>
          )}

          <div className="w-full flex items-center gap-2">
            {/* Primary Speak Word Button */}
            <button
              type="button"
              onClick={() => handleHearWord(false)}
              className={`flex-1 py-4 px-4 rounded-2xl bg-gradient-to-r ${accentGradient} text-white font-black text-lg shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-3 active:scale-95 transition-all`}
            >
              <Volume2
                className={`w-7 h-7 ${isSpeaking ? 'animate-ping' : ''}`}
              />
              <span>
                {phase === 'ready' ? 'השמיעי מילה 🔊' : 'שמעי שוב 🔊'}
              </span>
            </button>

            {/* Slow Turtle Pronunciation Button */}
            <button
              type="button"
              onClick={() => handleHearWord(true)}
              title="השמעה איטית וברורה"
              className="py-4 px-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-amber-300 font-bold text-xs flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all"
            >
              <Turtle className="w-5 h-5" />
              <span className="text-[10px]">לאט</span>
            </button>

            {/* Context Sentence Button (crucial for homophones!) */}
            <button
              type="button"
              onClick={handleHearSentence}
              title="שמעי משפט לדוגמה (להבנת ההקשר)"
              className="py-4 px-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-white/10 text-cyan-300 font-bold text-xs flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-all"
            >
              <MessageSquareQuote className="w-5 h-5" />
              <span className="text-[10px]">משפט</span>
            </button>
          </div>

          {/* Context Sentence Display */}
          {showSentenceText && (
            <div className="w-full bg-slate-800/70 border border-cyan-400/20 rounded-2xl px-3.5 py-2 text-center text-sm text-cyan-100 animate-pop">
              💬 &ldquo;{currentWord.sentence}&rdquo;
            </div>
          )}

          {/* Meaning or Tip Hints if unlocked */}
          {(showMeaningHint || showTipHint) && (
            <div className="w-full space-y-1.5">
              {showMeaningHint && (
                <div className="w-full bg-amber-500/15 border border-amber-400/30 rounded-xl px-3 py-1.5 text-xs text-amber-200 font-medium animate-pop">
                  💡 <strong>משמעות:</strong> {currentWord.hintEmoji}
                </div>
              )}
              {showTipHint && (
                <div className="w-full bg-purple-500/15 border border-purple-400/30 rounded-xl px-3 py-1.5 text-xs text-purple-200 font-medium animate-pop">
                  🧐 <strong>כלל כתיב:</strong> {currentWord.spellingTip}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Letter Slots Box (Word Input Display) */}
        <div className="flex flex-col items-center justify-center my-1">
          <div
            dir="rtl"
            className={`flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 py-3 ${
              phase === 'mistake' ? 'animate-shake' : ''
            }`}
          >
            {Array.from({
              length: Math.max(currentWord.word.length, typed.length),
            }).map((_, idx) => {
              const char = typed[idx] || '';
              const targetChar = currentWord.word[idx] || '';
              const isCurrentCursor = idx === typed.length && phase !== 'correct';
              const isExtraChar = idx >= currentWord.word.length;

              let boxStyle =
                'bg-slate-900/90 border-white/20 text-white';
              if (phase === 'correct') {
                boxStyle =
                  'bg-emerald-500/25 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20';
              } else if (phase === 'mistake') {
                const mistakeChar = lastTypedMistake[idx] || '';
                boxStyle =
                  mistakeChar === targetChar
                    ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                    : 'bg-rose-500/25 border-rose-400 text-rose-200';
              } else if (isCurrentCursor) {
                boxStyle =
                  'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40 text-white';
              } else if (isExtraChar) {
                boxStyle =
                  'bg-amber-500/20 border-amber-400/50 text-amber-200';
              } else if (char) {
                boxStyle =
                  'bg-slate-800 border-indigo-400/50 text-white animate-pop';
              }

              return (
                <div
                  key={idx}
                  className={`w-11 h-13 sm:w-12 sm:h-14 rounded-2xl border-2 flex items-center justify-center text-2xl sm:text-3xl font-black transition-all relative ${boxStyle}`}
                >
                  <span>{char}</span>
                  {/* In retry mode, show a subtle ghost letter to guide her */}
                  {phase === 'retry' && !char && targetChar && (
                    <span className="text-white/20 select-none">
                      {targetChar}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 font-medium">
            אורך המילה: {currentWord.word.length} אותיות
          </div>
        </div>

        {/* Feedback Banner (Correct or Mistake) OR Hint Bar */}
        {phase === 'correct' && lastReward ? (
          <div className="bg-emerald-950/90 border-2 border-emerald-400/60 rounded-3xl p-4 shadow-2xl space-y-3 animate-pop">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" />
                <div>
                  <h3 className="font-black text-lg text-white leading-tight">
                    אלופה! כתיב מושלם 🎉
                  </h3>
                  <p className="text-xs text-emerald-300">
                    זמן: {(lastReward.timeMs / 1000).toFixed(1)} שניות
                    {lastReward.isNewFastest && ' • שיא מהירות חדש! ⚡'}
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/20 border border-amber-400/40 px-3 py-1.5 rounded-2xl text-right">
                <div className="text-amber-300 font-black text-base">
                  +{lastReward.totalCoins} 🪙
                </div>
                {lastReward.comboMultiplier > 1 && (
                  <div className="text-[10px] text-amber-200 font-bold">
                    בונוס רצף x{lastReward.comboMultiplier}!
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-900/70 rounded-2xl px-3 py-2 text-xs text-slate-200">
              💡 <strong>זכרי:</strong> {currentWord.spellingTip}
            </div>

            <button
              type="button"
              onClick={() => loadNextWord()}
              className={`w-full py-3.5 rounded-2xl bg-gradient-to-r ${accentGradient} text-white font-black text-base shadow-lg flex items-center justify-center gap-2 active:scale-95`}
            >
              <span>למילה הבאה</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        ) : phase === 'mistake' ? (
          <div className="bg-rose-950/90 border-2 border-rose-400/60 rounded-3xl p-4 shadow-2xl space-y-3 animate-pop">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-black text-base text-rose-200">
                  כמעט! בואי נסתכל על ההבדל:
                </h3>
                <div className="flex items-center gap-3 mt-1 text-base">
                  <span className="text-rose-400 line-through font-bold">
                    {lastTypedMistake}
                  </span>
                  <span className="text-slate-400">←</span>
                  <span className="text-emerald-300 font-black text-xl">
                    {currentWord.word}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  speakHebrew(currentWord.vocalized, {
                    slow: true,
                    audioUrl: !currentWord.isCustom
                      ? `./audio/words/${currentWord.id}.mp3`
                      : undefined,
                  })
                }
                className="p-2.5 rounded-2xl bg-slate-900/80 text-indigo-300 border border-white/10"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-2xl px-3 py-2 text-xs text-amber-200">
              💡 <strong>טיפ לזכירה:</strong> {currentWord.spellingTip}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleStartRetry}
                className="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-1.5 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>הקלידי נכון כדי לזכור (+5 🪙)</span>
              </button>

              <button
                type="button"
                onClick={() => loadNextWord()}
                className="px-4 py-3 rounded-2xl bg-slate-800 text-slate-300 font-bold text-sm active:scale-95"
              >
                דלגי
              </button>
            </div>
          </div>
        ) : (
          /* Power-up Hints Bar */
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              disabled={showMeaningHint || profile.coins < 10}
              onClick={handleBuyMeaningHint}
              className="py-2 px-2 rounded-2xl bg-slate-900/85 border border-white/10 flex flex-col items-center justify-center gap-0.5 text-xs font-bold text-amber-200 disabled:opacity-40 active:scale-95"
            >
              <div className="flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>רמז משמעות</span>
              </div>
              <span className="text-[10px] text-slate-400">10 🪙</span>
            </button>

            <button
              type="button"
              disabled={showTipHint || profile.coins < 15}
              onClick={handleBuyTipHint}
              className="py-2 px-2 rounded-2xl bg-slate-900/85 border border-white/10 flex flex-col items-center justify-center gap-0.5 text-xs font-bold text-purple-200 disabled:opacity-40 active:scale-95"
            >
              <div className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                <span>כלל / שורש</span>
              </div>
              <span className="text-[10px] text-slate-400">15 🪙</span>
            </button>

            <button
              type="button"
              disabled={
                profile.coins < 20 || typed.length >= currentWord.word.length
              }
              onClick={handleRevealNextLetter}
              className="py-2 px-2 rounded-2xl bg-slate-900/85 border border-white/10 flex flex-col items-center justify-center gap-0.5 text-xs font-bold text-emerald-200 disabled:opacity-40 active:scale-95"
            >
              <div className="flex items-center gap-1">
                <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
                <span>גלי אות</span>
              </div>
              <span className="text-[10px] text-slate-400">20 🪙</span>
            </button>
          </div>
        )}
      </main>

      {/* Custom On-Screen Hebrew Keyboard */}
      <HebrewKeyboard
        onLetter={handleLetterInput}
        onBackspace={handleBackspace}
        onClear={handleClear}
        onSubmit={handleSubmit}
        disabled={phase === 'correct' || phase === 'mistake'}
        canSubmit={typed.trim().length > 0}
        accentGradient={accentGradient}
      />

      {/* Collectibles Shop & Stats Modal */}
      {isShopOpen && (
        <ShopModal
          profile={profile}
          onClose={() => setIsShopOpen(false)}
          onBuyOrEquip={handleShopBuyOrEquip}
        />
      )}

      {/* Parent Word List & Category Manager Modal */}
      {isParentOpen && (
        <ParentManager
          profile={profile}
          customWords={customWords}
          onClose={() => setIsParentOpen(false)}
          onUpdateCategories={(cats) => {
            setProfile((prev) => ({ ...prev, enabledCategories: cats }));
            loadNextWord(customWords, cats);
          }}
          onUpdateCustomWords={(words) => {
            setCustomWords(words);
          }}
          onToggleAutoSofit={(val) =>
            setProfile((prev) => ({ ...prev, autoSofit: val }))
          }
          onResetStreakStats={() => {
            setProfile((prev) => ({
              ...INITIAL_PROFILE,
              coins: prev.coins,
              unlockedItems: prev.unlockedItems,
              equippedCompanion: prev.equippedCompanion,
              equippedTheme: prev.equippedTheme,
              equippedConfetti: prev.equippedConfetti,
              enabledCategories: prev.enabledCategories,
            }));
          }}
        />
      )}
    </div>
  );
}
export default App;
