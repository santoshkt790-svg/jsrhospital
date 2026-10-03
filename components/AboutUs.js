'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Heart } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import Counter from './Counter';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <SectionHeading
          label="JSR Multispeciality Hospital Rohtak"
          title={t(siteContent.about.title)}
          subtitle={t(siteContent.about.description)}
          icon={Heart}
          alignment="center"
        />

        <Reveal direction="up" delay={0.3}>
          <div className="text-center italic font-playfair text-primary-dark font-medium text-lg text-accent-gold pt-3">
            "{siteContent.about.tagline}"
          </div>
        </Reveal>

        {/* Editable Stats Grid with Stagger & Count Up */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteContent.stats.map((stat, idx) => (
            <Reveal key={idx} direction="up" delay={0.1 * idx} scale>
              <div className="jsr-card p-6 text-center border border-accent-gold/20 relative group hover:border-primary/40 transition-all rounded-2xl bg-white shadow-jsr-card">
                <div className="text-3xl sm:text-4xl font-bold text-primary font-playfair group-hover:scale-105 transition-transform">
                  <Counter value={stat.count} />
                </div>
                <div className="w-8 h-0.5 bg-accent-gold mx-auto my-3" />
                <div className="text-xs sm:text-sm font-medium text-text/80">
                  {t(stat.label)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
