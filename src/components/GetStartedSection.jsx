import React, { useState } from 'react';

export default function GetStartedSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('business@mocard.rw');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const requirements = [
    {
      title: "Business Registration Certificate",
      desc: "Official incorporation or registration document from the government registrar."
    },
    {
      title: "TIN Certificate",
      desc: "Tax Identification Number statement indicating tax registration details."
    },
    {
      title: "National ID or Passport",
      desc: "Valid identification copies for all key business owners and directors."
    },
    {
      title: "Business Description Document",
      desc: "A brief summary detailing your business services, operations, and target model."
    }
  ];

  const steps = [
    {
      num: "1",
      title: "Collect Required Documents",
      desc: "Ensure you gather clear copies of all four verification files detailed in the checklist."
    },
    {
      num: "2",
      title: "Email Files to Support",
      desc: "Send the documents directly to our onboarding team at business@mocard.rw."
    },
    {
      num: "3",
      title: "Verification & Setup",
      desc: "Our team reviews the files. Once approved, we will email your console credentials."
    }
  ];

  return (
    <section className="bg-slate-50 py-14 md:py-18 border-t border-slate-200 scroll-mt-24" id="get-started">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Account Opening Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            How to Get Started with MoCard
          </h2>
          <p className="text-slate-650 font-sans text-xs md:text-sm leading-relaxed font-light">
            Create your merchant account by completing our simple three-step document verification process. No complex onboarding matrices.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT PANEL: REQUIREMENTS CHECKLIST */}
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold font-outfit text-pp-black">Onboarding Requirements</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Please prepare clear copies of the following documents:</p>
              </div>

              <div className="space-y-3.5 pt-2">
                <ul className="space-y-3.5 text-slate-700 font-sans text-xs sm:text-sm pl-1">
                  {requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 group/item cursor-pointer">
                      <div>
                        <strong className="text-slate-950 font-bold block font-outfit text-xs md:text-sm">{item.title}</strong>
                        <span className="text-[11px] text-slate-500 block leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center text-slate-700 font-outfit font-semibold text-[11px] bg-slate-50 border border-slate-200 p-3 rounded-xl mt-4">
              <span>Verification approval requires typically up to 24 hours.</span>
            </div>
          </div>

          {/* RIGHT PANEL: STEP BY STEP FLOW */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold font-outfit text-pp-black">Process Overview</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">A direct path to activation:</p>
              </div>

              <div className="space-y-5 relative pl-4 border-l border-slate-200 ml-3">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative space-y-0.5">
                    {/* Index dot indicator */}
                    <span className="absolute -left-[27px] top-0.5 w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center font-outfit">
                      {step.num}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold text-slate-905 font-outfit pl-2">{step.title}</h4>
                    <p className="text-[11px] text-slate-500 pl-2 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-100 pt-5 mt-6 space-y-3">
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Ready to submit? Copy our onboarding email address below, draft your request, and attach the required documents:
              </p>
              
              {/* Onboarding email Copy button */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center">
                  <span className="text-xs md:text-sm font-bold text-pp-black font-mono select-all">business@mocard.rw</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-4.5 py-2 bg-pp-black hover:bg-neutral-850 text-white rounded-full text-xs font-bold font-outfit transition duration-200 shadow-sm shrink-0 cursor-pointer flex items-center justify-center"
                >
                  {copied ? <span>Copied!</span> : <span>Copy Email</span>}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
