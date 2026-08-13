import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, CreditCard, Smartphone, CheckCircle, 
  RefreshCw, Globe, QrCode, Copy, ShieldCheck, Download
} from 'lucide-react';
import logo from '../assets/logo.png';
import createLinkImage from '../assets/create_link.png';

export default function PersonalPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || 'card-to-momo';

  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync state with URL search params
  useEffect(() => {
    const tabParam = new URLSearchParams(location.search).get('tab');
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
  }, [location.search]);

  // Card to Momo Calculator state
  const [sendAmount, setSendAmount] = useState(100);
  const [sendCurrency, setSendCurrency] = useState('USD');
  const [destCountry, setDestCountry] = useState('Rwanda');
  const [destPhone, setDestPhone] = useState('+250 788 123 456');
  const [calcStatus, setCalcStatus] = useState('idle'); // idle | loading | success

  // P2P Request state
  const [reqName, setReqName] = useState('Jane Doe');
  const [reqAmount, setReqAmount] = useState('15,000');
  const [reqCurrency, setReqCurrency] = useState('RWF');
  const [reqLink, setReqLink] = useState('');
  const [copied, setCopied] = useState(false);

  const exchangeRates = {
    RWF: 1320,
    KES: 129,
    UGX: 3750,
  };

  const currentRate = exchangeRates[destCountry === 'Rwanda' ? 'RWF' : destCountry === 'Kenya' ? 'KES' : 'UGX'];
  const receiveAmount = (sendAmount * currentRate).toLocaleString(undefined, { maximumFractionDigits: 0 });

  const handleSimulateTransfer = (e) => {
    e.preventDefault();
    setCalcStatus('loading');
    setTimeout(() => {
      setCalcStatus('success');
    }, 1500);
  };

  const handleGenerateLink = (e) => {
    e.preventDefault();
    const cleanName = reqName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    setReqLink(`https://mocard.link/pay/request/${cleanName || 'user'}?amt=${reqAmount}&cur=${reqCurrency}`);
    setCopied(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full font-outfit">
              MoCard Personal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Simple Consumer Payments
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Send money directly from credit card networks to local mobile money wallets, settle cross-border corridors, and request peer-to-peer transfers instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Sub-menu */}
      <div className="bg-white border-b border-slate-200 sticky top-[72px] z-30 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto scrollbar-none py-3">
            {[
              { id: 'card-to-momo', label: 'Card to Mobile Money', icon: CreditCard },
              { id: 'send-abroad', label: 'Send Money Abroad', icon: Globe },
              { id: 'request-payments', label: 'Request Payments', icon: QrCode },
              { id: 'mocard-app', label: 'Mocard Mobile App', icon: Smartphone }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold font-outfit transition flex items-center space-x-2 shrink-0 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-pp-blue text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-transparent hover:border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Workspace Workspace */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: CARD TO MOBILE MONEY */}
        {activeTab === 'card-to-momo' && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">Instant Deposit</span>
              <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
                Send from any international card directly to local wallets.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                MoCard Personal bridges international payment cards with regional mobile money wallets (like MTN Momo, Airtel Money, or Orange). Input card details, enter a relative phone number, and deposit funds instantly.
              </p>
              
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3 text-xs text-slate-450 font-outfit">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>PCI-DSS Compliant • Encrypted Gateway Channels • Active Settle Verification</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Transfer Calculator widget */}
              <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5 relative">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-outfit">Transfer Calculator</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-pp-blue animate-pulse" />
                </div>

                {calcStatus === 'idle' && (
                  <form onSubmit={handleSimulateTransfer} className="space-y-4">
                    {/* Send amount input */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">You Send</label>
                      <div className="flex bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-pp-blue transition">
                        <input 
                          type="number" 
                          required
                          min="10"
                          max="5000"
                          value={sendAmount} 
                          onChange={(e) => setSendAmount(Number(e.target.value))}
                          className="flex-grow text-sm font-bold px-3 py-2.5 bg-transparent border-none outline-none text-slate-800"
                        />
                        <select 
                          value={sendCurrency} 
                          onChange={(e) => setSendCurrency(e.target.value)}
                          className="bg-transparent border-none outline-none font-bold text-xs text-slate-700 px-3 cursor-pointer"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                    </div>

                    {/* Destination config */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Destination Country</label>
                        <select 
                          value={destCountry} 
                          onChange={(e) => setDestCountry(e.target.value)}
                          className="w-full text-xs font-semibold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-pp-blue cursor-pointer"
                        >
                          <option value="Rwanda">Rwanda</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Uganda">Uganda</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Recipient Network</label>
                        <span className="w-full text-xs font-bold px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl block text-slate-600">
                          {destCountry === 'Rwanda' ? 'MTN / Airtel' : destCountry === 'Kenya' ? 'M-Pesa' : 'MTN Money'}
                        </span>
                      </div>
                    </div>

                    {/* Recipient Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Recipient Phone Number</label>
                      <input 
                        type="text" 
                        required
                        value={destPhone} 
                        onChange={(e) => setDestPhone(e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2.5 bg-slate-55 border border-slate-200 rounded-xl outline-none font-mono text-slate-800 focus:border-pp-blue"
                      />
                    </div>

                    {/* Output conversions */}
                    <div className="bg-slate-50 p-4 border border-slate-150 rounded-2xl text-[11px] space-y-1.5">
                      <div className="flex justify-between text-slate-450">
                        <span>Simulated FX Rate:</span>
                        <span className="font-bold text-slate-700">1 {sendCurrency} = {currentRate} {destCountry === 'Rwanda' ? 'RWF' : destCountry === 'Kenya' ? 'KES' : 'UGX'}</span>
                      </div>
                      <div className="flex justify-between text-slate-450 border-b border-slate-200 pb-1.5">
                        <span>Transfer Fee (1.5%):</span>
                        <span className="font-bold text-slate-750">{(sendAmount * 0.015).toFixed(2)} {sendCurrency}</span>
                      </div>
                      <div className="flex justify-between text-slate-800 font-bold pt-0.5 text-xs">
                        <span>Recipient Receives:</span>
                        <span className="text-pp-blue font-outfit">{receiveAmount} {destCountry === 'Rwanda' ? 'RWF' : destCountry === 'Kenya' ? 'KES' : 'UGX'}</span>
                      </div>
                    </div>

                    {/* Simulate Submit */}
                    <button 
                      type="submit"
                      className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-outfit shadow-sm cursor-pointer transition mt-2"
                    >
                      <span>Simulate Transfer</span>
                    </button>
                  </form>
                )}

                {calcStatus === 'loading' && (
                  <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
                    <RefreshCw className="w-7 h-7 text-pp-blue animate-spin" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 font-outfit">Executing Transfer Instructions</h4>
                      <p className="text-[9px] text-slate-400 font-light mt-0.5">Clearing card acquire limits with regional carriers...</p>
                    </div>
                  </div>
                )}

                {calcStatus === 'success' && (
                  <div className="py-8 flex flex-col items-center justify-center space-y-4 text-center animate-in zoom-in-95 duration-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-outfit">Transfer Dispatched</h4>
                      <p className="text-[10px] text-slate-400 mt-1">Cleared {receiveAmount} {destCountry === 'Rwanda' ? 'RWF' : destCountry === 'Kenya' ? 'KES' : 'UGX'} to {destPhone}.</p>
                      <p className="text-[8px] font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-200 mt-2 block w-fit mx-auto">
                        ref_tx_90248a
                      </p>
                    </div>
                    <button 
                      onClick={() => setCalcStatus('idle')}
                      className="px-5 py-2 rounded-full border border-slate-200 text-slate-550 hover:bg-slate-50 text-[10px] font-bold font-outfit cursor-pointer transition"
                    >
                      Reset Calculator
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SEND MONEY ABROAD */}
        {activeTab === 'send-abroad' && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">Remittances</span>
              <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
                Send to regional corridors at competitive exchange rates.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                MoCard maps currency pairs dynamically using stable liquidity bridges. Transfer money across East and West Africa with low friction, zero hidden fees, and absolute compliance.
              </p>

              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white text-[11px] max-w-md shadow-2xs">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-450 uppercase text-[9px] font-bold tracking-wider">
                      <th className="px-4 py-2.5">Corridor</th>
                      <th className="px-4 py-2.5">Fx Conversion</th>
                      <th className="px-4 py-2.5 text-right">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-800">USD to East Africa</td>
                      <td className="px-4 py-3 font-mono text-slate-600">1 USD = 1,320 RWF</td>
                      <td className="px-4 py-3 text-right text-emerald-600 font-bold">1.5%</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-slate-800">EUR to East Africa</td>
                      <td className="px-4 py-3 font-mono text-slate-600">1 EUR = 1,425 RWF</td>
                      <td className="px-4 py-3 text-right text-emerald-600 font-bold">1.5%</td>
                    </tr>
                    <tr className="border-t border-slate-100">
                      <td className="px-4 py-3 font-semibold text-slate-800">GBP to Kenya</td>
                      <td className="px-4 py-3 font-mono text-slate-600">1 GBP = 168 KES</td>
                      <td className="px-4 py-3 text-right text-emerald-600 font-bold">1.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 space-y-6 max-w-sm shadow-xl font-outfit select-none">
                <div className="w-fit p-3 rounded-2xl bg-pp-blue/10 text-pp-blue border border-pp-blue/20">
                  <Globe className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-100">Global Remittance Network</h3>
                  <p className="text-xs text-slate-400 font-light font-sans leading-relaxed">
                    MoCard acts as a compliant software layer. All funds are cleared by Central Bank authorized payment service operators and deposited instantly without staging periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REQUEST PAYMENTS */}
        {activeTab === 'request-payments' && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">P2P Requests</span>
              <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
                Request payments from friends with unique links.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Generate simple web links to request split bills, collect fees, or receive gifts. Anyone can click the link and pay you instantly using cards or mobile money.
              </p>
              
              <div className="flex bg-white border border-slate-200 rounded-2xl p-4 shadow-3xs max-w-md items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-pp-blue/10 border border-pp-blue/20 text-pp-blue flex items-center justify-center">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 font-outfit">Visual QR Code Receipts</h4>
                    <p className="text-[9px] text-slate-400 font-light">Allow scans directly inside mobile apps</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              {/* Payment Link generator panel */}
              <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-outfit">P2P Link Generator</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-pp-blue" />
                </div>

                <form onSubmit={handleGenerateLink} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={reqName} 
                      onChange={(e) => setReqName(e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-pp-blue"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2 space-y-1.5">
                      <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Requested Amount</label>
                      <input 
                        type="text" 
                        required
                        value={reqAmount} 
                        onChange={(e) => setReqAmount(e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-pp-blue"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-slate-450 uppercase block font-outfit">Currency</label>
                      <select 
                        value={reqCurrency} 
                        onChange={(e) => setReqCurrency(e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-pp-blue cursor-pointer bg-white"
                      >
                        <option value="RWF">RWF</option>
                        <option value="KES">KES</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-outfit shadow-sm cursor-pointer transition mt-2"
                  >
                    <span>Generate P2P Link</span>
                  </button>
                </form>

                {reqLink && (
                  <div className="pt-4 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="text" 
                        readOnly
                        value={reqLink} 
                        className="flex-grow text-[9px] font-mono px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none select-all text-slate-700"
                      />
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(reqLink);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="p-2 border border-slate-200 hover:bg-slate-50 rounded-lg transition text-slate-500 cursor-pointer"
                      >
                        {copied ? <span className="text-[8px] font-bold text-emerald-500 uppercase">Copied</span> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                      <div className="text-[10px] text-slate-500 font-light">
                        <p className="font-bold text-slate-800">Scan QR to pay</p>
                        <p className="mt-0.5">Jane Doe • {reqAmount} {reqCurrency}</p>
                      </div>
                      <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                        <QrCode className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MOCARD MOBILE APP */}
        {activeTab === 'mocard-app' && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center animate-in fade-in duration-200">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-pp-blue uppercase tracking-widest font-outfit block">Mobile Application</span>
              <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black leading-tight">
                MoCard App. The wallet built for regional trade.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Track personal ledger balances, scan partner QR merchants, send money abroad, and cash out instantly. Download the MoCard app to manage payouts securely from your mobile device.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-outfit flex items-center justify-center space-x-2 cursor-pointer shadow-sm">
                  <Download className="w-4 h-4" />
                  <span>Download iOS App</span>
                </button>
                <button className="px-5 py-3 rounded-xl border border-slate-250 hover:bg-slate-50 text-slate-700 font-bold text-xs font-outfit flex items-center justify-center space-x-2 cursor-pointer bg-white">
                  <Download className="w-4 h-4" />
                  <span>Download Android APK</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white p-2 max-w-sm group">
                <img 
                  src={createLinkImage} 
                  alt="Mocard Mobile Application Screenshot" 
                  className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition duration-500"
                />
              </div>
            </div>
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}
