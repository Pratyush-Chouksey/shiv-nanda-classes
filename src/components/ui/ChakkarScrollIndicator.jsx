import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * ChakkarScrollIndicator Component
 * A scroll indicator shaped like a spinning chakkar (pirouette) icon.
 * 
 * Features:
 * - Geometric pirouette spiral arcs representing Kathak 360-degree chakkars
 * - 8 Ghungroo brass beads circling around the vortex
 * - Continuous pirouette spin animation (respects prefers-reduced-motion)
 * - Clickable touch target (>= 44px) that smoothly navigates to #about
 */
export default function ChakkarScrollIndicator({
  targetId = "about",
  reducedMotion = false,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="group touch-target inline-flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-temple-gold rounded-full p-2 transition-transform active:scale-95"
      aria-label="Scroll down to learn about Guru Samidha Karanjekar and classes"
    >
      {/* Whirling Chakkar Pirouette Icon */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        
        {/* Outer Pulsing Golden Halo */}
        <div className="absolute inset-0 rounded-full bg-temple-gold/10 group-hover:bg-temple-gold/20 transition-colors animate-pulse" />

        {/* Spinning Chakkar Vortex SVG */}
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full text-temple-gold ${
            reducedMotion ? '' : 'animate-spin-slow origin-center'
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chakkarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="50%" stopColor="#E8B04A" />
              <stop offset="100%" stopColor="#D9381E" />
            </linearGradient>
          </defs>

          {/* Pirouette Whirling Arcs */}
          <path
            d="M 50 12 A 38 38 0 0 1 88 50"
            stroke="url(#chakkarGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 88 50 A 38 38 0 0 1 50 88"
            stroke="#E8B04A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <path
            d="M 50 88 A 38 38 0 0 1 12 50"
            stroke="#FF8A1F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 12 50 A 38 38 0 0 1 50 12"
            stroke="#D9381E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />

          {/* Inner Swirl Spiral */}
          <path
            d="M 50 25 C 65 25 75 35 75 50 C 75 62 62 72 50 72 C 38 72 28 62 28 50 C 28 40 38 34 46 36"
            stroke="url(#chakkarGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="3 4"
          />

          {/* Circling Brass Ghungroo Beads on Pirouette Path */}
          {[...Array(6)].map((_, i) => {
            const angle = (i * 360) / 6;
            const rad = (angle * Math.PI) / 180;
            const cx = 50 + 38 * Math.cos(rad);
            const cy = 50 + 38 * Math.sin(rad);
            return (
              <circle
                key={`ghungroo-${i}`}
                cx={cx}
                cy={cy}
                r="2"
                fill="#FF8A1F"
              />
            );
          })}

          {/* Central Pivot Bindu */}
          <circle cx="50" cy="50" r="3.5" fill="#E8B04A" />
          <circle cx="50" cy="50" r="1.5" fill="#FFF4D0" />
        </svg>

        {/* Downward Pulse Indicator in Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ChevronDown className="w-3.5 h-3.5 text-temple-gold group-hover:translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Label */}
      <span className="text-[10px] uppercase tracking-widest text-temple-gold/80 group-hover:text-temple-gold font-medium transition-colors">
        Scroll
      </span>
    </a>
  );
}
