import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      answer: 'When you pay for an eligible item from your MoCard account and your order doesn\'t arrive or it shows up significantly different than described, we can help you get the issue resolved through MoCard\'s Buyer Protection program. Our dedicated team works with you and the seller to find a fair resolution.'
    },
    {
      question: 'What types of issues are covered by MoCard Buyer Protection?',
      answer: 'We cover items that are never delivered, or items that arrive but are significantly different from what was advertised. This includes damaged goods, incorrect model or size, counterfeit versions, and items that are not as described in the listing. Digital goods and services may also be covered in certain cases.'
    },
    {
      question: 'What kinds of items are eligible for MoCard Buyer Protection?',
      answer: 'Most physical goods purchased online that can be shipped are covered. Specific services and digital goods may also be eligible depending on transaction details. We recommend checking the full terms and conditions for complete eligibility requirements before making a purchase.'
    },
    {
      question: 'How can I submit a Buyer Protection claim?',
      answer: 'You can open a dispute directly from your dashboard Resolution Centre within the eligible time frame. We will review details from both you and the seller to resolve the claim. The process typically takes 10-14 business days, during which we may request additional documentation to support your case.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header - reduced padding */}
      <section className="bg-white text-slate-900 pt-28 pb-16 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c] bg-[#1f6e5c]/10 px-4 py-1.5 rounded-full inline-block border border-[#1f6e5c]/15">
              Security &amp; Buyer Protection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
              Pay securely worldwide
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We work hard to protect your financial data, payments, and eligible purchases. Get smart security and peace of mind when you shop and pay with MoCard, with encrypted transactions, proactive fraud protection, and trusted safeguards designed to keep your money and purchases secure across every step of the journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main content - reduced vertical spacing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Visual cards grid directly under Hero */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Card Mockup 1 */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm relative overflow-hidden text-left space-y-3">
              <div className="h-44 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={devicesImage} 
                  alt="Laptop Checkout" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[#0f3d33]/20" />
                <div className="absolute bottom-3 left-3 bg-[#1f6e5c] px-3 py-1 rounded-full text-white text-[10px] font-bold">
                  MoCard Checkout Security
                </div>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-slate-200/60 pt-3">
                <span className="font-medium text-slate-900">Laptop Purchase Session</span>
                <span className="font-bold text-emerald-600">SECURE</span>
              </div>
            </div>
          </div>

          {/* Card Mockup 2 */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm relative overflow-hidden text-left space-y-3">
              <div className="h-44 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={payImage} 
                  alt="Suede Sandals" 
                  onError={handleImgError}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-[#0f3d33]/20" />
                <div className="absolute bottom-3 left-3 bg-emerald-500 px-3 py-1 rounded-full text-white text-[10px] font-bold">
                  Buyer Protection Eligible
                </div>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-slate-200/60 pt-3">
                <span className="font-medium text-slate-900">Brown Suede Sandals</span>
                <span className="font-black text-slate-900">$68.00 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security and encryption section - expanded */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Encrypted Channels</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Security and encryption included
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Every payment is encrypted to help keep your transactions secure. We don't share your full financial information with merchants. Our advanced encryption protocols ensure that your sensitive data remains protected at all times, whether you're shopping on your desktop or mobile device.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-left relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${createLinkImage})` }} />
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-lg font-bold text-slate-900">Security for your accounts</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Learn how to report fraud and help protect your accounts. If you encounter any issues with your transactions, we're here to help. Our dedicated security team monitors for suspicious activity 24 hours a day, 7 days a week.
              </p>
            </div>
            
            <div className="pt-2 relative z-10 border-t border-slate-200 flex justify-between items-center text-sm">
              <span className="text-slate-500">Help center resources</span>
              <a href="/security" className="text-[#1f6e5c] hover:underline font-bold">
                MoCard Security Center →
              </a>
            </div>
          </div>
        </div>

        {/* MoCard Buyer Protection section - expanded */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-5xl mx-auto space-y-8 text-left">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">MoCard Buyer Protection</span>
            <h3 className="text-3xl font-black text-slate-900">Send money and shop securely</h3>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              If you don't receive your order or it arrives significantly different from what was described, MoCard Buyer Protection will help you get reimbursed for eligible items. Terms and limitations apply, but we're committed to making things right when purchases don't go as expected.
            </p>
          </div>

          {/* Three columns grid - NO ICONS */}
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {/* Encrypted payments */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-lg flex items-center justify-center text-[#1f6e5c] text-xs font-bold">
                  SSL
                </div>
                <h4 className="font-bold text-sm text-slate-900">Encrypted payments</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Your transactions and payments are encrypted with bank-grade security. We don't share your full financial information with merchants, keeping your sensitive data private and protected at all times.
                </p>
              </div>
            </div>

            {/* Buyer Protection */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-lg flex items-center justify-center text-[#1f6e5c] text-xs font-bold">
                  PROT
                </div>
                <h4 className="font-bold text-sm text-slate-900">Buyer Protection</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Rely on MoCard Buyer Protection if your eligible purchases arrive differently than described. Terms and limitations apply, but we work hard to ensure you receive what you paid for or get your money back.
                </p>
              </div>
            </div>

            {/* Send money securely */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-lg flex items-center justify-center text-[#1f6e5c] text-xs font-bold">
                  WALL
                </div>
                <h4 className="font-bold text-sm text-slate-900">Send money securely</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  From household bills to haircuts to helping friends and loved ones, sending money to another MoCard account, bank, or mobile wallet is fast and easy. All transfers are protected with the same high-level security as purchases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Submission Steps Flow - expanded */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Dispute Resolution</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Need to submit a claim?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Check Eligibility',
                desc: "Check if your purchase is eligible in MoCard's Buyer Protection program. Review the terms and conditions to understand what's covered and what documentation you'll need to provide.",
                btnText: 'Check Eligibility',
                link: '/features'
              },
              {
                num: '02',
                title: 'Report a Problem',
                desc: 'Go to the Resolution Centre to begin the online resolution process. Provide details about your purchase, including order number, date, and description of the issue.',
                btnText: 'Report a Problem',
                link: '/contact'
              },
              {
                num: '03',
                title: 'Final Decision',
                desc: 'Upon reviewing your claim, we\'ll reach out with any questions and a final decision. We typically resolve claims within 10-14 business days, keeping you informed throughout the process.',
                btnText: null
              }
            ].map((step) => (
              <div key={step.num} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl font-black text-[#1f6e5c]/30 block">{step.num}</span>
                  <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
                {step.btnText && (
                  <a 
                    href={step.link} 
                    className="w-full text-center py-2.5 bg-[#1f6e5c] hover:bg-[#135244] text-white text-xs font-bold rounded-lg transition"
                  >
                    {step.btnText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - expanded answers */}
        <div className="max-w-4xl mx-auto space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Frequently asked questions</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Frequently asked questions</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{faq.question}</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}