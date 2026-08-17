import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DeveloperPage() {
  const [activeLang, setActiveLang] = useState('curl');
  
  // Staging simulator state
  const [method, setMethod] = useState('card');
  const [corridor, setCorridor] = useState('eu_to_africa');
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState(250.00);
  const [destination, setDestination] = useState('mtn_momo');
  const [simStatus, setSimStatus] = useState('idle');
  const [simResult, setSimResult] = useState(null);

  const sdkSnippets = {
    curl: (amt, cur, dest) => `curl -X POST https://api.mocard.com/v1/integrations \\
  -H "Authorization: Bearer sec_key_sandbox_abc123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "batch_size": ${parseInt(amt)},
    "data_type": "records",
    "recipient_service": "${dest}",
    "callback_url": "https://yourdomain.com/webhooks"
  }'`,
    node: (amt, cur, dest) => `const mocard = require('mocard')('sec_key_sandbox_abc123');

(async () => {
  const integration = await mocard.integrations.create({
    batchSize: ${parseInt(amt)},
    dataType: 'records',
    recipientService: '${dest}',
    callbackUrl: 'https://yourdomain.com/webhooks'
  });
  console.log(integration.id);
})();`,
    python: (amt, cur, dest) => `import mocard

mocard.api_key = "sec_key_sandbox_abc123"

integration = mocard.Integration.create(
    batch_size=${parseInt(amt)},
    data_type="records",
    recipient_service="${dest}",
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
		BatchSize:        ${parseInt(amt)},
		DataType:         "records",
		RecipientService: "${dest}",
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
        batch_size: parseInt(amount),
        data_type: "records",
        recipient_service: destination,
        data_path: corridor,
        reference: `mocard_ref_${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
        created_at: new Date().toISOString(),
        verified_by: "Mocard Sandbox Engine V1"
      });
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero Header - Reduced padding */}
      <section className="bg-pp-black text-white pt-20 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,224,0.12),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue bg-pp-blue/10 px-4 py-1.5 rounded-full">
              Developer Portal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-outfit tracking-tight leading-tight">
              Build Global Integration Bridges
            </h1>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              Integrate API connections and automated data syncs in minutes. Check out our interactive staging console to test mock API requests and webhooks.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Sandbox Console - Reduced spacing */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black">
            Interactive API Sandbox Playground
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Configure transaction variables in the left panel, click send, and see the dynamic API request structure and live response payload simulated instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Panel: Request Configuration Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-sm">
            <form onSubmit={handleSimulate} className="space-y-4">
              
              <div className="flex items-center space-x-2 text-pp-black font-bold font-outfit text-base border-b border-slate-100 pb-3">
                <span>Configure Request</span>
              </div>

              {/* Payment Method */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Authentication Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => { setMethod('card'); setCurrency('records'); }}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                      method === 'card' 
                        ? 'border-pp-blue text-pp-blue bg-pp-blue/5' 
                        : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                    }`}
                  >
                    OAuth 2.0 Token
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setMethod('momo'); setCurrency('records'); }}
                    className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                      method === 'momo' 
                        ? 'border-pp-blue text-pp-blue bg-pp-blue/5' 
                        : 'border-slate-200 text-slate-650 hover:bg-slate-50'
                    }`}
                  >
                    API Key Header
                  </button>
                </div>
              </div>

              {/* Corridor */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Data Flow Path</label>
                <select 
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                >
                  <option value="CRM_to_DB">CRM to Database (HubSpot/PostgreSQL)</option>
                  <option value="ERP_to_Analytics">ERP to Analytics (Salesforce/BigQuery)</option>
                  <option value="Webhook_to_Broker">Webhook to Message Broker (Kafka/RabbitMQ)</option>
                  <option value="API_to_Cloud">API to Cloud Storage (AWS S3/GCS)</option>
                </select>
              </div>

              {/* Destination */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block font-outfit">Recipient Target Service</label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-2.5 bg-slate-50 text-slate-900 border border-slate-200 focus:border-pp-blue rounded-xl outline-none font-sans"
                >
                  <option value="hubspot">HubSpot CRM</option>
                  <option value="postgresql">PostgreSQL Database</option>
                  <option value="salesforce">Salesforce Platform</option>
                  <option value="s3_bucket">Amazon S3 Bucket</option>
                </select>
              </div>

              {/* Amount slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-wider font-outfit">
                  <span>Sync Batch Size</span>
                  <span className="text-pp-blue text-xs font-bold font-mono">{parseInt(amount)} records</span>
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
              <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center text-xs text-slate-500 font-sans">
                  <div className="overflow-hidden">
                    <span className="font-semibold block font-outfit text-[10px]">Sandbox Authentication</span>
                    <span className="font-mono text-[10px] text-slate-450 block truncate">sec_key_sandbox_abc123</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={simStatus === 'loading'}
                className="w-full py-3 rounded-full bg-pp-blue hover:bg-pp-blue-dark text-white text-xs font-bold font-outfit transition duration-200 shadow-sm flex items-center justify-center cursor-pointer disabled:bg-slate-300"
              >
                {simStatus === 'loading' ? (
                  <span>Processing API Sync...</span>
                ) : (
                  <span>Send API Sync Request</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Panel: Code Viewer */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl font-mono text-xs flex flex-col min-h-[460px]">
            
            {/* Window header */}
            <div className="bg-slate-950/80 px-5 py-3 border-b border-slate-800 flex items-center justify-between select-none">
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
            <div className="p-5 flex-grow flex flex-col justify-between bg-slate-900/90 text-slate-350 min-h-[300px]">
              
              {/* Dynamic Request payload snippet */}
              <div className="space-y-1.5">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                  API Script Request
                </div>
                <pre className="text-emerald-400 whitespace-pre overflow-x-auto scrollbar-none pb-2 text-xs leading-relaxed">
                  <code>{sdkSnippets[activeLang](amount, currency, destination)}</code>
                </pre>
              </div>

              <div className="border-t border-slate-800/80 my-3" />

              {/* Dynamic Response Payload simulated */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                  <span>API Simulated Response</span>
                  {simStatus === 'success' && (
                    <span className="text-[9px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                      200 OK
                    </span>
                  )}
                </div>
                
                {simStatus === 'idle' && (
                  <div className="text-slate-500 text-xs py-3 text-center">
                    <span>Send a staging request in the left panel to populate integration sync logs.</span>
                  </div>
                )}

                {simStatus === 'loading' && (
                  <div className="text-slate-500 text-xs py-3 text-center">
                    <span>Awaiting integration response...</span>
                  </div>
                )}

                {simStatus === 'success' && simResult && (
                  <pre className="text-slate-300 whitespace-pre overflow-x-auto scrollbar-none text-xs leading-relaxed">
                    <code>{JSON.stringify(simResult, null, 2)}</code>
                  </pre>
                )}
              </div>

            </div>

            {/* Bottom Status bar */}
            <div className="bg-slate-950/40 border-t border-slate-800 px-5 py-2.5 flex items-center justify-between text-[10px] text-slate-500 font-sans">
              <div className="flex items-center space-x-2">
                <span className={`w-1.5 h-1.5 rounded-full ${simStatus === 'success' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                <span>Sandbox Mode active</span>
              </div>
              <span>UTF-8</span>
            </div>

          </div>

        </div>
      </section>

      {/* B2B Unified API Suite Section - Reduced padding, no icons */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-pp-blue font-outfit block">
              Developer Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
              A single platform, six unified API products.
            </h2>
            <p className="text-slate-550 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Integrate data workflows, messages, emails, system validations, and custom mapping rules in a single afternoon. Designed for modern multi-tenant enterprise platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Payments & Payouts */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Integrations API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">POST /v1/integrations</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Connect CRM databases and local SaaS platforms. Initiate real-time data migrations, bulk synchronizations, and manage automated schema mappings on the fly.
                </p>
              </div>
            </div>

            {/* Card 2: Messaging Notifications */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Messaging API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">POST /v1/messages</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Push automated notification SMS alerts, verify data sync sessions on WhatsApp, and send multi-factor authorization OTP tokens securely.
                </p>
              </div>
            </div>

            {/* Card 3: Email Billing */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Email & Alerts API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">POST /v1/billing</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Generate digital system health reports, automatically dispatch sync logs, and send monthly data traffic ledger statements.
                </p>
              </div>
            </div>

            {/* Card 4: Wallet KYC Verification */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Verification API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">GET /v1/verify</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Validate API endpoints, verify database server owner lookup parameters, and run regional system compliance checks instantly.
                </p>
              </div>
            </div>

            {/* Card 5: Split Transfers */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Data Routing API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">POST /v1/routing</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Manage platform integrations by dynamically splitting and routing data payloads between different servers, cloud warehouses, and client APIs.
                </p>
              </div>
            </div>

            {/* Card 6: Corporate Card Issuing */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 hover:shadow-md hover:border-slate-300 transition duration-300">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold font-outfit text-pp-black">Custom Connectors API</h3>
                  <span className="text-[10px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/50">POST /v1/connectors</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Instantly construct custom API connectors for proprietary services. Set custom access scopes, tie to system bandwidth limits, and register authorization callbacks.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Webhook HMAC signature guide - Reduced padding */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-2xl font-black font-outfit text-pp-black">Verifying Webhook Signatures</h3>
            <p className="text-slate-650 text-sm leading-relaxed font-light">
              Mocard signs all outgoing webhooks using a unique shared webhook secret. Verification guarantees that notifications are sent from our gateway and the contents are not modified.
            </p>
          </div>

          <div className="bg-slate-900 text-slate-350 p-5 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-sans font-semibold">
              <span>Node.js Express Verification Middleware</span>
              <span>HMAC-SHA256</span>
            </div>
            <pre className="text-slate-200 whitespace-pre overflow-x-auto text-xs leading-relaxed">
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