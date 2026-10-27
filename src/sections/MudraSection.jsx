import React from 'react';
import { mudrasContent } from '../data/content';
import MudraExplorer from '../components/MudraExplorer';
import { Sparkles, Hand } from 'lucide-react';

export default function MudraSection() {
  return (
    <section id="mudras" className="py-20 sm:py-28 bg-night-surface relative overflow-hidden border-t border-temple-gold/15">
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-saffron text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-2">
            {mudrasContent.devanagari}
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/25 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Hand className="w-3.5 h-3.5 text-temple-gold" />
            <span>{mudrasContent.sectionTag}</span>
          </div>
          <h2 className="font-heading font-black text-fluid-title text-ivory tracking-tight">
            {mudrasContent.title}
          </h2>
          <p className="text-fluid-body text-ivory/80 font-light mt-4 leading-relaxed">
            {mudrasContent.description}
          </p>
        </div>

        {/* Interactive Mudra Explorer */}
        <MudraExplorer />

      </div>
    </section>
  );
}
