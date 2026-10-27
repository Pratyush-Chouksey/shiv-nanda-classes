import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../svg/SocialIcons';
import { siteConfig } from '../../data/content';

/**
 * InstagramFollowStrip Component
 * A prominent, luxurious callout strip encouraging visitors to follow
 * @samidha.kathak on Instagram for daily riyaz, student highlights, and stage recitals.
 */
export default function InstagramFollowStrip({ className = "" }) {
  const handle = siteConfig.socialLinks.instagramHandle || "@samidha.kathak";
  const url = siteConfig.socialLinks.instagram || "https://www.instagram.com/samidha.kathak";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 border border-temple-gold/40 bg-gradient-to-r from-deep-violet/90 via-midnight to-deep-violet/90 shadow-2xl ${className}`}
    >
      {/* Decorative Radial Radiance */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-vermilion/30 to-saffron/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-temple-gold/15 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle border highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Instagram Icon & Pitch */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {/* Instagram Avatar / Icon Badge */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-midnight flex items-center justify-center text-ivory">
                <InstagramIcon className="w-8 h-8 text-temple-gold" />
              </div>
            </div>
            {/* Live pulsator */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vermilion opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-vermilion border-2 border-midnight" />
            </span>
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-temple-gold font-bold">
                Follow On Instagram
              </span>
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory">
              {handle}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-muted/90 mt-1 max-w-lg font-light leading-relaxed">
              Explore daily riyaz snippets, behind-the-scenes stage rehearsals, student ghungroo milestones & classical Kathak choreography in Andheri West.
            </p>
          </div>
        </div>

        {/* Right: Direct Follow Button */}
        <div className="shrink-0 w-full sm:w-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide text-midnight bg-gradient-to-r from-temple-gold via-saffron to-temple-gold hover:from-saffron hover:to-temple-gold transition-all duration-300 shadow-gold-glow hover:scale-105 active:scale-95 w-full sm:w-auto"
            aria-label={`Follow ${handle} on Instagram`}
          >
            <InstagramIcon className="w-4 h-4 text-midnight" />
            <span>Follow {handle}</span>
            <ArrowUpRight className="w-4 h-4 text-midnight" />
          </a>
        </div>

      </div>
    </div>
  );
}
