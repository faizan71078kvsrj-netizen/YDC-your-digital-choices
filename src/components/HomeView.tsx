import { useState, useRef, useEffect, FormEvent } from 'react';
import { PageType } from '../types';
import { SERVICES, PROCESS_STEPS, PORTFOLIO, TESTIMONIALS, FAQS, INDUSTRIES, STATS, TEAM_MEMBERS, BLOG_POSTS } from '../data';
import { SUCCESS_STORIES } from '../data/successStories';
import { ArrowRight, Sparkles, Star, ChevronDown, Check, Zap, Play, CheckCircle, Shield, Briefcase, Trophy, BarChart, PhoneCall, Send, Terminal, Cpu, Layers, Laptop, RefreshCw, MessageSquare, Code, Users, Globe, Eye, Rocket } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

interface HomeViewProps {
  setActivePage: (page: PageType) => void;
  openEstimator: () => void;
}

export default function HomeView({ setActivePage, openEstimator }: HomeViewProps) {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

  // Real-time Interactive AI Terminal States
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<{ sender: 'user' | 'system'; text: string }[]>([
    {
      sender: 'system',
      text: "YDC Cognitive Terminal [v2.5.0-online]. Type /help to list available telemetry commands, or ask about our e-commerce builds, custom AI agents, pricing structure, or our founder's journey."
    }
  ]);
  const [terminalLoading, setTerminalLoading] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const executeTerminalCommand = async (userMsg: string) => {
    if (!userMsg.trim() || terminalLoading) return;

    setTerminalHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setTerminalLoading(true);

    const trimmedMsg = userMsg.trim().toLowerCase();

    // Local intercept for high-speed slash commands
    if (trimmedMsg.startsWith('/')) {
      let reply = '';
      if (trimmedMsg === '/help') {
        reply = `Available Cognitive Commands:\n- /services : List of our active e-commerce and AI solution grids\n- /about : Corporate background, history, and office coordinates\n- /pricing : Project engagement structures and cost guidelines\n- /ceo : Direct biography, email, WhatsApp, and social profiles of Muhammad Faizan Tariq\n\nOr simply type any open-ended question to speak directly with our integrated Gemini brain.`;
      } else if (trimmedMsg === '/services') {
        reply = `YDC Custom Service Grids:\n1. Custom Shopify Solutions (Hydrogen, custom Liquid, checkout extensibility)\n2. AI Voice & Conversation Assistants (sub-200ms Twilio pipelines)\n3. Custom Software Suite (ServeOS workflow CRM/ERP)\n4. Automated dropshipping supply chains & sourcing integrations`;
      } else if (trimmedMsg === '/about') {
        reply = `Your Digital Choices (YDC) was founded in 2020 by Muhammad Faizan Tariq.\n- Mission: High-grade, zero-template custom enterprise architectures.\n- Pakistan HQ: Islamabad (Ghauri Town Phase 5)\n- South Africa Hub: Cape Town (The Box Office, Lower Burg Street)`;
      } else if (trimmedMsg === '/pricing') {
        reply = `YDC Interactive Cost Scaffolding:\n- Startup Theme Scopes: $1,000 - $2,000\n- Growth Store / System Rebuilds: $2,000 - $5,000\n- Enterprise AI & Custom Software: $5,000 - $15,000\n- Retainer System Architecture: $15,000+\n\nClick the "Interactive Cost Estimator" button in the Hero section to plan your specific sprint budget!`;
      } else if (trimmedMsg === '/ceo') {
        reply = `Founder & CEO Profile:
- Name: Muhammad Faizan Tariq (Founder, 2020)
- Core Focus: High-conversion Shopify architectures & neural integrations.
- CEO Tagline: "Building the Future with AI. Empowering Businesses Worldwide."

To view Muhammad Faizan Tariq's direct personal email, WhatsApp, and social profiles, please navigate to our dedicated "CEO & Founder" page under the Company menu.`;
      } else {
        reply = `Command "${userMsg}" not found. Type "/help" for list of valid telemetry commands.`;
      }

      setTimeout(() => {
        setTerminalHistory(prev => [...prev, { sender: 'system', text: reply }]);
        setTerminalLoading(false);
      }, 300);
      return;
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      if (data.error) {
        setTerminalHistory(prev => [...prev, { sender: 'system', text: `Error processing query: ${data.error}` }]);
      } else {
        setTerminalHistory(prev => [...prev, { sender: 'system', text: data.text }]);
      }
    } catch (err: any) {
      setTerminalHistory(prev => [...prev, { sender: 'system', text: `Failed to interface with YDC server: ${err.message}` }]);
    } finally {
      setTerminalLoading(false);
    }
  };

  const handleSendTerminal = (e: FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const msg = terminalInput;
    setTerminalInput('');
    executeTerminalCommand(msg);
  };

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

      {/* SECTION 3B: INTERACTIVE COGNITIVE AI TERMINAL */}
      <section id="ai-terminal" className="px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              REAL-TIME NEURAL INTERACTIVE ENGINE
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
              Probe Our Cognitive Terminal
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              Ask about our shopify headless architectures, twilio AI voice pipelines, South Africa and Pakistan divisions, pricing plans, or team leads to get direct answers from our integrated Gemini system.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Terminal Top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-black/45 text-xs text-gray-400 font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="pl-2 flex items-center space-x-1 text-gray-500">
                  <Terminal size={12} className="text-primary" />
                  <span>ydc_cognitive_core.sh</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="text-[10px] text-accent-green uppercase font-bold">GEMINI 2.5 LIVE</span>
              </div>
            </div>

            {/* Terminal logs screen */}
            <div className="h-64 sm:h-80 overflow-y-auto p-5 space-y-4 font-mono text-xs sm:text-sm bg-black/60 custom-scrollbar">
              {terminalHistory.map((log, lIdx) => (
                <div key={lIdx} className="space-y-1">
                  {log.sender === 'user' ? (
                    <div className="flex items-start space-x-2 text-primary">
                      <span className="shrink-0 font-bold select-none text-red-500">ydc_guest@shell:~$</span>
                      <span className="text-gray-100 break-words">{log.text}</span>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-2 text-emerald-400">
                      <span className="shrink-0 font-bold select-none text-emerald-500">ydc_ai_core_nodes &gt;</span>
                      <div className="text-emerald-300 break-words whitespace-pre-line leading-relaxed flex-1">
                        {log.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {terminalLoading && (
                <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span>AI cluster performing heavy semantic retrieval...</span>
                </div>
              )}
              <div ref={terminalBottomRef} />
            </div>

            {/* Quick Prompts Tags */}
            <div className="p-4 border-t border-white/5 bg-black/30 flex flex-wrap gap-2 items-center">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mr-1">Suggested Probes:</span>
              {[
                "/help",
                "/services",
                "/pricing",
                "/ceo",
                "Who is the CEO?",
                "Do you build custom ERPs?"
              ].map((suggestion, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  disabled={terminalLoading}
                  onClick={() => {
                    executeTerminalCommand(suggestion);
                  }}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-primary/20 border border-white/5 hover:border-primary/30 text-gray-300 hover:text-white transition-all text-[11px] font-mono cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Terminal Input form */}
            <form onSubmit={handleSendTerminal} className="flex border-t border-white/5 bg-black/45">
              <div className="flex items-center pl-4 text-primary font-mono text-xs select-none">
                ydc_api_node &gt;
              </div>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                disabled={terminalLoading}
                placeholder="Ask about our integrations, e-commerce, custom AI, or pricing..."
                className="flex-1 bg-transparent px-3 py-4 text-xs sm:text-sm text-gray-100 placeholder-gray-600 focus:outline-none font-mono"
              />
              <button
                type="submit"
                disabled={terminalLoading || !terminalInput.trim()}
                className="px-6 bg-primary hover:bg-primary/95 text-white flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer"
                title="Execute query"
              >
                <Send size={14} className={terminalLoading ? "animate-spin" : ""} />
              </button>
            </form>
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

      {/* SECTION 5B: INTERACTIVE AI ECOSYSTEM VISUALIZATION */}
      <section id="ai-ecosystem" className="px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(227,30,36,0.03),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              YDC INTEGRATED NEURAL ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              The AI Ecosystem Flow
            </h2>
            <p className="text-sm text-gray-400">
              Visualize how user telemetry, store operations, and custom AI agents synchronize seamlessly across our global system topology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Column 1: Client Touchpoints & Ingestion */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-md font-bold text-white">1. Client Touchpoints</h3>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Ingestion Layer</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed">
                Telemetry and queries arrive from multiple conversational and transactional points.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-primary font-bold">VOICE COGNITION</span>
                  <p className="text-xs text-gray-300">Continuous sub-200ms audio stream pipeline.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-accent-blue font-bold">SHOPIFY FRONTEND</span>
                  <p className="text-xs text-gray-300">User events on Hydrogen store browser sessions.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-purple-400 font-bold">API WEBHOOKS</span>
                  <p className="text-xs text-gray-300">System triggers, payments, and invoice status events.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Central Cognitive Core */}
            <div className="glass-panel p-8 rounded-2xl border border-primary/20 space-y-6 bg-gradient-to-br from-primary/5 via-transparent to-transparent hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary animate-pulse">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-md font-bold text-white">2. YDC Cognitive Core</h3>
                  <p className="text-[10px] font-mono text-primary font-bold uppercase">Decision & Processing</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed">
                AI agents, custom LLM routing, and neural orchestration decide the correct course of action.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
                    <span>AGENT_ROUTING.TS</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <pre className="text-[10px] text-emerald-400 font-mono space-y-1">
                    <code>{"{"}</code><br />
                    <code>&nbsp;&nbsp;intent: "checkout_optimize",</code><br />
                    <code>&nbsp;&nbsp;model: "gemini-2.5-flash",</code><br />
                    <code>&nbsp;&nbsp;actions: ["shopify_update", "notify_sms"]</code><br />
                    <code>{"}"}</code>
                  </pre>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs text-gray-300">
                  <Sparkles size={14} className="text-primary animate-spin-slow shrink-0" />
                  <span>Real-time Gemini fine-tuned weights routing.</span>
                </div>
              </div>
            </div>

            {/* Column 3: Corporate Integrations */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 bg-gradient-to-br from-white/[0.01] to-transparent hover:border-primary/25 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="text-md font-bold text-white">3. Integrations & Actions</h3>
                  <p className="text-[10px] font-mono text-gray-500 uppercase">Execution Layer</p>
                </div>
              </div>
              
              <p className="text-xs text-gray-400 leading-relaxed">
                The ecosystem triggers backend automation scripts, databases, or warehouse operations.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-accent-green font-bold">SHOPIFY GRAPHQL API</span>
                  <p className="text-xs text-gray-300">Syncs product catalogs, modifies cart variables.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-purple-400 font-bold">SERVEOS WORKFLOW ENGINE</span>
                  <p className="text-xs text-gray-300">Triggers corporate CRM logs and logistics flows.</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                  <span className="text-[10px] font-mono text-accent-blue font-bold">WAREHOUSE SOURCING</span>
                  <p className="text-xs text-gray-300">Orders placed on dropshipping supply networks.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5C: BUSINESS GROWTH, METRICS & SCALING */}
      <section id="business-growth" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-white/[0.01] via-transparent to-transparent space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
                PROVEN BUSINESS GROWTH METRICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight">
                Empowering Businesses Worldwide
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Our bespoke AI integrations and custom e-commerce structures don't just compile clean code—they unlock actual, measurable revenue growth and lower operation overheads.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded bg-accent-green/10 text-accent-green mt-0.5 shrink-0">
                    <Check size={12} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong>Shopify Speed:</strong> Ultra-light theme parameters, resulting in immediate reduction in checkout page abandonment.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 rounded bg-accent-green/10 text-accent-green mt-0.5 shrink-0">
                    <Check size={12} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    <strong>AI Cost Efficiency:</strong> Reduce expensive manual support queues by delegating customer FAQs and tracking to sub-200ms voice agents.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              
              {/* Metric 1 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-primary/20 transition-all">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">CONVERSION GAIN</span>
                <div className="text-2xl sm:text-4xl font-display font-black text-primary">+2.4%</div>
                <p className="text-xs text-gray-400">Average conversion rate increase on e-commerce storefronts.</p>
              </div>

              {/* Metric 2 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-primary/20 transition-all">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">SUPPORT AUTOMATION</span>
                <div className="text-2xl sm:text-4xl font-display font-black text-accent-green">65%</div>
                <p className="text-xs text-gray-400">Of general queries and shipment lookups resolved autonomously.</p>
              </div>

              {/* Metric 3 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-primary/20 transition-all">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">ORDER DISPATCH RUNTIME</span>
                <div className="text-2xl sm:text-4xl font-display font-black text-accent-blue">&lt;3.2s</div>
                <p className="text-xs text-gray-400">Immediate, secure synchronization from store order to sourcing warehouses.</p>
              </div>

              {/* Metric 4 */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-primary/20 transition-all">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">GLOBAL CORE UPTIME</span>
                <div className="text-2xl sm:text-4xl font-display font-black text-white">99.9%</div>
                <p className="text-xs text-gray-400">Maintained across multi-region server clusters and GCP instances.</p>
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

      {/* SECTION 7: CORE TECHNOLOGICAL ADVANTAGE (WHY CHOOSE YDC) */}
      <section id="why-choose-ydc" className="px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center sm:text-left space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              THE YDC DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Why Global Brands Choose YDC
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl leading-relaxed">
              We reject off-the-shelf page builders and generic templates. Our team engineers custom high-performance systems from the ground up, designed to convert and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Advantage 1 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Sub-1.5 Second Load Speeds</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Every millisecond costs conversions. Our headless setups are hosted on globally distributed edge nodes, compressing average load times to under 1.5 seconds worldwide.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>METRIC: 98+ LIGHTHOUSE SCORE</span>
                <span className="text-primary font-bold">OPTIMIZED</span>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Shield size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Military-Grade Security</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  We program rigid permission controls, complete automated daily back-ups, secure SSL/TLS tokens, and run our databases under robust PostgreSQL schemas.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>SECURITY: SOC2 & GDPR READY</span>
                <span className="text-primary font-bold">SECURED</span>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between group hover:border-primary/20 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Cpu size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">True Custom Zero-Template Code</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Your website is your ultimate business weapon. We code custom solutions tailored exactly to your brand guidelines, supply chains, and integration specifications.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>HANDOFF: 100% OWNERSHIP</span>
                <span className="text-primary font-bold">BESPOKE</span>
              </div>
            </div>

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

      {/* SECTION 8B: PRODUCTS SPOTLIGHT */}
      <section id="products-spotlight" className="px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              PROPRIETARY ENTERPRISE ENGINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              Our Flagship Products
            </h2>
            <p className="text-sm text-gray-400">
              Out-of-the-box advanced software architectures ready to scale your operational velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product 1: ServeOS */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[320px] group cursor-pointer" onClick={() => handleNav('serveos')}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Laptop size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold">COMPREHENSIVE ERP/CRM</span>
                  <h3 className="text-xl font-bold text-white">ServeOS</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">
                  The ultimate web-based workspace combining live pipeline leads management, multi-supplier inventory ledgers, team task assignments, and secure customer histories in one terminal.
                </p>
              </div>
              <div className="text-xs font-mono text-primary group-hover:text-white transition-colors flex items-center space-x-1">
                <span>Deploy ServeOS</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Product 2: Voice Agent */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[320px] group cursor-pointer" onClick={() => handleNav('products')}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <PhoneCall size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold">TELEPHONY AUTOMATION</span>
                  <h3 className="text-xl font-bold text-white">Voice Agent Engine</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">
                  Ultra-low latency audio grids trained to replicate your business context. Automatically dial leads, qualify tickets, and trigger direct CRM webhooks in sub-200ms steps.
                </p>
              </div>
              <div className="text-xs font-mono text-primary group-hover:text-white transition-colors flex items-center space-x-1">
                <span>Initialize Voice Node</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Product 3: Chat Agent */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[320px] group cursor-pointer" onClick={() => handleNav('products')}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MessageSquare size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold">KNOWLEDGE RETRIEVAL</span>
                  <h3 className="text-xl font-bold text-white">Chat Agent Core</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">
                  Autonomous 24/7 client-facing bot widget. Ingests PDFs, FAQs, and API streams to answer buyer questions, resolve tracking lookup demands, and increase shopping cart conversions.
                </p>
              </div>
              <div className="text-xs font-mono text-primary group-hover:text-white transition-colors flex items-center space-x-1">
                <span>Embed Chatbot</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Product 4: Website Builder */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[320px] group cursor-pointer" onClick={() => handleNav('products')}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Cpu size={20} />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest font-bold">EDGE CODE GENERATION</span>
                  <h3 className="text-xl font-bold text-white">AI Site Builder</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">
                  A revolutionary localized framework using deep visual prompt generation models to construct high-speed, SEO-compliant headless interfaces on edge networks.
                </p>
              </div>
              <div className="text-xs font-mono text-primary group-hover:text-white transition-colors flex items-center space-x-1">
                <span>Generate Template</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8C: TECHNOLOGY STACK */}
      <section id="technology-stack" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              SURGICAL TOOLS OF THE TRADE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Our Technology Stack
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              We compile code on high-grade, scalable developer frameworks. No template boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1: E-Commerce */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 font-mono flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>E-COMMERCE CORE</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Shopify Hydrogen', 'Shopify Liquid', 'WooCommerce', 'Stripe API', 'GraphQL API', 'CJ Sourcing'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-gray-400 text-xs font-mono">{tech}</span>
                ))}
              </div>
            </div>

            {/* Category 2: Frontend */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 font-mono flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>FRONTEND ENGINES</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React 18', 'Vite Bundler', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'D3.js Charts'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-gray-400 text-xs font-mono">{tech}</span>
                ))}
              </div>
            </div>

            {/* Category 3: Backend & AI */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 font-mono flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>BACKEND & LLM APIS</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node / Express', 'Python / Django', 'Gemini SDK', 'Twilio Voice', 'Pinecone Vector', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-gray-400 text-xs font-mono">{tech}</span>
                ))}
              </div>
            </div>

            {/* Category 4: DevOps & Cloud */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-white/5 pb-2 font-mono flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>DEVOP & CLOUD DEPLOY</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker Containers', 'GCP Cloud Run', 'Cloudflare DNS', 'Nginx Proxies', 'CI/CD Github', 'SSL TLS Logs'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 text-gray-400 text-xs font-mono">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8F: BLOG RECENT POSTS */}
      <section id="blog-preview" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
                KNOWLEDGE RETRIEVAL BLOG
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                Technical Insights
              </h2>
            </div>
            <button
              onClick={() => handleNav('blog')}
              className="text-sm font-semibold text-accent-blue hover:text-white transition-colors flex items-center space-x-1 group"
            >
              <span>Explore all articles</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => handleNav('blog')}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group flex flex-col justify-between space-y-6 h-[400px]"
              >
                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-dark border border-white/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span className="text-primary font-bold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-md font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>By {post.author}</span>
                  <span className="text-primary group-hover:text-white transition-colors">Read article &gt;</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: VERIFIED SUCCESS STORIES */}
      <section id="testimonials" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
                PARTNER SATISFACTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
                Verified Client Success Stories
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                Real engineering handovers, audited metrics, and system results validated by our corporate partners.
              </p>
            </div>
            <button
              onClick={() => handleNav('portfolio')}
              className="text-sm font-semibold text-accent-blue hover:text-white transition-colors flex items-center space-x-1 group cursor-pointer"
            >
              <span>View all success stories</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUCCESS_STORIES.slice(0, 2).map((story) => (
              <div
                key={story.id}
                onClick={() => handleNav('portfolio')}
                className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer group flex flex-col justify-between space-y-6 bg-gradient-to-br from-white/[0.01] to-transparent"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-wider">{story.industry}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {story.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold uppercase text-accent-green bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {story.metrics.split(' / ')[0]}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">The Challenge:</span>
                      <p className="text-gray-400 leading-relaxed">{story.challenge}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">The Solution:</span>
                      <p className="text-gray-400 leading-relaxed">{story.solution}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Verified Results:</span>
                      <p className="text-white font-medium leading-relaxed">{story.results}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {story.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: GLOBAL INFRASTRUCTURE */}
      <section id="global-matrix" className="px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              OPERATIONAL HORIZONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
              The Global Expansion Matrix
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Serving premium clients across major international commerce nodes. Explore our active hubs and upcoming expansion corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col justify-between h-[180px]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">ACTIVE HQ</span>
                <h4 className="text-lg font-bold text-white">Islamabad, Pakistan</h4>
                <p className="text-xs text-gray-400">Our core development, system design, and solutions engineering headquarters.</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500">TEL: +92 307 9651033</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 bg-white/[0.01] flex flex-col justify-between h-[180px]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">ACTIVE HUB</span>
                <h4 className="text-lg font-bold text-white">Cape Town, South Africa</h4>
                <p className="text-xs text-gray-400">Regional support, client onboarding, and localized product distribution.</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500">TEL: +27 73 339 8873</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between h-[180px]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded font-bold">PIPELINE Q3 2026</span>
                <h4 className="text-lg font-bold text-white">Dubai, UAE</h4>
                <p className="text-xs text-gray-400">Expanding our specialized AI voice agents and headless pipelines to the Gulf.</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500">STATUS: ON-SCHEDULE</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-between h-[180px]">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded font-bold">PIPELINE Q1 2027</span>
                <h4 className="text-lg font-bold text-white">London, UK</h4>
                <p className="text-xs text-gray-400">Establishing direct enterprise architecture and retainer support nodes.</p>
              </div>
              <span className="text-[10px] font-mono text-gray-500">STATUS: IN-PLANNING</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10B: CAREERS PREVIEW */}
      <section id="careers-preview" className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden bg-gradient-to-br from-white/[0.01] to-transparent">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
                WE ARE HIRING
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                Build the Future of Headless Commerce & AI Agents
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                We are looking for exceptional React/Vite engineers, custom Shopify architects, and Python AI practitioners to join our remote global team. No templates, no slow code, only pure technical craft.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 font-mono">Senior React Engineer</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 font-mono">Custom Shopify Developer</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300 font-mono">Conversational AI Specialist</span>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => handleNav('careers')}
                className="px-6 py-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/95 transition-all flex items-center space-x-2 group w-full lg:w-auto justify-center cursor-pointer"
              >
                <span>View Open Career Roles</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
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
