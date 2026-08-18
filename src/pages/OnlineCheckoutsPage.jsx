import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    description: 'Get up and running fast. Connect your system with minimal code and start accepting payments in minutes. Our streamlined integration process means you can be live in less than a day, with comprehensive documentation and support to guide you every step of the way.',
    badge: 'Fast Setup'
  },
  {
    title: 'Simple customisation',
    description: 'Style the checkout experience to match your brand. Customize fields, colors, and layout configurations easily. No design constraints — your checkout should look and feel like an extension of your brand, not a third-party widget.',
    badge: 'Customizable'
  },
  {
    title: 'Integrated risk management',
    description: 'Protect your sales with advanced built-in fraud prevention tools, machine learning, and secure routing rails. Our real-time risk scoring engine evaluates every transaction for suspicious activity, giving you peace of mind with every sale.',
    badge: 'Risk Protection'
  },
  {
    title: 'Flexible coding integration',
    description: 'Whether you prefer SDKs, REST APIs, or no-code plugins, we have integration options built for your development stack. Choose the approach that works best for your team\'s expertise and project timeline.',
    badge: 'Developer Friendly'
  },
];

const subscriptionFeatures = [
  {
    title: 'Simple subscriptions',
    description: 'Tap into subscription revenue with easy-to-set-up recurring payments. Launch subscription models in minutes, not months, with our pre-built templates and flexible billing logic.'
  },
  {
    title: 'Flexible features',
    description: 'Choose a pricing model, define the billing cycle, and add a one-time setup fee. Customize every aspect of your subscription offering to match your business model perfectly.'
  },
  {
    title: 'Engage at every stage',
    description: 'Automated billing and messaging keeps your customers in the know. Send payment confirmations, renewal reminders, and failed payment alerts automatically to maintain customer trust.'
  },
  {
    title: 'Simple integration',
    description: 'Subscription payments are already built into Mocard Checkout. No additional development work required — just enable recurring payments and start building predictable revenue streams.'
  },
  {
    title: 'Built-in reporting',
    description: 'Get real-time insights and track KPIs in the dashboard. Plus, your sales are included in your Mocard activity reports. Monitor subscription health, churn rates, and revenue growth from a single view.'
  }
];

const faqs = [
  {
    question: 'What is a payment API?',
    answer: 'A payment API helps apps and websites accept payments by making sure that all aspects of checkout, from card processing to the eCommerce platform, communicate with each other. In short, it\'s what makes a smooth checkout experience possible. Payment APIs handle everything from transaction authorization to settlement, ensuring secure and reliable payment processing.'
  },
  {
    question: 'Are you PCI compliant?',
    answer: 'Yes. Mocard is certified as a PCI-DSS Level 1 Service Provider. This is the most stringent certification level available in the payment industry, ensuring that your customers\' card details and data are protected with state-of-the-art security encryption. We undergo regular security audits to maintain this certification.'
  },
];

