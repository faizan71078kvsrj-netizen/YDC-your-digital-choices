import { Service, PortfolioItem, Testimonial, FAQItem, BlogPost, TeamMember, JobPosition } from './types';

import ceoImage from './assets/images/regenerated_image_1783597924448.jpg';
import harisImage from './assets/images/haris_portrait_1782816974291.jpg';
import sufyanImage from './assets/images/sufyan_portrait_1782816938230.jpg';
import zainabImage from './assets/images/zainab_portrait_1782816955370.jpg';

export const CONTACT_INFO = {
  email: 'info@yourdigitalchoices.com',
  website: 'www.yourdigitalchoices.com',
  pakistan: {
    address: 'Office No. 12, Plaza 94, Ghauri Town Phase 5, Islamabad 44000, Pakistan',
    phone: '+92 307 9651033',
    whatsapp: 'https://wa.me/923184249817'
  },
  southAfrica: {
    address: 'Office 804, 8th Floor, The Box Office, 9 Lower Burg Street, Cape Town 8001, South Africa',
    phone: '+27 73 339 8873',
    whatsapp: 'https://wa.me/27733398873'
  }
};

export const SERVICES: Service[] = [
  // Shopify Group
  {
    id: 'shopify-dev',
    title: 'Shopify Development',
    category: 'Shopify',
    description: 'Custom headless and Liquid-based Shopify storefront architectures engineered for high conversions and rapid load speeds.',
    features: ['Headless hydrogen setups', 'Liquid optimization', 'Custom app development', 'Migration to Shopify Plus'],
    details: ['Interactive shopping carts', 'Instant page loads via edge networks', 'Pixel-perfect UI alignments', 'Advanced custom checkout scripts'],
    iconName: 'ShoppingBag'
  },
  {
    id: 'shopify-themes',
    title: 'Shopify Themes',
    category: 'Shopify',
    description: 'Bespoke, award-winning Shopify theme designs customized specifically to express your unique brand identity and maximize sales.',
    features: ['Custom design systems', 'Section-everywhere support', 'SEO-friendly architecture', 'Mobile-first layout system'],
    details: ['Optimized Core Web Vitals', 'Tailwind integration', 'Flexible page builder widgets', 'Dark/Light theme support'],
    iconName: 'Palette'
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping Automation',
    category: 'Shopify',
    description: 'End-to-end dropshipping system design from supplier integration to completely hands-free auto-fulfillment setups.',
    features: ['Auto supplier syncing', 'Winning product selection tools', 'Price markup automation', 'Automated tracking ingestion'],
    details: ['Direct link to CJ Dropshipping/DSers', 'Multi-supplier setups', 'Fast shipping channel filters', 'Profit dashboard custom setups'],
    iconName: 'Ship'
  },

  // AI & Automation Group
  {
    id: 'ai-automation',
    title: 'AI Automation',
    category: 'AI & Automation',
    description: 'Integrate deep AI-driven workflows into your core business processes to reduce human labor and error rates.',
    features: ['Make.com / Zapier design', 'AI data categorization', 'Autonomous document scanning', 'Workflow visualizers'],
    details: ['Natural language auto-routers', 'Automated email reply generation', 'Google Sheets automation via Gemini', 'Invoice extraction pipelines'],
    iconName: 'Cpu'
  },
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents',
    category: 'AI & Automation',
    description: 'Human-like conversational voice agents powered by advanced speech models to manage inbound and outbound customer support call volume.',
    features: ['Ultra-low latency audio response', 'Multi-language speech fluency', 'CRM action triggering', 'Sentiment detection analysis'],
    details: ['Real-time reservation booking', 'Support ticket pre-qualification', 'Integrated with Twilio/Vapi', 'Custom vocal clone integration'],
    iconName: 'Mic'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    category: 'AI & Automation',
    description: '24/7 intelligent customer-facing chatbot assistants customized on your own knowledge base to resolve 80%+ of incoming queries.',
    features: ['Context-aware intelligence', 'Live agent handoff protocols', 'Multi-channel chat deployments', 'Analytics reporting dashboards'],
    details: ['Semantic vector search answers', 'Shopify order lookup integration', 'Proactive conversion triggers', 'Custom branded UI interfaces'],
    iconName: 'MessageSquareText'
  },

  // Web & Mobile
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Web & Mobile',
    description: 'Superb React, Next.js, and static web app compilation with cutting edge backends and optimal server performance.',
    features: ['Vercel & AWS deployments', 'SEO semantic structure', 'Dynamic SSR structures', 'Robust API connectors'],
    details: ['Built with TypeScript', 'Tailwind modern grid alignments', 'Incremental Static Regeneration (ISR)', 'State-of-the-art security layers'],
    iconName: 'Globe'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    category: 'Web & Mobile',
    description: 'Cross-platform native iOS & Android application development built with React Native or Flutter for streamlined single-codebase experiences.',
    features: ['Native-grade performance', 'Offline local storage support', 'Push notification pipelines', 'App Store & Play Store publishing'],
    details: ['Biometric authentication ready', 'Real-time sync algorithms', 'Intuitive gesture handlers', 'Rich device capability integrations'],
    iconName: 'Smartphone'
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    category: 'Web & Mobile',
    description: 'Professional high-performance headless or customized WordPress systems configured with security hardening and bespoke block designs.',
    features: ['Custom block themes', 'Speed optimized hosting setups', 'Security shield integration', 'Advanced custom fields mapping'],
    details: ['Headless WP with Next.js frontend', 'SEO-friendly schema injection', 'Automated backup networks', 'User role control systems'],
    iconName: 'LayoutGrid'
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce',
    category: 'Web & Mobile',
    description: 'Turn your WordPress installation into a secure, fast-loading, highly-customized, and high-volume e-commerce machinery.',
    features: ['Custom payment gateways', 'Subscription billing tools', 'Dynamic tax rules engines', 'High-speed database indexers'],
    details: ['Inventory alert indicators', 'Smooth order checkout funnels', 'Bulk CSV import/export bridges', 'Affiliate network plug designs'],
    iconName: 'Coins'
  },

  // Design & Branding
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    category: 'Design & Branding',
    description: 'Premium layouts, wireframes, and design journeys modeled inside Figma. Visual structure that aligns aesthetic beauty with product usability.',
    features: ['Detailed interactive Figma files', 'Comprehensive Design Systems', 'User testing wireframes', 'Micro-interaction guides'],
    details: ['High contrast color accessibility', 'Stripe & Apple grade alignments', 'Responsive grid instructions', 'Visual asset export kits'],
    iconName: 'Layers'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Design & Branding',
    description: 'Stunning marketing collateral, visual banners, and vector assets that amplify your marketing performance.',
    features: ['Social media design templates', 'Pitch deck visual designs', 'Custom infographics', 'Print-ready marketing vectors'],
    details: ['Optimized WebP export exports', 'Harmonious color combinations', 'Consistent typography grids', 'Layered source file delivery'],
    iconName: 'Sparkles'
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    category: 'Design & Branding',
    description: 'Complete brand conceptualization including logos, color guides, typography scales, and a comprehensive brand book.',
    features: ['Logo variations and icons', 'Color palette definitions', 'Typography styling rules', 'Social banner media guidelines'],
    details: ['Distinctive icon brandmark design', 'Trademark-friendly blueprints', 'Aesthetic design documentation', 'Brand stationery layouts'],
    iconName: 'Award'
  },

  // Marketing
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    category: 'Marketing',
    description: 'Surgical search ranking strategy comprising on-page optimizations, toxic link removal, schema injection, and keyword planning.',
    features: ['On-page semantic enhancements', 'Speed and Core Web Vitals checks', 'Premium contextual backlinks', 'SEO keyword research maps'],
    details: ['JSON-LD structured schema mapping', 'Competitor keyword difficulty maps', 'Continuous rank tracking reporting', 'Comprehensive content outlines'],
    iconName: 'TrendingUp'
  },
  {
    id: 'google-ads',
    title: 'Google Ads PPC',
    category: 'Marketing',
    description: 'ROI-focused Google search and shopping campaigns designed to drive immediate conversions from high-intent buyers.',
    features: ['Strategic keyword bids', 'A/B landing page iterations', 'Dynamic search keyword generation', 'Automated negative list updates'],
    details: ['Google Merchant Center optimization', 'Target CPA campaign setup', 'Conversion script tag configurations', 'Comprehensive performance reporting'],
    iconName: 'Target'
  },
  {
    id: 'facebook-ads',
    title: 'Facebook Ads',
    category: 'Marketing',
    description: 'Highly-targeted meta social campaigns designed to find, engage, and convert prospective client profiles at low acquisition costs.',
    features: ['Custom demographic segments', 'Scroll-stopping creative testing', 'CBO & ABO bid architecture', 'Meta Pixel conversion event setup'],
    details: ['Dynamic retargeting funnels', 'High-LTV audience cloning', 'Detailed creative metric mapping', 'UGC script conceptualization'],
    iconName: 'Facebook'
  },
  {
    id: 'instagram-ads',
    title: 'Instagram Ads',
    category: 'Marketing',
    description: 'Visually rich, immersive ad setups built specifically for Instagram Reels, Stories, and Feeds targeting the modern consumer.',
    features: ['Reels optimized video visual styles', 'Influencer style ad setups', 'Direct bio-click funnels', 'Aesthetic story link buttons'],
    details: ['Audience filter configurations', 'User lifestyle visual aesthetics', 'Direct DM automation hooks', 'Interactive survey ad layouts'],
    iconName: 'Instagram'
  },

  // E-Commerce VA & Sourcing
  {
    id: 'amazon-va',
    title: 'Amazon VA Services',
    category: 'Enterprise & Custom',
    description: 'Professional Amazon virtual assistants to manage product listings, search keywords optimization, inventory alerts, and customer support.',
    features: ['PPC listing optimization', 'A+ content design mapping', 'Inventory stock projections', 'Negative feedback disputes'],
    details: ['Seller Central administration', 'Case log resolution pipelines', 'Helium10/JungleScout audits', 'Hijacker monitoring alerts'],
    iconName: 'Anchor'
  },
  {
    id: 'walmart-automation',
    title: 'Walmart Automation',
    category: 'Enterprise & Custom',
    description: 'Set up and run a hands-free Walmart Seller account leveraging optimized dropshipping or private label systems.',
    features: ['WFS shipment management', 'Walmart SEO listing maps', 'Competitor buy-box tracking', 'Price matching algorithm controls'],
    details: ['Auto inventory syncing', 'Walmart Ad campaign setups', 'Fast-shipping badge criteria', 'Return ticket reconciliation'],
    iconName: 'Zap'
  },
  {
    id: 'ebay',
    title: 'eBay Store Management',
    category: 'Enterprise & Custom',
    description: 'eBay store optimizations and listing management designed to clear aged stock and win high search priority.',
    features: ['Listing title optimizing', 'eBay Promoted listings PPC', 'Feedback accumulation plans', 'Multi-channel stock bridges'],
    details: ['Terapeak market insights', 'Bespoke HTML store descriptions', 'Defect rate resolution workflows', 'International shipping systems'],
    iconName: 'Store'
  },
  {
    id: 'alibaba-sourcing',
    title: 'Alibaba Sourcing',
    category: 'Enterprise & Custom',
    description: 'End-to-end sourcing operations from verified suppliers in China, negotiating lower unit rates, and tracking quality control.',
    features: ['Verified supplier matching', 'SGS quality audit inspections', 'Custom package logo design', 'Freight forwarder logistics scheduling'],
    details: ['Trade Assurance safety locks', 'Sample inspection checklists', 'MOQ negotiation scripts', 'Custom declarations mapping'],
    iconName: 'PackageOpen'
  },

  // Enterprise & Custom
  {
    id: 'erp',
    title: 'ERP Custom Systems',
    category: 'Enterprise & Custom',
    description: 'Tailored ERP platforms built to synthesize manufacturing, sales, accounting, and supply chains into a unified dashboard.',
    features: ['Custom modules development', 'Legacy system data imports', 'Multi-tenant database isolation', 'Role-based permission groups'],
    details: ['Real-time stock ledger reports', 'Custom reporting engine outputs', 'Compliance log archives', 'Automated purchase approvals'],
    iconName: 'Building2'
  },
  {
    id: 'crm',
    title: 'CRM Deployments',
    category: 'Enterprise & Custom',
    description: 'Deploy, customize, and automate HubSpot, Salesforce, or bespoke CRMs to convert leads into loyal clients.',
    features: ['Pipeline automation design', 'Lead qualification scoring', 'Multi-channel contact sync', 'Team activity heatmaps'],
    details: ['Custom contact field maps', 'Sales email template sequences', 'Dynamic reporting dashboards', 'API webhook trigger setups'],
    iconName: 'Users'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    category: 'Enterprise & Custom',
    description: 'Solve unique operational issues with tailor-made web-based software architectures made for scalability and fast performance.',
    features: ['Modular microservices designs', 'High data load readiness', 'Bulletproof auth & state', 'Thorough technical documentation'],
    details: ['Serverless micro-computations', 'Advanced search index algorithms', 'Real-time sync architectures', 'Custom dashboard layouts'],
    iconName: 'Terminal'
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    category: 'Enterprise & Custom',
    description: 'Establish robust data transfers between disparate software services, inventory tools, and custom storage setups.',
    features: ['JSON REST & GraphQL APIs', 'Rate limit protection buffers', 'Automated retry logging', 'Secure token keys rotation'],
    details: ['Custom middleware layers', 'Webhook stream catchers', 'Third party library bindings', 'Error code tracking systems'],
    iconName: 'Link2'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    category: 'Enterprise & Custom',
    description: 'Scale securely on AWS, GCP, or Azure with clean serverless architectures, automatic scaling, and secure database backups.',
    features: ['Infrastructure-as-Code (Terraform)', 'CI/CD automated code pipelines', 'Distributed caching setups', 'Military-grade encryption keys'],
    details: ['Docker container orchestration', 'VPC isolated networks', 'Automatic DB backup scheduling', 'CloudWatch alarm parameters'],
    iconName: 'Cloud'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    category: 'Enterprise & Custom',
    description: 'Continuous server-side tracking, routine updates, security patches, and instant bug fixes to keep your platforms running 100% stable.',
    features: ['24/7 server health tracking', 'SLA guaranteed response time', 'Version updates testing', 'Weekly backup diagnostics'],
    details: ['Instant security vulnerability patches', 'Performance regression audits', 'Browser compatibility checks', 'Content update handoffs'],
    iconName: 'ShieldAlert'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description: 'We thoroughly investigate your product architecture, business metrics, target audiences, and operational bottlenecks to build a detailed engineering roadmap.'
  },
  {
    number: '02',
    title: 'Premium UX Design',
    description: 'Our design unit models custom UI prototypes in Figma. We focus on clean spacing, modern grids, typography, and intuitive customer navigation routes.'
  },
  {
    number: '03',
    title: 'AI-First Development',
    description: 'Our senior developers write clean, robust, and lightning-fast code integrated with advanced custom AI models and reliable backend APIs.'
  },
  {
    number: '04',
    title: 'Surgical Testing & QA',
    description: 'We run deep performance diagnostics, pixel-alignment audits, page speed metrics checks, and end-to-end integration audits across all devices.'
  },
  {
    number: '05',
    title: 'Deploy & Hyper-Scale',
    description: 'We transition your application to highly-available secure cloud hosting and continuously optimize speed, conversion funnels, and performance.'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'lux-apparel',
    title: 'Luxora Couture',
    category: 'Shopify Development & Branding',
    description: 'An ultra-premium Shopify custom theme and headless integration for an luxury apparel brand, delivering 45% faster loading times and a massive 28% increase in conversions.',
    stats: '2.8s speed drop / +28% CVR',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    technologies: ['Shopify headless', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 'clara-ai',
    title: 'Clara AI Voice Support',
    category: 'AI Voice Agents & Automation',
    description: 'A custom, human-fluent, low-latency voice agent deployed on Twilio to manage peak-hour call volumes for an international enterprise, saving over $24,000 in monthly human agent costs.',
    stats: '$24K/mo saved / 89% automation',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vapi', 'Gemini Pro', 'Twilio', 'Node.js']
  },
  {
    id: 'apex-logistics',
    title: 'Apex Global Logistics Portal',
    category: 'ERP Custom Systems & Custom Software',
    description: 'A bespoke enterprise-grade logistics system uniting multi-supplier warehouses, shipping routes, custom declarations, and real-time inventory tracking.',
    stats: 'Real-time ledger / 99.9% Uptime',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Nest.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'urban-drop',
    title: 'UrbanGlow Dropshipping Automation',
    category: 'Shopify Themes & Automation',
    description: 'A completely autonomous Shopify store syncing high-margin supplier items, managing price adjustments dynamically, and dispatching orders with no manual friction.',
    stats: '6-Figure monthly volume / 0 manual steps',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&w=800&q=80',
    technologies: ['Shopify Liquid', 'Custom NodeJS middleware', 'Make.com', 'CJ Sourcing']
  },
  {
    id: 'soma-healthcare',
    title: 'Soma Health Interactive App',
    category: 'Web Development & UI/UX',
    description: 'A highly secure web platform designed for patient intake automation, scheduling, and custom telemetry data visualization with clean aesthetics.',
    stats: '150K monthly users / GDPR compliant',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'Tailwind', 'D3.js', 'Firebase Auth']
  },
  {
    id: 'nova-token',
    title: 'Nova Capital Brand Identity',
    category: 'UI/UX & Branding',
    description: 'A modern design revamp and complete branding book for a leading venture capital group, aligning their digital identity with professional modern principles.',
    stats: '120-page design system / +200% lead metrics',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    technologies: ['Figma UX system', 'Custom Vector branding', 'Aesthetic design theory']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Christian Labuschagne',
    role: 'Managing Partner',
    company: 'Velo Growth Group (South Africa)',
    content: 'The team at Your Digital Choices did an incredible job building our headless infrastructure. Their Shopify expertise and custom AI automations completely transformed how we capture, process, and fulfill customer requests.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't2',
    name: 'Mian Haris',
    role: 'Operations Director',
    company: 'GlowMart Brands (Pakistan)',
    content: 'YDC provided world-class service. Their dropshipping automation and Walmart integration are flawless. They cut down our manual administrative workloads by 90% in less than two weeks. I highly recommend their expertise!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't3',
    name: 'Samantha Wickham',
    role: 'Founder',
    company: 'Bloom Cosmetics LLC',
    content: 'Our custom Shopify theme feels as smooth as Apple and as premium as Stripe. Visual layout, checkout speed, and SEO have all skyrocketed. We are absolutely thrilled with this work!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't4',
    name: 'Amir Latif',
    role: 'CEO',
    company: 'Zetta Technologies',
    content: 'YDC custom AI Chatbots and voice agent software solved our biggest customer support bottleneck. Their engineering depth is remarkable, bringing complex machine learning APIs into fully functional CRM channels with ease.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is Your Digital Choices (YDC)?',
    answer: 'We are a premier AI-first digital agency focused on building high-conversion Shopify stores, custom web and mobile software platforms, state-of-the-art AI voice/chatbot systems, and end-to-end operational automations that fuel digital growth.',
    category: 'General'
  },
  {
    question: 'How do your AI Voice Agents and Chatbots work?',
    answer: 'We train advanced LLMs (such as Gemini Pro) on your specific business rules, product guidelines, and FAQs. We then deploy custom low-latency voice nodes (using Twilio/Vapi) or dynamic web chatbot interfaces connected directly to your existing CRM to fulfill live actions.',
    category: 'AI Solutions'
  },
  {
    question: 'Do you offer custom integrations with Shopify and ERPs?',
    answer: 'Yes! We specialized in custom API middlewares and serverless networks connecting Shopify, WooCommerce, or custom platforms directly with ERP channels, warehouses, and automated dropshipping suppliers.',
    category: 'Engineering'
  },
  {
    question: 'What geographic areas do you serve?',
    answer: 'While we operate central offices in Islamabad, Pakistan, and Sandton, South Africa, we build software and manage high-volume digital campaigns for clients globally, including the US, UK, EU, and Gulf regions.',
    category: 'General'
  },
  {
    question: 'How do you structure project timelines and costs?',
    answer: 'Our timelines range from 2 weeks for custom themes or automations to 8-12 weeks for complex custom ERP/software builds. We offer milestone-based pricing and monthly retaining choices to fit your growth plans.',
    category: 'Pricing'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog1',
    title: 'The Future of Headless Shopify: Maximizing Loading Times',
    excerpt: 'Explore why modern luxury brands are moving away from traditional templates in favor of React-based headless storefronts to drop loading speeds under 1.5 seconds.',
    category: 'Shopify',
    date: 'June 25, 2026',
    readTime: '5 min read',
    author: 'Sufyan Khan',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blog2',
    title: 'How to Implement Autonomous AI Voice Support in 2026',
    excerpt: 'A comprehensive engineering guide explaining how we construct voice nodes with Gemini Pro and Vapi to manage heavy outbound and inbound call grids.',
    category: 'AI & Automation',
    date: 'June 18, 2026',
    readTime: '8 min read',
    author: 'Zainab Shah',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blog3',
    title: 'Streamlining Dropshipping: Complete Hands-Off Warehouses',
    excerpt: 'Stop manually processing shipping CSV lines. Read our blueprint detailing automated CJ Dropshipping, DSers, and custom API tracking pipelines.',
    category: 'E-Commerce',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: 'Christian Labuschagne',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Muhammad Faizan Tariq',
    role: 'Founder & CEO (Since 2020)',
    bio: 'Muhammad Faizan Tariq founded YDC in 2020. He guides the global engineering division, specializing in deep enterprise systems, custom AI automations, and scalable Shopify Plus solutions.',
    skills: ['System Architecture', 'Shopify Plus', 'AI Workflows', 'Go / Node.js'],
    image: ceoImage,
    whatsapp: 'https://wa.me/923184249817',
    instagram: 'https://www.instagram.com/itx_faizi_2030',
    email: 'faizan@yourdigitalchoices.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    name: 'Mian Haris',
    role: 'Chief Operations Officer',
    bio: 'Mian Haris oversees global delivery pipelines, manufacturer negotiations in China, and e-commerce logistics automation solutions for our highest volume accounts.',
    skills: ['Sourcing Logistics', 'Walmart Partner Central', 'Dropshipping Automation', 'Team Scale'],
    image: harisImage,
    linkedIn: 'https://linkedin.com',
    email: 'haris@yourdigitalchoices.com'
  },
  {
    name: 'Sufyan Khan',
    role: 'Lead Shopify Theme Architect',
    bio: 'Sufyan is a performance specialist who constructs custom Liquid and Hydrogen setups designed to run under a 1.5s visual complete speed target.',
    skills: ['Shopify Liquid', 'React', 'Frontend Systems', 'Lighthouse Audits'],
    image: sufyanImage,
    linkedIn: 'https://linkedin.com',
    email: 'sufyan@yourdigitalchoices.com'
  },
  {
    name: 'Zainab Shah',
    role: 'AI Solution Engineer',
    bio: 'Zainab is a prompt tuning and voice systems engineer who integrates low-latency Twilio, Vapi, and vector embeddings indexes directly into custom CRMs.',
    skills: ['LLM Orchestration', 'Twilio Networks', 'Pinecone Indexing', 'Python Microservices'],
    image: zainabImage,
    linkedIn: 'https://linkedin.com',
    email: 'zainab@yourdigitalchoices.com'
  }
];

