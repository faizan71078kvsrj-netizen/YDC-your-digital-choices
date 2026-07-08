import { PageType } from '../types';
import { TEAM_MEMBERS, STATS } from '../data';
import { CheckCircle2, Award, Heart, ShieldAlert, Sparkles, Star, Target, Users } from 'lucide-react';

interface AboutViewProps {
  setActivePage: (page: PageType) => void;
}

export default function AboutView({ setActivePage }: AboutViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Award,
      title: 'Zero-Template Philosophy',
      description: 'We reject cookie-cutter Shopify themes or stock WordPress installations. Every line of code and user interface is built bespoke for your growth.'
    },
    {
      icon: Users,
      title: 'Cross-Continental Power',
      description: 'Uniting senior engineering divisions in Islamabad, Pakistan and solution offices in South Africa, providing 24/7 coverage and global deployment reliability.'
    },
    {
      icon: Sparkles,
      title: 'AI-First Integration',
      description: 'We do not just install software; we orchestrate advanced language models and neural nodes directly into live operations for maximum automation.'
    }
  ];

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            THE STORY OF YDC
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Your Digital Choices
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We exist to replace fragile digital templates with surgical, AI-first engineering. Based out of Islamabad and South Africa, YDC builds world-class systems that power modern enterprise scale.
          </p>
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              Surgical Engineering. <br />
              No Placeholders. No Shortcuts.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Founded by Muhammad Faizan Tariq in 2019, Your Digital Choices (YDC) grew from a specialized e-commerce development house into a premiere cross-continental solution studio. We realized that modern businesses were struggling with fragile web setups, slow loading times, and manually laborious administrative pipelines.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              By combining high-performance React architectures, flawless Shopify Plus setups, and custom-trained AI voice/chatbot models, we assist mid-market companies and ambitious startups in automating up to 92% of their operations while maximizing checkout conversions.
            </p>
            <div className="pt-4">
              <button
                onClick={() => handleNav('contact')}
                className="px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20 transition-all duration-200"
              >
                Collaborate with YDC
              </button>
            </div>
          </div>

          <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 space-y-6">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-3">
              YDC CORE BENCHMARKS
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">High Contrast Design Systems</h4>
                  <p className="text-xs text-gray-400 mt-1">We enforce standard accessibility grids and premium layouts modeled directly in professional Figma environments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue mt-1">
                  <Target size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Edge-Deploy Infrastructure</h4>
                  <p className="text-xs text-gray-400 mt-1">Our static elements deploy directly onto global edge CDN nodes, reducing Time-To-First-Byte (TTFB) to under 100ms.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              OPERATING PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Our Core Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              THE INTELLECT BEHIND YDC
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Meet Our Solution Architects
            </h2>
            <p className="text-sm text-gray-400 max-w-md mx-auto">
              Our engineering divisions build high-performance codebases and automated supply integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="aspect-square w-full rounded-xl overflow-hidden border border-white/5 bg-dark">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <span className="text-xs text-accent-blue block font-medium">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1.5">Specialized in</span>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[9px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
