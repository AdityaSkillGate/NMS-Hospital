'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { HEALTH_PACKAGES, HealthPackage } from '@/data/packages';
import { PackageCard } from './PackageCard';
import { PackageModal } from './PackageModal';
import { Language, TRANSLATIONS } from '@/data/translations';

interface DiagnosticHubProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
}

export const DiagnosticHub: React.FC<DiagnosticHubProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalPackage, setActiveModalPackage] = useState<HealthPackage | null>(null);
  const [showOriginalBoard, setShowOriginalBoard] = useState(false);

  const categories = [
    { id: 'all', label: t.packagesSection.filterAll },
    { id: 'routine', label: t.packagesSection.filterRoutine },
    { id: 'cardiac', label: t.packagesSection.filterCardiac },
    { id: 'diabetic', label: t.packagesSection.filterDiabetic },
    { id: 'senior', label: t.packagesSection.filterSenior },
    { id: 'special', label: t.packagesSection.filterSpecial },
  ];

  const filteredPackages = HEALTH_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'all') return true;
    return pkg.category === selectedCategory;
  });

  return (
    <section id="packages" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-vital-50 text-vital-700 border border-vital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-vital-600" />
            <span>{t.packagesSection.badge}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {t.packagesSection.title}
          </motion.h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.packagesSection.subtitle}
          </p>
        </div>

        {/* AUTHENTICITY NOTICE & PHOTO TOGGLE */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-vital-50 text-vital-600 border border-vital-200 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                {currentLang === 'ta' ? 'அங்கீகரிக்கப்பட்ட நேரடி கட்டண பட்டியல்' : '100% Authentic Diagnostic Tariff'}
              </h3>
              <p className="text-xs text-slate-500">
                {t.packagesSection.originalBoardNotice}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowOriginalBoard(!showOriginalBoard)}
            className="flex items-center gap-2 text-xs font-bold text-hospital-700 hover:text-hospital-800 bg-hospital-50 hover:bg-hospital-100 border border-hospital-200 px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap"
          >
            <ImageIcon className="w-4 h-4 text-hospital-600" />
            <span>{t.packagesSection.viewBoardOriginal}</span>
            {showOriginalBoard ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* ORIGINAL TARIFF BOARD PHOTO EXPANDABLE ACCORDION */}
        <AnimatePresence>
          {showOriginalBoard && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 max-w-4xl mx-auto bg-white rounded-3xl p-6 border-2 border-hospital-400 shadow-xl overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Official NMS Hospital Diagnostic Board (Sankarankovil)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Photographed at NMS Hospital Diagnostic Services Reception
                  </p>
                </div>
                <button
                  onClick={() => setShowOriginalBoard(false)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
                >
                  Close View ✕
                </button>
              </div>

              <div className="relative w-full h-80 sm:h-[480px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                <Image
                  src="/assets/images/nms-diagnostic-board-original.png"
                  alt="NMS Hospital Diagnostic Services Board"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CATEGORY FILTER TABS (ANIMATED) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-hospital-600 text-white shadow-md shadow-hospital-600/20 font-bold scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PACKAGES GRID WITH ANIMATED BOX RENDERING */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
              >
                <PackageCard
                  pkg={pkg}
                  currentLang={currentLang}
                  onViewDetails={(item) => setActiveModalPackage(item)}
                  onBook={(item) => onOpenBooking({ type: 'package', id: item.id })}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM BENEFIT PILLS */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <motion.div 
            whileHover={{ y: -2 }}
            className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center gap-3 shadow-2xs"
          >
            <CheckCircle2 className="w-5 h-5 text-vital-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {currentLang === 'ta' ? 'அனைத்து பரிசோதனைகளுக்கும் அன்றைய தினமே அறிக்கை' : 'Same-Day Computerized Reports'}
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center gap-3 shadow-2xs"
          >
            <CheckCircle2 className="w-5 h-5 text-vital-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {currentLang === 'ta' ? 'தானியங்கி உயிர்வேதியியல் & ரத்த அணுக்கள் ஆய்வகம்' : 'Automated Haematology & Biochemistry'}
            </span>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-center gap-3 shadow-2xs"
          >
            <CheckCircle2 className="w-5 h-5 text-vital-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              {currentLang === 'ta' ? 'மருத்துவர் வழிகாட்டலுடன் கூடிய துல்லிய விளக்கம்' : 'Post-Test Physician Consultation Available'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* DETAIL MODAL */}
      <PackageModal
        pkg={activeModalPackage}
        onClose={() => setActiveModalPackage(null)}
        currentLang={currentLang}
        onBook={(item) => onOpenBooking({ type: 'package', id: item.id })}
      />
    </section>
  );
};
