import React from 'react';

/**
 * Card Primitive — "Warm Classical Stage" redesign
 *
 * `theme`: 'light' (default) | 'dark'
 *   - light: white card on parchment bg
 *   - dark : semi-transparent maroon card on maroon bg
 *
 * `hover`: subtle lift on hover
 * `glow`/`glowColor`: legacy props — now just strengthen the border (no neon)
 */
export default function Card({
  children,
  className = '',
  hover = false,
  glow = false,
  glowColor = 'gold',
  theme = 'light',
  onClick,
  ...props
}) {
  const base = 'rounded-xl border overflow-hidden transition-all duration-200';

  const themeStyles = {
    light: 'bg-white border-antique-gold/25 shadow-card',
    dark:  'bg-maroon-tint/40 border-antique-gold/30',
  };

  const hoverStyles = hover
    ? theme === 'dark'
      ? 'hover:shadow-warm-lg hover:-translate-y-1 cursor-pointer'
      : 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer'
    : '';

  // Legacy glow → just a stronger border, no box-shadow
  const glowStyles = glow
    ? glowColor === 'vermilion' || glowColor === 'sindoor'
      ? 'border-sindoor/60'
      : 'border-antique-gold/60'
    : '';

  return (
    <div
      className={`${base} ${themeStyles[theme] ?? themeStyles.light} ${hoverStyles} ${glowStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
