import { useState } from 'react';
import { PageType } from '../types';
import { PRICING_TIERS } from '../data';
import { Check, Sparkles, TrendingUp, Calculator, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface PricingViewProps {
  setActivePage: (page: PageType) => void;
}

export default function PricingView({ setActivePage }: PricingViewProps) {
  // ROI Calculator states
  const [sales, setSales] = useState<number>(35000);
  const [cvrBump, setCvrBump] = useState<number>(1.5); // estimated percentage bump

  const calculateROI = () => {
    // Current sales * (cvr bump percentage / 100) = additional profit
    const additionalMonthly = sales * (cvrBump / 100);
    const annualImpact = additionalMonthly * 12;
    return {
      monthly: Math.round(additionalMonthly),
      annual: Math.round(annualImpact)
    };
  };

  const roiResult = calculateROI();

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
            TRANSPARENT VALUE ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Milestone Plans & Value
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We provide structured sprint scopes that directly align our design craftsmanship with your revenue potential.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_TIERS.map((tier, idx) => {
            const isPopular = tier.isPopular;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-8 border relative flex flex-col justify-between min-h-[580px] ${
                  isPopular
                    ? 'border-primary/50 bg-primary/[0.03] shadow-xl shadow-primary/5'
                    : 'border-white/5'
                }`}
              >
                {isPopular && (
                  <span className="absolute top-4 right-4 inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-primary text-white text-[10px] font-mono tracking-wider font-extrabold uppercase">
                    <Sparkles size={10} className="animate-pulse" />
                    <span>Most Popular Growth</span>
                  </span>
                )}

                <div className="space-y-6">
                  
                  {/* Tier Names */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[60px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Pricing Details */}
                  <div className="border-y border-white/5 py-5">
                    <div className="text-3xl sm:text-4xl font-display font-black text-white leading-none">
                      {tier.price}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-2">
                      {tier.frequency}
                    </span>
                  </div>

                  {/* Features Bullet Grid */}
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="pt-8 mt-auto">
                  <button
                    onClick={() => handleNav('contact')}
                    className={`w-full py-3.5 rounded-xl text-xs font-semibold cursor-pointer text-center block transition-all duration-200 hover:translate-y-[-1px] ${
                      isPopular
                        ? 'bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/25'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* REVENUE ROI CALCULATOR WIDGET */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue font-bold">
                <Calculator size={12} />
                <span>REVENUE GAIN SIMULATOR</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Calculate Your Projected ROI
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                By optimizing Shopify Core Web Vitals, restructuring user grids, and integrating smart automations, YDC client setups average a 1.0% - 2.5% checkout conversion bump.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Current Sales Input */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-gray-400 uppercase">CURRENT MONTHLY SALES VOLUME</span>
                    <span className="font-bold text-white">${sales.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={sales}
                    onChange={(e) => setSales(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>$10,000</span>
                    <span>$250,000</span>
                    <span>$500,000+</span>
                  </div>
                </div>

                {/* CVR Conversion bump */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-mono text-gray-400 uppercase">ESTIMATED CONVERSION RATE BUMP</span>
                    <span className="font-bold text-accent-green">+{cvrBump}% Rate</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="4.0"
                    step="0.1"
                    value={cvrBump}
                    onChange={(e) => setCvrBump(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-green focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>0.5% (Conservative)</span>
                    <span>2.0% (YDC Avg)</span>
                    <span>4.0% (Maximum)</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Simulated Outputs */}
            <div className="md:col-span-5 bg-black/45 p-6 rounded-2xl border border-white/5 text-center space-y-4">
              
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                PROJECTED REVENUE IMPACT
              </div>

              <div>
                <span className="text-[10px] font-mono text-gray-400 block uppercase">MONTHLY REVENUE GAIN</span>
                <div className="text-2xl sm:text-3xl font-display font-black text-accent-green pt-1">
                  +${roiResult.monthly.toLocaleString()} / mo
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-gray-500 block uppercase">ANNUAL REVENUE IMPACT</span>
                <div className="text-xl font-bold text-white">
                  +${roiResult.annual.toLocaleString()} / year
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Claim Revenue Growth</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Enterprise & Custom Sales Contact Block */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 text-center space-y-6 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            ENTERPRISE DEPLOYMENTS & PRIVATE INSTANCES
          </span>
          <h3 className="text-xl sm:text-3xl font-display font-black text-white leading-none">
            Need a Bespoke Agreement?
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            For dedicated solutions architect pipelines, high-volume automated Shopify scaling, custom AI model training, or multi-seat SLAs, please email our Enterprise Sales Division:
          </p>
          <div className="pt-2">
            <a
              href="mailto:sales@yourdigitalchoices.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 text-primary hover:text-white transition-all duration-200"
            >
              <Mail size={14} className="shrink-0" />
              <span>sales@yourdigitalchoices.com</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
