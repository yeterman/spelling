import React, { useState } from 'react';
import { X, Sparkles, Check, Lock, Trophy, Zap, Flame, Target } from 'lucide-react';
import { SHOP_ITEMS } from '../data/defaultWords';
import { PlayerProfile, ShopItem } from '../types';
import { playCoinSound } from '../services/tts';

interface ShopModalProps {
  profile: PlayerProfile;
  onClose: () => void;
  onBuyOrEquip: (item: ShopItem) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  profile,
  onClose,
  onBuyOrEquip,
}) => {
  const [activeTab, setActiveTab] = useState<'shop' | 'stats'>('shop');

  const accuracy =
    profile.totalAttempts > 0
      ? Math.round((profile.totalSolved / profile.totalAttempts) * 100)
      : 100;

  const avgTimeSec =
    profile.recentTimesMs.length > 0
      ? (
          profile.recentTimesMs.reduce((a, b) => a + b, 0) /
          profile.recentTimesMs.length /
          1000
        ).toFixed(1)
      : '—';

  const fastestSec = profile.fastestTimeMs
    ? (profile.fastestTimeMs / 1000).toFixed(1)
    : '—';

  const isEquipped = (item: ShopItem) => {
    if (item.type === 'companion') return profile.equippedCompanion === item.id;
    if (item.type === 'theme') return profile.equippedTheme === item.id;
    return profile.equippedConfetti === item.id;
  };

  const handleAction = (item: ShopItem) => {
    const unlocked = profile.unlockedItems.includes(item.id);
    if (!unlocked && profile.coins < item.price) return;
    playCoinSound();
    onBuyOrEquip(item);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-md bg-slate-900 border border-white/15 rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('shop')}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'shop'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🛍️ חנות ההפתעות
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('stats')}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'stats'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🏆 השיאים שלי
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300 font-extrabold text-sm">
              <span>🪙</span>
              <span>{profile.coins}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'shop' ? (
            <>
              {(
                [
                  { type: 'companion', title: '🐾 חברים מלווים' },
                  { type: 'theme', title: '🎨 ערכות נושא וצבעים' },
                  { type: 'confetti', title: '🎉 אפקטים של חגיגה' },
                ] as const
              ).map((section) => (
                <div key={section.type} className="space-y-3">
                  <h3 className="text-sm font-extrabold text-slate-300 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {SHOP_ITEMS.filter((i) => i.type === section.type).map(
                      (item) => {
                        const unlocked = profile.unlockedItems.includes(item.id);
                        const equipped = isEquipped(item);
                        const canAfford = profile.coins >= item.price;

                        return (
                          <div
                            key={item.id}
                            className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                              equipped
                                ? 'bg-indigo-950/60 border-indigo-400/50 shadow-md shadow-indigo-500/10'
                                : 'bg-slate-800/60 border-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                                  item.previewClass
                                    ? `bg-gradient-to-br ${item.previewClass}`
                                    : 'bg-slate-700/80'
                                }`}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <div className="font-bold text-white flex items-center gap-2">
                                  <span>{item.name}</span>
                                  {equipped && (
                                    <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                                      פעיל
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleAction(item)}
                              disabled={!unlocked && !canAfford}
                              className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all active:scale-95 ${
                                equipped
                                  ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-400/30 cursor-default'
                                  : unlocked
                                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                  : canAfford
                                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                                  : 'bg-slate-800 text-slate-500 border border-white/5 cursor-not-allowed'
                              }`}
                            >
                              {equipped ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>נבחר</span>
                                </>
                              ) : unlocked ? (
                                <>
                                  <Sparkles className="w-4 h-4" />
                                  <span>בחירה</span>
                                </>
                              ) : (
                                <>
                                  {!canAfford && <Lock className="w-3.5 h-3.5" />}
                                  <span>🪙 {item.price}</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="space-y-5">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">שיא רצף כל הזמנים</div>
                    <div className="text-xl font-black text-white">
                      {profile.bestStreak} 🔥
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">המילה המהירה ביותר</div>
                    <div className="text-xl font-black text-white">
                      {fastestSec} ש׳
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">דיוק כללי</div>
                    <div className="text-xl font-black text-white">
                      {accuracy}%
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/70 border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">ממוצע זמן למילה</div>
                    <div className="text-xl font-black text-white">
                      {avgTimeSec} ש׳
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent History */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-extrabold text-slate-300">
                  ⏱️ המילים האחרונות שתרגלת
                </h3>
                {profile.history.length === 0 ? (
                  <p className="text-xs text-slate-500 bg-slate-800/40 rounded-2xl p-4 text-center">
                    עדיין לא תרגלת מילים — התחילי לשחק כדי לראות היסטוריה וזמנים!
                  </p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {profile.history.slice(0, 15).map((item) => (
                      <div
                        key={item.id}
                        className="bg-slate-800/50 border border-white/5 rounded-xl px-3.5 py-2.5 flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2.5">
                          <span>{item.isCorrect ? '✅' : '❌'}</span>
                          <span className="font-bold text-white">
                            {item.word}
                          </span>
                          {!item.isCorrect && (
                            <span className="text-xs text-rose-400 line-through">
                              ({item.typed})
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{(item.timeMs / 1000).toFixed(1)} ש׳</span>
                          {item.coinsEarned > 0 && (
                            <span className="text-amber-300 font-bold">
                              +{item.coinsEarned} 🪙
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
