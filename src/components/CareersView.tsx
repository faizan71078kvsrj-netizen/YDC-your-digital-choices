import React, { useState, useRef } from 'react';
import { PageType, JobPosition } from '../types';
import { CAREERS } from '../data';
import { X, Briefcase, MapPin, DollarSign, Check, FileText, Upload, CheckCircle, ShieldAlert } from 'lucide-react';

interface CareersViewProps {
  setActivePage: (page: PageType) => void;
}

export default function CareersView({ setActivePage }: CareersViewProps) {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  // Application modal & states
  const [isApplying, setIsApplying] = useState(false);
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', note: '' });
  const [appSuccess, setAppSuccess] = useState(false);

  // Drag and drop states
  const [dragActive, setDragActive] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Lock body scrolling when modal is open
  React.useEffect(() => {
    if (isApplying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isApplying]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleTriggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate pristine server reception
    setAppSuccess(true);
    setTimeout(() => {
      setIsApplying(false);
      setAppSuccess(false);
      setSelectedJob(null);
      setAttachedFile(null);
      setAppForm({ name: '', email: '', phone: '', note: '' });
    }, 3000);
  };

  return (
    <div className="space-y-28 pt-28 pb-20">
      
      {/* Intro Header */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block font-bold">
            JOIN THE DIVISION OF EXCELLENCE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white leading-none">
            Careers at YDC
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We are continuously seeking elite solutions architects, Shopify theme masterminds, and AI conversational developers.
          </p>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {CAREERS.map((job) => (
            <div
              key={job.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              
              <div className="lg:col-span-8 space-y-4">
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded uppercase tracking-wider font-bold">
                    {job.department}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {job.title}
                </h3>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <MapPin size={13} className="text-primary" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1 font-semibold text-accent-green">
                    <DollarSign size={13} className="text-accent-green" />
                    <span>{job.salary}</span>
                  </span>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">
                    ROLE REQUIREMENTS
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-400">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check size={11} className="text-primary mt-1 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="lg:col-span-4 lg:text-right">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsApplying(true);
                  }}
                  className="w-full lg:w-auto px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-all duration-200 cursor-pointer block text-center"
                >
                  Apply For This Role
                </button>
              </div>

            </div>
          ))}

          {/* Open Applications Card */}
          <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden text-center max-w-2xl mx-auto space-y-4">
            <h4 className="text-lg font-bold text-white">Can't Find Your Perfect Fit?</h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We are constantly scouting for stellar engineers, Shopify designers, and AI automation experts. Send your resume and portfolio directly to our Careers Department:
            </p>
            <div className="pt-2">
              <a
                href="mailto:careers@yourdigitalchoices.com"
                className="inline-block px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 text-primary hover:text-white transition-all duration-200"
              >
                careers@yourdigitalchoices.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Application Form Modal with Drag and Drop CV Upload */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="glass-panel w-full max-w-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-scale-up relative my-8">
            
            <button
              onClick={() => {
                setIsApplying(false);
                setAttachedFile(null);
                setAppSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-white/5 pb-4">
                <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">
                  SUBMIT APPLICATION BLUEPRINT
                </span>
                <h3 className="text-lg font-bold text-white">
                  Apply for {selectedJob.title}
                </h3>
                <span className="text-xs text-primary font-medium mt-1 block">
                  {selectedJob.department} • {selectedJob.location}
                </span>
              </div>

              {appSuccess ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle size={28} />
                  </div>
                  <h4 className="text-md font-bold text-white">Application Received Pristine</h4>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                    Muhammad Faizan Tariq and our Solution Architect Division will audit your CV parameters and correspond with you within 48 Hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">FULL NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={appForm.name}
                        onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-gray-400 uppercase text-[10px]">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="applicant@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-gray-400 uppercase text-[10px]">PHONE / WHATSAPP</label>
                    <input
                      type="text"
                      required
                      placeholder="+1 555 123 4567"
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary"
                    />
                  </div>

                  {/* DRAG AND DROP FILE UPLOAD CONTAINER */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-gray-400 uppercase text-[10px] block">ATTACH CV / PORTFOLIO LINK</label>
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={handleTriggerFileSelect}
                      className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors relative flex flex-col items-center justify-center space-y-2 ${
                        dragActive
                          ? 'border-primary bg-primary/5'
                          : attachedFile
                          ? 'border-accent-green bg-accent-green/5'
                          : 'border-white/10 bg-white/[0.01] hover:bg-white/5'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      {attachedFile ? (
                        <>
                          <FileText size={20} className="text-accent-green" />
                          <span className="text-xs font-semibold text-white truncate max-w-[200px]">
                            {attachedFile.name}
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono">
                            {(attachedFile.size / 1024 / 1024).toFixed(2)} MB • PDF/Doc Received
                          </span>
                        </>
                      ) : (
                        <>
                          <Upload size={20} className="text-primary" />
                          <span className="text-xs font-semibold text-gray-300 block">
                            Drag & drop your PDF CV here
                          </span>
                          <span className="text-[10px] text-gray-500 font-mono block">
                            Or click to navigate system directory files
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-gray-400 uppercase text-[10px]">ADDITIONAL NOTES</label>
                    <textarea
                      rows={2}
                      placeholder="Highlight your experience with Shopify Liquid or Vapi/Twilio pipelines..."
                      value={appForm.note}
                      onChange={(e) => setAppForm({ ...appForm, note: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
                    >
                      Transmit CV Parameters
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
