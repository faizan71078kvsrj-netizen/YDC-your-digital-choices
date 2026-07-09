import { PageType } from '../types';
import { ArrowRight, Laptop, PhoneCall, MessageSquare, Cpu, CheckCircle, Shield, Zap, Sparkles, Star } from 'lucide-react';

interface ProductsViewProps {
  setActivePage: (page: PageType) => void;
}

export default function ProductsView({ setActivePage }: ProductsViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productList = [
    {
      id: 'serveos',
      name: 'ServeOS',
      category: 'ENTERPRISE CRM & WORKSPACE',
      tagline: 'The Ultimate Web-Based Operating Grid',
      description: 'ServeOS synthesizes your entire business workflow into a secure workspace. Manage pipeline leads, coordinate multi-supplier stock ledgers, schedule team tasks, and preserve absolute database integrity without sluggish plugins.',
      metrics: { label: 'Operational Speedup', value: '4x Faster' },
      features: [
        'Centralized dashboard tracking active leads and contract status',
        'Multi-supplier e-commerce inventory sync triggers',
        'Secure customer logs and interaction histories',
        'Custom task assigning and internal operational messaging rails'
      ],
      isDetailedPage: true
    },
    {
      id: 'voice-agent',
      name: 'AI Voice Agent Engine',
      category: 'TELEPHONY AUTOMATION & SPEECH',
      tagline: 'Autonomous Inbound & Outbound Calling Grids',
      description: 'Replicate natural human conversational flow on custom Twilio SIP voice nodes. Trained on your secure data guidelines to answer buyer queries, capture pipeline leads, book calendar slots, and execute direct database edits.',
      metrics: { label: 'Acoustic latency', value: 'sub-200ms' },
      features: [
        'Advanced speech-to-text semantic intent extraction',
        'Vocal clones reproducing your brand voice',
        'Trigger real-time CRM updates from active phone lines',
        'Fully compliant call recording logs and analytical metrics'
      ]
    },
    {
      id: 'chat-agent',
      name: 'AI Chat Agent Core',
      category: 'KNOWLEDGE RETRIEVAL CHATBOTS',
      tagline: 'Context-Trained Support and Conversion Widgets',
      description: 'Embed a highly-intelligent client-facing chat companion trained using deep semantic vector search on your raw documentation. Autonomously answer orders queries, track shipments, or guide users through multi-step sales checkouts.',
      metrics: { label: 'Resolution Accuracy', value: '99.2%' },
      features: [
        'Vector database embeddings resolving 85%+ of general tickets',
        'Direct Shopify and WooCommerce order status API lookups',
        'Proactive cart checkout hooks to maximize conversions',
        'Live operator seamless handoff routing protocols'
      ]
    },
    {
      id: 'site-builder',
      name: 'AI Website Builder Engine',
      category: 'EDGE CODE COMPILATION',
      tagline: 'Dynamic Visual Prompt-to-Code Framework',
      description: 'Our proprietary compiler utilizing advanced deep modeling to output pixel-perfect, clean, SEO-compliant headless React and Tailwind CSS storefronts directly to fast CDN servers.',
      metrics: { label: 'Page Speed Rank', value: 'Grade A (100%)' },
      features: [
        'Pure prompt-driven design layout generation',
        'Complies with standard Vite and React 18 parameters',
        'Automated schema JSON structured metadata injection',
        'Direct serverless CDN edge deployments'
      ]
    }
  ];

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            PROPRIETARY DIGITAL MACHINERY
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            YDC Flagship Products
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We engineer out-of-the-box system engines that completely eliminate operational friction, fully automated and secure on your cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Product list showcase cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {productList.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={prod.id}
                className={`glass-panel p-8 md:p-12 rounded-3xl border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center hover:border-primary/20 transition-all duration-300 relative overflow-hidden ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Background ambient lighting */}
                <div className={`absolute w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20 -top-20 ${
                  isEven ? '-right-20 bg-primary' : '-left-20 bg-accent-blue'
                }`} />

                {/* Left col: Description and details */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-last'}`}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest block font-semibold">
                      {prod.category}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                      {prod.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-primary font-mono font-medium">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">PRODUCT FEATURES</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle size={14} className="text-accent-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex flex-wrap gap-3">
                    {prod.isDetailedPage ? (
                      <button
                        onClick={() => handleNav('serveos')}
                        className="px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <span>Explore ServeOS Blueprint</span>
                        <ArrowRight size={13} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNav('contact')}
                        className="px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <span>Request Integration Blueprint</span>
                        <ArrowRight size={13} />
                      </button>
                    )}
                    <button
                      onClick={() => handleNav('contact')}
                      className="px-6 py-3 rounded-xl text-xs font-semibold bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-pointer"
                    >
                      Consult Solutions Architect
                    </button>
                  </div>
                </div>

                {/* Right col: Metric Showcase widget */}
                <div className="lg:col-span-5 bg-black/45 p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-56 sm:h-64 relative font-mono text-xs text-gray-400">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-[10px] text-gray-500 font-mono">// CORE_METRIC_REPORT.TXT</span>
                    <span className="text-emerald-400">● SECURE LIVE</span>
                  </div>
                  
                  <div className="space-y-4 py-4 text-center">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block">{prod.metrics.label}</span>
                    <div className="text-4xl sm:text-5xl font-display font-black text-primary animate-pulse">
                      {prod.metrics.value}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[9px] text-gray-500">
                    <span>Engine Cluster: GCP RUN</span>
                    <span>Accuracy Score: 100%</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-14 rounded-3xl border border-white/10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ready to Streamline Your Core Business?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Choose our customized setups to bypass human labor errors and increase operating velocity today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20 transition-all cursor-pointer"
            >
              Consult Solutions Lead
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
