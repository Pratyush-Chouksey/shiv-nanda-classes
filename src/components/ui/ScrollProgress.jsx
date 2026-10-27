import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress
 * Thin antique-gold/marigold line at top of viewport — warm, flat, no neon glow.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[1000] pointer-events-none will-change-transform"
      style={{ scaleX, background: 'linear-gradient(to right, #B8893A, #F2A516, #E07B1A)' }}
      aria-hidden="true"
    />
  );
}
