'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { Heart, ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '@/data/translations';

export default function AboutPage() {
  return (
    <SiteShell>
      {({ currentLang, onOpenBooking }) => {
        const t = TRANSLATIONS[currentLang];

        return (
          <div className="space-y-12">
            {/* HERO */}
            <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-flex items-center gap-1.5 bg-hospital-500/20 text-sky-300 border border-hospital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Heart className="w-3.5 h-3.5" />
                  <span>About NMS Hospital</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  {currentLang === 'ta'
                    ? 'என்.எம்.எஸ் மருத்துவமனை — எங்கள் மருத்துவ பயணம்'
                    : 'Compassionate Healthcare Rooted in Sankarankovil'}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ta'
                    ? 'சங்கரன்கோவில் மெயின் ரோட்டில் அமைந்துள்ள என்.எம்.எஸ் மருத்துவமனை, இப்பகுதி மக்களுக்கு அணுகக்கூடிய, கனிவான மற்றும் நோயாளியை மையமாகக் கொண்ட தரமான மருத்துவ சேவைகளை வழங்குவதை முதன்மை நோக்கமாகக் கொண்டுள்ளது.'
                    : 'NMS Hospital is a patient-focused healthcare provider located on Main Road, Sankarankovil, committed to providing ethical, accessible, and high-standard clinical care to families across Tenkasi District.'}
                </p>
              </div>
            </div>

            {/* ETHOS & MISSION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-vital-50 text-vital-700 border border-vital-200 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Our Medical Philosophy
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t.tagline}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Healthcare is a sacred responsibility. At NMS Hospital, we believe that high-quality medical care and precision diagnostics should be transparent, respectful, and readily available to every family without unnecessary financial anxiety.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    By openly displaying all 9 diagnostic health check-up tariffs and providing modern facilities including 2D Echo, computerized treadmill stress testing, ultrasound imaging, and fully automated laboratory analyzers, we empower patients with trustworthy medical guidance.
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Adherence to verified medical evidence and clinical ethics</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Compassionate bedside nursing and respectful patient support</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                      <span>Round-the-clock emergency casualty and trauma response</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Our Core Pillars</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="p-2 bg-hospital-50 text-hospital-700 rounded-xl shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Patient-First Care</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Listening attentively to patient concerns and treating every individual with warmth and dignity.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="p-2 bg-vital-50 text-vital-700 rounded-xl shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Diagnostic Transparency</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Publicly listed check-up tariffs starting from ₹195 with zero hidden test costs.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="p-2 bg-sky-50 text-sky-700 rounded-xl shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">Clinical Responsibility</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Rational prescribing, evidence-based treatments, and continuous monitoring of patient recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </SiteShell>
  );
}
