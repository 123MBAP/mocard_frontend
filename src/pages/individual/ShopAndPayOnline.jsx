import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  CreditCard,
  CheckCircle2,
} from 'lucide-react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.png';

import akageraaviation from '../../assets/partners/akageraaviation.png';
import atlas from '../../assets/partners/atlas.jpg';
import byiza from '../../assets/partners/byiza.jpg';
import choosekigali from '../../assets/partners/choosekigali.png';
import cleo from '../../assets/partners/cleo.png';
import dguide from '../../assets/partners/dguide.png';
import everretreat from '../../assets/partners/ever-retreat.jpg';
import ferwaba from '../../assets/partners/ferwaba.png';
import galaxyhotel from '../../assets/partners/galaxy-hotel.png';
import heaven from '../../assets/partners/heaven.jpeg';
import hirwa from '../../assets/partners/hirwa.png';
import hobaagency from '../../assets/partners/hobaagency.png';
import ingagi from '../../assets/partners/ingagi.png';
import iremetravels from '../../assets/partners/ireme-travels.jpeg';
import judith from '../../assets/partners/judith.png';
import kivuhill from '../../assets/partners/kivu-hill.jpg';
import kivuqueen from '../../assets/partners/kivuqueen.jpeg';
import kn from '../../assets/partners/kn.png';
import malonga from '../../assets/partners/malonga.jpeg';
import maraville from '../../assets/partners/maraville.png';
import mua from '../../assets/partners/mua.png';
import norrsken from '../../assets/partners/norrsken.jpeg';
import nwc from '../../assets/partners/nwc.png';
import rmwlogo from '../../assets/partners/rmwlogo.png';
import rwandaecotours from '../../assets/partners/rwanda-eco-tours.png';
import satguru from '../../assets/partners/satguru.png';
import victoria from '../../assets/partners/victoria.png';
import victoriatravels from '../../assets/partners/victoriatravels.jpeg';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function ShopAndPayOnline() {
  const merchants = [
    {
      name: 'Norrsken Kigali',
      category: 'Business & Community',
      description:
        'A vibrant innovation and entrepreneurship community connecting businesses, founders and creators in Kigali.',
      logo: norrsken,
      featured: true,
    },
    {
      name: 'MUA Insurance',
      category: 'Finance & Insurance',
      description:
        'Insurance solutions designed to help individuals and businesses protect what matters most.',
      logo: mua,
    },
    {
      name: 'Satguru Travels',
      category: 'Travel & Flights',
      description:
        'Travel services including flight bookings, holidays and travel arrangements across Rwanda and beyond.',
      logo: satguru,
      featured: true,
    },
    {
      name: 'Cleo Lake Kivu',
      category: 'Hospitality & Leisure',
      description:
        'A lakeside hospitality experience offering a relaxing escape along the beautiful shores of Lake Kivu.',
      logo: cleo,
      featured: true,
    },
    {
      name: 'Akagera Aviation',
      category: 'Travel & Transport',
      description:
        'Aviation and helicopter services connecting travelers with unique destinations and experiences in Rwanda.',
      logo: akageraaviation,
    },
    {
      name: 'Ferwaba',
      category: 'Sports & Events',
      description:
        'Rwanda\'s basketball federation supporting basketball development, competitions and sporting events.',
      logo: ferwaba,
    },
    {
      name: 'Kivu Queen',
      category: 'Travel & Hospitality',
      description:
        'A unique Lake Kivu experience combining hospitality, relaxation and scenic lake adventures.',
      logo: kivuqueen,
    },
    {
      name: 'Choose Kigali',
      category: 'Experiences & Activities',
      description:
        'Discover curated experiences, activities and places that showcase the best of Kigali.',
      logo: choosekigali,
      featured: true,
    },
    {
      name: 'Rwanda Eco Tours',
      category: 'Tours & Safaris',
      description:
        'Eco-friendly tours and memorable adventures exploring Rwanda\'s wildlife, nature and landscapes.',
      logo: rwandaecotours,
    },
    {
      name: 'Galaxy Hotel',
      category: 'Hotels & Stays',
      description:
        'A comfortable Kigali stay offering accommodation and hospitality services for local and international guests.',
      logo: galaxyhotel,
    },
    {
      name: 'Hoba Agency',
      category: 'Creative Services',
      description:
        'Creative and digital services helping brands communicate, grow and connect with their audiences.',
      logo: hobaagency,
    },
    {
      name: 'Judith',
      category: 'Fashion & Beauty',
      description:
        'A lifestyle and fashion brand offering products and experiences designed around modern style.',
      logo: judith,
    },
    {
      name: 'Malonga',
      category: 'Retail & Lifestyle',
      description:
        'A lifestyle-focused business bringing distinctive products and services to customers in Rwanda.',
      logo: malonga,
    },
    {
      name: 'Atlas',
      category: 'Travel & Experiences',
      description:
        'Travel and experience services helping customers discover destinations and memorable activities.',
      logo: atlas,
    },
    {
      name: 'Byiza',
      category: 'Retail & Lifestyle',
      description:
        'A local lifestyle brand offering carefully selected products and services for everyday living.',
      logo: byiza,
    },
    {
      name: 'Dguide',
      category: 'Tours & Safaris',
      description:
        'A travel and tour service helping visitors discover Rwanda through guided experiences.',
      logo: dguide,
    },
    {
      name: 'Heaven',
      category: 'Dining & Hospitality',
      description:
        'A Kigali hospitality destination combining dining, accommodation and memorable guest experiences.',
      logo: heaven,
    },
    {
      name: 'Ireme Travels',
      category: 'Travel & Flights',
      description:
        'Travel services helping customers arrange flights, trips and other travel needs.',
      logo: iremetravels,
    },
    {
      name: 'Victoria Travels',
      category: 'Travel & Flights',
      description:
        'Travel booking and trip-planning services connecting customers with convenient travel options.',
      logo: victoriatravels,
    },
    {
      name: 'Ever Retreat',
      category: 'Wellness & Leisure',
      description:
        'A retreat experience focused on relaxation, wellness and getting away from everyday routines.',
      logo: everretreat,
    },
    {
      name: 'Hirwa',
      category: 'Retail & Lifestyle',
      description:
        'A local business offering lifestyle products and services to customers in Rwanda.',
      logo: hirwa,
    },
    {
      name: 'Ingagi',
      category: 'Tours & Safaris',
      description:
        'A Rwanda travel and safari service focused on nature, wildlife and authentic local experiences.',
      logo: ingagi,
    },
    {
      name: 'Kivu Hill',
      category: 'Hotels & Stays',
      description:
        'A scenic hospitality destination offering visitors a peaceful Lake Kivu-area stay.',
      logo: kivuhill,
    },
    {
      name: 'KN',
      category: 'Retail & Services',
      description:
        'A local retail and services provider offering convenient products and services to customers.',
      logo: kn,
    },
    {
      name: 'Maraville',
      category: 'Retail & Lifestyle',
      description:
        'A lifestyle-focused brand offering products and services for modern customers.',
      logo: maraville,
    },
    {
      name: 'NWC',
      category: 'Business Services',
      description:
        'Professional business services supporting organizations and customers with practical solutions.',
      logo: nwc,
    },
    {
      name: 'RMW',
      category: 'Business Services',
      description:
        'A professional services provider supporting businesses and customers through specialized solutions.',
      logo: rmwlogo,
    },
    {
      name: 'Victoria',
      category: 'Retail & Lifestyle',
      description:
        'A lifestyle and retail business offering products and services for customers in Rwanda.',
      logo: victoria,
    },
  ];

  const categories = [
    'All',
    ...new Set(merchants.map((merchant) => merchant.category)),
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredMerchants = useMemo(() => {
    return merchants.filter((merchant) => {
      const matchesCategory =
        activeCategory === 'All' ||
        merchant.category === activeCategory;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        merchant.name.toLowerCase().includes(query) ||
        merchant.category.toLowerCase().includes(query) ||
        merchant.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredMerchants = merchants.filter(
    (merchant) => merchant.featured
  );

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1b2a26] font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1b3b33] text-white">
        <div className="absolute -right-32 -top-40 w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute -right-10 -top-20 w-[330px] h-[330px] rounded-full border border-white/5" />
        <div className="absolute -left-40 bottom-[-250px] w-[550px] h-[550px] rounded-full bg-[#1f6e5c]/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wide">
              <Store size={14} />
              MoCard marketplace
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9]">
              Discover.
              <span className="block text-[#dcc99b] font-serif italic font-normal tracking-tight mt-1">
                Shop. Pay.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
              Discover businesses, experiences and services you can access
              through MoCard — from travel and hospitality to lifestyle,
              business and more.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById('directory')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-white text-[#1b3b33] text-sm font-bold hover:bg-[#dcc99b] transition"
              >
                Explore merchants
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <div className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm text-white/60">
                <ShieldCheck size={17} className="text-[#dcc99b]" />
                Secure MoCard payments
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mt-14 pt-6 border-t border-white/10">
            <div>
              <p className="text-3xl font-black">{merchants.length}+</p>
              <p className="text-xs text-white/40 mt-1">Partner merchants</p>
            </div>
            <div>
              <p className="text-3xl font-black">8+</p>
              <p className="text-xs text-white/40 mt-1">Business categories</p>
            </div>
            <div>
              <p className="text-3xl font-black">RW</p>
              <p className="text-xs text-white/40 mt-1">Local ecosystem</p>
            </div>
            <div>
              <p className="text-3xl font-black">24/7</p>
              <p className="text-xs text-white/40 mt-1">Digital access</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTECTION / TRUST */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/5 overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_2fr]">
            <div className="p-7 sm:p-9 bg-[#eeebe1]">
              <div className="w-11 h-11 bg-[#1b3b33] text-white flex items-center justify-center">
                <ShieldCheck size={19} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-5">
                Shop with confidence.
              </h2>
              <p className="text-sm text-black/50 leading-relaxed mt-3">
                MoCard gives customers a secure and convenient way to pay
                participating merchants.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/5">
              {[
                {
                  title: 'Secure transactions',
                  desc: 'Your payment information is protected throughout checkout.',
                },
                {
                  title: 'Protected payments',
                  desc: 'Designed to make digital payments safer and simpler.',
                },
                {
                  title: 'Support when needed',
                  desc: 'Get help when you need assistance with eligible transactions.',
                },
              ].map((feature) => (
                <div key={feature.title} className="p-7">
                  <CheckCircle2
                    size={18}
                    className="text-[#1b6b58]"
                  />
                  <h3 className="font-bold text-sm mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-black/45 leading-relaxed mt-2">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MERCHANTS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b6b58]">
              Featured partners
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">
              Start exploring.
            </h2>
            <p className="text-sm text-black/50 mt-2 max-w-lg">
              A few places to begin your MoCard journey.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-black/40">
            <Sparkles size={15} className="text-[#1b6b58]" />
            Curated merchant experiences
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredMerchants.map((merchant, index) => (
            <div
              key={merchant.name}
              className={`group relative overflow-hidden p-7 flex flex-col justify-between ${
                index === 0
                  ? 'bg-[#1b3b33] text-white'
                  : 'bg-white border border-black/5'
              }`}
            >
              <div
                className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl ${
                  index === 0
                    ? 'bg-[#1f6e5c]'
                    : 'bg-[#dcc99b]/30'
                }`}
              />

              <div className="relative z-10 flex items-start justify-between">
                <div
                  className={`w-16 h-16 flex items-center justify-center p-3 ${
                    index === 0
                      ? 'bg-white'
                      : 'bg-[#f6f5f0]'
                  }`}
                >
                  <img
                    src={merchant.logo}
                    alt={`${merchant.name} logo`}
                    onError={handleImgError}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div
                  className={`w-9 h-9 flex items-center justify-center ${
                    index === 0
                      ? 'bg-white/10'
                      : 'bg-black/5'
                  }`}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="relative z-10 mt-4">
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold ${
                    index === 0
                      ? 'text-[#dcc99b]'
                      : 'text-[#1b6b58]'
                  }`}
                >
                  {merchant.category}
                </span>
                <h3 className="text-2xl font-black mt-1">
                  {merchant.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mt-2 ${
                    index === 0
                      ? 'text-white/55'
                      : 'text-black/50'
                  }`}
                >
                  {merchant.description}
                </p>
                <div
                  className={`flex items-center gap-2 text-xs font-bold mt-4 ${
                    index === 0
                      ? 'text-white'
                      : 'text-[#1b3b33]'
                  }`}
                >
                  View merchant
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTORY */}
      <section
        id="directory"
        className="bg-[#eeebe1] border-y border-black/5"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b6b58]">
              Merchant directory
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-2 leading-none">
              Find your
              <span className="font-serif italic font-normal text-[#1b6b58]">
                {' '}
                next place to shop.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-black/50 leading-relaxed mt-4 max-w-xl">
              Browse participating merchants by category or search for a
              specific business.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search merchants, services or categories..."
                className="w-full h-12 bg-white border border-black/5 pl-11 pr-4 text-sm outline-none focus:border-[#1b6b58] focus:ring-2 focus:ring-[#1b6b58]/5 transition"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto py-6 scrollbar-hide">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-[#1b3b33] text-white'
                      : 'bg-white text-black/50 hover:text-[#1b3b33] border border-black/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold text-black/40">
              Showing{' '}
              <span className="text-[#1b3b33]">
                {filteredMerchants.length}
              </span>{' '}
              merchants
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredMerchants.map((merchant) => (
              <article
                key={merchant.name}
                className="group bg-white p-4 border border-black/5 hover:border-[#1b6b58]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative h-40 bg-[#f6f5f0] flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1b6b58]/[0.02] to-[#dcc99b]/10" />
                  <img
                    src={merchant.logo}
                    alt={`${merchant.name} logo`}
                    onError={handleImgError}
                    className="relative z-10 max-w-[80%] max-h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="pt-4 px-1 pb-1">
                  <span className="inline-flex px-2.5 py-1 bg-[#1b6b58]/8 text-[#1b6b58] text-[9px] uppercase tracking-wider font-bold">
                    {merchant.category}
                  </span>
                  <h3 className="text-lg font-black text-[#1b2a26] mt-2">
                    {merchant.name}
                  </h3>
                  <p className="text-xs text-black/45 leading-relaxed mt-1 min-h-[48px]">
                    {merchant.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1b3b33]">
                      View merchant
                    </span>
                    <div className="w-8 h-8 bg-[#1b3b33] text-white flex items-center justify-center group-hover:bg-[#1b6b58] transition">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredMerchants.length === 0 && (
            <div className="py-16 text-center">
              <div className="w-14 h-14 bg-white mx-auto flex items-center justify-center">
                <Search size={22} className="text-black/30" />
              </div>
              <h3 className="text-xl font-black mt-4">
                No merchants found
              </h3>
              <p className="text-sm text-black/45 mt-2">
                Try another search term or category.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
                className="mt-4 text-sm font-bold text-[#1b6b58]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b6b58]">
              Simple by design
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-2 leading-none">
              Find it.
              <span className="block font-serif italic font-normal text-[#1b6b58] mt-1">
                Pay for it.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-black/50 leading-relaxed mt-4 max-w-lg">
              MoCard connects you with participating businesses and makes
              digital payments easier.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                number: '01',
                title: 'Discover',
                text: 'Find a participating merchant.',
              },
              {
                number: '02',
                title: 'Choose',
                text: 'Select the service or product you need.',
              },
              {
                number: '03',
                title: 'Pay',
                text: 'Complete your payment with MoCard.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-[#f2f0eb] p-6"
              >
                <span className="text-xs font-black text-[#1b6b58]">
                  {step.number}
                </span>
                <h3 className="text-xl font-black mt-6">
                  {step.title}
                </h3>
                <p className="text-xs text-black/45 leading-relaxed mt-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b3b33] text-white relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">
          <CreditCard
            size={26}
            className="mx-auto text-[#dcc99b]"
          />
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            One card.
            <span className="block font-serif italic font-normal text-[#dcc99b] mt-1">
              More ways to experience.
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-white/55 text-sm sm:text-base leading-relaxed">
            Explore participating businesses and discover more ways to shop,
            travel, dine and experience Rwanda with MoCard.
          </p>
          <button
            onClick={() =>
              document
                .getElementById('directory')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group mt-7 inline-flex items-center gap-3 px-7 py-4 bg-white text-[#1b3b33] font-bold text-sm hover:bg-[#dcc99b] transition"
          >
            Explore merchants
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}