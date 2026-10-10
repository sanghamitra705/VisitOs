import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BellRing, 
  BarChart3, 
  Lock, 
  QrCode, 
  FileText, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  UserCheck, 
  Calendar, 
  Activity, 
  Sparkles,
  Shield,
  Layers,
  Award
} from 'lucide-react';

export const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: '01',
      category: 'ENHANCED SECURITY',
      title: 'Enhanced Security',
      description: 'Enforce verified host approvals, photo ID capture, and GPS geo-fencing to ensure zero unauthorized visitors enter your premises.',
      link: '/features/secure-visitor-data-management',
      accentColor: '#1769D2',
      renderVisual: () => (
        <div className="relative w-full h-[220px] flex items-center justify-center select-none">
          {/* Subtle Circular Concentric Halo Layers */}
          <div className="absolute w-[180px] h-[180px] rounded-full border border-[#1769D2]/10 bg-gradient-to-b from-[#1769D2]/5 to-transparent pointer-events-none" />
          <div className="absolute w-[140px] h-[140px] rounded-full border border-[#1688E8]/15 bg-[#EDF6FC]/50 pointer-events-none" />

          {/* Layered Document / Verification Cards Behind */}
          <div className="absolute -left-1 sm:left-2 top-8 w-24 h-28 bg-white rounded-xl shadow-md border border-[#DCE6EF] p-2.5 transform -rotate-12 transition-transform duration-300 group-hover:-rotate-16">
            <div className="flex items-center justify-between mb-2">
              <div className="w-5 h-5 rounded-md bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                <FileText className="w-3 h-3" />
              </div>
              <span className="text-[8px] font-bold text-[#1769D2] bg-[#EDF6FC] px-1.5 py-0.5 rounded">PDF</span>
            </div>
            <div className="space-y-1">
              <div className="w-12 h-1.5 bg-[#DCE6EF] rounded-full" />
              <div className="w-14 h-1.5 bg-[#EDF6FC] rounded-full" />
              <div className="w-10 h-1.5 bg-[#EDF6FC] rounded-full" />
            </div>
          </div>

          <div className="absolute -right-1 sm:right-2 top-6 w-24 h-28 bg-white rounded-xl shadow-md border border-[#DCE6EF] p-2.5 transform rotate-12 transition-transform duration-300 group-hover:rotate-16">
            <div className="flex items-center justify-between mb-2">
              <div className="w-5 h-5 rounded-md bg-[#16A6A1]/15 text-[#16A6A1] flex items-center justify-center">
                <FileCheck className="w-3 h-3" />
              </div>
              <span className="text-[8px] font-bold text-[#16A6A1] bg-[#16A6A1]/10 px-1.5 py-0.5 rounded">DOC</span>
            </div>
            <div className="space-y-1">
              <div className="w-14 h-1.5 bg-[#DCE6EF] rounded-full" />
              <div className="w-10 h-1.5 bg-[#EDF6FC] rounded-full" />
              <div className="w-12 h-1.5 bg-[#EDF6FC] rounded-full" />
            </div>
          </div>

          {/* Central Security Lock Emblem / Circular Badge */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl border border-[#1769D2]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#1769D2] via-[#1688E8] to-[#16A6A1] flex items-center justify-center text-white shadow-md">
              <Lock className="w-8 h-8 drop-shadow-sm" />
            </div>
          </div>

          {/* Miniature Floating Verification Pill */}
          <div className="absolute -bottom-2 z-20 bg-white rounded-full px-3 py-1 shadow-md border border-[#DCE6EF] flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A]" />
            <span className="text-[10px] font-bold text-[#10243E]">ID & GPS Verified</span>
          </div>
        </div>
      )
    },
    {
      id: '02',
      category: 'REAL-TIME NOTIFICATIONS',
      title: 'Real-Time Notifications',
      description: 'Hosts receive instant alerts via SMS and Email the exact second a guest registers, allowing 1-click approvals from anywhere.',
      link: '/features/real-time-notifications',
      accentColor: '#16A6A1',
      renderVisual: () => (
        <div className="relative w-full h-[220px] flex items-center justify-center select-none">
          {/* Subtle Circular Halo Layers */}
          <div className="absolute w-[180px] h-[180px] rounded-full border border-[#16A6A1]/15 bg-gradient-to-b from-[#16A6A1]/5 to-transparent pointer-events-none" />
          <div className="absolute w-[140px] h-[140px] rounded-full border border-[#27B36A]/20 bg-[#F3F9FD]/60 pointer-events-none" />

          {/* Layered Horizontal Notification Surfaces Behind */}
          <div className="absolute top-7 w-[200px] bg-white/90 rounded-xl shadow-sm border border-[#DCE6EF] px-3 py-2 transform scale-90 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#1769D2]/20 text-[#1769D2] flex items-center justify-center">
                <Calendar className="w-2.5 h-2.5" />
              </div>
              <div className="w-24 h-2 bg-[#DCE6EF] rounded-full" />
            </div>
          </div>

          <div className="absolute top-12 w-[220px] bg-white/95 rounded-xl shadow-md border border-[#DCE6EF] px-3 py-2 transform scale-95 opacity-85">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#16A6A1]/20 text-[#16A6A1] flex items-center justify-center">
                  <UserCheck className="w-2.5 h-2.5" />
                </div>
                <div className="w-28 h-2 bg-[#10243E]/30 rounded-full" />
              </div>
              <span className="text-[8px] font-bold text-[#5F7185]">2m ago</span>
            </div>
          </div>

          {/* Central Shield / Notification Focus Emblem */}
          <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-xl border border-[#16A6A1]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-18 h-18 rounded-xl bg-gradient-to-tr from-[#16A6A1] via-[#1688E8] to-[#27B36A] flex items-center justify-center text-white shadow-md">
              <BellRing className="w-8 h-8 drop-shadow-sm" />
            </div>
          </div>

          {/* Miniature Floating Action Pill */}
          <div className="absolute -bottom-2 z-20 bg-white rounded-full px-3 py-1 shadow-md border border-[#DCE6EF] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse" />
            <span className="text-[10px] font-bold text-[#10243E]">Instant 1-Click Approval</span>
          </div>
        </div>
      )
    },
    {
      id: '03',
      category: 'DATA-DRIVEN INSIGHTS',
      title: 'Data-Driven Insights',
      description: 'Access real-time emergency headcount roll-calls, peak traffic heatmaps, and tamper-proof compliance logs instantly.',
      link: '/features/analytics-dashboard',
      accentColor: '#27B36A',
      renderVisual: () => (
        <div className="relative w-full h-[220px] flex items-center justify-center select-none">
          {/* Subtle Circular Halo Layers */}
          <div className="absolute w-[180px] h-[180px] rounded-full border border-[#27B36A]/15 bg-gradient-to-b from-[#27B36A]/5 to-transparent pointer-events-none" />
          <div className="absolute w-[140px] h-[140px] rounded-full border border-[#1769D2]/15 bg-[#EDF6FC]/50 pointer-events-none" />

          {/* Left SOC 2 Type II Circular Badge */}
          <div className="absolute -left-1 sm:left-2 top-8 w-20 h-20 rounded-full bg-gradient-to-br from-[#1769D2] to-[#1688E8] text-white p-1 shadow-lg border-2 border-white flex flex-col items-center justify-center text-center transform -rotate-6 transition-transform duration-300 group-hover:scale-105">
            <span className="text-[7px] uppercase font-bold tracking-widest text-white/80">AICPA</span>
            <span className="text-[9px] font-black leading-tight">SOC 2</span>
            <span className="text-[6.5px] font-semibold text-white/90">TYPE II</span>
          </div>

          {/* Right GDPR & ISO Compliance Badge */}
          <div className="absolute -right-1 sm:right-2 top-10 w-22 h-22 rounded-full bg-gradient-to-br from-[#16A6A1] to-[#27B36A] text-white p-1.5 shadow-xl border-2 border-white flex flex-col items-center justify-center text-center transform rotate-6 transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-black leading-tight">COMPLIANT</span>
            <span className="text-[6.5px] font-semibold text-white/90">99.9% Verified</span>
          </div>

          {/* Central Analytics Emblem */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white shadow-xl border border-[#27B36A]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#1769D2] via-[#16A6A1] to-[#27B36A] flex items-center justify-center text-white shadow-md">
              <BarChart3 className="w-8 h-8 drop-shadow-sm" />
            </div>
          </div>

          {/* Miniature Floating Metric Pill */}
          <div className="absolute -bottom-2 z-20 bg-white rounded-full px-3 py-1 shadow-md border border-[#DCE6EF] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#1769D2]" />
            <span className="text-[10px] font-bold text-[#10243E]">Live Headcount & Audits</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#DCE6EF]">
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-20 left-10 w-[420px] h-[420px] bg-[#1769D2]/3 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#16A6A1]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF6FC] border border-[#1769D2]/20 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#1769D2]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
              WHY UPGRADE TO VISITOR_OS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-tight font-sans">
            Built for Security, Speed & Compliance
          </h2>
          <p className="mt-3.5 text-base text-[#5F7185] max-w-2xl mx-auto leading-relaxed">
            Say goodbye to messy paper logbooks and reception bottlenecks with an enterprise front-desk OS.
          </p>
        </div>

        {/* 3 Human-Designed Cards (Reference 1 Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group bg-white rounded-[28px] p-7 sm:p-8 border border-[#DCE6EF] hover:border-[#1769D2]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* TOP: Card Title & Category */}
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5F7185] block mb-1">
                  {card.category}
                </span>
                <h3 className="text-xl sm:text-[22px] font-bold text-[#10243E] font-sans">
                  {card.title}
                </h3>
              </div>

              {/* MIDDLE: Large Central Product Visual Area */}
              <div className="my-6">
                {card.renderVisual()}
              </div>

              {/* BOTTOM: Description and Clean CTA */}
              <div className="mt-4 pt-4 border-t border-[#F3F9FD] text-left">
                <p className="text-xs sm:text-[13px] text-[#5F7185] leading-relaxed mb-4 min-h-[54px]">
                  {card.description}
                </p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769D2] hover:text-[#1688E8] group-hover:translate-x-1 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
