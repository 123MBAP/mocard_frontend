import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-pp-black pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      {/* Subtle decorative background grid - transitions on hover */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,112,224,0.02),transparent_50%)] hover:bg-[radial-gradient(ellipse_at_top_right,rgba(0,112,224,0.06),transparent_50%)] transition-all duration-700" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          
          {/* Promo Pill */}
          <div className="inline-flex items-center space-x-2 bg-slate-150/70 border border-slate-200 rounded-full px-4.5 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-slate-700 font-outfit hover:border-slate-350 hover:bg-slate-200 transition-all duration-350 cursor-pointer group">
            <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-pp-blue animate-pulse transition-colors" />
            <span>Payment &amp; Business Integration</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit leading-[1.08] tracking-tight text-pp-black select-none">
            Connect Your Business <br className="hidden sm:inline" />
            with <span className="text-pp-black transition-colors duration-350 cursor-pointer">Mocard</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-lg text-slate-500 leading-relaxed font-sans font-light max-w-2xl mx-auto">
            We are an API integrator helping businesses connect with third-party services seamlessly. 
            We build the technology, you focus on your customers. Re-engineered for reliability and speed.
          </p>

          {/* Key benefits checklist */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2 text-slate-500 font-outfit text-sm">
            <div className="flex items-center space-x-2 group/item cursor-pointer">
              <CheckCircle2 className="w-4.5 h-4.5 text-slate-400 group-hover/item:text-pp-blue transition-colors duration-300" />
              <span className="group-hover/item:text-pp-black transition-colors duration-300">Seamless Integrations</span>
            </div>
            <div className="flex items-center space-x-2 group/item cursor-pointer">
              <CheckCircle2 className="w-4.5 h-4.5 text-slate-400 group-hover/item:text-pp-blue transition-colors duration-300" />
              <span className="group-hover/item:text-pp-black transition-colors duration-300">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2 group/item cursor-pointer">
              <CheckCircle2 className="w-4.5 h-4.5 text-slate-400 group-hover/item:text-pp-blue transition-colors duration-300" />
              <span className="group-hover/item:text-pp-black transition-colors duration-300">Dedicated Support Team</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 font-outfit font-bold">
            <a 
              href="/#get-started" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-pp-black text-white text-base hover:bg-pp-blue transition duration-250 text-center shadow-sm"
            >
              Sign Up
            </a>
            <a 
              href="#feat" 
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-pp-black text-pp-black text-base hover:bg-slate-50 transition duration-200 flex items-center justify-center space-x-2"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
