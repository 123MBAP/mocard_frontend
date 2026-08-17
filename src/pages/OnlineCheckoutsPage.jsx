import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Sliders, 
  ShieldCheck, 
  Code, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Lock, 
  CreditCard, 
  Activity, 
  FileText, 
  BarChart3, 
  PlusCircle, 
  RefreshCw, 
  Mail 
} from 'lucide-react';

import logo from '../assets/logo.png';
import pay from '../assets/pay.png';
import createLink from '../assets/create_link.png';
import devices from '../assets/hero_devices_only.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

const mainFeatures = [
  {
    title: 'Quick setup with basic integration',
    description: 'Get up and running fast. Connect your system with minimal code and start accepting payments in minutes.',
    icon: Zap,
  },
  {
    title: 'Simple customisation',
    description: 'Style the checkout experience to match your brand. Customize fields, colors, and layout configurations easily.',
    icon: Sliders,
  },
  {
    title: 'Integrated risk management',
    description: 'Protect your sales with advanced built-in fraud prevention tools, machine learning, and secure routing rails.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible coding integration',
    description: 'Whether you prefer SDKs, REST APIs, or no-code plugins, we have integration options built for your development stack.',
    icon: Code,
  },
];

const subscriptionFeatures = [
  {
    title: 'Simple subscriptions',
    description: 'Tap into subscription revenue with easy-to-set-up recurring payments.',
    icon: RefreshCw,
  },
  {
    title: 'Flexible features',
    description: 'Choose a pricing model, define the billing cycle, and add a one-time setup fee.',
    icon: Sliders,
  },
  {
    title: 'Engage at every stage',
    description: 'Automated billing and messaging keeps your customers in the know.',
    icon: Mail,
  },
  {
    title: 'Simple integration',
    description: 'Subscription payments are already built into Mocard Checkout.',
    icon: PlusCircle,
  },
  {
    title: 'Built-in reporting',
    description: 'Get real-time insights and track KPIs in the dashboard. Plus, your sales are included in your Mocard activity reports.',
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: 'What is a payment API?',
    answer: 'A payment API helps apps and websites accept payments by making sure that all aspects of checkout, from card processing to the eCommerce platform, communicate with each other. In short, it’s what makes a smooth checkout experience possible.',
  },
  {
    question: 'Are you PCI compliant?',
    answer: 'Yes. Mocard is certified as a PCI-DSS Level 1 Service Provider. This is the most stringent certification level available in the payment industry, ensuring that your customers\' card details and data are protected with state-of-the-art security encryption.',
  },
];

