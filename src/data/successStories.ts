import { Rocket, ShoppingBag, Cpu, Shield, Globe, Settings, Truck, Award, Laptop, Activity, PhoneCall, Zap } from 'lucide-react';

export interface SuccessStory {
  id: string;
  title: string;
  client: string;
  industry: string;
  logoText: string;
  logoColor: string;
  metrics: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  image: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'luxora',
    title: 'Luxora Couture Headless Transition',
    client: 'Luxora Luxury Fashion (Cape Town, SA)',
    industry: 'Luxury Apparel & Fashion',
    logoText: 'LUXORA',
    logoColor: 'from-amber-500 to-amber-700',
    metrics: '+28% Conversion Rate / 1.1s Page Speed',
    challenge: 'Suffering from extreme shopping cart abandonment due to sluggish template rendering and bloated plugins on native Liquid setups.',
    solution: 'Designed and engineered a bespoke headless Hydrogen storefront built with React 18, Vite, and custom GraphQL API pipelines served on global edge CDN nodes.',
    results: 'Lighthouse score reached 98/100. Bounce rates dropped by 45%, resulting in a verified 28% increase in sales conversion in the first 30 days.',
    technologies: ['Shopify Hydrogen', 'React 18', 'GraphQL', 'Tailwind CSS', 'Cloudflare CDN'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'clara',
    title: 'Clara AI Voice Support Integration',
    client: 'Apex Global Brands (Global)',
    industry: 'Consumer Packaged Goods',
    logoText: 'CLARA AI',
    logoColor: 'from-blue-500 to-indigo-600',
    metrics: '$24K/Mo Saved / 89% Call Resolution Rate',
    challenge: 'Support agents overwhelmed with tracking and refund inquiries during peak shopping hours, leading to high wait times and poor CSAT.',
    solution: 'Programmed an ultra-low latency sub-200ms conversational phone agent powered by custom speech models, synced directly with Shopify GraphQL and CRM.',
    results: 'Processes 89% of inbound support calls autonomously, saving over $24,000 monthly while keeping average pickup times below 2 seconds.',
    technologies: ['Gemini SDK', 'Twilio Voice API', 'NodeJS', 'Pinecone Vector DB'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apex-freight',
    title: 'Apex Freight Logistics Custom ERP',
    client: 'Apex Logistics Inc. (South Africa & Pakistan)',
    industry: 'Logistics & Supply Chains',
    logoText: 'APEX LOG',
    logoColor: 'from-emerald-500 to-teal-600',
    metrics: '92% Reduction in Manual Workloads / Sub-15ms Database Speeds',
    challenge: 'Disconnected driver spreadsheets and manual billing cycles caused severe shipping coordination delays and scheduling errors.',
    solution: 'Built a custom unified enterprise ERP engine (the base for ServeOS) utilizing Node/Express backends, PostgreSQL indexes, and Docker container clusters.',
    results: 'Eliminated manual coordination and cut average order fulfillment workflows from 4 hours to just 12 minutes, saving thousands of labor hours.',
    technologies: ['ServeOS Core', 'PostgreSQL', 'Docker Containers', 'Nginx Proxy', 'React'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'velvet-moods',
    title: 'Velvet Moods Automated Supply Engine',
    client: 'Velvet Moods E-Commerce (London, UK)',
    industry: 'Luxury Apparel & Fashion',
    logoText: 'VELVET',
    logoColor: 'from-purple-500 to-pink-600',
    metrics: '1.2s Order Dispatch / 100% Stock Sync Accuracy',
    challenge: 'Frequent out-of-stock orders and slow dropshipping supplier response caused negative feedback and high refund volumes.',
    solution: 'Deployed custom webhook routers linking their custom Shopify store to CJ Sourcing networks with automatic order placement algorithms.',
    results: 'Orders are now dispatched to supplier networks within 1.2 seconds of payment. Absolute synchronization of product variables and stock data.',
    technologies: ['Shopify Liquid', 'CJ Sourcing API', 'Stripe API', 'Serverless Functions'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stellar-saas',
    title: 'Stellar Tech Enterprise Migration',
    client: 'Stellar Networks Corp. (Texas, USA)',
    industry: 'SaaS & Enterprise Systems',
    logoText: 'STELLAR',
    logoColor: 'from-sky-500 to-blue-700',
    metrics: '99.99% Server Uptime / 65% Hosting Cost Reduction',
    challenge: 'High cost of legacy cloud instances and recurring server crashes during high traffic webinars.',
    solution: 'Containerized the complete web application using Docker and migrated their database cluster to auto-scaling Google Cloud Run servers behind Cloudflare DNS.',
    results: 'Secured full regional redundancy, reducing web hosting bills by 65% while handling up to 50,000 concurrent page requests with absolute zero downtime.',
    technologies: ['Docker', 'GCP Cloud Run', 'Cloudflare Enterprise', 'Nginx Proxies'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'intake-rx',
    title: 'CareIntake Specialized Health Portal',
    client: 'CareIntake Clinics Group (Cape Town, SA)',
    industry: 'Healthcare & Specialized Intake',
    logoText: 'CARE INT',
    logoColor: 'from-cyan-500 to-blue-600',
    metrics: '100% Compliance / 78% Faster Intake Processing',
    challenge: 'Slow, manually typed patient medical history templates caused major reception backlogs and security concerns.',
    solution: 'Designed an encrypted specialized patient intake web app featuring custom biometric validation steps and automated medical document scanning.',
    results: 'Intake operational speed improved by 78%, completely resolving clinical queue backlogs while securing high-level end-to-end data safety.',
    technologies: ['React 18', 'TypeScript', 'Secure Encryption Suite', 'Node.js Core'],
    image: 'https://images.unsplash.com/photo-1504813184591-01557010c722?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gearbox-direct',
    title: 'Gearbox Direct Parts Sourcing Matrix',
    client: 'Gearbox Heavy Industries (Pakistan)',
    industry: 'Automotive & Heavy Industry',
    logoText: 'GEARBOX',
    logoColor: 'from-red-500 to-orange-600',
    metrics: 'sub-200ms Search Response / 150K Parts Indexed',
    challenge: 'Massive database of vehicle identification numbers (VINs) and specific gear dimensions was too slow to search on traditional architectures.',
    solution: 'Optimized PostgreSQL relational indexes and established a memory-cached custom search engine returning query solutions instantly.',
    results: 'Returned sub-200ms parts query speeds across 150,000 indexed products, resulting in a 35% growth in commercial order volume.',
    technologies: ['PostgreSQL', 'Redis Cache', 'Express', 'Tailwind Grid Systems'],
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'soma-drink',
    title: 'Soma Botanicals Conversion Acceleration',
    client: 'Soma Drinks Co. (Dubai, UAE)',
    industry: 'Consumer Packaged Goods',
    logoText: 'SOMA',
    logoColor: 'from-green-500 to-emerald-600',
    metrics: '+42% Mobile Orders / 100% Checkout Latency Reduction',
    challenge: 'Slow, cluttered mobile checkout layouts leading to high cart abandonment on Instagram/social media traffic.',
    solution: 'Designed and deployed a highly optimized, high-contrast single-scroll mobile first Shopify theme custom-tuned for instant checkout paths.',
    results: 'Mobile checkout conversion increased by a staggering 42% in 21 days, with average page checkout load times dropping under 1.5 seconds.',
    technologies: ['Shopify Theme Engine', 'Tailwind CSS', 'Section-everywhere', 'Stripe Pay'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'orion-crm',
    title: 'Orion CRM Autonomous Workflow Schedulers',
    client: 'Orion Real Estate Ventures (Global)',
    industry: 'SaaS & Enterprise Systems',
    logoText: 'ORION',
    logoColor: 'from-indigo-500 to-purple-700',
    metrics: '95% Agent Accuracy / 500+ Leads Scheduled Daily',
    challenge: 'Manual team follow-up processes with real estate leads resulted in high drop-off rates and delayed scheduling.',
    solution: 'Deployed custom Make.com webhooks and Gemini semantic auto-routers that instantly parse property inquiries and schedule discovery sessions.',
    results: '95% of incoming email leads now receive a highly personalized contextual follow-up within 3 minutes, booking over 500 sessions autonomously.',
    technologies: ['Gemini API', 'Make.com Router', 'Twilio SMS', 'React Core'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vortex-wool',
    title: 'Vortex Textiles Logistics Integration',
    client: 'Vortex Wool Mills (Faisalabad, Pakistan)',
    industry: 'Logistics & Supply Chains',
    logoText: 'VORTEX',
    logoColor: 'from-rose-500 to-red-700',
    metrics: '99.9% Shipment Accuracy / Automated Customs Sync',
    challenge: 'Delays in bulk textile tracking and paper-heavy customs paperwork caused severe storage fees at shipping terminals.',
    solution: 'Developed a custom automated logistics web companion integrated directly with regional customs databases and warehouse dispatch registers.',
    results: 'Secured full transparency on international wool shipments with auto-generated clearance sheets, eliminating customs hold times entirely.',
    technologies: ['NodeJS Backend', 'PostgreSQL Schema', 'Express API', 'React dashboard'],
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zenith-billing',
    title: 'Zenith Billing Core Re-platform',
    client: 'Zenith Premium Goods (London, UK)',
    industry: 'SaaS & Enterprise Systems',
    logoText: 'ZENITH',
    logoColor: 'from-violet-500 to-fuchsia-600',
    metrics: '100% Tax Accuracy / 0% Checkout Failures',
    challenge: 'Tax calculations and currency shifts across multi-region Shopify sales were causing billing reconciliation gaps.',
    solution: 'Engineered a tailored Stripe API middleware layer with dynamic tax rules engines that accurately processes world currencies.',
    results: 'Reduced billing discrepancies to absolute zero, securing automatic multi-jurisdictional tax clearance across all outbound orders.',
    technologies: ['Stripe API Core', 'Shopify Plus API', 'TypeScript middleware'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'aura-spa',
    title: 'Aura Luxury Wellness Web Interface',
    client: 'Aura Spas Group (Cape Town, SA)',
    industry: 'Healthcare & Specialized Intake',
    logoText: 'AURA',
    logoColor: 'from-teal-400 to-emerald-500',
    metrics: '+65% Direct Bookings / sub-1.2s Fluid Transitions',
    challenge: 'Third-party wellness platforms were taking heavy booking fee commissions, motivating Aura to launch their own custom portal.',
    solution: 'Built an elegant, responsive mobile-first booking web application utilizing fluid Framer Motion transitions and clean minimalist typography.',
    results: 'Increased direct customer spa bookings by 65% in 30 days, bypassing third-party fees and providing an ultra-luxurious digital entry point.',
    technologies: ['Framer Motion', 'React 18', 'Tailwind', 'Custom calendar module'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  }
];
