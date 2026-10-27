import React, { useState } from 'react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import MandalaSectionDivider from '../components/ui/MandalaSectionDivider';
import { ArrowLeft, Layers, Music, Disc } from 'lucide-react';

/**
 * Design System Page — "Warm Classical Stage"
 * Shows all new palette tokens, typography, button variants, cards, dividers.
 */
export default function DesignSystemPage({ onBackToSite }) {

  const lightColors = [
    { name: 'Parchment',    hex: '#FAF4E8', token: 'bg-parchment',    desc: 'Main light background' },
    { name: 'Marigold',     hex: '#F2A516', token: 'bg-marigold',     desc: 'Primary accent' },
    { name: 'Saffron',      hex: '#E07B1A', token: 'bg-saffron',      desc: 'Secondary accent' },
    { name: 'Antique Gold', hex: '#B8893A', token: 'bg-antique-gold', desc: 'Ornaments / hairlines (flat)' },
    { name: 'Sindoor Red',  hex: '#B3261E', token: 'bg-sindoor',      desc: 'Small highlights only' },
    { name: 'Charcoal',     hex: '#2A1A14', token: 'bg-charcoal',     desc: 'Body text on light bg' },
  ];

  const darkColors = [
    { name: 'Deep Maroon',  hex: '#5A1020', token: 'bg-maroon',       desc: 'Hero / footer dark panel' },
    { name: 'Maroon Deep',  hex: '#3D0A15', token: 'bg-maroon-deep',  desc: 'Deeper maroon / hover' },
    { name: 'Maroon Tint',  hex: '#7A1A30', token: 'bg-maroon-tint',  desc: 'Card surface on dark bg' },
    { name: 'Warm White',   hex: '#FDF8F0', token: 'bg-warm-white',   desc: 'Text on dark bg' },
    { name: 'Cream Dark',   hex: '#E8DCC8', token: 'bg-cream-dark',   desc: 'Muted text on dark bg' },
  ];

  return (
    <div className="min-h-screen font-body bg-parchment text-charcoal">

      {/* Header — parchment */}
      <div className="bg-parchment border-b border-antique-gold/30 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-antique-gold/50 text-saffron text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Shiva Nanda Design System · v2 "Warm Classical Stage"</span>
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-maroon">
              UI Primitives & Palette Tokens
            </h1>
            <p className="text-sm text-charcoal/60 mt-1">
              Warm parchment · Deep maroon · Marigold · Antique gold · No neon glow
            </p>
          </div>
          <Button variant="secondary" size="sm" onClick={onBackToSite} icon={ArrowLeft} iconPosition="left">
            Full Website
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* ── 1. PALETTE TOKENS ──────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            1. Palette Tokens
          </h2>

          <div className="space-y-6">
            {/* Light section palette */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-3">Light sections (parchment background)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lightColors.map((c) => (
                  <div key={c.name} className="p-3.5 rounded-xl bg-white border border-antique-gold/20 shadow-card space-y-2">
                    <div className="w-full h-10 rounded-lg border border-black/8" style={{ backgroundColor: c.hex }} />
                    <div>
                      <span className="text-xs font-bold block text-charcoal">{c.name}</span>
                      <span className="text-[11px] font-mono text-antique-gold block">{c.hex}</span>
                      <span className="text-[10px] text-charcoal/50">{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark section palette */}
            <div className="bg-maroon-deep rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-marigold/60 mb-3">Dark sections (maroon background)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {darkColors.map((c) => (
                  <div key={c.name} className="p-3.5 rounded-xl bg-maroon-tint/30 border border-antique-gold/25 space-y-2">
                    <div className="w-full h-10 rounded-lg border border-white/10" style={{ backgroundColor: c.hex }} />
                    <div>
                      <span className="text-xs font-bold block text-warm-white">{c.name}</span>
                      <span className="text-[11px] font-mono text-antique-gold block">{c.hex}</span>
                      <span className="text-[10px] text-cream-dark/60">{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider between light sections ──────────────────────── */}
        <MandalaSectionDivider theme="light" />

        {/* ── 2. TYPOGRAPHY ────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            2. Typography Scale
          </h2>

          <div className="space-y-4 bg-white rounded-2xl border border-antique-gold/20 p-6 shadow-card">
            <div>
              <div className="text-[10px] font-mono text-antique-gold mb-1 uppercase tracking-widest">Playfair Display · Hero · {`clamp(2.4rem, 6.5vw + 1rem, 5.5rem)`}</div>
              <p className="font-display font-bold text-fluid-hero text-maroon leading-none">Dance with Grace</p>
            </div>
            <div className="h-px bg-antique-gold/15" />
            <div>
              <div className="text-[10px] font-mono text-antique-gold mb-1 uppercase tracking-widest">Playfair Display · Title · {`clamp(1.9rem, 4.2vw, 3.4rem)`}</div>
              <p className="font-display font-bold text-fluid-title text-maroon leading-tight">Jaipur Gharana Tradition</p>
            </div>
            <div className="h-px bg-antique-gold/15" />
            <div>
              <div className="text-[10px] font-mono text-antique-gold mb-1 uppercase tracking-widest">Playfair Display · H2 · {`clamp(1.5rem, 3vw, 2.5rem)`}</div>
              <p className="font-display font-bold text-fluid-h2 text-charcoal leading-snug">Course Structure & Fees</p>
            </div>
            <div className="h-px bg-antique-gold/15" />
            <div>
              <div className="text-[10px] font-mono text-antique-gold mb-1 uppercase tracking-widest">DM Sans · Body · {`clamp(0.95rem, 1.1vw, 1.125rem)`}</div>
              <p className="font-body text-fluid-body text-charcoal/75 leading-relaxed max-w-xl">
                Samidha Karanjekar brings over 12 years of teaching experience in Kathak, 
                grounded in the precision and velocity of the Jaipur Gharana. 
                Classes held in Andheri West, Mumbai.
              </p>
            </div>
            <div className="h-px bg-antique-gold/15" />
            <div>
              <div className="text-[10px] font-mono text-antique-gold mb-1 uppercase tracking-widest">Noto Serif Devanagari · Accent only</div>
              <p className="font-devanagari text-sm text-saffron">॥ नटराज को समर्पित ॥</p>
            </div>
          </div>
        </section>

        {/* ── 3. SECTION HEADING PRIMITIVE ────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            3. SectionHeading Primitive
          </h2>

          <div className="space-y-6">
            {/* On light */}
            <div className="bg-parchment rounded-2xl border border-antique-gold/20 p-6">
              <div className="text-[10px] font-mono text-antique-gold mb-4 uppercase tracking-widest">theme="light" · on parchment bg</div>
              <SectionHeading
                eyebrow="॥ गुरु-शिष्य परम्परा ॥"
                tag="Classical Heritage"
                title="Where Rhythm Becomes"
                titleHighlight="Devotion"
                subtitle="Kathak training rooted in the Jaipur Gharana tradition, blending rhythmic precision with lyrical grace."
                align="center"
                theme="light"
              />
            </div>

            {/* On dark */}
            <div className="bg-maroon rounded-2xl p-6">
              <div className="text-[10px] font-mono text-antique-gold/60 mb-4 uppercase tracking-widest">theme="dark" · on maroon bg</div>
              <SectionHeading
                eyebrow="॥ विदुषी समिधा कारंजेकर ॥"
                tag="Guru & Heritage"
                title="Preserving Jaipur Gharana"
                titleHighlight="with Grace"
                subtitle="Dual-lineage synthesis of rhythmic precision and lyrical eloquence, taught in Andheri West since 2014."
                align="left"
                theme="dark"
              />
            </div>
          </div>
        </section>

        {/* ── 4. BUTTONS ───────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            4. Button Primitives (≥ 44px)
          </h2>

          <div className="space-y-6">
            {/* Light bg context */}
            <div className="bg-white rounded-2xl border border-antique-gold/20 p-6 space-y-4">
              <p className="text-[10px] font-mono text-antique-gold uppercase tracking-widest">On light background</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Book a Trial Class</Button>
                <Button variant="secondary">Explore Courses</Button>
                <Button variant="sindoor">Enquire Now</Button>
                <Button variant="ghost">Learn More</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" size="sm">Small (44px)</Button>
                <Button variant="secondary" size="md">Medium (44px)</Button>
                <Button variant="primary" size="lg">Large (48px)</Button>
                <Button variant="primary" size="md" disabled>Disabled</Button>
              </div>
            </div>

            {/* Dark bg context */}
            <div className="bg-maroon rounded-2xl p-6 space-y-4">
              <p className="text-[10px] font-mono text-antique-gold/60 uppercase tracking-widest">On dark (maroon) background</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary-dark">Book a Trial Class</Button>
                <Button variant="secondary-dark">Explore Courses</Button>
                <Button variant="sindoor">Enquire Now</Button>
                <Button variant="ghost-dark">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider between sections ─────────────────────────────── */}
        <MandalaSectionDivider theme="light" />

        {/* ── 5. CARDS ─────────────────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            5. Card Primitives
          </h2>

          <div className="space-y-6">
            {/* Light cards */}
            <div>
              <p className="text-[10px] font-mono text-antique-gold uppercase tracking-widest mb-3">theme="light" · white on parchment</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card hover theme="light">
                  <div className="w-10 h-10 rounded-xl bg-marigold/15 border border-antique-gold/30 flex items-center justify-center mb-3">
                    <Disc className="w-5 h-5 text-marigold" />
                  </div>
                  <h3 className="font-display font-bold text-base text-maroon mb-1">Standard Card</h3>
                  <p className="text-xs text-charcoal/60 leading-relaxed">White surface, antique-gold hairline border. Warm lift on hover.</p>
                </Card>

                <Card hover theme="light" glow glowColor="gold">
                  <div className="w-10 h-10 rounded-xl bg-marigold/20 border border-marigold flex items-center justify-center mb-3">
                    <Music className="w-5 h-5 text-marigold" />
                  </div>
                  <h3 className="font-display font-bold text-base text-maroon mb-1">Featured Card</h3>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Stronger antique-gold border for highlighted packages.</p>
                </Card>

                <Card hover theme="light" glow glowColor="sindoor">
                  <div className="w-10 h-10 rounded-xl bg-sindoor/10 border border-sindoor/50 flex items-center justify-center mb-3">
                    <span className="font-devanagari text-sindoor text-sm font-bold">ता</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-sindoor mb-1">Accent Card</h3>
                  <p className="text-xs text-charcoal/60 leading-relaxed">Sindoor-red border for urgent / Sam-beat highlights.</p>
                </Card>
              </div>
            </div>

            {/* Dark cards */}
            <div className="bg-maroon rounded-2xl p-6">
              <p className="text-[10px] font-mono text-antique-gold/60 uppercase tracking-widest mb-3">theme="dark" · on maroon background</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card hover theme="dark">
                  <div className="w-10 h-10 rounded-xl bg-marigold/20 flex items-center justify-center mb-3">
                    <Disc className="w-5 h-5 text-marigold" />
                  </div>
                  <h3 className="font-display font-bold text-base text-warm-white mb-1">Dark Card</h3>
                  <p className="text-xs text-cream-dark/60 leading-relaxed">Semi-transparent maroon surface on dark bg.</p>
                </Card>

                <Card hover theme="dark" glow glowColor="gold">
                  <div className="w-10 h-10 rounded-xl bg-marigold/25 border border-marigold/60 flex items-center justify-center mb-3">
                    <Music className="w-5 h-5 text-marigold" />
                  </div>
                  <h3 className="font-display font-bold text-base text-marigold mb-1">Gold Border Dark</h3>
                  <p className="text-xs text-cream-dark/60 leading-relaxed">Stronger antique-gold border variant on dark bg.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. SECTION DIVIDER ORNAMENT ─────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            6. Section Divider Ornament
          </h2>
          <div className="space-y-4">
            <div className="bg-parchment rounded-xl border border-antique-gold/20 p-4">
              <p className="text-[10px] font-mono text-antique-gold uppercase tracking-widest mb-2">theme="light"</p>
              <MandalaSectionDivider theme="light" />
            </div>
            <div className="bg-maroon rounded-xl p-4">
              <p className="text-[10px] font-mono text-antique-gold/60 uppercase tracking-widest mb-2">theme="dark"</p>
              <MandalaSectionDivider theme="dark" />
            </div>
            <p className="text-xs text-charcoal/50">
              Jaipur-style lotus bud with flanking ghungroo dots. Flat antique-gold, no rotation, no glow. Use max 3× per page.
            </p>
          </div>
        </section>

        {/* ── 7. REVEAL ANIMATION ──────────────────────────────────── */}
        <section>
          <h2 className="font-display font-bold text-lg text-maroon mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-marigold inline-block" />
            7. Reveal Animation (Framer Motion)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal direction="up"    delay={0.1}>
              <Card theme="light" hover>
                <div className="text-saffron font-bold text-xs uppercase mb-1">Up</div>
                <h4 className="font-display font-bold text-maroon text-sm">Transform Y</h4>
                <p className="text-xs text-charcoal/60 mt-1">Slides up 24px with easing on scroll-enter.</p>
              </Card>
            </Reveal>
            <Reveal direction="left" delay={0.25}>
              <Card theme="light" hover>
                <div className="text-marigold font-bold text-xs uppercase mb-1">Left</div>
                <h4 className="font-display font-bold text-maroon text-sm">Transform X</h4>
                <p className="text-xs text-charcoal/60 mt-1">Slides from right with 0.25s delay.</p>
              </Card>
            </Reveal>
            <Reveal direction="right" delay={0.4}>
              <Card theme="light" hover>
                <div className="text-sindoor font-bold text-xs uppercase mb-1">Right</div>
                <h4 className="font-display font-bold text-maroon text-sm">Stagger Delay</h4>
                <p className="text-xs text-charcoal/60 mt-1">Hardware-accelerated opacity + transform.</p>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="pt-4 pb-16 text-center border-t border-antique-gold/20">
          <Button variant="primary" size="lg" onClick={onBackToSite} icon={ArrowLeft} iconPosition="left">
            Return to Full Website
          </Button>
        </div>

      </div>
    </div>
  );
}
