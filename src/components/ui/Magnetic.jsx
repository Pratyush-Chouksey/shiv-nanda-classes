import React, { useRef, useState, useEffect } from 'react';

/**
 * Magnetic Component
 * Creates a magnetic hover effect on desktop only.
 * The element subtly follows the pointer on hover and smoothly snaps back on release.
 * 
 * Performance:
 * - Uses ONLY GPU-accelerated transform: translate3d(...)
 * - Disabled on touch devices (@media (pointer: fine) check)
 * - Disabled if prefers-reduced-motion is active
 */
export default function Magnetic({
  children,
  strength = 0.28,
  className = "",
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canMagnetic, setCanMagnetic] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices without reduced motion preference
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setCanMagnetic(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (!canMagnetic || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    if (!canMagnetic) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!canMagnetic) return;
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  if (!canMagnetic) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.12s ease-out'
          : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
