import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CardTransfer from '../components/CardTransfer';
import WhoUsesMocard from '../components/WhoUsesMocard';
import Clients from '../components/Clients';
import FAQ from '../components/FAQ';
import GetStartedSection from '../components/GetStartedSection';
import ActionBanner from '../components/ActionBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CardTransfer />
      <WhoUsesMocard />
      <Clients />
      <FAQ />
      <GetStartedSection />
      <ActionBanner />
      <Footer />
    </>
  );
}