export const CAREERS: JobPosition[] = [
  {
    id: 'car1',
    title: 'Senior Shopify Theme Engineer',
    department: 'Engineering',
    location: 'Islamabad, Pakistan / Hybrid',
    type: 'Full-time',
    salary: 'Rs. 250K - 400K / Month',
    requirements: [
      '5+ Years of Shopify Liquid & JS Theme development',
      'Stellar understanding of SEO and Core Web Vitals optimization',
      'Experience with headless hydrogen storefront configurations',
      'Pristine Figma-to-code precision'
    ]
  },
  {
    id: 'car2',
    title: 'AI Conversational Architect',
    department: 'Artificial Intelligence',
    location: 'Remote (Global)',
    type: 'Full-time',
    salary: '$3,500 - $5,500 / Month',
    requirements: [
      'Deep background implementing Vapi, Retell, and Twilio voice pipelines',
      'Experience with Python, LangChain, and vector embeddings database indexes',
      'Solid handle on Gemini models prompt tuning & output structure forcing',
      'Proven portfolio of deployed production voice or chat nodes'
    ]
  },
  {
    id: 'car3',
    title: 'E-Commerce & Supply Logistics Manager',
    department: 'Operations',
    location: 'Remote / South Africa',
    type: 'Full-time',
    salary: 'R45,000 - R65,000 / Month',
    requirements: [
      'Excellent track record with Amazon Seller Central and Walmart Marketplace',
      'Strong capabilities negotiating with manufacturers on Alibaba',
      'Knowledge of multi-channel synchronization software structures',
      'Data-driven pricing and search rank optimization habits'
    ]
  }
];

