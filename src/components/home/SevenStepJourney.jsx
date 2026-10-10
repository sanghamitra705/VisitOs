import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import card1Img from '../../assets/workflow-card-1.png';
import card2Img from '../../assets/workflow-card-2.png';
import card3Img from '../../assets/workflow-card-3.png';
import card4Img from '../../assets/workflow-card-4.png';
import card5Img from '../../assets/workflow-card-5.png';
import card6Img from '../../assets/workflow-card-6.png';
import card7Img from '../../assets/workflow-card-7.png';

const WORKFLOW_STEPS = [
  {
    id: '01',
    step: '01',
    title: 'Organization Registration',
    route: '/workflow/organization-registration',
    image: card1Img
  },
  {
    id: '02',
    step: '02',
    title: 'Admin Configuration',
    route: '/workflow/admin-configuration',
    image: card2Img
  },
  {
    id: '03',
    step: '03',
    title: 'Employee Sync & Alerts',
    route: '/workflow/employee-sync-alerts',
    image: card3Img
  },
  {
    id: '04',
    step: '04',
    title: 'Visitor QR Registration',
    route: '/workflow/visitor-qr-registration',
    image: card4Img
  },
  {
    id: '05',
    step: '05',
    title: 'Visitor Check-In',
    route: '/workflow/visitor-check-in',
    image: card5Img
  },
  {
    id: '06',
    step: '06',
    title: 'Host Approval',
    route: '/workflow/host-approval',
    image: card6Img
  },
  {
    id: '07',
    step: '07',
    title: 'Visitor Check-Out',
    route: '/workflow/visitor-check-out',
    image: card7Img
  }
];

export const SevenStepJourney = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollContainerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // 3 duplicate cycles of the 7 cards to ensure continuous, seamless marquee looping
  const repeatedCards = [
    ...WORKFLOW_STEPS.map((card, i) => ({ ...card, instanceKey: `cycle-1-${card.id}-${i}` })),
    ...WORKFLOW_STEPS.map((card, i) => ({ ...card, instanceKey: `cycle-2-${card.id}-${i}` })),
    ...WORKFLOW_STEPS.map((card, i) => ({ ...card, instanceKey: `cycle-3-${card.id}-${i}` }))
  ];

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragDistanceRef.current = 0;
    startXRef.current = e.pageX || (e.touches && e.touches[0].pageX);
    if (scrollContainerRef.current) {
      scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.pageX || (e.touches && e.touches[0].pageX);
    const walk = (currentX - startXRef.current) * 1.5;
    dragDistanceRef.current = Math.abs(currentX - startXRef.current);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleCardClick = (route) => {
    if (dragDistanceRef.current < 6) {
      navigate(route);
    }
  };

  return (
    <section 
      aria-label="Workflow Journey"
      className="w-full relative select-none bg-[#102B46] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Dynamic Keyframes for the Infinite Smooth Marquee */}
      <style>{`
        @keyframes workflowContinuousTrack {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .workflow-marquee-rail {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: workflowContinuousTrack 38s linear infinite;
        }
      `}</style>

      {/* Subtle Ambient Radial Lighting across the Full-Width Navy Section */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1769D2]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[260px] bg-[#16A6A1]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. SECTION HEADING (CLEAN & BALANCED TYPOGRAPHY)
            ======================================================== */}
        <div className="text-center max-w-[840px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          {/* Main 2-Line Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-white font-sans leading-[1.22] mb-3">
            From Registration to Check-Out,<br className="hidden sm:inline" />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#2DD4BF] to-[#4ADE80]">
              Everything Stays Connected
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-white/80 leading-relaxed max-w-[680px] mx-auto font-normal">
            VisitOS connects every stage of the visitor lifecycle into a clear, structured workflow — secure, efficient, and effortless.
          </p>
        </div>

        {/* ========================================================
            2. CONTINUOUS HORIZONTAL CAROUSEL (5:8 PORTRAIT CARDS)
            ======================================================== */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-hidden py-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Horizontal Continuous Marquee Rail */}
          <div 
            className="workflow-marquee-rail items-center gap-3.5 sm:gap-4 relative z-10"
            style={{
              animationPlayState: isHovered || prefersReducedMotion ? 'paused' : 'running'
            }}
          >
            {repeatedCards.map((card) => {
              const isEndOfCycle = card.step === '07';

              return (
                /* ========================================================
                   INDIVIDUAL COMPACT PORTRAIT CARD (160px × 256px @ 5:8)
                   ======================================================== */
                <div
                  key={card.instanceKey}
                  role="link"
                  tabIndex={0}
                  onClick={() => handleCardClick(card.route)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(card.route);
                    }
                  }}
                  aria-label={`Workflow stage ${card.step}: ${card.title}`}
                  className={`w-[138px] sm:w-[150px] lg:w-[160px] h-[220px] sm:h-[240px] lg:h-[256px] rounded-[14px] sm:rounded-[16px] overflow-hidden relative group cursor-pointer shrink-0 select-none shadow-[0_10px_25px_rgba(0,0,0,0.35)] border border-white/12 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)] hover:border-white/35 bg-[#08172B] ${
                    isEndOfCycle ? 'mr-[64px] sm:mr-[80px]' : ''
                  }`}
                >
                  {/* FULL-BLEED WORKFLOW IMAGE */}
                  <img
                    src={card.image}
                    alt={`${card.step} ${card.title}`}
                    className="absolute inset-0 w-full h-full object-cover block select-none pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle Focus Ring Indicator for Keyboard Access */}
                  <div className="absolute inset-0 rounded-[14px] sm:rounded-[16px] ring-2 ring-transparent group-focus-visible:ring-[#38BDF8] pointer-events-none transition-all" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SevenStepJourney;
