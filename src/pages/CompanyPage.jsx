import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FintechLeader from '../components/FintechLeader';
import { Landmark, Users, Globe, Briefcase, Award, ShieldCheck } from 'lucide-react';

export default function CompanyPage() {
  const offices = [
    {
      city: "Kigali (HQ)",
      address: "Kigali Heights, Block B, 3rd Floor, Kigali, Rwanda",
      email: "kigali@mocard.rw",
      phone: "+250 788 123 456"
    },
    {
      city: "Nairobi",
      address: "Alchemist Building, Parklands Rd, Nairobi, Kenya",
      email: "nairobi@mocard.rw",
      phone: "+254 711 987 654"
    },
    {
      city: "London",
      address: "85 Great Portland Street, London, W1W 7LT, UK",
      email: "london@mocard.rw",
      phone: "+44 20 7946 0192"
    }
  ];

  const jobs = [
    {
      title: "Senior Go / Backend Engineer",
      team: "Core Infrastructure",
      location: "Remote (Africa / Europe)",
      desc: "Scale our transaction routing engine and design failover pipelines in Go. Experience with concurrency and REST APIs is required."
    },
    {
      title: "Merchant Integration Engineer",
      team: "Developer Success",
      location: "Kigali HQ / Hybrid",
      desc: "Assist merchants with SDK setups, API parameters, and signature-verification webhooks configuration. Solid JS/Node knowledge."
    },
    {
      title: "Risk & Compliance Operations",
      team: "Risk Management",
      location: "Nairobi Office / Hybrid",
      desc: "Review business onboarding files, TIN certificates, and ensure compliance with regional AML regulations and licensing guidelines."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              About Mocard
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Connecting Global Commerce
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              We design integration engines and API bridges that bypass traditional transaction delays, letting businesses capture card payments and deposit funds anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-wider font-outfit block">Our Purpose</span>
            <h2 className="text-3xl font-black font-outfit text-pp-black leading-tight">Bypassing Payment Boundaries</h2>
            <p className="text-slate-650 text-sm leading-relaxed font-light">
              Mocard was built by a team of integration engineers who noticed that local payment networks (mobile money, local banks) are often isolated from international credit structures. 
            </p>
            <p className="text-slate-650 text-sm leading-relaxed font-light">
              By designing unified HTTP APIs, we offer businesses a single endpoint to link global credit cards to local payout rails. We handle transaction failovers and API scaling, freeing you to focus on client acquisition.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-2xl bg-pp-blue/10 text-pp-blue shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-pp-black font-outfit">Bank-Grade Standards</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Our systems use card payload tokenization. Direct integration requests bypass storage to keep PCI auditing simple.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 border-t border-slate-100 pt-6">
              <div className="p-3 rounded-2xl bg-pp-blue/10 text-pp-blue shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-base text-pp-black font-outfit">SLA Reliability</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Continuous uptime tracking and redundant transaction nodes route traffic around carrier outages in seconds.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FintechLeader />

      {/* Offices & Locations */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black font-outfit text-pp-black">Global Operations</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto font-light">
              Mocard coordinates integrations across regional hubs to ensure compliance with local guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-slate-350 transition-all duration-300 space-y-4">
                <div className="flex items-center space-x-2 text-pp-blue font-bold font-outfit">
                  <Globe className="w-5 h-5" />
                  <span>{office.city}</span>
                </div>
                <div className="space-y-2 text-xs text-slate-550 leading-relaxed font-sans font-light">
                  <p>{office.address}</p>
                  <p className="font-mono text-slate-700 block mt-3">Email: {office.email}</p>
                  <p className="font-mono text-slate-700">Phone: {office.phone}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Careers / Hiring */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-black font-outfit text-pp-black">Join Mocard</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto font-light">
            We are looking for integration engineers, risk experts, and builders to expand our global transaction rails.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-350 transition-all duration-300">
              <div className="space-y-4">
                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider font-outfit">
                  {job.team}
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-outfit text-pp-black">{job.title}</h3>
                  <span className="text-[11px] font-semibold text-slate-450 block font-outfit">{job.location}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{job.desc}</p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <a 
                  href="mailto:careers@mocard.rw" 
                  className="w-full text-center py-2.5 rounded-full bg-pp-black hover:bg-pp-blue text-white text-xs font-bold font-outfit transition duration-200 block shadow-sm"
                >
                  Apply For Role
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
