import { useState } from 'react';
import { PageType } from '../types';
import { Mail, Instagram, MessageCircle, Sparkles, Users, Search, Award } from 'lucide-react';
import ceoImage from '../assets/images/regenerated_image_1783597924448.jpg';

interface TeamViewProps {
  setActivePage: (page: PageType) => void;
}

interface CorpTeamMember {
  name: string;
  position: string;
  department: string;
  category: string;
  bio: string;
  image: string;
  isCeo?: boolean;
}

export default function TeamView({ setActivePage }: TeamViewProps) {
  const [activeDeptFilter, setActiveDeptFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const departmentsList = [
    { label: 'All Specialists', id: 'All' },
    { label: 'Leadership', id: 'Leadership' },
    { label: 'AI & Engineering', id: 'Engineering' },
    { label: 'Design & Management', id: 'Design & PM' },
    { label: 'Marketing & Sales', id: 'Marketing & Sales' },
    { label: 'Operations & HR', id: 'Operations' }
  ];

  const teamMembers: CorpTeamMember[] = [
    {
      name: 'Muhammad Faizan Tariq',
      position: 'CEO & Founder',
      department: 'Executive Board',
      category: 'Leadership',
      bio: "Leads the company's vision, global strategy, AI innovation, software development, partnerships, and business growth.",
      image: ceoImage,
      isCeo: true
    },
    {
      name: 'Ahmed Raza',
      position: 'Chief Technology Officer (CTO)',
      department: 'Executive Board',
      category: 'Leadership',
      bio: 'Leads software architecture, cloud infrastructure, security, AI systems, and technical strategy.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Ayesha Khan',
      position: 'Project Manager',
      department: 'Project Management',
      category: 'Design & PM',
      bio: 'Manages software projects, client communication, planning, timelines, and delivery.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Hamza Ali',
      position: 'Senior Full Stack Developer',
      department: 'Software Engineering',
      category: 'Engineering',
      bio: 'Develops scalable web applications, SaaS platforms, APIs, and enterprise software solutions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Fatima Noor',
      position: 'Senior UI/UX Designer',
      department: 'Design Studio',
      category: 'Design & PM',
      bio: 'Designs premium user experiences, interfaces, design systems, prototypes, and branding assets.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Bilal Hassan',
      position: 'AI Solutions Engineer',
      department: 'Artificial Intelligence',
      category: 'Engineering',
      bio: 'Builds AI agents, automation workflows, chatbots, voice AI, and machine learning integrations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Zain Ahmed',
      position: 'Mobile Application Developer',
      department: 'Software Engineering',
      category: 'Engineering',
      bio: 'Develops Android, iOS, Flutter, and React Native applications with modern architectures.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Mariam Siddiqui',
      position: 'Digital Marketing & SEO Specialist',
      department: 'Marketing & SEO',
      category: 'Marketing & Sales',
      bio: 'Handles SEO, Google Ads, Meta Ads, content marketing, branding, and lead generation strategies.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Usman Tariq',
      position: 'Business Development Executive',
      department: 'Sales & Growth',
      category: 'Marketing & Sales',
      bio: 'Manages enterprise sales, client acquisition, partnerships, proposals, and business relationships.',
      image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Hira Malik',
      position: 'Customer Success & HR Manager',
      department: 'Customer Success & HR',
      category: 'Operations',
      bio: 'Manages customer success, onboarding, support coordination, recruitment, and HR operations.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesCategory = activeDeptFilter === 'All' || member.category === activeDeptFilter;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-24 pt-28 pb-20 overflow-hidden">
      
      {/* 1. Header Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-mono font-bold tracking-widest uppercase">
            <Users size={12} />
            <span>YDC Global Board</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Meet Our Team
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            A growing international AI & Software company represented by elite architects, developers, and designers.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Filter Controls */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] focus:bg-dark border border-white/5 focus:border-primary/50 text-white rounded-xl text-xs sm:text-sm font-mono transition-all outline-none"
              />
            </div>

            {/* Department Counter Indicator */}
            <div className="text-xs font-mono text-gray-500">
              Showing <span className="text-primary font-bold">{filteredMembers.length}</span> of {teamMembers.length} team members
            </div>

          </div>

          {/* Department Quick Filters */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {departmentsList.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDeptFilter(dept.id)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono transition-all cursor-pointer border ${
                  activeDeptFilter === dept.id
                    ? 'bg-primary border-primary text-white font-bold'
                    : 'bg-white/5 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Team Grid Listings */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member, index) => (
                <div
                  key={index}
                  className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-primary/30 bg-gradient-to-br from-white/[0.01] to-transparent transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  <div className="space-y-4">
                    {/* Portrait Container */}
                    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/5 bg-dark relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-primary font-bold">
                        {member.department}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        {member.isCeo && (
                          <span className="p-1 rounded bg-primary/10 border border-primary/20 text-primary">
                            <Sparkles size={12} className="animate-pulse" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-mono text-primary font-medium">
                        {member.position}
                      </p>
                    </div>

                    {/* Short Professional Biography */}
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* CEO ONLY CONTACT DETAILS */}
                    {member.isCeo && (
                      <div className="pt-4 border-t border-white/5 flex flex-col space-y-2 text-xs">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
                          Direct Contact
                        </span>
                        <div className="space-y-1">
                          <a
                            href="mailto:faizan@yourdigitalchoices.com"
                            className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors font-mono text-[11px]"
                          >
                            <Mail size={12} className="text-primary shrink-0" />
                            <span>faizan@yourdigitalchoices.com</span>
                          </a>
                          <div className="flex flex-wrap items-center gap-3 pt-1">
                            <a
                              href="https://wa.me/923184249817"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1.5 text-gray-300 hover:text-emerald-400 transition-colors font-mono text-[11px]"
                            >
                              <MessageCircle size={12} className="text-emerald-500 shrink-0" />
                              <span>WhatsApp</span>
                            </a>
                            <a
                              href="https://www.instagram.com/itx_faizi_2030"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1.5 text-gray-300 hover:text-pink-400 transition-colors font-mono text-[11px]"
                            >
                              <Instagram size={12} className="text-pink-500 shrink-0" />
                              <span>Instagram</span>
                            </a>
                            <a
                              href="https://www.tiktok.com/@faizan_here_11"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1.5 text-gray-300 hover:text-cyan-400 transition-colors font-mono text-[11px]"
                            >
                              <Award size={12} className="text-cyan-500 shrink-0" />
                              <span>TikTok</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-white/5 rounded-2xl max-w-xl mx-auto space-y-3">
              <span className="text-gray-500 block">No corporate profiles match your filter parameters.</span>
              <button
                onClick={() => {
                  setActiveDeptFilter('All');
                  setSearchQuery('');
                }}
                className="text-xs font-mono text-primary font-bold hover:underline"
              >
                Reset Filter Settings
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Support Call to Action Block */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 text-center space-y-6">
          <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <Award size={24} />
          </div>
          <h3 className="text-xl sm:text-3xl font-display font-bold text-white">
            Partner with Our Global Experts
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Our specialized team stands ready to review your current processes, isolate systems friction, and build highly optimized automations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-3 rounded-xl text-xs font-mono font-bold bg-primary hover:bg-primary/95 text-white transition-colors cursor-pointer"
            >
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
