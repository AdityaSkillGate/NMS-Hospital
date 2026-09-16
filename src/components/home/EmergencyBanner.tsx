'use client';

import React from 'react';
import { PhoneCall, Ambulance, MapPin, Clock } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface EmergencyBannerProps {
  currentLang: Language;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="bg-gradient-to-r from-red-900 via-emergency to-red-950 text-white py-8 px-4 sm:px-6 lg:px-8 border-y-4 border-red-500 shadow-xl relative overflow-hidden">
      {/* Background Pulse Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center shrink-0">
            <Ambulance className="w-8 h-8 text-white animate-pulse" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-red-200">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>24/7 Casualty & Trauma Response</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {t.emergencyBar.title}
            </h3>
            <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
              {t.emergencyBar.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
            className="flex items-center gap-2.5 bg-white hover:bg-red-50 text-emergency-dark font-black text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-5 h-5 text-emergency animate-bounce" />
            <span>{t.emergencyBar.callBtn}</span>
          </a>

          <a
            href="https://maps.google.com/?q=NMS+Hospital+Sankarankovil+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black/30 hover:bg-black/40 text-white font-semibold text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm transition-colors"
          >
            <MapPin className="w-4 h-4 text-red-200" />
            <span>{t.emergencyBar.directionsBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
