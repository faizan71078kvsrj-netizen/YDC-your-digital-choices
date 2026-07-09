import React, { useState } from 'react';
import { PageType, BlogPost } from '../types';
import { BLOG_POSTS, PORTFOLIO } from '../data';
import { X, Calendar, User, Clock, ArrowRight, ShieldCheck, Mail, Sparkles, Newspaper, BookOpen, ExternalLink, Zap } from 'lucide-react';

interface BlogViewProps {
  setActivePage: (page: PageType) => void;
}

export default function BlogView({ setActivePage }: BlogViewProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'resources' | 'news'>('resources');

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSuccess(true);
      setNewsEmail('');
    }
  };

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
            THE YDC TECHNICAL JOURNAL & BROADCASTS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            YDC Insights & Broadcasts
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Deep investigative articles regarding e-commerce scale, Shopify Core Web Vitals, and real-time news regarding our recent corporate system launches.
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center pt-6">
            <div className="inline-flex rounded-xl p-1 bg-white/5 border border-white/5">
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-2 transition-all cursor-pointer ${
                  activeTab === 'resources'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <BookOpen size={14} />
                <span>Technical Insights (Resources)</span>
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`px-5 py-2.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-2 transition-all cursor-pointer ${
                  activeTab === 'news'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Newspaper size={14} />
                <span>Recent Launches (News)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of articles / portfolio launches */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {activeTab === 'resources' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    
                    {/* Article Image representation */}
                    <div className="relative aspect-video overflow-hidden bg-dark">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-[10px] font-mono text-gray-400 bg-white/10 px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center space-x-3 text-[10px] text-gray-500 font-mono">
                        <span className="flex items-center space-x-1">
                          <Calendar size={10} />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock size={10} />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                      
                      <h3 className="text-md sm:text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                  </div>

                  {/* Author footer */}
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 mt-4">
                    <span className="flex items-center space-x-1.5 font-mono text-[10px]">
                      <User size={11} className="text-primary" />
                      <span>By {post.author}</span>
                    </span>
                    <span className="font-semibold text-white group-hover:text-primary transition-colors flex items-center space-x-1 text-[11px]">
                      <span>Read Article</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleNav('portfolio')}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 cursor-pointer group space-y-4"
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-dark border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">
                          {project.stats}
                        </span>
                        <h3 className="text-md font-bold text-white pt-2 leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-widest block font-bold">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">LIVE SYSTEM ACCELERATED</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-accent-blue group-hover:text-white transition-colors font-semibold">
                    <span>View Launch Case Study</span>
                    <ExternalLink size={11} />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-14 rounded-3xl border border-white/10 relative overflow-hidden text-center space-y-6">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-accent-green" />

          <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
            Subscribe to our Technical Journal
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Get early access to our technical blueprints, e-commerce reports, and new automation releases. No marketing spam, ever.
          </p>

          <form onSubmit={handleNewsSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2 pt-2">
            <input
              type="email"
              required
              placeholder="Enter your corporate email address"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-primary/50"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl text-xs font-semibold cursor-pointer hover:bg-primary/95 transition-colors whitespace-nowrap shrink-0"
            >
              Subscribe Blueprint
            </button>
          </form>

          {newsSuccess && (
            <div className="text-xs text-accent-green flex items-center justify-center space-x-1.5 animate-fade-in pt-1">
              <ShieldCheck size={14} />
              <span>Pristine! You are now subscribed to the YDC Technical Journal.</span>
            </div>
          )}

        </div>
      </section>

      {/* Reading overlay */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-scale-up relative max-h-[90vh] flex flex-col">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-6">
              
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-1 rounded w-fit block uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <h2 className="text-xl sm:text-3xl font-display font-black text-white leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center space-x-4 text-[11px] text-gray-500 font-mono border-y border-white/5 py-3">
                  <span className="flex items-center space-x-1">
                    <Calendar size={11} />
                    <span>{selectedPost.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={11} />
                    <span>{selectedPost.readTime}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User size={11} />
                    <span>By {selectedPost.author}</span>
                  </span>
                </div>
              </div>

              <div className="text-sm text-gray-300 leading-relaxed space-y-4 font-sans">
                <p className="font-semibold text-gray-200 text-base">
                  {selectedPost.excerpt}
                </p>
                <p>
                  At Your Digital Choices (YDC), we strongly believe that e-commerce speed and workflow efficiency are the absolute pillars of modern business profitability. When dealing with complex Shopify configurations or custom ERP database entries, any unnecessary code layer acts as a negative multiplier for checkout performance.
                </p>
                <div className="p-4 bg-white/5 rounded-xl border-l-2 border-primary my-4 font-mono text-xs text-gray-400">
                  // Core performance metric:<br />
                  Average TTFB reduction target: <strong className="text-emerald-400">&lt; 150ms</strong><br />
                  Shopify Lighthouse Performance Score: <strong className="text-emerald-400">95+</strong>
                </div>
                <p>
                  To maximize e-commerce scale, businesses must implement responsive design accessibility standards, transition custom static elements directly to edge node CDNs, and completely automate suppliers tracking numbers ingestion using modern, secure API webhook listeners.
                </p>
                <p>
                  Our solution architects stand prepared to assist your organization in auditing your current technical frameworks and transitioning to highly available, secure serverless infrastructures.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-gray-500">
                  ID: YDC_JNL_{selectedPost.id.toUpperCase()}
                </span>
                <button
                  onClick={() => {
                    setSelectedPost(null);
                    handleNav('contact');
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
                >
                  Schedule Solution Consult
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
