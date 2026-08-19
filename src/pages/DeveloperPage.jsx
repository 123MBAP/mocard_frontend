import React, { useState } from 'react';
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
import CardTransfer from '../components/CardTransfer';
import Footer from '../components/Footer';

// Payment Channels Logos
import momoLogo from '../assets/api_images/momo.jpeg';
import airtelLogo from '../assets/api_images/airtel.jpeg';
import visaLogo from '../assets/api_images/visa.jpeg';
import mastercardLogo from '../assets/api_images/master_card.jpeg';
import amexLogo from '../assets/api_images/american_expess.jpeg';

const API_BASE_URL = 'https://api.mocard.rw';

const sdkSnippets = {
  curl: (amount, destination) => `curl -X POST ${API_BASE_URL}/v1/integrations \\
  -H "Authorization: Bearer sec_key_sandbox_abc123" \\
  -H "Content-Type: application/json" \\
  -d '{
    "batch_size": ${parseInt(amount)},
    "data_type": "records",
    "recipient_service": "${destination}",
    "callback_url": "https://yourdomain.com/webhooks/mocard"
  }'`,

  node: (amount, destination) => `const mocard = require('mocard')(
  'sec_key_sandbox_abc123'
);

const integration = await mocard.integrations.create({
  batchSize: ${parseInt(amount)},
  dataType: 'records',
  recipientService: '${destination}',
  callbackUrl: 'https://yourdomain.com/webhooks/mocard'
});

console.log(integration.id);`,

  python: (amount, destination) => `import mocard

mocard.api_key = "sec_key_sandbox_abc123"

integration = mocard.Integration.create(
    batch_size=${parseInt(amount)},
    data_type="records",
    recipient_service="${destination}",
    callback_url="https://yourdomain.com/webhooks/mocard"
)

print(integration.id)`,

  go: (amount, destination) => `package main

import (
    "context"
    "fmt"
    mocard "github.com/mocard/mocard-go"
)

func main() {
    client := mocard.NewClient(
        "sec_key_sandbox_abc123",
    )

    params := &mocard.IntegrationParams{
        BatchSize:        ${parseInt(amount)},
        DataType:         "records",
        RecipientService: "${destination}",
        CallbackURL:      "https://yourdomain.com/webhooks/mocard",
    }

    result, _ := client.Integrations.Create(
        context.Background(),
        params,
    )

    fmt.Println(result.ID)
}`,
};

const apiProducts = [
  {
    name: 'MTN Mobile Money',
    category: 'Mobile Wallet',
    description:
      'Accept local mobile money payments instantly with secure MTN MoMo API integration.',
    logo: momoLogo,
  },
  {
    name: 'Airtel Money',
    category: 'Mobile Wallet',
    description:
      'Support local Airtel mobile wallets for fast, seamless customer checkouts.',
    logo: airtelLogo,
  },
  {
    name: 'Visa',
    category: 'Card Scheme',
    description:
      'Process international and domestic Visa card payments with bank-level security.',
    logo: visaLogo,
  },
  {
    name: 'Mastercard',
    category: 'Card Scheme',
    description:
      'Accept local and global Mastercard payments with advanced fraud protection.',
    logo: mastercardLogo,
  },
  {
    name: 'American Express',
    category: 'Card Scheme',
    description:
      'Enable premium card checkouts for global corporate and personal travellers.',
    logo: amexLogo,
  },
];

