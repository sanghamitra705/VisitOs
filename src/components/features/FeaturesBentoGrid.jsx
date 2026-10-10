import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  QrCode, 
  ShieldCheck, 
  Users, 
  BellRing, 
  History, 
  Lock, 
  BarChart3, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  FileCheck,
  Check,
  Smartphone,
  Shield,
  Activity,
  UserCheck,
  Calendar,
  Layers,
  FileText
} from 'lucide-react';

/**
 * FEATURES BENTO GRID — 2026 EDITORIAL ART-DIRECTED ARCHITECTURE
 * 
 * 8 Bespoke Compositions that tell the story of VisitOS Product Capabilities:
 * - Card 1: [WIDE 8-COL HERO] QR-Based Visitor Registration (Full-Bleed Photographic Reception + Laser Scan + Live Pass)
 * - Card 2: [TALL 4-COL] Digital Visitor Passes (Oversized Realistic Smartphone Pass Extending Off-Canvas)
 * - Card 3: [4-COL] Real-Time Notifications (Multi-Channel Live Stream Alert Stack)
 * - Card 4: [4-COL] Employee Approval Workflows (Interactive Host 1-Tap Authorization Modal)
 * - Card 5: [4-COL] Visitor History & Reporting (Architectural Audit Timeline Ledger)
 * - Card 6: [7-COL] Analytics Dashboard (Dark Obsidian Command Center with Live Telemetry & Surge Charts)
 * - Card 7: [5-COL] Secure Visitor Data Management (Deep Cyber Fortress with TLS 1.3 / AES-256 Cipher Badge)
 * - Card 8: [FULL 12-COL WIDE] Geo-Fencing Perimeter Verification (High-Impact Campus Photo + GPS Satellite Radar Target)
 */

