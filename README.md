# JSR Multispeciality Hospital LLP Website (Demo)

A premium, professional, bilingual (English & Hindi), mobile-first website for **JSR Multispeciality Hospital LLP**, Rohtak, Haryana. Combining traditional Ayurveda, Panchakarma, and Naturopathy with modern clinical and surgical care.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Local Run
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 📝 How to Edit Website Content

All website text, translations, phone numbers, doctors list, insurance partners, FAQs, and contact information are centralized in **a single editable file**:

📁 **`data/content.js`**

### 1. Changing Text & Translations
Each text entry in `data/content.js` supports both English (`en`) and Hindi (`hi`):
```js
title: {
  en: "Complete Care for a Healthier Tomorrow",
  hi: "स्वस्थ कल के लिए संपूर्ण देखभाल"
}
```

### 2. Updating Contact Numbers & Address
Edit the `contactInfo` block in `data/content.js`:
```js
contactInfo: {
  address: { ... },
  phones: {
    appointment: "90349 77987",
    secondary: "82951 25646",
    landline: "01262-460929",
    whatsapp: "70277 77897"
  },
  whatsappNumberRaw: "917027777897",
  instagram: "@jsrhospital",
  hoursPlaceholder: "Mon - Sat: 8:00 AM - 8:00 PM | Emergency 24/7" // Replace [CONFIRM WITH CLIENT]
}
```

### 3. Editing Doctor Profiles
Doctors live under `doctors.list`. Do not alter doctor names unless specified. Replace image file paths when real photos become available:
```js
{
  name: "Dr. Anuj",
  role: "M.S., General Surgeon",
  image: "/images/doctors/dr-anuj.jpg" // Place photo in /public/images/doctors/
}
```

---

## 🎨 Changing Brand Colors & Design System

Brand tokens are defined in **`tailwind.config.js`**:
```js
colors: {
  primary: '#095A22',       // Deep Forest Green
  'primary-dark': '#064D20', // Footer & Hover Green
  secondary: '#248E2C',     // Leaf Green
  highlight: '#79C721',     // Accent Badges
  background: '#FAF7F0',    // Warm Cream background
  'soft-section': '#EAF3E4',// Alternate Section Green
  'accent-gold': '#C9A227',  // Gold Dividers
  'trust-navy': '#0B2A5B',   // TPA Insurance Navy
}
```

---

## 🖼️ Replacing Images & Logo

- **Logo**: The main logo is located at `/public/logo.png`. Ensure it retains a white background to fit the sticky white navbar.
- **Hero Image**: `/public/images/hero-hospital.jpg`
- **Therapy Photos**: `/public/images/therapies/*.jpg`
- **Gallery Photos**: `/public/images/gallery/*.jpg`
- **Doctor Photos**: `/public/images/doctors/*.jpg`

---

## ⚖️ Compliance & Medical Guidelines
- **No Unverified Cure Claims**: Guaranteed cure or 100% result statements are omitted per healthcare web standards.
- **NABH Wording**: Uses exact badge wording *"NABH Accredited – Patient Safety & Quality of Care"*.
- **Footer Disclaimer**: Includes mandatory medical advice disclaimer.
