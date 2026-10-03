'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

export default function SectionHeading({
  label,
  title,
  subtitle,
  icon: IconComponent,
  alignment = 'center',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion();

  const isCenter = alignment === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} space-y-3 ${className}`}>
      
      {/* Small Label */}
      {label && (
        <Reveal direction="down" delay={0} duration={0.5}>
          <div className={`inline-flex items-center space-x-2 text-secondary text-xs font-semibold uppercase tracking-wider bg-soft-section px-3.5 py-1 rounded-full border border-secondary/20 shadow-sm`}>
            {IconComponent && <IconComponent className="w-3.5 h-3.5 text-secondary" />}
            <span>{label}</span>
          </div>
        </Reveal>
      )}

      {/* Main Title */}
      {title && (
        <Reveal direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-primary leading-tight">
            {title}
          </h2>
        </Reveal>
      )}

      {/* Thin Gold Line Expands from Center */}
      <div className={`flex ${isCenter ? 'justify-center' : 'justify-start'} py-1`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] w-20 bg-gradient-to-r from-accent-gold/20 via-accent-gold to-accent-gold/20 origin-center"
        />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <Reveal direction="up" delay={0.25} duration={0.6}>
          <p className="text-sm sm:text-base text-text/70 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}

    </div>
  );
}
