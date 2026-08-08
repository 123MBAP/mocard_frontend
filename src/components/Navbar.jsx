import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Activity, Shield, Users, Layers, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 group">
              <img src={logo} alt="MoCard" className="h-8 md:h-9 object-contain group-hover:scale-[1.02] transition-transform duration-200" />
              <span className="text-xl md:text-2xl font-black font-outfit text-pp-black tracking-tight group-hover:text-pp-blue transition-colors duration-300 ml-1">
                MoCard
              </span>
        
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 font-outfit text-[15px] font-medium text-slate-800">
              
              {/* Features Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown(0)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-full hover:bg-slate-50 hover:text-pp-blue transition duration-200"
                >
                  <span>Features</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 0 ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 0 && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200/80 rounded-2xl shadow-lg py-2.5 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col font-outfit text-sm">
                      <a 
                        href="#feat" 
                        onClick={() => setActiveDropdown(null)} 
                        className="px-5 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-pp-blue transition-colors font-medium"
                      >
                        Seamless API Integration
                      </a>
                      <a 
                        href="#feat" 
                        onClick={() => setActiveDropdown(null)} 
                        className="px-5 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-pp-blue transition-colors font-medium"
                      >
                        Business Dashboard
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Links */}
              <a href="#feat" className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-pp-blue transition duration-200">
                Why Mocard?
              </a>
              
              <a href="#clients" className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-pp-blue transition duration-200">
                Clients
              </a>

              <a href="#faq" className="px-4 py-2 rounded-full hover:bg-slate-50 hover:text-pp-blue transition duration-200">
                FAQ
              </a>
            </div>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center space-x-4 font-outfit">
            <Link 
              to="/login" 
              className="px-6 py-2.5 rounded-full border border-pp-black text-[15px] font-bold text-pp-black hover:bg-slate-50 transition duration-200 hover:border-pp-blue hover:text-pp-blue"
            >
              Log In
            </Link>
            <a 
              href="/#get-started" 
              className="px-6 py-2.5 rounded-full bg-pp-black text-[15px] font-bold text-white hover:bg-pp-blue transition duration-200 shadow-sm"
            >
              Get Started
            </a>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md py-4 px-6 space-y-4 shadow-inner">
          <div className="space-y-1 font-outfit text-base">
            <a 
              href="#feat" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-medium transition duration-200"
            >
              Why Mocard?
            </a>
            <a 
              href="#clients" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-medium transition duration-200"
            >
              Who uses Mocard?
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-pp-black font-medium transition duration-200"
            >
              FAQ
            </a>
          </div>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 font-outfit">
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full border border-pp-black text-sm font-bold text-pp-black hover:bg-slate-50 transition duration-200"
            >
              Log In
            </Link>
            <a 
              href="/#get-started" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-pp-black text-sm font-bold text-white hover:bg-pp-blue transition duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
