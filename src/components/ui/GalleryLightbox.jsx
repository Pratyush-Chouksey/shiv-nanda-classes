import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Camera } from 'lucide-react';

/**
 * GalleryLightbox Component
 * Fullscreen lightbox with:
 * - Swipe to navigate (touch gestures)
 * - Pinch-zoom & zoom controls (+ / - / reset)
 * - Close button
 * - Keyboard support on desktop (Escape, ArrowLeft, ArrowRight)
 * - Image counter & caption
 */
export default function GalleryLightbox({
  isOpen,
  photos = [],
  currentIndex = 0,
  onClose,
  onNavigate,
}) {
  const [scale, setScale] = useState(1);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0, distance: 0 });
  const [imgError, setImgError] = useState(false);

  const activePhoto = photos[currentIndex] || photos[0];
  const [currentSrc, setCurrentSrc] = useState(activePhoto?.image);

  // Reset zoom and error state when active photo changes
  useEffect(() => {
    setScale(1);
    setImgError(false);
    setCurrentSrc(activePhoto?.image);
  }, [currentIndex, activePhoto]);

  const handleImageError = () => {
    if (currentSrc !== activePhoto?.placeholderUrl && activePhoto?.placeholderUrl) {
      setCurrentSrc(activePhoto.placeholderUrl);
    } else {
      setImgError(true);
    }
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation on desktop
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos.length]);

  if (!isOpen || !activePhoto) return null;

  const handlePrev = () => {
    const prev = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onNavigate(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % photos.length;
    onNavigate(next);
  };

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.4, 3.0));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.4, 0.8));
  const handleResetZoom = () => setScale(1);

  // Touch handlers for swipe & pinch-zoom
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setTouchStart({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        distance: 0,
      });
    } else if (e.touches.length === 2) {
      // Pinch distance calculation
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      setTouchStart((prev) => ({ ...prev, distance: dist }));
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchStart.distance > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const zoomFactor = dist / touchStart.distance;
      setScale((s) => Math.min(Math.max(s * zoomFactor, 0.8), 3.0));
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches.length === 1 && scale === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStart.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.y;
      // Horizontal swipe threshold: 45px
      if (Math.abs(deltaX) > 45 && Math.abs(deltaY) < 60) {
        if (deltaX > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-midnight/96 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* TOP BAR: Counter, Category, Zoom Controls & Close Button */}
      <div className="flex items-center justify-between gap-3 z-30 pt-1">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-deep-violet border border-temple-gold/30 text-xs font-mono text-temple-gold font-bold">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-vermilion/20 border border-vermilion/40 text-[10px] text-vermilion font-bold uppercase tracking-wider">
            {activePhoto.category}
          </span>
        </div>

        {/* Zoom & Close Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleZoomIn}
            className="touch-target p-2 rounded-full bg-deep-violet/70 border border-temple-gold/30 text-ivory hover:text-temple-gold text-xs transition-colors"
            title="Zoom In (+)"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="touch-target p-2 rounded-full bg-deep-violet/70 border border-temple-gold/30 text-ivory hover:text-temple-gold text-xs transition-colors"
            title="Zoom Out (-)"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          {scale !== 1 && (
            <button
              onClick={handleResetZoom}
              className="touch-target p-2 rounded-full bg-deep-violet/70 border border-temple-gold/30 text-temple-gold text-xs transition-colors"
              title="Reset Zoom"
              aria-label="Reset zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="touch-target p-2.5 rounded-full bg-deep-violet border border-temple-gold/50 text-temple-gold hover:text-white transition-all ml-1 shadow-gold-glow"
            title="Close Lightbox (Esc)"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CENTRAL STAGE: ACTIVE IMAGE WITH PINCH-ZOOM */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-3">
        
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 touch-target p-3 rounded-full bg-deep-violet/85 border border-temple-gold/40 text-temple-gold hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Active Image or Artistic Placeholder Display */}
        <div
          className="relative max-w-4xl max-h-[72vh] flex items-center justify-center transition-transform duration-200 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          {!imgError ? (
            <img
              src={currentSrc}
              alt={activePhoto.alt}
              onError={handleImageError}
              decoding="async"
              className="max-h-[70vh] max-w-[92vw] sm:max-w-[80vw] object-contain rounded-2xl border border-temple-gold/40 shadow-2xl"
            />
          ) : (
            // Artistic Vector Preview when image file is pending upload
            <div className="w-[85vw] max-w-md aspect-[4/5] rounded-3xl bg-deep-violet/90 border-2 border-temple-gold/50 p-6 flex flex-col items-center justify-between text-center shadow-2xl">
              <div className="w-full flex justify-between items-center text-[10px] text-temple-gold/80 font-mono">
                <span>Shiva Nanda Kathak</span>
                <span className="uppercase">{activePhoto.category}</span>
              </div>

              <div className="my-auto flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-temple-gold/40 bg-midnight/80 flex items-center justify-center text-temple-gold mb-4 shadow-gold-glow">
                  <Camera className="w-10 h-10 text-saffron" />
                </div>
                <h3 className="font-heading font-bold text-lg text-ivory mb-2">
                  {activePhoto.title}
                </h3>
                <div className="px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-[11px] leading-tight">
                  {activePhoto.alt}
                </div>
              </div>

              <span className="text-[10px] text-ivory-muted/70 italic">
                Drop photo into /src/assets/gallery to display
              </span>
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 touch-target p-3 rounded-full bg-deep-violet/85 border border-temple-gold/40 text-temple-gold hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* BOTTOM BAR: Title & Caption */}
      <div className="z-30 text-center max-w-2xl mx-auto pb-2">
        <h3 className="font-heading font-bold text-base sm:text-lg text-ivory mb-1">
          {activePhoto.title}
        </h3>
        <p className="text-xs text-ivory-muted leading-relaxed font-light">
          {activePhoto.caption}
        </p>
      </div>

    </div>
  );
}
