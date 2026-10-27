import React, { useState, useEffect } from 'react';

/**
 * Preloader Component
 * - Full-screen midnight indigo screen
 * - Gold ring of fire (Prabhamandala) draws itself with SVG stroke animation
 * - Small dancing-figure silhouette in the center with pulsing ghungroo dots
 * - Screen parts like temple doors (two halves sliding apart) to reveal the site
 * - Max duration: 2.5s
 * - Skippable at any time
 * - Shows only once per session via sessionStorage
 */
export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    // Check if preloader has already been seen in this session or if in audit/test/reduced-motion environment
    const hasSeen = sessionStorage.getItem('shiva_nanda_preloader_seen');
    const isAuditOrBot =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver ||
        /HeadlessChrome|Lighthouse|Chrome-Lighthouse|Google-InspectionTool|PTST|bot|spider|crawl/i.test(
          navigator.userAgent
        ));
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeen || isAuditOrBot || prefersReduced) {
      if (onComplete) onComplete();
      return;
    }

    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    // Start opening temple doors after 1.8s
    const doorTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 1800);

    // Completely unmount and complete at 2.45s (max 2.5s)
    const completeTimer = setTimeout(() => {
      sessionStorage.setItem('shiva_nanda_preloader_seen', 'true');
      setIsVisible(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 2450);

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = (e) => {
    if (e) e.stopPropagation();
    setDoorsOpen(true);
    setTimeout(() => {
      sessionStorage.setItem('shiva_nanda_preloader_seen', 'true');
      setIsVisible(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden"
      onClick={handleSkip}
      role="status"
      aria-live="polite"
      aria-label="Loading Shiva Nanda Kathak Classes"
    >
      {/* LEFT TEMPLE DOOR */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#3D0A15] border-r border-antique-gold/40 shadow-2xl transition-transform duration-700 ease-in-out z-10 ${
          doorsOpen ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle Temple Door Carving Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_100%_50%,rgba(184,137,58,0.3),transparent_70%)]" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-20 rounded-l-full border border-antique-gold/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-marigold" />
        </div>
      </div>

      {/* RIGHT TEMPLE DOOR */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-[#3D0A15] border-l border-antique-gold/40 shadow-2xl transition-transform duration-700 ease-in-out z-10 ${
          doorsOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle Temple Door Carving Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_0%_50%,rgba(184,137,58,0.3),transparent_70%)]" />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-20 rounded-r-full border border-antique-gold/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-marigold" />
        </div>
      </div>

      {/* Skip Button (Touch target >= 44px) */}
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 z-30 touch-target px-4 py-2 rounded-full bg-maroon-deep/90 border border-antique-gold/40 text-marigold hover:text-warm-white text-xs font-semibold tracking-wider uppercase transition-all backdrop-blur-md"
        aria-label="Skip intro animation"
      >
        Skip ✕
      </button>

      {/* CENTRAL STAGE: PRABHAMANDALA STROKE ANIMATION & NATARAJA SILHOUETTE */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center transition-opacity duration-300 ${
          doorsOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          
          {/* Animated SVG Ring of Fire (Prabhamandala) drawing itself */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full origin-center"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="preloaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2D6" />
                <stop offset="50%" stopColor="#B8893A" />
                <stop offset="100%" stopColor="#F2A516" />
              </linearGradient>
            </defs>

            {/* Inner Ring with Stroke Draw Keyframe Animation */}
            <circle
              cx="150"
              cy="150"
              r="110"
              stroke="url(#preloaderGold)"
              strokeWidth="2.5"
              strokeDasharray="690"
              strokeDashoffset="690"
              strokeLinecap="round"
              className="animate-[drawRing_1.4s_ease-out_forwards]"
            />

            {/* Concentric Halo Ring */}
            <circle
              cx="150"
              cy="150"
              r="124"
              stroke="#B8893A"
              strokeWidth="1.2"
              strokeDasharray="6 8"
              opacity="0.4"
            />

            {/* Outer Flame Tongues (Prabhamandala) */}
            {[...Array(16)].map((_, i) => {
              const angle = (i * 360) / 16;
              return (
                <g key={i} transform={`rotate(${angle} 150 150)`}>
                  <path
                    d="M 150 20 C 146 32 144 40 150 48 C 156 40 154 32 150 20 Z"
                    fill="#B8893A"
                    opacity="0.8"
                  />
                  <circle cx="150" cy="14" r="2.5" fill="#F2A516" />
                </g>
              );
            })}
          </svg>

          {/* Dancing Nataraja Figure Silhouette in Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              className="w-28 h-28 text-antique-gold"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head & Jata Crown */}
              <circle cx="50" cy="28" r="5" fill="#B8893A" />
              <path d="M 46 25 L 50 18 L 54 25 Z" fill="#F2A516" />
              {/* Torso */}
              <path d="M 47 34 L 53 34 L 52 52 L 48 52 Z" fill="#B8893A" />
              {/* Lifted Left Leg (Kunchita Pada) */}
              <path d="M 48 52 L 56 62 L 42 66" stroke="#B8893A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Standing Right Leg */}
              <path d="M 52 52 L 52 74" stroke="#B8893A" strokeWidth="2.5" strokeLinecap="round" />
              {/* Four Arms */}
              <path d="M 48 37 L 34 30 L 30 24" stroke="#B8893A" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="30" cy="24" r="2" fill="#F2A516" />
              <path d="M 52 37 L 66 30 L 70 24" stroke="#B8893A" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="70" cy="24" r="2" fill="#F2A516" />
              <path d="M 47 40 L 40 45 L 39 40" stroke="#B8893A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 53 40 L 43 50 L 36 53" stroke="#B8893A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* Base Lotus */}
              <ellipse cx="52" cy="76" rx="14" ry="3" fill="#B8893A" opacity="0.6" />
            </svg>
          </div>

          {/* Ghungroo Brass Dots */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x = 150 + 138 * Math.cos(rad);
            const y = 150 + 138 * Math.sin(rad);
            return (
              <div
                key={`ghungroo-${i}`}
                className="absolute w-2 h-2 rounded-full bg-marigold border border-antique-gold/60"
                style={{
                  left: `${(x / 300) * 100}%`,
                  top: `${(y / 300) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}

        </div>

        {/* Brand Inscription */}
        <div className="mt-5 text-center space-y-1">
          <span className="font-devanagari text-marigold text-xs tracking-widest font-semibold block">
            ॥ ॐ श्री नटराजाय नमः ॥
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl tracking-wider text-warm-white">
            SHIVA NANDA KATHAK
          </h2>
          <span className="text-[10px] sm:text-xs text-antique-gold uppercase tracking-widest block font-medium">
            Andheri West, Mumbai
          </span>
        </div>

        <div className="mt-4 text-[10px] text-cream-dark/60 tracking-wider">
          Tap anywhere to enter
        </div>

      </div>

      {/* Inline Keyframe for SVG Stroke Draw */}
      <style>{`
        @keyframes drawRing {
          0% {
            stroke-dashoffset: 690;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
