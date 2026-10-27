/**
 * Web Audio API synthesized Indian classical acoustic percussion
 * Simulates Tabla Dayen (crisp pitch), Bayan (bass resonance), and Ghungroo bells.
 * Zero external audio files, 100% instant and lightweight.
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a percussion bol sound
 * @param {'sam'|'dha'|'dhin'|'ta'|'tin'|'ghungroo'} type 
 */
export function playBolSound(type = 'dha') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'sam' || type === 'dha' || type === 'dhin') {
      // Bass strike (Bayan) + Treble stroke (Dayan)
      // Bayan Bass
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = 'sine';
      oscBass.frequency.setValueAtTime(140, now);
      oscBass.frequency.exponentialRampToValueAtTime(70, now + 0.25);

      gainBass.gain.setValueAtTime(0.5, now);
      gainBass.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      oscBass.connect(gainBass);
      gainBass.connect(ctx.destination);
      oscBass.start(now);
      oscBass.stop(now + 0.3);

      // Dayan Ring
      const oscDayan = ctx.createOscillator();
      const gainDayan = ctx.createGain();
      oscDayan.type = 'triangle';
      oscDayan.frequency.setValueAtTime(type === 'sam' ? 360 : 320, now);
      oscDayan.frequency.exponentialRampToValueAtTime(type === 'sam' ? 340 : 300, now + 0.15);

      gainDayan.gain.setValueAtTime(0.35, now);
      gainDayan.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      oscDayan.connect(gainDayan);
      gainDayan.connect(ctx.destination);
      oscDayan.start(now);
      oscDayan.stop(now + 0.22);
    } else if (type === 'ta' || type === 'ti' || type === 'tin' || type === 'khali') {
      // Dayan sharp stroke (Na / Tin / Ta)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } else {
      // Ghungroo brass chime
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(2200, now);
      osc1.frequency.exponentialRampToValueAtTime(1900, now + 0.1);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(2850, now);
      osc2.frequency.exponentialRampToValueAtTime(2400, now + 0.1);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.16);
      osc2.stop(now + 0.16);
    }
  } catch {
    // Graceful fallback if audio is blocked by user policy
  }
}

/**
 * Soft tabla-like tick via Web Audio API for interactive Taal Wheel
 * Very short synthesized sound with minimal decay.
 * @param {boolean} isSam - whether the beat is beat 1 (Sam)
 */
export function playSoftTablaTick(isSam = false) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (isSam) {
      // Resonant Sam strike (soft bass + treble ring)
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = 'sine';
      oscBass.frequency.setValueAtTime(130, now);
      oscBass.frequency.exponentialRampToValueAtTime(65, now + 0.14);

      gainBass.gain.setValueAtTime(0.28, now);
      gainBass.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      oscBass.connect(gainBass);
      gainBass.connect(ctx.destination);
      oscBass.start(now);
      oscBass.stop(now + 0.16);

      // Treble chime
      const oscTreble = ctx.createOscillator();
      const gainTreble = ctx.createGain();
      oscTreble.type = 'triangle';
      oscTreble.frequency.setValueAtTime(340, now);
      oscTreble.frequency.exponentialRampToValueAtTime(300, now + 0.1);

      gainTreble.gain.setValueAtTime(0.2, now);
      gainTreble.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      oscTreble.connect(gainTreble);
      gainTreble.connect(ctx.destination);
      oscTreble.start(now);
      oscTreble.stop(now + 0.13);
    } else {
      // Soft Dayan stroke (subtle wooden tick)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.07);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  } catch {
    // Graceful silence if audio permissions blocked
  }
}

