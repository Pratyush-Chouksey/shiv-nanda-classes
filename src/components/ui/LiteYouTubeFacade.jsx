import React, { useState } from 'react';
import { Play } from 'lucide-react';

/**
 * LiteYouTubeFacade — "Warm Classical Stage"
 *
 * Lightweight video facade that loads iframe only on user click.
 * Styled in warm parchment and antique gold with maroon accents.
 */
export default function LiteYouTubeFacade({
  youtubeId,
  title,
  description,
  duration,
  thumbnail,
  className = "",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  const ytThumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const displayThumb = thumbError ? (thumbnail || ytThumb) : (thumbnail || ytThumb);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`group relative rounded-xl overflow-hidden border border-antique-gold/30 hover:border-antique-gold/80 bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col ${className}`}
    >
      {/* Video Container (16:9 ratio) */}
      <div className="relative aspect-video w-full overflow-hidden bg-parchment-deep">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="w-full h-full relative cursor-pointer group/btn text-left focus:outline-none"
            aria-label={title}
          >
            {/* Thumbnail Image */}
            <img
              src={displayThumb}
              alt=""
              aria-hidden="true"
              width="640"
              height="360"
              onError={() => setThumbError(true)}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Subtle Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-black/20" />

            {/* Duration pill */}
            {duration && (
              <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-maroon/90 text-[10px] font-sans font-medium text-white z-10 pointer-events-none">
                {duration}
              </span>
            )}

            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-12 h-12 rounded-full bg-maroon/90 text-white border border-antique-gold/60 flex items-center justify-center shadow-md group-hover/btn:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-marigold text-marigold ml-0.5" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
          />
        )}
      </div>

      {/* Video Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif font-bold text-sm text-maroon group-hover:text-maroon-deep transition-colors line-clamp-1">
            {title}
          </h4>
          <p className="text-xs text-charcoal/80 mt-1 line-clamp-2 font-sans leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
