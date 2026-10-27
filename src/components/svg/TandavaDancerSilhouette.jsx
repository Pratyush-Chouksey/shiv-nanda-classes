import React from 'react';

/**
 * TandavaDancerSilhouette Component
 * An elegant dancer-in-tandava silhouette (original SVG, stylised, in gold gradient).
 * 
 * Depicts the classic Anandatandava:
 * - Four cosmic arms (Damaru, Agni, Abhaya mudra, Gaja-hasta)
 * - Lifted Kunchita-Pada foot with ghungroo bells
 * - Flowing angavastram sashes fluttering dynamically
 * - Radiating matted locks (Jatas) with crescent moon
 * - Rendered in rich temple gold gradient with subtle vermilion warmth
 */
export default function TandavaDancerSilhouette({
  className = "w-full h-full",
  glow = true,
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stylised dancer in Anandatandava pose"
      role="img"
    >
      <defs>
        {/* Divine Gold Gradient for Dancer Body */}
        <linearGradient id="tandavaGoldGrad" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFF9EB" />
          <stop offset="25%" stopColor="#F5D38A" />
          <stop offset="60%" stopColor="#E8B04A" />
          <stop offset="85%" stopColor="#FF8A1F" />
          <stop offset="100%" stopColor="#D9381E" />
        </linearGradient>

        <linearGradient id="tandavaSashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8A1F" />
          <stop offset="50%" stopColor="#D9381E" />
          <stop offset="100%" stopColor="#8A1010" />
        </linearGradient>

        <radialGradient id="dancerAura" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#FF8A1F" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#E8B04A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0B0A1F" stopOpacity="0" />
        </radialGradient>

        {glow && (
          <filter id="tandavaGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="glowBlur" />
            <feComposite in="SourceGraphic" in2="glowBlur" operator="over" />
          </filter>
        )}
      </defs>

      {/* Subtle Aura Halo Behind Dancer */}
      <circle cx="250" cy="245" r="180" fill="url(#dancerAura)" />

      {/* Lotus Pedestal Base */}
      <g id="lotus-pedestal" opacity="0.95">
        <ellipse cx="250" cy="420" rx="90" ry="12" fill="#1A1240" stroke="#E8B04A" strokeWidth="1.5" />
        <path
          d="M 165 420 Q 250 435 335 420 Q 320 448 250 450 Q 180 448 165 420 Z"
          fill="#120F2E"
          stroke="#E8B04A"
          strokeWidth="1.2"
        />
        {/* Lotus Petal engravings on pedestal */}
        {[...Array(7)].map((_, i) => {
          const x = 180 + i * 23;
          return (
            <path
              key={`pedestal-petal-${i}`}
              d={`M ${x - 9} 421 Q ${x} 434 ${x + 9} 421`}
              stroke="#FF8A1F"
              strokeWidth="1.6"
              fill="none"
            />
          );
        })}
        {/* Apasmara dwarf base silhouette under right foot */}
        <ellipse cx="250" cy="414" rx="32" ry="7" fill="#25184B" stroke="#D9381E" strokeWidth="1" />
      </g>

      {/* Flying Matted Locks (Jatas) spreading gracefully with cosmic wind */}
      <g id="flying-jatas" stroke="url(#tandavaGoldGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none">
        {/* Left Jatas (viewer's left) */}
        <path d="M 238 165 Q 190 152 145 165 Q 120 174 102 160" />
        <path d="M 238 174 Q 198 170 158 186 Q 130 198 108 190" />
        <path d="M 239 183 Q 206 188 172 204 Q 142 218 122 210" />

        {/* Right Jatas (viewer's right) */}
        <path d="M 262 165 Q 310 152 355 165 Q 380 174 398 160" />
        <path d="M 262 174 Q 302 170 342 186 Q 370 198 392 190" />
        <path d="M 261 183 Q 294 188 328 204 Q 358 218 378 210" />

        {/* Crescent Moon nestled in Crown */}
        <path
          d="M 265 142 A 6 6 0 0 1 263 152 A 4.5 4.5 0 0 0 265 142"
          fill="#FFF4D0"
          stroke="#FFF4D0"
          strokeWidth="0.8"
        />
        {/* Ganga droplet emblem on left lock */}
        <circle cx="128" cy="158" r="3" fill="#E8B04A" />
      </g>

      {/* DANCER IN TANDAVA BODY (Stylised Gold Gradient Silhouette) */}
      <g
        id="dancer-figure"
        fill="url(#tandavaGoldGrad)"
        filter={glow ? "url(#tandavaGlowFilter)" : undefined}
      >
        {/* Jata-Mukuta Crown */}
        <path d="M 243 165 L 250 126 L 257 165 Z" />
        <circle cx="250" cy="122" r="3.5" fill="#FF8A1F" />
        <ellipse cx="250" cy="152" rx="14" ry="5" />

        {/* Serene Contemplative Face */}
        <ellipse cx="250" cy="174" rx="12" ry="14" />
        {/* Sacred Third Eye (Trinetra) */}
        <ellipse cx="250" cy="170" rx="1.5" ry="3.5" fill="#D9381E" />
        {/* Kundalas (Earrings) */}
        <circle cx="236" cy="176" r="2.8" />
        <circle cx="264" cy="176" r="2.8" />

        {/* Slender Neck & Necklace */}
        <path d="M 246 187 L 254 187 L 256 195 L 244 195 Z" />
        <path d="M 243 195 Q 250 200 257 195" stroke="#D9381E" strokeWidth="1.2" fill="none" />

        {/* Graceful Torso in Tribhanga & Yajnopavita */}
        <path d="M 235 197 C 229 220 233 246 240 266 L 260 266 C 267 246 271 220 265 197 Z" />
        <path d="M 241 198 Q 254 234 262 266" stroke="#FFFDF5" strokeWidth="1" fill="none" opacity="0.85" />

        {/* Billowing Silk Sashes (Angavastram / Dupatta) catching flight */}
        <path
          d="M 238 266 Q 205 282 186 318 Q 192 326 200 312 Q 218 290 240 278 Z"
          fill="url(#tandavaSashGrad)"
        />
        <path
          d="M 262 266 Q 295 285 315 322 Q 310 330 298 316 Q 280 290 260 278 Z"
          fill="url(#tandavaSashGrad)"
        />

        {/* RIGHT STANDING LEG (Firmly planted on Lotus/Apasmara) */}
        {/* Thigh */}
        <path d="M 243 266 C 241 292 244 316 246 338 L 255 338 C 253 316 255 292 253 266 Z" />
        {/* Calf down to ankle */}
        <path d="M 246 338 C 247 362 248 386 249 402 L 255 402 C 256 386 255 362 255 338 Z" />
        {/* Brass Ghungroo Band around Right Ankle */}
        <rect x="245" y="396" width="12" height="3.5" rx="1.5" fill="#FF8A1F" />
        {/* Right Foot grounded */}
        <ellipse cx="251" cy="405" rx="7" ry="3.5" />

        {/* LEFT LIFTED LEG (Cosmic Kunchita-Pada of Grace & Release) */}
        {/* Thigh sweeping across rightward */}
        <path d="M 250 269 C 264 282 288 300 305 314 L 298 322 C 278 308 258 290 246 276 Z" />
        {/* Knee bent sharply backward towards left */}
        <path d="M 305 314 C 290 332 264 346 226 348 L 224 339 C 260 337 284 324 298 322 Z" />
        {/* Lifted Left Foot poised mid-air with pointed arch */}
        <rect x="221" y="342" width="4.5" height="10" rx="1.5" fill="#FF8A1F" transform="rotate(22 223 347)" />
        <ellipse cx="212" cy="348" rx="8" ry="3.5" transform="rotate(-15 212 348)" />

        {/* FOUR COSMIC ARMS */}

        {/* 1. UPPER RIGHT HAND: Holding DAMARU (Nadabrahma sound) */}
        <path d="M 236 202 C 214 194 180 184 154 158 L 161 151 C 184 176 216 186 240 197 Z" />
        <circle cx="152" cy="151" r="5" />
        {/* Damaru hourglass drum */}
        <g transform="translate(150, 137) rotate(-22)">
          <path d="M -7 -10 L 7 -10 L 0 0 L 7 10 L -7 10 L 0 0 Z" fill="#FFF2D6" stroke="#E8B04A" strokeWidth="0.8" />
          <line x1="-7" y1="-10" x2="7" y2="-10" stroke="#FF8A1F" strokeWidth="1.5" />
          <line x1="-7" y1="10" x2="7" y2="10" stroke="#FF8A1F" strokeWidth="1.5" />
          <circle cx="6" cy="-1" r="2" fill="#D9381E" />
          <circle cx="-6" cy="1" r="2" fill="#D9381E" />
        </g>

        {/* 2. UPPER LEFT HAND: Bearing AGNI (Cosmic transformation flame) */}
        <path d="M 264 202 C 286 194 320 184 346 158 L 339 151 C 316 176 284 186 260 197 Z" />
        <circle cx="348" cy="151" r="5" />
        {/* Agni Flame held aloft on palm */}
        <g transform="translate(348, 140)">
          <path
            d="M 0 4 C -5 -4 -7 -14 0 -22 C 7 -14 5 -4 0 4 Z"
            fill="#FF8A1F"
          />
          <path d="M 0 3 C -2 -3 -3 -9 0 -14 C 3 -9 2 -3 0 3 Z" fill="#FFF4D0" />
        </g>

        {/* 3. LOWER RIGHT HAND: ABHAYA MUDRA (Gesture of Fearlessness) */}
        <path d="M 237 210 C 224 224 216 242 214 256 L 222 258 C 224 246 232 230 244 218 Z" />
        <path d="M 214 256 C 211 242 206 228 204 218 L 213 216 C 215 225 219 242 222 258 Z" />
        {/* Upraised Palm with Vermilion Center Mark */}
        <path d="M 203 216 C 201 202 213 202 213 216 Z" />
        <circle cx="207" cy="209" r="2.5" fill="#D9381E" />

        {/* 4. LOWER LEFT HAND: GAJA-HASTA (Elephant trunk gesture towards foot) */}
        <path d="M 263 210 C 258 238 232 274 190 304 L 186 295 C 224 267 250 234 254 208 Z" />
        {/* Drooping graceful fingers pointing to the lifted foot */}
        <path
          d="M 186 295 C 177 304 173 318 178 324 C 183 325 188 316 190 304 Z"
          fill="#FFF9EB"
        />
      </g>

      {/* Floating Golden Sparks / Ghungroo Embers */}
      <circle cx="160" cy="110" r="2" fill="#E8B04A" opacity="0.8" />
      <circle cx="340" cy="100" r="2.5" fill="#FF8A1F" opacity="0.85" />
      <circle cx="110" cy="270" r="1.8" fill="#FFF2D6" opacity="0.75" />
      <circle cx="390" cy="260" r="2.2" fill="#E8B04A" opacity="0.8" />
      <circle cx="180" cy="380" r="1.8" fill="#D9381E" opacity="0.9" />
      <circle cx="320" cy="375" r="1.8" fill="#FF8A1F" opacity="0.9" />
    </svg>
  );
}
