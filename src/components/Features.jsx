import React from 'react';

export default function Features() {
  const items = [
    {
      title: "Seamless API Integration",
      description: "Our software connects your business with third-party services through robust API integrations. Built with enterprise-grade reliability to ensure every connection works flawlessly.",
      badge: "Fast Setup"
    },
    {
      title: "Business Dashboard",
      description: "Access real-time data and analytics through our intuitive dashboard. Monitor activity, track performance, and generate reports to make informed business decisions.",
      badge: "Real-time"
    }
  ];

  const steps = [
    { num: "01", name: "Connect API", desc: "Link your backend application using our structured developer documentations and tools." },
    { num: "02", name: "Route Requests", desc: "Data and service requests are routed securely and instantly via Mocard core." },
    { num: "03", name: "Scale Instantly", desc: "Monitor traffic, track metrics, and scale your business without worrying about infrastructure." }
  ];

  return (
    <section className="bg-white py-14 md:py-18 scroll-mt-24" id="feat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2 group/head cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover/head:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Why Use Mocard?
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Integrated Solutions Built <br className="hidden sm:inline" />
            for Enterprise Growth
          </h2>
          <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed font-light text-justify">
            We simplify complex tech pipelines so your teams can focus on customer retention, product features, and business expansion.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {items.map((feat, idx) => (
            <div 
              key={idx} 
              className="group bg-white hover:bg-slate-50/50 rounded-2xl p-6 border border-slate-200 hover:border-slate-350 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Header info / Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold bg-slate-100 group-hover:bg-white text-slate-600 px-2.5 py-1 rounded-lg uppercase tracking-wider font-outfit border border-transparent group-hover:border-slate-150">
                    {feat.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans font-light text-justify">
                    {feat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram Banner */}
        <div className="bg-pp-black rounded-2xl p-6 md:p-10 text-white relative overflow-hidden group/banner cursor-pointer">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pp-blue/0 group-hover/banner:bg-pp-blue/10 blur-3xl pointer-events-none transition-all duration-700" />
          
          <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left promo */}
            <div className="lg:col-span-5 space-y-3 text-center lg:text-left">
              <span className="text-[10px] font-bold text-slate-400 group-hover/banner:text-pp-blue tracking-widest uppercase font-outfit transition-colors duration-300">
                Simple Workflow
              </span>
              <h3 className="text-2xl font-black font-outfit leading-tight">
                Integrate in Three <br className="hidden sm:inline" />
                Easy Steps
              </h3>
              <p className="text-slate-400 text-xs font-sans font-light leading-relaxed text-justify">
                Connect your business with major third-party services in under an hour. No complex config matrices or long onboarding pipelines.
              </p>
            </div>

            {/* Right steps list */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4.5 space-y-3 group cursor-pointer hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-slate-400 group-hover:text-pp-blue font-outfit leading-none transition-colors duration-300">
                      {step.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-pp-blue transition-colors duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-100 text-xs font-outfit">{step.name}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-sans font-light text-justify">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
