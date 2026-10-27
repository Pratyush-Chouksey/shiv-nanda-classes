import React, { useState, useEffect, useRef } from 'react';
import { taalExplorerContent } from '../data/content';
import { playBolSound } from '../utils/audioChime';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function TaalMetronome() {
  const [selectedTaalIndex, setSelectedTaalIndex] = useState(0);
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(72); // Default Madhya Laya
  const [soundEnabled, setSoundEnabled] = useState(true);

  const activeTaal = taalExplorerContent.taals[selectedTaalIndex];
  const timerRef = useRef(null);

  // Interval timer for playback
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = (60 / bpm) * 1000;
      timerRef.current = setInterval(() => {
        setCurrentBeatIndex((prev) => {
          const next = (prev + 1) % activeTaal.beats.length;
          const currentBeat = activeTaal.beats[next];
          if (soundEnabled) {
            if (currentBeat.type === 'sam') {
              playBolSound('sam');
            } else if (currentBeat.bol === 'धिं' || currentBeat.bol === 'धी') {
              playBolSound('dhin');
            } else if (currentBeat.bol === 'धा') {
              playBolSound('dha');
            } else {
              playBolSound('ta');
            }
          }
          return next;
        });
      }, intervalMs);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, bpm, activeTaal, soundEnabled]);

  const handleSelectTaal = (idx) => {
    setIsPlaying(false);
    setSelectedTaalIndex(idx);
    setCurrentBeatIndex(0);
  };

  const handleTapBeat = (idx) => {
    setCurrentBeatIndex(idx);
    const beat = activeTaal.beats[idx];
    if (soundEnabled) {
      if (beat.type === 'sam') playBolSound('sam');
      else if (beat.bol === 'धिं' || beat.bol === 'धी') playBolSound('dhin');
      else if (beat.bol === 'धा') playBolSound('dha');
      else playBolSound('ta');
    }
  };

  const togglePlay = () => {
    if (!isPlaying && soundEnabled) {
      // Trigger first beat sound on user play interaction
      const currentBeat = activeTaal.beats[currentBeatIndex];
      if (currentBeat.type === 'sam') playBolSound('sam');
      else playBolSound('dha');
    }
    setIsPlaying(!isPlaying);
  };

  const resetCycle = () => {
    setIsPlaying(false);
    setCurrentBeatIndex(0);
  };

  const currentBeatObj = activeTaal.beats[currentBeatIndex];

  return (
    <div className="glass-panel rounded-2xl p-4 sm:p-7 border border-temple-gold/30 shadow-xl max-w-4xl mx-auto">
      {/* Taal Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6" role="tablist">
        {taalExplorerContent.taals.map((taal, idx) => (
          <button
            key={taal.id}
            role="tab"
            aria-selected={selectedTaalIndex === idx}
            onClick={() => handleSelectTaal(idx)}
            className={`touch-target px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
              selectedTaalIndex === idx
                ? 'bg-temple-gold text-midnight shadow-gold-glow scale-105'
                : 'bg-deep-violet/70 border border-temple-gold/20 text-ivory hover:border-temple-gold/60'
            }`}
          >
            <span className="font-devanagari mr-1 text-sm">{taal.devanagari}</span>
            <span>({taal.matras} Matras)</span>
          </button>
        ))}
      </div>

      {/* Current Beat Hero Highlight Display */}
      <div className="text-center py-5 px-3 rounded-xl bg-midnight/70 border border-temple-gold/25 mb-6 relative overflow-hidden">
        <div className="absolute top-2 right-3 flex items-center gap-1.5 text-[11px] text-temple-gold/80 font-mono">
          <span>{activeTaal.structure}</span>
          <span>•</span>
          <span>{activeTaal.taliKhali}</span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-[11px] tracking-widest text-saffron uppercase font-medium">
            Matra {currentBeatObj.num} of {activeTaal.matras} • {currentBeatObj.desc}
          </span>

          <div className="flex items-center gap-3">
            <span
              className={`font-devanagari text-4xl sm:text-6xl font-bold transition-all duration-150 ${
                currentBeatObj.type === 'sam'
                  ? 'text-vermilion scale-110 drop-shadow-[0_0_15px_rgba(217,56,30,0.6)]'
                  : currentBeatObj.type === 'khali'
                  ? 'text-blue-300'
                  : 'text-temple-gold'
              }`}
            >
              {currentBeatObj.bol}
            </span>
            <span className="font-heading text-2xl sm:text-3xl text-ivory/90 font-semibold tracking-wide">
              ({currentBeatObj.english})
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                currentBeatObj.type === 'sam'
                  ? 'bg-vermilion text-white shadow-sm'
                  : currentBeatObj.type === 'khali'
                  ? 'bg-blue-900/60 text-blue-200 border border-blue-400/40'
                  : 'bg-temple-gold/20 text-temple-gold border border-temple-gold/40'
              }`}
            >
              {currentBeatObj.sign === 'X' ? 'SAM (Clap 1)' : currentBeatObj.sign === '0' ? 'KHALI (Wave)' : `TALI ${currentBeatObj.sign}`}
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Matra Beads */}
      <div
        className={`grid gap-2 mb-6 ${
          activeTaal.matras === 16
            ? 'grid-cols-4 sm:grid-cols-8 md:grid-cols-16'
            : activeTaal.matras === 10
            ? 'grid-cols-5 sm:grid-cols-10'
            : 'grid-cols-6'
        }`}
      >
        {activeTaal.beats.map((beat, idx) => {
          const isCurrent = currentBeatIndex === idx;
          const isSam = beat.type === 'sam';
          const isKhali = beat.type === 'khali';

          return (
            <button
              key={idx}
              onClick={() => handleTapBeat(idx)}
              className={`touch-target flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                isCurrent
                  ? isSam
                    ? 'bg-vermilion text-white border-vermilion shadow-vermilion-glow scale-105'
                    : isKhali
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md scale-105'
                    : 'bg-temple-gold text-midnight border-temple-gold shadow-gold-glow scale-105'
                  : 'bg-midnight/60 border-temple-gold/20 hover:border-temple-gold/60 text-ivory'
              }`}
              title={`${beat.bol} (${beat.english}) - Matra ${beat.num}`}
            >
              <span className="text-[10px] font-mono opacity-60 leading-none mb-0.5">{beat.num}</span>
              <span className="font-devanagari text-xs sm:text-sm font-bold leading-tight">{beat.bol}</span>
              <span className="text-[9px] font-medium opacity-80 leading-tight">{beat.sign}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-temple-gold/15">
        
        {/* Play/Pause & Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className={`touch-target px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all ${
              isPlaying
                ? 'bg-vermilion text-white hover:brightness-110 shadow-vermilion-glow'
                : 'bg-gradient-to-r from-temple-gold to-saffron text-midnight hover:brightness-110 shadow-gold-glow'
            }`}
            aria-label={isPlaying ? "Pause rhythm metronome" : "Play rhythm metronome"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-midnight" />}
            <span>{isPlaying ? 'Pause Taal' : 'Play Taal'}</span>
          </button>

          <button
            onClick={resetCycle}
            className="touch-target p-2.5 rounded-full border border-temple-gold/30 hover:border-temple-gold text-ivory hover:text-temple-gold transition-colors"
            title="Reset to Sam"
            aria-label="Reset to Sam"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`touch-target p-2.5 rounded-full border transition-colors ${
              soundEnabled
                ? 'border-temple-gold/40 text-temple-gold bg-temple-gold/10'
                : 'border-white/20 text-ivory-muted'
            }`}
            title={soundEnabled ? "Mute tabla sound" : "Enable tabla sound"}
            aria-label={soundEnabled ? "Mute tabla sound" : "Enable tabla sound"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        {/* Laya / Tempo Slider */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="bpm-slider" className="text-xs text-ivory-muted whitespace-nowrap">
            Laya ({bpm} BPM - {bpm <= 65 ? 'Vilambit' : bpm <= 110 ? 'Madhya' : 'Drut'}):
          </label>
          <input
            id="bpm-slider"
            type="range"
            min="48"
            max="140"
            step="4"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-32 sm:w-40 accent-temple-gold cursor-pointer"
          />
        </div>

      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-ivory-muted/70 text-center">
        <Sparkles className="w-3 h-3 text-temple-gold" />
        <span>Tap any matra box above or press Play to experience the live acoustic bol pulse.</span>
      </div>
    </div>
  );
}
