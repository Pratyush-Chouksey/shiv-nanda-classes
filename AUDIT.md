# AUDIT.md — Senior Art Director Review
### Shiv Nanda Kathak Academy · Samidha Karanjekar · Andheri West, Mumbai
**Viewport tested**: 390 × 844 px (iPhone 14 proxy) · Dev server · October 2026  
**Directive**: No code changes. Blunt assessment only.

---

## Why This Reads as Astronomy / Sci-Fi, Not Classical Indian Dance

The single biggest failure is the **background colour choice** and the ornament vocabulary that grew on top of it.

`#0B0A1F` ("midnight") is the exact hue used in every space / crypto / Web3 dark-mode template on Dribbble. It reads *cold, cosmic, and futuristic*. Combined with:

- Glowing radial nebulae gradients baked into `.bg-cosmic-grain`
- "Mandala dividers" that look exactly like star-cluster icons from NASA infographics
- Gold ember particles floating upward like sparks in zero gravity
- Cinzel typeface in ALL-CAPS producing a "DEATH STAR INSIGNIA" feel
- Deep violet `#1A1240` glass panels that reinforce the space-station aesthetic

...the cumulative effect is a page that would not look out of place advertising a sci-fi game or an astrology app. There is almost nothing visually that says *warm studio, ghunghru on a wooden floor, a guru in cotton kurta, incense, tradition*.

A classical Indian dance academy should feel like **terracotta + turmeric + sandalwood + old paper**. This feels like **indigo nebula + neon particles + encrypted blockchain dashboard**.

---

## The 10 Most Damaging Problems (Ranked by Impact)

### #1 — WRONG COLOUR TEMPERATURE (CRITICAL)
**Every section shares the same `#0B0A1F` near-black background.** There is no warmth anywhere — no ochre, no deep red clay, no aged ivory ground. Temple interiors are dark but they are *warm* dark — candlelight on stone, sindoor-red on gold. The current palette is cold-dark (blue-violet). A first-time visitor has no sensory cue that this is about a traditional art form. Fix this before anything else.

**Impact**: Destroys brand identity at zero scroll.

---

### #2 — THREE "BOOK TRIAL" BUTTONS VISIBLE SIMULTANEOUSLY ON MOBILE (CRITICAL)
At 390 px, when the hero is fully visible, the user can see:
1. **Navbar TRIAL button** (top-right, gold pill)
2. **Hero CTA "BOOK A TRIAL CLASS"** (large gradient pill, middle of screen)
3. **Floating bottom bar "BOOK TRIAL"** (pinned to viewport bottom)

Three identical CTAs competing for attention is a UX anti-pattern that signals panic. It dilutes trust. It makes the page feel like a pop-up ad funnel, not a curated academy.

**Impact**: Damages credibility and overwhelms the user immediately.

---

### #3 — STICKY BOTTOM BAR HIDES CONTENT AND ADDS ZERO VALUE (HIGH)
The `FloatingMobileBar` — three buttons: **Call / WhatsApp / BOOK TRIAL** — is pinned at the bottom of the viewport at all times. It covers the scroll-snap dots on the Courses carousel, obscures footer content, and competes with the hero CTA 100% of the time. The Contact section already has tap-to-call cards. WhatsApp is also in the Contact section. This bar is redundant noise that steals 64–80 px of vertical viewport on every section.

**Impact**: Crops every single section on mobile. Kills content hierarchy.

---

### #4 — IDENTICAL SECTION RHYTHM: EVERY SECTION FEELS THE SAME (HIGH)
Every section uses:
- Same `#0B0A1F` background
- Same rotating gold mandala divider between them (the "star" icon)
- Same centered text layout with the same eyebrow-chip → Devanagari → large serif headline pattern

There is no light/dark alternation, no texture shift, no layout break. After the hero, sections blur into each other. A user scrolling cannot perceive where they are in the page because every section uses the same visual grammar. This is structural monotony.

**Impact**: Users disengage after the About section. No visual punctuation = no narrative arc.

---

### #5 — THE MANDALA SECTION DIVIDERS ARE NOISE, NOT ART (HIGH)
Between every section there is a thin gold horizontal line with a small rotating star/compass-rose icon centred on it. On paper this sounds elegant. In execution:

