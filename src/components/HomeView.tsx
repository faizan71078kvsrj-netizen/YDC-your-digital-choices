import { useState } from 'react';
import { PageType } from '../types';
import { SERVICES, PROCESS_STEPS, PORTFOLIO, TESTIMONIALS, FAQS, INDUSTRIES, STATS } from '../data';
import { ArrowRight, Sparkles, Star, ChevronDown, Check, Zap, Play, CheckCircle, Shield, Briefcase, Trophy, BarChart, PhoneCall } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

interface HomeViewProps {
  setActivePage: (page: PageType) => void;
  openEstimator: () => void;
}

export default function HomeView({ setActivePage, openEstimator }: HomeViewProps) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  // Extract featured services for home overview
  const featuredServices = SERVICES.filter(s =>
    ['shopify-dev', 'ai-voice-agents', 'web-dev', 'ai-chatbots', 'dropshipping', 'custom-software'].includes(s.id)
  );

  return (
    <div className="space-y-32 pb-24 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section id="hero" className="relative pt-32 lg:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Apple/Stripe-style background grid & ambient glowing nodes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,30,36,0.12),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(33,153,206,0.1),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          
          {/* AI Spotlight Tag */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary shadow-inner animate-fade-in">
            <Sparkles size={13} className="animate-pulse" />
            <span className="text-gray-300">AI-First Engineering</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            <span className="text-gray-400">Next-gen Shopify Integrations</span>
          </div>

          {/* Core Brand Headlines */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-extrabold tracking-tight max-w-5xl mx-auto leading-[0.95] text-gradient-red py-2">
            Building Digital Success <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff4a4f] to-accent-blue">
              with AI Architectures
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Your Digital Choices (YDC) constructs high-conversion Shopify storefronts, premium custom ERP/CRM software, and ultra-fluent autonomous AI voice agents.
          </p>

          {/* Interactive Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/20 transition-all duration-200 border border-primary/10 flex items-center justify-center space-x-2 hover:translate-y-[-1px] cursor-pointer"
            >
              <span>Launch Your Project</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={openEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-white/5 text-accent-green hover:bg-white/10 border border-white/10 transition-all duration-200 flex items-center justify-center space-x-2 hover:border-accent-green/30 cursor-pointer"
            >
              <Sparkles size={15} />
              <span>Interactive Cost Estimator</span>
            </button>
          </div>

        </div>

        {/* Hero Interactive UI Spotlight */}
        <div className="max-w-5xl mx-auto mt-20 relative px-4">
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 h-24 bottom-0 pointer-events-none" />
          <div className="glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 relative overflow-hidden group">
            
            {/* Ambient light ring behind code widget */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-transform group-hover:scale-110 duration-1000" />
            
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 text-xs text-gray-500 font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="pl-2">ydc_agent_orchestration.ts</span>
              </div>
              <span className="text-primary font-bold">● ENGINE LIVE</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block px-2.5 py-1 rounded bg-accent-green/10 text-accent-green font-mono text-[10px] font-bold">
                  ACTIVE PIPELINE: TWILIO VOICE AGENT
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Autonomous Phone Assistant For Global Operations
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Our neural agents ingest knowledge documents, understand conversational sentiment, and trigger direct CRM actions (such as order updates or appointment bookings) in milliseconds.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center -space-x-2">
                    <img className="w-7 h-7 rounded-full border border-dark object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Client" />
                    <img className="w-7 h-7 rounded-full border border-dark object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Client" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    Resolving 85% of standard support requests autonomously
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-5 bg-black/45 p-5 rounded-xl border border-white/5 font-mono text-xs text-gray-400 space-y-3 relative">
                <div className="text-accent-blue">// AI Response Simulation</div>
                <div>
                  <span className="text-gray-500">Customer:</span> "I need to modify my Shopify order #3948..."
                </div>
                <div className="text-emerald-400 font-medium">
                  <span className="text-primary font-bold">YDC_Voice_Agent:</span> "Sure thing! Retrieving your Shopify Plus records... Found it. Shall I change the delivery address to Islamabad?"
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Latency: <strong className="text-emerald-400">180ms</strong></span>
                  <span>Accuracy: <strong className="text-emerald-400">99.4%</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* SECTION 2: TRUST BADGES */}
      <section id="trust-badges" className="py-8 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
            TRUSTED BY CORPORATE BRANDS & ACCELERATED E-COMMERCE VENTURES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-60">
            <span className="font-display font-black text-xl text-white tracking-widest">SHOPIFY<span className="text-primary">PLUS</span></span>
            <span className="font-display font-semibold text-lg text-white tracking-tight">ALIBABA SOURCING</span>
            <span className="font-display font-bold text-lg text-white">WALMART PARTNER</span>
            <span className="font-display font-extrabold text-xl text-white tracking-widest">WOO</span>
            <span className="font-display font-bold text-lg text-white tracking-wider">WP ENTERPRISE</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATS */}
      <section id="stats" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 text-center space-y-2 hover:border-primary/20 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-display font-black text-primary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section id="services-overview" className="px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block">
                SPECIALIZED CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                Surgical Solutions to Scale <br />
                Your Operations
              </h2>
            </div>
            <button
              onClick={() => handleNav('services')}
              className="text-sm font-semibold text-accent-blue hover:text-white transition-colors flex items-center space-x-1 group"
            >
              <span>Explore all 26 custom services</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleNav('services')}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between min-h-[250px]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={service.iconName} size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-1">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-primary transition-colors flex items-center space-x-1 pt-4">
                  <span>Learn details</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: THE AI SOLUTIONS SPOTLIGHT */}
      <section id="ai-spotlight" className="px-4 sm:px-6 lg:px-8 relative">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-xs font-mono text-accent-green font-bold">
                <Zap size={12} />
                <span>AI-FIRST SYSTEM OVERVIEW</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                AI Voice Agents, Chatbots & Intelligent Automations
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                We design and integrate proprietary artificial intelligence solutions. From hands-free customer support voice grids to custom webhook schedulers running on secure cloud infrastructure, we build the bridges that automate repetitive human task layers.
              </p>
              
              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>Custom fine-tuned knowledge integrations for chatbots</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>Ultra-low latency sub-200ms phone response nodes</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle size={16} className="text-accent-green" />
                  <span>Direct inventory sync automation connecting global warehouses</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => handleNav('services')}
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all duration-200"
                >
                  Configure AI Solution
                </button>
                <button
                  onClick={openEstimator}
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 border border-white/5"
                >
                  Configure My Budget
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-black/45 border border-white/5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-500">
                  <span>MODULE: neural_orchestrator.py</span>
                  <span className="text-accent-green">Online</span>
                </div>
                <div className="text-gray-400">
                  <span className="text-purple-400">import</span> ydc_ai_sdk<br />
                  <span className="text-purple-400">import</span> shopify_graphql_client<br />
                  <br />
                  <span className="text-gray-500"># Instantiating the client models</span><br />
                  voice_agent = ydc_ai_sdk.VoiceAgentNode(<br />
                  &nbsp;&nbsp;model=<span className="text-emerald-300">"gemini-2.5-flash"</span>,<br />
                  &nbsp;&nbsp;voice_clone=<span className="text-emerald-300">"faizan_architect_v3"</span><br />
                  )<br />
                  <br />
                  <span className="text-gray-500"># Listening to continuous streams</span><br />
                  <span className="text-blue-400">@voice_agent.on_call_incoming</span><br />
                  <span className="text-purple-400">def</span> <span className="text-yellow-300">handle_customer_request</span>(call, transcript):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;intent = ydc_ai_sdk.extract_intent(transcript)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> intent == <span className="text-emerald-300">"track_shipment"</span>:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_id = intent.parameters[<span className="text-emerald-300">"order_id"</span>]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status = shopify_graphql_client.fetch_tracking(order_id)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;call.say(f<span className="text-emerald-300">"Your parcel is currently in route near Sandton, SA. Expected arrival is Wednesday!"</span>)
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                  <span>Engine: Python 3.11</span>
                  <span>SSL Connection: Secure</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: THE ROADMAP PROCESS */}
      <section id="process" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block">
              OUR DEPLOYMENT PIPELINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              The Blueprint of Digital Success
            </h2>
            <p className="text-sm text-gray-400">
              We replace generic templates with our rigorous five-phase system alignment process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent-blue/20 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="absolute top-4 right-4 text-4xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-md font-bold text-white group-hover:text-accent-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: PORTFOLIO SHOWCASE */}
      <section id="portfolio-highlights" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block">
                PROOF OF CAPABILITY
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                Recent Acceleration Launches
              </h2>
            </div>
            <button
              onClick={() => handleNav('portfolio')}
              className="text-sm font-semibold text-accent-blue hover:text-white transition-colors flex items-center space-x-1 group"
            >
              <span>View full case histories</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO.slice(0, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => handleNav('portfolio')}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-dark border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-accent-green uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">
                        {project.stats}
                      </span>
                      <h3 className="text-lg font-bold text-white pt-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8: TARGETED INDUSTRIES */}
      <section id="industries" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block">
              STRATEGIC FOCUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Industries We Accelerate
            </h2>
            <p className="text-sm text-gray-400">
              We engineer tailor-made solutions mapped directly to specialized market criteria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 text-center space-y-4 flex flex-col items-center group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <DynamicIcon name={ind.icon} size={20} />
                </div>
                <span className="text-xs font-bold text-white group-hover:text-primary transition-colors block">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS & AUTHENTIC VOICE */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block">
              PARTNER SATISFACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Verified Client Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6"
              >
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <span className="text-xs text-gray-400">{t.role} • {t.company}</span>
                    <div className="flex items-center space-x-0.5 text-amber-400 mt-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section id="faq-accordions" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Surgical Answers
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = expandedFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => handleToggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center text-white hover:text-primary transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown size={18} className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-500'}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 11: CALL TO ACTION */}
      <section id="cta-block" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-10 md:p-16 border border-white/10 relative overflow-hidden text-center space-y-8">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono text-accent-green uppercase tracking-widest block font-bold">
            LET'S CONSTRUCT DIGITAL EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Ready to Accelerate Your Enterprise with Custom Code?
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Contact our Islamabad or South Africa technical solution groups today to schedule a strategic engineering session.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/20 transition-all duration-200"
            >
              Consult an Architect
            </button>
            <button
              onClick={openEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-white/5 text-accent-green hover:bg-white/10 border border-white/5 transition-all duration-200"
            >
              Configure Budget Target
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
