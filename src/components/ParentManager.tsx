import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Share2,
  Volume2,
  Check,
  Sparkles,
  ListPlus,
  RotateCcw,
} from 'lucide-react';
import { CATEGORY_INFO, DEFAULT_WORDS } from '../data/defaultWords';
import { PlayerProfile, WordCategory, WordEntry } from '../types';
import { createShareableWordListUrl } from '../services/storage';
import { speakHebrew } from '../services/tts';

interface ParentManagerProps {
  profile: PlayerProfile;
  customWords: WordEntry[];
  onClose: () => void;
  onUpdateCategories: (categories: WordCategory[]) => void;
  onUpdateCustomWords: (words: WordEntry[]) => void;
  onToggleAutoSofit: (value: boolean) => void;
  onResetStreakStats?: () => void;
}

export const ParentManager: React.FC<ParentManagerProps> = ({
  profile,
  customWords,
  onClose,
  onUpdateCategories,
  onUpdateCustomWords,
  onToggleAutoSofit,
  onResetStreakStats,
}) => {
  const [wordInput, setWordInput] = useState('');
  const [vocalizedInput, setVocalizedInput] = useState('');
  const [sentenceInput, setSentenceInput] = useState('');
  const [hintInput, setHintInput] = useState('');
  const [tipInput, setTipInput] = useState('');
  const [bulkMode, setBulkMode] = useState(false);
  const [bulkText, setBulkText] = useState('');
  const [copiedShareLink, setCopiedShareLink] = useState(false);

  const toggleCategory = (cat: WordCategory) => {
    const exists = profile.enabledCategories.includes(cat);
    if (exists && profile.enabledCategories.length === 1) {
      return; // Keep at least 1 category active
    }
    const next = exists
      ? profile.enabledCategories.filter((c) => c !== cat)
      : [...profile.enabledCategories, cat];
    onUpdateCategories(next);
  };

  const focusOnlyCustom = () => {
    onUpdateCategories(['custom']);
  };

  const handleAddSingleWord = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanWord = wordInput.trim();
    if (!cleanWord) return;

    const cleanVocal = vocalizedInput.trim() || cleanWord;
    const cleanSentence =
      sentenceInput.trim() || `המילה שלמדנו השבוע היא ___.`;

    const newEntry: WordEntry = {
      id: `custom-${Date.now()}`,
      word: cleanWord,
      vocalized: cleanVocal,
      sentence: cleanSentence,
      sentenceTts: cleanSentence.replace('___', cleanVocal),
      hintEmoji: hintInput.trim() || '⭐ מילה מהרשימה השבועית',
      spellingTip:
        tipInput.trim() || `שימי לב לאותיות המילה "${cleanWord}".`,
      category: 'custom',
      isCustom: true,
    };

    const updated = [newEntry, ...customWords];
    onUpdateCustomWords(updated);
    if (!profile.enabledCategories.includes('custom')) {
      onUpdateCategories([...profile.enabledCategories, 'custom']);
    }

    setWordInput('');
    setVocalizedInput('');
    setSentenceInput('');
    setHintInput('');
    setTipInput('');
  };

  const handleBulkImport = () => {
    const lines = bulkText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) return;

    const newEntries: WordEntry[] = lines.map((line, idx) => {
      // Support optional "מילה - רמז" format
      const parts = line.split(/[-–:]/).map((p) => p.trim());
      const w = parts[0];
      const hint = parts[1] || '⭐ מילה מהרשימה השבועית';
      return {
        id: `custom-bulk-${Date.now()}-${idx}`,
        word: w,
        vocalized: w,
        sentence: `המילה במבחן הכתיב היא ___.`,
        sentenceTts: w,
        hintEmoji: `⭐ ${hint}`,
        spellingTip: `שימי לב לכל אות במילה "${w}".`,
        category: 'custom',
        isCustom: true,
      };
    });

    onUpdateCustomWords([...newEntries, ...customWords]);
    if (!profile.enabledCategories.includes('custom')) {
      onUpdateCategories([...profile.enabledCategories, 'custom']);
    }
    setBulkText('');
    setBulkMode(false);
  };

  const handleDeleteCustom = (id: string) => {
    onUpdateCustomWords(customWords.filter((w) => w.id !== id));
  };

  const handleShareList = async () => {
    if (customWords.length === 0) return;
    const url = createShareableWordListUrl(customWords);
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'רשימת מילים לאלופת הכתיב ✨',
          text: 'הנה רשימת המילים החדשה לאימון כתיב בטלפון:',
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopiedShareLink(true);
        setTimeout(() => setCopiedShareLink(false), 3000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopiedShareLink(true);
      setTimeout(() => setCopiedShareLink(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-white/15 rounded-t-3xl sm:rounded-3xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900">
          <div>
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <span>⚙️ הגדרות וניהול מילים (להורים)</span>
            </h2>
            <p className="text-xs text-slate-400">
              בחירת קטגוריות, הוספת הכתבה שבועית ושיתוף מהיר לנייד
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {/* Categories Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-200">
                📚 מאגרי מילים פעילים באימון
              </h3>
              {customWords.length > 0 && (
                <button
                  type="button"
                  onClick={focusOnlyCustom}
                  className="text-xs font-bold text-pink-300 bg-pink-500/15 border border-pink-400/30 px-2.5 py-1 rounded-lg hover:bg-pink-500/25"
                >
                  תרגלי רק את המילים שלי ⭐
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-2">
              {(Object.keys(CATEGORY_INFO) as WordCategory[]).map((cat) => {
                const info = CATEGORY_INFO[cat];
                const isSelected = profile.enabledCategories.includes(cat);
                const count =
                  cat === 'custom'
                    ? customWords.length
                    : DEFAULT_WORDS.filter((w) => w.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`w-full text-right p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-400/50 text-white'
                        : 'bg-slate-800/40 border-white/5 text-slate-400 opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <div className="font-bold text-sm flex items-center gap-2">
                          <span>{info.label}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                            {count} מילים
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {info.subtitle}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
                        isSelected
                          ? 'bg-indigo-500 border-indigo-400 text-white'
                          : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Words Section */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-200">
                ✍️ הוספת מילים להכתבה / תרגול אישי
              </h3>
              <button
                type="button"
                onClick={() => setBulkMode(!bulkMode)}
                className="text-xs font-bold text-indigo-300 bg-indigo-500/15 border border-indigo-400/30 px-2.5 py-1 rounded-lg flex items-center gap-1"
              >
                <ListPlus className="w-3.5 h-3.5" />
                <span>{bulkMode ? 'הוספה בודדת' : 'הדבקת רשימה מהירה'}</span>
              </button>
            </div>

            {bulkMode ? (
              <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-3.5 space-y-3">
                <p className="text-xs text-slate-300">
                  הדביקו רשימת מילים (מילה אחת בכל שורה, או בפורמט:{' '}
                  <code className="text-amber-300">מילה - רמז קצר</code>):
                </p>
                <textarea
                  rows={4}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder={'אנציקלופדיה - ספר ידע\nאסטרונאוט - טייס חלל\nטכנולוגיה'}
                  className="w-full rounded-xl bg-slate-900 border border-white/15 p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
                />
                <button
                  type="button"
                  onClick={handleBulkImport}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>הוסף את כל המילים לרשימה</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleAddSingleWord}
                className="bg-slate-800/60 border border-white/10 rounded-2xl p-3.5 space-y-3"
              >
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      המילה (כתיב מלא תקני) *
                    </label>
                    <input
                      type="text"
                      required
                      value={wordInput}
                      onChange={(e) => setWordInput(e.target.value)}
                      placeholder="למשל: ארכיאולוגיה"
                      className="w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      עם ניקוד להקראה מדויקת (רשות)
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={vocalizedInput}
                        onChange={(e) => setVocalizedInput(e.target.value)}
                        placeholder="אַרְכֵאוֹלוֹגְיָה"
                        className="w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          speakHebrew(vocalizedInput || wordInput || 'שלום')
                        }
                        title="בדיקת הקראה"
                        className="px-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-indigo-300 shrink-0"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    משפט הקשר (השתמשו ב-___ במקום המילה, רשות)
                  </label>
                  <input
                    type="text"
                    value={sentenceInput}
                    onChange={(e) => setSentenceInput(e.target.value)}
                    placeholder="למשל: בשיעור ___ למדנו על עתיקות."
                    className="w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      רמז / משמעות (רשות)
                    </label>
                    <input
                      type="text"
                      value={hintInput}
                      onChange={(e) => setHintInput(e.target.value)}
                      placeholder="🏺 חקר עתיקות"
                      className="w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      טיפ לזכירה (רשות)
                    </label>
                    <input
                      type="text"
                      value={tipInput}
                      onChange={(e) => setTipInput(e.target.value)}
                      placeholder="מתחיל ב-א׳ ועם כ׳"
                      className="w-full rounded-xl bg-slate-900 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>הוסף מילה לרשימה האישית</span>
                </button>
              </form>
            )}

            {/* Existing Custom Words List + Share Button */}
            {customWords.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    מילים אישיות שמורות ({customWords.length}):
                  </span>
                  <button
                    type="button"
                    onClick={handleShareList}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600/25 border border-emerald-400/40 text-emerald-200 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-600/35"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>
                      {copiedShareLink
                        ? 'הקישור הועתק! שלחו בוואטסאפ ✅'
                        : 'שתף רשימה בקישור לנייד 📱'}
                    </span>
                  </button>
                </div>

                <div className="max-h-44 overflow-y-auto space-y-1.5 pr-1">
                  {customWords.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-800/80 border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => speakHebrew(item.vocalized)}
                          className="p-1.5 rounded-lg bg-slate-700 text-indigo-300"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-bold text-white">
                          {item.word}
                        </span>
                        <span className="text-xs text-slate-400 truncate max-w-[160px]">
                          {item.hintEmoji}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteCustom(item.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Keyboard Helper & Reset Options */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <label className="flex items-center justify-between bg-slate-800/50 border border-white/10 p-3 rounded-2xl cursor-pointer">
              <div>
                <div className="text-sm font-bold text-white">
                  המרה אוטומטית לאותיות סופיות (ך, ם, ן, ף, ץ)
                </div>
                <div className="text-xs text-slate-400">
                  כשמופעל, הקלדת כ/מ/נ/פ/צ בסוף מילה תהפוך אוטומטית לאות סופית
                </div>
              </div>
              <input
                type="checkbox"
                checked={profile.autoSofit}
                onChange={(e) => onToggleAutoSofit(e.target.checked)}
                className="w-5 h-5 accent-indigo-500 rounded"
              />
            </label>

            {onResetStreakStats && (
              <button
                type="button"
                onClick={onResetStreakStats}
                className="w-full py-2.5 rounded-xl bg-slate-800/60 hover:bg-rose-950/50 border border-white/5 hover:border-rose-500/30 text-slate-400 hover:text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>איפוס היסטוריית זמנים וסטטיסטיקה</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
