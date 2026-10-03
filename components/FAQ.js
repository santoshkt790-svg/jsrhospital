'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { HelpCircle, ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="FAQ"
          title={t(siteContent.faq.title)}
          icon={HelpCircle}
          alignment="center"
          className="mb-12"
        />

        <div className="space-y-4">
          {siteContent.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.06}>
                <div className="jsr-card overflow-hidden border border-gray-200/80 bg-white rounded-2xl">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-5 text-left flex justify-between items-center space-x-4 focus:outline-none hover:bg-soft-section/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-primary font-playfair">
                      {t(item.q)}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-soft-section text-primary'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text/80 leading-relaxed border-t border-gray-100 bg-soft-section/20">
                          {t(item.a)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
