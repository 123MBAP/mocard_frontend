import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FintechLeader from '../components/FintechLeader';
import { Landmark, Users, Globe, Briefcase, Award, ShieldCheck, Compass, CheckCircle2, MapPin, Building2, TrendingUp } from 'lucide-react';

export default function CompanyPage() {
  const offices = [
    {
      city: "Kigali (HQ)",
      address: "Kigali Heights, Block B, 3rd Floor, Kigali, Rwanda",
      email: "kigali@mocard.rw",
      phone: "+250 788 123 456",
      desc: "Our primary engineering and executive headquarters in the heart of East Africa's fintech capital."
    },
    {
      city: "Nairobi",
      address: "Alchemist Building, Parklands Rd, Nairobi, Kenya",
      email: "nairobi@mocard.rw",
      phone: "+254 711 987 654",
      desc: "Our regional operations office managing merchant relations and mobile money integrations across East Africa."
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Founded in Kigali Heights",
      desc: "Mocard was established in Kigali, Rwanda. We launched our core routing engine to connect international platforms directly to local business databases and services."
    },
    {
      year: "2025",
      title: "East African Expansion",
      desc: "Expanded integration connectors to major local enterprise platforms and regional services. Routed millions of secure API calls."
    },
    {
      year: "2026",
      title: "Leading the Pan-African Frontier",
      desc: "Scaled connectivity across West and Southern Africa (including Nigeria and Ghana). Partnered with international banking partners to establish Mocard as the premier API integration engine for the continent."
    }
  ];

  return (
    <div className="bg-[#f8f7f4] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1b3b33] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,107,88,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,107,88,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-5">
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-[#dcc99b] bg-[#dcc99b]/10 px-4 py-1.5 inline-block border border-[#dcc99b]/15">
              Our Vision & Presence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08]">
              Leading African Business Integrator <br className="hidden sm:inline" />
              from <span className="text-[#dcc99b]">Kigali, Rwanda</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Headquartered at Kigali Heights, Mocard builds the developer APIs and software bridges that connect global platforms to Africa's local business databases and services.
            </p>
          </div>
        </div>
      </section>

      {/* Rwanda: The Fintech Launchpad Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2 text-[#1b6b58]">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Strategic Headquarters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1b2a26] leading-tight">
              Why Rwanda is Our Launchpad for Tech Integration Leadership
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Rwanda has established itself as the premier technology hub of Africa. Operating out of <strong>Kigali Heights</strong>, Mocard is situated at the epicenter of Rwanda's forward-looking digital economy.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              By working in partnership with the <strong>Kigali International Financial Centre (KIFC)</strong> ecosystem, we leverage progressive cross-border licensing frameworks, robust security standards, and high-speed regional connections. This unique sandbox environment lets us scale software integrations across East, West, and Southern Africa faster and more securely than ever.
            </p>
            
            <div className="grid grid-cols-2 gap-3 pt-3">
              {[
                'KIFC Ecosystem Member',
                'Kigali Heights Innovation Hub',
                'Global Security Compliance',
                'Pan-African Connector Network'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1b6b58] shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image/visual card column */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 space-y-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1b6b58]/5 blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#1b6b58]/10 text-[#1b6b58] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1b2a26]">Kigali Heights HQ</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                Our modern office overlooks Kigali Heights, offering our developers, systems designers, and merchants success team a creative workspace designed for breakthrough engineering.
              </p>
            </div>
            
            <div className="border-t border-slate-100 pt-5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Country Operations HQ</span>
                <span className="font-bold text-[#1b2a26]">Rwanda</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Regulatory Standard</span>
                <span className="font-bold text-[#1b2a26]">SOC2 & ISO 27001</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Corporate Status</span>
                <span className="font-bold text-[#1b2a26]">KIFC Registered</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Fintech Leader Section */}
      <FintechLeader />

      {/* Milestones / Growth Story Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 text-[#1b6b58]">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1b2a26]">Mocard Timeline</h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              From our initial launch in Rwanda to connecting transactions across the continent, here is how we grew.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-[#f8f7f4] p-8 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
                <div className="space-y-3">
                  <span className="text-4xl font-black text-[#1b6b58] block leading-none">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-[#1b2a26]">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Offices & Locations */}
      <section className="py-16 bg-[#f8f7f4] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-black text-[#1b2a26]">Global Operations</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto font-light">
              Mocard coordinates integration connectors and security standards across regional and international hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[#1b6b58] font-bold">
                    <Globe className="w-5 h-5" />
                    <span>{office.city}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {office.desc}
                  </p>
                </div>
                <div className="space-y-2 text-xs text-slate-500 leading-relaxed font-light pt-4 border-t border-slate-100">
                  <p className="text-slate-700">{office.address}</p>
                  <p className="font-mono text-slate-500 block mt-2">Email: {office.email}</p>
                  <p className="font-mono text-slate-500">Phone: {office.phone}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}