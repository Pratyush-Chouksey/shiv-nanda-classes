import React, { useState } from 'react';
import { mudrasContent } from '../data/content';
import MudraSvg from './svg/MudraSvg';
import { Sparkles, Info } from 'lucide-react';

export default function MudraExplorer() {
  const [activeMudraId, setActiveMudraId] = useState(mudrasContent.mudras[0].id);

  const selectedMudra = mudrasContent.mudras.find((m) => m.id === activeMudraId) || mudrasContent.mudras[0];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Mudra Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {mudrasContent.mudras.map((mudra) => {
          const isActive = mudra.id === activeMudraId;
          return (
            <button
              key={mudra.id}
              onClick={() => setActiveMudraId(mudra.id)}
              className={`touch-target px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-gradient-to-r from-temple-gold to-saffron text-midnight shadow-gold-glow scale-105'
                  : 'bg-deep-violet/70 border border-temple-gold/25 text-ivory hover:border-temple-gold/60'
              }`}
            >
              <span className="font-devanagari text-base">{mudra.devanagari}</span>
              <span>{mudra.name}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Mudra Deep Dive Card */}
      <div className="glass-panel rounded-2xl p-5 sm:p-8 border border-temple-gold/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Handcrafted Mudra Vector Display */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-midnight/80 border border-temple-gold/20 relative group">
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
          
          <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center relative">
            <MudraSvg id={selectedMudra.id} className="w-full h-full filter drop-shadow-[0_0_15px_rgba(232,176,74,0.35)]" />
          </div>

          <div className="mt-3 text-center">
            <span className="font-devanagari text-xl font-bold text-temple-gold block">
              {selectedMudra.devanagari} हस्त
            </span>
            <span className="text-xs uppercase tracking-widest text-saffron font-medium">
              Asamyuta Hasta (Single Hand Gesture)
            </span>
          </div>
        </div>

        {/* Right: Traditional Meaning & Kathak Shastra Application */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/15 border border-temple-gold/30 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kathak Mudra Shastra</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ivory">
              {selectedMudra.name} Mudra
            </h3>
            <p className="text-base sm:text-lg text-temple-gold font-medium mt-1">
              Meaning: {selectedMudra.meaning}
            </p>
          </div>

          {/* Shloka Verse from Abhinaya Darpana */}
          <div className="p-3.5 rounded-xl bg-deep-violet/90 border-l-4 border-vermilion">
            <span className="text-[11px] text-saffron uppercase tracking-widest font-bold block mb-1">
              Natyashastra Viniyoga Verse
            </span>
            <p className="font-devanagari text-sm sm:text-base text-ivory/90 leading-relaxed italic">
              {selectedMudra.verse}
            </p>
          </div>

          {/* Kathak Stage Usage Description */}
          <div className="space-y-1.5">
            <span className="text-xs text-ivory-muted uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-temple-gold" />
              <span>Expressive Usage in Choreography:</span>
            </span>
            <p className="text-sm text-ivory/85 leading-relaxed">
              {selectedMudra.usage}
            </p>
          </div>

          {/* Quick Mudra Thumbnails Row for Fast Navigation */}
          <div className="pt-2">
            <span className="text-[11px] text-ivory-muted/70 block mb-2 uppercase tracking-wider">
              Explore other Hastas:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {mudrasContent.mudras.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMudraId(m.id)}
                  className={`touch-target p-2 rounded-lg border flex flex-col items-center justify-center shrink-0 w-16 text-center transition-all ${
                    m.id === activeMudraId
                      ? 'border-temple-gold bg-temple-gold/20'
                      : 'border-white/10 bg-midnight/50 hover:border-temple-gold/40'
                  }`}
                  aria-label={`View ${m.name} mudra`}
                >
                  <span className="font-devanagari text-xs text-temple-gold font-bold">{m.devanagari}</span>
                  <span className="text-[9px] text-ivory-muted truncate w-full">{m.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
