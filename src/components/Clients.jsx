import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

// Static imports for partner logos
import akageraaviation from '../assets/partners/akageraaviation.png';
import atlas from '../assets/partners/atlas.jpg';
import byiza from '../assets/partners/byiza.jpg';
import choosekigali from '../assets/partners/choosekigali.png';
import cleo from '../assets/partners/cleo.png';
import dguide from '../assets/partners/dguide.png';
import everretreat from '../assets/partners/ever-retreat.jpg';
import ferwaba from '../assets/partners/ferwaba.png';
import galaxyhotel from '../assets/partners/galaxy-hotel.png';
import heaven from '../assets/partners/heaven.jpeg';
import hirwa from '../assets/partners/hirwa.png';
import hobaagency from '../assets/partners/hobaagency.png';
import ingagi from '../assets/partners/ingagi.png';
import iremetravels from '../assets/partners/ireme-travels.jpeg';
import judith from '../assets/partners/judith.png';
import kivuhill from '../assets/partners/kivu-hill.jpg';
import kivuqueen from '../assets/partners/kivuqueen.jpeg';
import kn from '../assets/partners/kn.png';
import malonga from '../assets/partners/malonga.jpeg';
import maraville from '../assets/partners/maraville.png';
import mua from '../assets/partners/mua.png';
import norrsken from '../assets/partners/norrsken.jpeg';
import nwc from '../assets/partners/nwc.png';
import rmwlogo from '../assets/partners/rmwlogo.png';
import rwandaecotours from '../assets/partners/rwanda-eco-tours.png';
import satguru from '../assets/partners/satguru.png';
import victoria from '../assets/partners/victoria.png';
import victoriatravels from '../assets/partners/victoriatravels.jpeg';

export default function Clients() {
  // All 28 partners with actual logo assets
  const partners = [
    { name: "Norrsken Kigali", logo: norrsken },
    { name: "MUA Insurance", logo: mua },
    { name: "Satguru Travels", logo: satguru },
    { name: "Cleo Lake Kivu", logo: cleo },
    { name: "Akagera Aviation", logo: akageraaviation },
    { name: "Ferwaba", logo: ferwaba },
    { name: "Kivu Queen", logo: kivuqueen },
    { name: "Choose Kigali", logo: choosekigali },
    { name: "Rwanda Eco Tours", logo: rwandaecotours },
    { name: "Galaxy Hotel", logo: galaxyhotel },
    { name: "Hoba Agency", logo: hobaagency },
    { name: "Judith", logo: judith },
    { name: "Malonga", logo: malonga },
    { name: "Atlas", logo: atlas },
    { name: "Byiza", logo: byiza },
    { name: "Dguide", logo: dguide },
    { name: "Heaven", logo: heaven },
    { name: "Ireme Travels", logo: iremetravels },
    { name: "Victoria Travels", logo: victoriatravels },
    { name: "Ever Retreat", logo: everretreat },
    { name: "Hirwa", logo: hirwa },
    { name: "Ingagi", logo: ingagi },
    { name: "Kivu Hill", logo: kivuhill },
    { name: "KN", logo: kn },
    { name: "Maraville", logo: maraville },
    { name: "NWC", logo: nwc },
    { name: "RMW", logo: rmwlogo },
    { name: "Victoria", logo: victoria }
  ];

  return (
    <section className="bg-pp-bg-warm py-20 md:py-24 border-y border-slate-200 scroll-mt-24" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Trusted by Rwanda's Leading Brands
          </h2>
          <p className="text-slate-650 font-sans text-base md:text-lg">
            From logistics leaders to luxury hospitality hubs, Mocard powers connections that drive business forward.
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl h-30 border border-slate-200/80 shadow-sm  hover:border-slate-350 hover:scale-[1.03] transform transition-all duration-300 flex items-center justify-center p-0 group cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                title={partner.name}
                className="max-w-full max-h-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Quick highlight banner */}
        <div className="mt-16 bg-white/70 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-pp-black text-[15px] font-outfit">SLA &amp; Reliability Guaranteed</h4>
              <p className="text-slate-550 text-xs mt-1">Our platform processes thousands of integrations daily under strict compliance frameworks.</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 shrink-0 font-outfit text-xs font-semibold text-slate-600">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>PCI Compliant Flow</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Restful API Specs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
