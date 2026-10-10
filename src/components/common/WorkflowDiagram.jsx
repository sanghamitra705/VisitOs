import React from 'react';
import { 
  Building2, 
  Sliders, 
  BellRing, 
  QrCode, 
  LogIn, 
  ShieldCheck, 
  LogOut,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Organization Registration',
    shortDesc: 'Sign up your company in 2 minutes and claim your dedicated portal.',
    icon: Building2,
    role: 'Org Admin',
  },
  {
    step: 2,
    title: 'Admin Configuration',
    shortDesc: 'Upload branding, define geo-fencing, NDAs, and import staff list.',
    icon: Sliders,
    role: 'Org Admin',
  },
  {
    step: 3,
    title: 'Employee Sync & Alerts',
    shortDesc: 'Staff rosters are synced with automatic mobile and email routing.',
    icon: BellRing,
    role: 'Employee / Host',
  },
  {
    step: 4,
    title: 'Visitor QR Registration',
    shortDesc: 'Guest scans lobby QR or fills touchless tablet form on arrival.',
    icon: QrCode,
    role: 'Visitor',
  },
  {
    step: 5,
    title: 'Visitor Check-In',
    shortDesc: 'Details & selfie photo captured with instant safety compliance check.',
    icon: LogIn,
    role: 'Visitor',
  },
  {
    step: 6,
    title: 'Host Approval',
    shortDesc: 'Employee receives 1-click prompt to Approve or Reschedule the visit.',
    icon: ShieldCheck,
    role: 'Employee / Host',
  },
  {
    step: 7,
    title: 'Visitor Check-Out',
    shortDesc: '1-tap exit scan invalidates pass and updates live emergency headcount.',
    icon: LogOut,
    role: 'Visitor',
  },
];

export const WorkflowDiagram = ({ activeStep, onSelectStep }) => {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Workflow */}
      <div className="hidden lg:grid grid-cols-7 gap-2.5 relative">
        {WORKFLOW_STEPS.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === item.step;
          return (
            <div
              key={item.step}
              onClick={() => onSelectStep && onSelectStep(item.step)}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer relative ${
                isSelected
                  ? 'bg-white border-[#1769D2] ring-2 ring-[#1769D2]/20 shadow-md scale-105 z-10'
                  : 'bg-white/80 hover:bg-white border-[#DCE6EF] hover:border-[#1769D2]/40 shadow-xs'
              }`}
            >
              {/* Top Step Number Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                  isSelected ? 'bg-[#1769D2] text-white' : 'bg-[#EDF6FC] text-[#1769D2]'
                }`}>
                  {item.step}
                </span>
                <span className="text-[9px] font-bold uppercase text-[#5F7185] tracking-wider truncate max-w-[70px]">
                  {item.role.split(' ')[0]}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="space-y-2 mb-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-[#1769D2]/10 text-[#1769D2]' : 'bg-[#EDF6FC] text-[#10243E]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#10243E] leading-snug">
                  {item.title}
                </h4>
              </div>

              <p className="text-[11px] text-[#5F7185] line-clamp-2 leading-relaxed">
                {item.shortDesc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="lg:hidden space-y-3 relative">
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#DCE6EF]" />
        {WORKFLOW_STEPS.map((item) => {
          const Icon = item.icon;
          const isSelected = activeStep === item.step;
          return (
            <div
              key={item.step}
              onClick={() => onSelectStep && onSelectStep(item.step)}
              className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#1769D2] ring-2 ring-[#1769D2]/20 shadow-md'
                  : 'bg-white border-[#DCE6EF] shadow-xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#1769D2] text-white flex items-center justify-center shrink-0 relative z-10 shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1769D2]">Step {item.step}</span>
                  <span className="text-[10px] font-semibold text-[#5F7185] uppercase">{item.role}</span>
                </div>
                <h4 className="text-sm font-bold text-[#10243E]">{item.title}</h4>
                <p className="text-xs text-[#5F7185] mt-1">{item.shortDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
