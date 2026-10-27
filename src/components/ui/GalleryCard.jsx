import React, { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';

/**
 * GalleryCard — "Warm Classical Stage"
 *
 * Clean photo card with:
 * - Consistent soft-corner crop with antique gold hairline border
 * - Subtle hover zoom on image
 * - Clean caption overlay at bottom
 * - Retains full keyboard accessibility & lightbox trigger
 */
export default function GalleryCard({ photo, index, onOpen }) {
  const [currentSrc, setCurrentSrc] = useState(photo.image);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (currentSrc !== photo.placeholderUrl && photo.placeholderUrl) {
      setCurrentSrc(photo.placeholderUrl);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      onClick={() => onOpen(index)}
      className="group relative rounded-xl overflow-hidden border border-antique-gold/30 hover:border-antique-gold/80 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer bg-white select-none touch-manipulation aspect-[4/5] flex flex-col justify-end"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(index);
        }
      }}
    >
      {/* Background Image / Placeholder with subtle zoom on hover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-parchment-deep">
        {!hasError ? (
          <img
            src={currentSrc}
            alt=""
            aria-hidden="true"
            loading="lazy"
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-parchment to-parchment-deep">
            <div className="w-10 h-10 rounded-full border border-antique-gold/40 flex items-center justify-center text-maroon mb-2">
              <Camera className="w-5 h-5 text-antique-gold" />
            </div>
            <p className="font-serif font-bold text-xs text-maroon line-clamp-1">{photo.title}</p>
            <span className="text-[10px] text-charcoal-muted mt-1 uppercase tracking-wider">{photo.category}</span>
          </div>
        )}
      </div>

      {/* Subtle Warm Gradient Overlay for Caption */}
      <div className="relative z-10 p-3.5 bg-gradient-to-t from-maroon/90 via-maroon/50 to-transparent text-white pt-8">
        <div className="flex items-end justify-between gap-2">
          <div>
            <span aria-hidden="true" className="text-[9px] uppercase tracking-wider text-marigold font-bold block">
              {photo.category}
            </span>
            <p className="font-serif font-bold text-xs sm:text-sm text-white line-clamp-1">
              {photo.title}
            </p>
          </div>
          <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
