import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "What integrations does Mocard support?",
      a: "Mocard provides out-of-the-box integrations with global and local payment processors, SMS gateways, CRM systems (such as Salesforce and HubSpot), financial reporting tools, and leading logistics networks. If a service has an API, Mocard can connect to it."
    },
    {
      q: "How secure is the Mocard routing gateway?",
      a: "Security is our highest priority. All API calls passing through the Mocard router are secured using advanced TLS 1.3 encryption, custom OAuth2 tokens, and rigorous request signing. We adhere strictly to data privacy standards and support PCI-compliant data pipelines."
    },
    {
      q: "Can Mocard build custom integrations for our proprietary software?",
      a: "Yes. In addition to our pre-configured integrations, our dedicated engineering team works closely with enterprise partners to design, build, and maintain custom middleware connections tailored precisely to your specific internal software applications."
    },
    {
      q: "Is developer sandbox testing available?",
      a: "Yes, we provide all merchants and developers with access to a comprehensive sandbox environment. Here, you can run simulated requests, test failure conditions, and verify your webhook responses before switching your configuration to live production."
    },
    {
      q: "What SLA support does Mocard offer?",
      a: "We offer an industry-leading 99.9% uptime Service Level Agreement (SLA). Our backend monitoring tools track latency and connection success rates around the clock, with our technical support team instantly responsive to any priority tickets."
    }
  ];

  const handleToggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section className="bg-white py-20 md:py-24 scroll-mt-24" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 group cursor-pointer">
          <div className="inline-flex items-center space-x-2 bg-slate-100 group-hover:bg-pp-blue/10 text-slate-650 group-hover:text-pp-blue px-4 py-1.5 rounded-full text-xs font-bold font-outfit uppercase tracking-wider transition-all duration-300">
            <HelpCircle className="w-4.5 h-4.5" />
            <span>Support & Help</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-pp-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-650 font-sans text-base max-w-xl mx-auto">
            Everything you need to know about setting up, billing, security, and developer options.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-pp-black bg-slate-50/40 shadow-sm' : 'border-slate-200 hover:border-slate-350 bg-white'
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-outfit text-[15px] md:text-base font-bold text-pp-black focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`p-1.5 rounded-lg transition-colors duration-200 ${
                    isOpen ? 'bg-pp-black text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 border-t border-slate-200' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-slate-600 text-sm md:text-[15px] leading-relaxed font-sans font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
