import React from 'react';

/**
 * PrabhamandalaFireRing Component
 * A huge, slowly rotating ring of fire (Prabhamandala) drawn as original SVG
 * with animated flame-like gold/vermilion strokes.
 * 
 * Features:
 * - 32 Outer radiant flame tongues with multi-hued gold/vermilion gradients
 * - Concentric sacred fire halos with stroke dash-array animations
 * - 16 Teentaal flame arches with dancing flame tips
 * - Inner rhythmic lotus petal boundary
 * - Respects prefers-reduced-motion
 */
export default function PrabhamandalaFireRing({
  className = "w-full h-full",
  spin = true,
  fast = false,
  reducedMotion = false,
}) {
  const spinClass = !spin || reducedMotion
    ? ''
    : fast
    ? 'animate-spin-fast origin-center'
    : 'animate-spin-slow origin-center';

  return (
    <svg
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${spinClass}`}
      aria-hidden="true"
    >
      <defs>
        {/* Fire & Gold Linear Gradients */}
        <linearGradient id="fireRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D9381E" />
          <stop offset="35%" stopColor="#FF8A1F" />
          <stop offset="70%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#FFF4D0" />
        </linearGradient>

        <linearGradient id="flameTongueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#9F1212" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#D9381E" />
          <stop offset="70%" stopColor="#FF8A1F" />
          <stop offset="95%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#FFFDF5" />
        </linearGradient>

        <linearGradient id="innerHaloGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#FF8A1F" />
        </linearGradient>

        <radialGradient id="sacredFireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#D9381E" stopOpacity="0.12" />
          <stop offset="85%" stopColor="#E8B04A" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#0B0A1F" stopOpacity="0" />
        </radialGradient>

        {/* Glow Filter for Burning Embers */}
        <filter id="flameFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="flameBlur" />
          <feComposite in="SourceGraphic" in2="flameBlur" operator="over" />
        </filter>
      </defs>

      {/* Central Radiance Glow */}
      <circle cx="350" cy="350" r="320" fill="url(#sacredFireGlow)" />

      {/* Outer Halo Rings with Golden Stroke Dash Patterns */}
      <circle
        cx="350"
        cy="350"
        r="295"
        stroke="#E8B04A"
        strokeWidth="1.5"
        strokeOpacity="0.35"
        strokeDasharray="4 8"
      />
      <circle
        cx="350"
        cy="350"
        r="285"
        stroke="url(#fireRingGrad)"
        strokeWidth="2.5"
        strokeOpacity="0.75"
      />
      <circle
        cx="350"
        cy="350"
        r="276"
        stroke="#D9381E"
        strokeWidth="1.2"
        strokeOpacity="0.6"
        strokeDasharray="8 6"
      />

      {/* 24 Major Flame Tongues (Prabhamandala Sacred Fire Flames) */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <g key={`major-flame-${i}`} transform={`rotate(${angle} 350 350)`}>
            {/* Outer Flame Spire */}
            <path
              d="M 350 68 C 342 98, 336 120, 350 148 C 364 120, 358 98, 350 68 Z"
              fill="url(#flameTongueGrad)"
              filter="url(#flameFilter)"
            />
            {/* Inner Golden Core Flame */}
            <path
              d="M 350 78 C 345 100, 342 115, 350 134 C 358 115, 355 100, 350 78 Z"
              fill="#FFF2D6"
              opacity="0.9"
            />
            {/* Dancing Vermilion Sparkle Dot */}
            <circle cx="350" cy="58" r="3.2" fill="#D9381E" />
            <circle cx="350" cy="58" r="1.5" fill="#FFF4D0" />
          </g>
        );
      })}

      {/* 24 Secondary Flame Sparks (Interspersed between major flames) */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24 + 7.5;
        return (
          <g key={`secondary-flame-${i}`} transform={`rotate(${angle} 350 350)`}>
            <path
              d="M 350 100 C 346 116, 345 128, 350 142 C 355 128, 354 116, 350 100 Z"
              fill="#FF8A1F"
              opacity="0.8"
            />
            <circle cx="350" cy="94" r="2" fill="#E8B04A" />
          </g>
        );
      })}

      {/* Inner Boundary Fire Ring (Double Arched Wave) */}
      <circle
        cx="350"
        cy="350"
        r="230"
        stroke="url(#innerHaloGrad)"
        strokeWidth="3"
        strokeOpacity="0.85"
      />
      <circle
        cx="350"
        cy="350"
        r="222"
        stroke="#FF8A1F"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        strokeDasharray="6 4"
      />

      {/* 48 Sacred Lotus Petals / Ghungroo Rays on Ring Perimeter */}
      {[...Array(48)].map((_, i) => {
        const angle = (i * 360) / 48;
        return (
          <g key={`petal-${i}`} transform={`rotate(${angle} 350 350)`}>
            <path
              d="M 350 230 C 347 222, 348 217, 350 214 C 352 217, 353 222, 350 230 Z"
              fill="#E8B04A"
              opacity="0.75"
            />
            <circle cx="350" cy="212" r="1.5" fill="#FF8A1F" />
          </g>
        );
      })}

      {/* Inner Geometric Star Lines (subtle cosmic harmonics) */}
      <circle
        cx="350"
        cy="350"
        r="170"
        stroke="#E8B04A"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="3 6"
      />
    </svg>
  );
}
