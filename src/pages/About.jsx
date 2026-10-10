import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Lock, 
  Sparkles, 
  Cpu,
  Building2,
  CheckCircle2,
  Users
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import heroReceptionImg from '../assets/hero-reception-clean.jpg';

export const About = () => {
  const principles = [
    {
      id: 'security-first',
      title: 'Security-First Architecture',
      highlightWord: 'Security-First',
      remainingTitle: ' Architecture',
      description: 'We treat organizational access and visitor logs with uncompromising standards of data encryption, role segregation, and tamper-proof auditing.',
      icon: ShieldCheck,
      surfaceGradient: 'linear-gradient(145deg, #DCEBFF 0%, #C2DBFF 100%)',
      hoverGradient: 'linear-gradient(to top, #1150A0 0%, #1769D2 100%)',
      accentColor: '#1769D2',
      borderColor: 'rgba(23, 105, 210, 0.25)',
      iconBg: '#D1E4FC',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
          {/* Graffiti Star */}
          <path d="M52 10 L53 6 L54 10 L58 11 L54 12 L53 16 L52 12 L48 11 Z" fill="#1769D2" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <circle cx="12" cy="18" r="2" fill="#1769D2" className="transition-all duration-500 group-hover:fill-white/80" />
          {/* Shield Badge */}
          <path d="M32 14 L46 19 V33 C46 43 40 49 32 53 C24 49 18 43 18 33 V19 Z" fill="#FFFFFF" stroke="#1769D2" strokeWidth="2.5" strokeLinejoin="round" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          {/* Checkmark */}
          <path d="M26 33 L30 37 L38 28" stroke="#1769D2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 group-hover:stroke-white" />
        </svg>
      )
    },
    {
      id: 'simplicity',
      title: 'Simplicity for Every Visitor',
      highlightWord: 'Simplicity',
      remainingTitle: ' for Every Visitor',
      description: 'Zero app installations and intuitive smartphone browser interfaces ensure that guests of any technical background can register in seconds.',
      icon: Sparkles,
      surfaceGradient: 'linear-gradient(145deg, #D5F8F2 0%, #B9F0E7 100%)',
      hoverGradient: 'linear-gradient(to top, #0A736A 0%, #079B94 100%)',
      accentColor: '#079B94',
      borderColor: 'rgba(7, 155, 148, 0.25)',
      iconBg: '#CEF5EE',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
          {/* Graffiti Sparkle */}
          <path d="M12 12 L13.5 7 L15 12 L20 13.5 L15 15 L13.5 20 L12 15 L7 13.5 Z" fill="#079B94" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <path d="M50 48 L51 45 L52 48 L55 49 L52 50 L51 53 L50 50 L47 49 Z" fill="#079B94" className="transition-all duration-500 group-hover:fill-white/80" />
          {/* Smartphone with Tap Motion */}
          <rect x="22" y="16" width="24" height="38" rx="5" fill="#FFFFFF" stroke="#079B94" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          <circle cx="34" cy="48" r="1.5" fill="#079B94" className="transition-all duration-500 group-hover:fill-white" />
          <path d="M28 28 L32 32 L40 24" stroke="#079B94" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 group-hover:stroke-white" />
          {/* Speed wave arcs */}
          <path d="M49 26 C53 30 53 38 49 42" stroke="#079B94" strokeWidth="2" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/80" />
        </svg>
      )
    },
    {
      id: 'privacy-by-design',
      title: 'Privacy by Design',
      highlightWord: 'Privacy',
      remainingTitle: ' by Design',
      description: 'Unlike exposed paper registers that display past visitor names to lobby onlookers, our digital system protects guest confidentiality completely.',
      icon: Lock,
      surfaceGradient: 'linear-gradient(145deg, #D5F7E7 0%, #B0EACD 100%)',
      hoverGradient: 'linear-gradient(to top, #106E43 0%, #13965F 100%)',
      accentColor: '#13965F',
      borderColor: 'rgba(19, 150, 95, 0.25)',
      iconBg: '#D6F6DF',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
          {/* Graffiti Stars & Rings */}
          <path d="M50 12 L51.5 7 L53 12 L58 13.5 L53 15 L51.5 20 L50 15 L45 13.5 Z" fill="#13965F" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <circle cx="14" cy="46" r="3" stroke="#13965F" strokeWidth="1.5" strokeDasharray="2 2" fill="none" className="transition-all duration-500 group-hover:stroke-white" />
          {/* Padlock */}
          <rect x="20" y="26" width="26" height="24" rx="5" fill="#FFFFFF" stroke="#13965F" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          <path d="M26 26 V20 C26 15.5 29 13 33 13 C37 13 40 15.5 40 20 V26" stroke="#13965F" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
          <circle cx="33" cy="37" r="2.5" fill="#13965F" className="transition-all duration-500 group-hover:fill-white" />
          <line x1="33" y1="39.5" x2="33" y2="44" stroke="#13965F" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
        </svg>
      )
    },
    {
      id: 'enterprise-scalability',
      title: 'Enterprise Scalability',
      highlightWord: 'Enterprise',
      remainingTitle: ' Scalability',
      description: 'Built to effortlessly adapt from a single 15-person boutique studio to multi-gate tech parks and multi-branch campus networks.',
      icon: Cpu,
      surfaceGradient: 'linear-gradient(145deg, #E1E9FF 0%, #CBD9FA 100%)',
      hoverGradient: 'linear-gradient(to top, #183150 0%, #294F87 100%)',
      accentColor: '#294F87',
      borderColor: 'rgba(41, 79, 135, 0.25)',
      iconBg: '#DBE6F7',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
          {/* Graffiti Star */}
          <path d="M14 16 L15.5 11 L17 16 L22 17.5 L17 19 L15.5 24 L14 19 L9 17.5 Z" fill="#294F87" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <circle cx="52" cy="18" r="2.5" fill="#294F87" className="transition-all duration-500 group-hover:fill-white/80" />
          {/* Connected Networked Towers / Nodes */}
          <rect x="24" y="16" width="18" height="34" rx="3" fill="#FFFFFF" stroke="#294F87" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          <rect x="12" y="30" width="12" height="20" rx="2.5" fill="#FFFFFF" stroke="#294F87" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          <rect x="42" y="26" width="12" height="24" rx="2.5" fill="#FFFFFF" stroke="#294F87" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          {/* Connection Line */}
          <line x1="16" y1="53" x2="50" y2="53" stroke="#294F87" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
        </svg>
      )
    },
  ];

  return (
    <div className="bg-[#F3F9FD] min-h-screen text-[#14263D]">
      {/* ============================================================ */}
      {/* SECTION 1: ABOUT HERO (NO EYEBROW BADGE, CORRECT HEADING)   */}
      {/* ============================================================ */}
      <PageHeader
        title="Modernizing Workplace Access & Visitor Intelligence"
        gradientWord="Visitor Intelligence"
        subtitle="We built VisitOS to replace insecure paper visitor logs with an intuitive, cloud-native platform that protects organizations and elevates visitor experiences."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* ============================================================ */}
      {/* SECTION 2: EDITORIAL ORIGIN & OBSOLETE PAPER LOGBOOK        */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Polished Editorial Story */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
                The Paper Visitor{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Logbook Is Obsolete
                </span>
              </h2>

              <p className="text-base sm:text-[16.5px] text-[#5F7185] leading-relaxed">
                For decades, offices and campuses have relied on handwritten spiral-bound logbooks. Every time a visitor signs in, they expose the names, phone numbers, and meeting purposes of previous guests to anyone standing at the front desk.
              </p>

              <p className="text-base sm:text-[16.5px] text-[#5F7185] leading-relaxed">
                During an emergency evacuation, paper logbooks are often left behind or unreadable. When compliance audits occur, compiling historical records takes days of manual deciphering.
              </p>

              {/* Compact Gradient Accent Divider */}
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]" />

              {/* Highlighted Concluding Statement */}
              <p className="text-base sm:text-[17.5px] text-[#10243E] font-bold leading-relaxed pt-1">
                VisitOS was engineered to bring speed, digital privacy, and verified host control to the physical front desk.
              </p>
            </div>

            {/* Right Column: Mission Card with Photography */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#DCE6EF] bg-slate-900 group">
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={heroReceptionImg}
                    alt="VisitOS modern corporate office reception environment"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38]/95 via-[#0B1F38]/50 to-transparent p-6 sm:p-8 flex flex-col justify-end text-left text-white" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-1">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-sans">Our Mission</h3>
                    <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                      To empower modern organizations with secure, touchless, and intelligent visitor management technology — creating safer workplaces and memorable first impressions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: CORE PRINCIPLES BEHIND VISITOS (LIGHT-BLUE BG)   */}
      {/* ============================================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-24 border-b border-[#DCE6EF] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #EAF4FF 0%, #E8F8F6 100%)'
        }}
      >
        {/* Subtle Ambient Radial Highlight & Connected Network Motifs */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-[#1769D2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#16A6A1]/8 rounded-full blur-3xl pointer-events-none" />
        
        {/* Network and Node Connection Background Decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="node-grid-about" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1.5" fill="#1769D2" opacity="0.3" />
                <path d="M 40 40 L 80 40 M 40 40 L 40 80" fill="none" stroke="#1769D2" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#node-grid-about)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading (Centered, No Eyebrow Badge) */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Core Principles Behind{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                VisitOS
              </span>
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-medium">
              The foundational values driving our product architecture, security standards, and user experience design.
            </p>
          </div>

          {/* 4 Interactive Coordinated Gradient Cards with Gradual Bottom-to-Top Hover Fill */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {principles.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.id}
                  tabIndex={0}
                  className="group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl focus-visible:-translate-y-1.5 focus-visible:shadow-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1769D2] min-h-[300px] sm:min-h-[320px]"
                  style={{
                    background: val.surfaceGradient,
                    border: `1px solid ${val.borderColor}`,
                    boxShadow: '0 4px 18px -2px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  {/* 
                    Smooth Bottom-to-Top Color-Fill Layer
                    (Gradually rises upward from bottom edge to top on hover/focus-visible)
                  */}
                  <div 
                    className="absolute inset-0 z-0 origin-bottom pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 rounded-3xl"
                    style={{
                      background: val.hoverGradient,
                    }}
                  />

                  {/* Foreground Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                    
                    {/* Top Row: Icon container on left + Graffiti sticker on right */}
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:bg-white/20 group-hover:border group-hover:border-white/30"
                        style={{ backgroundColor: val.iconBg }}
                      >
                        <Icon 
                          className="w-6 h-6 transition-colors duration-500 group-hover:text-white" 
                          style={{ color: val.accentColor }} 
                        />
                      </div>

                      {/* Creative Graffiti Sticker */}
                      <div className="select-none pointer-events-none">
                        {val.sticker}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-[17.5px] sm:text-[18.5px] font-bold text-[#10243E] font-sans leading-snug mb-2 transition-colors duration-500 group-hover:text-white">
                        <span style={{ color: val.accentColor }} className="group-hover:text-white transition-colors">
                          {val.highlightWord}
                        </span>
                        {val.remainingTitle}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#526982] leading-relaxed transition-colors duration-500 group-hover:text-white/95">
                        {val.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: PRIVACY & DATA COMMITMENT                         */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#10243E] text-white rounded-3xl p-8 sm:p-12 border border-[#0B1F38] space-y-6 shadow-2xl relative overflow-hidden text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1769D2] flex items-center justify-center shadow-xs">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-sans">Our Privacy & Data Commitment</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Unlike advertising-driven platforms or insecure spreadsheets, VisitOS treats your organization's visitor rosters, employee directories, and security logs with strict data isolation. We do not monetize or sell visitor information under any circumstances.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
              <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700">
                <p className="font-bold text-white mb-1">Encrypted Storage</p>
                <p className="text-slate-400">All data encrypted in transit and at rest with TLS 1.3 & AES-256.</p>
              </div>
              <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700">
                <p className="font-bold text-white mb-1">Data Retention Control</p>
                <p className="text-slate-400">Automated log expiration and GDPR-compliant purge routines.</p>
              </div>
              <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700">
                <p className="font-bold text-white mb-1">Role-Based Access</p>
                <p className="text-slate-400">Granular permissions strictly segregating admin and host staff data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
