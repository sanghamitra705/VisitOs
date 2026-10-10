import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  QrCode, 
  ShieldCheck, 
  Users, 
  BellRing, 
  History, 
  Lock, 
  BarChart3, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Search,
  Clock,
  FileCheck,
  Building2,
  FileText,
  BadgePercent,
  Check
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { FeatureCard } from '../components/common/FeatureCard';
import { FeaturesBentoGrid } from '../components/features/FeaturesBentoGrid';
import { FEATURES_DATA } from '../data/features';

export const Features = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const categories = ['All', 'Front Desk', 'Access Control', 'Communication', 'Audit & Records', 'Security & Privacy', 'Insights'];

  const filteredFeatures = FEATURES_DATA.filter((feat) => {
    const matchesCat = activeCategory === 'All' || feat.category === activeCategory;
    const matchesQuery = feat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feat.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feat.benefit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const isDefaultView = activeCategory === 'All' && searchQuery.trim() === '';

  const benefitPillars = [
    {
      title: 'Enhanced Security & Perimeter Control',
      subtitle: 'Eliminate unescorted guests and unverified visitor traffic completely.',
      icon: ShieldCheck,
      color: '#1769D2',
      metric: '99.9% Verified Building Perimeter',
      points: [
        'Mandatory host digital approval before any guest is granted access.',
        'Real-time photo capture and digital badge generation.',
        'GPS Geo-Fencing perimeter validation preventing remote fraud.',
        '1-click emergency evacuation roll-call and live on-premise headcount.'
      ]
    },
    {
      title: 'Zero Lobby Bottlenecks & Touchless Arrival',
      subtitle: 'Modernize the guest arrival experience with instant smartphone QR registration.',
      icon: Clock,
      color: '#16A6A1',
      metric: '80% Reduction in Reception Wait Time',
      points: [
        'Zero mobile app downloads required for arriving guests.',
        'Fast-track QR codes for pre-registered visitors and interviewees.',
        'Average visitor check-in duration reduced from 4 minutes to 15 seconds.',
        'Automated Wi-Fi credentials and floor maps displayed on the guest’s phone.'
      ]
    },
    {
      title: 'Automated Employee & Host Workflows',
      subtitle: 'Empower employees and front desk teams with automated approval alerts.',
      icon: Sparkles,
      color: '#27B36A',
      metric: '10+ Hours Saved Per Receptionist Weekly',
      points: [
        'Automated host alerts sent directly via SMS, Email, and Push notifications.',
        'No more receptionist phone calls trying to locate meeting hosts.',
        'Calendar integration automatically generates pre-approved guest passes.',
        'Automated checkout reminders at the close of scheduled visits.'
      ]
    },
    {
      title: '100% Tamper-Proof Audit Trails & Compliance',
      subtitle: 'Replace messy paper registers with searchable digital compliance records.',
      icon: FileCheck,
      color: '#1688E8',
      metric: '100% Audit Readiness',
      points: [
        'Digital signature archiving for NDAs and safety protocols.',
        'Searchable historical archive filterable by date, host, and company.',
        '1-click export to CSV, PDF, and Excel for statutory audits.',
        'GDPR and data privacy compliance with automated log purging.'
      ]
    }
  ];

  const roleShowcases = [
    {
      role: 'For Front Desk & Receptionists',
      title: 'Speed up reception queues and eliminate paper clutter',
      desc: 'Free your reception team from answering manual phone calls, deciphering handwriting, and sorting binder registers. Manage all arriving guests from an intuitive digital console.',
      features: ['Live checked-in dashboard', 'Instant badge thermal printing', 'Automated host lookup', 'Touchless QR kiosk stand']
    },
    {
      role: 'For Employees & Meeting Hosts',
      title: 'Know the moment your guest arrives with 1-tap approval',
      desc: 'Never leave guests waiting in the lobby. Receive instant notifications on your phone with the visitor photo, purpose of visit, and an instant 1-tap approval button.',
      features: ['SMS & Email arrival alerts', '1-tap Approve or Decline with note', 'Pre-register interview candidates', 'Auto calendar sync']
    },
    {
      role: 'For Security Teams & Facility Heads',
      title: 'Absolute visibility over everyone inside your facilities',
      desc: 'Enforce perimeter security with geo-fencing, verify contractor NDAs, and access instant evacuation headcounts in real-time during building drills or emergencies.',
      features: ['GPS Geo-Fencing perimeter guard', 'Live emergency roll-call', 'Blacklist & VIP alerts', 'Photo ID capture & NDA storage']
    }
  ];

  return (
    <div className="bg-[#F3F9FD] min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Smart Features Built for Modern Organizations"
        subtitle="Explore the complete suite of features engineered to make front-desk visitor registration faster, safer, 100% paperless, and fully compliant."
        breadcrumb={[{ label: 'Features' }]}
      />

      {/* Section 1: 4 Main Benefit Pillars */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Why Forward-Thinking Organizations{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Choose VisitOS
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5F7185] mt-3 font-normal leading-relaxed">
              Transform front-desk reception from a slow manual bottleneck into a secure, digital, high-efficiency experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitPillars.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="zoho-card-subtle rounded-3xl p-8 border border-[#DCE6EF] flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#EDF6FC] shadow-xs border border-[#DCE6EF] text-[#1769D2] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EDF6FC] text-[#1769D2] border border-[#DCE6EF]">
                        {b.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#10243E] font-sans mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F7185] leading-relaxed mb-5">
                      {b.subtitle}
                    </p>

                    <div className="space-y-2.5">
                      {b.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#14263D]">
                          <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Curated Asymmetric Features Bento Gallery */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Explore Every{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Feature & Capability
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5F7185] mt-3 font-normal leading-relaxed">
              Everything your organization needs for digital check-ins, security badges, host approvals, and reporting.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="bg-white rounded-2xl p-4 border border-[#DCE6EF] shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1769D2] text-white shadow-xs'
                      : 'bg-[#EDF6FC] text-[#5F7185] hover:text-[#10243E] hover:bg-[#DCE6EF]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#5F7185] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features (e.g., QR, Pass, SMS)..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
              />
            </div>
          </div>

          {/* EDITORIAL BENTO GALLERY */}
          {isDefaultView ? (
            <FeaturesBentoGrid />
          ) : (
            /* Search / Category Filtered Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredFeatures.map((feat) => (
                <FeatureCard key={feat.id} feature={feat} variant="full" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Role-Based Workflow Explorer */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              How VisitOS{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Empowers Every Team
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5F7185] mt-3 font-normal leading-relaxed">
              Custom-built interfaces tailored for front desk hosts, security guards, and employees.
            </p>
          </div>

          <div className="flex justify-center mb-8 gap-2 overflow-x-auto pb-2">
            {roleShowcases.map((r, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-[#10243E] text-white shadow-md'
                    : 'bg-[#EDF6FC] text-[#5F7185] hover:text-[#10243E]'
                }`}
              >
                {r.role}
              </button>
            ))}
          </div>

          <div className="bg-[#F3F9FD] rounded-3xl p-8 sm:p-12 border border-[#DCE6EF] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1769D2] text-white inline-block">
                {roleShowcases[activeTab].role}
              </span>
              <h3 className="text-2xl font-bold text-[#10243E] font-sans">
                {roleShowcases[activeTab].title}
              </h3>
              <p className="text-sm text-[#5F7185] leading-relaxed">
                {roleShowcases[activeTab].desc}
              </p>
              <div className="space-y-2.5 pt-2">
                {roleShowcases[activeTab].features.map((item, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#14263D] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#DCE6EF] shadow-sm space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#EDF6FC] text-[#1769D2] mx-auto flex items-center justify-center">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#10243E]">Instant Deployment</h4>
              <p className="text-xs text-[#5F7185]">
                Configure this role workflow in your organization workspace in less than 2 minutes.
              </p>
              <Button to="/register" variant="primary" size="small" icon={ArrowRight} className="w-full justify-center">
                Launch Workspace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Side-by-Side Comparison (Legacy vs. Modern) */}
      <section className="py-16 sm:py-20 bg-[#EDF6FC] border-b border-[#DCE6EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Paper Logbooks vs.{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                VisitOS
              </span>
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto font-medium">
              See why modern enterprises are replacing insecure paper visitor logs with verified touchless check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paper Registers */}
            <div className="bg-white rounded-3xl p-8 border border-[#DCE6EF] space-y-4 shadow-xs">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-[#5F7185] uppercase">
                Legacy Method: Paper Registers
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-[#5F7185]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Visitor personal details exposed to lobby onlookers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Illegible handwriting and missing phone numbers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Zero host approval; unannounced visitors enter unmonitored.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>No live emergency evacuation headcount available.</span>
                </li>
              </ul>
            </div>

            {/* VisitOS */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#1769D2] space-y-4 shadow-md ring-2 ring-[#1769D2]/10">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1769D2] text-white uppercase">
                Modern Method: VisitOS
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-[#10243E]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                  <span className="font-semibold">Private, encrypted digital check-in on smartphone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                  <span className="font-semibold">Accurate photo capture & digital pass badge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                  <span className="font-semibold">1-click mobile host approval & geo-fencing check.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                  <span className="font-semibold">Instant emergency broadcast & exportable roll-calls.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default Features;