function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#f7f6f2] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[#1f6e5c]/5 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-emerald-100/30 blur-3xl" />
        
        {/* Restrained grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      {/* Decorative geometry */}
      <div className="absolute -right-40 top-24 h-[600px] w-[600px] rounded-full border border-[#123c32]/8 pointer-events-none" />
      <div className="absolute -right-16 top-48 h-[420px] w-[420px] rounded-full border border-[#123c32]/8 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 w-full sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-7 text-left">
            <div className="mb-6 inline-flex items-center gap-2 border border-[#123c32]/10 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#1f6e5c] backdrop-blur-md">
              <span className="h-1.5 w-1.5 bg-[#1f6e5c]" />
              Developer Platform
            </div>

            <h1 className="max-w-4xl text-[3.2rem] font-black leading-[0.9] tracking-tight text-[#13201c] sm:text-[4.2rem] lg:text-[5.8rem]">
              Build on
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
                MoCard.
              </span>
              <span className="block">Deploy instantly.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
              Connect applications, automate data flows, and build reliable integrations through a single, developer-first platform.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sandbox"
                className="group inline-flex items-center justify-center gap-3 bg-[#123c32] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1f6e5c]"
              >
                Try the Sandbox
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#api-products"
                className="group inline-flex items-center justify-center gap-3 border border-black/10 bg-white px-7 py-4 text-sm font-bold text-[#123c32] transition hover:border-[#123c32]/30"
              >
                Explore APIs
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-black/40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#1f6e5c]" />
                REST APIs & Webhooks
              </div>

              <div className="h-1 w-1 bg-black/20" />

              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-[#1f6e5c]" />
                Sandbox environment
              </div>
            </div>
          </div>

          {/* RIGHT — PRODUCT VISUAL */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto h-[480px] w-[400px]">
              {/* Main panel - Code terminal */}
              <div className="absolute left-8 top-12 h-[340px] w-[340px] rotate-[-3deg] border border-white bg-slate-950 p-5 shadow-[0_30px_80px_rgba(18,60,50,0.12)] text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center bg-[#1f6e5c] text-white">
                      <Code2 size={15} />
                    </div>
                    <span className="text-xs font-bold font-mono">
                      mocard.init()
                    </span>
                  </div>

                  <span className="bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold text-emerald-400">
                    ACTIVE
                  </span>
                </div>

                <div className="mt-6 space-y-4 font-mono text-[11px] text-white/70">
                  <p className="text-slate-400">// Initialize client</p>
                  <p>
                    <span className="text-[#e4d09b]">const</span> client = <span className="text-emerald-400">new</span> MoCard(<span className="text-emerald-400">"sec_key_..."</span>);
                  </p>
                  <p className="text-slate-400 mt-4">// Sync event status</p>
                  <p>
                    client.on(<span className="text-emerald-400">'sync'</span>, (data) =&gt; &#123;
                  </p>
                  <p className="pl-4">
                    console.log(<span className="text-[#e4d09b]">{"`Synced: ${data.id}`"}</span>);
                  </p>
                  <p>&#125;);</p>
                </div>
              </div>

              {/* Floating status */}
              <div className="absolute -right-2 top-0 w-48 border border-white bg-white/95 p-4 shadow-[0_20px_50px_rgba(18,60,50,0.10)] backdrop-blur text-slate-900">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">
                    Connection
                  </span>
                  <div className="h-2 w-2 bg-[#42a36b]" />
                </div>

                <p className="mt-3 text-xl font-black text-[#123c32]">
                  200 OK
                </p>

                <div className="mt-2 text-[10px] text-black/40">
                  POST /v1/integrations
                </div>
              </div>

              {/* Floating API block */}
              <div className="absolute -bottom-2 -left-4 w-56 bg-[#123c32] p-5 text-white shadow-[0_25px_60px_rgba(18,60,50,0.20)]">
                <div className="flex items-center gap-2 text-[#e4d09b]">
                  <Zap size={15} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Sandbox
                  </span>
                </div>

                <p className="mt-3 font-mono text-[11px] text-white/70">
                  Environment verified
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#e4d09b]">
                  <CheckCircle2 size={15} />
                  99.99% Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sandbox() {
  const [activeLang, setActiveLang] = useState('curl');

  const [authMethod, setAuthMethod] = useState('bearer');
  const [corridor, setCorridor] = useState('CRM_to_DB');
  const [amount, setAmount] = useState(250);
  const [destination, setDestination] = useState('hubspot');

  const [simStatus, setSimStatus] = useState('idle');
  const [simResult, setSimResult] = useState(null);

  const handleSimulate = (event) => {
    event.preventDefault();

    setSimStatus('loading');
    setSimResult(null);

    setTimeout(() => {
      setSimStatus('success');

      setSimResult({
        id: `intg_${Math.random().toString(36).slice(2, 12)}`,
        object: 'integration',
        status: 'succeeded',
        batch_size: Number(amount),
        data_type: 'records',
        recipient_service: destination,
        data_path: corridor,
        authentication: authMethod,
        reference: `mocard_ref_${Math.random()
          .toString(36)
          .slice(2, 10)
          .toUpperCase()}`,
        created_at: new Date().toISOString(),
        environment: 'sandbox',
      });
    }, 1000);
  };

  return (
    <section
      id="sandbox"
      className="py-16 sm:py-24 bg-[#f3f0e8] border-t border-black/5"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              Interactive sandbox
            </span>

            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight text-[#13201c] sm:text-5xl lg:text-6xl">
              Test before
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
                you write a line.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-6 text-black/50">
              Adjust parameters, preview request payloads dynamically across multiple languages, and trigger sandbox simulation responses instantly.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Configuration Form */}
          <div className="lg:col-span-5 bg-white border border-black/5 p-7 sm:p-9 flex flex-col justify-between">
            <form onSubmit={handleSimulate} className="space-y-6">
              <div className="pb-4 border-b border-black/5">
                <h3 className="text-lg font-black tracking-tight text-[#13201c]">
                  Request configuration
                </h3>
                <p className="text-xs text-black/40 mt-1">
                  Adjust parameter variables to update the sample payload.
                </p>
              </div>

              {/* Authentication */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Authentication
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'bearer', label: 'Bearer Token' },
                    { id: 'api_key', label: 'API Key' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setAuthMethod(option.id)}
                      className={`py-2.5 px-3 border text-xs font-bold transition-all ${
                        authMethod === option.id
                          ? 'border-[#123c32] text-[#123c32] bg-[#123c32]/5'
                          : 'border-black/5 text-[#13201c]/70 hover:bg-slate-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data flow */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Data flow
                </label>

                <select
                  value={corridor}
                  onChange={(e) => setCorridor(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-3 bg-[#f8f7f3] text-slate-900 border border-black/5 focus:border-[#1f6e5c] outline-none"
                >
                  <option value="CRM_to_DB">CRM → Database</option>
                  <option value="ERP_to_Analytics">ERP → Analytics</option>
                  <option value="Webhook_to_Broker">Webhook → Message Broker</option>
                  <option value="API_to_Cloud">API → Cloud Storage</option>
                </select>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Destination
                </label>

                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs font-semibold px-3.5 py-3 bg-[#f8f7f3] text-slate-900 border border-black/5 focus:border-[#1f6e5c] outline-none"
                >
                  <option value="hubspot">HubSpot CRM</option>
                  <option value="postgresql">PostgreSQL</option>
                  <option value="salesforce">Salesforce</option>
                  <option value="s3_bucket">Amazon S3</option>
                </select>
              </div>

              {/* Batch size */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Batch size
                  </label>

                  <span className="text-xs font-bold text-[#1f6e5c] font-mono">
                    {amount} records
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#1f6e5c] cursor-pointer"
                />
              </div>

              {/* Sandbox credentials */}
              <div className="bg-[#f8f7f3] border border-black/5 p-3.5">
                <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  Sandbox credential
                </span>

                <code className="block mt-1 text-[10px] text-slate-600 truncate font-mono">
                  sec_key_sandbox_abc123
                </code>
              </div>

              <button
                type="submit"
                disabled={simStatus === 'loading'}
                className="w-full py-3.5 bg-[#123c32] hover:bg-[#1f6e5c] disabled:bg-slate-300 text-white text-xs font-bold transition"
              >
                {simStatus === 'loading'
                  ? 'Sending request...'
                  : 'Send test request'}
              </button>
            </form>
          </div>

          {/* Code Console */}
          <div className="lg:col-span-7 bg-slate-950 overflow-hidden border border-white/5 min-h-[500px] flex flex-col justify-between text-left">
            <div>
              {/* Terminal top header bar */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-rose-500/70" />
                  <span className="w-3 h-3 bg-amber-500/70" />
                  <span className="w-3 h-3 bg-emerald-500/70" />
                </div>

                <span className="text-[10px] text-white/30 font-mono">
                  mocard sandbox shell
                </span>

                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5">
                  SANDBOX
                </span>
              </div>

              {/* Language Tabs */}
              <div className="border-b border-white/10 flex overflow-x-auto bg-slate-950/40">
                {[
                  { id: 'curl', label: 'cURL' },
                  { id: 'node', label: 'Node.js' },
                  { id: 'python', label: 'Python' },
                  { id: 'go', label: 'Go' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveLang(tab.id)}
                    className={`px-5 py-3 text-xs font-semibold border-b-2 transition whitespace-nowrap ${
                      activeLang === tab.id
                        ? 'border-[#e4d09b] text-white bg-white/[0.02]'
                        : 'border-transparent text-slate-500 hover:text-slate-350'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code Workspace */}
              <div className="p-6 font-mono space-y-6 text-left">
                {/* Request */}
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold mb-3">
                    Generated request payload
                  </div>

                  <pre className="text-emerald-400 text-[11px] sm:text-xs leading-relaxed whitespace-pre overflow-x-auto">
                    <code>
                      {sdkSnippets[activeLang](amount, destination)}
                    </code>
                  </pre>
                </div>

                <div className="border-t border-white/10 my-5" />

                {/* Response */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-sans font-bold">
                      Simulated Response payload
                    </span>

                    {simStatus === 'success' && (
                      <span className="text-[9px] px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                        200 OK
                      </span>
                    )}
                  </div>

                  {simStatus === 'idle' && (
                    <div className="text-slate-550 text-xs py-10 text-center font-sans">
                      Run a test request in the left panel to populate integration sync response.
                    </div>
                  )}

                  {simStatus === 'loading' && (
                    <div className="text-slate-500 text-xs py-10 text-center font-sans animate-pulse">
                      Processing sandbox request payload...
                    </div>
                  )}

                  {simStatus === 'success' && simResult && (
                    <pre className="text-slate-350 text-[11px] sm:text-xs leading-relaxed whitespace-pre overflow-x-auto">
                      <code>{JSON.stringify(simResult, null, 2)}</code>
                    </pre>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="border-t border-white/10 px-6 py-3 flex items-center justify-between text-[10px] text-slate-500 font-sans select-none">
              <span className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 ${
                    simStatus === 'success'
                      ? 'bg-emerald-500'
                      : 'bg-amber-500'
                  }`}
                />
                Sandbox Mode Active
              </span>

              <span>UTF-8</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function ApiProducts() {
  return (
    <section
      id="api-products"
      className="py-16 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              Integration APIs
            </span>

            <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight text-[#13201c] sm:text-5xl lg:text-6xl">
              Supported
              <span className="block font-serif font-normal italic text-[#1f6e5c]">
                payment channels.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-left">
            <p className="text-sm leading-6 text-black/55">
              Integrate local mobile wallets and major international credit card networks through a single, unified MoCard API integration layer.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiProducts.map((product, index) => (
            <article
              key={product.name}
              className="group bg-white border border-black/5 p-6 sm:p-8 flex flex-col justify-between hover:border-[#1f6e5c]/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3 text-left">
                  <div className="w-16 h-16 bg-[#f8f7f3] border border-black/5 flex items-center justify-center p-3 overflow-hidden">
                    <img
                      src={product.logo}
                      alt={`${product.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <span className="inline-flex bg-[#1f6e5c]/10 text-[#1f6e5c] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-lg font-black tracking-tight text-[#13201c] group-hover:text-[#1f6e5c] transition-colors duration-300 text-left">
                  {product.name}
                </h3>

                <p className="text-xs sm:text-sm text-black/45 leading-relaxed font-light text-left">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                <span className="text-xs font-bold text-[#123c32]">
                  Explore channel integration
                </span>

                <div className="flex h-9 w-9 items-center justify-center bg-[#f3f0e8] text-[#123c32] transition group-hover:bg-[#123c32] group-hover:text-white">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function WebhookSection() {
  const webhookCode = `const crypto = require('crypto');

function verifyMocardWebhook(req, res, next) {
  const signature = req.headers['x-mocard-signature'];
  const secret = process.env.MOCARD_WEBHOOK_SECRET;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (!signature || signature !== expected) {
    return res.status(401).send('Invalid signature');
  }

  next();
}`;

  return (
    <section className="bg-[#123c32] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left copy */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e4d09b]">
              Webhooks
            </span>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Know when
              <span className="block font-serif font-normal italic text-[#e4d09b]">
                events happen.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/50">
              MoCard triggers webhook events to alert your server instantly when status changes occur. Process data asynchronously in real-time.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Receive transaction success callbacks',
                'Verify authenticity with HMAC-SHA256 signatures',
                'Automate downstream tasks instantly',
                'Automatic retries on system failure'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center bg-white/10">
                    <Check size={13} className="text-[#e4d09b]" />
                  </div>

                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Shell container */}
          <div className="lg:col-span-7">
            <div className="relative border border-white/10 bg-white/[0.04] p-6 sm:p-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-white/40 font-mono text-[10px]">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 bg-white/15" />
                  <span className="h-2 w-2 bg-white/15" />
                  <span className="h-2 w-2 bg-white/15" />
                </div>

                <span>verification.js</span>
                <span className="text-[#e4d09b]">HMAC-SHA256</span>
              </div>

              <pre className="text-white/80 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-left">
                <code>{webhookCode}</code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function DeveloperPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden antialiased">
      <Navbar />

      <Hero />

      <Sandbox />

      <ApiProducts />

      <WebhookSection />

      <CardTransfer />

      <Footer />
    </div>
  );
}