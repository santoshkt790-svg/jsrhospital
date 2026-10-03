'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
  amount = 0.2,
  scale = false,
}) {
  const shouldReduceMotion = useReducedMotion();

  let initialX = 0;
  let initialY = 0;

  if (!shouldReduceMotion) {
    if (direction === 'up') initialY = 30;
    if (direction === 'down') initialY = -30;
    if (direction === 'left') initialX = 30;
    if (direction === 'right') initialX = -30;
  }

  const initial = {
    opacity: 0,
    x: initialX,
    y: initialY,
    scale: scale && !shouldReduceMotion ? 0.97 : 1,
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
