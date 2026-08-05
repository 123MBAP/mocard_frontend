import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import GetStartedSection from './components/GetStartedSection';
import ActionBanner from './components/ActionBanner';
import Footer from './components/Footer';
import Login from './components/Login';

// Landing Page Wrapper
function Home() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />



      {/* Core Features Section */}
      <Features />

      {/* Clients Ecosystem Section */}
      <Clients />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Get Started Section */}
      <GetStartedSection />

      {/* Bottom CTA Block */}
      <ActionBanner />

      {/* Structured Footer */}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Fallback path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

