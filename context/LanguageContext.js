'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: (obj) => obj?.en || '',
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('jsr_lang');
    if (saved === 'hi' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'hi' : 'en';
    setLang(nextLang);
    localStorage.setItem('jsr_lang', nextLang);
  };

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
