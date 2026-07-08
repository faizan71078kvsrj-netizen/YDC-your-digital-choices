import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Check, ArrowRight, Sparkles, Settings, Zap, DollarSign, Calculator, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface AIPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitEstimate: () => void;
}

export default function AIPlannerModal({ isOpen, onClose, onSubmitEstimate }: AIPlannerModalProps) {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState('Shopify Plus');
  const [modules, setModules] = useState<string[]>(['AI Chatbot']);
  const [budgetRange, setBudgetRange] = useState('$2,000 - $5,000');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);


  const handleToggleModule = (mod: string) => {
    if (modules.includes(mod)) {
      setModules(modules.filter(item => item !== mod));
    } else {
      setModules([...modules, mod]);
    }
  };

  const calculateEstimate = () => {
    let price = 1200; // base price
    let duration = 8;  // base days

    if (platform === 'Shopify Plus') { price += 600; duration += 4; }
    if (platform === 'Custom React/Web') { price += 900; duration += 6; }
    if (platform === 'WooCommerce') { price += 400; duration += 3; }

    modules.forEach(mod => {
      if (mod === 'AI Voice Agent') { price += 1800; duration += 10; }
      if (mod === 'AI Chatbot') { price += 800; duration += 5; }
      if (mod === 'Workflow Automation') { price += 700; duration += 4; }
      if (mod === 'Alibaba Sourcing') { price += 900; duration += 5; }
    });

    return { price, duration, roi: Math.round(price * 3.8) };
  };

  const results = calculateEstimate();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSubmitEstimate();
      setSubmitted(false);
      setStep(1);
      setModules(['AI Chatbot']);
      setForm({ name: '', email: '', phone: '' });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.div
            className="glass-panel w-full max-w-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Progress */}
          <div className="border-b border-white/5 pb-4 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-primary uppercase tracking-wider font-extrabold">
                INTERACTIVE SOLUTIONS BLUEPRINT
              </span>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Sparkles size={16} className="text-accent-green animate-pulse" />
                <span>AI Core Configurator</span>
              </h3>
            </div>
            <div className="text-xs font-mono text-gray-500">
              STEP {step} OF 4
            </div>
          </div>

          {/* STEP 1: Core Platform */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                1. Select Core Platform Frame
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['Shopify Plus', 'Custom React/Web', 'WooCommerce', 'WordPress', 'Enterprise ERP'].map((p) => {
                  const isSelected = platform === p;
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlatform(p)}
                      className={`p-4 rounded-xl border text-xs font-semibold text-center transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-primary/10 border-primary text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Custom AI Modules */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                2. Inject Intelligent AI Modules
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['AI Voice Agent', 'AI Chatbot', 'Workflow Automation', 'Alibaba Sourcing', 'Custom API Core'].map((mod) => {
                  const isChecked = modules.includes(mod);
                  return (
                    <button
                      key={mod}
                      type="button"
                      onClick={() => handleToggleModule(mod)}
                      className={`p-4 rounded-xl border text-xs font-semibold text-left transition-colors cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-accent-blue/10 border-accent-blue text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{mod}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-accent-blue border-accent-blue text-white' : 'border-white/20'
                      }`}>
                        {isChecked && <Check size={10} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Budget Range */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                3. Designate Budget Target Range
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['$1,000 - $2,000', '$2,000 - $5,000', '$5,000 - $15,000', '$15,000+'].map((range) => {
                  const isSelected = budgetRange === range;
                  return (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setBudgetRange(range)}
                      className={`p-4 rounded-xl border text-xs font-semibold text-center transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-accent-green/10 border-accent-green text-white'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {range}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Review Metrics & Transmit Form */}
          {step === 4 && (
            <div className="space-y-5 animate-fade-in text-xs sm:text-sm">
              
              {/* Review metrics */}
              <div className="bg-black/45 p-5 rounded-xl border border-white/5 space-y-4">
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
                  ESTIMATED WORKFLOW BLUEPRINT
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 block">PLATFORM</span>
                    <span className="font-semibold text-white">{platform}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[9px] font-mono text-gray-500 block">AI MODULES INJECTED</span>
                    <span className="font-semibold text-white truncate block">{modules.join(', ')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 block">ESTIMATED RATE</span>
                    <span className="font-black text-accent-green text-sm sm:text-base">${results.price.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 block">CYCLE TARGET</span>
                    <span className="font-semibold text-gray-300">{results.duration} - {results.duration + 4} Days</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 block">ANNUAL ROI TARGET</span>
                    <span className="font-semibold text-white">+${results.roi.toLocaleString()} Impact</span>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-6 space-y-3 animate-fade-in">
                  <div className="w-11 h-11 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">Blueprint Transmitted</h4>
                  <p className="text-[11px] text-gray-400 max-w-xs mx-auto">
                    Muhammad Faizan Tariq and the technical group have received your estimate parameters.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Phone/WhatsApp (e.g., +92 307 9651033)"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>Authorize Solution & Submit Estimate</span>
                    <Send size={11} />
                  </button>
                </form>
              )}

            </div>
          )}

          {/* Stepper Buttons footer */}
          {!submitted && (
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                type="button"
                disabled={step === 1}
                onClick={handlePrev}
                className="px-4 py-2 text-xs font-semibold rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                Back
              </button>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary/95 transition-colors flex items-center space-x-1 cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight size={11} />
                </button>
              ) : null}
            </div>
          )}

        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
