import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Clock, 
  Activity, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const SlideWorkplaceSafety = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl border border-[#D9E7F1] shadow-lg p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden">
      {/* Slide Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D9E7F1]">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#10243E] tracking-tight font-sans">
            A Smarter, Safer Workplace
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#50657C] max-w-md sm:text-right">
          Real-time visibility, emergency roll-calls, and automated perimeter safety in one platform.
        </p>
      </div>

      {/* Main Content: Left Capabilities + Right Refined Telemetry Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center my-auto py-3">
        {/* Left Column: Key Operational Benefits */}
        <div className="lg:col-span-5 space-y-3 text-left">
          <div className="p-3.5 bg-[#EDF6FC] rounded-2xl border border-[#D9E7F1] space-y-1">
            <div className="flex items-center gap-2 text-[#10243E] font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#20B978] shrink-0" />
              <span>Real-Time Emergency Roll-Calls</span>
            </div>
            <p className="text-[11px] text-[#50657C] pl-6 leading-relaxed">
              Instant live muster list generated on mobile devices during drills and evacuations.
            </p>
          </div>

          <div className="p-3.5 bg-[#EDF6FC] rounded-2xl border border-[#D9E7F1] space-y-1">
            <div className="flex items-center gap-2 text-[#10243E] font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#1769D2] shrink-0" />
              <span>Perimeter & Turnstile Coordination</span>
            </div>
            <p className="text-[11px] text-[#50657C] pl-6 leading-relaxed">
              Automated gate clearance ensuring only verified guests pass facility security perimeters.
            </p>
          </div>

          <div className="p-3.5 bg-[#E8FAF3] rounded-2xl border border-[#D9E7F1] space-y-1">
            <div className="flex items-center gap-2 text-[#10243E] font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
              <span>Multi-Zone Facility Visibility</span>
            </div>
            <p className="text-[11px] text-[#50657C] pl-6 leading-relaxed">
              Accurate live tallies across floors, wings, and multi-tenant commercial suites.
            </p>
          </div>
        </div>

        {/* Right Column: Clean Integrated Dark Product Preview Frame */}
        <div className="lg:col-span-7 bg-[#102B46] rounded-2xl p-4 sm:p-5 border border-[#1769D2]/30 text-white shadow-xl space-y-3.5 text-left">
          {/* Top telemetry bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#20B978] animate-pulse" />
              <span className="font-bold text-white">Central Security Hub</span>
              <span className="text-slate-400 text-[11px] hidden sm:inline">• Live Feed</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-black/30 text-[#67E8D5] text-[10px] font-mono border border-white/10">
              Muster Ready • 100%
            </span>
          </div>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-300 block font-medium">On-Premise</span>
              <span className="text-lg font-black text-[#5EEAD4] font-sans">48</span>
            </div>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-300 block font-medium">Pending Auth</span>
              <span className="text-lg font-black text-[#67E8D5] font-sans">3</span>
            </div>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-300 block font-medium">Today's Visits</span>
              <span className="text-lg font-black text-[#7DD3FC] font-sans">142</span>
            </div>
          </div>

          {/* Arrival Distribution Curve Visual */}
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center justify-between text-[11px] mb-2 text-slate-300">
              <span className="font-semibold">Hourly Traffic Distribution</span>
              <span className="text-[10px] text-[#5EEAD4] font-mono">Peak: 10:15 AM</span>
            </div>
            <div className="grid grid-cols-7 gap-1.5 items-end h-10">
              {[25, 45, 80, 100, 70, 40, 20].map((val, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-t ${idx === 3 ? 'bg-gradient-to-t from-[#1769D2] to-[#20B978]' : 'bg-slate-600/60'}`}
                  style={{ height: `${val}%` }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer with CTA Link */}
      <div className="flex items-center justify-between pt-3 border-t border-[#D9E7F1] text-xs">
        <span className="text-[11px] text-[#50657C] hidden sm:inline">
          ✓ Real-time cloud sync with zero on-prem server maintenance
        </span>
        <Link 
          to="/features/analytics-dashboard"
          className="inline-flex items-center gap-1.5 font-bold text-[#0D9488] hover:text-[#1769D2] transition-colors ml-auto text-xs"
        >
          <span>Explore analytics &amp; reporting</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

export default SlideWorkplaceSafety;
