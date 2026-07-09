import { PageType } from '../types';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Terminal, TrendingUp, Building2, Layers } from 'lucide-react';

interface SolutionsViewProps {
  setActivePage: (page: PageType) => void;
}

export default function SolutionsView({ setActivePage }: SolutionsViewProps) {
  const solutions = [
    {
      id: 'industries',
      title: 'Industry-Specific Workflows',
      desc: 'Surgically engineered frameworks tailored for high-stakes industries: Luxury Apparel, Healthcare, Logistics, SaaS, and Manufacturing.',
      icon: Building2,
      badge: 'Bespoke Integration',
      linkText: 'Explore Industries Grid',
      target: 'industries' as PageType
    },
    {
      id: 'serveos',
      title: 'ServeOS Flagship System',
      desc: 'Our proprietary self-hosted, offline-first corporate enterprise machinery. Synces active orders, logistics ledger records, and customer communications.',
      icon: Terminal,
      badge: 'YDC Intellectual Property',
      linkText: 'Interactive Dashboard Preview',
      target: 'serveos' as PageType
    },
    {
      id: 'success-stories',
      title: 'Enterprise Case Studies',
      desc: 'Step into real-world architectures. Discover how we delivered 45% faster page loads, 28% conversion uplifts, and over $24K in monthly operational savings.',
      icon: TrendingUp,
      badge: 'Verified Success',
      linkText: 'Read Success Stories',
      target: 'success-stories' as PageType
    },
    {
      id: 'custom-systems',
      title: 'AI-First Core Software',
      desc: 'From custom microservices to serverless APIs and rate-limited webhook synchronizers connecting legacy systems to cloud databases.',
      icon: Cpu,
      badge: 'Custom Architecture',
      linkText: 'Consult Solutions Architect',
      target: 'contact' as PageType
    }
  ];

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-32 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Premium Hero */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">
          <Sparkles size={12} />
          <span>GLOBAL ENTERPRISE WORKFLOWS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-none">
          Intellectual Enterprise <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-orange-500">
            Solutions
          </span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
          We construct tailored digital machinery that integrates artificial intelligence directly into the operations of multi-national brands and fast-growing startups.
        </p>
      </section>

      {/* Grid of Solutions */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/15">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 px-2.5 py-1 rounded-full bg-white/5 uppercase border border-white/[0.03]">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    YDC_SOL_0{index + 1}
                  </span>
                  <button
                    onClick={() => handleNav(sol.target)}
                    className="flex items-center space-x-1 text-xs font-semibold text-white group-hover:text-primary transition-colors duration-150 cursor-pointer"
                  >
                    <span>{sol.linkText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust & Architecture standard panel */}
      <section className="max-w-5xl mx-auto glass-panel p-10 rounded-2xl border border-white/5 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Sovereign Security & Standard Architecture
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Every solution we configure is built with standard cryptographic security protocols, strict rate-limiting, edge-cached content delivery networks, and fully compliant client-authoritative state architectures.
        </p>
      </section>

    </div>
  );
}
