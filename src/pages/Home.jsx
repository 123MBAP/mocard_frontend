import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
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

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#f7f6f2]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f6f2]/20 via-transparent to-[#f7f6f2]" />
      </div>

      {/* Decorative geometry - reduced/centered blurs */}
      <div className="absolute -left-40 top-24 h-[600px] w-[600px] rounded-full border border-[#123c32]/5 pointer-events-none" />
      <div className="absolute -right-40 top-24 h-[600px] w-[600px] rounded-full border border-[#123c32]/5 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="text-center flex flex-col items-center justify-center w-full">
          
          <div className="mb-6 inline-flex items-center gap-2 border border-[#123c32]/10 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#1f6e5c] backdrop-blur-md">
            <span className="h-1.5 w-1.5 bg-[#1f6e5c]" />
            Business integration infrastructure
          </div>

          <h1 className="max-w-4xl text-[3.2rem] font-black leading-[0.9] tracking-tight text-[#13201c] sm:text-[4.2rem] lg:text-[5.8rem] text-center">
            Connect
            <span className="block font-serif font-normal italic text-[#1f6e5c] mt-2">
              Your Business.
            </span>
            <span className="block mt-2">With MoCard.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-black/50 sm:text-lg text-center font-light">
            MoCard helps businesses connect their systems, applications,
            payment services and third-party platforms through secure,
            practical integrations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center w-full sm:w-auto">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#123c32] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1f6e5c]"
            >
              Request API access
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/developers"
              className="group inline-flex items-center justify-center gap-3 border border-black/10 bg-white px-7 py-4 text-sm font-bold text-[#123c32] transition hover:border-[#123c32]/30"
            >
              Explore developer docs
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-black/40">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#1f6e5c]" />
              Secure API connectivity
            </div>
            <div className="h-1 w-1 bg-black/20" />
            <div className="flex items-center gap-2">
              <Globe2 size={16} className="text-[#1f6e5c]" />
              Built for connected businesses
            </div>
          </div>

        </div>
      </div>

      {/* Bottom statement */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/5 bg-white/50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-black/35">
            One integration layer
          </span>
          <div className="hidden items-center gap-2 text-xs font-semibold text-[#123c32] sm:flex">
          
            Built to simplify connected commerce
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-black/35">
            Multiple systems
          </span>
        </div>
      </div>
    </section>
  );
}

function IntegrationNode({ icon, title, subtitle, active, dark }) {
  return (
    <div
      className={`flex items-center gap-4 border p-4 ${
        dark
          ? 'border-[#123c32] bg-[#123c32] text-white'
          : 'border-black/5 bg-[#f8f7f3]'
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center ${
          dark
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

function IntroSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              The connectivity layer
            </span>
            <h2 className="mt-3 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-[#13201c] sm:text-5xl lg:text-6xl">
              Your business should not have to speak the language of every
              system.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-7 text-black/50">
              Modern businesses depend on payment providers, CRMs, databases,
              booking platforms, commerce tools and other services. MoCard
              provides an integration layer that helps bring these systems
              together.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm font-bold text-[#123c32]">
              <span className="h-px w-8 bg-[#1f6e5c]" />
              Connect once. Build further.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoUsesMocard() {
  const users = [
    {
      title: 'Cross-system connectors',
      image: CrossBorderImage,
      tag: 'System connectivity',
      number: '01',
      description:
        'Connect existing business systems with modern cloud applications and move information between platforms without rebuilding everything from scratch.',
    },
    {
      title: 'Enterprise syncing',
      image: LocalBusinessImage,
      tag: 'Data synchronization',
      number: '02',
      description:
        'Synchronize information across databases, CRMs and operational platforms through structured integration workflows.',
    },
    {
      title: 'SaaS API hub',
      image: Ecomerce_merchantsImage,
      tag: 'SaaS connectivity',
      number: '03',
      description:
        'Extend your application by connecting it to payment, marketing, customer-support and other third-party services.',
    },
    {
      title: 'Real-time event triggers',
      image: GigEconomyImage,
      tag: 'Event automation',
      number: '04',
      description:
        'Use webhooks and event-driven workflows to trigger actions when important business events happen.',
    },
    {
      title: 'Travel & hospitality',
      image: [TourismImage, HospitalityImage],
      tag: 'Connected experiences',
      number: '05',
      description:
        'Connect booking, customer, payment and operational systems to create smoother digital experiences for guests and travelers.',
    },
    {
      title: 'Custom integrations',
      image: IntegrationImage,
      tag: 'Developer tools',
      number: '06',
      description:
        'Build tailored integration flows around your business requirements using APIs, webhooks and custom automation.',
    },
  ];

  return (
    <section
      id="who-uses-mocard"
      className="overflow-hidden bg-[#f3f0e8] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              What can you connect?
            </span>
            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight text-[#13201c] sm:text-5xl lg:text-6xl">
              From one system
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
                to an entire ecosystem.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-6 text-black/50">
              Different businesses have different integration challenges.
              Explore some of the ways MoCard can fit into your technology
              stack.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <article
              key={user.title}
              className={`group relative overflow-hidden bg-white`}
            >
              <div className="relative h-56 overflow-hidden">
                {Array.isArray(user.image) ? (
                  <div className="grid h-full grid-cols-2 gap-1">
                    {user.image.map((img, i) => (
                      <div key={i} className="overflow-hidden">
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={user.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13201c]/50 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#123c32] backdrop-blur">
                  {user.tag}
                </span>
                <span className="absolute bottom-5 right-5 text-3xl font-black text-white/60">
                  {user.number}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-black tracking-tight text-[#13201c]">
                  {user.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/45">
                  {user.description}
                </p>
          
              </div>
            </article>
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
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your stack.
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
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
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl">
                Have a system
                <span className="block font-serif font-normal italic text-[#e4d09b]">
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#13201c] antialiased">
      <Navbar />
      <Hero />
      <IntroSection />
      <WhoUsesMocard />
      <IntegrationArchitecture />
      <GetStartedSection />
      <ActionBanner />
      <FooterBridge />
      <Footer />
    </div>
  );
}