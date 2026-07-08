import { PageType } from '../types';
import { TESTIMONIALS } from '../data';
import { Star, ShieldCheck, CheckCircle, Flame, Sparkles } from 'lucide-react';

interface TestimonialsViewProps {
  setActivePage: (page: PageType) => void;
}

export default function TestimonialsView({ setActivePage }: TestimonialsViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            CLIENT PARTNERS AND SUCCESS STORIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Verified Testimonials
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Discover how corporate partners and e-commerce founders scale their businesses with YDC bespoke architectures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 relative overflow-hidden group"
            >
              
              {/* Highlight bar decoration */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 to-transparent group-hover:from-primary transition-all duration-300" />

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-gray-400 font-medium block">
                    {t.role} • {t.company}
                  </span>
                  
                  <div className="flex items-center space-x-0.5 text-amber-400 mt-1.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Trust factors */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          
          <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck size={16} />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Secure Code</h4>
            <p className="text-[11px] text-gray-400">All logic flows undergo static verification before client release.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto">
              <Flame size={16} />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">No Templates Policy</h4>
            <p className="text-[11px] text-gray-400">We construct custom code matching pristine corporate layouts.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-full bg-accent-blue/15 text-accent-blue flex items-center justify-center mx-auto">
              <Sparkles size={16} />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">SLA Assured Support</h4>
            <p className="text-[11px] text-gray-400">Our cross-continental teams guarantee instant post-launch assistance.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
