import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Building2, 
  User, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Download,
  Info
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { PLANS } from '../data/plans';

export const Register = () => {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get('plan') || 'starter';

  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(initialPlan.toLowerCase());

  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    adminName: '',
    adminEmail: '',
    adminPhone: '',
    jobTitle: 'Operations Director',
    // Step 2: Organization Details
    orgName: '',
    orgCode: '',
    urlSlug: '',
    industry: 'Corporate Office',
    address: '',
    timezone: 'UTC+05:30 (IST - India Standard Time)',
    // Step 3: Account Setup
    password: '',
    confirmPassword: '',
    agreeTerms: true,
  });

  const [passwordError, setPasswordError] = useState('');

  const industries = [
    'Corporate Office',
    'IT & Technology',
    'Business Park & Multi-Tenant',
    'Educational Institution / Campus',
    'Hospital & Healthcare Facility',
    'Manufacturing & Industrial Plant',
    'Government & Public Sector',
    'Other Organization'
  ];

  const timezones = [
    'UTC+05:30 (IST - India Standard Time)',
    'UTC+00:00 (GMT - London / Dublin)',
    'UTC-05:00 (EST - New York / Toronto)',
    'UTC-08:00 (PST - San Francisco / LA)',
    'UTC+01:00 (CET - Berlin / Paris)',
    'UTC+04:00 (GST - Dubai)',
    'UTC+08:00 (SGT - Singapore / HK)',
  ];

  const updateField = (fields) => {
    setFormData((prev) => {
      const updated = { ...prev, ...fields };
      // Auto-generate slug & org code
      if (fields.orgName && !fields.urlSlug) {
        updated.urlSlug = fields.orgName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        if (!fields.orgCode) {
          updated.orgCode = fields.orgName.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6).toUpperCase();
        }
      }
      return updated;
    });
  };

  const handleStep1 = (e) => {
    e.preventDefault();
    if (!formData.adminName || !formData.adminEmail) return;
    setStep(2);
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    if (!formData.orgName || !formData.urlSlug) return;
    setStep(3);
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  const handleStep3 = (e) => {
    e.preventDefault();
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match. Please re-enter.');
      return;
    }
    setPasswordError('');
    setStep(4);
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  const handleDownloadSetup = () => {
    const text = `VISITOR_OS - Workspace Registration Details\n==============================================\nOrganization: ${formData.orgName || 'Acme Global'}\nOrganization Code: ${formData.orgCode || 'ACM001'}\nAssigned Subdomain: https://${formData.urlSlug || 'acme'}.visitoros.cloud\nAdmin User: ${formData.adminName || 'Admin'} (${formData.adminEmail || 'admin@acme.com'})\nActive Plan: ${selectedPlan.toUpperCase()}\n\nPublic Portals:\n- Visitor Kiosk: https://${formData.urlSlug || 'acme'}.visitoros.cloud\n- Public Exit: https://${formData.urlSlug || 'acme'}.visitoros.cloud/exit\n\nSecurity Notice:\nYour password was encrypted at setup. Sign in to your admin console at https://visitoros.cloud/login`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.urlSlug || 'visitoros'}-credentials-summary.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[#F3F9FD] min-h-screen pb-16">
      <PageHeader
        badge="4-Step Onboarding"
        title="Register Your Organization on VisitOS"
        subtitle="Claim your dedicated digital front desk, configure your administrator account, and deploy touchless check-ins in minutes."
        breadcrumb={[{ label: 'Get Started / Register' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Progress Bar */}
        <div className="mb-8 bg-white p-4 rounded-3xl border border-[#DCE6EF] shadow-xs">
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
            <button
              onClick={() => step > 1 && setStep(1)}
              className={`p-2.5 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                step === 1
                  ? 'bg-[#1769D2] text-white shadow-xs font-bold'
                  : step > 1
                  ? 'bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/30'
                  : 'text-[#5F7185]/60'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
              <span className="hidden sm:inline">Personal Info</span>
            </button>

            <button
              onClick={() => formData.adminName && step > 2 && setStep(2)}
              className={`p-2.5 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                step === 2
                  ? 'bg-[#1769D2] text-white shadow-xs font-bold'
                  : step > 2
                  ? 'bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/30'
                  : 'text-[#5F7185]/60'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
              <span className="hidden sm:inline">Organization</span>
            </button>

            <button
              onClick={() => formData.orgName && step > 3 && setStep(3)}
              className={`p-2.5 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                step === 3
                  ? 'bg-[#1769D2] text-white shadow-xs font-bold'
                  : step > 3
                  ? 'bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/30'
                  : 'text-[#5F7185]/60'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">3</span>
              <span className="hidden sm:inline">Account Setup</span>
            </button>

            <div
              className={`p-2.5 rounded-2xl transition-all flex items-center justify-center gap-2 ${
                step === 4
                  ? 'bg-[#27B36A] text-white shadow-xs font-bold'
                  : 'text-[#5F7185]/60'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">4</span>
              <span className="hidden sm:inline">Confirmation</span>
            </div>
          </div>
        </div>

        {/* STEP 1: PERSONAL INFORMATION */}
        {step === 1 && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE6EF] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE6EF]">
              <div className="w-10 h-10 rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#10243E] font-sans">
                  Step 1: Administrator Personal Information
                </h2>
                <p className="text-xs text-[#5F7185]">
                  This person will be designated as the Primary Organization Admin.
                </p>
              </div>
            </div>

            <form onSubmit={handleStep1} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Your Full Name <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.adminName}
                    onChange={(e) => updateField({ adminName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Work Email Address <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.adminEmail}
                    onChange={(e) => updateField({ adminEmail: e.target.value })}
                    placeholder="eleanor@yourcompany.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Direct Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.adminPhone}
                    onChange={(e) => updateField({ adminPhone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Job Title / Department Role
                  </label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => updateField({ jobTitle: e.target.value })}
                    placeholder="e.g. Head of Security / Facility Lead"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="submit" variant="primary" icon={ArrowRight}>
                  Continue to Organization Details
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: ORGANIZATION DETAILS */}
        {step === 2 && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE6EF] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE6EF]">
              <div className="w-10 h-10 rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#10243E] font-sans">
                  Step 2: Organization & Dedicated Portal Setup
                </h2>
                <p className="text-xs text-[#5F7185]">
                  Define your company name, acronym code, and dedicated web portal slug.
                </p>
              </div>
            </div>

            <form onSubmit={handleStep2} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Organization / Company Name <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.orgName}
                    onChange={(e) => updateField({ orgName: e.target.value })}
                    placeholder="e.g. Apex Global Technologies"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Organization Code / ID <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={8}
                    value={formData.orgCode}
                    onChange={(e) => updateField({ orgCode: e.target.value.toUpperCase() })}
                    placeholder="e.g. APX001"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>
              </div>

              {/* Subdomain URL Slug */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                  Dedicated Subdomain URL Slug <span className="text-[#1769D2]">*</span>
                </label>
                <div className="flex rounded-xl shadow-xs overflow-hidden border border-[#DCE6EF] bg-[#F3F9FD]">
                  <span className="inline-flex items-center px-3.5 text-xs text-[#5F7185] font-mono bg-[#EDF6FC] border-r border-[#DCE6EF]">
                    https://
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.urlSlug}
                    onChange={(e) => updateField({ urlSlug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') })}
                    placeholder="apex-global"
                    className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:bg-white"
                  />
                  <span className="inline-flex items-center px-3.5 text-xs text-[#5F7185] font-mono bg-[#EDF6FC] border-l border-[#DCE6EF]">
                    .visitoros.cloud
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-[#5F7185]">
                  This dedicated URL powers your reception lobby QR code and public exit portal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => updateField({ industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Facility Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => updateField({ timezone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                  Physical Facility Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => updateField({ address: e.target.value })}
                  placeholder="e.g. 100 Innovation Parkway, Suite 400, Silicon Valley, CA"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <Button onClick={() => setStep(1)} variant="secondary" size="sm" icon={ArrowLeft} iconPosition="left">
                  Back
                </Button>
                <Button type="submit" variant="primary" icon={ArrowRight}>
                  Continue to Account Setup
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: ACCOUNT SETUP & PLAN SELECTION */}
        {step === 3 && (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE6EF] shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#DCE6EF]">
              <div className="w-10 h-10 rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#10243E] font-sans">
                  Step 3: Security Credentials & Plan Selection
                </h2>
                <p className="text-xs text-[#5F7185]">
                  Set your Organization Admin password and confirm your subscription tier.
                </p>
              </div>
            </div>

            {passwordError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 font-medium">
                {passwordError}
              </div>
            )}

            <form onSubmit={handleStep3} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Admin Password <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={(e) => updateField({ password: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                  <span className="text-[10px] text-[#5F7185] mt-1 block">Minimum 8 characters</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                    Confirm Password <span className="text-[#1769D2]">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={formData.confirmPassword}
                    onChange={(e) => updateField({ confirmPassword: e.target.value })}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
                  />
                </div>
              </div>

              {/* Plan Choice Cards */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-3">
                  Select Subscription Plan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {PLANS.map((plan) => {
                    const isSelected = selectedPlan === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#1769D2] bg-[#EDF6FC] ring-2 ring-[#1769D2]/20 shadow-sm'
                            : 'border-[#DCE6EF] bg-white hover:border-[#DCE6EF]'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-sm text-[#10243E] font-sans">{plan.name}</span>
                            {isSelected ? (
                              <span className="w-5 h-5 rounded-full bg-[#1769D2] text-white flex items-center justify-center text-xs">
                                ✓
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-full border border-[#DCE6EF]" />
                            )}
                          </div>
                          <p className="text-xl font-extrabold text-[#10243E] font-sans">{plan.priceMonthly}</p>
                          <p className="text-[10px] text-[#5F7185] mt-1">{plan.limits.employees}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  id="agree"
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => updateField({ agreeTerms: e.target.checked })}
                  className="mt-0.5 h-4 w-4 text-[#1769D2] focus:ring-[#1769D2] border-[#DCE6EF] rounded cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs text-[#5F7185] cursor-pointer">
                  I agree to the <Link to="/privacy-policy" target="_blank" className="text-[#1769D2] hover:underline">Privacy Policy</Link> and standard terms of service. I understand this establishes our dedicated organization workspace.
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#DCE6EF]">
                <Button onClick={() => setStep(2)} variant="secondary" size="sm" icon={ArrowLeft} iconPosition="left">
                  Back
                </Button>
                <Button type="submit" variant="primary" icon={ArrowRight}>
                  Finalize & Launch Workspace
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4: CONFIRMATION & READY SCREEN */}
        {step === 4 && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6EF] shadow-xl text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[#27B36A]/10 text-[#27B36A] flex items-center justify-center shadow-md shadow-[#27B36A]/15">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#27B36A]/10 text-[#27B36A] border border-[#27B36A]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Organization Workspace Active</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10243E] font-sans tracking-tight">
              Your VisitOS Organization is Ready!
            </h2>

            <p className="text-sm sm:text-base text-[#5F7185] max-w-lg mx-auto">
              Welcome aboard. <strong>{formData.orgName || 'Acme Global Technologies'}</strong> has been registered with the <strong>{selectedPlan.toUpperCase()}</strong> plan.
            </p>

            {/* Profile Summary Card */}
            <div className="bg-[#EDF6FC] rounded-2xl p-6 border border-[#DCE6EF] text-left max-w-xl mx-auto space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#5F7185] uppercase font-bold text-[10px] block">Organization Name</span>
                  <span className="font-bold text-[#10243E] text-sm">{formData.orgName || 'Acme Global Technologies'}</span>
                </div>
                <div>
                  <span className="text-[#5F7185] uppercase font-bold text-[10px] block">Assigned Plan</span>
                  <span className="font-bold text-[#1769D2] text-sm uppercase">{selectedPlan} Tier</span>
                </div>
                <div>
                  <span className="text-[#5F7185] uppercase font-bold text-[10px] block">Admin Account</span>
                  <span className="font-medium text-[#10243E]">{formData.adminName || 'Admin'} ({formData.adminEmail || 'admin@company.com'})</span>
                </div>
                <div>
                  <span className="text-[#5F7185] uppercase font-bold text-[10px] block">Industry & Code</span>
                  <span className="font-medium text-[#10243E]">{formData.industry} • {formData.orgCode || 'ACM001'}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#DCE6EF] space-y-2">
                <div>
                  <span className="text-[#5F7185] block font-medium">Dedicated Visitor Kiosk URL:</span>
                  <a
                    href={`https://${formData.urlSlug || 'acme-global'}.visitoros.cloud`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-bold text-[#1769D2] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>https://{formData.urlSlug || 'acme-global'}.visitoros.cloud</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1688E8]" />
                  </a>
                </div>
                <div>
                  <span className="text-[#5F7185] block font-medium">Public Exit / Check-out URL:</span>
                  <a
                    href={`https://${formData.urlSlug || 'acme-global'}.visitoros.cloud/exit`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-bold text-[#1769D2] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>https://{formData.urlSlug || 'acme-global'}.visitoros.cloud/exit</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#1688E8]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/login" size="md" variant="primary" icon={ArrowRight}>
                Proceed to Admin Login
              </Button>
              <Button onClick={handleDownloadSetup} size="md" variant="secondary" icon={Download}>
                Download Setup Summary (.txt)
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
