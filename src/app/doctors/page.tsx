'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { DoctorsGrid } from '@/components/doctors/DoctorsGrid';
import { Award, Clock, Calendar, ShieldCheck } from 'lucide-react';

export default function DoctorsPage() {
  return (
    <SiteShell>
      {({ currentLang, onOpenBooking }) => (
        <div className="space-y-12">
          {/* HERO BANNER */}
          <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 bg-hospital-500/20 text-sky-300 border border-hospital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Qualified Medical Practitioners</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {currentLang === 'ta'
                  ? 'எங்கள் அனுபவமிக்க மருத்துவர்கள்'
                  : 'Specialist Doctors & Medical Consultants'}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ta'
                  ? 'பொது மருத்துவம், இதய நலம், சர்க்கரை நோய், மகளிர் நலம், குழந்தைகள் மருத்துவம் மற்றும் அறுவை சிகிச்சையில் நிபுணத்துவம் பெற்ற மருத்துவர்கள்.'
                  : 'Consult with highly qualified physicians offering ethical, patient-centric consultations, accurate diagnostics, and compassionate clinical care in Sankarankovil.'}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-vital-400" />
                  <span>Morning & Evening OPD Sessions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Online & WhatsApp Booking</span>
                </div>
              </div>
            </div>
          </div>

          {/* DOCTORS GRID */}
          <DoctorsGrid currentLang={currentLang} onOpenBooking={onOpenBooking} />
        </div>
      )}
    </SiteShell>
  );
}
