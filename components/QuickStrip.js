'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Leaf, Sun, Stethoscope, Activity } from 'lucide-react';
import Reveal from './Reveal';

const iconMap = {
  Leaf: Leaf,
  Sun: Sun,
  Stethoscope: Stethoscope,
  Activity: Activity,
};

export default function QuickStrip() {
  const { t } = useLanguage();

  return (
    <section className="py-8 bg-white border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.quickStrip.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Leaf;
            return (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-soft-section/50 hover:bg-soft-section transition-all border border-secondary/10 hover:border-secondary/30">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <IconComponent className="w-6 h-6 text-highlight" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-text/70 mt-0.5">
                      {t(item.desc)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
