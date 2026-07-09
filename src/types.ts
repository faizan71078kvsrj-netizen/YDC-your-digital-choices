export type PageType =
  | 'home'
  | 'about'
  | 'services'
  | 'solutions'
  | 'portfolio'
  | 'pricing'
  | 'blog'
  | 'careers'
  | 'team'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'refund'
  | 'serveos'
  | 'products'
  | 'industries'
  | 'success-stories'
  | 'ceo'
  | '404';

export interface Service {
  id: string;
  title: string;
  category: 'Shopify' | 'AI & Automation' | 'Web & Mobile' | 'Design & Branding' | 'Marketing' | 'Enterprise & Custom';
  description: string;
  details: string[];
  features: string[];
  iconName: string; // Used to select Lucide icons
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: string;
  image: string; // Generative image URL or placeholder representation
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  linkedIn?: string;
  github?: string;
  instagram?: string;
  email?: string;
  whatsapp?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  requirements: string[];
}
