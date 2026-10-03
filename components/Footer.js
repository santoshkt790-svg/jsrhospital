'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Phone, MapPin, Instagram } from 'lucide-react';
import Reveal from './Reveal';

export default function Footer() {
  const { t } = useLanguage();
  const info = siteContent.contactInfo;

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-24 md:pb-12 border-t-4 border-accent-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            
            {/* Brand & Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-3 rounded-2xl inline-block shadow-md border border-white/20">
                <div className="relative h-[60px] w-[200px]">
                  <Image
                    src="/logo.png"
                    alt="JSR Multispeciality Hospital Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              <p className="text-xs text-white/80 leading-relaxed max-w-sm">
                Integrated healthcare facility in Rohtak offering traditional Ayurvedic therapies, Panchakarma, Naturopathy, ENT, Gynaecology, Surgery and modern medical care.
              </p>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={info.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-highlight hover:text-primary-dark flex items-center justify-center transition-all text-white"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider font-playfair">
                {t(siteContent.footer.quickLinksTitle)}
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {siteContent.nav.links.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="hover:text-highlight transition-colors">
                      {t(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Services */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider font-playfair">
                {t(siteContent.footer.servicesTitle)}
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li>Panchakarma & Detox</li>
                <li>Yoga & Naturopathy</li>
                <li>ENT & Eye Care</li>
                <li>Gynaecology & PCOS</li>
                <li>Pain Management</li>
                <li>General Surgery</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-accent-gold uppercase tracking-wider font-playfair">
                {t(siteContent.footer.contactTitle)}
              </h4>
              <div className="space-y-2 text-xs text-white/80">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>{info.address.full}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                  <span>+91 {info.phones.appointment}</span>
                </div>
                <div className="text-white/60 pt-1">
                  Hours: {info.hoursPlaceholder}
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-white/60">
          <p>{siteContent.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
