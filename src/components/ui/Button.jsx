import React from 'react';
import { triggerGhungrooHaptic } from '../../utils/haptics';
import Magnetic from './Magnetic';

/**
 * Button Primitive — "Warm Classical Stage" redesign
 *
 * Variants:
 * - 'primary'   : Marigold fill, charcoal text (light sections)
 * - 'primary-dark': Marigold fill on dark (maroon) background
 * - 'secondary' : Antique-gold outlined, charcoal text (light bg)
 * - 'secondary-dark': Antique-gold outlined, warm-white text (dark bg)
 * - 'sindoor'   : Sindoor-red fill for energy / urgent CTAs
 * - 'ghost'     : Text-only link style
 *
 * NO gradient text, NO neon glow shadows.
 * Touch targets ≥ 44px enforced.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  href,
  disabled = false,
  onClick,
  type = 'button',
  magnetic = true,
  ...props
}) {
  const base =
    'touch-target inline-flex items-center justify-center font-semibold tracking-wide rounded-full transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-antique-gold/60 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  const sizes = {
    sm: 'text-xs px-5 py-2.5 min-h-[44px] min-w-[44px] gap-1.5',
    md: 'text-sm px-7 py-3 min-h-[44px] min-w-[44px] gap-2',
    lg: 'text-base px-9 py-3.5 min-h-[48px] min-w-[48px] gap-2.5',
  };

  const variants = {
    // Light-section primary: filled marigold
    primary:
      'bg-marigold text-maroon-deep font-bold hover:bg-saffron hover:shadow-warm-md border border-marigold',
    // Dark-section primary: slightly brighter marigold so it reads on maroon
    'primary-dark':
      'bg-marigold text-maroon-deep font-bold hover:brightness-110 border border-marigold/80',
    // Light-section secondary: outlined antique-gold
    secondary:
      'border-2 border-antique-gold text-charcoal hover:bg-antique-gold hover:text-maroon-deep bg-transparent',
    // Dark-section secondary: outlined warm-white/antique-gold
    'secondary-dark':
      'border-2 border-antique-gold text-warm-white hover:bg-antique-gold hover:text-maroon-deep bg-transparent',
    // Sindoor red — urgent / energy
    sindoor:
      'bg-sindoor text-white font-bold hover:brightness-110 border border-sindoor',
    // Ghost / text link
    ghost:
      'text-charcoal hover:text-marigold border border-transparent hover:border-antique-gold/40 bg-transparent',
    'ghost-dark':
      'text-warm-white hover:text-marigold border border-transparent hover:border-antique-gold/40 bg-transparent',
    // ── Legacy aliases so existing code doesn't break ──
    vermilion:
      'bg-sindoor text-white font-bold hover:brightness-110 border border-sindoor',
  };

  const classes = `${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left'  && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  const handleClick = (e) => {
    triggerGhungrooHaptic(10);
    if (onClick) onClick(e);
  };

  const el = href ? (
    <a href={href} className={classes} onClick={handleClick} {...props}>
      {content}
    </a>
  ) : (
    <button type={type} className={classes} disabled={disabled} onClick={handleClick} {...props}>
      {content}
    </button>
  );

  if (magnetic && !disabled) return <Magnetic>{el}</Magnetic>;
  return el;
}
