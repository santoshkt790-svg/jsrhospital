'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { ShieldCheck, Calendar, Phone, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative bg-background overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center py-12 md:py-20 scroll-mt-20">
      
      {/* Background Image with subtle scale 1.05 to 1 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={siteContent.hero.bgImage}
            alt={t(siteContent.hero.alt)}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </motion.div>

        {/* Left-to-Right Cream Gradient Overlay for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/25 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Small Top Badge */}
          <Reveal direction="down" delay={0.1}>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-soft-section/90 backdrop-blur-sm border border-primary/20 text-primary text-xs font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-highlight" />
              <span>{t(siteContent.hero.badge)}</span>
            </div>
          </Reveal>

          {/* Main H1 Title */}
          <Reveal direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-primary leading-tight">
              {t(siteContent.hero.h1)}
            </h1>
          </Reveal>

          {/* Subtext */}
          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-text/90 font-medium leading-relaxed">
              {t(siteContent.hero.subtext)}
            </p>
          </Reveal>

          {/* Exact NABH Accreditation Badge */}
          <Reveal direction="up" delay={0.4}>
            <div className="inline-flex items-center space-x-2.5 bg-trust-navy/10 backdrop-blur-sm border border-trust-navy/30 text-trust-navy px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-5 h-5 text-trust-navy flex-shrink-0" />
              <span>{siteContent.hero.nabhBadge}</span>
            </div>
          </Reveal>

          {/* CTA Action Buttons */}
          <Reveal direction="up" delay={0.5}>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#appointment"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md transition-all"
              >
                <Calendar className="w-4 h-4 text-highlight" />
                <span>{t(siteContent.hero.ctaPrimary)}</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:+91${siteContent.contactInfo.phones.appointment.replace(/\s/g, '')}`}
                className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm border-2 border-primary text-primary hover:bg-primary hover:text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{t(siteContent.hero.ctaOutline)}</span>
              </motion.a>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Gold Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider opacity-70" />
    </section>
  );
}
