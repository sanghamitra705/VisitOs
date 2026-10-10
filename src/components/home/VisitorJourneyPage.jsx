import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  QrCode, 
  FileText,
  BellRing, 
  ShieldCheck, 
  LogOut, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Clock, 
  Zap,
  Check,
  Shield,
  Send,
  Smartphone
} from 'lucide-react';

export const VisitorJourneyPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Pre-Registration',
      category: 'INVITE',
      subtitle: 'Calendar invite & QR pre-sent',
      icon: Calendar,
      gradient: 'from-[#1769D2] to-[#1688E8]',
      accent: '#1769D2',
      badge: 'Invite Sent',
      miniDetail: 'Host sends calendar pass'
    },
    {
      number: '02',
      title: 'QR Check-In',
      category: 'KIOSK SCAN',
      subtitle: 'Touchless kiosk scan',
      icon: QrCode,
      gradient: 'from-[#1688E8] to-[#16A6A1]',
      accent: '#1688E8',
      badge: '3s Scan',
      miniDetail: 'Camera & face match'
    },
    {
      number: '03',
      title: 'Visitor Details',
      category: 'VERIFICATION',
      subtitle: 'NDA signed & ID verified',
      icon: FileText,
      gradient: 'from-[#16A6A1] to-[#20C997]',
      accent: '#16A6A1',
      badge: 'NDA Cleared',
      miniDetail: 'Government ID matched'
    },
    {
      number: '04',
      title: 'Host Approval',
      category: 'INSTANT ALERT',
      subtitle: 'Instant SMS / Email alert',
      icon: BellRing,
      gradient: 'from-[#20C997] to-[#27B36A]',
      accent: '#20C997',
      badge: '1-Click OK',
      miniDetail: 'Host approves from mobile'
    },
    {
      number: '05',
      title: 'Digital Pass',
      category: 'ACCESS BADGE',
      subtitle: 'Badge generated on phone',
      icon: ShieldCheck,
      gradient: 'from-[#27B36A] to-[#16A6A1]',
      accent: '#27B36A',
      badge: 'Pass Active',
      miniDetail: 'Turnstile & Wi-Fi open'
    },
    {
      number: '06',
      title: 'Secure Exit',
      category: 'AUDIT LOG',
      subtitle: 'Contactless tap-out audit',
      icon: LogOut,
      gradient: 'from-[#1769D2] to-[#0B1F38]',
      accent: '#10243E',
      badge: 'Logged Out',
      miniDetail: 'Evacuation roll updated'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
        
        {/* LEFT COLUMN: Narrative, Heading, Value Propositions, CTA */}
        <div className="lg:col-span-4 text-left flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#16A6A1]/25 shadow-2xs w-fit">
            <span className="w-2 h-2 rounded-full bg-[#16A6A1] animate-pulse" />
            <span className="text-[10.5px] font-black tracking-widest text-[#16A6A1] uppercase font-mono">
              02 • VISITOR JOURNEY
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0B1F38] font-sans tracking-tight leading-[1.15]">
            From Arrival to Approval
          </h3>

          <p className="text-sm sm:text-[15px] font-bold text-[#1769D2]">
            A seamless visitor journey designed for modern workplaces.
          </p>

          <p className="text-xs sm:text-[13px] text-[#4A5D73] leading-relaxed font-medium">
            Replace friction with flow. Experience automated end-to-end orchestration from pre-registration invite dispatch to zero-wait turnstile badges and live departure logs.
          </p>

          {/* Key Value Micro-Pills */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>Touchless QR scan in under 3 seconds</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>Instant host SMS & email dispatch</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#0B1F38] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
              <span>Automated roll-call & emergency muster logs</span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 brand-btn-gradient cursor-pointer"
            >
              <span>Explore How It Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Connected Flowing Journey Canvas with Colorful Nodes & Travelling Particles */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="relative rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 lg:p-7 border border-[#16A6A1]/25 bg-gradient-to-br from-[#EDF8F6] via-[#E2F4F0] to-[#E9F3FC] shadow-xl shadow-[#16A6A1]/6 overflow-hidden">
            
            {/* Atmospheric Background Lighting */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#1769D2]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#27B36A]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/50 pointer-events-none opacity-40" />

            {/* Workflow Canvas Top Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-[#DCE6EF]/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse shadow-[0_0_8px_#27B36A]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1F38] font-sans">
                  VisitOS Live Journey Architecture
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-[#1769D2] bg-white/90 px-2.5 py-0.5 rounded-full border border-[#1769D2]/25 shadow-2xs">
                  ⚡ 12-Second Check-In
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold text-[#27B36A] bg-white/90 px-2.5 py-0.5 rounded-full border border-[#27B36A]/25 shadow-2xs">
                  100% Paperless
                </span>
              </div>
            </div>

            {/* 6 Connected Workflow Steps in a 3x2 or 6-Column Grid with Flow Line */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-stretch">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={idx} className="relative flex flex-col group">
                    
                    {/* Connecting Line between steps on Desktop */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-1/2 w-full h-[2.5px] bg-gradient-to-r from-white via-[#16A6A1]/40 to-white z-0">
                        {/* Animated traveling dot along the path */}
                        <motion.div
                          animate={{ x: [0, 50, 0] }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.35 }}
                          className="w-2 h-2 rounded-full bg-[#16A6A1] -mt-[3px] shadow-[0_0_8px_#16A6A1]"
                        />
                      </div>
                    )}

                    {/* Step Card */}
                    <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-white hover:border-[#16A6A1]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full text-left">
                      {/* Step Header */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[8.5px] font-mono font-black text-[#1769D2] bg-[#EDF6FC] px-1.5 py-0.5 rounded">
                            {step.number}
                          </span>
                          <div
                            className={`w-7 h-7 rounded-xl bg-gradient-to-tr ${step.gradient} flex items-center justify-center text-white shadow-sm transform transition-transform group-hover:scale-110`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <span className="text-[7.5px] font-bold uppercase tracking-wider text-[#5F7185] block truncate">
                          {step.category}
                        </span>

                        <h4 className="text-[12px] font-extrabold text-[#0B1F38] font-sans leading-tight mt-0.5 mb-1">
                          {step.title}
                        </h4>

                        <p className="text-[9.5px] text-[#5F7185] leading-snug line-clamp-2">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Mini Badge */}
                      <div className="mt-2.5 pt-1.5 border-t border-[#F1F5F9] flex items-center justify-between">
                        <span
                          className="text-[7.5px] font-bold px-1.5 py-0.5 rounded-full bg-[#EDF6FC] text-[#1769D2]"
                        >
                          {step.badge}
                        </span>
                        <Check className="w-3 h-3 text-[#27B36A]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Workflow Bottom Status Bar */}
            <div className="relative z-10 mt-5 pt-3.5 border-t border-[#DCE6EF]/80 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#5F7185]">
              <div className="flex items-center gap-4 font-bold tracking-wider text-[#0B1F38] text-[10px] uppercase">
                <span className="flex items-center gap-1.5 text-[#1769D2]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" /> SIMPLE
                </span>
                <span className="flex items-center gap-1.5 text-[#16A6A1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A6A1]" /> CONNECTED
                </span>
                <span className="flex items-center gap-1.5 text-[#27B36A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27B36A]" /> SECURE
                </span>
              </div>
              <div className="text-[10.5px] font-semibold text-[#4A5D73]">
                <span>Deployed across 150+ Enterprise Head Offices</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
