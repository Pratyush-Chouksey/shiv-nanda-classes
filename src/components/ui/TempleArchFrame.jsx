import React from 'react';
import Mandala from './Mandala';
import DiyaSvg from '../svg/DiyaSvg';
import { Camera, Sparkles, Award } from 'lucide-react';

/**
 * TempleArchFrame Component
 * A tall arched frame (temple-doorway shape with a gold border and tiny diya icons at the top)
 * holding the teacher's photo placeholder (with clear TODO note), with a rotating mandala peeking out behind it.
 */
export default function TempleArchFrame({
  teacherName = "Samidha Karanjekar",
  qualification = "Alankaar (Gandharva) • M.A. Kathak (Khairagarh)",
  experience = "12+ Years Teaching • Since 2014",
}) {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto flex items-center justify-center py-4">
      
      {/* 1. ROTATING MANDALA PEEKING OUT BEHIND ARCH */}
      <div className="absolute -top-10 sm:-top-14 left-1/2 -translate-x-1/2 w-[360px] sm:w-[440px] aspect-square pointer-events-none opacity-30 z-0">
        <Mandala size={440} opacity={0.4} spin={true} duration={35} />
      </div>

      {/* 2. SACRED GOLDEN AURA GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-temple-gold/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 3. TALL TEMPLE ARCH FRAME (SANCTUM DOORWAY SHAPE) */}
      <div className="relative z-10 w-full rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl p-2 sm:p-2.5 bg-gradient-to-b from-temple-gold/80 via-saffron/40 to-deep-violet border border-temple-gold/60 shadow-[0_15px_45px_rgba(11,10,31,0.9),0_0_25px_rgba(232,176,74,0.25)]">
        
        {/* TINY DIYA ICONS AT THE TOP OF THE ARCH */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 sm:gap-8 z-30 pointer-events-none">
          {/* Left Flanking Diya */}
          <div className="transform -translate-y-1 -rotate-12">
            <DiyaSvg className="w-5 h-5 text-temple-gold" animate={true} />
          </div>

          {/* Central Crown Diya */}
          <div className="transform -translate-y-2.5 scale-110 drop-shadow-[0_0_10px_rgba(232,176,74,0.8)]">
            <DiyaSvg className="w-6 h-6 text-temple-gold" animate={true} />
          </div>

          {/* Right Flanking Diya */}
          <div className="transform -translate-y-1 rotate-12">
            <DiyaSvg className="w-5 h-5 text-temple-gold" animate={true} />
          </div>
        </div>

        {/* INNER SANCTUM CHAMBER */}
        <div className="w-full h-full min-h-[420px] sm:min-h-[480px] rounded-t-[130px] sm:rounded-t-[170px] rounded-b-2xl bg-midnight border border-temple-gold/40 overflow-hidden relative flex flex-col justify-between p-4 sm:p-6 text-center">
          
          {/* Traditional Carved Temple Arch Vector Ornament */}
          <div className="w-full flex justify-center pt-3 sm:pt-4">
            <svg viewBox="0 0 160 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-8 text-temple-gold">
              <path d="M 10 26 Q 50 6 80 16 Q 110 6 150 26" stroke="#E8B04A" strokeWidth="1.6" fill="none" />
              <circle cx="80" cy="15" r="3" fill="#D9381E" />
              <circle cx="50" cy="18" r="2" fill="#FF8A1F" />
              <circle cx="110" cy="18" r="2" fill="#FF8A1F" />
            </svg>
          </div>

          {/* PHOTO PLACEHOLDER WITH ARTISTIC GURU MOTIF & TODO NOTE */}
          <div className="relative my-auto flex flex-col items-center justify-center py-4">
            
            {/* Halo Ring */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-dashed border-temple-gold/60 p-1.5 flex items-center justify-center bg-deep-violet/70 shadow-gold-glow relative">
              <div className="w-full h-full rounded-full border border-saffron/40 flex items-center justify-center bg-gradient-to-tr from-midnight via-deep-violet to-midnight overflow-hidden relative">
                
                {/* Stylized Artistic Classical Dancer / Guru Silhouette */}
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 sm:w-32 sm:h-32">
                  <circle cx="50" cy="50" r="42" stroke="#E8B04A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  {/* Bun with Mogra Flower Garland */}
                  <circle cx="50" cy="24" r="6" fill="#E8B04A" />
                  <ellipse cx="50" cy="22" rx="9" ry="3" stroke="#FFF1D0" strokeWidth="1" fill="none" />
                  {/* Face with Bindi */}
                  <ellipse cx="50" cy="33" rx="6.5" ry="8.5" fill="#FFF2D6" />
                  <circle cx="50" cy="31" r="1.5" fill="#D9381E" />
                  {/* Torso in graceful Anga */}
                  <path d="M 44 42 C 42 53 45 66 50 75 C 55 66 58 53 56 42 Z" fill="#E8B04A" />
                  {/* Vermilion Dupatta */}
                  <path d="M 43 43 Q 32 52 26 70 Q 33 64 45 58" fill="#D9381E" opacity="0.9" />
                  <path d="M 57 43 Q 68 52 74 70 Q 67 64 55 58" fill="#D9381E" opacity="0.9" />
                  {/* Arched Hastak Arms */}
                  <path d="M 43 44 Q 28 36 22 25" stroke="#E8B04A" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="22" cy="25" r="2.8" fill="#D9381E" />
                  <path d="M 57 44 Q 72 36 78 25" stroke="#E8B04A" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="78" cy="25" r="2.8" fill="#D9381E" />
                  {/* Ghungroos */}
                  <ellipse cx="50" cy="85" rx="7" ry="2.5" fill="#FF8A1F" />
                </svg>

                {/* Subtle camera watermark overlay */}
                <div className="absolute inset-0 bg-midnight/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Camera className="w-6 h-6 text-temple-gold" />
                </div>
              </div>
            </div>

            {/* CLEAR TODO NOTE BADGE (Explicitly requested placeholder note) */}
            <div className="mt-4 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[10px] font-mono leading-tight max-w-[260px]">
              <span className="font-bold uppercase tracking-wider block text-temple-gold mb-0.5">
                📷 Photo Placeholder
              </span>
              <span>[TODO: Add High-Res Portrait of Guru Samidha Karanjekar]</span>
            </div>

          </div>

          {/* TEACHER CREDENTIALS PLAQUE AT BASE OF ARCH */}
          <div className="w-full pt-2 pb-1 border-t border-temple-gold/20 space-y-1">
            <h3 className="font-heading font-bold text-base sm:text-lg text-ivory tracking-wide leading-tight">
              {teacherName}
            </h3>
            <p className="text-[11px] text-temple-gold font-medium leading-tight">
              {qualification}
            </p>
            <div className="inline-flex items-center gap-1.5 text-[10px] text-saffron tracking-wider font-semibold uppercase mt-0.5">
              <Award className="w-3 h-3 text-saffron" />
              <span>{experience}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
