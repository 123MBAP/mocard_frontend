import React, { useState } from 'react';

export default function ActionBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white py-12 md:py-14" id="newsletter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-pp-blue/10 border border-pp-blue/20 rounded-2xl shadow-lg p-6 md:p-10 text-pp-black text-center md:text-left">
          
          {/* Subtle background glow */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.08),transparent_40%)]" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-6 space-y-3 group/left cursor-pointer">
              <span className="text-xs md:text-sm font-bold tracking-widest text-pp-blue uppercase font-outfit block transition-colors duration-300">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-outfit leading-none tracking-tight text-pp-black">
                Ready to Integrate <br />
                Your Business?
              </h2>
              <p className="text-slate-700 text-xs md:text-sm font-sans font-light leading-relaxed text-justify">
                Connect your business with third-party software APIs seamlessly. Enter your business email below to schedule a custom integration blueprint session with our core tech team.
              </p>
            </div>

            {/* Right Action Block (Email Form or Success state) */}
            <div className="md:col-span-6 flex flex-col items-center md:items-end justify-center">
              {!submitted ? (
                <form 
                  onSubmit={handleSubmit}
                  className="w-full max-w-md bg-white p-2 rounded-full flex flex-col sm:flex-row items-center gap-2 shadow-md"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-2.5 bg-transparent border-0 outline-none text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-sans rounded-full"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 px-5 py-2.5 rounded-full bg-pp-blue hover:bg-pp-blue/90 text-white font-outfit font-bold text-xs flex items-center justify-center space-x-1.5 transition duration-200 cursor-pointer"
                  >
                    <span>Contact Sales</span>
                    <span>→</span>
                  </button>
                </form>
              ) : (
                <div className="w-full max-w-md bg-white/5 border border-emerald-500/25 p-5 rounded-2xl backdrop-blur-md text-center md:text-left space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="flex items-center text-emerald-400 font-outfit font-bold justify-center md:justify-start text-xs sm:text-sm">
                    <span>Request Submitted!</span>
                  </div>
                  <p className="text-slate-350 text-[11px] leading-relaxed font-sans font-light">
                    Thank you. We have received your inquiry for <strong className="text-slate-200 font-medium font-mono">{email}</strong>. Our engineering and sales team will reach out within 2 hours.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
