import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { ArrowLeft, CheckCircle, RefreshCw, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Combined Login | 2: Forgot Password | 3: Reset Success
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | error | success
  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Simulate login verification
    setTimeout(() => {
      if (email.includes('error') || password.length < 4) {
        setStatus('error');
        setErrorMsg('Some of your information isn\'t correct. Please try again.');
      } else {
        setStatus('success');
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to merchant dashboard on success
        }, 800);
      }
    }, 1200);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Simulate reset link email dispatch
    setTimeout(() => {
      setStep(3);
      setStatus('idle');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between relative font-sans">
      
      {/* Top Floating Home Link */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-pp-black transition duration-200 uppercase tracking-widest font-outfit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-[460px] w-full bg-white rounded-[1.5rem] border border-slate-200/80 shadow-sm p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
          
          {/* Progress loading indicator */}
          {status === 'submitting' && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-pp-blue animate-pulse" />
          )}

          <div>
            {/* Logo Header */}
            <div className="text-center mb-8 flex flex-col items-center justify-center">
              <Link to="/" className="inline-flex items-center space-x-2 group">
                <img src={logo} alt="MoCard" className="h-9.5 object-contain" />
                <span className="text-2xl font-black font-outfit text-pp-black tracking-tight group-hover:text-pp-blue transition-colors duration-300 ml-1.5">
                  MoCard
                </span>
              </Link>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="mb-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg p-3.5 flex items-start space-x-2.5 text-rose-700 text-sm leading-relaxed animate-in fade-in duration-200 font-sans">
                <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* VIEW 1: COMBINED LOGIN FORM */}
            {step === 1 && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-650 font-outfit block">Email</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full px-4 py-4 border border-slate-350 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-900 rounded-lg outline-none font-sans text-base placeholder-slate-400 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-650 font-outfit block">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      disabled={status === 'submitting' || status === 'success'}
                      className="w-full pl-4 pr-12 py-4 border border-slate-350 focus:border-pp-blue 
                      focus:ring-1 focus:ring-pp-blue text-slate-900 rounded-lg outline-none font-sans
                       text-base placeholder-slate-400 transition-all disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg('');
                      setStep(2);
                    }}
                    className="text-pp-blue hover:underline text-[15px] font-bold tracking-wide cursor-pointer font-sans"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className="w-full py-3.5 rounded-full bg-pp-blue hover:bg-pp-blue-dark 
                  text-white font-bold text-[15px] flex items-center justify-center space-x-2
                   transition duration-200 shadow-sm mt-6 cursor-pointer disabled:bg-slate-300"
                >
                  {status === 'submitting' ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Logging In...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Success!</span>
                    </>
                  ) : (
                    <span>Log In</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-3.5 rounded-full border border-pp-blue text-pp-blue hover:bg-[#e8f0fe]/40 font-bold text-[15px] flex items-center justify-center space-x-2 transition duration-200 mt-3 cursor-pointer"
                >
                  <span>Access Sandbox Demo Console</span>
                </button>

                {/* Horizontal Line Divider */}
                <div className="relative flex py-4 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-4 text-slate-400 text-sm font-sans font-light">or</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                {/* Don't have an account? Get Started prompt */}
                <div className="text-center text-[15px] font-sans text-slate-500 py-1">
                  Don't have an account?{' '}
                  <a 
                    href="/#get-started"
                    className="text-pp-blue hover:underline font-bold font-sans"
                  >
                    Get Started
                  </a>
                </div>

              </form>
            )}

            {/* VIEW 2: FORGOT PASSWORD */}
            {step === 2 && (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div className="text-center space-y-1 mb-6">
                  <h3 className="font-outfit font-bold text-lg text-pp-black">Forgot Password?</h3>
                  <p className="text-xs text-slate-500 font-sans">Provide your email address to receive a reset code</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-655 font-outfit block">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-4 border border-slate-350 focus:border-pp-blue focus:ring-1 focus:ring-pp-blue text-slate-900 rounded-lg outline-none font-sans text-base placeholder-slate-400 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-full bg-pp-blue hover:bg-pp-blue-dark text-white font-bold text-[15px] flex items-center justify-center space-x-2 transition duration-200 shadow-sm disabled:bg-slate-300"
                  >
                    {status === 'submitting' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Sending Link...</span>
                      </>
                    ) : (
                      <span>Send Link</span>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full text-center py-2 text-xs font-bold text-slate-500 hover:text-pp-black transition duration-200 uppercase tracking-widest font-outfit"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* VIEW 3: RESET SUCCESS */}
            {step === 3 && (
              <div className="text-center py-4 space-y-6 max-w-sm mx-auto animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-500/25">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit font-bold text-pp-black text-xl">Reset Link Dispatched</h3>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-light">
                  A verification reset link has been dispatched to <strong className="text-slate-800 font-medium font-mono">{email}</strong>. Please check your inbox.
                </p>

                <button
                  onClick={() => {
                    setStep(1);
                    setPassword('');
                  }}
                  className="w-full py-3.5 rounded-full bg-pp-black hover:bg-neutral-850 text-white font-bold text-[15px] transition duration-200"
                >
                  Return to Login
                </button>
              </div>
            )}

          </div>

          {/* Bottom security assurance */}
          {step === 1 && (
            <div className="mt-8 text-center text-[11px] text-slate-400 font-sans font-light">
              Secured with industry-standard TLS protocols. MoCard does not share credentials.
            </div>
          )}

        </div>
      </div>

      {/* Footer bar */}
      <footer className="bg-slate-50 border-t border-slate-200 py-6 text-center text-xs font-semibold text-slate-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-6">
          <a href="#" className="hover:text-slate-700 hover:underline">Contact Us</a>
          <a href="#" className="hover:text-slate-700 hover:underline">Privacy</a>
          <a href="#" className="hover:text-slate-700 hover:underline">Legal</a>
          <a href="#" className="hover:text-slate-700 hover:underline">Policy Updates</a>
          <a href="#" className="hover:text-slate-700 hover:underline">Worldwide</a>
        </div>
      </footer>

    </div>
  );
}
