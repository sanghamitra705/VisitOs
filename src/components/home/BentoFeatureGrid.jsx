import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  QrCode, 
  Smartphone, 
  UserCheck, 
  BellRing, 
  History, 
  Lock, 
  BarChart3, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

import page1Img from '../../assets/page1.png';
import page2Img from '../../assets/page2.png';
import page3Img from '../../assets/page3.png';
import page4Img from '../../assets/page4.png';
import page5Img from '../../assets/page5.png';
import page6Img from '../../assets/page6.png';
import page7Img from '../../assets/page7.png';
import page8Img from '../../assets/page8.png';

const CAPABILITIES = [
  {
    id: 'qr-visitor-registration',
    num: '01',
    title: 'QR-Based Visitor Registration',
    shortDesc: 'Visitors scan a lobby QR code with their smartphone camera for instant, touchless registration.',
    image: page1Img,
    route: '/features/qr-visitor-registration',
    icon: QrCode,
    badge: 'Touchless & Fast'
  },
  {
    id: 'digital-visitor-passes',
    num: '02',
    title: 'Digital Visitor Passes',
    shortDesc: 'Provide a verified digital identity on mobile with visitor photo, host name, and active validity timers.',
    image: page2Img,
    route: '/features/digital-visitor-passes',
    icon: Smartphone,
    badge: 'Digital Identity'
  },
  {
    id: 'employee-approval-workflows',
    num: '03',
    title: 'Employee Approval Workflows',
    shortDesc: 'Connect visitors with their hosts through structured 1-click approvals across mobile and email.',
    image: page3Img,
    route: '/features/employee-approval-workflows',
    icon: UserCheck,
    badge: 'Host Authorization'
  },
  {
    id: 'real-time-notifications',
    num: '04',
    title: 'Real-Time Notifications',
    shortDesc: 'Keep employees and front-desk teams informed the moment a visitor completes registration.',
    image: page4Img,
    route: '/features/real-time-notifications',
    icon: BellRing,
    badge: 'Instant Sync'
  },
  {
    id: 'visitor-history-reporting',
    num: '05',
    title: 'Visitor History & Reporting',
    shortDesc: 'Maintain organized, searchable visitor records and export clean logs for operational reviews.',
    image: page5Img,
    route: '/features/visitor-history-reporting',
    icon: History,
    badge: 'Audit Trail'
  },
  {
    id: 'secure-visitor-data-management',
    num: '06',
    title: 'Secure Visitor Data Management',
    shortDesc: 'Protect visitor records with TLS encryption in transit, encrypted storage, and role-based permissions.',
    image: page6Img,
    route: '/features/secure-visitor-data-management',
    icon: Lock,
    badge: 'Data Protection'
  },
  {
    id: 'analytics-dashboard',
    num: '07',
    title: 'Analytics Dashboard',
    shortDesc: 'Transform daily visitor activity into an accessible, real-time operational overview for administrators.',
    image: page7Img,
    route: '/features/analytics-dashboard',
    icon: BarChart3,
    badge: 'Workplace Metrics'
  },
  {
    id: 'geo-fencing-verification',
    num: '08',
    title: 'Geo-Fencing Perimeter Verification',
    shortDesc: 'Optionally verify visitor GPS coordinates within your facility boundary before check-in proceeds.',
    image: page8Img,
    route: '/features/geo-fencing-verification',
    icon: MapPin,
    badge: 'Perimeter Check'
  }
];

const DISPLAY_DURATION_MS = 2200; // ~2 seconds active display period

