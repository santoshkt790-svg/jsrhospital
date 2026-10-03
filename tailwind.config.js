/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#095A22',
          dark: '#064D20',
        },
        secondary: '#248E2C',
        highlight: '#79C721',
        background: '#FAF7F0',
        'soft-section': '#EAF3E4',
        'accent-gold': '#C9A227',
        'trust-navy': '#0B2A5B',
        text: '#222222',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'sans-serif'],
      },
      borderRadius: {
        'jsr': '16px',
      },
      boxShadow: {
        'jsr-soft': '0 4px 20px -2px rgba(9, 90, 34, 0.08)',
        'jsr-card': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'jsr-hover': '0 12px 35px rgba(9, 90, 34, 0.12)',
      }
    },
  },
  plugins: [],
}
