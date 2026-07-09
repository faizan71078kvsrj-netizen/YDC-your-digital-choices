import { useState, useEffect } from 'react';
import { PageType } from '../types';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  openEstimator: () => void;
}

export default function Header({ activePage, setActivePage, openEstimator }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hover states for multiple dropdowns
  const [hoverProducts, setHoverProducts] = useState(false);
  const [hoverSolutions, setHoverSolutions] = useState(false);
  const [hoverCompany, setHoverCompany] = useState(false);

  // Mobile menu sub-sections open/close states
  const [mobProductsOpen, setMobProductsOpen] = useState(false);
  const [mobSolutionsOpen, setMobSolutionsOpen] = useState(false);
  const [mobCompanyOpen, setMobCompanyOpen] = useState(false);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const handleNav = (page: PageType) => {
    setActivePage(page);
    setIsOpen(false);
    setMobProductsOpen(false);
    setMobSolutionsOpen(false);
    setMobCompanyOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productDropdownItems: { label: string; page: PageType; desc: string }[] = [
    { label: 'Products Overview', page: 'products', desc: 'Browse our AI-driven software assets.' },
    { label: 'ServeOS Flagship', page: 'serveos', desc: 'Proprietary enterprise CRM, order, and billing system.' }
  ];

  const solutionsDropdownItems: { label: string; page: PageType; desc: string }[] = [
    { label: 'Solutions Hub', page: 'solutions', desc: 'Central showcase of our enterprise architectures.' },
    { label: 'Industry Workflows', page: 'industries', desc: 'Surgically engineered bento-grids for sectors.' },
    { label: 'Case Studies', page: 'success-stories', desc: 'Real-world deployment success metrics.' }
  ];

  const companyDropdownItems: { label: string; page: PageType; desc: string }[] = [
    { label: 'About YDC', page: 'about', desc: 'Our vision, story, and core operating principles.' },
    { label: 'CEO & Founder', page: 'ceo', desc: 'Meet our founder Muhammad Faizan Tariq.' },
    { label: 'Our Team', page: 'team', desc: 'Meet our global engineers and specialists.' },
    { label: 'Careers', page: 'careers', desc: 'Join our team of architects in Islamabad, SA or Remote.' },
    { label: 'Insights & Blog', page: 'blog', desc: 'Premier insights on e-commerce, Shopify, and AI.' },
    { label: 'Testimonials', page: 'testimonials', desc: 'Read authentic stories from verified brands.' },
    { label: 'F.A.Q.', page: 'faq', desc: 'Find answers about AI voice nodes and custom systems.' }
  ];

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
            
            {/* Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                activePage === 'home' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Services */}
            <button
              onClick={() => handleNav('services')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                activePage === 'services' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Services
            </button>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoverProducts(true)}
              onMouseLeave={() => setHoverProducts(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                  ['products', 'serveos'].includes(activePage) ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Products</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${hoverProducts ? 'rotate-180' : ''}`} />
              </button>
              {hoverProducts && (
                <div className="absolute left-0 top-full pt-2 w-80 animate-fade-in">
                  <div className="glass-panel rounded-2xl p-3 shadow-2xl border border-white/10">
                    <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase px-3 pb-2 border-b border-white/5 mb-2">
                      Software Solutions
                    </div>
                    {productDropdownItems.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => handleNav(link.page)}
                        className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 flex flex-col group"
                      >
                        <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-150">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          {link.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoverSolutions(true)}
              onMouseLeave={() => setHoverSolutions(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                  ['solutions', 'industries', 'success-stories'].includes(activePage) ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${hoverSolutions ? 'rotate-180' : ''}`} />
              </button>
              {hoverSolutions && (
                <div className="absolute left-0 top-full pt-2 w-80 animate-fade-in">
                  <div className="glass-panel rounded-2xl p-3 shadow-2xl border border-white/10">
                    <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase px-3 pb-2 border-b border-white/5 mb-2">
                      Enterprise Modules
                    </div>
                    {solutionsDropdownItems.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => handleNav(link.page)}
                        className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 flex flex-col group"
                      >
                        <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-150">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          {link.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio */}
            <button
              onClick={() => handleNav('portfolio')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                activePage === 'portfolio' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Portfolio
            </button>

            {/* Pricing */}
            <button
              onClick={() => handleNav('pricing')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                activePage === 'pricing' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Pricing
            </button>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoverCompany(true)}
              onMouseLeave={() => setHoverCompany(false)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                  ['about', 'team', 'careers', 'blog', 'testimonials', 'faq'].includes(activePage) ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Company</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${hoverCompany ? 'rotate-180' : ''}`} />
              </button>
              {hoverCompany && (
                <div className="absolute right-0 top-full pt-2 w-80 animate-fade-in">
                  <div className="glass-panel rounded-2xl p-3 shadow-2xl border border-white/10">
                    <div className="text-[10px] font-mono tracking-wider text-gray-500 uppercase px-3 pb-2 border-b border-white/5 mb-2">
                      Resources & Culture
                    </div>
                    {companyDropdownItems.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => handleNav(link.page)}
                        className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-colors duration-150 flex flex-col group"
                      >
                        <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-150">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 mt-0.5">
                          {link.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNav('contact')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 ${
                activePage === 'contact' ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 border-b border-white/5 backdrop-blur-lg animate-fade-in shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            
            {/* Flat Links Grid */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNav('home')}
                className={`p-3 text-left rounded-xl text-xs font-semibold transition-colors ${
                  activePage === 'home' ? 'text-white bg-primary' : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('services')}
                className={`p-3 text-left rounded-xl text-xs font-semibold transition-colors ${
                  activePage === 'services' ? 'text-white bg-primary' : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNav('portfolio')}
                className={`p-3 text-left rounded-xl text-xs font-semibold transition-colors ${
                  activePage === 'portfolio' ? 'text-white bg-primary' : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => handleNav('pricing')}
                className={`p-3 text-left rounded-xl text-xs font-semibold transition-colors ${
                  activePage === 'pricing' ? 'text-white bg-primary' : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`col-span-2 p-3 text-left rounded-xl text-xs font-semibold transition-colors ${
                  activePage === 'contact' ? 'text-white bg-primary' : 'text-gray-300 bg-white/5 hover:bg-white/10'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Nested Expandable: Products */}
            <div className="border-t border-white/5 pt-4">
              <button
                onClick={() => setMobProductsOpen(!mobProductsOpen)}
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
              >
                <span>Products</span>
                <ChevronDown size={14} className={`transition-transform ${mobProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobProductsOpen && (
                <div className="space-y-1.5 mt-2 pl-2">
                  {productDropdownItems.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => handleNav(link.page)}
                      className={`w-full p-2.5 rounded-lg text-left text-xs ${
                        activePage === link.page ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="font-semibold block">{link.label}</span>
                      <span className="text-[10px] text-gray-500 block">{link.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nested Expandable: Solutions */}
            <div className="border-t border-white/5 pt-4">
              <button
                onClick={() => setMobSolutionsOpen(!mobSolutionsOpen)}
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
              >
                <span>Solutions</span>
                <ChevronDown size={14} className={`transition-transform ${mobSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobSolutionsOpen && (
                <div className="space-y-1.5 mt-2 pl-2">
                  {solutionsDropdownItems.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => handleNav(link.page)}
                      className={`w-full p-2.5 rounded-lg text-left text-xs ${
                        activePage === link.page ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="font-semibold block">{link.label}</span>
                      <span className="text-[10px] text-gray-500 block">{link.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Nested Expandable: Company */}
            <div className="border-t border-white/5 pt-4">
              <button
                onClick={() => setMobCompanyOpen(!mobCompanyOpen)}
                className="w-full flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
              >
                <span>Company</span>
                <ChevronDown size={14} className={`transition-transform ${mobCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobCompanyOpen && (
                <div className="space-y-1.5 mt-2 pl-2">
                  {companyDropdownItems.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => handleNav(link.page)}
                      className={`w-full p-2.5 rounded-lg text-left text-xs ${
                        activePage === link.page ? 'text-primary bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="font-semibold block">{link.label}</span>
                      <span className="text-[10px] text-gray-500 block">{link.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
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
