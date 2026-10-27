import React from 'react';

/**
 * SectionHeading Primitive — "Warm Classical Stage" redesign
 *
 * Structure:
 *  - optional small Devanagari eyebrow (accent only, tiny)
 *  - optional category tag (pill, antique-gold hairline)
 *  - Large editorial serif title (Playfair Display, normal case)
 *  - Thin antique-gold hairline rule (NOT gradient)
 *  - Subtitle body text
 *
 * `theme` prop: 'light' (default) | 'dark'
 *   - light: charcoal title, antique-gold rule — used on parchment bg
 *   - dark:  warm-white title, antique-gold rule — used on maroon bg
 */
export default function SectionHeading({
  eyebrow,
  tag,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center';
  const isDark   = theme === 'dark';

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {/* Devanagari eyebrow — small, accent only */}
      {eyebrow && (
        <span
          className={`font-devanagari text-xs sm:text-sm tracking-widest font-semibold block mb-2 ${
            isDark ? 'text-marigold/80' : 'text-saffron'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {/* Category tag — antique-gold hairline pill */}
      {tag && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-3 border ${
            isDark
              ? 'border-antique-gold/50 text-marigold bg-maroon-tint/40'
              : 'border-antique-gold/40 text-saffron bg-marigold/8'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          {/* Small ghungroo dot */}
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-marigold' : 'bg-saffron'}`} />
          <span>{tag}</span>
        </div>
      )}

      {/* Main serif title — editorial, normal case, NO small-caps */}
      <h2
        className={`font-display font-bold text-fluid-title leading-tight ${
          isDark ? 'text-warm-white' : 'text-maroon'
        }`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className={isDark ? 'text-marigold' : 'text-saffron'}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Thin antique-gold hairline — flat, NO gradient */}
      <div
        className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        <div className="w-10 sm:w-16 h-px bg-antique-gold/50" />
        {/* Ghungroo dot motif */}
        <svg
          viewBox="0 0 32 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-3 shrink-0"
          aria-hidden="true"
        >
          {/* Three ghungroo circles */}
          <circle cx="4"  cy="6" r="2.5" fill="#B8893A" />
          <circle cx="16" cy="6" r="3"   fill="#B8893A" />
          <circle cx="28" cy="6" r="2.5" fill="#B8893A" />
          {/* Connecting thread */}
          <line x1="6.5" y1="6" x2="13" y2="6" stroke="#B8893A" strokeWidth="0.8" />
          <line x1="19"  y1="6" x2="25.5" y2="6" stroke="#B8893A" strokeWidth="0.8" />
        </svg>
        <div className="w-10 sm:w-16 h-px bg-antique-gold/50" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-fluid-body leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${
            isDark ? 'text-warm-white/75' : 'text-charcoal/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
