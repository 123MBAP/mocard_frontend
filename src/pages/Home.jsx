import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Globe2,
  Layers3,
  PlugZap,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Partner images
import akageraImg from '../assets/partners/akageraaviation.png';
import atlasImg from '../assets/partners/atlas.jpg';
import byizaImg from '../assets/partners/byiza.jpg';
import choosekigaliImg from '../assets/partners/choosekigali.png';
import cleoImg from '../assets/partners/cleo.png';
import dguideImg from '../assets/partners/dguide.png';
import everImg from '../assets/partners/ever-retreat.jpg';
import ferwabaImg from '../assets/partners/ferwaba.png';
import galaxyImg from '../assets/partners/galaxy-hotel.png';
import heavenImg from '../assets/partners/heaven.jpeg';
import norrskenImg from '../assets/partners/norrsken.jpeg';
import ecoImg from '../assets/partners/rwanda-eco-tours.png';
import satguruImg from '../assets/partners/satguru.png';
import victoriaImg from '../assets/partners/victoria.png';

// Assets
import heroBg from '../assets/hero_bg.png';
import CrossBorderImage from '../assets/images/cross_border.webp';
import GigEconomyImage from '../assets/images/gig_economy_apps.webp';
import HospitalityImage from '../assets/images/hospitality.jpg';
import TourismImage from '../assets/images/tourism.jpg';
import LocalBusinessImage from '../assets/images/local_business.jpg';
import IntegrationImage from '../assets/images/integration.jpg';
import Ecomerce_merchantsImage from '../assets/images/ecommerce_merchants.png';

const green = '#123c32';
const greenLight = '#1f6e5c';
const cream = '#f3efe5';
const gold = '#e4d09b';

