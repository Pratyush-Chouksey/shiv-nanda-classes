import React from 'react';
import { scheduleContent, siteConfig } from '../data/content';
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ScheduleSection({ onOpenTrial }) {
  return (
    <section id="schedule" className="py-20 sm:py-28 bg-midnight relative overflow-hidden border-t border-temple-gold/15">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-deep-violet/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="font-devanagari text-saffron text-xs sm:text-sm tracking-widest uppercase font-semibold block mb-2">
            {scheduleContent.devanagari}
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/25 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{scheduleContent.sectionTag}</span>
          </div>
          <h2 className="font-heading font-black text-fluid-title text-ivory tracking-tight">
            {scheduleContent.title}
          </h2>
          <p className="text-fluid-body text-ivory/80 font-light mt-4 leading-relaxed">
            {scheduleContent.description}
          </p>
        </div>

        {/* Studio Highlights Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {scheduleContent.locationHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-deep-violet/60 border border-temple-gold/20 flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-temple-gold shrink-0" />
              <span className="text-xs text-ivory/90 font-medium leading-snug">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Timetable Days Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {scheduleContent.days.map((dayGroup, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-temple-gold/25 hover:border-temple-gold/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Day Header */}
                <div className="pb-4 mb-4 border-b border-temple-gold/20">
                  <h3 className="font-heading font-bold text-lg text-temple-gold">
                    {dayGroup.day}
                  </h3>
                </div>

                {/* Batch Slots */}
                <div className="space-y-3.5">
                  {dayGroup.batches.map((batch, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-3.5 rounded-xl bg-midnight/80 border border-temple-gold/15 hover:border-temple-gold/40 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-ivory">
                          {batch.name}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-saffron/20 text-saffron">
                          {batch.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-ivory-muted">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-temple-gold" />
                          <span>{batch.time}</span>
                        </div>
                        <span className="text-temple-gold/80 font-medium">{batch.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={onOpenTrial}
                  className="touch-target w-full py-2.5 rounded-xl border border-temple-gold/40 hover:border-temple-gold hover:bg-temple-gold/10 text-ivory hover:text-temple-gold text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-temple-gold" />
                  <span>Reserve Slot in this Batch</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Andheri Studio Location Bar */}
        <div className="mt-12 p-5 rounded-2xl bg-deep-violet/40 border border-temple-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-vermilion/20 border border-vermilion flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-vermilion" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-saffron font-bold block">
                Studio Address (Andheri West)
              </span>
              <span className="text-xs text-ivory/90">
                {siteConfig.fullAddress}
              </span>
            </div>
          </div>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target px-4 py-2 rounded-xl bg-temple-gold/20 hover:bg-temple-gold/30 border border-temple-gold/40 text-temple-gold text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Get Directions on Maps
          </a>
        </div>

      </div>
    </section>
  );
}
