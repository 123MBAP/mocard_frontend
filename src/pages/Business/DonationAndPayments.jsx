import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

export default function DonationAndPayments({ showToggle = false, setProfile }) {
    const navigate = useNavigate();
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

            {/* HERO */}
            <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">

                        {showToggle && (
                            <div className="inline-flex border border-black/10 bg-white p-1 rounded-full shadow-sm mb-12">
                                <button
                                    onClick={() => setProfile('individual')}
                                    className="px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition duration-300 font-outfit rounded-full text-slate-600 hover:text-slate-900 bg-transparent"
                                >
                                    Personal
                                </button>
                                <button
                                    onClick={() => setProfile('business')}
                                    className="px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition duration-300 font-outfit rounded-full bg-[#123c32] text-white shadow-md"
                                >
                                    Business
                                </button>
                            </div>
                        )}

                        <span className="text-xs font-bold uppercase tracking-widest text-[#1f6e5c] border border-[#1f6e5c]/20 px-3.5 py-1.5 bg-[#1f6e5c]/5 inline-block mb-6">
                            Donations &amp; Giving
                        </span>

                        <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight leading-[1.0] text-center">
                            Make giving
                            <span className="block text-[#1f6e5c] mt-2">
                                simple &amp; accessible.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed text-center font-light">
                            Empower NGOs, charities, foundations, and community organizations with dedicated donation pages and secure online payment solutions.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-950 text-white text-sm font-bold hover:bg-[#1f6e5c] transition-all duration-300 shadow-md shadow-slate-950/5"
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
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
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
                                        className={`lg:col-span-7 relative ${step.imageLeft ? 'lg:order-1 order-1' : 'lg:order-2 order-1'
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
                                        className={`lg:col-span-5 text-left ${step.imageLeft ? 'lg:order-2 order-2' : 'lg:order-1 order-2'
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
