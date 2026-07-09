import { useState } from 'react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import PricingView from './components/PricingView';
import BlogView from './components/BlogView';
import CareersView from './components/CareersView';
import TeamView from './components/TeamView';
import CEOView from './components/CEOView';
import TestimonialsView from './components/TestimonialsView';
import FAQView from './components/FAQView';
import ContactView from './components/ContactView';
import LegalViews from './components/LegalViews';
import NotFoundView from './components/NotFoundView';
import CustomCursor from './components/CustomCursor';
import AIPlannerModal from './components/AIPlannerModal';
import IndustriesView from './components/IndustriesView';
import ProductsView from './components/ProductsView';
import ServeOSView from './components/ServeOSView';
import SuccessStoriesView from './components/SuccessStoriesView';
import SolutionsView from './components/SolutionsView';
import Loader from './components/Loader';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState<PageType>('home');
  const [plannerOpen, setPlannerOpen] = useState(false);

  const openEstimator = () => setPlannerOpen(true);
  const closeEstimator = () => setPlannerOpen(false);

  const handleSubmitEstimate = () => {
    // Simulated modal actions can be linked to other triggers
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView setActivePage={setActivePage} openEstimator={openEstimator} />;
      case 'about':
        return <AboutView setActivePage={setActivePage} />;
      case 'services':
        return <ServicesView setActivePage={setActivePage} openEstimator={openEstimator} />;
      case 'solutions':
        return <SolutionsView setActivePage={setActivePage} />;
      case 'portfolio':
        return <PortfolioView setActivePage={setActivePage} />;
      case 'pricing':
        return <PricingView setActivePage={setActivePage} />;
      case 'blog':
        return <BlogView setActivePage={setActivePage} />;
      case 'careers':
        return <CareersView setActivePage={setActivePage} />;
      case 'team':
        return <TeamView setActivePage={setActivePage} />;
      case 'ceo':
        return <CEOView setActivePage={setActivePage} />;
      case 'testimonials':
        return <TestimonialsView setActivePage={setActivePage} />;
      case 'faq':
        return <FAQView setActivePage={setActivePage} />;
      case 'contact':
        return <ContactView setActivePage={setActivePage} />;
      case 'privacy':
      case 'terms':
      case 'cookies':
      case 'refund':
        return <LegalViews type={activePage} setActivePage={setActivePage} />;
      case 'industries':
        return <IndustriesView setActivePage={setActivePage} />;
      case 'products':
        return <ProductsView setActivePage={setActivePage} />;
      case 'serveos':
        return <ServeOSView setActivePage={setActivePage} />;
      case 'success-stories':
        return <SuccessStoriesView setActivePage={setActivePage} />;
      case '404':
      default:
        return <NotFoundView setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white flex flex-col justify-between relative overflow-hidden">
          
          {/* Dynamic Background Grid Pattern globally */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
          </div>

          {/* Premium Desktop tracking cursor */}
          <CustomCursor />

          {/* Persistent Navigation Header */}
          <Header
            activePage={activePage}
            setActivePage={setActivePage}
            openEstimator={openEstimator}
          />

          {/* Core Dynamic Content Stage */}
          <main className="flex-grow z-10 relative">
            {renderActiveView()}
          </main>

          {/* Dynamic Global AI Planner overlay popup */}
          <AIPlannerModal
            isOpen={plannerOpen}
            onClose={closeEstimator}
            onSubmitEstimate={handleSubmitEstimate}
          />

          {/* Persistent Footer with rich navigation options */}
          <Footer setActivePage={setActivePage} />

        </div>
      )}
    </>
  );
}
