import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GlobalAppBar } from './components/layout/GlobalAppBar';
import { LoadingScreen } from './components/common/LoadingScreen';

// Core Pages
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { FAQ } from './pages/FAQ';
import { LegalPolicy } from './pages/LegalPolicy';
import { NotFound } from './pages/NotFound';

// Feature & Solution Detail Pages
import { FeatureDetailPage } from './pages/features/FeatureDetailPage';
import { QRVisitorRegistrationPage } from './pages/features/QRVisitorRegistrationPage';
import { SolutionDetailPage } from './pages/solutions/SolutionDetailPage';
import { WorkflowDetailPage } from './pages/workflows/WorkflowDetailPage';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen flex flex-col bg-[#F3F9FD] text-[#14263D] font-sans antialiased selection:bg-[#1769D2] selection:text-white">
        {/* Global 65px Sticky Curved Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <ErrorBoundary>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Home />} />

              {/* Main Hub Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />

              {/* 8 Dedicated Individual Feature Pages */}
              <Route path="/features/qr-visitor-registration" element={<QRVisitorRegistrationPage />} />
              <Route path="/features/digital-visitor-passes" element={<FeatureDetailPage slug="digital-visitor-passes" />} />
              <Route path="/features/employee-approval-workflows" element={<FeatureDetailPage slug="employee-approval-workflows" />} />
              <Route path="/features/real-time-notifications" element={<FeatureDetailPage slug="real-time-notifications" />} />
              <Route path="/features/visitor-history-reporting" element={<FeatureDetailPage slug="visitor-history-reporting" />} />
              <Route path="/features/secure-visitor-data-management" element={<FeatureDetailPage slug="secure-visitor-data-management" />} />
              <Route path="/features/analytics-dashboard" element={<FeatureDetailPage slug="analytics-dashboard" />} />
              <Route path="/features/geo-fencing-verification" element={<FeatureDetailPage slug="geo-fencing-verification" />} />
              <Route path="/features/:slug" element={<FeatureDetailPage />} />

              {/* 6 Dedicated Individual Industry Solution Pages (with clean aliases) */}
              <Route path="/solutions/corporate-offices" element={<SolutionDetailPage slug="corporate-offices" />} />
              <Route path="/solutions/it-companies" element={<SolutionDetailPage slug="it-companies" />} />
              <Route path="/solutions/business-parks-multi-tenant" element={<SolutionDetailPage slug="business-parks-multi-tenant" />} />
              <Route path="/solutions/business-parks" element={<SolutionDetailPage slug="business-parks-multi-tenant" />} />
              <Route path="/solutions/educational-institutions-campuses" element={<SolutionDetailPage slug="educational-institutions-campuses" />} />
              <Route path="/solutions/educational-institutions" element={<SolutionDetailPage slug="educational-institutions-campuses" />} />
              <Route path="/solutions/hospitals-healthcare" element={<SolutionDetailPage slug="hospitals-healthcare" />} />
              <Route path="/solutions/healthcare" element={<SolutionDetailPage slug="hospitals-healthcare" />} />
              <Route path="/solutions/manufacturing-industrial" element={<SolutionDetailPage slug="manufacturing-industrial" />} />
              <Route path="/solutions/manufacturing" element={<SolutionDetailPage slug="manufacturing-industrial" />} />
              <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

              {/* 7 Dedicated Individual 7-Step Workflow Pages */}
              <Route path="/workflow/organization-registration" element={<WorkflowDetailPage slug="organization-registration" />} />
              <Route path="/workflow/admin-configuration" element={<WorkflowDetailPage slug="admin-configuration" />} />
              <Route path="/workflow/employee-sync-alerts" element={<WorkflowDetailPage slug="employee-sync-alerts" />} />
              <Route path="/workflow/visitor-qr-registration" element={<WorkflowDetailPage slug="visitor-qr-registration" />} />
              <Route path="/workflow/visitor-check-in" element={<WorkflowDetailPage slug="visitor-check-in" />} />
              <Route path="/workflow/host-approval" element={<WorkflowDetailPage slug="host-approval" />} />
              <Route path="/workflow/visitor-check-out" element={<WorkflowDetailPage slug="visitor-check-out" />} />
              <Route path="/workflow/:slug" element={<WorkflowDetailPage />} />

              {/* Auth, Support & Policy Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/benefits" element={<Navigate to="/features" replace />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<LegalPolicy />} />
              <Route path="/legal/privacy" element={<LegalPolicy />} />

              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Global Dark Navy Footer */}
        <Footer />

        {/* Global Persistent Floating Social App Bar */}
        <GlobalAppBar />
      </div>
    </Router>
  );
}

export default App;
