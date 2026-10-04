import React, { useState } from 'react';
import { Mail, Phone, Link2, Send, Check, Copy, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpatialGlassPanel } from './SpatialGlassPanel';
import { MagneticButton } from './MagneticButton';

export const ContactSpatialSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="w-full py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Contact Info Header & Direct Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Header Plaque - Translucent Glassmorphism */}
          <div className="spatial-glass-card p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-bold">
              <span>06 —</span>
              <span className="text-slate-400">Get In Touch</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2.5">
              Looking for AI/ML and Data internships. Let's talk.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Available for Summer/Fall 2025 and 2026 roles. Reach out directly via email, phone, or send a quick message through the form.
            </p>
          </div>

          <div className="space-y-3.5">
            {/* Email Card */}
            <SpatialGlassPanel className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Email
                  </span>
                  <a
                    className="text-sm text-white font-medium hover:text-[#38bdf8] transition-colors"
                    href={`mailto:${PERSONAL_INFO.email}`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="spatial-glass-pill px-3 py-1.5 text-xs text-slate-300 hover:text-white font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34d399]" />
                    <span className="text-[#34d399]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </SpatialGlassPanel>

            {/* Phone Card */}
            <SpatialGlassPanel className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 text-[#818cf8] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Phone / WhatsApp
                  </span>
                  <a
                    className="text-sm text-white font-medium hover:text-[#818cf8] transition-colors"
                    href={`tel:${PERSONAL_INFO.phone}`}
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="spatial-glass-pill px-3 py-1.5 text-xs text-slate-300 hover:text-white font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#818cf8]" />
                    <span className="text-[#818cf8]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </SpatialGlassPanel>

            {/* Social Profiles */}
            <SpatialGlassPanel className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 text-[#34d399] flex items-center justify-center shrink-0">
                  <Link2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Profiles
                  </span>
                  <span className="text-sm text-white font-medium">GitHub &amp; LinkedIn</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  className="spatial-glass-pill px-3 py-1.5 text-xs text-slate-200 font-medium hover:text-white transition-colors"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="spatial-glass-pill px-3 py-1.5 text-xs text-slate-200 font-medium hover:text-white transition-colors"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </SpatialGlassPanel>
          </div>
        </div>

        {/* Message Form */}
        <SpatialGlassPanel className="lg:col-span-7 p-7 md:p-9 relative">
          <h3 className="font-display font-bold text-xl text-white mb-1">
            Send a Message
          </h3>
          <p className="text-sm text-slate-300 mb-6">
            Have an opportunity or question? Let's connect directly.
          </p>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#34d399]/20 text-[#34d399] flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                Message Sent Successfully
              </h4>
              <p className="text-sm text-slate-300 max-w-sm">
                Thank you! Krutarth will receive your message and respond promptly at the provided email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 bg-white border border-slate-200 focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/25 transition-all text-sm shadow-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 bg-white border border-slate-200 focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/25 transition-all text-sm shadow-sm font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Internship Opportunity / Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 bg-white border border-slate-200 focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/25 transition-all text-sm shadow-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 bg-white border border-slate-200 focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/25 transition-all text-sm shadow-sm font-medium"
                />
              </div>

              <div className="pt-2 flex items-center justify-end">
                <MagneticButton strength={0.3}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#0071e3] hover:bg-[#0062c4] text-white font-semibold inline-flex items-center gap-2 px-7 py-3 text-sm rounded-full cursor-pointer disabled:opacity-50 shadow-lg transition-all hover:scale-105"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </div>
            </form>
          )}
        </SpatialGlassPanel>
      </div>
    </section>
  );
};
