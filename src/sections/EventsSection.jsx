import React, { useState } from 'react';
import { eventsContent, siteConfig } from '../data/content';
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  CalendarPlus,
  Check,
  Bell,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '../components/svg/SocialIcons';

/**
 * Generate RFC 5545 standard .ics calendar invite client-side.
 */
function downloadIcsCalendarFile(event) {
  const formatIcsDate = (dateString) => {
    try {
      const d = new Date(dateString);
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    } catch {
      return '20261128T130000Z';
    }
  };

  const start = formatIcsDate(event.startDateTime || '2026-11-28T18:30:00+05:30');
  const end = formatIcsDate(event.endDateTime || '2026-11-28T21:30:00+05:30');
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const uid = `${event.id || 'event'}-${Date.now()}@shivanandakathak.com`;

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Shiva Nanda Kathak Classes//Events//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${(event.title || 'Kathak Classical Event').replace(/[,;]/g, ' ')}`,
    `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${(event.venue || event.location || 'Andheri West, Mumbai').replace(/[,;]/g, ' ')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const icsBlob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(icsBlob);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = url;
  const fileName = `${(event.title || 'kathak-event')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .slice(0, 32)}.ics`;
  downloadAnchor.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  window.URL.revokeObjectURL(url);
}

function shareEventOnWhatsApp(event) {
  const text =
    `*Shiva Nanda Kathak Classes — Upcoming Event*\n\n` +
    `🎭 *${event.title}*\n` +
    `📅 *Date:* ${event.fullDate || event.date}\n` +
    `⏰ *Time:* ${event.time}\n` +
    `📍 *Venue:* ${event.venue || event.location}\n\n` +
    `${event.description}\n\n` +
    `Inquiries: https://wa.me/919920764766?text=${encodeURIComponent(
      'Hi Samidha ji, I am inquiring about ' + event.title
    )}`;

  const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(shareUrl, '_blank', 'noopener,noreferrer');
}

/**
 * EventsSection — "Warm Classical Stage"
 *
 * Requirements:
 * - Deep maroon background (#5A1020) for rhythmic alternation
 * - Vertical timeline on mobile
 * - Big serif numeral in circular gold badge
 * - Simple ivory cards with gold borders
 * - Add to calendar (.ics) and Share on WhatsApp
 * - Empty state with graceful notice & social links
 */
export default function EventsSection({ onOpenTrial }) {
  const [downloadedEventId, setDownloadedEventId] = useState(null);
  const events = eventsContent.events || [];

  const handleDownloadIcs = (event) => {
    downloadIcsCalendarFile(event);
    setDownloadedEventId(event.id);
    setTimeout(() => setDownloadedEventId(null), 3000);
  };

  return (
    <section
      id="events"
      className="py-20 sm:py-28 bg-maroon text-ivory relative overflow-hidden border-t border-antique-gold/25"
      aria-label="Upcoming Kathak Events and Annual Recitals"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="font-devanagari text-marigold text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ आगामी कार्यक्रम व महोत्सव ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-marigold font-bold mb-3">
            Recitals & Showcases · Mumbai
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Upcoming Recitals & Stage Events
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/60" />
          </div>
          <p className="text-sm sm:text-base text-ivory/80 font-sans mt-4 max-w-md mx-auto leading-relaxed">
            Witness the discipline and joy of Jaipur Gharana Kathak live on stage. Disciples and Guru Samidha perform across prestigious Mumbai venues.
          </p>
        </div>

        {/* EVENTS TIMELINE LIST OR GRACEFUL EMPTY STATE */}
        {events && events.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            {events.map((event) => {
              const isDownloaded = downloadedEventId === event.id;

              return (
                <div
                  key={event.id}
                  className="bg-white text-charcoal rounded-xl border border-antique-gold/40 shadow-md p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  {/* Left: Circular Gold Badge with Big Serif Numeral + Details */}
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    
                    {/* Big Serif Numeral in Circular Gold Badge */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-parchment border-2 border-antique-gold/70 flex flex-col items-center justify-center shrink-0 shadow-xs">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-maroon leading-none">
                        {event.dateBadge?.day || event.date?.split(' ')[0] || '28'}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-charcoal-muted tracking-wider mt-0.5">
                        {event.dateBadge?.month || event.date?.split(' ')[1] || 'NOV'}
                      </span>
                    </div>

                    {/* Event Info */}
                    <div className="space-y-1.5 flex-1">
                      <span className="inline-block text-[10px] uppercase font-bold text-maroon px-2 py-0.5 rounded bg-maroon/10 tracking-wider">
                        {event.badge || 'Annual Showcase'}
                      </span>
                      
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-maroon leading-snug">
                        {event.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-muted pt-1">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-antique-gold shrink-0" />
                          <span>{event.time}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-antique-gold shrink-0" />
                          <span>{event.venue || event.location}</span>
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Right: Actions (Add to Calendar & WhatsApp Share) */}
                  <div className="flex sm:flex-col items-center gap-2.5 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-antique-gold/20">
                    <button
                      onClick={() => handleDownloadIcs(event)}
                      className={`w-full md:w-44 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border ${
                        isDownloaded
                          ? 'bg-maroon-deep text-white border-maroon'
                          : 'bg-parchment text-maroon border-antique-gold/50 hover:bg-parchment-deep'
                      }`}
                    >
                      {isDownloaded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-marigold" />
                          <span>Added to Calendar</span>
                        </>
                      ) : (
                        <>
                          <CalendarPlus className="w-3.5 h-3.5 text-antique-gold" />
                          <span>Add to Calendar</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => shareEventOnWhatsApp(event)}
                      className="w-full md:w-44 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-deep text-white border border-maroon"
                    >
                      <Share2 className="w-3.5 h-3.5 text-marigold" />
                      <span>Share on WhatsApp</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Graceful Empty State */
          <div className="bg-white/95 text-charcoal rounded-xl border border-antique-gold/40 p-8 sm:p-12 text-center max-w-xl mx-auto shadow-md">
            <div className="w-14 h-14 rounded-full bg-parchment border border-antique-gold/60 mx-auto flex items-center justify-center text-maroon mb-4">
              <Bell className="w-6 h-6 text-antique-gold" />
            </div>
            <h3 className="font-serif font-bold text-xl text-maroon mb-2">
              Next Annual Showcase: Announcing Soon
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans max-w-md mx-auto mb-6">
              Our 9th annual grand stage production is currently being choreographed. Follow our social channels for announcements, guest artist reveals, and ticketing dates.
            </p>
            <div className="flex justify-center items-center gap-4">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-parchment border border-antique-gold/40 flex items-center justify-center text-maroon hover:text-maroon-deep hover:bg-parchment-deep transition-all"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-parchment border border-antique-gold/40 flex items-center justify-center text-maroon hover:text-maroon-deep hover:bg-parchment-deep transition-all"
                aria-label="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-parchment border border-antique-gold/40 flex items-center justify-center text-maroon hover:text-maroon-deep hover:bg-parchment-deep transition-all"
                aria-label="Connect on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
