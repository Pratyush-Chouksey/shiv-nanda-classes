import React from 'react';
import { youtubeVideosPlaceholder, siteConfig } from '../data/content';
import LiteYouTubeFacade from '../components/ui/LiteYouTubeFacade';
import { ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/svg/SocialIcons';

/**
 * YouTubeSection — showcases real performances and student recitals from the YouTube channel.
 */
export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-parchment text-charcoal relative overflow-hidden border-t border-antique-gold/20"
      aria-label="Kathak Dance Videos and YouTube Channel"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ चलचित्र दर्शन ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-bronze font-bold mb-3">
            Performances · Recitals · Student Showcases
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-tight leading-tight">
            Watch on YouTube
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-charcoal/80 font-sans mt-4 max-w-lg mx-auto leading-relaxed">
            Real performances, recitals &amp; student showcases from our channel
          </p>
        </div>

        {/* YouTube Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {youtubeVideosPlaceholder.map((video) => (
            <LiteYouTubeFacade
              key={video.id}
              youtubeId={video.youtubeId}
              title={video.title}
              description={video.description}
              duration={video.duration}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>

        {/* YouTube channel link */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-maroon">
          <a
            href="https://youtube.com/@samidhakaranjekar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-maroon text-white hover:bg-maroon-deep transition-colors duration-200 text-xs font-semibold tracking-wide shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Visit Our YouTube Channel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-maroon-deep hover:underline"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Follow @samidha.kathak on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
