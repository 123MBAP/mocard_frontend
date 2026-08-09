import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';
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
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="MoCard" className="h-6 md:h-7 object-contain group-hover:scale-[1.01] transition-transform duration-200" />
              <span className="text-lg font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300 ml-1">
                MoCard
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              Mocard is an API integrator providing software solutions that help businesses connect international credit networks with local mobile wallets and banks. Settle instantly, scale globally.
            </p>
            <div className="flex items-center space-x-3 text-slate-650 font-mono text-sm group/mail">
              <Mail className="w-4 h-4 text-slate-400 group-hover/mail:text-pp-blue transition-colors duration-300" />
              <a href="mailto:business@mocard.rw" className="hover:text-pp-black transition duration-200">
                business@mocard.rw
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 font-sans">
            
            {/* Column 1: Products */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Technology
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/features" className="hover:text-pp-blue transition-colors">API Engine</Link></li>
                <li><Link to="/features" className="hover:text-pp-blue transition-colors">Webhooks</Link></li>
                <li><Link to="/solutions" className="hover:text-pp-blue transition-colors">Corridors</Link></li>
                <li><Link to="/developers" className="hover:text-pp-blue transition-colors">Developer Portal</Link></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/company" className="hover:text-pp-blue transition-colors">About Us</Link></li>
                <li><Link to="/company" className="hover:text-pp-blue transition-colors">Offices</Link></li>
                <li><Link to="/company" className="hover:text-pp-blue transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-pp-blue transition-colors">Contact Sales</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/pricing" className="hover:text-pp-blue transition-colors">Pricing Calculator</Link></li>
                <li><Link to="/developers" className="hover:text-pp-blue transition-colors">Staging Sandbox</Link></li>
                <li><Link to="/contact" className="hover:text-pp-blue transition-colors">Support center</Link></li>
                <li><a href="/login" className="hover:text-pp-blue transition-colors">Merchant Console</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright, Country Selector */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 font-light text-center md:text-left">
            &copy; {currentYear} Mocard. All rights reserved. Registered Business Integration Software.
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center space-x-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>HQ: Kigali Heights, Rwanda</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Footprint: Global Rails</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
