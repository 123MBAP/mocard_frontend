import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, CreditCard, Globe, ShieldCheck, ShoppingBag, 
  Lock, CheckCircle2, DollarSign, Wallet, Phone, Send, Info
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

// Selection of countries for the flag thumbnail row
const countriesList = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'EU', name: 'Eurozone', flag: '🇪🇺' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
];

export default function SendRequestPage() {
  const [activeStep, setActiveStep] = useState(1); // 1: Recipient, 2: Currency, 3: Review & Send
  const [activeFlow, setActiveFlow] = useState('send'); // 'send' | 'request'

  const faqs = [
    {
      question: 'How do I send money on the MoCard app?',
      answer: 'Send money on the go with the MoCard mobile app. Choose your recipient, then enter the amount and select a currency. Next, review the payment, and send it.'
    },
    {
      question: 'What can I do with money I receive?',
      answer: 'You can keep it in your MoCard balance to spend online, transfer it directly to your linked bank account or mobile wallet, or send it to friends and family.'
    },
    {
      question: 'Is there a fee to send money with MoCard?',
      answer: 'It is free to send money domestically in your local currency. Small fees apply when converting currency and sending money to an account in another country.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-tr from-[#0e2220] via-[#102e29] to-[#085f56] text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-brand-light bg-pp-brand/20 px-4 py-1.5 rounded-full font-outfit border border-pp-brand-light/20">
              Send and Request Money
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight text-white">
              Send and request money around the world
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed">
              Send and request money to people in 110+ countries. It’s fast, easy, and secure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit font-bold pt-2">
              <a href="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pp-blue text-white text-sm hover:brightness-110 transition text-center shadow-md shadow-pp-blue/20">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Visual cards grid directly under Hero */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Card Mockup - Logo Teal Colored */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xs relative overflow-hidden text-left space-y-6">
              
              {/* Phone overlay send money mockup */}
              <div className="bg-pp-brand-dark rounded-2xl p-4 border border-pp-brand-light/20 h-48 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${createLinkImage})` }} />
                
                <div className="flex justify-between items-center text-[10px] text-slate-400 relative z-10">
                  <span>MoCard Money Send</span>
                  <Lock className="w-3.5 h-3.5 text-pp-blue" />
                </div>
                
                <div className="space-y-1 relative z-10">
                  <span className="text-[10px] uppercase font-bold text-slate-300 font-outfit">Transfer Dispatched</span>
                  <div className="text-3xl font-black text-white font-outfit">$35.00 USD</div>
                  <p className="text-[9px] text-slate-300 font-light">Recipient: Sarah Jenkins • Instant Wallet Settlement</p>
                </div>

                <div className="py-2 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold text-center rounded-lg border border-emerald-500/20 relative z-10">
                  Completed Securely
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-lg font-bold font-outfit text-pp-black">Fast international transfers</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Send funds across regional corridors in seconds. Encrypted channels ensure endpoints are secure.
                </p>
              </div>
            </div>
          </div>

          {/* Flag grids */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Global Network Reach</span>
            <h2 className="text-2xl md:text-3xl font-black font-outfit text-pp-black leading-tight">
              Reaching recipients across 110+ markets
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
              We connect local mobile money systems, banks, and card networks across continents, enabling instant money transfers around the globe.
            </p>
            
            {/* flag thumbnails grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              {countriesList.map((country) => (
                <div 
                  key={country.code} 
                  title={country.name}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-xl shadow-2xs hover:scale-105 transition"
                >
                  {country.flag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optimise money transfers features grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Seamless Operations</span>
            <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">Optimise money transfers</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Fast money transfers */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-100 text-pp-blue">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-outfit text-pp-black">Fast money transfers</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Send money from just about anywhere to a MoCard account, in just a few minutes.
              </p>
            </div>

            {/* Secure international payments */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-100 text-pp-blue">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-outfit text-pp-black">Secure international payments</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Every payment is encrypted. MoCard works hard to keep both your financial info and your recipient’s info secure. Send and request money abroad confidently.
              </p>
            </div>

            {/* Clear fees, upfront rates */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="p-3 w-fit rounded-xl bg-slate-50 border border-slate-100 text-pp-blue">
                <DollarSign className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-outfit text-pp-black">Clear fees, upfront rates</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Review your exact fees and currency conversion upfront so you can be sure of the amount your recipient will receive.
              </p>
            </div>
          </div>
        </div>

        {/* Get paid quickly and easily (MoCard.Me) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto pt-8">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Shareable Payment links</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
              Get paid quickly and easily
            </h2>
            <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed">
              Your MoCard.Me link makes it easy for people to pay you. Create your profile. Share your link in an email, a text message, a chat, or on social media. And you’re ready to get paid.
            </p>
            <div className="pt-2">
              <a href="/contact" className="px-8 py-3.5 rounded-full bg-pp-brand hover:bg-pp-brand-dark text-white text-sm font-bold font-outfit transition shadow-sm">
                Create Your Link
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xs">
            <div className="rounded-2xl overflow-hidden border border-slate-250 bg-white h-[320px] flex items-center justify-center relative">
              <img 
                src={devicesImage} 
                alt="Apron vendor checking phone" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pp-brand-dark/95 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-left font-outfit">
                  <span className="text-[10px] font-bold text-pp-blue uppercase tracking-widest">MoCard.Me Active Profile</span>
                  <h4 className="text-base font-bold">mocard.me/artisan-bakery</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive step guide: How to send and request money through MoCard */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Step-by-step Guide</span>
            <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">How to send and request money through MoCard</h3>
            
            {/* Flow selection */}
            <div className="flex justify-center gap-4 pt-2">
              <button 
                onClick={() => { setActiveFlow('send'); setActiveStep(1); }}
                className={`px-6 py-2.5 rounded-full font-bold font-outfit text-xs transition duration-200 ${
                  activeFlow === 'send' 
                    ? 'bg-pp-blue text-white shadow-xs' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Send Money
              </button>
              <button 
                onClick={() => { setActiveFlow('request'); setActiveStep(1); }}
                className={`px-6 py-2.5 rounded-full font-bold font-outfit text-xs transition duration-200 ${
                  activeFlow === 'request' 
                    ? 'bg-pp-blue text-white shadow-xs' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Request Money
              </button>
            </div>
          </div>

          {/* Interactive display */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Steps text list */}
            <div className="lg:col-span-6 space-y-4">
              {[
                { 
                  step: 1, 
                  title: activeFlow === 'send' ? 'Choose your recipient' : 'Select request source', 
                  desc: activeFlow === 'send' 
                    ? 'Enter their email, phone number, or MoCard username. You can also search your saved contacts.' 
                    : 'Specify the email address or phone number of the contact you want to request funds from.'
                },
                { 
                  step: 2, 
                  title: 'Select your currency', 
                  desc: 'Enter the amount you want to transfer or pull, and pick from our 24 supported transaction currencies.' 
                },
                { 
                  step: 3, 
                  title: activeFlow === 'send' ? 'Review and send money' : 'Generate pull link', 
                  desc: activeFlow === 'send'
                    ? 'Make sure everything looks good and easily send in the app or online with autopay.'
                    : 'Generate a request link to share on social channels, email, or in person.'
                }
              ].map(({ step, title, desc }) => (
                <div 
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`p-4 border rounded-2xl cursor-pointer text-left transition duration-200 ${
                    activeStep === step 
                      ? 'bg-white border-pp-blue shadow-xs' 
                      : 'bg-transparent border-transparent hover:border-slate-200'
                  }`}
                >
                  <div className="flex gap-4">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-outfit shrink-0 ${
                      activeStep === step ? 'bg-pp-blue text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {step}
                    </span>
                    <div>
                      <h4 className="font-bold text-pp-black text-sm font-outfit">{title}</h4>
                      {activeStep === step && <p className="text-slate-555 text-xs font-light mt-1.5 leading-relaxed">{desc}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Phone UI Screen - Brand sage green styled */}
            <div className="lg:col-span-6 w-full max-w-xs mx-auto">
              <div className="border border-pp-brand-light/20 rounded-3xl bg-pp-brand/90 p-3.5 shadow-lg text-white text-left font-sans">
                <div className="bg-pp-brand-dark border border-pp-brand-light/20 rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-between p-4 space-y-4">
                  
                  {/* Phone top-bar */}
                  <div className="flex justify-between items-center text-[9px] text-slate-400 border-b border-pp-brand-light/20 pb-2">
                    <span className="font-bold">MoCard Transfer Engine</span>
                    <Lock className="w-3 h-3 text-pp-blue" />
                  </div>

                  {/* Dynamic step viewports */}
                  {activeStep === 1 && (
                    <div className="space-y-3 flex-grow py-2 animate-in fade-in duration-200">
                      <label className="text-[9px] font-bold text-slate-450 uppercase tracking-widest">Recipient</label>
                      <input 
                        type="text" 
                        readOnly
                        value={activeFlow === 'send' ? 'sarah.jenkins@example.com' : 'james.donator@example.com'} 
                        className="w-full bg-pp-brand border border-pp-brand-light/20 rounded-lg px-3 py-2 text-xs font-bold text-slate-200 outline-none font-mono"
                      />
                      <div className="flex items-center gap-2 p-2 bg-pp-brand-dark border border-pp-brand-light/20 rounded-xl">
                        <div className="w-6 h-6 rounded-full bg-pp-blue/20 text-pp-blue flex items-center justify-center font-bold text-[9px]">S</div>
                        <span className="text-[10px] text-slate-300">Verifying MoCard account status...</span>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-3 flex-grow py-2 animate-in fade-in duration-200">
                      <label className="text-[9px] font-bold text-slate-450 uppercase tracking-widest">Enter Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-300 font-bold text-xs">$</span>
                        <input 
                          type="text" 
                          readOnly
                          value={activeFlow === 'send' ? '25.00' : '50.00'} 
                          className="w-full bg-pp-brand border border-pp-brand-light/20 rounded-lg pl-7 pr-3 py-2 text-xs font-bold text-slate-200 outline-none"
                        />
                        <span className="absolute right-3 top-2.5 text-[9px] text-slate-300 font-bold">USD</span>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-3 flex-grow py-2 animate-in fade-in duration-200">
                      <label className="text-[9px] font-bold text-slate-450 uppercase tracking-widest">Review Transaction</label>
                      <div className="bg-pp-brand border border-pp-brand-light/20 p-3 rounded-xl text-[10px] space-y-1.5 font-light">
                        <div className="flex justify-between text-slate-300">
                          <span>Amount:</span>
                          <span className="font-bold text-white">${activeFlow === 'send' ? '25.00' : '50.00'} USD</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Fees:</span>
                          <span className="font-bold text-white">$0.00 USD</span>
                        </div>
                        <div className="flex justify-between border-t border-pp-brand-light/20 pt-1.5 font-bold text-white">
                          <span>Total:</span>
                          <span>${activeFlow === 'send' ? '25.00' : '50.00'} USD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom button */}
                  <button className="w-full py-2.5 bg-pp-blue hover:bg-pp-blue-dark text-white rounded-xl text-[11px] font-bold font-outfit transition flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{activeStep < 3 ? 'Continue to next step' : activeFlow === 'send' ? 'Review & Send' : 'Request Funds'}</span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free domestic transfers banner */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-left space-y-5 relative overflow-hidden">
          <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Local Transfers</span>
          <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">
            Free domestic transfers in local currency
          </h3>
          <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            It’s free to send money within the same country and currency. Fees apply when converting currency and sending money to an account in another country.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-outfit font-bold">
            <a href="/pricing" className="px-6 py-3 rounded-full bg-pp-brand hover:bg-pp-brand-dark text-white transition">
              More About Fees
            </a>
          </div>
          <div className="text-[10px] text-slate-400 font-light pt-4 border-t border-slate-200 flex items-start gap-2 max-w-xl">
            <Info className="w-4 h-4 text-slate-450 shrink-0 mt-0.5" />
            <p>
              *Sending and receiving money requires a MoCard account. The recipient will need to create a MoCard account if they don't already have one.
            </p>
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
