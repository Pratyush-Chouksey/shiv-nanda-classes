import React, { useState, useEffect } from 'react';
import { trialFormContent, siteConfig } from '../data/content';
import { X, CheckCircle2, MessageCircle, Send } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    ageGroup: trialFormContent.ageOptions[0],
    experience: trialFormContent.experienceOptions[0],
    preferredSlot: trialFormContent.slotOptions[0],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Namaste Guru Samidha ji,\n\nI would like to book a free trial class at Shiva Nanda Kathak Classes:\n- Name: ${formData.fullName || 'Prospective Student'}\n- Phone: ${formData.phone || 'N/A'}\n- Age Group: ${formData.ageGroup}\n- Experience: ${formData.experience}\n- Preferred Slot: ${formData.preferredSlot}\n- Notes: ${formData.notes || 'None'}`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#3D0A15] border border-antique-gold/45 rounded-2xl shadow-2xl p-5 sm:p-7 max-h-[92vh] overflow-y-auto text-warm-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 touch-target p-2 rounded-full text-ivory/70 hover:text-marigold hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-marigold/20 border border-marigold text-marigold mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-marigold">
              {trialFormContent.successTitle}
            </h3>
            <p className="text-xs text-cream-dark/80 max-w-sm mx-auto leading-relaxed">
              {trialFormContent.successMessage}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={openWhatsAppDirect}
                className="touch-target px-5 py-3 rounded-xl bg-marigold text-maroon font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-saffron transition-all"
              >
                <MessageCircle className="w-4 h-4 text-maroon" />
                <span>{trialFormContent.whatsappCta}</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="touch-target px-5 py-3 rounded-xl border border-antique-gold/40 hover:border-antique-gold text-xs uppercase tracking-wider text-warm-white transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-5">
              <span className="text-[11px] font-devanagari text-marigold tracking-widest uppercase block mb-1">
                {trialFormContent.formDevanagari}
              </span>
              <h2 id="trial-modal-title" className="font-display font-bold text-xl sm:text-2xl text-warm-white">
                {trialFormContent.modalTitle}
              </h2>
              <p className="text-xs text-cream-dark/75 mt-1.5 leading-relaxed">
                {trialFormContent.modalSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {/* Full Name */}
              <div>
                <label htmlFor="modal-full-name" className="block text-cream-dark/90 font-medium mb-1">
                  {trialFormContent.fields.fullName} *
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/40 focus:outline-none focus:border-marigold transition-colors text-sm"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-phone" className="block text-cream-dark/90 font-medium mb-1">
                    {trialFormContent.fields.phone} *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/40 focus:outline-none focus:border-marigold transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-cream-dark/90 font-medium mb-1">
                    {trialFormContent.fields.email}
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/40 focus:outline-none focus:border-marigold transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Age Group & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-age-group" className="block text-cream-dark/90 font-medium mb-1">
                    {trialFormContent.fields.ageGroup}
                  </label>
                  <select
                    id="modal-age-group"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#5A1020] border border-antique-gold/35 text-white focus:outline-none focus:border-marigold transition-colors text-xs"
                  >
                    {trialFormContent.ageOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#5A1020] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-experience" className="block text-cream-dark/90 font-medium mb-1">
                    {trialFormContent.fields.experience}
                  </label>
                  <select
                    id="modal-experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#5A1020] border border-antique-gold/35 text-white focus:outline-none focus:border-marigold transition-colors text-xs"
                  >
                    {trialFormContent.experienceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#5A1020] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label htmlFor="modal-preferred-slot" className="block text-cream-dark/90 font-medium mb-1">
                  {trialFormContent.fields.preferredSlot}
                </label>
                <select
                  id="modal-preferred-slot"
                  name="preferredSlot"
                  value={formData.preferredSlot}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-lg bg-[#5A1020] border border-antique-gold/35 text-white focus:outline-none focus:border-marigold transition-colors text-xs"
                >
                  {trialFormContent.slotOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#5A1020] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="modal-notes" className="block text-cream-dark/90 font-medium mb-1">
                  {trialFormContent.fields.notes}
                </label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in Kathak or preferred start date..."
                  className="w-full px-3.5 py-2 rounded-lg bg-white/10 border border-antique-gold/30 text-white placeholder-ivory/40 focus:outline-none focus:border-marigold transition-colors text-xs resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="touch-target w-full py-3 rounded-xl bg-marigold text-maroon font-bold text-xs uppercase tracking-wider hover:bg-saffron transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-maroon" />
                  <span>{trialFormContent.submitButton}</span>
                </button>

                <button
                  type="button"
                  onClick={openWhatsAppDirect}
                  className="touch-target w-full py-2.5 rounded-xl border border-marigold/40 hover:border-marigold bg-white/5 text-marigold font-semibold text-xs tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-marigold" />
                  <span>Direct WhatsApp Booking</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
