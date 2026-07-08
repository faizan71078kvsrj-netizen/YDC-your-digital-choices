import { PageType } from '../types';
import { HelpCircle, Sparkles, MoveLeft } from 'lucide-react';

interface NotFoundViewProps {
  setActivePage: (page: PageType) => void;
}

export default function NotFoundView({ setActivePage }: NotFoundViewProps) {
  const handleNav = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-40 pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 text-center space-y-8 relative">
        
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-mono text-primary font-bold">
          <HelpCircle size={11} />
          <span>ROUTE RESOLUTION ERROR</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl sm:text-8xl font-display font-black text-white leading-none tracking-tighter">
            404
          </h1>
          <h2 className="text-base sm:text-lg font-bold text-gray-200 uppercase tracking-widest">
            Bespoke Elements Drifted
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            The target digital choice does not exist or has been compiled elsewhere. Retrace your steps back to home base.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => handleNav('home')}
            className="w-full py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
          >
            <MoveLeft size={13} />
            <span>Retrace Back Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}
