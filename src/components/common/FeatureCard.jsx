import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  ShieldCheck,
  QrCode, 
  Users, 
  BellRing, 
  History, 
  Lock, 
  BarChart3, 
  MapPin, 
  CheckCircle2, 
  TrendingUp,
  Smartphone,
  Shield,
  Eye,
  Activity,
  UserCheck,
  Calendar,
  Layers,
  Radio,
  FileText
} from 'lucide-react';

/**
 * FEATURE CARD DESIGN SYSTEM
 * 3 Distinct Curated Visual Families across 8 Features:
 * 1. Family A: Realistic Editorial / Graffiti Illustration Cards (~40%)
 * 2. Family B: Bright Saturated & Deep Contrast Cards (~30%)
 * 3. Family C: Full-Bleed Realistic Photography & Image Hybrids (~30%)
 */

export const FEATURE_CONFIGS = {
  // ─────────────────────────────────────────────────────────────
  // 1. QR-Based Visitor Registration (Family C: Featured Anchor & Photo-Graffiti Hybrid)
  // ─────────────────────────────────────────────────────────────
  'qr-visitor-registration': {
    family: 'featured-anchor',
    editorialTag: 'SCAN READY',
    badgeText: 'Touchless & Fast',
    highlightWord: 'Registration',
    accentColor: '#1769D2',
    accentColorAlt: '#16A6A1',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #10243E 45%, #075E66 100%)',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/20 bg-[#0B1F38] group/art select-none">
        <img
          src="/assets/features/qr-registration/qr-registration-hero.jpg"
          alt="Visitor scanning touchless QR registration at reception desk"
          className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Controlled gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/40 to-transparent" />

        {/* Hand-Drawn / Editorial Scan Framing with laser */}
        <div className="absolute inset-4 border-2 border-dashed border-[#5EEAD4]/70 rounded-xl pointer-events-none flex items-center justify-center">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#27B36A] to-transparent shadow-[0_0_10px_#27B36A] animate-pulse" />
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#5EEAD4]" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#5EEAD4]" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#5EEAD4]" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#5EEAD4]" />
        </div>

        {/* In-Card Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[10px] font-mono font-bold text-[#5EEAD4] flex items-center gap-1.5 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-ping" />
          <span>SCAN READY</span>
        </div>

        {/* Floating Verification Pill */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/40 text-[10px] font-bold text-[#10243E] flex items-center gap-1.5 shadow-lg">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A]" />
          <span>Sub-15s Check-In</span>
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Digital Visitor Passes (Family A: Realistic Digital Pass Editorial Canvas)
  // ─────────────────────────────────────────────────────────────
  'digital-visitor-passes': {
    family: 'light-editorial',
    editorialTag: 'VERIFIED PASS',
    badgeText: 'Digital Identity',
    highlightWord: 'Passes',
    accentColor: '#1769D2',
    accentColorAlt: '#16A6A1',
    gradient: 'linear-gradient(145deg, #F4FAFF 0%, #E7F7F5 50%, #E3F6EA 100%)',
    borderColor: 'rgba(23, 105, 210, 0.22)',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-gradient-to-br from-[#1769D2]/10 via-[#16A6A1]/10 to-[#27B36A]/10 border border-[#1769D2]/20 select-none">
        {/* Realistic Smartphone Frame with Pass */}
        <div className="relative w-[190px] sm:w-[210px] bg-white rounded-2xl p-3 shadow-xl border border-[#1769D2]/30 text-left transform group-hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-pulse" />
              <span className="text-[8px] font-mono font-black text-[#10243E] tracking-wider">VISITOR PASS</span>
            </div>
            <span className="text-[7.5px] font-bold bg-[#27B36A] text-white px-2 py-0.5 rounded-full shadow-2xs">ACTIVE</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1769D2] to-[#1688E8] text-white flex items-center justify-center font-bold text-[10px] shadow-xs shrink-0">
              AM
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-black text-[#10243E] leading-tight truncate">Alex Mercer</p>
              <p className="text-[8.5px] text-[#5F7185] truncate">Acme Technologies</p>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-dashed border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-[7.5px] text-[#5F7185] block">VALIDITY WINDOW</span>
              <span className="text-[9px] font-mono font-bold text-[#1769D2]">02:45:00 REMAINING</span>
            </div>
            <div className="w-7 h-7 bg-[#EDF6FC] rounded-lg p-1 flex items-center justify-center border border-[#1769D2]/20">
              <QrCode className="w-full h-full text-[#10243E]" />
            </div>
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#1769D2]/20 text-[9px] font-mono font-bold text-[#1769D2] shadow-xs flex items-center gap-1">
          <span>VERIFIED PASS</span>
        </div>

        {/* Hand-drawn sparks */}
        <span className="absolute top-2 right-3 text-[#1769D2] text-xs font-black opacity-60">✦</span>
        <span className="absolute bottom-2 left-4 text-[#27B36A] text-xs font-black opacity-60">✦</span>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Employee Approval Workflows (Family B: Bright Saturated Teal-Green)
  // ─────────────────────────────────────────────────────────────
  'employee-approval-workflows': {
    family: 'bright-saturated',
    editorialTag: 'HOST RESPONSE',
    badgeText: 'Host Authorization',
    highlightWord: 'Workflows',
    accentColor: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #075E66 0%, #087F83 45%, #16A6A1 70%, #27B36A 100%)',
    borderColor: 'rgba(255, 255, 255, 0.35)',
    textColor: '#FFFFFF',
    descColor: '#D8F7F0',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-black/20 border border-white/20 backdrop-blur-xs select-none">
        {/* Realistic Mobile Authorization Prompt */}
        <div className="relative w-[210px] sm:w-[230px] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white text-left transform group-hover:scale-102 transition-transform duration-300">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 text-[8px] font-mono font-bold text-[#087F83]">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-ping" />
              ARRIVAL ALERT
            </span>
            <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">1-TAP ACTION</span>
          </div>

          <p className="text-[11px] font-bold text-[#10243E] leading-tight">Sarah Jenkins in Lobby</p>
          <p className="text-[8.5px] text-[#5F7185] mb-2.5">Design Review • Boardroom B</p>

          <div className="grid grid-cols-2 gap-2">
            <div className="py-1.5 rounded-xl bg-[#27B36A] text-white text-[9.5px] font-bold text-center flex items-center justify-center gap-1 shadow-xs hover:bg-[#229B5C] transition-colors">
              <Check className="w-3 h-3 stroke-[3]" /> Approve
            </div>
            <div className="py-1.5 rounded-xl bg-slate-100 text-slate-700 text-[9.5px] font-bold text-center hover:bg-slate-200 transition-colors">
              Decline
            </div>
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-white/25 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-[9px] font-mono font-bold text-white shadow-xs">
          HOST RESPONSE
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Real-Time Notifications (Family C: Photographic + Live Alert Overlay)
  // ─────────────────────────────────────────────────────────────
  'real-time-notifications': {
    family: 'image-overlay',
    editorialTag: 'LIVE STATUS',
    badgeText: 'Instant Alerts',
    highlightWord: 'Notifications',
    accentColor: '#1688E8',
    accentColorAlt: '#16A6A1',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 group/art select-none">
        <img
          src="/assets/solutions/corporate-offices.jpg"
          alt="Employee receiving real time arrival notification in office"
          className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/45 to-transparent" />

        {/* Live Notification Card Overlay */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xl text-left">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#1688E8]">
            <span className="flex items-center gap-1">
              <BellRing className="w-3 h-3 animate-bounce text-[#1688E8]" /> SUB-200MS ALERT
            </span>
            <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">DISPATCHED</span>
          </div>
          <p className="text-[11px] font-bold text-[#10243E] mt-0.5 truncate">Visitor Arrived: Elena Rostova</p>
          <div className="flex items-center gap-2 mt-1 text-[8px] text-[#5F7185]">
            <span>SMS: Sent</span> • <span>Email: Delivered</span> • <span>Slack: Pinged</span>
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#38BDF8] shadow-sm">
          LIVE STATUS
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Visitor History & Reporting (Family A: Editorial Audit Ledger Canvas)
  // ─────────────────────────────────────────────────────────────
  'visitor-history-reporting': {
    family: 'light-editorial',
    editorialTag: 'VISIT RECORD',
    badgeText: 'Searchable Records',
    highlightWord: 'Reporting',
    accentColor: '#1769D2',
    accentColorAlt: '#27B36A',
    gradient: 'linear-gradient(145deg, #EEF7FF 0%, #E8F5FF 45%, #E5F7F1 100%)',
    borderColor: 'rgba(23, 105, 210, 0.22)',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-gradient-to-br from-[#1769D2]/10 via-[#16A6A1]/10 to-[#27B36A]/10 border border-[#1769D2]/20 select-none">
        {/* Stacked Audit Report Ledger Sheets */}
        <div className="relative w-[190px] sm:w-[210px] bg-white rounded-2xl p-3 shadow-xl border border-[#1769D2]/30 text-left transform group-hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
            <span className="text-[8.5px] font-mono font-bold text-[#1769D2]">AUDIT TIMELINE</span>
            <span className="text-[7.5px] font-mono text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">100% READY</span>
          </div>
          <div className="space-y-1.5 text-[8.5px]">
            <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
              <span className="font-bold text-[#10243E]">09:30 AM • Check-in</span>
              <span className="text-[#27B36A] font-bold">Verified</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-[#F3F9FD] rounded-lg border border-slate-100">
              <span className="font-bold text-[#10243E]">11:45 AM • Check-out</span>
              <span className="text-[#1769D2] font-bold">Logged</span>
            </div>
          </div>
          <div className="mt-2 pt-1 border-t border-dashed border-slate-200 flex items-center justify-between text-[7.5px] text-[#5F7185]">
            <span>1-Click CSV / PDF Export</span>
            <FileText className="w-3 h-3 text-[#1769D2]" />
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#1769D2]/20 text-[9px] font-mono font-bold text-[#1769D2] shadow-xs">
          VISIT RECORD
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Secure Visitor Data Management (Family B: Deep Navy Fortress)
  // ─────────────────────────────────────────────────────────────
  'secure-visitor-data-management': {
    family: 'dark-navy',
    editorialTag: 'PROTECTED DATA',
    badgeText: 'Data Protection',
    highlightWord: 'Management',
    accentColor: '#5EEAD4',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #102F4F 55%, #075E66 100%)',
    borderColor: 'rgba(94, 234, 212, 0.30)',
    textColor: '#FFFFFF',
    descColor: '#D8E7EF',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-4 flex items-center justify-center bg-black/25 border border-white/15 backdrop-blur-xs select-none">
        {/* Cyber Fortress & Encrypted Shield Visual */}
        <div className="relative w-[190px] sm:w-[210px] bg-[#0B1F38]/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-[#5EEAD4]/40 text-left transform group-hover:scale-102 transition-transform duration-300">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-700">
            <span className="text-[8.5px] font-mono font-bold text-[#5EEAD4]">TLS 1.3 / AES-256</span>
            <Lock className="w-3.5 h-3.5 text-[#5EEAD4]" />
          </div>
          <p className="text-[11px] font-bold text-white leading-tight">Zero Cloud Leaks</p>
          <p className="text-[8.5px] text-slate-300 mt-0.5">Strict Tenant Workspace Isolation</p>
          <div className="mt-2.5 pt-1.5 border-t border-slate-700/60 flex items-center gap-1.5 text-[8.5px] text-[#4ADE80] font-bold">
            <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" /> SOC 2 / GDPR Compliant
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#5EEAD4]/30 text-[9px] font-mono font-bold text-[#5EEAD4] shadow-sm">
          PROTECTED DATA
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Analytics Dashboard (Family B: Dark Command Center Card)
  // ─────────────────────────────────────────────────────────────
  'analytics-dashboard': {
    family: 'dark-analytics',
    editorialTag: 'LIVE INSIGHTS',
    badgeText: 'Operational Visibility',
    highlightWord: 'Dashboard',
    accentColor: '#38BDF8',
    accentColorAlt: '#27B36A',
    gradient: 'linear-gradient(145deg, #0B1F38 0%, #0F2A4A 50%, #083344 100%)',
    borderColor: 'rgba(56, 189, 248, 0.30)',
    textColor: '#FFFFFF',
    descColor: '#D8E7EF',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden p-3 sm:p-4 flex items-center justify-center bg-black/30 border border-white/15 backdrop-blur-xs select-none">
        {/* Live Analytics Dashboard Command Console */}
        <div className="relative w-full max-w-[240px] bg-[#0B1F38]/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-white/15 text-left transform group-hover:-translate-y-1 transition-transform duration-300 space-y-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-700">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-[#27B36A]/20 text-[#27B36A] flex items-center justify-center">
                <BarChart3 className="w-2.5 h-2.5" />
              </div>
              <span className="text-[8.5px] font-mono font-bold text-white">LIVE TELEMETRY</span>
            </div>
            <span className="text-[7.5px] font-bold text-[#27B36A] bg-[#27B36A]/20 px-1.5 py-0.5 rounded">99.4% AUTHORIZED</span>
          </div>

          {/* 3 KPI mini counters */}
          <div className="grid grid-cols-3 gap-1 text-center">
            <div className="bg-slate-800/80 p-1 rounded-lg border border-slate-700">
              <span className="text-[6.5px] text-slate-400 block font-mono">TODAY</span>
              <span className="text-[9.5px] font-black text-white">284</span>
            </div>
            <div className="bg-slate-800/80 p-1 rounded-lg border border-slate-700">
              <span className="text-[6.5px] text-slate-400 block font-mono">PEAK</span>
              <span className="text-[9.5px] font-black text-[#38BDF8]">10 AM</span>
            </div>
            <div className="bg-slate-800/80 p-1 rounded-lg border border-slate-700">
              <span className="text-[6.5px] text-slate-400 block font-mono">ACTIVE</span>
              <span className="text-[9.5px] font-black text-[#27B36A]">42</span>
            </div>
          </div>

          {/* Mini Bar Chart Surge Pillars */}
          <div className="flex items-end justify-between h-7 pt-1 px-1 gap-1">
            <div className="w-1/5 bg-[#1769D2]/40 h-2.5 rounded-t" />
            <div className="w-1/5 bg-[#1769D2]/60 h-4 rounded-t" />
            <div className="w-1/5 bg-[#1769D2] h-6 rounded-t" />
            <div className="w-1/5 bg-[#16A6A1] h-5 rounded-t" />
            <div className="w-1/5 bg-[#27B36A] h-7 rounded-t shadow-xs" />
          </div>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#38BDF8] shadow-sm">
          LIVE INSIGHTS
        </div>
      </div>
    )
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Geo-Fencing Perimeter Verification (Family C: Photographic + Radar Hybrid)
  // ─────────────────────────────────────────────────────────────
  'geo-fencing-verification': {
    family: 'image-overlay',
    editorialTag: 'ZONE VERIFIED',
    badgeText: 'Location Verification',
    highlightWord: 'Verification',
    accentColor: '#087F83',
    accentColorAlt: '#1769D2',
    renderArtwork: () => (
      <div className="relative w-full h-[220px] sm:h-[240px] rounded-2xl overflow-hidden border border-white/20 bg-slate-900 group/art select-none">
        <img
          src="/assets/solutions/business-parks.jpg"
          alt="Business park entrance with GPS perimeter verification"
          className="w-full h-full object-cover group-hover/art:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38] via-[#0B1F38]/45 to-transparent" />

        {/* GPS Radar Target Crosshairs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-dashed border-[#5EEAD4]/70 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-[#5EEAD4]/20 animate-ping" />
          <MapPin className="w-5 h-5 text-[#5EEAD4] absolute" />
        </div>

        {/* Location Status Pill */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xl text-left">
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-[#087F83]">
            <span>PERIMETER RADIUS: 25M</span>
            <span className="text-[#27B36A] font-bold bg-[#27B36A]/10 px-1.5 py-0.5 rounded">INSIDE ZONE</span>
          </div>
          <p className="text-[11px] font-bold text-[#10243E] mt-0.5 truncate">Gate 1 Campus Entrance Verified</p>
        </div>

        {/* Editorial Badge */}
        <div className="absolute top-3 left-3 bg-[#0B1F38]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 text-[9px] font-mono font-bold text-[#5EEAD4] shadow-sm">
          ZONE VERIFIED
        </div>
      </div>
    )
  }
};

/**
 * Reusable FeatureCard with Distinct Visual Personality Variants
 */
export const FeatureCard = ({ 
  feature, 
  variant = 'full', 
  layoutStyle = 'standard', // 'standard' | 'wide' | 'split'
  className = '' 
}) => {
  if (!feature) return null;

  const key = feature.slug || feature.id || 'qr-visitor-registration';
  const config = FEATURE_CONFIGS[key] || FEATURE_CONFIGS['qr-visitor-registration'];
  const destination = feature.path || `/features/${feature.slug}`;
  
  const isDarkFamily = config.family === 'dark-navy' || config.family === 'dark-analytics' || config.family === 'featured-anchor';
  const isBrightFamily = config.family === 'bright-saturated';

  // ─────────────────────────────────────────────────────────────
  // 1. COMPACT VARIANT (For Related Capabilities Grids)
  // ─────────────────────────────────────────────────────────────
  if (variant === 'compact') {
    return (
      <Link
        to={destination}
        className={`group relative rounded-[24px] p-5 sm:p-6 border flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer shadow-sm hover:shadow-xl ${className}`}
        style={{
          background: isDarkFamily || isBrightFamily 
            ? config.gradient 
            : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
          borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
        }}
      >
        <div className="relative z-10 space-y-3">
          {config.renderArtwork && config.renderArtwork()}

          <div className="space-y-1 text-left">
            <h4 
              className="text-base sm:text-lg font-black font-sans tracking-tight leading-snug group-hover:text-[#1769D2] transition-colors"
              style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#10243E' }}
            >
              {feature.title}
            </h4>
            <p 
              className="text-xs leading-relaxed line-clamp-2"
              style={{ color: isDarkFamily || isBrightFamily ? config.descColor : '#5F7185' }}
            >
              {feature.shortDesc}
            </p>
          </div>
        </div>

        <div 
          className="relative z-10 pt-3.5 mt-3.5 border-t border-black/10 flex items-center justify-between text-xs font-bold"
          style={{ color: isDarkFamily ? config.accentColor : isBrightFamily ? '#FFFFFF' : config.accentColor }}
        >
          <span className="group-hover:underline">Explore Module</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-250 ease-out" />
        </div>
      </Link>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 2. WIDE / FEATURED SPLIT VARIANT (For Featured Anchor Modules)
  // ─────────────────────────────────────────────────────────────
  if (layoutStyle === 'wide') {
    return (
      <div
        className={`group relative rounded-[28px] p-6 sm:p-8 border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-md hover:shadow-2xl ${className}`}
        style={{
          background: isDarkFamily || isBrightFamily 
            ? config.gradient 
            : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
          borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-[#5EEAD4]">
              <Sparkles className="w-3 h-3 text-[#5EEAD4]" />
              <span>CORE SYSTEM ANCHOR</span>
            </div>

            <h3 
              className="text-2xl sm:text-3xl font-black font-sans tracking-tight leading-tight"
              style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#10243E' }}
            >
              {feature.title}
            </h3>

            <p 
              className="text-sm leading-relaxed"
              style={{ color: isDarkFamily || isBrightFamily ? config.descColor : '#5F7185' }}
            >
              {feature.shortDesc}
            </p>

            {feature.benefit && (
              <div 
                className="p-3.5 rounded-2xl border backdrop-blur-xs space-y-0.5"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.10)',
                  borderColor: 'rgba(255, 255, 255, 0.20)'
                }}
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5EEAD4]">
                  Key Advantage
                </p>
                <p className="text-xs font-semibold leading-snug text-white">
                  {feature.benefit}
                </p>
              </div>
            )}

            {feature.details && (
              <div className="space-y-1.5 pt-1">
                {feature.details.slice(0, 3).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link
                to={destination}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#10243E] font-bold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <span>Explore QR Module</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual Artwork Column */}
          <div className="lg:col-span-6">
            {config.renderArtwork && config.renderArtwork()}
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 3. FULL STANDARD VARIANT (Gallery Cards with Distinct Themes)
  // ─────────────────────────────────────────────────────────────
  return (
    <div
      className={`group relative rounded-[26px] p-6 sm:p-7 border flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-md hover:shadow-2xl ${className}`}
      style={{
        background: isDarkFamily || isBrightFamily 
          ? config.gradient 
          : config.gradient || 'linear-gradient(145deg, #FFFFFF 0%, #F3F9FD 100%)',
        borderColor: config.borderColor || 'rgba(220, 230, 239, 0.9)'
      }}
    >
      <div className="relative z-10 space-y-4">
        {/* Topic-Specific Visual Artwork */}
        {config.renderArtwork && config.renderArtwork()}

        {/* Feature Title & Summary */}
        <div className="space-y-1.5 text-left">
          <h3 
            className="text-lg sm:text-xl font-black font-sans tracking-tight leading-snug"
            style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#10243E' }}
          >
            {feature.title}
          </h3>
          <p 
            className="text-xs sm:text-[13px] leading-relaxed"
            style={{ color: isDarkFamily || isBrightFamily ? config.descColor : '#5F7185' }}
          >
            {feature.shortDesc}
          </p>
        </div>

        {/* Key Strategic Value Chip */}
        {feature.benefit && (
          <div 
            className="p-3 rounded-2xl border backdrop-blur-xs space-y-0.5 text-left"
            style={{
              backgroundColor: isBrightFamily ? 'rgba(255, 255, 255, 0.16)' : isDarkFamily ? 'rgba(11, 31, 56, 0.60)' : 'rgba(255, 255, 255, 0.85)',
              borderColor: isBrightFamily ? 'rgba(255, 255, 255, 0.25)' : isDarkFamily ? 'rgba(94, 234, 212, 0.25)' : 'rgba(220, 230, 239, 0.8)'
            }}
          >
            <p 
              className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ color: isDarkFamily ? config.accentColor : isBrightFamily ? '#D8F7F0' : config.accentColor }}
            >
              Key Value
            </p>
            <p 
              className="text-xs font-semibold leading-snug"
              style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#10243E' }}
            >
              {feature.benefit}
            </p>
          </div>
        )}

        {/* Capabilities Checklist */}
        {feature.details && feature.details.length > 0 && (
          <div className="space-y-1.5 pt-1 text-left">
            <p 
              className="text-[10px] font-mono font-bold uppercase tracking-wider"
              style={{ color: isDarkFamily ? '#A0C4D8' : isBrightFamily ? '#D8F7F0' : '#5A738E' }}
            >
              Core Capabilities:
            </p>
            <div className="space-y-1.5">
              {feature.details.slice(0, 2).map((detail, dIdx) => (
                <div 
                  key={dIdx} 
                  className="flex items-start gap-2 text-xs"
                  style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#1D3249' }}
                >
                  <Check 
                    className="w-3.5 h-3.5 shrink-0 mt-0.5 stroke-[2.5]" 
                    style={{ color: isDarkFamily ? config.accentColor : isBrightFamily ? '#FFFFFF' : '#27B36A' }} 
                  />
                  <span className="line-clamp-1">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="relative z-10 pt-4 mt-5 border-t border-black/10 flex items-center justify-between text-xs">
        <span 
          className="text-[11px] font-medium"
          style={{ color: isDarkFamily ? '#A0C4D8' : isBrightFamily ? '#D8F7F0' : '#5A738E' }}
        >
          Category: <strong className="font-bold" style={{ color: isDarkFamily || isBrightFamily ? '#FFFFFF' : '#10243E' }}>{feature.category}</strong>
        </span>

        <Link
          to={destination}
          className="font-bold flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 group-hover:scale-105"
          style={{
            backgroundColor: isBrightFamily || isDarkFamily ? '#FFFFFF' : '#EDF6FC',
            color: isBrightFamily || isDarkFamily ? '#10243E' : config.accentColor
          }}
        >
          <span>Explore Page</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-250 ease-out" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
