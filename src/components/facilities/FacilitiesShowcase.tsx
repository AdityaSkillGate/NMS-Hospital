'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TestTubes, 
  Scan, 
  Layers, 
  HeartPulse, 
  Ambulance, 
  Bed, 
  Pill, 
  ShieldCheck 
} from 'lucide-react';
import { FACILITIES } from '@/data/facilities';
import { Language, TRANSLATIONS } from '@/data/translations';

interface FacilitiesShowcaseProps {
  currentLang: Language;
}

const facilityIcons: Record<string, React.ElementType> = {
  TestTubes,
  Scan,
  Layers,
  HeartPulse,
  Ambulance,
  Bed,
  Pill,
};

export const FacilitiesShowcase: React.FC<FacilitiesShowcaseProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-vital-50 text-vital-700 border border-vital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Building2 className="w-3.5 h-3.5 text-vital-600" />
            <span>{t.facilitiesSection.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t.facilitiesSection.title}
          </motion.h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.facilitiesSection.subtitle}
          </p>
        </div>

        {/* FACILITIES GRID WITH ANIMATED BOX RENDERING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FACILITIES.map((facility, idx) => {
            const Icon = facilityIcons[facility.iconName] || ShieldCheck;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:bg-white hover:border-hospital-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 group-hover:bg-hospital-600 group-hover:text-white text-hospital-600 shadow-sm transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-vital-700 bg-vital-50 border border-vital-200 px-2.5 py-1 rounded-full">
                      {facility.highlight[currentLang]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-hospital-700 transition-colors">
                    {facility.name[currentLang]}
                  </h3>
                  <p className="text-xs font-semibold text-hospital-600 mt-1">
                    {facility.shortDesc[currentLang]}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {facility.details[currentLang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
