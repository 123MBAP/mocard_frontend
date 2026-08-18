import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import createLinkImage from '../assets/create_link.png';
import payImage from '../assets/pay.png';
import devicesImage from '../assets/hero_devices_only.png';

// Import personal checkout assets
import macbookImage from '../assets/personal_chechout_images/macbook.jpg';
import makePaymentImage from '../assets/personal_chechout_images/makepayment.jpeg';
import shopping2Image from '../assets/personal_chechout_images/shopping2.jpg';
import shoppingFruitImage from '../assets/personal_chechout_images/shoppingFruit.webp';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function PersonalCheckoutPage() {
  const faqs = [
    {
      question: 'What are the benefits of using MoCard Checkout?',
      answer: 'Paying with MoCard lets you store your preferred payment methods in a secure, digital wallet for a fast checkout. You\'ll never need to re-enter your payment details across thousands of participating merchants, saving you time and reducing friction at checkout. Your payment preferences are remembered securely across all your devices.'
    },
    {
      question: 'What does MoCard offer to help protect my payments?',
      answer: 'We offer MoCard Buyer Protection to help cover eligible transactions. If your item does not arrive or is significantly different than described, we help you get a full refund. Our dedicated dispute resolution team works on your behalf to ensure fair outcomes, and we maintain a 98% resolution rate in favor of our customers.'
    },
    {
      question: 'What are the different ways to pay with MoCard?',
      answer: 'You can pay using your linked credit cards, debit cards, bank accounts, or directly from your MoCard wallet balance. We support all major card networks including Visa, Mastercard, American Express, and Discover, plus over 50 banking institutions worldwide, giving you maximum flexibility for every purchase.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header - reduced padding */}
      <section className="bg-gradient-to-br from-[#f4f8f7] via-[#fafdfc] to-white text-slate-900 pt-28 pb-12 relative overflow-hidden border-b border-slate-200/55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c] bg-[#1f6e5c]/10 px-4 py-1.5 rounded-full inline-block">
              MoCard Checkout
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
              Checkout that's easy and secure
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Shop at millions of stores worldwide and track all your purchases in one unified dashboard. No more scattered receipts, forgotten subscriptions, or repetitive data entry.
            </p>
          </div>
        </div>
      </section>

      {/* Main content - reduced vertical spacing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Visual cards grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="h-48 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
              <img 
                src={macbookImage} 
                alt="MacBook Tech Devices Checkout" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-[#1f6e5c] to-[#0f3d33] text-white text-[10px] font-bold px-3 py-2 rounded-xl flex items-center justify-between shadow-lg z-10 border border-white/10">
                <span className="tracking-wider uppercase font-outfit">Pay with MoCard</span>
                <span className="text-[9px] text-emerald-400 font-medium font-sans">Safe checkout</span>
              </div>
            </div>
            <div className="space-y-2 pt-2 text-left">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Laptops &amp; Tech Devices</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Purchase high-value tech, laptops, and accessories online with secure Buyer Protection coverage built into your checkout.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="h-48 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
              <img 
                src={shopping2Image} 
                alt="Apparel &amp; Fashion Checkout" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-[#1f6e5c] to-[#0f3d33] text-white text-[10px] font-bold px-3 py-2 rounded-xl flex items-center justify-between shadow-lg z-10 border border-white/10">
                <span className="tracking-wider uppercase font-outfit">Pay with MoCard</span>
                <span className="text-[9px] text-emerald-400 font-medium font-sans">Safe checkout</span>
              </div>
            </div>
            <div className="space-y-2 pt-2 text-left">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Apparel &amp; Fashion Retailers</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Check out at global fashion retailers and wardrobe brands instantly without re-entering credit card details.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col hover:shadow-md transition">
            <div className="h-48 bg-white border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center mb-3">
              <img 
                src={shoppingFruitImage} 
                alt="Fresh Groceries Checkout" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-[#1f6e5c] to-[#0f3d33] text-white text-[10px] font-bold px-3 py-2 rounded-xl flex items-center justify-between shadow-lg z-10 border border-white/10">
                <span className="tracking-wider uppercase font-outfit">Pay with MoCard</span>
                <span className="text-[9px] text-emerald-400 font-medium font-sans">Safe checkout</span>
              </div>
            </div>
            <div className="space-y-2 pt-2 text-left">
              <h3 className="text-lg font-bold text-slate-900 font-outfit">Groceries &amp; Daily Deliveries</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Settle daily grocery store orders and local food deliveries quickly using your linked wallet accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Shop at millions of stores worldwide - expanded content */}
        <div className="bg-[#1f6e5c]/5 border border-[#1f6e5c]/20 rounded-2xl p-8 max-w-5xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Shop at millions of stores worldwide
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              From fashion to electronics, travel to home goods — MoCard works at millions of stores across 200+ markets. One checkout experience, anywhere in the world. Whether you're buying from a global brand or a local artisan, your payment experience remains consistent and secure. We partner with leading payment processors to ensure compatibility with virtually every online store.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 text-center">
              <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-full mx-auto"></div>
              <h4 className="font-bold text-slate-900">Global Retailers</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Access checkout on major international brands and local favorites wherever you shop. Over 10,000 merchants trust MoCard to process their payments securely and efficiently.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 text-center">
              <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-full mx-auto"></div>
              <h4 className="font-bold text-slate-900">Track Everywhere</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">Monitor all your purchases from stores worldwide in one unified dashboard. Get real-time updates on shipping and delivery status, and receive notifications when your items are on the move.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 text-center">
              <div className="w-10 h-10 bg-[#1f6e5c]/10 rounded-full mx-auto"></div>
              <h4 className="font-bold text-slate-900">Unified Experience</h4>
              <p className="text-slate-600 text-sm font-light leading-relaxed">One wallet, multiple currencies, seamless checkout across borders and time zones. Your preferences follow you everywhere, and you can switch between currencies with just a tap.</p>
            </div>
          </div>
        </div>

        {/* Check out fast internationally - expanded */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Global Shopping</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Check out fast internationally
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Pay with MoCard online with millions of the world's most popular brands. Look for the MoCard button when you check out online. We handle currency conversion automatically, so you always see the price in your preferred currency with transparent exchange rates and no hidden fees.
            </p>
     
          </div>

          <div className="lg:col-span-6 bg-[#0f3d33] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-3">
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Cross-Border Protection</span>
            </div>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              Shop across 200+ markets with instant conversion rates. Pay securely in 24 major global currencies, even if the destination store is half-way around the world. Our multi-currency wallet holds balances in your preferred currencies, saving you conversion fees and giving you full control over your international spending.
            </p>
          </div>
        </div>

        {/* Pay with confidence - expanded */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          <div className="lg:col-span-6 rounded-2xl border border-slate-200 bg-slate-50 p-2 order-2 lg:order-1 relative">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white h-64 flex items-center justify-center relative">
              <img 
                src={makePaymentImage} 
                alt="Unboxing merchandise" 
                onError={handleImgError}
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-3 left-3 right-3 bg-[#0f3d33]/90 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-2.5 rounded-xl flex items-center justify-between shadow-lg z-10 border border-white/10">
                <span className="tracking-wider uppercase font-outfit">mocard buyer protection</span>
                <span className="text-[10px] text-emerald-400 font-medium font-sans">Eligible Purchase</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Shop Securely</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Pay with confidence
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Rely on MoCard Buyer Protection if you don't receive your eligible purchases or it arrives differently than described. Terms and limitations apply. Our 24/7 support team is ready to assist with any disputes, and we work directly with merchants to resolve issues quickly. With MoCard, you can shop with complete peace of mind knowing your purchases are protected.
            </p>
          </div>
        </div>

        {/* Easy money management - expanded, NO ICONS, NO EMOJIS */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">One Wallet, All Sources</span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Easy money management</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Link cards */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col space-y-4">
              <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/10 h-44 flex flex-col justify-between">
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>Add Payment Method</span>
                  <span className="text-[#1f6e5c] text-xs">Secure</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#1b5a4a] border border-white/10 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                    Card Number: •••• •••• •••• 4892
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#1b5a4a] border border-white/10 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                      Expiry: 12/29
                    </div>
                    <div className="bg-[#1b5a4a] border border-white/10 rounded-lg p-2 text-[10px] text-slate-200 font-mono">
                      CVC: •••
                    </div>
                  </div>
                </div>
                <div className="bg-[#1f6e5c]/20 text-[#1f6e5c] text-[10px] font-bold text-center rounded-lg py-1.5">
                  Link Credit Card
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Link your cards and bank account</h4>
                <p className="text-slate-600 text-sm leading-relaxed mt-1">
                  With MoCard, you don't have to enter your info every time you pay. Just add your cards and bank account to MoCard. We'll help keep them secure with bank-grade encryption so you can shop anywhere MoCard's accepted. Add multiple payment methods and choose your default at checkout for a truly frictionless experience.
                </p>
              </div>
            </div>

            {/* Make secure payments - NO EMOJIS */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col space-y-4">
              <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/10 h-44 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-[#1f6e5c]/20 rounded-full border border-[#1f6e5c]/30 flex items-center justify-center text-[#1f6e5c] text-lg mb-2">
                  SSL
                </div>
                <span className="text-xs font-bold text-white">Encrypted Channels</span>
                <p className="text-[10px] text-slate-300 font-light mt-1">All data transfers and checkouts are tokenized</p>
                <span className="text-[9px] text-emerald-400 font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mt-2">
                  Secure Connection Active
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900">Make secure payments</h4>
                <p className="text-slate-600 text-sm leading-relaxed mt-1">
                  Count on peace of mind when you make payments. Your transactions are encrypted with industry-standard protocols and monitored for fraud 24/7. We never share your full payment details with merchants, keeping your financial information safe. Our security team continuously updates our systems to protect against emerging threats.
                </p>
              </div>

              <div className="pt-1">
                <a href="/features" className="text-xs font-bold text-[#1f6e5c] hover:underline">
                  Learn About MoCard Security
                </a>
              </div>
            </div>
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