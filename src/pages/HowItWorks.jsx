import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  QrCode,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { SevenStepJourney } from '../components/home/SevenStepJourney';

export const HowItWorks = () => {
  return (
    <div className="bg-[#F3F9FD] min-h-screen text-[#14263D]">
      <PageHeader
        badge="PROCESS BLUEPRINT"
        title="How VisitOS Powers Frictionless Front-Desk Arrivals"
        subtitle="Explore the complete 7-step digital visitor journey from instant organization setup to touchless exit checkout."
        breadcrumb={[{ label: 'How It Works' }]}
      />

      {/* Main Interactive 7-Step Visitor Journey */}
      <SevenStepJourney />

      {/* Real-World Context Editorial Photo Bridge */}
      <section className="py-8 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[24/8] border border-[#DCE6EF] shadow-lg group">
            <img
              src="/assets/features/qr-registration/qr-registration-arrival.jpg"
              alt="Real world visitor walking into modern corporate reception lobby"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#10243E]/85 via-[#10243E]/45 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-xl text-left space-y-2 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16A6A1] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 inline-block">
                  RECEPTION IN HARMONY
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  Seamless check-ins that protect security without slowing guests down.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200">
                  Every step in VisitOS connects admins, host employees, and visitors in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Perspectives Breakdown */}
      <section className="py-16 sm:py-20 bg-[#EDF6FC] border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Tailored Experience for{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Every User
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#5F7185] mt-3 leading-relaxed font-medium">
              Purpose-built interfaces designed for administrators, hosts, and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Admin */}
            <div className="br-card-interactive bg-white rounded-3xl p-8 border border-[#DCE6EF] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center shadow-2xs transition-all duration-300 group-hover:scale-110">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#10243E]">Organization Admin</h4>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  Full governance over security policies, branch locations, employee rosters, geo-fencing radiuses, and emergency live roll-calls.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DCE6EF]/60 relative z-10">
                <Link
                  to="/workflow/organization-registration"
                  className="text-xs font-bold text-[#1769D2] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Admin Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Host Employee */}
            <div className="br-card-interactive bg-white rounded-3xl p-8 border border-[#DCE6EF] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#16A6A1]/10 text-[#16A6A1] flex items-center justify-center shadow-2xs transition-all duration-300 group-hover:scale-110">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#10243E]">Host Employee</h4>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  Receive instant arrival alerts on mobile and email. Pre-register VIP meeting attendees with calendar invites and fast-track passes.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DCE6EF]/60 relative z-10">
                <Link
                  to="/workflow/host-approval"
                  className="text-xs font-bold text-[#16A6A1] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Host Controls</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Arriving Visitor */}
            <div className="br-card-interactive bg-white rounded-3xl p-8 border border-[#DCE6EF] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#27B36A]/10 text-[#27B36A] flex items-center justify-center shadow-2xs transition-all duration-300 group-hover:scale-110">
                  <QrCode className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-[#10243E]">Arriving Visitor</h4>
                <p className="text-xs text-[#5F7185] leading-relaxed">
                  Zero app downloads. Scan reception QR code, take photo, sign NDA, and receive an encrypted digital visitor pass in seconds.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DCE6EF]/60 relative z-10">
                <Link
                  to="/workflow/visitor-qr-registration"
                  className="text-xs font-bold text-[#27B36A] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Visitor Flow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default HowItWorks;
