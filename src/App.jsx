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
          {/* Fallback path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


