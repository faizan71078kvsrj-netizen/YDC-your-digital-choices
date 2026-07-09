import { PageType } from '../types';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Sparkles, Send, Globe, Award, HelpCircle, FileText } from 'lucide-react';
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
    <footer id="main-footer" className="bg-[#030712] border-t border-white/5 pt-20 pb-10 text-gray-400 relative overflow-hidden z-20">
      
      {/* Visual background atmospheric elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Row 1: Brand intro and Newsletter subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')}>
              <Logo size={42} showText={false} className="shadow-md shadow-primary/10 rounded-full" />
              <div className="flex flex-col">
                <span className="font-display font-black text-white tracking-wider text-base uppercase">
                  YOUR DIGITAL CHOICES
                </span>
                <span className="text-[10px] text-primary font-mono tracking-widest font-bold">
                  GLOBAL AI TECHNOLOGY COMPANY
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm leading-relaxed text-gray-300 max-w-3xl">
                Your Digital Choices (YDC) is a global AI technology company delivering artificial intelligence, enterprise software, automation, digital transformation, e-commerce, cloud solutions, branding, and business growth services for startups, SMEs, and enterprises worldwide.
              </p>
              <p className="text-xs font-mono text-gray-400 tracking-wide font-bold">
                Building the Future with AI. Empowering Businesses Worldwide.
              </p>
            </div>
          </div>

          {/* Newsletter Segment */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono text-white tracking-widest uppercase font-bold">
              Subscribe to our AI newsletter
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Receive leading technical insights on generative AI ecosystems, automation benchmarks, and custom Shopify Plus solutions.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter corporate email..."
                className="flex-grow px-4 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] focus:bg-black border border-white/5 focus:border-primary/50 text-white text-xs outline-none transition-all font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-white text-xs font-mono font-bold transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send size={12} />
              </button>
            </form>
          </div>

        </div>

        {/* Row 2: Broad Navigation grid matching prompt columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-4">
          
          {/* Column A: Company */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">Company</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-primary transition-colors text-left">
                  About YDC Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ceo')} className="hover:text-primary transition-colors text-left text-primary font-medium">
                  CEO & Founder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-primary transition-colors text-left">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-primary transition-colors text-left">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Column B: Services */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">Services</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Shopify Plus Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Web & Mobile Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Design & Branding
                </button>
              </li>
            </ul>
          </div>

          {/* Column C: AI Products */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">AI Products</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-primary transition-colors text-left">
                  Products Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('serveos')} className="hover:text-primary transition-colors text-left">
                  ServeOS Flagship
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-primary transition-colors text-left">
                  Enterprise CRM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-primary transition-colors text-left">
                  Cognitive Voice Nodes
                </button>
              </li>
            </ul>
          </div>

          {/* Column D: Industries */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">Industries</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-primary transition-colors text-left">
                  Retail & E-commerce
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-primary transition-colors text-left">
                  Logistics & Warehousing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-primary transition-colors text-left">
                  Healthcare Technologies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-primary transition-colors text-left">
                  FinTech Platforms
                </button>
              </li>
            </ul>
          </div>

          {/* Column E: Portfolio & Resources */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">Resources</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-primary transition-colors text-left">
                  Portfolio Preview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('success-stories')} className="hover:text-primary transition-colors text-left">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-primary transition-colors text-left">
                  YDC Technical Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-primary transition-colors text-left">
                  F.A.Q Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Column F: Legal & Support */}
          <div className="space-y-3">
            <h5 className="text-xs font-mono tracking-wider text-white uppercase font-bold">Legal & Support</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-primary transition-colors text-left">
                  Support Center
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-primary transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('terms')} className="hover:text-primary transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cookies')} className="hover:text-primary transition-colors text-left">
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Row 3: Corporate Global Offices block ( Pakistan and South Africa ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-10 border-t border-white/5">
          
          {/* Head Office Pakistan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block font-bold">
              PAKISTAN HEAD OFFICE (HQ)
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <p className="flex items-start space-x-2.5">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span>Office No. 12, Plaza 94, Ghauri Town Phase 5, Islamabad 44000, Pakistan</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Phone size={14} className="text-primary" />
                <a href="tel:+923079651033" className="hover:text-primary transition-colors font-mono">
                  +92 307 9651033
                </a>
              </p>
            </div>
          </div>

          {/* Regional Office South Africa */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block font-bold">
              REGIONAL OPERATIONS (SOUTH AFRICA)
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <p className="flex items-start space-x-2.5">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span>Office 804, 8th Floor, The Box Office, 9 Lower Burg Street, Cape Town 8001, South Africa</span>
              </p>
              <p className="flex items-center space-x-2.5">
                <Phone size={14} className="text-primary" />
                <a href="tel:+27733398873" className="hover:text-primary transition-colors font-mono">
                  +27 73 339 8873
                </a>
              </p>
            </div>
          </div>

          {/* Official Departmental Emails Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block font-bold">
              OFFICIAL CORRESPONDENCE
            </div>
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-500">General Inquiries:</span>
                <a href="mailto:info@yourdigitalchoices.com" className="hover:text-primary font-mono font-medium">
                  info@yourdigitalchoices.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Row 4: Copyright and verification markers */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          
          <div className="text-gray-500">
            © {currentYear} Your Digital Choices (YDC). All rights reserved.
          </div>

          <div className="flex items-center space-x-1.5 text-emerald-500/85 font-mono">
            <ShieldCheck size={13} />
            <span>Secure System • ISO 27001 Cryptography Standards</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
