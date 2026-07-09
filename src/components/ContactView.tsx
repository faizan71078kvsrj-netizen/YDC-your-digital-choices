import React, { useState } from 'react';
import { PageType } from '../types';
import { CONTACT_INFO } from '../data';
import { MapPin, Phone, Mail, Globe, ExternalLink, Send, CheckCircle, Sparkles, AlertCircle, ArrowRight, ShieldAlert } from 'lucide-react';

interface ContactViewProps {
  setActivePage: (page: PageType) => void;
}

interface Office {
  city: string;
  country: string;
  status: 'active' | 'coming_soon';
  address?: string;
  phone?: string;
  whatsapp?: string;
  coords: { top: string; left: string };
}

export default function ContactView({ setActivePage }: ContactViewProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', budget: '$2,000 - $5,000', note: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<number>(0);

  const offices: Office[] = [
    {
      city: 'Islamabad HQ',
      country: 'Pakistan',
      status: 'active',
      address: 'Office No. 12, Plaza 94, Ghauri Town Phase 5, Islamabad 44000, Pakistan',
      phone: '+92 307 9651033',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '38%', left: '68%' }
    },
    {
      city: 'Cape Town',
      country: 'South Africa',
      status: 'active',
      address: 'Office 804, 8th Floor, The Box Office, 9 Lower Burg Street, Cape Town 8001, South Africa',
      phone: '+27 73 339 8873',
      whatsapp: 'https://wa.me/27733398873',
      coords: { top: '75%', left: '52%' }
    },
    {
      city: 'Karachi',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'Executive Expansion Corridor, DHA Phase 6, Karachi, Pakistan (Opening Q3 2026)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '43%', left: '66%' }
    },
    {
      city: 'Lahore',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'Gulberg III, Lahore, Pakistan (Opening Q4 2026)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '40%', left: '69%' }
    },
    {
      city: 'Faisalabad',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'Kohinoor City, Faisalabad, Pakistan (Opening Q1 2027)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '39%', left: '67%' }
    },
    {
      city: 'Peshawar',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'University Road, Peshawar, Pakistan (Opening Q2 2027)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '36%', left: '65%' }
    },
    {
      city: 'Multan',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'Boson Road, Multan, Pakistan (Opening Q2 2027)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '41%', left: '65%' }
    },
    {
      city: 'Quetta',
      country: 'Pakistan',
      status: 'coming_soon',
      address: 'Cantonment Area, Quetta, Pakistan (Opening Q3 2027)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '41%', left: '62%' }
    },
    {
      city: 'Dubai',
      country: 'UAE',
      status: 'coming_soon',
      address: 'Marina Plaza, Dubai Marina, Dubai, UAE (Opening Q4 2026)',
      phone: '+92 307 9651033 (HQ Routing)',
      whatsapp: 'https://wa.me/923079651033',
      coords: { top: '44%', left: '61%' }
    },
    {
      city: 'London',
      country: 'UK',
      status: 'coming_soon',
      address: 'One Canada Square, Canary Wharf, London, UK (Opening Q1 2027)',
      phone: '+27 73 339 8873 (Regional Routing)',
      whatsapp: 'https://wa.me/27733398873',
      coords: { top: '28%', left: '48%' }
    },
    {
      city: 'Texas',
      country: 'USA',
      status: 'coming_soon',
      address: 'Legacy West, Plano, Texas, USA (Opening Q2 2027)',
      phone: '+27 73 339 8873 (Regional Routing)',
      whatsapp: 'https://wa.me/27733398873',
      coords: { top: '35%', left: '22%' }
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: '', budget: '$2,000 - $5,000', note: '' });
    }, 1200);
  };

  return (
    <div className="space-y-32 pt-28 pb-20">
      
      {/* Intro Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">
            <Sparkles size={12} />
            <span>GLOBAL SOLUTION ARCHITECTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none tracking-tight">
            Connect Globally
          </h1>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Review systems blueprints, schedule scoping exercises, or secure direct retainer terms with our executive engineering divisions.
          </p>
        </div>
      </section>

      {/* Interactive Map & Locations Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center md:text-left space-y-2">
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-extrabold block">
            YDC GLOBAL INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
            Operational Hubs & Expansion Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Telemetry Coordinate Map */}
          <div className="lg:col-span-7 glass-panel rounded-2xl border border-white/5 p-4 min-h-[320px] sm:min-h-[420px] relative overflow-hidden bg-black/40 flex flex-col justify-between">
            <div className="absolute top-3 left-4 flex items-center space-x-2 text-[10px] font-mono text-gray-500">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>YDC_GLOBAL_MAP_COORDS</span>
            </div>

            {/* Stylized dark dot-matrix map canvas */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Active and Coming Soon pins placed according to coordinates */}
            <div className="relative w-full h-[320px] sm:h-[380px] z-10">
              {offices.map((off, idx) => {
                const isActive = off.status === 'active';
                const isSelected = selectedOffice === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedOffice(idx);
                    }}
                    style={{ top: off.coords.top, left: off.coords.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    title={`${off.city} (${off.country})`}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulse rings */}
                      <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-75 ${
                        isActive 
                          ? isSelected ? 'animate-ping bg-primary' : 'bg-primary/30'
                          : isSelected ? 'animate-ping bg-orange-500/50' : 'bg-orange-500/10'
                      }`} />
                      
                      {/* Inner dot */}
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border border-dark transition-all duration-300 ${
                        isActive
                          ? isSelected ? 'bg-primary scale-125' : 'bg-primary'
                          : isSelected ? 'bg-orange-500 scale-125' : 'bg-orange-500/70'
                      }`} />

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 z-50">
                        <div className="bg-dark/95 border border-white/10 text-[10px] font-mono px-2 py-1.5 rounded shadow-xl text-white whitespace-nowrap flex flex-col">
                          <span className="font-bold">{off.city}</span>
                          <span className="text-gray-500 uppercase">{off.status.replace('_', ' ')}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Active Solutions Hub</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>Expansion (Coming Soon)</span>
                </span>
              </div>
              <span className="hidden sm:inline">SAT_LINK: ONLINE_LATENCY_22ms</span>
            </div>
          </div>

          {/* Location Selector Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/[0.01] flex-grow space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono text-primary uppercase font-bold">
                        OFFICE SPECIFICATION PROFILE
                      </span>
                      {offices[selectedOffice].status === 'coming_soon' && (
                        <span className="text-[8px] font-mono font-bold uppercase text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {offices[selectedOffice].city}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                </div>

                <div className="space-y-5 text-xs sm:text-sm text-gray-300">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">PHYSICAL ADDRESS</span>
                    <p className="leading-relaxed text-white">
                      {offices[selectedOffice].address}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">COMMUNICATION NODE</span>
                    <p className="text-white font-mono font-semibold">
                      {offices[selectedOffice].phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                {offices[selectedOffice].status === 'active' ? (
                  <a
                    href={offices[selectedOffice].whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center px-5 py-3.5 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/20 transition-all flex items-center space-x-2"
                  >
                    <span>Speak with an Expert</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact-form-block');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full justify-center px-5 py-3.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Request a Callback</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* List of Expansion Hubs (Coming Soon) */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
                  PLANNED CORRIDORS (COMING SOON)
                </span>
                <span className="text-[9px] font-mono text-orange-400 uppercase px-2 py-0.5 rounded bg-orange-500/10">In Pipeline</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {offices.map((hub, idx) => {
                  if (hub.status !== 'coming_soon') return null;
                  const isSelected = selectedOffice === idx;
                  return (
                    <button
                      key={hub.city}
                      onClick={() => setSelectedOffice(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 font-bold scale-105'
                          : 'bg-white/5 border-white/[0.02] text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <span>{hub.city} ({hub.country})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-block" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick FAQ / Info sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-wider block">PRE-SCOPING GUIDELINES</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                How We Scaffold Your Digital Project
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Before transmitting requirements, please compile your primary system objectives, estimated budget range, and any key third-party integration constraints (ERPs, inventory, or customs sourcing API endpoints).
              </p>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-4 text-xs text-gray-400">
              <div className="flex items-start space-x-3">
                <AlertCircle size={16} className="text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-white">SLA Turnaround Guarantee</h4>
                  <p className="leading-relaxed">All enterprise-grade scoping queries are reviewed and parsed within 24 hours directly by our solutions group.</p>
                </div>
              </div>
            </div>

            {/* General Inquiries block */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">OFFICIAL CORRESPONDENCE</span>
              <div className="space-y-3 text-gray-300 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">General Contact & Inquiry</span>
                  <a href="mailto:info@yourdigitalchoices.com" className="flex items-center space-x-2 hover:text-primary transition-colors font-medium">
                    <Mail size={14} className="text-primary shrink-0" />
                    <span>info@yourdigitalchoices.com</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Corporate Site</span>
                  <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-accent-blue transition-colors">
                    <Globe size={14} className="text-accent-blue shrink-0" />
                    <span>{CONTACT_INFO.website}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
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
                        placeholder="John Doe"
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
                        placeholder="representative@brand.com"
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
                        placeholder="+1 555 123 4567"
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
