import React, { useEffect } from 'react';
import { Delete, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { playKeyTap } from '../services/tts';

interface HebrewKeyboardProps {
  onLetter: (letter: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onSubmit: () => void;
  disabled?: boolean;
  canSubmit: boolean;
  accentGradient: string;
  highlightedLetters?: string[]; // Optional letters to subtly glow if a hint was used
}

// Standard Israeli mobile keyboard layout (visual Left-to-Right order)
const KEYBOARD_ROWS = [
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'],
];

const REGULAR_TO_SOFIT: Record<string, string> = {
  כ: 'ך',
  מ: 'ם',
  נ: 'ן',
  פ: 'ף',
  צ: 'ץ',
};

export function convertToSofitIfNeeded(word: string, autoSofit: boolean): string {
  if (!autoSofit || word.length === 0) return word;
  const lastChar = word[word.length - 1];
  const sofit = REGULAR_TO_SOFIT[lastChar];
  if (sofit) {
    return word.slice(0, -1) + sofit;
  }
  return word;
}

export const HebrewKeyboard: React.FC<HebrewKeyboardProps> = ({
  onLetter,
  onBackspace,
  onClear,
  onSubmit,
  disabled = false,
  canSubmit,
  accentGradient,
}) => {
  // Also support physical Hebrew keyboard when testing on desktop/iPad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        playKeyTap();
        onBackspace();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (canSubmit) {
          onSubmit();
        }
      } else if (e.key === ' ') {
        e.preventDefault();
        playKeyTap();
        onLetter(' ');
      } else if (/^[\u0590-\u05FF]$/.test(e.key)) {
        e.preventDefault();
        playKeyTap();
        onLetter(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [disabled, canSubmit, onLetter, onBackspace, onSubmit]);

  const handleTap = (letter: string) => {
    if (disabled) return;
    playKeyTap();
    onLetter(letter);
  };

  return (
    <div
      dir="ltr"
      className="w-full max-w-md mx-auto select-none px-1.5 pt-2 pb-3 bg-slate-900/90 backdrop-blur-md border-t border-white/10 rounded-t-3xl shadow-2xl"
    >
      <div className="flex flex-col gap-1.5">
        {KEYBOARD_ROWS.map((row, rowIdx) => (
          <div key={rowIdx} className="flex justify-center gap-1">
            {row.map((letter) => {
              const isSofit = ['ך', 'ם', 'ן', 'ף', 'ץ'].includes(letter);
              return (
                <button
                  key={letter}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleTap(letter)}
                  className={`flex-1 h-12 sm:h-13 min-w-0 rounded-xl font-bold text-xl sm:text-2xl flex items-center justify-center transition-all active:scale-90 active:bg-indigo-500 shadow-md border ${
                    isSofit
                      ? 'bg-slate-800/95 text-amber-200 border-amber-400/20 hover:bg-slate-700'
                      : 'bg-slate-800 text-white border-white/10 hover:bg-slate-700'
                  } disabled:opacity-40`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        ))}

        {/* Bottom Action Row */}
        <div className="flex items-center gap-1.5 mt-1" dir="rtl">
          <button
            type="button"
            disabled={disabled || !canSubmit}
            onClick={onSubmit}
            className={`flex-[2.4] h-13 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
              canSubmit && !disabled
                ? `bg-gradient-to-r ${accentGradient} text-white shadow-indigo-500/30`
                : 'bg-slate-800/60 text-slate-500 border border-white/5 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>בדיקה!</span>
          </button>

          <button
            type="button"
            disabled={disabled}
            onClick={() => handleTap(' ')}
            className="flex-1 h-13 rounded-2xl bg-slate-800/90 border border-white/10 text-slate-300 font-semibold text-sm flex items-center justify-center active:scale-95"
          >
            רווח
          </button>

          <button
            type="button"
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                playKeyTap();
                onBackspace();
              }
            }}
            onDoubleClick={() => {
              if (!disabled) onClear();
            }}
            title="מחיקה (לחיצה כפולה לניקוי מלא)"
            className="flex-1 h-13 rounded-2xl bg-rose-500/20 border border-rose-400/30 text-rose-200 font-bold flex items-center justify-center active:scale-90 hover:bg-rose-500/30"
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
