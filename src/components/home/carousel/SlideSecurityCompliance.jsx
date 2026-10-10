import React from 'react';
import { 
  ShieldCheck, 
  BellRing, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Lock,
  Download,
  QrCode
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SlideSecurityCompliance = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl border border-[#D9E7F1] shadow-lg p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden">
      {/* Slide Header: Clean, single centered or natural heading without badge or right paragraph */}
      <div className="pb-3 border-b border-[#D9E7F1]">
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#10243E] tracking-tight font-sans text-left">
          Built for Security, Speed &amp; Compliance
        </h3>
      </div>

      {/* Main Content: 3 Distinct Coordinated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 my-auto py-3">
        {/* Card 1: Enhanced Security (Blue) */}
        <div 
          className="rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-left text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{
            background: 'linear-gradient(145deg, #1769D2 0%, #1688E8 100%)',
            border: '1px solid rgba(189, 232, 255, 0.35)'
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-[#BDE8FF]">
                <ShieldCheck className="w-4 h-4 text-[#BDE8FF]" />
              </div>
              <span className="text-[10px] font-mono text-[#F2F8FF] bg-black/20 px-2 py-0.5 rounded-full border border-white/20">
                TLS 1.3 / AES-256
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-1.5 font-sans">
              Enhanced Security
            </h4>
            <p className="text-xs text-[#F2F8FF] leading-relaxed font-normal">
              Eliminate paper log privacy risks with photo ID validation, e-NDA signing, and encrypted visitor passes before premises entry.
            </p>
          </div>

          <div className="mt-4 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] text-[#BDE8FF] font-semibold">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> Zero Log Tampering
            </span>
            <span className="font-mono text-[10px] text-[#F2F8FF]/80">Encrypted</span>
          </div>
        </div>

        {/* Card 2: Real-Time Notifications (Teal/Green) */}
        <div 
          className="rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-left text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{
            background: 'linear-gradient(145deg, #078C88 0%, #16A6A1 55%, #20B879 100%)',
            border: '1px solid rgba(185, 255, 240, 0.35)'
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-[#B9FFF0]">
                <BellRing className="w-4 h-4 text-[#B9FFF0]" />
              </div>
              <span className="text-[10px] font-mono text-[#F0FFFC] bg-black/20 px-2 py-0.5 rounded-full border border-white/20">
                &lt; 30s Latency
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-1.5 font-sans">
              Real-Time Notifications
            </h4>
            <p className="text-xs text-[#F0FFFC] leading-relaxed font-normal">
              Connect visitors directly with their hosts via instant SMS and push alerts, removing reception queues and unannounced arrivals.
            </p>
          </div>

          <div className="mt-4 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] text-[#B9FFF0] font-semibold">
            <span className="flex items-center gap-1">
              <QrCode className="w-3.5 h-3.5" /> 1-Tap Mobile Auth
            </span>
            <span className="font-mono text-[10px] text-[#F0FFFC]/80">Multi-Channel</span>
          </div>
        </div>

        {/* Card 3: Data-Driven Insights (Deep Blue/Teal) */}
        <div 
          className="rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-left text-white shadow-md relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          style={{
            background: 'linear-gradient(145deg, #125A83 0%, #167FA0 55%, #159D9A 100%)',
            border: '1px solid rgba(184, 243, 255, 0.35)'
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-[#B8F3FF]">
                <BarChart3 className="w-4 h-4 text-[#B8F3FF]" />
              </div>
              <span className="text-[10px] font-mono text-[#F1FAFF] bg-black/20 px-2 py-0.5 rounded-full border border-white/20">
                CSV / PDF Export
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-[#FFFFFF] mb-1.5 font-sans">
              Data-Driven Insights
            </h4>
            <p className="text-xs text-[#F1FAFF] leading-relaxed font-normal">
              Access searchable visit records, peak arrival trends, and automated compliance exports ready for enterprise safety audits.
            </p>
          </div>

          <div className="mt-4 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] text-[#B8F3FF] font-semibold">
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> 100% Audit Ready
            </span>
            <span className="font-mono text-[10px] text-[#F1FAFF]/80">Immutable</span>
          </div>
        </div>
      </div>

      {/* Slide Footer with CTA Link */}
      <div className="flex items-center justify-between pt-3 border-t border-[#D9E7F1] text-xs">
        <span className="text-[11px] text-[#50657C] hidden sm:inline">
          ✓ Enterprise SOC 2 and GDPR compliance alignment
        </span>
        <Link 
          to="/features"
          className="inline-flex items-center gap-1.5 font-bold text-[#1769D2] hover:text-[#0D9488] transition-colors ml-auto text-xs"
        >
          <span>Explore all 8 platform features</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default SlideSecurityCompliance;
