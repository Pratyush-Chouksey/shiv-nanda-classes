import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * StatCountersRow Component
 * Displays 4 animated stat counters:
 * - "12+ Years Teaching" (counts up 0 -> 12)
 * - "8 Annual Shows" (counts up 0 -> 8)
 * - "Jaipur Gharana"
 * - "M.A. Kathak"
 * 
 * Features:
 * - Counts up when scrolled into view using useInView
 * - Honors prefers-reduced-motion
 * - Luxury glassmorphism cards with gold borders
 */
export default function StatCountersRow() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const [yearsCount, setYearsCount] = useState(0);
  const [showsCount, setShowsCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setYearsCount(12);
      setShowsCount(8);
      return;
    }

    if (!isInView) return;

    // Animate 0 -> 12 over 1.4s
    const yearsDuration = 1400;
    const yearsTarget = 12;
    const startTime = performance.now();

    const animateYears = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / yearsDuration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setYearsCount(Math.floor(eased * yearsTarget));

      if (progress < 1) {
        requestAnimationFrame(animateYears);
      } else {
        setYearsCount(yearsTarget);
      }
    };

    // Animate 0 -> 8 over 1.2s
    const showsDuration = 1200;
    const showsTarget = 8;
    const animateShows = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / showsDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShowsCount(Math.floor(eased * showsTarget));

      if (progress < 1) {
        requestAnimationFrame(animateShows);
      } else {
        setShowsCount(showsTarget);
      }
    };

    requestAnimationFrame(animateYears);
    requestAnimationFrame(animateShows);
  }, [isInView]);

  const stats = [
    {
      value: `${yearsCount}+`,
      label: "Years Teaching",
      sublabel: "Est. 2014 in Andheri West",
      devanagari: "१२+ वर्ष शिक्षण",
    },
    {
      value: `${showsCount}`,
      label: "Annual Shows",
      sublabel: "Consecutive Stage Recitals",
      devanagari: "८ वार्षिक मंच",
    },
    {
      value: "Jaipur",
      label: "Gharana",
      sublabel: "Shri Rajkumar Jaipurwale ji",
      devanagari: "जयपूर घराणा",
    },
    {
      value: "M.A.",
      label: "Kathak",
      sublabel: "Khairagarh & Alankaar Board",
      devanagari: "अलंकार व एम.ए.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-8 sm:my-12 w-full"
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="p-4 sm:p-5 rounded-2xl glass-panel border border-temple-gold/25 hover:border-temple-gold/50 transition-all duration-300 text-center relative overflow-hidden group shadow-lg"
        >
          {/* Subtle top gold accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-temple-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <span className="font-devanagari text-[10px] text-saffron tracking-wider block mb-1">
            {stat.devanagari}
          </span>

          <div className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl gold-gradient-text tracking-tight mb-1">
            {stat.value}
          </div>

          <div className="text-xs sm:text-sm font-bold text-ivory tracking-wide leading-tight">
            {stat.label}
          </div>

          <div className="text-[10px] sm:text-[11px] text-ivory-muted/70 mt-1 font-light leading-snug">
            {stat.sublabel}
          </div>
        </div>
      ))}
    </div>
  );
}
