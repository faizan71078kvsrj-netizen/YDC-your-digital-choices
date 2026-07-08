import React, { useState } from 'react';
import { PageType } from '../types';
import { CONTACT_INFO } from '../data';
import { MapPin, Phone, Mail, Globe, ExternalLink, Send, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';

interface ContactViewProps {
  setActivePage: (page: PageType) => void;
}

export default function ContactView({ setActivePage }: ContactViewProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', budget: '$2,000 - $5,000', note: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate high-contrast enterprise server transit
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: '', budget: '$2,000 - $5,000', note: '' });
    }, 1500);
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Intro Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            CONSTRUCT YOUR SUCCESS SPRINT
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Contact our Solutions Architects in Islamabad, Pakistan or Sandton, South Africa to schedule a systems design review.
          </p>
        </div>
      </section>

      {/* Interactive Contact Panel */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Pakistan Office HQ */}
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-primary bg-white/[0.01] hover:bg-white/[0.02] transition-colors space-y-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-extrabold block">
                PAKISTAN HEADQUARTERS
              </span>
              <h3 className="text-xl font-bold text-white">Islamabad Solutions Hub</h3>
              <div className="space-y-3.5 text-sm text-gray-300">
                <div className="flex items-start space-x-3.5">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="leading-snug">{CONTACT_INFO.pakistan.address}</span>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Phone size={18} className="text-primary" />
                  <a
                    href={CONTACT_INFO.pakistan.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center space-x-1.5 font-semibold text-white"
                  >
                    <span>{CONTACT_INFO.pakistan.phone}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                      WhatsApp Live
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* South Africa Office */}
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-accent-blue bg-white/[0.01] hover:bg-white/[0.02] transition-colors space-y-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-extrabold block">
                SOUTH AFRICA DIVISION
              </span>
              <h3 className="text-xl font-bold text-white">Johannesburg Office</h3>
              <div className="space-y-3.5 text-sm text-gray-300">
                <div className="flex items-start space-x-3.5">
                  <MapPin size={18} className="text-accent-blue shrink-0 mt-0.5" />
                  <span className="leading-snug">{CONTACT_INFO.southAfrica.address}</span>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Phone size={18} className="text-accent-blue" />
                  <a
                    href={CONTACT_INFO.southAfrica.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-blue transition-colors flex items-center space-x-1.5 font-semibold text-white"
                  >
                    <span>{CONTACT_INFO.southAfrica.phone}</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                      WhatsApp Live
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Digital Channels */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 text-xs">
              <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">OFFICIAL CORRESPONDENCE</span>
              <div className="space-y-2 text-gray-300 text-sm">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 hover:text-primary transition-colors">
                  <Mail size={15} className="text-primary" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent-blue transition-colors">
                  <ExternalLink size={15} className="text-accent-blue" />
                  <span>{CONTACT_INFO.website}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Corporate Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />

              {success ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Systems Query Transmitted</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mx-auto">
                    Pristine! Your project requirements have been parsed by our solutions group. Muhammad Faizan Tariq will contact you directly within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">FULL NAME / BRAND REPRESENTATIVE</label>
                      <input
                        type="text"
                        required
                        placeholder="Muhammad Faizan Tariq"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">CORPORATE EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="faizan@yourdigitalchoices.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">PHONE / WHATSAPP NUMBER</label>
                      <input
                        type="text"
                        required
                        placeholder="+92 307 9651033"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">TARGET BUDGET SPRINT</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-dark/95 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-xs sm:text-sm"
                      >
                        <option value="$1,000 - $2,000">Startup adjustments ($1,000 - $2,000)</option>
                        <option value="$2,000 - $5,000">Growth sprint theme ($2,000 - $5,000)</option>
                        <option value="$5,000 - $15,000">Enterprise custom solutions ($5,000 - $15,000)</option>
                        <option value="$15,000+">Bespoke continuous architect ($15,000+)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-gray-400 uppercase text-[10px]">SUBJECT / SPRINT INTENT</label>
                    <input
                      type="text"
                      required
                      placeholder="Shopify theme rebuild / AI Voice integration..."
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-gray-400 uppercase text-[10px]">SPECIFIC SPRINT REQUIREMENTS</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your system constraints, legacy architectures, supplier channels, or timeline requirements..."
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary resize-none text-xs sm:text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Transmitting Requirements...</span>
                      ) : (
                        <>
                          <span>Transmit Requirements Matrix</span>
                          <Send size={13} />
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

    </div>
  );
}
