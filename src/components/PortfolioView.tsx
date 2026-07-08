import { useState } from 'react';
import { PageType, PortfolioItem } from '../types';
import { PORTFOLIO } from '../data';
import { ArrowUpRight, X, Sparkles, Code, CheckCircle, Smartphone, Rocket } from 'lucide-react';

interface PortfolioViewProps {
  setActivePage: (page: PageType) => void;
}

export default function PortfolioView({ setActivePage }: PortfolioViewProps) {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Shopify', 'AI', 'ERP', 'Web', 'UI/UX'];

  const filteredProjects = PORTFOLIO.filter(p => {
    if (filter === 'All') return true;
    return p.category.toLowerCase().includes(filter.toLowerCase()) || p.technologies.some(t => t.toLowerCase().includes(filter.toLowerCase()));
  });

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            CASE HISTORIES OF DIGITAL GROWTH
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Project Portfolio
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Explore how we build digital success. Zero templates. Direct results.
          </p>
        </div>
      </section>

      {/* Grid with Filters */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-video overflow-hidden bg-dark">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold text-accent-green bg-emerald-500/10 px-2.5 py-1 rounded">
                      {project.stats}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono text-gray-500 bg-white/5 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Details Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-scale-up relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="aspect-video relative bg-dark border-b border-white/5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover w-full h-full opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-mono font-bold text-accent-green bg-emerald-500/10 px-2.5 py-1 rounded uppercase tracking-wider block w-fit mb-2">
                  {selectedProject.stats}
                </span>
                <h2 className="text-xl sm:text-3xl font-display font-black text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-widest">
                  PROJECT SPECIFICATIONS
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">CAPABILITY</span>
                  <span className="font-semibold text-white">{selectedProject.category}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">TECHNOLOGIES USED</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedProject.technologies.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-gray-300 bg-white/10 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">
                  ID: YDC_PRJ_{selectedProject.id.toUpperCase()}
                </span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    handleNav('contact');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
                >
                  Request Similar Implementation
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