function Hero({ profile, setProfile }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#123c32]">
      {/* Decorative geometry - reduced/centered white lines for dark theme */}
      <div className="absolute -left-40 top-24 h-[600px] w-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -right-40 top-24 h-[600px] w-[600px] rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="text-center flex flex-col items-center justify-center w-full">

          {/* Toggle Button */}
          <div className="mb-16 inline-flex border border-white/10 bg-white/10 p-1 backdrop-blur-md rounded-full">
            <button
              onClick={() => setProfile('individual')}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 font-sans rounded-full ${profile === 'individual'
                ? 'bg-white text-[#123c32] shadow-sm font-black'
                : 'text-white/60 hover:text-white font-semibold'
                }`}
            >
              Individual
            </button>
            <button
              onClick={() => {
                setProfile('business');
                navigate('/business/payment-links');
              }}
              className={`px-8 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 font-sans rounded-full ${profile === 'business'
                ? 'bg-white text-[#123c32] shadow-sm font-black'
                : 'text-white/60 hover:text-white font-semibold'
                }`}
            >
              Business
            </button>
          </div>

          <h1 className="max-w-4xl text-[2.4rem] font-black leading-[1.0] tracking-tight text-white sm:text-[3.4rem] lg:text-[4.5rem] text-center">
            Connect
            <span className="block font-serif font-normal italic text-[#e4d09b] mt-2">
              Your Business.
            </span>
            <span className="block mt-2">With MoCard.</span>
          </h1>

          {profile === 'business' && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center w-full sm:w-auto">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#123c32] transition hover:bg-[#e4d09b]"
              >
                Request API access
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/developers"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore developer docs
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          )}

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-white/50">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#e4d09b]" />
              Secure API connectivity
            </div>
            <div className="h-1 w-1 bg-white/20" />
            <div className="flex items-center gap-2">
              <Globe2 size={16} className="text-[#e4d09b]" />
              Built for connected businesses
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}

function IntegrationNode({ icon, title, subtitle, active, dark }) {
  return (
    <div
      className={`flex items-center gap-4 border p-4 ${dark
        ? 'border-[#123c32] bg-[#123c32] text-white'
        : 'border-black/5 bg-[#f8f7f3]'
        }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center ${dark
          ? 'bg-white/10 text-[#e4d09b]'
          : active
            ? 'bg-[#123c32] text-white'
            : 'bg-white text-[#1f6e5c]'
          }`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold">{title}</p>
        <p className={`mt-0.5 text-[10px] ${dark ? 'text-white/45' : 'text-black/40'}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function PartnersMarquee() {
  const partnerLogos = [
    akageraImg,
    atlasImg,
    byizaImg,
    choosekigaliImg,
    cleoImg,
    dguideImg,
    everImg,
    ferwabaImg,
    galaxyImg,
    heavenImg,
    norrskenImg,
    ecoImg,
    satguruImg,
    victoriaImg,
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-b border-black/5 overflow-hidden text-center relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1f6e5c] font-sans">
          Trusted by businesses, hotels, and travel providers across Rwanda
        </p>
      </div>

      <div 
        className="relative flex overflow-hidden w-full py-4 group cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        {/* Left & Right gradient blurs for premium transition */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div 
          className="flex gap-16 sm:gap-20 animate-marquee whitespace-nowrap"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {partnerLogos.concat(partnerLogos).map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center shrink-0 transition duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center h-36 sm:h-44 w-72 sm:w-80 bg-slate-50 border border-black/5 p-2 hover:border-[#123c32]/20 transition duration-300">
                <img
                  src={logo}
                  alt="Partner logo"
                  className="max-h-[90%] max-w-[90%] object-contain filter grayscale hover:grayscale-0 transition duration-300 scale-110 hover:scale-[1.2]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
function useElementOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isIntersecting];
}

function ScrollSection({ user, index }) {
  const [ref, isIntersecting] = useElementOnScreen({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center w-full max-w-5xl mx-auto py-8 transition-all duration-1000 transform ease-out ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } group`}
    >
      {/* Text Block at the top */}
      <div className="max-w-3xl flex flex-col items-center px-4">
        <span className="inline-block bg-[#123c32]/5 text-[#123c32] px-4 py-2 text-[10px] font-bold uppercase tracking-wider font-sans mb-4">
          {user.tag}
        </span>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-[#13201c] font-sans">
          {user.title}
        </h3>
        <p className="mt-4 text-sm sm:text-base leading-7 text-black/50 font-sans font-light max-w-2xl">
          {user.description}
        </p>
        <div className="mt-6">
          <Link
            to={user.link}
            className="group/btn inline-flex items-center gap-3 bg-[#123c32] hover:bg-[#1f6e5c] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition duration-300"
          >
            Learn more
            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image Block at the bottom */}
      <div className="w-full mt-10 flex justify-center px-4">
        <div className="relative w-full max-w-5xl h-[70vh] sm:h-[75vh] overflow-hidden border border-black/5 bg-white shadow-sm">
          {Array.isArray(user.image) ? (
            <div className="grid h-full grid-cols-2 gap-1 bg-[#f3f0e8]">
              {user.image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`h-full w-full object-cover ${user.crop || 'object-center'} transition duration-[1500ms] ease-out ${
                    isIntersecting ? 'scale-100' : 'scale-110'
                  } group-hover:scale-105`}
                />
              ))}
            </div>
          ) : (
            <img
              src={user.image}
              alt=""
              className={`h-full w-full object-cover ${user.crop || 'object-center'} transition duration-[1500ms] ease-out ${
                isIntersecting ? 'scale-100' : 'scale-110'
              } group-hover:scale-105`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function WhoUsesMocard({ profile }) {


  const businessCards = [
    {
      title: 'Payment Links',
      image: LocalBusinessImage,
      tag: 'Payments',
      number: '01',
      description: 'Create and share checkout links in seconds to get paid via mobile wallets or credit cards.',
      link: '/business/payment-links',
      crop: 'object-center'
    },
    {
      title: 'Hosted Checkouts',
      image: Ecomerce_merchantsImage,
      tag: 'E-commerce',
      number: '02',
      description: 'Pre-built, brand-aligned checkout portals for websites, WooCommerce, or Shopify.',
      link: '/business/hosted-checkouts',
      crop: 'object-center'
    },
    {
      title: 'Donations & Giving',
      image: IntegrationImage,
      tag: 'Non-Profits',
      number: '03',
      description: 'Dedicated payment processing infrastructure for NGOs, charities, and community giving.',
      link: '/business/donations',
      crop: 'object-center'
    },
    {
      title: 'ERP & CRM Syncing',
      image: CrossBorderImage,
      tag: 'Infrastructure',
      number: '04',
      description: 'Synchronize real-time transaction information directly into your corporate CRM software.',
      link: '/dashboard',
      crop: 'object-center'
    }
  ];

  const individualCards = [
    {
      title: 'Global Travel Wallet',
      image: HospitalityImage,
      tag: 'Connectivity',
      number: '01',
      description: 'Connect international cards directly with local mobile money wallets for frictionless travel.',
      link: '/contact',
      crop: 'object-center'
    },
    {
      title: 'Cross-Border Transacting',
      image: CrossBorderImage,
      tag: 'Remittances',
      number: '02',
      description: 'Send and receive money instantly to local mobile money wallets across borders.',
      link: '/contact',
      crop: 'object-center'
    },
    {
      title: 'Secure Card Linking',
      image: LocalBusinessImage,
      tag: 'Security',
      number: '03',
      description: 'Safely link your international visa or mastercard to pay at local establishments.',
      link: '/contact',
      crop: 'object-center'
    },
    {
      title: 'Peer-to-Peer Transfers',
      image: GigEconomyImage,
      tag: 'Remittances',
      number: '04',
      description: 'Send funds directly to friends and family across local and international credit lines instantly.',
      link: '/contact',
      crop: 'object-center'
    },
    {
      title: 'Instant Bill Payments',
      image: Ecomerce_merchantsImage,
      tag: 'Payments',
      number: '05',
      description: 'Settle utilities, school fees, and subscription services directly from linked payment methods.',
      link: '/contact',
      crop: 'object-center'
    },
    {
      title: 'Multi-Currency Balance',
      image: IntegrationImage,
      tag: 'Asset Management',
      number: '06',
      description: 'Hold, convert and manage balances in local and international currencies within a unified profile.',
      link: '/contact',
      crop: 'object-center'
    }
  ];

  const activeCards = profile === 'business' ? businessCards : individualCards;

  return (
    <section
      id="who-uses-mocard"
      className="overflow-hidden bg-[#f3f0e8] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              What can you connect?
            </span>
            <h2 className="mt-3 text-2xl font-black leading-[1.0] tracking-tight text-[#13201c] sm:text-3xl lg:text-4xl">
              Solutions made for
              <span className="block font-serif font-normal italic text-[#1f6e5c] mt-1">
                every payment profile.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-left">
            <p className="text-sm leading-6 text-black/50 font-sans">
              Whether you are running a global e-commerce business or traveling internationally, MoCard provides the integration tools to support your payment needs.
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-12 sm:space-y-16">
          {activeCards.map((user, index) => (
            <ScrollSection key={user.title} user={user} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationArchitecture() {
  return (
    <section className="bg-white py-20 text-slate-950 sm:py-28 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              How it fits
            </span>
            <h2 className="mt-4 text-2xl font-black leading-[1.0] tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
              Your stack.
              <span className="block font-serif font-normal italic text-[#1f6e5c] mt-1">
                Connected.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500 font-light font-sans">
              MoCard sits between your business systems and the services you
              need to connect, giving your team a practical path for building
              integrations.
            </p>
            <div className="mt-7 space-y-3">
              {[
                'Connect existing applications',
                'Automate data movement',
                'Trigger real-time workflows',
                'Build custom integration paths',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-[#1f6e5c]/10">
                    <Check size={13} className="text-[#1f6e5c] font-bold" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative border border-slate-200 bg-slate-50 p-6 sm:p-10">
              <div className="grid grid-cols-3 gap-4">
                <ArchitectureBox
                  title="Your business"
                  items={['Website', 'Mobile app', 'ERP / CRM']}
                />
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="h-px w-full bg-slate-200" />
                  <div className="relative flex h-20 w-20 items-center justify-center bg-[#1f6e5c] text-white shadow-lg">
                    <PlugZap size={28} />
                    <span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-bold uppercase tracking-widest text-slate-450 font-sans">
                      MoCard API
                    </span>
                  </div>
                  <div className="h-px w-full bg-slate-200" />
                </div>
                <ArchitectureBox
                  title="Connected services"
                  items={['Payments', 'Cloud tools', 'Third-party APIs']}
                />
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                <div className="bg-white border border-slate-200 p-4 text-center">
                  <p className="text-lg font-black text-slate-900">API</p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-slate-450 font-bold font-sans">
                    Connectivity
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-4 text-center">
                  <p className="text-lg font-black text-slate-900">REST</p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-slate-450 font-bold font-sans">
                    Architecture
                  </p>
                </div>
                <div className="bg-white border border-slate-200 p-4 text-center">
                  <p className="text-lg font-black text-slate-900">WEBHOOK</p>
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-slate-455 font-bold font-sans">
                    Events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureBox({ title, items }) {
  return (
    <div className="border border-slate-200 bg-white p-5 sm:p-6 text-left">
      <p className="text-xs font-bold text-slate-900 font-sans">{title}</p>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="bg-slate-50 border border-slate-100 px-3 py-3 text-[10px] font-bold text-slate-700 uppercase tracking-wider font-sans"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function GetStartedSection() {
  const [copied, setCopied] = useState(false);

  const requirements = [
    {
      title: 'Business registration certificate',
      desc: 'Official incorporation or registration documentation.',
    },
    {
      title: 'TIN certificate',
      desc: 'Tax identification and registration details.',
    },
    {
      title: 'National ID or passport',
      desc: 'Valid identification for relevant business owners or directors.',
    },
    {
      title: 'Business description',
      desc: 'A brief overview of your operations, services and business model.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Prepare your documents',
      desc: 'Gather clear copies of the required verification documents.',
    },
    {
      num: '02',
      title: 'Send your request',
      desc: 'Email the documents to the MoCard onboarding team.',
    },
    {
      num: '03',
      title: 'Verification & setup',
      desc: 'After review, the team will guide you through the next setup steps.',
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('business@mocard.rw');
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="get-started"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              Get started
            </span>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Bring your business
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
                into the ecosystem.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/50 lg:col-span-5">
            Start the onboarding process with a simple document verification
            workflow designed to get your business ready for integration.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Requirements */}
          <div className="bg-[#f3f0e8] p-7 sm:p-9 lg:col-span-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1f6e5c]">
                  Step 01
                </span>
                <h3 className="mt-2 text-2xl font-black">
                  Prepare your documents
                </h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center bg-white text-[#123c32]">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {requirements.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#eaf1ed] text-xs font-black text-[#1f6e5c]">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{item.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-black/40">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-black/40">
              <CheckCircle2 size={15} className="text-[#1f6e5c]" />
              Clear digital copies are recommended.
            </div>
          </div>

          {/* Process */}
          <div className="bg-[#123c32] p-7 text-white sm:p-9 lg:col-span-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#e4d09b]">
              Step 02
            </span>
            <h3 className="mt-2 text-2xl font-black">
              From request to activation
            </h3>

            <div className="mt-8 space-y-7">
              {steps.map((step, index) => (
                <div key={step.num} className="relative flex gap-5">
                  {index !== steps.length - 1 && (
                    <div className="absolute left-4 top-9 h-[calc(100%+1.5rem)] w-px bg-white/10" />
                  )}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center bg-white text-xs font-black text-[#123c32]">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{step.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-xs leading-5 text-white/45">
                Ready to begin? Contact the onboarding team using the address
                below.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 bg-white/[0.06] px-4 py-3 font-mono text-xs text-white/75">
                  business@mocard.rw
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 bg-[#e4d09b] px-5 py-3 text-xs font-bold text-[#123c32] transition hover:bg-white"
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#f3f0e8] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden bg-[#123c32] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 border border-white/10" />
          <div className="absolute -bottom-48 -left-24 h-96 w-96 bg-[#1f6e5c]/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e4d09b]">
                <Send size={13} />
                Start a conversation
              </span>
              <h2 className="mt-4 max-w-3xl text-2xl font-black leading-[1.0] tracking-tight sm:text-3xl lg:text-4xl">
                Have a system
                <span className="block font-serif font-normal italic text-[#e4d09b] mt-1">
                  you need connected?
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                Tell us what you are trying to connect and our team can help
                you determine the right integration path.
              </p>
            </div>

            <div className="lg:col-span-5">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Business email
                  </label>
                  <div className="flex flex-col gap-2 bg-white p-2 sm:flex-row">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      className="min-w-0 flex-1 px-4 py-3 text-sm text-black outline-none placeholder:text-black/30"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 bg-[#123c32] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#1f6e5c]"
                    >
                      Contact sales
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                  <p className="text-[10px] text-white/30">
                    By submitting, you are requesting contact from the MoCard
                    team.
                  </p>
                </form>
              ) : (
                <div className="border border-white/10 bg-white/[0.06] p-6">
                  <div className="flex items-center gap-2 text-[#e4d09b]">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-bold">
                      Request received
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/50">
                    Thanks. Your request for{' '}
                    <strong className="text-white">
                      {email}
                    </strong>{' '}
                    has been captured.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                    className="mt-5 text-xs font-bold text-[#e4d09b]"
                  >
                    Submit another request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterBridge() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-5 border-t border-black/5 pt-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-[#123c32]">
              Build connected experiences with MoCard.
            </p>
            <p className="mt-1 text-xs text-black/40">
              Explore our developer resources or speak with the team.
            </p>
          </div>
          <Link
            to="/developers"
            className="group inline-flex items-center gap-2 text-xs font-bold text-[#123c32]"
          >
            Developer resources
            <ChevronRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [profile, setProfile] = useState('individual');

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#13201c] antialiased">
      <Navbar />
      <Hero profile={profile} setProfile={setProfile} />
      <WhoUsesMocard profile={profile} />
      <IntegrationArchitecture />
      <GetStartedSection />
      <PartnersMarquee />
      <ActionBanner />
      <FooterBridge />
      <Footer />
    </div>
  );
}