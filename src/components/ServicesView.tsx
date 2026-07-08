import { useState } from 'react';
import { PageType, Service } from '../types';
import { SERVICES } from '../data';
import { ArrowRight, Check, Sparkles, Sliders, PlayCircle, BarChart3, HelpCircle, FileCheck, PhoneCall } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

interface ServicesViewProps {
  setActivePage: (page: PageType) => void;
  openEstimator: () => void;
}

export default function ServicesView({ setActivePage, openEstimator }: ServicesViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>('shopify-dev');

  // Estimate Widget State (Mini inside-page planner)
  const [selectedEstimatorIds, setSelectedEstimatorIds] = useState<string[]>(['shopify-dev', 'ai-chatbots']);

  const categories = ['All', 'Shopify', 'AI & Automation', 'Web & Mobile', 'Design & Branding', 'Marketing', 'Enterprise & Custom'];

  const filteredServices = SERVICES.filter(s => {
    if (activeCategory === 'All') return true;
    return s.category === activeCategory;
  });

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const handleToggleEstimator = (id: string) => {
    if (selectedEstimatorIds.includes(id)) {
      if (selectedEstimatorIds.length > 1) {
        setSelectedEstimatorIds(selectedEstimatorIds.filter(item => item !== id));
      }
    } else {
      setSelectedEstimatorIds([...selectedEstimatorIds, id]);
    }
  };

  const calculateEstimate = () => {
    let priceSum = 0;
    let daysSum = 0;
    
    selectedEstimatorIds.forEach(id => {
      // Assign mock standard rates based on category complexity
      if (id.includes('shopify') || id.includes('woo') || id.includes('wordpress')) {
        priceSum += 1400;
        daysSum += 12;
      } else if (id.includes('ai-') || id.includes('automation')) {
        priceSum += 1800;
        daysSum += 14;
      } else if (id.includes('erp') || id.includes('crm') || id.includes('custom-software')) {
        priceSum += 3500;
        daysSum += 24;
      } else if (id.includes('seo') || id.includes('ads')) {
        priceSum += 950;
        daysSum += 7;
      } else {
        priceSum += 1100;
        daysSum += 10;
      }
    });

    return {
      price: priceSum,
      days: daysSum,
      roi: Math.round(priceSum * 3.4)
    };
  };

  const estimateResults = calculateEstimate();

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Intro Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            26 SURGICAL SOLUTIONS WE PROVIDE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Our Premium Services
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            From award-winning Shopify theme development and seamless Alibaba supplier sourcing, to custom conversational voice AI nodes deployed on global cloud backends.
          </p>
        </div>
      </section>

      {/* Interactive Hub Grid (Figma-style dynamic display) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Interactive Service Select Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredServices.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer text-left flex items-start space-x-4 ${
                      isSelected
                        ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5'
                        : 'glass-panel border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-primary text-white' : 'bg-white/5 text-primary'}`}>
                      <DynamicIcon name={service.iconName} size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {service.title}
                      </h4>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block">
                        {service.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Detailed Blueprint Showcase */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden min-h-[500px] flex flex-col justify-between">
                
                {/* Background soft lighting */}
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  
                  {/* Title & Icon Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                        SERVICE SPECIFICATIONS
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {selectedService.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                      <DynamicIcon name={selectedService.iconName} size={22} />
                    </div>
                  </div>

                  {/* Core description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">
                      CORE CAPABILITIES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300 bg-white/5 p-2 rounded">
                          <Check size={12} className="text-accent-green shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation details */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">
                      SPECIFICATION BLUEPRINTS
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1 shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500">
                    ID: YDC_SRV_{selectedService.id.toUpperCase()}
                  </span>
                  <button
                    onClick={() => handleNav('contact')}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
                  >
                    Consult Solutions Architect
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COST ESTIMATOR & PLANNER INTERACTIVE WIDGET */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto glass-panel p-8 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-xs font-mono text-accent-green font-bold">
                <Sliders size={12} />
                <span>INTERACTIVE SERVICE BUILDER</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                Project Architect Budget Estimator
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Select from our capabilities below to formulate a preliminary estimate of development cycles, budget guidelines, and projected return on investment.
              </p>

              {/* Selector Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {SERVICES.map((s) => {
                  const isChecked = selectedEstimatorIds.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      onClick={() => handleToggleEstimator(s.id)}
                      className={`p-3 rounded-lg border text-left transition-colors cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-accent-blue/10 border-accent-blue/50'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <div className={`p-1.5 rounded ${isChecked ? 'text-accent-blue' : 'text-gray-500'}`}>
                          <DynamicIcon name={s.iconName} size={14} />
                        </div>
                        <span className="text-xs text-white font-medium truncate">{s.title}</span>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-accent-blue border-accent-blue text-white' : 'border-white/20'
                      }`}>
                        {isChecked && <Check size={10} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-5 bg-black/45 p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                ESTIMATED SPRINT METRICS
              </div>

              <div className="space-y-4">
                
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block">ESTIMATED BUDGET GUIDE</span>
                  <div className="text-3xl sm:text-4xl font-display font-black text-white pt-1">
                    ${estimateResults.price.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">DEVELOPMENT CYCLE</span>
                    <span className="text-sm font-semibold text-gray-300">{estimateResults.days} - {estimateResults.days + 5} Working Days</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">PROJECTED ROI IMPACT</span>
                    <span className="text-sm font-semibold text-accent-green">+${estimateResults.roi.toLocaleString()} Value</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 space-y-2 text-xs text-gray-400">
                  <div className="font-mono text-[10px] text-accent-blue uppercase font-bold">What is included?</div>
                  <p className="leading-relaxed">
                    Custom modular codebase with no templates, standard SEO optimization, accessibility alignment, and QA speed diagnostics included by default.
                  </p>
                </div>

              </div>

              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer text-center block shadow-lg shadow-primary/20"
              >
                Submit Estimate & Hire YDC
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
