import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  LogOut, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommandCenterShowcase = () => {
  const telemetryStats = [
    { label: 'Active On-Premise', value: '48', change: '+12% morning arrivals', icon: Users, color: '#1769D2' },
    { label: 'Pending Approvals', value: '3', change: 'Avg response < 30s', icon: Clock, color: '#16A6A1' },
    { label: "Today's Check-Ins", value: '142', change: 'Peak at 10:15 AM', icon: CheckCircle2, color: '#27B36A' },
    { label: "Today's Check-Outs", value: '94', change: '100% departure logged', icon: LogOut, color: '#1688E8' },
  ];

  const recentVisitors = [
    { name: 'Dr. Evelyn Reed', company: 'BioGen Labs', host: 'Marcus Vance', time: '10:42 AM', status: 'Checked In', badge: '#V-4091' },
    { name: 'Nathaniel Drake', company: 'Horizon Cloud', host: 'Elena Rostova', time: '10:38 AM', status: 'Pending Approval', badge: '#V-4092' },
    { name: 'Maya Lin', company: 'Global Architects', host: 'David Chen', time: '10:15 AM', status: 'Checked In', badge: '#V-4089' },
  ];

  const workspaceCards = [
    {
      id: 'visitor-activity',
      title: 'Visitor Activity',
      tag: 'Live Telemetry',
      desc: 'Monitor real-time occupant counts and peak arrival volumes across reception gates.',
      hoverGradient: 'linear-gradient(to top, #0C857D 0%, #0F9D94 100%)',
      accentColor: '#0F9D94',
      badgeBg: '#E6F7F5',
      badgeBorder: 'rgba(15, 157, 148, 0.25)',
      illustration: (
        <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <defs>
            <linearGradient id="vaCounterGrad" x1="0" y1="0" x2="65" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F9D94" />
              <stop offset="100%" stopColor="#00D2C4" />
            </linearGradient>
            <linearGradient id="vaDeskGrad" x1="80" y1="75" x2="180" y2="115" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6F8F6" />
              <stop offset="100%" stopColor="#CCF2ED" />
            </linearGradient>
          </defs>

          {/* Graffiti Floating Stars & Doodle Sparkles */}
          <path d="M22 22 L24.5 12 L27 22 L37 24.5 L27 27 L24.5 37 L22 27 L12 24.5 Z" fill="#00D2C4" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <path d="M194 28 L195.5 20 L197 28 L205 29.5 L197 31 L195.5 39 L194 31 L186 29.5 Z" fill="#0F9D94" className="transition-all duration-500 group-hover:fill-white/80" />
          <circle cx="34" cy="46" r="2.5" fill="#1769D2" className="transition-all duration-500 group-hover:fill-white/70" />
          <circle cx="188" cy="74" r="3" fill="#27B36A" className="transition-all duration-500 group-hover:fill-white/70" />
          
          {/* Dynamic Curved Trajectory & Motion Waves */}
          <path d="M28 92 C48 64, 76 72, 96 52" stroke="#00D2C4" strokeWidth="2.5" strokeDasharray="4 4" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/70" />
          <path d="M10 82 C16 78, 22 86, 28 82" stroke="#0F9D94" strokeWidth="2" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/80" />

          {/* Reception Desk Environment Base */}
          <rect x="80" y="74" width="105" height="38" rx="10" fill="url(#vaDeskGrad)" stroke="#0F9D94" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
          <line x1="92" y1="92" x2="173" y2="92" stroke="#0F9D94" strokeWidth="1.5" strokeDasharray="3 3" className="transition-all duration-500 group-hover:stroke-white/60" />
          
          {/* Reception Terminal Screen on Desk */}
          <rect x="135" y="58" width="34" height="22" rx="4" fill="#0B1F38" stroke="#00D2C4" strokeWidth="1.5" className="transition-all duration-500 group-hover:fill-white/30 group-hover:stroke-white" />
          <line x1="140" y1="65" x2="160" y2="65" stroke="#00D2C4" strokeWidth="2" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
          <line x1="140" y1="71" x2="154" y2="71" stroke="#27B36A" strokeWidth="2" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
          <line x1="152" y1="80" x2="152" y2="84" stroke="#0F9D94" strokeWidth="2" />

          {/* Arriving Cartoon Visitor Avatar */}
          <g className="transition-transform duration-500 group-hover:translate-x-1.5">
            {/* Body */}
            <path d="M42 86 C42 68, 52 64, 60 64 C68 64, 78 68, 78 86" fill="#0F9D94" stroke="#0B1F38" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white/90 group-hover:stroke-white" />
            {/* Head */}
            <circle cx="60" cy="48" r="12" fill="#00D2C4" stroke="#0B1F38" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white" />
            {/* Friendly Glasses/Eyes */}
            <circle cx="56" cy="48" r="2.5" fill="#0B1F38" className="transition-all duration-500 group-hover:fill-[#0F9D94]" />
            <circle cx="64" cy="48" r="2.5" fill="#0B1F38" className="transition-all duration-500 group-hover:fill-[#0F9D94]" />
            <path d="M57 53 Q60 56 63 53" stroke="#0B1F38" strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#0F9D94]" />
            {/* Visitor Digital Lanyard Badge */}
            <rect x="55" y="70" width="10" height="13" rx="2.5" fill="#1769D2" stroke="#FFFFFF" strokeWidth="1" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-[#0F9D94]" />
          </g>

          {/* Live Occupant Counter Badge */}
          <g transform="translate(100, 24)" className="transition-all duration-500 group-hover:-translate-y-1">
            <rect x="0" y="0" width="70" height="26" rx="13" fill="url(#vaCounterGrad)" stroke="#FFFFFF" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white" />
            <circle cx="12" cy="13" r="4" fill="#FFFFFF" className="transition-all duration-500 group-hover:fill-[#0F9D94] animate-pulse" />
            <text x="23" y="17.5" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" className="transition-all duration-500 group-hover:fill-[#0F9D94]">48 LIVE</text>
          </g>
        </svg>
      )
    },
    {
      id: 'host-approval',
      title: 'Host Approval Status',
      tag: 'Sub-30s Latency',
      desc: 'Connect visitors directly with employees for rapid 1-click mobile authorization.',
      hoverGradient: 'linear-gradient(to top, #1A8E65 0%, #20A878 100%)',
      accentColor: '#20A878',
      badgeBg: '#E8F8F1',
      badgeBorder: 'rgba(32, 168, 120, 0.25)',
      illustration: (
        <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <defs>
            <linearGradient id="haPhoneGrad" x1="0" y1="0" x2="62" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F0FDF4" />
              <stop offset="100%" stopColor="#DCFCE7" />
            </linearGradient>
            <linearGradient id="haCheckGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#20A878" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Graffiti Doodle Accents & Speed Sparks */}
          <path d="M190 24 L192.5 14 L195 24 L205 26.5 L195 29 L192.5 39 L190 29 L180 26.5 Z" fill="#20A878" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <path d="M25 36 L27 28 L29 36 L37 38 L29 40 L27 48 L25 40 L17 38 Z" fill="#10B981" className="transition-all duration-500 group-hover:fill-white/80" />
          <line x1="20" y1="65" x2="32" y2="60" stroke="#20A878" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/80" />
          <line x1="16" y1="78" x2="28" y2="78" stroke="#20A878" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/80" />
          
          {/* Cartoon Employee / Host Figure */}
          <g className="transition-transform duration-500 group-hover:-translate-x-1.5">
            {/* Body */}
            <path d="M46 94 C46 74, 56 70, 66 70 C76 70, 86 74, 86 94" fill="#20A878" stroke="#0B1F38" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white/90 group-hover:stroke-white" />
            {/* Head */}
            <circle cx="66" cy="50" r="13" fill="#A7F3D0" stroke="#0B1F38" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white" />
            {/* Facial details */}
            <circle cx="62" cy="50" r="2.5" fill="#0B1F38" className="transition-all duration-500 group-hover:fill-[#20A878]" />
            <circle cx="70" cy="50" r="2.5" fill="#0B1F38" className="transition-all duration-500 group-hover:fill-[#20A878]" />
            <path d="M63 56 Q66 60 69 56" stroke="#0B1F38" strokeWidth="1.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#20A878]" />
          </g>

          {/* Smartphone with 1-Click Fast Approval Card */}
          <g transform="translate(112, 18)" className="transition-transform duration-500 group-hover:translate-y-1">
            {/* Smartphone Body */}
            <rect x="0" y="0" width="64" height="96" rx="12" fill="url(#haPhoneGrad)" stroke="#20A878" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
            <rect x="22" y="6" width="20" height="3.5" rx="1.75" fill="#20A878" className="transition-all duration-500 group-hover:fill-white" />
            
            {/* Wireless Sync Waves */}
            <path d="M-12 24 C-4 32, -4 46, -12 54" stroke="#20A878" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
            <path d="M-22 16 C-10 30, -10 60, -22 74" stroke="#20A878" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/70" />
            
            {/* Glowing Green Approval Badge with Checkmark */}
            <circle cx="32" cy="46" r="17" fill="url(#haCheckGrad)" stroke="#FFFFFF" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white animate-pulse" />
            <path d="M26 46 L30.5 50.5 L38.5 41.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 group-hover:stroke-[#20A878]" />
            
            {/* Fast Approval Progress Line */}
            <rect x="14" y="72" width="36" height="7" rx="3.5" fill="#20A878" opacity="0.35" className="transition-all duration-500 group-hover:fill-white group-hover:opacity-90" />
            <rect x="14" y="72" width="26" height="7" rx="3.5" fill="#20A878" className="transition-all duration-500 group-hover:fill-white" />
          </g>
        </svg>
      )
    },
    {
      id: 'digital-records',
      title: 'Digital Visit Records',
      tag: 'Audit Ready',
      desc: 'Maintain structured, tamper-proof arrival timestamps and automated compliance logs.',
      hoverGradient: 'linear-gradient(to top, #145CA6 0%, #1976D2 100%)',
      accentColor: '#1976D2',
      badgeBg: '#EDF6FD',
      badgeBorder: 'rgba(25, 118, 210, 0.25)',
      illustration: (
        <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <defs>
            <linearGradient id="drDocGrad" x1="0" y1="0" x2="96" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E3F2FD" />
            </linearGradient>
            <linearGradient id="drStampGrad" x1="0" y1="0" x2="68" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1976D2" />
              <stop offset="100%" stopColor="#1E88E5" />
            </linearGradient>
          </defs>

          {/* Graffiti Sparkles, Stars & Geometric Accents */}
          <path d="M26 26 L28.5 16 L31 26 L41 28.5 L31 31 L28.5 41 L26 31 L16 28.5 Z" fill="#1976D2" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <path d="M192 82 L193.5 74 L195 82 L203 83.5 L195 85 L193.5 93 L192 85 L184 83.5 Z" fill="#00D2C4" className="transition-all duration-500 group-hover:fill-white/80" />
          <circle cx="190" cy="28" r="3" fill="#1976D2" className="transition-all duration-500 group-hover:fill-white/70" />
          <path d="M15 72 Q25 66 28 78" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" fill="none" className="transition-all duration-500 group-hover:stroke-white" />

          {/* Layered Security Compliance Document Stack */}
          <g transform="translate(54, 16)" className="transition-transform duration-500 group-hover:scale-102">
            {/* Background Secondary Stacked Document */}
            <rect x="14" y="0" width="94" height="100" rx="12" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1.5" strokeDasharray="4 3" className="transition-all duration-500 group-hover:fill-white/10 group-hover:stroke-white/60" />
            
            {/* Primary Document Card */}
            <rect x="0" y="8" width="94" height="100" rx="12" fill="url(#drDocGrad)" stroke="#1976D2" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
            
            {/* Digital QR Code Pattern Representation */}
            <rect x="14" y="20" width="30" height="30" rx="6" fill="#1976D2" fillOpacity="0.1" stroke="#1976D2" strokeWidth="1.5" className="transition-all duration-500 group-hover:fill-white/30 group-hover:stroke-white" />
            <rect x="19" y="25" width="7" height="7" rx="1" fill="#1976D2" className="transition-all duration-500 group-hover:fill-white" />
            <rect x="31" y="25" width="7" height="7" rx="1" fill="#1976D2" className="transition-all duration-500 group-hover:fill-white" />
            <rect x="19" y="37" width="7" height="7" rx="1" fill="#1976D2" className="transition-all duration-500 group-hover:fill-white" />
            <rect x="31" y="37" width="7" height="7" rx="1" fill="#27B36A" className="transition-all duration-500 group-hover:fill-white" />

            {/* Document Verification Code Lines */}
            <line x1="52" y1="26" x2="82" y2="26" stroke="#1976D2" strokeWidth="3" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white" />
            <line x1="52" y1="35" x2="76" y2="35" stroke="#1976D2" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" className="transition-all duration-500 group-hover:stroke-white/80" />
            <line x1="52" y1="44" x2="80" y2="44" stroke="#1976D2" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" className="transition-all duration-500 group-hover:stroke-white/80" />

            {/* Tamper-Proof Timestamp Ribbon */}
            <g transform="translate(14, 64)">
              <rect x="0" y="0" width="68" height="22" rx="7" fill="url(#drStampGrad)" className="transition-all duration-500 group-hover:fill-white" />
              <text x="8" y="15" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" className="transition-all duration-500 group-hover:fill-[#1976D2]">10:42 AM • OK</text>
            </g>
          </g>

          {/* Floating Verified Shield Badge */}
          <g transform="translate(156, 44)" className="transition-transform duration-500 group-hover:-translate-y-1">
            <circle cx="16" cy="16" r="16" fill="#27B36A" stroke="#FFFFFF" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white shadow-md" />
            <path d="M10 16 L14.5 20.5 L22.5 11.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500 group-hover:stroke-[#27B36A]" />
          </g>
        </svg>
      )
    },
    {
      id: 'operational-visibility',
      title: 'Operational Visibility',
      tag: 'Muster Synced',
      desc: 'Live emergency headcount roster and perimeter verification across facility zones.',
      hoverGradient: 'linear-gradient(to top, #066772 0%, #087F8C 100%)',
      accentColor: '#087F8C',
      badgeBg: '#E6F5F7',
      badgeBorder: 'rgba(8, 127, 140, 0.25)',
      illustration: (
        <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <defs>
            <linearGradient id="ovRadarGrad" x1="0" y1="0" x2="136" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E8F7F9" />
              <stop offset="100%" stopColor="#D2F1F5" />
            </linearGradient>
            <linearGradient id="ovMusterGrad" x1="0" y1="0" x2="68" y2="18" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#087F8C" />
              <stop offset="100%" stopColor="#0E9AA8" />
            </linearGradient>
          </defs>

          {/* Graffiti Star Accents & Radar Burst Nodes */}
          <path d="M192 18 L194 10 L196 18 L204 20 L196 22 L194 30 L192 22 L184 20 Z" fill="#087F8C" className="transition-all duration-500 group-hover:fill-white group-hover:scale-110" />
          <circle cx="26" cy="38" r="5" stroke="#087F8C" strokeWidth="2" strokeDasharray="3 3" fill="none" className="transition-all duration-500 group-hover:stroke-white" />
          <path d="M16 88 C24 82, 32 94, 40 88" stroke="#087F8C" strokeWidth="2" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-white/80" />

          {/* Facility Radar Map & Zones */}
          <g transform="translate(42, 14)" className="transition-transform duration-500 group-hover:scale-102">
            {/* Map Floorplan Boundary */}
            <rect x="0" y="0" width="136" height="100" rx="14" fill="url(#ovRadarGrad)" stroke="#087F8C" strokeWidth="2.5" className="transition-all duration-500 group-hover:fill-white/20 group-hover:stroke-white" />
            
            {/* Facility Zone Divisions */}
            <line x1="0" y1="50" x2="136" y2="50" stroke="#087F8C" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" className="transition-all duration-500 group-hover:stroke-white/60" />
            <line x1="68" y1="0" x2="68" y2="100" stroke="#087F8C" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5" className="transition-all duration-500 group-hover:stroke-white/60" />

            {/* Radar Concentric Rings */}
            <circle cx="68" cy="50" r="35" stroke="#087F8C" strokeWidth="1.5" opacity="0.35" className="transition-all duration-500 group-hover:stroke-white/40" />
            <circle cx="68" cy="50" r="20" stroke="#087F8C" strokeWidth="1.5" opacity="0.5" className="transition-all duration-500 group-hover:stroke-white/60" />

            {/* Zone Activity Pin 1: North Wing */}
            <g transform="translate(36, 24)">
              <circle cx="0" cy="0" r="5.5" fill="#087F8C" stroke="#FFFFFF" strokeWidth="1.5" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white" />
              <circle cx="0" cy="0" r="11" stroke="#087F8C" strokeWidth="1.5" strokeDasharray="2 2" className="transition-all duration-500 group-hover:stroke-white animate-ping" />
            </g>

            {/* Zone Activity Pin 2: Main Gate Muster */}
            <g transform="translate(98, 74)">
              <circle cx="0" cy="0" r="6.5" fill="#27B36A" stroke="#FFFFFF" strokeWidth="1.5" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-white" />
            </g>

            {/* Zone Activity Pin 3: Center Command Hub */}
            <g transform="translate(68, 50)">
              <circle cx="0" cy="0" r="7.5" fill="#1769D2" stroke="#FFFFFF" strokeWidth="2" className="transition-all duration-500 group-hover:fill-white group-hover:stroke-[#087F8C]" />
            </g>

            {/* Live Evacuation Synced Status Pill */}
            <g transform="translate(16, 76)">
              <rect x="0" y="0" width="66" height="18" rx="9" fill="url(#ovMusterGrad)" className="transition-all duration-500 group-hover:fill-white" />
              <text x="8" y="12.5" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif" className="transition-all duration-500 group-hover:fill-[#087F8C]">MUSTER 100%</text>
            </g>
          </g>
        </svg>
      )
    }
  ];

  return (
    <section 
      aria-label="VisitOS Workplace Intelligence"
      className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#DCE7F2] relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#1769D2]/05 via-[#16A6A1]/05 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean Heading Only, Two-Line Description Completely Removed) */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#09213F] font-sans leading-[1.15]">
            A Clearer View of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]">
              What's Happening in Your Workspace
            </span>
          </h2>
        </div>

        {/* ============================================================ */}
        {/* 4 INTERACTIVE WORKSPACE CARDS WITH GRADUAL COLOR FILL HOVER  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 mb-10">
          {workspaceCards.map((card) => {
            return (
              <div
                key={card.id}
                tabIndex={0}
                className="group relative rounded-[20px] p-5 sm:p-6 border border-[#DCE8EE] bg-white hover:border-transparent hover:shadow-xl transition-all duration-500 text-left flex flex-col justify-between overflow-hidden cursor-default focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1769D2] hover:-translate-y-1.5 focus-visible:-translate-y-1.5 min-h-[350px] sm:min-h-[365px]"
                style={{
                  boxShadow: '0 2px 10px -2px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* 
                  Smooth Layered Color Fill Layer
                  (Travels smoothly upward from bottom to top on hover/focus-visible)
                */}
                <div 
                  className="absolute inset-0 z-0 origin-bottom pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0"
                  style={{
                    background: card.hoverGradient,
                  }}
                />

                {/* Card Foreground Content (Positioned above the color fill layer) */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Pill Tag Label */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span 
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30"
                        style={{ 
                          color: card.accentColor, 
                          backgroundColor: card.badgeBg,
                          borderColor: card.badgeBorder 
                        }}
                      >
                        {card.tag}
                      </span>
                    </div>

                    {/* Creative Vector Illustration Area */}
                    <div className="w-full h-[120px] sm:h-[125px] flex items-center justify-center my-1 select-none">
                      {card.illustration}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-[#10243E] mb-2 font-sans tracking-tight transition-colors duration-500 group-hover:text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-[#536B83] leading-relaxed transition-colors duration-500 group-hover:text-white/95">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Integrated Product Command Center Preview */}
        <div className="bg-[#102B46] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#1769D2]/30 shadow-xl relative overflow-hidden text-white">
          
          {/* Top Command Center Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse" />
              <span className="font-bold text-white text-xs sm:text-sm font-sans">HQ Facility Telemetry Overview</span>
              <span className="text-slate-300 text-xs">• Active Monitoring</span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#7DD3FC] border border-white/15 font-semibold flex items-center gap-1.5 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#27B36A]" />
                Perimeter Status: Active
              </span>
            </div>
          </div>

          {/* 4 Real-Time Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 my-4">
            {telemetryStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#153653]/80 p-3 sm:p-3.5 rounded-xl border border-white/10 text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-slate-300 truncate">{stat.label}</span>
                    <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center shrink-0" style={{ color: stat.color }}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-[9.5px] text-slate-300 mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#27B36A]" />
                    <span>{stat.change}</span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* 2-Column Split: Compact Live Activity Feed (7 cols) + Curve & Checklist (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start">
            
            {/* LEFT: Live Visitor Log Table */}
            <div className="lg:col-span-7 bg-[#153653]/70 rounded-xl p-3.5 sm:p-4 border border-white/10 space-y-2.5 text-left">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#1688E8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Recent Arrivals</span>
                </div>
                <span className="text-[10px] text-[#27B36A] font-bold">Auto-Sync</span>
              </div>

              <div className="space-y-1.5">
                {recentVisitors.map((vis, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 bg-[#08172B]/80 rounded-lg border border-white/5 flex items-center justify-between gap-2 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6.5 h-6.5 rounded-full bg-[#10243E] text-[#1688E8] flex items-center justify-center font-bold text-[10px] shrink-0">
                        {vis.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-[11px] truncate">{vis.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{vis.company} • Host: {vis.host}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold ${
                        vis.status === 'Checked In'
                          ? 'bg-[#27B36A]/20 text-[#27B36A]'
                          : 'bg-[#1688E8]/20 text-[#1688E8]'
                      }`}>
                        {vis.status}
                      </span>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">{vis.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Building Occupancy Curve & Security Checklist */}
            <div className="lg:col-span-5 space-y-2.5 text-left">
              {/* Peak Arrival Curve Visual */}
              <div className="bg-[#0B1F38] rounded-xl p-3.5 border border-[#10243E] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold uppercase tracking-wider text-slate-300 text-[10px]">Hourly Distribution</span>
                  <span className="text-[10px] text-[#5EEAD4] font-mono">Peak: 10:15 AM</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5 items-end h-10 pt-1">
                  {[25, 45, 80, 100, 70, 40, 20].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <div 
                        className={`w-full rounded-t ${
                          i === 3 ? 'bg-gradient-to-t from-[#1769D2] to-[#27B36A]' : 'bg-[#10243E]'
                        }`} 
                        style={{ height: `${h}%` }} 
                      />
                      <span className="text-[8px] text-slate-500 font-mono">{`${9 + i}h`}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Diagnostics Checklist */}
              <div className="bg-[#0B1F38] rounded-xl p-3 border border-[#10243E] space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#27B36A]" /> Emergency Headcount Roster</span>
                  <span className="text-[#27B36A] font-semibold text-[10px]">Synced</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#27B36A]" /> Geo-Fencing Perimeter</span>
                  <span className="text-[#27B36A] font-semibold text-[10px]">Active</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Link */}
          <div className="mt-4 pt-3 border-t border-[#10243E] flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px]">
              Modern Cloud-Native Workplace Intelligence Infrastructure
            </span>
            <Link
              to="/features/analytics-dashboard"
              className="inline-flex items-center gap-1 text-[#1688E8] hover:text-[#1AAA94] font-bold transition-colors text-xs"
            >
              <span>Explore full analytics dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CommandCenterShowcase;
