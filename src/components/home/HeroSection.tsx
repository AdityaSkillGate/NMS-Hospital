'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, HeartPulse, PhoneCall, Sparkles, Activity, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';
import { Medical3DCanvas } from './Medical3DCanvas';
import { CHIEF_DOCTORS } from '@/data/doctors';

interface HeroSectionProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white min-h-[660px] lg:min-h-[760px] flex items-center">
      {/* 1. CINEMATIC 3D MEDICAL SCENE & GLOWING MESH */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Clinical Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-hospital-950/60 to-slate-950" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-hospital-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-vital-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />

        {/* Subtle Geometric Medical Grid */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        {/* Vignette Overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

        {/* 2. REAL-TIME 3D MEDICAL DNA, CROSS & CARDIAC CANVAS */}
        <Medical3DCanvas />
      </div>

      {/* 3. FOREGROUND HERO CONTENT WITH FRAMER MOTION ANIMATIONS */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Chief Doctors badge, CTAs (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Location & Specialty Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-hospital-900/90 to-vital-950/90 border border-hospital-500/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-hospital-200 shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-vital-400 animate-pulse" />
              <span>{t.locationBadge}</span>
              <span className="text-hospital-500">•</span>
              <span className="text-vital-400 font-bold">24/7 Casualty</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              <span className="block text-slate-100">{t.hero.headingLine1}</span>
              <span className="block mt-1 sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                {t.hero.headingLine2}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subheading}
            </p>

            {/* CHIEF FOUNDER DOCTORS PILL CALLOUT */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="bg-slate-900/80 border border-hospital-500/30 rounded-2xl p-3.5 sm:p-4 backdrop-blur-md max-w-2xl text-left"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                <UserCheck className="w-4 h-4 text-vital-400" />
                <span>{currentLang === 'ta' ? 'முதன்மையான சிறப்பு மருத்துவர்கள்:' : 'Chief Resident Medical Leadership:'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => onOpenBooking({ type: 'consultation', id: CHIEF_DOCTORS[0].id })}
                  className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-hospital-400 cursor-pointer transition-all"
                >
                  <div className="font-bold text-sm text-white flex items-center justify-between">
                    <span>{CHIEF_DOCTORS[0].name[currentLang]}</span>
                    <span className="text-[10px] text-sky-400 font-semibold">{CHIEF_DOCTORS[0].qualification}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {CHIEF_DOCTORS[0].specialityFocus[currentLang]}
                  </div>
                </div>

                <div 
                  onClick={() => onOpenBooking({ type: 'consultation', id: CHIEF_DOCTORS[1].id })}
                  className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-vital-400 cursor-pointer transition-all"
                >
                  <div className="font-bold text-sm text-white flex items-center justify-between">
                    <span>{CHIEF_DOCTORS[1].name[currentLang]}</span>
                    <span className="text-[10px] text-vital-400 font-semibold">{CHIEF_DOCTORS[1].qualification}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                    {CHIEF_DOCTORS[1].specialityFocus[currentLang]}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBooking()}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-hospital-500 to-vital-600 hover:from-hospital-600 hover:to-vital-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-hospital-500/25 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.btnAppointment}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/packages"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-5 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 hover:border-vital-400/50"
              >
                <HeartPulse className="w-5 h-5 text-vital-400" />
                <span>{t.hero.btnPackages}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 ml-1" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-emergency/90 hover:bg-emergency text-white font-bold text-base px-4 py-3.5 rounded-xl transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.emergencyPhone}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Hero Interactive Feature Card with animated box rendering */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-vital-500/20 text-vital-400 border border-vital-500/30">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {currentLang === 'ta' ? 'முழு உடல் பரிசோதனை சிறப்பு' : 'Health Check-Up Spotlight'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {currentLang === 'ta' ? 'அதிகாரப்பூர்வ கட்டண பலகை' : 'Official Hospital Tariff Board'}
                    </p>
                  </div>
                </div>
                <span className="bg-vital-500/20 text-vital-300 font-bold text-xs px-2.5 py-1 rounded-full border border-vital-500/40">
                  9 Packages
                </span>
              </div>

              {/* Spotlight Highlights */}
              <div className="space-y-3.5 mb-6">
                {/* Basic Checkup Highlight */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  onClick={() => onOpenBooking({ type: 'package', id: 'basic-health-checkup' })}
                  className="p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-750 border border-slate-700 hover:border-hospital-500 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      Basic Health Check-Up
                    </div>
                    <div className="text-xs text-slate-400">10 essential blood & urine routine tests</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-vital-400">₹195</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Starting Tariff</div>
                  </div>
                </motion.div>

                {/* Master Heart Checkup Highlight */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  onClick={() => onOpenBooking({ type: 'package', id: 'master-health-checkup-heart' })}
                  className="p-3.5 rounded-xl bg-gradient-to-r from-hospital-950/60 to-slate-800/80 border border-hospital-600/40 hover:border-vital-400 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-sm font-bold text-sky-200 group-hover:text-vital-300 transition-colors flex items-center gap-1.5">
                      <span>Master Heart Check-Up</span>
                      <span className="bg-red-500/20 text-red-300 text-[10px] px-1.5 py-0.5 rounded font-bold">ECHO+TMT</span>
                    </div>
                    <div className="text-xs text-slate-400">2D Echo, Treadmill, Lipid profile & X-Ray</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-vital-400">₹2,050</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Full Cardiac</div>
                  </div>
                </motion.div>

                {/* Master Diabetic Highlight */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 2 }}
                  onClick={() => onOpenBooking({ type: 'package', id: 'master-health-checkup-diabetic' })}
                  className="p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-750 border border-slate-700 hover:border-hospital-500 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      Master Diabetic Check-Up
                    </div>
                    <div className="text-xs text-slate-400">HbA1c (3-Mo Avg), Micro Albumin & ECG</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-vital-400">₹1,200</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Diabetic Care</div>
                  </div>
                </motion.div>
              </div>

              {/* View all 9 packages CTA */}
              <a
                href="/packages"
                className="w-full block text-center py-2.5 rounded-xl bg-hospital-600/40 hover:bg-hospital-600/60 border border-hospital-500/40 text-sky-200 font-semibold text-sm transition-colors"
              >
                {currentLang === 'ta'
                  ? 'அனைத்து 9 பரிசோதனை தொகுப்புகளையும் காண்க →'
                  : 'View All 9 Packages & Tests Included →'}
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM STATS STRIP WITH ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-18 pt-8 border-t border-slate-800/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-hospital-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">{t.hero.stat1Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.hero.stat1Label}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-vital-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-vital-400">{t.hero.stat2Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.hero.stat2Label}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-teal-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">{t.hero.stat3Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.hero.stat3Label}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-300">{t.hero.stat4Number}</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">{t.hero.stat4Label}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
