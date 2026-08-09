import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Terminal, Play, CheckCircle, RefreshCw, Key, Code, HelpCircle, Layers } from 'lucide-react';

export default function DeveloperPage() {
  const [activeLang, setActiveLang] = useState('curl');
  
  // Staging simulator state
  const [method, setMethod] = useState('card');
  const [corridor, setCorridor] = useState('eu_to_africa');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(250.00);
  const [destination, setDestination] = useState('mtn_momo');
  const [simStatus, setSimStatus] = useState('idle'); // idle | loading | success
  const [simResult, setSimResult] = useState(null);

  const sdkSnippets = {
    curl: (amt, cur, dest) => `curl -X POST https://api.mocard.com/v1/integrations \\
  -H "Authorization: Bearer sec_key_sandbox_abc123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": ${parseFloat(amt).toFixed(2)},
    "currency": "${cur}",
    "recipient_gateway": "${dest}",
    "callback_url": "https://yourdomain.com/webhooks"
  }'`,
    node: (amt, cur, dest) => `const mocard = require('mocard')('sec_key_sandbox_abc123');

(async () => {
  const integration = await mocard.integrations.create({
    amount: ${parseFloat(amt).toFixed(2)},
    currency: '${cur}',
    recipientGateway: '${dest}',
    callbackUrl: 'https://yourdomain.com/webhooks'
  });
  console.log(integration.id);
})();`,
    python: (amt, cur, dest) => `import mocard

mocard.api_key = "sec_key_sandbox_abc123"

integration = mocard.Integration.create(
    amount=${parseFloat(amt).toFixed(2)},
    currency="${cur}",
    recipient_gateway="${dest}",
    callback_url="https://yourdomain.com/webhooks"
)`,
    go: (amt, cur, dest) => `package main

import (
	"context"
	"fmt"
	"github.com/mocard/mocard-go"
)

func main() {
	client := mocard.NewClient("sec_key_sandbox_abc123")
	
	params := &mocard.IntegrationParams{
		Amount:           ${parseFloat(amt).toFixed(2)},
		Currency:         "${cur}",
		RecipientGateway: "${dest}",
		CallbackURL:      "https://yourdomain.com/webhooks",
	}
	
	res, _ := client.Integrations.Create(context.Background(), params)
	fmt.Println(res.ID)
}`
  };

  const handleSimulate = (e) => {
    e.preventDefault();
    setSimStatus('loading');
    setSimResult(null);

    setTimeout(() => {
      setSimStatus('success');
      setSimResult({
        id: `intg_${Math.random().toString(36).substr(2, 10)}`,
        object: "integration",
        status: "succeeded",
        amount: parseFloat(amount),
        currency: currency,
        recipient_gateway: destination,
        corridor: corridor,
        fee: parseFloat(amount * 0.025).toFixed(2), // 2.5% mock fee
        reference: `mocard_ref_${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
        created_at: new Date().toISOString(),
        verified_by: "Mocard Sandbox Engine V1"
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-pp-black text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.15),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Developer Portal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Build Global Payment Bridges
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Integrate credit card payments and automated payouts in minutes. Check out our interactive staging console to test mock API requests and webhooks.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Console */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Interactive API Sandbox Playground
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Configure transaction variables in the left panel, click send, and see the dynamic API request structure and live response payload simulated instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Panel: Request Configuration Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <form onSubmit={handleSimulate} className="space-y-5">
              
              <div className="flex items-center space-x-2 text-pp-black font-bold font-outfit text-base border-b border-slate-100 pb-3">
                <Terminal className="w-5 h-5 text-pp-blue" />
                <span>Configure Request</span>
              </div>

              {/* Payment Method */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => { setMethod('card'); setCurrency('USD'); }}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                      method === 'card' 
                        ? 'border-pp-blue text-pp-blue bg-pp-blue/5' 
                        : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                    }`}
                  >
                    Credit / Debit Card
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setMethod('momo'); setCurrency('RWF'); }}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                      method === 'momo' 
                        ? 'border-pp-blue text-pp-blue bg-pp-blue/5' 
                        : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                    }`}
                  >
                    Mobile Money
                  </button>
                </div>
              </div>

              {/* Corridor */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Regional Corridor</label>
                <select 
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                >
                  <option value="eu_to_africa">Europe to East Africa (MTN/Airtel)</option>
                  <option value="us_to_africa">US to West Africa (Orange/Telecel)</option>
                  <option value="intra_africa">Intra-Africa Corridor (Bank Payout)</option>
                  <option value="local">Local Instant Rails (MTN/Airtel)</option>
                </select>
              </div>

              {/* Destination */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Recipient Payout Gateway</label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                >
                  <option value="mtn_momo">MTN Mobile Money</option>
                  <option value="airtel_money">Airtel Money Wallet</option>
                  <option value="orange_money">Orange Money Wallet</option>
                  <option value="equity_bank">Equity Bank Payout</option>
                </select>
              </div>

              {/* Amount slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-wider font-outfit">
                  <span>Transaction Amount</span>
                  <span className="text-pp-blue text-xs font-bold font-mono">{currency} {parseFloat(amount).toFixed(2)}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-pp-blue cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                />
              </div>

              {/* Credentials Mock */}
              <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center space-x-3 text-xs text-slate-500 font-sans">
                <Key className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="overflow-hidden">
                  <span className="font-semibold block font-outfit">Sandbox Authentication</span>
                  <span className="font-mono text-[10px] text-slate-450 block truncate">sec_key_sandbox_abc123</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={simStatus === 'loading'}
                className="w-full py-3.5 rounded-full bg-pp-blue hover:bg-pp-blue-dark text-white text-xs font-bold font-outfit transition duration-200 shadow-sm flex items-center justify-center space-x-2 cursor-pointer disabled:bg-slate-300"
              >
                {simStatus === 'loading' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Sandbox Rails...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Send Staging Request</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Panel: Sleek Code Viewer */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl font-mono text-xs flex flex-col justify-between min-h-[480px]">
            
            {/* Window header */}
            <div className="bg-slate-950/80 px-5 py-3.5 border-b border-slate-800 flex items-center justify-between select-none">
              <div className="flex space-x-2">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] text-slate-500 font-sans">mocard-sandbox-shell</div>
              <div className="w-14" />
            </div>

            {/* Language tabs */}
            <div className="bg-slate-950/40 border-b border-slate-800 px-4 flex space-x-1 select-none font-sans">
              {[
                { id: 'curl', label: 'cURL' },
                { id: 'node', label: 'Node.js' },
                { id: 'python', label: 'Python' },
                { id: 'go', label: 'Go SDK' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveLang(tab.id)}
                  className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-all duration-300 ${
                    activeLang === tab.id
                      ? 'border-pp-blue text-white bg-slate-900/60'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Terminal Workspace */}
            <div className="p-6 flex-grow flex flex-col justify-between bg-slate-900/90 text-slate-350 min-h-[320px]">
              
              {/* Dynamic Request payload snippet */}
              <div className="space-y-2">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                  API Script Request
                </div>
                <pre className="text-emerald-400 whitespace-pre overflow-x-auto scrollbar-none pb-2">
                  <code>{sdkSnippets[activeLang](amount, currency, destination)}</code>
                </pre>
              </div>

              {/* Dynamic Response Payload simulated */}
              <div className="border-t border-slate-800/80 my-4" />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                  <span>API Simulated Response</span>
                  {simStatus === 'success' && (
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                      200 OK
                    </span>
                  )}
                </div>
                
                {simStatus === 'idle' && (
                  <div className="text-slate-500 text-xs py-4 flex flex-col items-center justify-center space-y-2">
                    <Code className="w-8 h-8 text-slate-650" />
                    <span>Send a staging request in the left panel to populate transaction logs.</span>
                  </div>
                )}

                {simStatus === 'loading' && (
                  <div className="text-slate-500 text-xs py-4 flex flex-col items-center justify-center space-y-2">
                    <RefreshCw className="w-8 h-8 text-slate-600 animate-spin" />
                    <span>Awaiting routing resolution...</span>
                  </div>
                )}

                {simStatus === 'success' && simResult && (
                  <pre className="text-slate-300 whitespace-pre overflow-x-auto scrollbar-none">
                    <code>{JSON.stringify(simResult, null, 2)}</code>
                  </pre>
                )}
              </div>

            </div>

            {/* Bottom Status bar */}
            <div className="bg-slate-950/40 border-t border-slate-800 px-5 py-3.5 flex items-center justify-between text-[10px] text-slate-500 font-sans">
              <div className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simStatus === 'success' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                <span>Sandbox Mode active</span>
              </div>
              <span>UTF-8</span>
            </div>

          </div>

        </div>
      </section>

      {/* Webhook HMAC signature guide */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black font-outfit text-pp-black">Verifying Webhook Signatures</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-light">
              Mocard signs all outgoing webhooks using a unique shared webhook secret. Verification guarantees that notifications are sent from our gateway and the contents are not modified.
            </p>
          </div>

          <div className="bg-slate-900 text-slate-350 p-6 rounded-2xl border border-slate-800 font-mono text-xs space-y-4">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-sans font-semibold">
              <span>Node.js Express Verification Middleware</span>
              <span>HMAC-SHA256</span>
            </div>
            <pre className="text-slate-200 whitespace-pre overflow-x-auto">
              <code>{`const crypto = require('crypto');

function verifyMocardWebhook(req, res, next) {
  const signature = req.headers['x-mocard-signature'];
  const secret = process.env.MOCARD_WEBHOOK_SECRET;
  
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(JSON.stringify(req.body));
  const calculatedSignature = hmac.digest('hex');
  
  if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(calculatedSignature))) {
    return next();
  }
  return res.status(401).send('Invalid signature');
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