- The icon looks like a navigation compass or asterisk — not a mandala.
- It is used **7–8 times** on one scroll through the page.
- Repetition at this frequency makes it invisible (users stop seeing it after the second occurrence).
- It adds a band of empty dead space (~60–80 px) between sections without any informational value.

**Keep**: The concept of a cultural ornament break.  
**Delete**: This specific implementation used this frequently.

---

### #6 — TYPOGRAPHY CASING IS INCONSISTENT AND WRONG FOR THE CONTEXT (HIGH)
The headline typeface is Cinzel, which is fundamentally a Roman all-caps display font. The CSS applies mixed case inconsistently, producing:

- "WHERE RHYTHM BECOMES DEVOTION" rendered with mixed case but the visual weight reads as all-caps because Cinzel's letterforms are all-caps Roman.
- Eyebrow chips like "GURU & HERITAGE • ANDHERI WEST" in tiny all-caps sans-serif — these read as legal-document metadata, not warmly inviting cultural context.
- The Devanagari lines use a different vertical rhythm and baseline from the Latin type beside them, causing uncomfortable visual collisions.

Cinzel was designed to evoke ancient Rome, not ancient India. **Playfair Display**, **EB Garamond**, or **Yatra One** (designed for Devanagari-Latin pairings) would be contextually correct.

---

### #7 — THE HERO IS TOO TALL AND THE DANCER SILHOUETTE IS TOO SMALL (MEDIUM-HIGH)
At 390 px, the viewport height hero has:
- A top announcement ticker bar eating ~48 px
- A navbar eating ~64 px
- Two large CTA buttons eating ~110 px
- A "TEENTAAL 16 MATRA" metadata chip eating ~36 px
- A scroll indicator eating ~80 px

The actual dancer figure and Prabhamandala ring — the **centrepiece of the brand identity** — are squeezed into roughly 30% of the screen, invisible at initial glance because the Cinzel headline text fills the upper 40% of the screen. The central art asset, the Nataraja, is buried under interface infrastructure.

**Impact**: The product (dance) is invisible. The interface is the product.

---

### #8 — ANNOUNCEMENT PILL AT HERO TOP IS PURE REDUNDANCY (MEDIUM)
The hero has an eyebrow pill reading:  
`🔥 Mumbai • Jaipur Gharana • Teaching Since 2014 • Andheri West, Mumbai`

This exact information is already in:
1. The hero subline ("Classical Kathak training in Andheri West, Mumbai · Jaipur Gharana · Since 2014")
2. The navbar subtitle ("SAMIDHA KARANJEKAR • ANDHERI W")
3. The About section chip ("GURU & HERITAGE • ANDHERI WEST")

The same five facts are stated four times in the first visible scroll position.

---

### #9 — GLASSMORPHISM OVERUSE COLLAPSES CONTRAST (MEDIUM)
`glass-panel` uses `rgba(26, 18, 64, 0.68)` on top of `#0B0A1F`. The difference between panel background and page background is approximately 4–6 luminance points. On an OLED display in daylight, course cards, testimonial cards, and FAQ panels are almost indistinguishable from the background. The gold border glow at `rgba(232, 176, 74, 0.2)` barely registers. WCAG requires a minimum 3:1 contrast ratio for UI components — these panels likely fail it.

---

### #10 — `/design-system` BUTTON VISIBLE IN PRODUCTION UI (MEDIUM)
A developer-utility button — `⊞ /design-system` — is rendered live at `fixed top-20 right-4 z-30` on desktop. It appears in every desktop viewport screenshot. This is a staging artefact left in production that will confuse real clients.

---

## Section-by-Section Assessment

### NAVBAR
**Keep**: Slim sticky behaviour, logo mark, Om icon.  
**Change**: Fix "ANDHERI W" truncation. Remove TRIAL from navbar (consolidate to one CTA).  
**Delete**: Cosmic mandala watermark inside the mobile menu overlay.

