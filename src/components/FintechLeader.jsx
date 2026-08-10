import React from 'react';
import { Landmark, Shield, Zap, Globe, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FintechLeader() {
  const leadershipPillars = [
    {
      icon: <Cpu className="w-6 h-6 text-pp-blue" />,
      title: "Unified Mobile Money & Card Rails",
      desc: "Africa's payment landscape is highly fragmented. Mocard resolves this by bridging local mobile money networks (MTN MoMo, Airtel Money, M-Pesa, Orange Money) with global card networks (Visa, Mastercard) under a single, unified API endpoint.",
      tag: "Infrastructure Integration"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-650" />,
      title: "Instant Liquidity & Settlements",
      desc: "Traditionally, card settlements take days to clear, hindering local cash flow. MoCard bypasses this bottleneck by instantly converting card transactions into mobile money payouts, ensuring merchants receive funds in real-time.",
      tag: "Liquidity Velocity"
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Regulatory & Compliance Shield",
      desc: "Navigating licenses and compliance across 54 countries is complex. Our platform comes built-in with robust KYC, AML tracking, and regional central bank regulatory compliance, acting as your legal firewall across sub-Saharan Africa.",
      tag: "Pan-African Compliance"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-650" />,
      title: "Carrier-Grade Resilience",
      desc: "Engineered for Africa's unique network dynamics. Our transaction routing engine automatically bypasses carrier outages and retries dropped requests, guaranteeing high success rates even in low-bandwidth regions.",
      tag: "Network Fault Tolerance"
    }
  ];

  const stats = [
    { value: "40+", label: "African Countries Covered" },
    { value: "150+", label: "Integrated Local Payment Rails" },
    { value: "$1.2B+", label: "Annual Transaction Run Rate" },
    { value: "99.99%", label: "Transaction Gateway Uptime" }
  ];

  return (
    <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden" id="fintech-leader">
      {/* Decorative digital grid background & radial glows */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-pp-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-end">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pp-blue/10 border border-pp-blue/20 rounded-full px-4.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-pp-blue font-outfit">
              <span>The Future of African FinTech</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit tracking-tight leading-[1.12]">
              Pioneering the Unified Payment Engine for the African Continent
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-slate-400 font-sans text-base md:text-lg font-light leading-relaxed">
              Mocard is not just an API integrator — we are building the core financial plumbing that enables cross-border digital commerce. By linking global capital with local liquidity rails, we empower businesses to scale nationwide and beyond.
            </p>
          </div>
          
        </div>

        {/* Stats Showcase Card */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 text-center lg:text-left">
                <span className="text-4xl md:text-5xl font-black font-outfit text-white tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-slate-450 text-xs md:text-sm font-sans font-normal block leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars of Leadership */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {leadershipPillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-950/40 border border-slate-850 hover:border-slate-700 rounded-3xl p-8 hover:bg-slate-950/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon Wrapper */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-pp-blue/20 group-hover:bg-slate-900/60 transition-all">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold bg-slate-900 text-slate-450 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-wider font-outfit">
                    {pillar.tag}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-outfit text-white group-hover:text-pp-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-sans font-light">
                    {pillar.desc}
                  </p>
                </div>
                
              </div>

              {/* Decorative Arrow */}
              <div className="pt-6 border-t border-slate-900 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 group-hover:text-white transition-colors font-outfit">
                  Technical Documentation
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              </div>

            </div>
          ))}
        </div>

        {/* African Expansion Callout */}
        <div className="mt-20 border-t border-slate-850 pt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h4 className="text-xl font-bold font-outfit text-white">Ready to capture the African market?</h4>
            <p className="text-slate-450 text-sm font-sans font-light leading-relaxed">
              Integrate Mocard's SDK today to instantly accept mobile wallet payments in Kenya, Rwanda, Tanzania, Ghana, Nigeria, and 35+ other nations.
            </p>
          </div>
          <a 
            href="/contact" 
            className="w-full lg:w-auto px-8 py-4 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:bg-white hover:text-slate-950 transition duration-250 text-center shadow-md flex items-center justify-center space-x-2 shrink-0 group"
          >
            <span>Talk to Integration Experts</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
