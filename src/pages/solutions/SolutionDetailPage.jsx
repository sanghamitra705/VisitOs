import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  AlertTriangle, 
  FileCheck, 
  ChevronRight, 
  TrendingUp, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory,
  BellRing,
  UserCheck,
  Lock,
  Zap,
  MapPin
} from 'lucide-react';
import { PageHeader } from '../../components/common/PageHeader';
import { CTASection } from '../../components/common/CTASection';
import { Button } from '../../components/common/Button';
import { SolutionCard } from '../../components/common/SolutionCard';
import { SOLUTIONS_DATA } from '../../data/solutions';

export const SolutionDetailPage = ({ slug: explicitSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = explicitSlug || paramSlug;

  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug || s.id === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = solution.icon;
  const otherSolutions = SOLUTIONS_DATA.filter((s) => s.slug !== solution.slug).slice(0, 3);

  // Industry-specific photo and sticker mapping
  const getIndustryVisuals = () => {
    switch (solution.slug) {
      case 'corporate-offices':
        return {
          image: '/assets/solutions/corporate-offices.jpg',
          stickerLabel: 'HOST NOTIFIED',
          stickerIcon: BellRing,
          stickerColor: '#1769D2'
        };
      case 'it-companies':
        return {
          image: '/assets/solutions/it-companies.jpg',
          stickerLabel: 'EMPLOYEE APPROVED',
          stickerIcon: UserCheck,
          stickerColor: '#16A6A1'
        };
      case 'business-parks-multi-tenant':
      case 'business-parks':
        return {
          image: '/assets/solutions/business-parks.jpg',
          stickerLabel: 'TENANT ALERTED',
          stickerIcon: Building2,
          stickerColor: '#1688E8'
        };
      case 'educational-institutions-campuses':
      case 'educational-institutions':
        return {
          image: '/assets/solutions/campuses.jpg',
          stickerLabel: 'VISITOR VERIFIED',
          stickerIcon: ShieldCheck,
          stickerColor: '#27B36A'
        };
      case 'hospitals-healthcare':
      case 'healthcare':
        return {
          image: '/assets/solutions/healthcare.jpg',
          stickerLabel: 'SECURE ENTRY',
          stickerIcon: Lock,
          stickerColor: '#16A6A1'
        };
      case 'manufacturing-industrial':
      case 'manufacturing':
        return {
          image: '/assets/solutions/manufacturing.jpg',
          stickerLabel: 'ACCESS VERIFIED',
          stickerIcon: Zap,
          stickerColor: '#1769D2'
        };
      default:
        return {
          image: '/assets/solutions/corporate-offices.jpg',
          stickerLabel: 'VERIFIED VISITOR',
          stickerIcon: CheckCircle2,
          stickerColor: '#1769D2'
        };
    }
  };

  const visuals = getIndustryVisuals();
  const StickerIcon = visuals.stickerIcon;

  return (
    <div className="bg-[#F3F9FD] min-h-screen text-[#14263D]">
      {/* Page Hero */}
      <PageHeader
        badge={`INDUSTRY SOLUTION • ${solution.badge || 'VERIFIED'}`}
        title={solution.title}
        subtitle={solution.heroHeadline || solution.tagline}
        breadcrumb={[
          { label: 'Solutions', link: '/solutions' },
          { label: solution.title }
        ]}
      />

      {/* Main Solution Overview with Real Commercial Photography */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#EDF6FC] text-[#1769D2] border border-[#DCE6EF]">
                <Icon className="w-4 h-4 text-[#16A6A1]" />
                <span>Sector Focus: {solution.title}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10243E] tracking-tight leading-tight">
                {solution.heroHeadline}
              </h2>

              <p className="text-base text-[#5F7185] leading-relaxed">
                {solution.description}
              </p>

              {/* Measurable Metric Card */}
              <div className="p-4 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] flex items-center justify-between shadow-2xs">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1769D2] block">
                    Target Impact Metric
                  </span>
                  <p className="text-xl font-extrabold text-[#10243E] font-sans mt-0.5">
                    {solution.metric}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white text-[#27B36A] flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Tailored Capabilities Chips */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#10243E]">
                  Tailored Platform Capabilities:
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.keyFeatures.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#F3F9FD] text-[#10243E] border border-[#DCE6EF]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A] shrink-0" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button to="/register" variant="primary" size="medium" icon={ArrowRight}>
                  Deploy for {solution.title}
                </Button>
                <Button to="/contact" variant="outline" size="medium">
                  Request Custom Demo
                </Button>
              </div>
            </div>

            {/* Right: Industry-Specific Photography + Floating Sticker */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCE6EF] bg-slate-100 group">
                <div className="aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={visuals.image}
                    alt={`${solution.title} visitor management reception`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10243E]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-lg text-left">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#10243E]">{solution.title} Deployment</span>
                      <span className="text-[10px] font-bold text-[#27B36A] bg-[#27B36A]/10 px-2 py-0.5 rounded-full">
                        Enterprise Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasteful Floating Industry Sticker */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#1769D2]/25 shadow-xl items-center gap-2 text-xs font-bold text-[#10243E] z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                  <StickerIcon className="w-4 h-4" />
                </div>
                <span>{visuals.stickerLabel}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges vs. VISITOR_OS Solutions */}
      <section className="py-16 sm:py-20 bg-[#EDF6FC] border-b border-[#DCE6EF] relative overflow-hidden">
        {/* Subtle Ambient Dot Grid */}
        <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Solving Industry Vulnerabilities in{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                {solution.title}
              </span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-medium">
              Eliminate operational friction, paper log leaks, and audit risks with structured digital compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Challenges */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200 shadow-sm space-y-4 text-left">
              <div className="flex items-center gap-2 text-sm font-bold text-red-700 pb-3 border-b border-red-100 uppercase">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Legacy Workplace Roadblocks</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5F7185]">
                {solution.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VisitOS Advantage */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#27B36A]/40 shadow-sm space-y-4 text-left">
              <div className="flex items-center gap-2 text-sm font-bold text-[#10243E] pb-3 border-b border-[#27B36A]/20 uppercase">
                <ShieldCheck className="w-4 h-4 text-[#27B36A]" />
                <span>VisitOS Tailored Resolution</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#14263D]">
                {solution.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                    <span className="font-semibold">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Workflow Section */}
      {solution.workflowSteps && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1769D2]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
                Visitor Flow for{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  {solution.title}
                </span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-medium">
                End-to-end visitor coordination designed for the operational realities of {solution.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {solution.workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3F9FD] rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-xs flex flex-col justify-between hover:border-[#1769D2]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-10 h-10 rounded-2xl bg-[#10243E] text-white font-extrabold text-sm flex items-center justify-center group-hover:bg-[#1769D2] transition-colors shadow-2xs">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F7185]">
                        PHASE 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#10243E] group-hover:text-[#1769D2] transition-colors font-sans">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#5F7185] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target Environments / Facilities */}
      {solution.useCases && (
        <section className="py-16 sm:py-20 bg-[#EDF6FC] border-b border-[#DCE6EF] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10243E] font-sans">
                Typical Facilities{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Supported
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7185] mt-1 font-normal">Engineered to scale across diverse organizational footprints.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {solution.useCases.map((uc, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] space-y-3 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-xl bg-[#1769D2]/10 text-[#1769D2] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#14263D] leading-relaxed">{uc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Industry Solutions */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4 text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#10243E] font-sans">
                Other Industry{' '}
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5F7185] mt-1">Discover how VisitOS protects other workplace sectors.</p>
            </div>
            <Link 
              to="/solutions" 
              className="text-xs sm:text-sm font-bold text-[#1769D2] hover:text-[#16A6A1] flex items-center gap-1.5 shrink-0 transition-colors group"
            >
              <span>View All 6 Industries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {otherSolutions.map((os) => (
              <SolutionCard key={os.id} solution={os} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default SolutionDetailPage;
