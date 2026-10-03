'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Star, Quote, MessageSquare } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const { t } = useLanguage();
  const data = siteContent.testimonials;

  return (
    <section className="py-16 bg-soft-section/50 relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t(data.title)}
          title={t(data.title)}
          icon={MessageSquare}
          alignment="center"
          className="mb-4"
        />

        {/* Explicit Sample Label */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent-gold/20 text-primary-dark font-bold text-[11px] px-3 py-1 rounded-md border border-accent-gold/40 uppercase tracking-wider">
            {data.sampleNote}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: '#C9A227' }}
                transition={{ duration: 0.25 }}
                className="jsr-card p-6 border border-gray-100 flex flex-col justify-between relative bg-white hover:border-accent-gold transition-all duration-300 shadow-jsr-card rounded-2xl h-full"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-accent-gold/40" />

                  {/* Rating stars */}
                  <div className="flex items-center space-x-1 text-accent-gold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-text/80 leading-relaxed italic">
                    "{t(item.text)}"
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Colored Initials Avatar Circle */}
                    <div className="w-9 h-9 rounded-full bg-soft-section text-primary border border-secondary/30 flex items-center justify-center font-bold text-xs font-playfair">
                      {item.initials}
                    </div>
                    <span className="text-xs font-bold text-primary">{item.name}</span>
                  </div>
                  <span className="text-[10px] text-text/50 uppercase font-semibold">Verified Patient</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
