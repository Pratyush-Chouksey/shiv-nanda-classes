import React from 'react';

/**
 * TaalWheel — Flat "Warm Classical Stage" Edition
 *
 * An elegant, flat maroon and gold circular diagram depicting Teentaal:
 * - 16 beats (matras) divided into 4 vibhags (4 + 4 + 4 + 4)
 * - Sam (Matra 1) marked in sindoor red / maroon
 * - Khali (Matra 9) marked in antique gold
 * - No audio features, no sound synthesizers, no glowing halos
 */
export default function TaalWheel() {
  const vibhags = [
    { title: 'Vibhag 1 (Taali 1 - Sam)', sign: 'X', bols: ['धा', 'धिं', 'धिं', 'धा'], nums: [1, 2, 3, 4] },
    { title: 'Vibhag 2 (Taali 2)', sign: '2', bols: ['धा', 'धिं', 'धिं', 'धा'], nums: [5, 6, 7, 8] },
    { title: 'Vibhag 3 (Khali)', sign: '0', bols: ['धा', 'तिं', 'तिं', 'ता'], nums: [9, 10, 11, 12] },
    { title: 'Vibhag 4 (Taali 3)', sign: '3', bols: ['ता', 'धिं', 'धिं', 'धा'], nums: [13, 14, 15, 16] },
  ];

  return (
    <div className="mt-16 sm:mt-24 max-w-3xl mx-auto px-4 text-center">
      
      {/* Header */}
      <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-1">
        ॥ त्रिताल चक्र • १६ मात्रा ॥
      </span>
      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-maroon mb-2">
        The Rhythmic Architecture: Teen Taal
      </h3>
      <p className="text-xs sm:text-sm text-charcoal/80 max-w-lg mx-auto font-sans leading-relaxed mb-8">
        Every Jaipur Gharana bandish and pirouette is anchored in the mathematical symmetry of Teen Taal — 16 beats organized into three claps (Taali) and one wave (Khali).
      </p>

      {/* Flat Circle Diagram */}
      <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center my-6">
        
        {/* Outer antique gold hairline circle */}
        <div className="absolute inset-0 rounded-full border border-antique-gold/50" />
        
        {/* Inner concentric ring */}
        <div className="absolute inset-6 rounded-full border border-antique-gold/25" />

        {/* Crosshair division lines */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-antique-gold/30 -translate-y-1/2" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-antique-gold/30 -translate-x-1/2" />

        {/* Center Hub */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-white border border-antique-gold/70 shadow-xs flex flex-col items-center justify-center p-2">
          <span className="font-devanagari text-xs font-bold text-maroon">१६ मात्रा</span>
          <span className="font-serif text-[11px] font-bold text-charcoal tracking-wide">Teen Taal</span>
          <span className="text-[9px] uppercase tracking-wider text-antique-bronze font-bold">४+४+४+४</span>
        </div>

        {/* 4 Cardinal Markers */}
        {/* Top: Sam (1) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
          <span className="inline-block px-2 py-0.5 rounded-full bg-sindoor text-white text-[10px] font-bold tracking-wider">
            SAM · X
          </span>
          <div className="font-devanagari text-xs font-bold text-maroon mt-0.5">१. धा</div>
        </div>

        {/* Right: Taali 2 (5) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-center">
          <span className="inline-block px-1.5 py-0.5 rounded bg-maroon/10 text-maroon text-[10px] font-bold">
            २
          </span>
          <div className="font-devanagari text-xs font-bold text-charcoal mt-0.5">५. धा</div>
        </div>

        {/* Bottom: Khali (9) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
          <span className="inline-block px-2 py-0.5 rounded-full bg-antique-gold/20 text-maroon text-[10px] font-bold tracking-wider">
            KHALI · ०
          </span>
          <div className="font-devanagari text-xs font-bold text-maroon mt-0.5">९. धा</div>
        </div>

        {/* Left: Taali 3 (13) */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-center">
          <span className="inline-block px-1.5 py-0.5 rounded bg-maroon/10 text-maroon text-[10px] font-bold">
            ३
          </span>
          <div className="font-devanagari text-xs font-bold text-charcoal mt-0.5">१३. ता</div>
        </div>

      </div>

      {/* Vibhag bols breakdown in clean 4-cell row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-left mt-8">
        {vibhags.map((v, idx) => (
          <div
            key={idx}
            className="p-3 rounded-lg bg-white border border-antique-gold/30 shadow-xs"
          >
            <div className="flex items-center justify-between text-[11px] font-bold text-maroon mb-1">
              <span>{v.title}</span>
              <span className="px-1.5 py-0.2 rounded bg-antique-gold/15 text-[10px] text-antique-gold">
                {v.sign}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-1 border-t border-antique-gold/15 font-devanagari text-xs text-charcoal font-medium">
              {v.bols.map((b, bi) => (
                <span key={bi} className={v.nums[bi] === 1 ? 'font-bold text-sindoor' : ''}>
                  {b}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-charcoal-muted pt-0.5">
              {v.nums.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
