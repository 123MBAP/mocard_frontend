import React from 'react';
import { Mail, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pp-bg-warm text-slate-600 py-16 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Block */}
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <img src={logo} alt="MoCard" className="h-6 md:h-7 object-contain group-hover:scale-[1.01] transition-transform duration-200" />
              <span className="text-lg font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300 ml-1">
                MoCard
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              Mocard is an API integrator providing software solutions that help businesses connect with third-party services seamlessly. We build the technology, you focus on your customers.
            </p>
            <div className="flex items-center space-x-3 text-slate-650 font-mono text-sm group/mail cursor-pointer">
              <Mail className="w-4 h-4 text-slate-400 group-hover/mail:text-pp-blue transition-colors duration-300" />
              <a href="mailto:business@mocard.rw" className="hover:text-pp-black transition duration-200">
                business@mocard.rw
              </a>
            </div>
          </div>

          {/* Business Info blocks (Replacing navigation links) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            
            {/* Column 1: Office & Support info */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Office & Contact
              </h4>
              <div className="space-y-3 text-sm text-slate-500 font-light leading-relaxed">
                <p>
                  Kigali Heights, Block B, 3rd Floor<br />
                  Kigali, Rwanda
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-700">Tel:</span>
                  <span>+250 788 123 456</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-semibold text-slate-700">Support:</span>
                  <a href="mailto:business@mocard.rw" className="text-pp-blue hover:underline">business@mocard.rw</a>
                </p>
              </div>
            </div>

            {/* Column 2: Service Level & Regulatory */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Operations & Trust
              </h4>
              <div className="space-y-3 text-sm text-slate-500 font-light leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-700 block font-outfit">Gateway Availability</span>
                  Monitored real-time connections with 99.9% guaranteed uptime SLA.
                </p>
                <p>
                  <span className="font-semibold text-slate-700 block font-outfit">KYC Compliance</span>
                  Onboarding requires Business Registration, TIN certificate, and owner identification verification.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright, Country Selector */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 font-light text-center md:text-left">
            &copy; {currentYear} Mocard. All rights reserved. Business Integration Software, Rwanda.
          </div>
          
          {/* Flag/Region Selector */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-xs font-semibold text-slate-600 hover:text-pp-black transition duration-200 font-outfit">
              <span>🇷🇼</span>
              <span>Rwanda (English)</span>
            </button>
            <button className="flex items-center space-x-1.5 text-slate-500 hover:text-slate-600 hover:text-slate-800 text-xs">
              <Globe2 className="w-3.5 h-3.5" />
              <span>Change Region</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
