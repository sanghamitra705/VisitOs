import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Lock, 
  Activity, 
  Eye, 
  Check, 
  UserCheck, 
  MapPin, 
  Sparkles,
  Building,
  KeyRound,
  Shield
} from 'lucide-react';

export const IntelligenceDashboardPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Narrative, Heading, Value Propositions, Pill CTA */}
        <div className="lg:col-span-4 text-left flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#27B36A]/25 shadow-2xs w-fit">
            <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse" />
            <span className="text-[10.5px] font-black tracking-widest text-[#27B36A] uppercase font-mono">
              03 • WORKPLACE INTELLIGENCE
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1F38] font-sans tracking-tight leading-[1.15]">
            A Smarter, Safer Workplace
          </h3>

          <p className="text-sm sm:text-[15px] font-bold text-[#1769D2]">
            Connect visitor activity, workplace visibility and security intelligence in one unified platform.
          </p>

          <p className="text-xs sm:text-[13px] text-[#4A5D73] leading-relaxed font-medium">
            Create a secure, welcoming and efficient workplace experience with complete visibility across every visit. Real-time emergency roll-calls, multi-building perimeter access, and audit-ready logging.
          </p>

          {/* Strategic Feature Checklist */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>Real-time emergency roll-calls & muster tracking</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>SOC 2 Type II, ISO 27001 & GDPR audit compliance</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>Multi-building perimeter & turnstile integrations</span>
            </div>
          </div>

          {/* Pill CTA */}
          <div className="pt-2">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 brand-btn-gradient cursor-pointer"
            >
              <span>Explore VisitOS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Realistic SaaS Command-Center Dashboard with Floating Verification Elements */}
        <div className="lg:col-span-8 flex flex-col justify-center relative">
          
          {/* Main Command-Center Container */}
          <div className="relative bg-[#08182B] rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 lg:p-7 border border-[#1769D2]/35 shadow-2xl text-white overflow-hidden">
            
            {/* Ambient Interior Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1769D2]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#27B36A]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10 pointer-events-none opacity-30" />

            {/* Dashboard Window Header Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse shadow-[0_0_8px_#27B36A]" />
                <span className="text-xs font-bold text-white/95 font-sans tracking-wide">
                  VisitOS Command Hub • HQ Global Operations
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/70">
                <span className="px-2 py-0.5 rounded-full bg-[#27B36A]/20 text-[#27B36A] font-bold border border-[#27B36A]/30">
                  ● 99.9% UPTIME
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                  ALL 12 GATES ACTIVE
                </span>
              </div>
            </div>

            {/* 4 Primary Top Metric Cards */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3.5">
              <div className="bg-[#10243E]/90 rounded-xl p-2.5 border border-white/10 text-left">
                <span className="text-[8.5px] uppercase font-bold text-white/60 block">Visitor Overview</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-white font-sans">1,248</span>
                  <span className="text-[8px] text-[#27B36A] font-bold">+12%</span>
                </div>
              </div>

              <div className="bg-[#10243E]/90 rounded-xl p-2.5 border border-[#27B36A]/35 text-left">
                <span className="text-[8.5px] uppercase font-bold text-[#27B36A] block">Active Visitors</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-[#27B36A] font-sans">42</span>
                  <span className="text-[8px] text-white/60">on-site</span>
                </div>
              </div>

              <div className="bg-[#10243E]/90 rounded-xl p-2.5 border border-white/10 text-left">
                <span className="text-[8.5px] uppercase font-bold text-white/60 block">Today's Visits</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-white font-sans">286</span>
                  <span className="text-[8px] text-[#1688E8] font-bold">100% Cleared</span>
                </div>
              </div>

              <div className="bg-[#10243E]/90 rounded-xl p-2.5 border border-white/10 text-left">
                <span className="text-[8.5px] uppercase font-bold text-white/60 block">Peak Arrival</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-[#1769D2] font-sans">10:00 AM</span>
                  <span className="text-[8px] text-white/60">Rush</span>
                </div>
              </div>
            </div>

            {/* Dashboard Lower Content: 2 Sub-Panels (Activity Stream & Security Status) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-3 mb-3">
              
              {/* Left Sub-Panel: Live Visitor Traffic & Gate Activity */}
              <div className="sm:col-span-7 bg-[#10243E]/90 rounded-xl p-3 border border-white/10 text-left space-y-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#1688E8]" /> Live Entry & Exit Stream
                  </span>
                  <span className="text-[8px] text-[#27B36A] font-mono">LIVE FEED</span>
                </div>

                {/* Micro Activity Rows */}
                <div className="space-y-1.5">
                  <div className="bg-[#08182B]/90 rounded-lg p-1.5 border border-white/5 flex items-center justify-between text-[8.5px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#1769D2] text-white font-bold flex items-center justify-center text-[7px]">SJ</div>
                      <span className="text-white font-semibold">Sarah Jenkins (Acme Corp)</span>
                    </div>
                    <span className="text-[#27B36A] font-bold">Gate 01 • In</span>
                  </div>

                  <div className="bg-[#08182B]/90 rounded-lg p-1.5 border border-white/5 flex items-center justify-between text-[8.5px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#16A6A1] text-white font-bold flex items-center justify-center text-[7px]">MR</div>
                      <span className="text-white font-semibold">Michael Rodriguez (Vendor)</span>
                    </div>
                    <span className="text-[#1688E8] font-bold">Dock B • Pass OK</span>
                  </div>

                  <div className="bg-[#08182B]/90 rounded-lg p-1.5 border border-white/5 flex items-center justify-between text-[8.5px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-[#27B36A] text-white font-bold flex items-center justify-center text-[7px]">EK</div>
                      <span className="text-white font-semibold">Elena Rostova (Boardroom)</span>
                    </div>
                    <span className="text-[#27B36A] font-bold">Turnstile 3 • In</span>
                  </div>
                </div>
              </div>

              {/* Right Sub-Panel: Security & Compliance Telemetry */}
              <div className="sm:col-span-5 bg-[#10243E]/90 rounded-xl p-3 border border-white/10 text-left space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-white/90 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#27B36A]" /> Perimeter Status
                    </span>
                    <span className="text-[8px] text-[#27B36A] bg-[#27B36A]/20 px-1.5 py-0.5 rounded font-bold">SECURE</span>
                  </div>

                  <div className="space-y-1.5 text-[8.5px]">
                    <div className="flex items-center justify-between text-white/70">
                      <span>Approval Rate</span>
                      <span className="text-white font-bold">99.4% Instant</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#27B36A] rounded-full" style={{ width: '99.4%' }} />
                    </div>

                    <div className="flex items-center justify-between text-white/70 pt-0.5">
                      <span>Security Zones</span>
                      <span className="text-white font-bold">12/12 Normal</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1769D2] rounded-full" style={{ width: '100%' }} />
                    </div>

                    <div className="flex items-center justify-between text-white/70 pt-0.5">
                      <span>Compliance Log</span>
                      <span className="text-[#27B36A] font-bold">100% Audit Ready</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px] text-white/60">
                  <span>SOC 2 Type II</span>
                  <span>ISO 27001</span>
                  <span>GDPR</span>
                </div>
              </div>

            </div>

            {/* Dashboard Bottom Core Values Bar */}
            <div className="relative z-10 pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[9px] font-bold tracking-wider text-white/80 uppercase">
              <span className="flex items-center gap-1 text-[#1769D2]">
                <ShieldCheck className="w-3 h-3 text-[#1769D2]" /> SECURITY
              </span>
              <span className="flex items-center gap-1 text-[#1688E8]">
                <Eye className="w-3 h-3 text-[#1688E8]" /> VISIBILITY
              </span>
              <span className="flex items-center gap-1 text-[#16A6A1]">
                <BarChart3 className="w-3 h-3 text-[#16A6A1]" /> INTELLIGENCE
              </span>
              <span className="flex items-center gap-1 text-[#27B36A]">
                <Sparkles className="w-3 h-3 text-[#27B36A]" /> EFFICIENCY
              </span>
            </div>

          </div>

          {/* 4 Floating UI Badges around the Dashboard */}
          {/* Badge 1: Visitor Verified */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 left-2 sm:-left-3 z-20 bg-white text-[#0B1F38] rounded-full px-3 py-1 shadow-lg border border-[#1769D2]/25 flex items-center gap-1.5 text-[9px] font-bold"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A]" />
            <span>✓ Visitor Verified</span>
          </motion.div>

          {/* Badge 2: Host Approved */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute -top-3 right-2 sm:-right-3 z-20 bg-white text-[#0B1F38] rounded-full px-3 py-1 shadow-lg border border-[#1769D2]/25 flex items-center gap-1.5 text-[9px] font-bold"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#1769D2]" />
            <span>✓ Host Approved</span>
          </motion.div>

          {/* Badge 3: Secure Check-In */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -bottom-3 left-4 sm:-left-3 z-20 bg-white text-[#0B1F38] rounded-full px-3 py-1 shadow-lg border border-[#16A6A1]/25 flex items-center gap-1.5 text-[9px] font-bold"
          >
            <Lock className="w-3.5 h-3.5 text-[#16A6A1]" />
            <span>✓ Secure Check-In</span>
          </motion.div>

          {/* Badge 4: Digital Pass Issued */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
            className="absolute -bottom-3 right-4 sm:-right-3 z-20 bg-white text-[#0B1F38] rounded-full px-3 py-1 shadow-lg border border-[#27B36A]/25 flex items-center gap-1.5 text-[9px] font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#27B36A]" />
            <span>✓ Digital Pass Issued</span>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
