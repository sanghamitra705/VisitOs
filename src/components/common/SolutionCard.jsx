import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MapPin,
  Lock,
  Users,
  Clock,
  FileCheck,
  Check
} from 'lucide-react';

/**
 * 6 BESPOKE SOLUTION CARD PERSONALITIES
 * Representing Real-World Industries, Workplaces, and People:
 * 
 * 1. Corporate Offices: Featured Full-Bleed Realistic Photography + Executive Arrival
 * 2. IT Companies: Dark Premium Technology Card + R&D Workspace Safeguards
 * 3. Business Parks: Connected Multi-Tenant Commercial Campus Card
 * 4. Educational Campuses: Light Mint/Azure Campus Safety & Multi-Gate Card
 * 5. Hospitals & Healthcare: Clean Healthcare Environment & Patient Privacy Card
 * 6. Manufacturing & Industrial: Dark Industrial Security & PPE Compliance Card
 */

export const SOLUTION_CONFIGS = {
  // ─────────────────────────────────────────────────────────────
  // 1. Corporate Offices (Executive Workplace & Headquarters)
  // ─────────────────────────────────────────────────────────────
  'corporate-offices': {
    family: 'featured-image',
    microLabel: 'CORPORATE SECURITY',
    accentColor: '#1769D2',
    accentColorAlt: '#16A6A1',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #10243E 50%, #075E66 100%)',
    borderColor: 'rgba(23, 105, 210, 0.35)',
    photo: '/assets/solutions/corporate-offices.jpg',
    chipText: 'Enterprise HQ',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 group/art select-none">
        <img
          src="/assets/solutions/corporate-offices.jpg"
          alt="Modern corporate office lobby and executive reception"
          className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/40 to-transparent" />

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#5EEAD4] flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-ping" />
          <span>CORPORATE SECURITY</span>
        </div>

        {/* Floating Reception Verification Pill */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xl text-left">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#1769D2]">
            <span>EXECUTIVE SUITE 04</span>
            <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">VERIFIED</span>
          </div>
          <p className="text-[11px] font-bold text-[#10243E] mt-0.5 truncate">Touchless Check-In • Host Notified</p>
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 2. IT Companies (Tech Hubs & Innovation Labs)
  // ─────────────────────────────────────────────────────────────
  'it-companies': {
    family: 'dark-tech',
    microLabel: 'DIGITAL WORKPLACE',
    accentColor: '#5EEAD4',
    accentColorAlt: '#1688E8',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #0F2A4A 50%, #075E66 100%)',
    borderColor: 'rgba(94, 234, 212, 0.30)',
    textColor: '#FFFFFF',
    descColor: '#D8E7EF',
    photo: '/assets/solutions/it-companies.jpg',
    chipText: 'Tech & R&D Labs',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-black/30 border border-white/15 backdrop-blur-xs select-none">
        {/* R&D Lab Authorization Card */}
        <div className="relative w-full max-w-[240px] bg-[#0B1F38]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-[#5EEAD4]/40 text-left transform group-hover:-translate-y-1 transition-transform duration-300 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-700 text-[8px] font-mono font-bold text-[#5EEAD4]">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#5EEAD4]" /> R&D ACCESS CONTROL
            </span>
            <span className="text-[#27B36A] bg-[#27B36A]/10 px-1.5 py-0.5 rounded">RESTRICTED</span>
          </div>

          <div className="space-y-1 text-white">
            <p className="text-[11px] font-bold leading-tight">Engineering Floor 3</p>
            <p className="text-[8.5px] text-slate-300">Mandatory NDA & Host Sign-Off</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-700/60 text-[8px]">
            <div className="bg-slate-800/80 p-1.5 rounded-lg text-center border border-slate-700">
              <span className="text-slate-400 block">NDA STATUS</span>
              <span className="text-[#27B36A] font-bold">SIGNED</span>
            </div>
            <div className="bg-slate-800/80 p-1.5 rounded-lg text-center border border-slate-700">
              <span className="text-slate-400 block">HOST APPR</span>
              <span className="text-[#5EEAD4] font-bold">1-TAP OK</span>
            </div>
          </div>
        </div>

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#5EEAD4] shadow-sm">
          DIGITAL WORKPLACE
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Business Parks & Multi-Tenant (Connected Campus Ecosystem)
  // ─────────────────────────────────────────────────────────────
  'business-parks-multi-tenant': {
    family: 'light-connected',
    microLabel: 'MULTI-TENANT',
    accentColor: '#0B8580',
    accentColorAlt: '#1769D2',
    gradient: 'linear-gradient(145deg, #EEF7FF 0%, #E2F4F7 50%, #DCF6EC 100%)',
    borderColor: 'rgba(22, 166, 161, 0.30)',
    photo: '/assets/solutions/business-parks.jpg',
    chipText: 'Commercial Parks',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-gradient-to-br from-[#1769D2]/10 via-[#16A6A1]/10 to-[#27B36A]/10 border border-[#16A6A1]/20 select-none">
        {/* Multi-Tenant Directory Stack */}
        <div className="relative w-[210px] sm:w-[230px] bg-white rounded-2xl p-3.5 shadow-xl border border-[#16A6A1]/30 text-left transform group-hover:-translate-y-1 transition-transform duration-300 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[8.5px] font-mono font-bold text-[#0B8580]">CENTRAL GATEHOUSE</span>
            <span className="text-[7.5px] font-bold bg-[#16A6A1]/10 text-[#0B8580] px-1.5 py-0.5 rounded">48 TENANTS</span>
          </div>

          <div className="space-y-1.5 text-[8.5px]">
            <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
              <span className="font-bold text-[#10243E]">Tower A • Suite 400</span>
              <span className="text-[#1769D2] font-bold">Acme Corp</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
              <span className="font-bold text-[#10243E]">Tower B • Suite 210</span>
              <span className="text-[#27B36A] font-bold">Fintech Labs</span>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[7.5px] text-[#5F7185]">
            <span>Tenant Data Isolated</span>
            <ShieldCheck className="w-3 h-3 text-[#27B36A]" />
          </div>
        </div>

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#16A6A1]/20 text-[9px] font-mono font-bold text-[#0B8580] shadow-xs">
          MULTI-TENANT
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Educational Institutions & Campuses (Campus Safety & Multi-Gate)
  // ─────────────────────────────────────────────────────────────
  'educational-institutions-campuses': {
    family: 'light-campus',
    microLabel: 'CAMPUS SAFETY',
    accentColor: '#1769D2',
    accentColorAlt: '#27B36A',
    gradient: 'linear-gradient(145deg, #F4FAFF 0%, #E8F7F5 50%, #E4F7EA 100%)',
    borderColor: 'rgba(23, 105, 210, 0.25)',
    photo: '/assets/solutions/campuses.jpg',
    chipText: 'Campus & Academy',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-gradient-to-br from-[#1769D2]/10 via-[#16A6A1]/10 to-[#27B36A]/10 border border-[#1769D2]/20 select-none">
        {/* Campus Multi-Gate Pass */}
        <div className="relative w-[210px] sm:w-[230px] bg-white rounded-2xl p-3.5 shadow-xl border border-[#1769D2]/30 text-left transform group-hover:-translate-y-1 transition-transform duration-300 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[8.5px] font-mono font-bold text-[#1769D2]">CAMPUS PASS</span>
            <span className="text-[7.5px] font-bold bg-[#27B36A] text-white px-2 py-0.5 rounded-full">VERIFIED</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1769D2] to-[#27B36A] text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-xs">
              JD
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#10243E] leading-tight truncate">Dr. Jonathan Davis</p>
              <p className="text-[8.5px] text-[#5F7185] truncate">Guest Lecturer • Hall 4</p>
            </div>
          </div>

          <div className="pt-1.5 border-t border-dashed border-slate-200 flex items-center justify-between text-[8px] text-[#1769D2] font-semibold">
            <span>Gate 2 • Main Quad</span>
            <span>Photo Verified ✓</span>
          </div>
        </div>

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#1769D2]/20 text-[9px] font-mono font-bold text-[#1769D2] shadow-xs">
          CAMPUS SAFETY
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Hospitals & Healthcare (Patient Privacy & Triage Access)
  // ─────────────────────────────────────────────────────────────
  'hospitals-healthcare': {
    family: 'image-healthcare',
    microLabel: 'HEALTHCARE ACCESS',
    accentColor: '#16A6A1',
    accentColorAlt: '#27B36A',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #064E52 50%, #075E66 100%)',
    borderColor: 'rgba(22, 166, 161, 0.35)',
    photo: '/assets/solutions/healthcare.jpg',
    chipText: 'Healthcare & Clinics',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[250px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 group/art select-none">
        <img
          src="/assets/solutions/healthcare.jpg"
          alt="Modern hospital reception and clinical visitor verification"
          className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/40 to-transparent" />

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#5EEAD4] flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-ping" />
          <span>HEALTHCARE ACCESS</span>
        </div>

        {/* Floating Ward Entry Card */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xl text-left">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#0B8580]">
            <span>WING B • ICU VISITATION</span>
            <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">SANITIZED</span>
          </div>
          <p className="text-[11px] font-bold text-[#10243E] mt-0.5 truncate">Patient Ward Access Pass Active</p>
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Manufacturing & Industrial (Plant Safety & Contractor Access)
  // ─────────────────────────────────────────────────────────────
  'manufacturing-industrial': {
    family: 'dark-industrial',
    microLabel: 'INDUSTRIAL SECURITY',
    accentColor: '#4ADE80',
    accentColorAlt: '#16A6A1',
    gradient: 'linear-gradient(145deg, #091A2F 0%, #0D3246 55%, #0A4E44 100%)',
    borderColor: 'rgba(74, 222, 128, 0.30)',
    textColor: '#FFFFFF',
    descColor: '#D8E7EF',
    photo: '/assets/solutions/manufacturing.jpg',
    chipText: 'Industrial & Plant',
    renderVisual: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-black/30 border border-white/15 backdrop-blur-xs select-none">
        {/* Plant Gatehouse Safety Clearance */}
        <div className="relative w-full max-w-[240px] bg-[#091A2F]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-[#4ADE80]/40 text-left transform group-hover:-translate-y-1 transition-transform duration-300 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-700 text-[8px] font-mono font-bold text-[#4ADE80]">
            <span className="flex items-center gap-1">
              <Factory className="w-3 h-3 text-[#4ADE80]" /> PLANT GATE 1
            </span>
            <span className="text-[#4ADE80] bg-[#4ADE80]/10 px-1.5 py-0.5 rounded">CLEARED</span>
          </div>

          <div className="space-y-1 text-white">
            <p className="text-[11px] font-bold leading-tight">Contractor: Apex Electrical</p>
            <p className="text-[8.5px] text-slate-300">Safety Briefing & PPE Verified</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-700/60 text-[8px]">
            <div className="bg-slate-800/80 p-1.5 rounded-lg text-center border border-slate-700">
              <span className="text-slate-400 block">PPE CHECK</span>
              <span className="text-[#4ADE80] font-bold">COMPLIANT</span>
            </div>
            <div className="bg-slate-800/80 p-1.5 rounded-lg text-center border border-slate-700">
              <span className="text-slate-400 block">PASS TYPE</span>
              <span className="text-white font-bold">VENDOR 8H</span>
            </div>
          </div>
        </div>

        {/* Micro Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#091A2F]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#4ADE80] shadow-sm">
          INDUSTRIAL SECURITY
        </div>
      </div>
    )
  }
};

/**
 * Reusable SolutionCard with Industry-Specific Visual Personalities
 */
export const SolutionCard = ({ 
  solution, 
  variant = 'grid', 
  layoutStyle = 'standard', // 'standard' | 'wide'
  isFeatured = false,
  className = '' 
}) => {
  if (!solution) return null;

  const key = solution.slug || solution.id || 'corporate-offices';
  const config = SOLUTION_CONFIGS[key] || SOLUTION_CONFIGS['corporate-offices'];
  const destination = solution.path || `/solutions/${solution.slug}`;
  const isDarkFamily = config.family === 'dark-tech' || config.family === 'dark-industrial' || config.family === 'featured-image' || config.family === 'image-healthcare';

  // ─────────────────────────────────────────────────────────────
  // 1. COMPACT VARIANT (For Solution Detail Related Solutions)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'compact') {
    return (
      <Link
        to={destination}
        className={`group relative rounded-[24px] p-5 sm:p-6 border flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer shadow-sm hover:shadow-xl ${className}`}
        style={{
          background: isDarkFamily 
            ? config.gradient 
            : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
          borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
        }}
      >
        <div className="relative z-10 space-y-3">
          {config.renderVisual && config.renderVisual()}

          <div className="space-y-1 text-left">
            <h4 
              className="text-base sm:text-lg font-black font-sans tracking-tight leading-snug group-hover:text-[#1769D2] transition-colors"
              style={{ color: isDarkFamily ? '#FFFFFF' : '#10243E' }}
            >
              {solution.title}
            </h4>
            <p 
              className="text-xs leading-relaxed line-clamp-2"
              style={{ color: isDarkFamily ? config.descColor || '#D8E7EF' : '#5F7185' }}
            >
              {solution.tagline || solution.description}
            </p>
          </div>
        </div>

        <div 
          className="relative z-10 pt-3.5 mt-3.5 border-t border-black/10 flex items-center justify-between text-xs font-bold"
          style={{ color: isDarkFamily ? config.accentColor : config.accentColor }}
        >
          <span className="group-hover:underline">Explore Solution</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-250 ease-out" />
        </div>
      </Link>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 2. WIDE FEATURED VARIANT (For Large Anchor Row on /solutions)
  // ─────────────────────────────────────────────────────────────
  if (layoutStyle === 'wide') {
    return (
      <div
        className={`group relative rounded-[28px] p-6 sm:p-8 border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-md hover:shadow-2xl ${className}`}
        style={{
          background: isDarkFamily 
            ? config.gradient 
            : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
          borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Text & Metrics Column */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#5EEAD4]">
              <Sparkles className="w-3 h-3 text-[#5EEAD4]" />
              <span>{config.microLabel}</span>
            </div>

            <h3 
              className="text-2xl sm:text-3xl font-black font-sans tracking-tight leading-tight"
              style={{ color: isDarkFamily ? '#FFFFFF' : '#10243E' }}
            >
              {solution.title}
            </h3>

            <p 
              className="text-sm leading-relaxed"
              style={{ color: isDarkFamily ? config.descColor || '#E2F1FF' : '#5F7185' }}
            >
              {solution.tagline || solution.description}
            </p>

            {solution.metric && (
              <div 
                className="p-3.5 rounded-2xl border backdrop-blur-xs space-y-0.5"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.10)',
                  borderColor: 'rgba(255, 255, 255, 0.20)'
                }}
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5EEAD4]">
                  Proven Outcome
                </p>
                <p className="text-sm font-bold text-white">
                  {solution.metric}
                </p>
              </div>
            )}

            {solution.keyFeatures && (
              <div className="space-y-1.5 pt-1">
                {solution.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link
                to={destination}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#10243E] font-bold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <span>Explore {solution.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6">
            {config.renderVisual && config.renderVisual()}
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 3. STANDARD GRID SHOWCASE VARIANT
  // ─────────────────────────────────────────────────────────────
  return (
    <div
      className={`group relative rounded-[26px] p-6 sm:p-7 border flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-md hover:shadow-2xl ${className}`}
      style={{
        background: isDarkFamily 
          ? config.gradient 
          : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
        borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
      }}
    >
      <div className="relative z-10 space-y-4">
        {/* Industry Visual Scene */}
        {config.renderVisual && config.renderVisual()}

        {/* Title & Description */}
        <div className="space-y-1.5 text-left">
          <h3 
            className="text-lg sm:text-xl font-black font-sans tracking-tight leading-snug"
            style={{ color: isDarkFamily ? '#FFFFFF' : '#10243E' }}
          >
            {solution.title}
          </h3>
          <p 
            className="text-xs sm:text-[13px] leading-relaxed"
            style={{ color: isDarkFamily ? config.descColor || '#D8E7EF' : '#5F7185' }}
          >
            {solution.tagline || solution.description}
          </p>
        </div>

        {/* Proven Outcome Chip */}
        {solution.metric && (
          <div 
            className="p-3 rounded-2xl border backdrop-blur-xs space-y-0.5 text-left"
            style={{
              backgroundColor: isDarkFamily ? 'rgba(11, 31, 56, 0.60)' : 'rgba(255, 255, 255, 0.85)',
              borderColor: isDarkFamily ? 'rgba(94, 234, 212, 0.25)' : 'rgba(220, 230, 239, 0.8)'
            }}
          >
            <p 
              className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ color: isDarkFamily ? config.accentColor : config.accentColor }}
            >
              Proven Outcome
            </p>
            <p 
              className="text-xs font-semibold leading-snug"
              style={{ color: isDarkFamily ? '#FFFFFF' : '#10243E' }}
            >
              {solution.metric}
            </p>
          </div>
        )}

        {/* Key Tailored Safeguards */}
        {solution.keyFeatures && solution.keyFeatures.length > 0 && (
          <div className="space-y-1.5 pt-1 text-left">
            <p 
              className="text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ color: isDarkFamily ? '#A0C4D8' : '#5A738E' }}
            >
              Tailored Safeguards:
            </p>
            <div className="space-y-1.5">
              {solution.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                <div 
                  key={fIdx} 
                  className="flex items-start gap-2 text-xs"
                  style={{ color: isDarkFamily ? '#FFFFFF' : '#1D3249' }}
                >
                  <Check 
                    className="w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[2.5]" 
                    style={{ color: isDarkFamily ? config.accentColor : '#27B36A' }} 
                  />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA Button */}
      <div className="relative z-10 pt-4 mt-5 border-t border-black/10 flex items-center justify-between text-xs">
        <span 
          className="text-[11px] font-medium"
          style={{ color: isDarkFamily ? '#A0C4D8' : '#5A738E' }}
        >
          Sector: <strong className="font-bold" style={{ color: isDarkFamily ? '#FFFFFF' : '#10243E' }}>{config.chipText}</strong>
        </span>

        <Link
          to={destination}
          className="font-bold flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 group-hover:scale-105"
          style={{
            backgroundColor: isDarkFamily ? '#FFFFFF' : '#EDF6FC',
            color: isDarkFamily ? '#10243E' : config.accentColor
          }}
        >
          <span>Explore Solution</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-250 ease-out" />
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
