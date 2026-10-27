import React, { useState } from 'react';
import { faqContent, siteConfig } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * Flat Lotus SVG Icon
 * Used in place of +/- sign, rotating cleanly when expanded.
 */
function FlatLotusIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 transition-transform duration-300 ease-out ${
        isOpen ? 'rotate-90 text-maroon' : 'rotate-0 text-antique-gold'
      }`}
      aria-hidden="true"
    >
      <path
        d="M12 20 C10 15 9 10 12 5 C15 10 14 15 12 20Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M12 20 C6 17 4 12 8 8 C10 10 11 15 12 20Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M12 20 C18 17 20 12 16 8 C14 10 13 15 12 20Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * FaqSection — "Warm Classical Stage"
 *
 * Requirements:
 * - Deep maroon background for rhythmic alternation
 * - Accessible accordion (aria-expanded, aria-controls, keyboard-friendly)
 * - Lotus accordion icon kept but flat (rotating smoothly)
 * - Ivory cards with thin gold borders and high-contrast charcoal text
 * - Quiet, smooth height animation
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = faqContent.faqs || [];

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-maroon-deep text-ivory relative overflow-hidden border-t border-antique-gold/25"
      aria-label="Frequently Asked Questions about Kathak Classes"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-marigold text-xs tracking-widest uppercase font-semibold block mb-2">
            {faqContent.devanagari || '॥ प्रश्नोत्तरी ॥'}
          </span>
          <p className="text-xs uppercase tracking-widest text-marigold font-bold mb-3">
            Common Inquiries · Andheri West
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/60" />
          </div>
          <p className="text-sm sm:text-base text-ivory/80 font-sans mt-4 max-w-md mx-auto leading-relaxed">
            Everything you need to know about joining Jaipur Gharana batches, Gandharva board diplomas, and class schedules.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `faq-header-${faq.id || idx}`;
            const panelId = `faq-panel-${faq.id || idx}`;

            return (
              <div
                key={faq.id || idx}
                className="bg-white rounded-xl border border-antique-gold/35 shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none select-none transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-maroon leading-snug">
                      {faq.q || faq.question}
                    </span>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-parchment flex items-center justify-center border border-antique-gold/30">
                      <FlatLotusIcon isOpen={isOpen} />
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal/85 leading-relaxed font-sans border-t border-antique-gold/15">
                        {faq.a || faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp help row */}
        <div className="mt-12 text-center pt-8 border-t border-antique-gold/25">
          <p className="text-xs sm:text-sm text-ivory/80 font-sans mb-3">
            Have a question specific to your child or schedule?
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              'Hello Samidha ji, I have a question regarding Kathak classes at Shiva Nanda.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white hover:bg-parchment text-maroon font-bold text-xs uppercase tracking-wider transition-all border border-antique-gold/40 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-maroon" />
            <span>Ask Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
