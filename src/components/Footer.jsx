import React from 'react';
import { siteConfig, navigationLinks } from '../data/content';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './svg/SocialIcons';

/**
 * Footer — "Warm Classical Stage"
 *
 * Requirements:
 * - Maroon background (#3D0A15)
 * - Simple, clean typography
 * - Full address block
 * - Social profiles (Instagram, YouTube, Facebook)
 * - Small sacred Devanagari line
 * - Zero glowing particles or neon halos
 */
export default function Footer({ onOpenTrial }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maroon-deep text-ivory border-t border-antique-gold/25 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Small Sacred Devanagari Line & Academy Brand */}
        <div className="text-center pb-10 border-b border-antique-gold/20">
          <span className="font-devanagari text-marigold text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ ॐ श्री नटराजाय नमः ॥
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            {siteConfig.academyName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-antique-gold font-bold mt-1">
            Jaipur Gharana Kathak Academy · Andheri West, Mumbai
          </p>
        </div>

        {/* 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 py-10 border-b border-antique-gold/20 text-xs text-ivory/80 font-sans">
          
          {/* Col 1: Studio Address */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Studio Address
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {siteConfig.fullAddress}
              </p>
            </div>
            <p className="text-[11px] text-antique-gold font-medium">
              Landmarks: {siteConfig.landmarks}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="hover:text-marigold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact & Socials */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-marigold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-marigold" />
                <span>{siteConfig.displayPhone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-marigold transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-marigold" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-antique-gold/40 flex items-center justify-center text-marigold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-antique-gold/40 flex items-center justify-center text-marigold hover:text-white transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-antique-gold/40 flex items-center justify-center text-marigold hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory/60 font-sans">
          <p>
            © {new Date().getFullYear()} Shiva Nanda Kathak Classes. Affiliated with Akhil Bharatiya Gandharva Mahavidyalaya Mandal.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-antique-gold hover:text-white transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
