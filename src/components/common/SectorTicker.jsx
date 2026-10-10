import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2 } from 'lucide-react';

export const SECTOR_NAMES = [
  'CORPORATE OFFICES',
  'IT COMPANIES',
  'BUSINESS PARKS & MULTI-TENANT',
  'HOSPITALS & HEALTHCARE FACILITIES',
  'MANUFACTURING & INDUSTRIAL FACILITIES',
  'EDUCATIONAL INSTITUTIONS & CAMPUSES'
];

export const SectorTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(520);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update width dynamically on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // For reduced motion users: rotate text statically every 3.5 seconds
  useEffect(() => {
    if (!isReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SECTOR_NAMES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isReducedMotion]);

  const currentSector = SECTOR_NAMES[currentIndex];

  // Dynamic travel offsets ensuring seamless left-to-right news-ticker animation
  const startX = -(containerWidth / 2 + 350);
  const endX = containerWidth / 2 + 350;

  return (
    <div className="w-full flex justify-center lg:justify-start my-2">
      {/* Green Industry Ticker Box with Left Icon & Breaking-News Ticker */}
      <div
        ref={containerRef}
        className="w-full max-w-[540px] h-[46px] sm:h-[48px] rounded-full bg-gradient-to-r from-[#0B7A4B] via-[#0E8A54] to-[#129A5E] border border-[#27B36A]/40 shadow-sm flex items-center overflow-hidden relative select-none pl-3 pr-4"
        aria-live="polite"
        aria-label={`Target sector vertical: ${currentSector}`}
      >
        {/* Left Building Icon Badge */}
        <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 z-10 shadow-xs">
          <Building2 className="w-3.5 h-3.5 text-white" />
        </div>

        {/* Ticker Channel */}
        <div className="relative flex-1 h-full flex items-center justify-center overflow-hidden pl-2">
          {isReducedMotion ? (
            <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white drop-shadow-xs truncate">
              {currentSector}
            </span>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={isInitial ? { x: 0 } : { x: startX }}
                animate={
                  isInitial
                    ? {
                        x: [0, 0, endX],
                        transition: {
                          duration: 3.2,
                          times: [0, 0.65, 1],
                          ease: ['linear', 'easeInOut'],
                        },
                      }
                    : {
                        x: [startX, 0, 0, endX],
                        transition: {
                          duration: 4.4,
                          times: [0, 0.18, 0.76, 1],
                          ease: ['easeOut', 'linear', 'easeIn'],
                        },
                      }
                }
                onAnimationComplete={() => {
                  if (isInitial) {
                    setIsInitial(false);
                  }
                  setCurrentIndex((prev) => (prev + 1) % SECTOR_NAMES.length);
                }}
                className="absolute flex items-center justify-center whitespace-nowrap text-center px-2 pointer-events-none"
              >
                <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white drop-shadow-xs flex items-center gap-2">
                  <span>{currentSector}</span>
                  <span className="text-white/60 text-xs">»</span>
                </span>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};
