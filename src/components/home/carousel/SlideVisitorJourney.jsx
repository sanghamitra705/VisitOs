import React from 'react';
import { 
  QrCode, 
  Smartphone, 
  UserCheck, 
  ShieldCheck, 
  LogOut, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import cardVerificationImg from '../../../assets/card-verification-kiosk.jpg';

export const SlideVisitorJourney = () => {
  const steps = [
    {
      num: '01',
      title: 'Pre-Registration',
      tag: 'Fast Invite',
      desc: 'Hosts create calendar invites with embedded visitor pre-check-in links.',
      icon: Smartphone,
      color: '#1769D2',
      bg: '#EDF6FC',
      border: '#D9E7F1'
    },
    {
      num: '02',
      title: 'QR Check-In',
      tag: 'Zero-App Scan',
      desc: 'Guest scans the lobby stand; verified contact credentials load in < 15s.',
      icon: QrCode,
      color: '#1688E8',
      bg: '#EDF6FC',
      border: '#D9E7F1'
    },
    {
      num: '03',
      title: 'Host Approval',
      tag: '1-Tap Auth',
      desc: 'Host receives instant push notification and clears access from any device.',
      icon: UserCheck,
      color: '#0D9488',
      bg: '#E8FAF3',
      border: '#D9E7F1'
    },
    {
      num: '04',
      title: 'Digital Visitor Pass',
      tag: 'Live Badge',
      desc: 'Encrypted QR badge is issued with visitor Wi-Fi and turnstile authorization.',
      icon: ShieldCheck,
      color: '#20B978',
      bg: '#E8FAF3',
      border: '#D9E7F1'
    },
    {
      num: '05',
      title: 'Secure Exit',
      tag: 'Auto-Timestamp',
      desc: 'Quick 1-tap exit scan ensures accurate live building evacuation tallies.',
      icon: LogOut,
      color: '#086B70',
      bg: '#EDF6FC',
      border: '#D9E7F1'
    }
  ];

  return (
    <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl border border-[#D9E7F1] shadow-lg p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden">
      {/* Slide Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D9E7F1]">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#10243E] tracking-tight font-sans">
            From Arrival to Approval
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#50657C] max-w-md sm:text-right">
          A seamless visitor journey designed for modern, secure enterprise workplaces.
        </p>
      </div>

      {/* Main Content Composition: Left Reception Photo + Right Connected Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center my-auto py-3">
        {/* Left: Prominent Reception Photo with Integrated Live Badge */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#D9E7F1] bg-[#10243E] shadow-md aspect-[16/10] sm:aspect-[16/11] lg:aspect-auto lg:h-[310px]">
          <img
            src={cardVerificationImg}
            alt="Visitor arriving and verifying identity at corporate reception check-in kiosk"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/90 via-[#10243E]/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-white/40 shadow-xs flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20B978] animate-pulse" />
              <span className="font-bold text-[#10243E] text-[11px]">Reception Gate Terminal • Active</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#1769D2] bg-[#EDF6FC] px-2 py-0.5 rounded-md">
              &lt; 15s Check-In
            </span>
          </div>
        </div>

        {/* Right: Connected 5-Step Workflow Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`p-3 sm:p-3.5 rounded-xl border border-[#D9E7F1] bg-[#F3F9FD] hover:bg-white hover:border-[#1769D2]/40 hover:shadow-xs transition-all duration-200 text-left flex flex-col justify-between ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div 
                        className="w-6 h-6 rounded-md flex items-center justify-center text-white shrink-0 shadow-2xs"
                        style={{ backgroundColor: step.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-[10px] font-black text-[#50657C]">{step.num}</span>
                    </div>
                    <span 
                      className="text-[9.5px] font-bold px-1.5 py-0.5 rounded border border-[#D9E7F1]"
                      style={{ color: step.color, backgroundColor: step.bg }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#10243E]">{step.title}</h4>
                  <p className="text-[11px] text-[#50657C] mt-0.5 leading-snug">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Footer with CTA Link */}
      <div className="flex items-center justify-between pt-3 border-t border-[#D9E7F1] text-xs">
        <span className="text-[11px] text-[#50657C] hidden sm:inline">
          ✓ Compatible with iOS, Android, QR Scanners, and Reception Kiosks
        </span>
        <Link 
          to="/how-it-works"
          className="inline-flex items-center gap-1.5 font-bold text-[#1769D2] hover:text-[#0D9488] transition-colors ml-auto text-xs"
        >
          <span>Explore 7-step visitor journey</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default SlideVisitorJourney;
