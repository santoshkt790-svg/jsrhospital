'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Image as ImageIcon, Eye, X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const galleryImages = siteContent.gallery.images;

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex, galleryImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedIndex, galleryImages.length]);

  const handleKeyDown = useCallback((e) => {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') setSelectedIndex(null);
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label={t(siteContent.gallery.title)}
          title={t(siteContent.gallery.title)}
          subtitle={t(siteContent.gallery.subtitle)}
          icon={ImageIcon}
          alignment="center"
          className="mb-12"
        />

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, idx) => {
            const hasPhoto = item.hasPhoto !== false && item.url;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.08}>
                <motion.div
                  onClick={() => hasPhoto && setSelectedIndex(idx)}
                  whileHover={hasPhoto ? { y: -4, borderColor: '#C9A227' } : {}}
                  transition={{ duration: 0.25 }}
                  className={`jsr-card overflow-hidden border border-gray-100 transition-all duration-300 relative shadow-jsr-card flex flex-col justify-between rounded-2xl bg-white h-full ${
                    hasPhoto ? 'cursor-pointer group' : ''
                  }`}
                >
                  {hasPhoto ? (
                    /* Real Photo Card */
                    <>
                      <div className="relative aspect-[4/3] w-full bg-soft-section overflow-hidden">
                        <Image
                          src={item.url}
                          alt={t(item.alt)}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-xs font-bold text-primary">
                          {t(item.title)}
                        </h3>
                      </div>
                    </>
                  ) : (
                    /* Coming Soon Stylish Card */
                    <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[220px] bg-gradient-to-b from-soft-section/80 to-white h-full">
                      <div className="w-14 h-14 rounded-full bg-white text-primary border border-accent-gold/40 flex items-center justify-center shadow-sm">
                        <Camera className="w-7 h-7 text-secondary" />
                      </div>

                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-accent-gold/20 text-primary-dark text-[11px] font-bold tracking-wide border border-accent-gold/50">
                        <Sparkles className="w-3 h-3 text-accent-gold" />
                        <span>{t({ en: "Coming Soon", hi: "जल्द आ रहा है" })}</span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-primary font-playfair">
                        {t(item.title)}
                      </h3>
                    </div>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Representative Image Caption */}
        <div className="mt-8 text-center">
          <p className="text-xs italic text-text/50">
            {t(siteContent.representativeCaption)}
          </p>
        </div>

      </div>

      {/* Lightbox Modal with Animated Scale & Fade */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Image */}
              <div className="relative aspect-[16/10] w-full bg-black/5">
                <Image
                  src={galleryImages[selectedIndex].url}
                  alt={t(galleryImages[selectedIndex].alt)}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-md transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-primary flex items-center justify-center shadow-md transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Footer Info */}
              <div className="p-4 flex justify-between items-center border-t border-gray-100 bg-white">
                <div>
                  <h4 className="text-sm font-bold text-primary">
                    {t(galleryImages[selectedIndex].title)}
                  </h4>
                </div>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="flex items-center space-x-1 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>Close (Esc)</span>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
