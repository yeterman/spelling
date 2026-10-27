// Hebrew Neural Audio Player + SpeechSynthesis Fallback & Web Audio API Sound Effects

let cachedHebrewVoice: SpeechSynthesisVoice | null = null;
let currentAudioElement: HTMLAudioElement | null = null;

function findHebrewVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }
  if (cachedHebrewVoice) return cachedHebrewVoice;

  const voices = window.speechSynthesis.getVoices();
  const heVoices = voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith('he') ||
      v.lang.toLowerCase().startsWith('iw')
  );

  if (heVoices.length > 0) {
    // Prefer natural/neural voices if present on device, otherwise Carmit / local voice
    cachedHebrewVoice =
      heVoices.find((v) => v.name.toLowerCase().includes('natural')) ||
      heVoices.find((v) => v.name.toLowerCase().includes('hila')) ||
      heVoices.find((v) => v.name.toLowerCase().includes('avri')) ||
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

function stopCurrentPlayback() {
  if (currentAudioElement) {
    try {
      currentAudioElement.pause();
      currentAudioElement.currentTime = 0;
    } catch {
      // ignore
    }
    currentAudioElement = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }
}

export function speakHebrew(
  text: string,
  options?: {
    slow?: boolean;
    audioUrl?: string;
    onEnd?: () => void;
  }
): boolean {
  stopCurrentPlayback();

  // Warm up audio context so mobile speaker amplifier doesn't clip the first syllable
  warmUpAudioAmplifier();

  // 1. Prefer high-clarity Neural TTS MP3 if audioUrl is provided
  if (options?.audioUrl && typeof Audio !== 'undefined') {
    try {
      const audio = new Audio(options.audioUrl);
      currentAudioElement = audio;
      const slow = Boolean(options.slow);
      audio.playbackRate = slow ? 0.72 : 1.0;
      if ('preservesPitch' in audio) {
        (audio as HTMLAudioElement & { preservesPitch: boolean }).preservesPitch = true;
      }

      audio.onended = () => {
        if (currentAudioElement === audio) currentAudioElement = null;
        options.onEnd?.();
      };

      audio.onerror = () => {
        if (currentAudioElement === audio) currentAudioElement = null;
        // Fallback to Web Speech API if MP3 fails to load
        speakWithWebSpeech(text, options);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (currentAudioElement === audio) currentAudioElement = null;
          speakWithWebSpeech(text, options);
        });
      }
      return true;
    } catch {
      // Fallback to Web Speech API
    }
  }

  return speakWithWebSpeech(text, options);
}

function speakWithWebSpeech(
  text: string,
  options?: { slow?: boolean; onEnd?: () => void }
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    options?.onEnd?.();
    return false;
  }

  try {
    const cleanText = text.normalize('NFC').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'he-IL';
    const voice = findHebrewVoice();
    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = options?.slow ? 0.6 : 0.84;
    utterance.pitch = 1.0;

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

function warmUpAudioAmplifier() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.02);
  } catch {
    // ignore
  }
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
  gain.gain.exponentialRampToValueAtTime(0.001, startTimePlus(ctx, 0.035));

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(startTimePlus(ctx, 0.04));
}

function startTimePlus(ctx: AudioContext, delta: number) {
  return ctx.currentTime + delta;
}

export function playSuccessSound(streak: number) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const baseNotes =
    streak >= 5
      ? [523.25, 659.25, 783.99, 1046.5, 1318.5]
      : [523.25, 659.25, 783.99, 1046.5];

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

  const notes = [311.13, 277.18];
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

  const notes = [987.77, 1318.51];
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
