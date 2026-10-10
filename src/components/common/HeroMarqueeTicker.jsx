import React, { useState, useEffect } from 'react';
import { Sparkles, QrCode, ShieldCheck, UserCheck, BellRing, History, CheckCircle2 } from 'lucide-react';

const TICKER_ITEMS = [
  { text: 'SMART VISITOR MANAGEMENT', icon: Sparkles },
  { text: 'QR-BASED REGISTRATION', icon: QrCode },
  { text: 'DIGITAL VISITOR PASSES', icon: ShieldCheck },
  { text: 'STRUCTURED HOST APPROVAL', icon: UserCheck },
  { text: 'REAL-TIME VISIT VISIBILITY', icon: BellRing },
  { text: 'ORGANIZED VISITOR RECORDS', icon: History },
  { text: 'SIMPLIFIED CHECK-IN & CHECK-OUT', icon: CheckCircle2 }
];

export const HeroMarqueeTicker = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Duplicate sequence for a continuous, seamless loop
  const repeatedItems = [
    ...TICKER_ITEMS.map((item, i) => ({ ...item, key: `cycle-1-${i}` })),
    ...TICKER_ITEMS.map((item, i) => ({ ...item, key: `cycle-2-${i}` })),
    ...TICKER_ITEMS.map((item, i) => ({ ...item, key: `cycle-3-${i}` })),
  ];

  return (
    <div 
      aria-label="VisitOS Capabilities Marquee"
      className={`w-full my-4 sm:my-5 lg:my-6 overflow-hidden select-none relative z-20 border-y border-white/20 shadow-md ${className}`}
      style={{
        background: 'linear-gradient(100deg, #1268D8 0%, #0D9488 55%, #20B978 100%)',
        boxShadow: '0 4px 20px -2px rgba(18, 104, 216, 0.25)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes heroMarqueeTrack {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .hero-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: heroMarqueeTrack 34s linear infinite;
        }
      `}</style>

      {/* Left and Right Subtle Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#1268D8]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#20B978]/80 to-transparent z-10 pointer-events-none" />

      {/* Full-width rectangular bar */}
      <div className="py-2.5 sm:py-3 px-4">
        <div 
          className="hero-marquee-track items-center gap-6 sm:gap-8"
          style={{
            animationPlayState: isHovered || prefersReducedMotion ? 'paused' : 'running'
          }}
        >
          {repeatedItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.key}
                className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-default"
              >
                {/* Translucent white circular container with thin low-opacity border */}
                <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-2xs group-hover:bg-white group-hover:text-[#0D9488] transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Clean white typography */}
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.14em] font-sans text-white group-hover:text-[#E8FAF3] transition-colors duration-200 whitespace-nowrap">
                  {item.text}
                </span>

                {/* Small elegant separator */}
                <span className="text-white/40 text-xs font-bold pl-2" aria-hidden="true">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroMarqueeTicker;
