import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Globe, Laptop, Users, Hotel, ShieldAlert } from 'lucide-react';

// Imports of assets
import CrossBorderImage from '../assets/images/cross_border.webp';
import GigEconomyImage from '../assets/images/gig_economy_apps.webp';
import HospitalityImage from '../assets/images/hospitality.jpg';
import TourismImage from '../assets/images/tourism.jpg';
import LocalBusinessImage from '../assets/images/local_business.jpg';
import IntegrationImage from '../assets/images/integration.jpg';
import EcommerceImage from '../assets/images/ecommerce_merchants.png';

export default function SolutionsPage() {
  const solutions = [
    {
      id: "remittance",
      title: "Cross-Border Remittances",
      subtitle: "International Card to Local Mobile Wallets",
      desc: "Allow diaspora members to send money instantly using their credit or debit card. The funds are routed directly and deposited into the recipient's mobile money wallet.",
      bullets: [
        "Instant settlement in local currencies",
        "Secure card tokenization to reduce fraud risk",
        "Detailed transaction receipts and webhooks"
      ],
      targetBusinesses: ["Remittance Startups", "Digital Neo-banks", "Diaspora Transfer Apps", "Global Payroll Platforms"],
      image: CrossBorderImage,
      badge: "Cross-Border"
    },
    {
      id: "ecommerce",
      title: "Global E-Commerce Checkouts",
      subtitle: "Accept Payments Worldwide, Settle Locally",
      desc: "Expand your online store's footprint. Accept card payments online from customers across Europe, US, or Asia, and receive payouts directly to your local bank account or mobile wallet.",
      bullets: [
        "99.9% checkout availability SLA",
        "Optimized mobile checkout design",
        "Simple API integration with checkout forms"
      ],
      targetBusinesses: ["SaaS & Software Providers", "Retail Marketplaces", "Digital Content Creators", "Subscription Services"],
      image: EcommerceImage,
      badge: "E-Commerce"
    },
    {
      id: "gig",
      title: "Gig Economy & Driver Payouts",
      subtitle: "Instant Payouts for On-Demand Services",
      desc: "Integrate automatic payouts into your ride-sharing or delivery platform. Workers can cash out their daily earnings instantly to their mobile money wallets at any time of day.",
      bullets: [
        "Automated payout script verification",
        "24/7 service availability",
        "Webhook status notifications for every cash-out"
      ],
      targetBusinesses: ["Ride-Hailing Apps", "On-Demand Delivery Networks", "Freelance Job Boards", "Staffing Platforms"],
      image: GigEconomyImage,
      badge: "Gig Economy"
    },
    {
      id: "tourism",
      title: "Hospitality & Tourism Direct Settle",
      subtitle: "Global Booking Settlements for Operators",
      desc: "Accept booking payments from global tourists and settle directly to local travel agencies, hospitality hubs, hotels, and guide operators via secure API paths.",
      bullets: [
        "Secure reservation payment capture",
        "Integrated multi-party split payouts",
        "Supports major international credit networks"
      ],
      targetBusinesses: ["Boutique Hotels", "Tour Operators & Guides", "Adventure Sports Agencies", "Local Booking Aggregators"],
      image: [TourismImage, HospitalityImage],
      badge: "Tourism"
    },
    {
      id: "fintech",
      title: "FinTech Infrastructure",
      subtitle: "API Blocks for Next-Gen Financial Apps",
      desc: "Build custom digital wallets, micro-lending apps, and recurring billing software. Developers can integrate our REST APIs and official SDKs in minutes.",
      bullets: [
        "Rich REST API documentation",
        "Sandbox testing environments",
        "Webhook triggers for every transfer state change"
      ],
      targetBusinesses: ["Digital Wallet Apps", "Micro-Lending Startups", "Payment Gateway Integrators", "Crypto Off-Ramp Providers"],
      image: IntegrationImage,
      badge: "FinTech"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Tailored Sector Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Global Payment Connectors
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Mocard maps global credit networks to local deposit methods. See how different industries leverage our infrastructure to solve payment complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {solutions.map((sol, idx) => (
          <div 
            key={sol.id} 
            className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 group cursor-pointer">
                {Array.isArray(sol.image) ? (
                  <div className="grid grid-cols-2 gap-1 h-80">
                    {sol.image.map((img, i) => (
                      <div key={i} className="h-full overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${sol.title} ${i + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">
                {sol.badge}
              </span>
              <div className="space-y-2">
                <h2 className="text-3xl font-black font-outfit text-pp-black leading-tight">
                  {sol.title}
                </h2>
                <h4 className="text-sm font-semibold text-slate-500 font-outfit">
                  {sol.subtitle}
                </h4>
              </div>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-light">
                {sol.desc}
              </p>

              <ul className="space-y-3 font-sans text-sm text-slate-700 pt-2">
                {sol.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Target Businesses block */}
              <div className="space-y-2 pt-4 border-t border-slate-200/60">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Ideal For</span>
                <div className="flex flex-wrap gap-2">
                  {sol.targetBusinesses.map((biz, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-medium font-outfit border border-slate-200/60 hover:bg-slate-200 transition-colors cursor-default">
                      {biz}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="/contact" 
                  className="inline-flex items-center space-x-2 text-sm font-bold text-pp-black hover:text-pp-blue font-outfit group"
                >
                  <span>Request Integration Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Trust & Security Footnote */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-rose-50 text-rose-500 border border-rose-100">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-outfit text-pp-black">Regulatory Compliance Framework</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            All integrations must comply with international Anti-Money Laundering (AML) standards and KYC policies. Mocard does not hold funds on-site; all payout instructions are dispatched directly through regulated transaction providers.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
