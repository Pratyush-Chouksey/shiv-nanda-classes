import React, { useState } from 'react';
import { siteConfig, coursesContent } from '../data/content';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Navigation,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

/**
 * ContactSection — "Warm Classical Stage"
 *
 * Requirements:
 * - Split layout:
 *   1. Maroon contact panel:
 *      - Call, WhatsApp, Email, Directions as clean tappable rows
 *      - Full address block with "Copy address" button
 *      - Fast enquiry form with WhatsApp redirect fallback to mailto
 *   2. Google Map in an arch frame:
 *      - Embedded lazy-loaded map for Andheri West studio address
 *      - Arched top frame with antique gold outline
 * - Ivory / parchment section background (#FAF4E8)
 * - Closing banner: "Come, dance with us"
 */
export default function ContactSection({ onOpenTrial }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ageGroup: 'Adults (20+ yrs)',
    course: coursesContent?.courses?.[0]?.title || 'Kathak Classical Training',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const ageGroups = ['Kids (5–12 yrs)', 'Teens (13–19 yrs)', 'Adults (20+ yrs)'];

  const courseOptions = [
    ...(coursesContent?.courses?.map((c) => c.title) || []),
    'General Inquiry / Need Guidance on Ideal Batch',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name';
    }
    const cleanPhone = formData.phone.trim().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a 10-digit number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitted(true);

    const text =
      `*Namaste Samidha ji!* 🙏\n\n` +
      `I would like to inquire about Kathak classes at *Shiva Nanda Kathak Classes*:\n\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Age Group:* ${formData.ageGroup}\n` +
      `• *Interested Course:* ${formData.course}\n` +
      (formData.message.trim() ? `• *Note:* ${formData.message.trim()}\n\n` : `\n`) +
      `Could you please share batch availability and trial class schedule? Thank you!`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  // Google Maps Embed URL for SVP Nagar Andheri West
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3787754602656!2d72.81896897587784!3d19.134884249806496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b620b7ce6823%3A0xe54c46f1ec51d520!2sSVP%20Nagar%2C%20Four%20Bungalows%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-parchment text-charcoal relative overflow-hidden border-t border-antique-gold/20"
      aria-label="Contact Shiva Nanda Kathak Classes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ सम्पर्क व प्रवेश ॥
          </span>
          <p className="text-xs uppercase tracking-widest text-antique-bronze font-bold mb-3">
            Admissions & Studio Location · Andheri West
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon tracking-tight leading-tight">
            Begin Your Classical Journey
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-10 h-px bg-antique-gold/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-antique-gold" />
            <span className="w-10 h-px bg-antique-gold/50" />
          </div>
          <p className="text-sm sm:text-base text-charcoal/80 font-sans mt-4 max-w-md mx-auto leading-relaxed">
            Reach out directly for batch admissions, free trial bookings, or to visit our studio in SVP Nagar, MHADA Colony.
          </p>
        </div>

        {/* SPLIT LAYOUT: MAROON CONTACT PANEL + MAP IN ARCH FRAME */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Column 1: Maroon Contact Panel (7 cols on lg) */}
          <div className="lg:col-span-7 bg-maroon text-white rounded-2xl p-6 sm:p-8 border border-antique-gold/40 shadow-lg space-y-6">
            
            {/* Panel Title */}
            <div className="border-b border-antique-gold/25 pb-4">
              <span className="text-[10px] uppercase font-bold text-marigold tracking-widest block mb-1">
                Direct Channels
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Connect with Guru Samidha
              </h3>
            </div>

            {/* Clean Tappable Rows */}
            <div className="space-y-3">
              
              {/* Call Row */}
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-antique-gold/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-maroon-deep border border-antique-gold/50 flex items-center justify-center text-marigold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ivory/70 tracking-wider block">Call Studio</span>
                    <span className="font-serif font-bold text-sm sm:text-base text-white">{siteConfig.displayPhone}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-marigold group-hover:translate-x-1 transition-transform mr-1" />
              </a>

              {/* WhatsApp Row */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Samidha ji, I am interested in joining Kathak classes at Shiva Nanda.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-antique-gold/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-maroon-deep border border-antique-gold/50 flex items-center justify-center text-marigold">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ivory/70 tracking-wider block">WhatsApp Direct</span>
                    <span className="font-serif font-bold text-sm sm:text-base text-white">+91 {siteConfig.whatsappNumber}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-marigold group-hover:translate-x-1 transition-transform mr-1" />
              </a>

              {/* Email Row */}
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Kathak Class Admission Enquiry')}`}
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-antique-gold/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-maroon-deep border border-antique-gold/50 flex items-center justify-center text-marigold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ivory/70 tracking-wider block">Email Inquiries</span>
                    <span className="font-serif font-bold text-xs sm:text-sm text-white break-all">{siteConfig.email}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-marigold group-hover:translate-x-1 transition-transform mr-1" />
              </a>

              {/* Directions Row */}
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-antique-gold/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-maroon-deep border border-antique-gold/50 flex items-center justify-center text-marigold">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-ivory/70 tracking-wider block">Google Maps Directions</span>
                    <span className="font-serif font-bold text-xs sm:text-sm text-white">SVP Nagar, MHADA Colony, Andheri West</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-marigold group-hover:translate-x-1 transition-transform mr-1" />
              </a>

            </div>

            {/* Address Block with Copy Address Button */}
            <div className="p-4 rounded-xl bg-maroon-deep/70 border border-antique-gold/30 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-marigold shrink-0 mt-0.5" />
                <p className="text-xs text-ivory/90 leading-relaxed font-sans">
                  {siteConfig.fullAddress}
                </p>
              </div>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-antique-gold/40 text-[11px] font-bold uppercase tracking-wider text-white transition-all"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-marigold" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-marigold" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Enquiry Form */}
            <div className="pt-4 border-t border-antique-gold/25">
              <span className="text-[10px] uppercase font-bold text-marigold tracking-widest block mb-3">
                Send an Enquiry via WhatsApp
              </span>

              {isSubmitted ? (
                <div className="p-4 rounded-xl bg-white/10 border border-antique-gold/40 text-center space-y-2">
                  <p className="font-serif font-bold text-base text-white">
                    Namaste! Redirecting you to WhatsApp…
                  </p>
                  <p className="text-xs text-ivory/80">
                    If WhatsApp does not open automatically, tap below:
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Namaste Samidha ji! I am ${formData.name}. Interested in ${formData.course}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 rounded bg-marigold text-maroon font-bold text-xs uppercase"
                  >
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/50 text-xs focus:outline-none focus:border-marigold"
                      />
                      {errors.name && <span className="text-[10px] text-marigold block mt-0.5">{errors.name}</span>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="10-digit Mobile Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/50 text-xs focus:outline-none focus:border-marigold"
                      />
                      {errors.phone && <span className="text-[10px] text-marigold block mt-0.5">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      id="contact-age-group"
                      aria-label="Select Age Group"
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-maroon-deep border border-antique-gold/30 text-white text-xs focus:outline-none focus:border-marigold"
                    >
                      {ageGroups.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>

                    <select
                      id="contact-course-program"
                      aria-label="Select Course Program"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-maroon-deep border border-antique-gold/30 text-white text-xs focus:outline-none focus:border-marigold"
                    >
                      {courseOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-marigold hover:bg-saffron text-maroon font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-maroon" />
                    <span>Submit & Open WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Column 2: Google Map in an Arch Frame (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              
              {/* Offset decorative gold outline */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 pointer-events-none rounded-t-[160px] rounded-b-xl border border-antique-gold/50"
                aria-hidden="true"
              />

              {/* The Arch Map Container */}
              <div
                className="relative z-10 w-full overflow-hidden bg-white rounded-t-[160px] rounded-b-xl border-2 border-antique-gold/70 shadow-md"
                style={{
                  height: '460px',
                }}
              >
                {/* Embedded Map Iframe */}
                <iframe
                  title="Shiva Nanda Kathak Classes Location in Andheri West Mumbai"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 py-3 px-4 bg-maroon text-white text-center border-t border-antique-gold/30">
                  <p className="font-serif font-bold text-xs sm:text-sm">
                    Shiva Nanda Studio
                  </p>
                  <p className="text-[10px] text-ivory/80 font-sans">
                    SVP Nagar, Andheri West, Mumbai – 400053
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* CLOSING BANNER: "Come, dance with us" */}
        <div className="text-center p-8 sm:p-12 rounded-2xl bg-white border border-antique-gold/35 shadow-xs max-w-3xl mx-auto">
          <span className="font-devanagari text-maroon text-xs tracking-widest uppercase font-semibold block mb-2">
            ॥ साध्यं नृत्यं समर्पये ॥
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-maroon mb-3">
            Come, Dance with Us
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/80 max-w-lg mx-auto font-sans leading-relaxed mb-6">
            Step onto the wooden floor, tie your ghungroos, and discover the joy of Jaipur Gharana Kathak. Disciples of all ages are welcomed with open arms.
          </p>
          <button
            onClick={onOpenTrial}
            className="px-7 py-3 rounded-md bg-maroon hover:bg-maroon-deep text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Book a Complimentary Trial Session</span>
            <ArrowRight className="w-3.5 h-3.5 text-marigold" />
          </button>
        </div>

      </div>
    </section>
  );
}
