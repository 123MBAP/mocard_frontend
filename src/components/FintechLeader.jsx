import React from 'react';
import { Landmark, Shield, Zap, Globe, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FintechLeader() {
  const leadershipPillars = [
    {
      icon: <Cpu className="w-6 h-6 text-pp-blue" />,
      title: "Unified Business Integration Engine",
      desc: "The modern software ecosystem is highly fragmented. Mocard resolves this by bridging CRMs, ERPs, databases, and third-party SaaS applications under a single, unified API hub.",
      tag: "API Middleware Hub"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-650" />,
      title: "Real-time Data Synchronization",
      desc: "Traditionally, data synchronization batch jobs take hours or days to run, slowing down decision making. Mocard bypasses this bottleneck by instantly syncing events, ensuring systems remain updated in real-time.",
      tag: "Real-time Sync"
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Enterprise Security & Compliance Shield",
      desc: "Navigating security compliance and data protection guidelines across different jurisdictions is complex. Our platform comes built-in with robust encryption, SOC2 tracking, and compliance shields.",
      tag: "Global Security Standards"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-655" />,
      title: "Enterprise-Grade Resilience",
      desc: "Engineered for complex enterprise microservices. Our transaction routing engine automatically bypasses API outages and retries dropped requests, guaranteeing high success rates.",
      tag: "System Fault Tolerance"
    }
  ];

  const stats = [
    { value: "40+", label: "Connected Cloud Providers" },
    { value: "150+", label: "Pre-built SaaS Connectors" },
    { value: "$1.2B+", label: "Annual API Requests Handled" },
    { value: "99.99%", label: "Gateway System Uptime" }
  ];

  return (
    <section className="bg-white text-pp-black py-20 md:py-28 relative overflow-hidden" id="fintech-leader">
      {/* Decorative digital grid background & radial glows */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-pp-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-end">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pp-blue/10 border border-pp-blue/20 rounded-full px-4.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-pp-blue font-outfit">
              <span>The Future of Business Integration</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit tracking-tight leading-[1.12] text-pp-black">
              Pioneering the Unified Integration Engine for Modern Enterprises
            </h2>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-slate-600 font-sans text-base md:text-lg font-light leading-relaxed">
              Mocard is not just an API integrator — we are building the core connectivity fabric that enables modern digital operations. By linking diverse applications with local and cloud systems, we empower businesses to scale.
            </p>
          </div>
          
        </div>

        {/* Stats Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-20 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 text-center lg:text-left">
                <span className="text-4xl md:text-5xl font-black font-outfit text-pp-black tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-slate-600 text-xs md:text-sm font-sans font-normal block leading-snug">
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
              className="group bg-white border border-slate-200 hover:border-slate-300 rounded-3xl p-8 hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Icon Wrapper */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 group-hover:border-pp-blue/30 group-hover:bg-pp-blue/5 transition-all">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider font-outfit">
                    {pillar.tag}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">
                    {pillar.desc}
                  </p>
                </div>
                
              </div>

          </div>
          ))}
        </div>

        {/* African Expansion Callout */}
        <div className="mt-20 border-t border-slate-200 pt-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h4 className="text-xl font-bold font-outfit text-pp-black">Ready to scale your enterprise operations?</h4>
            <p className="text-slate-600 text-sm font-sans font-light leading-relaxed">
              Integrate Mocard's API today to instantly connect and automate workflows across CRMs, ERPs, and cloud tools.
            </p>
          </div>
          <a 
            href="/contact" 
            className="w-full lg:w-auto px-8 py-4 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:bg-slate-900 transition duration-250 text-center shadow-md flex items-center justify-center space-x-2 shrink-0 group"
          >
            <span>Talk to Integration Experts</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
