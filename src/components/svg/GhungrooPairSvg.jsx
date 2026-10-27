import React from 'react';

/**
 * Original Handcrafted Ghungroo Pair SVG
 * Features:
 * - Traditional crimson velvet ankle strap (Patti / Pad)
 * - Braided gold cords for tying around ankles
 * - Rows of authentic round brass bells with slit resonance openings & central beads
 * - Golden highlights and metallic shine
 */
export default function GhungrooPairSvg({ className = "w-20 h-20" }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kathak Ghungroo ankle bells"
      role="img"
    >
      <defs>
        <radialGradient id="brassBall" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF7D6" />
          <stop offset="30%" stopColor="#F5D061" />
          <stop offset="70%" stopColor="#C98B18" />
          <stop offset="100%" stopColor="#7A4C07" />
        </radialGradient>

        <linearGradient id="velvetPad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E1414" />
          <stop offset="40%" stopColor="#700C0C" />
          <stop offset="100%" stopColor="#450505" />
        </linearGradient>

        <linearGradient id="goldCord" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8B04A" />
          <stop offset="50%" stopColor="#FFF2D6" />
          <stop offset="100%" stopColor="#C98B18" />
        </linearGradient>
      </defs>

      {/* Crimson Velvet Pad Base (curved like worn around the ankle) */}
      <path
        d="M 25 45 Q 80 32 135 45 L 140 115 Q 80 128 20 115 Z"
        fill="url(#velvetPad)"
        stroke="#E8B04A"
        strokeWidth="1.5"
      />

      {/* Velvet Border Gold Stitching */}
      <path
        d="M 28 50 Q 80 38 132 50"
        stroke="#E8B04A"
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
      />
      <path
        d="M 24 110 Q 80 122 136 110"
        stroke="#E8B04A"
        strokeWidth="1"
        strokeDasharray="2 3"
        fill="none"
      />

      {/* Braided Tying Cords (Dori) Extending Out */}
      <path d="M 25 45 Q 10 35 2 20" stroke="url(#goldCord)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 20 115 Q 8 130 0 145" stroke="url(#goldCord)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="2" cy="20" r="3" fill="#D9381E" />
      <circle cx="0" cy="145" r="3" fill="#D9381E" />

      {/* Tassels on cords */}
      <path d="M 135 45 Q 150 35 158 20" stroke="url(#goldCord)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M 140 115 Q 152 130 160 145" stroke="url(#goldCord)" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="158" cy="20" r="3" fill="#D9381E" />
      <circle cx="160" cy="145" r="3" fill="#D9381E" />

      {/* Array of Brass Bells (Ghungroos) in 3 Staggered Rows */}
      {/* Row 1 */}
      {[
        { cx: 38, cy: 60 },
        { cx: 58, cy: 56 },
        { cx: 80, cy: 54 },
        { cx: 102, cy: 56 },
        { cx: 122, cy: 60 },
      ].map((pos, idx) => (
        <g key={`r1-${idx}`}>
          <circle cx={pos.cx} cy={pos.cy} r="9" fill="url(#brassBall)" stroke="#FFF2D6" strokeWidth="0.5" />
          {/* Bell Slit */}
          <path d={`M ${pos.cx - 5} ${pos.cy + 3} Q ${pos.cx} ${pos.cy + 6} ${pos.cx + 5} ${pos.cy + 3}`} stroke="#3D2000" strokeWidth="1.4" fill="none" />
          <circle cx={pos.cx} cy={pos.cy + 2} r="1.5" fill="#1A0D00" />
          {/* Top Loop */}
          <ellipse cx={pos.cx} cy={pos.cy - 9} rx="2" ry="1.5" stroke="#E8B04A" strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* Row 2 (Staggered) */}
      {[
        { cx: 48, cy: 80 },
        { cx: 69, cy: 78 },
        { cx: 91, cy: 78 },
        { cx: 112, cy: 80 },
      ].map((pos, idx) => (
        <g key={`r2-${idx}`}>
          <circle cx={pos.cx} cy={pos.cy} r="10" fill="url(#brassBall)" stroke="#FFF2D6" strokeWidth="0.6" />
          {/* Bell Slit */}
          <path d={`M ${pos.cx - 6} ${pos.cy + 3} Q ${pos.cx} ${pos.cy + 7} ${pos.cx + 6} ${pos.cy + 3}`} stroke="#3D2000" strokeWidth="1.5" fill="none" />
          <circle cx={pos.cx} cy={pos.cy + 2.5} r="1.8" fill="#1A0D00" />
          {/* Top Loop */}
          <ellipse cx={pos.cx} cy={pos.cy - 10} rx="2.5" ry="1.8" stroke="#E8B04A" strokeWidth="1" fill="none" />
        </g>
      ))}

      {/* Row 3 */}
      {[
        { cx: 38, cy: 100 },
        { cx: 58, cy: 101 },
        { cx: 80, cy: 102 },
        { cx: 102, cy: 101 },
        { cx: 122, cy: 100 },
      ].map((pos, idx) => (
        <g key={`r3-${idx}`}>
          <circle cx={pos.cx} cy={pos.cy} r="9" fill="url(#brassBall)" stroke="#FFF2D6" strokeWidth="0.5" />
          {/* Bell Slit */}
          <path d={`M ${pos.cx - 5} ${pos.cy + 3} Q ${pos.cx} ${pos.cy + 6} ${pos.cx + 5} ${pos.cy + 3}`} stroke="#3D2000" strokeWidth="1.4" fill="none" />
          <circle cx={pos.cx} cy={pos.cy + 2} r="1.5" fill="#1A0D00" />
          {/* Top Loop */}
          <ellipse cx={pos.cx} cy={pos.cy - 9} rx="2" ry="1.5" stroke="#E8B04A" strokeWidth="1" fill="none" />
        </g>
      ))}
    </svg>
  );
}
