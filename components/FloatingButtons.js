'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingButtons() {
  const { lang } = useLanguage();
  const whatsappMsg = encodeURIComponent(
    lang === 'hi' 
      ? 'नमस्ते जेएसआर अस्पताल, मैं अपॉइंटमेंट और चिकित्सा परामर्श के बारे में जानकारी प्राप्त करना चाहता/चाहती हूं।'
      : 'Hello JSR Hospital, I would like to inquire about medical consultation and booking an appointment.'
  );

  const whatsappUrl = `https://wa.me/${siteContent.contactInfo.whatsappNumberRaw}?text=${whatsappMsg}`;
  const callUrl = `tel:+91${siteContent.contactInfo.phones.appointment.replace(/\s/g, '')}`;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden flex items-center justify-between gap-3 bg-white/95 backdrop-blur-md p-2.5 rounded-full shadow-2xl border border-primary/20">
      
      {/* Call Button */}
      <motion.a
        whileTap={{ scale: 0.96 }}
        href={callUrl}
        className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white py-2.5 rounded-full text-xs font-semibold shadow hover:bg-primary-dark transition-all relative overflow-hidden"
      >
        <Phone className="w-4 h-4 text-highlight" />
        <span>Call Now</span>
      </motion.a>

      {/* WhatsApp Button with Soft Pulse Ring every 5 seconds */}
      <motion.a
        whileTap={{ scale: 0.96 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white py-2.5 rounded-full text-xs font-semibold shadow hover:bg-[#1ebd59] transition-all relative"
      >
        {/* Soft pulse animation element */}
        <motion.span
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 rounded-full border-2 border-[#25D366] pointer-events-none"
        />
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </motion.a>

    </div>
  );
}
