import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../data/content';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { triggerGhungrooHaptic } from '../utils/haptics';
import heroImg from '../assets/hero.jpg';
import natarajBg from '../assets/nataraj_bg.jpg';

/**
 * HeroSection v3 — Refined with Nataraj background + top breathing room
 *
 * Changes:
 *  - Nataraj image as a large, low-opacity background centrepiece
 *  - Added pt-24 (96px) top padding to breathe below the fixed navbar
 *  - Cleaned up ambient overlays to let Nataraj show through
 */

// ── Jharokha arch photo ────────────────────────────────────────────────────
function JharokhaPhoto({ className = '' }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: '50% 50% 8px 8px / 28% 28% 8px 8px',
          border: '2px solid rgba(184,137,58,0.55)',
          boxShadow: 'inset 0 0 0 4px rgba(184,137,58,0.10), 0 8px 40px rgba(0,0,0,0.5)',
        }}
      >
        {!imgError ? (
          <img
            src={heroImg}
            alt="Samidha Karanjekar performing Kathak — Jaipur Gharana"
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            width="600"
            height="800"
            onError={() => setImgError(true)}
            draggable={false}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(180deg, rgba(90,16,32,0.3) 0%, rgba(61,10,21,0.92) 100%)' }}
          >
            <span className="text-antique-gold/60 text-xs font-mono tracking-wide text-center px-4">
              📸 Add photo at<br />/src/assets/hero.jpg
            </span>
          </div>
        )}
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: '30%', background: 'linear-gradient(to top, rgba(61,10,21,0.80) 0%, transparent 100%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Offset gold hairline frame — desktop only */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: 12, left: 12, right: -12, bottom: -12,
          border: '1.5px solid rgba(184,137,58,0.30)',
          borderRadius: '50% 50% 8px 8px / 28% 28% 8px 8px',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ── HeroSection ─────────────────────────────────────────────────────────────
