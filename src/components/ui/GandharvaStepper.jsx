import React from 'react';
import { Award, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * GandharvaStepper Component
 * Displays the 5-stage progressive exam syllabus:
 * Prarambhik -> Praveshika -> Madhyama -> Visharad -> Alankaar
 * Marked as "as per the Gandharva Mahavidyalaya syllabus", with a TODO to confirm exact stage names with the client.
 */
export default function GandharvaStepper() {
  const stages = [
    {
      step: 1,
      name: "Prarambhik",
      devanagari: "प्रारम्भिक",
      level: "Stage 1 • Initiation",
      duration: "1st Year",
      desc: "Foundational Tatkar footwork in Teentaal, basic Hastak hand movements, Guru Vandana, and oral Padant recitation.",
    },
    {
      step: 2,
      name: "Praveshika",
      devanagari: "प्रवेशिका",
      level: "Stage 2 • Elementary",
      duration: "Years 2 – 3",
      desc: "Praveshika Pratham & Purna. Mastery of Thaath, Amad, simple Tukras, basic Kavitt, and introduction to Jhaptal (10 matras).",
    },
    {
      step: 3,
      name: "Madhyama",
      devanagari: "मध्यमा",
      level: "Stage 3 • Intermediate",
      duration: "Years 4 – 5",
      desc: "Madhyama Pratham & Purna. Complex Tihais, Chakkar velocity, expressional Abhinaya, and comprehensive Shastra music theory.",
    },
    {
      step: 4,
      name: "Visharad",
      devanagari: "विशारद",
      level: "Stage 4 • Classical Degree",
      duration: "Years 6 – 7",
      desc: "Visharad Pratham & Purna. Equivalent to Bachelor of Arts. Solo stage presentation, intricate Layakari, and viva examination.",
    },
    {
      step: 5,
      name: "Alankaar",
      devanagari: "अलंकार",
      level: "Stage 5 • Master's Distinction",
      duration: "Post-Graduate",
      desc: "The highest classical accolade awarded by Gandharva Mahavidyalaya. Advanced stage repertoire, research, and pedagogical mastery.",
    },
  ];

  return (
    <div className="mt-16 sm:mt-24 max-w-5xl mx-auto px-2">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-temple-gold/10 border border-temple-gold/30 text-temple-gold text-xs font-semibold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5 text-saffron" />
          <span>Accredited Curriculum</span>
        </div>

        <h3 className="font-heading font-black text-xl sm:text-2xl lg:text-3xl text-ivory tracking-tight">
          Prarambhik → Visharad Progression
        </h3>

        <p className="text-xs sm:text-sm text-saffron font-medium mt-1">
          As per the Gandharva Mahavidyalaya syllabus
        </p>

        {/* EXPLICIT TODO NOTE AS REQUESTED */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/35 text-amber-300 text-[11px] font-mono">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-400" />
          <span>[TODO: Confirm exact stage names with the client]</span>
        </div>
      </div>

      {/* 5-STAGE PROGRESSION STEPPER */}
      <div className="relative">
        
        {/* Desktop Connecting Line */}
        <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-temple-gold/30 via-saffron/50 to-temple-gold/30 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
          {stages.map((stage) => (
            <div
              key={stage.step}
              className="p-4 sm:p-5 rounded-2xl glass-panel border border-temple-gold/25 hover:border-temple-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                
                {/* Step Circle Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-full bg-midnight border-2 border-temple-gold flex items-center justify-center text-xs font-bold text-temple-gold shadow-gold-glow group-hover:scale-110 group-hover:bg-temple-gold group-hover:text-midnight transition-all">
                    {stage.step}
                  </div>
                  <span className="text-[10px] text-saffron font-bold uppercase tracking-wider">
                    {stage.duration}
                  </span>
                </div>

                {/* Stage Title & Devanagari */}
                <h4 className="font-heading font-bold text-base text-ivory leading-tight group-hover:text-temple-gold transition-colors">
                  {stage.name}
                </h4>
                <span className="font-devanagari text-xs text-temple-gold/90 font-semibold block mb-2">
                  {stage.devanagari}
                </span>

                <div className="text-[10px] uppercase tracking-wider text-saffron/90 font-medium mb-2">
                  {stage.level}
                </div>

                <p className="text-[11px] text-ivory-muted leading-relaxed font-light">
                  {stage.desc}
                </p>

              </div>

              {/* Verified Certificate Tag */}
              <div className="mt-4 pt-2 border-t border-temple-gold/15 flex items-center gap-1.5 text-[10px] text-temple-gold/80">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Gandharva Certificate</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
