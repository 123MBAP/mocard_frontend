import React from 'react';
import { Mail, Globe, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Block */}
        <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="MoCard" className="h-6 md:h-7 object-contain group-hover:scale-[1.01] transition-transform duration-200" />
              <span className="text-lg font-bold font-outfit text-pp-black group-hover:text-pp-brand transition-colors duration-300 ml-1">
                MoCard
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
              Mocard is an API integrator providing software solutions that help businesses connect international credit networks with local mobile wallets and banks. Settle instantly, scale globally.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-slate-650 font-mono text-sm group/mail">
                <Mail className="w-4 h-4 text-slate-400 group-hover/mail:text-pp-brand transition-colors duration-300" />
                <a href="mailto:business@mocard.rw" className="hover:text-pp-brand transition duration-200">
                  business@mocard.rw
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-650 font-mono text-sm group/phone">
                <Phone className="w-4 h-4 text-slate-400 group-hover/phone:text-pp-brand transition-colors duration-300" />
                <a href="tel:+250788307684" className="hover:text-pp-brand transition duration-200">
                  +250 788 307 684
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 font-sans text-left">
            
            {/* Column 1: Individual */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Individual Solutions
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/individual/shop-pay" className="hover:text-pp-brand transition-colors font-medium">Shop &amp; Pay Online</Link></li>
                <li><Link to="/individual/holidays-flights" className="hover:text-pp-brand transition-colors font-medium">Holidays &amp; Flights</Link></li>
                <li><Link to="/contact" className="hover:text-pp-brand transition-colors font-medium">Contact Support</Link></li>
              </ul>
            </div>

            {/* Column 2: Business */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Business Solutions
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/business/payment-links" className="hover:text-pp-brand transition-colors font-medium">Payment Links</Link></li>
                <li><Link to="/business/hosted-checkouts" className="hover:text-pp-brand transition-colors font-medium">Hosted Checkouts</Link></li>
                <li><Link to="/business/donations" className="hover:text-pp-brand transition-colors font-medium">Donations &amp; Payments</Link></li>
                <li><Link to="/dashboard" className="hover:text-pp-brand transition-colors font-medium">Integration Dashboard</Link></li>
              </ul>
            </div>

            {/* Column 3: Platform Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pp-black font-outfit">
                Developers &amp; Tools
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/developers" className="hover:text-pp-brand transition-colors font-medium">Developer Documentation</Link></li>
                <li><Link to="/reporting-tools" className="hover:text-pp-brand transition-colors font-medium">Reporting &amp; Ledger Tools</Link></li>
                <li><Link to="/contact" className="hover:text-pp-brand transition-colors font-medium">Request API Access</Link></li>
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
            <span className="flex items-center space-x-1.5 bg-white border border-slate-200 px-3 py-1 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>HQ: Kigali Heights, Rwanda</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-white border border-slate-200 px-3 py-1 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Footprint: Global Rails</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
