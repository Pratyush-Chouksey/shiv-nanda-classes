import React, { useState } from 'react';
import { aboutTeacher } from '../data/content';
import { Award, GraduationCap, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

/**
 * About Section — "Warm Classical Stage"
 *
 * Requirements:
 * - Ivory / parchment background (#FAF4E8)
 * - Editorial layout with a large portrait in an arch frame offset with a thin gold outline
 * - Short readable paragraphs with high-contrast warm charcoal body text
 * - Clean row of 4 static stats (no glow, no frantic count-up numbers)
 * - Single pull-quote in large editorial serif
 * - Simplified minimal lineage timeline with a vertical gold line and lotus markers
 */

// Flat Lotus Marker for Timeline Node
function LotusMarker({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 20 C10 15 9 10 12 6 C15 10 14 15 12 20Z"
        fill="#5A1020"
        stroke="#B8893A"
        strokeWidth="1"
      />
      <path
        d="M12 20 C7 17 5 12 8 9 C10 11 11 15 12 20Z"
        fill="#B8893A"
        opacity="0.85"
      />
      <path
        d="M12 20 C17 17 19 12 16 9 C14 11 13 15 12 20Z"
        fill="#B8893A"
        opacity="0.85"
      />
      <circle cx="12" cy="20" r="1.5" fill="#5A1020" />
    </svg>
  );
}

export default function GuruSection({ onOpenTrial }) {
  const [imgError, setImgError] = useState(false);

  const stats = [
    { value: '12+', label: 'Years Teaching', sub: 'In Andheri West' },
    { value: '8', label: 'Annual Showcases', sub: 'Full stage recitals' },
    { value: 'Jaipur', label: 'Gharana Tradition', sub: 'Pure classical lineage' },
    { value: 'Alankaar', label: 'Board Honors', sub: 'Gandharva Mahavidyalaya' },
  ];

  const lineageNodes = [
    {
      level: 'Parampara',
      title: 'Jaipur Gharana Tradition',
      devanagari: '॥ जयपूर घराणा ॥',
      desc: 'Renowned for rigorous footwork (Tatkar), swift pirouettes (Chakkars), and rhythmic complexity in Teentaal.',
    },
    {
      level: 'Guru',
      title: 'Guru Shri Rajkumar Jaipurwale ji',
      secondGuru: 'Guru Smt. [TODO: Add Second Guru Name]',
      devanagari: 'गुरुवर्य श्री राजकुमार जयपूरवाले जी',
      desc: 'Direct tutelage under Jaipur Gharana maestros, passing down oral Padant, classical bandishes, and Vandanas.',
    },
    {
      level: 'Founder & Mentor',
      title: 'Samidha Karanjekar',
      devanagari: 'विदुषी समिधा कारंजेकर',
      desc: 'Alankaar from Gandharva Mahavidyalaya and M.A. in Kathak from Khairagarh University. Guiding disciples since 2014.',
    },
    {
      level: 'Disciples',
      title: 'Students & Performers',
      devanagari: 'शिष्य वृन्द • ८ वार्षिक मंच',
      desc: 'Disciples mastering Gandharva board examination syllabi and performing in annual classical stage showcases.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-parchment text-charcoal relative overflow-hidden"
      aria-label="About Guru Samidha Karanjekar and Jaipur Gharana Kathak Lineage"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ विदुषी समिधा कारंजेकर ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-bronze font-bold mb-3">
            About the Guru & Heritage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-tight leading-tight">
            Preserving Jaipur Gharana with Grace & Rigor
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
        </div>

        {/* Editorial Layout: Portrait in Arch Frame + Short Readable Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Portrait Column: Arch Frame Offset with Thin Gold Outline */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
              
              {/* Offset decorative hairline outline */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 pointer-events-none rounded-t-[140px] sm:rounded-t-[160px] rounded-b-xl border border-antique-gold/60"
                aria-hidden="true"
              />

              {/* Main Jharokha Arch Frame */}
              <div
                className="relative z-10 w-full overflow-hidden bg-white shadow-md rounded-t-[140px] sm:rounded-t-[160px] rounded-b-xl border-2 border-antique-gold/70"
                style={{
                  boxShadow: '0 8px 30px rgba(90, 16, 32, 0.08)',
                }}
              >
                <div className="relative aspect-[3/4] w-full bg-maroon-deep/10 overflow-hidden">
                  {!imgError ? (
                    <img
                      src={heroImg}
                      alt="Samidha Karanjekar — Kathak Guru"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-parchment to-parchment-deep text-charcoal">
                      <div className="w-16 h-24 border border-antique-gold/60 rounded-t-full rounded-b-md flex items-center justify-center mb-3">
                        <LotusMarker />
                      </div>
                      <p className="font-serif font-bold text-base text-maroon">Samidha Karanjekar</p>
                      <p className="text-xs text-charcoal-muted mt-1">Kathak Performer & Guru</p>
                      <span className="mt-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-antique-gold/15 text-antique-gold font-bold">
                        Photo Placeholder
                      </span>
                    </div>
                  )}

                  {/* Subtle warm base gradient overlay for caption */}
                  <div className="absolute inset-x-0 bottom-0 pt-12 pb-3 px-4 bg-gradient-to-t from-maroon/90 to-transparent text-white text-center">
                    <p className="font-serif font-bold text-sm tracking-wide">Samidha Karanjekar</p>
                    <p className="text-[11px] text-ivory/80 font-sans tracking-wider uppercase">Founder & Head Guru</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Column: Short Readable Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-charcoal leading-relaxed font-sans">
            
            <div className="inline-block border-b border-antique-gold/40 pb-1">
              <span className="text-xs uppercase tracking-widest text-maroon font-bold">
                Jaipur Gharana Pedagogy
              </span>
            </div>

            <p className="text-base sm:text-lg text-charcoal leading-relaxed">
              <span className="font-serif text-3xl font-bold text-maroon float-left mr-2.5 leading-none">
                S
              </span>
              amidha Karanjekar is an accomplished Kathak performer and educator who has guided disciples since 2014. Grounded in the prestigious Jaipur Gharana, her training traces directly through stalwarts Guru Shri Rajkumar Jaipurwale ji and Guru Smt. [TODO: Add Second Guru Name].
            </p>

            <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
              Her teaching centers on making Kathak accessible and fulfilling without diluting its demanding classical grammar. Every batch receives thorough grounding in four pillars: clean footwork technique, rhythmic precision (Laya), expressive storytelling (Bhava), and individual artistic confidence.
            </p>

            <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
              For eight consecutive years, she has directed grand annual student recitals in Mumbai, giving young learners and adults the invaluable experience of live stage performance in traditional costume.
            </p>

            {/* Credentials Row: Clean Ivory Cards with Thin Gold Hairlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              <div className="p-3.5 rounded-lg bg-white border border-antique-gold/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-maroon/10 border border-maroon/20 flex items-center justify-center shrink-0 text-maroon mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-maroon uppercase tracking-wide">Alankaar in Kathak</h3>
                  <p className="text-[11px] text-charcoal-muted mt-0.5">Akhil Bharatiya Gandharva Mahavidyalaya</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-antique-gold/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-maroon/10 border border-maroon/20 flex items-center justify-center shrink-0 text-maroon mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-maroon uppercase tracking-wide">M.A. in Kathak</h3>
                  <p className="text-[11px] text-charcoal-muted mt-0.5">Khairagarh Performing Arts University</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Clean Row of 4 Stats (No glow, no counters flying around) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-14 sm:my-18">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 text-center bg-white rounded-lg border border-antique-gold/35 shadow-xs"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-maroon">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-charcoal mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Single Pull-Quote in Large Serif */}
        <div className="my-14 sm:my-18 max-w-3xl mx-auto text-center px-4">
          <div className="w-12 h-px bg-antique-gold/60 mx-auto mb-6" />
          <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-maroon font-normal leading-relaxed">
            "{aboutTeacher.quote.split('.')[0]}."
          </blockquote>
          <p className="font-devanagari text-xs sm:text-sm text-saffron-deep mt-3 font-semibold">
            "यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः"
          </p>
          <div className="mt-4 text-xs uppercase tracking-widest text-charcoal font-semibold">
            — Guru Samidha Karanjekar · Founder
          </div>
          <div className="w-12 h-px bg-antique-gold/60 mx-auto mt-6" />
        </div>

        {/* Simplified Lineage Timeline: Minimal Elegant Vertical Line with Small Lotus Markers */}
        <div className="mt-16 sm:mt-20 max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-1">
              ॥ गुरु शिष्य परम्परा ॥
            </span>
            <h3 className="font-serif font-bold text-2xl text-maroon">
              The Lineage
            </h3>
            <p className="text-xs text-charcoal-muted mt-1">
              An unbroken tradition of Jaipur Gharana transmission
            </p>
          </div>

          <div className="relative pl-8 sm:pl-10 space-y-8 sm:space-y-10">
            {/* The vertical antique gold hairline */}
            <div
              className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-antique-gold/40"
              aria-hidden="true"
            />

            {lineageNodes.map((node, i) => (
              <div key={i} className="relative flex items-start gap-4 group">
                
                {/* Node Lotus Marker */}
                <div className="absolute -left-[32px] sm:-left-[36px] top-0.5 w-8 h-8 rounded-full bg-parchment flex items-center justify-center shrink-0 border border-antique-gold/40">
                  <LotusMarker />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-antique-bronze px-1.5 py-0.5 rounded bg-antique-bronze/10">
                      {node.level}
                    </span>
                    <span className="font-devanagari text-xs text-saffron-deep font-semibold">
                      {node.devanagari}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-maroon">
                    {node.title}
                  </h4>
                  {node.secondGuru && (
                    <p className="text-xs text-charcoal-muted italic">
                      Co-Mentor: {node.secondGuru}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans pt-0.5">
                    {node.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Clean CTA link */}
          <div className="text-center mt-12 pt-8 border-t border-antique-gold/25">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-maroon hover:text-marigold transition-colors"
            >
              <span>Explore Courses & Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
