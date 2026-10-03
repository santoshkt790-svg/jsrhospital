'use client';
import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { siteContent } from '../data/content';

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white text-xs py-2 px-4 border-b border-secondary/30 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a
            href={`tel:+91${siteContent.contactInfo.phones.appointment.replace(/\s/g, '')}`}
            className="flex items-center space-x-1.5 hover:text-highlight transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-accent-gold" />
            <span>+91 {siteContent.contactInfo.phones.appointment}</span>
          </a>
          <span className="text-white/30">|</span>
          <div className="flex items-center space-x-1.5 text-white/90">
            <MapPin className="w-3.5 h-3.5 text-accent-gold" />
            <span>{siteContent.contactInfo.address.line1}, Rohtak</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href={siteContent.contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-highlight transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-accent-gold" />
            <span>{siteContent.contactInfo.instagram}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
