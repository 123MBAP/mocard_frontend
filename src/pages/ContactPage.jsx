import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('under_10k');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero - reduced padding */}
      <section className="bg-white text-slate-900 pt-28 pb-16 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c] bg-[#1f6e5c]/10 px-4 py-1.5 rounded-full inline-block border border-[#1f6e5c]/15">
              Contact Sales &amp; Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900">
              Let's Build Together
            </h1>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Have technical questions regarding our SDKs, sandbox environments, or want to negotiate custom volume transaction pricing? Get in touch with our team. We're here to help you integrate MoCard seamlessly into your platform.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - reduced padding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Info Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Technical support card - NO ICONS */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="text-[#1f6e5c] font-bold text-sm">
                  Developer Support
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Need assistance with event signatures or SDK configurations? Access our detailed documentation or open a support request. Our developer relations team is ready to help you troubleshoot any integration challenges.
                </p>
                <a href="mailto:business@mocard.rw" className="text-sm font-bold text-slate-800 hover:text-[#1f6e5c] block">
                  business@mocard.rw
                </a>
              </div>

              {/* Sales consult card - NO ICONS */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
                <div className="text-[#1f6e5c] font-bold text-sm">
                  Sales &amp; Partnership
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Processing high volumes or require custom currency routes? Our account team can set up custom settlement channels tailored to your business needs. We work with enterprises of all sizes to optimize their payment flows.
                </p>
                <a href="mailto:business@mocard.rw" className="text-sm font-bold text-slate-800 hover:text-[#1f6e5c] block">
                  business@mocard.rw
                </a>
              </div>

            </div>

            {/* Security notice - NO ICONS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider">
                PCI-DSS Secured Form
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                All submissions are encrypted in transit. We do not store sensitive bank credentials via query forms. Your data is protected with industry-standard encryption protocols.
              </p>
              <div className="text-xs text-slate-600">
                Typical response time: 2 hours
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">Inquiry Request</h3>
                  <p className="text-sm text-slate-500 mt-1">Provide your business details below and our team will respond promptly.</p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Contact Name</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full text-sm px-4 py-3 bg-white text-slate-900 border border-slate-200 focus:border-[#1f6e5c] rounded-xl outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Business Email</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full text-sm px-4 py-3 bg-white text-slate-900 border border-slate-200 focus:border-[#1f6e5c] rounded-xl outline-none"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Company Name</label>
                  <input 
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Ltd"
                    className="w-full text-sm px-4 py-3 bg-white text-slate-900 border border-slate-200 focus:border-[#1f6e5c] rounded-xl outline-none"
                  />
                </div>

                {/* Monthly Volume */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Estimated Monthly Transaction Volume</label>
                  <select 
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full text-sm px-4 py-3 bg-white text-slate-900 border border-slate-200 focus:border-[#1f6e5c] rounded-xl outline-none"
                  >
                    <option value="under_10k">Under $10,000 per month</option>
                    <option value="10k_50k">$10,000 - $50,000 per month</option>
                    <option value="50k_100k">$50,000 - $100,000 per month</option>
                    <option value="above_100k">Above $100,000 per month</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Message</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your integration model, expected volume, and any specific requirements you have..."
                    rows={4}
                    className="w-full text-sm px-4 py-3 bg-white text-slate-900 border border-slate-200 focus:border-[#1f6e5c] rounded-xl outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-full bg-[#1f6e5c] hover:bg-[#135244] text-white text-sm font-bold transition duration-200 shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Submitting Form...' : 'Send Inquiry Request'}
                </button>
              </form>
            ) : (
              // Success state - NO ICONS
              <div className="py-12 px-6 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/20 shadow-sm flex items-center justify-center text-emerald-500 text-2xl font-bold">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-xl">Thank You!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-light">
                    We have received your integration inquiry for <strong className="text-slate-800 font-medium">{email}</strong>. Our engineering and sales team will reach out within 2 hours. We look forward to working with you.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setCompany('');
                    setMessage('');
                    setStatus('idle');
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1f6e5c] hover:bg-[#135244] text-white text-sm font-bold transition duration-200 shadow-sm"
                >
                  Submit Another Request
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}