import { PageType } from '../types';
import { ArrowRight, CheckCircle, Shield, Laptop, Layers, Users, Zap, Terminal, Code, Database, Server, RefreshCw } from 'lucide-react';

interface ServeOSViewProps {
  setActivePage: (page: PageType) => void;
}

export default function ServeOSView({ setActivePage }: ServeOSViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serveOsModules = [
    {
      title: 'Active Leads Pipeline Hub',
      desc: 'Capture, categorize, and prioritize raw lead streams from social ads, website chats, or voice nodes inside one unified drag-and-drop workflow.',
      icon: Users
    },
    {
      title: 'Multi-Supplier Sourcing Ledgers',
      desc: 'Eliminate manual CSV imports. Automatically track supplier stock counts on Alibaba, CJ Dropshipping, or local depots with instant margin calculation triggers.',
      icon: Database
    },
    {
      title: 'Operational Task Orchestration',
      desc: 'Assign system tasks, customer ticket escalations, or custom development sprints to team engineers with automated deadline notification alerts.',
      icon: Layers
    },
    {
      title: 'GDPR & Encryption Log Archives',
      desc: 'Preserve absolute database integrity. Every customer inquiry, invoice status, and lead interaction log is archived using industry-grade security protocols.',
      icon: Shield
    }
  ];

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* SECTION 1: HERO */}
      <section className="px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,30,36,0.08),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-bold">
            <Laptop size={12} />
            <span>YDC FLAGSHIP ERP/CRM SYSTEM</span>
          </div>
          <h1 className="text-4xl sm:text-7xl font-display font-black text-white tracking-tight leading-none">
            Serve<span className="text-primary">OS</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The ultimate web-based workspace designed to synthesize e-commerce inventory, customer CRM history pipelines, team tasks, and supplier contracts into one unified dashboard.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/25 transition-all cursor-pointer"
            >
              Deploy ServeOS to My Enterprise
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-white/5 text-gray-300 hover:text-white border border-white/5 transition-all cursor-pointer"
            >
              Book a Live Sandbox Demo
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE DASHBOARD SIMULATION */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto glass-panel p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl bg-black/60 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent-blue to-accent-green" />

          {/* Simulated Title Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="font-mono text-xs text-gray-500 pl-2">serveos_console_v2.5.sh</span>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono text-gray-400">
              <span className="text-accent-green flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-ping mr-1" />
                <span>● CONNECTED</span>
              </span>
              <span className="text-gray-600">|</span>
              <span>Client Database: PG_SQL</span>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Sidebar columns */}
            <div className="lg:col-span-3 space-y-4 border-r border-white/5 pr-4 hidden lg:block font-mono text-xs text-gray-500">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">SYSTEM MODULES</span>
              <div className="space-y-1">
                <button className="w-full text-left p-2.5 rounded bg-white/5 text-white border-l-2 border-primary font-medium">Dashboard Overview</button>
                <button className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors">Leads CRM Pipeline</button>
                <button className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors">Supplier Inventory Ledger</button>
                <button className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors">Internal Task Board</button>
                <button className="w-full text-left p-2.5 rounded hover:bg-white/5 transition-colors">System Security Logs</button>
              </div>
            </div>

            {/* Main Stage Grid columns */}
            <div className="lg:col-span-9 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-500 block uppercase">ACTIVE CONTRACT LEADS</span>
                  <div className="text-2xl font-bold text-white">48 Active</div>
                  <span className="text-[10px] text-accent-green">+12% this week</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-500 block uppercase">SUPPLIER SYNC TICKETS</span>
                  <div className="text-2xl font-bold text-white">3,248 Skus</div>
                  <span className="text-[10px] text-accent-green">100% synced</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-500 block uppercase">SYSTEM LATENCY SCORE</span>
                  <div className="text-2xl font-bold text-primary">12ms</div>
                  <span className="text-[10px] text-emerald-400">Perfect response</span>
                </div>

              </div>

              {/* Simulated Leads pipeline list */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-white">// RECENT CRM ACTIONS</span>
                  <button className="text-primary hover:underline text-[10px] flex items-center space-x-1">
                    <RefreshCw size={10} />
                    <span>Auto Refresh</span>
                  </button>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  
                  <div className="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-gray-300">Luxora Couture Store</span>
                    </div>
                    <span className="text-primary font-bold">Refreshed 48 items inventory</span>
                    <span className="text-gray-500 text-[10px]">1 min ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-gray-300">Vapi Voice Node #48</span>
                    </div>
                    <span className="text-accent-green">Triggered booking calendar webhook</span>
                    <span className="text-gray-500 text-[10px]">5 min ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-gray-300">Faizan (Architect)</span>
                    </div>
                    <span className="text-gray-400">Assigned "Integrate SSL keys" to Sufyan</span>
                    <span className="text-gray-500 text-[10px]">12 min ago</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: DETAILED MODULES BREAKDOWN */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
              MODULAR WORKSPACE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Why Choose ServeOS?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
              We compile a clean, fast microservices grid to substitute complex plugin setups, ensuring full data sovereignty on your secure servers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serveOsModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: DEPLOYMENT PLANS */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-14 rounded-3xl border border-white/10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Schedule Your Sandbox Trial Setup
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Every ServeOS deployment is customized exactly to match your existing CRM/Supplier pipelines. Contact our technical solutions group to coordinate your sandbox environment.
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
