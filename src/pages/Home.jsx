import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  ShieldCheck,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonationAndPayments from './Business/DonationAndPayments';

// Partner images
import akageraImg from '../assets/partners/akageraaviation.png';
import atlasImg from '../assets/partners/atlas.jpg';
import byizaImg from '../assets/partners/byiza.jpg';
import choosekigaliImg from '../assets/partners/choosekigali.png';
import cleoImg from '../assets/partners/cleo.png';
import dguideImg from '../assets/partners/dguide.png';
import everImg from '../assets/partners/ever-retreat.jpg';
import ferwabaImg from '../assets/partners/ferwaba.png';
import galaxyImg from '../assets/partners/galaxy-hotel.png';
import heavenImg from '../assets/partners/heaven.jpeg';
import norrskenImg from '../assets/partners/norrsken.jpeg';
import ecoImg from '../assets/partners/rwanda-eco-tours.png';
import satguruImg from '../assets/partners/satguru.png';
import victoriaImg from '../assets/partners/victoria.png';

// Assets
import CrossBorderImage from '../assets/images/cross_border.webp';
import HospitalityImage from '../assets/images/hospitality.jpg';
import TourismImage from '../assets/images/tourism.jpg';
import LocalBusinessImage from '../assets/images/local_business.jpg';
import IntegrationImage from '../assets/images/integration.jpg';
import Ecomerce_merchantsImage from '../assets/images/ecommerce_merchants.png';

