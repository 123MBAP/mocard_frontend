import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Link2, ShieldCheck, Coins, BarChart3, Share2, Sparkles, Smartphone, CheckCircle } from 'lucide-react';

import createLink from '../assets/create_link.png';
import pay from '../assets/pay.png';
import devices from '../assets/hero_devices_only.png';

export default function PaymentLinksPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        {/* Sleek radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-2 bg-pp-blue/10 border border-pp-blue/20 rounded-full px-4.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-pp-blue font-outfit">
              <Sparkles className="w-3.5 h-3.5 mr-1 animate-pulse" />
              <span>Fintech · Payments</span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Get paid with a <span className="text-pp-blue">single link.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Mocard turns any product, service, or invoice into a sharable payment link. Customers tap, pay, and you get notified in seconds — no checkout to build, no integration to ship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="/login" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:bg-white hover:text-slate-950 transition duration-250 text-center shadow-md shadow-pp-blue/10"
              >
                Go to Mocard
              </a>
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-slate-350 text-sm font-bold font-outfit hover:bg-slate-900 hover:text-white transition duration-250 text-center"
              >
                Get started free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screens: See it in Action */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 font-outfit">
            Screens
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight">
            See it in action
          </h2>
          <p className="text-slate-500 font-light text-base md:text-lg">
            Experience how MoCard scales across device interfaces to keep transaction management effortless.
          </p>
        </div>

        {/* 3 Grid Showcase Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Link Creation Showcase (Left) */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4 mb-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">
                Link Creation Hub
              </span>
              <h3 className="text-2xl font-bold font-outfit text-pp-black">
                Create a Payment Link
              </h3>
              <p className="text-slate-555 text-sm font-light leading-relaxed">
                Generate shareable links in under a minute directly from your dashboard. Customize product name, set price amount, and specify description on the fly.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img 
                src={createLink} 
                alt="Mocard Link Creation Hub" 
                className="w-full h-80 object-cover object-top group-hover:scale-101 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Phone Checkout Interface (Right) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
            <div className="space-y-4 mb-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">
                Checkout Flow
              </span>
              <h3 className="text-2xl font-bold font-outfit text-pp-black">
                Tap, Pay, Settle
              </h3>
              <p className="text-slate-555 text-sm font-light leading-relaxed">
                Akagera Game Lodge payment links shown live on mobile checkout interface. Simple, fast payments in local wallets.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
              <img 
                src={pay} 
                alt="Mobile checkout page mockup" 
                className="w-full h-80 object-contain mx-auto group-hover:scale-103 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Responsive Devices Banner (Bottom) */}
          <div className="lg:col-span-12 bg-slate-900 text-white rounded-3xl p-8 md:p-12 mt-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,112,224,0.1),transparent_40%)]" />
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">
                Multi-Device Ready
              </span>
              <h3 className="text-3xl font-black font-outfit tracking-tight">
                Mocard Dashboard Across All Platforms
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Configure your business on laptops, verify customer transfers on your desktop, and watch payment alerts land in real-time on your mobile app dashboard.
              </p>
            </div>
            <div className="relative z-10 w-full lg:w-1/2 max-w-md shrink-0">
              <img 
                src={devices} 
                alt="Mocard devices mockup" 
                className="w-full object-contain mx-auto drop-shadow-2xl group-hover:translate-y-[-2px] transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-20 md:py-28 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
              Simplified Path
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight leading-tight">
              From idea to paid in minutes
            </h2>
            <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto">
              No coding, no setup headaches. Create a link, share it, and watch the payments come in.
            </p>
          </div>

          {/* 3 Step Process Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:border-slate-350 transition duration-300 relative group cursor-pointer shadow-xs">
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-pp-blue/10 transition-colors font-outfit">
                01
              </span>
              <div className="p-3 w-fit rounded-2xl bg-[#e8f0fe] text-pp-blue">
                <Link2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-outfit text-pp-black">
                  Create a link
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Name your product, set a price, add a short description. You're done in under a minute.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:border-slate-350 transition duration-300 relative group cursor-pointer shadow-xs">
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-pp-blue/10 transition-colors font-outfit">
                02
              </span>
              <div className="p-3 w-fit rounded-2xl bg-[#e8f0fe] text-pp-blue">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-outfit text-pp-black">
                  Share anywhere
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Paste into WhatsApp, SMS, email, social — anywhere your customers are. One tap, they pay.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:border-slate-350 transition duration-300 relative group cursor-pointer shadow-xs">
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-pp-blue/10 transition-colors font-outfit">
                03
              </span>
              <div className="p-3 w-fit rounded-2xl bg-[#e8f0fe] text-pp-blue">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-outfit text-pp-black">
                  Get paid & track
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Funds land in your account. A clean dashboard shows who paid, when, and for what.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Mocard Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Header left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">
              Made For Real Business
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight leading-tight">
              Built for small business reality.
            </h2>
            <p className="text-slate-500 font-sans text-base md:text-lg font-light leading-relaxed">
              Most payment tools assume you have a dev team, an accounting department, and a website. Mocard assumes you just want to get paid.
            </p>
            <div className="pt-2">
              <a 
                href="/contact" 
                className="inline-flex items-center space-x-2 text-sm font-bold text-pp-black hover:text-pp-blue font-outfit group"
              >
                <span>Request Custom Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Grid right */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Zero Integration */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <Link2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Zero integration</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  No plugins, no SDKs, no website needed. A link is the entire setup.
                </p>
              </div>
            </div>

            {/* Bank-Grade Security */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Bank-grade security</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Every payment is encrypted end-to-end. Your customers' data stays safe.
                </p>
              </div>
            </div>

            {/* Accepts Every Method */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <Coins className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Accepts every method</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Mobile money, cards, bank transfer — whatever works for your customer.
                </p>
              </div>
            </div>

            {/* Clear Reporting */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Clear reporting</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  See every sale, track revenue, export statements — no spreadsheets required.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.15),transparent_45%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight">
            Start getting paid today.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Mocard is free to sign up, quick to set up, and built to make money collection the easiest part of your day.
          </p>
          <div className="pt-2">
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:bg-white hover:text-slate-950 transition duration-250 shadow-lg"
            >
              <span>Get started free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
