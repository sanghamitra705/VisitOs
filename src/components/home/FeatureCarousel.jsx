import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  QrCode, 
  BellRing, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  Eye,
  Sliders
} from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1Img from '../../assets/slide-1-features.png';
import slide2Img from '../../assets/slide-2-visitor-journey.png';
import slide3Img from '../../assets/slide-3-workplace-intelligence.png';

export const FeatureCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const productTabs = [
    {
      id: 'access',
      title: 'Visitor Access & Passes',
      icon: QrCode,
      tagline: 'Contactless QR and Apple/Google Wallet guest badges',
      image: slide1Img,
      stats: 'Instant < 3s Issuance'
    },
    {
      id: 'approvals',
      title: 'Host Approval Workflows',
      icon: BellRing,
      tagline: '1-Click employee verification via Slack, Teams & SMS',
      image: slide2Img,
      stats: 'Real-time Delivery'
    },
    {
      id: 'intelligence',
      title: 'Workplace Intelligence',
      icon: Building2,
      tagline: 'Live facility occupancy, building analytics & audit trails',
      image: slide3Img,
      stats: '100% Audit Logged'
    }
  ];

  const valuePillars = [
    {
      icon: QrCode,
      title: 'Contactless Check-In',
      description: 'Touchless terminal QR scans verified in under 3 seconds with auto badge printing & Wi-Fi access.',
      tag: '< 3s Speed',
      accentColor: '#1769D2',
      bgLight: '#EDF6FC'
    },
    {
      icon: BellRing,
      title: 'Real-Time Host Alerts',
      description: 'Instant visitor arrival alerts with photo ID sent directly to Slack, Microsoft Teams, SMS and email.',
      tag: '1-Click Approve',
      accentColor: '#1688E8',
      bgLight: '#EDF6FC'
    },
    {
      icon: Building2,
      title: 'Multi-Tenant Governance',
      description: 'Granular permissions, time-fenced elevator access, and dedicated portals for multi-tenant business parks.',
      tag: 'Multi-Facility',
      accentColor: '#16A6A1',
      bgLight: '#F3F9FD'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Compliance',
      description: 'Immutable SOC-2 & ISO 27001 audit logging with automated real-time emergency evacuation rosters.',
      tag: 'SOC-2 Ready',
      accentColor: '#27B36A',
      bgLight: '#EDF6FC'
    }
  ];

  return (
    <section 
      aria-label="VisitOS Core Platform Value"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F3F9FD] to-[#EDF6FC] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 select-none border-b border-[#DCE6EF]"
    >
      {/* Strategic Ambient Glows (Teal + Blue) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-br from-[#1769D2]/10 via-[#16A6A1]/08 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[350px] bg-gradient-to-tl from-[#27B36A]/08 via-[#1AAA94]/08 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Centered Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* ========================================================
            1. GLOBAL SECTION HEADER (EXACT DESIGN SYSTEM HIERARCHY)
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1769D2]/10 border border-[#1769D2]/25 text-[#1769D2] text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] font-mono mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#16A6A1]" />
            <span>SMART VISITOR MANAGEMENT</span>
          </div>

          {/* Main 2-Part Global Heading Style */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#0B1F38] font-sans leading-[1.08] mb-4">
            Unified Intelligence for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] inline-block">
              Complete Workplace Security.
            </span>
          </h2>

          {/* Supporting Body Copy */}
          <p className="text-base sm:text-lg lg:text-[18px] text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-normal">
            From touchless QR registration to real-time host approvals, VisitOS streamlines every visitor interaction into one seamless enterprise platform.
          </p>
        </div>

        {/* ========================================================
            2. PRODUCT SHOWCASE TABS & VISUAL DISPLAY
            ======================================================== */}
        <div className="mb-12 sm:mb-16">
          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {productTabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#10243E] text-white shadow-md shadow-[#10243E]/20 scale-102'
                      : 'bg-white/80 hover:bg-white text-[#5F7185] hover:text-[#10243E] border border-[#DCE6EF]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#16A6A1]' : 'text-[#5F7185]'}`} />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Large Product Visual Display Card */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-[#DCE6EF] shadow-xl shadow-[#0B1F38]/06 p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#DCE6EF] pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#27B36A] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-[#0B1F38]">
                  {productTabs[activeTab].tagline}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-[#1769D2] bg-[#EDF6FC] border border-[#DCE6EF] px-3 py-1 rounded-full">
                {productTabs[activeTab].stats}
              </span>
            </div>

            {/* Visual Screen with Smooth Crossfade */}
            <div className="relative min-h-[260px] sm:min-h-[380px] lg:min-h-[440px] rounded-xl sm:rounded-2xl bg-[#F8FAFC] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={productTabs[activeTab].id}
                  src={productTabs[activeTab].image}
                  alt={productTabs[activeTab].title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="max-h-[240px] sm:max-h-[340px] lg:max-h-[400px] w-auto object-contain drop-shadow-md rounded-lg"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. 4 COMPACT ENTERPRISE VALUE / FEATURE CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {valuePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCE6EF] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-xs"
                      style={{ backgroundColor: pillar.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span 
                      className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-[#DCE6EF] text-[#5F7185] group-hover:text-[#0B1F38] group-hover:bg-[#EDF6FC] transition-colors"
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1F38] group-hover:text-[#1769D2] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13.5px] text-[#5F7185] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Learn More Link */}
                <div className="pt-4 mt-4 border-t border-[#DCE6EF]/60">
                  <Link
                    to="/features"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] group-hover:text-[#16A6A1] transition-colors"
                  >
                    <span>Explore module</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeatureCarousel;
