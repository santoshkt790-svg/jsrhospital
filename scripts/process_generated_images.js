const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\santosh\\.gemini\\antigravity\\brain\\7055e2f3-b499-4f19-be63-44e3d280b51b';
const publicDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directories exist
['', 'therapies', 'gallery', 'departments'].forEach(dir => {
  const fullPath = path.join(publicDir, dir);
  if (!fs.existsSync(fullPath)) fs.mkdirSync(fullPath, { recursive: true });
});

// Mapping generated files from brain directory
const imageMap = {
  'hero_main_1791039551170.jpg': 'hero-main.webp',
  'pain_spotlight_1791039569398.jpg': 'pain-spotlight.webp',
  'womens_health_1791039598830.jpg': 'womens-health.webp',
  'event_health_camp_1791039615449.jpg': 'event-health-camp.webp',
  
  'therapy_panchakarma_1791039663313.jpg': 'therapies/panchakarma.webp',
  'therapy_basti_massage_1791039681666.jpg': 'therapies/basti-massage.webp',
  'therapy_shirodhara_1791039705917.jpg': 'therapies/shirodhara.webp',
  'therapy_hijama_1791039761999.jpg': 'therapies/hijama.webp',
  'therapy_ice_bath_1791039812178.jpg': 'therapies/ice-bath.webp',
  'therapy_hydrotherapy_1791039829617.jpg': 'therapies/hydrotherapy.webp',
  'therapy_mud_1791039845124.jpg': 'therapies/mud.webp',
  'therapy_yoga_1791039862086.jpg': 'therapies/yoga.webp',

  'gallery_reception_1791039932295.jpg': 'gallery/gallery-reception.webp'
};

// Copy generated photos
Object.entries(imageMap).forEach(([srcName, destRelPath]) => {
  const srcPath = path.join(brainDir, srcName);
  const destPath = path.join(publicDir, destRelPath);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcName} -> ${destRelPath}`);
  } else {
    console.warn(`Source file missing: ${srcName}`);
  }
});

// Helper for SVG graphics
function createSvgIllustration(filename, title, iconPath, bgColor = '#FAF7F0', primaryColor = '#095A22') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="400" height="400" rx="32" fill="${bgColor}"/>
    <circle cx="200" cy="180" r="90" fill="#EAF3E4" stroke="#C9A227" stroke-width="2"/>
    <g transform="translate(140, 120) scale(2.5)" fill="none" stroke="${primaryColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${iconPath}
    </g>
    <text x="200" y="320" font-family="'Poppins', sans-serif" font-size="20" font-weight="700" fill="${primaryColor}" text-anchor="middle">${title}</text>
  </svg>`;
  fs.writeFileSync(path.join(publicDir, filename), svg);
}

// 10 Department flat icons
const depts = [
  { file: 'departments/dept-ayurveda.webp', title: 'Ayurveda', icon: '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6v12M8 10l8 4M16 10l-8 4"/>' },
  { file: 'departments/dept-diabetes.webp', title: 'Diabetes Care', icon: '<path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/>' },
  { file: 'departments/dept-bones-joints.webp', title: 'Bones & Joints', icon: '<circle cx="9" cy="9" r="4"/><circle cx="15" cy="15" r="4"/><path d="M9 13l6-6"/>' },
  { file: 'departments/dept-gynae.webp', title: 'Gynaecology', icon: '<circle cx="12" cy="10" r="6"/><path d="M12 16v6M9 19h6"/>' },
  { file: 'departments/dept-child-skin.webp', title: 'Child & Skin Care', icon: '<path d="M12 2a6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13a6 6 0 0 0-6-6z"/>' },
  { file: 'departments/dept-lungs.webp', title: 'Respiratory', icon: '<path d="M6 3v18M18 3v18M6 12h12"/>' },
  { file: 'departments/dept-ent.webp', title: 'ENT Care', icon: '<path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9z"/><path d="M12 15v6"/>' },
  { file: 'departments/dept-eye.webp', title: 'Eye Care', icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>' },
  { file: 'departments/dept-surgery.webp', title: 'General Surgery', icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>' },
  { file: 'departments/dept-general-medicine.webp', title: 'General Medicine', icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>' }
];

depts.forEach(d => createSvgIllustration(d.file, d.title, d.icon));

// Helper for Gallery SVGs
function createGallerySvg(filename, title, subtitle) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#EAF3E4"/>
    <rect x="30" y="30" width="740" height="540" rx="24" fill="#FAF7F0" stroke="#C9A227" stroke-width="3" stroke-dasharray="8 8"/>
    <path d="M400 210 C440 150 500 150 500 220 C500 290 400 340 400 340 C400 340 300 290 300 220 C300 150 360 150 400 210 Z" fill="#095A22" opacity="0.85"/>
    <text x="400" y="410" font-family="'Playfair Display', serif" font-size="36" font-weight="700" fill="#095A22" text-anchor="middle">${title}</text>
    <text x="400" y="455" font-family="'Poppins', sans-serif" font-size="20" fill="#248E2C" text-anchor="middle">${subtitle}</text>
    <text x="400" y="500" font-family="'Poppins', sans-serif" font-size="14" fill="#C9A227" text-anchor="middle">JSR Multispeciality Hospital Rohtak • Representative Image</text>
  </svg>`;
  fs.writeFileSync(path.join(publicDir, filename), svg);
}

const galItems = [
  { file: 'gallery/gallery-opd.webp', title: 'OPD Consultation Room', subtitle: 'Modern Clinical Chamber' },
  { file: 'gallery/gallery-therapy-room.webp', title: 'Ayurvedic Treatment Suite', subtitle: 'Traditional Droni & Panchakarma' },
  { file: 'gallery/gallery-herbs.webp', title: 'Authentic Herbal Preparations', subtitle: 'Pure Medicinal Herbs & Mortar' },
  { file: 'gallery/gallery-yoga-hall.webp', title: 'Yoga & Naturopathy Hall', subtitle: 'Sunlit Rejuvenation Space' },
  { file: 'gallery/gallery-waiting-area.webp', title: 'Patient Waiting Lounge', subtitle: 'Comfortable & Hygienic' },
  { file: 'gallery/gallery-pharmacy.webp', title: 'Herbal Pharmacy Shelves', subtitle: 'Quality Assured Medicines' },
  { file: 'gallery/gallery-garden.webp', title: 'Healing Medicinal Garden', subtitle: 'Fresh Herbal Plants' }
];

galItems.forEach(g => createGallerySvg(g.file, g.title, g.subtitle));

console.log('Processed all images successfully!');
