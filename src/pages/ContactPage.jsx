import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';

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
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Contact Sales &amp; Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Let's Build Together
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Have technical questions regarding our SDKs, sandbox environments, or want to negotiate custom volume transaction pricing? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left panel: Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Technical support card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-pp-blue font-bold font-outfit">
                  <Terminal className="w-5 h-5" />
                  <span>Developer Support</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Need assistance with event signatures or SDK configurations? Access our detailed documentation or open a support request.
                </p>
                <a href="mailto:business@mocard.rw" className="text-xs font-bold text-slate-800 hover:text-pp-blue block font-outfit">
                  business@mocard.rw
                </a>
              </div>

              {/* Sales consult card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="flex items-center space-x-3 text-pp-blue font-bold font-outfit">
                  <MessageSquare className="w-5 h-5" />
                  <span>Sales &amp; Partnership</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  Processing high volumes or require custom currency routes? Our account team can set up custom settlement channels.
                </p>
                <a href="mailto:business@mocard.rw" className="text-xs font-bold text-slate-800 hover:text-pp-blue block font-outfit">
                  business@mocard.rw
                </a>
              </div>

            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 shadow-inner">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold font-outfit text-xs">
                <ShieldCheck className="w-4.5 h-4.5" />
                <span>PCI-DSS Secured Form</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                All submissions are encrypted in transit. We do not store sensitive bank credentials via query forms.
              </p>
              <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
                <Clock className="w-4 h-4" />
                <span>Typical response time: 2 hours</span>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between">
            
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-outfit text-pp-black">Inquiry Request</h3>
                  <p className="text-xs text-slate-400 mt-1">Provide your business details below:</p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Contact Name</label>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full text-xs font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Business Email</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full text-xs font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Company Name</label>
                  <input 
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Ltd"
                    className="w-full text-xs font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                  />
                </div>

                {/* Monthly Volume */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Estimated Monthly Transaction Volume</label>
                  <select 
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="w-full text-xs font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                  >
                    <option value="under_10k">Under $10,000 / mo</option>
                    <option value="10k_50k">$10,000 - $50,000 / mo</option>
                    <option value="50k_100k">$50,005 - $100,000 / mo</option>
                    <option value="above_100k">Above $100,000 / mo</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Message</label>
                  <textarea 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your integration model..."
                    rows={4}
                    className="w-full text-xs font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-full bg-pp-blue hover:bg-pp-blue-dark text-white text-xs font-bold font-outfit transition duration-200 shadow-sm flex items-center justify-center space-x-2 cursor-pointer disabled:bg-slate-300"
                >
                  {status === 'submitting' ? 'Submitting Form...' : 'Send Inquiry Request'}
                </button>
              </form>
            ) : (
              <div className="py-12 px-6 flex flex-col items-center justify-center space-y-6 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-outfit font-bold text-pp-black text-xl">Thank You!</h3>
                  <p className="text-slate-550 text-xs leading-relaxed max-w-sm font-light">
                    We have received your integration inquiry for <strong className="text-slate-800 font-medium font-mono">{email}</strong>. Our engineering and sales team will reach out within 2 hours.
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
                  className="px-6 py-2.5 rounded-full bg-pp-black hover:bg-neutral-850 text-white text-xs font-bold font-outfit transition duration-200 shadow-sm"
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
