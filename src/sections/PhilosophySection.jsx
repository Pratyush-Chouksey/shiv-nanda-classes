import React from 'react';
import { philosophyContent, shlokas } from '../data/content';
import DamaruSvg from '../components/svg/DamaruSvg';
import GhungrooPairSvg from '../components/svg/GhungrooPairSvg';
import PrabhamandalaMandala from '../components/svg/PrabhamandalaMandala';
import { Flame, Compass, Sparkles, Disc } from 'lucide-react';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-night-surface relative overflow-hidden border-t border-temple-gold/15">
      
      {/* Subtle background mandala motif */}
      <div className="absolute -top-20 -right-20 w-80 h-80 opacity-10 pointer-events-none">
        <PrabhamandalaMandala spin={false} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="font-devanagari text-saffron text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-2">
            {philosophyContent.devanagari}
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/25 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-vermilion" />
            <span>{philosophyContent.sectionTag}</span>
          </div>
          <h2 className="font-heading font-black text-fluid-title text-ivory tracking-tight">
            {philosophyContent.title}
          </h2>
          <p className="text-fluid-body text-ivory/80 font-light mt-4 leading-relaxed">
            {philosophyContent.description}
          </p>
        </div>

        {/* 4 Sacred Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pillar 1: Prabhamandala */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-temple-gold/25 hover:border-temple-gold/60 transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-midnight/80 border border-temple-gold/30 flex items-center justify-center text-saffron group-hover:scale-105 transition-transform shrink-0">
                <Disc className="w-8 h-8 text-saffron animate-spin-slow" />
              </div>
              <span className="font-devanagari text-sm font-bold text-temple-gold/80 px-2.5 py-1 rounded-md bg-midnight/60 border border-temple-gold/20">
                {philosophyContent.pillars[0].devanagari}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory mb-1">
              {philosophyContent.pillars[0].title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold mb-3">
              {philosophyContent.pillars[0].subTitle}
            </p>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              {philosophyContent.pillars[0].description}
            </p>
          </div>

          {/* Pillar 2: Damaru & Nadabrahma (Featuring Original DamaruSvg) */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-temple-gold/25 hover:border-temple-gold/60 transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-midnight/80 border border-temple-gold/30 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shrink-0">
                <DamaruSvg className="w-full h-full" showWaves={true} />
              </div>
              <span className="font-devanagari text-sm font-bold text-temple-gold/80 px-2.5 py-1 rounded-md bg-midnight/60 border border-temple-gold/20">
                {philosophyContent.pillars[1].devanagari}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory mb-1">
              {philosophyContent.pillars[1].title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold mb-3">
              {philosophyContent.pillars[1].subTitle}
            </p>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              {philosophyContent.pillars[1].description}
            </p>
          </div>

          {/* Pillar 3: Ghungroo & Tatkar (Featuring Original GhungrooPairSvg) */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-temple-gold/25 hover:border-temple-gold/60 transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-midnight/80 border border-temple-gold/30 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shrink-0">
                <GhungrooPairSvg className="w-full h-full" />
              </div>
              <span className="font-devanagari text-sm font-bold text-temple-gold/80 px-2.5 py-1 rounded-md bg-midnight/60 border border-temple-gold/20">
                {philosophyContent.pillars[2].devanagari}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory mb-1">
              {philosophyContent.pillars[2].title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold mb-3">
              {philosophyContent.pillars[2].subTitle}
            </p>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              {philosophyContent.pillars[2].description}
            </p>
          </div>

          {/* Pillar 4: Tandava & Lasya */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-temple-gold/25 hover:border-temple-gold/60 transition-all group relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-midnight/80 border border-temple-gold/30 flex items-center justify-center text-vermilion group-hover:scale-105 transition-transform shrink-0">
                <Compass className="w-8 h-8 text-vermilion" />
              </div>
              <span className="font-devanagari text-sm font-bold text-temple-gold/80 px-2.5 py-1 rounded-md bg-midnight/60 border border-temple-gold/20">
                {philosophyContent.pillars[3].devanagari}
              </span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory mb-1">
              {philosophyContent.pillars[3].title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-saffron font-semibold mb-3">
              {philosophyContent.pillars[3].subTitle}
            </p>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              {philosophyContent.pillars[3].description}
            </p>
          </div>

        </div>

        {/* Tandava Stotram Inscription Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-deep-violet via-midnight to-deep-violet border border-temple-gold/30 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-devanagari text-saffron uppercase tracking-widest font-bold">
              {shlokas.rhythmSeed.devanagariTitle}
            </span>
            <p className="font-devanagari text-base sm:text-xl text-temple-gold font-bold">
              {shlokas.rhythmSeed.sanskrit}
            </p>
            <p className="text-xs sm:text-sm text-ivory/85 italic font-display">
              "{shlokas.rhythmSeed.englishTranslation}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
