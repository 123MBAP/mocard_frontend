import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Plane, ShieldCheck, Sparkles, CreditCard, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import logo from '../../assets/logo.png';
import payImage from '../../assets/pay.png';
import createLinkImage from '../../assets/create_link.png';

const fallbackImage = logo;

const handleImgError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

export default function HolidaysAndFlights() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1b2a26] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[680px] lg:min-h-[780px] flex items-end overflow-hidden bg-[#1b3b33]">
        <div className="absolute inset-0">
          <img
            src={createLinkImage}
            alt="Travel experience"
            onError={handleImgError}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081c17]/90 via-[#1b3b33]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081c17]/80 via-transparent to-black/10" />
        </div>

        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#c7a96b]/10 blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#dcc99b] border border-[#dcc99b]/20 px-3.5 py-1.5 bg-[#dcc99b]/5 inline-block mb-6">
              Holidays &amp; Flights
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
              Your next
              <span className="block text-[#dcc99b] italic font-serif font-normal tracking-tight mt-1">
                escape awaits.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/75">
              Discover unforgettable destinations, curated holiday experiences,
              and seamless flight bookings across Rwanda and East Africa.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-white text-[#1b3b33] font-bold text-sm hover:bg-[#dcc99b] transition-all duration-300">
                Explore destinations
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-white/10 border border-white/25 backdrop-blur-md text-white font-bold text-sm hover:bg-white/20 transition-all duration-300">
                <Plane size={17} />
                Find a flight
              </button>
            </div>
          </div>
        </div>

        {/* Floating travel stats */}
        <div className="hidden lg:block absolute right-10 bottom-14 z-20">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 w-64 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Travel smarter
              </span>
              <MapPin size={17} className="text-[#dcc99b]" />
            </div>

            <p className="text-3xl font-black">Rwanda</p>
            <p className="text-sm text-white/60 mt-1">
              Africa's unforgettable destination
            </p>

            <div className="mt-5 h-px bg-white/15" />

            <div className="flex items-center justify-between mt-4 text-xs">
              <span className="text-white/50">Curated experiences</span>
              <span className="font-bold">Explore →</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / VALUE STRIP */}
      <section className="relative z-20 -mt-6 px-5 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/5">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
            {[
              {
                icon: Sparkles,
                title: 'Curated escapes',
                text: 'Handpicked destinations and experiences worth discovering.'
              },
              {
                icon: ShieldCheck,
                title: 'Secure booking',
                text: 'Simple, reliable payments through MoCard.'
              },
              {
                icon: Plane,
                title: 'Travel further',
                text: 'Connect with flights and travel providers across the region.'
              }
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="p-7 lg:p-8 flex gap-4">
                  <div className="w-11 h-11 shrink-0 bg-[#1b3b33]/8 flex items-center justify-center">
                    <Icon size={19} className="text-[#1b6b58]" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base">{item.title}</h3>
                    <p className="text-sm text-black/55 leading-relaxed mt-1.5">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1b6b58]">
              Explore Rwanda
            </span>

            <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Go somewhere
              <span className="block font-serif italic font-normal text-[#1b6b58] mt-1">
                worth remembering.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-black/55 text-sm sm:text-base leading-relaxed">
            From misty mountains to peaceful lakeside retreats, discover
            experiences that turn a trip into a memory.
          </p>
        </div>

        {/* Destination collage */}
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Large destination */}
          <div className="lg:col-span-7 group relative h-[480px] lg:h-[600px] overflow-hidden">
            <img
              src={createLinkImage}
              alt="Gorilla trekking and Rwanda travel"
              onError={handleImgError}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute left-7 right-7 bottom-7 text-white">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 mb-3">
                <MapPin size={14} />
                Musanze · Rwanda
              </div>

              <h3 className="text-4xl sm:text-5xl font-black tracking-tight">
                Gorilla trekking
              </h3>

              <p className="mt-2 text-white/70 max-w-md">
                Step into the wild and experience one of Rwanda's most
                extraordinary adventures.
              </p>

              <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Discover experience
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 grid gap-5">
            {/* Lake Kivu */}
            <div className="group relative h-[280px] overflow-hidden bg-[#1b3b33]">
              <img
                src={payImage}
                alt="Lake Kivu travel experience"
                onError={handleImgError}
                className="absolute inset-0 w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081c17]/90 via-transparent to-transparent" />

              <div className="absolute left-6 bottom-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-white/60">
                  Gisenyi
                </span>

                <h3 className="text-3xl font-black mt-1">
                  Lake Kivu escapes
                </h3>

                <div className="flex items-center gap-2 text-sm text-white/70 mt-2">
                  Lakeside retreats <ArrowRight size={15} />
                </div>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="group relative h-[295px] overflow-hidden bg-[#dcc99b] p-6 flex flex-col justify-between">
                <div className="w-10 h-10 bg-[#1b3b33] text-white flex items-center justify-center">
                  <Plane size={17} />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#1b3b33]/60">
                    Beyond Rwanda
                  </span>

                  <h3 className="text-2xl font-black text-[#1b3b33] mt-1 leading-tight">
                    East Africa
                    <br />
                    awaits.
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#1b3b33] mt-4">
                    Explore routes
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>

              <div className="group relative h-[295px] overflow-hidden bg-[#1b3b33] p-6 flex flex-col justify-between text-white">
                <div className="text-xs uppercase tracking-wider text-white/40">
                  Your journey
                </div>

                <div>
                  <div className="text-5xl font-black">01</div>

                  <h3 className="text-xl font-bold mt-2">
                    Discover.
                    <br />
                    Book.
                    <br />
                    Go.
                  </h3>

                  <ArrowRight
                    size={20}
                    className="mt-5 text-[#dcc99b]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / PROCESS */}
      <section className="bg-[#1b3b33] text-white relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] border border-white/5" />
        <div className="absolute -right-20 -top-20 w-[300px] h-[300px] border border-white/5" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-wider text-[#dcc99b] font-bold">
                The MoCard experience
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-[0.95]">
                Travel without
                <span className="block font-serif italic font-normal text-[#dcc99b] mt-1">
                  the friction.
                </span>
              </h2>

              <p className="mt-5 text-white/60 leading-relaxed max-w-md">
                Everything from discovering an experience to making a payment
                should feel simple. MoCard brings the journey together.
              </p>

              <button className="mt-7 inline-flex items-center gap-3 text-sm font-bold border-b border-white/30 pb-2 hover:border-white transition">
                Learn how it works
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
              {[
                {
                  number: '01',
                  title: 'Discover',
                  text: 'Find destinations, holidays and travel experiences.'
                },
                {
                  number: '02',
                  title: 'Book',
                  text: 'Choose the experience or flight that fits your journey.'
                },
                {
                  number: '03',
                  title: 'Pay',
                  text: 'Complete your booking securely through MoCard.'
                }
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative border-t border-white/15 pt-6"
                >
                  <span className="text-xs font-bold text-[#dcc99b]">
                    {step.number}
                  </span>

                  <h3 className="text-2xl font-black mt-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/50 leading-relaxed mt-2">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLIGHT FEATURE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden bg-[#ece9df] min-h-[480px]">
              <img
                src={payImage}
                alt="Secure flight booking"
                onError={handleImgError}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute left-7 bottom-7 text-white">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
                  <Plane size={14} />
                  Flight bookings
                </div>

                <h3 className="text-4xl sm:text-5xl font-black mt-2">
                  Wherever you're going,
                  <span className="block font-serif italic font-normal">
                    start here.
                  </span>
                </h3>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 right-5 sm:right-8 bg-white shadow-xl p-5 w-60 border border-black/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-black/40 uppercase tracking-wider">
                  Booking
                </span>
                <ShieldCheck size={17} className="text-[#1b6b58]" />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1b3b33] text-white flex items-center justify-center">
                  <Plane size={16} />
                </div>

                <div>
                  <p className="text-sm font-bold">Secure payment</p>
                  <p className="text-xs text-black/45">Powered by MoCard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <span className="text-xs uppercase tracking-wider text-[#1b6b58] font-bold">
              Fly further
            </span>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] mt-3">
              From Rwanda to
              <span className="block font-serif italic font-normal text-[#1b6b58] mt-1">
                wherever comes next.
              </span>
            </h2>

            <p className="mt-5 text-black/55 leading-relaxed">
              Find flight options from trusted travel providers and complete
              your booking with a simple, secure MoCard payment experience.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Simple booking experience',
                'Secure MoCard payments',
                'Digital booking confirmation'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1b3b33] flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 group inline-flex items-center gap-3 px-6 py-4 bg-[#1b3b33] text-white font-bold text-sm hover:bg-[#1b6b58] transition">
              Find your flight
              <ArrowRight
                size={17}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* PAYMENT SECTION */}
      <section className="px-5 sm:px-8 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#ede9dd] overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="w-12 h-12 bg-[#1b3b33] text-white flex items-center justify-center">
                  <CreditCard size={20} />
                </div>

                <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight leading-none">
                  Your trip.
                  <br />
                  Your payment.
                  <span className="block font-serif italic font-normal text-[#1b6b58] mt-1">
                    One seamless experience.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-black/55 leading-relaxed">
                  MoCard makes it easier to pay for travel experiences and
                  services without adding unnecessary complexity to your
                  journey.
                </p>

                <button className="mt-7 inline-flex items-center gap-3 px-6 py-4 bg-[#1b3b33] text-white text-sm font-bold hover:bg-[#1b6b58] transition">
                  Start exploring
                  <ArrowRight size={17} />
                </button>
              </div>

              <div className="relative min-h-[420px] lg:min-h-[520px] bg-[#1b3b33]">
                <img
                  src={payImage}
                  alt="MoCard payment"
                  onError={handleImgError}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1b3b33]/30" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-white/50">
                        MoCard
                      </span>
                      <ShieldCheck size={17} className="text-[#dcc99b]" />
                    </div>

                    <p className="text-lg font-bold mt-5">
                      Simple. Secure. Ready when you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#1b3b33] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -bottom-40 w-[500px] h-[500px] border border-white/20" />
          <div className="absolute right-[-100px] top-[-150px] w-[500px] h-[500px] border border-white/20" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 lg:py-28 text-center">
          <span className="text-xs uppercase tracking-wider text-[#dcc99b] font-bold">
            The journey starts here
          </span>

          <h2 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9]">
            Don't just plan
            <span className="block font-serif italic font-normal text-[#dcc99b] mt-1">
              the trip.
            </span>
            Experience it.
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-white/60 leading-relaxed">
            Discover places, book experiences and make your next journey
            unforgettable with MoCard.
          </p>

          <button className="mt-8 group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1b3b33] font-bold text-sm hover:bg-[#dcc99b] transition-all">
            Explore travel
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}