import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SlideVisitorJourney } from './carousel/SlideVisitorJourney';
import { SlideWorkplaceSafety } from './carousel/SlideWorkplaceSafety';
import { SlideSecurityCompliance } from './carousel/SlideSecurityCompliance';

const SLIDES = [
  {
    id: 'slide-visitor-journey',
    name: 'From Arrival to Approval',
    component: SlideVisitorJourney
  },
  {
    id: 'slide-workplace-safety',
    name: 'A Smarter, Safer Workplace',
    component: SlideWorkplaceSafety
  },
  {
    id: 'slide-security-compliance',
    name: 'Built for Security, Speed & Compliance',
    component: SlideSecurityCompliance
  }
];

export const HomeIntroduction = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIdx((prev) => (prev + newDirection + SLIDES.length) % SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const prevSlide = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  // Autoplay progression: Exactly 5 seconds (5000ms) as requested
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  // Touch / Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: prefersReducedMotion ? 0 : 0.4
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: prefersReducedMotion ? 0 : 0.4,
      transition: {
        x: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.45 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const ActiveComponent = SLIDES[currentIdx].component;

  return (
    <section 
      aria-label="VisitOS Product Story Showcase"
      className="relative w-full overflow-hidden bg-[#F3F9FD] border-b border-[#DCE7F2] select-none py-5 sm:py-7 lg:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Strategic Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-br from-[#1769D2]/08 via-[#16A6A1]/08 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tl from-[#27B36A]/06 via-[#16A6A1]/06 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Slide Display Container */}
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative w-full min-h-[420px] sm:min-h-[450px] md:min-h-[470px] lg:min-h-[480px] overflow-hidden rounded-2xl sm:rounded-3xl flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={SLIDES[currentIdx].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>

          {/* Small, Elegant Right-Arrow Button for Manual Slide Advancement */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Advance to next slide"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/90 hover:bg-white border border-[#D9E7F1] shadow-md hover:shadow-lg flex items-center justify-center text-[#10243E] hover:text-[#1769D2] hover:scale-105 transition-all duration-200 z-30 cursor-pointer backdrop-blur-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1769D2]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default HomeIntroduction;
