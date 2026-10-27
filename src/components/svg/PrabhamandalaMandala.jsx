import React from 'react';

/**
 * Prabhamandala Sacred Geometry Mandala SVG
 * Features concentric yantras, 16-petal lotus (representing 16 matras of Teentaal),
 * and dynamic cosmic radial flames.
 */
export default function PrabhamandalaMandala({ className = "w-full h-full", spin = false }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${spin ? 'animate-spin-slow' : ''}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mandalaGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B04A" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FF8A1F" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D9381E" stopOpacity="0.02" />
        </radialGradient>
      </defs>

      {/* Central Radiance */}
      <circle cx="250" cy="250" r="220" fill="url(#mandalaGrad)" />

      {/* Outer Concentric Boundaries */}
      <circle cx="250" cy="250" r="235" stroke="#E8B04A" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="5 7" />
      <circle cx="250" cy="250" r="225" stroke="#FF8A1F" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="250" cy="250" r="215" stroke="#D9381E" strokeWidth="1" strokeOpacity="0.4" />

      {/* 16 Flame Rays (Teentaal Matras) */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={`flame-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 35 C 244 50 240 65 250 80 C 260 65 256 50 250 35 Z"
              fill="#E8B04A"
              opacity="0.85"
            />
            <circle cx="250" cy="25" r="3" fill="#FF8A1F" />
            <line x1="250" y1="80" x2="250" y2="130" stroke="#E8B04A" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        );
      })}

      {/* 32 Small Lotus Petals Ring */}
      <circle cx="250" cy="250" r="145" stroke="#E8B04A" strokeWidth="1.5" strokeOpacity="0.6" />
      {[...Array(32)].map((_, i) => {
        const angle = (i * 360) / 32;
        return (
          <g key={`petal-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 145 C 246 135 248 128 250 125 C 252 128 254 135 250 145 Z"
              fill="#D9381E"
              opacity="0.7"
            />
          </g>
        );
      })}

      {/* Inner Sacred Star Hexagram / Yantra Triangles */}
      <circle cx="250" cy="250" r="110" stroke="#FF8A1F" strokeWidth="1.5" strokeOpacity="0.7" />
      <polygon
        points="250,140 345,305 155,305"
        stroke="#E8B04A"
        strokeWidth="1.8"
        fill="none"
        strokeOpacity="0.6"
      />
      <polygon
        points="250,360 345,195 155,195"
        stroke="#E8B04A"
        strokeWidth="1.8"
        fill="none"
        strokeOpacity="0.6"
      />

      {/* Center Bindu and Golden Core */}
      <circle cx="250" cy="250" r="45" stroke="#E8B04A" strokeWidth="2" strokeOpacity="0.8" fill="#1A1240" />
      <circle cx="250" cy="250" r="30" stroke="#D9381E" strokeWidth="1" strokeOpacity="0.9" />
      <circle cx="250" cy="250" r="12" fill="#E8B04A" />
      <circle cx="250" cy="250" r="5" fill="#FFF1D0" />
    </svg>
  );
}