export default function OnlineCheckoutsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="inline-flex items-center bg-pp-blue/10 border border-pp-blue/20 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-pp-blue font-outfit">
                <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse" />
                Online checkout
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-[1.08]">
                Grow with every sale
              </h1>
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Offer millions of customers in 200+ markets the checkout experience that features their preferred ways to pay.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:bg-white hover:text-slate-950 transition duration-250 text-center shadow-md shadow-pp-blue/10"
                >
                  Sign Up
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-slate-300 text-sm font-bold font-outfit hover:bg-slate-900 hover:text-white transition duration-250 text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl shadow-pp-blue/10">
              <div className="bg-slate-950 border border-white/5 rounded-2xl overflow-hidden">
                <div className="bg-slate-900 border-b border-white/5 px-4 py-3 flex items-center space-x-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 font-mono pl-4">mocard.com/checkout</span>
                </div>
                <div className="aspect-[4/3] bg-slate-950 overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={devices}
                    alt="Mocard online checkout interface"
                    onError={handleImgError}
                    className="w-full h-full object-cover rounded-xl border border-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple. Secure. Flexible. Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
            Simple. Secure. Flexible.
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Simplify setup. Simplify compliance. Get back to your business.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
              <div>
                <div className="mb-5 p-3 w-fit rounded-2xl bg-white border border-slate-200 text-pp-blue">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-outfit text-pp-black mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Integration Ways Section */}
      <section className="bg-slate-50 py-20 md:py-24 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
              Integration Methods
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
              We’ve got three easy ways to integrate.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Store Integration */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">Connect your store and start selling</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Leave the coding to your eCommerce platform. So your business runs smoothly. Search for Mocard on your eCommerce platform to integrate.
                </p>
              </div>
            </div>

            {/* Developer docs */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">More coding, highly custom</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light text-wrap">
                  Your developer can customise our checkout solution for however you do business.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/developers" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit"
                >
                  Explore Developer Docs <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Fast Payment Links */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">No code, fast setup</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Easily create a link, button, or QR code for a product or service. Then, just copy, paste, and get paid.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/payment-links" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit"
                >
                  Explore Payment Links <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Sales Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-wider font-outfit">Boost sales with checkout</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Offer millions of customers in 200+ markets the checkout stack that features their favorite ways to pay.
            </h2>
            <ul className="space-y-3 text-slate-650 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> 
                <span>Accept Mocard payments and major cards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> 
                <span>Simple customization</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> 
                <span>Built-in risk management</span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/contact"
                className="px-6 py-3 rounded-full bg-pp-black text-white text-sm font-bold font-outfit hover:bg-pp-blue transition duration-200"
              >
                Sign Up
              </a>
              <a
                href="/pricing"
                className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 text-sm font-bold font-outfit hover:bg-slate-50 transition duration-200"
              >
                More About Fees
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xs">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <img
                src={pay}
                alt="Boost sales with checkout mockup"
                onError={handleImgError}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accept Global Payments Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.12),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
            Global Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-outfit max-w-3xl mx-auto leading-tight">
            Accept global payments
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Drive conversion across markets when you accept Mocard, credit card payments, digital wallets, and more.
          </p>
        </div>
      </section>

      {/* Simple Subscriptions Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xs order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <img
                src={createLink}
                alt="Mocard Subscriptions and activity dashboard mockup"
                onError={handleImgError}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-wider font-outfit">Recurring Revenue</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Simple subscriptions
            </h2>
            <p className="text-slate-555 text-sm md:text-base leading-relaxed font-light">
              Tap into subscription revenue with easy-to-set-up recurring payments.
            </p>

            <div className="space-y-4 pt-2">
              {subscriptionFeatures.slice(1).map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="p-2 w-fit h-fit rounded-lg bg-slate-100 text-pp-blue shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-outfit text-pp-black">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-light mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools to Grow Your Business & Clear Pricing Section */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
              Tools to Grow Your Business
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
              Everything you need to manage payments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Invoicing */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">Send invoices and get paid fast</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Send invoices in seconds. Customers can pay fast even if they don't have a Mocard account.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit"
                >
                  Explore Invoicing <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Reporting Tools */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">Insights to turn data into action</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  All the data and analytics you need to run and better understand your business.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/reporting-tools" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit"
                >
                  Explore Reporting Tools <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Clear Pricing Card */}
          <div className="max-w-3xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.15),transparent_50%)]" />
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit relative z-10">Simple Fee Structure</span>
            <h3 className="text-3xl font-black font-outfit relative z-10">Clear pricing</h3>
            <p className="text-slate-350 text-base md:text-lg max-w-md mx-auto font-light relative z-10">
              No monthly or setup fees. Only pay when you get paid.
            </p>
            <div className="pt-4 relative z-10">
              <a 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pp-blue text-white text-sm font-bold hover:bg-white hover:text-slate-900 transition font-outfit"
              >
                More About Fees <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">Frequently asked questions</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black font-outfit text-pp-black">Everything you need to know</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold font-outfit text-pp-black mb-2">{item.question}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mocard Open/OpenOne Bottom CTA Section */}
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.12),transparent_45%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-900 border border-slate-800 text-pp-blue">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-outfit leading-tight">
            Mocard Open
          </h2>
          <p className="text-2xl md:text-3xl font-bold font-outfit text-slate-200">
            One platform for all business
          </p>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Get paid. Get growing. Get ahead. Do more with the platform designed to power commerce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit font-bold">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-pp-blue text-white hover:bg-white hover:text-slate-950 transition duration-200 text-center text-sm shadow-md shadow-pp-blue/10">
              Sign Up
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white transition duration-200 text-center text-sm">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
