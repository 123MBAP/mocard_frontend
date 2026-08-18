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

            {/* Desktop Navigation Links (Individual   & Business) */}
            <div className="hidden lg:flex items-center space-x-2 font-outfit text-[15px] font-semibold text-slate-800">
              
              {/* Individual   Dropdown Trigger */}
              <button 
                onClick={() => toggleDropdown(0)}
                onMouseEnter={() => setActiveDropdown(0)}
                className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full transition-all duration-200 ${
                  activeDropdown === 0 
                    ? 'bg-pp-brand/10 text-pp-brand font-bold shadow-sm ring-1 ring-pp-brand/10' 
                    : 'hover:bg-slate-50 text-slate-700 hover:text-pp-brand'
                }`}
              >
                <span>Individual  </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 0 ? 'rotate-180 text-pp-brand' : 'text-slate-400'}`} />
              </button>

              {/* Business Dropdown Trigger */}
              <button 
                onClick={() => toggleDropdown(1)}
                onMouseEnter={() => setActiveDropdown(1)}
                className={`flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full transition-all duration-200 ${
                  activeDropdown === 1 
                    ? 'bg-pp-brand/10 text-pp-brand font-bold shadow-sm ring-1 ring-pp-brand/10' 
                    : 'hover:bg-slate-50 text-slate-700 hover:text-pp-brand'
                }`}
              >
                <span>Business</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 1 ? 'rotate-180 text-pp-brand' : 'text-slate-400'}`} />
              </button>

            </div>
          </div>

          {/* Desktop Right Buttons (Developers + Auth) */}
          <div className="hidden lg:flex items-center space-x-5 font-outfit">
            <Link 
              to="/developers" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="text-[15px] font-bold text-slate-700 hover:text-pp-brand transition duration-200 px-3 py-2 rounded-full hover:bg-slate-50"
            >
              Developers
            </Link>
            <Link 
              to="/dashboard" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-6 py-2.5 rounded-full border border-pp-brand text-[15px] font-bold text-pp-brand hover:bg-pp-brand/5 transition duration-200 shadow-sm shadow-pp-brand/5"
            >
              Log In
            </Link>
            <Link 
              to="/contact" 
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-6 py-2.5 rounded-full bg-pp-brand text-[15px] font-bold text-white hover:brightness-110 transition duration-200 shadow-md shadow-pp-brand/20"
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
              /* Individual  Dropdown Content */
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Left Side Header Block */}
                <div className="col-span-4 space-y-2.5">
                  <Link 
                    to="/Individual " 
                    onClick={closeMenu} 
                    className="group inline-flex items-center space-x-2 text-xl font-black font-outfit text-pp-black hover:text-pp-brand transition-colors duration-200"
                  >
                    <span>MoCard for Individuals</span>
                    <ArrowRight className="w-5 h-5 text-pp-brand group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                  <p className="text-sm font-light text-slate-500 leading-relaxed font-sans">
                    Pay securely, link cards, transfer across regions, and manage everyday transactions in one place.
                  </p>
                </div>

                {/* Column 1: Individual   (Exactly 4 navigations) */}
                <div className="col-span-4 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Individual   Solutions
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/checkout" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      MoCard Checkout
                    </Link>
                    <Link to="/send-request" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Send & Request Money
                    </Link>
                    <Link to="/security" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Security &amp; Buyer Protection
                    </Link>
                    <Link to="/contact" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Contact Support
                    </Link>
                  </div>
                </div>

                {/* Right Card / Sidebar */}
                <div className="col-span-4 bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-3.5 shadow-xs">
                  <Link 
                    to="/contact" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-brand text-sm font-bold text-white hover:brightness-110 transition duration-200 group w-full shadow-sm shadow-pp-brand/20"
                  >
                    <span>Sign Up Now</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-brand text-sm font-bold text-white hover:brightness-110 transition duration-200 group w-full shadow-sm shadow-pp-brand/20"
                  >
                    <span>Developer Pricing</span>
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
                    className="group inline-flex items-center space-x-2 text-xl font-black font-outfit text-pp-black hover:text-pp-brand transition-colors duration-200"
                  >
                    <span>MoCard Open Connect</span>
                    <ArrowRight className="w-5 h-5 text-pp-brand group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                  <p className="text-sm font-light text-slate-500 leading-relaxed font-sans">
                    The platform for all business. Accelerate your enterprise with next-generation integration rails.
                  </p>
                </div>

                {/* Column 1: Merchant Suite */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Integration Suite
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/online-checkouts" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Online Checkouts
                    </Link>
                    <Link to="/payment-links" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Payment Links
                    </Link>
                  </div>
                </div>

                {/* Column 2: Platform Infrastructure */}
                <div className="col-span-3 space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-outfit border-b border-slate-100 pb-2">
                    Platform Infrastructure
                  </h4>
                  <div className="flex flex-col space-y-3 font-outfit text-[14.5px] pt-1">
                    <Link to="/dashboard" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Integration Dashboard
                    </Link>
                    <Link to="/reporting-tools" onClick={closeMenu} className="text-slate-700 hover:text-pp-brand transition-colors font-medium">
                      Business Reporting Tools
                    </Link>
                  </div>
                </div>

                {/* Right Card / Sidebar */}
                <div className="col-span-3 bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-3.5 shadow-xs">
                  <Link 
                    to="/sandbox" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-brand text-sm font-bold text-white hover:brightness-110 transition duration-200 group w-full shadow-sm shadow-pp-brand/20"
                  >
                    <span>Try Sandbox Demo</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={closeMenu}
                    className="flex items-center justify-between px-5 py-3 rounded-full bg-pp-brand text-sm font-bold text-white hover:brightness-110 transition duration-200 group w-full shadow-sm shadow-pp-brand/20"
                  >
                    <span>Request API Access</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/solutions" 
                    onClick={closeMenu}
                    className="block text-center text-xs font-bold text-slate-800 hover:text-pp-brand transition duration-200 mt-2 font-outfit uppercase tracking-wider"
                  >
                    Connector Directory
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
            
            {/* Individual   Accordion */}
            <div>
              <button 
                onClick={() => toggleMobileSection('Individual  ')}
                className="w-full flex justify-between items-center px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-bold transition duration-200"
              >
                <span>Individual  </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'Individual  ' ? 'rotate-180 text-pp-brand' : 'text-slate-400'}`} />
              </button>
              {mobileSection === 'Individual  ' && (
                <div className="pl-6 pr-4 py-2 space-y-3 bg-slate-50/50 rounded-xl mt-1">
                  <Link to="/checkout" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">MoCard Checkout</Link>
                  <Link to="/send-request" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Send & Request Money</Link>
                  <Link to="/security" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Security &amp; Buyer Protection</Link>
                  <Link to="/contact" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Contact Support</Link>
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
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSection === 'business' ? 'rotate-180 text-pp-brand' : 'text-slate-400'}`} />
              </button>
              {mobileSection === 'business' && (
                <div className="pl-6 pr-4 py-2 space-y-3 bg-slate-50/50 rounded-xl mt-1">
                  <Link to="/online-checkouts" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Online Checkouts</Link>
                  <Link to="/payment-links" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Payment Links</Link>
                  <Link to="/dashboard" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Integration Dashboard</Link>
                  <Link to="/reporting-tools" onClick={closeMenu} className="block text-sm text-slate-700 hover:text-pp-brand font-medium py-1">Business Reporting Tools</Link>
                  <Link to="/sandbox" onClick={closeMenu} className="block text-sm text-pp-brand hover:text-pp-brand font-bold py-1">Try Sandbox Demo</Link>
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
              to="/dashboard" 
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-full border border-pp-brand text-sm font-bold text-pp-brand hover:bg-pp-brand/5 transition duration-200"
            >
              Log In
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-full bg-pp-brand text-sm font-bold text-white hover:brightness-110 transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
