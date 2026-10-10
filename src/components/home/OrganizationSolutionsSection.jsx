import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

const INDUSTRY_VERTICALS = [
  {
    id: 'corporate-offices',
    num: '01',
    title: 'Corporate Offices',
    category: 'ENTERPRISE & HQ',
    desc: 'Modern visitor management for professional corporate workplaces with multi-floor host routing.',
    route: '/solutions/corporate-offices',
    icon: Building2,
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85',
    metric: 'Instant VIP Host Alerts',
    keyPoints: [
      'Touchless QR mobile check-in',
      'Digital NDA & compliance capture',
      '1-tap host mobile authorizations'
    ]
  },
  {
    id: 'it-companies',
    num: '02',
    title: 'IT Companies & Tech Parks',
    category: 'TECH & R&D LABS',
    desc: 'Streamlined visitor access and workplace coordination for high-security technology environments.',
    route: '/solutions/it-companies',
    icon: Cpu,
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
    metric: 'IP & Access Governance',
    keyPoints: [
      'Restricted floor & lab authorizations',
      'Visitor photo ID & electronic NDA signing',
      'One-tap email & mobile host approvals'
    ]
  },
  {
    id: 'business-parks-multi-tenant',
    num: '03',
    title: 'Business Parks & Multi-Tenant Facilities',
    category: 'COMMERCIAL REAL ESTATE',
    desc: 'Organize visitor activity across shared commercial developments with granular tenant sub-portals.',
    route: '/solutions/business-parks-multi-tenant',
    icon: Layers,
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
    metric: 'Multi-Tenant Governance',
    keyPoints: [
      'Independent company directories & branding',
      'Shared central lobby registration QR',
      'Facility manager consolidated overview'
    ]
  },
  {
    id: 'educational-institutions-campuses',
    num: '04',
    title: 'Educational Institutions & Campuses',
    category: 'CAMPUSES & UNIVERSITIES',
    desc: 'Support structured visitor registration, parent check-ins, and controlled campus workflows.',
    route: '/solutions/educational-institutions-campuses',
    icon: GraduationCap,
    bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=85',
    metric: 'Campus Entry Visibility',
    keyPoints: [
      'Parent & contractor visitor pass issuance',
      'Multi-gate campus registration checkpoints',
      'Live on-premise headcount overview'
    ]
  },
  {
    id: 'hospitals-healthcare',
    num: '05',
    title: 'Hospitals & Healthcare Facilities',
    category: 'CLINICAL & HEALTHCARE',
    desc: 'Help coordinate visitors in healthcare environments where privacy, hygiene, and visibility matter.',
    route: '/solutions/hospitals-healthcare',
    icon: Stethoscope,
    bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85',
    metric: 'Privacy-Protected Entry',
    keyPoints: [
      'Time-limited visiting hours pass expiration',
      'Confidential digital check-in records',
      'Touchless QR mobile registration'
    ]
  },
  {
    id: 'manufacturing-industrial',
    num: '06',
    title: 'Manufacturing & Industrial Facilities',
    category: 'OPERATIONS & PLANTS',
    desc: 'Support structured visitor processes, safety briefings, and contractor clearance across operational plants.',
    route: '/solutions/manufacturing-industrial',
    icon: Factory,
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
    metric: 'Safety-Verified Clearance',
    keyPoints: [
      'Digital safety briefing & PPE sign-off',
      'Contractor & delivery driver intake',
      'Supervisor entry authorization'
    ]
  }
];

export const OrganizationSolutionsSection = () => {
  const [activeIndustryIdx, setActiveIndustryIdx] = useState(0);

  const activeInd = INDUSTRY_VERTICALS[activeIndustryIdx];
  const ActiveIcon = activeInd.icon;

  return (
    <section 
      aria-label="Industry Solutions"
      className="py-18 sm:py-22 lg:py-26 bg-[#F8FAFC] border-b border-[#DCE7F2] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-[#1769D2]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-[#16A6A1]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-[#09213F] font-sans leading-[1.12] mb-4">
            Designed for Different Workplaces.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]">
              Built on One Platform.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#52667D] leading-relaxed max-w-2xl mx-auto font-normal">
            VisitOS adapts visitor management workflows to the needs of different workplace environments.
          </p>
        </div>

        {/* Split Editorial Layout: Left Interactive Numbered List | Right Dynamic Featured Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: 6 Numbered Industry Items (6 cols) */}
          <div className="lg:col-span-6 space-y-1 divide-y divide-[#E2EDF7]">
            {INDUSTRY_VERTICALS.map((ind, idx) => {
              const isActive = activeIndustryIdx === idx;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustryIdx(idx)}
                  className={`pt-3.5 pb-3.5 px-3.5 rounded-2xl transition-all duration-200 cursor-pointer text-left ${
                    isActive 
                      ? 'bg-white border-l-4 border-l-[#1769D2] pl-4 shadow-sm border border-[#DCE7F2]' 
                      : 'hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive 
                          ? 'bg-[#1769D2] text-white' 
                          : 'bg-[#EBF4FE] text-[#1769D2]'
                      }`}>
                        {ind.num}
                      </span>
                      <div>
                        <h3 className={`text-base font-bold font-sans transition-colors ${
                          isActive ? 'text-[#1769D2]' : 'text-[#09213F] hover:text-[#1769D2]'
                        }`}>
                          {ind.title}
                        </h3>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs sm:text-[13px] text-[#52667D] leading-relaxed mt-1 font-normal"
                          >
                            {ind.desc}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                      isActive ? 'text-[#1769D2] translate-x-1' : 'text-[#A0B0C0] opacity-50'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Large Featured Industry Showcase Photograph (6 cols) */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInd.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border border-[#DCE7F2] min-h-[420px] flex flex-col justify-between p-6 sm:p-8 text-white"
              >
                {/* Background Image */}
                <img
                  src={activeInd.bgImage}
                  alt={activeInd.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark Gradient Overlay for optimal legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08172B]/95 via-[#08172B]/60 to-[#08172B]/30" />

                {/* Top Badge & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white shadow-xs">
                    {activeInd.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#1769D2] text-white flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content, Key Highlights & CTA */}
                <div className="relative z-10 space-y-4 pt-12">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight mb-2">
                      {activeInd.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {activeInd.desc}
                    </p>
                  </div>

                  {/* 3 Key Points */}
                  <div className="space-y-2 py-2 border-t border-white/15">
                    {activeInd.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#16A6A1] flex items-center gap-1 font-mono">
                      <span>✓ {activeInd.metric}</span>
                    </span>

                    <Link
                      to={activeInd.route}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#09213F] hover:bg-[#EDF6FC] font-bold text-xs shadow-md transition-all group/btn"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1769D2] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OrganizationSolutionsSection;
