import React from 'react';

/**
 * DiyaSvg Component
 * Traditional Indian brass oil lamp (Diya) with an animated flickering golden flame.
 * Used atop temple arches and sanctum frames.
 */
export default function DiyaSvg({ className = "w-5 h-5", animate = true }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Flame Gradient */}
        <linearGradient id="diyaFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D9381E" />
          <stop offset="40%" stopColor="#FF8A1F" />
          <stop offset="85%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#FFFDF5" />
        </linearGradient>

        {/* Brass Diya Bowl Gradient */}
        <linearGradient id="diyaBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#E8B04A" />
          <stop offset="100%" stopColor="#B38128" />
        </linearGradient>

        <filter id="diyaGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Flickering Flame */}
      <g className={animate ? "animate-pulse" : ""} filter="url(#diyaGlow)">
        <path
          d="M 20 6 C 17 11 16 16 20 20 C 24 16 23 11 20 6 Z"
          fill="url(#diyaFlameGrad)"
        />
        {/* Inner white-hot wick core */}
        <ellipse cx="20" cy="16" rx="1.5" ry="3" fill="#FFFDF5" />
      </g>

      {/* Brass Diya Lamp Base & Bowl */}
      {/* Diya Lip / Rim */}
      <ellipse cx="20" cy="22" rx="12" ry="3" fill="url(#diyaBrassGrad)" stroke="#FFF2D6" strokeWidth="0.5" />
      {/* Bowl Body */}
      <path
        d="M 8 22 C 8 28 14 31 20 31 C 26 31 32 28 32 22 Z"
        fill="url(#diyaBrassGrad)"
        stroke="#E8B04A"
        strokeWidth="0.8"
      />
      {/* Diya Pedestal Stand */}
      <path d="M 17 31 L 15 35 L 25 35 L 23 31 Z" fill="#B38128" />
      <ellipse cx="20" cy="35" rx="7" ry="1.5" fill="#E8B04A" />
    </svg>
  );
}
