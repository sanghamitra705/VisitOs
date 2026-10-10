import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Fingerprint, 
  UserCheck, 
  FileText, 
  ShieldCheck,
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import cardVerificationImg from '../../assets/card-verification-kiosk.jpg';
import cardApprovalImg from '../../assets/card-host-approval.jpg';
import cardRecordsImg from '../../assets/card-visit-records.jpg';
import heroLobbyKioskImg from '../../assets/hero-lobby-kiosk.jpg';

export const SecurityPillarsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselTrackRef = useRef(null);

  const cards = [
    {
      id: 'verification',
      badge: '01',
      category: 'IDENTITY CHECK',
      title: 'Visitor Verification',
      description: 'Verify guest identity, capture contact credentials, and issue standardized digital passes before premises entry.',
      icon: Fingerprint,
      image: cardVerificationImg,
      alt: 'Visitor presenting QR code to reception check-in kiosk terminal',
      link: '/features/qr-visitor-registration',
      tagColor: '#16A6A1'
    },
    {
      id: 'approval',
      badge: '02',
      category: 'HOST CLEARANCE',
      title: 'Structured Host Approval',
      description: 'Ensure zero unannounced arrivals by connecting visitors directly with their hosts for fast, one-click mobile authorization.',
      icon: UserCheck,
      image: cardApprovalImg,
      alt: 'Corporate employee approving visitor arrival via smartphone one-click clearance',
      link: '/features/employee-approval-workflows',
      tagColor: '#27B36A'
    },
    {
      id: 'records',
      badge: '03',
      category: 'AUDIT VISIBILITY',
      title: 'Complete Visit Records',
      description: 'Maintain organized, accessible visit histories with accurate arrival timestamps and live building evacuation tallies.',
      icon: FileText,
      image: cardRecordsImg,
      alt: 'Visit management dashboard showing searchable visit histories and evacuation tallies',
      link: '/features/visitor-history-reporting',
      tagColor: '#38BDF8'
    },
    {
      id: 'safety',
      badge: '04',
      category: 'SAFETY & COMPLIANCE',
      title: 'Facility Safety & Control',
      description: 'Enforce digital NDAs, manage emergency mustering tallies, and protect restricted corporate zones automatically.',
      icon: ShieldCheck,
      image: heroLobbyKioskImg,
      alt: 'Corporate lobby kiosk terminal ensuring perimeter compliance and evacuation readiness',
      link: '/features/secure-visitor-data-management',
      tagColor: '#10B981'
    }
  ];

  const totalCards = cards.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Autoplay with hover pause & reduced motion check
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 45; // min swipe distance in px

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section 
      aria-label="Security and Visibility Platform Pillars"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden select-none border-b border-[#05353B]"
      style={{
        background: 'linear-gradient(135deg, #063F46 0%, #075E66 52%, #087F83 100%)'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
    >
      {/* Background Decorative Ambient Radial Glows & Fine Grid */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#16A6A1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#27B36A]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Fine Geometric Dotted Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="teal-carousel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#FFFFFF" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#teal-carousel-grid)" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. SECTION HEADER (TWO-COLOR HEADING ON TEAL BACKGROUND)     */}
        {/* ============================================================ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight font-sans leading-[1.2] text-white">
              Know Who Is Arriving.{' '}
              <span className="bg-gradient-to-r from-[#16A6A1] via-[#38BDF8] to-[#4ADE80] bg-clip-text text-transparent">
                Know Where the Visit Stands.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D4F1F4]/80 leading-relaxed font-normal">
              Four connected pillars ensuring identity verification, host clearance, audit logs, and workplace safety across all facilities.
            </p>
          </div>

          {/* Carousel Previous / Next Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous security pillar card"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next security pillar card"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. TEAL IMAGE CAROUSEL CONTAINER                             */}
        {/* ============================================================ */}
        <div 
          ref={carouselTrackRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden w-full pb-4"
        >
          {/* Desktop & Tablet: Responsive Grid / Carousel Slider */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch transition-all duration-500 ease-out"
          >
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative rounded-[26px] overflow-hidden flex flex-col justify-end min-h-[440px] sm:min-h-[460px] lg:min-h-[480px] cursor-pointer transition-all duration-500 border ${
                    isActive 
                      ? 'ring-2 ring-[#38BDF8] border-white/40 shadow-2xl scale-[1.02] z-10' 
                      : 'border-white/15 hover:border-white/30 hover:scale-[1.01] opacity-90 hover:opacity-100'
                  }`}
                  style={{
                    boxShadow: isActive ? '0 20px 40px -10px rgba(6, 63, 70, 0.6)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Edge-to-Edge Image Layer */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay for Maximum Readability */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-[#06242B]/98 via-[#06242B]/75 via-40% to-transparent pointer-events-none" 
                  />

                  {/* Top Floating Badge with Category & Number */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-2 bg-[#06242B]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white shadow-md">
                      <IconComponent className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span className="text-[10.5px] font-mono font-bold tracking-wider text-slate-200 uppercase">
                        {card.category}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-white bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/25">
                      {card.badge}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-5 sm:p-6 text-left flex flex-col justify-end space-y-2.5">
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-[21px] font-bold text-white font-sans tracking-tight leading-snug group-hover:text-[#38BDF8] transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Supporting Description */}
                    <p className="text-xs sm:text-[13px] text-slate-200/90 leading-relaxed line-clamp-3">
                      {card.description}
                    </p>

                    {/* Interactive Action Link */}
                    <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#38BDF8] group-hover:text-white transition-colors duration-300">
                      <Link to={card.link} className="flex items-center gap-1.5">
                        <span>Explore workflow</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Progress / Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {cards.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-hidden ${
                dotIdx === activeIndex 
                  ? 'w-8 bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SecurityPillarsSection;
