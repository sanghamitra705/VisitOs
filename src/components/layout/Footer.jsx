import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { KioskSticker } from '../common/KioskSticker';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative text-white border-t border-white/[0.12] overflow-visible select-none"
      style={{
        background: 'linear-gradient(110deg, #0B1F38 0%, #0B4F52 30%, #137F78 55%, #19A997 78%, #38C7B5 100%)'
      }}
    >
      {/* Subtle Geometric Background Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(#38C7B5 1px, transparent 1px), linear-gradient(90deg, #38C7B5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Left Deep Navy Atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-gradient-to-br from-[#0B1F38]/50 via-[#0B4F52]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Right Primary Teal Atmosphere Behind Kiosk (#19A997 → #38C7B5) */}
      <div className="absolute bottom-0 right-0 w-[650px] h-[400px] bg-gradient-to-tl from-[#38C7B5]/25 via-[#19A997]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container (Restored Previous Spacious Dimensions, Overflow Visible for Floating Kiosk) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 relative z-10 overflow-visible">
        
        {/* ========================================================
            DESKTOP & RESPONSIVE UNIFIED COMPOSITION
            ======================================================== */}
        <div className="relative overflow-visible">
          
          {/* NAVIGATION-FOCUSED CONTENT GRID (Desktop: Logo on left, Nav columns shifted 30-70px right) */}
          <div className="lg:max-w-[760px] xl:max-w-[860px] 2xl:max-w-[940px] relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 text-sm">
              
              {/* COLUMN 1: VISITOS BRAND (Left side) */}
              <div className="space-y-3.5 lg:col-span-4 xl:col-span-4 max-w-[280px]">
                <div className="flex items-center">
                  <Logo size="large" variant="light" />
                </div>

                <p className="text-[13.5px] sm:text-[14px] text-[#D8F2EF] leading-relaxed font-normal">
                  Modern visitor management for secure workplaces.
                </p>

                {/* High-Contrast Live Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B4F52]/80 border border-white/[0.15] text-[11px] sm:text-xs shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#38C7B5] animate-pulse" />
                  <span className="text-[#F3FFFF] font-semibold">99.9% SLA Uptime</span>
                </div>
              </div>

              {/* COLUMNS 2, 3, 4: PRODUCT, SOLUTIONS, COMPANY (Shifted 30-70px to the right) */}
              <div className="lg:col-span-8 xl:col-span-8 lg:pl-6 xl:pl-12 2xl:pl-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-10">
                  
                  {/* PRODUCT */}
                  <div className="space-y-3">
                    <p className="text-[15px] sm:text-[16px] font-black uppercase tracking-[0.08em] text-white font-sans">
                      Product
                    </p>
                    <ul className="space-y-2 text-[14px] sm:text-[15px] font-medium text-[#F3FFFF]">
                      <li>
                        <Link 
                          to="/features" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          All Features
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/features/qr-visitor-registration" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          QR Registration
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/features/digital-visitor-passes" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Digital Passes
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/features/employee-approval-workflows" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Approval Workflows
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/how-it-works" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Workflows
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/pricing" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Pricing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* SOLUTIONS */}
                  <div className="space-y-3">
                    <p className="text-[15px] sm:text-[16px] font-black uppercase tracking-[0.08em] text-white font-sans">
                      Solutions
                    </p>
                    <ul className="space-y-2 text-[14px] sm:text-[15px] font-medium text-[#F3FFFF]">
                      <li>
                        <Link 
                          to="/solutions/corporate-offices" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Corporate Offices
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/it-companies" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          IT Companies
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/business-parks-multi-tenant" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Business Parks
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/educational-institutions-campuses" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Educational Institutions
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/hospitals-healthcare" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/solutions/manufacturing-industrial" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Manufacturing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* COMPANY */}
                  <div className="space-y-3">
                    <p className="text-[15px] sm:text-[16px] font-black uppercase tracking-[0.08em] text-white font-sans">
                      Company
                    </p>
                    <ul className="space-y-2 text-[14px] sm:text-[15px] font-medium text-[#F3FFFF]">
                      <li>
                        <Link 
                          to="/about" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/contact" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/faq" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Help & FAQ
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/login" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Admin Portal
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/privacy-policy" 
                          className="hover:text-[#8DE5D5] transition-colors duration-200 cursor-pointer inline-block"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

            {/* COPYRIGHT NOTICE SUB-BAR */}
            <div className="mt-10 sm:mt-12 pt-5 border-t border-white/[0.12] text-xs text-[#D8F2EF]">
              <p className="text-center sm:text-left text-[12.5px] font-medium">
                © {currentYear} VisitOS Technologies Inc. All rights reserved.
              </p>
            </div>

          </div>

          {/* ========================================================
              RIGHT VISUAL ZONE: ENLARGED & ELEVATED VISITOS KIOSK
              (Enlarged by ~10-15%, emerging attractively with zero overlap)
              ======================================================== */}
          <div className="hidden lg:block absolute right-1 xl:right-3 2xl:right-6 bottom-[-15px] lg:bottom-[-20px] xl:bottom-[-25px] z-20 pointer-events-none xl:pointer-events-auto overflow-visible">
            <KioskSticker 
              className="overflow-visible" 
              imgHeightClass="h-[460px] lg:h-[500px] xl:h-[540px] 2xl:h-[580px]" 
            />
          </div>

          {/* Mobile & Tablet Visual (Placed below content cleanly) */}
          <div className="block lg:hidden mt-10 mb-2 flex justify-center items-center relative z-20">
            <KioskSticker 
              className="w-full max-w-[300px] sm:max-w-[360px]" 
              imgHeightClass="h-[290px] sm:h-[340px]" 
            />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
