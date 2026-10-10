import { 
  Building2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory
} from 'lucide-react';

export const SOLUTIONS_DATA = [
  {
    id: 'corporate-offices',
    slug: 'corporate-offices',
    path: '/solutions/corporate-offices',
    title: 'Corporate Offices',
    tagline: 'Deliver an executive welcome experience, eliminate paper logbooks, and connect visitors with hosts in seconds.',
    icon: Building2,
    badge: 'Enterprise & HQ',
    heroHeadline: 'Professional Visitor Management for Corporate Workplaces & Enterprise Headquarters',
    description: 'Modernize your front-desk reception with touchless QR registration, instant host notifications, digital NDA signing, and clear visitor records across executive suites and multi-floor offices.',
    challenges: [
      'Insecure paper visitor registers exposing client names and meeting details at reception.',
      'Receptionists manually calling internal desk extensions to locate meeting hosts.',
      'Front-desk bottlenecks during morning interview rounds and executive client arrivals.',
      'Lack of accurate digital records showing which visitors are currently on-premise.'
    ],
    solutions: [
      'Touchless smartphone QR registration with professional workplace branding.',
      'Instant arrival notifications dispatched directly to host employees via email and SMS.',
      'Digital NDA agreements and safety acknowledgements signed on visitor phones.',
      'Searchable digital visit logs with exact check-in and check-out timestamps.'
    ],
    workflowSteps: [
      { step: '01', title: 'Arrival Scan', desc: 'Visitor scans the lobby QR code with their smartphone camera.' },
      { step: '02', title: 'Quick Registration', desc: 'Visitor enters their details, captures a photo, and selects their meeting host.' },
      { step: '03', title: 'Host Alert', desc: 'Host employee receives an instant notification and authorizes the visit with 1 tap.' },
      { step: '04', title: 'Digital Pass Issued', desc: 'Visitor receives a digital pass displaying host name, floor details, and guest Wi-Fi.' }
    ],
    keyFeatures: ['QR Badge Issuance', 'Host 1-Tap Approval', 'Digital NDA Signatures', 'Wi-Fi Credentials Delivery', 'Pre-Registration Links'],
    metric: '80% Faster Reception Check-In',
    useCases: [
      'Corporate headquarters and multi-floor administrative offices.',
      'Management consulting, accounting, and legal firm offices.',
      'Financial services, private banking, and executive boardrooms.'
    ]
  },
  {
    id: 'it-companies',
    slug: 'it-companies',
    path: '/solutions/it-companies',
    title: 'IT Companies',
    tagline: 'Protect intellectual property and R&D facilities with host authorizations, contractor passes, and audit trails.',
    icon: Cpu,
    badge: 'Tech & R&D Labs',
    heroHeadline: 'Structured Visitor Governance for Technology Companies & Innovation Facilities',
    description: 'Enforce accountability across engineering hubs and technical facilities with mandatory host approvals, digital NDA signatures, time-restricted contractor passes, and searchable compliance logs.',
    challenges: [
      'Need to prevent unescorted guests from wandering into sensitive engineering floors.',
      'Managing high volumes of job candidates, external contractors, and delivery personnel.',
      'Internal security audits requiring verified physical visitor history records.',
      'Manual contractor time-tracking and safety briefing record collection.'
    ],
    solutions: [
      'Mandatory host approval required before visitor access passes are activated.',
      'Browser-based geo-fencing radius checks confirming physical presence at the entrance.',
      'Electronic NDA signing captured and timestamped before badge generation.',
      'Comprehensive audit history filterable by date, department, and visitor category.'
    ],
    workflowSteps: [
      { step: '01', title: 'Entrance Check-In', desc: 'Candidate or contractor scans QR at the security desk or entrance kiosk.' },
      { step: '02', title: 'Identity & NDA Capture', desc: 'Visitor enters credentials, captures photo ID, and signs confidentiality NDA.' },
      { step: '03', title: 'Technical Lead Approval', desc: 'Designated employee host receives arrival alert and grants entry.' },
      { step: '04', title: 'Timestamped Logging', desc: 'Complete visit details and approval timestamps are archived for compliance.' }
    ],
    keyFeatures: ['Geo-Fencing Perimeter Guard', 'Host Push Alerts', 'Searchable Audit Trails', 'Contractor Passes', 'NDA Digital Signatures'],
    metric: '100% Host Authorization Enforced',
    useCases: [
      'Software engineering offices and cloud development centers.',
      'Hardware design laboratories, testing facilities, and clean rooms.',
      'Fintech and SaaS companies requiring verified physical visitor logs.'
    ]
  },
  {
    id: 'business-parks-multi-tenant',
    slug: 'business-parks-multi-tenant',
    path: '/solutions/business-parks-multi-tenant',
    title: 'Business Parks & Multi-Tenant Facilities',
    tagline: 'Coordinate shared lobby reception, multiple tenant directories, and gatehouse entry under one platform.',
    icon: Layers,
    badge: 'Commercial Real Estate',
    heroHeadline: 'Centralized Multi-Tenant Visitor Management for Commercial Tech Parks & Office Complexes',
    description: 'Organize visitor flow across multi-tenant commercial buildings with dedicated company directories, tenant data isolation, shared gate check-ins, and centralized facility visibility.',
    challenges: [
      'Multiple tenant companies sharing common building entrances and security desks.',
      'Confusion when visitors arrive without knowing their host exact company or suite.',
      'Need to isolate visitor records between tenant companies for privacy compliance.',
      'Difficulty tracking overall building occupancy across all tenant spaces.'
    ],
    solutions: [
      'Multi-company directory enabling visitors to easily select their destination tenant.',
      'Direct notification routing to the appropriate tenant host without cross-tenant visibility.',
      'Tenant data isolation ensuring each company only sees their own visitor records.',
      'Facility-wide headcount summary providing overall building occupancy visibility.'
    ],
    workflowSteps: [
      { step: '01', title: 'Lobby Check-In', desc: 'Visitor scans lobby QR code and selects the destination tenant company.' },
      { step: '02', title: 'Tenant Routing', desc: 'Registration details route directly to the selected tenant host.' },
      { step: '03', title: 'Host Clearance', desc: 'Tenant employee confirms arrival and authorizes the visitor pass.' },
      { step: '04', title: 'Floor Access', desc: 'Visitor presents digital pass at the tenant reception desk on arrival.' }
    ],
    keyFeatures: ['Multi-Tenant Directory', 'Tenant Data Isolation', 'Multi-Gate Checkpoints', 'Live Building Headcount', 'Departmental Routing'],
    metric: '4x Higher Lobby Throughput',
    useCases: [
      'Commercial office parks with multiple corporate tenant businesses.',
      'Co-working facilities, shared office hubs, and executive suites.',
      'Commercial towers with central security checkpoints and private tenant floors.'
    ]
  },
  {
    id: 'educational-institutions-campuses',
    slug: 'educational-institutions-campuses',
    path: '/solutions/educational-institutions-campuses',
    title: 'Educational Institutions & Campuses',
    tagline: 'Support structured visitor registration, parent check-ins, and administrative campus oversight.',
    icon: GraduationCap,
    badge: 'Campus & Academy',
    heroHeadline: 'Organized Campus Visitor Tracking for Schools, Colleges & Educational Facilities',
    description: 'Maintain clear oversight of parent arrivals, guest lecturers, contractors, and campus visitors across multiple entrance gates with photo verification and host notifications.',
    challenges: [
      'Managing visitor influx across main campus gates, administrative blocks, and faculties.',
      'Verifying parent and guardian identities during student pick-up or meetings.',
      'Tracking unescorted vendors, maintenance workers, and contractors on campus grounds.',
      'Manual paper registers that make historical campus visit reviews difficult and slow.'
    ],
    solutions: [
      'Multi-gate registration checkpoints synchronized under one administrative console.',
      'Photo capture and purpose-of-visit tracking for every non-student guest.',
      'Administrative notification routing to designated department heads and faculty staff.',
      'Searchable digital archives showing exact entry and exit times across all campus gates.'
    ],
    workflowSteps: [
      { step: '01', title: 'Gatehouse Registration', desc: 'Parent or guest scans QR code at the campus security entrance.' },
      { step: '02', title: 'Verification & Purpose', desc: 'Visitor records photo ID, contact details, and selects faculty host.' },
      { step: '03', title: 'Faculty Authorization', desc: 'Administrative office or faculty member receives notification.' },
      { step: '04', title: 'Gate Pass Issued', desc: 'Visitor badge is issued indicating designated campus destination.' }
    ],
    keyFeatures: ['Multi-Gate Synchronization', 'Photo ID Capture', 'Live On-Premise Headcount', 'Parent Visit Tracking', 'Vendor Records'],
    metric: 'Complete Campus Entry Visibility',
    useCases: [
      'K-12 private and public schools managing parent and visitor check-ins.',
      'College and university campuses with multiple academic buildings and entrance gates.',
      'Vocational training institutes and research academies.'
    ]
  },
  {
    id: 'hospitals-healthcare',
    slug: 'hospitals-healthcare',
    path: '/solutions/hospitals-healthcare',
    title: 'Hospitals & Healthcare Facilities',
    tagline: 'Coordinate patient visitor flow, digital health acknowledgements, and reception records with privacy.',
    icon: Stethoscope,
    badge: 'Healthcare & Clinics',
    heroHeadline: 'Organized Visitor Coordination for Hospitals, Clinics & Healthcare Facilities',
    description: 'Support busy healthcare reception desks with touchless mobile check-in, health declaration acknowledgements, visiting-hour pass expiration, and protected visitor records.',
    challenges: [
      'Lobby and waiting room overcrowding during designated patient visiting hours.',
      'Germ transmission risks associated with shared pens and paper logbooks on counters.',
      'Need to capture symptom screening and infection protocol acknowledgements.',
      'Strict patient privacy requirements preventing visible visitor registries at reception.'
    ],
    solutions: [
      'Touchless smartphone registration eliminating physical contact with shared stationery.',
      'Digital infection protocol and health declaration sign-offs before pass issuance.',
      'Time-limited visitor pass badges that automatically reflect visiting hour status.',
      'Confidential digital records protecting patient and visitor identities from public view.'
    ],
    workflowSteps: [
      { step: '01', title: 'Touchless Arrival', desc: 'Visitor scans QR code at hospital entrance with their personal phone.' },
      { step: '02', title: 'Health Protocol', desc: 'Guest completes contact details and infection safety declaration.' },
      { step: '03', title: 'Ward & Host Selection', desc: 'Visitor selects the designated department or healthcare contact.' },
      { step: '04', title: 'Timed Pass Active', desc: 'Digital badge is generated with active validity for the visit window.' }
    ],
    keyFeatures: ['Touchless QR Scanning', 'Health & Safety Declarations', 'Time-Limited Passes', 'Private Visitor Records', 'Departmental Routing'],
    metric: 'Touchless & Privacy-Protected Reception',
    useCases: [
      'Multi-specialty hospitals, outpatient medical centers, and surgical clinics.',
      'Diagnostic centers, specialty healthcare facilities, and therapy centers.',
      'Assisted living communities and residential healthcare facilities.'
    ]
  },
  {
    id: 'manufacturing-industrial',
    slug: 'manufacturing-industrial',
    path: '/solutions/manufacturing-industrial',
    title: 'Manufacturing & Industrial Facilities',
    tagline: 'Enforce safety briefings, contractor intake, PPE acknowledgements, and operational site records.',
    icon: Factory,
    badge: 'Industrial Operations',
    heroHeadline: 'Industrial Gate Security, Contractor Intake & Facility Visit Records',
    description: 'Streamline contractor check-in, delivery driver intake, safety guideline acknowledgements, and emergency plant headcount records for manufacturing and industrial facilities.',
    challenges: [
      'Ensuring all outside contractors review safety rules before entering plant floors.',
      'Managing truck drivers and logistics personnel at cargo gate checkpoints.',
      'Maintaining complete contractor attendance logs for statutory workplace audits.',
      'Difficulty knowing exact on-premise non-employee headcount during emergency drills.'
    ],
    solutions: [
      'Digital safety guideline briefing and PPE acknowledgement required before entry.',
      'Vehicle license plate and driver company registration at gatehouse kiosks.',
      'Supervisor authorization workflows for contractor floor access passes.',
      'Real-time on-premise visitor list accessible for emergency muster accounting.'
    ],
    workflowSteps: [
      { step: '01', title: 'Gate Intake', desc: 'Contractor or driver scans QR code at security gatehouse or entry point.' },
      { step: '02', title: 'Safety & PPE Sign-Off', desc: 'Visitor acknowledges facility safety protocols and enters vehicle info.' },
      { step: '03', title: 'Plant Supervisor Sign-Off', desc: 'Facility manager or department lead authorizes site pass.' },
      { step: '04', title: 'On-Premise Log', desc: 'Active contractor count is recorded on the facility visitor dashboard.' }
    ],
    keyFeatures: ['Safety Protocol Sign-Off', 'Vehicle License Plate Capture', 'Contractor Access Passes', 'Emergency Headcount Roster', 'Supervisor Authorizations'],
    metric: '100% Safety Acknowledged Entry',
    useCases: [
      'Manufacturing plants, processing facilities, and assembly units.',
      'Logistics fulfillment centers, cargo distribution hubs, and warehouses.',
      'Energy, utility, and heavy industrial facilities.'
    ]
  }
];
