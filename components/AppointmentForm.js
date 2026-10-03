'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/content';
import { Calendar, MessageCircle, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function AppointmentForm() {
  const { t } = useLanguage();
  const formText = siteContent.appointmentForm;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t(formText.validation.nameReq);
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.phone = t(formText.validation.phoneReq);
    }
    if (!formData.department) {
      newErrors.department = t(formText.validation.deptReq);
    }
    if (!formData.date) {
      newErrors.date = t(formText.validation.dateReq);
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Format prefilled WhatsApp message
    const messageLines = [
      `*New Appointment Request - JSR Hospital Website*`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `🏥 *Department:* ${formData.department}`,
      `📅 *Preferred Date:* ${formData.date}`,
      formData.message ? `💬 *Concern:* ${formData.message}` : null
    ].filter(Boolean).join('\n');

    const encodedMsg = encodeURIComponent(messageLines);
    const whatsappUrl = `https://wa.me/${siteContent.contactInfo.whatsappNumberRaw}?text=${encodedMsg}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-soft-section/70 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal direction="up" scale={true} duration={0.7}>
          <div className="jsr-card p-6 sm:p-10 bg-white border border-accent-gold/40 shadow-jsr-card rounded-2xl">
            
            <SectionHeading
              label={t(formText.title)}
              title={t(formText.title)}
              subtitle={t(formText.subtitle)}
              icon={Calendar}
              alignment="center"
              className="mb-8"
            />

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t(formText.fields.name.label)}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t(formText.fields.name.placeholder)}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.name ? 'border-red-500 bg-red-50/50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t(formText.fields.phone.label)}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t(formText.fields.phone.placeholder)}
                    maxLength={10}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50/50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Department Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t(formText.fields.department.label)}
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.department ? 'border-red-500 bg-red-50/50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-white`}
                  >
                    <option value="">-- Select Department --</option>
                    {siteContent.departments.map((dept) => (
                      <option key={dept.id} value={t(dept.name)}>
                        {t(dept.name)}
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.department}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    {t(formText.fields.date.label)}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.date ? 'border-red-500 bg-red-50/50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all bg-white`}
                  />
                  {errors.date && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Message / Clinical Concern */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  {t(formText.fields.message.label)}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(formText.fields.message.placeholder)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#1ebd59] text-white py-3.5 px-6 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t(formText.submitBtn)}</span>
                </motion.button>
              </div>

            </form>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
