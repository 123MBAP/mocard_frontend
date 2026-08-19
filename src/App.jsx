import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DeveloperPage from './pages/DeveloperPage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import Login from './components/Login';
import DashboardPage from './pages/DashboardPage';
import ReportingToolsPage from './pages/ReportingToolsPage';
import HostedChechouts from './pages/Business/HostedChechouts';
import PaymentsLinks from './pages/Business/PaymentsLinks';
import DonationAndPayments from './pages/Business/DonationAndPayments';
import ShopAndPayOnline from './pages/individual/ShopAndPayOnline';
import HolidaysAndFlights from './pages/individual/HolidaysAndFlights';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DeveloperPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/reporting-tools" element={<ReportingToolsPage />} />
          <Route path="/business/hosted-checkouts" element={<HostedChechouts />} />
          <Route path="/business/payment-links" element={<PaymentsLinks />} />
          <Route path="/business/donations" element={<DonationAndPayments />} />
          <Route path="/individual/shop-pay" element={<ShopAndPayOnline />} />
          <Route path="/individual/holidays-flights" element={<HolidaysAndFlights />} />
          {/* Fallback path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}



