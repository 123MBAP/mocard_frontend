import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import pay from '../assets/pay.png';
import createLink from '../assets/create_link.png';
import devices from '../assets/hero_devices_only.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function ReportingToolsPage() {
  const [timeframe, setTimeframe] = useState('30days');
  const [transactionType, setTransactionType] = useState('all');
  const [isExporting, setIsExporting] = useState(false);

  const faqs = [
    {
      question: 'How do I access my Business Reporting Tools?',
      answer: 'Our reporting and analytics tools are already included with your MoCard Business account. Simply log into your dashboard and navigate to the "Reporting" or "Analytics" tab to view real-time logs. You\'ll find comprehensive data on all your transactions, fees, and customer activity in one centralized location.'
    },
    {
      question: 'Can I customise the reports I download?',
      answer: 'Yes! You can add filters to reflect specific time frames, transaction types, customer regions, and individual currencies. These filtered views can then be exported as custom spreadsheets. Our flexible filtering system lets you drill down to exactly the data you need, whether you\'re preparing monthly financial statements or analyzing specific campaign performance.'
    },
    {
      question: 'In what formats can I export my financial statements?',
      answer: 'MoCard supports exporting reports in standard CSV, PDF, and XLS formats, making it easy to sync transaction histories directly into accounting software like QuickBooks or Xero. You can also schedule automated exports to be delivered directly to your preferred cloud storage or accounting system.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header - reduced padding */}
      <section className="bg-gradient-to-br from-[#f4f8f7] via-[#fafdfc] to-white text-slate-900 pt-28 pb-16 relative overflow-hidden border-b border-slate-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,118,108,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.003)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="inline-flex bg-[#1f6e5c]/10 border border-[#1f6e5c]/20 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-[#1f6e5c]">
                Business Reporting Tools
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
                You run your business. We'll run the numbers.
              </h1>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Get the data and analytics you need to run and better understand your business with a MoCard Business account. From transaction history to customer insights, everything you need is at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-250 text-center shadow-md shadow-[#1f6e5c]/20"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Right Graphic Module - NO ICONS */}
            <div className="lg:col-span-6 w-full max-w-md mx-auto">
              <div className="bg-[#0f3d33] border border-white/20 rounded-2xl p-5 shadow-2xl space-y-5 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url(${pay})` }} />
                
                {/* Header info */}
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest">Sales Insights</h3>
                    <p className="text-[10px] text-slate-400">Trailing 30 Days</p>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-xl text-[10px] font-bold">
                    Active Account
                  </span>
                </div>

                {/* Stat 1 */}
                <div className="p-4 bg-[#1b5a4a] border border-white/30 rounded-xl space-y-2 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-200 font-bold uppercase tracking-wider">Customers in Past 30 Days</span>
                    <span className="text-xs text-[#1f6e5c] font-bold">CUST</span>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-white">24,890</span>
                    <span className="text-xs font-bold text-emerald-400">+14% vs last month</span>
                  </div>
                  <div className="text-[9px] text-slate-300 font-light flex items-center gap-1.5 pt-1.5 border-t border-white/25">
                    <span className="w-2 h-2 rounded-full bg-[#1f6e5c]" />
                    <span>Ceramic Art & Pottery Ledger (HQ Sync active)</span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-4 bg-[#1b5a4a] border border-white/35 rounded-xl space-y-3 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-200 font-bold uppercase tracking-wider">Shopper Behavior (6+ Orders)</span>
                    <span className="text-xs text-emerald-400 font-bold">TREND</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>Frequent Buyers (6+ items)</span>
                      <span className="font-bold text-white">1,842 shoppers (18%)</span>
                    </div>
                    <div className="w-full bg-[#0f3d33] rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '18%' }} />
                    </div>
                  </div>
                </div>

                {/* Fallback image */}
                <div className="h-16 bg-[#1b5a4a] rounded-xl border border-white/30 p-2.5 flex items-center justify-between text-xs text-slate-200 relative z-10 overflow-hidden">
                  <div className="flex items-center gap-3">
                    <img 
                      src={logo} 
                      alt="MoCard Logo" 
                      onError={handleImgError}
                      className="w-10 h-10 object-contain p-1 rounded-xl bg-[#0f3d33] border border-white/20" 
                    />
                    <div>
                      <span className="font-bold text-white">Reporting Engine V2</span>
                      <p className="text-[9px] text-slate-300 font-light">Secure ledger monitoring rails.</p>
                    </div>
                  </div>
                  <span className="text-[#1f6e5c] font-bold text-xs">SYNC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup and Three Main Columns Section - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
            Quick and easy setup
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Our reporting and analytics tools are already included with your business account.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'More focused data',
              description: 'Get effective reports on everything you want to understand about sales, disputes, refunds, fees, and more. All your financial data is organized and presented in a clear, actionable format.'
            },
            {
              title: 'Customise your reports',
              description: 'Add filters to reflect time frame, transaction type, customer data, and other factors in your reports. Create custom views that match your specific business requirements and reporting needs.'
            },
            {
              title: 'Download or export reports',
              description: 'All of your reports can be downloaded or exported, right from your Business account. Choose from multiple formats including CSV, PDF, and XLS for maximum compatibility.'
            }
          ].map(({ title, description }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-md transition duration-250 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-[#1f6e5c] text-xs font-bold">
                  {title.substring(0, 8)}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* alternating sections - NO ICONS */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
              Manage today. Optimise tomorrow.
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Data that guides your next decision
            </h2>
          </div>

          {/* Block 1: Financial reports */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Simplifying Reconciliation</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Financial reports to simplify your accounting
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                Take the guesswork out of your financials with detailed reports and summaries that make reconciliation and accounting easy. Every transaction is tracked and categorized for seamless integration with your existing accounting workflows.
              </p>
              <div className="pt-2">
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f6e5c] text-white text-sm font-bold hover:bg-[#135244] transition duration-200"
                >
                  Learn About Settlement →
                </a>
              </div>
            </div>

            {/* Visual: UI of MoCard Balance Report - NO ICONS */}
            <div className="lg:col-span-7 bg-[#0f3d33] border border-white/20 rounded-2xl p-6 shadow-xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.08),transparent_50%)]" />
              <div className="flex justify-between items-center border-b border-white/20 pb-3 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">MoCard Balance Report</span>
                <span className="text-[10px] font-mono text-slate-400">Period: Aug 01 - Aug 17</span>
              </div>

              <div className="space-y-4 relative z-10 text-xs">
                <div className="grid grid-cols-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-white/20 pb-1">
                  <span>Balance Category</span>
                  <span className="text-right">Transaction Count</span>
                  <span className="text-right">Net Value (USD)</span>
                </div>
                
                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-white/10">
                  <span>Beginning Balance</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono font-bold">$12,450.00</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-white/10">
                  <span className="text-emerald-400 font-medium">Gross Payments Sync</span>
                  <span className="text-right font-mono">1,482 settled</span>
                  <span className="text-right font-mono text-emerald-400 font-bold">+$45,820.00</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-white/10">
                  <span className="text-slate-400">MoCard Network Fees</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono text-slate-400">-$916.40</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-white/10">
                  <span className="text-slate-400">Withdrawals / Payouts</span>
                  <span className="text-right font-mono">3 dispatches</span>
                  <span className="text-right font-mono">-$35,000.00</span>
                </div>

                <div className="grid grid-cols-3 py-2 font-bold text-white pt-2 border-t border-white/20">
                  <span>Ending Balance</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono text-[#1f6e5c]">$22,353.60</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 relative z-10 border-t border-white/20 pt-4">
                <span>Fully reconciled and certified ledger</span>
                <button className="text-white font-bold hover:text-[#1f6e5c] transition">
                  Export Ledger CSV
                </button>
              </div>
            </div>
          </div>

          {/* Block 2: Manage operations - NO ICONS */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 bg-[#0f3d33] border border-white/20 rounded-2xl p-6 shadow-xl text-left space-y-6 relative overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.08),transparent_50%)]" />
              <div className="flex justify-between items-center border-b border-white/20 pb-3 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Customer Demographics</span>
                <span className="text-[10px] font-mono text-slate-400">Last 30 Days</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 items-center relative z-10">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-200">
                      <span className="font-bold text-white">New Customers</span>
                      <span className="font-mono font-bold">15,431 (62%)</span>
                    </div>
                    <div className="w-full bg-[#0f3d33] rounded-full h-3 overflow-hidden">
                      <div className="bg-[#1f6e5c] h-full rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-200">
                      <span className="font-bold text-white">Returning Customers</span>
                      <span className="font-mono font-bold">9,459 (38%)</span>
                    </div>
                    <div className="w-full bg-[#0f3d33] rounded-full h-3 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>
                </div>

                <div className="bg-[#1b5a4a] border border-white/20 p-4 rounded-xl space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-200 border-b border-white/20 pb-1.5">Shopper Insights</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Conversion Rate</span>
                      <span className="font-mono font-bold text-white">4.82%</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Avg Cart Value</span>
                      <span className="font-mono font-bold text-white">$64.80</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-[10px] text-slate-200 relative z-10">
                <span className="bg-[#1b5a4a] border border-white/25 px-2.5 py-1 rounded-md">Filter: All Transactions</span>
                <span className="bg-[#1b5a4a] border border-white/25 px-2.5 py-1 rounded-md">Range: Aug 01 - Aug 30</span>
                <span className="bg-[#1b5a4a] border border-white/25 px-2.5 py-1 rounded-md">Mode: Active Production</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 text-left order-1 lg:order-2">
              <span className="text-xs font-bold text-[#1f6e5c] uppercase tracking-widest">Operations Management</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                Manage operations
              </h3>
              <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                Track everything from monthly sales activity to payment and transaction types with customisable filters. Get a complete view of your business performance and identify areas for improvement.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Customise your data',
                    description: 'Filter by date range, transaction type, or customer data. Get reports that work for your business and help you make informed decisions.'
                  },
                  {
                    title: 'Turn data into action',
                    description: 'Our analytics tools help you focus on the important aspects of your business and make sense of what it all means. Transform raw data into actionable insights.'
                  }
                ].map(({ title, description }) => (
                  <div key={title} className="flex gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 h-fit shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light mt-0.5">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* See what's already going well Section - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            See what's already going well
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-light">
            Monitor checkout success rates, identify issues, and understand shoppers before they purchase. Data-driven insights to help you grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "See what's already going well",
              description: 'Get a snapshot of what\'s already working for your business with things like transaction data and checkout success rate. Identify your strongest performing products and payment methods.'
            },
            {
              title: 'Spot opportunities for improvement',
              description: 'Monitor transaction success, fix errors, and understand customers. Pinpoint bottlenecks in your checkout flow and address them before they impact your bottom line.'
            },
            {
              title: 'Understand your shoppers',
              description: 'With a little bit of code, Shopper Insights can help you find out what your shoppers are doing before they get to checkout. Understand their journey and optimize for conversion.'
            }
          ].map(({ title, description }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition duration-250 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-[#1f6e5c] uppercase tracking-wider bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                  {title.includes('Success') ? '98.9% Success Rate' : 
                   title.includes('opportunities') ? '0.04% Error Rate' : 
                   'Shopper Insights v2'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 pt-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools to grow your business - NO ICONS */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">
              Grow Your Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Tools to grow your business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Invoicing - NO ICONS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250 text-left">
              <div className="space-y-6">
                <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/25 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>MoCard Invoice Relay</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-bold uppercase tracking-wider">Dispatched</span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-300">Requested Invoice Amount</span>
                    <div className="text-3xl font-black text-white">$129.70 USD</div>
                    <p className="text-[9px] text-slate-400 font-light">Client: billing@enterprise.com</p>
                  </div>

                  <div className="py-2.5 bg-[#1b5a4a] border border-white/20 rounded-xl px-3 flex justify-between items-center text-[9px] text-slate-200">
                    <span>Invoice link ready to share</span>
                    <span className="text-emerald-500 font-bold">✓</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Send invoices and get paid fast</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Send invoices in minutes. Customers can pay fast even if they don't have a MoCard account. Track invoice status, send automated reminders, and reconcile payments seamlessly.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Invoicing →
                </a>
              </div>
            </div>

            {/* Card 2: Simple, secure checkout - NO ICONS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250 text-left">
              <div className="space-y-6">
                <div className="bg-[#0f3d33] rounded-xl p-4 border border-white/25 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url(${devices})` }} />
                  
                  <div className="flex justify-between items-center text-[10px] text-slate-400 relative z-10">
                    <span>MoCard Secure Pay</span>
                    <span className="text-[#1f6e5c] text-xs font-bold">SECURE</span>
                  </div>

                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] uppercase font-bold text-slate-300">Checkout Integration</span>
                    <div className="text-lg font-black text-white">Instant Payment Rails</div>
                  </div>

                  <div className="py-2.5 bg-[#1f6e5c] rounded-xl text-center text-[10px] text-white font-bold shadow-md shadow-[#1f6e5c]/20 relative z-10">
                    Pay with MoCard
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">Simple, secure checkout</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Offer millions of customers the checkout experience with their preferred ways to pay. Support for credit cards, digital wallets, and local payment methods in 200+ markets.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/online-checkouts" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c] hover:text-[#135244] transition"
                >
                  Explore Online Checkout →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - expanded answers */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1f6e5c]">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">{item.answer}</p>
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