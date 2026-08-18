import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';

// Import request and send assets
import paysecurelyImage from '../assets/request_send_images/paysecurely.jpg';
import request_moneyImage from '../assets/request_send_images/request_money.jpg';
import sendImage from '../assets/request_send_images/send.png';
import sendmoney2Image from '../assets/request_send_images/sendmoney2.jpg';
import sendmoney3Image from '../assets/request_send_images/sendmoney3.webp';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function SendRequestPage() {
  const faqs = [
    {
      question: 'How do I send money to someone on MoCard?',
      answer: 'Simply log in to your MoCard account, enter the recipient\'s email address, phone number, or MoCard username, specify the amount and currency, choose your payment method, and send. The recipient will receive a notification instantly.'
    },
    {
      question: 'Can I send money to someone who doesn\'t have a MoCard account?',
      answer: 'Yes! You can send money to anyone using their email or phone number. They\'ll receive a link to open a free MoCard account and claim the funds. You can also make direct bank transfers or mobile wallet payouts.'
    },
    {
      question: 'What is MTN and Airtel Mobile Money integration?',
      answer: 'MoCard is fully connected to major East African mobile wallet networks. You can transfer funds directly from your MoCard account to any active MTN Mobile Money or Airtel Money phone number instantly.'
    },
    {
      question: 'How long does it take for a transfer to arrive?',
      answer: 'P2P transfers within MoCard and mobile money payouts are executed instantly. Standard local bank transfers typically complete within 1-2 hours depending on the bank\'s processing cycles.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-white text-slate-900 pt-28 pb-16 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,110,92,0.06),transparent_38%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c] bg-[#1f6e5c]/10 px-4 py-1.5 rounded-full inline-block border border-[#1f6e5c]/15">
              Send and Request Money
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
              Send and request money around the world
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Send and request money to people in 110+ countries. It’s fast, easy, and secure, with transparent transfers and trusted payment experiences built for everyday life and global connections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-bold pt-2">
              <a href="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1f6e5c] hover:bg-[#135244] text-white text-sm transition text-center shadow-md shadow-[#1f6e5c]/20">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content - horizontal visual cards with image left/right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Visual staggered horizontal rows */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Card 1: Send money instantly (Image Left col-span-7, Text Right col-span-5) */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="md:col-span-7 h-80 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
              <img 
                src={sendmoney2Image} 
                alt="Send money instantly" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="md:col-span-5 space-y-3 text-left">
              <h3 className="text-2xl font-black text-slate-900 font-outfit">Send money instantly</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Send funds globally to friends, family, or business partners in seconds. Funds can be received directly on cards, bank accounts, or local mobile wallets (MTN, Airtel).
              </p>
            </div>
          </div>

          {/* Card 2: Request payments (Text Left col-span-5, Image Right col-span-7) */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="md:col-span-5 space-y-3 text-left order-2 md:order-1">
              <h3 className="text-2xl font-black text-slate-900 font-outfit">Request payments</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Split bills, collect project fees, or request money from friends. Send a secure checkout link that works even if they don't have a MoCard account.
              </p>
            </div>
            <div className="md:col-span-7 h-72 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center order-1 md:order-2">
              <img 
                src={request_moneyImage} 
                alt="Request payments in one tap" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Card 3: Protected & Encrypted (Image Left col-span-8, Text Right col-span-4) */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="md:col-span-8 h-96 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
              <img 
                src={paysecurelyImage} 
                alt="Protected and encrypted transfers" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="md:col-span-4 space-y-3 text-left">
              <h3 className="text-2xl font-black text-slate-900 font-outfit">Protected &amp; Encrypted</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Every transfer is encrypted and monitored 24/7. Your financial and banking credentials are never exposed during peer-to-peer exchanges.
              </p>
            </div>
          </div>

          {/* Card 4: Send internationally (Text Left col-span-4, Image Right col-span-8) */}
          <div className="grid md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="md:col-span-4 space-y-3 text-left order-2 md:order-1">
              <h3 className="text-2xl font-black text-slate-900 font-outfit">Send money internationally</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Transfer money across 110+ countries in local currencies. We provide transparent conversion rates so you always know exactly how much will arrive on the receiving end.
              </p>
            </div>
            <div className="md:col-span-8 h-80 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center order-1 md:order-2">
              <img 
                src={sendmoney3Image} 
                alt="Send money internationally" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>

        {/* How it works Submission Steps Flow */}
        <div className="max-w-4xl mx-auto space-y-8 text-left pt-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Simple Process</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">How it works</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Enter Details',
                desc: 'Specify your recipient\'s email address, phone number, or select them directly from your synced MoCard contact list.',
                btnText: null,
                link: null
              },
              {
                num: '02',
                title: 'Confirm Amount',
                desc: 'Enter the amount you want to send or request, select the target currency, and add a memo or note if desired.',
                btnText: null,
                link: null
              },
              {
                num: '03',
                title: 'Instant Execution',
                desc: 'MoCard transfers funds in real-time. Both you and the recipient will receive email, SMS, and dashboard confirmations.',
                btnText: null,
                link: null
              }
            ].map((step) => (
              <div key={step.num} className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-3xl font-black text-[#1f6e5c]/30 block">{step.num}</span>
                  <h4 className="font-bold text-sm text-slate-900">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Frequently asked questions</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Frequently asked questions</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left">
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