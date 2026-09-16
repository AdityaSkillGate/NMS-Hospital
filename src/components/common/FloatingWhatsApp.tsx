'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const quickMessages = [
    {
      label: currentLang === 'ta' ? 'மருத்துவர் ஆலோசனை முன்பதிவு' : 'Doctor Consultation Booking',
      text: currentLang === 'ta'
        ? 'வணக்கம், என்.எம்.எஸ் மருத்துவமனையில் மருத்துவர் ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello NMS Hospital, I would like to book a doctor consultation.',
    },
    {
      label: currentLang === 'ta' ? 'முழு உடல் பரிசோதனை விவரம்' : 'Full Body Check-Up Enquiry',
      text: currentLang === 'ta'
        ? 'வணக்கம், உங்கள் முழு உடல் பரிசோதனை திட்டங்கள் (Master Health Check-up) பற்றிய விவரங்கள் தேவை.'
        : 'Hello NMS Hospital, I want details regarding Full Body & Master Health Check-up packages.',
    },
    {
      label: currentLang === 'ta' ? 'அவசர உதவி / ஆம்புலன்ஸ்' : 'Emergency / Casualty Help',
      text: currentLang === 'ta'
        ? 'அவசர உதவி தேவை. தயவுசெய்து தொடர்பு கொள்ளவும்.'
        : 'URGENT: I need emergency medical assistance from NMS Hospital.',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Quick Prompt Popup */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 sm:w-80 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-bold text-slate-800 text-sm">NMS Hospital WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 my-2.5 leading-relaxed">
            {currentLang === 'ta'
              ? 'வாட்ஸ்அப் மூலம் உடனடியாக எங்கள் வரவேற்பறை குழுவை தொடர்பு கொள்ளுங்கள்:'
              : 'Chat directly with our care desk for appointments and package details:'}
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((msg, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  msg.text
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block text-xs font-medium text-slate-700 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 p-2 rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors"
              >
                💬 {msg.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Open WhatsApp Chat Support"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};