export const FeaturesBentoGrid = () => {
  return (
    <div className="space-y-6 sm:space-y-8 select-none">
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* TOP ROW: [8-COL HERO QR] + [4-COL TALL DIGITAL PASS]           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* ============================================================ */}
        {/* CARD 01: QR-BASED VISITOR REGISTRATION (8-COL HERO ANCHOR)   */}
        {/* ============================================================ */}
        <div className="lg:col-span-8 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#1769D2]/30 bg-[#0B1F38] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
          {/* Background Full-Bleed Photography */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/features/qr-registration/qr-registration-hero.jpg"
              alt="Visitor scanning QR code at modern reception kiosk"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Cinematic Gradient Overlays for Extreme Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F38] via-[#0B1F38]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-transparent to-[#0B1F38]/40" />
          </div>

          {/* Top Metadata Row */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10.5px] font-mono font-bold text-[#5EEAD4]">
              <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-ping" />
              <span>CORE ANCHOR • TOUCHLESS ARRIVAL</span>
            </div>
            <span className="text-xs font-mono font-bold text-white/70 bg-black/30 px-3 py-1 rounded-full border border-white/10">
              &lt;15s CHECK-IN
            </span>
          </div>

          {/* Middle Story & Visual Scanner Overlay */}
          <div className="relative z-10 px-6 sm:px-8 py-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Typography */}
            <div className="md:col-span-7 space-y-3 text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-tight text-white font-sans">
                QR-Based Visitor <br />
                <span className="bg-gradient-to-r from-[#5EEAD4] via-[#38BDF8] to-[#27B36A] bg-clip-text text-transparent">
                  Registration
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D8E7EF] leading-relaxed max-w-md font-medium">
                Guests scan a lobby QR code with their phone camera to complete photo capture, NDA sign-off, and host check-in with zero mobile app downloads.
              </p>

              {/* Instant Spec Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#27B36A]" /> Zero App Store Downloads
                </span>
                <span className="text-[11px] font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#27B36A]" /> Instant Host SMS &amp; Email
                </span>
              </div>
            </div>

            {/* Right Scanning Frame Widget */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-44 sm:w-48 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/30 shadow-2xl text-center space-y-2">
                <div className="relative w-28 h-28 mx-auto bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden shadow-inner">
                  <QrCode className="w-full h-full text-[#0B1F38]" />
                  <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#27B36A] to-transparent shadow-[0_0_10px_#27B36A] animate-pulse top-1/2 -translate-y-1/2" />
                  <div className="absolute inset-1 border border-dashed border-[#1769D2]/40 rounded-lg pointer-events-none" />
                </div>
                <div className="bg-black/40 rounded-lg p-1.5 text-[8.5px] font-mono text-[#5EEAD4] font-bold">
                  SCAN WITH SMARTPHONE
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="relative z-10 p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between">
            <span className="text-xs text-white/60 font-mono">
              Module: 01 • Front Desk Excellence
            </span>
            <Link
              to="/features/qr-visitor-registration"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0B1F38] font-bold text-xs shadow-md hover:bg-[#5EEAD4] hover:shadow-lg transition-all group-hover:scale-102"
            >
              <span>Explore QR Engine</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 02: DIGITAL VISITOR PASSES (4-COL OVERSIZED PHONE PASS)  */}
        {/* ============================================================ */}
        <div className="lg:col-span-4 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#1769D2]/25 bg-gradient-to-b from-[#F4FAFF] via-[#E8F5FF] to-[#DCF5EB] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
          
          {/* Top Header */}
          <div className="p-6 sm:p-7 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#1769D2]/20 text-[10px] font-mono font-bold text-[#1769D2] shadow-2xs mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1769D2]" />
              <span>DIGITAL CREDENTIALS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#10243E] tracking-tight leading-snug font-sans">
              Digital Visitor <br />
              <span className="bg-gradient-to-r from-[#1769D2] to-[#16A6A1] bg-clip-text text-transparent">
                Passes
              </span>
            </h3>
            <p className="text-xs text-[#5F7185] mt-1.5 leading-relaxed">
              Timestamped mobile badges with active validity countdowns and photo verification.
            </p>
          </div>

          {/* Middle: Oversized Realistic Smartphone Pass Component */}
          <div className="relative px-6 py-2 flex items-center justify-center select-none">
            <div className="relative w-52 bg-white rounded-2xl p-3.5 shadow-2xl border border-[#1769D2]/30 text-left transform group-hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-[8px] font-mono font-bold text-[#10243E]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-pulse" />
                  VISIT PASS #8942
                </span>
                <span className="bg-[#27B36A] text-white px-2 py-0.5 rounded-full text-[7.5px] font-bold">ACTIVE</span>
              </div>

              <div className="flex items-center gap-2.5 my-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1769D2] to-[#1688E8] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  AM
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-[#10243E] leading-tight truncate">Alex Mercer</p>
                  <p className="text-[9px] text-[#5F7185] truncate">Host: David Chen (Acme)</p>
                </div>
              </div>

              <div className="pt-2 border-t border-dashed border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[7.5px] text-[#5F7185] block font-mono">COUNTDOWN</span>
                  <span className="text-[10px] font-mono font-bold text-[#1769D2]">02:45:00 REMAINING</span>
                </div>
                <div className="w-7 h-7 bg-[#EDF6FC] rounded-lg p-1 flex items-center justify-center border border-[#1769D2]/20">
                  <QrCode className="w-full h-full text-[#10243E]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-6 sm:p-7 pt-4 border-t border-[#DCE6EF] flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono font-bold text-[#1769D2]">02 • ACCESS CONTROL</span>
            <Link
              to="/features/digital-visitor-passes"
              className="text-xs font-bold text-[#1769D2] hover:text-[#10243E] flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Passes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MIDDLE ROW: 3 DIVERSE STORIES (4-COL + 4-COL + 4-COL)         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        
        {/* ============================================================ */}
        {/* CARD 03: REAL-TIME NOTIFICATIONS (PHOTO + LIVE DISPATCH)     */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] overflow-hidden border border-white/20 bg-[#0B1F38] text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[420px]">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/solutions/corporate-offices.jpg"
              alt="Employee receiving real-time visitor notifications"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/75 to-[#0B1F38]/30" />
          </div>

          <div className="p-6 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#38BDF8] mb-3">
              <BellRing className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>SUB-200MS DISPATCH</span>
            </div>
            <h3 className="text-xl font-black text-white tracking-tight leading-snug font-sans">
              Real-Time <br />
              <span className="text-[#38BDF8]">Notifications</span>
            </h3>
            <p className="text-xs text-[#D8E7EF] mt-1.5 leading-relaxed">
              Omnichannel arrival alerts dispatched across SMS, Email, and Slack instantly.
            </p>
          </div>

          {/* Live Alert Stack */}
          <div className="px-6 py-2 relative z-10 space-y-2">
            <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xl text-left text-[#10243E]">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#1688E8]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-ping" />
                  GUEST IN LOBBY
                </span>
                <span className="text-[#27B36A]">NOW</span>
              </div>
              <p className="text-xs font-bold mt-0.5 truncate">Elena Rostova • Design Review</p>
            </div>
          </div>

          <div className="p-6 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono text-white/60">03 • NOTIFICATIONS</span>
            <Link
              to="/features/real-time-notifications"
              className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Alerts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 04: EMPLOYEE APPROVAL WORKFLOWS (BRIGHT HERO MODAL)     */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] overflow-hidden border border-white/30 bg-gradient-to-br from-[#075E66] via-[#087F83] to-[#27B36A] text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[420px]">
          
          <div className="p-6 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-mono font-bold text-white mb-3">
              <Users className="w-3.5 h-3.5 text-white" />
              <span>1-TAP AUTHORIZATION</span>
            </div>
            <h3 className="text-xl font-black text-white tracking-tight leading-snug font-sans">
              Employee Approval <br />
              <span className="text-[#A7F3D0]">Workflows</span>
            </h3>
            <p className="text-xs text-[#D8F7F0] mt-1.5 leading-relaxed">
              Empower employees to authorize, decline, or delegate arriving guests from their phone.
            </p>
          </div>

          {/* Interactive Mobile Prompt */}
          <div className="px-6 py-2 relative z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white text-left text-[#10243E] space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#087F83]">
                <span>VISITOR REQUEST</span>
                <span className="text-[#27B36A] bg-[#27B36A]/10 px-1.5 py-0.5 rounded">PENDING</span>
              </div>
              <p className="text-xs font-bold leading-tight">Sarah Jenkins at Gate 1</p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="py-1.5 rounded-xl bg-[#27B36A] text-white text-[10px] font-bold text-center flex items-center justify-center gap-1 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" /> Approve
                </div>
                <div className="py-1.5 rounded-xl bg-slate-100 text-slate-700 text-[10px] font-bold text-center">
                  Decline
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 pt-4 border-t border-white/20 flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono text-white/80">04 • SECURITY GATE</span>
            <Link
              to="/features/employee-approval-workflows"
              className="text-xs font-bold text-white hover:text-[#A7F3D0] flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Workflows</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 05: VISITOR HISTORY & REPORTING (ARCHITECTURAL TIMELINE) */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] overflow-hidden border border-[#1769D2]/25 bg-gradient-to-b from-[#F4FAFF] via-[#EBF4FE] to-[#E3F6ED] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[420px]">
          
          <div className="p-6 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#1769D2]/20 text-[10px] font-mono font-bold text-[#1769D2] mb-3">
              <History className="w-3.5 h-3.5 text-[#1769D2]" />
              <span>COMPLIANCE LOGS</span>
            </div>
            <h3 className="text-xl font-black text-[#10243E] tracking-tight leading-snug font-sans">
              Visitor History &amp; <br />
              <span className="bg-gradient-to-r from-[#1769D2] to-[#27B36A] bg-clip-text text-transparent">
                Reporting
              </span>
            </h3>
            <p className="text-xs text-[#5F7185] mt-1.5 leading-relaxed">
              Searchable historical records with 1-click CSV &amp; PDF statutory audit export.
            </p>
          </div>

          {/* Stacked Ledger Timeline */}
          <div className="px-6 py-2 relative z-10">
            <div className="bg-white rounded-2xl p-3 shadow-xl border border-[#1769D2]/25 text-left space-y-1.5 text-[8.5px]">
              <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
                <span className="font-bold text-[#10243E]">09:30 AM • Ingress</span>
                <span className="text-[#27B36A] font-bold">Checked In ✓</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
                <span className="font-bold text-[#10243E]">11:45 AM • Egress</span>
                <span className="text-[#1769D2] font-bold">Logged Out</span>
              </div>
            </div>
          </div>

          <div className="p-6 pt-4 border-t border-[#DCE6EF] flex items-center justify-between relative z-10">
            <span className="text-[11px] font-mono font-bold text-[#1769D2]">05 • AUDIT TRAIL</span>
            <Link
              to="/features/visitor-history-reporting"
              className="text-xs font-bold text-[#1769D2] hover:text-[#10243E] flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Reports</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* BOTTOM ROW: [7-COL ANALYTICS] + [5-COL SECURE DATA]           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* ============================================================ */}
        {/* CARD 06: ANALYTICS DASHBOARD (7-COL COMMAND CENTER)          */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#38BDF8]/30 bg-[#0B1F38] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          
          <div className="p-6 sm:p-8 relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#38BDF8] mb-3">
                <BarChart3 className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>ENTERPRISE COMMAND CENTER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight font-sans">
                Analytics <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#5EEAD4] to-[#27B36A] bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#27B36A] bg-[#27B36A]/15 px-3 py-1 rounded-full border border-[#27B36A]/30 self-start">
              99.4% AUTHORIZED
            </span>
          </div>

          {/* Live Telemetry KPI Visualizer */}
          <div className="px-6 sm:px-8 py-2 relative z-10 grid grid-cols-3 gap-2 sm:gap-3 text-left">
            <div className="bg-slate-800/80 p-2.5 sm:p-3 rounded-xl border border-slate-700">
              <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono block">TODAY VISITORS</span>
              <span className="text-base sm:text-xl font-black text-white">1,248</span>
            </div>
            <div className="bg-slate-800/80 p-2.5 sm:p-3 rounded-xl border border-slate-700">
              <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono block">PEAK TRAFFIC</span>
              <span className="text-base sm:text-xl font-black text-[#38BDF8]">10:15 AM</span>
            </div>
            <div className="bg-slate-800/80 p-2.5 sm:p-3 rounded-xl border border-slate-700">
              <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono block">ACTIVE ON-SITE</span>
              <span className="text-base sm:text-xl font-black text-[#27B36A]">42</span>
            </div>
          </div>

          {/* Surge Bar Chart Trend */}
          <div className="px-6 sm:px-8 py-3 relative z-10">
            <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/80 flex items-end justify-between h-16 gap-2">
              <div className="w-1/6 bg-[#1769D2]/40 h-6 rounded-t text-center"><span className="text-[7px] text-slate-400">8A</span></div>
              <div className="w-1/6 bg-[#1769D2]/60 h-10 rounded-t text-center"><span className="text-[7px] text-slate-400">9A</span></div>
              <div className="w-1/6 bg-[#38BDF8] h-14 rounded-t text-center"><span className="text-[7px] text-slate-400">10A</span></div>
              <div className="w-1/6 bg-[#16A6A1] h-11 rounded-t text-center"><span className="text-[7px] text-slate-400">11A</span></div>
              <div className="w-1/6 bg-[#27B36A] h-13 rounded-t text-center"><span className="text-[7px] text-slate-400">12P</span></div>
              <div className="w-1/6 bg-[#1769D2]/50 h-8 rounded-t text-center"><span className="text-[7px] text-slate-400">1P</span></div>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-xs text-white/60 font-mono">06 • TELEMETRY</span>
            <Link
              to="/features/analytics-dashboard"
              className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Analytics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 07: SECURE VISITOR DATA (5-COL CYBER FORTRESS)          */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#5EEAD4]/30 bg-gradient-to-br from-[#0B1F38] via-[#102F4F] to-[#075E66] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[440px]">
          
          <div className="p-6 sm:p-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#5EEAD4]/30 text-[10px] font-mono font-bold text-[#5EEAD4] mb-3">
              <Lock className="w-3.5 h-3.5 text-[#5EEAD4]" />
              <span>TLS 1.3 / AES-256 CIPHER</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight leading-tight font-sans">
              Secure Visitor Data <br />
              <span className="text-[#5EEAD4]">Management</span>
            </h3>
            <p className="text-xs text-[#D8E7EF] mt-1.5 leading-relaxed">
              Zero cloud leaks with strict tenant workspace isolation and automated retention policies.
            </p>
          </div>

          {/* Encrypted Shield Visual */}
          <div className="px-6 sm:px-8 py-2 relative z-10">
            <div className="bg-[#0B1F38]/90 backdrop-blur-md rounded-2xl p-4 border border-[#5EEAD4]/40 shadow-2xl text-left space-y-2">
              <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#5EEAD4]">
                <span>CRYPTOGRAPHIC AUDIT</span>
                <span className="text-[#4ADE80]">SOC 2 READY</span>
              </div>
              <p className="text-xs font-bold text-white leading-tight">Private Encrypted Storage</p>
              <p className="text-[9px] text-slate-300">GDPR Compliant Automated Data Purging</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-xs text-white/60 font-mono">07 • PRIVACY</span>
            <Link
              to="/features/secure-visitor-data-management"
              className="text-xs font-bold text-[#5EEAD4] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              <span>Explore Security</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* FINAL FULL-WIDTH ROW: [12-COL GEO-FENCING RADAR SCENE]        */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#16A6A1]/40 bg-[#0B1F38] text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/solutions/business-parks.jpg"
            alt="Business campus with GPS geo-fencing perimeter verification"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F38] via-[#0B1F38]/85 to-[#0B1F38]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10.5px] font-mono font-bold text-[#5EEAD4]">
            <MapPin className="w-3.5 h-3.5 text-[#5EEAD4]" />
            <span>GPS PERIMETER RADAR</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#27B36A] bg-[#27B36A]/20 px-3 py-1 rounded-full border border-[#27B36A]/40">
            ZONE VERIFIED
          </span>
        </div>

        <div className="p-6 sm:p-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-tight text-white font-sans">
              Geo-Fencing Perimeter <br />
              <span className="bg-gradient-to-r from-[#5EEAD4] to-[#27B36A] bg-clip-text text-transparent">
                Verification
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E7EF] leading-relaxed max-w-xl font-medium">
              Prevent fraudulent remote check-ins by verifying that visitors are physically standing within your authorized facility radius before generating active digital passes.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-left space-y-1 w-full max-w-xs">
              <span className="text-[8px] font-mono text-[#5EEAD4] block font-bold">PERIMETER TELEMETRY</span>
              <p className="text-xs font-bold text-white">Main Entrance Gate 1</p>
              <p className="text-[10px] text-[#27B36A] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Within 25m Radius
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-4 border-t border-white/15 flex items-center justify-between relative z-10">
          <span className="text-xs text-white/60 font-mono">08 • PERIMETER CONTROL</span>
          <Link
            to="/features/geo-fencing-verification"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0B1F38] font-bold text-xs shadow-md hover:bg-[#5EEAD4] hover:shadow-lg transition-all group-hover:scale-102"
          >
            <span>Explore Geo-Fencing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default FeaturesBentoGrid;
