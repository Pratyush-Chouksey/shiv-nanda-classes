import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/content';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

/**
 * Sticky Bottom Action Bar — "Warm Classical Stage"
 * Visible on mobile only (< 768px), once scrolled past the hero section.
 * Eliminates duplicate CTAs on hero and prevents clipping on 360px screens.
 * Three buttons: Call · WhatsApp · Book Trial
 * Hides while mobile menu or trial modal is open.
 */
export default function FloatingMobileBar({ onOpenTrial, isHidden = false }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once user starts scrolling past the hero (220px)
      setScrolledPastHero(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHidden || !scrolledPastHero) return null;

  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-parchment/97 backdrop-blur-xl border-t border-antique-gold/40 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-warm-lg transition-all duration-300 animate-slideUp"
      aria-label="Mobile Quick Contact Actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">

        {/* 1. Call */}
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="touch-target col-span-1 rounded-xl border border-antique-gold/40 bg-white text-charcoal font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:border-antique-gold hover:text-saffron"
          aria-label={`Call ${siteConfig.displayPhone}`}
        >
          <Phone className="w-3.5 h-3.5 text-saffron" />
          <span>Call</span>
        </a>

        {/* 2. WhatsApp */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target col-span-1 rounded-xl border border-emerald-300/60 bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp with Samidha Karanjekar"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* 3. Book Trial */}
        <button
          onClick={onOpenTrial}
          className="touch-target col-span-1 rounded-xl bg-marigold text-maroon-deep font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-saffron cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Book Trial</span>
        </button>

      </div>
    </aside>
  );
}
