import React, { useState } from 'react';

export default function CardTransfer() {
  const [activeTab, setActiveTab] = useState('curl');

  const codeSnippets = {
    curl: `curl -X POST https://api.mocard.com/v1/integrations \\
  -H "Authorization: Bearer sec_key_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 250.00,
    "currency": "USD",
    "callback_url": "https://yourdomain.com/webhooks"
  }'`,
    node: `const mocard = require('mocard')('sec_key_...');

await mocard.integrations.create({
  amount: 250.00,
  currency: 'USD',
  callbackUrl: 'https://yourdomain.com/webhooks'
});`,
    python: `import mocard

mocard.api_key = "sec_key_..."
mocard.Integration.create(
  amount=250.00,
  currency="USD",
  callback_url="https://yourdomain.com/webhooks"
)`,
    json: `{
  "id": "intg_8f9a2b7c4d",
  "object": "integration",
  "status": "active",
  "amount": 250.00,
  "currency": "USD",
  "created_at": "2026-08-08T10:46:57Z"
}`
  };

  const features = [
    {
      title: "Well-Documented REST APIs",
      desc: "Clear HTTP endpoints, detailed error states, and predictable JSON payloads that simplify integration.",
      color: "bg-slate-50 border-slate-200 text-slate-700"
    },
    {
      title: "Production-Ready SDKs",
      desc: "Official integration kits for Node.js, Python, and other modern languages to get you up and running instantly.",
      color: "bg-slate-50 border-slate-200 text-slate-700"
    },
    {
      title: "Instant Sandbox Testing",
      desc: "A fully featured staging environment to simulate success, failure, and various connection scenarios.",
      color: "bg-slate-50 border-slate-200 text-slate-700"
    },
    {
      title: "Reliable Webhook Deliveries",
      desc: "Get real-time HTTP POST notifications triggered on transaction events with automatic retry policies.",
      color: "bg-slate-50 border-slate-200 text-slate-700"
    }
  ];

  return (
    <section className="bg-slate-50 py-14 md:py-18 border-t border-slate-200 relative overflow-hidden scroll-mt-24" id="api-integration">
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pp-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2 group cursor-pointer">
          <span className="text-xs md:text-sm font-bold tracking-widest text-slate-500 group-hover:text-pp-blue uppercase font-outfit transition-colors duration-300">
            Developer Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight leading-tight">
            Built by Developers, <br className="hidden sm:inline" />
            For Modern Businesses
          </h2>
          <p className="text-slate-600 font-sans text-xs md:text-sm leading-relaxed font-light max-w-2xl mx-auto">
            Our APIs and tools make it easy to connect third-party platforms. Integrate our secure services into your application workflow with minimal effort.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: SLEEK CODE EDITOR */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Visual Backplate */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-slate-100/30 rounded-2xl -rotate-1 scale-95 -z-10" />

            <div className="w-full bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 font-mono text-xs leading-relaxed text-slate-300">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-950/80 px-5 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] text-slate-500 font-sans">mocard-api-integration</div>
                <div className="w-14" /> {/* Spacer */}
              </div>

              {/* Language Tabs */}
              <div className="bg-slate-950/40 border-b border-slate-800 px-4 flex space-x-1 select-none font-sans">
                {[
                  { id: 'curl', label: 'cURL' },
                  { id: 'node', label: 'Node.js' },
                  { id: 'python', label: 'Python' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-2 text-[11px] font-semibold border-b-2 transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-pp-blue text-white bg-slate-900/60'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Code Workspace */}
              <div className="p-5 overflow-x-auto min-h-[320px] flex flex-col justify-between bg-slate-900/90 font-mono">
                
                {/* Request Pane */}
                <div className="space-y-1.5">
                  <div className="text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                    <span>API Request ({activeTab})</span>
                  </div>
                  <pre className="text-xs text-emerald-400 whitespace-pre scrollbar-none overflow-x-auto leading-relaxed">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800/80 my-3" />

                {/* Response Pane */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] text-slate-500 uppercase tracking-widest font-sans font-semibold">
                    <span>Successful Response</span>
                    <span className="text-[8px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                      200 OK
                    </span>
                  </div>
                  <pre className="text-xs text-slate-300 whitespace-pre scrollbar-none overflow-x-auto leading-relaxed">
                    <code>{codeSnippets.json}</code>
                  </pre>
                </div>

                {/* Status Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[9px] text-slate-500 font-sans select-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Sandbox Mode</span>
                  </div>
                  <span>UTF-8</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: DEVELOPER FEATURES */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-outfit text-pp-black">
                Developer-First Architecture
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-sans font-light">
                Connect and scale your business using integrations built for flexibility, security, and developer speed. Access extensive tooling to monitor requests and build production-ready services in minutes.
              </p>
            </div>

            {/* Grid of features */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feat, idx) => (
                <div key={idx} className="space-y-2 group cursor-pointer">
                  <div className="flex items-center">
                    <h4 className="font-bold text-xs md:text-sm font-outfit text-pp-black group-hover:text-pp-blue transition-colors duration-300">
                      {feat.title}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-sans font-light">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA block */}
            <div className="pt-4 border-t border-slate-200/65 flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://docs.mocard.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-pp-black hover:bg-pp-blue text-white text-xs font-bold font-outfit text-center transition duration-250 shadow-sm flex items-center justify-center cursor-pointer"
              >
                <span>Read API Reference</span>
              </a>
              <span className="text-[10px] text-slate-450 font-sans">
                or explore our staging sandbox environment
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
