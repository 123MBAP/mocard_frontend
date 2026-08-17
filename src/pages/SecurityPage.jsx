import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, CreditCard, Globe, ShieldCheck, ShoppingBag, 
  Lock, CheckCircle2, DollarSign, Wallet, ShieldAlert, Award, FileText
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

export default function SecurityPage() {
  const faqs = [
    {
      question: 'What is MoCard Buyer Protection?',
      answer: 'When you pay for an eligible item from your MoCard account and your order doesn’t arrive or it shows up significantly different than described, we can help you get the issue resolved through MoCard’s Buyer Protection program.'
    },
    {
      question: 'What types of issues are covered by MoCard Buyer Protection?',
      answer: 'We cover items that are never delivered, or items that arrive but are significantly different from what was advertised (e.g. damaged goods, incorrect model, or fake versions).'
    },
    {
      question: 'What kinds of items are eligible for MoCard Buyer Protection?',
      answer: 'Most physical goods purchased online that can be shipped are covered. Specific services and digital goods may also be eligible depending on transaction details.'
    },
    {
      question: 'How can I submit a Buyer Protection claim?',
      answer: 'You can open a dispute directly from your dashboard Resolution Centre within the eligible time frame. We will review details from both you and the seller to resolve the claim.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0d211e] to-[#152e2a] text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(67,118,108,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-brand-light bg-pp-brand/20 px-4 py-1.5 rounded-full font-outfit border border-pp-brand-light/20">
              Security &amp; Buyer Protection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight text-white">
              Pay securely worldwide
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed">
              We work hard to protect your financial data, payments, and eligible purchases. Get smart security and peace of mind when you shop and pay with MoCard.
            </p>
            {/* CTA buttons omitted */}
          </div>
        </div>
      </section>

      {/* Main Workspace content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Visual cards grid directly under Hero */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Card Mockup 1 */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs relative overflow-hidden text-left space-y-4">
              <div className="h-44 bg-white border border-slate-150 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={devicesImage} 
                  alt="Laptop Checkout" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-pp-brand-dark/20" />
                <div className="absolute bottom-3 left-3 bg-pp-blue px-3 py-1 rounded-full text-white text-[10px] font-bold font-outfit">
                  MoCard Checkout Security
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-550 border-t border-slate-200/60 pt-3">
                <span className="font-medium text-pp-black">Laptop Purchase Session</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold font-outfit">
                  <Lock className="w-3.5 h-3.5" /> SECURE
                </span>
              </div>
            </div>
          </div>

          {/* Card Mockup 2 */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs relative overflow-hidden text-left space-y-4">
              <div className="h-44 bg-white border border-slate-150 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={payImage} 
                  alt="Suede Sandals" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-pp-brand-dark/20" />
                <div className="absolute bottom-3 left-3 bg-emerald-500 px-3 py-1 rounded-full text-white text-[10px] font-bold font-outfit">
                  Buyer Protection Eligible
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-555 border-t border-slate-200/60 pt-3">
                <span className="font-medium text-pp-black">Brown Suede Sandals</span>
                <span className="font-black text-slate-950">$68.00 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security and encryption section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto pt-8">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Encrypted Channels</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Security and encryption included
            </h2>
            <p className="text-slate-550 text-sm md:text-base font-light leading-relaxed">
              Every payment is encrypted to help keep your transactions secure. We don’t share your full financial information with merchants.
            </p>
          </div>

          <div className="lg:col-span-6 bg-pp-brand-dark text-white rounded-3xl p-6 shadow-xl border border-pp-brand-light/20 space-y-6 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${createLinkImage})` }} />
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-lg font-bold font-outfit text-slate-100">Security for your accounts</h3>
              <p className="text-xs text-slate-300 font-light font-sans leading-relaxed">
                Learn how to report fraud and help protect your accounts. If you encounter any issues with your transactions, we’re here to help.
              </p>
            </div>
            
            <div className="pt-2 relative z-10 border-t border-pp-brand-light/20 flex justify-between items-center text-xs">
              <span className="text-slate-350">Help center resources</span>
              <a href="/security" className="inline-flex items-center gap-1 text-pp-blue hover:underline font-bold font-outfit">
                MoCard Security Center <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* MoCard Buyer Protection section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto space-y-12 text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">MoCard Buyer Protection</span>
            <h3 className="text-3xl font-black font-outfit text-pp-black">Send money and shop securely</h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
              If you don't receive your order MoCard Buyer Protection will help you get reimbursed for eligible items. Terms and limitations apply.
            </p>
          </div>

          {/* Three columns grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {/* Encrypted payments */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-slate-50 border border-slate-100 text-pp-blue">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-pp-black font-outfit">Encrypted payments</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Your transactions and payments are encrypted. We don’t share your full financial information with merchants.
                </p>
              </div>
            </div>

            {/* Buyer Protection */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-slate-50 border border-slate-100 text-pp-blue">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-pp-black font-outfit">Buyer Protection</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Rely on MoCard Buyer Protection if your eligible purchases arrive differently than described. Terms and limitations apply.
                </p>
              </div>
            </div>

            {/* Send money securely */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-slate-50 border border-slate-100 text-pp-blue">
                  <Wallet className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-pp-black font-outfit">Send money securely</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  From household bills to haircuts to helping friends and loved ones, sending money to another MoCard account, bank, or mobile wallet is fast and easy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Submission Steps Flow */}
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Dispute Resolution</span>
            <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">Need to submit a claim?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Check Eligibility',
                desc: "Check if your purchase is eligible in MoCard's Buyer Protection program.",
                btnText: 'Check Eligibility',
                link: '/features'
              },
              {
                num: '02',
                title: 'Report a Problem',
                desc: 'Go to the Resolution Centre to begin the online resolution process.',
                btnText: 'Report a Problem',
                link: '/contact'
              },
              {
                num: '03',
                title: 'Final Decision',
                desc: 'Upon reviewing your claim, we’ll reach out with any questions and a final decision.',
                btnText: null
              }
            ].map((step) => (
              <div key={step.num} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-3xl font-black text-pp-blue/30 font-outfit block">{step.num}</span>
                  <h4 className="font-bold text-sm text-pp-black font-outfit">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
                {step.btnText && (
                  <a 
                    href={step.link} 
                    className="w-full text-center py-2 bg-pp-brand hover:bg-pp-brand-dark text-white text-xs font-bold font-outfit rounded-lg transition"
                  >
                    {step.btnText}
                  </a>
                )}
              </div>
            ))}
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
