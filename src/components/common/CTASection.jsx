import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';
import { AuroraBackground } from '../reactbits/AuroraBackground';

export const CTASection = () => {
  return (
    <section 
      aria-label="Get Started with VisitOS"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden"
    >
      <AuroraBackground>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Main Heading with Staggered Entrance Animation */}
          <AnimatedHeading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-[#0B1F38] font-sans leading-[1.1] mb-4"
            segments={[
              { text: 'Make Every Visitor Experience', className: 'text-[#0B1F38]' },
              { text: 'More Organized.', className: 'text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]' }
            ]}
          />

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#5F7185] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Bring registration, approvals, visitor passes, notifications, and visitor records together in one modern visitor management platform.
          </p>

          {/* Actions: Primary Get Started + Secondary Explore Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-bold text-white rounded-full shadow-lg shadow-[#1769D2]/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 brand-btn-gradient cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#10243E] bg-white hover:bg-[#EDF6FC] rounded-full border border-[#DCE6EF] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4 text-[#1769D2]" />
            </Link>
          </div>

          {/* Reassurance Micro Points */}
          <div className="pt-8 mt-8 border-t border-[#DCE6EF]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-[#5F7185]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A]" />
              <span>Fast, Guided Setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A]" />
              <span>Encrypted Data Privacy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A]" />
              <span>Multi-Device Support</span>
            </div>
          </div>

        </div>
      </AuroraBackground>
    </section>
  );
};

export default CTASection;
