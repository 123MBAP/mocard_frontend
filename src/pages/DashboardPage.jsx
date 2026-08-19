import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Globe2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
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
    <div className="bg-[#f8faf9] min-h-screen font-sans antialiased text-[#13201c]">
      <Navbar />

      {/* Embedded Live Chart & Transaction Widget */}
      <section id="live-overview" className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#f3f0e8] border-b border-black/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
            <div className="lg:col-span-7 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
                Performance overview
              </span>

              <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight text-[#13201c] sm:text-5xl lg:text-6xl">
                Track business
                <span className="block font-serif font-normal italic text-[#1f6e5c]">
                  operations live.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 text-left">
              <p className="text-sm leading-6 text-black/55 font-light">
                Review payment volume, transaction activity, and revenue momentum across the periods that matter most to your business operations.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Left Side: Activity Analytics Bar Chart */}
            <div className="lg:col-span-7 bg-white border border-black/5 p-6 flex flex-col justify-between min-h-[420px]">
              
              {/* Chart Header */}
              <div className="space-y-4 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="font-black text-slate-900 text-lg tracking-tight">Sync Activity Analytics</h3>
                  
                  <div className="flex items-center space-x-2">
                    <span className="bg-slate-50 border border-black/5 text-[#1b3b33] text-[10px] font-bold px-3 py-1.5">
                      Volume (USD/RWF)
                    </span>
                    <span className="bg-slate-950 text-white text-[10px] font-bold px-3 py-1.5">
                      2026 (Current)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-black/5 pb-3 text-[10px] text-black/40 font-bold uppercase tracking-wider">
                  <span>Showing revenue volume</span>
                  <span className="text-slate-600 font-mono">Monthly Performance for 2026</span>
                </div>
              </div>

              {/* Chart Graphical Plot Area */}
              <div className="relative h-56 flex items-end justify-between px-2 pt-4">
                {/* Dotted horizontal gridlines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2 border-b border-black/5">
                  <div className="border-t border-dashed border-black/5 w-full h-0" />
                  <div className="border-t border-dashed border-black/5 w-full h-0" />
                  <div className="border-t border-dashed border-black/5 w-full h-0" />
                </div>

                {/* Bar rendering */}
                {chartData.map((item, index) => {
                  const heightPercent = maxValue > 0 ? (item.value / maxValue) * 100 : 0;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1 h-full justify-end relative">
                      <div className="w-8 sm:w-10 bg-slate-50 h-full flex flex-col justify-end relative z-10">
                        <div 
                          style={{ height: `${heightPercent}%` }}
                          className="bg-[#1f6e5c] w-full transition-all duration-500 ease-out"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 mt-2 tracking-wide font-mono">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Recent Transactions Showcase */}
            <div className="lg:col-span-5 bg-white border border-black/5 overflow-hidden min-h-[420px] flex flex-col justify-between text-left">
              <div>
                <div className="px-6 py-4 border-b border-black/5 flex items-center justify-between">
                  <h3 className="font-black text-slate-900 text-lg tracking-tight">Recent Payment Activity</h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-black/30">Auto-refreshed</span>
                </div>
                <div className="divide-y divide-black/5">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition">
                      <div className="flex items-center space-x-3.5">
                        <div className={`p-2 border ${tx.status === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-amber-50 border-amber-100 text-amber-600'}`}>
                          <span className="text-xs font-bold">{tx.status === 'success' ? '✓' : '⏱'}</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{tx.customer}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 font-mono">{tx.id} • {tx.method}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-[#123c32]">{tx.amount}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 font-mono">{tx.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-5 border-t border-black/5 bg-slate-50/50 text-center">
                <Link to="/developers" className="text-xs font-bold text-[#1f6e5c] hover:text-[#123c32] transition">
                  View all business transactions →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visual Workspace Screenshot Showcase */}
      <section className="py-20 bg-[#123c32] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#e4d09b]/5 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 space-y-20">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#e4d09b] uppercase tracking-wider block">Business Workspace</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95]">
              Explore the
              <span className="block font-serif font-normal italic text-[#e4d09b]">
                MoCard Business Workspace.
              </span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base font-light max-w-2xl mx-auto">
              See the payment dashboard your team uses to monitor revenue, track operational health, and make faster decisions with confidence.
            </p>
          </div>

          {/* Screenshot Row 1 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold text-[#e4d09b] uppercase tracking-wider">Operations Snapshot</span>
              <h3 className="text-3xl font-black tracking-tight">Primary Business Dashboard</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Get a consolidated picture of current transaction performance, revenue trends, settlement activity, and payment health across your business in one clean view. Monitor key metrics at a glance and drill down for deeper insights.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#102522]/90 border border-white/10 p-3 shadow-2xl">
                <div className="border border-white/10 bg-slate-950">
                  <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between text-white/40 font-mono text-[10px]">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                    </div>
                    <span>mocard.link/console/overview</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={dashboardImg1} alt="Primary Console Dashboard" className="w-full h-full object-cover object-top filter contrast-[1.05]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Row 2 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#102522]/90 border border-white/10 p-3 shadow-2xl">
                <div className="border border-white/10 bg-slate-950">
                  <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between text-white/40 font-mono text-[10px]">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                    </div>
                    <span>mocard.link/console/connections</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={dashboardImg2} alt="API Connections Hub" className="w-full h-full object-cover object-top filter contrast-[1.05]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-4 text-left">
              <span className="text-xs font-bold text-[#e4d09b] uppercase tracking-wider">Payment Access</span>
              <h3 className="text-3xl font-black tracking-tight">Service Connections Hub</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Connect your preferred payment rails, manage partner access, and monitor every operational handoff without slowing down your business workflows. Seamless integration with all major payment providers.
              </p>
            </div>
          </div>

          {/* Screenshot Row 3 */}
          <div className="grid lg:grid-cols-12 gap-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold text-[#e4d09b] uppercase tracking-wider">Financial controls</span>
              <h3 className="text-3xl font-black tracking-tight">Operational Audit Trail</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Review payment events, investigate failed transactions, monitor exceptions, and keep a clear record of every action taken across your operations. Full transparency and accountability for every payment.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-[#102522]/90 border border-white/10 p-3 shadow-2xl">
                <div className="border border-white/10 bg-slate-950">
                  <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between text-white/40 font-mono text-[10px]">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                      <span className="h-2.5 w-2.5 bg-white/15" />
                    </div>
                    <span>mocard.link/console/logs-audit</span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={dashboardImg3} alt="Operations Audit Logs" className="w-full h-full object-cover object-top filter contrast-[1.05]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Console Features Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 bg-white border-t border-black/5">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
            Console Infrastructure
          </span>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-[0.95]">
            Full dashboard
            <span className="block font-serif font-normal italic text-[#1f6e5c]">
              capabilities.
            </span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto font-light">
            We handle key provisioning, encryption routing, and carrier retries so you have full operational clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {consoleFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 border border-black/5 hover:border-[#1f6e5c]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-[#f8f7f3] border border-black/5 flex items-center justify-center text-[#1f6e5c] text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-bold bg-[#1f6e5c]/10 text-[#1f6e5c] px-3 py-1 uppercase tracking-wider">
                    {feat.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">{feat.title}</h3>
                  <p className="text-black/45 text-xs sm:text-sm leading-relaxed font-light">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structured CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden bg-[#1f6e5c] px-6 sm:px-10 lg:px-14 py-12 lg:py-16 text-white text-left shadow-2xl">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-black/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                Ready to get started?
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                See your business in motion.
                <span className="block text-emerald-100">
                  Explore the console today.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm sm:text-base text-emerald-50/80 leading-relaxed font-light">
                Explore a live view of your payment operations, revenue performance, and customer activity from a dashboard built for business teams.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/developers"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1f6e5c] text-sm font-bold hover:bg-emerald-50 transition"
                >
                  View Business Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white/25 text-white text-sm font-bold hover:bg-white/10 transition"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}