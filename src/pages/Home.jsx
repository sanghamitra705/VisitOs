import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Building2,
  Users,
  ShieldCheck
} from 'lucide-react';
import { HeroMarqueeTicker } from '../components/common/HeroMarqueeTicker';
import { AnimatedHeading } from '../components/common/AnimatedHeading';
import { HomeIntroduction } from '../components/home/HomeIntroduction';
import { WhyVisitOSSection } from '../components/home/WhyVisitOSSection';
import { BentoFeatureGrid } from '../components/home/BentoFeatureGrid';
import { SevenStepJourney } from '../components/home/SevenStepJourney';
import { CommandCenterShowcase } from '../components/home/CommandCenterShowcase';
import { OrganizationSolutionsSection } from '../components/home/OrganizationSolutionsSection';
import { SecurityPillarsSection } from '../components/home/SecurityPillarsSection';
import { AnimatedCounter } from '../components/home/AnimatedCounter';
import { CTASection } from '../components/common/CTASection';
import heroReceptionImg from '../assets/hero-reception-clean.jpg';

export const Home = () => {
  const heroStats = [
    { value: '150+', label: 'Companies', icon: Building2 },
    { value: '1M+', label: 'Visitors Managed', icon: Users },
    { value: '99.9%', label: 'Uptime', icon: ShieldCheck }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#14263D] overflow-x-hidden selection:bg-[#1769D2] selection:text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION — ONE COHESIVE SINGLE-VISUAL COMPOSITION     */}
      {/* ============================================================ */}
      <section className="hero-section relative w-full overflow-hidden bg-white pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 flex flex-col justify-center border-b border-[#DCE6EF]/60">
        
        {/* RIGHT HERO PHOTO LAYER */}
        <div 
          className="hero-right absolute top-0 right-0 bottom-0 w-full sm:w-[80%] lg:w-[66%] xl:w-[62%] 2xl:w-[58%] h-full pointer-events-none select-none z-0 overflow-hidden flex justify-end"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.18) 15%, rgba(0,0,0,0.45) 28%, rgba(0,0,0,0.75) 42%, black 58%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.18) 15%, rgba(0,0,0,0.45) 28%, rgba(0,0,0,0.75) 42%, black 58%, black 100%)'
          }}
        >
          <div className="hero-reception-environment w-full h-full flex justify-end">
            <img
              src={heroReceptionImg}
              alt="VisitOS Corporate Reception with Kiosk, Scanner, Receptionist, and Professional Workplace Architecture"
              className="w-full h-full object-cover object-right"
              loading="eager"
            />
          </div>
        </div>

        {/* Lower-Left Organic Accent Graphic */}
        <div className="absolute -bottom-10 -left-12 w-[380px] sm:w-[460px] h-[340px] pointer-events-none z-0 select-none opacity-80">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M-40 400 C 60 360, 140 260, 180 320 C 230 380, 320 250, 460 300 C 500 315, 530 360, 560 400 L-40 400 Z"
              fill="url(#refWaveGrad1)"
              opacity="0.35"
            />
            <path
              d="M-30 400 C 50 330, 130 220, 170 290 C 210 350, 290 270, 420 330 C 470 350, 500 380, 540 400 L-30 400 Z"
              fill="url(#refWaveGrad2)"
              opacity="0.25"
            />
            <path
              d="M-20 400 C 40 300, 110 180, 150 250 C 190 320, 260 280, 380 350 L-20 400 Z"
              fill="url(#refWaveGrad3)"
              opacity="0.18"
            />
            <defs>
              <linearGradient id="refWaveGrad1" x1="0" y1="220" x2="450" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#16A6A1" />
                <stop offset="100%" stopColor="#1769D2" />
              </linearGradient>
              <linearGradient id="refWaveGrad2" x1="0" y1="200" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1688E8" />
                <stop offset="50%" stopColor="#16A6A1" />
                <stop offset="100%" stopColor="#27B36A" />
              </linearGradient>
              <linearGradient id="refWaveGrad3" x1="0" y1="180" x2="350" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1769D2" />
                <stop offset="100%" stopColor="#16A6A1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Foreground Content Container - Balanced Enterprise Layout */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pt-2 sm:pt-4">
            
            {/* LEFT CONTENT AREA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-left lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start max-w-[580px] lg:max-w-none"
            >
              {/* Main 2-Line Headline with Letter-by-Letter Entrance Animation */}
              <AnimatedHeading
                as="h1"
                className="hero-heading text-[34px] sm:text-[46px] lg:text-[48px] xl:text-[56px] font-black tracking-tight leading-[1.12] text-[#0B1F38] font-sans"
                segments={[
                  { text: 'Secure Every Arrival.', className: 'text-[#0B1F38]', breakAfter: true },
                  { text: 'Simplify Every Visit.', className: 'text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]' }
                ]}
                stagger={0.025}
              />

              {/* 3. Supporting Description */}
              <p className="hero-description text-sm sm:text-base lg:text-[16.5px] text-[#5F7185] leading-relaxed max-w-[520px]">
                Modern visitor management for secure workplaces, seamless check-ins, and complete visibility from arrival to departure.
              </p>

              {/* 4. Primary CTA: Single 'Get Started →' with Approved VisitOS Gradient */}
              <div className="hero-actions pt-1 flex items-center justify-center lg:justify-start w-full sm:w-auto">
                <Link
                  to="/register"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-white rounded-full shadow-lg shadow-[#1769D2]/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 brand-btn-gradient"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 5. Hero Counters (Integrated in Left Hero Area with outline icons) */}
              <div className="hero-statistics pt-2 sm:pt-3 pb-1 flex items-center justify-center lg:justify-start gap-5 sm:gap-8 w-full select-none overflow-visible">
                {heroStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-2.5 sm:gap-3 text-left overflow-visible">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EDF6FC] border border-[#DCE6EF] flex items-center justify-center text-[#1769D2] shrink-0 shadow-2xs">
                          <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0B1F38] tracking-tight font-sans leading-tight">
                            <AnimatedCounter targetValue={stat.value} />
                          </div>
                          <div className="text-[11px] sm:text-xs font-semibold text-[#5F7185] mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                      {idx < heroStats.length - 1 && (
                        <div className="w-[1px] h-9 bg-[#DCE6EF] shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>

            {/* Visual alignment area */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 h-full min-h-[380px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. HORIZONTALLY ANIMATED TEXT TICKER DIRECTLY BELOW HERO     */}
      {/* ============================================================ */}
      <HeroMarqueeTicker />

      {/* ============================================================ */}
      {/* 3. INTRODUCTION — A SMARTER WAY TO MANAGE EVERY VISITOR      */}
      {/* ============================================================ */}
      <HomeIntroduction />

      {/* ============================================================ */}
      {/* 3. VALUE PROPOSITION — WHY VISITOS (4 PILLARS)               */}
      {/* ============================================================ */}
      <WhyVisitOSSection />

      {/* ============================================================ */}
      {/* 4. KEY FEATURES — 8 STREAMLINED MODULE CARDS                 */}
      {/* ============================================================ */}
      <BentoFeatureGrid />

      {/* ============================================================ */}
      {/* 5. HOW IT WORKS — THE 7-STEP VISITOR WORKFLOW                */}
      {/* ============================================================ */}
      <SevenStepJourney />

      {/* ============================================================ */}
      {/* 6. WORKPLACE INTELLIGENCE — REAL-TIME PRODUCT VISUAL         */}
      {/* ============================================================ */}
      <CommandCenterShowcase />

      {/* ============================================================ */}
      {/* 7. INDUSTRY VERTICALS — 6 SECTOR MODULES                     */}
      {/* ============================================================ */}
      <OrganizationSolutionsSection />

      {/* ============================================================ */}
      {/* 8. SECURITY & VISIBILITY — 3 STRUCTURED SAFEGUARDS           */}
      {/* ============================================================ */}
      <SecurityPillarsSection />

      {/* ============================================================ */}
      {/* 9. FINAL CALL TO ACTION (CTA)                                */}
      {/* ============================================================ */}
      <CTASection />
    </div>
  );
};

export default Home;
