'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { DepartmentsList } from '@/components/departments/DepartmentsList';
import { Stethoscope, ShieldCheck, Ambulance } from 'lucide-react';

export default function DepartmentsPage() {
  return (
    <SiteShell>
      {({ currentLang, onOpenBooking }) => (
        <div className="space-y-12">
          {/* HERO BANNER */}
          <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 bg-hospital-500/20 text-sky-300 border border-hospital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Multispeciality Medical Wings</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {currentLang === 'ta'
                  ? 'எங்கள் மருத்துவ பிரிவுகள்'
                  : 'Clinical Specialties & Departments'}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ta'
                  ? '24/7 அவசர சிகிச்சை மற்றும் அதிதீவிர விபத்து பிரிவு முதல் மகளிர் நலம், குழந்தை மருத்துவம், எலும்பு மூட்டு சிகிச்சை வரை அனைத்து சிறப்பு பிரிவுகளும் ஒரே இடத்தில்.'
                  : 'Comprehensive medical infrastructure designed to support adult, pediatric, maternal, surgical, and emergency health requirements under one roof.'}
              </p>
            </div>
          </div>

          {/* DEPARTMENTS LIST */}
          <DepartmentsList currentLang={currentLang} onOpenBooking={onOpenBooking} />
        </div>
      )}
    </SiteShell>
  );
}
