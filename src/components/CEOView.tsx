import { motion } from 'motion/react';
import { PageType } from '../types';
import { Mail, Instagram, MessageCircle, Sparkles, Award, Shield, Milestone, Calendar, ArrowRight, Compass, Eye, TrendingUp } from 'lucide-react';
import ceoImage from '../assets/images/regenerated_image_1783597924448.jpg';

interface CEOViewProps {
  setActivePage: (page: PageType) => void;
}

export default function CEOView({ setActivePage }: CEOViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 pb-20 space-y-24 md:space-y-32 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-mono font-bold tracking-widest uppercase">
              <Sparkles size={12} className="animate-pulse" />
              <span>CEO & Founder</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-tight">
              Muhammad Faizan Tariq
            </h1>
            <p className="text-lg sm:text-xl font-mono text-gray-400">
              Founder & Chief Executive Officer — Your Digital Choices (YDC)
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              "Building the Future with AI. Empowering Businesses Worldwide." Since founding YDC in 2020, my vision has been to transcend traditional development and construct custom, high-velocity neural architectures, enterprise software, and hyper-automated ecosystems that drive unmatched global growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-primary hover:bg-primary/90 text-white transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center space-x-2 cursor-pointer"
              >
                <span>Schedule a Discovery Call</span>
                <ArrowRight size={14} />
              </button>
              <a
                href="#contact-direct"
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all flex items-center space-x-2"
              >
                <span>Direct Contact Handles</span>
              </a>
            </div>
          </div>

          {/* Large CEO Photo Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 bg-dark shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10 opacity-60" />
              <img
                src={ceoImage}
                alt="Muhammad Faizan Tariq"
                className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-3xl pointer-events-none z-20" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Story, Journey & Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 space-y-6">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Compass size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              The Founder's Story & Our Journey
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
              <p>
                In 2020, I established <strong>Your Digital Choices (YDC)</strong> in Islamabad, Pakistan, with a humble yet revolutionary mission: to liberate modern organizations from slow, disconnected, and repetitive software systems. Recognizing early on that artificial intelligence and automation would redefine the global economy, I set out to construct a world-class technology company.
              </p>
              <p>
                What began as a custom development shop quickly evolved. By scaling custom Shopify Plus e-commerce frameworks and orchestrating intelligent multi-agent AI ecosystems, YDC expanded operations globally, establishing regional offices in Cape Town, South Africa, and delivering enterprise solutions to clients across North America, Europe, Africa, and Asia.
              </p>
              <p>
                We do not just build software—we engineer full-stack cognitive digital ecosystems that empower businesses to scale seamlessly and lead their industries.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 space-y-6">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Shield size={22} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Leadership Philosophy
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
              <p>
                I believe that real enterprise technology must be built with <strong>architectural honesty</strong> and absolute precision. In an era saturated with low-grade AI wrappers and generic solutions, YDC represents true craft—building reliable, high-velocity pipelines that seamlessly synchronize with actual human work.
              </p>
              <p>
                Our structural commitment to our partners is simple: we deliver bespoke, future-proof, high-contrast, scalable applications that work flawlessly. By combining relentless technical rigor with proactive strategic advice, we build deep relationships with our clients that span decades.
              </p>
              <p>
                "The only path to building the future is to master the tools that define it. At YDC, we master artificial intelligence to give our clients the ultimate competitive advantage."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent space-y-4">
            <div className="inline-flex p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Eye size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              To engineer and deploy pristine, highly automated enterprise-level software systems that eliminate technical friction, optimize core operations, and accelerate global growth.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent space-y-4">
            <div className="inline-flex p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              To lead the global digital landscape as the premier partner for AI-driven transformation, setting the standard for technical precision, robust code, and business intelligence.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.01] to-transparent space-y-4">
            <div className="inline-flex p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Award size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Core Value</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Uncompromising craftsmanship. We reject default frameworks and lazy code. Every line of software we deploy is clean, robust, and engineered for maximum execution.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Company Timeline */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">
              CHRONOLOGY OF GROWTH
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Company Timeline
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
              How Your Digital Choices (YDC) scaled from an Islamabad startup into a global technology powerhouse.
            </p>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12 max-w-3xl mx-auto">
            
            {/* Timeline Item 2020 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10" />
              <div className="flex items-center space-x-2 text-primary font-mono text-xs font-bold">
                <Calendar size={12} />
                <span>2020</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Founding in Islamabad, Pakistan</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Muhammad Faizan Tariq founds Your Digital Choices (YDC) to deliver custom software solutions, Shopify customizations, and system architecture consultation services.
              </p>
            </div>

            {/* Timeline Item 2022 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10" />
              <div className="flex items-center space-x-2 text-primary font-mono text-xs font-bold">
                <Calendar size={12} />
                <span>2022</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Expanding Into E-Commerce & Systems Automation</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                The company scales rapidly, designing customized e-commerce logistics automation and headless themes, managing millions in global transaction pipelines for leading brands.
              </p>
            </div>

            {/* Timeline Item 2024 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10" />
              <div className="flex items-center space-x-2 text-primary font-mono text-xs font-bold">
                <Calendar size={12} />
                <span>2024</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Establishment of YDC Africa</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                YDC establishes its regional office in Cape Town, South Africa, extending its elite engineering, software, and localized business growth capabilities to the African continent.
              </p>
            </div>

            {/* Timeline Item Present */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark z-10" />
              <div className="flex items-center space-x-2 text-primary font-mono text-xs font-bold">
                <Calendar size={12} />
                <span>2026</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Global Cognitive Systems & Enterprise AI Orchestration</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                YDC operates as a highly coordinated global firm, offering deep integration layers, multi-agent automated support hubs, and custom AI ecosystems that redefine modern work.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Achievements */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">
              METRICS OF SUCCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
              Milestones & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-primary block">2020</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">FOUNDING YEAR</span>
              <p className="text-xs text-gray-400">Pioneered custom software services in Islamabad, Pakistan.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-primary block">100+</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">ENTERPRISE SYSTEMS</span>
              <p className="text-xs text-gray-400">Successfully developed and deployed automated software globally.</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-primary block">2</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">GLOBAL HEADQUARTERS</span>
              <p className="text-xs text-gray-400">Offices situated in Pakistan (HQ) and South Africa (Regional).</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-3">
              <span className="text-3xl sm:text-4xl font-mono font-bold text-primary block">$50M+</span>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block">TRANSACTION VOLUME</span>
              <p className="text-xs text-gray-400">Secured and processed via our customized e-commerce pipelines.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Personal Contact Details (Contact Direct) */}
      <section id="contact-direct" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/5 to-transparent space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold block">
              DIRECT CEO CONTACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Connect Directly with the Founder
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              For high-value strategic partnerships, global sales proposals, or custom enterprise consulting, get in touch directly with Muhammad Faizan Tariq.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            
            {/* Email Address */}
            <a
              href="mailto:faizan@yourdigitalchoices.com"
              className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                <Mail size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">PROFESSIONAL EMAIL</span>
                <span className="text-xs sm:text-sm text-white font-medium group-hover:text-primary transition-colors">
                  faizan@yourdigitalchoices.com
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923184249817"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <MessageCircle size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">WHATSAPP DIRECT</span>
                <span className="text-xs sm:text-sm text-white font-medium group-hover:text-emerald-400 transition-colors">
                  +92 318 4249817
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/itx_faizi_2030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-pink-500/20 transition-all group"
            >
              <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                <Instagram size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">INSTAGRAM</span>
                <span className="text-xs sm:text-sm text-white font-medium group-hover:text-pink-400 transition-colors">
                  @itx_faizi_2030
                </span>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@faizan_here_11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all group"
            >
              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <TrendingUp size={18} />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] text-gray-500 uppercase font-mono block">TIKTOK</span>
                <span className="text-xs sm:text-sm text-white font-medium group-hover:text-cyan-400 transition-colors">
                  @faizan_here_11
                </span>
              </div>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
