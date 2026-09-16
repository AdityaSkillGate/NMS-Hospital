'use client';

import React from 'react';
import { MapPin, PhoneCall, Clock, Bus, ExternalLink, Navigation } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface LocationContactProps {
  currentLang: Language;
}

export const LocationContact: React.FC<LocationContactProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const serviceTowns = [
    'Sankarankovil (சங்கரன்கோவில்)',
    'Puliyangudi (புளியங்குடி)',
    'Vasudevanallur (வாசுதேவநல்லூர்)',
    'Rajapalayam (ராஜபாளையம்)',
    'Sivagiri (சிவகிரி)',
    'Kadayanallur (கடையநல்லூர்)',
    'Tenkasi (தென்காசி)',
    'Kovilpatti (கோவில்பட்டி)',
    'Tirunelveli (திருநெல்வேலி)'
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-hospital-50 text-hospital-700 border border-hospital-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-hospital-600" />
            <span>{t.contactSection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contactSection.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contactSection.subtitle}
          </p>
        </div>

        {/* CONTACT CARDS & MAP CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Key Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-hospital-600 text-white shadow-sm shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {t.contactSection.addressLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {t.addressText}
                  </p>
                  <p className="text-xs text-hospital-700 font-semibold mt-1">
                    Landmark: Sankarankoil Tirunelveli Road
                  </p>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emergency text-white shadow-sm shrink-0 mt-1">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {t.contactSection.emergencyLabel}
                  </h3>
                  <a
                    href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                    className="text-lg font-black text-emergency hover:text-red-700 transition-colors block mt-0.5"
                  >
                    {t.emergencyPhone}
                  </a>
                  <span className="text-xs text-slate-500">
                    24 Hours / 7 Days Casualty Reception
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-vital-600 text-white shadow-sm shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {t.contactSection.hoursLabel}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {t.contactSection.hoursDetails}
                  </p>
                </div>
              </div>

              {/* Transit & Bus Access */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                <div className="p-2.5 rounded-xl bg-slate-200 text-slate-700 shrink-0 mt-1">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {currentLang === 'ta' ? 'பேருந்து வழித்தடம்' : 'Bus Connectivity'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {t.contactSection.busAccess}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps External Action Button */}
            <a
              href="https://maps.google.com/?q=NMS+Hospital+Sankarankovil+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-hospital-600 to-hospital-700 hover:from-hospital-700 hover:to-hospital-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all text-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.contactSection.getDirections}</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
          </div>

          {/* Right Column: Service Areas & Visual Location Panel (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-hospital-950 via-slate-900 to-navy-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Background Medical Cross Pattern */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
                <path d="M 38 10 L 62 10 L 62 38 L 90 38 L 90 62 L 62 62 L 62 90 L 38 90 L 38 62 L 10 62 L 10 38 L 38 38 Z" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                <span>Local Healthcare Coverage</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {currentLang === 'ta'
                  ? 'தென்காசி மாவட்டம் மற்றும் சுற்றியுள்ள பகுதிகளுக்கு சேவை'
                  : 'Serving Families Across Tenkasi District & Nearby Towns'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {currentLang === 'ta'
                  ? 'சங்கரன்கோவில் மற்றும் அருகிலுள்ள கிராமங்கள், நகரங்களில் வசிக்கும் மக்களுக்கு தரமான, விரைவான மற்றும் வெளிப்படையான மருத்துவ சேவைகளை வழங்குகிறோம்.'
                  : 'Providing accessible hospital services, emergency care, and diagnostic testing to residents, families, and patients referred from surrounding taluks and villages.'}
              </p>

              {/* Service Areas Tag Cloud */}
              <div className="mt-6">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {currentLang === 'ta' ? 'சேவைக்குட்பட்ட முக்கிய பகுதிகள்:' : 'Key Towns & Regions Served:'}
                </div>

                <div className="flex flex-wrap gap-2">
                  {serviceTowns.map((town, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white/10 hover:bg-white/20 text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 transition-colors"
                    >
                      📍 {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Map Directions Card */}
            <div className="mt-8 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400 font-semibold">Directions Assistance</div>
                <div className="text-sm font-bold text-white">Main Road (Tirunelveli Highway), Sankarankovil</div>
              </div>
              <a
                href="https://maps.google.com/?q=NMS+Hospital+Sankarankovil+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-vital-500 hover:bg-vital-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Open Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