export default function HeroSection({ onOpenTrial }) {
  const shouldReduceMotion = useReducedMotion();

  const handleBookTrial = () => {
    triggerGhungrooHaptic(10);
    if (onOpenTrial) onOpenTrial();
  };

  const archV = {
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1], delay: 0 } },
  };
  const line = (d = 0) => ({
    hidden:  { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.40, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : d } },
  });
  const fade = (d = 0) => ({
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : d } },
  });

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-maroon-deep"
      style={{ minHeight: '100dvh' }}
      aria-label="Hero — Shiva Nanda Kathak Academy"
    >

      {/* ── NATARAJ BACKGROUND IMAGE ──────────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={natarajBg}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.18 }}
          draggable={false}
        />
        {/* Dark vignette over the nataraj so text stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(61,10,21,0.85) 100%)',
              'linear-gradient(to bottom, rgba(61,10,21,0.55) 0%, transparent 40%, rgba(61,10,21,0.70) 100%)',
            ].join(', '),
          }}
        />
      </div>

      {/* ── SUBTLE SIDE GRADIENTS ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(90,16,32,0.40) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ══ MOBILE LAYOUT ══════════════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col lg:hidden"
        style={{ minHeight: '100dvh' }}
      >
        {/* Arch — top 60vh, with top padding for navbar */}
        <div
          className="flex items-end justify-center px-4 pt-24"
          style={{ flex: '0 0 62vh', maxHeight: '62vh' }}
        >
          <motion.div
            variants={archV}
            initial="hidden"
            animate="visible"
            className="w-full flex justify-center"
            style={{ height: '100%' }}
          >
            <div style={{ width: 'min(68vw, 280px)', height: '100%', position: 'relative' }}>
              <JharokhaPhoto className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Text — remaining space */}
        <div
          className="flex flex-col items-center text-center px-5 pb-28 justify-center gap-3"
          style={{ flex: '1 1 auto' }}
        >
          {/* Devanagari tag */}
          <motion.span
            variants={fade(shouldReduceMotion ? 0 : 0.03)}
            initial="hidden" animate="visible"
            className="font-devanagari text-marigold/70 text-xs tracking-widest block"
          >
            ॥ नटराज को समर्पित ॥
          </motion.span>

          <h1
            className="font-display font-bold text-warm-white leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 7.5vw, 2.5rem)', lineHeight: 1.12 }}
          >
            <motion.span variants={line(shouldReduceMotion ? 0 : 0.07)} initial="hidden" animate="visible" className="block">
              Where Rhythm
            </motion.span>
            <motion.span variants={line(shouldReduceMotion ? 0 : 0.12)} initial="hidden" animate="visible" className="block">
              Becomes <span className="text-marigold">Devotion</span>
            </motion.span>
          </h1>

          {/* Gold divider */}
          <motion.div
            variants={fade(shouldReduceMotion ? 0 : 0.17)}
            initial="hidden" animate="visible"
            className="flex items-center gap-2"
          >
            <div className="w-8 h-px bg-antique-gold/45" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-2 h-2 rounded-full bg-marigold/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <div className="w-8 h-px bg-antique-gold/45" />
          </motion.div>

          <motion.p
            variants={line(shouldReduceMotion ? 0 : 0.20)}
            initial="hidden" animate="visible"
            className="text-cream-dark/65 leading-relaxed text-xs sm:text-sm max-w-[22rem]"
          >
            Classical Kathak · Andheri West, Mumbai · Jaipur Gharana · Since 2014
          </motion.p>

          <motion.div
            variants={fade(shouldReduceMotion ? 0 : 0.24)}
            initial="hidden" animate="visible"
            className="flex flex-col items-center gap-2.5 w-full max-w-xs"
          >
            <button
              type="button"
              onClick={handleBookTrial}
              className="touch-target w-full px-6 py-3.5 rounded-full bg-marigold text-maroon-deep font-bold text-sm tracking-wide hover:bg-saffron active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              aria-label="Book a Trial Class"
            >
              Book a Trial Class
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#courses"
              className="touch-target text-cream-dark/70 hover:text-marigold text-xs font-medium hover:underline underline-offset-4 transition-colors"
            >
              Explore courses
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══ DESKTOP LAYOUT ═════════════════════════════════════════════ */}
      <div className="hidden lg:flex relative z-10 min-h-[100dvh] w-full max-w-7xl mx-auto px-10 xl:px-16 items-center gap-16 pt-20">

        {/* LEFT: Text */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.span
            variants={fade(shouldReduceMotion ? 0 : 0.05)}
            initial="hidden" animate="visible"
            className="font-devanagari text-marigold/65 text-sm tracking-widest mb-4 block"
          >
            ॥ नटराज को समर्पित ॥
          </motion.span>

          <h1
            className="font-display font-bold text-warm-white mb-5"
            style={{ fontSize: 'clamp(2.8rem, 4.5vw + 0.5rem, 5.2rem)', lineHeight: 1.09 }}
          >
            <motion.span variants={line(shouldReduceMotion ? 0 : 0.08)} initial="hidden" animate="visible" className="block">
              Where Rhythm
            </motion.span>
            <motion.span variants={line(shouldReduceMotion ? 0 : 0.14)} initial="hidden" animate="visible" className="block">
              Becomes{' '}
              <span className="text-marigold">Devotion</span>
            </motion.span>
          </h1>

          {/* Divider */}
          <motion.div
            variants={fade(shouldReduceMotion ? 0 : 0.18)}
            initial="hidden" animate="visible"
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-12 h-px bg-antique-gold/50" />
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-antique-gold/70" />
              <span className="w-2   h-2   rounded-full bg-marigold/75" />
              <span className="w-1.5 h-1.5 rounded-full bg-antique-gold/70" />
            </div>
            <div className="w-12 h-px bg-antique-gold/50" />
          </motion.div>

          <motion.p
            variants={line(shouldReduceMotion ? 0 : 0.22)}
            initial="hidden" animate="visible"
            className="text-cream-dark/70 leading-relaxed text-base max-w-md mb-8"
          >
            Classical Kathak training in Andheri West, Mumbai.
            <br />Jaipur Gharana · Since 2014 · Annual stage performances.
          </motion.p>

          <motion.div
            variants={fade(shouldReduceMotion ? 0 : 0.26)}
            initial="hidden" animate="visible"
            className="flex items-center gap-5"
          >
            <button
              type="button"
              onClick={handleBookTrial}
              className="touch-target px-9 py-3.5 rounded-full bg-marigold text-maroon-deep font-bold text-sm tracking-wide hover:bg-saffron active:scale-[0.98] transition-all flex items-center gap-2.5 group cursor-pointer shadow-md"
              aria-label="Book a Trial Class"
            >
              Book a Trial Class
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#courses"
              className="touch-target text-cream-dark/70 hover:text-marigold text-sm font-medium hover:underline underline-offset-4 transition-colors"
            >
              Explore courses
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Arch */}
        <div
          className="flex-shrink-0 flex items-center justify-center relative"
          style={{ width: 'min(42%, 500px)' }}
        >
          <motion.div
            variants={archV}
            initial="hidden" animate="visible"
            style={{ width: '100%', height: 'min(80vh, 620px)', position: 'relative' }}
          >
            <JharokhaPhoto className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <motion.div
        variants={fade(shouldReduceMotion ? 0 : 0.38)}
        initial="hidden" animate="visible"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <ChevronDown className="w-5 h-5 text-cream-dark/35 animate-bounce" aria-hidden="true" />
        <span className="text-[9px] tracking-widest uppercase text-cream-dark/25 hidden sm:block">Scroll</span>
      </motion.div>
    </section>
  );
}
