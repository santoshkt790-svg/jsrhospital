'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Sparkles, Calendar } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Therapies() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t({ en: "Traditional & Natural Wellness", hi: "पारंपरिक एवं प्राकृतिक स्वास्थ्य" })}
          title={t(siteContent.therapies.title)}
          subtitle={t(siteContent.therapies.subtitle)}
          icon={Sparkles}
          alignment="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.therapies.items.map((therapy, idx) => (
            <Reveal key={therapy.id} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(9, 90, 34, 0.12)' }}
                transition={{ duration: 0.25 }}
                className="jsr-card overflow-hidden border border-gray-100 hover:border-accent-gold transition-all duration-300 flex flex-col justify-between group shadow-jsr-card rounded-2xl bg-white h-full"
              >
                <div>
                  {/* Image on top - aspect 4:3, rounded-2xl, object-cover, hover zoom 1.05 */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-soft-section">
                    <Image
                      src={therapy.image}
                      alt={t(therapy.alt)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="relative inline-block">
                      <h3 className="text-lg font-bold font-playfair text-primary">
                        {t(therapy.title)}
                      </h3>
                      {/* Thin Gold Underline Grows from Left to Right on Hover */}
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    <p className="text-xs text-text/75 leading-relaxed pt-1">
                      {t(therapy.desc)}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#appointment"
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-soft-section text-primary font-semibold text-xs hover:bg-primary hover:text-white transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t({ en: "Inquire Therapy", hi: "थेरेपी पूछताछ करें" })}</span>
                  </motion.a>
                </div>

              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
