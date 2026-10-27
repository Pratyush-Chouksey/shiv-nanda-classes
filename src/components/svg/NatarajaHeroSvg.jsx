import React from 'react';

/**
 * Original Handcrafted Nataraja SVG
 * Depicts Lord Nataraja in Anandatandava pose within the flaming Prabhamandala.
 * Features:
 * - Prabhamandala (Outer ring with 24 sacred flame tongues)
 * - Upper right hand holding Damaru (Cosmic sound / Nadabrahma)
 * - Upper left hand holding Agni (Divine flame of transformation)
 * - Lower right hand in Abhaya Mudra (Gesture of protection & fearlessness)
 * - Lower left hand in Gaja-hasta (Elephant trunk pointing to lifted foot of release)
 * - Lifted left leg (Kunchita pada) granting spiritual liberation
 * - Flying matted locks (Jatas) with crescent moon & Ganga
 * - Standing upon Apasmara Purusha (conquest of ignorance) atop the cosmic lotus base
 */
export default function NatarajaHeroSvg({ className = "w-full h-full", animate = true }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cosmic Lord Nataraja in Prabhamandala ring of fire"
      role="img"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="natarajaGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="35%" stopColor="#E8B04A" />
          <stop offset="70%" stopColor="#FF8A1F" />
          <stop offset="100%" stopColor="#D9381E" />
        </linearGradient>

        <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D9381E" />
          <stop offset="50%" stopColor="#FF8A1F" />
          <stop offset="100%" stopColor="#FFF4D0" />
        </linearGradient>

        <radialGradient id="haloCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#D9381E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0B0A1F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Radiance Aura */}
      <circle cx="300" cy="300" r="240" fill="url(#haloCenter)" />

      {/* Concentric Sacred Geometry Rings */}
      <circle cx="300" cy="300" r="230" stroke="#E8B04A" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 6" />
      <circle cx="300" cy="300" r="218" stroke="#FF8A1F" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="300" cy="300" r="208" stroke="#E8B04A" strokeWidth="2.5" strokeOpacity="0.8" />

      {/* Prabhamandala - Ring of Fire (24 Outer Flames) */}
      <g className={animate ? "origin-center animate-spin-slow" : ""}>
        {[...Array(24)].map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <g key={i} transform={`rotate(${angle} 300 300)`}>
              {/* Flame Tongue */}
              <path
                d="M 300 80 C 294 65, 290 55, 300 38 C 310 55, 306 65, 300 80 Z"
                fill="url(#fireGradient)"
              />
              <path
                d="M 300 78 C 296 68, 294 60, 300 48 C 306 60, 304 68, 300 78 Z"
                fill="#FFF1D0"
              />
              <circle cx="300" cy="88" r="3" fill="#E8B04A" />
            </g>
          );
        })}
      </g>

      {/* Inner Lotus Petals on Arch */}
      {[...Array(32)].map((_, i) => {
        const angle = (i * 360) / 32;
        return (
          <g key={`petal-${i}`} transform={`rotate(${angle} 300 300)`}>
            <path
              d="M 300 96 C 296 90, 298 86, 300 84 C 302 86, 304 90, 300 96 Z"
              fill="#E8B04A"
              opacity="0.6"
            />
          </g>
        );
      })}

      {/* Lotus Pedestal Base */}
      <g id="pedestal" transform="translate(0, 30)">
        <ellipse cx="300" cy="460" rx="130" ry="16" fill="#1A1240" stroke="#E8B04A" strokeWidth="2" />
        <path
          d="M 180 460 Q 300 478 420 460 Q 400 495 300 498 Q 200 495 180 460 Z"
          fill="#120F2E"
          stroke="#E8B04A"
          strokeWidth="1.5"
        />
        {/* Lotus petals on base */}
        {[...Array(9)].map((_, i) => {
          const x = 200 + i * 25;
          return (
            <path
              key={`base-petal-${i}`}
              d={`M ${x - 10} 462 Q ${x} 478 ${x + 10} 462`}
              stroke="#FF8A1F"
              strokeWidth="2"
              fill="none"
            />
          );
        })}
      </g>

      {/* Apasmara Purusha (Dwarf of Illusion/Ignorance under right foot) */}
      <g id="apasmara" transform="translate(0, 30)">
        <ellipse cx="300" cy="454" rx="42" ry="11" fill="#2A1B54" stroke="#E8B04A" strokeWidth="1.2" />
        <circle cx="265" cy="450" r="8" fill="#3D297A" stroke="#E8B04A" strokeWidth="1" />
        <path d="M 270 456 Q 300 462 335 455" stroke="#D9381E" strokeWidth="2" fill="none" />
      </g>

      {/* Flying Jatas (Flowing Hair Matted Locks Radiating with Cosmic Wind) */}
      <g id="jatas" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        {/* Left Jatas (viewer's left) */}
        <path d="M 285 205 Q 230 190 180 205 Q 150 215 130 200" />
        <path d="M 285 215 Q 240 210 195 230 Q 160 245 135 235" />
        <path d="M 286 225 Q 250 230 210 250 Q 175 268 150 260" />
        
        {/* Right Jatas (viewer's right) */}
        <path d="M 315 205 Q 370 190 420 205 Q 450 215 470 200" />
        <path d="M 315 215 Q 360 210 405 230 Q 440 245 465 235" />
        <path d="M 314 225 Q 350 230 390 250 Q 425 268 450 260" />

        {/* Crescent Moon on Crown */}
        <path d="M 318 178 A 7 7 0 0 1 316 190 A 5 5 0 0 0 318 178" fill="#FFF1D0" stroke="#FFF1D0" strokeWidth="0.8" />
        {/* Goddess Ganga / Mermaid fountain motif on left jata */}
        <circle cx="160" cy="195" r="4" fill="#E8B04A" />
      </g>

      {/* NATARAJA BODY (Silhouetted in Majestic Golden Radiance) */}
      <g id="nataraja-figure" fill="url(#goldGradient)" stroke="#FFF2D6" strokeWidth="0.6">
        
        {/* Jata-Mukuta (Towering Crown) */}
        <path d="M 292 205 L 300 160 L 308 205 Z" />
        <circle cx="300" cy="155" r="4" fill="#FF8A1F" />
        <ellipse cx="300" cy="190" rx="16" ry="6" />

        {/* Face & Third Eye */}
        <ellipse cx="300" cy="216" rx="14" ry="17" />
        {/* Tilak / Third Eye */}
        <ellipse cx="300" cy="212" rx="1.5" ry="3.5" fill="#D9381E" stroke="#D9381E" />
        
        {/* Kundalas (Earrings: Makara on right, Patra on left) */}
        <circle cx="284" cy="220" r="3.5" />
        <circle cx="316" cy="220" r="3.5" />

        {/* Neck & Sacred Choker */}
        <path d="M 295 232 L 305 232 L 307 242 L 293 242 Z" />
        <path d="M 292 242 Q 300 248 308 242" stroke="#D9381E" strokeWidth="1.5" fill="none" />

        {/* Torso & Cosmic Sacred Thread (Yajnopavita) */}
        <path d="M 282 244 C 275 270 280 300 288 322 L 312 322 C 320 300 325 270 318 244 Z" />
        {/* Sacred Thread diagonal line */}
        <path d="M 290 245 Q 305 285 315 322" stroke="#FFF1D0" strokeWidth="1.2" fill="none" opacity="0.8" />
        {/* Vasuki serpent coiled around chest/waist */}
        <path d="M 284 315 Q 300 322 316 315" stroke="#FF8A1F" strokeWidth="2.5" fill="none" />

        {/* SASH / ANGAMVASTRAM (Floating Silken Drapery) */}
        <path
          d="M 286 322 Q 250 340 230 380 Q 235 390 245 375 Q 265 350 288 335 Z"
          fill="#D9381E"
          opacity="0.9"
        />
        <path
          d="M 314 322 Q 350 345 375 385 Q 370 395 355 380 Q 335 350 312 335 Z"
          fill="#D9381E"
          opacity="0.9"
        />

        {/* RIGHT STANDING LEG (Firmly planted on Apasmara) */}
        {/* Thigh */}
        <path d="M 292 322 C 290 350 293 375 295 400 L 306 400 C 304 375 306 350 304 322 Z" />
        {/* Knee & Calf */}
        <path d="M 295 400 C 296 425 297 450 298 470 L 305 470 C 306 450 305 425 306 400 Z" />
        {/* Ghungroo Bell Band on right ankle */}
        <rect x="294" y="462" width="14" height="4" rx="2" fill="#FF8A1F" />
        {/* Foot pressed downward */}
        <ellipse cx="301" cy="473" rx="8" ry="4" />

        {/* LEFT LIFTED LEG (Graceful Tandava Kunchita-Pada crossed over) */}
        {/* Thigh angled across to viewer's right */}
        <path d="M 300 325 C 315 340 340 360 360 375 L 352 385 C 330 370 308 348 295 333 Z" />
        {/* Knee bent sharply backward towards viewer's left */}
        <path d="M 360 375 C 345 395 315 410 270 412 L 268 402 C 310 400 338 385 352 385 Z" />
        {/* Lifted Foot floating free in air (Pointing of grace) */}
        {/* Ghungroo on left ankle */}
        <rect x="264" y="405" width="5" height="12" rx="2" fill="#FF8A1F" transform="rotate(20 266 411)" />
        <ellipse cx="254" cy="412" rx="9" ry="4" transform="rotate(-15 254 412)" />

        {/* FOUR ARMS OF LORD NATARAJA */}

        {/* 1. UPPER RIGHT HAND: Holding DAMARU */}
        {/* Arm extending outward and up */}
        <path d="M 284 250 C 260 240 220 230 190 200 L 198 192 C 225 220 262 232 288 244 Z" />
        {/* Hand clasping Damaru drum */}
        <circle cx="188" cy="192" r="6" />
        {/* Damaru SVG embedded in hand */}
        <g transform="translate(185, 175) rotate(-25)">
          <path d="M -8 -12 L 8 -12 L 0 0 L 8 12 L -8 12 L 0 0 Z" fill="#E8B04A" stroke="#FFF1D0" strokeWidth="1" />
          <line x1="-8" y1="-12" x2="8" y2="-12" stroke="#FF8A1F" strokeWidth="2" />
          <line x1="-8" y1="12" x2="8" y2="12" stroke="#FF8A1F" strokeWidth="2" />
          {/* Vibrating cords */}
          <circle cx="8" cy="-1" r="2.5" fill="#D9381E" />
          <circle cx="-8" cy="1" r="2.5" fill="#D9381E" />
        </g>

        {/* 2. UPPER LEFT HAND: Holding AGNI (Flame of Creation) */}
        {/* Arm extending outward and up */}
        <path d="M 316 250 C 340 240 380 230 410 200 L 402 192 C 375 220 338 232 312 244 Z" />
        {/* Hand cup */}
        <circle cx="412" cy="192" r="6" />
        {/* Agni Flame resting on palm */}
        <g transform="translate(412, 180)">
          <path
            d="M 0 5 C -6 -5 -8 -16 0 -26 C 8 -16 6 -5 0 5 Z"
            fill="url(#fireGradient)"
            filter="url(#natarajaGlow)"
          />
          <path d="M 0 4 C -3 -3 -4 -10 0 -16 C 4 -10 3 -3 0 4 Z" fill="#FFF2D6" />
        </g>

        {/* 3. LOWER RIGHT HAND: ABHAYA MUDRA (Gesture of Do Not Fear) */}
        {/* Arm bent at elbow */}
        <path d="M 285 260 C 270 275 260 295 258 310 L 268 312 C 270 298 280 280 293 268 Z" />
        {/* Forearm angled up */}
        <path d="M 258 310 C 255 295 250 280 248 268 L 258 266 C 260 276 264 295 268 312 Z" />
        {/* Upraised Palm with Vermilion Tilak (Pataka in Abhaya) */}
        <path d="M 246 266 C 244 250 258 250 258 266 Z" />
        <circle cx="251" cy="258" r="3" fill="#D9381E" />
        {/* Sacred Snake wrapped on forearm */}
        <path d="M 250 290 Q 262 288 260 296" stroke="#FF8A1F" strokeWidth="2.5" fill="none" />

        {/* 4. LOWER LEFT HAND: GAJA-HASTA (Danda-hasta gracefully sweeping across) */}
        {/* Arm sweeping downwards across the chest pointing diagonally down to lifted foot */}
        <path d="M 315 260 C 310 290 280 330 230 365 L 225 355 C 270 322 300 285 305 258 Z" />
        {/* Elegant hand drooping gracefully like elephant trunk towards left foot */}
        <path
          d="M 225 355 C 215 365 210 380 216 388 C 222 390 228 380 230 365 Z"
          fill="#FFF2D6"
        />
      </g>

      {/* Floating Sparkles & Divine Particles */}
      <circle cx="200" cy="140" r="2.5" fill="#E8B04A" opacity="0.8" />
      <circle cx="410" cy="130" r="3" fill="#FF8A1F" opacity="0.8" />
      <circle cx="140" cy="320" r="2" fill="#FFF1D0" opacity="0.7" />
      <circle cx="460" cy="310" r="2.5" fill="#E8B04A" opacity="0.75" />
      <circle cx="220" cy="440" r="2" fill="#D9381E" opacity="0.9" />
      <circle cx="380" cy="435" r="2" fill="#FF8A1F" opacity="0.9" />
    </svg>
  );
}
