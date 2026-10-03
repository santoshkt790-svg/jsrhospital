'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Calendar, Instagram, MapPin, Tag } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Events() {
  const { t } = useLanguage();
  const data = siteContent.events;

  return (
    <section id="events" className="py-16 bg-background relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t(data.title)}
          title={t(data.title)}
          icon={Calendar}
          alignment="center"
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {data.eventsList.map((evt, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15}>
              <motion.div
                whileHover={{ y: -4, borderColor: '#C9A227' }}
                transition={{ duration: 0.25 }}
                className="jsr-card overflow-hidden border border-accent-gold/30 bg-white shadow-jsr-card flex flex-col md:flex-row items-stretch rounded-2xl"
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] md:w-1/2 w-full overflow-hidden bg-soft-section">
                  <Image
                    src={evt.image}
                    alt={t(evt.alt)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-accent-gold/15 text-primary-dark font-bold text-xs">
                      <Tag className="w-3.5 h-3.5 text-accent-gold" />
                      <span>{t(data.pastEventLabel)}</span>
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold font-playfair text-primary leading-snug">
                      {t(evt.title)}
                    </h3>

                    <div className="space-y-2 text-xs text-text/75 font-medium">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col space-y-2">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={siteContent.contactInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-3 rounded-full text-xs font-semibold shadow hover:shadow-md transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>{t(data.instagramBtn)}</span>
                    </motion.a>
                    <p className="text-[11px] italic text-text/50 text-center">
                      {t(siteContent.representativeCaption)}
                    </p>
                  </div>

                </div>

              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
