import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = [
    'Initializing AI Core...',
    'Connecting Global Servers...',
    'Loading System Intelligence...',
    'Launching YDC Interface...',
    'Welcome to the Future.'
  ];

  useEffect(() => {
    // Cycle through messages
    const msgInterval = setInterval(() => {
      setMsgIdx((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 700);

    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      id="ydc-preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020813]"
    >
      {/* Background cyber particles design */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[2px] h-[2px] bg-sky-400 rounded-full animate-ping [animation-duration:3s]" />
        <div className="absolute top-2/3 right-1/4 w-[3px] h-[3px] bg-blue-500 rounded-full animate-ping [animation-duration:4s]" />
        <div className="absolute top-1/3 right-1/3 w-[2px] h-[2px] bg-orange-400 rounded-full animate-ping [animation-duration:2.5s]" />
        <div className="absolute bottom-1/4 left-1/3 w-[3px] h-[3px] bg-cyan-400 rounded-full animate-ping [animation-duration:5s]" />
        
        {/* Futuristic glowing grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        {/* Glowing Logo */}
        <div className="relative mb-8">
          {/* Blue/Cyan Glow Ring around the logo */}
          <div className="absolute inset-[-15px] bg-gradient-to-r from-sky-500/20 via-cyan-500/10 to-orange-500/20 rounded-full blur-2xl animate-pulse" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <Logo size={120} showText={false} className="drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]" />
          </motion.div>
        </div>

        {/* Brand Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-display font-black text-white text-lg tracking-widest block">
            YOUR DIGITAL CHOICES
          </span>
          <span className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase block mt-1">
            Building the Future with AI
          </span>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden mb-4 relative border border-white/[0.02]">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-orange-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percent */}
        <div className="text-[10px] font-mono text-gray-500 mb-2">
          SYSTEM_BOOT_SEQUENCE: {progress}%
        </div>

        {/* Message Carousel with cross-fade */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIdx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="text-xs font-mono text-cyan-400 font-medium tracking-wide"
            >
              {messages[msgIdx]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
