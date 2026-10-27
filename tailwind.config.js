/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── "Warm Classical Stage" palette ──────────────────────────
        parchment:   '#FAF4E8',   // Main background (light sections)
        maroon:      '#5A1020',   // Primary dark (hero, footer panels)
        'maroon-deep': '#3D0A15', // Deeper maroon for hover / footer base
        marigold:    '#F2A516',   // Primary accent (was temple-gold)
        saffron:     '#E07B1A',   // Secondary accent (was saffron-orange)
        sindoor:     '#B3261E',   // Small highlights only
        'antique-gold': '#B8893A',// Thin lines, ornaments – FLAT, no glow
        'antique-bronze': '#7A4B0A', // High-contrast gold/bronze for text on ivory/parchment (WCAG AAA)
        'saffron-deep': '#A74005', // High-contrast saffron for text on ivory/parchment (WCAG AA)
        charcoal:    '#2A1A14',   // Body text on light backgrounds
        'warm-white': '#FDF8F0',  // Near-white for text on dark
        'cream-dark': '#E8DCC8',  // Muted text on light bg
        'maroon-tint': '#7A1A30', // Lighter maroon for card surfaces on dark bg
        // ── Legacy aliases kept so old references compile ─────────────
        // (can be removed once sections are restyled)
        midnight:      '#5A1020', // Mapped → maroon (stops build errors)
        'deep-violet': '#3D0A15', // Mapped → maroon-deep
        'temple-gold': '#F2A516', // Mapped → marigold
        vermilion:     '#B3261E', // Mapped → sindoor
        ivory:         '#FAF4E8', // Mapped → parchment
        'gold-light':  '#FCEABB',
        'gold-dark':   '#8A6020',
        'night-surface': '#4A0E1C',
        'night-elevated': '#6A1828',
        'ivory-muted': '#D4C4A8',
      },
      fontFamily: {
        display:    ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        heading:    ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        body:       ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        // Flat, warm shadows — NO neon glow
        'warm-md':  '0 4px 20px rgba(90,16,32,0.15)',
        'warm-lg':  '0 8px 40px rgba(90,16,32,0.22)',
        'card':     '0 2px 12px rgba(42,26,20,0.10)',
        'card-hover': '0 6px 28px rgba(42,26,20,0.18)',
        // Legacy – alias to warm equivalents so old code compiles
        'gold-glow':      '0 4px 16px rgba(184,137,58,0.20)',
        'vermilion-glow': '0 4px 16px rgba(179,38,30,0.20)',
        'fire-ring':      '0 2px 12px rgba(242,165,22,0.15)',
      },
      animation: {
        'spin-slow':    'spin 40s linear infinite',
        'reverse-spin': 'reverseSpin 50s linear infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'chakkar':      'spin 2s linear infinite',
      },
      keyframes: {
        reverseSpin: {
          '0%':   { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
