'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix (e.g., "6+" -> number 6, suffix "+")
    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(String(value));
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || '';

    const controls = animate(0, targetNum, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(current) {
        setDisplayValue(Math.floor(current) + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}
