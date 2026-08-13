import React from 'react';

import CrossBorderImage from '../assets/images/cross_border.webp';
import GigEconomyImage from '../assets/images/gig_economy_apps.webp';
import HospitalityImage from '../assets/images/hospitality.jpg';
import TourismImage from '../assets/images/tourism.jpg';
import LocalBusinessImage from '../assets/images/local_business.jpg';
import IntegrationImage from '../assets/images/integration.jpg';
import Ecomerce_merchantsImage from '../assets/images/ecommerce_merchants.png';

export default function WhoUsesMocard() {
  const users = [
    {
      title: "Cross-border Senders",
      image: CrossBorderImage,
      tag: "Card to Mobile Money",
      description: "Diaspora members can now send money to their loved ones back home using their international debit or credit cards. MoCard ensures that the funds are received instantly and securely in their mobile wallets.",
      benefit: "Instant settlement"
    },
    {
      title: "Local Businesses",
      image: LocalBusinessImage,
      tag: "Bulk Payouts & Transfers",
      description: "Automate payouts to suppliers, vendors, and contractors across multiple currencies. Dispatch hundreds of payments directly to mobile money numbers with a single click.",
      benefit: "Automated payouts"
    },
    {
      title: "E-Commerce Merchants",
      image: Ecomerce_merchantsImage,
      tag: "Global Online Checkout",
      description: "Accept card payments online from customers worldwide and receive settlements directly in your local bank account or mobile wallet. Minimize cart abandonment.",
      benefit: "99.9% Checkout Uptime"
    },
    {
      title: "Gig Economy Apps",
      image: GigEconomyImage,
      tag: "On-Demand Driver Payouts",
      description: "Power ride-hailing and food delivery apps with automated payouts. Enable drivers and couriers to cash out their earnings instantly to their mobile wallets 24/7.",
      benefit: "24/7 withdrawals"
    },
    {
      title: "Hospitality & Tourism",
      image: [TourismImage, HospitalityImage],
      tag: "Direct Settlements",
      description: "Accept global booking payments from tourists and settle directly to local travel agencies, hotels, and guide operators via secure API integrations.",
      benefit: "Secure reservations"
    },
    {
      title: "FinTech Integrators",
      image: IntegrationImage,
      tag: "API & Webhook Integrations",
      description: "Build custom digital wallets, lending platforms, or billing software. Developers can integrate our well-documented REST APIs and production-ready SDKs in minutes.",
      benefit: "Developer sandbox"
    }
  ];

  return (
    <section className="bg-white py-14 md:py-18 border-t border-slate-200 relative overflow-hidden scroll-mt-24" id="who-uses-mocard">
      {/* Decorative gradient sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Ecosystem Fit
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Who Uses MoCard?
          </h2>
          <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed font-light max-w-2xl mx-auto text-justify">
            Our API integrations power transactions for thousands of individuals, local entrepreneurs, and scale-ups. Here is how different sectors benefit.
          </p>
        </div>

        {/* 6 Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-350 hover:bg-slate-50/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Cover Image Container */}
                <div className="relative w-full h-44 overflow-hidden rounded-xl bg-slate-150 border border-slate-100">
                  {Array.isArray(user.image) ? (
                    <div className="grid grid-cols-2 gap-1 h-full">
                      {user.image.map((img, i) => (
                        <div key={i} className="overflow-hidden h-full">
                          <img 
                            src={img} 
                            alt={`${user.title} ${i + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={user.image} 
                      alt={user.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  )}
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Top bar with tag benefit */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold bg-slate-100 text-slate-650 px-2.5 py-1 rounded-lg uppercase tracking-wider font-outfit group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-200/60">
                    {user.benefit}
                  </span>
                </div>

                {/* Typography content */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 font-outfit block uppercase tracking-wider">
                    {user.tag}
                  </span>
                  <h3 className="text-base font-bold font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300">
                    {user.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans font-light text-justify">
                    {user.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
