import React, { useState } from 'react';
import { ArrowUpRight, Check, Code2 } from 'lucide-react';

const API_BASE_URL = 'https://api.mocard.rw';

const codeSnippets = {
  curl: `curl -X POST ${API_BASE_URL}/v1/transfers \\
  -H "Authorization: Bearer sec_key_live_xyz789" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 150000,
    "currency": "RWF",
    "recipient": "card_token_993a4",
    "reference": "invoice_ref_1092"
  }'`,

  node: `const mocard = require('mocard')('sec_key_live_xyz789');

const transfer = await mocard.transfers.create({
  amount: 150000,
  currency: 'RWF',
  recipient: 'card_token_993a4',
  reference: 'invoice_ref_1092'
});

console.log(transfer.id);`,

  python: `import mocard

mocard.api_key = "sec_key_live_xyz789"

transfer = mocard.Transfer.create(
    amount=150000,
    currency="RWF",
    recipient="card_token_993a4",
    reference="invoice_ref_1092"
)

print(transfer.id)`,

  json: `{
  "id": "trsf_9k8a2b5c",
  "object": "transfer",
  "amount": 150000,
  "currency": "RWF",
  "status": "succeeded",
  "recipient": "card_token_993a4",
  "reference": "invoice_ref_1092",
  "created_at": "2026-08-19T11:42:00Z"
}`
};

const features = [
  {
    title: 'Clean API design',
    desc: 'Access clean, structured JSON endpoints built using industry-standard REST guidelines for absolute consistency.'
  },
  {
    title: 'Detailed logs',
    desc: 'Track full request bodies, response payloads, headers, and webhook attempts in real time for immediate debugging.'
  },
  {
    title: 'HMAC-SHA256 signature verification',
    desc: 'Secure all incoming webhooks using cryptographically signed validation headers to prevent unauthorized traffic.'
  },
  {
    title: 'Production Staging Environment',
    desc: 'Verify integration workflows safely in sandbox mode using test API keys and simulated network failures.'
  }
];

export default function CardTransfer() {
  const [activeTab, setActiveTab] = useState('curl');

  return (
    <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-t border-black/5" id="api-integration">
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#1f6e5c]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#e4d09b]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end mb-12">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1f6e5c]">
              Developer Experience
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-[#13201c]">
              Built by developers, <span className="block font-serif font-normal italic text-[#1f6e5c]">for modern businesses.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-left">
            <p className="text-sm leading-6 text-black/50">
              Our APIs and tools make it easy to connect third-party platforms. Integrate our secure services into your application workflow with minimal effort.
            </p>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: SLEEK CODE EDITOR */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="w-full bg-slate-950 shadow-2xl overflow-hidden border border-white/5 font-mono text-xs leading-relaxed text-slate-350">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-5 py-3 border-b border-white/10 flex items-center justify-between select-none">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-rose-500/70" />
                  <div className="w-3 h-3 bg-amber-500/70" />
                  <div className="w-3 h-3 bg-emerald-500/70" />
                </div>
                <div className="text-[10px] text-slate-500 font-sans">mocard-api-integration</div>
                <div className="w-14" />
              </div>

              {/* Language Tabs */}
              <div className="bg-slate-950/40 border-b border-white/10 flex overflow-x-auto">
                {[
                  { id: 'curl', label: 'cURL' },
                  { id: 'node', label: 'Node.js' },
                  { id: 'python', label: 'Python' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-xs font-semibold border-b-2 transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-[#e4d09b] text-white bg-white/[0.02]'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code Workspace */}
              <div className="p-6 overflow-x-auto min-h-[320px] flex flex-col justify-between bg-slate-950 text-left">
                
                {/* Request Pane */}
                <div className="space-y-2">
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-bold">
                    <span>API Request ({activeTab})</span>
                  </div>
                  <pre className="text-xs text-emerald-400 whitespace-pre overflow-x-auto leading-relaxed">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-4" />

                {/* Response Pane */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 uppercase tracking-widest font-sans font-bold">
                    <span>Successful Response</span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 font-bold">
                      200 OK
                    </span>
                  </div>
                  <pre className="text-xs text-slate-350 whitespace-pre overflow-x-auto leading-relaxed">
                    <code>{codeSnippets.json}</code>
                  </pre>
                </div>

                {/* Status Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-500 font-sans select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500" />
                    <span>Sandbox Mode</span>
                  </div>
                  <span>UTF-8</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: DEVELOPER FEATURES */}
          <div className="lg:col-span-6 space-y-8 lg:pl-6 text-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-black font-outfit text-[#13201c]">
                Developer-First Architecture
              </h3>
              <p className="text-black/50 text-sm leading-relaxed font-sans font-light">
                Connect and scale your business using integrations built for flexibility, security, and developer speed. Access extensive tooling to monitor requests and build production-ready services in minutes.
              </p>
            </div>

            {/* Grid of features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-2 group cursor-pointer">
                  <h4 className="font-bold text-sm font-outfit text-[#13201c] group-hover:text-[#1f6e5c] transition-colors duration-300">
                    {feat.title}
                  </h4>
                  <p className="text-black/45 text-xs leading-relaxed font-sans font-light">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA block */}
            <div className="pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://docs.mocard.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto px-6 py-3 bg-[#123c32] hover:bg-[#1f6e5c] text-white text-xs font-bold font-outfit text-center transition duration-250 flex items-center justify-center gap-2"
              >
                <span>Read API Reference</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-[10px] text-black/40 font-sans">
                or explore our staging sandbox environment
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
