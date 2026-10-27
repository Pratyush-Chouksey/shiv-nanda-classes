import React from 'react';

/**
 * LotusSvg Component
 * Sacred Indian Lotus blossom SVG used for Lineage Timeline nodes.
 */
export default function LotusSvg({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lotusPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D9381E" />
          <stop offset="50%" stopColor="#FF8A1F" />
          <stop offset="90%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#FFF2D6" />
        </linearGradient>

        <linearGradient id="lotusCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9EB" />
          <stop offset="100%" stopColor="#E8B04A" />
        </linearGradient>
      </defs>

      {/* Outer Flanking Petals */}
      {/* Leftmost Petal */}
      <path
        d="M 25 36 C 14 36 8 28 8 22 C 12 18 20 22 25 36 Z"
        fill="url(#lotusPetalGrad)"
        opacity="0.85"
      />
      {/* Rightmost Petal */}
      <path
        d="M 25 36 C 36 36 42 28 42 22 C 38 18 30 22 25 36 Z"
        fill="url(#lotusPetalGrad)"
        opacity="0.85"
      />

      {/* Intermediate Petals */}
      {/* Mid-Left Petal */}
      <path
        d="M 25 36 C 16 33 13 22 17 14 C 21 16 23 26 25 36 Z"
        fill="url(#lotusPetalGrad)"
        opacity="0.95"
      />
      {/* Mid-Right Petal */}
      <path
        d="M 25 36 C 34 33 37 22 33 14 C 29 16 27 26 25 36 Z"
        fill="url(#lotusPetalGrad)"
        opacity="0.95"
      />

      {/* Central Majestic Center Petal */}
      <path
        d="M 25 37 C 21 28 20 18 25 8 C 30 18 29 28 25 37 Z"
        fill="url(#lotusPetalGrad)"
        stroke="#FFF2D6"
        strokeWidth="0.5"
      />

      {/* Lotus Pod / Golden Bindu Center */}
      <circle cx="25" cy="30" r="3" fill="url(#lotusCenterGrad)" />
      <circle cx="25" cy="30" r="1.2" fill="#D9381E" />

      {/* Base Lotus Leaf Calyx */}
      <path
        d="M 18 37 Q 25 41 32 37 Q 25 43 18 37 Z"
        fill="#E8B04A"
        opacity="0.9"
      />
    </svg>
  );
}
