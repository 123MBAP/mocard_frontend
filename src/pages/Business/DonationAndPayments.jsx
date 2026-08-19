import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  Heart,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Zap,
  Gift,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.png';

// Import visual assets from other folders
import makePaymentImage from '../../assets/personal_chechout_images/makepayment.jpeg';
import paySecurelyImage from '../../assets/request_send_images/paysecurely.jpg';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function DonationAndPayments() {
  const steps = [
    {
      num: '01',
      title: 'Accept online donations',
      desc: 'Empower supporters to donate in seconds using credit/debit cards, local bank transfers, or mobile wallets. Provide a seamless donor checkout experience that maximizes charitable giving.',
      image: makePaymentImage,
      imageLeft: true
    },
    {
      num: '02',
      title: 'Centralized donation management',
      desc: 'Simplify payment collection and manage all incoming donations through a single dashboard. Easily track donor histories and export reports for clean audit trails and transparent operations.',
      image: paySecurelyImage,
      imageLeft: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-950 font-sans overflow-x-hidden antialiased">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#1f6e5c]/10 blur-3xl" />
          <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-emerald-100/50 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
              backgroundSize: '45px 45px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#1f6e5c]/15 text-[#1f6e5c] text-[11px] font-bold uppercase tracking-wider mb-6 bg-[#1f6e5c]/5">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                Donations &amp; Giving
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black tracking-tight leading-[0.98]">
                Make giving
                <span className="block text-[#1f6e5c]">
                  simple &amp; accessible.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base sm:text-lg text-slate-600 leading-relaxed">
                Empower NGOs, charities, foundations, and community organizations with dedicated donation pages and secure online payment solutions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-950 text-white text-sm font-bold hover:bg-[#1f6e5c] transition-all duration-300 shadow-lg shadow-slate-950/10"
                >
                  Get API Access
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:border-[#1f6e5c]/40 hover:text-[#1f6e5c] transition-all"
                >
                  Explore Features
                </a>
              </div>

              {/* Trust */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1f6e5c]" />
                  Secure transactions
                </div>

                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#1f6e5c]" />
                  Instant payouts
                </div>

                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="w-4 h-4 text-[#1f6e5c]" />
                  Responsive donor page
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-[560px] mx-auto">

                {/* Glow */}
                <div className="absolute inset-10 bg-[#1f6e5c]/20 blur-3xl pointer-events-none" />

                {/* Main browser frame */}
                <div className="relative border border-white/85 bg-white p-2 shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
                  <div className="overflow-hidden border border-slate-100 bg-[#f8faf9]">

                    {/* Browser top */}
                    <div className="flex items-center justify-between border-b border-slate-100 bg-white px-5 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 bg-slate-200" />
                        <span className="h-2.5 w-2.5 bg-slate-200" />
                        <span className="h-2.5 w-2.5 bg-slate-200" />
                      </div>

                      <div className="bg-slate-50 px-4 py-1 text-[8px] font-medium text-slate-450">
                        donate.mocard.rw/hope-foundation
                      </div>

                      <LockKeyhole className="w-3.5 h-3.5 text-[#1f6e5c]" />
                    </div>

                    {/* Checkout content */}
                    <div className="grid md:grid-cols-2">

                      {/* Order summary */}
                      <div className="bg-[#1f6e5c] p-7 sm:p-8 text-white text-left">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center bg-white/15">
                            <Heart className="w-4 h-4 text-rose-350 fill-rose-350" />
                          </div>

                          <span className="text-sm font-black">
                            Donate
                          </span>
                        </div>

                        <div className="mt-12 text-left">
                          <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">
                            Partner Campaign
                          </p>

                          <h3 className="mt-2 text-xl font-bold">
                            Hope Foundation
                          </h3>

                          <p className="mt-2 text-xs leading-5 text-white/65">
                            Clean Water Project Initiative.
                          </p>

                          <div className="mt-8 border-t border-white/15 pt-5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-white/60">
                                Donation
                              </span>

                              <span className="text-2xl font-black">
                                50,000
                              </span>
                            </div>

                            <span className="mt-1 block text-right text-[9px] text-white/50">
                              RWF
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Payment form */}
                      <div className="bg-white p-7 sm:p-8 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                              Contribution
                            </p>
                            <h3 className="mt-1 text-lg font-black text-slate-900">
                              Choose amount
                            </h3>
                          </div>
                        </div>

                        <div className="mt-6 space-y-3">
                          <div className="grid grid-cols-3 gap-1.5">
                            <div className="h-8 border border-slate-200 bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-650">
                              10K
                            </div>
                            <div className="h-8 border border-slate-200 bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-650">
                              25K
                            </div>
                            <div className="h-8 border-2 border-[#1f6e5c]/20 bg-[#1f6e5c]/5 flex items-center justify-center text-[10px] font-bold text-[#1f6e5c]">
                              50K
                            </div>
                          </div>

                          <div>
                            <label className="text-[9px] font-bold text-slate-500">
                              Donor email
                            </label>
                            <div className="mt-1 h-9 border border-slate-200 bg-slate-50" />
                          </div>

                          <div className="pt-2">
                            <div className="flex h-10 items-center justify-center bg-[#1f6e5c] text-[11px] font-bold text-white">
                              Donate 50,000 RWF
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-1.5 text-[8px] text-slate-400">
                          <ShieldCheck className="w-3 h-3 text-[#1f6e5c]" />
                          Tax-deductible receipt ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating donation received */}
                <div className="absolute -left-5 sm:-left-10 bottom-10 bg-white border border-slate-200 shadow-xl p-4 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite]">
                  <div className="w-9 h-9 bg-rose-50 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  </div>

                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
                      Gift received
                    </p>
                    <p className="text-sm font-black text-slate-900">
                      +50,000 RWF
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-4 sm:-right-8 top-16 bg-slate-950 text-white shadow-xl p-4 w-28 text-left">
                  <Gift className="w-7 h-7 mb-2 text-emerald-350" />
                  <p className="text-[9px] font-bold leading-tight">
                    100% Secure Charity Processing
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VALUE STRIP / GOAL PILLARS
      ========================================================= */}
      <section className="relative z-20 -mt-3 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white p-6 sm:p-8 shadow-2xl shadow-slate-900/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

              {[
                {
                  icon: Heart,
                  title: 'Accept donations',
                  desc: 'Collect donations globally via credit card or local wallets.'
                },
                {
                  icon: Sparkles,
                  title: 'Frictionless flow',
                  desc: 'Giving experience optimized to increase donor engagement.'
                },
                {
                  icon: Layers3,
                  title: 'Centralized tools',
                  desc: 'Track donor metrics, recurring gifts, and settlements in one view.'
                },
                {
                  icon: Zap,
                  title: 'Expand reach',
                  desc: 'Accept payments across borders with wallet and bank rails.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure payouts',
                  desc: 'Simplify payouts to NGO programs and partners securely.'
                }
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-left animate-in fade-in slide-in-from-bottom-2 duration-300"
                  >
                    <div className="w-9 h-9 bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-emerald-300" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1f6e5c]">
            Designed to help organizations
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Connecting supporters with the
            <span className="text-[#1f6e5c]"> causes they care about.</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Giving should be seamless. Mocard helps NGOs, charities, and community programs remove complex checkout hurdles, expanding access to digital giving worldwide.
          </p>

        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS (Alternate Layout Rows)
      ========================================================= */}
      <section
        id="how-it-works"
        className="py-20 bg-[#f7f9f8] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 text-left">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1f6e5c]">
                Our Platform
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Direct path to giving,
                <span className="text-[#1f6e5c]"> simplified.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm text-slate-500 leading-relaxed">
              Accept digital contributions securely, manage records, and trigger automated payouts to programs in minutes.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, idx) => {
              const Icon = idx === 0 ? Heart : Layers3;

              return (
                <div 
                  key={step.num}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Image Column */}
                  <div 
                    className={`lg:col-span-7 relative ${
                      step.imageLeft ? 'lg:order-1 order-1' : 'lg:order-2 order-1'
                    }`}
                  >
                    <div className="relative bg-white border border-slate-200 p-3 shadow-xl shadow-slate-900/5 overflow-hidden">
                      <div className="absolute top-6 left-6 z-10 px-3 py-1.5 bg-slate-950 text-white text-[10px] font-bold">
                        FEATURE {step.num}
                      </div>

                      <div className="overflow-hidden bg-slate-100 h-[300px] sm:h-[390px]">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          onError={handleImgError}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div 
                    className={`lg:col-span-5 text-left ${
                      step.imageLeft ? 'lg:order-2 order-2' : 'lg:order-1 order-2'
                    }`}
                  >
                    <div className="max-w-md">
                      <div className="w-12 h-12 bg-[#1f6e5c]/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#1f6e5c]" />
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-[#1f6e5c] px-6 sm:px-10 lg:px-14 py-12 lg:py-16 text-white text-left shadow-2xl">

            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-black/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                MoCard for Good
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Make it easier to give.
                <span className="block text-emerald-100">
                  Make a greater impact.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base text-emerald-50/80 leading-relaxed">
                Connect your organization to secure payment rails and give your supporters a modern digital giving experience.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1f6e5c] text-sm font-bold hover:bg-emerald-50 transition"
                >
                  Contact Mocard Sales Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
