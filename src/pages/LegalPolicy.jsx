import React from 'react';
import { ShieldCheck, Lock, FileText, Info } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';

export const LegalPolicy = () => {
  return (
    <div className="bg-[#F3F9FD] min-h-screen pb-16">
      <PageHeader
        badge="Legal & Trust"
        title="Privacy Policy"
        subtitle="How VisitOS handles, encrypts, processes, and safeguards organization, employee, and visitor data."
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Legal Disclaimer Box */}
        <div className="bg-[#EDF6FC] border border-[#DCE6EF] rounded-3xl p-4 text-xs text-[#5F7185] mb-8 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#1769D2] mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-[#10243E]">Master Privacy Policy Template (Draft for Legal Review)</p>
            <p className="mt-0.5">
              This document outlines standard platform data handling procedures. Final customized legal terms may vary depending on local jurisdiction and organization enterprise agreements.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DCE6EF] shadow-xs space-y-8 text-xs sm:text-sm text-[#5F7185] leading-relaxed">
          {/* Table of Contents */}
          <div className="p-5 rounded-2xl bg-[#F3F9FD] border border-[#DCE6EF] space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[#10243E]">Table of Contents</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#1769D2]">
              <li><a href="#section-1" className="hover:underline">1. Data Ownership & Processing Role</a></li>
              <li><a href="#section-2" className="hover:underline">2. Information We Collect</a></li>
              <li><a href="#section-3" className="hover:underline">3. Purpose of Processing</a></li>
              <li><a href="#section-4" className="hover:underline">4. Data Retention & Purging</a></li>
              <li><a href="#section-5" className="hover:underline">5. Technical Security Safeguards</a></li>
              <li><a href="#section-6" className="hover:underline">6. Contact Information</a></li>
            </ul>
          </div>

          <section id="section-1" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              1. Data Ownership & Processing Role
            </h2>
            <p>
              VisitOS operates strictly as a Data Processor on behalf of the customer Organization (the "Data Controller"). The customer organization retains exclusive ownership of all visitor logs, employee directories, and visit records created within their dedicated workspace.
            </p>
          </section>

          <section id="section-2" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              2. Information We Collect
            </h2>
            <div className="space-y-3 pl-2">
              <div>
                <strong className="text-[#10243E] font-semibold block">A. Organization Profile Data:</strong>
                <p>Company name, industry sector, facility address, primary administrator contact details, and workspace subdomain.</p>
              </div>

              <div>
                <strong className="text-[#10243E] font-semibold block">B. Employee & Host Directory Data:</strong>
                <p>Staff member names, work email addresses, departmental assignments, and notification routing preferences.</p>
              </div>

              <div>
                <strong className="text-[#10243E] font-semibold block">C. Visitor & Guest Information:</strong>
                <p>Guest full name, phone number, company represented, purpose of visit, host selected, check-in/out timestamps, selfie photos (for digital pass badge generation), and signed NDA agreements.</p>
              </div>

              <div>
                <strong className="text-[#10243E] font-semibold block">D. Authentication & Audit Logs:</strong>
                <p>IP addresses, browser client identifiers, and immutable timestamps of admin permission changes.</p>
              </div>
            </div>
          </section>

          <section id="section-3" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              3. Purpose of Data Processing
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide and maintain the VisitOS cloud platform services and touchless kiosk portals.</li>
              <li>To dispatch real-time host notifications (via Email, SMS, or webhooks) upon visitor arrival.</li>
              <li>To maintain real-time emergency evacuation rosters and on-premise headcount accuracy.</li>
              <li>To generate verifiable, immutable audit trails for statutory compliance and security reviews.</li>
              <li>We <strong>NEVER</strong> sell, rent, or monetize visitor or employee information to third-party advertisers.</li>
            </ul>
          </section>

          <section id="section-4" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              4. Data Retention & Automatic Purging
            </h2>
            <p>
              Visitor records are retained according to the active subscription tier and custom policies configured by the Organization Admin (e.g. 30 days for Free, 1 year for Starter, or custom retention for Enterprise). After the retention window expires, historical visitor records are permanently purged from active databases.
            </p>
          </section>

          <section id="section-5" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              5. Technical Security Safeguards
            </h2>
            <p>
              All communications between browsers, tablets, and VisitOS cloud services are encrypted in transit using TLS 1.3 encryption. Data at rest is encrypted using AES-256 standards with automated daily backups and multi-zone redundancy.
            </p>
          </section>

          <section id="section-6" className="space-y-3">
            <h2 className="text-lg font-bold text-[#10243E] font-sans">
              6. Contact Information
            </h2>
            <p>
              For privacy-related inquiries, Data Processing Agreements (DPA), or data deletion requests, please contact our Data Governance Team:
            </p>
            <p className="font-mono text-[#1769D2] font-semibold">
              privacy@visitoros.cloud
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
