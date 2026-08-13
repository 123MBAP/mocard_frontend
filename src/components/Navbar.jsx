import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside the nav container
      if (activeDropdown !== null && !event.target.closest('nav')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleMobileSection = (section) => {
    if (mobileSection === section) {
      setMobileSection(null);
    } else {
      setMobileSection(section);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileSection(null);
  };

  // Helper to determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={closeMenu} 
              onMouseEnter={() => setActiveDropdown(null)}
              className="flex items-center space-x-2 group"
            >
              <img src={logo} alt="MoCard" className="h-8 md:h-9 object-contain group-hover:scale-[1.02] transition-transform duration-200" />
              <span className="text-xl md:text-2xl font-black font-outfit text-pp-black tracking-tight group-hover:text-pp-blue transition-colors duration-300 ml-1">
                MoCard
              </span>
            </Link>

            {/* Desktop Navigation Links (Personal & Business) */}
            <div className="hidden lg:flex items-center space-x-2 font-outfit text-[15px] font-semibold text-slate-800">
              
              {/* Personal Dropdown Trigger */}
              <button 
                onClick={() => toggleDropdown(0)}
                onMouseEnter={() => setActiveDropdown(0)}
                className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full transition-all duration-200 ${
                  activeDropdown === 0 
                    ? 'bg-[#e8f0fe] text-pp-blue font-bold shadow-xs' 
                    : 'hover:bg-slate-50 text-slate-700 hover:text-pp-black'
                }`}
              >
                <span>Personal</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 0 ? 'rotate-180 text-pp-blue' : 'text-slate-400'}`} />
              </button>

              {/* Business Dropdown Trigger */}
              <button 
                onClick={() => toggleDropdown(1)}
                onMouseEnter={() => setActiveDropdown(1)}
                className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full transition-all duration-200 ${
                  activeDropdown === 1 
                    ? 'bg-[#e8f0fe] text-pp-blue font-bold shadow-xs' 
                    : 'hover:bg-slate-50 text-slate-700 hover:text-pp-black'
                }`}
              >
                <span>Business</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 1 ? 'rotate-180 text-pp-blue' : 'text-slate-400'}`} />
              </button>

            </div>
          </div>

          {/* Desktop Right Buttons (Developers + Auth) */}
          <div className="hidden lg:flex items-center space-x-5 font-outfit">
            <Link 
              to="/developers" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="text-[15px] font-bold text-slate-700 hover:text-pp-blue transition duration-200 px-3 py-2 rounded-full hover:bg-slate-50"
            >
              Developers
            </Link>
            <Link 
              to="/login" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-6 py-2.5 rounded-full border border-pp-black text-[15px] font-bold text-pp-black hover:bg-slate-50 transition duration-200 hover:border-pp-blue hover:text-pp-blue"
            >
              Log In
            </Link>
            <Link 
              to="/contact" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-6 py-2.5 rounded-full bg-pp-black text-[15px] font-bold text-white hover:bg-pp-blue transition duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-pp-black hover:bg-slate-100 focus:outline-none transition duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Dropdowns */}
      {activeDropdown !== null && (
        <div className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-slate-200 shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200 mega-dropdown-panel">
          <div className="max-w-7xl mx-auto px-8 py-10">
            {activeDropdown === 0 ? (
              /* Personal Dropdown Content */
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Left Side Header Block */}
                <div className="col-span-3 space-y-2.5">
                  <Link 
                    to="/personal" 
                    onClick={closeMenu} 
                    className="group inline-flex items-center space-x-2 text-xl font-black font-outfit text-pp-black hover:text-pp-blue transition-colors duration-200"
                  >
                    <span>MoCard Personal</span>
                    <ArrowRight className="w-5 h-5 text-pp-blue group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                  <p className="text-sm font-light text-slate-500 leading-relaxed font-sans">
                    Simple, fast, and secure payments for individuals. Settle globally, connect instantly.
                  </p>
                </div>

                {/* Column 1: Send & Receive */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Send & Receive
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/personal?tab=card-to-momo" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Card to Mobile Money
                    </Link>
                    <Link to="/personal?tab=send-abroad" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Send Money Abroad
                    </Link>
                    <Link to="/personal?tab=request-payments" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Request Payments
                    </Link>
                    <Link to="/personal?tab=mocard-app" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Mocard App & Links
                    </Link>
                  </div>
                </div>

                {/* Column 2: Security & Support */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Security & Company
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/features" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      PCI-DSS Compliance
                    </Link>
                    <Link to="/company" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      About Us & Careers
                    </Link>
                    <Link to="/contact" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Contact Support
                    </Link>
                  </div>
                </div>

                {/* Right Card / Sidebar */}
                <div className="col-span-3 bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-3.5 shadow-xs">
                  <Link 
                    to="/contact" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200 group w-full"
                  >
                    <span>Sign Up Now</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200 group w-full"
                  >
                    <span>Personal Fees</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
              
                </div>
              </div>
            ) : (
              /* Business Dropdown Content (Matches image layout closely) */
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Left Side Header Block */}
                <div className="col-span-3 space-y-2.5">
                  <Link 
                    to="/solutions" 
                    onClick={closeMenu} 
                    className="group inline-flex items-center space-x-2 text-xl font-black font-outfit text-pp-black hover:text-pp-blue transition-colors duration-200"
                  >
                    <span>MoCard Open</span>
                    <ArrowRight className="w-5 h-5 text-pp-blue group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                  <p className="text-sm font-light text-slate-500 leading-relaxed font-sans">
                    The platform for all business. Accelerate your enterprise with next-generation billing rails.
                  </p>
                </div>

                {/* Column 1: Merchant Suite */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Merchant Suite
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/dashboard?tab=checkout" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Online Checkout
                    </Link>
                    <Link to="/payment-links" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Shareable Payment Links
                    </Link>
                    <Link to="/dashboard?tab=payouts" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Bulk Payouts & Transfers
                    </Link>
                  </div>
                </div>

                {/* Column 2: Platform Infrastructure */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Platform Infrastructure
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/dashboard" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Merchant Dashboard
                    </Link>
                    <Link to="/dashboard?tab=api" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      API & SDK Integrations
                    </Link>
                    <Link to="/dashboard?tab=reporting" onClick={closeMenu} className="text-slate-700 hover:text-pp-blue transition-colors font-medium">
                      Reporting Tools & Logs
                    </Link>
                  </div>
                </div>

                {/* Right Card / Sidebar */}
                <div className="col-span-3 bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-3.5 shadow-xs">
                  <Link 
                    to="/contact" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200 group w-full"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200 group w-full"
                  >
                    <span>Fees</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/solutions" 
                    onClick={closeMenu}
                    className="block text-center text-xs font-bold text-slate-800 hover:text-pp-blue transition duration-200 mt-2 font-outfit uppercase tracking-wider"
                  >
                    Payment Methods
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md py-4 px-6 space-y-4 shadow-inner max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 font-outfit text-base">
            
            {/* Personal Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSection('personal')}
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
              >
                <span>Personal</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'personal' ? 'rotate-180 text-pp-blue' : 'text-slate-400'}`} />
              </button>
              {mobileSection === 'personal' && (
                <div className="pl-6 pr-4 py-2 space-y-3 bg-slate-50/50 rounded-xl mt-1">
                  <Link to="/personal?tab=card-to-momo" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Card to Mobile Money</Link>
                  <Link to="/personal?tab=send-abroad" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Send Money Abroad</Link>
                  <Link to="/personal?tab=request-payments" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Request Payments</Link>
                  <Link to="/personal?tab=mocard-app" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">
                    Mocard App & Links
                  </Link>
                  <Link to="/company" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Help & Careers</Link>
                </div>
              )}
            </div>

            {/* Business Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSection('business')}
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
              >
                <span>Business</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'business' ? 'rotate-180 text-pp-blue' : 'text-slate-400'}`} />
              </button>
              {mobileSection === 'business' && (
                <div className="pl-6 pr-4 py-2 space-y-3 bg-slate-50/50 rounded-xl mt-1">
                  <Link to="/dashboard?tab=checkout" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Online Checkout</Link>
                  <Link to="/payment-links" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Shareable Payment Links</Link>
                  <Link to="/dashboard?tab=payouts" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Bulk Payouts & Transfers</Link>
                  <Link to="/dashboard" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Merchant Dashboard</Link>
                  <Link to="/dashboard?tab=api" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">API & SDK Integrations</Link>
                  <Link to="/dashboard?tab=reporting" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-blue font-medium py-1">Reporting Tools & Logs</Link>
                </div>
              )}
            </div>

            <Link 
              to="/developers" 
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
            >
              Developers
            </Link>
            
            <Link 
              to="/pricing" 
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
            >
              Contact
            </Link>
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 font-outfit">
            <Link 
              to="/login" 
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-full border border-pp-black text-sm font-bold text-pp-black hover:bg-slate-50 transition duration-200"
            >
              Log In
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
