import React from 'react';

/**
 * MandalaCorner Component
 * Tiny sacred mandala corner ornament SVG.
 * Appears on hover / tap at the corners of gallery photo frames.
 */
export default function MandalaCorner({
  position = "top-left",
  className = "w-4 h-4 sm:w-5 sm:h-5 text-temple-gold pointer-events-none transition-opacity duration-300",
}) {
  const getRotation = () => {
    switch (position) {
      case "top-right":
        return "rotate-90";
      case "bottom-right":
        return "rotate-180";
      case "bottom-left":
        return "-rotate-90";
      case "top-left":
      default:
        return "rotate-0";
    }
  };

  return (
    <div className={`absolute ${position === 'top-left' ? 'top-1.5 left-1.5' : position === 'top-right' ? 'top-1.5 right-1.5' : position === 'bottom-right' ? 'bottom-1.5 right-1.5' : 'bottom-1.5 left-1.5'} z-20`}>
      <svg
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${getRotation()}`}
        aria-hidden="true"
      >
        {/* Corner Corner Arch Line */}
        <path d="M 0 0 L 22 0 C 22 12, 12 22, 0 22 Z" fill="rgba(232, 176, 74, 0.2)" stroke="#E8B04A" strokeWidth="1" />
        {/* Sacred Geometry Arc */}
        <path d="M 0 15 C 8 15, 15 8, 15 0" stroke="#FF8A1F" strokeWidth="1" />
        <circle cx="5" cy="5" r="2" fill="#D9381E" />
        <circle cx="12" cy="3" r="1.2" fill="#E8B04A" />
        <circle cx="3" cy="12" r="1.2" fill="#E8B04A" />
      </svg>
    </div>
  );
}
