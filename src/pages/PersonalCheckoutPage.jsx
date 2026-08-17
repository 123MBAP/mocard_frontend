import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, CreditCard, Globe, ShieldCheck, ShoppingBag, 
  Lock, CheckCircle2, ChevronRight
} from 'lucide-react';
import logo from '../assets/logo.png';
import createLinkImage from '../assets/create_link.png';
import payImage from '../assets/pay.png';
import devicesImage from '../assets/hero_devices_only.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function PersonalCheckoutPage() {
  const faqs = [
    {
      question: 'What are the benefits of using MoCard Checkout?',
      answer: 'Paying with MoCard lets you store your preferred payment methods in a secure, digital wallet for a fast checkout.'
    },
    {
      question: 'What does MoCard offer to help protect my payments?',
      answer: 'We offer MoCard Buyer Protection to help cover eligible transactions. If your item does not arrive or is significantly different than described, we help you get a full refund.'
    },
    {
      question: 'What are the different ways to pay with MoCard?',
      answer: 'You can pay using your linked credit cards, debit cards, bank accounts, or directly from your MoCard wallet balance.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#f9f7f2] via-[#fdfcfa] to-white text-slate-900 pt-36 pb-20 relative overflow-hidden border-b border-slate-200/55">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,163,89,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.003)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full font-outfit">
              MoCard Checkout
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight text-slate-900">
              Checkout that’s easy and secure
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              Shop at millions of stores worldwide and track purchases all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Main Workspace content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Visual cards grid directly under Hero */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Product 1: Flora Shirt */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-4">
              <div className="h-52 bg-white border border-slate-150 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={payImage} 
                  alt="Flora Shirt" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-3 left-3 bg-pp-brand-dark/85 backdrop-blur-xs px-3 py-1 rounded-full text-white text-[10px] font-bold">
                  Tropical Floral Shirt
                </div>
              </div>
              <div className="flex justify-between items-center font-outfit pt-2">
                <span className="text-xl font-black text-pp-black">$49.00 USD</span>
                <button className="px-5 py-2 bg-pp-blue hover:bg-pp-blue-dark text-white text-xs font-bold rounded-full transition shadow-sm">
                  Pay with MoCard
                </button>
              </div>
            </div>
          </div>

          {/* Product 2: Headphones */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition">
            <div className="space-y-4">
              <div className="h-52 bg-white border border-slate-150 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={devicesImage} 
                  alt="Silver Headphones" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-3 left-3 bg-pp-brand-dark/85 backdrop-blur-xs px-3 py-1 rounded-full text-white text-[10px] font-bold">
                  Silver Wireless Headphones
                </div>
              </div>
              <div className="flex justify-between items-center font-outfit pt-2">
                <span className="text-xl font-black text-pp-black">$129.00 USD</span>
                <button className="px-5 py-2 bg-pp-blue hover:bg-pp-blue-dark text-white text-xs font-bold rounded-full transition shadow-sm">
                  Pay with MoCard
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Check out fast internationally */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto pt-8">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Global Shopping</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Check out fast internationally
            </h2>
            <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed">
              Pay with MoCard online with millions of the world’s most popular brands. Look for the MoCard button when you check out online.
            </p>
            <div className="pt-2">
              <a href="/contact" className="px-8 py-3.5 rounded-full bg-pp-brand hover:bg-pp-brand-dark text-white text-sm font-bold font-outfit transition shadow-sm">
                Get the App
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-pp-brand-dark text-white rounded-3xl p-6 shadow-xl border border-pp-brand-light/20 space-y-4 text-left">
            <div className="flex items-center space-x-3 border-b border-pp-brand-light/20 pb-3">
              <Globe className="w-5 h-5 text-pp-blue" />
              <span className="text-xs font-bold font-outfit text-slate-200 uppercase tracking-wider">Cross-Border Protection</span>
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed font-sans">
              Shop across 200+ markets with instant conversion rates. Pay securely in 24 major global currencies, even if the destination store is half-way around the world.
            </p>
          </div>
        </div>

        {/* Pay with confidence (Buyer Protection) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto pt-8">
          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xs order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-slate-250 bg-white h-[320px] flex items-center justify-center relative">
              <img 
                src={createLinkImage} 
                alt="Unboxing merchandise" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs font-bold text-white font-outfit bg-emerald-500 px-3 py-1 rounded-full">
                  Buyer Protection Active
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-left">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Shop Securely</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Pay with confidence
            </h2>
            <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed">
              Rely on MoCard Buyer Protection if you don’t receive your eligible purchases or it arrives differently than described. Terms and limitations apply.
            </p>
          </div>
        </div>

        {/* Easy money management */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">One Wallet, All Sources</span>
            <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">Easy money management</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Link Cards */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Mockup App Card Screen - Sage green styled */}
                <div className="bg-pp-brand-dark rounded-2xl p-4 border border-pp-brand-light/20 h-44 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] text-slate-300 font-outfit">
                    <span>Add Payment Method</span>
                    <Lock className="w-3.5 h-3.5 text-pp-blue" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-pp-brand border border-pp-brand-light/20 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                      Card Number: •••• •••• •••• 4892
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-pp-brand border border-pp-brand-light/20 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                        Expiry: 12/29
                      </div>
                      <div className="bg-pp-brand border border-pp-brand-light/20 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                        CVC: •••
                      </div>
                    </div>
                  </div>
                  <div className="py-2 bg-pp-blue/20 text-pp-blue text-[10px] font-bold font-outfit text-center rounded-lg">
                    Link Credit Card
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold font-outfit text-pp-black">Link your cards and bank account</h4>
                  <p className="text-slate-555 text-xs leading-relaxed font-light">
                    With MoCard, you don’t have to enter your info every time you pay. Just add your cards and bank account to MoCard. We’ll help keep them secure so you can shop anywhere MoCard’s accepted.
                  </p>
                </div>
              </div>
            </div>

            {/* Make secure payments */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Security locks mockup - Sage green styled */}
                <div className="bg-pp-brand-dark rounded-2xl p-4 border border-pp-brand-light/20 h-44 flex flex-col justify-between items-center text-center">
                  <div className="w-12 h-12 bg-pp-blue/20 text-pp-blue rounded-full flex items-center justify-center border border-pp-blue/30 mt-2">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-white font-outfit">SSL Encrypted Channels</span>
                    <p className="text-[9px] text-slate-300 font-light">All data transfers and checkouts are tokenized</p>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Secure Connection Active
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold font-outfit text-pp-black">Make secure payments</h4>
                  <p className="text-slate-555 text-xs leading-relaxed font-light">
                    Count on peace of mind when you make payments. Your transactions are encrypted.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a href="/features" className="inline-flex items-center gap-2 text-xs font-bold text-pp-blue hover:underline font-outfit">
                  Learn About MoCard Security <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-8 pt-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Frequently asked questions</span>
            <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">Frequently asked questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                <h4 className="text-base font-bold font-outfit text-pp-black mb-2">{faq.question}</h4>
                <p className="text-slate-555 text-sm font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App download block omitted */}

      </section>

      <Footer />
    </div>
  );
}
