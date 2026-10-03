'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { ShieldAlert, ArrowRight, Activity } from 'lucide-react';
import Reveal from './Reveal';

export default function PainSpotlight() {
  const { t } = useLanguage();
  const data = siteContent.painSpotlight;

  return (
    <section id="pain-management" className="py-16 bg-soft-section/80 relative border-y border-primary/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-jsr p-6 sm:p-10 shadow-jsr-card border border-accent-gold/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image & Header Box */}
            <div className="lg:col-span-5 space-y-4">
              <Reveal direction="down" delay={0}>
                <div className="inline-flex items-center space-x-2 text-primary font-semibold text-xs uppercase tracking-wider bg-soft-section px-3 py-1 rounded-full">
                  <ShieldAlert className="w-4 h-4 text-highlight" />
                  <span>{t({ en: "Pain Management Spotlight", hi: "दर्द प्रबंधन विशेष" })}</span>
                </div>
              </Reveal>
              
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-primary leading-tight">
                  {t(data.title)}
                </h2>
              </Reveal>

              <Reveal direction="left" delay={0.2}>
                <p className="text-sm sm:text-base text-text/80">
                  {t(data.subtitle)}
                </p>
              </Reveal>

              {/* Image from left */}
              <Reveal direction="left" delay={0.3}>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-accent-gold/30 shadow-sm mt-4">
                  <Image
                    src={data.image}
                    alt={t(data.alt)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <div className="pt-2">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="#appointment"
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold shadow transition-all"
                  >
                    <span>{t(data.cta)}</span>
                    <ArrowRight className="w-4 h-4 text-highlight" />
                  </motion.a>
                </div>
              </Reveal>
            </div>

            {/* Right 4 Pain Items Grid with Stagger from Right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items.map((item, idx) => (
                <Reveal key={item.id} direction="right" delay={0.1 * idx}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: '#C9A227' }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl bg-soft-section/60 hover:bg-soft-section border border-secondary/15 transition-all flex items-start space-x-3 h-full"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Activity className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary">
                        {t(item.label)}
                      </h3>
                      <p className="text-xs text-text/70 mt-1">
                        {t(item.desc)}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
