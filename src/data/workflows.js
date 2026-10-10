import { 
  Building2, 
  Sliders, 
  BellRing, 
  QrCode, 
  LogIn, 
  ShieldCheck, 
  LogOut,
  Lock,
  Smartphone,
  Users,
  Clock,
  Zap,
  Globe,
  FileCheck,
  Shield
} from 'lucide-react';

export const WORKFLOWS_DATA = [
  {
    step: '01',
    stepNumber: 1,
    id: 'organization-registration',
    slug: 'organization-registration',
    route: '/workflow/organization-registration',
    role: 'ORG ADMIN',
    title: 'Organization Registration',
    shortDesc: 'Create your organization profile and establish the secure foundation for your VisitOS visitor management environment.',
    heroEyebrow: '01 • INITIAL ONBOARDING',
    heroHeadline: 'Start Your Organization Journey',
    heroSubheadline: 'Establish your company workspace, claim your dedicated portal subdomain, and configure initial front-desk security policies in under 2 minutes.',
    accentColor: '#1769D2',
    gradient: 'from-[#1769D2] to-[#1688E8]',
    badgeBg: 'bg-[#1769D2]/20 text-[#1688E8]',
    metric: '2-Min Activation',
    metricLabel: 'Zero Hardware Required',
    icon: Building2,
    processSteps: [
      { step: '01', title: 'Claim Portal Subdomain', desc: 'Secure your custom organization workspace URL with automated SSL encryption.' },
      { step: '02', title: 'Define Organization Profile', desc: 'Set company legal name, facility address, primary timezone, and industry category.' },
      { step: '03', title: 'Create Admin Credentials', desc: 'Establish master administrator credentials with secure password requirements.' },
      { step: '04', title: 'Generate Lobby QR Code', desc: 'Create your dedicated front-desk QR code ready for kiosk display or reception printing.' }
    ],
    featureCards: [
      {
        icon: Globe,
        title: 'Dedicated Cloud Subdomain',
        desc: 'Provide visitors and employees with a clean portal URL accessible on any mobile browser.'
      },
      {
        icon: Shield,
        title: 'Encrypted Cloud Storage',
        desc: 'All organizational credentials and visitor logs are encrypted at rest and in transit with TLS.'
      },
      {
        icon: Zap,
        title: 'Fast Self-Guided Setup',
        desc: 'Launch your complete visitor management environment without complex IT installations.'
      },
      {
        icon: FileCheck,
        title: 'Custom NDA Templates',
        desc: 'Upload legal confidentiality agreements and workplace safety policies for guest sign-off.'
      }
    ],
    nextRoute: '/workflow/admin-configuration',
    nextTitle: 'Admin Configuration',
    prevRoute: null,
    prevTitle: null,
    ctaText: 'Continue to Admin Configuration'
  },
  {
    step: '02',
    stepNumber: 2,
    id: 'admin-configuration',
    slug: 'admin-configuration',
    route: '/workflow/admin-configuration',
    role: 'ORG ADMIN',
    title: 'Admin Configuration',
    shortDesc: 'Configure visitor policies, employee roles, access rules, and automated compliance guards.',
    heroEyebrow: '02 • POLICY & ACCESS CONTROL',
    heroHeadline: 'Configure VisitOS Around Your Organization',
    heroSubheadline: 'Tailor badge templates, geo-fencing radius boundaries, employee host directory syncing, and automated NDA compliance rules with granular administrator controls.',
    accentColor: '#1688E8',
    gradient: 'from-[#1688E8] to-[#16A6A1]',
    badgeBg: 'bg-[#1688E8]/20 text-[#16A6A1]',
    metric: '100% Configurable',
    metricLabel: 'Custom Rule Engine',
    icon: Sliders,
    processSteps: [
      { step: '01', title: 'Brand Identity Setup', desc: 'Upload corporate logo and customize welcome greeting text on the check-in portal.' },
      { step: '02', title: 'Security Perimeter Rules', desc: 'Configure optional GPS geo-fencing radius and photo verification requirements.' },
      { step: '03', title: 'Role Permissions', desc: 'Assign Administrator, Receptionist, and Host Employee access privileges.' },
      { step: '04', title: 'Notification Preferences', desc: 'Configure email and SMS notification templates and host routing rules.' }
    ],
    featureCards: [
      {
        icon: Sliders,
        title: 'Flexible Policy Controls',
        desc: 'Set custom check-in requirements for clients, contractors, couriers, and interview candidates.'
      },
      {
        icon: ShieldCheck,
        title: 'Geo-Fencing Perimeter',
        desc: 'Optionally restrict check-in completion strictly within your building’s physical GPS boundary.'
      },
      {
        icon: Lock,
        title: 'Administrative Audit Trail',
        desc: 'Every policy modification, permission change, and export is permanently logged with timestamps.'
      },
      {
        icon: Users,
        title: 'Departmental Routing',
        desc: 'Direct visitor arrivals automatically to the correct floor, department, or escort team.'
      }
    ],
    nextRoute: '/workflow/employee-sync-alerts',
    nextTitle: 'Employee Sync & Alerts',
    prevRoute: '/workflow/organization-registration',
    prevTitle: 'Organization Registration',
    ctaText: 'Set Up Employee Workflows'
  },
  {
    step: '03',
    stepNumber: 3,
    id: 'employee-sync-alerts',
    slug: 'employee-sync-alerts',
    route: '/workflow/employee-sync-alerts',
    role: 'EMPLOYEE / HOST',
    title: 'Employee Sync & Alerts',
    shortDesc: 'Sync employee directories and deliver instant arrival alerts via SMS and Email.',
    heroEyebrow: '03 • REAL-TIME NOTIFICATIONS',
    heroHeadline: 'Keep Employees Connected in Real Time',
    heroSubheadline: 'Eliminate reception phone calls with structured staff directory management and fast arrival alerts delivered straight to employee inboxes and smartphones.',
    accentColor: '#16A6A1',
    gradient: 'from-[#16A6A1] to-[#27B36A]',
    badgeBg: 'bg-[#16A6A1]/20 text-[#27B36A]',
    metric: 'Instant Alerts',
    metricLabel: 'Email & SMS Dispatch',
    icon: BellRing,
    processSteps: [
      { step: '01', title: 'Directory Setup', desc: 'Import or add staff members with names, work emails, and department designations.' },
      { step: '02', title: 'Host Selection Matching', desc: 'When a visitor selects a host on the check-in portal, the system matches the employee.' },
      { step: '03', title: 'Multi-Channel Push', desc: 'Host receives immediate arrival notification with visitor name, photo, and company.' },
      { step: '04', title: '1-Click Response', desc: 'Host taps "Approve Access" or sends a note directly from the notification prompt.' }
    ],
    featureCards: [
      {
        icon: BellRing,
        title: 'Fast Alert Dispatch',
        desc: 'Dispatches simultaneous arrival alerts to employees so guests are never left waiting in the lobby.'
      },
      {
        icon: Users,
        title: 'Staff Directory Management',
        desc: 'Easily manage active employees, add new team members, and archive departed staff.'
      },
      {
        icon: Clock,
        title: 'Pending Reminders',
        desc: 'Sends automated follow-up prompts if a host approval response remains pending.'
      },
      {
        icon: Smartphone,
        title: 'Mobile-Friendly Approval',
        desc: 'Employees review guest details and approve entry from any mobile or desktop browser.'
      }
    ],
    nextRoute: '/workflow/visitor-qr-registration',
    nextTitle: 'Visitor QR Registration',
    prevRoute: '/workflow/admin-configuration',
    prevTitle: 'Admin Configuration',
    ctaText: 'Explore Visitor Registration'
  },
  {
    step: '04',
    stepNumber: 4,
    id: 'visitor-qr-registration',
    slug: 'visitor-qr-registration',
    route: '/workflow/visitor-qr-registration',
    role: 'VISITOR',
    title: 'Visitor QR Registration',
    shortDesc: 'Guests scan lobby QR codes on their mobile phone for touchless, zero-wait registration.',
    heroEyebrow: '04 • TOUCHLESS REGISTRATION',
    heroHeadline: 'Registration Made Simple With QR',
    heroSubheadline: 'Enable seamless zero-wait arrivals with smartphone camera QR scanning, dynamic mobile forms, photo capture, and digital NDA signing.',
    accentColor: '#1769D2',
    gradient: 'from-[#1769D2] to-[#16A6A1]',
    badgeBg: 'bg-[#1769D2]/20 text-[#16A6A1]',
    metric: '100% Touchless',
    metricLabel: 'Zero Lobby Queue',
    icon: QrCode,
    processSteps: [
      { step: '01', title: 'Lobby QR Scan', desc: 'Visitor points smartphone camera at reception placard; web registration opens instantly.' },
      { step: '02', title: 'Enter Visit Details', desc: 'Visitor fills contact details, organization represented, and selects their host.' },
      { step: '03', title: 'Photo & Digital NDA', desc: 'Visitor captures verification selfie and signs confidentiality NDA electronically.' },
      { step: '04', title: 'Host Queue Trigger', desc: 'Registration data is validated and routed directly to the employee host for approval.' }
    ],
    featureCards: [
      {
        icon: QrCode,
        title: 'Zero App Installation',
        desc: 'Visitors scan QR codes and complete registration in any smartphone browser in seconds.'
      },
      {
        icon: FileCheck,
        title: 'Digital Signature Capture',
        desc: 'Sign NDAs, safety briefings, and health compliance waivers directly on screen.'
      },
      {
        icon: Smartphone,
        title: 'Private Personal Device',
        desc: 'Guests type details on their own smartphones, keeping contact information completely private.'
      },
      {
        icon: ShieldCheck,
        title: 'Photo Identity Capture',
        desc: 'Front-facing selfie snapshot captured for visual identification on the digital pass badge.'
      }
    ],
    nextRoute: '/workflow/visitor-check-in',
    nextTitle: 'Visitor Check-In',
    prevRoute: '/workflow/employee-sync-alerts',
    prevTitle: 'Employee Sync & Alerts',
    ctaText: 'See Visitor Check-In'
  },
  {
    step: '05',
    stepNumber: 5,
    id: 'visitor-check-in',
    slug: 'visitor-check-in',
    route: '/workflow/visitor-check-in',
    role: 'VISITOR',
    title: 'Visitor Check-In',
    shortDesc: 'Instant front-desk validation, digital badge generation, and on-premise clearance.',
    heroEyebrow: '05 • ARRIVAL VERIFICATION',
    heroHeadline: 'A Faster, Smarter Arrival Experience',
    heroSubheadline: 'Transform your physical lobby into an organized welcome center with instant badge activation, host synchronization, and guest Wi-Fi delivery.',
    accentColor: '#16A6A1',
    gradient: 'from-[#16A6A1] to-[#27B36A]',
    badgeBg: 'bg-[#16A6A1]/20 text-[#27B36A]',
    metric: '< 15s Check-In',
    metricLabel: 'Fast & Organized',
    icon: LogIn,
    processSteps: [
      { step: '01', title: 'Arrival Verification', desc: 'Front-desk console checks registration status and confirms perimeter safety rules.' },
      { step: '02', title: 'Policy Confirmation', desc: 'System confirms completed NDA execution and mandatory entry requirements.' },
      { step: '03', title: 'Digital Badge Issuance', desc: 'Mobile pass badge is activated on the visitor phone with room location and Wi-Fi.' },
      { step: '04', title: 'Active Log Updated', desc: 'Visitor status switches to "Checked In" on the live reception dashboard.' }
    ],
    featureCards: [
      {
        icon: LogIn,
        title: 'Cross-Device Compatibility',
        desc: 'Works seamlessly on mobile browsers, front-desk tablets, and reception kiosks.'
      },
      {
        icon: ShieldCheck,
        title: 'Visual Identity Pass',
        desc: 'Displays visitor photo, host name, and visit duration for easy on-premise identification.'
      },
      {
        icon: Zap,
        title: 'Guest Wi-Fi Delivery',
        desc: 'Delivers building guest Wi-Fi credentials directly on the digital pass screen.'
      },
      {
        icon: Globe,
        title: 'Clear Floor Directions',
        desc: 'Provides meeting room names and designated elevator floor guidance to arriving visitors.'
      }
    ],
    nextRoute: '/workflow/host-approval',
    nextTitle: 'Host Approval',
    prevRoute: '/workflow/visitor-qr-registration',
    prevTitle: 'Visitor QR Registration',
    ctaText: 'Explore Host Approval'
  },
  {
    step: '06',
    stepNumber: 6,
    id: 'host-approval',
    slug: 'host-approval',
    route: '/workflow/host-approval',
    role: 'EMPLOYEE / SECURITY',
    title: 'Host Approval',
    shortDesc: 'Employees receive 1-click authorization prompts with visitor photo and credentials.',
    heroEyebrow: '06 • 1-CLICK AUTHORIZATION',
    heroHeadline: 'Give Hosts Instant Approval Control',
    heroSubheadline: 'Safeguard intellectual property and maintain strict access control with mandatory 1-click host authorizations, contractor badge timers, and real-time security desk sync.',
    accentColor: '#1769D2',
    gradient: 'from-[#10243E] via-[#1769D2] to-[#1688E8]',
    badgeBg: 'bg-[#1769D2]/20 text-[#1688E8]',
    metric: '1-Click Action',
    metricLabel: 'Zero Front-Desk Delays',
    icon: ShieldCheck,
    processSteps: [
      { step: '01', title: 'Arrival Notification', desc: 'Employee receives prompt: "Your visitor Jordan Reed is at Reception".' },
      { step: '02', title: 'Review Visitor Details', desc: 'Host views visitor photo, organization name, visit purpose, and NDA status.' },
      { step: '03', title: '1-Tap Decision', desc: 'Host taps "Approve Entry" or "Decline with Note" directly from the alert.' },
      { step: '04', title: 'Reception Notified', desc: 'Visitor portal immediately confirms approval and activates the active visitor pass.' }
    ],
    featureCards: [
      {
        icon: ShieldCheck,
        title: 'Zero Unescorted Entry',
        desc: 'Ensures visitors are only granted clearance when the designated employee confirms the visit.'
      },
      {
        icon: Smartphone,
        title: 'Mobile 1-Tap Actions',
        desc: 'Approve visitors directly from notification prompts without navigating complex software.'
      },
      {
        icon: Users,
        title: 'Host Accountability',
        desc: 'Every approval decision is linked to the specific host employee in the permanent visit log.'
      },
      {
        icon: Clock,
        title: 'Time-Limited Passes',
        desc: 'Passes are valid strictly during the approved meeting window and expire automatically.'
      }
    ],
    nextRoute: '/workflow/visitor-check-out',
    nextTitle: 'Visitor Check-Out',
    prevRoute: '/workflow/visitor-check-in',
    prevTitle: 'Visitor Check-In',
    ctaText: 'Explore Visitor Check-Out'
  },
  {
    step: '07',
    stepNumber: 7,
    id: 'visitor-check-out',
    slug: 'visitor-check-out',
    route: '/workflow/visitor-check-out',
    role: 'SECURITY / AUDIT',
    title: 'Visitor Check-Out',
    shortDesc: '1-tap exit scan invalidates digital passes, updates roll-calls, and archives compliance logs.',
    heroEyebrow: '07 • SECURE CHECK-OUT & COMPLIANCE',
    heroHeadline: 'Complete Every Visit Securely',
    heroSubheadline: 'Ensure comprehensive perimeter accountability with 1-tap departure scans, automatic digital badge invalidation, live emergency headcount updates, and exportable visit logs.',
    accentColor: '#27B36A',
    gradient: 'from-[#1769D2] via-[#16A6A1] to-[#27B36A]',
    badgeBg: 'bg-[#27B36A]/20 text-[#27B36A]',
    metric: '100% Audit Ready',
    metricLabel: 'Live Headcount Sync',
    icon: LogOut,
    processSteps: [
      { step: '01', title: 'Departure Check-Out', desc: 'Visitor taps departure button or scans departure QR at the reception desk.' },
      { step: '02', title: 'Pass Invalidation', desc: 'Digital pass status switches immediately to "Expired" to prevent badge reuse.' },
      { step: '03', title: 'Live Headcount Updated', desc: 'Real-time on-premise headcount counters decrement instantly across all dashboards.' },
      { step: '04', title: 'Audit Archival', desc: 'Complete visit record is archived with entry/exit timestamps, host identity, and signed NDA.' }
    ],
    featureCards: [
      {
        icon: LogOut,
        title: 'Quick Departure Scan',
        desc: 'Fast exit confirmation eliminates lobby congestion and ensures accurate departure times.'
      },
      {
        icon: Shield,
        title: 'Live Headcount Roster',
        desc: 'Provides a real-time list of all visitors currently inside each building for safety officers.'
      },
      {
        icon: FileCheck,
        title: 'Exportable Visit Logs',
        desc: 'Export comprehensive visitor history logs in PDF, CSV, and Excel formats for internal audits.'
      },
      {
        icon: Lock,
        title: 'Configurable Data Retention',
        desc: 'Configure automated record retention windows supporting organizational data privacy policies.'
      }
    ],
    nextRoute: null,
    nextTitle: null,
    prevRoute: '/workflow/host-approval',
    prevTitle: 'Host Approval',
    ctaText: 'Explore Complete VisitOS Workflow'
  }
];

export const getWorkflowBySlug = (slug) => {
  return WORKFLOWS_DATA.find((item) => item.slug === slug || item.id === slug) || WORKFLOWS_DATA[0];
};

export default WORKFLOWS_DATA;
