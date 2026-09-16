'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Receipt, Users, PhoneCall, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const pillars = [
    {
      icon: Receipt,
      title: t.whyChooseSection.pillar1Title,
      desc: t.whyChooseSection.pillar1Desc,
      highlight: currentLang === 'ta' ? '₹195 முதல்' : 'From ₹195',
      color: 'vital',
    },
    {
      icon: Users,
      title: t.whyChooseSection.pillar2Title,
      desc: t.whyChooseSection.pillar2Desc,
      highlight: currentLang === 'ta' ? 'அனுபவமிக்க மருத்துவர்கள்' : 'Senior Physicians',
      color: 'hospital',
    },
    {
      icon: PhoneCall,
      title: t.whyChooseSection.pillar3Title,
      desc: t.whyChooseSection.pillar3Desc,
      highlight: '24/7 Casualty',
      color: 'emergency',
    },
    {
      icon: MapPin,
      title: t.whyChooseSection.pillar4Title,
      desc: t.whyChooseSection.pillar4Desc,
      highlight: currentLang === 'ta' ? 'மெயின் ரோடு' : 'Main Highway Road',
      color: 'hospital',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-vital-50 text-vital-700 border border-vital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-vital-600" />
            <span>{t.whyChooseSection.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t.whyChooseSection.title}
          </motion.h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.whyChooseSection.subtitle}
          </p>
        </div>

        {/* PILLARS GRID WITH ANIMATED BOX RENDERING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-hospital-50 group-hover:bg-hospital-600 group-hover:text-white text-hospital-600 flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-hospital-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-vital-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{currentLang === 'ta' ? 'சரிபார்க்கப்பட்ட மருத்துவ தரம்' : 'Verified Clinical Standard'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
