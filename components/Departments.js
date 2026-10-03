'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import {
  Leaf,
  Activity,
  Bone,
  UserCheck,
  Smile,
  Wind,
  Ear,
  Eye,
  Scissors,
  HeartPulse
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconMap = {
  Leaf: Leaf,
  Activity: Activity,
  Bone: Bone,
  UserCheck: UserCheck,
  Smile: Smile,
  Wind: Wind,
  Ear: Ear,
  Eye: Eye,
  Scissors: Scissors,
  HeartPulse: HeartPulse,
};

export default function Departments() {
  const { t } = useLanguage();

  return (
    <section id="departments" className="py-16 bg-soft-section/60 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          title={t({ en: "Specialized Medical Departments", hi: "विशेषज्ञ चिकित्सा विभाग" })}
          subtitle={t({ en: "Comprehensive medical and surgical services provided by experienced clinicians.", hi: "अनुभवी डॉक्टरों द्वारा प्रदान की जाने वाली व्यापक चिकित्सा एवं शल्य चिकित्सा सेवाएं।" })}
          alignment="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {siteContent.departments.map((dept, idx) => {
            const IconComponent = iconMap[dept.icon] || Leaf;
            return (
              <Reveal key={dept.id} direction="up" delay={idx * 0.08}>
                <motion.a
                  href="#appointment"
                  whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(9, 90, 34, 0.12)' }}
                  transition={{ duration: 0.25 }}
                  className="jsr-card p-6 text-center flex flex-col items-center justify-center space-y-3 group border border-transparent hover:border-accent-gold transition-all duration-300 shadow-jsr-card bg-white rounded-2xl h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.25 }}
                    className="w-14 h-14 rounded-2xl bg-soft-section text-primary border border-secondary/20 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    <IconComponent className="w-7 h-7 text-secondary group-hover:text-highlight transition-colors" />
                  </motion.div>
                  <h3 className="text-xs sm:text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                    {t(dept.name)}
                  </h3>
                </motion.a>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
