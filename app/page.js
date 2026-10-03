'use client';

import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import FloatingButtons from '../components/FloatingButtons';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import QuickStrip from '../components/QuickStrip';
import AboutUs from '../components/AboutUs';
import Departments from '../components/Departments';
import Therapies from '../components/Therapies';
import PainSpotlight from '../components/PainSpotlight';
import WomensHealth from '../components/WomensHealth';
import Doctors from '../components/Doctors';
import Insurance from '../components/Insurance';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import AppointmentForm from '../components/AppointmentForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-secondary selection:text-white">
      {/* Desktop Top Header Bar */}
      <TopBar />

      {/* Sticky Main White Navbar */}
      <Navbar />

      {/* Page Sections in Exact Single-Page Anchor Order */}
      <Hero />
      <QuickStrip />
      <AboutUs />
      <Departments />
      <Therapies />
      <PainSpotlight />
      <WomensHealth />
      <Doctors />
      <Insurance />
      <Events />
      <Gallery />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Contact />

      {/* Site Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Mobile Floating Action Buttons (WhatsApp + Call) */}
      <FloatingButtons />
    </main>
  );
}
