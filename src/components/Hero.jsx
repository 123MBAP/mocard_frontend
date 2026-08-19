import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-pp-black pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36 min-h-[80vh] flex items-center">
      
      {/* Premium Full-Width Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src={heroBg} 
          alt="Payment Connectivity Infrastructure Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Restrained radial and linear overlay for high-contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center space-y-8 flex flex-col items-center">
       
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black font-outfit leading-[1.1] tracking-tight text-pp-black">
            Connect Your Business <span className="text-pp-blue">with Mocard</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-sm md:text-base text-slate-550 leading-relaxed font-sans font-light max-w-xl mx-auto">
            We are an API integrator helping businesses connect with third-party services seamlessly. We build the technology, you focus on your customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto font-outfit font-bold pt-2">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white text-xs hover:bg-pp-blue transition duration-250 text-center shadow-xs cursor-pointer border border-slate-900"
            >
              Request API Access
            </Link>
            <Link 
              to="/developers" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 text-xs hover:bg-slate-50 transition duration-200 flex items-center justify-center space-x-1.5 cursor-pointer bg-white"
            >
              <span>Read Developer Docs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Trust & Credibility Row */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-center space-x-2.5 text-xs font-medium text-slate-450 font-outfit w-full">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
            <span>Active globally • Supporting HubSpot, Salesforce, Stripe, Slack, and major cloud providers</span>
          </div>
          
        </div>
      </div>
    </section>
  );
}
