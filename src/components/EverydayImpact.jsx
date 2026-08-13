import React from 'react';

export default function EverydayImpact() {
  const useCases = [
    {
      title: "School Fees & Education",
      tag: "For Families & Students",
      desc: "Empower parents to settle primary, secondary, and university tuition fees directly from mobile wallets or credit cards. Avoid long bank queues and ensure children's enrollment is kept up-to-date instantly.",
      badge: "Education"
    },
    {
      title: "Utility & Bill Payments",
      tag: "For Smart Homes",
      desc: "Instantly pay water, electricity, trash collection, cable TV, and internet service bills. Set up automated monthly payments through integrated service provider systems to avoid service disruptions.",
      badge: "Utilities"
    },
    {
      title: "Airtime & Data Top-ups",
      tag: "For Constant Connectivity",
      desc: "Purchase calling credit and data bundles directly from any bank card or mobile money account. Send airtime to family members across international borders in less than 5 seconds.",
      badge: "Telecom"
    },
    {
      title: "Government Fees & Taxes",
      tag: "For Civic Convenience",
      desc: "Pay municipal taxes, land levies, drivers license renewals, and other government agency service fees securely via Mocard's direct integration to national administrative portals.",
      badge: "Public Services"
    },
    {
      title: "Healthcare & Insurance",
      tag: "For Vital Protection",
      desc: "Settle hospital invoices, purchase prescription medication online, or pay health insurance premiums instantly, ensuring your family stays fully protected during emergencies.",
      badge: "Healthcare"
    }
  ];

  return (
    <section className="bg-slate-50 py-14 md:py-18 border-t border-slate-200/80 relative overflow-hidden scroll-mt-24" id="everyday-impact">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.015),transparent_45%)] pointer-events-none" />
      <div className="absolute left-[-10%] top-[20%] w-[400px] h-[400px] rounded-full bg-pp-blue/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-2 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Everyday Utilities
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Helping People Connect <br className="hidden sm:inline" />
            with Life's Daily Needs
          </h2>
          <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed font-light">
            Mocard goes beyond business-to-business APIs — we build payment systems that solve real everyday problems for families, students, and citizens across Africa.
          </p>
        </div>

        {/* Dynamic Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-350 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* Icon and Tag Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg uppercase tracking-wider font-outfit">
                    {useCase.badge}
                  </span>
                </div>

                {/* Typography info */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-450 font-outfit block uppercase tracking-wider">
                    {useCase.tag}
                  </span>
                  <h3 className="text-base font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-light">
                    {useCase.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
          
          {/* Quick Sandbox Showcase Card */}
          <div className="group bg-pp-black text-white border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer">
            {/* Subtle light glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-pp-blue/10 blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-[9px] font-bold bg-slate-900 border border-slate-800 text-pp-blue px-2.5 py-1 rounded-lg uppercase tracking-wider font-outfit w-fit block">
                Developer Sandbox
              </span>
              
              <div className="space-y-1 pt-2">
                <h3 className="text-xl font-bold font-outfit leading-tight">Need a custom payment utility?</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light">
                  Our unified API sandbox lets you prototype, test, and launch bill-payment apps, airtime reload tools, and tuition settlement flows in minutes.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
