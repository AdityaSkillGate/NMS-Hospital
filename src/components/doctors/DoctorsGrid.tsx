'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Clock, 
  Calendar, 
  MessageCircle, 
  UserCheck, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Eye, 
  ChevronDown, 
  ChevronUp,
  Building2,
  Stethoscope
} from 'lucide-react';
import { CHIEF_DOCTORS, VISITING_DOCTORS, RESIDENT_DOCTORS, Doctor } from '@/data/doctors';
import { Language, TRANSLATIONS } from '@/data/translations';

interface DoctorsGridProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
}

export const DoctorsGrid: React.FC<DoctorsGridProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('all');
  const [showBoardPhoto, setShowBoardPhoto] = useState(false);

  const visitingCategories = [
    { id: 'all', label: currentLang === 'ta' ? 'அனைத்து சிறப்பு மருத்துவர்கள்' : 'All Visiting Specialists (16)' },
    { id: 'gastro', label: currentLang === 'ta' ? 'வயிறு & குடல் (Gastro)' : 'Gastro & Liver' },
    { id: 'cardio', label: currentLang === 'ta' ? 'இருதயம் (Cardio)' : 'Cardiology' },
    { id: 'surgery', label: currentLang === 'ta' ? 'அறுவை சிகிச்சை' : 'Surgery & Paed Surgery' },
    { id: 'super', label: currentLang === 'ta' ? 'சிறுநீரகம் & நரம்பியல்' : 'Uro, Neuro & Cancer' },
    { id: 'ortho', label: currentLang === 'ta' ? 'எலும்பு & மூட்டு' : 'Ortho & Plastic' },
    { id: 'scan', label: currentLang === 'ta' ? 'ஸ்கேன் & கதிரியக்கம்' : 'Scan & Ultrasound' },
  ];

  const filteredVisitingDoctors = VISITING_DOCTORS.filter((doc) => {
    if (selectedDeptFilter === 'all') return true;
    if (selectedDeptFilter === 'gastro') return doc.departmentId.includes('gastro');
    if (selectedDeptFilter === 'cardio') return doc.departmentId.includes('cardio');
    if (selectedDeptFilter === 'surgery') return doc.departmentId.includes('surgery') || doc.departmentId.includes('paediatric-surgery');
    if (selectedDeptFilter === 'super') return ['urology', 'neurosurgery', 'oncology'].includes(doc.departmentId);
    if (selectedDeptFilter === 'ortho') return ['orthopaedics', 'plastic-surgery', 'maxillofacial'].includes(doc.departmentId);
    if (selectedDeptFilter === 'scan') return doc.departmentId === 'radiology';
    return true;
  });

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-hospital-50 text-hospital-700 border border-hospital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5 text-hospital-600" />
            <span>{currentLang === 'ta' ? 'மருத்துவ நிபுணர்கள்' : 'Medical Consultants & Specialists'}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            {currentLang === 'ta' ? 'என்.எம்.எஸ் மருத்துவமனை தலைமை மருத்துவர்கள்' : 'NMS Hospital Medical Faculty'}
          </motion.h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {currentLang === 'ta'
              ? 'முழுநேர தலைமை மருத்துவர்கள் மற்றும் திருநெல்வேலி மருத்துவக் கல்லூரி (TVMCH) பேராசிரியர்கள் அடங்கிய வாராந்திர சிறப்பு மருத்துவ நிபுணர் குழு.'
              : 'Led by our Chief Resident Physicians with weekly consultations by distinguished super-specialist professors and surgeons from TVMCH.'}
          </p>
        </div>

        {/* 1. CHIEF RESIDENT DOCTORS (MAIN 2 DOCTORS - NALLAMUTHUSAMY & VASUKI NALLAMUTHUSAMY) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-hospital-600 uppercase tracking-wider block">
                {currentLang === 'ta' ? 'முழுநேர தலைமை மருத்துவர்கள்' : 'Full-Time Leadership'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-vital-600" />
                <span>{currentLang === 'ta' ? 'முதன்மையான சிறப்பு மருத்துவர்கள்' : 'Chief Resident Medical Specialists'}</span>
              </h3>
            </div>
            <span className="bg-vital-100 text-vital-800 text-xs font-bold px-3 py-1 rounded-full border border-vital-200">
              Daily OPD Available
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CHIEF_DOCTORS.map((doc, idx) => {
              const whatsappChief = encodeURIComponent(
                currentLang === 'ta'
                  ? `வணக்கம் என்.எம்.எஸ் மருத்துவமனை, நான் தலைமை மருத்துவர் ${doc.name.ta} (${doc.departmentName.ta}) அவர்களிடம் ஆலோசனை பெற முன்பதிவு செய்ய விரும்புகிறேன்.`
                  : `Hello NMS Hospital, I would like to book a consultation with Chief Doctor ${doc.name.en} (${doc.departmentName.en}).`
              );

              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="bg-white rounded-3xl border-2 border-hospital-500/40 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-hospital-500/10 to-vital-500/10 rounded-bl-full pointer-events-none" />

                  <div>
                    {/* TOP BADGE */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-extrabold text-hospital-800 bg-hospital-50 border border-hospital-200 px-3 py-1 rounded-full uppercase tracking-wider">
                        {doc.roleTitle[currentLang]}
                      </span>
                      <span className="text-xs font-bold text-vital-700 bg-vital-50 border border-vital-200 px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-vital-500 animate-pulse" />
                        <span>{doc.visitFrequency[currentLang]}</span>
                      </span>
                    </div>

                    {/* DOCTOR NAME & DEGREE */}
                    <h4 className="text-2xl font-black text-slate-900 group-hover:text-hospital-700 transition-colors">
                      {doc.name[currentLang]}
                    </h4>
                    <div className="text-sm font-bold text-hospital-600 mt-0.5">
                      {doc.qualification}
                    </div>

                    {/* DEPARTMENT & SPECIALITY FOCUS */}
                    <div className="mt-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {currentLang === 'ta' ? 'மருத்துவ சிறப்பு:' : 'Clinical Specialty:'}
                      </div>
                      <p className="text-sm font-bold text-slate-800 leading-snug">
                        {doc.specialityFocus[currentLang]}
                      </p>
                    </div>

                    {/* OPD TIMING */}
                    <div className="mt-4 flex items-start gap-2.5 text-xs text-slate-700 bg-vital-50/60 p-3 rounded-2xl border border-vital-200/60">
                      <Clock className="w-4 h-4 text-vital-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">
                          {currentLang === 'ta' ? 'ஆலோசனை நேரம் (OPD):' : 'OPD Consultation Hours:'}
                        </span>
                        <span>{doc.opdTimings[currentLang]}</span>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/919442000000?text=${whatsappChief}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-colors shadow-sm text-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenBooking({ type: 'consultation', id: doc.id })}
                      className="flex items-center justify-center gap-2 bg-hospital-600 hover:bg-hospital-700 text-white text-xs sm:text-sm font-bold py-3 rounded-xl transition-all shadow-md text-center"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{currentLang === 'ta' ? 'முன்பதிவு செய்ய' : 'Book Appointment'}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. WEEKLY VISITING SPECIALISTS (SPECIAL APPEARANCE BASED ON DEPARTMENT) */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-hospital-900 to-navy-950 rounded-3xl p-6 sm:p-8 text-white mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Appearance • Weekly Visiting Consultants</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentLang === 'ta' ? 'வாராந்திர வருகை தரும் சிறப்பு நிபுணர்கள்' : 'Visiting Super-Specialist Consultants'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                {currentLang === 'ta'
                  ? 'திருநெல்வேலி அரசு மருத்துவக் கல்லூரி (TVMCH) பேராசிரியர்கள் மற்றும் சிறப்பு அறுவை சிகிச்சை நிபுணர்கள் குறிப்பிட்ட கிழமைகளில் வருகை தந்து ஆலோசனைகள் மற்றும் அறுவை சிகிச்சைகளை மேற்கொள்கின்றனர்.'
                  : 'Distinguished professors and heads of departments from TVMCH visiting NMS Hospital on weekly designated days for advanced surgical and clinical consultations.'}
              </p>
            </div>

            <button
              onClick={() => setShowBoardPhoto(!showBoardPhoto)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl backdrop-blur-sm transition-all whitespace-nowrap"
            >
              <Eye className="w-4 h-4 text-sky-400" />
              <span>{showBoardPhoto ? 'Hide Board Photo' : 'View Official Doctor Board'}</span>
              {showBoardPhoto ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* OFFICIAL BOARD PHOTO EXPANDABLE ACCORDION */}
          <AnimatePresence>
            {showBoardPhoto && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-10 bg-white rounded-3xl p-6 border-2 border-hospital-400 shadow-xl overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Official NMS Hospital Faculty Board (Sankarankovil Main Entrance)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Listing Chief Doctors & all Weekly Visiting Specialists
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBoardPhoto(false)}
                    className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                  >
                    Close View ✕
                  </button>
                </div>

                <div className="relative w-full h-80 sm:h-[460px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/assets/images/nms-doctors-board.webp"
                    alt="NMS Hospital Doctors Faculty Board"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DEPARTMENT FILTER TABS FOR VISITING SPECIALISTS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {visitingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedDeptFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedDeptFilter === cat.id
                    ? 'bg-hospital-600 text-white shadow-md shadow-hospital-600/20 font-bold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* VISITING DOCTORS GRID WITH ANIMATED BOX RENDERING */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredVisitingDoctors.map((doc) => {
                const whatsappDoc = encodeURIComponent(
                  currentLang === 'ta'
                    ? `வணக்கம், நான் ${doc.name.ta} (${doc.departmentName.ta}) வாராந்திர சிறப்பு மருத்துவரிடம் ஆலோசனை பெற விரும்புகிறேன்.`
                    : `Hello NMS Hospital, I would like to book a weekly appointment with visiting specialist ${doc.name.en} (${doc.departmentName.en}).`
                );

                return (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:shadow-md hover:border-hospital-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          {doc.visitFrequency[currentLang]}
                        </span>
                        {doc.hospitalDesignation && (
                          <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md truncate max-w-[150px]">
                            {doc.hospitalDesignation}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {doc.name[currentLang]}
                      </h4>
                      <div className="text-xs font-semibold text-hospital-600">
                        {doc.qualification}
                      </div>

                      <div className="mt-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <span className="font-semibold block text-slate-900">{doc.departmentName[currentLang]}</span>
                        <span className="text-[11px] text-slate-500 mt-0.5 block">{doc.specialityFocus[currentLang]}</span>
                      </div>

                      <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-vital-600 shrink-0" />
                        <span>{doc.opdTimings[currentLang]}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <a
                        href={`https://wa.me/919442000000?text=${whatsappDoc}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </a>

                      <button
                        onClick={() => onOpenBooking({ type: 'consultation', id: doc.id })}
                        className="text-xs font-bold text-white bg-hospital-600 hover:bg-hospital-700 px-3 py-2 rounded-xl shadow-2xs transition-colors flex items-center gap-1"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Slot</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. RESIDENT DUTY MEDICAL OFFICERS (24/7 CASUALTY & INPATIENT CARE) */}
        <div className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-hospital-600" />
            <h3 className="text-lg font-bold text-slate-900">
              {currentLang === 'ta' ? 'முழுநேர பொது நல மருத்துவர்கள் (24/7 அவசர பிரிவு)' : 'Resident General Physicians (24/7 Casualty & Inpatient Duty)'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESIDENT_DOCTORS.map((resDoc) => (
              <div
                key={resDoc.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900 text-sm">{resDoc.name[currentLang]}</div>
                  <div className="text-xs text-hospital-600 font-semibold">{resDoc.qualification}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{resDoc.specialityFocus[currentLang]}</div>
                </div>

                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-vital-50 text-vital-800 border border-vital-200 shrink-0">
                  24/7 Casualty Duty
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
