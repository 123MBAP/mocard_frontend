import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ChevronRight,
    Code2,
    CreditCard,
    Globe2,
    Layers3,
    LockKeyhole,
    MonitorSmartphone,
    PlugZap,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Store,
    Zap,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import shopifyImg from '../../assets/business_images/shopify.png';
import wooCommerceImg from '../../assets/business_images/woo_commerce.png';
import wordpressImg from '../../assets/business_images/wordpress.png';
import customImg from '../../assets/business_images/custom.png';

export default function HostedChechouts() {
    const navigate = useNavigate();
    const platforms = [
        {
            name: 'Shopify',
            description:
                'Connect MoCard to your Shopify store and give customers a smooth local payment experience at checkout.',
            badge: 'E-commerce',
            icon: ShoppingBag,
            image: shopifyImg,
            imageLeft: true,
        },
        {
            name: 'WooCommerce',
            description:
                'Add MoCard to your WordPress store and support secure payment flows across your existing cart and checkout.',
            badge: 'WordPress',
            icon: Store,
            image: wooCommerceImg,
            imageLeft: false,
        },
        {
            name: 'WordPress',
            description:
                'Accept payments from websites, memberships, digital products, and custom WordPress experiences.',
            badge: 'Easy Embed',
            icon: Globe2,
            image: wordpressImg,
            imageLeft: true,
        },
        {
            name: 'Custom Platforms',
            description:
                'Build your own payment experience using MoCard APIs, SDKs, redirects, and hosted checkout components.',
            badge: 'API & SDK',
            icon: Code2,
            image: customImg,
            imageLeft: false,
        },
    ];

    const capabilities = [
        {
            icon: PlugZap,
            number: '01',
            title: 'Plug in without rebuilding',
            description:
                'Connect your existing website or commerce platform without creating a payment infrastructure from scratch.',
        },
        {
            icon: ShieldCheck,
            number: '02',
            title: 'Designed around security',
            description:
                'Keep sensitive payment handling within the hosted checkout environment while maintaining a clean customer journey.',
        },
        {
            icon: Zap,
            number: '03',
            title: 'Fast checkout experience',
            description:
                'Give customers a responsive payment experience designed for modern phones, desktops, and online stores.',
        },
    ];

    const checkoutFeatures = [
        'Mobile-first payment experience',
        'Secure hosted payment environment',
        'Easy redirect or embedded integration',
        'API and developer-friendly architecture',
        'Works with existing online stores',
        'Designed for local payment experiences',
    ];

    return (
        <div className="min-h-screen bg-[#f8faf9] text-slate-950 font-sans overflow-x-hidden antialiased">
            <Navbar />

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#f8faf9] pt-28 pb-16 lg:pb-20">
                <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full">

                        <span className="text-xs font-bold uppercase tracking-widest text-[#1b6b58] border border-[#1b6b58]/20 px-3.5 py-1.5 bg-[#1b6b58]/5 inline-block mb-6">
                            Hosted Checkouts
                        </span>

                        <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight leading-[1.0] text-slate-950 text-center">
                            Checkout that feels
                            <span className="block text-[#1f6e5c] mt-2">
                                built for your brand.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm sm:text-base text-slate-655 leading-relaxed text-center font-light">
                            Give your customers a professional, secure payment experience
                            without building the entire payment infrastructure yourself.
                            Connect MoCard to your website, online store, or custom
                            application and start accepting payments through a hosted
                            checkout.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center justify-center gap-2 bg-[#1f6e5c] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#135244]"
                            >
                                Talk to our team
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <a
                                href="#platforms"
                                className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#1f6e5c]/30 hover:bg-slate-50"
                            >
                                Explore integrations
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#1f6e5c]" />
                                Secure checkout
                            </div>

                            <div className="flex items-center gap-2">
                                <MonitorSmartphone className="w-4 h-4 text-[#1f6e5c]" />
                                Mobile ready
                            </div>

                            <div className="flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-[#1f6e5c]" />
                                API ready
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
          VALUE STRIP
      ========================================================= */}
            <section className="relative border-y border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {capabilities.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className="group px-0 md:px-8 py-8 first:pl-0 last:pr-0 transition-all text-left"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#1f6e5c]/8 text-[#1f6e5c] transition-all duration-300 group-hover:bg-[#1f6e5c] group-hover:text-white">
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        <div>
                                            <span className="text-[9px] font-black uppercase tracking-wider text-[#1f6e5c]">
                                                {item.number}
                                            </span>

                                            <h3 className="mt-1 text-sm font-black text-slate-900">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1.5 text-xs leading-5 text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          PLATFORM SECTION
      ========================================================= */}
            <section
                id="platforms"
                className="relative overflow-hidden bg-[#f8faf9] py-20 lg:py-28"
            >
                <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="inline-flex border border-[#1f6e5c]/15 bg-[#1f6e5c]/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#1f6e5c]">
                            Integrate your way
                        </span>

                        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950">
                            Works with the tools
                            <span className="text-[#1f6e5c]"> you already use.</span>
                        </h2>

                        <p className="mt-5 text-sm sm:text-base leading-7 text-slate-500 font-light">
                            Whether you run an online store, a WordPress website, or a
                            completely custom platform, MoCard gives you a flexible path to
                            accepting payments.
                        </p>
                    </div>

                    {/* Alternating Platform Rows */}
                    <div className="space-y-20 lg:space-y-28">
                        {platforms.map((platform, index) => {
                            const Icon = platform.icon;

                            return (
                                <div
                                    key={platform.name}
                                    className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center animate-in fade-in slide-in-from-bottom-2 duration-300"
                                >
                                    {/* Image Column */}
                                    <div
                                        className={`lg:col-span-7 relative ${platform.imageLeft ? 'lg:order-1 order-1' : 'lg:order-2 order-1'
                                            }`}
                                    >
                                        <div className="relative bg-white border border-slate-200 p-3 shadow-xl shadow-slate-900/5 overflow-hidden">
                                            <div className="absolute top-6 left-6 z-10 px-3 py-1.5 bg-slate-950 text-white text-[10px] font-bold">
                                                PLATFORM 0{index + 1}
                                            </div>

                                            <div className="overflow-hidden bg-slate-50 h-[300px] sm:h-[390px] flex items-center justify-center">
                                                <img
                                                    src={platform.image}
                                                    alt={platform.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Column */}
                                    <div
                                        className={`lg:col-span-5 text-left ${platform.imageLeft ? 'lg:order-2 order-2' : 'lg:order-1 order-2'
                                            }`}
                                    >
                                        <div className="max-w-md">
                                            <div className="w-12 h-12 bg-[#1f6e5c]/10 flex items-center justify-center mb-6">
                                                <Icon className="w-6 h-6 text-[#1f6e5c]" />
                                            </div>

                                            <span className="inline-flex bg-slate-100 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-slate-500 mb-3">
                                                {platform.badge}
                                            </span>

                                            <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
                                                {platform.name}
                                            </h3>

                                            <p className="mt-5 text-sm sm:text-base text-slate-655 font-light leading-relaxed font-sans">
                                                {platform.description}
                                            </p>

                                            <div className="mt-8 flex items-center gap-1.5 text-xs font-bold text-[#1f6e5c]">
                                                Learn about integration
                                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          FEATURE / EXPERIENCE SECTION
      ========================================================= */}
            <section className="bg-white py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left visual */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-[40px] bg-[#1f6e5c]/10 blur-3xl pointer-events-none" />

                            <div className="relative border border-slate-200 bg-[#f8faf9] p-5 sm:p-7">

                                {/* Fake dashboard */}
                                <div className="border border-slate-200 bg-white shadow-xl overflow-hidden text-left">

                                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                                        <div>
                                            <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">
                                                Merchant checkout
                                            </p>
                                            <p className="mt-1 text-xs font-black text-slate-900">
                                                Payment experience
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 text-[8px] font-bold text-[#1f6e5c]">
                                            <span className="h-1.5 w-1.5 bg-[#1f6e5c]" />
                                            Active
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="bg-slate-50 p-4">
                                                <p className="text-[8px] text-slate-400">
                                                    Payments
                                                </p>
                                                <p className="mt-2 text-lg font-black text-slate-900">
                                                    248
                                                </p>
                                            </div>

                                            <div className="bg-slate-50 p-4">
                                                <p className="text-[8px] text-slate-400">
                                                    Successful
                                                </p>
                                                <p className="mt-2 text-lg font-black text-[#1f6e5c]">
                                                    96%
                                                </p>
                                            </div>

                                            <div className="bg-slate-50 p-4">
                                                <p className="text-[8px] text-slate-400">
                                                    Revenue
                                                </p>
                                                <p className="mt-2 text-lg font-black text-slate-900">
                                                    8.4M
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 border border-slate-100 p-4">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-bold text-slate-700">
                                                    Checkout activity
                                                </p>

                                                <span className="text-[8px] text-slate-400">
                                                    Last 30 days
                                                </span>
                                            </div>

                                            <div className="mt-5 flex items-end gap-2 h-28">
                                                {[35, 48, 42, 65, 54, 72, 63, 88, 76, 94, 82, 100].map(
                                                    (height, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex-1 bg-[#1f6e5c]/15 transition-all hover:bg-[#1f6e5c]"
                                                            style={{ height: `${height}%` }}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-3">
                                            <div className="border border-slate-100 p-4">
                                                <div className="flex items-center gap-2">
                                                    <LockKeyhole className="w-3.5 h-3.5 text-[#1f6e5c]" />
                                                    <span className="text-[9px] font-bold text-slate-700">
                                                        Secure
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="border border-slate-100 p-4">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-3.5 h-3.5 text-[#1f6e5c]" />
                                                    <span className="text-[9px] font-bold text-slate-700">
                                                        Fast checkout
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating notification */}
                                <div className="absolute -right-4 top-14 hidden sm:block border border-white bg-slate-950 px-4 py-3 text-white shadow-xl text-left">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center bg-emerald-400/10">
                                            <Check className="w-4 h-4 text-emerald-300" />
                                        </div>

                                        <div>
                                            <p className="text-[8px] text-white/40">
                                                PAYMENT
                                            </p>
                                            <p className="text-[10px] font-bold">
                                                Successfully completed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right content */}
                        <div className="text-left">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#1f6e5c]">
                                More than a payment page
                            </span>

                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950">
                                A checkout experience your customers can trust.
                            </h2>

                            <p className="mt-5 text-sm sm:text-base leading-7 text-slate-500 font-light">
                                Your payment page is one of the final moments between a
                                customer and a completed purchase. MoCard helps you make that
                                moment simple, professional, and frictionless.
                            </p>

                            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                                {checkoutFeatures.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#1f6e5c]/10">
                                            <Check className="w-3 h-3 text-[#1f6e5c]" />
                                        </span>

                                        <span className="text-xs sm:text-sm font-semibold text-slate-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-9">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-[#1f6e5c]"
                                >
                                    Discuss your integration
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          DEVELOPER SECTION
      ========================================================= */}
            <section className="bg-[#0b1714] py-20 lg:py-24 text-white overflow-hidden relative">
                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#1f6e5c]/20 blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

                        <div className="lg:col-span-5 text-left">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                                For developers
                            </span>

                            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                                Build your payment flow.
                                <span className="block text-emerald-300">
                                    Keep your flexibility.
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-6 text-white/55 font-light">
                                Use hosted checkout when you want speed, or connect through
                                APIs when your business needs deeper control. MoCard gives your
                                team a foundation to build on.
                            </p>

                            <Link
                                to="/developers"
                                className="group mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-xs font-bold text-slate-950 transition hover:bg-emerald-100"
                            >
                                Explore developer tools
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
                                <div className="flex items-center gap-2 border-b border-white/10 pb-4 text-left">
                                    <div className="flex gap-1.5">
                                        <span className="h-2.5 w-2.5 bg-white/15" />
                                        <span className="h-2.5 w-2.5 bg-white/15" />
                                        <span className="h-2.5 w-2.5 bg-white/15" />
                                    </div>

                                    <span className="ml-2 text-[9px] text-white/30">
                                        integration.js
                                    </span>
                                </div>

                                <pre className="mt-5 overflow-x-auto text-[11px] sm:text-xs leading-6 text-white/70 text-left">
                                    <code>{`const checkout = await mocard.checkout.create({
  amount: 45000,
  currency: "RWF",
  customer: {
    email: "customer@example.com"
  },
  return_url: "/payment/success"
});

window.location.href = checkout.url;`}</code>
                                </pre>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    <span className="bg-emerald-400/10 px-3 py-1 text-[9px] font-bold text-emerald-300">
                                        REST API
                                    </span>

                                    <span className="bg-white/5 px-3 py-1 text-[9px] font-bold text-white/50">
                                        Webhooks
                                    </span>

                                    <span className="bg-white/5 px-3 py-1 text-[9px] font-bold text-white/50">
                                        SDK
                                    </span>

                                    <span className="bg-white/5 px-3 py-1 text-[9px] font-bold text-white/50">
                                        Hosted Checkout
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section className="bg-[#f8faf9] py-20 lg:py-24">
                <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-[#1f6e5c] px-7 py-12 sm:px-12 lg:px-16 lg:py-16 text-center shadow-2xl shadow-[#1f6e5c]/15">

                        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-black/10 blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-white/10">
                                <Layers3 className="w-5 h-5 text-white" />
                            </div>

                            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                                Ready to upgrade
                                <span className="block text-emerald-100">
                                    your checkout?
                                </span>
                            </h2>

                            <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base leading-7 text-white/70 font-light">
                                Tell us about your business and we'll help you choose the
                                integration approach that fits your payment flow.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-sm font-bold text-[#135244] transition hover:bg-emerald-50"
                                >
                                    Contact our team
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    to="/developers"
                                    className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                                >
                                    View documentation
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