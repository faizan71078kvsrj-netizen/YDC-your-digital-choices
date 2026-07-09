import { PageType } from '../types';
import { ArrowRight, Shirt, Laptop, ShoppingBag, Truck, Settings, Activity, CheckCircle, Sparkles } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

interface IndustriesViewProps {
  setActivePage: (page: PageType) => void;
}

export default function IndustriesView({ setActivePage }: IndustriesViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const industryDetails = [
    {
      name: 'Luxury Apparel & Fashion',
      icon: 'Shirt',
      tagline: 'High-Speed Headless Luxury Storefronts',
      description: 'We construct ultra-premium headless Shopify layouts pairing custom Figma designs with fast React/Liquid engines to decrease checkout friction and maximize brand retention.',
      capabilities: [
        'Edge-rendered catalogs under 1.2s load speeds',
        'Custom interactive lookbooks and color swatch cards',
        'Headless Shopify hydrogen pipelines with multi-currency checkout',
        'Integrated premium lifestyle visual grids'
      ]
    },
    {
      name: 'SaaS & Enterprise Systems',
      icon: 'Laptop',
      tagline: 'Automated Sales Pipelines and Workspaces',
      description: 'We design custom web platforms and CRM lead qualification integrations that allow software teams to automate contract signups, track active usage, and query customer statistics.',
      capabilities: [
        'Bespoke CRM integrations with HubSpot and Salesforce',
        'Automated sales billing pipelines via Stripe Billing API',
        'Intuitive custom dashboard portals with real-time metrics charts',
        'Multi-tenant database architectures'
      ]
    },
    {
      name: 'Consumer Packaged Goods',
      icon: 'ShoppingBag',
      tagline: 'Hands-off Dropshipping and Sourcing Operations',
      description: 'We build end-to-end automated dropshipping systems directly linking supplier stock levels with Shopify frontends, running price margin updates and dispatch tracking autonomously.',
      capabilities: [
        'Real-time automated supplier inventory syncing',
        'Dynamic profit margin auto-markup formulas',
        'Bulk tracking ingestion and direct customer notification routes',
        'Alibaba sourcing agent coordinates for wholesale Private Label setups'
      ]
    },
    {
      name: 'Logistics & Global Supply Chains',
      icon: 'Truck',
      tagline: 'Unified Fleet Tracking and Customs Warehousing',
      description: 'Custom ERP frameworks designed to combine multi-carrier shipping schedules, supplier purchase orders, and real-time inventory ledger checks in one command terminal.',
      capabilities: [
        'Direct custom integrations with DHL, FedEx, and regional carriers',
        'Automated packing list generation and customs declarations matching',
        'Real-time physical stock counts sync with cloud databases',
        'Role-based driver dispatch control boards'
      ]
    },
    {
      name: 'Automotive & Heavy Industry',
      icon: 'Settings',
      tagline: 'High-Volume Part Search and Inbound Invoicing',
      description: 'Robust databases mapped to search hundreds of thousands of vehicle identification numbers (VINs) and custom parts dimensions with zero search latency.',
      capabilities: [
        'Intelligent vehicle part search filters and attributes indexing',
        'Automated supplier quotation invoice scraping',
        'Interactive 3D vehicle customization canvas assets',
        'Dealer partner portals with bulk pricing rules'
      ]
    },
    {
      name: 'Healthcare & Specialized Intake',
      icon: 'Activity',
      tagline: 'Secure HIPAA & GDPR Complaint Patient Journeys',
      description: 'Clean, safe patient intake platforms, online calendar appointment scheduling, and custom vital statistics trackers engineered with modern, eye-safe aesthetics.',
      capabilities: [
        'Encryption-by-default patient data archives',
        'Surgical online intake form validation logic',
        'Seamless booking calendars synced with practitioners GCal',
        'GDPR and local compliance security shield protocols'
      ]
    }
  ];

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            STRATEGIC MARKET SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Industries We Accelerate
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We reject the template standard. Our engineering board constructs customized technical blueprints designed specifically to bypass the unique operational constraints of your market sector.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industryDetails.map((ind, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <DynamicIcon name={ind.icon} size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-wider block font-semibold">{ind.tagline}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{ind.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {ind.description}
                </p>

                {/* Capabilities check-list */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider mb-2">SECTOR BLUEPRINT INCLUDES</span>
                  {ind.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                      <CheckCircle size={14} className="text-accent-green shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={() => handleNav('contact')}
                  className="text-xs font-semibold text-white group-hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>Request Custom Sector Audit</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-panel p-10 sm:p-14 rounded-3xl border border-white/10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Do You Need a Custom System Blueprint?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Our Islamabad and South Africa solutions architects are prepared to analyze your existing workflow matrices and layout dedicated code pipelines.
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
