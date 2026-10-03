import { Playfair_Display, Poppins, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import SchemaOrg from '../components/SchemaOrg';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const devanagari = Noto_Sans_Devanagari({
  weight: ['400', '500', '600', '700'],
  subsets: ['devanagari'],
  display: 'swap',
  variable: '--font-devanagari',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://jsrhospital.com'),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: ["JSR Hospital Rohtak", "Ayurveda Hospital Haryana", "Panchakarma Rohtak", "Naturopathy Kath Mandi", "Gynaecologist Rohtak", "Multispeciality Hospital"],
  authors: [{ name: "JSR Multispeciality Hospital LLP" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: "JSR Multispeciality Hospital LLP",
    images: [
      {
        url: siteContent.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "JSR Multispeciality Hospital Rohtak",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${devanagari.variable} scroll-smooth`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-poppins bg-background text-text antialiased selection:bg-secondary selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
