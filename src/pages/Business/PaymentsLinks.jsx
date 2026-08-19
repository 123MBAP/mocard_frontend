import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Copy,
  Link2,
  QrCode,
  ShieldCheck,
  Smartphone,
  Zap,
  Sparkles,
  CreditCard,
  Send,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import logo from '../../assets/logo.png';
import createLinkImage from '../../assets/create_link.png';
import payImage from '../../assets/pay.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function PaymentsLinks() {
  return (
    <div className="min-h-screen bg-[#f7f7f4] text-[#1b2a26] font-sans overflow-x-hidden antialiased">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">
            
            <div className="inline-flex items-center gap-2 border border-[#1b6b58]/10 bg-white/70 px-4 py-2 text-[#1b6b58] text-[10px] font-bold uppercase tracking-wider mb-5">
              <span className="h-1.5 w-1.5 bg-[#1b6b58]" />
              Payment Links
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight leading-[1.0] text-center">
              Get paid with
              <span className="block text-[#1b6b58] mt-2">
                one simple link.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed text-center font-light">
              Turn any product, service, invoice, or payment request into a
              beautiful checkout experience your customers can access from
              anywhere.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1b3b33] text-white text-sm font-bold hover:bg-[#1b6b58] transition-all duration-300 shadow-md shadow-slate-950/5"
              >
                Start accepting payments
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:border-[#1b6b58]/40 hover:text-[#1b6b58] transition-all"
              >
                See how it works
              </a>
            </div>

            {/* Trust */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1b6b58]" />
                Secure checkout
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#1b6b58]" />
                Fast setup
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#1b6b58]" />
                Mobile friendly
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative z-20 -mt-3 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1b3b33] text-white p-6 sm:p-8 shadow-2xl shadow-slate-900/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  icon: Link2,
                  title: 'One link',
                  desc: 'Create a dedicated checkout for every product or service.'
                },
                {
                  icon: Send,
                  title: 'Share anywhere',
                  desc: 'Send through WhatsApp, SMS, email or social platforms.'
                },
                {
                  icon: QrCode,
                  title: 'QR ready',
                  desc: 'Turn your payment link into a scannable QR code.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure checkout',
                  desc: 'Give customers a simple and trusted payment experience.'
                }
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-left"
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

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b6b58]">
            Built for modern businesses
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Your customer should never have to
            <span className="text-[#1b6b58]"> search for a way to pay.</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            Payment Links gives your business a direct path from interest to
            payment. No complicated checkout development. No unnecessary
            friction. Just create, share and get paid.
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-16 bg-[#f7f7f4] scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 text-left">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b6b58]">
                How it works
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                From product to payment
                <span className="text-[#1b6b58]"> in minutes.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-500 leading-relaxed">
              Designed for businesses that want to start accepting online
              payments without building a full payment infrastructure.
            </p>
          </div>

          {/* STEP 01 */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-7">
              <div className="relative bg-white border border-slate-200 p-3 shadow-xl shadow-slate-900/5 overflow-hidden">
                <div className="absolute top-6 left-6 z-10 px-3 py-1.5 bg-[#1b3b33] text-white text-[10px] font-bold">
                  STEP 01
                </div>
                <div className="overflow-hidden bg-slate-100 h-[300px] sm:h-[380px]">
                  <img
                    src={createLinkImage}
                    alt="Create a payment link"
                    onError={handleImgError}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-left">
              <div className="max-w-md">
                <div className="w-12 h-12 bg-[#1b6b58]/10 flex items-center justify-center mb-5">
                  <Link2 className="w-6 h-6 text-[#1b6b58]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Create your link.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                  Add your product or service, set the price and configure your
                  checkout experience from your merchant dashboard.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'No complex checkout development',
                    'Create links in seconds',
                    'Customize your payment request',
                    'Generate a QR code automatically'
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="w-5 h-5 bg-[#1b6b58]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#1b6b58]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* STEP 02 */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-16 lg:mt-24">

            <div className="lg:col-span-5 lg:order-1 order-2 text-left">
              <div className="max-w-md lg:ml-auto">
                <div className="w-12 h-12 bg-[#1b6b58]/10 flex items-center justify-center mb-5">
                  <Send className="w-6 h-6 text-[#1b6b58]" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Share it anywhere.
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
                  Your payment link works wherever your customers are. Send it
                  directly or turn it into a QR code for physical interactions.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    'WhatsApp',
                    'SMS',
                    'Email',
                    'Social media'
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-3 bg-white border border-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-[#1b6b58]" />
                      <span className="text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-2 order-1">
              <div className="relative bg-white border border-slate-200 p-3 shadow-xl shadow-slate-900/5 overflow-hidden">
                <div className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-[#1b6b58] text-white text-[10px] font-bold">
                  STEP 02
                </div>
                <div className="overflow-hidden bg-slate-100 h-[300px] sm:h-[380px]">
                  <img
                    src={payImage}
                    alt="Share payment link"
                    onError={handleImgError}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-10 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b6b58]">
              One tool. Many possibilities.
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Sell wherever your
              <span className="text-[#1b6b58]"> customers find you.</span>
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Whether you sell products, services, experiences or professional
              work, create a payment experience without rebuilding your website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

            {[
              {
                number: '01',
                title: 'Social selling',
                desc: 'Turn conversations on WhatsApp and social media into direct payments.'
              },
              {
                number: '02',
                title: 'Invoices',
                desc: 'Send customers a payment destination together with their invoice.'
              },
              {
                number: '03',
                title: 'Events',
                desc: 'Collect registrations, ticket payments and bookings through one link.'
              },
              {
                number: '04',
                title: 'Service businesses',
                desc: 'Get paid for consultations, bookings, deliveries and professional services.'
              }
            ].map((item) => (
              <div
                key={item.number}
                className="group relative min-h-[220px] bg-[#f7f7f4] border border-slate-200 p-6 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 text-left"
              >
                <span className="text-xs font-black text-[#1b6b58]">
                  {item.number}
                </span>
                <h3 className="mt-8 text-xl font-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
                <ArrowRight className="absolute right-6 bottom-6 w-5 h-5 text-slate-300 group-hover:text-[#1b6b58] group-hover:translate-x-1 transition-all" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY MOCARD */}
      <section className="py-16 bg-[#1b3b33] text-white relative overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1b6b58]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-emerald-900/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                Why businesses choose it
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Less friction.
                <span className="block text-emerald-300">
                  More ways to get paid.
                </span>
              </h2>
              <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed">
                Give your customers a direct and familiar way to complete a
                purchase while keeping your payment workflow simple.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1b3b33] text-sm font-bold hover:bg-emerald-100 transition"
              >
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 text-left">

              {[
                {
                  icon: Zap,
                  title: 'Fast setup',
                  desc: 'Start creating payment links without building a complete checkout system.'
                },
                {
                  icon: Smartphone,
                  title: 'Mobile-first',
                  desc: 'Designed around the devices customers already use every day.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Secure experience',
                  desc: 'A checkout experience designed to protect payment information.'
                },
                {
                  icon: CreditCard,
                  title: 'Flexible payments',
                  desc: 'Give customers a simple destination for completing their payment.'
                }
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="p-6 bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition"
                  >
                    <Icon className="w-6 h-6 text-emerald-300" />
                    <h3 className="mt-6 text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-[#f7f7f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden bg-[#1b6b58] px-6 sm:px-10 lg:px-14 py-12 lg:py-16 text-white text-left shadow-2xl">

            <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-black/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                Ready when you are
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Stop sending customers
                <span className="block text-emerald-100">
                  complicated payment instructions.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-emerald-50/80 leading-relaxed">
                Create a payment link, share it with your customer and give
                them a straightforward way to complete their purchase.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1b6b58] text-sm font-bold hover:bg-emerald-50 transition"
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white/25 text-white text-sm font-bold hover:bg-white/10 transition"
                >
                  Explore how it works
                </a>
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
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}