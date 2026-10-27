import React from 'react';

/**
 * Original Handcrafted Damaru SVG
 * Sacred hourglass-shaped drum of Lord Shiva / Nataraja
 * Features:
 * - Two conical resonating cups joined at the waist (Bindu)
 * - Brass rims and parchment drum skin
 * - Tightened diagonal leather ropes (Woven rhythmic tuning)
 * - Tied waist cord with dual striker beads (Striking the heads for Nadabrahma)
 * - Rhythmic resonance waves
 */
export default function DamaruSvg({ className = "w-16 h-16", showWaves = true }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Damaru drum of Nataraja"
      role="img"
    >
      <defs>
        <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A180E" />
          <stop offset="50%" stopColor="#872E1B" />
          <stop offset="100%" stopColor="#300F0A" />
        </linearGradient>

        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F8E2A7" />
          <stop offset="50%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#B38128" />
        </linearGradient>

        <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="100%" stopColor="#DFC391" />
        </linearGradient>
      </defs>

      {/* Rhythmic Soundwaves (Nadabrahma pulse) */}
      {showWaves && (
        <g opacity="0.6">
          <path d="M 10 40 Q 5 60 10 80" stroke="#E8B04A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M 110 40 Q 115 60 110 80" stroke="#E8B04A" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M 4 30 Q -4 60 4 90" stroke="#FF8A1F" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" opacity="0.4" />
          <path d="M 116 30 Q 124 60 116 90" stroke="#FF8A1F" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 4" opacity="0.4" />
        </g>
      )}

      {/* DAMARU BODY */}
      {/* Top Conical Cup */}
      <path
        d="M 28 26 L 92 26 L 66 60 L 54 60 Z"
        fill="url(#woodGrad)"
        stroke="#E8B04A"
        strokeWidth="1.2"
      />

      {/* Bottom Conical Cup */}
      <path
        d="M 54 60 L 66 60 L 92 94 L 28 94 Z"
        fill="url(#woodGrad)"
        stroke="#E8B04A"
        strokeWidth="1.2"
      />

      {/* Top Drum Head (Skin & Rim) */}
      <ellipse cx="60" cy="26" rx="32" ry="8" fill="url(#skinGrad)" stroke="url(#goldRim)" strokeWidth="2.5" />
      <ellipse cx="60" cy="26" rx="26" ry="5.5" stroke="#9A381F" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <circle cx="60" cy="26" r="3" fill="#D9381E" />

      {/* Bottom Drum Head (Skin & Rim) */}
      <ellipse cx="60" cy="94" rx="32" ry="8" fill="url(#skinGrad)" stroke="url(#goldRim)" strokeWidth="2.5" />
      <ellipse cx="60" cy="94" rx="26" ry="5.5" stroke="#9A381F" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <circle cx="60" cy="94" r="3" fill="#D9381E" />

      {/* Diagonal Leather Tension Laces (Woven Pattern) */}
      <path
        d="M 28 26 L 60 94 L 92 26 L 60 60 L 28 94 L 60 26 L 92 94"
        stroke="#F6EFDF"
        strokeWidth="1.2"
        strokeOpacity="0.85"
      />

      {/* Central Waist Band (Kankan) */}
      <rect x="52" y="57" width="16" height="6" rx="3" fill="#E8B04A" stroke="#FFF2D6" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="2.5" fill="#D9381E" />

      {/* Striker Cords & Beads (Pointers that rhythmically hit the skin) */}
      {/* Left Cord & Brass Striker Bead */}
      <path d="M 54 60 Q 32 68 22 45" stroke="#E8B04A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="45" r="4.5" fill="#D9381E" stroke="#FF8A1F" strokeWidth="1.2" />

      {/* Right Cord & Brass Striker Bead */}
      <path d="M 66 60 Q 88 52 98 75" stroke="#E8B04A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="98" cy="75" r="4.5" fill="#D9381E" stroke="#FF8A1F" strokeWidth="1.2" />
    </svg>
  );
}
