import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import local dashboard screenshots
import dashboardImg1 from '../assets/mocard_dashboard1.png';
import dashboardImg2 from '../assets/mocard_dashboard2.webp';
import dashboardImg3 from '../assets/mocard_dashboard3.webp';

export default function DashboardPage() {
  const consoleFeatures = [
    {
      title: "Consolidated Business Metrics",
      desc: "Track revenue volume, payment success rates, and operational performance across your business in one live summary view. Get real-time insights into your payment flows and identify trends before they impact your bottom line.",
      badge: "Real-time Analytics"
    },
    {
      title: "Secure Access & Team Controls",
      desc: "Set permissions by role, control who can approve payouts or review transactions, and keep access secure across teams. Granular permissions ensure that every team member has exactly the access they need.",
      badge: "Access Controls"
    },
    {
      title: "Automated Payment Workflows",
      desc: "Connect your CRM, ERP, or internal operations tools to payment flows so teams can move faster with fewer manual steps. Reduce human error and accelerate your payment operations with intelligent automation.",
      badge: "Business Integrations"
    },
    {
      title: "Audit Trail & Payment Oversight",
      desc: "Review every transaction event, monitor exceptions, and trace payment activity with clear accountability for every operational decision. Full visibility into your payment lifecycle from initiation to settlement.",
      badge: "Operational Insight"
    }
  ];

  // Static transaction data for display
  const transactions = [
    { id: 'TX-10924', customer: 'Kigali Booking Group', method: 'MTN Mobile Money', amount: '120,000 RWF', status: 'success', date: 'Today, 11:24 AM' },
    { id: 'TX-10923', customer: 'Satguru Eco-Tours', method: 'Visa Credit Card', amount: '450.00 USD', status: 'success', date: 'Today, 09:12 AM' },
    { id: 'TX-10922', customer: 'Airtel Payout Client', method: 'Airtel Money Payout', amount: '80,000 RWF', status: 'pending', date: 'Yesterday, 04:35 PM' },
    { id: 'TX-10921', customer: 'Norrsken Foundation Hub', method: 'Mastercard debit', amount: '1,200.00 USD', status: 'success', date: 'Aug 11, 2026' }
  ];

  // Static chart data for display
  const chartData = [
    { label: 'Jan', value: 120000, display: '$120,000' },
    { label: 'Feb', value: 150000, display: '$150,000' },
    { label: 'Mar', value: 220000, display: '$220,000' },
    { label: 'Apr', value: 180000, display: '$180,000' },
    { label: 'May', value: 250000, display: '$250,000' },
    { label: 'Jun', value: 160000, display: '$160,000' },
    { label: 'Jul', value: 210000, display: '$210,000' },
    { label: 'Aug', value: 135800, display: '$135,800' }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      <Navbar />

      {/* Hero Banner - reduced padding */}
      <section className="bg-gradient-to-br from-[#0a1815] via-[#0c1f1b] to-[#12312b] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(67,118,108,0.12),transparent_45%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 flex flex-col items-center">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 px-4 py-1.5 rounded-full border border-emerald-500/20">
              Business Command Center
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-3xl">
              A Unified Payments Dashboard Built for Business Growth
            </h1>
            <p className="text-slate-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Track revenue, monitor payment flows, and manage operations from one clear view. Everything your team needs to run faster, safer, and more efficiently in one place.
            </p>
            
          </div>
        </div>
      </section>

      {/* Embedded Live Chart & Transaction Widget - static */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Business Performance Overview
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Review your payment volume, transaction activity, and revenue momentum across the periods that matter most to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Activity Analytics Bar Chart */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-md p-6 space-y-6 flex flex-col justify-between min-h-[420px]">
            
            {/* Chart Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-lg">Sync Activity Analytics</h3>
                
                <div className="flex items-center space-x-3">
                  <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-xl">
                    Volume (USD/RWF)
                  </span>
                  <span className="bg-slate-900 border border-slate-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl">
                    2026 (Current)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-500 font-medium">
                <span>Showing revenue volume</span>
                <span className="font-semibold text-slate-600">Monthly Performance for 2026</span>
              </div>
            </div>

            {/* Chart Graphical Plot Area */}
            <div className="relative h-56 flex items-end justify-between px-2 pt-4">
              {/* Dotted horizontal gridlines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2 border-b border-slate-100">
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
                <div className="border-t border-dotted border-slate-200 w-full h-0" />
              </div>

              {/* Bar rendering */}
              {chartData.map((item, index) => {
                const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                return (
                  <div key={index} className="flex flex-col items-center flex-1 h-full justify-end relative">
                    <div className="w-8 sm:w-10 bg-slate-50 rounded-t-lg h-full flex flex-col justify-end relative z-10">
                      <div 
                        style={{ height: `${heightPercent}%` }}
                        className="bg-gradient-to-t from-[#1f6e5c] to-cyan-500 w-full rounded-t-lg transition-all duration-500 ease-out shadow-xs"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 mt-2 tracking-wide">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Recent Transactions Showcase */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-lg">Recent Payment Activity</h3>
                <span className="text-xs text-slate-400">Auto-refreshed</span>
              </div>
              <div className="divide-y divide-slate-100">
                {transactions.map((tx) => (
                  <div key={tx.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition">
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2 rounded-xl border ${tx.status === 'success' ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'}`}>
                        <span className="text-xs font-bold">{tx.status === 'success' ? '✓' : '⏱'}</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">{tx.customer}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{tx.id} • {tx.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-800">{tx.amount}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">{tx.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-center">
              <a href="/sandbox" className="text-xs font-bold text-[#1f6e5c] hover:underline">
                View all business transactions →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Workspace Screenshot Showcase */}
      <section className="py-16 bg-gradient-to-br from-[#0a1815] via-[#0c1f1b] to-[#12312b] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1f6e5c]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Business Overview</span>
            <h2 className="text-3xl md:text-4xl font-black">Explore the MoCard Business Workspace</h2>
            <p className="text-slate-300 text-sm md:text-base font-light">
              See the payment dashboard your team uses to monitor revenue, track operational health, and make faster decisions with confidence.
            </p>
          </div>

          {/* Screenshot Row 1 */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Operations Snapshot</span>
              <h3 className="text-2xl md:text-3xl font-black">Primary Business Dashboard</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Get a consolidated picture of current transaction performance, revenue trends, settlement activity, and payment health across your business in one clean view. Monitor key metrics at a glance and drill down for deeper insights.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#132c28] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-white/10 px-4 py-3 flex items-center space-x-2">
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

          {/* Screenshot Row 2 */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#132c28] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-white/10 px-4 py-3 flex items-center space-x-2">
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
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Payment Access</span>
              <h3 className="text-2xl md:text-3xl font-black">Service Connections Hub</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Connect your preferred payment rails, manage partner access, and monitor every operational handoff without slowing down your business workflows. Seamless integration with all major payment providers.
              </p>
            </div>
          </div>

          {/* Screenshot Row 3 */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Financial controls</span>
              <h3 className="text-2xl md:text-3xl font-black">Operational Audit Trail</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Review payment events, investigate failed transactions, monitor exceptions, and keep a clear record of every action taken across your operations. Full transparency and accountability for every payment.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#132c28] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#102522] border-b border-white/10 px-4 py-3 flex items-center space-x-2">
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

      {/* Console Features Grid - NO ICONS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-white">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Full Console Infrastructure Capabilities
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            We handle key provisioning, encryption routing, and carrier retries so you have full operational clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {consoleFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1f6e5c] text-xs font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-wider border border-transparent">
                    {feat.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-16 bg-[#0f3d33] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,224,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Ready to See Your Business in Motion?
          </h2>
          <p className="text-slate-200 text-sm md:text-base max-w-lg mx-auto font-light">
            Explore a live view of your payment operations, revenue performance, and customer activity from a dashboard built for business teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-bold">
            <a href="/sandbox" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1f6e5c] text-white hover:bg-[#135244] transition duration-200 text-center text-sm shadow-md shadow-[#1f6e5c]/20">
              View Business Dashboard
            </a>
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/35 text-slate-200 hover:bg-white/5 transition duration-200 text-center text-sm bg-transparent">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}