import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Link2, Key, Settings, LogOut, DollarSign, 
  CheckCircle2, Clock, ArrowUpRight, Copy, Plus, RefreshCw, 
  Eye, EyeOff, Bell, ShieldCheck, HelpCircle, ChevronDown,
  Search, Download, Info, MoreHorizontal, Check, Terminal,
  BarChart3, Activity, CreditCard, Smartphone, Send, Play
} from 'lucide-react';
import logo from '../assets/logo.png';

export default function SandboxConsole() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rawTab = queryParams.get('tab') || 'overview';
  const initialTab = rawTab === 'reporting' ? 'overview' : rawTab;
  
  const [activeTab, setActiveTab] = useState(initialTab); // overview | links | api | settings
  const [isSandbox, setIsSandbox] = useState(true);
  const [revealSecret, setRevealSecret] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  const [isApiSubmenuOpen, setIsApiSubmenuOpen] = useState(false);
  
  React.useEffect(() => {
    const queryTab = new URLSearchParams(location.search).get('tab');
    if (queryTab === 'reporting') {
      navigate('/reporting-tools');
    } else if (queryTab && queryTab !== activeTab) {
      setActiveTab(queryTab);
    }
  }, [location.search, activeTab, navigate]);

  // Logs and Reporting states
  const [logSearchQuery, setLogSearchQuery] = useState('');
  const [logStatusFilter, setLogStatusFilter] = useState('all');
  const [logServiceFilter, setLogServiceFilter] = useState('all');
  const [logTimeFilter, setLogTimeFilter] = useState('7d');
  const [viewingLogPayload, setViewingLogPayload] = useState(null);

  const mockLogs = [
    { 
      id: 'log-1', 
      timestamp: '2026-08-13 12:44:12', 
      method: 'POST', 
      path: '/v1/payments', 
      status: 200, 
      statusText: 'OK',
      latency: '112ms', 
      ip: '197.243.12.85', 
      request: { amount: 45000, currency: 'RWF', customer: { email: 'client@domain.rw', name: 'Patrick B.' } },
      response: { id: 'pay_9024a8fc', status: 'success', message: 'Charge authorized successfully' }
    },
    { 
      id: 'log-2', 
      timestamp: '2026-08-13 12:38:05', 
      method: 'POST', 
      path: '/v1/messages', 
      status: 200, 
      statusText: 'OK',
      latency: '94ms', 
      ip: '197.243.12.85', 
      request: { to: '+250788123456', message: 'Your MoCard OTP is 894520' },
      response: { message_id: 'msg_3108d9fa', status: 'delivered', cost: '0.005 USD' }
    },
    { 
      id: 'log-3', 
      timestamp: '2026-08-13 11:55:40', 
      method: 'GET', 
      path: '/v1/verify', 
      status: 400, 
      statusText: 'Bad Request',
      latency: '34ms', 
      ip: '41.216.55.102', 
      request: { account_number: '1234', bank_code: 'unknown' },
      response: { error: 'invalid_bank_code', message: 'The bank code specified is invalid or unsupported in this region.' }
    },
    { 
      id: 'log-4', 
      timestamp: '2026-08-13 10:12:15', 
      method: 'POST', 
      path: '/v1/billing', 
      status: 200, 
      statusText: 'OK',
      latency: '142ms', 
      ip: '197.243.12.85', 
      request: { invoice_id: 'inv_8820', items: [{ name: 'Hosting fee', price: 29.00 }] },
      response: { invoice_url: 'https://mocard.link/invoice/inv_8820.pdf', status: 'sent' }
    },
    { 
      id: 'log-5', 
      timestamp: '2026-08-12 18:24:50', 
      method: 'POST', 
      path: '/v1/splits', 
      status: 500, 
      statusText: 'Internal Error',
      latency: '254ms', 
      ip: '196.44.82.11', 
      request: { parent_transaction: 'pay_123', beneficiaries: [{ id: 'b_1', ratio: 0.8 }] },
      response: { error: 'ledger_out_of_sync', message: 'A database lock occurred while computing ledger balances.' }
    }
  ];

  // Analytics chart state & data
  const [selectedYear, setSelectedYear] = useState('all'); // all | 2026 | 2025 | 2024 | 2023 | 2022
  const [metric, setMetric] = useState('amount'); // amount | transactions

  // Checkout tab simulation states
  const [checkoutPayTab, setCheckoutPayTab] = useState('card');
  const [checkoutCardNumber, setCheckoutCardNumber] = useState('4000 1234 5678 9010');
  const [checkoutCardHolder, setCheckoutCardHolder] = useState('Jane Doe');
  const [checkoutMomoCarrier, setCheckoutMomoCarrier] = useState('mtn');
  const [checkoutMomoPhone, setCheckoutMomoPhone] = useState('+250 788 123 456');
  const [checkoutSimStatus, setCheckoutSimStatus] = useState('idle');

  // Payouts tab simulation states
  const [payoutSimStatus, setPayoutSimStatus] = useState('idle');
  const [payoutProgress, setPayoutProgress] = useState(0);
  const [payoutRowStatus, setPayoutRowStatus] = useState(['Queued', 'Queued', 'Queued']);

  React.useEffect(() => {
    let timer;
    if (payoutSimStatus === 'processing') {
      timer = setInterval(() => {
        setPayoutProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setPayoutSimStatus('done');
            setPayoutRowStatus(['Success', 'Success', 'Success']);
            return 100;
          }
          const nextVal = prev + 10;
          if (nextVal >= 30 && nextVal < 70) {
            setPayoutRowStatus(['Success', 'Queued', 'Queued']);
          } else if (nextVal >= 70 && nextVal < 100) {
            setPayoutRowStatus(['Success', 'Success', 'Queued']);
          }
          return nextVal;
        });
      }, 250);
    } else if (payoutSimStatus === 'idle') {
      setPayoutProgress(0);
    }
    return () => clearInterval(timer);
  }, [payoutSimStatus]);

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
        { label: 'Nov', value: 98000, display: '$98,000' },
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
        { label: 'Jan', value: 30000, display: '$3,000' },
        { label: 'Feb', value: 35000, display: '$3,500' },
        { label: 'Mar', value: 42000, display: '$4,200' },
        { label: 'Apr', value: 40000, display: '$4,000' },
        { label: 'May', value: 50000, display: '$5,000' },
        { label: 'Jun', value: 48000, display: '$4,800' },
        { label: 'Jul', value: 55000, display: '$5,500' },
        { label: 'Aug', value: 60000, display: '$6,000' },
        { label: 'Sep', value: 57000, display: '$5,700' },
        { label: 'Oct', value: 65000, display: '$6,500' },
        { label: 'Nov', value: 72000, display: '$7,200' },
        { label: 'Dec', value: 85000, display: '$8,500' }
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

  // Link generator states
  const [linkProduct, setLinkProduct] = useState('');
  const [linkPrice, setLinkPrice] = useState('');
  const [linkCurrency, setLinkCurrency] = useState('RWF');
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [linkSearchTerm, setLinkSearchTerm] = useState('');
  const [linkCurrencyFilter, setLinkCurrencyFilter] = useState('all');
  const [linkStatusFilter, setLinkStatusFilter] = useState('all');

  const [generatedLinks, setGeneratedLinks] = useState([
    { id: '1', product: 'Akagera Park Entry Fee', price: '45,000', currency: 'RWF', url: 'https://mocard.link/pay/akagera-lodges-rw', date: 'Aug 12, 2026', status: 'Active' },
    { id: '2', product: 'SaaS Subscription Tier 2', price: '29.00', currency: 'USD', url: 'https://mocard.link/pay/saas-subscription-t2', date: 'Aug 10, 2026', status: 'Active' },
    { id: '3', product: 'Kigali Art Gallery Entry', price: '12,500', currency: 'RWF', url: 'https://mocard.link/pay/kigali-art-gallery', date: 'Jul 24, 2026', status: 'Paused' }
  ]);

  // API credentials dropdown and reference-inspired UI states
  const [selectedApi, setSelectedApi] = useState('payments');
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyEnv, setNewKeyEnv] = useState('Sandbox');
  const [newKeyPermission, setNewKeyPermission] = useState('Full access');
  const [searchTerm, setSearchTerm] = useState('');
  const [permissionFilter, setPermissionFilter] = useState('all');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [apiKeys, setApiKeys] = useState([
    { id: 'k-1', api: 'payments', name: 'Elevata Client', env: 'Sandbox', token: 're_eAND5QjD...', permission: 'Full access', lastUsed: '3 days ago', created: '5d ago' },
    { id: 'k-2', api: 'payments', name: 'Kigali Bespoke', env: 'Live', token: 're_AzCeQfXe...', permission: 'Full access', lastUsed: '2 months ago', created: '3mo ago' },
    { id: 'k-3', api: 'messaging', name: 'Onboarding Client', env: 'Sandbox', token: 're_hkCYUAs6...', permission: 'Sending access', lastUsed: 'No activity', created: '3mo ago' },
    { id: 'k-4', api: 'billing', name: 'Billing Invoices Rail', env: 'Live', token: 're_xK91ad2A...', permission: 'Read-only', lastUsed: 'Yesterday', created: '1mo ago' }
  ]);

  const handleCreateApiKey = (e) => {
    e.preventDefault();
    if (!newKeyName.trim()) {
      showToast('Please provide a name for the API key.');
      return;
    }
    
    // Simulate generation of token structure like image
    const charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randStr = '';
    for (let i = 0; i < 8; i++) {
      randStr += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    const generatedToken = `re_${randStr}...`;

    const newKey = {
      id: `k-${Date.now()}`,
      api: selectedApi,
      name: newKeyName,
      env: newKeyEnv,
      token: generatedToken,
      permission: newKeyPermission,
      lastUsed: 'No activity',
      created: 'Just now'
    };
    
    setApiKeys([newKey, ...apiKeys]);
    setNewKeyName('');
    setIsCreateModalOpen(false);
    showToast(`New API Key "${newKeyName}" created successfully!`);
  };

  // Toast state
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2500);
  };

  const handleGenerateLink = (e) => {
    e.preventDefault();
    if (!linkProduct || !linkPrice) {
      showToast('Please provide product name and price.');
      return;
    }
    const cleanSlug = linkProduct.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const mockUrl = `https://mocard.link/pay/${cleanSlug || 'invoice'}-${Math.floor(100 + Math.random() * 900)}`;
    const newLink = {
      id: Date.now().toString(),
      product: linkProduct,
      price: parseFloat(linkPrice).toLocaleString(),
      currency: linkCurrency,
      url: mockUrl,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Active'
    };
    setGeneratedLinks([newLink, ...generatedLinks]);
    setLinkProduct('');
    setLinkPrice('');
    setIsCreateLinkModalOpen(false);
    showToast('Payment Link generated successfully!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    showToast('Link copied to clipboard!');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const transactions = [
    { id: 'TX-10924', customer: 'Kigali Booking Group', method: 'MTN Mobile Money', amount: '120,000 RWF', status: 'success', date: 'Today, 11:24 AM' },
    { id: 'TX-10923', customer: 'Satguru Eco-Tours', method: 'Visa Credit Card', amount: '450.00 USD', status: 'success', date: 'Today, 09:12 AM' },
    { id: 'TX-10922', customer: 'Airtel Payout Client', method: 'Airtel Money Payout', amount: '80,000 RWF', status: 'pending', date: 'Yesterday, 04:35 PM' },
    { id: 'TX-10921', customer: 'Norrsken Foundation Hub', method: 'Mastercard debit', amount: '1,200.00 USD', status: 'success', date: 'Aug 11, 2026' },
    { id: 'TX-10920', customer: 'Byiza Boutique Lodge', method: 'MTN Mobile Money', amount: '220,000 RWF', status: 'success', date: 'Aug 10, 2026' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800 antialiased">
      
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-300 font-outfit text-sm font-semibold flex items-center space-x-2 border border-slate-800">
          <ShieldCheck className="w-4 h-4 text-pp-blue" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 text-slate-700">
        <div>
          {/* Logo Header */}
          <div className="h-20 border-b border-slate-200 flex items-center px-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="MoCard" className="h-8.5 object-contain" />
              <span className="text-xl font-black font-outfit text-pp-black tracking-tight group-hover:text-pp-blue transition-colors duration-300 ml-1.5">
                MoCard
              </span>
            </Link>
        
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 ${
                activeTab === 'overview' 
                  ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4.5 h-4.5" />
              <span>Console Overview</span>
            </button>
            
            {/* Online Checkout */}
            <button 
              onClick={() => setActiveTab('checkout')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 ${
                activeTab === 'checkout' 
                  ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <CreditCard className="w-4.5 h-4.5" />
              <span>Data Workflows</span>
            </button>

            <button 
              onClick={() => setActiveTab('links')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 ${
                activeTab === 'links' 
                  ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Link2 className="w-4.5 h-4.5" />
              <span>API Connections</span>
            </button>

            {/* Bulk Payouts */}
            <button 
              onClick={() => setActiveTab('payouts')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 ${
                activeTab === 'payouts' 
                  ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Send className="w-4.5 h-4.5" />
              <span>Bulk Integrations</span>
            </button>
            {/* APIs Expandable Accordion Menu */}
            <div className="space-y-1">
              <button 
                onClick={() => {
                  setActiveTab('api');
                  setIsApiSubmenuOpen(!isApiSubmenuOpen);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 cursor-pointer ${
                  activeTab === 'api' 
                    ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Key className="w-4.5 h-4.5" />
                  <span>API Credentials</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition duration-200 transform ${isApiSubmenuOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {/* Sub-menu items for each B2B API */}
              {isApiSubmenuOpen && (
                <div className="pl-9 pr-2 py-1.5 space-y-1 animate-in slide-in-from-top-2 duration-200">
                  {[
                    { id: 'payments', label: 'Integrations API' },
                    { id: 'messaging', label: 'Messaging API' },
                    { id: 'billing', label: 'Email & Alerts API' },
                    { id: 'verify', label: 'Verification API' },
                    { id: 'splits', label: 'Data Routing API' },
                    { id: 'cards', label: 'Custom Connectors API' }
                  ].map((subApi) => (
                    <button
                      key={subApi.id}
                      onClick={() => {
                        setActiveTab('api');
                        setSelectedApi(subApi.id);
                      }}
                      className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-semibold font-outfit transition duration-150 cursor-pointer ${
                        activeTab === 'api' && selectedApi === subApi.id
                          ? 'bg-slate-100 text-pp-blue font-bold'
                          : 'text-slate-450 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {subApi.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/reporting-tools"
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <BarChart3 className="w-4.5 h-4.5" />
              <span>Reporting &amp; Logs</span>
            </Link>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold font-outfit transition duration-200 ${
                activeTab === 'settings' 
                  ? 'bg-pp-blue text-white shadow-xs shadow-pp-blue/10' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Settings className="w-4.5 h-4.5" />
              <span>Business Settings</span>
            </button>
          </nav>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center space-x-3 px-4 py-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-pp-blue flex items-center justify-center font-bold font-outfit text-sm">
              MB
            </div>
            <div>
              <p className="text-xs font-bold font-outfit text-slate-800">Mocard Business</p>
              <p className="text-[10px] text-slate-400 font-mono">ID: 924510</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-semibold font-outfit text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition duration-200 cursor-pointer"
          >
            <LogOut className="w-4.5 h-4.5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-grow flex flex-col min-h-screen overflow-y-auto">
        
        {/* Top Header bar */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold font-outfit text-slate-900 capitalize">
              {activeTab === 'overview' ? 'Integration Console' : activeTab === 'links' ? 'API Connections' : activeTab === 'api' ? 'API keys' : activeTab === 'reporting' ? 'Reporting & Logs' : 'Business Settings'}
            </h1>
            
        
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-500 relative transition duration-250">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pp-blue rounded-full" />
            </button>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center space-x-2.5">
              <span className="text-xs font-bold font-outfit text-slate-500">Kigali, HQ</span>
              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center font-bold font-outfit text-sm">
                RW
              </div>
            </div>
          </div>
        </header>

        {/* Content Pane */}
        <div className="p-8 flex-grow space-y-8">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <>
              {/* Stats Widget Row (Redesigned with Icons & Hover Effects) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Stat 1: Total Volume */}
                <div 
                  onClick={() => {
                    setMetric('amount');
                    const element = document.getElementById('analytics-chart');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[130px] hover:border-slate-300 hover:shadow-md transition duration-250 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Total Sync Volume</span>
                    <div className="p-1.5 bg-pp-blue/10 rounded-lg text-pp-blue group-hover:scale-105 transition">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <span className="text-2xl font-black font-outfit text-slate-900">$142,580.00</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">+12.4%</span>
                  </div>
                </div>

                {/* Stat 2: Settled Payouts */}
                <div 
                  onClick={() => {
                    setMetric('transactions');
                    const element = document.getElementById('analytics-chart');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[130px] hover:border-slate-300 hover:shadow-md transition duration-250 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Completed Syncs</span>
                    <div className="p-1.5 bg-emerald-50 rounded-lg text-emerald-600 group-hover:scale-105 transition">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <span className="text-2xl font-black font-outfit text-slate-900">$138,410.00</span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">Realtime</span>
                  </div>
                </div>

                {/* Stat 3: Active Links */}
                <div 
                  onClick={() => setActiveTab('links')}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[130px] hover:border-slate-300 hover:shadow-md transition duration-250 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Active API Connections</span>
                    <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-500 group-hover:scale-105 transition">
                      <Link2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <span className="text-2xl font-black font-outfit text-slate-900">{generatedLinks.length} Connections</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab('links');
                        setIsCreateLinkModalOpen(true);
                      }}
                      className="text-[10px] font-bold text-pp-blue hover:underline font-outfit flex items-center space-x-0.5"
                    >
                      <span>Create</span>
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Stat 4: Gateway Uptime */}
                <div 
                  onClick={() => {
                    setActiveTab('api');
                    setIsApiSubmenuOpen(true);
                  }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between min-h-[130px] hover:border-slate-300 hover:shadow-md transition duration-250 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Gateway API Uptime</span>
                    <div className="p-1.5 bg-cyan-50 rounded-lg text-cyan-500 group-hover:scale-105 transition">
                      <Terminal className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <span className="text-2xl font-black font-outfit text-slate-900">99.99%</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                      <span>Online</span>
                    </span>
                  </div>
                </div>

              </div>

              {/* Central Block: Left Bar Chart (Big Width) | Right Transactions Table */}
              <div id="analytics-chart" className="grid lg:grid-cols-12 gap-8 items-start scroll-mt-6">
                
                {/* Left Side: Activity Analytics Bar Chart (Big Width) */}
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-xs p-6 space-y-6 flex flex-col justify-between min-h-[460px]">
                  
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

                        {/* Year selection dropdown (Shows months if a year is selected, All Years default) */}
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
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs text-slate-400 font-medium">
                      <span>Showing {metric === 'amount' ? 'monetary volume values' : 'transaction count rails'}</span>
                      <span className="font-semibold text-slate-655 font-outfit">
                        {selectedYear === 'all' ? 'Annual Breakdown (2022-Present)' : `Monthly Breakdown for ${selectedYear}`}
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
                            <span className="text-[10px] font-bold text-slate-450 mt-2 font-outfit tracking-wide">{item.label}</span>
                          </div>
                        );
                      });
                    })()}
                  </div>

                </div>

                {/* Right Side: Recent Transactions */}
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl shadow-xs overflow-hidden">
                  <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="font-bold font-outfit text-slate-900 text-lg">Recent Transactions</h3>
                    <button 
                      onClick={() => showToast('Transactions refreshed!')}
                      className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-550 transition cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="p-5 flex items-center justify-between hover:bg-slate-50/50 transition">
                        <div className="flex items-center space-x-3.5">
                          <div className={`p-2.5 rounded-xl border ${tx.status === 'success' ? 'bg-emerald-50 border-emerald-100 text-emerald-650' : 'bg-amber-50 border-amber-100 text-amber-600'}`}>
                            {tx.status === 'success' ? <CheckCircle2 className="w-4.5 h-4.5" /> : <Clock className="w-4.5 h-4.5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 font-outfit">{tx.customer}</p>
                            <p className="text-[11px] font-medium text-slate-450 font-mono">{tx.id} • {tx.method}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-900 font-mono">{tx.amount}</p>
                          <p className="text-[10px] text-slate-400">{tx.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom: API Integration Status Summary Section (With clickable navigations) */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-bold font-outfit text-slate-900 text-lg">API Integrations Summary</h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">Quick status breakdown of active API keys and endpoints in this environment.</p>
                  </div>
                  <button 
                    onClick={() => {
                      setActiveTab('api');
                      setIsApiSubmenuOpen(true);
                    }}
                    className="text-xs font-bold text-pp-blue hover:underline font-outfit flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Configure Developer APIs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Grid of the 6 B2B APIs status */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: 'payments', label: 'Integrations API', desc: 'SaaS & Database Connectors', status: 'Active', keys: '2 active keys', color: 'emerald' },
                    { id: 'messaging', label: 'Messaging API', desc: 'WhatsApp & SMS OTPs', status: 'Active', keys: '1 active key', color: 'emerald' },
                    { id: 'billing', label: 'Email & Alerts API', desc: 'PDF Reports & Alerts', status: 'Active', keys: '1 active key', color: 'emerald' },
                    { id: 'verify', label: 'Verification API', desc: 'Endpoint & Host Lookup', status: 'Pending Config', keys: 'No active keys', color: 'amber' },
                    { id: 'splits', label: 'Data Routing API', desc: 'Payload Splitters & Routing', status: 'Inactive', keys: 'No active keys', color: 'slate' },
                    { id: 'cards', label: 'Custom Connectors API', desc: 'Custom Service Adapters', status: 'Inactive', keys: 'No active keys', color: 'slate' }
                  ].map((api) => (
                    <div 
                      key={api.id}
                      onClick={() => {
                        setActiveTab('api');
                        setSelectedApi(api.id);
                        setIsApiSubmenuOpen(true);
                      }}
                      className="border border-slate-200/85 rounded-2xl p-5 hover:border-slate-350 hover:bg-slate-50/50 hover:shadow-xs transition duration-200 cursor-pointer flex flex-col justify-between space-y-4 group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold font-outfit text-slate-800 text-sm group-hover:text-slate-900 transition">{api.label}</h4>
                          <p className="text-[11px] text-slate-400 font-light mt-0.5">{api.desc}</p>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold font-outfit ${
                          api.color === 'emerald' 
                            ? 'bg-emerald-50 border border-emerald-100 text-emerald-600' 
                            : api.color === 'amber'
                            ? 'bg-amber-50 border border-amber-100 text-amber-600'
                            : 'bg-slate-100 border border-slate-200 text-slate-500'
                        }`}>
                          {api.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-450 border-t border-slate-100/60 pt-3">
                        <span>{api.keys}</span>
                        <span className="text-pp-blue font-bold font-outfit flex items-center space-x-0.5 group-hover:underline">
                          <span>Manage</span>
                          <ArrowUpRight className="w-3 h-3 transition transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* TAB 2: API CONNECTIONS (REDESIGNED TO MATCH API SECTION STYLE) */}
          {activeTab === 'links' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6 animate-in fade-in duration-200 text-slate-800 font-sans">
              
              {/* Header section */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-slate-900">API Connections</h3>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsCreateLinkModalOpen(true)}
                    className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 rounded-full font-bold font-outfit text-xs transition duration-200 cursor-pointer flex items-center space-x-1 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create API Connection</span>
                  </button>
                  <button className="border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 w-9 h-9 flex items-center justify-center rounded-xl transition duration-200 cursor-pointer">
                    <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
                  </button>
                </div>
              </div>

              {/* Filters & Search Row */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                
                {/* Search input container */}
                <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 flex-grow max-w-md">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    value={linkSearchTerm}
                    onChange={(e) => setLinkSearchTerm(e.target.value)}
                    placeholder="Search links..."
                    className="bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-450 w-full"
                  />
                </div>

                {/* Dropdowns & Export Row */}
                <div className="flex items-center space-x-3">
                  {/* Currency Filter Dropdown */}
                  <div className="relative">
                    <select 
                      value={linkCurrencyFilter}
                      onChange={(e) => setLinkCurrencyFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="all">All currencies</option>
                      <option value="RWF">RWF</option>
                      <option value="USD">USD</option>
                      <option value="KES">KES</option>
                      <option value="GHS">GHS</option>
                    </select>
                  </div>

                  {/* Status Filter Dropdown */}
                  <div className="relative">
                    <select 
                      value={linkStatusFilter}
                      onChange={(e) => setLinkStatusFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="all">All statuses</option>
                      <option value="Active">Active</option>
                      <option value="Paused">Paused</option>
                    </select>
                  </div>

                  {/* Export / Download Button */}
                  <button 
                    onClick={() => showToast('API Connections exported!')}
                    className="border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-800 w-9 h-9 flex items-center justify-center rounded-xl transition duration-200 cursor-pointer hover:border-slate-400 hover:bg-slate-100"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* API Connections Table Area */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/75 text-slate-450 text-[10px] font-bold uppercase tracking-wider text-left select-none border-b border-slate-200">
                      <th className="px-5 py-4 w-12 text-center">
                        <input 
                          type="checkbox" 
                          readOnly 
                          checked 
                          className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer opacity-70 bg-white border-slate-300" 
                        />
                      </th>
                      <th className="px-6 py-4 font-outfit">Product / Service</th>
                      <th className="px-6 py-4 font-outfit">Payment URL</th>
                      <th className="px-6 py-4 font-outfit">Price</th>
                      <th className="px-6 py-4 font-outfit">Created</th>
                      <th className="px-6 py-4 font-outfit">Status</th>
                      <th className="px-5 py-4 w-12 text-center"></th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold">
                    {(() => {
                      const filteredLinks = generatedLinks.filter((lnk) => {
                        // filter by currency
                        if (linkCurrencyFilter !== 'all' && lnk.currency !== linkCurrencyFilter) return false;
                        
                        // filter by status
                        if (linkStatusFilter !== 'all' && lnk.status !== linkStatusFilter) return false;
                        
                        // filter by search term
                        if (linkSearchTerm.trim() !== '') {
                          const query = linkSearchTerm.toLowerCase();
                          const matchesProduct = lnk.product.toLowerCase().includes(query);
                          const matchesUrl = lnk.url.toLowerCase().includes(query);
                          const matchesPrice = lnk.price.toLowerCase().includes(query);
                          if (!matchesProduct && !matchesUrl && !matchesPrice) return false;
                        }
                        
                        return true;
                      });

                      if (filteredLinks.length === 0) {
                        return (
                          <tr>
                            <td colSpan={7} className="px-6 py-12 text-center text-slate-400 font-light leading-relaxed">
                              No payment links found. Click "Create payment link" above to generate a new shareable url.
                            </td>
                          </tr>
                        );
                      }

                      return filteredLinks.map((lnk) => (
                        <tr key={lnk.id} className="hover:bg-slate-50/50 transition duration-150 group">
                          {/* Checkbox column */}
                          <td className="px-5 py-4 w-12 text-center">
                            <input 
                              type="checkbox" 
                              className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer bg-white border-slate-350" 
                            />
                          </td>

                          {/* Link Emblem & Product Name */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3.5">
                              <div className="w-9 h-9 rounded-xl bg-pp-blue/10 border border-pp-blue/20 text-pp-blue flex items-center justify-center shrink-0">
                                <Link2 className="w-4.5 h-4.5" />
                              </div>
                              <span className="font-semibold font-outfit text-slate-800 group-hover:text-slate-900 select-all cursor-pointer transition">
                                {lnk.product}
                              </span>
                            </div>
                          </td>

                          {/* URL Mask Tag with copy button */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg select-all max-w-xs truncate">
                                {lnk.url}
                              </span>
                              <button 
                                onClick={() => copyToClipboard(lnk.url)}
                                className="p-1 rounded bg-transparent text-slate-400 hover:text-slate-600 transition cursor-pointer"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="px-6 py-4 text-slate-800 font-mono font-bold">
                            {lnk.price} {lnk.currency}
                          </td>

                          {/* Created date */}
                          <td className="px-6 py-4 text-slate-500">
                            {lnk.date}
                          </td>

                          {/* Status pill */}
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-outfit ${
                              lnk.status === 'Active' 
                                ? 'bg-emerald-50 border border-emerald-250 text-emerald-600' 
                                : 'bg-slate-100 border border-slate-200 text-slate-500'
                            }`}>
                              {lnk.status}
                            </span>
                          </td>

                          {/* More options button */}
                          <td className="px-5 py-4 w-12 text-center text-slate-400 group-hover:text-slate-650 transition">
                            <button className="p-1 rounded hover:bg-slate-100 transition cursor-pointer">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

              {/* Table Footer info */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 select-none">
                {(() => {
                  const filteredCount = generatedLinks.length;
                  return (
                    <>
                      <span>Page 1 – 1 of {filteredCount} links – 40 items</span>
                      <div className="flex items-center space-x-1 cursor-pointer hover:text-slate-750 transition font-semibold">
                        <span>40 items</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Pop-up Overlay Create Modal for Links */}
              {isCreateLinkModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-250 backdrop-blur-xs">
                  <div className="bg-white border border-slate-250 w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 text-slate-800">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <h3 className="text-lg font-bold font-outfit text-slate-900">Create Payment Link</h3>
                      <button 
                        onClick={() => setIsCreateLinkModalOpen(false)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>

                    <form onSubmit={handleGenerateLink} className="space-y-5 font-sans text-left">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Product / Service Name</label>
                        <input 
                          type="text" 
                          required
                          value={linkProduct}
                          onChange={(e) => setLinkProduct(e.target.value)}
                          placeholder="e.g. Akagera Park Entry Fee"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none transition"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Price Amount</label>
                          <input 
                            type="number" 
                            required
                            value={linkPrice}
                            onChange={(e) => setLinkPrice(e.target.value)}
                            placeholder="45000"
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none transition"
                          />
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Currency</label>
                          <select 
                            value={linkCurrency}
                            onChange={(e) => setLinkCurrency(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none cursor-pointer transition bg-white"
                          >
                            <option value="RWF">RWF</option>
                            <option value="KES">KES</option>
                            <option value="USD">USD</option>
                            <option value="GHS">GHS</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition duration-200 cursor-pointer shadow-sm mt-4"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Create payment link</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: API CREDENTIALS (PREMIUM LIGHT MODE DESIGN WITH WHITE BG) */}
          {activeTab === 'api' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6 animate-in fade-in duration-200 text-slate-800 font-sans">
              
              {/* Header section */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-slate-900">API keys</h3>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 rounded-full font-bold font-outfit text-xs transition duration-200 cursor-pointer flex items-center space-x-1 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create API key</span>
                  </button>
                  <button className="border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 w-9 h-9 flex items-center justify-center rounded-xl transition duration-200 cursor-pointer">
                    <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
                  </button>
                </div>
              </div>

              {/* Filters & Search Row */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                
                {/* Search input container */}
                <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 flex-grow max-w-md">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-450 w-full"
                  />
                </div>

                {/* Dropdowns & Export Row */}
                <div className="flex items-center space-x-3">
                  {/* B2B API Service Dropdown Selector */}
                  <div className="relative">
                    <select 
                      value={selectedApi}
                      onChange={(e) => setSelectedApi(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="payments">Payments API</option>
                      <option value="messaging">Messaging API</option>
                      <option value="billing">Email & Billing API</option>
                      <option value="verify">Verification API</option>
                      <option value="splits">Split Transfers API</option>
                      <option value="cards">Card Issuing API</option>
                    </select>
                  </div>

                  {/* Permissions Filter Dropdown */}
                  <div className="relative">
                    <select 
                      value={permissionFilter}
                      onChange={(e) => setPermissionFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="all">All permissions</option>
                      <option value="Full access">Full access</option>
                      <option value="Sending access">Sending access</option>
                      <option value="Read-only">Read-only</option>
                    </select>
                  </div>

                  {/* Export / Download Button */}
                  <button 
                    onClick={() => showToast('API credentials schema exported!')}
                    className="border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-800 w-9 h-9 flex items-center justify-center rounded-xl transition duration-200 cursor-pointer hover:border-slate-400 hover:bg-slate-100"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* API Keys Table Area */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/75 text-slate-450 text-[10px] font-bold uppercase tracking-wider text-left select-none border-b border-slate-200">
                      <th className="px-5 py-4 w-12 text-center">
                        <input 
                          type="checkbox" 
                          readOnly 
                          checked 
                          className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer opacity-70 bg-white border-slate-300" 
                        />
                      </th>
                      <th className="px-6 py-4 font-outfit">Name</th>
                      <th className="px-6 py-4 font-outfit">Token</th>
                      <th className="px-6 py-4 font-outfit">Permission</th>
                      <th className="px-6 py-4 font-outfit">Last used</th>
                      <th className="px-6 py-4 font-outfit">Created</th>
                      <th className="px-5 py-4 w-12 text-center"></th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold">
                    {(() => {
                      const filteredKeys = apiKeys.filter((keyObj) => {
                        // filter by API service
                        if (keyObj.api !== selectedApi) return false;
                        
                        // filter by permission
                        if (permissionFilter !== 'all' && keyObj.permission !== permissionFilter) return false;
                        
                        // filter by search term
                        if (searchTerm.trim() !== '') {
                          const query = searchTerm.toLowerCase();
                          const matchesName = keyObj.name.toLowerCase().includes(query);
                          const matchesToken = keyObj.token.toLowerCase().includes(query);
                          if (!matchesName && !matchesToken) return false;
                        }
                        
                        return true;
                      });

                      if (filteredKeys.length === 0) {
                        return (
                          <tr>
                            <td colSpan={7} className="px-6 py-12 text-center text-slate-400 font-light leading-relaxed">
                              No keys match your filter options. Click "+ Create API key" above to generate a new key pair.
                            </td>
                          </tr>
                        );
                      }

                      return filteredKeys.map((keyObj) => (
                        <tr key={keyObj.id} className="hover:bg-slate-50/50 transition duration-150 group">
                          {/* Checkbox column */}
                          <td className="px-5 py-4 w-12 text-center">
                            <input 
                              type="checkbox" 
                              className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer bg-white border-slate-350" 
                            />
                          </td>

                          {/* Key Icon Badge and Name */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3.5">
                              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                                <Key className="w-4 h-4" />
                              </div>
                              <span className="font-semibold font-outfit text-slate-800 group-hover:text-slate-900 select-all cursor-pointer transition">
                                {keyObj.name}
                              </span>
                            </div>
                          </td>

                          {/* Token Mask Tag */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-[11px] text-slate-650 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg select-all">
                                {keyObj.token}
                              </span>
                              <button 
                                onClick={() => copyToClipboard(keyObj.token)}
                                className="p-1 rounded bg-transparent text-slate-400 hover:text-slate-600 transition cursor-pointer"
                              >
                                <Copy className="w-3 h-3" />
                              </button>
                            </div>
                          </td>

                          {/* Permission Label */}
                          <td className="px-6 py-4 text-slate-800">
                            {keyObj.permission}
                          </td>

                          {/* Last Used indicator */}
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-1.5 text-slate-500 group-hover:text-slate-700 transition">
                              <span>{keyObj.lastUsed}</span>
                              {keyObj.lastUsed !== 'No activity' && (
                                <Info className="w-3.5 h-3.5 text-slate-400 hover:text-slate-500 cursor-help" />
                              )}
                            </div>
                          </td>

                          {/* Created date */}
                          <td className="px-6 py-4 text-slate-500">
                            {keyObj.created}
                          </td>

                          {/* More options button */}
                          <td className="px-5 py-4 w-12 text-center text-slate-400 group-hover:text-slate-650 transition">
                            <button className="p-1 rounded hover:bg-slate-100 transition cursor-pointer">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

              {/* Table Footer info */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 select-none">
                {(() => {
                  const filteredCount = apiKeys.filter(k => k.api === selectedApi).length;
                  return (
                    <>
                      <span>Page 1 – 1 of {filteredCount} keys – 40 items</span>
                      <div className="flex items-center space-x-1 cursor-pointer hover:text-slate-750 transition font-semibold">
                        <span>40 items</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Webhook Configuration Block inside light card */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold font-outfit text-slate-900">Webhook Notification Dispatch</h4>
                  <p className="text-xs text-slate-400 font-light">Set an HTTPS URL to receive real-time webhook payloads for all transactions.</p>
                </div>
                <div className="flex items-center space-x-3 max-w-2xl">
                  <input 
                    type="url" 
                    placeholder="https://api.yourdomain.com/v1/mocard-webhooks"
                    className="flex-grow px-4 py-3 bg-slate-50 border border-slate-200 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-900 rounded-xl outline-none font-sans text-sm transition"
                  />
                  <button 
                    onClick={() => showToast('Webhook configuration updated!')}
                    className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold text-xs transition duration-200 cursor-pointer shrink-0 shadow-sm"
                  >
                    Save Endpoint
                  </button>
                </div>
              </div>

              {/* Pop-up Overlay Create Modal in matching Light Theme */}
              {isCreateModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-250 backdrop-blur-xs">
                  <div className="bg-white border border-slate-200 w-full max-w-md rounded-3xl p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 text-slate-800">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <h3 className="text-lg font-bold font-outfit text-slate-900">Create API Key</h3>
                      <button 
                        onClick={() => setIsCreateModalOpen(false)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>

                    <form onSubmit={handleCreateApiKey} className="space-y-5 font-sans text-left">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Key Name / Label</label>
                        <input 
                          type="text" 
                          required
                          value={newKeyName}
                          onChange={(e) => setNewKeyName(e.target.value)}
                          placeholder="e.g. Elevata Production Client"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">API Target Service</label>
                        <select 
                          value={selectedApi}
                          onChange={(e) => setSelectedApi(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none cursor-pointer transition bg-white"
                        >
                          <option value="payments">Payments API (POST /v1/payments)</option>
                          <option value="messaging">Messaging API (POST /v1/messages)</option>
                          <option value="billing">Email & Billing API (POST /v1/billing)</option>
                          <option value="verify">Verification API (GET /v1/verify)</option>
                          <option value="splits">Split Transfers API (POST /v1/splits)</option>
                          <option value="cards">Card Issuing API (POST /v1/cards)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Permissions</label>
                        <select 
                          value={newKeyPermission}
                          onChange={(e) => setNewKeyPermission(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none cursor-pointer transition bg-white"
                        >
                          <option value="Full access">Full access (Read / Write)</option>
                          <option value="Sending access">Sending access (Write only)</option>
                          <option value="Read-only">Read-only (Read only)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-outfit block">Environment</label>
                        <select 
                          value={newKeyEnv}
                          onChange={(e) => setNewKeyEnv(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-950 rounded-xl text-xs outline-none cursor-pointer transition bg-white"
                        >
                          <option value="Sandbox">Sandbox (Staging environment)</option>
                          <option value="Live">Live (Production environment)</option>
                        </select>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition duration-200 cursor-pointer shadow-sm mt-4"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Create API key</span>
                      </button>
                    </form>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB: REPORTING & LOGS */}
          {activeTab === 'reporting' && (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6 animate-in fade-in duration-200 text-slate-800 font-sans">
              
              {/* Header section */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-slate-900">Developer logs &amp; metrics</h3>
                  <p className="text-xs text-slate-400 font-light mt-0.5">Audit trail of outbound callbacks and inbound API requests made to Mocard gateways.</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {
                      showToast('API metrics exported in CSV format!');
                    }}
                    className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 rounded-full font-bold font-outfit text-xs transition duration-200 cursor-pointer flex items-center space-x-1 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV logs</span>
                  </button>
                </div>
              </div>

              {/* Developer stats cards row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Total API Inbound requests</span>
                  <p className="text-2xl font-black font-outfit text-slate-900 mt-2">24,850</p>
                  <p className="text-[10px] text-slate-400 mt-1">Last 7 days volume</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Average request latency</span>
                  <p className="text-2xl font-black font-outfit text-slate-900 mt-2">120ms</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">P99 response speed</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-outfit">Gateway delivery success</span>
                  <p className="text-2xl font-black font-outfit text-emerald-600 mt-2">99.94%</p>
                  <p className="text-[10px] text-slate-400 mt-1">Uptime SLA compliant</p>
                </div>
              </div>

              {/* Filters & Search Row */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                
                {/* Search input container */}
                <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 flex-grow max-w-md">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    value={logSearchQuery}
                    onChange={(e) => setLogSearchQuery(e.target.value)}
                    placeholder="Search logs by path, IP or ID..."
                    className="bg-transparent border-none outline-none text-xs text-slate-800 placeholder-slate-450 w-full"
                  />
                </div>

                {/* Dropdowns */}
                <div className="flex items-center space-x-3">
                  {/* Service Selector */}
                  <div className="relative">
                    <select 
                      value={logServiceFilter}
                      onChange={(e) => setLogServiceFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="all">All API endpoints</option>
                      <option value="/v1/payments">Payments API (/v1/payments)</option>
                      <option value="/v1/messages">Messaging API (/v1/messages)</option>
                      <option value="/v1/billing">Billing API (/v1/billing)</option>
                      <option value="/v1/verify">Verification API (/v1/verify)</option>
                      <option value="/v1/splits">Splits API (/v1/splits)</option>
                    </select>
                  </div>

                  {/* Status Code Filter */}
                  <div className="relative">
                    <select 
                      value={logStatusFilter}
                      onChange={(e) => setLogStatusFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="all">All responses</option>
                      <option value="200">200 OK / Success</option>
                      <option value="400">400 Bad Request</option>
                      <option value="500">500 Server Error</option>
                    </select>
                  </div>

                  {/* Time Filter */}
                  <div className="relative">
                    <select 
                      value={logTimeFilter}
                      onChange={(e) => setLogTimeFilter(e.target.value)}
                      className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold font-outfit px-3.5 py-2.5 rounded-xl outline-none cursor-pointer hover:border-slate-400 transition bg-slate-50"
                    >
                      <option value="24h">Last 24 hours</option>
                      <option value="7d">Last 7 days</option>
                      <option value="30d">Last 30 days</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Logs Table Area */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/75 text-slate-450 text-[10px] font-bold uppercase tracking-wider text-left select-none border-b border-slate-200">
                      <th className="px-5 py-4 w-12 text-center">
                        <input 
                          type="checkbox" 
                          readOnly 
                          checked 
                          className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer opacity-70 bg-white border-slate-300" 
                        />
                      </th>
                      <th className="px-6 py-4 font-outfit">Timestamp</th>
                      <th className="px-6 py-4 font-outfit">Method</th>
                      <th className="px-6 py-4 font-outfit">API Path</th>
                      <th className="px-6 py-4 font-outfit">Status</th>
                      <th className="px-6 py-4 font-outfit">Latency</th>
                      <th className="px-6 py-4 font-outfit">IP Address</th>
                      <th className="px-6 py-4 font-outfit text-center">Payloads</th>
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-100 text-xs font-semibold">
                    {(() => {
                      const filteredLogs = mockLogs.filter((log) => {
                        // filter by endpoint path
                        if (logServiceFilter !== 'all' && log.path !== logServiceFilter) return false;
                        
                        // filter by status code
                        if (logStatusFilter !== 'all' && log.status.toString() !== logStatusFilter) return false;
                        
                        // filter by search term
                        if (logSearchQuery.trim() !== '') {
                          const query = logSearchQuery.toLowerCase();
                          const matchesPath = log.path.toLowerCase().includes(query);
                          const matchesIp = log.ip.toLowerCase().includes(query);
                          const matchesStatus = log.status.toString().includes(query);
                          if (!matchesPath && !matchesIp && !matchesStatus) return false;
                        }
                        
                        return true;
                      });

                      if (filteredLogs.length === 0) {
                        return (
                          <tr>
                            <td colSpan={8} className="px-6 py-12 text-center text-slate-400 font-light leading-relaxed">
                              No HTTP gateway request logs match the selected filter conditions.
                            </td>
                          </tr>
                        );
                      }

                      return filteredLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-slate-50/50 transition duration-150 group">
                          {/* Checkbox column */}
                          <td className="px-5 py-4 w-12 text-center">
                            <input 
                              type="checkbox" 
                              className="rounded accent-pp-blue w-3.5 h-3.5 cursor-pointer bg-white border-slate-350" 
                            />
                          </td>

                          {/* Timestamp */}
                          <td className="px-6 py-4 text-slate-500 font-mono">
                            {log.timestamp}
                          </td>

                          {/* HTTP Method */}
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold font-mono ${
                              log.method === 'POST' ? 'bg-pp-blue/15 text-pp-blue' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {log.method}
                            </span>
                          </td>

                          {/* API Path */}
                          <td className="px-6 py-4 font-mono text-slate-800">
                            {log.path}
                          </td>

                          {/* Status */}
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-outfit ${
                              log.status === 200 
                                ? 'bg-emerald-50 border border-emerald-250 text-emerald-600' 
                                : log.status === 400
                                ? 'bg-amber-50 border border-amber-250 text-amber-600'
                                : 'bg-rose-50 border border-rose-250 text-rose-600'
                            }`}>
                              {log.status} {log.statusText}
                            </span>
                          </td>

                          {/* Latency */}
                          <td className="px-6 py-4 text-slate-550 font-mono">
                            {log.latency}
                          </td>

                          {/* IP Address */}
                          <td className="px-6 py-4 text-slate-500 font-mono">
                            {log.ip}
                          </td>

                          {/* View JSON Action */}
                          <td className="px-6 py-4 text-center">
                            <button 
                              onClick={() => setViewingLogPayload(log)}
                              className="px-3 py-1 bg-slate-50 border border-slate-200 hover:border-pp-blue hover:text-pp-blue hover:bg-white text-slate-650 text-[10px] font-bold font-outfit rounded-lg transition duration-200 cursor-pointer shadow-2xs"
                            >
                              View Payload
                            </button>
                          </td>
                        </tr>
                      ));
                    })()}
                  </tbody>
                </table>
              </div>

              {/* Table Footer info */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-4 select-none">
                {(() => {
                  const filteredCount = mockLogs.length;
                  return (
                    <>
                      <span>Page 1 – 1 of {filteredCount} log items – Live audit</span>
                      <div className="flex items-center space-x-1 cursor-pointer hover:text-slate-750 transition font-semibold">
                        <span>Real-time</span>
                        <ChevronDown className="w-3.5 h-3.5 animate-pulse text-emerald-500" />
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Pop-up Payload Schema Viewer Modal */}
              {viewingLogPayload && (
                <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-250 backdrop-blur-xs">
                  <div className="bg-white border border-slate-250 w-full max-w-2xl rounded-3xl p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200 text-slate-800">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-lg font-bold font-outfit text-slate-900">HTTP payload logs</h3>
                        <p className="text-xs text-slate-400 font-light mt-0.5">
                          {viewingLogPayload.method} {viewingLogPayload.path} • Status {viewingLogPayload.status}
                        </p>
                      </div>
                      <button 
                        onClick={() => setViewingLogPayload(null)}
                        className="text-slate-400 hover:text-slate-700 text-xs font-semibold cursor-pointer"
                      >
                        Close
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 font-mono text-[11px]">
                      {/* Request block */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans block">Request Payload</span>
                        <pre className="bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-auto max-h-60 text-slate-750 select-all leading-relaxed whitespace-pre-wrap">
                          {JSON.stringify(viewingLogPayload.request, null, 2)}
                        </pre>
                      </div>

                      {/* Response block */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans block">Response Payload</span>
                        <pre className="bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-auto max-h-60 text-slate-750 select-all leading-relaxed whitespace-pre-wrap">
                          {JSON.stringify(viewingLogPayload.response, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 4: BUSINESS SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1.5">
                <h3 className="font-bold font-outfit text-slate-900 text-lg">Business Configuration</h3>
                <p className="text-xs text-slate-500 font-light">Manage your B2B account profile, legal settlements details, and support email channels.</p>
              </div>
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 font-outfit">Registered Brand Name</label>
                    <p className="text-sm font-bold text-slate-900 font-outfit">MoCard Integration B2B Ltd</p>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 font-outfit">Settlement Country</label>
                    <p className="text-sm font-bold text-slate-900 font-outfit">Kigali Heights, Rwanda</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 font-outfit">Support Channel Email</label>
                    <p className="text-sm font-bold text-slate-900 font-mono">business@mocard.rw</p>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1 font-outfit">Default Wallet Settle</label>
                    <p className="text-sm font-bold text-slate-900 font-outfit">MTN Mobile Money Settle</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900 font-outfit">Compliance Framework (AML / KYC)</p>
                      <p className="text-[11px] text-slate-400 font-light leading-snug max-w-sm mt-0.5">Your integration compliance verification is active and verified by regional central banks.</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full font-outfit uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB: ONLINE CHECKOUT */}
          {activeTab === 'checkout' && (
            <div className="space-y-6 animate-in fade-in duration-200 text-slate-800 font-sans">
              
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit text-slate-900">Online Checkout</h3>
                    <p className="text-xs text-slate-450 font-light mt-0.5">Customize your payment widget theme, check integration codes, and run simulator tests.</p>
                  </div>
                  <span className="text-[10px] font-bold text-pp-blue bg-pp-blue/5 border border-pp-blue/20 px-3 py-1 rounded-full font-outfit uppercase tracking-wider">
                    Checkout Active
                  </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left sub-column: Configuration & Customizer */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold font-outfit text-slate-800 border-b border-slate-100 pb-2">Widget Customization</h4>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold uppercase text-slate-450 block font-outfit">Primary Theme Color</label>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-pp-blue border border-slate-200 cursor-pointer" />
                            <span className="text-xs font-mono text-slate-700">#0070E0 (Default)</span>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[9px] font-bold uppercase text-slate-455 block font-outfit">Fallback Routing Mode</label>
                          <select className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none cursor-pointer">
                            <option>Automatic failover (Recommended)</option>
                            <option>Strict Card network</option>
                            <option>Strict Mobile money</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <label className="text-[9px] font-bold uppercase text-slate-455 block font-outfit">Integration Script Snippet</label>
                        <pre className="bg-slate-50 text-slate-900 p-4 rounded-xl border border-slate-200 font-mono text-[10px] select-all overflow-x-auto leading-relaxed">
{`Mocard.checkout.open({
  amount: 2900,
  currency: 'USD',
  productName: 'SaaS Plan',
  onSuccess: (res) => console.log('Paid:', res.reference)
});`}
                        </pre>
                      </div>
                    </div>

                    {/* Active Sessions list */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-sm font-bold font-outfit text-slate-800 border-b border-slate-100 pb-2">Active Checkout Sessions</h4>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 text-[11px]">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-slate-150 border-b border-slate-200 text-slate-450 uppercase text-[9px] font-bold tracking-wider">
                              <th className="px-4 py-2">Session ID</th>
                              <th className="px-4 py-2">Customer</th>
                              <th className="px-4 py-2">Amount</th>
                              <th className="px-4 py-2 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2.5 font-mono text-slate-655">sess_9024a8fc</td>
                              <td className="px-4 py-2.5">Jane Doe (jane@domain.com)</td>
                              <td className="px-4 py-2.5 font-bold">$29.00</td>
                              <td className="px-4 py-2.5 text-right text-emerald-600 font-bold">Success</td>
                            </tr>
                            <tr className="border-t border-slate-200/60">
                              <td className="px-4 py-2.5 font-mono text-slate-655">sess_8102bd3a</td>
                              <td className="px-4 py-2.5">Alex N. (alex@kigali.rw)</td>
                              <td className="px-4 py-2.5 font-bold">RWF 15,000</td>
                              <td className="px-4 py-2.5 text-right text-emerald-600 font-bold">Success</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Right sub-column: Interactive simulator widget */}
                  <div className="lg:col-span-5 flex justify-center bg-slate-55 border border-slate-200 p-6 rounded-2xl">
                    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-outfit">Simulated Checkout Frame</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>

                      {checkoutSimStatus === 'idle' && (
                        <form onSubmit={(e) => {
                          e.preventDefault();
                          setCheckoutSimStatus('loading');
                          setTimeout(() => setCheckoutSimStatus('success'), 1500);
                        }} className="space-y-3.5">
                          
                          <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 flex items-center justify-between">
                            <div>
                              <span className="text-[8px] font-bold text-slate-450 uppercase block font-outfit">Selected Item</span>
                              <span className="text-[10px] text-slate-500 font-light">SaaS Monthly Plan</span>
                            </div>
                            <span className="text-base font-black text-slate-900 font-outfit">$29.00</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 bg-slate-100/70 p-1 rounded-lg border border-slate-200/50">
                            <button 
                              type="button"
                              onClick={() => setCheckoutPayTab('card')}
                              className={`py-1.5 px-2 text-[10px] font-bold rounded-md flex items-center justify-center space-x-1.5 transition ${
                                checkoutPayTab === 'card' ? 'bg-white text-pp-blue shadow-3xs' : 'text-slate-500'
                              }`}
                            >
                              <CreditCard className="w-3.5 h-3.5" />
                              <span>Card</span>
                            </button>
                            <button 
                              type="button"
                              onClick={() => setCheckoutPayTab('momo')}
                              className={`py-1.5 px-2 text-[10px] font-bold rounded-md flex items-center justify-center space-x-1.5 transition ${
                                checkoutPayTab === 'momo' ? 'bg-white text-pp-blue shadow-3xs' : 'text-slate-500'
                              }`}
                            >
                              <Smartphone className="w-3.5 h-3.5" />
                              <span>Momo</span>
                            </button>
                          </div>

                          {checkoutPayTab === 'card' ? (
                            <div className="space-y-2">
                              <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-450 uppercase block font-outfit">Card Number</label>
                                <input 
                                  type="text" 
                                  value={checkoutCardNumber} 
                                  onChange={(e) => setCheckoutCardNumber(e.target.value)}
                                  className="w-full text-[11px] font-semibold px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono text-slate-800 focus:border-pp-blue"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-450 uppercase block font-outfit">Carrier</label>
                                <select 
                                  value={checkoutMomoCarrier} 
                                  onChange={(e) => setCheckoutMomoCarrier(e.target.value)}
                                  className="w-full text-[11px] font-semibold px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-pp-blue"
                                >
                                  <option value="mtn">MTN Mobile Money</option>
                                  <option value="airtel">Airtel Money</option>
                                </select>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[8px] font-bold text-slate-450 uppercase block font-outfit">Phone Number</label>
                                <input 
                                  type="text" 
                                  value={checkoutMomoPhone} 
                                  onChange={(e) => setCheckoutMomoPhone(e.target.value)}
                                  className="w-full text-[11px] font-semibold px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono focus:border-pp-blue"
                                />
                              </div>
                            </div>
                          )}

                          <button 
                            type="submit"
                            className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] font-outfit shadow-sm cursor-pointer transition mt-2"
                          >
                            <span>Simulate Checkout</span>
                          </button>
                        </form>
                      )}

                      {checkoutSimStatus === 'loading' && (
                        <div className="py-8 flex flex-col items-center justify-center space-y-3 text-center">
                          <RefreshCw className="w-6 h-6 text-pp-blue animate-spin" />
                          <div>
                            <h5 className="text-[10px] font-bold text-slate-800 font-outfit">Authorizing Transaction</h5>
                            <p className="text-[8px] text-slate-400 font-light mt-0.5">Contacting partner clearing networks...</p>
                          </div>
                        </div>
                      )}

                      {checkoutSimStatus === 'success' && (
                        <div className="py-6 flex flex-col items-center justify-center space-y-3 text-center">
                          <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-150 text-emerald-500 flex items-center justify-center">
                            <Check className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-800 font-outfit">Checkout Succeeded</h5>
                            <p className="text-[8px] text-slate-400 font-mono mt-0.5">Ref: pay_checkout_abc123</p>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setCheckoutSimStatus('idle')}
                            className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 text-[9px] font-bold font-outfit cursor-pointer transition"
                          >
                            Reset
                          </button>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB: BULK PAYOUTS */}
          {activeTab === 'payouts' && (
            <div className="space-y-6 animate-in fade-in duration-200 text-slate-800 font-sans">
              
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit text-slate-900">Bulk Payouts &amp; Disbursals</h3>
                    <p className="text-xs text-slate-450 font-light mt-0.5">Upload recipient CSV records or trigger ledger transfers dynamically via API corridors.</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 font-outfit">
                    <span>Available Ledger Balance:</span>
                    <span className="text-slate-900 font-bold bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">RWF 1,850,000</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: List of Batch Payouts & CSV upload area */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* CSV upload card */}
                    <div className="border border-dashed border-slate-350 rounded-2xl p-6 bg-slate-50/50 text-center space-y-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                        <Download className="w-5 h-5 rotate-180" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 font-outfit">Drop CSV recipient list here</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">File format must include Recipient Phone, Amount, and Gateway Provider.</p>
                      </div>
                      <button 
                        onClick={() => showToast('CSV loaded successfully! Ready for simulation.')}
                        className="px-4 py-2 border border-slate-250 bg-white hover:bg-slate-50 rounded-xl text-[10px] font-bold font-outfit text-slate-655 cursor-pointer transition"
                      >
                        Select CSV file
                      </button>
                    </div>

                    {/* Batch history table */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold font-outfit text-slate-800 border-b border-slate-100 pb-2">Disbursal Batch History</h4>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 text-[11px]">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-slate-100 border-b border-slate-200 text-slate-450 uppercase text-[9px] font-bold tracking-wider">
                              <th className="px-4 py-2">Batch ID</th>
                              <th className="px-4 py-2">Beneficiaries</th>
                              <th className="px-4 py-2">Total Amount</th>
                              <th className="px-4 py-2 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2.5 font-mono text-slate-655">batch_9108a8f1</td>
                              <td className="px-4 py-2.5">3 recipients (MTN &amp; Airtel)</td>
                              <td className="px-4 py-2.5 font-bold">RWF 43,000</td>
                              <td className="px-4 py-2.5 text-right text-emerald-600 font-bold">Success</td>
                            </tr>
                            <tr className="border-t border-slate-200/60">
                              <td className="px-4 py-2.5 font-mono text-slate-655">batch_7190d1bc</td>
                              <td className="px-4 py-2.5">14 recipients (Equity Bank)</td>
                              <td className="px-4 py-2.5 font-bold">RWF 890,000</td>
                              <td className="px-4 py-2.5 text-right text-emerald-600 font-bold">Success</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Simulator Widget */}
                  <div className="lg:col-span-5 bg-slate-55 border border-slate-200 p-6 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-outfit">Interactive Batch Runner</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white text-[10px]">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[8px] font-bold tracking-wider">
                            <th className="px-3 py-1.5">Recipient</th>
                            <th className="px-3 py-1.5">Amount</th>
                            <th className="px-3 py-1.5 text-right">State</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr>
                            <td className="px-3 py-2 font-bold text-slate-800">Patrick B. (+250 788...)</td>
                            <td className="px-3 py-2 font-mono">RWF 15,000</td>
                            <td className="px-3 py-2 text-right">
                              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                                payoutRowStatus[0] === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                              }`}>{payoutRowStatus[0]}</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 font-bold text-slate-800">Sandra K. (+254 712...)</td>
                            <td className="px-3 py-2 font-mono">KES 4,500</td>
                            <td className="px-3 py-2 text-right">
                              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                                payoutRowStatus[1] === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                              }`}>{payoutRowStatus[1]}</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 font-bold text-slate-800">Jean-Luc M. (+250 788...)</td>
                            <td className="px-3 py-2 font-mono">RWF 28,000</td>
                            <td className="px-3 py-2 text-right">
                              <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${
                                payoutRowStatus[2] === 'Success' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                              }`}>{payoutRowStatus[2]}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {payoutSimStatus === 'processing' && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[8px] font-bold text-slate-450 uppercase font-outfit">
                          <span>Disbursing batch...</span>
                          <span>{payoutProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div style={{ width: `${payoutProgress}%` }} className="bg-indigo-600 h-full transition-all duration-300" />
                        </div>
                      </div>
                    )}

                    {payoutSimStatus === 'done' && (
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-[10px] font-light leading-snug">
                        <span className="font-bold block font-outfit">Batch Disbursed!</span>
                        Cleared RWF 43,000 &amp; KES 4,500 without failures.
                      </div>
                    )}

                    {payoutSimStatus === 'idle' ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setPayoutRowStatus(['Processing', 'Processing', 'Processing']);
                          setPayoutProgress(0);
                          setPayoutSimStatus('processing');
                        }}
                        className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] font-outfit shadow-sm cursor-pointer transition flex items-center justify-center space-x-1.5"
                      >
                        <Play className="w-3 h-3" />
                        <span>Run Payout Simulation</span>
                      </button>
                    ) : payoutSimStatus === 'done' ? (
                      <button 
                        onClick={() => {
                          setPayoutRowStatus(['Queued', 'Queued', 'Queued']);
                          setPayoutProgress(0);
                          setPayoutSimStatus('idle');
                        }}
                        className="w-full py-2.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 font-bold text-[11px] font-outfit transition cursor-pointer"
                      >
                        Reset Batch Simulator
                      </button>
                    ) : (
                      <div className="w-full py-2.5 text-center text-slate-400 text-[11px] font-bold font-outfit flex items-center justify-center space-x-1.5 bg-slate-100 border border-slate-200 rounded-full">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Disbursing channels...</span>
                      </div>
                    )}

                  </div>

                </div>

              </div>

            </div>
          )}

        </div>
      </main>

    </div>
  );
}
