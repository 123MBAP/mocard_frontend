import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroDevicesMockup from '../assets/hero_devices_only.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-pp-black pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36">
      {/* Decorative background grid & soft radial highlights */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,112,224,0.02),transparent_50%)] hover:bg-[radial-gradient(ellipse_at_top_right,rgba(0,112,224,0.05),transparent_50%)] transition-all duration-700 pointer-events-none" />
      
      {/* Left-side subtle overlapping decorative background circles (matching reference image) */}
      <div className="absolute left-[-10%] top-[10%] w-[350px] h-[350px] rounded-full bg-slate-50 opacity-60 mix-blend-multiply filter blur-2xl pointer-events-none z-0" />
      <div className="absolute left-[-20%] top-[20%] w-[500px] h-[500px] rounded-full border border-slate-100/70 pointer-events-none z-0" />
      <div className="absolute left-[-15%] top-[15%] w-[400px] h-[400px] rounded-full border border-pp-blue/5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtext, CTAs */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left z-10">
            
            {/* Promo Pill */}
            <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200/80 rounded-full px-4 py-1 text-xs md:text-sm font-semibold tracking-wide text-slate-700 font-outfit hover:border-slate-350 hover:bg-slate-200 transition-all duration-300 cursor-pointer group w-fit">
              <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-pp-blue animate-pulse transition-colors" />
              <span>Payment &amp; Business Integration</span>
            </div>

            {/* Title (Bold, left-aligned, using project's Outfit font) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-outfit leading-[1.08] tracking-tight text-pp-black">
              Connecting Web <br className="hidden sm:inline" />
              and Mobile Payments <br />
              for <span className="text-pp-blue">African Businesses</span>
            </h1>

            {/* Subtext (using project's font-sans) */}
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-sans font-light max-w-xl">
              Mocard is an API integrator helping companies connect with payments, banking, and third-party services — from startup ideas to enterprise systems. We build the technology, you focus on your customers.
            </p>

            {/* Key benefits checklist */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-slate-500 font-outfit text-sm">
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
                <span className="group-hover/item:text-pp-black transition-colors duration-300">Business Dashboard</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 font-outfit font-bold">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-pp-black text-white text-base hover:bg-pp-blue transition duration-250 text-center shadow-sm"
              >
                Sign Up
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-pp-black text-pp-black text-base hover:bg-slate-50 transition duration-200 flex items-center justify-center space-x-2"
              >
                <span>Contact Sales</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
          </div>

          {/* Right Column: Devices Mockup (with background removed) */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 z-10">
            
            {/* Overlapping Laptop and Phone Mockups */}
            <div className="relative z-10 w-full max-w-[500px] lg:max-w-none transform hover:scale-[1.01] hover:-rotate-1 transition-all duration-500 ease-out">
              <img 
                src={heroDevicesMockup} 
                alt="Mocard Web and Mobile Apps Integration Mockup" 
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
