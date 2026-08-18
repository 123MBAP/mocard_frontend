import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import createLink from '../assets/create_link.png';
import pay from '../assets/pay.png';
import devices from '../assets/hero_devices_only.png';
import logo from '../assets/logo.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function PaymentLinksPage() {
  const [activeTab, setActiveTab] = useState('links');
  const [showImage, setShowImage] = useState(true);
  const [allowTipping, setAllowTipping] = useState(false);
  const [priceType, setPriceType] = useState('fixed');
  const [selectedTip, setSelectedTip] = useState(null);
  const [customPrice, setCustomPrice] = useState('24.00');
  const [enableShippingTax, setEnableShippingTax] = useState(false);

  const faqs = [
    {
      question: 'What is a Payment Link?',
      answer: 'Payment Links are unique, shareable URLs that let you accept payments fast with no website or coding. You can send Payment Links to customers via email, text messages, social media, messaging apps, and more. They\'re the easiest way to start accepting payments online.'
    },
    {
      question: 'How do I create a Payment Link?',
      answer: 'Creating links takes seconds. Simply log into your MoCard dashboard, go to the Payment Links tab, specify the product details, enter the price, customize any extra features like tax or tipping, and click generate. Your unique link is ready to share immediately.'
    },
    {
      question: 'How do I add a MoCard Payment Button to my website?',
      answer: 'You can generate a code snippet for a Payment Button directly in your dashboard. Just customize the button text, size, and branding color, copy the HTML embed code, and paste it into your website builder or source code. No developer required.'
    },
    {
      question: 'Can I customise my Payment Links and Buttons?',
      answer: 'Yes! You can add your company branding, upload custom product images, easily include item descriptions, set fixed pricing or let customers choose their own, collect shipping details, calculate tax automatically, and enable tipping. Every aspect of the checkout experience can be tailored to your brand.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section - reduced padding */}
      <section className="bg-gradient-to-br from-[#f4f8f7] via-[#fafdfc] to-white text-slate-900 pt-28 pb-16 relative overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,118,108,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.003)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="inline-flex bg-[#1f6e5c]/10 border border-[#1f6e5c]/20 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-[#1f6e5c]">
                MoCard Payment Links and Buttons
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
                Accept payments with ease
              </h1>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Receive payments by email, text messages, social media, in person, or by QR codes. No developers, resources, or technical knowledge needed. Start accepting payments in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-250 text-center shadow-md shadow-[#1f6e5c]/20"
                >
                  Create Link or Button
                </a>
              </div>
            </div>

            {/* Right Chat Mockup - NO ICONS */}
            <div className="lg:col-span-6 w-full max-w-md mx-auto">
              <div className="bg-[#0f3d33]/95 border border-white/20 rounded-2xl p-5 shadow-2xl relative">
                <div className="absolute -top-3 -right-3 bg-[#1f6e5c]/25 text-white border border-white/35 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Live Preview
                </div>
                
                {/* Chat header */}
                <div className="flex items-center space-x-3 pb-3 border-b border-white/20 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#1f6e5c]/90 flex items-center justify-center font-bold text-white">
                    C
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Clay & Co. Pottery</h3>
                    <p className="text-slate-300 text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                      Active Chat
                    </p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-[#1f6e5c]/60 text-slate-100 text-xs rounded-2xl px-4 py-3 max-w-[85%] leading-relaxed border border-white/10">
                      Hi there! I love that turquoise pottery mug on your social media post. Do you have a direct payment link I can use to buy it?
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#1f6e5c] text-white text-xs rounded-2xl px-4 py-3 max-w-[85%] leading-relaxed">
                      Absolutely! Here is your secure checkout link. Just tap to pay with your card or wallet.
                    </div>
                  </div>

                  {/* MoCard Link Card */}
                  <div className="flex justify-end">
                    <div className="bg-[#1f6e5c] rounded-2xl border border-white/35 overflow-hidden w-72 shadow-xl hover:border-[#1f6e5c]/50 transition-colors">
                      <div className="h-40 bg-[#0f3d33] flex items-center justify-center relative overflow-hidden">
                        <img 
                          src={pay} 
                          alt="Mug Pottery Link" 
                          onError={handleImgError}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-2.5 right-2.5 bg-[#1f6e5c]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                          Pay securely
                        </div>
                      </div>
                      <div className="p-4 space-y-1 bg-[#0f3d33]">
                        <h4 className="text-sm font-bold text-white hover:text-[#1f6e5c] transition-colors">
                          Handcrafted Ceramic Pottery Mug
                        </h4>
                        <p className="text-[11px] text-slate-300 font-light">
                          Custom turquoise glaze, oven & microwave safe.
                        </p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-base font-black text-white">
                            $24.00 USD
                          </span>
                          <span className="text-[10px] text-slate-300/80 font-mono">
                            mocard.link/clay-mug
                          </span>
                        </div>
                      </div>
                      
                      <a 
                        href="/contact"
                        className="w-full block text-center py-3 bg-[#1f6e5c] hover:bg-[#135244] text-white text-xs font-bold transition duration-200 border-t border-white/20"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
            Why MoCard Payment Links
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Fast, secure, and hassle-free
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Fast, easy setup',
              description: 'Create Payment Links and checkout buttons in seconds. No coding experience needed. Just fill in your product details and share the link.'
            },
            {
              title: 'Global reach',
              description: 'Choose to pay in 130+ currencies in 200 markets, and accept payments in 24 currencies, even if your customers don\'t use MoCard.'
            },
            {
              title: 'Built-in security',
              description: 'Get peace of mind with encryption and Fraud Protection. Every transaction is protected with bank-grade security protocols.'
            },
            {
              title: 'High conversion',
              description: 'Drive conversion by offering a trusted, seamless payment experience. Customers are more likely to complete purchases when they trust the payment process.'
            }
          ].map(({ title, description }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-md transition duration-250 flex flex-col justify-between">
              <div>
                <div className="mb-4 p-3 w-fit rounded-xl bg-white border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  {title.substring(0, 8)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs Switcher Section - NO ICONS */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
              No Website? No Problem.
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Simple payments. Website optional.
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Choose the checkout tools that align with your business channels. Set them up with ease.
            </p>
          </div>

          {/* Tab buttons - NO ICONS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {[
              { id: 'links', label: 'Payment Links' },
              { id: 'buy-buttons', label: 'Buy Buttons' },
              { id: 'cart-buttons', label: 'Cart Buttons' },
              { id: 'qr-codes', label: 'QR codes' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-5 py-3 rounded-full font-bold text-sm transition duration-200 ${
                  activeTab === id 
                    ? 'bg-[#1f6e5c] text-white shadow-md shadow-[#1f6e5c]/20' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dynamic Content Display */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm">
            {activeTab === 'links' && (
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 w-full max-w-sm mx-auto">
                  <div className="bg-[#0f3d33] border border-white/20 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-2 pb-2.5 border-b border-white/10 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#1f6e5c] flex items-center justify-center font-bold text-[11px] text-white">
                        AG
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">Aura Gallery</h4>
                        <span className="text-[9px] text-slate-400">Business Profile</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-[11px]">
                      <div className="bg-[#1f6e5c]/40 border border-white/10 text-slate-200 rounded-2xl px-3.5 py-2.5 max-w-[85%]">
                        Hello! Is the custom canvas art piece still available?
                      </div>
                      
                      <div className="bg-[#1f6e5c] text-white rounded-2xl px-3.5 py-2.5 max-w-[85%] ml-auto">
                        Yes it is! I've created a secure payment link for you below. Let me know when you've placed the order!
                      </div>

                      <div className="bg-[#1f6e5c] rounded-2xl border border-white/35 overflow-hidden ml-auto max-w-[85%] shadow-md">
                        <div className="h-32 bg-[#0f3d33] flex items-center justify-center relative overflow-hidden">
                          <img 
                            src={createLink} 
                            alt="Art payment link" 
                            onError={handleImgError}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="p-3.5 space-y-1 bg-[#0f3d33]">
                          <h5 className="font-bold text-white">"Nebula Dreams" Abstract Canvas</h5>
                          <p className="text-[10px] text-slate-300 font-light">36" x 36" Mixed Media Painting.</p>
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-xs font-black text-white">$350.00 USD</span>
                            <span className="text-[9px] text-slate-300/80 font-mono">mocard.link/nebula</span>
                          </div>
                        </div>
                        <button className="w-full py-2 bg-[#1f6e5c] hover:bg-[#135244] text-white font-bold text-[10px] transition duration-200 border-t border-white/20">
                          Complete Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5 text-left">
                  <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Create and share links</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    Create and share links
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    Create a secure Payment Link. Share it on social, through email, via a text, or in person with a QR code. No website needed. Start accepting payments immediately.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
                    >
                      Create Payment Link →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'buy-buttons' && (
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 w-full max-w-sm mx-auto bg-[#0f3d33] border border-white/25 rounded-2xl p-5 shadow-xl text-left space-y-4">
                  <div className="bg-[#1f6e5c] border border-white/20 rounded-xl p-3 font-mono text-[9px] text-emerald-400 overflow-x-auto whitespace-pre">
{`<!-- MoCard Checkout Embed -->
<button 
  class="mocard-buy-btn"
  data-item-id="prod_94812"
  data-price="24.00"
>
  Buy with MoCard
</button>
<script src="https://js.mocard.rw/v1"></script>`}
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Live Website View</h5>
                      <p className="text-[10px] text-slate-500">How the embedded button displays</p>
                    </div>
                    <button className="px-4 py-2 bg-[#1f6e5c] hover:bg-[#135244] text-white text-[11px] font-bold rounded-lg shadow-sm transition">
                      Buy with MoCard
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5 text-left">
                  <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Website buttons</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    Embeddable Checkout Buttons
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    Generate custom payment buttons for your website. Just choose your design, configure the details, copy the snippet, and drop it in. No coding experience needed — just copy and paste.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
                    >
                      Create Buy Button →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cart-buttons' && (
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 w-full max-w-sm mx-auto bg-white border border-slate-200 rounded-2xl p-5 shadow-xl text-left space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-2">Your Shopping Bag</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900">Handcrafted Pottery Mug</span>
                        <p className="text-[10px] text-slate-500">Qty: 1</p>
                      </div>
                      <span className="font-bold text-slate-700">$24.00</span>
                    </div>

                    <div className="flex justify-between items-center text-xs pb-2">
                      <div>
                        <span className="font-bold text-slate-900">Turquoise Saucer Dish</span>
                        <p className="text-[10px] text-slate-500">Qty: 1</p>
                      </div>
                      <span className="font-bold text-slate-700">$12.00</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-900">
                      <span>Subtotal</span>
                      <span>$36.00 USD</span>
                    </div>
                    <button className="w-full py-2.5 bg-[#1f6e5c] hover:bg-[#135244] text-white text-xs font-bold rounded-xl transition duration-200 flex items-center justify-center gap-2">
                      Add items to Cart
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5 text-left">
                  <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Shopping Cart integration</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    Cart and checkout flow
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    Combine multiple checkout buttons into a cohesive cart workflow. Allow customers to compile items from your catalogue and checkout with a single transaction.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
                    >
                      Create Cart Button →
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'qr-codes' && (
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 w-full max-w-xs mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xl text-center space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block shadow-sm">
                    <div className="w-36 h-36 border border-slate-100 flex items-center justify-center rounded-xl bg-[#1f6e5c] relative overflow-hidden">
                      <div className="w-28 h-28 border-2 border-white/30 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1 w-20 h-20">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'} rounded-sm`} />
                          ))}
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#1f6e5c] p-2.5 rounded-xl border-2 border-white shadow-md">
                          <img src={logo} alt="MoCard Logo" className="w-5 h-5 object-contain" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-900">Scan To Pay</h4>
                    <p className="text-[10px] text-slate-500">Instant checkout for Handcrafted Ceramics</p>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5 text-left">
                  <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Contact-free payments</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                    In-person payments via QR Codes
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    Instantly export your Payment Links as print-ready QR codes. Place them at physical checkout counters, on product tags, or show them directly on your smartphone.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
                    >
                      Generate QR Code →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Personalise Customer Experience - Interactive Section - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Fully Customisable</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Personalise the customer experience
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-light">
                Add elements that enhance purchase trust and customer flexibility. Toggle the configurations below to see the live checkout preview update in real-time.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              {/* Config Item 1 */}
              <div 
                onClick={() => setShowImage(!showImage)}
                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100/70 transition"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg shrink-0 ${showImage ? 'bg-[#1f6e5c] text-white' : 'bg-slate-200 text-slate-500'} text-xs font-bold`}>
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Show product images and descriptions</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Showcase your products and services on checkout.</p>
                  </div>
                </div>
              </div>

              {/* Config Item 2 */}
              <div 
                onClick={() => setAllowTipping(!allowTipping)}
                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100/70 transition"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg shrink-0 ${allowTipping ? 'bg-[#1f6e5c] text-white' : 'bg-slate-200 text-slate-500'} text-xs font-bold`}>
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Give the option to add a tip</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Enable customer tips at checkout to reward service quality.</p>
                  </div>
                </div>
              </div>

              {/* Config Item 3 */}
              <div 
                onClick={() => setPriceType(priceType === 'fixed' ? 'name-own' : 'fixed')}
                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100/70 transition"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg shrink-0 ${priceType === 'name-own' ? 'bg-[#1f6e5c] text-white' : 'bg-slate-200 text-slate-500'} text-xs font-bold`}>
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Set a fixed price. Or let customers name theirs.</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Perfect for donations, custom contracts, or variable services.</p>
                  </div>
                </div>
              </div>

              {/* Config Item 4 */}
              <div 
                onClick={() => setEnableShippingTax(!enableShippingTax)}
                className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100/70 transition"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-1.5 rounded-lg shrink-0 ${enableShippingTax ? 'bg-[#1f6e5c] text-white' : 'bg-slate-200 text-slate-500'} text-xs font-bold`}>
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Calculate shipping and tax automatically</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Define location parameters for effortless logistics calculations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Checkout Screen Mockup - NO ICONS */}
          <div className="lg:col-span-6 w-full max-w-sm mx-auto">
            <div className="border border-slate-200 rounded-2xl bg-slate-50 p-3 shadow-lg">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                
                {/* Checkout Header */}
                <div className="bg-[#0f3d33] p-4 text-white flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img src={logo} alt="MoCard Logo" className="w-5 h-5 object-contain" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">Secure Checkout</span>
                  </div>
                  <span className="text-[#1f6e5c] text-xs font-bold">SECURE</span>
                </div>

                {/* Checkout Content */}
                <div className="p-5 space-y-4">
                  {showImage && (
                    <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200 transition duration-300">
                      <div className="w-14 h-14 bg-slate-200 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                        <img 
                          src={devices} 
                          alt="Product" 
                          onError={handleImgError}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">MoCard Payment Solution</h4>
                        <p className="text-[10px] text-slate-500 font-light">Custom digital integrations setup.</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Payment Amount</label>
                    {priceType === 'fixed' ? (
                      <div className="text-2xl font-black text-slate-900">$24.00 USD</div>
                    ) : (
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-sm">$</span>
                        <input 
                          type="text" 
                          value={customPrice} 
                          onChange={(e) => setCustomPrice(e.target.value)}
                          className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-[#1f6e5c] focus:ring-1 focus:ring-[#1f6e5c]"
                          placeholder="0.00"
                        />
                        <span className="absolute right-3 top-3 text-[10px] text-slate-400 font-bold uppercase">USD</span>
                      </div>
                    )}
                  </div>

                  {allowTipping && (
                    <div className="space-y-1.5 transition duration-300">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Add a tip for the team</label>
                      <div className="grid grid-cols-4 gap-2 text-xs font-bold">
                        {['10%', '15%', '20%', 'Custom'].map((tip) => (
                          <button
                            key={tip}
                            onClick={() => setSelectedTip(tip)}
                            className={`py-2 rounded-lg border text-center transition ${
                              selectedTip === tip 
                                ? 'bg-[#1f6e5c] border-[#1f6e5c] text-white' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {tip}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {enableShippingTax && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5 transition duration-300">
                      <div className="flex justify-between text-slate-500 font-light">
                        <span>Items Subtotal</span>
                        <span>${priceType === 'fixed' ? '24.00' : parseFloat(customPrice || 0).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 font-light">
                        <span>Estimated Shipping</span>
                        <span>$5.00</span>
                      </div>
                      <div className="flex justify-between text-slate-500 font-light border-b border-slate-200 pb-1.5">
                        <span>Estimated Tax (10%)</span>
                        <span>${(parseFloat(priceType === 'fixed' ? '24.00' : (customPrice || 0)) * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 pt-1">
                        <span>Total Due</span>
                        <span>
                          ${(
                            parseFloat(priceType === 'fixed' ? '24.00' : (customPrice || 0)) + 
                            5.00 + 
                            (parseFloat(priceType === 'fixed' ? '24.00' : (customPrice || 0)) * 0.1) +
                            (allowTipping && selectedTip && selectedTip !== 'Custom' 
                              ? parseFloat(selectedTip) * 0.01 * parseFloat(priceType === 'fixed' ? '24.00' : (customPrice || 0)) 
                              : 0)
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  <button className="w-full py-3 bg-[#1f6e5c] hover:bg-[#135244] text-white rounded-xl text-sm font-bold transition duration-200 shadow-md shadow-[#1f6e5c]/15">
                    Pay with MoCard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Pricing Section */}
      <section className="bg-[#0f3d33] text-white py-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Transparent Fees</span>
          <h2 className="text-3xl md:text-4xl font-black">Clear pricing</h2>
          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            No monthly or setup fees. Only pay when you get paid.
          </p>
          <div className="pt-2">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
            >
              More About Fees →
            </a>
          </div>
        </div>
      </section>

      {/* Tools to grow your business - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
            Built for Scaling
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Tools to grow your business
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Invoicing */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250">
            <div className="space-y-6">
              <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/20 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>MoCard Invoice System</span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-bold uppercase tracking-wider">Sent</span>
                </div>
                <div className="space-y-2 text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-300">Invoice Total</span>
                  <div className="text-3xl font-black text-white">$129.70 USD</div>
                  <p className="text-[10px] text-slate-300 font-light">Customer: client@example.com • Due immediately</p>
                </div>
                <div className="py-2 bg-[#1f6e5c] border border-white/20 rounded-xl px-3 flex justify-between items-center text-[10px] text-slate-200">
                  <span>Secure bank payment integration</span>
                  <span className="text-emerald-400 font-bold">✓</span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <h3 className="text-xl font-bold text-slate-900">Send invoices and get paid fast</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Send invoices in seconds. Customers can pay instantly even if they don't have a MoCard account. Track invoice status and send automated reminders.
                </p>
              </div>
            </div>
            
            <div className="pt-6 text-left">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
              >
                Explore Invoicing →
              </a>
            </div>
          </div>

          {/* Card 2: Reporting Tools */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250">
            <div className="space-y-6">
              <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/20 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] text-slate-400">
                  <span>Merchant Analytics</span>
                  <span className="text-emerald-400 font-bold">+18.5% growth</span>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-2 items-end h-24">
                  {[20, 45, 60, 95].map((height, i) => (
                    <div key={i} className="space-y-1">
                      <div className="w-full bg-[#1f6e5c] rounded-lg overflow-hidden h-14 relative flex items-end">
                        <div 
                          className="w-full bg-gradient-to-t from-[#1f6e5c]/90 to-[#1f6e5c]/40 rounded-t-md transition-all duration-500" 
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className="block text-[8px] text-slate-400 font-mono text-center">Wk {i+1}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-slate-300 font-light flex justify-between text-left">
                  <span>Unique shoppers past 30 days</span>
                  <span className="font-bold text-white">4,289 buyers</span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <h3 className="text-xl font-bold text-slate-900">Analytics for better decision making</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  All the data and analytics you need to run and better understand your business. Track revenue trends and customer behavior.
                </p>
              </div>
            </div>
            
            <div className="pt-6 text-left">
              <a 
                href="/reporting-tools" 
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
              >
                Explore Reporting Tools →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grow your business - Account setup - NO ICONS */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-5 text-left">
            <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest block">Grow your business</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Create your account
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Create a login. Link your bank account to accept payments. Then start selling. It's that easy. No hidden fees, no complicated setup — just start accepting payments.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#1f6e5c] hover:bg-[#135244] text-white text-sm font-bold transition duration-200 shadow-sm"
              >
                Open a Business Account
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#1f6e5c] border border-white/35 rounded-2xl p-5 md:p-8 shadow-xl relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.12),transparent_45%)]" />
            <div className="relative z-10 space-y-6">
              
              <div className="flex justify-between items-start border-b border-white/20 pb-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Active Order Volume</h4>
                  <span className="text-3xl font-black text-white">+12% YTD</span>
                </div>
                <div className="px-3 py-1.5 bg-[#1f6e5c]/20 text-white border border-white/20 rounded-xl text-xs font-bold">
                  Trailing 12 Months
                </div>
              </div>

              <div className="h-32 flex items-end gap-3 pt-2">
                {[35, 48, 42, 58, 62, 55, 70, 68, 75, 82, 80, 92].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div 
                      className="w-full bg-gradient-to-t from-[#1f6e5c] to-[#1f6e5c]/40 rounded-t-sm transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[8px] font-mono text-slate-300">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200 bg-[#0f3d33] border border-white/20 p-4 rounded-xl">
                <span className="text-[#1f6e5c] font-bold shrink-0">INFO</span>
                <p className="font-light leading-relaxed">
                  Real-time synchronization rails connect international buyers seamlessly to local market processing hubs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - expanded answers */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">Frequently asked questions</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block - NO ICONS */}
      <section className="bg-[#0f3d33] text-white py-20 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.12),transparent_45%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#1f6e5c]/20 border border-[#1f6e5c]/30 text-[#1f6e5c] font-bold text-sm">
            Secure
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            One platform for all business
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-200">
            Get paid. Get growing. Get ahead.
          </p>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Do more with the platform designed to power commerce. From startups to enterprises, we have the tools you need to succeed.
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