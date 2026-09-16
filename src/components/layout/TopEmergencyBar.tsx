'use client';

import React from 'react';
import { PhoneCall, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface TopEmergencyBarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const TopEmergencyBar: React.FC<TopEmergencyBarProps> = ({
  currentLang,
  onToggleLang,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 border-b border-hospital-900/40 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side: Emergency Hotline & Location */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-emergency-light hover:text-white transition-colors group"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency"></span>
            </span>
            <PhoneCall className="w-3.5 h-3.5 text-emergency group-hover:scale-110 transition-transform" />
            <span className="font-medium text-slate-300">{t.topBar.emergency}</span>
            <span className="font-bold text-white tracking-wide">{t.emergencyPhone}</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-hospital-400" />
            <span>{t.topBar.location}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-vital-400" />
            <span>{t.topBar.opdTiming}</span>
          </div>
        </div>

        {/* Right Side: WhatsApp & Language Switcher */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              currentLang === 'ta'
                ? 'வணக்கம் என்.எம்.எஸ் மருத்துவமனை, நான் உங்கள் இணையதளத்தை பார்த்தேன். எனக்கு மருத்துவ ஆலோசனை / பரிசோதனை பற்றிய விவரங்கள் தேவை.'
                : 'Hello NMS Hospital, I visited your website and would like to enquire about doctor consultation & health check-up packages.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xs:flex items-center gap-1.5 text-vital-400 hover:text-vital-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="font-medium">{t.topBar.quickWhatsApp}</span>
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 bg-hospital-900/80 hover:bg-hospital-800 text-sky-200 hover:text-white px-2.5 py-1 rounded border border-hospital-700/50 transition-all text-xs font-semibold"
            aria-label="Switch Language between English and Tamil"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{currentLang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