export const BentoFeatureGrid = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Preload all 8 high-resolution capability visual assets
  useEffect(() => {
    CAPABILITIES.forEach((cap) => {
      const img = new Image();
      img.src = cap.image;
    });
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const nextStep = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % CAPABILITIES.length);
  }, []);

  // Automatic synchronized sequential progression (01 -> 08 -> 01)
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      nextStep();
    }, DISPLAY_DURATION_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, prefersReducedMotion, nextStep, activeIdx]);

  // Handle manual capability selection
  const handleSelect = (idx) => {
    setActiveIdx(idx);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Temporary interaction pause & automatic resume
  const handleInteractionStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1000); // Resume automatically after ~1 second delay
  };

  const activeCapability = CAPABILITIES[activeIdx];

  return (
    <section 
      aria-label="VisitOS Powerful Capabilities"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#DCE7F2] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#09213F] font-sans leading-[1.12] mb-4">
            Built Around the Way{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]">
              Your Workplace Operates
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#52667D] leading-relaxed max-w-2xl mx-auto font-normal">
            VisitOS connects the essential steps of visitor management into one synchronized platform.
          </p>
        </div>

        {/* ========================================================
            DESKTOP LAYOUT: Synchronized Interactive Storytelling
            Left: 8 Numbered Capabilities List | Right: Single Feature Stage
            (Zero nested white boxes / No outer white rectangular frame)
            ======================================================== */}
        <div 
          className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
        >
          
          {/* LEFT SIDE: 8 Capability Items List (5 cols) */}
          <div 
            className="lg:col-span-5 space-y-2 text-left"
            role="tablist"
            aria-label="VisitOS Capabilities Navigation"
          >
            {CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={cap.id}
                  role="tab"
                  id={`capability-tab-${cap.num}`}
                  aria-selected={isActive}
                  aria-controls={`capability-panel-${cap.num}`}
                  tabIndex={0}
                  onClick={() => handleSelect(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(idx);
                    }
                  }}
                  onFocus={handleInteractionStart}
                  onBlur={handleInteractionEnd}
                  className={`relative px-4 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2] ${
                    isActive 
                      ? 'bg-[#F4F9FD] border border-[#1769D2]/30 shadow-sm translate-x-1.5' 
                      : 'hover:bg-[#F8FAFC] border border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  {/* Active 2-Second Progress Line */}
                  {isActive && !prefersReducedMotion && (
                    <motion.div
                      key={`progress-${activeIdx}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: DISPLAY_DURATION_MS / 1000, ease: 'linear' }}
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] rounded-full"
                    />
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5 min-w-0">
                      
                      {/* Step Number Badge */}
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-[#1769D2] text-white shadow-xs' 
                          : 'bg-[#EDF5FC] text-[#52667D]'
                      }`}>
                        {cap.num}
                      </span>

                      <div className="min-w-0">
                        <h3 className={`text-[15.5px] font-bold font-sans transition-colors leading-tight ${
                          isActive ? 'text-[#1769D2]' : 'text-[#09213F]'
                        }`}>
                          {cap.title}
                        </h3>

                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xs text-[#52667D] leading-relaxed mt-1 font-normal line-clamp-2"
                          >
                            {cap.shortDesc}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Active Arrow Indicator */}
                    <div className="shrink-0">
                      <ChevronRight className={`w-4 h-4 transition-all duration-200 ${
                        isActive ? 'text-[#1769D2] translate-x-1 opacity-100' : 'text-[#A0B0C0] opacity-0'
                      }`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: ONE SINGLE Direct Visual Stage (7 cols) 
              NO nested white boxes, NO extra white frames */}
          <div 
            className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] lg:min-h-[520px]"
            id={`capability-panel-${activeCapability.num}`}
            role="tabpanel"
            aria-labelledby={`capability-tab-${activeCapability.num}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col items-center justify-center relative"
              >
                {/* Feature Artwork - directly integrated without extra nested white containers */}
                <div className="w-full flex items-center justify-center">
                  <img
                    src={activeCapability.image}
                    alt={activeCapability.title}
                    className="w-full h-auto max-h-[460px] lg:max-h-[500px] object-contain rounded-2xl drop-shadow-md"
                    loading="eager"
                  />
                </div>

                {/* Subtitle / Direct Explore Link Bar */}
                <div className="w-full max-w-xl mt-3 flex items-center justify-between px-2 text-xs text-[#52667D]">
                  <span className="font-medium text-[11.5px] font-sans">
                    Step {activeCapability.num} of 08 • Synchronized Demonstration
                  </span>
                  <Link
                    to={activeCapability.route}
                    className="inline-flex items-center gap-1.5 font-bold text-[#1769D2] hover:text-[#16A6A1] transition-colors group/link"
                  >
                    <span>Explore feature details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ========================================================
            MOBILE & TABLET: Vertical Interactive Synchronized Experience
            Only active item reveals its visual directly underneath
            ======================================================== */}
        <div className="lg:hidden space-y-3 text-left">
          {CAPABILITIES.map((cap, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={cap.id}
                onClick={() => handleSelect(idx)}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isActive 
                    ? 'bg-[#F4F9FD] border-[#1769D2] shadow-sm p-4' 
                    : 'bg-white border-[#DCE7F2] p-3.5 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#1769D2] text-white' : 'bg-[#EDF5FC] text-[#52667D]'
                    }`}>
                      {cap.num}
                    </span>
                    <h3 className={`text-sm font-bold font-sans ${
                      isActive ? 'text-[#1769D2]' : 'text-[#09213F]'
                    }`}>
                      {cap.title}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#16A6A1]">
                    {isActive ? 'Active' : ''}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 space-y-3 pt-3 border-t border-[#DCE7F2]/60"
                  >
                    <p className="text-xs text-[#52667D] leading-relaxed">
                      {cap.shortDesc}
                    </p>

                    {/* Direct artwork without nested white frames */}
                    <div className="w-full flex items-center justify-center">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-auto max-h-[280px] object-contain rounded-xl drop-shadow-sm"
                        loading="lazy"
                      />
                    </div>

                    <div className="pt-1 flex justify-end">
                      <Link
                        to={cap.route}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2]"
                      >
                        <span>Explore details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BentoFeatureGrid;
