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
              <span>Business · Integration</span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Connect your apps with a <span className="text-pp-blue">single integration.</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Mocard turns any CRM, database, or API into a shareable integration connector. Systems connect, sync, and you get notified in seconds — no custom glue-code to build, no infrastructure to ship.
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
                API Connection Hub
              </span>
              <h3 className="text-2xl font-bold font-outfit text-pp-black">
                Create an API Connection
              </h3>
              <p className="text-slate-555 text-sm font-light leading-relaxed">
                Generate shareable connections in under a minute directly from your dashboard. Customize service names, set data mappings, and specify parameters on the fly.
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
                Sync Flow
              </span>
              <h3 className="text-2xl font-bold font-outfit text-pp-black">
                Connect, Sync, Automate
              </h3>
              <p className="text-slate-555 text-sm font-light leading-relaxed">
                Enterprise data connection channels shown live in sync dashboard. Simple, fast integrations with third-party web services.
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
                Mocard Integration Dashboard Across All Platforms
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Configure your integrations on laptops, verify system connections on your desktop, and watch data sync alerts land in real-time on your mobile app dashboard.
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
              From idea to integrated in minutes
            </h2>
            <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto">
              No complex code, no setup headaches. Choose a connection, activate it, and watch the data sync flow.
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
                  Select your service
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Choose your CRM, database, or API, define data mappings, and specify headers. You're done in under a minute.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:border-slate-355 transition duration-300 relative group cursor-pointer shadow-xs">
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-pp-blue/10 transition-colors font-outfit">
                02
              </span>
              <div className="p-3 w-fit rounded-2xl bg-[#e8f0fe] text-pp-blue">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-outfit text-pp-black">
                  Authenticate once
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Enter your API keys or OAuth credentials securely. One click, and the secure connection is live.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 space-y-6 hover:border-slate-355 transition duration-300 relative group cursor-pointer shadow-xs">
              <span className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-pp-blue/10 transition-colors font-outfit">
                03
              </span>
              <div className="p-3 w-fit rounded-2xl bg-[#e8f0fe] text-pp-blue">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-outfit text-pp-black">
                  Sync & Monitor
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Data flows between your services. A clean dashboard shows sync status, traffic, and logs.
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
              Built for enterprise reality.
            </h2>
            <p className="text-slate-500 font-sans text-base md:text-lg font-light leading-relaxed">
              Most integration tools assume you have an army of engineers, a massive budget, and weeks of time. Mocard assumes you just want your software to connect.
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
                <h4 className="text-lg font-bold font-outfit text-pp-black">Zero code complexity</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  No custom middleware, no complex SDK maintenance. A configuration is the entire setup.
                </p>
              </div>
            </div>

            {/* Bank-Grade Security */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Enterprise security</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  Every data transmission is encrypted end-to-end. Your company's data stays safe.
                </p>
              </div>
            </div>

            {/* Accepts Every Method */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <Coins className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Supports every protocol</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  REST, GraphQL, gRPC, Webhooks — whatever works for your backend architecture.
                </p>
              </div>
            </div>

            {/* Clear Reporting */}
            <div className="p-6 bg-slate-50 border border-slate-200/50 rounded-2xl space-y-4 hover:bg-white hover:border-slate-300 transition duration-200">
              <div className="p-2.5 w-fit rounded-xl bg-white border border-slate-200 text-pp-blue">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Real-time monitoring</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  See every request, track payload sizes, export activity logs — no complex debugging tools required.
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
            Start connecting today.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Mocard is free to sign up, quick to set up, and built to make software integration the easiest part of your day.
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
