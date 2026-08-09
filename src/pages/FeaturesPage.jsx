import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cpu, Shield, Zap, RefreshCcw, Layers, Terminal, AlertTriangle, CheckCircle } from 'lucide-react';

export default function FeaturesPage() {
  const coreFeatures = [
    {
      title: "PCI-DSS Compliant Rails",
      desc: "Every card transaction is tokenized immediately at the edge. We ensure no sensitive credit card credentials touch your servers, keeping your compliance audits lightweight and simple.",
      icon: Shield,
      tag: "Security"
    },
    {
      title: "Dynamic Gateway Routing",
      desc: "Our engine analyzes network health in real-time. If a third-party mobile money or bank gateway experiences latency, transactions are automatically rerouted through secondary channels.",
      icon: Cpu,
      tag: "Uptime"
    },
    {
      title: "Signature-Verified Webhooks",
      desc: "Prevent webhook spoofing using SHA-256 HMAC signatures included in the headers. Verify each delivery was generated directly by Mocard with timestamps to prevent replay attacks.",
      icon: Zap,
      tag: "Developers"
    },
    {
      title: "Exponential Backoff Retries",
      desc: "If your callback endpoint goes offline, we retry webhook deliveries using an exponential backoff policy (up to 72 hours) to guarantee you never miss a transaction state update.",
      icon: RefreshCcw,
      tag: "Reliability"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Technology Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Built for Scale &amp; Built for Speed
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Mocard provides high-availability API bridges to bypass local network limits. Settle card transactions instantly to mobile money, banks, and online wallets.
            </p>
          </div>
        </div>
      </section>

      {/* Features Detail Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Enterprise-Grade Integration Infrastructure
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            We handle the complexity of carrier negotiations, uptime compliance, and payment rails so you can focus entirely on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coreFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-350 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-pp-blue flex items-center justify-center">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider font-outfit">
                    {feat.tag}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-outfit text-pp-black">{feat.title}</h3>
                  <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Uptime & Reliability Visualization */}
      <section className="py-16 bg-pp-black text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pp-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-wider font-outfit block">SLA Commitment</span>
            <h3 className="text-3xl font-black font-outfit leading-tight">99.9% Operational Uptime Guarantee</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Our automated failover routines route around downtime. With continuous monitoring of network endpoints in Europe, Africa, and the Americas, Mocard ensures high-availability transaction processing.
            </p>
            <div className="flex items-center space-x-3 text-xs font-bold font-outfit">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>All networks operating normally</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 font-mono text-xs text-slate-350 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-slate-100 font-sans">Live System Health</span>
              <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">Stable</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Card Acquiring Network</span>
                <span className="text-emerald-400">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Mobile Money Settlement Gateways</span>
                <span className="text-emerald-400">99.92%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bank Settlement Rails</span>
                <span className="text-emerald-400">99.95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>API Endpoint Latency</span>
                <span className="text-emerald-400">120ms avg</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between text-[10px] text-slate-500 font-sans">
              <span>Refreshed: Real-time</span>
              <span>SLA Target: 99.90%</span>
            </div>
          </div>

        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
            Ready to Build With Us?
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto font-light">
            Read our quick start integration documents or reach out directly to set up a developer sandbox environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit font-bold">
            <a href="/developers" className="w-full sm:w-auto px-8 py-4 rounded-full bg-pp-black text-white hover:bg-pp-blue transition duration-200 text-center text-sm shadow-sm">
              Read API Docs
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-pp-black text-pp-black hover:bg-slate-50 transition duration-200 text-center text-sm">
              Contact Engineering
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