### HERO
**Keep**: Prabhamandala SVG animation, dancer silhouette concept, headline copy "Where Rhythm Becomes Devotion".  
**Change**: Make dancer figure 2× larger. Remove announcement pill. Keep only ONE CTA button.  
**Delete**: "TEENTAAL 16 MATRA" ticker. Second "Explore Courses" hero button. Floating bottom bar (or at minimum remove BOOK TRIAL from it).

### ABOUT (GURU SECTION)
**Keep**: Arch/temple-doorway frame, Devanagari name treatment, lineage timeline concept.  
**Change**: Add teacher photo (non-negotiable before launch). Tighten ~200 px of dead space at section top.  
**Delete**: Excess vertical whitespace between divider and section headline.

### COURSES
**Keep**: Card carousel, hasta mudra icons, WhatsApp enquire flow.  
**Change**: Restyle Taal wheel to look rhythmic/warm rather than radar.  
**Delete**: Either the Taal wheel OR the stepper progression — not both. One creative device per section.

### GALLERY
**Keep**: Masonry layout, filter chips, lightbox, lite-YouTube facade.  
**Change**: Replace grey placeholder rectangles with generated dance/temple motif placeholders until real photos arrive.  
**Delete**: Or hide the entire section from production deploy until photos are real.

### EVENTS
**Keep**: Empty-state copy ("Next annual showcase: announcing soon").  
**Change**: Add a decorative non-blank visual for the empty state (stage motif or rangoli).

### TESTIMONIALS
**Keep**: Card carousel mechanic, auto-advance.  
**Change**: Source 3–5 real quotes before launch.  
**Delete**: Mandala watermarks inside each card (the 7th or 8th mandala on the page).

### FAQ
**Keep**: Rotating lotus accordion mechanic.  
**Change**: Rewrite answers to mention Samidha Karanjekar, Gandharva Mahavidyalaya exams, Jaipur Gharana specifically.

### CONTACT
**Keep**: WhatsApp-redirect form approach, tap-to-call/WhatsApp/maps cards, closing CTA copy "Come, dance with us".  
**Change**: Update Google Maps coordinates to real Andheri West studio address. Replace closing Prabhamandala (third time) with a static rangoli or Kathak-mudra ornament for variety.

### FOOTER
**Keep**: Content structure, navigation links, social icons.  
**Change**: Add a warm tone top border or faint saffron gradient to create visual ground, signalling "the page ends here".

---

## Animations & Decorations: Value vs. Noise

| Element | Verdict | Reason |
|---|---|---|
| Prabhamandala fire ring (hero) | **KEEP** | Only element that is truly culturally specific and visually memorable |
| Dancer silhouette (hero) | **KEEP, ENLARGE** | Core brand asset — make it fill 50% of the hero width |
| Gold ember particles (canvas) | **KEEP, REDUCE** | Poetic but cut to 15 max; currently read as sci-fi reactor sparks |
| Section mandala dividers (×8) | **DELETE or REDESIGN** | Overused, wrong icon, adds dead space |
| Rotating lotus (FAQ) | **KEEP** | Charming, unique, correct cultural reference |
| Taal wheel (Courses) | **KEEP, RESTYLE** | Educationally valuable but needs visual warmth |
| Mandala watermarks on testimonial cards | **DELETE** | Invisible noise |
| Mandala inside mobile menu overlay | **DELETE** | Reinforces sci-fi feel |
| Scroll progress line (top) | **KEEP** | Correct UX pattern, unobtrusive |
| Custom cursor (ghungroo) | **KEEP** | Delightful desktop touch |
| Magnetic hover on CTAs | **KEEP** | Subtle, appropriate polish |
| Sticky floating bottom bar | **DELETE** | Redundant; covers content; creates triple-CTA problem |
| `/design-system` pill in UI | **DELETE** | Developer artefact in production |

---

## The Single Highest-ROI Fix

Change the root background from cold-cosmic `#0B0A1F` to a warm dark tone — something like `#120A04` (deep charred wood) or `#180C08` (aged terracotta-black). Every gold element will read richer, every ivory text will feel warmer, and the whole "astronomy app" illusion collapses instantly. This is a one-line CSS change that transforms the brand identity without touching a single component.

---

*Audit completed. No code was modified. All observations are based on 390 px screenshots and direct source reading of `/src`.*
