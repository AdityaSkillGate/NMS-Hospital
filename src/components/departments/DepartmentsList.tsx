'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  ShieldPlus, 
  Sparkles, 
  Baby, 
  Bone, 
  Microscope, 
  Ambulance, 
  Clock, 
  Check, 
  Calendar 
} from 'lucide-react';
import { DEPARTMENTS, Department } from '@/data/departments';
import { Language, TRANSLATIONS } from '@/data/translations';

interface DepartmentsListProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Ambulance,
  Stethoscope,
  HeartPulse,
  Activity,
  ShieldPlus,
  Sparkles,
  Baby,
  Bone,
  Microscope,
};

export const DepartmentsList: React.FC<DepartmentsListProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeDepartment, setActiveDepartment] = useState<Department>(DEPARTMENTS[0]);

  return (
    <section id="departments" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-hospital-50 text-hospital-700 border border-hospital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Stethoscope className="w-3.5 h-3.5 text-hospital-600" />
            <span>{t.departmentsSection.badge}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t.departmentsSection.title}
          </motion.h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.departmentsSection.subtitle}
          </p>
        </div>

        {/* TWO-COLUMN INTERACTIVE TABS WITH ANIMATED BOX RENDERING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Department List Nav (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            {DEPARTMENTS.map((dept) => {
              const Icon = iconMap[dept.iconName] || Stethoscope;
              const isSelected = activeDepartment.id === dept.id;

              return (
                <motion.button
                  key={dept.id}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveDepartment(dept)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-hospital-50/90 border-hospital-500 shadow-md shadow-hospital-500/10 scale-[1.01]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2.5 rounded-xl transition-colors ${
                      isSelected
                        ? 'bg-hospital-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm sm:text-base ${
                        isSelected ? 'text-hospital-900' : 'text-slate-800'
                      }`}>
                        {dept.name[currentLang]}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {dept.shortDesc[currentLang]}
                      </p>
                    </div>
                  </div>

                  {dept.is24x7 && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emergency-light text-emergency-dark border border-emergency/30">
                      24/7
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Selected Department Detailed Animated Box (7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDepartment.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-hospital-600 text-white shadow-md">
                      {React.createElement(iconMap[activeDepartment.iconName] || Stethoscope, {
                        className: 'w-7 h-7',
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {activeDepartment.name[currentLang]}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-hospital-700 font-semibold mt-0.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{activeDepartment.timing[currentLang]}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onOpenBooking({ type: 'consultation', id: activeDepartment.id })}
                    className="flex items-center gap-2 bg-vital-600 hover:bg-vital-700 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{currentLang === 'ta' ? 'ஆலோசனை முன்பதிவு' : 'Book Consultation'}</span>
                  </motion.button>
                </div>

                {/* Full Description */}
                <div className="py-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {activeDepartment.fullDesc[currentLang]}
                  </p>
                </div>

                {/* Key Features & Procedures */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
                    {t.departmentsSection.featuresTitle}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeDepartment.features[currentLang].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-medium text-slate-800 shadow-2xs"
                      >
                        <Check className="w-4 h-4 text-vital-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
