import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable Scroll Reveal Primitive
 * Powered by Framer Motion.
 * Animates ONLY transform and opacity for optimal 60fps Lighthouse performance.
 * Respects prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 24,
  className = '',
  once = true,
  amount = 0.15,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transform animation
  if (shouldReduceMotion) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // smooth cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
