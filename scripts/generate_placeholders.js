const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public');

function makeSvgPlaceholder(filename, title, bgColor = '#095A22', textColor = '#FFFFFF') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${bgColor}"/>
    <rect x="20" y="20" width="760" height="560" rx="16" fill="none" stroke="#C9A227" stroke-width="2" stroke-dasharray="8 8"/>
    <g fill="${textColor}" font-family="sans-serif" text-anchor="middle">
      <path d="M400 220 C420 180 470 180 470 230 C470 280 400 320 400 320 C400 320 330 280 330 230 C330 180 380 180 400 220 Z" fill="#248E2C" opacity="0.8"/>
      <text x="400" y="380" font-size="32" font-weight="bold" fill="#FAF7F0">${title}</text>
      <text x="400" y="420" font-size="20" fill="#C9A227">JSR Multispeciality Hospital Rohtak</text>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(baseDir, filename), svg);
}

function makeAvatarPlaceholder(filename) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <rect width="400" height="400" rx="200" fill="#EAF3E4"/>
    <circle cx="200" cy="150" r="70" fill="#095A22" opacity="0.7"/>
    <path d="M80 340 C80 250 120 230 200 230 C280 230 320 250 320 340 Z" fill="#095A22" opacity="0.7"/>
    <circle cx="200" cy="200" r="190" fill="none" stroke="#C9A227" stroke-width="4"/>
  </svg>`;
  fs.writeFileSync(path.join(baseDir, filename), svg);
}

// Doctor Avatar
makeAvatarPlaceholder('images/doctors/avatar-placeholder.png');

// Hero building
makeSvgPlaceholder('images/hero-hospital.jpg', 'JSR Hospital Building & Premises', '#064D20');

// OG Image
makeSvgPlaceholder('images/og-jsr-hospital.jpg', 'JSR Multispeciality Hospital LLP', '#095A22');

// Therapies
const therapies = ['panchakarma', 'basti-massage', 'shirodhara', 'hijama', 'icebath', 'hydrotherapy', 'mudtherapy', 'yoga'];
therapies.forEach(t => {
  makeSvgPlaceholder(`images/therapies/${t}.jpg`, t.toUpperCase().replace('-', ' '), '#095A22');
});

// Gallery
const gallery = ['building', 'panchakarma-room', 'reception', 'consultation', 'yoga-hall', 'treatment-suite'];
gallery.forEach(g => {
  makeSvgPlaceholder(`images/gallery/${g}.jpg`, g.toUpperCase().replace('-', ' '), '#0B2A5B');
});

console.log('All image placeholders generated successfully!');
