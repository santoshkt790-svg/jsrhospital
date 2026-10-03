'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { MapPin, Phone, MessageCircle, Clock, Instagram, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { t } = useLanguage();
  const info = siteContent.contactInfo;
  const data = siteContent.contact;

  const whatsappUrl = `https://wa.me/${info.whatsappNumberRaw}?text=${encodeURIComponent('Hello JSR Hospital, I would like to inquire about medical services.')}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t(data.title)}
          title={t(data.title)}
          subtitle={t(data.subtitle)}
          icon={MapPin}
          alignment="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address */}
            <Reveal direction="up" delay={0.1}>
              <div className="jsr-card p-5 border border-gray-100 flex items-start space-x-4 rounded-2xl shadow-jsr-card hover:border-accent-gold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-soft-section text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {t(data.labels.address)}
                  </h4>
                  <p className="text-sm font-semibold text-primary mt-1">
                    {info.address.line1}
                  </p>
                  <p className="text-xs text-text/70 mt-0.5">
                    {info.address.line2}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Appointment & Inquiry Phone */}
            <Reveal direction="up" delay={0.2}>
              <div className="jsr-card p-5 border border-gray-100 flex items-start space-x-4 rounded-2xl shadow-jsr-card hover:border-accent-gold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-soft-section text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {t(data.labels.phone)}
                  </h4>
                  <div className="space-y-1 mt-1">
                    <a
                      href={`tel:+91${info.phones.appointment.replace(/\s/g, '')}`}
                      className="block text-sm font-bold text-primary hover:text-secondary transition-colors"
                    >
                      +91 {info.phones.appointment} <span className="text-[11px] font-normal text-text/60">(Appointments)</span>
                    </a>
                    <a
                      href={`tel:+91${info.phones.secondary.replace(/\s/g, '')}`}
                      className="block text-xs font-semibold text-text/80 hover:text-primary transition-colors"
                    >
                      +91 {info.phones.secondary}
                    </a>
                    <p className="text-xs text-text/70">
                      Landline: {info.phones.landline}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* WhatsApp */}
            <Reveal direction="up" delay={0.3}>
              <div className="jsr-card p-5 border border-gray-100 flex items-start space-x-4 rounded-2xl shadow-jsr-card hover:border-accent-gold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {t(data.labels.whatsapp)}
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-sm font-bold text-primary hover:text-[#25D366] transition-colors mt-1"
                  >
                    <span>+91 {info.phones.whatsapp}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* OPD Hours - [CONFIRM WITH CLIENT] */}
            <Reveal direction="up" delay={0.4}>
              <div className="jsr-card p-5 border border-gray-100 flex items-start space-x-4 rounded-2xl shadow-jsr-card hover:border-accent-gold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-soft-section text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {t(data.labels.hours)}
                  </h4>
                  <p className="text-sm font-bold text-primary-dark mt-1">
                    {info.hoursPlaceholder}
                  </p>
                  <p className="text-[11px] text-text/60 mt-0.5">
                    Emergency services available 24/7.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Instagram */}
            <Reveal direction="up" delay={0.5}>
              <div className="jsr-card p-5 border border-gray-100 flex items-start space-x-4 rounded-2xl shadow-jsr-card hover:border-accent-gold transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {t(data.labels.instagram)}
                  </h4>
                  <a
                    href={info.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sm font-bold text-primary hover:text-pink-600 transition-colors mt-1"
                  >
                    <span>{info.instagram}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Google Map Embed Placeholder with Fade In */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={0.2} scale={true}>
              <div className="jsr-card overflow-hidden border border-gray-200 shadow-jsr-card relative h-[450px] lg:h-[580px] w-full rounded-2xl">
                <iframe
                  src={info.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JSR Hospital Rohtak Map Location"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-primary/20 shadow-md text-xs">
                  <p className="font-bold text-primary">JSR Multispeciality Hospital LLP</p>
                  <p className="text-text/70 font-medium">Kath Mandi, Jhajjar Road, Rohtak, Haryana 124001</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
