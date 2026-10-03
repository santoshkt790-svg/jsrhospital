'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Calendar, Stethoscope } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Doctors() {
  const { t } = useLanguage();

  return (
    <section id="doctors" className="py-16 md:py-24 bg-soft-section/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t({ en: "Medical Practitioners", hi: "चिकित्सक टीम" })}
          title={t(siteContent.doctors.title)}
          subtitle={t(siteContent.doctors.subtitle)}
          icon={Stethoscope}
          alignment="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.doctors.list.map((doc, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(9, 90, 34, 0.12)', borderColor: '#C9A227' }}
                transition={{ duration: 0.25 }}
                className="jsr-card overflow-hidden border border-gray-100 p-6 flex flex-col justify-between items-center text-center group transition-all duration-300 shadow-jsr-card rounded-2xl bg-white h-full"
              >
                <div className="space-y-4 flex flex-col items-center">
                  {/* Neutral Colored Circle with Doctor Initials */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/20 border-2 border-accent-gold flex items-center justify-center text-primary font-bold font-playfair text-2xl shadow-inner transition-transform"
                  >
                    <span>{doc.initials || 'DR'}</span>
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-bold font-playfair text-primary group-hover:text-primary-dark transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-medium text-secondary mt-1 max-w-xs">
                      {doc.role}
                    </p>
                  </div>
                </div>

                <div className="w-full pt-6">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#appointment"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-xs shadow-sm transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 text-highlight" />
                    <span>{t(siteContent.doctors.bookBtn)}</span>
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
