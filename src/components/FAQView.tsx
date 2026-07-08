import { useState } from 'react';
import { PageType } from '../types';
import { FAQS } from '../data';
import { Search, ChevronDown, MessageSquareCode, Sparkles, HelpCircle } from 'lucide-react';

interface FAQViewProps {
  setActivePage: (page: PageType) => void;
}

export default function FAQView({ setActivePage }: FAQViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'AI Solutions', 'Engineering', 'Pricing'];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
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
            ANSWERS FROM OUR TECHNICAL SOLUTIONS TEAM
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Got questions about our Shopify setups, custom voice integrations or sourcing logistics? Read our verified details below.
          </p>
        </div>
      </section>

      {/* Dynamic Search & Accordion Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Search box & Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/5 pb-6">
            
            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-1.5 order-last md:order-first">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Input query field */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-primary"
              />
            </div>

          </div>

          {/* FAQ Accordions list */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div
                    key={idx}
                    className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => handleToggle(idx)}
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
              })
            ) : (
              <div className="text-center py-10 space-y-2 text-gray-500 font-mono text-xs">
                <HelpCircle size={24} className="mx-auto text-primary" />
                <span>No results matched your search query. Try another term.</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Direct Contact triggers */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto glass-panel p-8 rounded-2xl border border-white/5 text-center space-y-4">
          <h4 className="text-sm font-bold text-white">Still have questions?</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Contact our Pakistan or South Africa solution offices directly via WhatsApp or email, and let's structure your engineering goals.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
            >
              Contact Solution Group
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
