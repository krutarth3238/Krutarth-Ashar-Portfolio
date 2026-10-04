import React, { useState } from 'react';
import { Mail, Phone, Link2, Send, Check, Copy, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
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
    <section className="w-full py-16 md:py-20 relative" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#1a1b1f] tracking-tight mb-3">
              Looking for AI/ML and Data internships. Let's talk.
            </h2>
            <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
              Available for Summer/Fall 2025 and 2026 roles. Feel free to reach out directly via email, phone, or send a quick message through the form.
            </p>

            <div className="space-y-3.5">
              {/* Email Card */}
              <div className="p-4 rounded-2xl liquid-glass-card flex items-center justify-between transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                      Email
                    </span>
                    <a
                      className="text-sm text-[#1a1b1f] font-medium hover:text-[#0071e3] transition-colors"
                      href={`mailto:${PERSONAL_INFO.email}`}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="liquid-glass-pill px-3 py-1.5 rounded-full hover:text-[#0071e3] text-xs text-[#6e6e73] font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-[#0071e3]" />
                      <span className="text-[#0071e3]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl liquid-glass-card flex items-center justify-between transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#6462ec]/10 text-[#6462ec] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                      Phone / WhatsApp
                    </span>
                    <a
                      className="text-sm text-[#1a1b1f] font-medium hover:text-[#6462ec] transition-colors"
                      href={`tel:${PERSONAL_INFO.phone}`}
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="liquid-glass-pill px-3 py-1.5 rounded-full hover:text-[#6462ec] text-xs text-[#6e6e73] font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-[#6462ec]" />
                      <span className="text-[#6462ec]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Profiles */}
              <div className="p-4 rounded-2xl liquid-glass-card flex items-center justify-between transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#34c759]/10 text-[#34c759] flex items-center justify-center shrink-0">
                    <Link2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6e6e73] block font-semibold">
                      Profiles
                    </span>
                    <span className="text-sm text-[#1a1b1f] font-medium">GitHub &amp; LinkedIn</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    className="liquid-glass-pill px-3 py-1.5 rounded-full text-xs text-[#1a1b1f] font-medium hover:text-[#0071e3] transition-colors"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="liquid-glass-pill px-3 py-1.5 rounded-full text-xs text-[#1a1b1f] font-medium hover:text-[#0071e3] transition-colors"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Liquid Glass Contact Form */}
          <div className="lg:col-span-7 liquid-glass-card rounded-3xl p-7 md:p-8 transition-all relative">
            <h3 className="font-display font-bold text-xl text-[#1a1b1f] mb-1">
              Send a Message
            </h3>
            <p className="text-sm text-[#6e6e73] mb-6">
              Have an opportunity or question? Let's connect directly.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#34c759]/15 text-[#34c759] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#1a1b1f] mb-1">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-[#6e6e73] max-w-sm">
                  Thank you! Krutarth will receive your message and respond promptly at the provided email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="liquid-glass-input w-full px-4 py-2.5 rounded-xl text-[#1a1b1f] placeholder-[#86868b] text-sm shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="liquid-glass-input w-full px-4 py-2.5 rounded-xl text-[#1a1b1f] placeholder-[#86868b] text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Internship Opportunity / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="liquid-glass-input w-full px-4 py-2.5 rounded-xl text-[#1a1b1f] placeholder-[#86868b] text-sm shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="liquid-glass-input w-full px-4 py-2.5 rounded-xl text-[#1a1b1f] placeholder-[#86868b] text-sm shadow-sm"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="liquid-glass-prominent inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium text-sm transition-all cursor-pointer disabled:opacity-50 shadow-md"
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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
