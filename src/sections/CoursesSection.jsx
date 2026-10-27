import React, { useRef, useState } from 'react';
import MudraSvg from '../components/svg/MudraSvg';
import TaalWheel from '../components/ui/TaalWheel';
import { siteConfig } from '../data/content';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';

/**
 * CoursesSection — "Warm Classical Stage"
 *
 * Requirements:
 * - Ivory cards with thin gold borders and a muted maroon header band
 * - Each card has a hand-drawn-style hasta mudra line icon in maroon
 * - Mobile carousel shows a peek of the next card (snap-x, 82vw width, peek offset)
 * - Flat maroon and gold Teen Taal circle diagram below
 * - Zero audio, zero glowing particles, high contrast 4.5:1
 */
export default function CoursesSection({ onOpenTrial }) {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const courses = [
    {
      id: "classical-training",
      title: "Kathak Classical Training",
      devanagari: "शास्त्रीय कथक वर्ग (प्रारम्भिक ते विशारद)",
      mudraId: "pataka",
      mudraName: "Pataka Mudra",
      mudraMeaning: "Foundational classical lines & victory",
      level: "Level 1 • Prarambhik to Visharad",
      shortDesc: "Comprehensive classical training in Jaipur Gharana footwork (Tatkar), oral recitation (Padant), graceful Hastaks, and lightning pirouettes (Chakkars).",
      keyPoints: [
        "Rigorous Jaipur Gharana footwork & 16-matra Teentaal mastery",
        "Amad, Tukra, Tora, Parans, and expressive Vandanas",
        "Stage preparation for our 8-year legacy annual productions",
      ],
      fees: "Fees: Contact for details",
      whatsappMessage: "Hello Samidha ji, I would like to enquire about the Kathak Classical Training program at Shiva Nanda Classes.",
    },
    {
      id: "exam-preparation",
      title: "Gandharva Exam Prep & Alankaar",
      devanagari: "गांधर्व महाविद्यालय परीक्षा व अलंकार वर्ग",
      mudraId: "tripataka",
      mudraName: "Tripataka Mudra",
      mudraMeaning: "Royal crowns & sacred classical scholarship",
      level: "Level 2 • Certified Board Diplomas",
      shortDesc: "Structured syllabus preparation for recognized Gandharva board examinations from Prarambhik through Visharad and advanced Alankaar mentorship.",
      keyPoints: [
        "Full board curriculum coaching: Prarambhik to Visharad",
        "Theory Shastra coaching, viva preparation, and oral Padant",
        "Official Mumbai exam center registration and guidance",
      ],
      fees: "Fees: Contact for details",
      whatsappMessage: "Hello Samidha ji, I would like to enquire about the Gandharva Examination Prep & Alankaar program at Shiva Nanda Classes.",
    },
    {
      id: "semi-classical",
      title: "Semi-Classical Batches",
      devanagari: "उप-शास्त्रीय नृत्य वर्ग",
      mudraId: "alapadma",
      mudraName: "Alapadma Mudra",
      mudraMeaning: "Blooming lotus & lyrical emotion",
      level: "Level 3 • Adults & Beginners",
      shortDesc: "Expressive choreographies blending classical Kathak grace with soulful bhajans, thumris, and Sufi melodies in a warm, encouraging environment.",
      keyPoints: [
        "Fluid body language, graceful wrist circles, and facial Abhinaya",
        "Joyful classical fitness and posture alignment for all age groups",
        "No prior classical dance background required to join",
      ],
      fees: "Fees: Contact for details",
      whatsappMessage: "Hello Samidha ji, I would like to enquire about the Semi-Classical Batches at Shiva Nanda Classes.",
    },
    {
      id: "workshops-choreography",
      title: "Workshops & Intensives",
      devanagari: "विशेष कार्यशाळा व नृत्यदिग्दर्शन",
      mudraId: "ardhachandra",
      mudraName: "Ardhachandra Mudra",
      mudraMeaning: "Crescent moon & artistic refinement",
      level: "Level 4 • Custom Masterclasses",
      shortDesc: "Specialized intensives focusing on high-speed pirouettes (Chakkars), intricate Layakari, and bespoke classical choreography for stage events.",
      keyPoints: [
        "Masterclasses in Jaipur Gharana rhythmic velocity & Tihais",
        "Bespoke choreography for festivals, recitals, and milestones",
        "Stage lighting, costume aesthetics, and stage presence coaching",
      ],
      fees: "Fees: Contact for details",
      whatsappMessage: "Hello Samidha ji, I would like to enquire about the Workshops & Special Choreographies at Shiva Nanda Classes.",
    },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.82;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(index, 0), courses.length - 1));
  };

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSlide(index);
    }
  };

  return (
    <section
      id="courses"
      className="py-20 sm:py-28 bg-parchment-deep text-charcoal relative overflow-hidden border-t border-antique-gold/20"
      aria-label="Kathak Courses and Programs"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ अभ्यासक्रम व वर्ग ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-bronze font-bold mb-3">
            Offerings & Batches · Andheri West
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-tight leading-tight">
            Programs Rooted in Classical Heritage
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-charcoal/80 font-sans mt-4 max-w-lg mx-auto leading-relaxed">
            From young beginners taking their first steps to adult enthusiasts and Gandharva degree aspirants, every disciple is mentored with warmth, precision, and joy.
          </p>
        </div>

        {/* 1. COURSES CARDS: MOBILE PEEK CAROUSEL & 2x2 GRID ON DESKTOP */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-5 sm:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => {
            const encodedMsg = encodeURIComponent(course.whatsappMessage);
            const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={course.id}
                className="w-[82vw] max-w-[325px] shrink-0 md:w-auto md:max-w-none snap-center flex flex-col justify-between bg-white rounded-xl border border-antique-gold/35 shadow-xs hover:border-antique-gold/70 transition-all overflow-hidden"
              >
                <div>
                  {/* Muted Maroon Header Band */}
                  <div className="bg-maroon text-white px-5 py-3.5 flex items-center justify-between border-b border-antique-gold/30">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-marigold">
                      {course.level}
                    </span>
                    <span className="font-devanagari text-xs text-ivory/80">
                      {course.mudraName}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    
                    {/* Mudra Emblem + Titles Row */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Hand-drawn-style hasta mudra line icon in maroon */}
                      <div className="w-14 h-14 rounded-lg bg-parchment border border-antique-gold/30 flex items-center justify-center p-1.5 shrink-0">
                        <MudraSvg id={course.mudraId} theme="maroon" className="w-full h-full" />
                      </div>
                      
                      <div>
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-maroon leading-snug">
                          {course.title}
                        </h3>
                        <p className="font-devanagari text-xs text-saffron-deep font-semibold mt-0.5">
                          {course.devanagari}
                        </p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed font-sans mb-4">
                      {course.shortDesc}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-2 border-t border-antique-gold/15">
                      {course.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/80 leading-snug">
                          <Check className="w-3.5 h-3.5 text-maroon shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Footer: Fees Line & Enquire Button */}
                <div className="p-4 sm:p-5 bg-parchment/60 border-t border-antique-gold/25 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block font-semibold">
                      Schedule & Tuition
                    </span>
                    <span className="text-xs font-bold text-maroon">
                      {course.fees}
                    </span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-maroon hover:bg-maroon-deep text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-xs"
                    aria-label={`Enquire - ${course.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-marigold" />
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 text-white" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex md:hidden items-center justify-center gap-1 mt-4">
          {courses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className="p-2 flex items-center justify-center focus:outline-none"
              style={{ minWidth: '36px', minHeight: '36px' }}
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? 'w-6 h-1.5 bg-maroon'
                    : 'w-1.5 h-1.5 bg-antique-gold/40'
                }`}
              />
            </button>
          ))}
        </div>

        {/* 2. FLAT MAROON & GOLD TEEN TAAL CIRCULAR DIAGRAM */}
        <TaalWheel />

      </div>
    </section>
  );
}
