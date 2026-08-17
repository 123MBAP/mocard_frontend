import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import DeveloperPage from './pages/DeveloperPage';
import PricingPage from './pages/PricingPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import Login from './components/Login';
import PaymentLinksPage from './pages/PaymentLinksPage';
import DashboardPage from './pages/DashboardPage';
import PersonalPage from './pages/PersonalPage';
import ReportingToolsPage from './pages/ReportingToolsPage';
import SandboxConsole from './pages/SandboxConsole';
import OnlineCheckoutsPage from './pages/OnlineCheckoutsPage';
import PersonalCheckoutPage from './pages/PersonalCheckoutPage';
import SendRequestPage from './pages/SendRequestPage';
import SecurityPage from './pages/SecurityPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/developers" element={<DeveloperPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment-links" element={<PaymentLinksPage />} />
          <Route path="/online-checkouts" element={<OnlineCheckoutsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/checkout" element={<PersonalCheckoutPage />} />
          <Route path="/send-request" element={<SendRequestPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/reporting-tools" element={<ReportingToolsPage />} />
          <Route path="/sandbox" element={<SandboxConsole />} />
          {/* Fallback path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}



