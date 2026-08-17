import React, { useState } from 'react';
import { 
  LayoutDashboard, Key, ShieldCheck, Database, Terminal, 
  Settings, ArrowRight, BarChart3, Activity, CreditCard, Send, 
  Layers, CheckCircle2, ChevronRight, Play, Server, Lock, RefreshCw, Clock
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import local dashboard screenshots
import dashboardImg1 from '../assets/mocard_dashboard1.png';
import dashboardImg2 from '../assets/mocard_dashboard2.webp';
import dashboardImg3 from '../assets/mocard_dashboard3.webp';

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState('all'); // all | 2026 | 2025 | 2024 | 2023 | 2022
  const [metric, setMetric] = useState('amount'); // amount | transactions
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2000);
  };

  const chartData = {
    all: {
      amount: [
        { label: '2022', value: 480000, display: '$480,000' },
        { label: '2023', value: 650000, display: '$650,000' },
        { label: '2024', value: 980000, display: '$980,000' },
        { label: '2025', value: 1200000, display: '$1,200,000' },
        { label: '2026', value: 1425800, display: '$1,425,800' }
      ],
      transactions: [
        { label: '2022', value: 4100, display: '4,100 tx' },
        { label: '2023', value: 5200, display: '5,200 tx' },
        { label: '2024', value: 8400, display: '8,400 tx' },
        { label: '2025', value: 11200, display: '11,200 tx' },
        { label: '2026', value: 12800, display: '12,800 tx' }
      ]
    },
    '2026': {
      amount: [
        { label: 'Jan', value: 120000, display: '$120,000' },
        { label: 'Feb', value: 150000, display: '$150,000' },
        { label: 'Mar', value: 220000, display: '$220,000' },
        { label: 'Apr', value: 180000, display: '$180,000' },
        { label: 'May', value: 250000, display: '$250,000' },
        { label: 'Jun', value: 160000, display: '$160,000' },
        { label: 'Jul', value: 210000, display: '$210,000' },
        { label: 'Aug', value: 135800, display: '$135,800' }
      ],
      transactions: [
        { label: 'Jan', value: 1050, display: '1,050 tx' },
        { label: 'Feb', value: 1120, display: '1,120 tx' },
        { label: 'Mar', value: 1540, display: '1,540 tx' },
        { label: 'Apr', value: 1320, display: '1,320 tx' },
        { label: 'May', value: 1840, display: '1,840 tx' },
        { label: 'Jun', value: 1420, display: '1,420 tx' },
        { label: 'Jul', value: 1650, display: '1,650 tx' },
        { label: 'Aug', value: 1210, display: '1,210 tx' }
      ]
    },
    '2025': {
      amount: [
        { label: 'Jan', value: 80000, display: '$80,000' },
        { label: 'Feb', value: 95000, display: '$95,000' },
        { label: 'Mar', value: 110000, display: '$110,000' },
        { label: 'Apr', value: 105000, display: '$105,000' },
        { label: 'May', value: 130000, display: '$13,000' },
        { label: 'Jun', value: 120000, display: '$120,000' },
        { label: 'Jul', value: 145000, display: '$145,000' },
        { label: 'Aug', value: 150000, display: '$150,000' },
        { label: 'Sep', value: 138000, display: '$138,000' },
        { label: 'Oct', value: 160000, display: '$160,000' },
        { label: 'Nov', value: 172000, display: '$172,000' },
        { label: 'Dec', value: 195000, display: '$195,000' }
      ],
      transactions: [
        { label: 'Jan', value: 650, display: '650 tx' },
        { label: 'Feb', value: 720, display: '720 tx' },
        { label: 'Mar', value: 880, display: '880 tx' },
        { label: 'Apr', value: 800, display: '800 tx' },
        { label: 'May', value: 980, display: '980 tx' },
        { label: 'Jun', value: 920, display: '920 tx' },
        { label: 'Jul', value: 1100, display: '1,100 tx' },
        { label: 'Aug', value: 1150, display: '1,150 tx' },
        { label: 'Sep', value: 980, display: '980 tx' },
        { label: 'Oct', value: 1120, display: '1,120 tx' },
        { label: 'Nov', value: 1250, display: '1,250 tx' },
        { label: 'Dec', value: 1450, display: '1,450 tx' }
      ]
    },
    '2024': {
      amount: [
        { label: 'Jan', value: 60000, display: '$60,000' },
        { label: 'Feb', value: 72000, display: '$72,000' },
        { label: 'Mar', value: 85000, display: '$85,000' },
        { label: 'Apr', value: 80000, display: '$80,000' },
        { label: 'May', value: 98000, display: '$98,000' },
        { label: 'Jun', value: 92000, display: '$92,000' },
        { label: 'Jul', value: 110000, display: '$110,000' },
        { label: 'Aug', value: 115000, display: '$115,000' },
        { label: 'Sep', value: 105000, display: '$105,000' },
        { label: 'Oct', value: 120000, display: '$120,000' },
        { label: 'Nov', value: 130000, display: '$130,000' },
        { label: 'Dec', value: 148000, display: '$148,000' }
      ],
      transactions: [
        { label: 'Jan', value: 480, display: '480 tx' },
        { label: 'Feb', value: 550, display: '550 tx' },
        { label: 'Mar', value: 650, display: '650 tx' },
        { label: 'Apr', value: 620, display: '620 tx' },
        { label: 'May', value: 740, display: '740 tx' },
        { label: 'Jun', value: 700, display: '700 tx' },
        { label: 'Jul', value: 820, display: '820 tx' },
        { label: 'Aug', value: 850, display: '850 tx' },
        { label: 'Sep', value: 780, display: '780 tx' },
        { label: 'Oct', value: 900, display: '900 tx' },
        { label: 'Nov', value: 950, display: '950 tx' },
        { label: 'Dec', value: 1060, display: '1,060 tx' }
      ]
    },
    '2023': {
      amount: [
        { label: 'Jan', value: 45000, display: '$45,000' },
        { label: 'Feb', value: 51000, display: '$51,000' },
        { label: 'Mar', value: 60000, display: '$60,000' },
        { label: 'Apr', value: 58000, display: '$58,000' },
        { label: 'May', value: 72000, display: '$72,000' },
        { label: 'Jun', value: 68000, display: '$68,000' },
        { label: 'Jul', value: 80000, display: '$80,000' },
        { label: 'Aug', value: 85000, display: '$85,000' },
        { label: 'Sep', value: 79000, display: '$79,000' },
        { label: 'Oct', value: 90000, display: '$90,000' },
        { label: 'Nov', value: 98000, display: '$98,005' },
        { label: 'Dec', value: 112000, display: '$112,000' }
      ],
      transactions: [
        { label: 'Jan', value: 300, display: '300 tx' },
        { label: 'Feb', value: 330, display: '330 tx' },
        { label: 'Mar', value: 400, display: '400 tx' },
        { label: 'Apr', value: 380, display: '380 tx' },
        { label: 'May', value: 480, display: '480 tx' },
        { label: 'Jun', value: 450, display: '450 tx' },
        { label: 'Jul', value: 520, display: '520 tx' },
        { label: 'Aug', value: 550, display: '550 tx' },
        { label: 'Sep', value: 500, display: '500 tx' },
        { label: 'Oct', value: 600, display: '600 tx' },
        { label: 'Nov', value: 650, display: '650 tx' },
        { label: 'Dec', value: 750, display: '750 tx' }
      ]
    },
    '2022': {
      amount: [
        { label: 'Jan', value: 30000, display: '$30,000' },
        { label: 'Feb', value: 35000, display: '$35,000' },
        { label: 'Mar', value: 42000, display: '$42,000' },
        { label: 'Apr', value: 40000, display: '$40,000' },
        { label: 'May', value: 50000, display: '$50,000' },
        { label: 'Jun', value: 48000, display: '$48,000' },
        { label: 'Jul', value: 55000, display: '$55,000' },
        { label: 'Aug', value: 60000, display: '$60,000' },
        { label: 'Sep', value: 57000, display: '$57,000' },
        { label: 'Oct', value: 65000, display: '$65,000' },
        { label: 'Nov', value: 72000, display: '$72,000' },
        { label: 'Dec', value: 85000, display: '$85,000' }
      ],
      transactions: [
        { label: 'Jan', value: 200, display: '200 tx' },
        { label: 'Feb', value: 240, display: '240 tx' },
        { label: 'Mar', value: 280, display: '280 tx' },
        { label: 'Apr', value: 260, display: '260 tx' },
        { label: 'May', value: 320, display: '320 tx' },
        { label: 'Jun', value: 300, display: '300 tx' },
        { label: 'Jul', value: 360, display: '360 tx' },
        { label: 'Aug', value: 400, display: '400 tx' },
        { label: 'Sep', value: 380, display: '380 tx' },
        { label: 'Oct', value: 420, display: '420 tx' },
        { label: 'Nov', value: 480, display: '480 tx' },
        { label: 'Dec', value: 550, display: '550 tx' }
      ]
    }
  };

  const transactions = [
    { id: 'TX-10924', customer: 'Kigali Booking Group', method: 'MTN Mobile Money', amount: '120,000 RWF', status: 'success', date: 'Today, 11:24 AM' },
    { id: 'TX-10923', customer: 'Satguru Eco-Tours', method: 'Visa Credit Card', amount: '450.00 USD', status: 'success', date: 'Today, 09:12 AM' },
    { id: 'TX-10922', customer: 'Airtel Payout Client', method: 'Airtel Money Payout', amount: '80,000 RWF', status: 'pending', date: 'Yesterday, 04:35 PM' },
    { id: 'TX-10921', customer: 'Norrsken Foundation Hub', method: 'Mastercard debit', amount: '1,200.00 USD', status: 'success', date: 'Aug 11, 2026' }
  ];

  const consoleFeatures = [
    {
      title: "Consolidated Business Metrics",
      desc: "Track revenue volume, payment success rates, and operational performance across your business in one live summary view.",
      icon: LayoutDashboard,
      badge: "Real-time Analytics"
    },
    {
      title: "Secure Access & Team Controls",
      desc: "Set permissions by role, control who can approve payouts or review transactions, and keep access secure across teams.",
      icon: Key,
      badge: "Access Controls"
    },
    {
      title: "Automated Payment Workflows",
      desc: "Connect your CRM, ERP, or internal operations tools to payment flows so teams can move faster with fewer manual steps.",
      icon: Database,
      badge: "Business Integrations"
    },
    {
      title: "Audit Trail & Payment Oversight",
      desc: "Review every transaction event, monitor exceptions, and trace payment activity with clear accountability for every operational decision.",
      icon: Terminal,
      badge: "Operational Insight"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      <Navbar />

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-300 font-outfit text-sm font-semibold flex items-center space-x-2 border border-slate-800">
          <ShieldCheck className="w-4.5 h-4.5 text-pp-blue" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0c1e1a] via-[#102a25] to-[#1a4a40] text-white pt-36 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(67,118,108,0.12),transparent_45%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-brand-light bg-pp-brand/20 px-4.5 py-1.5 rounded-full border border-pp-brand-light/20">
              Business Command Center
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-[1.1] max-w-3xl">
              A Unified Payments Dashboard Built for Business Growth
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Track revenue, monitor payment flows, and manage operations from one clear view. Everything your team needs to run faster, safer, and more efficiently in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto font-outfit font-bold pt-2">
              <a 
                href="/sandbox" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-pp-blue text-white text-sm hover:brightness-110 transition duration-200 text-center shadow-md shadow-pp-blue/20"
              >
                View Live Business Dashboard
              </a>
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-pp-brand-light/35 text-slate-200 text-sm hover:bg-white/5 hover:text-white transition duration-200 text-center bg-transparent"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Chart & Transaction Widget (Interactive Advertising component) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Business Performance Overview
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Review your payment volume, transaction activity, and revenue momentum across the periods that matter most to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Activity Analytics Bar Chart (Big Width) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-md p-6 space-y-6 flex flex-col justify-between min-h-[460px]">
            
            {/* Chart Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold font-outfit text-slate-900 text-lg">Sync Activity Analytics</h3>
                
                {/* Metric Toggle Dropdown */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <select 
                      value={metric}
                      onChange={(e) => setMetric(e.target.value)}
                      className="bg-slate-105 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-1.5 rounded-xl outline-none cursor-pointer hover:bg-slate-100 transition duration-200"
                    >
                      <option value="amount">Volume (USD/RWF)</option>
                      <option value="transactions">Transactions Count</option>
                    </select>
                  </div>

                  {/* Year selection dropdown */}
                  <div className="relative">
                    <select 
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="bg-slate-900 border border-slate-800 text-white text-xs font-bold font-outfit px-3.5 py-1.5 rounded-xl outline-none cursor-pointer hover:bg-slate-800 transition duration-200"
                    >
                      <option value="all">All Years (2022 - Now)</option>
                      <option value="2026">2026 (Current)</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Current scope description */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-455 font-medium">
                <span>Showing {metric === 'amount' ? 'revenue volume' : 'transaction activity'}</span>
                <span className="font-semibold text-slate-600 font-outfit">
                  {selectedYear === 'all' ? 'Annual Performance (2022-Present)' : `Monthly Performance for ${selectedYear}`}
                </span>
              </div>
            </div>

            {/* Chart Graphical Plot Area */}
            <div className="relative h-60 flex items-end justify-between px-2 pt-6">
              {/* Dotted horizontal gridlines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2 border-b border-slate-100">
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
              </div>

              {/* Dynamic Bar rendering */}
              {(() => {
                const currentData = chartData[selectedYear][metric];
                const maxValue = Math.max(...currentData.map(d => d.value));
                return currentData.map((item, index) => {
                  const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1 h-full group justify-end relative">
                      {/* Value tooltip on hover */}
                      <div className="absolute bottom-full mb-2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 whitespace-nowrap shadow-md scale-90 group-hover:scale-100 transform origin-bottom">
                        {item.display}
                      </div>
                      
                      {/* Inner graphical bar */}
                      <div className="w-8 sm:w-10 bg-slate-50 rounded-t-lg h-full flex flex-col justify-end relative z-10">
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className="bg-gradient-to-t from-pp-blue to-cyan-500 w-full rounded-t-lg transition-all duration-500 ease-out group-hover:brightness-110 shadow-xs"
                        />
                      </div>

                      {/* Label */}
                      <span className="text-[10px] font-bold text-slate-455 mt-2 font-outfit tracking-wide">{item.label}</span>
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          {/* Right Side: Recent Transactions Showcase */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl shadow-md overflow-hidden min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-bold font-outfit text-slate-900 text-lg">Recent Payment Activity</h3>
                <button 
                  onClick={() => showToast('Payments refreshed!')}
                  className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-500 transition cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {transactions.map((tx) => (
                  <div key={tx.id} className="p-4.5 flex items-center justify-between hover:bg-slate-50/50 transition">
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2.5 rounded-xl border ${tx.status === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-amber-50 border-amber-100 text-amber-550'}`}>
                        {tx.status === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 font-outfit">{tx.customer}</p>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">{tx.id} • {tx.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-800 font-mono">{tx.amount}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">{tx.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 text-center">
              <a href="/sandbox" className="text-xs font-bold text-pp-blue hover:underline font-outfit flex items-center justify-center space-x-1.5">
                <span>View all business transactions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Workspace Screenshot Showcase Section (Stacked Block Tour, Alternate Rows) */}
      {/* Visual Workspace Screenshot Showcase Section (Stacked Block Tour, Alternate Rows) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0b1716] to-[#0e2220] text-white relative overflow-hidden border-t border-pp-brand-light/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pp-brand/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-pp-brand-light uppercase tracking-widest font-outfit block">Business Overview</span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit">Explore the MoCard Business Workspace</h2>
            <p className="text-slate-300 text-sm md:text-base font-light">
              See the payment dashboard your team uses to monitor revenue, track operational health, and make faster decisions with confidence.
            </p>
          </div>

          {/* Screenshot Row 1 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-pp-brand-light uppercase tracking-wider font-outfit">Operations Snapshot</span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit">Primary Business Dashboard</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light font-sans">
                Get a consolidated picture of current transaction performance, revenue trends, settlement activity, and payment health across your business in one clean view.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#132c28] border border-pp-brand-light/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-pp-brand-light/10 px-4.5 py-3 flex items-center space-x-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 font-mono pl-4">mocard.link/console/overview</span>
                </div>
                <div className="aspect-[16/10] bg-[#102522] overflow-hidden">
                  <img src={dashboardImg1} alt="Primary Console Dashboard" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Row 2 (Alternating Columns) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#132c28] border border-pp-brand-light/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-pp-brand-light/10 px-4.5 py-3 flex items-center space-x-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 font-mono pl-4">mocard.link/console/connections</span>
                </div>
                <div className="aspect-[16/10] bg-[#102522] overflow-hidden">
                  <img src={dashboardImg2} alt="API Connections Hub" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold text-pp-brand-light uppercase tracking-wider font-outfit">Payment Access</span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit">Service Connections Hub</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light font-sans">
                Connect your preferred payment rails, manage partner access, and monitor every operational handoff without slowing down your business workflows.
              </p>
            </div>
          </div>

          {/* Screenshot Row 3 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-pp-brand-light uppercase tracking-wider font-outfit">Financial controls</span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit">Operational Audit Trail</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light font-sans">
                Review payment events, investigate failed transactions, monitor exceptions, and keep a clear record of every action taken across your operations.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#132c28] border border-pp-brand-light/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-pp-brand-light/10 px-4.5 py-3 flex items-center space-x-2 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-500 font-mono pl-4">mocard.link/console/logs-audit</span>
                </div>
                <div className="aspect-[16/10] bg-[#102522] overflow-hidden">
                  <img src={dashboardImg3} alt="Operations Audit Logs" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Console Features Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-white">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Full Console Infrastructure Capabilities
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            We handle key provisioning, encryption routing, and carrier retries so you have full operational clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {consoleFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:border-slate-350 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-default">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-pp-blue flex items-center justify-center">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider font-outfit border border-transparent">
                    {feat.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-outfit text-pp-black">{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-20 bg-pp-brand-dark text-white relative overflow-hidden border-t border-pp-brand-light/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black font-outfit leading-tight">
            Ready to See Your Business in Motion?
          </h2>
          <p className="text-slate-200 text-sm md:text-base max-w-lg mx-auto font-light">
            Explore a live view of your payment operations, revenue performance, and customer activity from a dashboard built for business teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-outfit font-bold">
            <a href="/sandbox" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-pp-blue text-white hover:brightness-110 transition duration-200 text-center text-sm shadow-md shadow-pp-blue/20">
              View Business Dashboard
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-pp-brand-light/35 text-slate-200 hover:bg-white/5 transition duration-200 text-center text-sm bg-transparent">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
