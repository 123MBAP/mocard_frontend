import React, { useState } from 'react';
import { Landmark, FileText, User, Clock, ArrowRight, Mail } from 'lucide-react';

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
      desc: "Official incorporation or registration document from the government registrar.",
      icon: Landmark
    },
    {
      title: "TIN Certificate",
      desc: "Tax Identification Number statement indicating tax registration details.",
      icon: FileText
    },
    {
      title: "National ID or Passport",
      desc: "Valid identification copies for all key business owners and directors.",
      icon: User
    },
    {
      title: "Business Description Document",
      desc: "A brief summary detailing your business services, operations, and target model.",
      icon: FileText
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

  const mailSubject = "MoCard Onboarding Request";
  const mailBody = `Dear MoCard Onboarding Team,\n\nWe would like to request a MoCard Merchant Account.\n\nAttached to this email are our required documents:\n1. Business Registration Certificate\n2. TIN Certificate\n3. National ID or Passport of owners\n4. Business Description Document\n\nPlease review and approve our application.\n\nBest regards,\n[Your Name]\n[Your Business Name]`;
  const mailtoLink = `mailto:business@mocard.rw?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section className="bg-slate-50 py-20 md:py-24 border-t border-slate-200 scroll-mt-24" id="get-started">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Account Opening Guide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            How to Get Started with MoCard
          </h2>
          <p className="text-slate-650 font-sans text-base md:text-lg">
            Create your merchant account by completing our simple three-step document verification process. No complex onboarding matrices.
          </p>
        </div>

        {/* Info Grid Split */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT PANEL: REQUIREMENTS CHECKLIST */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-outfit text-pp-black">Onboarding Requirements</h3>
                <p className="text-xs text-slate-400 mt-1">Please prepare clear copies of the following documents:</p>
              </div>

              <div className="space-y-4 pt-4">
                <ul className="space-y-4 text-slate-700 font-sans text-sm pl-1">
                  {requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 group/item cursor-pointer">
                      <div className="p-1 rounded-full bg-slate-100 group-hover/item:bg-pp-blue/10 group-hover/item:text-pp-blue text-slate-500 shrink-0 mt-0.5 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <strong className="text-slate-900 font-bold block font-outfit">{item.title}</strong>
                        <span className="text-xs text-slate-500 block leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-slate-700 font-outfit font-semibold text-xs bg-slate-50 border border-slate-205 p-3.5 rounded-xl mt-6">
              <Clock className="w-4.5 h-4.5 shrink-0 text-slate-500 animate-pulse" />
              <span>Verification approval requires typically up to 24 hours.</span>
            </div>
          </div>

          {/* RIGHT PANEL: STEP BY STEP FLOW */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-outfit text-pp-black">Process Overview</h3>
                <p className="text-xs text-slate-400 mt-1">A direct path to activation:</p>
              </div>

              <div className="space-y-6 relative pl-4 border-l border-slate-200 ml-3">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative space-y-1">
                    {/* Index dot indicator */}
                    <span className="absolute -left-[29px] top-1 w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center font-outfit">
                      {step.num}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 font-outfit pl-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 pl-2 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-100 pt-6 mt-8 space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-sans">
                Ready to submit? Copy our onboarding email address below, draft your request, and attach the required documents:
              </p>
              
              {/* Eye-catching email pill with Copy button */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-pp-blue/10 flex items-center justify-center text-pp-blue">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-sm font-bold text-pp-black font-mono select-all">business@mocard.rw</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-5 py-2 bg-pp-black hover:bg-neutral-850 text-white rounded-full text-xs font-bold font-outfit transition duration-200 shadow-sm shrink-0 cursor-pointer flex items-center justify-center space-x-1"
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
