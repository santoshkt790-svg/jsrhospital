'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track Scroll Position & Active Section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy for Active Section Link
      const sections = siteContent.nav.links.map(l => l.id);
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md py-1 border-b border-gray-100' : 'shadow-sm py-2 border-b border-gray-100'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-primary origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          
          {/* Logo container */}
          <a href="#home" className="flex items-center py-1">
            <div className={`relative transition-all duration-300 ${isScrolled ? 'h-[46px] w-[180px]' : 'h-[54px] w-[210px]'} flex items-center`}>
              <Image
                src="/logo.png"
                alt="JSR Multispeciality Hospital Logo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav Links with Active State */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-text">
            {siteContent.nav.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`py-1 relative transition-colors ${
                    isActive ? 'text-primary font-bold' : 'hover:text-primary'
                  }`}
                >
                  {t(link.label)}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Book Appointment CTA */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#appointment"
              className="flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-highlight" />
              <span>{t(siteContent.nav.bookBtn)}</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-primary hover:bg-soft-section focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 shadow-lg"
        >
          {siteContent.nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-primary font-bold bg-soft-section'
                  : 'text-text hover:text-primary hover:bg-soft-section/50'
              }`}
            >
              {t(link.label)}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-white font-semibold py-3 rounded-full text-sm shadow"
            >
              {t(siteContent.nav.bookBtn)}
            </a>
            <a
              href={`tel:+91${siteContent.contactInfo.phones.appointment.replace(/\s/g, '')}`}
              className="w-full text-center border border-primary text-primary font-semibold py-2.5 rounded-full text-sm"
            >
              {t(siteContent.nav.callBtn)}: {siteContent.contactInfo.phones.appointment}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
