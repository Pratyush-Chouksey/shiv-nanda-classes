import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import LotusSvg from '../svg/LotusSvg';
import { Sparkles, Calendar, Award } from 'lucide-react';

/**
 * LineageTimeline Component
 * Vertical timeline depicting the sacred Guru-Shishya Parampara:
 * 1. Jaipur Gharana
 * 2. Guru Shri Rajkumar Jaipurwale ji (& Guru Smt. [TODO: Add Second Guru Name])
 * 3. Samidha Karanjekar
 * 4. Students & Disciples
 * 
 * Features:
 * - Glowing gold line that animates / draws as you scroll into view
 * - Sacred golden lotus blossom SVG on each node
 * - Respects prefers-reduced-motion
 */
export default function LineageTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const lineageNodes = [
    {
      step: "01",
      title: "Jaipur Gharana Tradition",
      devanagari: "॥ जयपूर घराणा ॥",
      subtitle: "The Ancient Lineage of Rhythm & Chakkars",
      desc: "Distinguished in Indian classical dance for high-speed rhythmic footwork (Tatkar), lightning pirouettes (Chakkars), and rigorous mathematical precision in Teentaal.",
      badge: "Classical Foundation",
    },
    {
      step: "02",
      title: "Guru Shri Rajkumar Jaipurwale ji",
      secondGuru: "Guru Smt. [TODO: Add Second Guru Name]",
      devanagari: "गुरुवर्य श्री राजकुमार जयपूरवाले जी",
      subtitle: "Gharana Maestro & Direct Mentor",
      desc: "Intensive training under the legendary Jaipur Gharana stalwart Guru Shri Rajkumar Jaipurwale ji and esteemed Guru Smt. [TODO: Add Second Guru Name], passing down oral Padant, classical bandishes, and traditional Vandanas.",
      badge: "Direct Guru Shishya Parampara",
    },
    {
      step: "03",
      title: "Samidha Karanjekar",
      devanagari: "विदुषी समिधा कारंजेकर",
      subtitle: "Performer, Teacher & Founder (Since 2014)",
      desc: "Alankaar from Akhil Bharatiya Gandharva Mahavidyalaya Mandal and M.A. in Kathak from Khairagarh University. Nurturing students in Andheri West, Mumbai with 12+ years of teaching excellence.",
      badge: "Alankaar • M.A. Kathak",
    },
    {
      step: "04",
      title: "Students & Disciples",
      devanagari: "शिष्य वृन्द • ८ वार्षिक मंच",
      subtitle: "The Future of Indian Classical Dance",
      desc: "Disciples appearing for recognized Gandharva board examinations and building performance confidence through annual student stage showcases for 8 consecutive years.",
      badge: "8 Years Stage Legacy",
    },
  ];

  return (
    <div ref={containerRef} className="my-10 sm:my-14 w-full relative">
      
      {/* Section Subheading */}
      <div className="text-center mb-8 sm:mb-12">
        <span className="font-devanagari text-saffron text-xs tracking-widest uppercase font-semibold block mb-1">
          ॥ गुरु शिष्य परम्परा ॥
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-ivory tracking-wide">
          Sacred Lineage Timeline
        </h3>
        <p className="text-xs sm:text-sm text-ivory-muted/80 max-w-lg mx-auto mt-1 font-light">
          An unbroken chain of classical pedagogy transmitted from Jaipur Gharana maestros to contemporary disciples.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8">
        
        {/* GLOWING GOLD LINE THAT DRAWS AS YOU SCROLL */}
        <div className="absolute top-4 bottom-4 left-[21px] sm:left-[29px] w-[2.5px] bg-temple-gold/20 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-temple-gold via-saffron to-vermilion shadow-[0_0_12px_rgba(232,176,74,0.8)] h-full origin-top"
            initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
            animate={{ scaleY: isInView || prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* TIMELINE NODES */}
        <div className="space-y-8 sm:space-y-10">
          {lineageNodes.map((node, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-4 sm:gap-6 group"
              initial={{ opacity: 0, x: -16 }}
              animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.25,
                ease: "easeOut",
              }}
            >
              {/* NODE ICON: GOLDEN LOTUS BLOSSOM */}
              <div className="relative z-10 shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-temple-gold/50 bg-midnight/90 flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                <LotusSvg className="w-6 h-6 text-temple-gold" />
                {/* Pulsing subtle aura ring */}
                <span className="absolute inset-0 rounded-full border border-temple-gold/30 animate-pulse pointer-events-none" />
              </div>

              {/* NODE CARD CONTENT */}
              <div className="flex-1 p-4 sm:p-5 rounded-2xl glass-panel border border-temple-gold/25 hover:border-temple-gold/50 transition-all duration-300 shadow-md">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="font-devanagari text-xs text-saffron font-semibold">
                    {node.devanagari}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-deep-violet/80 border border-temple-gold/30 text-[10px] text-temple-gold uppercase tracking-wider font-semibold">
                    {node.badge}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base sm:text-lg text-ivory tracking-wide leading-snug">
                  {node.title}
                </h4>

                {node.secondGuru && (
                  <p className="text-xs text-temple-gold/90 font-medium italic mt-0.5">
                    & {node.secondGuru}
                  </p>
                )}

                <p className="text-xs text-temple-gold/80 font-medium tracking-wide mt-0.5 mb-2">
                  {node.subtitle}
                </p>

                <p className="text-xs text-ivory-muted leading-relaxed font-light">
                  {node.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
}
