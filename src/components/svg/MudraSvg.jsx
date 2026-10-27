import React from 'react';

/**
 * Original Handcrafted Hasta Mudra SVGs
 * Accurately illustrates traditional classical hand gestures (Asamyuta Hastas).
 * Rendered in gold with sindoor accents and jewel ornaments.
 */
export default function MudraSvg({ id, className = "w-24 h-24", theme = "gold" }) {
  const isMaroon = theme === "maroon";
  const strokeColor = isMaroon ? "#5A1020" : "#E8B04A";
  const fillColor = isMaroon ? "rgba(90, 16, 32, 0.05)" : "rgba(232, 176, 74, 0.12)";
  const accentColor = isMaroon ? "#B3261E" : "#D9381E";
  const jewelColor = isMaroon ? "#B8893A" : "#FF8A1F";

  switch (id) {
    case "pataka":
      // All four fingers held straight and pressed together, thumb bent slightly at palm base
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Pataka Mudra">
          {/* Wrist & Bangle */}
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Palm */}
          <path d="M 40 50 C 38 62 44 76 52 78 C 60 76 66 62 64 50 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Fingers - Index, Middle, Ring, Little held upright together */}
          <path d="M 40 50 L 40 22 C 40 18 45 18 45 22 L 45 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 45 48 L 45 14 C 45 10 51 10 51 14 L 51 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 51 48 L 51 18 C 51 14 57 14 57 18 L 57 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 57 48 L 57 26 C 57 22 63 22 63 26 L 63 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Bent Thumb */}
          <path d="M 40 60 C 32 58 28 50 34 46 C 38 44 40 48 41 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Red Alta / Sindoor on fingertips */}
          <circle cx="42.5" cy="21" r="2.5" fill={accentColor} />
          <circle cx="48" cy="14" r="2.5" fill={accentColor} />
          <circle cx="54" cy="17" r="2.5" fill={accentColor} />
          <circle cx="60" cy="25" r="2.5" fill={accentColor} />
          {/* Red Alta circle in center of palm */}
          <circle cx="52" cy="62" r="5" fill={accentColor} opacity="0.85" />
        </svg>
      );

    case "tripataka":
      // Pataka gesture with the ring finger bent downward at third joint
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tripataka Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 40 50 C 38 62 44 76 52 78 C 60 76 66 62 64 50 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Upright Index & Middle */}
          <path d="M 40 50 L 40 22 C 40 18 45 18 45 22 L 45 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 45 48 L 45 14 C 45 10 51 10 51 14 L 51 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Bent Ring finger */}
          <path d="M 51 48 C 52 42 58 40 60 48 C 62 54 55 56 52 50" stroke={strokeColor} strokeWidth="2.2" fill={fillColor} strokeLinecap="round" />
          {/* Upright Little finger */}
          <path d="M 57 48 L 59 28 C 59 24 64 24 64 28 L 64 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Bent Thumb */}
          <path d="M 40 60 C 32 58 28 50 34 46 C 38 44 40 48 41 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Alta tips */}
          <circle cx="42.5" cy="21" r="2.5" fill={accentColor} />
          <circle cx="48" cy="14" r="2.5" fill={accentColor} />
          <circle cx="61.5" cy="27" r="2.5" fill={accentColor} />
          <circle cx="52" cy="64" r="5" fill={accentColor} opacity="0.85" />
        </svg>
      );

    case "mayura":
      // Ring finger tip touches thumb tip; index, middle, and pinky extended like peacock crest
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Mayura Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 38 56 C 38 68 46 76 54 78 C 62 76 68 68 64 56 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Open Index and Middle fingers (spread plumage) */}
          <path d="M 38 52 L 28 22 C 26 18 31 16 33 20 L 44 46" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 44 46 L 46 16 C 46 12 51 12 51 16 L 52 46" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Little finger extended */}
          <path d="M 60 52 L 72 26 C 75 22 79 26 76 30 L 64 58" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Ring finger touching thumb (creating the peacock beak ring) */}
          <path d="M 52 48 Q 58 38 56 46 Q 52 56 48 56" stroke={strokeColor} strokeWidth="2" fill="none" />
          <path d="M 38 60 Q 44 54 48 56" stroke={strokeColor} strokeWidth="2" fill="none" />
          <circle cx="48" cy="56" r="3" fill={accentColor} />
          {/* Plumage Alta marks */}
          <circle cx="29" cy="20" r="2.5" fill={accentColor} />
          <circle cx="48.5" cy="15" r="2.5" fill={accentColor} />
          <circle cx="74" cy="26" r="2.5" fill={accentColor} />
        </svg>
      );

    case "hamsasya":
      // Thumb and index fingertips joined like a swan's beak, remaining 3 fingers splayed
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Hamsasya Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 38 58 C 38 70 46 76 54 78 C 62 76 68 70 66 58 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Beak: Index finger and thumb tips touching */}
          <path d="M 42 54 C 36 46 32 38 38 32 C 44 28 46 36 48 42" stroke={strokeColor} strokeWidth="2" fill={fillColor} />
          <path d="M 38 62 C 34 52 32 40 38 32" stroke={strokeColor} strokeWidth="2" fill="none" />
          <circle cx="38" cy="32" r="3.5" fill={accentColor} />
          {/* Splayed Middle, Ring, Little fingers (Swan's feathers) */}
          <path d="M 50 48 L 56 18 C 57 14 62 15 61 19 L 56 50" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 57 50 L 68 24 C 70 20 75 22 73 26 L 62 54" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 63 54 L 79 34 C 82 30 86 33 84 37 L 66 60" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Alta tips */}
          <circle cx="58.5" cy="18" r="2.5" fill={accentColor} />
          <circle cx="70" cy="24" r="2.5" fill={accentColor} />
          <circle cx="81" cy="34" r="2.5" fill={accentColor} />
        </svg>
      );

    case "alapadma":
      // All five fingers curved gracefully outward from base like petals of a blooming water lotus
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Alapadma Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Cupped Palm base */}
          <path d="M 40 60 C 40 72 48 78 54 78 C 60 78 68 72 66 60 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Radiating curved lotus petal fingers */}
          {/* Thumb curved left */}
          <path d="M 42 62 C 30 60 16 52 18 42 C 20 34 28 42 38 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Index petal */}
          <path d="M 44 56 C 34 46 25 32 32 24 C 38 18 44 32 46 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Middle petal (highest) */}
          <path d="M 48 50 C 46 34 46 16 52 14 C 58 14 58 34 54 50" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Ring petal */}
          <path d="M 56 50 C 60 34 68 20 74 26 C 80 32 70 46 60 56" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Little finger curved right */}
          <path d="M 64 56 C 74 48 84 38 88 44 C 92 52 78 62 66 64" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Central Alta flower in center of blooming palm */}
          <circle cx="52" cy="58" r="5" fill={accentColor} />
          <circle cx="18" cy="40" r="2.5" fill={accentColor} />
          <circle cx="31" cy="22" r="2.5" fill={accentColor} />
          <circle cx="52" cy="14" r="2.5" fill={accentColor} />
          <circle cx="75" cy="24" r="2.5" fill={accentColor} />
          <circle cx="88" cy="42" r="2.5" fill={accentColor} />
        </svg>
      );

    case "ardhachandra":
      // Thumb stretched outward at right angle forming crescent moon, four fingers held together straight
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Ardhachandra Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Palm */}
          <path d="M 42 50 C 40 62 46 76 54 78 C 62 76 68 62 66 50 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Four fingers upright together */}
          <path d="M 46 50 L 46 22 C 46 18 51 18 51 22 L 51 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 51 48 L 51 14 C 51 10 57 10 57 14 L 57 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 57 48 L 57 18 C 57 14 63 14 63 18 L 63 48" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          <path d="M 63 48 L 63 26 C 63 22 69 22 69 26 L 69 52" stroke={strokeColor} strokeWidth="1.8" fill={fillColor} />
          {/* Outstretched Thumb forming Crescent Moon (Ardhachandra) */}
          <path
            d="M 44 64 C 32 64 18 58 14 48 C 12 42 18 38 24 44 C 32 50 38 52 44 54"
            stroke={strokeColor}
            strokeWidth="2"
            fill={fillColor}
          />
          {/* Alta tips */}
          <circle cx="14" cy="46" r="2.8" fill={accentColor} />
          <circle cx="48.5" cy="21" r="2.5" fill={accentColor} />
          <circle cx="54" cy="14" r="2.5" fill={accentColor} />
          <circle cx="60" cy="17" r="2.5" fill={accentColor} />
          <circle cx="66" cy="25" r="2.5" fill={accentColor} />
          <circle cx="56" cy="62" r="5" fill={accentColor} opacity="0.85" />
        </svg>
      );

    case "shikhara":
    default:
      // Fist closed firmly, thumb held upright pointing towards the heavens (Lord Shiva Lingam / Bow)
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Shikhara Mudra">
          <rect x="42" y="78" width="20" height="6" rx="2" fill={jewelColor} stroke={strokeColor} strokeWidth="1" />
          <path d="M 44 84 L 46 95 L 58 95 L 60 84 Z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          {/* Clenched Fist Body */}
          <rect x="36" y="44" width="34" height="34" rx="8" fill={fillColor} stroke={strokeColor} strokeWidth="1.8" />
          {/* Four folded finger knuckle segments */}
          <path d="M 42 46 Q 52 42 64 46" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <path d="M 40 55 Q 52 52 66 55" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <path d="M 40 64 Q 52 61 66 64" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <path d="M 42 72 Q 52 70 64 72" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          {/* Strong Upright Thumb (Shiva / Mountain Peak) */}
          <path
            d="M 36 60 C 28 54 28 34 32 20 C 34 14 42 14 44 20 C 46 28 44 45 42 54"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          {/* Alta at the pinnacle tip of the upright thumb */}
          <circle cx="38" cy="18" r="3" fill={accentColor} />
          {/* Bangle gem */}
          <circle cx="52" cy="81" r="2" fill="#FFF2D6" />
        </svg>
      );
  }
}
