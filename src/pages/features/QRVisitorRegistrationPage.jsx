import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QrCode,
  Smartphone,
  ShieldCheck,
  BellRing,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Lock,
  Clock,
  UserCheck,
  Check,
  Zap,
  Building2,
  FileCheck,
  Users,
  Camera,
  XCircle,
  AlertTriangle,
  History,
  Send,
  Database,
  Layers,
  MapPin,
  Wifi,
  Sparkle
} from 'lucide-react';
import { FeatureCard } from '../../components/common/FeatureCard';
import { FEATURES_DATA } from '../../data/features';

export const QRVisitorRegistrationPage = () => {
  // Step state for Section 1 (Journey 3-stage process carousel)
  const [journeyStep, setJourneyStep] = useState(0);

  // Step state for Section 2 (From QR Scan to Visitor Pass Interactive Demo)
  const [demoStep, setDemoStep] = useState(0); // 0: Scan/Form, 1: Verification/Host, 2: Pass

  // Section 1 auto-stepper toggle (pauses on user interaction)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setJourneyStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const journeyStages = [
    {
      num: '01',
      title: 'Scan',
      stageLabel: 'STEP 1 • CAMERA SCAN',
      subtitle: 'Scan Lobby QR Stand',
      desc: 'Visitors scan the reception QR code using their smartphone camera. The secure registration portal launches instantly in the mobile browser with zero app downloads or account sign-ups required.',
      pill: 'Zero-App Instant Launch',
      icon: QrCode,
      accentColor: '#1769D2',
      surfaceGradient: 'linear-gradient(145deg, #E4F0FF 0%, #C9E1FF 100%)',
      borderColor: 'rgba(23, 105, 210, 0.3)',
      badge: 'Step 1 of 3',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M52 12 L53.5 7 L55 12 L60 13.5 L55 15 L53.5 20 L52 15 L47 13.5 Z" fill="#1769D2" />
          <circle cx="14" cy="18" r="2.5" fill="#1769D2" />
          <path d="M18 26 V18 H26" stroke="#1769D2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 26 V18 H38" stroke="#1769D2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 38 V46 H26" stroke="#1769D2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 38 V46 H38" stroke="#1769D2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="25" y="25" width="14" height="14" rx="2" fill="#1769D2" />
          <rect x="28" y="28" width="8" height="8" rx="1" fill="#FFFFFF" />
          <rect x="30" y="30" width="4" height="4" fill="#1769D2" />
        </svg>
      )
    },
    {
      num: '02',
      stageLabel: 'STEP 2 • VERIFICATION',
      title: 'Register & Verify',
      subtitle: 'Submit Details & Host Routing',
      desc: 'Visitors submit essential details and execute the digital visitor agreement. VisitOS verifies perimeter rules and dispatches an instant multi-channel push notification to the host for 1-tap entry authorization.',
      pill: 'Sub-200ms Host Alert',
      icon: ShieldCheck,
      accentColor: '#16A6A1',
      surfaceGradient: 'linear-gradient(145deg, #DDFBF5 0%, #B9F0E5 100%)',
      borderColor: 'rgba(22, 166, 161, 0.3)',
      badge: 'Step 2 of 3',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M12 12 L13.5 7 L15 12 L20 13.5 L15 15 L13.5 20 L12 15 L7 13.5 Z" fill="#16A6A1" />
          <circle cx="52" cy="48" r="2.5" fill="#16A6A1" />
          <path d="M32 14 L46 19 V33 C46 43 40 49 32 53 C24 49 18 43 18 33 V19 Z" fill="#FFFFFF" stroke="#16A6A1" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M26 33 L30 37 L38 28" stroke="#16A6A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      num: '03',
      stageLabel: 'STEP 3 • VISITOR PASS',
      title: 'Digital Visitor Pass',
      subtitle: 'Active Badge & Access',
      desc: 'A dynamic, encrypted mobile visitor pass is activated containing meeting details, guest Wi-Fi credentials, and turnstile access, automatically revoking upon scheduled checkout.',
      pill: 'Validated Mobile Badge',
      icon: CheckCircle2,
      accentColor: '#27B36A',
      surfaceGradient: 'linear-gradient(145deg, #DDF8E9 0%, #A8EAC8 100%)',
      borderColor: 'rgba(39, 179, 106, 0.3)',
      badge: 'Step 3 of 3',
      sticker: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M50 12 L51.5 7 L53 12 L58 13.5 L53 15 L51.5 20 L50 15 L45 13.5 Z" fill="#27B36A" />
          <circle cx="14" cy="46" r="3" stroke="#27B36A" strokeWidth="1.5" strokeDasharray="2 2" fill="none" />
          <rect x="18" y="20" width="28" height="36" rx="4" fill="#FFFFFF" stroke="#27B36A" strokeWidth="2.5" />
          <circle cx="32" cy="30" r="5" fill="#27B36A" />
          <line x1="24" y1="42" x2="40" y2="42" stroke="#27B36A" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="47" x2="38" y2="47" stroke="#27B36A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const relatedFeatures = FEATURES_DATA.filter((f) => f.slug !== 'qr-visitor-registration').slice(0, 4);

  return (
    <div className="bg-[#F3F9FD] min-h-screen selection:bg-[#1769D2] selection:text-white font-sans text-[#14263D]">
      {/* ─────────────────────────────────────────────────────────────
          1. BREADCRUMB & HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-6 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EDF6FC] via-[#F3F9FD] to-[#EDF6FC] border-b border-[#DCE6EF]">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1688E8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#16A6A1]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#5F7185] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#10243E] transition-colors flex items-center gap-1 font-medium">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F7185]/50" />
            <Link to="/features" className="hover:text-[#10243E] transition-colors font-medium">
              <span>Features</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F7185]/50" />
            <span className="text-[#1769D2] font-semibold bg-[#1769D2]/10 px-2.5 py-0.5 rounded-full border border-[#1769D2]/20">
              QR-Based Visitor Registration
            </span>
          </nav>

          {/* 50/50 Visually Merged Hero Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT 50%: Value proposition, typography, CTAs, micro-stats */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#10243E] tracking-tight leading-[1.14]">
                QR-Based{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Visitor Registration
                </span>
              </h1>

              {/* Supporting Subheading */}
              <p className="text-lg sm:text-xl font-bold text-[#10243E]/90 leading-snug">
                Zero-App Touchless QR Check-In for Seamless Guest Arrival
              </p>

              {/* Supporting Paragraph */}
              <p className="text-base text-[#5F7185] leading-relaxed max-w-xl">
                Let visitors register quickly from their own phone by scanning a QR code at the entrance. Capture essential visitor details, notify the host, and move the visitor into a secure check-in workflow without unnecessary front-desk friction.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white shadow-lg shadow-[#1769D2]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
                  style={{
                    background: 'linear-gradient(110deg, #1769D2 0%, #1688E8 35%, #16A6A1 70%, #27B36A 100%)'
                  }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-[#10243E] bg-white hover:bg-[#EDF6FC] border border-[#DCE6EF] shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
                >
                  <span>Explore How It Works</span>
                  <ArrowRight className="w-4 h-4 text-[#1769D2] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-Stats / Trust Capability Row */}
              <div className="pt-6 border-t border-[#DCE6EF]/80 grid grid-cols-3 gap-3">
                <div className="bg-white/85 backdrop-blur-xs p-3 rounded-2xl border border-[#DCE6EF] shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#27B36A] font-bold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-extrabold text-[#10243E] tracking-tight">FAST REGISTRATION</span>
                  </div>
                  <p className="text-[11px] text-[#5F7185] mt-1 font-medium">&lt; 15s check-in time</p>
                </div>

                <div className="bg-white/85 backdrop-blur-xs p-3 rounded-2xl border border-[#DCE6EF] shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#1769D2] font-bold text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-extrabold text-[#10243E] tracking-tight">SECURE VERIFY</span>
                  </div>
                  <p className="text-[11px] text-[#5F7185] mt-1 font-medium">Encrypted credentials</p>
                </div>

                <div className="bg-white/85 backdrop-blur-xs p-3 rounded-2xl border border-[#DCE6EF] shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#16A6A1] font-bold text-xs">
                    <Smartphone className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] font-extrabold text-[#10243E] tracking-tight">DIGITAL FLOW</span>
                  </div>
                  <p className="text-[11px] text-[#5F7185] mt-1 font-medium">Zero app download</p>
                </div>
              </div>
            </div>

            {/* RIGHT 50%: Real Corporate Reception Hero Scene + Clean SaaS Overlay (No Floating Stickers) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCE6EF] bg-white group">
                {/* Reception Lobby Photograph */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/assets/features/qr-registration/qr-registration-hero.jpg"
                    alt="Visitor scanning VisitOS QR registration stand at modern corporate reception desk with receptionist smiling in background"
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle gradient overlay to merge bottom with UI panel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/85 via-[#10243E]/20 to-transparent pointer-events-none" />

                  {/* Context pill on photo */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white flex items-center gap-1.5 text-[10px] font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse" />
                    <span>Lobby Check-In Live Terminal</span>
                  </div>
                </div>

                {/* VisitOS Product UI Panel */}
                <div className="p-5 sm:p-6 bg-white border-t border-[#DCE6EF] relative">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCE6EF]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1769D2] to-[#16A6A1] text-white flex items-center justify-center font-bold shadow-xs">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-extrabold text-[#10243E] tracking-tight uppercase">
                          VISITOR REGISTRATION WORKFLOW
                        </h4>
                        <p className="text-[10px] text-[#5F7185]">VisitOS Touchless Module • Fast Track</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/20">
                      Active
                    </span>
                  </div>

                  {/* 4-Step Progress Indicator */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-[#EDF6FC] rounded-xl p-2 border border-[#1769D2]/30 space-y-1">
                      <div className="w-5 h-5 mx-auto rounded-full bg-[#1769D2] text-white text-[10px] font-bold flex items-center justify-center">
                        ✓
                      </div>
                      <p className="text-[10px] font-bold text-[#10243E]">Step 1</p>
                      <p className="text-[9px] text-[#5F7185] truncate">Scan QR</p>
                    </div>

                    <div className="bg-[#EDF6FC] rounded-xl p-2 border border-[#16A6A1]/40 space-y-1 relative">
                      <div className="w-5 h-5 mx-auto rounded-full bg-[#16A6A1] text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
                        2
                      </div>
                      <p className="text-[10px] font-bold text-[#10243E]">Step 2</p>
                      <p className="text-[9px] text-[#16A6A1] font-semibold truncate">Details</p>
                    </div>

                    <div className="bg-[#F3F9FD] rounded-xl p-2 border border-[#DCE6EF] space-y-1">
                      <div className="w-5 h-5 mx-auto rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center">
                        3
                      </div>
                      <p className="text-[10px] font-bold text-[#5F7185]">Step 3</p>
                      <p className="text-[9px] text-[#5F7185] truncate">Verify</p>
                    </div>

                    <div className="bg-[#F3F9FD] rounded-xl p-2 border border-[#DCE6EF] space-y-1">
                      <div className="w-5 h-5 mx-auto rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold flex items-center justify-center">
                        4
                      </div>
                      <p className="text-[10px] font-bold text-[#5F7185]">Step 4</p>
                      <p className="text-[9px] text-[#5F7185] truncate">Pass</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. HOW QR VISITOR REGISTRATION WORKS (PROCESS CAROUSEL & CARDS)
      ───────────────────────────────────────────────────────────── */}
      <section 
        className="py-20 sm:py-28 border-b border-[#DCE6EF] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F3F9FD 0%, #EAF4FF 50%, #EDF8F6 100%)'
        }}
      >
        {/* Soft ambient background glows */}
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#1769D2]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#16A6A1]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (No Eyebrow Badge) */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              How QR{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Visitor Registration
              </span>{' '}
              Works
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              A simple visitor journey from scan to secure arrival.
            </p>
          </div>

          {/* Process Carousel / 3 Process Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LEFT 5 COLS: Reception Photo with Active Stage Callout */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE6EF] bg-slate-900 aspect-[4/3]">
                <img
                  src="/assets/features/qr-registration/qr-registration-hero.jpg"
                  alt="Visitor arriving and registering at reception desk"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/95 via-[#10243E]/40 to-transparent" />

                {/* Dynamic Active Step Callout */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg text-left">
                  <div className="flex items-center justify-between mb-1.5">
                    <span 
                      className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border"
                      style={{
                        color: journeyStages[journeyStep].accentColor,
                        backgroundColor: `${journeyStages[journeyStep].accentColor}12`,
                        borderColor: `${journeyStages[journeyStep].accentColor}30`
                      }}
                    >
                      {journeyStages[journeyStep].stageLabel}
                    </span>
                    <span className="text-[10px] font-bold text-[#27B36A] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A] animate-ping" />
                      Live Journey
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#10243E]">
                    {journeyStages[journeyStep].num}. {journeyStages[journeyStep].subtitle}
                  </h4>
                  <p className="text-xs text-[#5F7185] mt-1 leading-relaxed">
                    {journeyStages[journeyStep].desc}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-4 px-2">
                <div className="flex items-center gap-1.5">
                  {journeyStages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setJourneyStep(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        journeyStep === idx ? 'w-8 bg-[#1769D2]' : 'w-2 bg-[#DCE6EF] hover:bg-[#1769D2]/50'
                      }`}
                      aria-label={`Go to stage ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setJourneyStep((prev) => (prev === 0 ? journeyStages.length - 1 : prev - 1));
                      setIsAutoPlaying(false);
                    }}
                    className="w-8 h-8 rounded-full bg-white border border-[#DCE6EF] flex items-center justify-center text-[#10243E] hover:bg-[#EDF6FC] transition-colors shadow-2xs cursor-pointer"
                    aria-label="Previous stage"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      setJourneyStep((prev) => (prev + 1) % journeyStages.length);
                      setIsAutoPlaying(false);
                    }}
                    className="w-8 h-8 rounded-full bg-[#10243E] text-white flex items-center justify-center hover:bg-[#1769D2] transition-colors shadow-2xs cursor-pointer"
                    aria-label="Next stage"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT 7 COLS: 3 Interactive Process Cards with Stickers & Gradients */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {journeyStages.map((stage, idx) => {
                const isActive = journeyStep === idx;
                const IconComponent = stage.icon;

                return (
                  <div
                    key={stage.num}
                    tabIndex={0}
                    onClick={() => {
                      setJourneyStep(idx);
                      setIsAutoPlaying(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setJourneyStep(idx);
                        setIsAutoPlaying(false);
                      }
                    }}
                    className={`relative p-5 sm:p-6 rounded-3xl border transition-all duration-300 cursor-pointer focus:outline-hidden ${
                      isActive
                        ? 'shadow-xl ring-2 ring-[#1769D2]/30 -translate-y-1'
                        : 'opacity-85 hover:opacity-100 hover:-translate-y-0.5 hover:shadow-md'
                    }`}
                    style={{
                      background: isActive ? stage.surfaceGradient : '#FFFFFF',
                      borderColor: isActive ? stage.accentColor : '#DCE6EF'
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      
                      {/* Left: Number Badge + Details */}
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-xs transition-transform duration-300"
                          style={{
                            backgroundColor: isActive ? stage.accentColor : '#EDF6FC',
                            color: isActive ? '#FFFFFF' : stage.accentColor
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span 
                              className="font-mono text-xs font-black"
                              style={{ color: stage.accentColor }}
                            >
                              {stage.num}
                            </span>
                            <h3 className="text-base sm:text-lg font-extrabold text-[#10243E] font-sans">
                              {stage.title}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-[13px] text-[#5F7185] leading-relaxed max-w-xl">
                            {stage.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right: Custom Vector Sticker */}
                      <div className="shrink-0 select-none hidden sm:block">
                        {stage.sticker}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FROM QR SCAN TO VISITOR PASS
             (Interactive Product Story with Live Device Mockup & Step Cards)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EDF6FC] border-b border-[#DCE6EF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              From QR Scan to{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Visitor Pass
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              Experience how VisitOS transforms mobile browser registration into a verified corporate visitor pass in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT 6 COLS: Realistic Modern Smartphone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm">

                {/* Smartphone Device Frame */}
                <div className="relative mx-auto border-[10px] border-[#0B1F38] bg-[#0B1F38] rounded-[48px] shadow-2xl overflow-hidden ring-1 ring-slate-900/20">
                  {/* Dynamic Island / Top Speaker */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-3">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1769D2]/50" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="bg-[#F3F9FD] min-h-[580px] p-4 pt-11 text-[#10243E] flex flex-col justify-between">
                    
                    {/* Top Browser URL Bar */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-2 px-3 border border-[#DCE6EF] flex items-center justify-between mb-3 text-[10px] shadow-2xs">
                      <div className="flex items-center gap-1.5 text-[#5F7185]">
                        <Lock className="w-3 h-3 text-[#27B36A]" />
                        <span className="font-mono font-medium">visitos.app/register/nexus-hq</span>
                      </div>
                      <span className="font-bold text-[#27B36A] bg-[#27B36A]/10 px-1.5 py-0.5 rounded text-[9px]">
                        TLS 1.3
                      </span>
                    </div>

                    {/* Step Switcher inside phone */}
                    <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-2xl border border-[#DCE6EF] mb-3 text-[10px] font-bold text-center">
                      <button
                        onClick={() => setDemoStep(0)}
                        className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                          demoStep === 0
                            ? 'bg-[#1769D2] text-white shadow-xs'
                            : 'text-[#5F7185] hover:text-[#10243E]'
                        }`}
                      >
                        1. Register
                      </button>
                      <button
                        onClick={() => setDemoStep(1)}
                        className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                          demoStep === 1
                            ? 'bg-[#16A6A1] text-white shadow-xs'
                            : 'text-[#5F7185] hover:text-[#10243E]'
                        }`}
                      >
                        2. Verify
                      </button>
                      <button
                        onClick={() => setDemoStep(2)}
                        className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                          demoStep === 2
                            ? 'bg-[#27B36A] text-white shadow-xs'
                            : 'text-[#5F7185] hover:text-[#10243E]'
                        }`}
                      >
                        3. Pass
                      </button>
                    </div>

                    {/* Screen Content based on Active Step */}
                    <AnimatePresence mode="wait">
                      {demoStep === 0 && (
                        /* STEP 1: Registration Form UI */
                        <motion.div
                          key="form-step"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          className="bg-white rounded-3xl p-4 border border-[#DCE6EF] shadow-sm space-y-3"
                        >
                          <div className="text-left pb-2 border-b border-[#DCE6EF]">
                            <span className="text-[9px] font-extrabold text-[#1769D2] uppercase tracking-wider block">
                              Nexus Corp • Lobby Entrance
                            </span>
                            <h4 className="text-sm font-black text-[#10243E]">Visitor Check-In</h4>
                          </div>

                          <div className="space-y-2 text-left">
                            <div>
                              <label className="text-[10px] font-bold text-[#5F7185] block mb-0.5">Full Name</label>
                              <div className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-[#F3F9FD] border border-[#DCE6EF] font-bold text-[#10243E]">
                                Alex Mercer
                              </div>
                            </div>

                            <div>
                              <label className="text-[10px] font-bold text-[#5F7185] block mb-0.5">Company</label>
                              <div className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-[#F3F9FD] border border-[#DCE6EF] font-semibold text-[#10243E]">
                                Acme Corp
                              </div>
                            </div>

                            <div>
                              <label className="text-[10px] font-bold text-[#5F7185] block mb-0.5">Host Employee</label>
                              <div className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-[#F3F9FD] border border-[#DCE6EF] font-semibold text-[#10243E] flex items-center justify-between">
                                <span>David Chen</span>
                                <span className="text-[9px] text-[#27B36A] font-bold">✓ Available</span>
                              </div>
                            </div>

                            <div>
                              <label className="text-[10px] font-bold text-[#5F7185] block mb-0.5">Purpose of Visit</label>
                              <div className="w-full text-xs px-2.5 py-1.5 rounded-xl bg-[#F3F9FD] border border-[#DCE6EF] font-semibold text-[#10243E]">
                                Business Meeting
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => setDemoStep(1)}
                            className="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md cursor-pointer transition-transform active:scale-98 flex items-center justify-center gap-1.5"
                            style={{
                              background: 'linear-gradient(110deg, #1769D2 0%, #1688E8 40%, #16A6A1 72%, #27B36A 100%)'
                            }}
                          >
                            <span>Submit &amp; Route to Host →</span>
                          </button>
                        </motion.div>
                      )}

                      {demoStep === 1 && (
                        /* STEP 2: Verification & Host Alert State */
                        <motion.div
                          key="verify-step"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          className="bg-white rounded-3xl p-4 border border-[#16A6A1]/40 shadow-sm space-y-3"
                        >
                          <div className="text-center pb-2 border-b border-[#DCE6EF]">
                            <div className="w-10 h-10 mx-auto rounded-full bg-[#16A6A1]/15 text-[#16A6A1] flex items-center justify-center mb-1">
                              <BellRing className="w-5 h-5 animate-bounce" />
                            </div>
                            <h4 className="text-sm font-black text-[#10243E]">Host Alert Dispatched</h4>
                            <p className="text-[10px] text-[#5F7185]">Notifying David Chen via Slack &amp; SMS</p>
                          </div>

                          <div className="p-3 bg-[#F3F9FD] rounded-2xl border border-[#DCE6EF] space-y-2 text-left">
                            <div className="flex items-center justify-between text-[10px]">
                              <span className="font-bold text-[#10243E]">Host Response Status</span>
                              <span className="text-[#27B36A] font-bold">1-Tap Auth Pending</span>
                            </div>
                            <div className="h-1.5 bg-[#DCE6EF] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#1769D2] to-[#27B36A] w-3/4 rounded-full animate-pulse" />
                            </div>
                            <p className="text-[10px] text-[#5F7185]">Perimeter check passed (Radius 25m)</p>
                          </div>

                          <button
                            onClick={() => setDemoStep(2)}
                            className="w-full py-2.5 rounded-xl bg-[#27B36A] hover:bg-[#229c5c] text-white font-bold text-xs shadow-md cursor-pointer transition-transform active:scale-98 flex items-center justify-center gap-1.5"
                          >
                            <span>Host Approved • View Pass →</span>
                          </button>
                        </motion.div>
                      )}

                      {demoStep === 2 && (
                        /* STEP 3: Enterprise Digital Visitor Pass */
                        <motion.div
                          key="pass-step"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          className="bg-white rounded-3xl p-4 border border-[#27B36A]/40 shadow-md space-y-3"
                        >
                          {/* Pass Header */}
                          <div className="flex items-center justify-between pb-2 border-b border-[#DCE6EF]">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse" />
                              <span className="text-[10px] font-extrabold text-[#10243E] tracking-wider">VISITOR PASS</span>
                            </div>
                            <span className="text-[9px] font-black bg-[#27B36A] text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                              VALIDATED
                            </span>
                          </div>

                          {/* Guest Profile Details */}
                          <div className="flex items-center gap-3 text-left">
                            <div className="w-11 h-11 rounded-2xl bg-[#10243E] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                              AM
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#10243E]">Alex Mercer</h4>
                              <p className="text-[10px] text-[#5F7185]">Acme Corp • Host: David Chen</p>
                              <p className="text-[9px] text-[#1769D2] font-semibold">Purpose: Business Meeting</p>
                            </div>
                          </div>

                          {/* Validity & Pass Number */}
                          <div className="p-3 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] flex items-center justify-between text-left">
                            <div>
                              <span className="text-[9px] font-bold text-[#1769D2] block">PASS #V-8942</span>
                              <span className="text-[11px] font-extrabold text-[#10243E]">09:30 AM — 12:30 PM</span>
                              <span className="text-[9px] text-[#27B36A] font-semibold block mt-0.5">Floor 4 • Room 402</span>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-xl p-1 border border-[#DCE6EF] flex items-center justify-center shadow-2xs">
                              <QrCode className="w-7 h-7 text-[#10243E]" />
                            </div>
                          </div>

                          <div className="pt-1 text-center">
                            <span className="text-[10px] text-[#27B36A] font-bold bg-[#27B36A]/10 px-3 py-1 rounded-full inline-flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" /> Turnstile &amp; Elevator Access Enabled
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Security Protocol Label */}
                    <div className="text-center pt-2">
                      <span className="text-[9px] text-[#5F7185] font-medium">VisitOS Verified Credential System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 6 COLS: 3 Stacked Process Cards + Acrylic Stand Integration */}
            <div className="lg:col-span-6 space-y-4 text-left">
              {/* Timeline Item 1: STEP 1 • QR SCANNED */}
              <div
                tabIndex={0}
                onClick={() => setDemoStep(0)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setDemoStep(0);
                }}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer focus:outline-hidden ${
                  demoStep === 0
                    ? 'bg-white border-[#1769D2] shadow-xl ring-2 ring-[#1769D2]/20 translate-x-1 sm:translate-x-2'
                    : 'bg-white/80 border-[#DCE6EF] hover:bg-white hover:border-[#1769D2]/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs transition-colors duration-300 ${
                      demoStep === 0
                        ? 'bg-[#1769D2] text-white shadow-md'
                        : 'bg-[#EDF6FC] text-[#1769D2] border border-[#1769D2]/20'
                    }`}
                  >
                    01
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#10243E]">STEP 1 • QR SCANNED</h4>
                      <span className="text-[10px] font-bold text-[#1769D2] bg-[#1769D2]/10 px-2.5 py-0.5 rounded-full">
                        Instant Scan
                      </span>
                    </div>
                    <p className="text-xs text-[#5F7185] leading-relaxed">
                      Visitor aims native camera at the lobby acrylic stand. The secure mobile portal loads within 300ms without app store redirects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2: STEP 2 • DETAILS SUBMITTED & VERIFIED */}
              <div
                tabIndex={0}
                onClick={() => setDemoStep(1)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setDemoStep(1);
                }}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer focus:outline-hidden ${
                  demoStep === 1
                    ? 'bg-white border-[#16A6A1] shadow-xl ring-2 ring-[#16A6A1]/20 translate-x-1 sm:translate-x-2'
                    : 'bg-white/80 border-[#DCE6EF] hover:bg-white hover:border-[#16A6A1]/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs transition-colors duration-300 ${
                      demoStep === 1
                        ? 'bg-[#16A6A1] text-white shadow-md'
                        : 'bg-[#EDF6FC] text-[#16A6A1] border border-[#16A6A1]/20'
                    }`}
                  >
                    02
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#10243E]">STEP 2 • DETAILS SUBMITTED &amp; VERIFIED</h4>
                      <span className="text-[10px] font-bold text-[#16A6A1] bg-[#16A6A1]/10 px-2.5 py-0.5 rounded-full">
                        1-Tap Auth
                      </span>
                    </div>
                    <p className="text-xs text-[#5F7185] leading-relaxed">
                      Visitor details are validated in real time. The host employee receives an immediate notification and grants 1-tap entry authorization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3: STEP 3 • VISITOR PASS ISSUED */}
              <div
                tabIndex={0}
                onClick={() => setDemoStep(2)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setDemoStep(2);
                }}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer focus:outline-hidden ${
                  demoStep === 2
                    ? 'bg-white border-[#27B36A] shadow-xl ring-2 ring-[#27B36A]/20 translate-x-1 sm:translate-x-2'
                    : 'bg-white/80 border-[#DCE6EF] hover:bg-white hover:border-[#27B36A]/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs transition-colors duration-300 ${
                      demoStep === 2
                        ? 'bg-[#27B36A] text-white shadow-md'
                        : 'bg-[#EDF6FC] text-[#27B36A] border border-[#27B36A]/20'
                    }`}
                  >
                    03
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#10243E]">STEP 3 • VISITOR PASS ISSUED</h4>
                      <span className="text-[10px] font-bold text-[#27B36A] bg-[#27B36A]/10 px-2.5 py-0.5 rounded-full">
                        Pass Active
                      </span>
                    </div>
                    <p className="text-xs text-[#5F7185] leading-relaxed">
                      A dynamic digital badge is activated with meeting details, guest Wi-Fi credentials, and auto-revocation upon scheduled checkout.
                    </p>
                  </div>
                </div>
              </div>

              {/* Physical Acrylic Stand Preview Card */}
              <div className="p-4 bg-gradient-to-r from-white to-[#EDF6FC] rounded-3xl border border-[#DCE6EF] flex items-center gap-4 shadow-2xs">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#DCE6EF] shrink-0 bg-white">
                  <img
                    src="/assets/features/qr-registration/qr-registration-qr-card.jpg"
                    alt="VisitOS Acrylic Lobby Stand"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#10243E]">Reception Acrylic Stand Integration</h5>
                  <p className="text-[11px] text-[#5F7185] mt-0.5">
                    Deploy standard laminated or acrylic stands at entrances, turnstiles, and unmanned elevator lobbies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REAL-WORLD VISITOR MOMENT (Editorial Bridge Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[24/8] border border-[#DCE6EF] shadow-lg group">
            <img
              src="/assets/features/qr-registration/qr-registration-arrival.jpg"
              alt="Real world visitor walking into modern corporate reception lobby"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10243E]/85 via-[#10243E]/40 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-xl text-left space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16A6A1] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                  REAL-WORLD RECEPTION CONTEXT
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  From lobby arrival to verified entry — without slowing down the front desk.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Visitors move directly into their meeting with zero reception bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. WHY QR-BASED REGISTRATION? ("The Benefit Bento")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#1769D2]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#16A6A1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (No Eyebrow) */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              Why{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                QR-Based Registration?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              Designed specifically for fast-paced workplaces that value security, guest convenience, and clean front-desk operations.
            </p>
          </div>

          {/* THE BENEFIT BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* 1. LARGE FEATURE TILE (Dominating photo + touchless overlay — Span 8 cols) */}
            <div className="md:col-span-12 lg:col-span-8 bg-white rounded-3xl overflow-hidden border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between">
              {/* Photo Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src="/assets/features/qr-registration/qr-registration-hero.jpg"
                  alt="Corporate reception with visitor scanning QR stand"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/90 via-[#10243E]/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#DCE6EF] text-xs font-extrabold text-[#1769D2] flex items-center gap-1.5 shadow-xs">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>100% TOUCHLESS</span>
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="p-6 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#10243E]">Touchless Mobile Flow</h3>
                  <span className="text-xs font-bold text-[#27B36A] bg-[#27B36A]/10 px-2.5 py-1 rounded-full">
                    Zero Shared Surfaces
                  </span>
                </div>
                <p className="text-sm text-[#5F7185] leading-relaxed">
                  Visitors use their own personal smartphone for fast, touchless registration rather than touching shared tablet screens or handling public paper logbook pens.
                </p>
              </div>
            </div>

            {/* 2. REDESIGNED FEATURE CARD — FASTER GUEST ARRIVAL (Balanced vertical layout + integrated metric viz) */}
            <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#1769D2]/25 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1769D2]/15 to-[#16A6A1]/15 text-[#1769D2] flex items-center justify-center font-bold border border-[#1769D2]/20 shadow-2xs">
                  <Zap className="w-6 h-6 text-[#1769D2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#10243E]">Faster Guest Arrival</h3>
                  <p className="text-xs text-[#5F7185] mt-1.5 leading-relaxed">
                    Reduces lobby congestion during morning rush hours with lightning-fast cloud check-in sync.
                  </p>
                </div>
              </div>

              {/* Integrated Statistic Panel */}
              <div className="bg-[#EDF6FC] rounded-2xl p-4 border border-[#DCE6EF] space-y-3 shadow-2xs">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-black text-[#1769D2] font-mono tracking-tight">12.4s</span>
                  <span className="text-xs font-bold text-[#27B36A] bg-[#27B36A]/15 border border-[#27B36A]/20 px-2.5 py-0.5 rounded-full">
                    Average Time
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-[#DCE6EF] p-0.5">
                    <div className="bg-gradient-to-r from-[#1769D2] to-[#27B36A] h-full w-[94%] rounded-full" />
                  </div>
                  <p className="text-[11px] font-bold text-[#10243E] flex items-center justify-between">
                    <span>94% reduction in front-desk wait times</span>
                    <span className="text-[#27B36A]">94%</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 3. MEDIUM TILE 2 — TOUCHLESS MOBILE FLOW / ZERO APP (Span 4 cols) */}
            <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1688E8] bg-[#EDF6FC] px-2.5 py-0.5 rounded-full border border-[#DCE6EF]">
                  NO APP DOWNLOAD
                </span>
                <h3 className="text-lg font-bold text-[#10243E]">Native Camera Scan</h3>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  Visitors use their own smartphone camera instead of shared tablets or paper logbooks.
                </p>
              </div>

              {/* Mini Flow Visual */}
              <div className="p-3 bg-[#F3F9FD] rounded-2xl border border-[#DCE6EF] flex items-center justify-between text-xs text-[#10243E] font-bold">
                <span>QR Scan</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1688E8]" />
                <span>Form</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#1688E8]" />
                <span className="text-[#27B36A]">Verified</span>
              </div>
            </div>

            {/* 4. SMALL TILE 1 — SECURE VERIFICATION (Span 4 cols) */}
            <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#16A6A1]/10 text-[#16A6A1] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#10243E]">Secure Verification</h3>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  Every check-in is encrypted and matched with authorized host records.
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-[#10243E]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#27B36A] stroke-[3]" />
                  <span>Verified Identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#27B36A] stroke-[3]" />
                  <span>Host Alerted in Real Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#27B36A] stroke-[3]" />
                  <span>Pass Active &amp; Tracked</span>
                </div>
              </div>
            </div>

            {/* 5. SMALL TILE 2 — CLEAN FRONT DESK (Span 4 cols) */}
            <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#27B36A]/10 text-[#27B36A] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#10243E]">Less Lobby Congestion</h3>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  A faster digital check-in experience keeps the front desk clean, quiet, and moving smoothly.
                </p>
              </div>

              <div className="p-3 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#10243E]">Front Desk Efficiency</span>
                <span className="font-bold text-[#27B36A]">100% Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BEFORE VS. AFTER COMPARISON SECTION (WITH GRAPHICS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Professional background graphics: connected-node lines & radial highlights */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#1769D2]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#27B36A]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (No Eyebrow) */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              Traditional Logbooks vs.{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                VisitOS QR Registration
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              See why modern enterprises are replacing chaotic paper sign-in sheets with streamlined touchless registration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* LEFT: Traditional Manual Registration */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/90 shadow-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-md">
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-red-100">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <XCircle className="w-5 h-5" />
                    <span>Traditional Manual Registration</span>
                  </div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                    Outdated &amp; Insecure
                  </span>
                </div>

                {/* Real Photo of Paper Register */}
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-red-200 relative bg-slate-100">
                  <img
                    src="/assets/features/qr-registration/qr-registration-traditional.jpg"
                    alt="Traditional paper visitor sign in logbook with pen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-red-950/10" />
                </div>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#5F7185]">
                  <li className="flex items-start gap-2 text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Open logbook on reception counter exposes visitor names &amp; client confidentiality.</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Illegible handwritten names and fake phone numbers prevent security audits.</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Receptionist must manually call hosts, causing 5–10 minute lobby bottlenecks.</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-700">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Zero automated headcount during emergency fire roll-call evacuations.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-red-50 rounded-2xl border border-red-100 text-center text-xs font-bold text-red-700">
                Avg. Check-In: 6–8 minutes per visitor
              </div>
            </div>

            {/* RIGHT: VisitOS QR Registration */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#27B36A]/40 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#27B36A]/5 rounded-bl-full pointer-events-none" />

              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between pb-3 border-b border-[#27B36A]/20">
                  <div className="flex items-center gap-2 text-[#27B36A] font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>VisitOS QR Touchless Registration</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#27B36A] bg-[#27B36A]/10 px-2.5 py-0.5 rounded-full border border-[#27B36A]/20">
                    Modern &amp; Compliant
                  </span>
                </div>

                {/* Real Photo of Smartphone Scanning Flow */}
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#27B36A]/30 relative bg-slate-100">
                  <img
                    src="/assets/features/qr-registration/qr-registration-phone.jpg"
                    alt="Smartphone based verified visitor check-in"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#27B36A]/10" />
                </div>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#14263D]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5 stroke-[3]" />
                    <span>100% private registration on personal phone screen—zero onlookers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5 stroke-[3]" />
                    <span>Validated inputs, captured selfie photos, and legally binding digital NDAs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5 stroke-[3]" />
                    <span>Instant omnichannel host push/SMS alert with 1-tap entry approvals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5 stroke-[3]" />
                    <span>Real-time on-premise emergency evacuation roster exportable in 1 click.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-[#27B36A]/10 rounded-2xl border border-[#27B36A]/20 text-center text-xs font-extrabold text-[#27B36A]">
                Avg. Check-In: Under 15 seconds per visitor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SECURITY & WORKFLOW INTEGRATION SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#EDF6FC] border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-[#1769D2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#27B36A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              Registration That Connects to a{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Secure Visitor Workflow
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              Every QR scan initiates an enterprise-grade chain of custody with full encryption, strict isolation, and compliance audit logging.
            </p>
          </div>

          {/* Workflow sequence with Security Badges */}
          <div className="bg-[#10243E] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-10">
              {/* Step Flow Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
                <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-[#1769D2] text-white flex items-center justify-center font-bold text-xs">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">1. QR Scan</h4>
                  <p className="text-[10px] text-slate-400">Lobby perimeter</p>
                </div>

                <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-[#1688E8] text-white flex items-center justify-center font-bold text-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">2. Details</h4>
                  <p className="text-[10px] text-slate-400">Validated fields</p>
                </div>

                <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-[#16A6A1] text-white flex items-center justify-center font-bold text-xs">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">3. Verification</h4>
                  <p className="text-[10px] text-slate-400">TLS 1.3 encrypted</p>
                </div>

                <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-[#27B36A] text-white flex items-center justify-center font-bold text-xs">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">4. Host Approval</h4>
                  <p className="text-[10px] text-slate-400">1-Tap Authorization</p>
                </div>

                <div className="bg-[#0B1F38] p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-gradient-to-r from-[#1769D2] to-[#27B36A] text-white flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white">5. Visitor Pass</h4>
                  <p className="text-[10px] text-slate-400">Auto-expiring badge</p>
                </div>
              </div>

              {/* Security Badges Grid */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                  <ShieldCheck className="w-5 h-5 text-[#27B36A]" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Verified Identity</h5>
                    <p className="text-[10px] text-slate-400">Perimeter validated</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                  <Lock className="w-5 h-5 text-[#1688E8]" />
                  <div>
                    <h5 className="text-xs font-bold text-white">TLS 1.3 / AES-256</h5>
                    <p className="text-[10px] text-slate-400">Encrypted in transit &amp; rest</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                  <UserCheck className="w-5 h-5 text-[#16A6A1]" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Host Pre-Approved</h5>
                    <p className="text-[10px] text-slate-400">Explicit gate control</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                  <Database className="w-5 h-5 text-[#27B36A]" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Audit Ready</h5>
                    <p className="text-[10px] text-slate-400">SOC 2 / ISO 27001 export</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. TARGET ENVIRONMENTS & DEPLOYMENT CONTEXTS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#1769D2]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#16A6A1]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              Target Environments &amp;{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Deployment Contexts
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              Engineered for high-volume corporate lobbies, multi-tenant enterprise buildings, and modern tech workspaces.
            </p>
          </div>

          {/* 3 High-Impact Context Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Environment 1: Corporate HQ */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/assets/solutions/corporate-offices.jpg"
                    alt="Corporate Headquarters reception desk"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1769D2] shadow-xs">
                    Corporate Headquarters
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#10243E] font-sans">
                    Single &amp; Multi-Floor Enterprise HQs
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5F7185] leading-relaxed">
                    Welcoming executive clients, board members, and interview candidates with fast, VIP pre-registration and instant host arrival notices.
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs text-[#14263D]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>1-Tap Host Mobile Authorization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>Executive Wi-Fi &amp; Meeting Room Badges</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/solutions/corporate-offices"
                  className="w-full py-2.5 rounded-2xl bg-[#EDF6FC] hover:bg-[#1769D2] text-[#1769D2] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#DCE6EF] hover:border-[#1769D2]"
                >
                  <span>Explore Corporate Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Environment 2: Multi-Tenant Business Parks */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/assets/solutions/business-parks.jpg"
                    alt="Multi-tenant business park atrium"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#16A6A1] shadow-xs">
                    Business Parks &amp; Towers
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#10243E] font-sans">
                    Multi-Tenant Commercial Properties
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5F7185] leading-relaxed">
                    Centralized lobby registration routing guests to multiple independent tenant companies with strict data privacy between organizations.
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs text-[#14263D]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>Isolated Tenant Workspaces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>Turnstile &amp; Elevator Floor Clearance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/solutions/business-parks-multi-tenant"
                  className="w-full py-2.5 rounded-2xl bg-[#EDF6FC] hover:bg-[#16A6A1] text-[#16A6A1] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#DCE6EF] hover:border-[#16A6A1]"
                >
                  <span>Explore Multi-Tenant Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Environment 3: Tech Campuses & Labs */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCE6EF] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/assets/solutions/it-companies.jpg"
                    alt="Technology campus and R&D lab entrance"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#27B36A] shadow-xs">
                    Tech Campuses &amp; R&amp;D
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#10243E] font-sans">
                    Technology &amp; Innovation Campuses
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#5F7185] leading-relaxed">
                    Protecting intellectual property, server facilities, and research areas with digital NDA signing and photo ID verification at check-in.
                  </p>
                  <div className="pt-2 space-y-1.5 text-xs text-[#14263D]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>Digital NDA &amp; Safety Acknowledgement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>Live Evacuation Headcount Roster</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/solutions/it-companies"
                  className="w-full py-2.5 rounded-2xl bg-[#EDF6FC] hover:bg-[#27B36A] text-[#27B36A] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#DCE6EF] hover:border-[#27B36A]"
                >
                  <span>Explore Tech Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. EXPLORE RELATED FEATURES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-10 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10243E] font-sans">
                Explore Related{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  VisitOS Features
                </span>
              </h3>
            </div>
            <Link
              to="/features"
              className="text-xs font-bold text-[#1769D2] hover:underline flex items-center gap-1 bg-[#EDF6FC] px-3.5 py-1.5 rounded-full border border-[#DCE6EF]"
            >
              <span>View All 8 Modules</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {relatedFeatures.map((rel) => (
              <FeatureCard key={rel.id} feature={rel} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. CONVERSION CTA SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#EDF6FC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#10243E] via-[#0B1F38] to-[#10243E] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-slate-700/80">
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1769D2]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#27B36A]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left CTA Text */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Simplify{' '}
                  <span className="bg-gradient-to-r from-[#1688E8] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                    Visitor Registration?
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Give every visitor a faster, more convenient way to register while keeping your front desk connected to the rest of the visitor workflow.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
                    style={{
                      background: 'linear-gradient(110deg, #1769D2 0%, #1688E8 35%, #16A6A1 70%, #27B36A 100%)'
                    }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all duration-300 cursor-pointer"
                  >
                    <span>Explore VisitOS</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right CTA Visual: Mini QR & Digital Pass Card Preview */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 space-y-3 text-center w-full max-w-xs shadow-xl">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl p-2 flex items-center justify-center shadow-md">
                    <QrCode className="w-10 h-10 text-[#10243E]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">VisitOS QR Terminal</h4>
                    <p className="text-[10px] text-slate-300">Scan at entrance • Zero setup</p>
                  </div>
                  <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-[#27B36A] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Workspace Activation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRVisitorRegistrationPage;
