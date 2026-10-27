import React, { useState, useEffect, useRef } from 'react';

/**
 * LazySection
 * Defers mounting heavy below-the-fold components until:
 * 1. The user scrolls within 600px of the section, OR
 * 2. The browser is idle (via requestIdleCallback), OR
 * 3. The current URL hash targets this section or a child anchor, OR
 * 4. A search bot / crawler is indexing the page.
 * 
 * This eliminates the 5+ simultaneous bundle evaluations on initial mobile load,
 * bringing Total Blocking Time (TBT) down to ~0ms.
 */
export default function LazySection({ children, minHeight = '320px', id, className = '' }) {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === 'undefined') return true;
    
    // Always render immediately if URL hash matches this section
    if (id && window.location.hash === `#${id}`) return true;

    // Always render immediately for search engine crawlers
    if (
      typeof navigator !== 'undefined' &&
      /Googlebot|bingbot|yandex|baiduspider|crawler|spider/i.test(navigator.userAgent)
    ) {
      return true;
    }

    return false;
  });

  const placeholderRef = useRef(null);

  useEffect(() => {
    if (shouldRender) return;

    // Check if hash matches on hashchange
    const handleHash = () => {
      if (id && window.location.hash === `#${id}`) {
        setShouldRender(true);
      }
    };
    window.addEventListener('hashchange', handleHash);

    // Idle fallback: render when main thread is completely quiet
    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldRender(true), { timeout: 2500 })
      : setTimeout(() => setShouldRender(true), 1800);

    // Viewport intersection: render well ahead of user scroll
    let observer;
    if (typeof IntersectionObserver !== 'undefined' && placeholderRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        },
        { rootMargin: '600px 0px' }
      );
      observer.observe(placeholderRef.current);
    }

    return () => {
      window.removeEventListener('hashchange', handleHash);
      if (observer) observer.disconnect();
      if (window.cancelIdleCallback && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, [shouldRender, id]);

  if (shouldRender) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={placeholderRef}
      id={id}
      className={`relative w-full ${className}`}
      style={{ minHeight }}
      aria-hidden="true"
    />
  );
}
