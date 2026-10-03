'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { HeartHandshake, CheckCircle2, UserCheck, Calendar } from 'lucide-react';
import Reveal from './Reveal';

export default function WomensHealth() {
  const { t } = useLanguage();
  const data = siteContent.womensHealth;

  return (
    <section id="womens-health" className="py-16 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="none" scale={true} duration={0.7}>
          <div className="jsr-card overflow-hidden bg-gradient-to-r from-soft-section via-white to-soft-section border border-secondary/20 p-6 sm:p-10 shadow-jsr-card rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Main Content Info */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="inline-flex items-center space-x-2 text-primary font-semibold text-xs uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                  <HeartHandshake className="w-4 h-4 text-highlight" />
                  <span>{t(data.title)}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-primary">
                  {t(data.title)}
                </h2>

                <p className="text-sm sm:text-base text-text/80 leading-relaxed">
                  {t(data.subtitle)}
                </p>

                {/* Consultation Image */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-accent-gold/30 shadow-sm">
                  <Image
                    src={data.image}
                    alt={t(data.alt)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                {/* PCOS Symptoms Checklist */}
                <div className="pt-2 space-y-3">
                  <h3 className="text-sm font-bold text-primary">
                    {t(data.commonSignsTitle)}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.signs.map((sign, index) => (
                      <div key={index} className="flex items-center space-x-2.5 text-xs sm:text-sm text-text/85">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{t(sign)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Representative Image Caption */}
                <p className="text-[11px] italic text-text/50 pt-1">
                  {t(siteContent.representativeCaption)}
                </p>

              </div>

              {/* Doctor Consultation Box */}
              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-accent-gold/40 shadow-sm text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-soft-section text-primary mx-auto flex items-center justify-center">
                  <UserCheck className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs text-secondary font-semibold uppercase tracking-wide">
                    {t({ en: "Gynaecology Consultation", hi: "स्त्री रोग परामर्श" })}
                  </span>
                  <h3 className="text-lg font-bold font-playfair text-primary mt-1">
                    {data.consultant}
                  </h3>
                  <p className="text-xs text-text/70 mt-1">
                    {t({ en: "Specialized care for hormonal health & reproductive wellness.", hi: "हार्मोनल स्वास्थ्य एवं स्त्री रोग परामर्श।" })}
                  </p>
                </div>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="#appointment"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-xl text-xs font-semibold shadow transition-all"
                >
                  <Calendar className="w-4 h-4 text-highlight" />
                  <span>{t(data.cta)}</span>
                </motion.a>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
