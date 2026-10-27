// Hebrew Speech Synthesis & Web Audio API Sound Effects

let cachedHebrewVoice: SpeechSynthesisVoice | null = null;

function findHebrewVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }
  if (cachedHebrewVoice) return cachedHebrewVoice;

  const voices = window.speechSynthesis.getVoices();
  // Prefer high-quality Hebrew voices (e.g. Carmit on iOS/macOS, Google Hebrew on Android/Chrome)
  const heVoices = voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith('he') ||
      v.lang.toLowerCase().startsWith('iw')
  );

  if (heVoices.length > 0) {
    cachedHebrewVoice =
      heVoices.find((v) => v.name.includes('Carmit')) ||
      heVoices.find((v) => v.localService) ||
      heVoices[0];
  }
  return cachedHebrewVoice;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedHebrewVoice = null;
    findHebrewVoice();
  };
}

export function speakHebrew(
  text: string,
  options?: { slow?: boolean; onEnd?: () => void }
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    options?.onEnd?.();
    return false;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL';
    const voice = findHebrewVoice();
    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = options?.slow ? 0.65 : 0.92;
    utterance.pitch = 1.02;

    if (options?.onEnd) {
      utterance.onend = () => options.onEnd?.();
      utterance.onerror = () => options.onEnd?.();
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    options?.onEnd?.();
    return false;
  }
}

// Web Audio API Synthesizer for Gamified Sound Effects
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (Ctx) {
      audioCtx = new Ctx();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playKeyTap() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(520, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.035);

  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.04);
}

export function playSuccessSound(streak: number) {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Higher / richer arpeggio for higher streaks
  const baseNotes =
    streak >= 5
      ? [523.25, 659.25, 783.99, 1046.5, 1318.5] // C5 E5 G5 C6 E6
      : [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6

  baseNotes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    const startTime = ctx.currentTime + idx * 0.075;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(0.16, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.3);
  });
}

export function playMistakeSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [311.13, 277.18]; // D#4 -> C#4 gentle descending interval
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const startTime = ctx.currentTime + idx * 0.14;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.11, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.2);
  });
}

export function playCoinSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [987.77, 1318.51]; // B5 -> E6 classic coin ding
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const startTime = ctx.currentTime + idx * 0.07;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.12, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.26);
  });
}
