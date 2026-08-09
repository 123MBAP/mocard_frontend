import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Info, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [monthlyVolume, setMonthlyVolume] = useState(50000);
  const [corridor, setCorridor] = useState('card_global');

  // Corridor Fee definitions
  const corridors = {
    card_global: { name: "International Card acquiring (US/EU to local)", rate: 0.029, fixed: 0.30, label: "2.9% + $0.30" },
    intra_africa: { name: "Intra-Africa Bank/MoMo Settlements", rate: 0.012, fixed: 0.00, label: "1.2% flat" },
    local_transfer: { name: "Local Card to Wallet integration", rate: 0.018, fixed: 0.10, label: "1.8% + $0.10" },
    local_payouts: { name: "Bulk Mobile Money Dispatches", rate: 0.008, fixed: 0.00, label: "0.8% flat" }
  };

  const currentCorridor = corridors[corridor];
  
  // Calculate dynamic outputs
  const averageTxSize = 100; // Mock average ticket size
  const txCount = monthlyVolume / averageTxSize;
  const estimatedFees = (monthlyVolume * currentCorridor.rate) + (txCount * currentCorridor.fixed);
  
  // SWIFT / traditional acquirer comparison (e.g. 4.5% + $0.50)
  const traditionalFees = (monthlyVolume * 0.045) + (txCount * 0.50);
  const estimatedSavings = Math.max(0, traditionalFees - estimatedFees);

  const tiers = [
    {
      name: "Startup",
      desc: "For small businesses exploring payment integrations.",
      price: "Pay-as-you-go",
      volume: "Up to $10k /mo",
      features: [
        "Sandbox testing & access",
        "Standard API Integration keys",
        "E-mail & Documentation support",
        "Shared webhook delivery queue"
      ],
      cta: "Sign Up For Free",
      highlight: false
    },
    {
      name: "Growth",
      desc: "For scaling companies with higher volume needs.",
      price: "Custom + Volume discount",
      volume: "Up to $100k /mo",
      features: [
        "Dedicated Webhook delivery rails",
        "Official SDK production bundles",
        "24/7 critical system priority alerts",
        "PCI compliance tokenization helper",
        "Corporate dashboard accounts"
      ],
      cta: "Contact Sales",
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "For multinationals requiring bespoke payout rails.",
      price: "Negotiated flat fee",
      volume: "Unlimited volume",
      features: [
        "Dedicated technical integration engineer",
        "Multi-wallet routing custom scripts",
        "99.99% Guaranteed SLA SLA contract",
        "Dedicated Slack channel with team",
        "Custom currency settlements"
      ],
      cta: "Schedule Audit",
      highlight: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Bespoke Pricing Tiers
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              No setup costs or hidden compliance fees. Calculate estimated transaction costs below based on your monthly traffic volume and corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Fee Calculator */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Calculate Your Integration Cost
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Adjust the slider and choose a regional corridor path to estimate monthly Mocard processing fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          
          {/* Calculator Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-outfit">Select Payment Corridor</label>
              <select 
                value={corridor}
                onChange={(e) => setCorridor(e.target.value)}
                className="w-full text-sm font-semibold px-4 py-3 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
              >
                <option value="card_global">Global Credit Card acquiring (2.9% + $0.30)</option>
                <option value="intra_africa">Intra-Africa Bank/Wallet Rails (1.2% flat)</option>
                <option value="local_transfer">Local Card to Mobile Money (1.8% + $0.10)</option>
                <option value="local_payouts">Bulk Mobile Money Payout Dispatches (0.8% flat)</option>
              </select>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-outfit">Estimated Monthly Volume</span>
                <span className="text-pp-blue text-lg font-black font-mono">${monthlyVolume.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="5000"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full accent-pp-blue cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-sans">
                <span>$5,000</span>
                <span>$500,000+</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-slate-450 font-sans bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Calculations are estimates assuming an average transaction ticket size of $100.00.</span>
            </div>
          </div>

          {/* Calculator Results */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-inner">
            
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-outfit">Selected Rate</span>
                <span className="text-2xl font-black font-outfit text-white block mt-1">{currentCorridor.label}</span>
                <span className="text-xs text-slate-400 block mt-1">{currentCorridor.name}</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Monthly Fees:</span>
                  <span className="font-bold font-mono text-white">${parseFloat(estimatedFees).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Transfers:</span>
                  <span className="font-bold font-mono text-white">{parseInt(txCount)} /mo</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-6 space-y-2">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block font-outfit">Estimated Savings</span>
              <span className="text-3xl font-black font-outfit text-emerald-400 block">${parseFloat(estimatedSavings).toFixed(2)} /mo</span>
              <span className="text-[10px] text-slate-400 block font-sans">compared to traditional wire/SWIFT rails</span>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-black font-outfit text-pp-black">Integration Tiers</h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto font-light">
            Choose the fit that corresponds with your operational scope. Standard developer accounts are free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.highlight 
                  ? 'border-pp-blue shadow-lg scale-102 relative' 
                  : 'border-slate-200 shadow-sm hover:border-slate-350 hover:shadow-md'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-pp-blue text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full font-outfit">
                  Most Popular
                </span>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-outfit text-pp-black">{tier.name}</h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-light">{tier.desc}</p>
                </div>

                <div className="border-y border-slate-100 py-4">
                  <span className="text-2xl font-black font-outfit text-pp-black block">{tier.price}</span>
                  <span className="text-xs text-slate-400 block mt-1 font-medium font-outfit">{tier.volume}</span>
                </div>

                <ul className="space-y-3 font-sans text-xs text-slate-700">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a 
                  href="/contact"
                  className={`w-full py-3.5 rounded-full font-outfit font-bold text-xs text-center block transition-colors duration-250 ${
                    tier.highlight 
                      ? 'bg-pp-blue hover:bg-pp-blue-dark text-white shadow-sm' 
                      : 'bg-pp-black hover:bg-neutral-850 text-white'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-black font-outfit text-pp-black">Pricing FAQs</h3>
            <p className="text-slate-500 text-sm font-light">Quick answers to common inquiries regarding merchant billing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 font-sans">
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-pp-black font-outfit">Are there signup or configuration fees?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                No. Setting up a developer credentials sandbox and deploying to staging is completely free. We only charge standard transaction fees on successfully processed volume once live.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-pp-black font-outfit">What happens if a transaction fails?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                We do not charge processing fees on rejected or failed transaction attempts. Mocard only bills for transactions that successfully reach the final gateway settlement point.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-pp-black font-outfit">Do you offer volume discounts?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Yes. For merchants processing above $50,000 monthly, we offer custom rates. Get in touch with our sales team to discuss a negotiated flat pricing model.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-sm text-pp-black font-outfit">How do currency exchanges work?</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                If settlement requires exchanging funds (e.g. acquiring USD from card and depositing RWF to mobile money), standard mid-market FX rates are applied with a transparent, competitive markup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
