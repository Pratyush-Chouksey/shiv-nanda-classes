import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor Component
 * 
 * Desktop-only custom cursor:
 * - A small gold ghungroo bell that trails the pointer smoothly
 * - Expands with a sacred golden aura over interactive buttons and links
 * - Disabled on touch/mobile devices via @media (pointer: fine) check
 * - Respects useReducedMotion()
 * - Pure GPU transform: translate3d(...) with zero layout thrashing
 */
export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable if pointer is fine (mouse/desktop) and reduced motion is off
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsEnabled(mediaQuery.matches);

    const handleMediaChange = (e) => setIsEnabled(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let animId;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target;
      if (target && target.closest) {
        const interactive = target.closest(
          'button, a, input, select, textarea, [role="button"], [role="link"], .touch-target, [tabindex="0"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop using requestAnimationFrame
    const updateCursor = () => {
      // Lerp trailing ring position towards cursor (smoothing factor: 0.22)
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.22;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Trailing Expanding Aura Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-temple-gold/60 pointer-events-none transition-all duration-200 ease-out flex items-center justify-center will-change-transform"
        style={{
          transform: `translate3d(-100px, -100px, 0) scale(${isHovered ? 2.2 : 1})`,
          backgroundColor: isHovered ? 'rgba(184,137,58,0.12)' : 'transparent',
          borderColor: isHovered ? 'rgba(242,165,22,0.80)' : 'rgba(184,137,58,0.50)',
        }}
      />

      {/* 2. Tiny Sacred Ghungroo Bell Pointer */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-1.5 -mt-1.5 w-3 h-3 rounded-full bg-marigold pointer-events-none flex items-center justify-center will-change-transform"
      >
        {/* Tiny cross slit of the traditional brass ghungroo */}
        <div className="w-1.5 h-1.5 border-t border-l border-[#5A1020]/70" />
      </div>
    </div>
  );
}
