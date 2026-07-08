import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, ChevronDown, Sparkles, MessageSquareCode } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  openEstimator: () => void;
}

export default function Header({ activePage, setActivePage, openEstimator }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' }
  ];

  const subLinks: { label: string; page: PageType; desc: string }[] = [
    { label: 'Our Blog', page: 'blog', desc: 'Read premier insights on e-commerce, Shopify, and AI workflows.' },
    { label: 'Careers', page: 'careers', desc: 'Join our team of architects in Islamabad, SA or Remote.' },
    { label: 'Team', page: 'team', desc: 'Meet our lead engineers and solution specialists.' },
    { label: 'Testimonials', page: 'testimonials', desc: 'Read authentic stories from verified corporate brands.' },
    { label: 'F.A.Q.', page: 'faq', desc: 'Find answers about AI voice nodes and custom ERP setup.' }
  ];

  const handleNav = (page: PageType) => {
    setActivePage(page);
    setIsOpen(false);
    setShowDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div
            id="brand-logo"
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Logo size={42} showText={false} className="group-hover:scale-105 transition-transform duration-300 shadow-md shadow-primary/10 rounded-full" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm tracking-wide leading-none">
                YOUR DIGITAL CHOICES
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-widest leading-none mt-1">
                YDC • DIGITAL AGENT
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {coreLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activePage === link.page
                    ? 'text-white bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activePage === link.page && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </button>
            ))}

            {/* Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  subLinks.some(link => link.page === activePage)
                    ? 'text-white bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Company</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full pt-2 w-80 animate-fade-in">
                  <div className="glass-panel rounded-2xl p-3 shadow-2xl border border-white/10">
                    <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase px-3 pb-2 border-b border-white/5 mb-2">
                      RESOURCES & INSIGHTS
                    </div>
                    {subLinks.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => handleNav(link.page)}
                        className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 flex flex-col group"
                      >
                        <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-150">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                          {link.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('contact')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activePage === 'contact'
                  ? 'text-white bg-white/5'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={openEstimator}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 text-accent-green hover:bg-accent-green/10 border border-accent-green/20 transition-all duration-200"
            >
              <Sparkles size={13} />
              <span>Interactive AI Planner</span>
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20 transition-all duration-200 border border-primary/10 hover:translate-y-[-1px]"
            >
              Consult an Architect
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={openEstimator}
              className="p-2 rounded-xl bg-white/5 text-accent-green border border-accent-green/20"
              title="Interactive AI Planner"
            >
              <Sparkles size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 border-b border-white/5 backdrop-blur-lg animate-fade-in shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {coreLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`p-3 text-left rounded-xl text-sm font-medium transition-colors ${
                    activePage === link.page
                      ? 'text-white bg-primary'
                      : 'text-gray-300 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className={`p-3 text-left rounded-xl text-sm font-medium transition-colors ${
                  activePage === 'contact'
                    ? 'text-white bg-primary'
                    : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Contact
              </button>
            </div>

            <div className="border-t border-white/5 pt-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase block mb-2">Company Resource Grid</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className={`p-3 text-left rounded-xl transition-colors ${
                      activePage === link.page
                        ? 'bg-white/10 text-white'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="text-sm font-medium block">{link.label}</span>
                    <span className="text-xs text-gray-500 line-clamp-1">{link.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openEstimator();
                }}
                className="w-full flex items-center justify-center space-x-2 p-3.5 rounded-xl text-sm font-semibold bg-accent-green/10 text-accent-green border border-accent-green/20"
              >
                <Sparkles size={16} />
                <span>Launch Interactive AI Planner</span>
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="w-full text-center p-3.5 rounded-xl text-sm font-semibold bg-primary text-white shadow-md shadow-primary/25"
              >
                Consult Our Architect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
