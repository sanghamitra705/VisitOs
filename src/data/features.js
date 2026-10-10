import { 
  QrCode, 
  ShieldCheck, 
  Users, 
  BellRing, 
  History, 
  Lock, 
  BarChart3, 
  MapPin
} from 'lucide-react';

export const FEATURES_DATA = [
  {
    id: 'qr-visitor-registration',
    slug: 'qr-visitor-registration',
    path: '/features/qr-visitor-registration',
    title: 'QR-Based Visitor Registration',
    icon: QrCode,
    category: 'Front Desk',
    badge: 'Touchless & Fast',
    headline: 'Zero-App Touchless QR Check-In for Seamless Guest Arrival',
    shortDesc: 'Visitors scan a lobby QR code with their phone camera to complete registration in under 15 seconds without touching shared paper registers or kiosk hardware.',
    benefit: 'Eliminates lobby bottlenecks, replaces shared stationery, and creates an organized, professional arrival impression.',
    details: [
      'Instant browser-based mobile registration with zero app store downloads required.',
      'Quick profile completion with contact details, company name, and host selection.',
      'Front-facing selfie photo capture for immediate digital badge verification.',
      'Configurable registration fields including purpose of visit and vehicle license plate.',
      'Digital signature capture on mobile screen for NDAs and safety policy acknowledgements.'
    ],
    workflowSteps: [
      { step: '01', title: 'Scan Lobby QR', desc: 'Guest points smartphone camera at the front-desk display or reception placard.' },
      { step: '02', title: 'Enter Visit Details', desc: 'Mobile form opens in browser to enter visitor name, company, and select host.' },
      { step: '03', title: 'Photo & NDA Sign-Off', desc: 'Capture verification selfie photo and sign non-disclosure agreement on screen.' },
      { step: '04', title: 'Instant Pass Issued', desc: 'Digital QR badge is immediately activated on the visitor phone and host is notified.' }
    ],
    useCases: [
      'High-traffic corporate lobbies welcoming executive clients, interview candidates, and vendors.',
      'Multi-floor office towers and business suites eliminating front-desk congestion.',
      'Satellite offices and modern co-working hubs with self-guided guest registration.'
    ]
  },
  {
    id: 'digital-visitor-passes',
    slug: 'digital-visitor-passes',
    path: '/features/digital-visitor-passes',
    title: 'Digital Visitor Passes',
    icon: ShieldCheck,
    category: 'Front Desk',
    badge: 'Digital Identity',
    headline: 'Smartphone-Based Verified Visitor Credentials with Time-Limited Validity',
    shortDesc: 'Issues secure, timestamped mobile badges displaying visitor photo, host name, designated meeting location, and active validity timers.',
    benefit: 'Provides immediate visual verification of on-premise guests while eliminating single-use plastic badges and unmonitored visitor access.',
    details: [
      'Clean mobile badge displaying visitor photo, full name, company, and designated host.',
      'Active countdown indicator showing scheduled visit duration and validity window.',
      'Integrated guest Wi-Fi details and floor guidance delivered directly on the pass.',
      'Categorized visitor badges for clients, interviewees, contractors, and vendors.',
      'Automated pass revocation upon visitor check-out or conclusion of the visit.'
    ],
    workflowSteps: [
      { step: '01', title: 'Pass Generated', desc: 'Upon host authorization, the digital pass is dynamically rendered on the visitor device.' },
      { step: '02', title: 'Visual Verification', desc: 'Front desk and security staff visually verify the photo ID, host name, and active pass status.' },
      { step: '03', title: 'On-Premise Guidance', desc: 'Visitor accesses meeting room directions and guest Wi-Fi credentials displayed on the pass.' },
      { step: '04', title: 'Automatic Expiration', desc: 'Pass status changes to expired upon check-out or at the end of the scheduled visit window.' }
    ],
    useCases: [
      'Corporate workplaces requiring clear visual identification for all visiting guests.',
      'Technology facilities enforcing visitor identification and safety protocol badges.',
      'Commercial buildings managing contractor arrival times and authorized floor zones.'
    ]
  },
  {
    id: 'employee-approval-workflows',
    slug: 'employee-approval-workflows',
    path: '/features/employee-approval-workflows',
    title: 'Employee Approval Workflows',
    icon: Users,
    category: 'Access Control',
    badge: 'Host Authorization',
    headline: '1-Tap Host Approvals to Prevent Unauthorized Building Access',
    shortDesc: 'Empower employees to authorize, reject, or delegate arriving visitors directly from their notification prompts before entry is granted.',
    benefit: 'Guarantees that zero unannounced or unescorted guests wander into private work zones or restricted office floors.',
    details: [
      'Instant arrival notification dispatched to the designated employee host.',
      '1-tap "Approve Entry" or "Decline with Note" actions directly from mobile and email.',
      'Host delegation options when an employee is in meetings or away from the office.',
      'Live reception dashboard tracking pending host responses in real time.',
      'Automated reminder triggers if a host approval response remains pending.'
    ],
    workflowSteps: [
      { step: '01', title: 'Arrival Notification', desc: 'Host employee receives arrival prompt with visitor photo, name, and visit purpose.' },
      { step: '02', title: '1-Tap Authorization', desc: 'Employee reviews visitor details and taps Approve or Decline directly from the notification.' },
      { step: '03', title: 'Pass Status Updated', desc: 'Front-desk console and visitor screen immediately update with the host decision.' },
      { step: '04', title: 'Timestamp Logged', desc: 'Exact approval timestamp and host identity are recorded in the visitor audit log.' }
    ],
    useCases: [
      'Financial and professional services firms requiring explicit host sign-off before lobby clearance.',
      'Research and engineering laboratories protecting restricted technical work areas.',
      'Hybrid workplaces where hosts may be in different office areas or meeting rooms.'
    ]
  },
  {
    id: 'real-time-notifications',
    slug: 'real-time-notifications',
    path: '/features/real-time-notifications',
    title: 'Real-Time Notifications',
    icon: BellRing,
    category: 'Communication',
    badge: 'Instant Alerts',
    headline: 'Immediate Arrival Alerts Dispatched the Second a Visitor Registers',
    shortDesc: 'Delivers instant arrival notices across email, SMS, and webhook channels so hosts know their guests have arrived without reception delays.',
    benefit: 'Reduces lobby waiting times, eliminates reception phone calls, and keeps hosts informed from arrival through departure.',
    details: [
      'Fast multi-channel notification engine dispatching alerts in real time.',
      'Visitor welcome confirmation with meeting location and check-in summary.',
      'Host check-out departure notifications when a visitor concludes their visit.',
      'Departmental notification routing connecting visitors with the correct team escort.',
      'Customizable notification templates for different visitor categories and departments.'
    ],
    workflowSteps: [
      { step: '01', title: 'Check-In Submission', desc: 'Visitor completes registration form on the mobile portal or front-desk kiosk.' },
      { step: '02', title: 'Channel Dispatch', desc: 'System routes arrival alert notifications directly to the designated employee host.' },
      { step: '03', title: 'Visitor Guidance', desc: 'Visitor receives check-in confirmation and next-step directions on their screen.' },
      { step: '04', title: 'Departure Notice', desc: 'Host receives confirmation the moment the visitor completes departure check-out.' }
    ],
    useCases: [
      'Recruitment interview days with structured, back-to-back candidate schedules.',
      'Executive client presentations, board meetings, and partner consultations.',
      'Vendor deliveries, facilities maintenance visits, and contractor check-ins.'
    ]
  },
  {
    id: 'visitor-history-reporting',
    slug: 'visitor-history-reporting',
    path: '/features/visitor-history-reporting',
    title: 'Visitor History & Reporting',
    icon: History,
    category: 'Audit & Records',
    badge: 'Searchable Records',
    headline: 'Searchable Historical Records & Exportable Workplace Compliance Logs',
    shortDesc: 'Maintain an organized, searchable archive of every visit with check-in timestamps, host records, and export options in CSV and PDF formats.',
    benefit: 'Provides immediate administrative review capabilities, simplifies audit preparations, and eliminates lost paper records.',
    details: [
      'Searchable historical archive filterable by visitor name, company, host, and date range.',
      'Granular audit timeline tracking exact check-in, host approval, and check-out timestamps.',
      'Exportable visitor reports in CSV, PDF, and spreadsheet-ready formats.',
      'Configurable data retention schedules supporting organizational record-keeping policies.',
      'Live on-premise headcount summary for emergency evacuation roll-call reviews.'
    ],
    workflowSteps: [
      { step: '01', title: 'Continuous Logging', desc: 'Every check-in, host approval, and check-out event is logged with exact timestamps.' },
      { step: '02', title: 'Filter & Search', desc: 'Administrators filter records by date range, department, visitor type, or host.' },
      { step: '03', title: 'Report Generation', desc: 'Generate and export clean visit activity summaries for audits or reviews.' },
      { step: '04', title: 'Scheduled Retention', desc: 'Historical records past your organization retention window are archived according to policy.' }
    ],
    useCases: [
      'Periodic workplace physical security reviews and facility management audits.',
      'Verifying contractor work hours and on-premise maintenance schedules.',
      'Workplace safety compliance documentation and emergency evacuation roster verification.'
    ]
  },
  {
    id: 'secure-visitor-data-management',
    slug: 'secure-visitor-data-management',
    path: '/features/secure-visitor-data-management',
    title: 'Secure Visitor Data Management',
    icon: Lock,
    category: 'Security & Privacy',
    badge: 'Data Protection',
    headline: 'Encrypted Data Handling, Tenant Segregation & Administrative Access Controls',
    shortDesc: 'Protects visitor information with TLS encryption in transit, encrypted storage at rest, dedicated organization workspaces, and role-based permissions.',
    benefit: 'Eliminates privacy leaks caused by open paper registers lying exposed on front reception counters.',
    details: [
      'TLS encryption for all data in transit between browsers, kiosks, and servers.',
      'Encrypted cloud data storage at rest with strict multi-tenant workspace isolation.',
      'Role-based access controls for Administrators, Receptionists, and Host Employees.',
      'Protected storage for visitor photos and digital signature acknowledgements.',
      'Configurable data retention windows with automated log purge routines.'
    ],
    workflowSteps: [
      { step: '01', title: 'Private Entry', desc: 'Guests submit personal contact information on private smartphone or kiosk screens.' },
      { step: '02', title: 'Encrypted Transmission', desc: 'Data is transmitted securely to cloud servers using modern TLS encryption.' },
      { step: '03', title: 'Role-Governed Access', desc: 'Only authorized administrators and designated hosts can access visitor records.' },
      { step: '04', title: 'Retention Management', desc: 'Visitor records are retained or purged according to organization data policies.' }
    ],
    useCases: [
      'Corporate offices handling confidential client visits and legal consultations.',
      'Healthcare and research organizations maintaining visitor records with strict privacy considerations.',
      'Enterprise facilities adhering to structured workplace privacy policies.'
    ]
  },
  {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    path: '/features/analytics-dashboard',
    title: 'Analytics Dashboard',
    icon: BarChart3,
    category: 'Insights',
    badge: 'Operational Visibility',
    headline: 'Workplace Visitor Metrics & Real-Time On-Premise Headcount Overview',
    shortDesc: 'Displays current on-premise headcount, daily visitor totals, peak arrival times, and department traffic patterns in an intuitive administrative console.',
    benefit: 'Helps facility managers allocate reception staff effectively, monitor facility traffic, and maintain real-time building visibility.',
    details: [
      'Real-time counters showing currently active visitors, today’s check-ins, and departures.',
      'Peak arrival hour patterns to help plan front-desk and reception staffing.',
      'Departmental visit distribution and contractor volume breakdown.',
      'Searchable visit log with status indicators for checked-in, pending, and checked-out visitors.',
      'Live emergency headcount summary showing all active guests on-premise.'
    ],
    workflowSteps: [
      { step: '01', title: 'Real-Time Ingestion', desc: 'Check-in, approval, and check-out events update dashboard counters immediately.' },
      { step: '02', title: 'Traffic Pattern Review', desc: 'Identify peak visitor arrival windows to optimize front-desk support.' },
      { step: '03', title: 'Department Insights', desc: 'Evaluate which teams or floors receive the highest volume of visiting guests.' },
      { step: '04', title: 'Administrative Summary', desc: 'Review daily or weekly footfall summaries for facility planning.' }
    ],
    useCases: [
      'Facility managers optimizing reception staffing during high-traffic morning windows.',
      'Workplace operations teams reviewing space and meeting room visitor density.',
      'Security administrators monitoring on-premise building headcount.'
    ]
  },
  {
    id: 'geo-fencing-verification',
    slug: 'geo-fencing-verification',
    path: '/features/geo-fencing-verification',
    title: 'Geo-Fencing Perimeter Verification',
    icon: MapPin,
    category: 'Security & Privacy',
    badge: 'Location Verification',
    headline: 'Browser-Based GPS Location Verification for On-Premise Check-Ins',
    shortDesc: 'Optionally verifies that a visitor smartphone is physically within your facility perimeter radius before allowing self-registration to proceed.',
    benefit: 'Prevents remote or fraudulent check-in attempts and confirms that the visitor is physically present at your entrance.',
    details: [
      'Configurable GPS perimeter radius defined around building entry gates or lobbies.',
      'Browser-based location verification without requiring native mobile app installation.',
      'Prevents remote pre-registration completion until the guest arrives on-premise.',
      'Clear on-screen feedback if check-in is attempted outside the authorized facility boundary.',
      'Administrator controls to enable, adjust, or disable geo-fencing rules per location.'
    ],
    workflowSteps: [
      { step: '01', title: 'Location Prompt', desc: 'Visitor opens the registration portal and grants browser location permission.' },
      { step: '02', title: 'Radius Calculation', desc: 'System verifies the device GPS coordinates against the facility perimeter setting.' },
      { step: '03', title: 'Entry Authorization', desc: 'If within the defined radius, registration and host routing proceed normally.' },
      { step: '04', title: 'Out-of-Bounds Notice', desc: 'If outside the boundary, the visitor is prompted to check in upon reaching the lobby.' }
    ],
    useCases: [
      'Corporate campuses and office parks with specific gatehouse entry points.',
      'Industrial and manufacturing facilities verifying physical arrival before site entry.',
      'Technology parks ensuring guests are present at the building lobby.'
    ]
  }
];

export const featuresData = FEATURES_DATA;
export default FEATURES_DATA;
