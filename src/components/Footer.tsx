import { PageType } from '../types';
import { CONTACT_INFO } from '../data';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: PageType) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-dark border-t border-white/5 pt-20 pb-10 text-gray-400 relative overflow-hidden">
      
      {/* Background soft glowing lights */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand & Offices Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')}>
              <Logo size={38} showText={false} className="shadow-md shadow-primary/10 rounded-full" />
              <span className="font-display font-extrabold text-white tracking-wider text-md uppercase">
                YOUR DIGITAL CHOICES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              We engineer bespoke high-performance Shopify environments, tailored enterprise custom platforms, and robust conversational AI voice & chat automations. Bridging digital strategy with impeccable engineering.
            </p>
            <div className="flex flex-col space-y-2 pt-2 text-sm">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2.5 text-gray-300 hover:text-primary transition-colors w-fit"
              >
                <Mail size={15} className="text-primary" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`https://${CONTACT_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-accent-blue transition-colors w-fit"
              >
                <ExternalLink size={15} className="text-accent-blue" />
                <span>{CONTACT_INFO.website}</span>
              </a>
            </div>
          </div>

          {/* Pakistan Office */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-wider text-gray-500 uppercase border-l-2 border-primary pl-3">
              PAKISTAN OFFICE (HQ)
            </div>
            <div className="space-y-3.5 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{CONTACT_INFO.pakistan.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <a
                  href={CONTACT_INFO.pakistan.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center space-x-1 font-medium text-white"
                >
                  <span>{CONTACT_INFO.pakistan.phone}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 ml-1.5 font-mono">
                    WhatsApp Available
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* South Africa Office */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono tracking-wider text-gray-500 uppercase border-l-2 border-accent-blue pl-3">
              SOUTH AFRICA OFFICE
            </div>
            <div className="space-y-3.5 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent-blue shrink-0 mt-0.5" />
                <span className="leading-snug">{CONTACT_INFO.southAfrica.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent-blue" />
                <a
                  href={CONTACT_INFO.southAfrica.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors flex items-center space-x-1 font-medium text-white"
                >
                  <span>{CONTACT_INFO.southAfrica.phone}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 ml-1.5 font-mono">
                    WhatsApp Available
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Segment: Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm">
          
          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Shopify Storefronts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  AI Conversational Nodes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Enterprise ERP Modules
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left">
                  Dropshipping Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors text-left">
                  About YDC Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-white transition-colors text-left">
                  Meet the Engineers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors text-left flex items-center space-x-1.5">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-primary/20 text-primary rounded font-mono">We are hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="hover:text-white transition-colors text-left">
                  Success Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-white transition-colors text-left">
                  YDC Technical Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors text-left">
                  F.A.Q Helpdesk
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Interactive Estimates
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-white transition-colors text-left">
                  Customer Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* System testing column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white tracking-wide">System & Verification</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2 text-emerald-400">
                <ShieldCheck size={14} />
                <span>Secure SSL Encryption</span>
              </li>
              <li>
                <button onClick={() => handleNav('404')} className="hover:text-white transition-colors text-left">
                  Test custom 404 Route
                </button>
              </li>
              <li className="text-[11px] text-gray-500 font-mono mt-4 leading-relaxed">
                Platform API status: <span className="text-emerald-500">Active</span><br />
                Vercel/CloudRun CDN: <span className="text-accent-blue">Edge Online</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center space-x-2 text-gray-500">
            <span>© {currentYear} Your Digital Choices (YDC). All rights reserved.</span>
          </div>

          {/* Legal Links (Privacy, Terms, Cookies) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-500">
            <button onClick={() => handleNav('privacy')} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('terms')} className="hover:text-gray-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNav('cookies')} className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
