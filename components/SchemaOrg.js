import { siteContent } from '../data/content';

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "JSR Multispeciality Hospital LLP",
    "alternateName": "JSR Hospital Rohtak",
    "url": siteContent.meta.url,
    "logo": `${siteContent.meta.url}/logo.png`,
    "description": siteContent.meta.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteContent.contactInfo.address.line1,
      "addressLocality": "Rohtak",
      "addressRegion": "Haryana",
      "postalCode": "124001",
      "addressCountry": "IN"
    },
    "telephone": `+91-${siteContent.contactInfo.phones.appointment}`,
    "medicalSpecialty": [
      "Ayurveda",
      "Panchakarma",
      "Naturopathy",
      "Gynaecology",
      "Otolaryngology",
      "Surgery",
      "GeneralMedicine"
    ],
    "sameAs": [
      siteContent.contactInfo.instagramUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
