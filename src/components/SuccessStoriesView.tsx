import { PageType } from '../types';
import { SUCCESS_STORIES } from '../data/successStories';
import { ArrowRight, Trophy, Sparkles, TrendingUp, DollarSign, Calendar, Shield, Users, CheckCircle } from 'lucide-react';

interface SuccessStoriesViewProps {
  setActivePage: (page: PageType) => void;
}

export default function SuccessStoriesView({ setActivePage }: SuccessStoriesViewProps) {
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
            VERIFIED PROOFS OF METRIC ACCELERATION
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Our Success Stories
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We judge our engineering quality by the hard financial and operational metrics we return to our enterprise partners.
          </p>
        </div>
      </section>

      {/* Stories list */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {SUCCESS_STORIES.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={story.id}
                className={`glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-primary/20 transition-all duration-300 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Photo container */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-last'}`}>
                  <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-black">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest block font-bold bg-emerald-500/10 px-2 py-1 rounded w-fit mb-1">
                        {story.metrics}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">{story.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Text Description */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase rounded bg-gradient-to-r ${story.logoColor} text-white`}>
                        {story.logoText}
                      </span>
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest font-semibold block">{story.industry}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{story.title}</h2>
                    <span className="text-[11px] font-mono text-gray-500 block">Partner Brand: {story.client}</span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                    <div>
                      <strong className="text-primary font-mono block text-[10px] uppercase tracking-wider mb-1">Operational Challenge:</strong>
                      <p className="text-gray-400">{story.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-primary font-mono block text-[10px] uppercase tracking-wider mb-1">The Technical Solution:</strong>
                      <p className="text-gray-400">{story.solution}</p>
                    </div>
                    <div>
                      <strong className="text-accent-green font-mono block text-[10px] uppercase tracking-wider mb-1">Operational Outcome:</strong>
                      <p className="text-gray-400">{story.results}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {story.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded bg-white/5 text-gray-400 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleNav('contact')}
                      className="px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Replicate This Architecture</span>
                      <ArrowRight size={13} />
                    </button>
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
            Ready to Write Your Success Case?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Eliminate human latency blocks and scale e-commerce checkout speed with our verified systems.
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
