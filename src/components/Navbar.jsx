import React, { useState, useEffect } from 'react';
import { siteConfig, navigationLinks } from '../data/content';
import { Phone, Menu, X } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './svg/SocialIcons';

/**
 * Navbar — "Warm Classical Stage" redesign
 *
 * Changes from old version:
 * - Light parchment background on scroll (was dark glass)
 * - Dark maroon on dark hero (transparent until scroll)
 * - TRIAL button REMOVED from mobile header (bottom bar handles mobile CTA)
 * - TRIAL button kept for desktop only
 * - No glowing active-state drop-shadow — uses antique-gold underline instead
 * - Mobile menu: warm maroon overlay, no cosmic mandala watermark
 * - Simple scallop/hairline ornament at top of mobile menu
 */
export default function Navbar({ onOpenTrial, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true); // start dark — hero is maroon

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Hero section is roughly the first viewport height
      const heroEl = document.getElementById('home');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : window.innerHeight;
      setOnDark(y < heroBottom - 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const sectionIds = navigationLinks.map((i) => i.id);
    const spy = () => {
      const pos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && pos >= el.offsetTop) { setActiveSection(sectionIds[i]); break; }
      }
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
    return () => window.removeEventListener('scroll', spy);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMenu  = () => setIsMobileMenuOpen(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Nav background logic
  const navBg = scrolled
    ? onDark
      ? 'bg-maroon/95 backdrop-blur-lg border-b border-antique-gold/25 shadow-warm-md'
      : 'bg-parchment/96 backdrop-blur-lg border-b border-antique-gold/25 shadow-warm-md'
    : onDark
    ? 'bg-maroon-deep/80 backdrop-blur-md'
    : 'bg-transparent';

  const logoText  = onDark && !scrolled ? 'text-warm-white' : scrolled && !onDark ? 'text-charcoal'  : 'text-warm-white';
  const logoSub   = onDark && !scrolled ? 'text-marigold/80': scrolled && !onDark ? 'text-saffron'   : 'text-marigold/80';
  const navLink   = onDark && !scrolled ? 'text-warm-white/80 hover:text-marigold' : 'text-charcoal/75 hover:text-maroon';
  const activeClr = onDark && !scrolled ? 'text-marigold' : 'text-saffron';
  const menuIcon  = onDark && !scrolled ? 'text-warm-white' : 'text-charcoal';

  return (
    <>
      {/* ── SLIM STICKY TOP BAR ─────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2.5 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-antique-gold rounded-lg p-1 shrink-0"
              onClick={closeMenu}
            >
              {/* Om emblem — simple antique-gold circle, no spinning mandala */}
              <div
                aria-hidden="true"
                className="w-9 h-9 rounded-full border border-antique-gold/60 flex items-center justify-center bg-maroon/20 group-hover:border-marigold transition-colors shrink-0"
              >
                <span className="font-devanagari text-marigold text-base font-bold leading-none">ॐ</span>
              </div>

              <div className="flex flex-col">
                <span className={`font-display font-bold text-sm sm:text-base leading-tight transition-colors ${logoText} group-hover:text-marigold`}>
                  Shiva Nanda Kathak
                </span>
                <span className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-medium transition-colors ${logoSub}`}>
                  Samidha Karanjekar · Andheri West
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Desktop Navigation">
              {navigationLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-semibold uppercase tracking-wider py-1.5 transition-all relative ${
                      isActive ? activeClr : navLink
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Underline — flat antique-gold, no glow */}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-antique-gold rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className={`touch-target px-3.5 py-2 rounded-full border border-antique-gold/40 hover:border-antique-gold text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 ${
                  onDark && !scrolled ? 'text-warm-white hover:text-marigold' : 'text-charcoal hover:text-saffron'
                }`}
                aria-label={`Call ${siteConfig.displayPhone}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.displayPhone}</span>
              </a>

              {/* Desktop TRIAL button — appears on scroll to maintain exactly 1 primary CTA on hero */}
              {scrolled && (
                <button
                  onClick={onOpenTrial}
                  className="touch-target px-5 py-2.5 rounded-full bg-marigold text-maroon-deep font-bold text-xs tracking-wider uppercase hover:bg-saffron transition-all active:scale-95"
                >
                  Book Trial
                </button>
              )}
            </div>

            {/* Mobile: hamburger ONLY — no TRIAL pill in header on mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleMenu}
                className={`touch-target p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-antique-gold rounded-lg ${menuIcon}`}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen
                  ? <X    className="w-6 h-6 text-marigold" />
                  : <Menu className="w-6 h-6" />
                }
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── FULL-SCREEN MOBILE MENU ─────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 flex flex-col bg-maroon-deep animate-fadeIn overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
        >
          {/* Scalloped top border ornament */}
          <div className="w-full h-1 scallop-border-top" />

          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 touch-target p-2.5 rounded-full border border-antique-gold/40 text-marigold hover:bg-maroon transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo at top of menu */}
          <div className="pt-14 px-6 pb-2 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border border-antique-gold/60 flex items-center justify-center">
              <span className="font-devanagari text-marigold text-sm font-bold">ॐ</span>
            </div>
            <div>
              <div className="font-display font-bold text-warm-white text-sm leading-tight">Shiva Nanda Kathak</div>
              <div className="text-[9px] text-marigold/70 tracking-widest uppercase">Samidha Karanjekar · Andheri West</div>
            </div>
          </div>

          {/* Hairline separator */}
          <div className="mx-6 h-px bg-antique-gold/20 mt-3" />

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navigationLinks.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={`touch-target font-display text-2xl py-3 px-2 transition-all flex items-center gap-3 border-b border-antique-gold/10 ${
                    isActive
                      ? 'text-marigold font-bold'
                      : 'text-warm-white/85 hover:text-marigold'
                  }`}
                >
                  {/* Thin antique-gold bar for active */}
                  <span className={`w-1 h-6 rounded-full shrink-0 ${isActive ? 'bg-marigold' : 'bg-transparent'}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Bottom: Book Trial CTA + contact info */}
          <div className="px-6 pb-8 pt-4 space-y-3 border-t border-antique-gold/20">
            <button
              onClick={() => { closeMenu(); onOpenTrial(); }}
              className="touch-target w-full py-3.5 rounded-full bg-marigold text-maroon-deep font-bold text-sm tracking-wider active:scale-98 transition-all"
            >
              Book a Free Trial Class
            </button>

            <a
              href={`tel:${siteConfig.phone}`}
              className="touch-target w-full py-3 rounded-full border border-antique-gold/40 text-marigold text-sm font-semibold tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {siteConfig.displayPhone}</span>
            </a>

            {/* Social */}
            <div className="flex items-center justify-center gap-4 pt-1">
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="touch-target p-2 text-warm-white/60 hover:text-marigold transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="touch-target p-2 text-warm-white/60 hover:text-marigold transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="touch-target p-2 text-warm-white/60 hover:text-marigold transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[10px] text-warm-white/40 text-center leading-tight">
              {siteConfig.fullAddress}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