export default function OnlineCheckoutsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section - reduced padding */}
      <section className="bg-gradient-to-br from-[#0a1815] via-[#0c1f1b] to-[#12312b] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,118,108,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 text-left">
              <span className="inline-flex bg-[#1f6e5c]/20 border border-[#1f6e5c]/30 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-emerald-400">
                Online checkout
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
                Grow with every sale
              </h1>
              <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Offer millions of customers in 200+ markets the checkout experience that features their preferred ways to pay. From credit cards to digital wallets, we support all major payment methods to maximize your conversion rates.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-250 text-center shadow-md shadow-[#1f6e5c]/20"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-[#0f3d33]/80 p-3 shadow-2xl">
              <div className="bg-[#0f3d33] border border-white/20 rounded-xl overflow-hidden">
                <div className="bg-[#102522] border-b border-white/10 px-4 py-3 flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 font-mono pl-4">mocard.com/checkout</span>
                </div>
                <div className="aspect-[4/3] bg-[#102522] overflow-hidden p-4 flex items-center justify-center">
                  <img
                    src={devices}
                    alt="Mocard online checkout interface"
                    onError={handleImgError}
                    className="w-full h-full object-cover rounded-xl border border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple. Secure. Flexible. Section - NO ICONS */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
            Simple. Secure. Flexible.
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Simplify setup. Simplify compliance. Get back to your business.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {mainFeatures.map(({ title, description, badge }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
              <div>
                <div className="mb-4 p-2 w-fit rounded-xl bg-white border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  {badge}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Integration Ways Section - NO ICONS */}
      <section className="bg-slate-50 py-14 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
              Integration Methods
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              We've got three easy ways to integrate.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Store Integration */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  Store
                </div>
                <h3 className="text-xl font-bold text-slate-900">Connect your store and start selling</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Leave the coding to your eCommerce platform. So your business runs smoothly. Search for Mocard on your eCommerce platform to integrate. Works with all major platforms including Shopify, WooCommerce, and Magento.
                </p>
              </div>
            </div>

            {/* Developer docs */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  Code
                </div>
                <h3 className="text-xl font-bold text-slate-900">More coding, highly custom</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Your developer can customise our checkout solution for however you do business. Full control over every aspect of the payment experience with comprehensive API documentation.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/developers" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Developer Docs →
                </a>
              </div>
            </div>

            {/* Fast Payment Links */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  No Code
                </div>
                <h3 className="text-xl font-bold text-slate-900">No code, fast setup</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Easily create a link, button, or QR code for a product or service. Then, just copy, paste, and get paid. Perfect for service providers, freelancers, and small businesses needing a quick payment solution.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/payment-links" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Payment Links →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boost Sales Section - NO ICONS */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-wider">Boost sales with checkout</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Offer millions of customers in 200+ markets the checkout stack that features their favorite ways to pay.
            </h2>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span>Accept Mocard payments and major cards including Visa, Mastercard, and American Express</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span>Simple customization with flexible design options to match your brand identity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <span>Built-in risk management with real-time fraud detection and prevention</span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/pricing"
                className="px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
              >
                More About Fees
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
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
      <section className="bg-gradient-to-br from-[#0a1815] via-[#0c1f1b] to-[#12312b] text-white py-14 relative overflow-hidden border-t border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(67,118,108,0.1),transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-400">
            Global Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
            Accept global payments
          </h2>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Drive conversion across markets when you accept Mocard, credit card payments, digital wallets, and more. Support for 24 currencies and 200+ countries means you can sell anywhere.
          </p>
        </div>
      </section>

      {/* Simple Subscriptions Section - NO ICONS */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-sm order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <img
                src={createLink}
                alt="Mocard Subscriptions and activity dashboard mockup"
                onError={handleImgError}
                className="w-full h-[420px] object-contain bg-white p-2"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-wider">Recurring Revenue</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Simple subscriptions
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Tap into subscription revenue with easy-to-set-up recurring payments. Build predictable, recurring revenue streams that grow your business month after month.
            </p>

            <div className="space-y-4 pt-2">
              {subscriptionFeatures.slice(1).map(({ title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="p-2 w-fit h-fit rounded-lg bg-slate-100 text-[#1f6e5c] shrink-0 text-xs font-bold">
                    {title.substring(0, 4)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light mt-0.5">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools to Grow Your Business & Clear Pricing Section - NO ICONS */}
      <section className="bg-slate-50 py-14 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
              Tools to Grow Your Business
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Everything you need to manage payments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Invoicing */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  Invoice
                </div>
                <h3 className="text-xl font-bold text-slate-900">Send invoices and get paid fast</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Send invoices in seconds. Customers can pay fast even if they don't have a Mocard account. Track invoice status, send reminders, and reconcile payments automatically.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Invoicing →
                </a>
              </div>
            </div>

            {/* Reporting Tools */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  Data
                </div>
                <h3 className="text-xl font-bold text-slate-900">Insights to turn data into action</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  All the data and analytics you need to run and better understand your business. Track revenue trends, customer behavior, and payment performance from a single dashboard.
                </p>
              </div>
              <div className="pt-6">
                <a 
                  href="/reporting-tools" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Reporting Tools →
                </a>
              </div>
            </div>
          </div>

          {/* Clear Pricing Card */}
          <div className="max-w-3xl mx-auto bg-[#0f3d33] text-white rounded-2xl p-8 md:p-10 text-center space-y-5 shadow-lg relative overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,118,108,0.12),transparent_50%)]" />
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest relative z-10">Simple Fee Structure</span>
            <h3 className="text-3xl font-black relative z-10">Clear pricing</h3>
            <p className="text-slate-200 text-base md:text-lg max-w-md mx-auto font-light relative z-10">
              No monthly or setup fees. Only pay when you get paid. Transparent pricing with no hidden costs — just a simple fee per successful transaction.
            </p>
            <div className="pt-3 relative z-10">
              <a 
                href="/pricing" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition shadow-md shadow-[#1f6e5c]/20"
              >
                More About Fees →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - expanded answers */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">Frequently asked questions</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">Everything you need to know</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0f3d33] text-white py-14 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.12),transparent_45%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#1f6e5c]/20 border border-[#1f6e5c]/30 text-[#1f6e5c] font-bold text-sm">
            Secure
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Mocard Open
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-200">
            One platform for all business
          </p>
          <p className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Get paid. Get growing. Get ahead. Do more with the platform designed to power commerce. From startups to enterprises, we have the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-bold">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1f6e5c] hover:bg-[#135244] text-white transition duration-200 text-center text-sm shadow-md shadow-[#1f6e5c]/20">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}