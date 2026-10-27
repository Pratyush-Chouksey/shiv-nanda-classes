import React from 'react';

/**
 * SectionDivider — "Warm Classical Stage"
 *
 * Replaces the spinning cosmic mandala divider.
 * A simple antique-gold hairline with a Jaipur-style ghungroo / lotus bud motif.
 * Used between sections — MAXIMUM 3 times per page.
 *
 * `theme`: 'light' | 'dark' — controls line colour on different bg
 */
export default function MandalaSectionDivider({ className = '', theme = 'light' }) {
  const lineColor = theme === 'dark' ? 'rgba(184,137,58,0.30)' : 'rgba(184,137,58,0.40)';

  return (
    <div
      className={`relative w-full py-5 flex items-center justify-center pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Left hairline */}
      <div className="flex-1 h-px" style={{ backgroundColor: lineColor }} />

      {/* Centre ornament: simple Jaipur lotus bud, flat antique gold */}
      <div className="mx-4 shrink-0">
        <svg
          viewBox="0 0 48 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-6"
          aria-hidden="true"
        >
          {/* Lotus bud petals */}
          <path
            d="M24 20 C20 14 18 8 24 4 C30 8 28 14 24 20Z"
            fill="rgba(184,137,58,0.15)"
            stroke="#B8893A"
            strokeWidth="1"
          />
          <path
            d="M24 20 C17 16 14 10 18 6 C20 8 21 14 24 20Z"
            fill="rgba(184,137,58,0.10)"
            stroke="#B8893A"
            strokeWidth="0.75"
          />
          <path
            d="M24 20 C31 16 34 10 30 6 C28 8 27 14 24 20Z"
            fill="rgba(184,137,58,0.10)"
            stroke="#B8893A"
            strokeWidth="0.75"
          />
          {/* Stem */}
          <line x1="24" y1="20" x2="24" y2="23" stroke="#B8893A" strokeWidth="1" />
          {/* Ghungroo dots on each side */}
          <circle cx="8"  cy="12" r="2" fill="#B8893A" opacity="0.7" />
          <circle cx="40" cy="12" r="2" fill="#B8893A" opacity="0.7" />
          {/* Connecting threads */}
          <line x1="10" y1="12" x2="17" y2="12" stroke="#B8893A" strokeWidth="0.75" opacity="0.6" />
          <line x1="31" y1="12" x2="38" y2="12" stroke="#B8893A" strokeWidth="0.75" opacity="0.6" />
        </svg>
      </div>

      {/* Right hairline */}
      <div className="flex-1 h-px" style={{ backgroundColor: lineColor }} />
    </div>
  );
}
