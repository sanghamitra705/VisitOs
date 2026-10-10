import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Lock,
  Users,
  Clock,
  Check
} from 'lucide-react';

/**
 * SOLUTIONS EDITORIAL GRID — 2026 ARCHITECTURAL & WORKPLACE STORYTELLING
 * 
 * 6 Industry-Specific Visual Personalities Representing Physical Environments:
 * - Card 1: [WIDE 12-COL HERO] Corporate Offices (Executive Lobby Photography + Seamless Arrival)
 * - Card 2: [6-COL DARK TECH] IT Companies (R&D Lab Access + NDA Safeguards)
 * - Card 3: [6-COL LIGHT CAMPUS] Business Parks (Connected Multi-Tenant Directory & Gatehouse)
 * - Card 4: [6-COL LIGHT AZURE] Educational Campuses (Multi-Gate Parent & Faculty Verification)
 * - Card 5: [6-COL HIGH-IMPACT PHOTO] Hospitals & Healthcare (Sanitized Ward Entry & Triage)
 * - Card 6: [WIDE 12-COL COMMAND] Manufacturing & Industrial (Plant Gatehouse & PPE Briefing)
 */

export const SolutionsEditorialGrid = () => {
  return (
    <div className="space-y-6 sm:space-y-8 select-none">
      
      {/* ============================================================ */}
      {/* 1. CORPORATE OFFICES (WIDE 12-COL EXECUTIVE WORKPLACE HERO)  */}
      {/* ============================================================ */}
      <div className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#1769D2]/30 bg-[#0B1F38] text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
        {/* Background Full-Bleed Corporate Lobby Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/solutions/corporate-offices.jpg"
            alt="Modern corporate office lobby and executive reception"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F38] via-[#0B1F38]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-transparent to-[#0B1F38]/40" />
        </div>

        {/* Top Metadata */}
        <div className="p-6 sm:p-8 relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10.5px] font-mono font-bold text-[#5EEAD4]">
            <Building2 className="w-3.5 h-3.5 text-[#5EEAD4]" />
            <span>ENTERPRISE WORKPLACE • EXECUTIVE SUITES</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#27B36A] bg-[#27B36A]/20 px-3 py-1 rounded-full border border-[#27B36A]/40">
            80% FASTER CHECK-IN
          </span>
        </div>

        {/* Middle Story & Details */}
        <div className="p-6 sm:p-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight text-white font-sans">
              Corporate Offices &amp; <br />
              <span className="bg-gradient-to-r from-[#5EEAD4] via-[#38BDF8] to-[#27B36A] bg-clip-text text-transparent">
                Enterprise Headquarters
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E7EF] leading-relaxed max-w-xl font-medium">
              Deliver an executive arrival impression. Replace paper logbooks with touchless mobile check-ins, automated host meeting notifications, and confidential digital NDA archiving.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#27B36A]" /> Host 1-Tap Mobile Clearance
              </span>
              <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#27B36A]" /> Guest Wi-Fi &amp; Floor Wayfinding
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-left space-y-1 w-full max-w-xs">
              <span className="text-[8px] font-mono text-[#5EEAD4] block font-bold">EXECUTIVE STATUS</span>
              <p className="text-xs font-bold text-white">Boardroom 402 • Client Sync</p>
              <p className="text-[10px] text-[#27B36A] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Digital Pass Issued
              </p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
          <span className="text-xs text-white/60 font-mono">Industry Solution: 01</span>
          <Link
            to="/solutions/corporate-offices"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0B1F38] font-bold text-xs shadow-md hover:bg-[#5EEAD4] hover:shadow-lg transition-all group-hover:scale-102"
          >
            <span>Explore Corporate Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. DUAL INDUSTRY ROW: [6-COL IT TECH] + [6-COL BUSINESS PARK] */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* CARD 02: IT COMPANIES (DARK TECH & R&D LABS) */}
        <div className="lg:col-span-6 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#5EEAD4]/30 bg-gradient-to-br from-[#0B1F38] via-[#0F2A4A] to-[#075E66] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          <div className="p-6 sm:p-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#5EEAD4]/30 text-[10px] font-mono font-bold text-[#5EEAD4] mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#5EEAD4]" />
              <span>TECH HUBS &amp; R&amp;D LABS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-sans">
              IT Companies &amp; <br />
              <span className="text-[#5EEAD4]">Innovation Facilities</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E7EF] mt-2 leading-relaxed">
              Protect intellectual property across engineering floors with mandatory host approvals, digital NDA signatures, and contractor pass tracking.
            </p>
          </div>

          <div className="px-6 sm:px-8 py-2 relative z-10">
            <div className="bg-[#0B1F38]/90 backdrop-blur-md rounded-2xl p-4 border border-[#5EEAD4]/40 shadow-2xl text-left space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#5EEAD4]">
                <span>ENGINEERING FLOOR 3</span>
                <span className="text-[#27B36A]">NDA SIGNED</span>
              </div>
              <p className="text-xs font-bold text-white leading-tight">Contractor Pass: Apex Systems</p>
              <p className="text-[9px] text-slate-300">Geo-fenced perimeter validation active</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-xs text-white/60 font-mono">02 • TECH SECTOR</span>
            <Link
              to="/solutions/it-companies"
              className="text-xs font-bold text-[#5EEAD4] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore IT Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CARD 03: BUSINESS PARKS & MULTI-TENANT (CONNECTED CAMPUS) */}
        <div className="lg:col-span-6 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#16A6A1]/30 bg-gradient-to-b from-[#F4FAFF] via-[#E6F6F3] to-[#DBF5EA] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          <div className="p-6 sm:p-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#16A6A1]/20 text-[10px] font-mono font-bold text-[#0B8580] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#0B8580]" />
              <span>MULTI-TENANT ECOSYSTEM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#10243E] tracking-tight leading-tight font-sans">
              Business Parks &amp; <br />
              <span className="bg-gradient-to-r from-[#0B8580] to-[#1769D2] bg-clip-text text-transparent">
                Multi-Tenant Facilities
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5F7185] mt-2 leading-relaxed">
              Coordinate shared lobby reception, 48+ tenant directories, and central gatehouse entry under one secure, isolated platform.
            </p>
          </div>

          <div className="px-6 sm:px-8 py-2 relative z-10">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#16A6A1]/25 text-left space-y-1.5 text-[8.5px]">
              <div className="flex items-center justify-between p-2 bg-[#F3F9FD] rounded-xl border border-slate-100">
                <span className="font-bold text-[#10243E]">Tower A • Suite 400 (Acme Corp)</span>
                <span className="text-[#1769D2] font-bold">Cleared</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#F3F9FD] rounded-xl border border-slate-100">
                <span className="font-bold text-[#10243E]">Tower B • Suite 210 (Fintech)</span>
                <span className="text-[#27B36A] font-bold">Cleared</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-[#DCE6EF] flex items-center justify-between relative z-10">
            <span className="text-xs font-mono font-bold text-[#0B8580]">03 • COMMERCIAL PARKS</span>
            <Link
              to="/solutions/business-parks-multi-tenant"
              className="text-xs font-bold text-[#0B8580] hover:text-[#10243E] flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Business Parks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 3. DUAL ROW: [6-COL CAMPUS EDUCATION] + [6-COL HEALTHCARE]   */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* CARD 04: EDUCATIONAL INSTITUTIONS & CAMPUSES */}
        <div className="lg:col-span-6 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#1769D2]/25 bg-gradient-to-b from-[#F4FAFF] via-[#E8F5FF] to-[#E3F6EA] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          <div className="p-6 sm:p-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#1769D2]/20 text-[10px] font-mono font-bold text-[#1769D2] mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-[#1769D2]" />
              <span>CAMPUS SAFETY &amp; ACADEMY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#10243E] tracking-tight leading-tight font-sans">
              Educational Institutions <br />
              <span className="bg-gradient-to-r from-[#1769D2] to-[#27B36A] bg-clip-text text-transparent">
                &amp; University Campuses
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5F7185] mt-2 leading-relaxed">
              Maintain clear oversight of parent check-ins, guest lecturers, and maintenance contractors across multiple synchronized entrance gates.
            </p>
          </div>

          <div className="px-6 sm:px-8 py-2 relative z-10">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#1769D2]/20 text-left space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#1769D2]">
                <span>CAMPUS GATE 2 • MAIN QUAD</span>
                <span className="text-[#27B36A]">PHOTO VERIFIED</span>
              </div>
              <p className="text-xs font-bold text-[#10243E]">Dr. Jonathan Davis (Guest Lecturer)</p>
              <p className="text-[9px] text-[#5F7185]">Faculty Host: Dean of Sciences</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-[#DCE6EF] flex items-center justify-between relative z-10">
            <span className="text-xs font-mono font-bold text-[#1769D2]">04 • EDUCATION</span>
            <Link
              to="/solutions/educational-institutions-campuses"
              className="text-xs font-bold text-[#1769D2] hover:text-[#10243E] flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Campus Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CARD 05: HOSPITALS & HEALTHCARE (HIGH-IMPACT CLINICAL PHOTO) */}
        <div className="lg:col-span-6 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/20 bg-[#0B1F38] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/solutions/healthcare.jpg"
              alt="Modern hospital reception and patient ward access control"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/80 to-[#0B1F38]/35" />
          </div>

          <div className="p-6 sm:p-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#5EEAD4] mb-3">
              <Stethoscope className="w-3.5 h-3.5 text-[#5EEAD4]" />
              <span>CLINICAL TRIAGE &amp; ACCESS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-sans">
              Hospitals &amp; <br />
              <span className="text-[#5EEAD4]">Healthcare Facilities</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E7EF] mt-2 leading-relaxed">
              Safeguard patient privacy and regulate clinical ward access with digital registration, visitor health badges, and emergency evacuation headcounts.
            </p>
          </div>

          <div className="px-6 sm:px-8 py-2 relative z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-xl text-left text-[#10243E]">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#0B8580]">
                <span>WING B • ICU VISITOR</span>
                <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">SANITIZED</span>
              </div>
              <p className="text-xs font-bold mt-0.5">Ward Pass Active • Time-Limited</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-xs text-white/60 font-mono">05 • HEALTHCARE</span>
            <Link
              to="/solutions/hospitals-healthcare"
              className="text-xs font-bold text-[#5EEAD4] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Healthcare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. MANUFACTURING & INDUSTRIAL (FULL 12-COL COMMAND HERO)     */}
      {/* ============================================================ */}
      <div className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#4ADE80]/30 bg-gradient-to-br from-[#091A2F] via-[#0D3246] to-[#0A4E44] text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/solutions/manufacturing.jpg"
            alt="Manufacturing plant gatehouse and industrial safety access"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091A2F] via-[#091A2F]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091A2F] via-transparent to-[#091A2F]/50" />
        </div>

        <div className="p-6 sm:p-8 relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10.5px] font-mono font-bold text-[#4ADE80]">
            <Factory className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>INDUSTRIAL PLANT &amp; FACILITY GATEHOUSE</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#4ADE80] bg-[#4ADE80]/20 px-3 py-1 rounded-full border border-[#4ADE80]/40">
            100% PPE COMPLIANT
          </span>
        </div>

        <div className="p-6 sm:p-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight text-white font-sans">
              Manufacturing &amp; <br />
              <span className="bg-gradient-to-r from-[#4ADE80] to-[#5EEAD4] bg-clip-text text-transparent">
                Industrial Facilities
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E7EF] leading-relaxed max-w-xl font-medium">
              Enforce strict gatehouse perimeter security, contractor safety briefings, digital PPE acknowledgements, and instant emergency roll-call headcounts for industrial operations.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#4ADE80]" /> Contractor Safety Induction
              </span>
              <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#4ADE80]" /> Instant 1-Click Evacuation Roll-Call
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="bg-[#091A2F]/90 backdrop-blur-md p-4 rounded-2xl border border-[#4ADE80]/40 text-left space-y-1 w-full max-w-xs shadow-2xl">
              <span className="text-[8px] font-mono text-[#4ADE80] block font-bold">PLANT GATE 1</span>
              <p className="text-xs font-bold text-white">Vendor: Apex Industrial</p>
              <p className="text-[10px] text-[#4ADE80] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Safety Briefing Verified
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
          <span className="text-xs text-white/60 font-mono">06 • INDUSTRIAL DEFENSE</span>
          <Link
            to="/solutions/manufacturing-industrial"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#091A2F] font-bold text-xs shadow-md hover:bg-[#4ADE80] hover:shadow-lg transition-all group-hover:scale-102"
          >
            <span>Explore Manufacturing Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SolutionsEditorialGrid;