export default function Home() {
  const [profile, setProfile] = useState('individual');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('business@mocard.rw');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const partnerLogos = [
    akageraImg,
    atlasImg,
    byizaImg,
    choosekigaliImg,
    cleoImg,
    dguideImg,
    everImg,
    ferwabaImg,
    galaxyImg,
    heavenImg,
    norrskenImg,
    ecoImg,
    satguruImg,
    victoriaImg,
  ];

  if (profile === 'business') {
    return <DonationAndPayments showToggle={true} setProfile={setProfile} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#13201c] antialiased">
      <Navbar />

      {/* HERO SECTION - Styled exactly like the centered screenshot layout */}
      <section className="bg-white pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          {/* Centered Personal / Business Toggle */}
          <div className="inline-flex border border-black/10 bg-white p-1 rounded-full shadow-sm mb-12">
            <button
              onClick={() => setProfile('individual')}
              className={`px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition duration-300 font-outfit rounded-full ${
                profile === 'individual'
                  ? 'bg-[#123c32] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              Personal
            </button>
            <button
              onClick={() => setProfile('business')}
              className={`px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition duration-300 font-outfit rounded-full ${
                profile === 'business'
                  ? 'bg-[#123c32] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 bg-transparent'
              }`}
            >
              Business
            </button>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] font-outfit text-[#123c32] mt-4">
            Connect Your Business with Mocard
          </h1>

          {/* Highlight Subheading */}
          <p className="text-sm sm:text-base font-extrabold text-[#1f6e5c] mt-4 font-outfit uppercase tracking-[0.2em]">
            Simple. Secure. Scalable.
          </p>
        </div>
      </section>

      {/* Section 1: Main Product Spotlight (Boost sales with checkout style) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Visual Container with CSS Glassmorphic Chart */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] max-w-[500px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 group border border-slate-100">
              
              {/* Background Product Image */}
              <img
                src={profile === 'business' ? Ecomerce_merchantsImage : HospitalityImage}
                alt="MoCard Showcase"
                className="w-full h-full object-cover brightness-[0.85] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Glassmorphic Sales/Spending Volume Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[310px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-2xl text-white flex flex-col items-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                  {profile === 'business' ? 'Total sales volume' : 'Monthly spending'}
                </span>
                <span className="text-3xl font-black font-outfit mt-1.5 tracking-tight">
                  {profile === 'business' ? '$20,560.00' : '$1,480.00'}
                </span>

                {/* Vertical Bar Chart (Pill Segments) */}
                <div className="flex justify-between items-end h-28 w-full mt-6 px-1">
                  
                  {/* Dec Bar */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-4.5 h-20 bg-white/10 rounded-full overflow-hidden flex flex-col justify-end">
                      <div className="w-full bg-[#e4d09b]" style={{ height: '30%' }} />
                      <div className="w-full bg-[#123c32]" style={{ height: '55%' }} />
                    </div>
                    <span className="text-[10px] text-white/70 mt-2 font-semibold">Dec</span>
                  </div>

                  {/* Jan Bar */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-4.5 h-20 bg-white/10 rounded-full overflow-hidden flex flex-col justify-end">
                      <div className="w-full bg-[#e4d09b]" style={{ height: '20%' }} />
                      <div className="w-full bg-[#123c32]" style={{ height: '35%' }} />
                    </div>
                    <span className="text-[10px] text-white/70 mt-2 font-semibold">Jan</span>
                  </div>

                  {/* Feb Bar */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-4.5 h-20 bg-white/10 rounded-full overflow-hidden flex flex-col justify-end">
                      <div className="w-full bg-[#e4d09b]" style={{ height: '35%' }} />
                      <div className="w-full bg-[#123c32]" style={{ height: '60%' }} />
                    </div>
                    <span className="text-[10px] text-white/70 mt-2 font-semibold">Feb</span>
                  </div>

                  {/* Mar Bar */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-4.5 h-20 bg-white/10 rounded-full overflow-hidden flex flex-col justify-end">
                      <div className="w-full bg-[#e4d09b]" style={{ height: '25%' }} />
                      <div className="w-full bg-[#123c32]" style={{ height: '45%' }} />
                    </div>
                    <span className="text-[10px] text-white/70 mt-2 font-semibold">Mar</span>
                  </div>

                </div>

                {/* Legend Indicators */}
                <div className="mt-5 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-4 text-[9px] uppercase tracking-wider font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#e4d09b]" />
                    <span className="text-white/90">Total</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#123c32]" />
                    <span className="text-white/90">
                      {profile === 'business' ? 'Checkout' : 'Transfers'}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Title, Description, bullet points and actions */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            
            <h2 className="text-4xl sm:text-5xl font-black text-[#123c32] tracking-tight leading-[1.05] font-outfit">
              {profile === 'business' ? (
                <>Boost sales with<br />checkout</>
              ) : (
                <>Connect and pay<br />anywhere</>
              )}
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] text-black/70 font-sans font-light leading-relaxed max-w-lg">
              {profile === 'business' ? (
                'Offer customers the checkout stack that features their favorite ways to pay: local mobile money wallets, debit cards, and international credit cards.'
              ) : (
                'Safely link your international credit cards to spend locally, transfer funds, and pay utility bills instantly without friction.'
              )}
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {profile === 'business' ? (
                <>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Accept mobile money payments and major cards
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Simple customization
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Built-in risk management
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Frictionless card-to-wallet linking
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Zero-fuss peer-to-peer transfers
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1f6e5c]/10 text-[#123c32]">
                      <Check size={13} className="stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-medium text-black/80 font-sans">
                      Real-time balance tracking
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* CTA Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#123c32] hover:bg-[#1f6e5c] text-white font-bold text-[14px] transition duration-300 shadow-md shadow-[#123c32]/10"
              >
                Sign Up
              </Link>
              <Link
                to={profile === 'business' ? '/business/payment-links' : '/individual/shop-pay'}
                className="px-8 py-3.5 rounded-full border border-black/20 bg-white text-black font-bold text-[14px] hover:bg-slate-50 transition duration-300"
              >
                {profile === 'business' ? 'More About Fees' : 'Learn More'}
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Section 2: Cards Grid Section (Tools to grow your business style) */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <h2 className="text-3xl sm:text-4xl font-black text-[#123c32] tracking-tight font-outfit text-left">
            {profile === 'business' ? 'Tools to grow your business' : 'Features built for your daily life'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mt-12">
            
            {/* Card 1: Send Invoices / Pay Local Merchants */}
            <div className="flex flex-col text-left">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-50 border border-slate-100 group">
                
                {/* Background image */}
                <img
                  src={profile === 'business' ? CrossBorderImage : TourismImage}
                  alt="Invoice context"
                  className="w-full h-full object-cover brightness-[0.9] transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Mobile/Receipt Mockup Overlay */}
                <div className="absolute inset-4 sm:inset-6 bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col justify-between shadow-2xl text-left scale-95 sm:scale-100 hover:scale-[1.01] transition-transform duration-300">
                  
                  {/* Mockup Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#123c32] flex items-center justify-center text-white text-[10px] font-black">
                        M
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 font-outfit">
                        MoCard Invoice
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-900">
                      {profile === 'business' ? '$129.70' : '50,000 RWF'}
                    </span>
                  </div>

                  {/* Mockup Main Message */}
                  <div className="mt-3">
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {profile === 'business' ? 'Hello, PAUL JOHNSON' : 'Transaction Success'}
                    </p>
                    <p className="text-sm sm:text-base font-black text-slate-900 mt-1 leading-snug">
                      {profile === 'business' ? (
                        'You just sent a $129.70 USD payment'
                      ) : (
                        'Successfully sent 50,000 RWF to Akagera Aviation'
                      )}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 mt-2 leading-relaxed">
                      {profile === 'business' ? (
                        'Thanks for using MoCard. It may take a few minutes for this transaction to appear in your account.'
                      ) : (
                        'The transaction was successfully routed using your linked visa card.'
                      )}
                    </p>
                  </div>

                  {/* View Invoice Button */}
                  <div className="mt-4">
                    <span className="inline-block py-1.5 px-4 bg-[#123c32] hover:bg-[#1f6e5c] text-white text-[9px] sm:text-[10px] font-bold rounded-full text-center">
                      {profile === 'business' ? 'View your Invoice' : 'View Receipt'}
                    </span>
                  </div>

                  {/* Mockup Footer */}
                  <div className="border-t border-slate-100 pt-2.5 mt-3 flex justify-between text-[8px] sm:text-[9px] text-slate-400 font-mono">
                    <div>
                      <span className="block font-bold">Transaction ID</span>
                      <span>2FR813526J881584N</span>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold">Transaction date</span>
                      <span>Sept 7, 2026</span>
                    </div>
                  </div>

                </div>

              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#123c32] font-outfit mt-6">
                {profile === 'business' ? 'Send invoices and get paid fast' : 'Pay local merchants in seconds'}
              </h3>
              <p className="text-sm sm:text-[15px] text-black/60 font-sans font-light mt-3 leading-relaxed">
                {profile === 'business' ? (
                  'Send invoices in seconds. Customers can pay fast even if they don\'t have a MoCard account.'
                ) : (
                  'Instantly scan to pay or send money directly from your international credit lines to local mobile money wallets.'
                )}
              </p>
            </div>

            {/* Card 2: Insights / Analytics */}
            <div className="flex flex-col text-left">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-50 border border-slate-100 group">
                
                {/* Background image */}
                <img
                  src={profile === 'business' ? IntegrationImage : LocalBusinessImage}
                  alt="Analytics context"
                  className="w-full h-full object-cover brightness-[0.85] transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Glassmorphic Customers Donut Chart Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[210px] aspect-square rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-2xl flex flex-col items-center justify-center text-white">
                  
                  {/* SVG Donut Chart */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Track Circle */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r="38"
                        className="stroke-white/20 fill-transparent"
                        strokeWidth="8"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r="38"
                        className="stroke-[#e4d09b] fill-transparent"
                        strokeWidth="8"
                        strokeDasharray="238.7"
                        strokeDashoffset="50"
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    {/* Inner Content */}
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-sm sm:text-base font-black tracking-tight leading-none">
                        {profile === 'business' ? 'Customers' : 'Spending'}
                      </span>
                      <span className="text-[8px] sm:text-[9px] opacity-80 mt-1 uppercase font-bold tracking-wider">
                        {profile === 'business' ? 'Past 30 days' : 'This Month'}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#123c32] font-outfit mt-6">
                {profile === 'business' ? 'Insights to turn data into action' : 'Track and manage your spending'}
              </h3>
              <p className="text-sm sm:text-[15px] text-black/60 font-sans font-light mt-3 leading-relaxed">
                {profile === 'business' ? (
                  'All the data and analytics you need to run and better understand your business.'
                ) : (
                  'Enjoy automated analytics and real-time transaction updates, helping you budget with confidence.'
                )}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Simplified, Clean Partners Section */}
      <section className="bg-slate-50 py-20 sm:py-24 border-t border-b border-slate-100/80 overflow-hidden text-center animate-fade-in-up">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#1f6e5c]/90 font-sans">
            Trusted by businesses, hotels, and travel providers across Rwanda
          </p>
          
          <div className="mt-12 relative w-full overflow-hidden mask-gradient py-4">
            <div className="animate-marquee flex items-center gap-20 sm:gap-28">
              {/* Double loop of all partner logos for a seamless infinite scroll */}
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="Partner logo"
                  className="h-10 sm:h-14 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Simplified Get Started / Onboarding Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-100 pb-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
                Get started
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-[#123c32] tracking-tight font-outfit">
                Bring your business into the ecosystem
              </h2>
            </div>
            <p className="text-sm text-black/60 lg:col-span-5 font-light leading-relaxed text-left">
              Start the onboarding process with a simple document verification workflow designed to get your business ready for integration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
            
            {/* Step 1: Prep Docs */}
            <div className="lg:col-span-6 bg-[#fcfbfa] border border-slate-100 rounded-3xl p-8 text-left flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1f6e5c]">
                  Step 01
                </span>
                <h3 className="text-xl font-black text-[#123c32] font-outfit mt-1">
                  Prepare your documents
                </h3>
                
                <div className="mt-6 space-y-3.5 text-sm">
                  <div className="flex gap-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-[#1f6e5c]/10 text-[#123c32] flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-black/70">Business registration certificate</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-[#1f6e5c]/10 text-[#123c32] flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-black/70">TIN certificate</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-[#1f6e5c]/10 text-[#123c32] flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-black/70">National ID or passport</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="h-5 w-5 rounded-full bg-[#1f6e5c]/10 text-[#123c32] flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-black/70">Brief business description</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#1f6e5c]">
                <ShieldCheck size={16} />
                <span>Clear digital copies are recommended.</span>
              </div>
            </div>

            {/* Step 2: Onboard Request */}
            <div className="lg:col-span-6 bg-[#123c32] text-white rounded-3xl p-8 text-left flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e4d09b]">
                  Step 02
                </span>
                <h3 className="text-xl font-black font-outfit mt-1">
                  From request to activation
                </h3>
                
                <div className="mt-6 space-y-4 text-sm text-white/80">
                  <p>1. Prepare and review your verification documents.</p>
                  <p>2. Email them to the MoCard onboarding team below.</p>
                  <p>3. Our team will verify and guide you through final setups.</p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs text-white/60 mb-3">Onboarding contact:</p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="flex-1 bg-white/[0.08] border border-white/10 px-4 py-2.5 font-mono text-xs text-white/90 rounded-xl flex items-center">
                    business@mocard.rw
                  </div>
                  <button
                    onClick={copyEmail}
                    className="px-5 py-2.5 bg-[#e4d09b] hover:bg-white text-[#123c32] text-xs font-bold rounded-xl transition duration-300 flex items-center justify-center gap-1.5"
                  >
                    <Copy size={13} />
                    {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Developer Resource Footer Bridge */}
      <section className="bg-white py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-[#123c32] font-outfit">
              Build connected experiences with MoCard.
            </p>
            <p className="text-xs text-black/50 mt-0.5">
              Explore our developer resources or speak with the team.
            </p>
          </div>
          <Link
            to="/developers"
            className="flex items-center gap-1.5 text-xs font-bold text-[#123c32] hover:text-[#1f6e5c] transition duration-200"
          >
            Developer resources
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}