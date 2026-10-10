import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BellRing, 
  BarChart3, 
  QrCode, 
  UserCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Check, 
  Lock,
  Sparkles,
  Smartphone,
  Eye,
  Activity
} from 'lucide-react';

export const FeatureCardsPage = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch h-full">
        
        {/* ============================================================ */}
        {/* CARD 01: ENHANCED SECURITY (Blue Dominant Gradient)          */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-[#1769D2]/25 bg-gradient-to-b from-[#EDF6FD] via-[#E3F1FC] to-[#D5EBFB] shadow-lg shadow-[#1769D2]/8 hover:shadow-2xl hover:shadow-[#1769D2]/16 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
          
          {/* Layered Translucent Atmospheric Curves & Halo Shapes */}
          <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-gradient-to-br from-[#1769D2]/20 to-[#1688E8]/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#16A6A1]/15 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/60 pointer-events-none opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/40 pointer-events-none opacity-30" />

          {/* Card Top: Category & Title */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#1769D2]/20 shadow-2xs mb-3">
              <Shield className="w-3.5 h-3.5 text-[#1769D2]" />
              <span className="text-[10.5px] font-black tracking-widest text-[#1769D2] uppercase font-mono">
                01 • SECURITY
              </span>
            </div>
            <h3 className="text-xl sm:text-[23px] font-black text-[#0B1F38] font-sans tracking-tight leading-snug">
              Enhanced Security
            </h3>
          </div>

          {/* Card Middle: Realistic VisitOS Kiosk & Security Terminal */}
          <div className="relative z-10 my-4 sm:my-5 w-full h-[235px] sm:h-[245px] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-3 border border-white shadow-inner">
            
            {/* Ambient Cyan/Blue Glow behind Kiosk */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#1769D2]/20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-[#16A6A1]/20 blur-xl pointer-events-none" />

            {/* VisitOS Kiosk Screen UI */}
            <div className="relative z-10 w-[215px] sm:w-[225px] bg-[#08182B] rounded-[22px] p-2.5 shadow-2xl border border-[#1769D2]/40 text-white transform transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Kiosk Header */}
              <div className="flex items-center justify-between px-1.5 pb-1.5 mb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse shadow-[0_0_6px_#27B36A]" />
                  <span className="text-[8.5px] font-black tracking-widest uppercase text-white/95">VisitOS Kiosk</span>
                </div>
                <span className="text-[7.5px] font-mono text-[#1688E8] font-bold bg-[#1769D2]/20 px-1.5 py-0.5 rounded">GATE 01-A</span>
              </div>

              {/* Kiosk Display Screen */}
              <div className="bg-[#10243E] rounded-xl p-2 border border-white/10 text-center space-y-1.5">
                <div className="flex items-center justify-between text-[8.5px] text-white/80 font-medium px-0.5">
                  <span>Touchless QR Entry</span>
                  <span className="text-[#27B36A] font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Ready
                  </span>
                </div>

                {/* QR Code Container with Animated Laser */}
                <div className="relative w-16 h-16 mx-auto bg-white rounded-lg p-1.5 flex items-center justify-center shadow-inner overflow-hidden">
                  <QrCode className="w-full h-full text-[#08182B]" />
                  <motion.div
                    animate={{ y: [-24, 24, -24] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#27B36A] to-transparent shadow-[0_0_6px_#27B36A]"
                  />
                </div>

                {/* Visitor Profile */}
                <div className="bg-[#08182B]/90 rounded-md p-1.5 text-left border border-white/10 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#1769D2] to-[#1688E8] text-white text-[8px] font-bold flex items-center justify-center shrink-0 shadow-xs">
                    SJ
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8.5px] font-bold text-white truncate">Sarah Jenkins</p>
                    <p className="text-[7px] text-[#27B36A] font-medium flex items-center gap-0.5">
                      <Check className="w-2 h-2" /> Photo & NDA Matched
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Status */}
              <div className="mt-1.5 px-0.5 flex items-center justify-between text-[7.5px] text-white/80">
                <span className="flex items-center gap-1 text-[#27B36A] font-bold">
                  <ShieldCheck className="w-3 h-3" /> Access Granted
                </span>
                <span className="text-[7px] text-white/50">Turnstile 2 OK</span>
              </div>
            </div>

            {/* Floating Pill: ID Verified */}
            <div className="absolute top-3 left-2.5 z-20 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-[#1769D2]/25 px-2 py-1 flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-[#27B36A]/15 text-[#27B36A] flex items-center justify-center">
                <UserCheck className="w-2.5 h-2.5" />
              </div>
              <span className="text-[8.5px] font-bold text-[#0B1F38]">ID Verified</span>
            </div>

            {/* Floating Pill: Geo-Fenced */}
            <div className="absolute bottom-3 right-2.5 z-20 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-[#1769D2]/25 px-2 py-1 flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-[#1769D2]/15 text-[#1769D2] flex items-center justify-center">
                <MapPin className="w-2.5 h-2.5" />
              </div>
              <span className="text-[8.5px] font-bold text-[#0B1F38]">Geo-Fenced</span>
            </div>
          </div>

          {/* Card Bottom: Description & Learn More */}
          <div className="relative z-10 pt-1 text-left">
            <p className="text-xs sm:text-[13px] text-[#4A5D73] leading-relaxed mb-4 min-h-[50px] font-medium">
              Enforce verified host approvals, photo ID capture, and GPS geo-fencing to ensure zero unauthorized visitors enter your premises.
            </p>
            <Link
              to="/features/secure-visitor-data-management"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] hover:text-[#0B1F38] group-hover:translate-x-1 transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 02: REAL-TIME NOTIFICATIONS (Teal/Green Dominant)        */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-[#16A6A1]/30 bg-gradient-to-b from-[#EAF8F5] via-[#DCF4EE] to-[#CEF0E6] shadow-lg shadow-[#16A6A1]/8 hover:shadow-2xl hover:shadow-[#16A6A1]/16 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
          
          {/* Layered Translucent Atmospheric Curves & Halo Shapes */}
          <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-gradient-to-br from-[#16A6A1]/20 to-[#27B36A]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#1769D2]/15 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/60 pointer-events-none opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/40 pointer-events-none opacity-30" />

          {/* Card Top: Category & Title */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#16A6A1]/25 shadow-2xs mb-3">
              <BellRing className="w-3.5 h-3.5 text-[#16A6A1]" />
              <span className="text-[10.5px] font-black tracking-widest text-[#16A6A1] uppercase font-mono">
                02 • NOTIFICATIONS
              </span>
            </div>
            <h3 className="text-xl sm:text-[23px] font-black text-[#0B1F38] font-sans tracking-tight leading-snug">
              Real-Time Notifications
            </h3>
          </div>

          {/* Card Middle: Smartphone & Instant Notification Stream */}
          <div className="relative z-10 my-4 sm:my-5 w-full h-[235px] sm:h-[245px] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-3 border border-white shadow-inner">
            
            {/* Ambient Background Glow */}
            <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-[#16A6A1]/20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-[#27B36A]/20 blur-xl pointer-events-none" />

            {/* Notification Center Frame */}
            <div className="relative z-10 w-full max-w-[260px] bg-white rounded-[20px] p-2.5 shadow-xl border border-[#DCE6EF] space-y-1.5 transform transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Notification Header */}
              <div className="flex items-center justify-between pb-1.5 border-b border-[#DCE6EF]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#16A6A1]/15 text-[#16A6A1] flex items-center justify-center">
                    <BellRing className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-[#0B1F38]">Instant Stream</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 text-[7px] font-bold bg-[#1769D2] text-white rounded">SMS</span>
                  <span className="px-1.5 py-0.5 text-[7px] font-bold bg-[#16A6A1] text-white rounded">Email</span>
                </div>
              </div>

              {/* Item 1: New Visitor */}
              <div className="bg-[#F8FAFC] rounded-lg p-1.5 border border-[#E2E8F0] text-left flex items-start gap-1.5">
                <div className="w-5 h-5 rounded bg-[#1769D2] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <UserCheck className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[8.5px] font-bold text-[#0B1F38]">New Visitor</span>
                    <span className="text-[7px] font-bold text-[#1769D2] bg-[#EDF6FC] px-1 rounded">NOW</span>
                  </div>
                  <p className="text-[7.5px] text-[#5F7185] truncate">Sarah Jenkins arrived at Reception</p>
                </div>
              </div>

              {/* Item 2: Host Approval Required (with 1-Click Buttons) */}
              <div className="bg-white rounded-lg p-1.5 border-2 border-[#16A6A1]/40 shadow-xs text-left space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-[#16A6A1] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-[8px] font-bold text-[#0B1F38]">Host Approval Required</span>
                  </div>
                  <span className="text-[7px] font-semibold text-[#5F7185]">2m ago</span>
                </div>
                <div className="flex items-center gap-1 pt-0.5">
                  <div className="flex-1 py-0.5 bg-[#27B36A] hover:bg-[#229B5C] text-white text-[7.5px] font-bold rounded flex items-center justify-center gap-0.5 shadow-2xs">
                    <Check className="w-2 h-2" /> Approve (1-Click)
                  </div>
                  <div className="px-2 py-0.5 bg-[#F8FAFC] text-[#5F7185] text-[7.5px] font-bold rounded">
                    Deny
                  </div>
                </div>
              </div>

              {/* Item 3: Meeting Reminder */}
              <div className="bg-[#F8FAFC] rounded-lg p-1.5 border border-[#E2E8F0] text-left flex items-start gap-1.5">
                <div className="w-5 h-5 rounded bg-[#27B36A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Calendar className="w-3 h-3" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[8.5px] font-bold text-[#0B1F38]">Meeting Reminder</span>
                    <span className="text-[7px] text-[#5F7185]">10m ago</span>
                  </div>
                  <p className="text-[7.5px] text-[#5F7185] truncate">Team Sync in Boardroom B</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Bottom: Description & Learn More */}
          <div className="relative z-10 pt-1 text-left">
            <p className="text-xs sm:text-[13px] text-[#4A5D73] leading-relaxed mb-4 min-h-[50px] font-medium">
              Hosts receive instant alerts via SMS and Email the exact second a guest registers, allowing 1-click approvals from anywhere.
            </p>
            <Link
              to="/features/real-time-notifications"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#16A6A1] hover:text-[#0B1F38] group-hover:translate-x-1 transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CARD 03: DATA-DRIVEN INSIGHTS (Blue + Violet + Teal Gradient) */}
        {/* ============================================================ */}
        <div className="group relative rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 border border-[#1769D2]/30 bg-gradient-to-b from-[#EDF2FE] via-[#E2EAFD] to-[#D5E1FC] shadow-lg shadow-[#1769D2]/8 hover:shadow-2xl hover:shadow-[#1769D2]/16 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
          
          {/* Layered Translucent Atmospheric Curves & Halo Shapes */}
          <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-gradient-to-br from-[#1769D2]/20 to-[#6366F1]/15 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#16A6A1]/15 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/60 pointer-events-none opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/40 pointer-events-none opacity-30" />

          {/* Card Top: Category & Title */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#1769D2]/25 shadow-2xs mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-[#1769D2]" />
              <span className="text-[10.5px] font-black tracking-widest text-[#1769D2] uppercase font-mono">
                03 • INSIGHTS
              </span>
            </div>
            <h3 className="text-xl sm:text-[23px] font-black text-[#0B1F38] font-sans tracking-tight leading-snug">
              Data-Driven Insights
            </h3>
          </div>

          {/* Card Middle: Analytics Dashboard UI */}
          <div className="relative z-10 my-4 sm:my-5 w-full h-[235px] sm:h-[245px] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-3 border border-white shadow-inner">
            
            {/* Ambient Glow */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-[#1769D2]/20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-[#27B36A]/20 blur-xl pointer-events-none" />

            {/* Analytics Dashboard Card */}
            <div className="relative z-10 w-full max-w-[260px] bg-white rounded-[20px] p-2.5 shadow-xl border border-[#DCE6EF] space-y-1.5 transform transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-1 border-b border-[#DCE6EF]">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-[#27B36A]/15 text-[#27B36A] flex items-center justify-center">
                    <BarChart3 className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-[#0B1F38]">Live Telemetry</span>
                </div>
                <span className="text-[7.5px] font-bold text-[#27B36A] bg-[#27B36A]/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <CheckCircle2 className="w-2 h-2" /> 98.6% Compliance
                </span>
              </div>

              {/* 4 Mini KPI Grid */}
              <div className="grid grid-cols-4 gap-1">
                <div className="bg-[#F8FAFC] p-1 rounded-md border border-[#E2E8F0] text-left">
                  <span className="text-[6.5px] font-bold text-[#5F7185] block truncate">TOTAL</span>
                  <span className="text-[9px] font-black text-[#0B1F38] block">1,248</span>
                </div>
                <div className="bg-[#F8FAFC] p-1 rounded-md border border-[#E2E8F0] text-left">
                  <span className="text-[6.5px] font-bold text-[#5F7185] block truncate">TODAY</span>
                  <span className="text-[9px] font-black text-[#0B1F38] block">286</span>
                </div>
                <div className="bg-[#F8FAFC] p-1 rounded-md border border-[#E2E8F0] text-left">
                  <span className="text-[6.5px] font-bold text-[#5F7185] block truncate">PEAK</span>
                  <span className="text-[9px] font-black text-[#1769D2] block">10 AM</span>
                </div>
                <div className="bg-[#F8FAFC] p-1 rounded-md border border-[#E2E8F0] text-left">
                  <span className="text-[6.5px] font-bold text-[#5F7185] block truncate">ACTIVE</span>
                  <span className="text-[9px] font-black text-[#27B36A] block">42</span>
                </div>
              </div>

              {/* SVG Visitor Traffic Sparkline */}
              <div className="bg-[#F8FAFC] p-1.5 rounded-lg border border-[#E2E8F0] text-left">
                <div className="flex items-center justify-between text-[7.5px] font-bold text-[#0B1F38] mb-0.5">
                  <span>Visitor Traffic (7-Day Trend)</span>
                  <span className="text-[#27B36A] flex items-center gap-0.5 font-bold">
                    <TrendingUp className="w-2.5 h-2.5" /> +18.4%
                  </span>
                </div>
                <div className="h-8 w-full">
                  <svg viewBox="0 0 200 40" className="w-full h-full overflow-visible">
                    <path
                      d="M 0 30 Q 30 10, 50 20 T 100 8 T 150 16 T 200 6 L 200 40 L 0 40 Z"
                      fill="url(#visGradP1Rich)"
                      opacity="0.35"
                    />
                    <path
                      d="M 0 30 Q 30 10, 50 20 T 100 8 T 150 16 T 200 6"
                      fill="none"
                      stroke="#1769D2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="8" r="2" fill="#16A6A1" stroke="#FFFFFF" strokeWidth="1" />
                    <circle cx="200" cy="6" r="2.5" fill="#27B36A" stroke="#FFFFFF" strokeWidth="1" />
                    <defs>
                      <linearGradient id="visGradP1Rich" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1769D2" />
                        <stop offset="100%" stopColor="#27B36A" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Visitors by Type Bar */}
              <div className="text-left space-y-0.5">
                <div className="flex items-center justify-between text-[7px] font-semibold text-[#5F7185]">
                  <span>Visitors by Type</span>
                  <span>Staff 62% • Guest 26% • Vendor 12%</span>
                </div>
                <div className="h-1.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden flex gap-0.5">
                  <div className="h-full bg-[#1769D2]" style={{ width: '62%' }} />
                  <div className="h-full bg-[#16A6A1]" style={{ width: '26%' }} />
                  <div className="h-full bg-[#27B36A]" style={{ width: '12%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Card Bottom: Description & Learn More */}
          <div className="relative z-10 pt-1 text-left">
            <p className="text-xs sm:text-[13px] text-[#4A5D73] leading-relaxed mb-4 min-h-[50px] font-medium">
              Access real-time emergency headcount roll-calls, peak traffic heatmaps, and tamper-proof compliance logs instantly.
            </p>
            <Link
              to="/features/analytics-dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] hover:text-[#0B1F38] group-hover:translate-x-1 transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
