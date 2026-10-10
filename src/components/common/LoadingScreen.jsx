import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Exactly 1.5 seconds (1500ms) minimum display duration
    const totalDuration = 1500;
    const intervalTime = 16;
    const stepIncrement = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 380);
          }, 80);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="visitos-enterprise-loader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.02, 
            transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1769D2 0%, #1688E8 38%, #16A6A1 72%, #1AAA94 100%)'
          }}
          role="status"
          aria-live="polite"
          aria-label="VisitOS is preparing your secure workplace experience"
        >
          {/* Subtle Radial Lighting Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.16) 0%, transparent 45%)'
            }}
          />

          {/* Atmospheric Soft Light Movement in Background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-white/10 via-[#38C7B5]/15 to-transparent rounded-full blur-3xl pointer-events-none" 
          />

          {/* Centered Logo & Subtle Progress Element Container */}
          <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full px-6 text-center">
            
            {/* Centered VisitOS Logo with Soft Scale-In and Subtle Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-6 bg-white/15 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/25 shadow-2xl"
              style={{
                boxShadow: '0 12px 36px -6px rgba(0, 0, 0, 0.18), 0 0 24px rgba(255, 255, 255, 0.12)'
              }}
            >
              <Logo size="large" variant="light" />
            </motion.div>

            {/* Thin Horizontal Progress Indicator */}
            <div className="w-full max-w-[260px] sm:max-w-[280px] h-1.5 bg-white/20 rounded-full overflow-hidden shadow-inner mb-4 relative">
              <motion.div 
                className="h-full bg-white rounded-full transition-all duration-75 ease-out shadow-xs"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Subtle Loading Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-1"
            >
              <p className="text-xs sm:text-sm font-bold text-white tracking-tight drop-shadow-xs">
                VisitOS is preparing your secure workplace experience.
              </p>
              <p className="text-[11px] font-mono text-[#D8F2EF]/85 uppercase tracking-wider">
                {Math.min(100, Math.floor(progress))}% INITIALIZED
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
