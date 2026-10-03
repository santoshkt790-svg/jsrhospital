'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Shield } from 'lucide-react';
import Reveal from './Reveal';

export default function Insurance() {
  const { t } = useLanguage();
  const data = siteContent.insurance;

  return (
    <section id="insurance" className="py-16 md:py-20 bg-trust-navy text-white relative overflow-hidden scroll-mt-20">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Reveal direction="down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-white/10 text-highlight px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
              <Shield className="w-4 h-4" />
              <span>{t({ en: "TPA & Insurance Support", hi: "बीमा सुविधा" })}</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-white leading-tight">
              {t(data.title)}
            </h2>
          </Reveal>

          <div className="flex justify-center py-1">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-24 bg-gradient-to-r from-accent-gold/20 via-accent-gold to-accent-gold/20 origin-center"
            />
          </div>
        </div>

        {/* Insurers Text Badge Grid with Staggered Fade-Scale */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {data.partners.map((partner, index) => (
            <Reveal key={index} direction="none" scale={true} delay={index * 0.04} duration={0.4}>
              <motion.div
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                transition={{ duration: 0.2 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 text-center text-xs sm:text-sm font-semibold text-white/95 transition-all shadow-sm flex items-center justify-center min-h-[50px] cursor-default"
              >
                <span>{partner}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
