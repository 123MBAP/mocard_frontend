import React from 'react';
import { Globe, Briefcase, ShoppingBag, Zap, Compass, Code, ArrowRight } from 'lucide-react';


import CrossBorderImage from '../assets/images/cross_border.webp';
import GigEconomyImage from '../assets/images/gig_economy_apps.webp';
import HospitalityImage from '../assets/images/hospitality.jpg';
import TourismImage from '../assets/images/tourism.jpg';
import LocalBusinessImage from '../assets/images/local_business.jpg';
import IntegrationImage from '../assets/images/integration.jpg';
import Ecomerce_merchantsImage 
from '../assets/images/ecommerce_merchants.png'



export default function WhoUsesMocard() {
  const users = [
    {
      title: "Cross-border Payments and senders",
      image: CrossBorderImage,
      tag: "Card to Mobile Money",
      description: "Diaspora members can now send money to their loved ones back home using their international debit or credit cards. MoCard ensures that the funds are received instantly and securely in their mobile wallets.",
      color: "text-blue-600 bg-blue-50 border-blue-100",
      benefit: "Instant settlement"
    },
    {
      title: "Local Businesses",
      image: LocalBusinessImage,
      tag: "Bulk Payouts & Transfers",
      description: "Automate payouts to suppliers, vendors, and contractors across multiple currencies. Dispatch hundreds of payments directly to mobile money numbers with a single click.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      benefit: "Automated payouts"
    },
    {
      title: "E-Commerce Merchants",
      image: Ecomerce_merchantsImage,
      tag: "Global Online Checkout",
      description: "Accept card payments online from customers worldwide and receive settlements directly in your local bank account or mobile wallet. Minimize cart abandonment.",
      color: "text-amber-600 bg-amber-50 border-amber-100",
      benefit: "99.9% Checkout Uptime"
    },
    {
      title: "Gig Economy Apps",
      image: GigEconomyImage,
      tag: "On-Demand Driver Payouts",
      description: "Power ride-hailing and food delivery apps with automated payouts. Enable drivers and couriers to cash out their earnings instantly to their mobile wallets 24/7.",
      color: "text-purple-600 bg-purple-50 border-purple-100",
      benefit: "24/7 withdrawals"
    },
    {
      title: "Hospitality & Tourism",
      image:[TourismImage, HospitalityImage],
      tag: "Direct Settlements",
      description: "Accept global booking payments from tourists and settle directly to local travel agencies, hotels, and guide operators via secure API integrations.",
      color: "text-rose-600 bg-rose-50 border-rose-100",
      benefit: "Secure reservations"
    },
    {
      title: "FinTech Integrators",
      image:IntegrationImage,
      tag: "API & Webhook Integrations",
      description: "Build custom digital wallets, lending platforms, or billing software. Developers can integrate our well-documented REST APIs and production-ready SDKs in minutes.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
      benefit: "Developer sandbox"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-200 relative overflow-hidden scroll-mt-24" id="who-uses-mocard">
      {/* Decorative gradient sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Ecosystem Fit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Who Uses MoCard?
          </h2>
          <p className="text-slate-650 font-sans text-base md:text-lg font-light max-w-2xl mx-auto">
            Our API integrations power transactions for thousands of individuals, local entrepreneurs, and scale-ups. Here is how different sectors benefit.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-slate-200 rounded-3xl p-6 hover:border-slate-350 hover:bg-slate-50/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-6">
                
                {/* Cover Image Container */}
                <div className="relative w-full h-48 overflow-hidden rounded-2xl bg-slate-150 border border-slate-100">
                  {Array.isArray(user.image) ? (
                    <div className="grid grid-cols-2 gap-1 h-full">
                      {user.image.map((img, i) => (
                        <div key={i} className="overflow-hidden h-full">
                          <img 
                            src={img} 
                            alt={`${user.title} ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={user.image} 
                      alt={user.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  )}
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top bar with Icon and Tag */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider font-outfit group-hover:bg-white transition-colors">
                    {user.benefit}
                  </span>
                </div>

                {/* Typography content */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 font-outfit block uppercase tracking-wider">
                    {user.tag}
                  </span>
                  <h3 className="text-xl font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300">
                    {user.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans font-light">
                    {user.description}
                  </p>
                </div>

              </div>

              {/* Action/learn indicator */}
              <div className="pt-6 border-t border-slate-100/55 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 group-hover:text-pp-blue transition-colors font-outfit">
                  Explore Integration
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-pp-blue group-hover:translate-x-1 transition-all" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
