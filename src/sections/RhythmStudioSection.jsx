import React from 'react';
import { taalExplorerContent } from '../data/content';
import TaalMetronome from '../components/TaalMetronome';
import { Sparkles, Music2, Activity, Disc } from 'lucide-react';

export default function RhythmStudioSection() {
  return (
    <section id="taal" className="py-20 sm:py-28 bg-midnight relative overflow-hidden border-t border-temple-gold/15">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vermilion/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-saffron text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-2">
            {taalExplorerContent.devanagari}
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/25 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Music2 className="w-3.5 h-3.5 text-saffron" />
            <span>{taalExplorerContent.sectionTag}</span>
          </div>
          <h2 className="font-heading font-black text-fluid-title text-ivory tracking-tight">
            {taalExplorerContent.title}
          </h2>
          <p className="text-fluid-body text-ivory/80 font-light mt-4 leading-relaxed">
            {taalExplorerContent.description}
          </p>
        </div>

        {/* Interactive Rhythm Metronome Player */}
        <TaalMetronome />

        {/* 3 Conceptual Rhythm Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-deep-violet/40 border border-temple-gold/15 text-center">
            <div className="w-10 h-10 rounded-full bg-vermilion/20 text-vermilion mx-auto flex items-center justify-center font-bold text-sm mb-3">
              X
            </div>
            <h3 className="font-heading font-bold text-base text-ivory mb-1">
              The Sam (सम)
            </h3>
            <p className="text-xs text-ivory-muted leading-relaxed">
              The first and most ecstatic beat of the cycle. All rhythmic journeys, breathless pirouettes, and intricate tihais resolve gloriously upon the Sam.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-deep-violet/40 border border-temple-gold/15 text-center">
            <div className="w-10 h-10 rounded-full bg-temple-gold/20 text-temple-gold mx-auto flex items-center justify-center font-bold text-sm mb-3">
              प
            </div>
            <h3 className="font-heading font-bold text-base text-ivory mb-1">
              Padant (पड़ंत)
            </h3>
            <p className="text-xs text-ivory-muted leading-relaxed">
              Before the feet strike the floor, the voice speaks the rhythm. Disciples recite the rhythmic bols with clapping and waving hands to internalize the metric cycle.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-deep-violet/40 border border-temple-gold/15 text-center">
            <div className="w-10 h-10 rounded-full bg-saffron/20 text-saffron mx-auto flex items-center justify-center font-bold text-sm mb-3">
              लय
            </div>
            <h3 className="font-heading font-bold text-base text-ivory mb-1">
              Layakari (लयकारी)
            </h3>
            <p className="text-xs text-ivory-muted leading-relaxed">
              The mathematical dance with time: Vilambit (slow, majestic), Madhya (medium, graceful), and Drut (fast, tempestuous speed) executed with effortless poise.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