export const INDUSTRIES = [
  { name: 'Luxury Apparel & Fashion', icon: 'Shirt' },
  { name: 'SaaS & Enterprise Systems', icon: 'Laptop' },
  { name: 'Consumer Packaged Goods', icon: 'ShoppingBag' },
  { name: 'Logistics & Global Supply Chains', icon: 'Truck' },
  { name: 'Automotive & Heavy Industry', icon: 'Settings' },
  { name: 'Healthcare & Specialized Intake', icon: 'Activity' }
];

export const STATS = [
  { value: '150+', label: 'Global Brands Accelerated' },
  { value: '92%', label: 'Reduction in Manual Workloads' },
  { value: '$45M+', label: 'Client E-Commerce Transactions Processed' },
  { value: '<1.8s', label: 'Average App Load Speeds' }
];

export const PRICING_TIERS = [
  {
    name: 'AI Startup Sync',
    price: '$1,850',
    frequency: 'One-time setup',
    description: 'Perfect for fast-growing companies seeking to automate basic service lines, optimize existing Shopify designs, or deploy custom AI Chatbots.',
    features: [
      'Custom Shopify Theme adjustment OR Basic custom web app',
      '1x Fine-tuned AI Knowledge-base Chatbot integration',
      'Complete CRM Lead routing automation setup',
      'Comprehensive Google Analytics & conversion funnels setup',
      '14 Days of post-launch technical assistance'
    ],
    cta: 'Acquire Setup Now',
    isPopular: false
  },
  {
    name: 'Growth Engine Pro',
    price: '$3,850',
    frequency: 'Full development sprint',
    description: 'Our most popular comprehensive setup, bringing full dropshipping pipelines, bespoke UI/UX layouts, and high-performance automated solutions.',
    features: [
      'Bespoke visual branding & detailed wireframes design',
      'Full Shopify Plus custom architecture development',
      'Complete dropshipping / supplier autonomous syncing',
      'Advanced AI Conversational Chatbots + 1x Voice Agent',
      'SEO audit report and keyword structural adjustments',
      '30 Days of dedicated SLA maintenance support'
    ],
    cta: 'Accelerate Growth Today',
    isPopular: true
  },
  {
    name: 'Enterprise Bespoke',
    price: 'Custom quote',
    frequency: 'Milestone-based project',
    description: 'Custom tailor-made ERPs, custom mobile software suites, military-grade cloud security migrations, and fully autonomous sourcing channels.',
    features: [
      'Dedicated Solutions Architect & Technical Lead allocation',
      'Tailor-made cloud architecture custom databases',
      'Proprietary ERP system, CRM automation, or custom API middlewares',
      'High-volume Alibaba sourcing coordination and logistics locks',
      'Full SLA 24/7 technical monitoring',
      'Unlimited user seat custom onboarding programs'
    ],
    cta: 'Consult Our Architect',
    isPopular: false
  }
];
