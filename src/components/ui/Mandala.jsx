import React from 'react';

/**
 * Reusable Mandala Primitive
 * Original geometric sacred mandala for background and foreground motifs.
 * Fully configurable size, opacity, rotation, and speed.
 */
export default function Mandala({
  size = 400,
  opacity = 0.25,
  spin = true,
  reverse = false,
  duration = 45, // seconds for full rotation
  className = '',
  style = {},
  ariaHidden = true,
}) {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  const animationStyle = spin
    ? {
        animation: `${reverse ? 'reverseSpin' : 'spin'} ${duration}s linear infinite`,
      }
    : {};

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: dimension,
        height: dimension,
        opacity,
        ...animationStyle,
        ...style,
      }}
      className={`origin-center select-none pointer-events-none ${className}`}
      aria-hidden={ariaHidden}
    >
      <defs>
        <radialGradient id="mandalaCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#E8B04A" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FF8A1F" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D9381E" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="mandalaGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#D9381E" />
        </linearGradient>
      </defs>

      {/* Central Radiance */}
      <circle cx="250" cy="250" r="230" fill="url(#mandalaCoreGlow)" />

      {/* Outer Sacred Rings */}
      <circle cx="250" cy="250" r="235" stroke="#E8B04A" strokeWidth="1.2" strokeDasharray="6 8" strokeOpacity="0.5" />
      <circle cx="250" cy="250" r="222" stroke="#FF8A1F" strokeWidth="2" strokeOpacity="0.65" />
      <circle cx="250" cy="250" r="210" stroke="#D9381E" strokeWidth="1" strokeOpacity="0.45" />

      {/* 16 Flame Rays (Representing 16 Matras of Teentaal) */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <g key={`flame-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 35 C 242 55 240 70 250 85 C 260 70 258 55 250 35 Z"
              fill="#E8B04A"
              stroke="#FFF2D6"
              strokeWidth="0.8"
            />
            <circle cx="250" cy="25" r="3.5" fill="#FF8A1F" />
            <circle cx="250" cy="98" r="2" fill="#D9381E" />
            <line x1="250" y1="85" x2="250" y2="135" stroke="#E8B04A" strokeWidth="1.2" strokeOpacity="0.4" />
          </g>
        );
      })}

      {/* 32-Petal Concentric Lotus Ring */}
      <circle cx="250" cy="250" r="145" stroke="#E8B04A" strokeWidth="1.8" strokeOpacity="0.7" />
      {[...Array(32)].map((_, i) => {
        const angle = (i * 360) / 32;
        return (
          <g key={`petal-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 145 C 246 135 248 126 250 122 C 252 126 254 135 250 145 Z"
              fill="#D9381E"
              stroke="#E8B04A"
              strokeWidth="0.6"
            />
          </g>
        );
      })}

      {/* Inner Sacred Star Hexagram / Yantra Triangles */}
      <circle cx="250" cy="250" r="112" stroke="#FF8A1F" strokeWidth="1.5" strokeOpacity="0.75" />
      <polygon
        points="250,138 348,306 152,306"
        stroke="#E8B04A"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.8"
      />
      <polygon
        points="250,362 348,194 152,194"
        stroke="#E8B04A"
        strokeWidth="2"
        fill="none"
        strokeOpacity="0.8"
      />

      {/* 8 Lotus Heart Petals */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <g key={`inner-petal-${i}`} transform={`rotate(${angle} 250 250)`}>
            <path
              d="M 250 190 Q 242 165 250 155 Q 258 165 250 190 Z"
              fill="#FF8A1F"
              opacity="0.8"
            />
          </g>
        );
      })}

      {/* Golden Bindu Core */}
      <circle cx="250" cy="250" r="48" stroke="#E8B04A" strokeWidth="2.5" fill="#1A1240" />
      <circle cx="250" cy="250" r="32" stroke="#D9381E" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="250" cy="250" r="14" fill="url(#mandalaGoldRim)" />
      <circle cx="250" cy="250" r="5" fill="#FFF2D6" />
    </svg>
  );
}
