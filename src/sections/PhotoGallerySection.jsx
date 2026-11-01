import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all gallery images
import img1 from '../assets/gallery/1000022241.jpg';
import img2 from '../assets/gallery/1000022246.jpg';
import img3 from '../assets/gallery/1000023692.jpg';
import img4 from '../assets/gallery/1000023733.jpg';
import img5 from '../assets/gallery/1000095611.jpg';
import img6 from '../assets/gallery/1000143785.jpg';

const photos = [
  { src: img1, alt: 'Samidha Karanjekar — UNESCO · AIR performance', caption: 'UNESCO · AIR Performance' },
  { src: img4, alt: 'Shiv Nanda Nritya Taal Ras — group photo with all disciples', caption: 'Nritya Taal Ras · Annual Show' },
  { src: img6, alt: 'Shiv Nanda Classes ensemble — annual stage show', caption: 'Annual Show · Full Ensemble' },
  { src: img5, alt: 'Samidha Karanjekar performing Kathak on stage', caption: 'Stage Recital' },
  { src: img2, alt: 'Samidha Karanjekar performing Kathak on stage', caption: 'Kathak Recital' },
  { src: img3, alt: 'Semi-classical performance with live tabla', caption: 'Semi-Classical Showcase' },
];

// Shared image style — forces browser to respect EXIF orientation
const imgStyle = {
  imageOrientation: 'from-image',
  WebkitImageOrientation: 'from-image',
};

export default function PhotoGallerySection() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((lightbox + photos.length - 1) % photos.length);
  const next = () => setLightbox((lightbox + 1) % photos.length);

  return (
    <section
      id="photos"
      className="py-20 sm:py-28 bg-maroon-deep text-warm-white relative overflow-hidden"
      aria-label="Photo Gallery — Shiv Nanda Kathak Performances"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-marigold text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ चित्र दर्शन ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-gold font-bold mb-3">
            Performances · Recitals · Stage Moments
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white tracking-tight leading-tight">
            Moments from the <span className="text-marigold">Stage</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-warm-white/70 font-sans mt-4 max-w-lg mx-auto leading-relaxed">
            Glimpses of Guru Samidha Karanjekar and her disciples on stage — from intimate solo recitals to grand annual shows.
          </p>
        </div>

        {/* Responsive columns — each image renders at its own natural size */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-0">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative break-inside-avoid mb-2 overflow-hidden rounded-xl border border-antique-gold/25 cursor-pointer group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                style={imgStyle}
                loading="lazy"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm text-marigold font-semibold tracking-wide">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-warm-white/50 font-sans">
            Follow us for more moments ·{' '}
            <a
              href="https://www.instagram.com/samidha.kathak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-marigold hover:text-saffron underline underline-offset-2 transition-colors"
            >
              @samidha.kathak
            </a>
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-marigold transition-colors p-2 rounded-full border border-white/20 hover:border-marigold z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-marigold transition-colors p-2 rounded-full border border-white/20 hover:border-marigold z-10"
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-marigold transition-colors p-2 rounded-full border border-white/20 hover:border-marigold z-10"
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-4xl max-h-[90vh] w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              style={imgStyle}
            />
            <p className="text-center text-marigold text-sm mt-4 font-semibold tracking-wide">
              {photos[lightbox].caption}
            </p>
            <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {photos.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
