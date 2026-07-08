import { PageType } from '../types';
import { TEAM_MEMBERS } from '../data';
import { ArrowRight, Star, Linkedin, Github, Mail, Sparkles, Code, Globe2, Instagram, MessageCircle } from 'lucide-react';

interface TeamViewProps {
  setActivePage: (page: PageType) => void;
}

export default function TeamView({ setActivePage }: TeamViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mock skills parameters to make interactive metric bars
  const skillMetrics: Record<string, { label: string; percentage: number }[]> = {
    'Muhammad Faizan Tariq': [
      { label: 'System Architecture', percentage: 98 },
      { label: 'Shopify Plus Core', percentage: 95 },
      { label: 'Cloud Infrastructure', percentage: 90 },
      { label: 'AI Logic Flow', percentage: 96 }
    ]
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            EXPERT SOLUTIONS TEAM
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Meet the Engineers
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Our Islamabad, South Africa, and global divisions are comprised of senior systems architects, e-commerce experts, and AI neural specialists.
          </p>
        </div>
      </section>

      {/* Meet Team Members cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {TEAM_MEMBERS.map((member, idx) => {
            const metrics = skillMetrics[member.name] || [];
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-primary/20 transition-colors ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Photo Container */}
                <div className={`lg:col-span-4 ${isEven ? '' : 'lg:order-last'}`}>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-dark relative group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="flex flex-wrap gap-2">
                        {member.linkedIn && (
                          <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary text-white transition-all duration-200" title="LinkedIn">
                            <Linkedin size={15} />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary text-white transition-all duration-200" title="GitHub">
                            <Code size={15} />
                          </a>
                        )}
                        {member.instagram && (
                          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-pink-600 text-white transition-all duration-200" title="Instagram">
                            <Instagram size={15} />
                          </a>
                        )}
                        {member.whatsapp && (
                          <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-emerald-600 text-white transition-all duration-200" title="WhatsApp">
                            <MessageCircle size={15} />
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="p-2 rounded-lg bg-white/10 hover:bg-blue-600 text-white transition-all duration-200" title="Email">
                            <Mail size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Container */}
                <div className="lg:col-span-8 space-y-6">
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">
                      {member.role}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {member.name}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Direct Contact Handles */}
                  {(member.whatsapp || member.instagram || member.email) && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {member.whatsapp && (
                        <a
                          href={member.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-[11px] font-mono transition-colors"
                        >
                          <MessageCircle size={11} />
                          <span>WhatsApp CEO: 03184249817</span>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 text-[11px] font-mono transition-colors"
                        >
                          <Instagram size={11} />
                          <span>@itx_faizi_2030</span>
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-[11px] font-mono transition-colors"
                        >
                          <Mail size={11} />
                          <span>{member.email}</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Skills Progress bars */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">
                      MEASURED CAPABILITY INDEX
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {metrics.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400 font-medium">{skill.label}</span>
                            <span className="font-mono text-primary font-bold">{skill.percentage}%</span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-accent-blue rounded-full"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 text-center space-y-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Want to Collaborate with Our Division?
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Our Solutions Architects stand prepared to investigate your existing systems structure and formulate technical workflows to automate bottlenecks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
            >
              Consult Solutions Lead
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
