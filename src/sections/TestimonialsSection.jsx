import React, { useState, useEffect, useRef } from 'react';
import { testimonialsContent } from '../data/content';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

/**
 * TestimonialsSection — "Warm Classical Stage"
 *
 * Requirements:
 * - Ivory / parchment background (#FAF4E8)
 * - Swipeable carousel of quote cards
 * - Large antique gold quotation mark
 * - Student/parent name, duration, and role
 * - Simple cards, quiet motion, auto-advance every 6s, pausing on touch
 */
export default function TestimonialsSection() {
  const reviews = testimonialsContent.reviews || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Auto-advance every 6s (pauses on touch or hover)
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentReview = reviews[currentIndex] || {};

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-parchment text-charcoal relative overflow-hidden border-t border-antique-gold/20"
      aria-label="Student and Parent Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ शिष्य व पालक अनुभव ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-bronze font-bold mb-3">
            Voices of Disciples & Families
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-tight leading-tight">
            Words from Our Kathak Family
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-charcoal/80 font-sans mt-4 max-w-md mx-auto leading-relaxed">
            Reflections from students preparing for Gandharva board diplomas and parents witnessing their children blossom on stage.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Quote Card */}
          <div className="bg-white rounded-xl border border-antique-gold/35 shadow-sm p-7 sm:p-12 relative overflow-hidden text-center transition-all duration-300">
            
            {/* Large Gold Quotation Mark */}
            <div
              className="font-serif text-6xl sm:text-7xl text-antique-gold/50 leading-none select-none mb-2"
              aria-hidden="true"
            >
              “
            </div>

            {/* Review Quote Text */}
            <blockquote className="font-serif italic text-base sm:text-xl lg:text-2xl text-maroon font-normal leading-relaxed max-w-2xl mx-auto mb-6">
              {currentReview.text || currentReview.quote}
            </blockquote>

            {/* Subtle Divider */}
            <div className="w-12 h-px bg-antique-gold/40 mx-auto mb-4" />

            {/* Author Details */}
            <div>
              <p className="font-serif font-bold text-base text-charcoal">
                {currentReview.author || currentReview.name}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-charcoal-muted mt-1 font-sans">
                <span>{currentReview.role || 'Student'}</span>
                {currentReview.duration && (
                  <>
                    <span className="text-antique-gold/60">•</span>
                    <span className="text-antique-bronze font-semibold">{currentReview.duration}</span>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-antique-gold/40 text-maroon hover:bg-parchment-deep transition-all flex items-center justify-center shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Counter and Stars Indicator */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1 text-antique-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-medium text-antique-bronze tracking-wider">
                {currentIndex + 1} of {reviews.length} reviews
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-antique-gold/40 text-maroon hover:bg-parchment-deep transition-all flex items-center justify-center shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
