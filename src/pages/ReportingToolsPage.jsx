import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  BarChart3, 
  Search, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Database, 
  Settings, 
  Activity, 
  FileText, 
  CheckCircle2, 
  DollarSign, 
  AlertCircle, 
  ChevronRight, 
  Download, 
  RefreshCw, 
  Filter, 
  HelpCircle,
  Users,
  TrendingUp,
  PieChart,
  Percent,
  Lock,
  Sparkles
} from 'lucide-react';

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
  const [timeframe, setTimeframe] = useState('30days'); // '7days' | '30days' | '12months'
  const [transactionType, setTransactionType] = useState('all'); // 'all' | 'sales' | 'refunds'
  const [isExporting, setIsExporting] = useState(false);

  // FAQ data matching the reporting theme
  const faqs = [
    {
      question: 'How do I access my Business Reporting Tools?',
      answer: 'Our reporting and analytics tools are already included with your MoCard Business account. Simply log into your dashboard and navigate to the "Reporting" or "Analytics" tab to view real-time logs.'
    },
    {
      question: 'Can I customise the reports I download?',
      answer: 'Yes! You can add filters to reflect specific time frames, transaction types, customer regions, and individual currencies. These filtered views can then be exported as custom spreadsheets.'
    },
    {
      question: 'In what formats can I export my financial statements?',
      answer: 'MoCard supports exporting reports in standard CSV, PDF, and XLS formats, making it easy to sync transaction histories directly into accounting software like QuickBooks or Xero.'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#0b1716] via-[#102724] to-[#1d413b] text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="inline-flex items-center bg-pp-brand/20 border border-pp-brand-light/30 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-pp-brand-light font-outfit">
                <Sparkles className="w-3.5 h-3.5 mr-2 animate-pulse text-pp-brand-light" />
                Business Reporting Tools
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-[1.08] text-white">
                You run your business.<br />
                We’ll run the numbers.
              </h1>
              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
                Get the data and analytics you need to run and better understand your business with a MoCard Business account.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-pp-blue text-white text-sm font-bold font-outfit hover:brightness-110 transition duration-250 text-center shadow-md shadow-pp-blue/20"
                >
                  Contact Sales
                </a>
              </div>
            </div>

            {/* Right Graphic Module: UI sales insight screen (Logo Brand Styled) */}
            <div className="lg:col-span-6 w-full max-w-md mx-auto">
              <div className="bg-pp-brand-dark border border-pp-brand-light/20 rounded-3xl p-5 shadow-2xl space-y-5 text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url(${pay})` }} />
                
                {/* Header info */}
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-outfit">Sales Insights</h3>
                    <p className="text-[10px] text-slate-400">Trailing 30 Days</p>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-450 rounded-xl text-[10px] font-bold font-outfit">
                    Active Account
                  </span>
                </div>

                {/* Stat 1: Customers past 30 days */}
                <div className="p-4 bg-pp-brand border border-pp-brand-light/30 rounded-2xl space-y-2 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-200 font-bold uppercase tracking-wider font-outfit">Customers in Past 30 Days</span>
                    <Users className="w-4 h-4 text-pp-blue" />
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-white font-outfit">24,890</span>
                    <span className="text-xs font-bold text-emerald-400">+14% vs last month</span>
                  </div>
                  {/* Backdrop overlay mention: Ceramics and pottery on shelves with overlay */}
                  <div className="text-[9px] text-slate-300 font-light flex items-center gap-1.5 pt-1.5 border-t border-pp-brand-light/25">
                    <span className="w-2 h-2 rounded-full bg-pp-blue" />
                    <span>Ceramic Art & Pottery Ledger (HQ Sync active)</span>
                  </div>
                </div>

                {/* Stat 2: Shopper behavior with 6+ orders */}
                <div className="p-4 bg-pp-brand border border-pp-brand-light/35 rounded-2xl space-y-3 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-slate-200 font-bold uppercase tracking-wider font-outfit">Shopper Behavior (6+ Orders)</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  
                  {/* Simulated Shopper Loyalty Chart */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-slate-300">
                      <span>Frequent Buyers (6+ items)</span>
                      <span className="font-bold text-white">1,842 shoppers (18%)</span>
                    </div>
                    <div className="w-full bg-pp-brand-dark rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '18%' }} />
                    </div>
                  </div>
                </div>

                {/* Fallback image display area as requested */}
                <div className="h-16 bg-pp-brand rounded-2xl border border-pp-brand-light/30 p-2.5 flex items-center justify-between text-xs text-slate-200 relative z-10 overflow-hidden">
                  <div className="flex items-center gap-3">
                    <img 
                      src={logo} 
                      alt="MoCard Logo" 
                      onError={handleImgError}
                      className="w-10 h-10 object-contain p-1 rounded-xl bg-pp-brand-dark border border-pp-brand-light/20" 
                    />
                    <div>
                      <span className="font-bold text-white font-outfit">Reporting Engine V2</span>
                      <p className="text-[9px] text-slate-300 font-light">Secure ledger monitoring rails.</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-pp-blue shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup and Three Main Columns Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
            Quick and easy setup
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Our reporting and analytics tools are already included with your business account.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'More focused data',
              description: 'Get effective reports on everything you want to understand about sales, disputes, refunds, fees, and more.',
              icon: FileText
            },
            {
              title: 'Customise your reports',
              description: 'Add filters to reflect time frame, transaction type, customer data, and other factors in your reports.',
              icon: Filter
            },
            {
              title: 'Download or export reports',
              description: 'All of your reports can be downloaded or exported, right from your Business account.',
              icon: Download
            }
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-md transition duration-250 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-2xl bg-white border border-slate-200 text-pp-blue">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-outfit text-pp-black">{title}</h3>
                <p className="text-slate-555 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* alternating sections: Manage today. Optimise tomorrow. */}
      <section className="bg-slate-55 py-20 md:py-24 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
              Manage today. Optimise tomorrow.
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
              Data that guides your next decision
            </h2>
          </div>

          {/* Block 1: Financial reports to simplify your accounting */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Description */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Simplifying Reconciliation</span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">
                Financial reports to simplify your accounting
              </h3>
              <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed">
                Take the guesswork out of your financials with detailed reports and summaries that make reconciliation and accounting easy.
              </p>
              <div className="pt-2">
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pp-brand text-white text-sm font-bold hover:bg-pp-brand-dark transition duration-200 font-outfit font-bold"
                >
                  Learn About Settlement <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual: UI of MoCard Balance Report (Logo Brand Sage Styled) */}
            <div className="lg:col-span-7 bg-pp-brand-dark border border-pp-brand-light/20 rounded-3xl p-6 shadow-xl text-left space-y-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,112,224,0.08),transparent_50%)]" />
              <div className="flex justify-between items-center border-b border-pp-brand-light/20 pb-3 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 font-outfit">MoCard Balance Report</span>
                <span className="text-[10px] font-mono text-slate-400">Period: Aug 01 - Aug 17</span>
              </div>

              {/* Balance ledger mockup */}
              <div className="space-y-4 relative z-10 font-sans text-xs">
                <div className="grid grid-cols-3 text-[10px] font-bold text-slate-350 uppercase tracking-wider font-outfit border-b border-pp-brand-light/20 pb-1">
                  <span>Balance Category</span>
                  <span className="text-right">Transaction Count</span>
                  <span className="text-right">Net Value (USD)</span>
                </div>
                
                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-pp-brand-light/10">
                  <span>Beginning Balance</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono font-bold">$12,450.00</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-pp-brand-light/10">
                  <span className="text-emerald-400 font-medium">Gross Payments Sync</span>
                  <span className="text-right font-mono">1,482 settled</span>
                  <span className="text-right font-mono text-emerald-400 font-bold">+$45,820.00</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-pp-brand-light/10">
                  <span className="text-slate-400">MoCard Network Fees</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono text-slate-450">-$916.40</span>
                </div>

                <div className="grid grid-cols-3 py-1 text-slate-300 font-light border-b border-pp-brand-light/10">
                  <span className="text-slate-400">Withdrawals / Payouts</span>
                  <span className="text-right font-mono">3 dispatches</span>
                  <span className="text-right font-mono">-$35,000.00</span>
                </div>

                <div className="grid grid-cols-3 py-2 font-bold font-outfit text-white pt-2 border-t border-pp-brand-light/20">
                  <span>Ending Balance</span>
                  <span className="text-right font-mono">--</span>
                  <span className="text-right font-mono text-pp-blue-light">$22,353.60</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400 relative z-10 border-t border-pp-brand-light/20 pt-4">
                <span>Fully reconciled and certified ledger</span>
                <button className="flex items-center gap-1.5 text-white font-bold hover:text-pp-blue transition font-outfit">
                  <Download className="w-3.5 h-3.5" /> Export Ledger CSV
                </button>
              </div>
            </div>
          </div>

          {/* Block 2: Manage operations */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual: UI of data in last 30 days showing new vs returning customers (Logo Brand Styled) */}
            <div className="lg:col-span-7 bg-pp-brand-dark border border-pp-brand-light/20 rounded-3xl p-6 shadow-xl text-left space-y-6 relative overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,112,224,0.08),transparent_50%)]" />
              <div className="flex justify-between items-center border-b border-pp-brand-light/20 pb-3 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 font-outfit">Customer Demographics</span>
                <span className="text-[10px] font-mono text-slate-450">Last 30 Days</span>
              </div>

              {/* Visual chart comparison: new vs returning */}
              <div className="grid sm:grid-cols-2 gap-6 items-center relative z-10">
                
                {/* Horizontal progress representation */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-200">
                      <span className="font-bold font-outfit text-white">New Customers</span>
                      <span className="font-mono font-bold">15,431 (62%)</span>
                    </div>
                    <div className="w-full bg-pp-brand rounded-full h-3 overflow-hidden">
                      <div className="bg-pp-blue h-full rounded-full" style={{ width: '62%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-200">
                      <span className="font-bold font-outfit text-white">Returning Customers</span>
                      <span className="font-mono font-bold">9,459 (38%)</span>
                    </div>
                    <div className="w-full bg-pp-brand rounded-full h-3 overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full" style={{ width: '38%' }} />
                    </div>
                  </div>
                </div>

                {/* Summary boxes */}
                <div className="bg-pp-brand border border-pp-brand-light/20 p-4 rounded-2xl space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-200 font-outfit border-b border-pp-brand-light/20 pb-1.5">Shopper Insights</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-250">
                      <span>Conversion Rate</span>
                      <span className="font-mono font-bold text-white">4.82%</span>
                    </div>
                    <div className="flex justify-between text-slate-250">
                      <span>Avg Cart Value</span>
                      <span className="font-mono font-bold text-white">$64.80</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom filters as requested */}
              <div className="pt-4 border-t border-pp-brand-light/20 flex flex-wrap gap-2 text-[10px] text-slate-200 relative z-10">
                <span className="bg-pp-brand border border-pp-brand-light/25 px-2.5 py-1 rounded-md">Filter: All Transactions</span>
                <span className="bg-pp-brand border border-pp-brand-light/25 px-2.5 py-1 rounded-md">Range: Aug 01 - Aug 30</span>
                <span className="bg-pp-brand border border-pp-brand-light/25 px-2.5 py-1 rounded-md">Mode: Active Production</span>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-5 space-y-6 text-left order-1 lg:order-2">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit">Operations Management</span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit text-pp-black">
                Manage operations
              </h3>
              <p className="text-slate-555 text-sm md:text-base font-light leading-relaxed">
                Track everything from monthly sales activity to payment and transaction types with customisable filters.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Customise your data',
                    description: 'Filter by date range, transaction type, or customer data. Get reports that work for your business.'
                  },
                  {
                    title: 'Turn data into action',
                    description: 'Our analytics tools help you focus on the important aspects of your business and make sense of what it all means.'
                  }
                ].map(({ title, description }) => (
                  <div key={title} className="flex gap-3">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 h-fit shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-outfit text-pp-black">{title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed font-light mt-0.5">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* See what's already going well Section */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            See what’s already going well
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-light">
            Monitor checkout success rates, identify issues, and understand shoppers before they purchase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'See what’s already going well',
              description: 'Get a snapshot of what’s already working for your business with things like transaction data and checkout success rate.',
              metric: '98.9% Success Rate'
            },
            {
              title: 'Spot opportunities for improvement',
              description: 'Monitor transaction success, fix errors, and understand customers.',
              metric: '0.04% Error Rate'
            },
            {
              title: 'Understand your shoppers',
              description: 'With a little bit of code, Shopper Insights can help you find out what your shoppers are doing before they get to checkout.',
              metric: 'Shopper Insights v2'
            }
          ].map(({ title, description, metric }) => (
            <div key={title} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition duration-250 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold text-pp-blue uppercase tracking-wider font-outfit bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  {metric}
                </span>
                <h3 className="text-lg font-bold font-outfit text-pp-black pt-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools to grow your business - invoices/checkouts */}
      <section className="bg-slate-50 py-20 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">
              Grow Your Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
              Tools to grow your business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Invoicing */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250 text-left">
              <div className="space-y-6">
                {/* Phone mockup with balance sent (Logo Brand Styled) */}
                <div className="bg-pp-brand-dark rounded-2xl p-4 border border-pp-brand-light/25 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>MoCard Invoice Relay</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-450 rounded-full font-bold uppercase tracking-wider">Dispatched</span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-300 font-outfit">Requested Invoice Amount</span>
                    <div className="text-3xl font-black text-white font-outfit">$129.70 USD</div>
                    <p className="text-[9px] text-slate-350 font-light">Client: billing@enterprise.com</p>
                  </div>

                  <div className="py-2.5 bg-pp-brand border border-pp-brand-light/20 rounded-xl px-3 flex justify-between items-center text-[9px] text-slate-200">
                    <span>Invoice link ready to share</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-outfit text-pp-black">Send invoices and get paid fast</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Send invoices in minutes. Customers can pay fast even if they don't have a MoCard account.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit font-bold"
                >
                  Explore Invoicing <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Simple, secure checkout */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition duration-250 text-left">
              <div className="space-y-6">
                {/* Checkout widget overlay (Logo Brand Styled) */}
                <div className="bg-pp-brand-dark rounded-2xl p-4 border border-pp-brand-light/25 shadow-md relative overflow-hidden h-48 flex flex-col justify-between">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" style={{ backgroundImage: `url(${devices})` }} />
                  
                  <div className="flex justify-between items-center text-[10px] text-slate-400 relative z-10">
                    <span>MoCard Secure Pay</span>
                    <Lock className="w-3.5 h-3.5 text-pp-blue" />
                  </div>

                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] uppercase font-bold text-slate-300 font-outfit">Checkout Integration</span>
                    <div className="text-lg font-black text-white font-outfit">Instant Payment Rails</div>
                  </div>

                  <div className="py-2.5 bg-pp-blue rounded-xl text-center text-[10px] text-white font-bold font-outfit shadow-md shadow-pp-blue/20 relative z-10">
                    Pay with MoCard
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-outfit text-pp-black">Simple, secure checkout</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Offer millions of customers the checkout experience with their preferred ways to pay.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="/online-checkouts" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-pp-blue hover:text-pp-blue-dark transition font-outfit font-bold"
                >
                  Explore Online Checkout <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black font-outfit text-pp-black">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
              <h3 className="text-lg font-bold font-outfit text-pp-black mb-2">{item.question}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-pp-brand-dark text-white py-24 relative overflow-hidden border-t border-pp-brand-light/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.12),transparent_45%)]" />
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-pp-brand border border-pp-brand-light/20 text-pp-blue font-bold">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-outfit leading-tight">
            One platform for all business
          </h2>
          <p className="text-2xl md:text-3xl font-bold font-outfit text-slate-200">
            Get paid. Get growing. Get ahead.
          </p>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Do more with the platform designed to power commerce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit font-bold">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-pp-blue hover:brightness-110 text-white transition duration-200 text-center text-sm shadow-md shadow-pp-blue/20">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
