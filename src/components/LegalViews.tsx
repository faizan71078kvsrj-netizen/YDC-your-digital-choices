import { PageType } from '../types';

interface LegalViewsProps {
  type: 'privacy' | 'terms' | 'cookies' | 'refund';
  setActivePage: (page: PageType) => void;
}

export default function LegalViews({ type, setActivePage }: LegalViewsProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white">Privacy Policy</h1>
            <p className="text-xs font-mono text-gray-500 uppercase">LAST MODIFIED: JUNE 29, 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                At Your Digital Choices (YDC), available at www.yourdigitalchoices.com, protecting the privacy of our visitor profiles is one of our primary objectives. This Privacy Policy documents the type of details we collect and log, and how we apply them.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">1. Log File Registries</h3>
              <p>
                YDC follows standard operating protocols regarding log file registries. These files record visitors when they navigate our servers or web nodes. These parameters include IP addresses, browser variants, Internet Service Providers (ISP), date stamps, entry/exit points, and clicks. These details are utilized strictly to diagnose server load patterns, administer pages, track user sessions, and accumulate broad demographic insights.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">2. Cookies and Web Beacons</h3>
              <p>
                Like any other premium agency website, YDC incorporates cookies to store user preferences and record specific visitor navigation paths. This optimization matches user browser configurations to provide customized layouts.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">3. Information Security Mandates</h3>
              <p>
                We enforce high-contrast standard SSL data encryptions and restrict database client credential keys rotation to senior solution architects only, guaranteeing that your Shopify Plus or ERP system data is never leaked.
              </p>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white">Terms of Service</h1>
            <p className="text-xs font-mono text-gray-500 uppercase">LAST MODIFIED: JUNE 29, 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                Welcome to Your Digital Choices (YDC). By contracting our senior architects or visiting our web nodes, you confirm your absolute alignment with these terms.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">1. Bespoke Code Intellectual Property</h3>
              <p>
                Upon completion of all agreed financial sprint milestones, YDC transfers full, unencumbered repository ownership and intellectual copyrights of the custom Shopify code, ERP modules, or static elements directly to the client organization. YDC retains the rights to include public case studies of the projects within our agency portfolio.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">2. Support SLAs and Liability Limits</h3>
              <p>
                While YDC guarantees 100% stable performance on AWS/GCP nodes, we restrict our direct operational liability to the financial cost of the respective milestone sprint. Post-launch maintenance is administered according to agreed-upon monthly retaining SLA terms.
              </p>
            </div>
          </div>
        );
      case 'cookies':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white">Cookie Policy</h1>
            <p className="text-xs font-mono text-gray-500 uppercase">LAST MODIFIED: JUNE 29, 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                This Cookie Policy documents how Your Digital Choices (YDC) utilizes tracking cookies to streamline your browser navigation.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">1. Necessary Operational Cookies</h3>
              <p>
                These are mandatory cookies required to authenticate interactive planner selectors, record form session states, and load page visual assets. Disabling these cookies will disrupt specific interactive dashboard estimators.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">2. Analytics Tracking</h3>
              <p>
                We apply anonymous cookies to track client conversions, performance regressions, and bounce rates, allowing us to continuously optimize Core Web Vitals performance.
              </p>
            </div>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white">Refund Policy</h1>
            <p className="text-xs font-mono text-gray-500 uppercase">LAST MODIFIED: JUNE 29, 2026</p>
            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              <p>
                At Your Digital Choices (YDC), we maintain a rigid commitment to transparency, professional software craftsmanship, and client satisfaction. Our refund policies are structured clearly based on milestone sprints.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">1. Milestone Sprint Protection</h3>
              <p>
                All bespoke software solutions, customized ERP/CRM layouts, and headless Shopify themes developed by YDC are delivered in chronological milestone sprints. If you are unsatisfied with the deliverables of a specific active sprint, you can request a milestone refund prior to authorizing sign-off or progressing to subsequent phases.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">2. Finalized Work Exclusions</h3>
              <p>
                Once a client signs off on a milestone, or authorizes deploy-to-cloud actions of code, that sprint is considered accepted and final. Refund requests cannot be authorized for completed historical milestones.
              </p>
              <h3 className="text-md font-bold text-white pt-2 uppercase tracking-wide">3. Licensing and Onboarding</h3>
              <p>
                Standard software product subscription or installation licenses (such as ServeOS setups) are non-refundable once the target instance is provisioned and deployed.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 space-y-8">
        
        {renderContent()}

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </button>
          <span className="text-[10px] font-mono text-gray-500">
            © {currentYear} Your Digital Choices (YDC)
          </span>
        </div>

      </div>
    </div>
  );
}
