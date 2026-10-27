import React, { useState, useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';

// SEO MetaTags Component
import MetaTags from './components/seo/MetaTags';

// Layout & Navigation Shell Components (Eagerly loaded for instant LCP)
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import FloatingMobileBar from './components/FloatingMobileBar';
import HeroSection from './sections/HeroSection';

// Polish & Micro-Interactions Primitives
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
import MandalaSectionDivider from './components/ui/MandalaSectionDivider';
import LazySection from './components/ui/LazySection';

// Code-split below-the-fold sections with React.lazy for optimal performance
const GuruSection = lazy(() => import('./sections/GuruSection'));
const PhilosophySection = lazy(() => import('./sections/PhilosophySection'));
const CoursesSection = lazy(() => import('./sections/CoursesSection'));
const GallerySection = lazy(() => import('./sections/GallerySection'));
const MudraSection = lazy(() => import('./sections/MudraSection'));
const ScheduleSection = lazy(() => import('./sections/ScheduleSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const FaqSection = lazy(() => import('./sections/FaqSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const TrialModal = lazy(() => import('./components/TrialModal'));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage'));

// Layers icon removed — /design-system pill deleted from production UI

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesignSystem, setIsDesignSystem] = useState(false);

  // Sync with URL path or hash
  useEffect(() => {
    const checkRoute = () => {
      const isDS =
        window.location.pathname === '/design-system' ||
        window.location.hash === '#design-system';
      setIsDesignSystem(isDS);
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenisInstance;
    try {
      lenisInstance = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      const rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenisInstance.destroy();
      };
    } catch {
      // Fallback to native scrolling
    }
  }, [isDesignSystem]);

  const handleOpenTrial = () => setIsTrialOpen(true);
  const handleCloseTrial = () => setIsTrialOpen(false);

  const navigateTo = (toDesignSystem) => {
    if (toDesignSystem) {
      window.history.pushState(null, '', '/design-system');
      setIsDesignSystem(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', '/');
      setIsDesignSystem(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If viewing the Design System test page
  if (isDesignSystem) {
    return (
      <div className="min-h-screen bg-midnight text-ivory">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-temple-gold border-t-transparent animate-spin" /></div>}>
          <DesignSystemPage onBackToSite={() => navigateTo(false)} />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment text-charcoal flex flex-col font-body">
      
      {/* Comprehensive SEO, Open Graph & JSON-LD Structured Data */}
      <MetaTags />

      {/* 3. SCROLL PROGRESS INDICATOR (Thin gold radiant line at top of screen) */}
      <ScrollProgress />

      {/* 2. CUSTOM CURSOR (Desktop only: gold ghungroo bell trailing pointer & expanding over buttons) */}
      <CustomCursor />

      {/* 1. PRELOADER: Prabhamandala stroke animation & temple doors (max 2.5s, skippable, 1x/session) */}
      <Preloader />

      {/* 2 & 4. NAVBAR: Slim top bar with logo mark, mobile full-screen overlay, desktop scroll-spy */}
      <Navbar
        onOpenTrial={handleOpenTrial}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* /design-system route available via URL: /design-system */}

      {/* MAIN SECTIONS WITH SECTION ANCHORS & ROTATING MANDALA DIVIDERS */}
      <main className="flex-1">
        {/* Anchor #home (Eagerly loaded for instant LCP) */}
        <HeroSection onOpenTrial={handleOpenTrial} />

        {/* Lazy-Loaded Below-the-Fold Sections Wrapped in Suspense & LazySection */}
        <Suspense fallback={<div className="py-12 flex justify-center text-marigold/40"><div className="w-8 h-8 rounded-full border-2 border-marigold border-t-transparent animate-spin" /></div>}>
          {/* Anchor #about (Ivory ground follows Maroon hero naturally) */}
          <LazySection id="about" minHeight="500px">
            <GuruSection onOpenTrial={handleOpenTrial} />
          </LazySection>

          {/* Anchor #courses (Ivory to Ivory transition — elegant lotus divider) */}
          <LazySection id="courses" minHeight="550px">
            <MandalaSectionDivider />
            <CoursesSection onOpenTrial={handleOpenTrial} />
          </LazySection>

          {/* Anchor #gallery (YouTube videos) */}
          <LazySection id="gallery" minHeight="500px">
            <GallerySection />
          </LazySection>


          <LazySection id="testimonials" minHeight="400px">
            <TestimonialsSection />
          </LazySection>

          {/* Anchor #faq (Deep Maroon ground follows Ivory naturally) */}
          <LazySection id="faq" minHeight="450px">
            <FaqSection />
          </LazySection>

          {/* Anchor #contact (Ivory / Maroon split ground follows Maroon naturally) */}
          <LazySection id="contact" minHeight="550px">
            <ContactSection onOpenTrial={handleOpenTrial} />
          </LazySection>

          {/* 5. FOOTER: Address, hours placeholder, social links, and Aum Nataraja Devanagari ornament */}
          <LazySection minHeight="250px">
            <Footer onOpenTrial={handleOpenTrial} />
          </LazySection>
        </Suspense>
      </main>

      {/* 3. STICKY BOTTOM ACTION BAR (Mobile only, hides while menu or trial modal is open) */}
      <FloatingMobileBar
        onOpenTrial={handleOpenTrial}
        isHidden={isMobileMenuOpen || isTrialOpen}
      />

      {/* Interactive Free Trial Booking Dialog */}
      <Suspense fallback={null}>
        <TrialModal isOpen={isTrialOpen} onClose={handleCloseTrial} />
      </Suspense>

    </div>
  );
}
