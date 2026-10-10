import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  QrCode, 
  Smartphone, 
  Clock, 
  Lock, 
  Layers, 
  ArrowLeft,
  UserCheck,
  BellRing,
  History,
  BarChart3,
  MapPin,
  FileCheck,
  Check,
  Zap,
  TrendingUp,
  Download,
  Wifi,
  Radio,
  Building2,
  Cpu
} from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { CTASection } from '../../components/common/CTASection';
import { Button } from '../../components/common/Button';
import { FeatureCard } from '../../components/common/FeatureCard';
import { FEATURES_DATA } from '../../data/features';
import { QRVisitorRegistrationPage } from './QRVisitorRegistrationPage';

export const FeatureDetailPage = ({ slug: explicitSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = explicitSlug || paramSlug;

  if (slug === 'qr-visitor-registration') {
    return <QRVisitorRegistrationPage />;
  }

  const feature = FEATURES_DATA.find((f) => f.slug === slug || f.id === slug);

  if (!feature) {
    return <Navigate to="/features" replace />;
  }

  const Icon = feature.icon;
  const relatedFeatures = FEATURES_DATA.filter((f) => f.slug !== feature.slug).slice(0, 4);

  // Map each feature to unique high-res photography and stickers
  const getFeatureVisuals = () => {
    switch (feature.slug) {
      case 'digital-visitor-passes':
        return {
          photo: '/assets/features/qr-registration/qr-registration-phone.jpg',
          stickerLabel: 'PASS ACTIVE',
          stickerIcon: ShieldCheck,
          stickerColor: '#27B36A'
        };
      case 'employee-approval-workflows':
        return {
          photo: '/assets/solutions/it-companies.jpg',
          stickerLabel: '1-TAP APPROVAL',
          stickerIcon: UserCheck,
          stickerColor: '#16A6A1'
        };
      case 'real-time-notifications':
        return {
          photo: '/assets/solutions/corporate-offices.jpg',
          stickerLabel: 'SUB-200ms DISPATCH',
          stickerIcon: BellRing,
          stickerColor: '#1769D2'
        };
      case 'visitor-history-reporting':
        return {
          photo: '/assets/solutions/business-parks.jpg',
          stickerLabel: '100% AUDIT READY',
          stickerIcon: History,
          stickerColor: '#16A6A1'
        };
      case 'secure-visitor-data-management':
        return {
          photo: '/assets/solutions/manufacturing.jpg',
          stickerLabel: 'TLS 1.3 / AES-256',
          stickerIcon: Lock,
          stickerColor: '#1769D2'
        };
      case 'analytics-dashboard':
        return {
          photo: '/assets/solutions/it-companies.jpg',
          stickerLabel: 'LIVE METRICS',
          stickerIcon: BarChart3,
          stickerColor: '#1769D2'
        };
      case 'geo-fencing-verification':
        return {
          photo: '/assets/solutions/business-parks.jpg',
          stickerLabel: 'GPS PERIMETER GUARD',
          stickerIcon: MapPin,
          stickerColor: '#27B36A'
        };
      default:
        return {
          photo: '/assets/solutions/corporate-offices.jpg',
          stickerLabel: 'ENTERPRISE READY',
          stickerIcon: CheckCircle2,
          stickerColor: '#1769D2'
        };
    }
  };

  const featureVisuals = getFeatureVisuals();
  const StickerIcon = featureVisuals.stickerIcon;

  // Render bespoke product UI visual for each feature
  const renderBespokeMockup = () => {
    switch (feature.slug) {
      case 'digital-visitor-passes':
        return (
          <div className="space-y-3">
            <div className="bg-gradient-to-b from-white to-[#F3F9FD] rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-4 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-[#DCE6EF]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse" />
                  <span className="text-xs font-bold text-[#10243E]">VISITOR PASS #V-9082</span>
                </div>
                <span className="text-[10px] font-extrabold bg-[#1769D2] text-white px-2.5 py-0.5 rounded-full uppercase">
                  VIP GUEST
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#10243E] text-white flex items-center justify-center font-bold text-base shadow-xs">
                  AM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10243E]">Alex Mercer</h4>
                  <p className="text-xs text-[#5F7185]">Acme Corp • Host: Sarah Jenkins</p>
                </div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#DCE6EF] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-[#5F7185] block">Valid Duration</span>
                  <span className="font-bold text-[#10243E]">09:00 AM – 06:00 PM</span>
                  <span className="text-[10px] text-[#27B36A] font-semibold block mt-0.5">Floor 4 • Room 402</span>
                </div>
                <QrCode className="w-9 h-9 text-[#1769D2]" />
              </div>
            </div>
          </div>
        );

      case 'employee-approval-workflows':
        return (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A6A1]">Host Mobile Request</span>
                <span className="text-[10px] font-bold text-[#1688E8] bg-[#EDF6FC] px-2 py-0.5 rounded-full">Just Now</span>
              </div>
              <div className="p-3 bg-[#F3F9FD] rounded-xl border border-[#DCE6EF] text-xs space-y-1">
                <p className="font-bold text-[#10243E]">David Vance (BioTech Inc)</p>
                <p className="text-[11px] text-[#5F7185]">Meeting: Series B Partnership Review</p>
                <p className="text-[10px] text-[#27B36A] font-semibold">Location: Lobby Kiosk Gate 2</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button className="py-2 rounded-xl bg-[#27B36A] text-white text-xs font-bold shadow-xs hover:bg-[#229c5c] transition-colors cursor-pointer">
                  ✓ Grant Access
                </button>
                <button className="py-2 rounded-xl bg-slate-100 text-[#5F7185] text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer">
                  ✕ Decline with Note
                </button>
              </div>
            </div>
          </div>
        );

      case 'real-time-notifications':
        return (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">Multi-Channel Dispatch Engine</span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#EDF6FC] rounded-xl border border-[#1769D2]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#27B36A]" />
                    <span className="font-semibold text-[#10243E]">SMS Instant Push</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#1769D2] font-bold">180ms</span>
                </div>
                <div className="p-2.5 bg-[#EDF6FC] rounded-xl border border-[#1769D2]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#27B36A]" />
                    <span className="font-semibold text-[#10243E]">Work Email Alert</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#1769D2] font-bold">240ms</span>
                </div>
                <div className="p-2.5 bg-[#EDF6FC] rounded-xl border border-[#1769D2]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#27B36A]" />
                    <span className="font-semibold text-[#10243E]">Reception Dashboard</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#1769D2] font-bold">Live Synced</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'visitor-history-reporting':
        return (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A6A1]">Audit Log Exporter</span>
                <span className="text-[10px] font-bold text-[#16A6A1] bg-[#16A6A1]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Download className="w-3 h-3" /> CSV / PDF
                </span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="p-2 bg-[#F3F9FD] rounded-lg flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#10243E]">Evelyn Reed (BioGen)</span>
                  <span className="text-[#27B36A] font-bold">10:42 AM In</span>
                </div>
                <div className="p-2 bg-[#F3F9FD] rounded-lg flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#10243E]">Maya Lin (Architects)</span>
                  <span className="text-[#1769D2] font-bold">10:15 AM In</span>
                </div>
                <div className="p-2 bg-[#F3F9FD] rounded-lg flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#10243E]">Kavita Sharma (Apex)</span>
                  <span className="text-slate-500 font-bold">09:50 AM Out</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'secure-visitor-data-management':
        return (
          <div className="space-y-3">
            <div className="bg-[#10243E] rounded-2xl p-5 border border-[#0B1F38] text-white shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1688E8]">Data Encryption Lock</span>
                <Lock className="w-4 h-4 text-[#27B36A]" />
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2 bg-[#0B1F38] rounded-lg border border-slate-700 flex justify-between">
                  <span>TLS 1.3 In-Flight:</span>
                  <span className="text-[#27B36A] font-bold">256-Bit Active</span>
                </div>
                <div className="p-2 bg-[#0B1F38] rounded-lg border border-slate-700 flex justify-between">
                  <span>AES-256 at Rest:</span>
                  <span className="text-[#27B36A] font-bold">Encrypted</span>
                </div>
                <div className="p-2 bg-[#0B1F38] rounded-lg border border-slate-700 flex justify-between">
                  <span>GDPR Auto-Purge:</span>
                  <span className="text-[#1688E8] font-bold">Configured (30d)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'analytics-dashboard':
        return (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">Building Occupancy</span>
                <span className="text-xs font-extrabold text-[#1769D2]">142 Checked In</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5 items-end h-16 pt-2">
                <div className="bg-[#EDF6FC] h-[30%] rounded-t" />
                <div className="bg-[#EDF6FC] h-[55%] rounded-t" />
                <div className="bg-[#1769D2] h-[95%] rounded-t" />
                <div className="bg-[#1688E8] h-[100%] rounded-t" />
                <div className="bg-[#16A6A1] h-[70%] rounded-t" />
                <div className="bg-[#27B36A] h-[40%] rounded-t" />
              </div>
              <p className="text-[10px] text-[#5F7185] text-center">Peak Traffic: 10:00 AM – 11:30 AM</p>
            </div>
          </div>
        );

      case 'geo-fencing-verification':
        return (
          <div className="space-y-3">
            <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-sm space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#27B36A]">GPS Perimeter Validation</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-ping" />
              </div>
              <div className="p-4 bg-[#F3F9FD] rounded-xl border border-[#DCE6EF] flex flex-col items-center text-center space-y-2">
                <MapPin className="w-8 h-8 text-[#27B36A]" />
                <span className="text-xs font-bold text-[#10243E]">Visitor Located Within 35m Radius</span>
                <span className="text-[10px] text-[#27B36A] font-bold bg-[#27B36A]/10 px-2.5 py-0.5 rounded-full">
                  ✓ Perimeter Guard Passed
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-2xl p-5 border border-[#DCE6EF] shadow-xs space-y-3 text-left">
            <div className="flex items-center justify-between border-b border-[#DCE6EF] pb-3">
              <span className="text-xs text-[#5F7185]">Processing Mode:</span>
              <span className="text-xs font-bold text-[#10243E]">Cloud-Native & Real-Time</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#DCE6EF] pb-3">
              <span className="text-xs text-[#5F7185]">Average Latency:</span>
              <span className="text-xs font-bold text-[#27B36A]">&lt; 0.8 seconds</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#5F7185]">Encryption:</span>
              <span className="text-xs font-bold text-[#1769D2]">TLS 1.3 / AES-256</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#F3F9FD] min-h-screen text-[#14263D]">
      {/* Page Hero Header */}
      <PageHeader
        badge={feature.badge}
        title={feature.title}
        subtitle={feature.headline}
        breadcrumb={[
          { label: 'Features', link: '/features' },
          { label: feature.title }
        ]}
      />

      {/* Main Feature Deep-Dive Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#EDF6FC] text-[#1769D2] border border-[#DCE6EF]">
                <Icon className="w-4 h-4 text-[#16A6A1]" />
                <span>Module Category: {feature.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10243E] tracking-tight leading-tight">
                {feature.headline}
              </h2>

              <p className="text-base text-[#5F7185] leading-relaxed">
                {feature.shortDesc}
              </p>

              {/* Key Benefit Banner */}
              <div className="p-4 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] space-y-1 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1769D2]">
                  Strategic Organizational Benefit
                </span>
                <p className="text-sm font-bold text-[#10243E]">
                  {feature.benefit}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#10243E]">
                  Included Capabilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14263D]">
                      <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button to="/register" variant="primary" size="medium" icon={ArrowRight}>
                  Deploy in Workspace
                </Button>
                <Button to="/features" variant="outline" size="medium">
                  View All Features
                </Button>
              </div>
            </div>

            {/* Right Product UI Mockup with Real Photography Background & Floating Stickers */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCE6EF] bg-[#EDF6FC] p-6 sm:p-8">
                {/* Photo Underlay */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-[#DCE6EF]">
                  <img
                    src={featureVisuals.photo}
                    alt={`${feature.title} realistic context`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold">
                    VisitOS {feature.title}
                  </div>
                </div>

                {/* Bespoke Visual Mockup */}
                {renderBespokeMockup()}

                {/* Footer status pill */}
                <div className="mt-4 text-center">
                  <span className="text-[10px] text-[#5F7185] font-semibold">
                    ✓ 100% compatible with iOS, Android, and Desktop Kiosks
                  </span>
                </div>
              </div>

              {/* Floating Micro-Sticker */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -right-3 bg-white/95 backdrop-blur-md text-[#10243E] px-3.5 py-2 rounded-2xl border border-[#1769D2]/30 shadow-xl items-center gap-2 text-xs font-bold z-20"
              >
                <StickerIcon className="w-4 h-4 text-[#1769D2]" />
                <span>{featureVisuals.stickerLabel}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow Explanation */}
      {feature.workflowSteps && (
        feature.slug === 'employee-approval-workflows' ? (
          /* ============================================================ */
          /* SECTION 6: TEAL WORKFLOW CAROUSEL (EMPLOYEE APPROVAL)         */
          /* ============================================================ */
          <section 
            aria-label="Workflow Lifecycle"
            className="py-16 sm:py-20 lg:py-24 border-b border-[#053F44] relative overflow-hidden select-none"
            style={{
              background: 'linear-gradient(135deg, #064E52 0%, #087F83 52%, #0A9B91 100%)'
            }}
          >
            {/* Background Ambient Glows & Dot Texture */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16A6A1]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#27B36A]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="teal-workflow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.2" fill="#FFFFFF" opacity="0.6" />
                    <path d="M 20 20 L 40 20" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#teal-workflow-grid)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Section Heading (Two-Tone on Teal Background, No Eyebrow) */}
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-white">
                  How Employee Approval{' '}
                  <span className="bg-gradient-to-r from-[#72E5CE] via-[#38BDF8] to-[#FFFFFF] bg-clip-text text-transparent">
                    Workflows Works
                  </span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#D4F1F4]/85 leading-relaxed font-normal max-w-2xl mx-auto">
                  A seamless 4-stage host authorization cycle guaranteeing verified clearances and complete timestamped audit logs.
                </p>
              </div>

              {/* 4 Coordinated Teal Gradient Cards with Abstract Graffiti Accents */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch">
                {feature.workflowSteps.map((step, idx) => {
                  const cardGradients = [
                    'linear-gradient(145deg, #0B6268 0%, #087F83 60%, #119A91 100%)',
                    'linear-gradient(145deg, #075E66 0%, #087F83 60%, #0A8E9A 100%)',
                    'linear-gradient(145deg, #075B50 0%, #087A68 60%, #0C987C 100%)',
                    'linear-gradient(145deg, #084C5A 0%, #086A79 60%, #0B8490 100%)'
                  ];

                  const graffitiStickers = [
                    // Step 1: Arrival Notification (Bell / Signal / Sparkle)
                    (
                      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#72E5CE] opacity-85 group-hover:scale-110 transition-transform">
                        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                        <path d="M24 10 L25.5 6 L27 10 L31 11.5 L27 13 L25.5 17 L24 13 L20 11.5 Z" fill="currentColor" />
                        <circle cx="36" cy="14" r="2" fill="currentColor" />
                        <path d="M18 28 C18 22 30 22 30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ),
                    // Step 2: 1-Tap Auth (Check / Orbital Rings / Bolt)
                    (
                      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#38BDF8] opacity-85 group-hover:scale-110 transition-transform">
                        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M18 24 L22 28 L30 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M38 12 L39 9 L40 12 L43 13 L40 14 L39 17 L38 14 L35 13 Z" fill="currentColor" />
                        <circle cx="10" cy="34" r="2" fill="currentColor" />
                      </svg>
                    ),
                    // Step 3: Pass Updated (Shield / Refresh Arc)
                    (
                      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#4ADE80] opacity-85 group-hover:scale-110 transition-transform">
                        <path d="M24 8 L34 13 V23 C34 30 29 36 24 39 C19 36 14 30 14 23 V13 Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M20 23 L23 26 L29 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="38" cy="32" r="1.8" fill="currentColor" />
                        <path d="M10 16 L12 12 L14 16 L18 18 L14 20 L12 24 L10 20 L6 18 Z" fill="currentColor" />
                      </svg>
                    ),
                    // Step 4: Timestamp Logged (Clock / Route Trail / Stamp)
                    (
                      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9 text-[#72E5CE] opacity-85 group-hover:scale-110 transition-transform">
                        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M24 16 V24 L29 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M38 8 L39 6 L40 8 L42 9 L40 10 L39 12 L38 10 L36 9 Z" fill="currentColor" />
                        <line x1="8" y1="38" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                      </svg>
                    )
                  ];

                  return (
                    <div
                      key={idx}
                      className="group relative rounded-[24px] p-6 sm:p-7 border border-white/20 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/40 hover:shadow-2xl"
                      style={{
                        background: cardGradients[idx % cardGradients.length],
                        boxShadow: '0 10px 30px -5px rgba(6, 63, 70, 0.4)'
                      }}
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center font-mono font-black text-sm text-white shadow-xs">
                          {step.step}
                        </div>
                        {graffitiStickers[idx % graffitiStickers.length]}
                      </div>

                      {/* Content Area */}
                      <div className="space-y-2.5 pt-2">
                        <h4 className="text-lg font-bold text-white font-sans tracking-tight leading-snug group-hover:text-[#72E5CE] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-[#D4F1F4]/85 leading-relaxed font-normal">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Micro-Badge */}
                      <div className="mt-6 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono font-bold text-[#72E5CE]">
                        <span>PHASE 0{idx + 1}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80]" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        ) : (
          /* Generic Step-by-Step Workflow for Other Features */
          <section className="py-16 sm:py-20 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden">
            {/* Subtle Node Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="feature-workflow-dots" width="48" height="48" patternUnits="userSpaceOnUse">
                    <circle cx="24" cy="24" r="1.2" fill="#1769D2" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#feature-workflow-dots)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Heading (No Eyebrow, Two-Tone Navy + Brand Gradient) */}
              <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
                  How {feature.title}{' '}
                  <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                    Works
                  </span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#5F7185] leading-relaxed font-normal max-w-2xl mx-auto">
                  Step-by-step workflow architecture engineered for zero bottlenecks and verified oversight.
                </p>
              </div>

              {/* Connected Cards */}
              <div className="relative">
                {/* Desktop Connecting Line */}
                <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] z-0 pointer-events-none opacity-30" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative z-10">
                  {feature.workflowSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-xs hover:border-[#1769D2]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1769D2] to-[#16A6A1] text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
                            {step.step}
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F7185]">
                            STAGE 0{idx + 1}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-[#10243E] font-sans group-hover:text-[#1769D2] transition-colors mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#5F7185] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#DCE6EF]/60 flex items-center justify-between text-[#1769D2] text-[11px] font-bold">
                        <span>Automated Sync</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {/* Relevant Use Cases / Target Environments */}
      {feature.useCases && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#1769D2]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#16A6A1]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Heading (No Eyebrow, Two-Tone Navy + Brand Gradient) */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
                Where {feature.title}{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Delivers Maximum Impact
                </span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-medium">
                High-security workplaces and dynamic offices benefiting most from automated authorization workflows.
              </p>
            </div>

            {/* 3 Visually Coordinated Gradient Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {feature.useCases.map((useCase, idx) => {
                const targetCards = [
                  {
                    gradient: 'linear-gradient(145deg, #EAF3FF 0%, #D4E7FF 100%)',
                    border: 'rgba(23, 105, 210, 0.25)',
                    accent: '#1769D2',
                    badgeBg: '#D1E4FC',
                    title: typeof useCase === 'object' && useCase.title ? useCase.title : 'Financial & Corporate HQ',
                    desc: typeof useCase === 'object' && useCase.desc ? useCase.desc : useCase,
                    icon: Building2
                  },
                  {
                    gradient: 'linear-gradient(145deg, #E4FAF7 0%, #C8F3EC 100%)',
                    border: 'rgba(13, 148, 136, 0.25)',
                    accent: '#0D9488',
                    badgeBg: '#CEF5EE',
                    title: typeof useCase === 'object' && useCase.title ? useCase.title : 'R&D Labs & Tech Parks',
                    desc: typeof useCase === 'object' && useCase.desc ? useCase.desc : useCase,
                    icon: Cpu
                  },
                  {
                    gradient: 'linear-gradient(145deg, #E5F9EF 0%, #C7F0DA 100%)',
                    border: 'rgba(22, 138, 88, 0.25)',
                    accent: '#168A58',
                    badgeBg: '#D6F6DF',
                    title: typeof useCase === 'object' && useCase.title ? useCase.title : 'Hybrid & Multi-Floor Workplaces',
                    desc: typeof useCase === 'object' && useCase.desc ? useCase.desc : useCase,
                    icon: Layers
                  }
                ];

                const cardInfo = targetCards[idx % targetCards.length];
                const TargetIcon = cardInfo.icon;

                return (
                  <div
                    key={idx}
                    className="rounded-3xl p-6 sm:p-7 border shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-default"
                    style={{
                      background: cardInfo.gradient,
                      borderColor: cardInfo.border
                    }}
                  >
                    <div>
                      {/* Top Row: Accent Badge & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-xs"
                          style={{ backgroundColor: cardInfo.badgeBg, color: cardInfo.accent }}
                        >
                          <TargetIcon className="w-5 h-5" />
                        </div>
                        <span 
                          className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border"
                          style={{ backgroundColor: cardInfo.badgeBg, borderColor: cardInfo.border, color: cardInfo.accent }}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#10243E] font-sans tracking-tight mb-2">
                        {cardInfo.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#526982] leading-relaxed">
                        {cardInfo.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-black/5 flex items-center gap-1.5 text-xs font-bold" style={{ color: cardInfo.accent }}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Enterprise Recommended</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Features Grid */}
      <section className="py-16 sm:py-20 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Subtle Ambient Mesh */}
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10243E] font-sans">
                Related{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7185] mt-1 font-normal">
                Explore interconnected VisitOS modules designed to unify your front desk.
              </p>
            </div>
            <Link 
              to="/features" 
              className="text-xs sm:text-sm font-bold text-[#1769D2] hover:text-[#16A6A1] flex items-center gap-1.5 shrink-0 transition-colors group"
            >
              <span>View All 8 Modules</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {relatedFeatures.map((rel) => (
              <FeatureCard key={rel.id} feature={rel} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title={`Ready to deploy ${feature.title.toLowerCase()}?`}
        subtitle="Start your 14-day enterprise trial. Zero hardware lock-in and complete policy customization."
        primaryText="Start Free Trial"
        primaryTo="/register"
        secondaryText="Explore All Features"
        secondaryTo="/features"
      />
    </div>
  );
};

export default FeatureDetailPage;
