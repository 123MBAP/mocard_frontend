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
    },
    {
      city: "London",
      address: "85 Great Portland Street, London, W1W 7LT, UK",
      email: "london@mocard.rw",
      phone: "+44 20 7946 0192",
      desc: "Our regulatory compliance and international banking relations hub."
    }
  ];

  const jobs = [
    {
      title: "Senior Go / Backend Engineer",
      team: "Core Infrastructure",
      location: "Kigali HQ / Hybrid",
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

  const timeline = [
    {
      year: "2024",
      title: "Founded in Kigali Heights",
      desc: "Mocard was established in Kigali, Rwanda. We launched our core routing engine to connect international credit cards directly to Rwanda's local mobile money rails."
    },
    {
      year: "2025",
      title: "East African Expansion",
      desc: "Expanded payment rails to Kenya, Uganda, and Tanzania, integrating M-Pesa, MTN MoMo, Airtel Money, and local banks. Hit $100M+ in routed transactions."
    },
    {
      year: "2026",
      title: "Leading the Pan-African Frontier",
      desc: "Scaled connectivity across West and Southern Africa (including Nigeria and Ghana). Partnered with international banking partners to establish Mocard as the premier API payment engine for the continent."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero: Bold, Dark, Visionary */}
      <section className="bg-pp-black text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,224,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full font-outfit">
              Our Vision &amp; Presence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-outfit tracking-tight leading-[1.08]">
              Leading African FinTech <br className="hidden sm:inline" />
              from <span className="text-pp-blue">Kigali, Rwanda</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Headquartered at Kigali Heights, Mocard builds the developer APIs and banking bridges that connect global capital to Africa's local mobile money structures.
            </p>
          </div>
        </div>
      </section>

      {/* Rwanda: The Fintech Launchpad Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left info column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-2 text-pp-blue">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider font-outfit">Strategic Headquarters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Why Rwanda is Our Launchpad for Fintech Leadership
            </h2>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light font-sans">
              Rwanda has established itself as the premier technology hub of Africa. Operating out of **Kigali Heights**, Mocard is situated at the epicenter of Rwanda's forward-looking digital economy. 
            </p>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light font-sans">
              By working in partnership with the **Kigali International Financial Centre (KIFC)** ecosystem, we leverage progressive cross-border licensing frameworks, robust security standards, and high-speed regional connections. This unique sandbox environment lets us scale fintech integrations across East, West, and Southern Africa faster and more securely than ever.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 font-outfit">KIFC Ecosystem Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 font-outfit">Kigali Heights Innovation Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 font-outfit">Central Bank Compliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 font-outfit">Pan-African Gateway Licensing</span>
              </div>
            </div>
          </div>

          {/* Right image/visual card column */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-pp-blue/5 blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pp-blue/10 text-pp-blue flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-pp-black">Kigali Heights HQ</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                Our modern office overlooks Kigali Heights, offering our developers, systems designers, and merchants success team a creative workspace designed for breakthrough engineering.
              </p>
            </div>
            
            <div className="border-t border-slate-100 pt-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-sans">Country Operations HQ</span>
                <span className="font-bold text-pp-black font-outfit">Rwanda</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-sans">Regulatory Standard</span>
                <span className="font-bold text-pp-black font-outfit">PCI-DSS &amp; AML-II</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-sans">Corporate Status</span>
                <span className="font-bold text-pp-black font-outfit">KIFC Registered</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Fintech Leader Section (Moved here permanently) */}
      <FintechLeader />

      {/* Milestones / Growth Story Section (New & Huge) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center space-x-2 text-pp-blue">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider font-outfit">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">Mocard Timeline</h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              From our initial launch in Rwanda to connecting transactions across the continent, here is how we grew.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm relative flex flex-col justify-between hover:border-slate-350 transition-all duration-300">
                <div className="space-y-4">
                  <span className="text-4xl font-black text-pp-blue font-outfit block leading-none">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold font-outfit text-pp-black">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Offices & Locations */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black font-outfit text-pp-black">Global Operations</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto font-light">
              Mocard coordinates payment rails and regulatory guidelines across regional and international hubs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-slate-350 hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-pp-blue font-bold font-outfit">
                    <Globe className="w-5 h-5" />
                    <span>{office.city}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-sans font-light leading-relaxed">
                    {office.desc}
                  </p>
                </div>
                <div className="space-y-2 text-xs text-slate-550 leading-relaxed font-sans font-light pt-4 border-t border-slate-100">
                  <p className="text-slate-700">{office.address}</p>
                  <p className="font-mono text-slate-500 block mt-2">Email: {office.email}</p>
                  <p className="font-mono text-slate-500">Phone: {office.phone}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Careers / Hiring */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-black font-outfit text-pp-black">Join Our Kigali Team</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto font-light">
            We are looking for passionate developers, merchant integration experts, and systems architects to build Pan-African fintech rails.
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
