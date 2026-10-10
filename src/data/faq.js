export const FAQ_DATA = [
  {
    category: 'Visitor Registration',
    question: 'How does visitor registration work in VisitOS?',
    answer: 'Visitors register by scanning the front-desk QR code with their smartphone camera. They fill in their contact details, select their host employee, take a photo, sign safety or NDA terms, and submit the form. The designated host is notified immediately to authorize entry.'
  },
  {
    category: 'Visitor Registration',
    question: 'Do visitors need to download a native mobile app to check in?',
    answer: 'No app download is required. VisitOS runs directly in standard mobile web browsers (including Chrome, Safari, and Edge) on iOS and Android. Visitors simply scan the QR code to open the self-guided registration page.'
  },
  {
    category: 'QR Code Check-in',
    question: 'How does QR code registration reduce reception waiting times?',
    answer: 'By allowing arriving visitors to register on their personal smartphones simultaneously, front-desk queues are eliminated. Returning guests and pre-invited attendees can complete registration and receive their digital pass in under 15 seconds.'
  },
  {
    category: 'Security',
    question: 'What is Geo-Fencing perimeter verification?',
    answer: 'Geo-Fencing is an optional administrator setting that uses browser-based location services to verify that a visitor smartphone is physically within your facility radius before self-registration proceeds, preventing remote or unauthorized check-in attempts.'
  },
  {
    category: 'Security',
    question: 'How is visitor and organizational data protected?',
    answer: 'All communications are protected using TLS encryption in transit, and data stored at rest is encrypted with standard modern algorithms. Customer workspaces are isolated, and role-based permissions ensure that only authorized administrators and hosts can review visit logs.'
  },
  {
    category: 'Employee Approvals',
    question: 'How do employee hosts receive and approve visitor arrival requests?',
    answer: 'When a visitor completes registration and selects an employee, an arrival notification is dispatched via email and SMS. The host reviews the visitor name, photo, and visit purpose, then taps "Approve Entry" or "Decline" with a note directly from their device.'
  },
  {
    category: 'Notifications',
    question: 'Which notification channels does VisitOS support?',
    answer: 'VisitOS supports email notifications across all plans, SMS arrival alerts on Starter and Enterprise plans, as well as webhook integrations for enterprise notification routing.'
  },
  {
    category: 'Visitor Reports',
    question: 'Can administrators export historical visitor records for audits?',
    answer: 'Yes. Organization Administrators can filter, review, and export comprehensive visitor history logs, check-in timestamps, signed NDAs, and live headcount rosters in CSV and PDF formats at any time.'
  },
  {
    category: 'Account Management',
    question: 'How quickly can our organization get started with VisitOS?',
    answer: 'Initial setup takes under 2 minutes. Register your organization, configure your workspace branding, add your employee roster, and display or print your dedicated lobby QR code to start welcoming visitors immediately.'
  },
  {
    category: 'Pricing',
    question: 'Can our organization start on the Free plan and upgrade later?',
    answer: 'Yes. The Free plan includes core QR registration and digital pass features for up to 15 employees and 100 visitors per month. You can upgrade to Starter or Enterprise at any time as your workplace requirements expand.'
  }
];
