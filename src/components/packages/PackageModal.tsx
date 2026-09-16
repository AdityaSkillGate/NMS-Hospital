'use client';

import React from 'react';
import { X, CheckCircle2, AlertCircle, Clock, Calendar, MessageCircle, FileText } from 'lucide-react';
import { HealthPackage } from '@/data/packages';
import { Language, TRANSLATIONS } from '@/data/translations';

interface PackageModalProps {
  pkg: HealthPackage | null;
  onClose: () => void;
  currentLang: Language;
  onBook: (pkg: HealthPackage) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  onClose,
  currentLang,
  onBook,
}) => {
  if (!pkg) return null;
  const t = TRANSLATIONS[currentLang];

  const whatsappMessage = encodeURIComponent(
    currentLang === 'ta'
      ? `வணக்கம் என்.எம்.எஸ் மருத்துவமனை, நான் "${pkg.name.ta}" (கட்டணம்: ₹${pkg.price.toLocaleString('en-IN')}) பரிசோதனைக்கு பதிவு செய்ய விரும்புகிறேன். தயவுசெய்து ஆலோசனை நேரம் மற்றும் வழிமுறைகளை பகிரவும்.`
      : `Hello NMS Hospital, I would like to book the "${pkg.name.en}" (Tariff: ₹${pkg.price.toLocaleString('en-IN')}). Please provide timing and preparation instructions.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* MODAL HEADER */}
        <div className="p-6 bg-gradient-to-r from-hospital-900 to-navy-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-vital-400 text-xs font-bold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Package #{pkg.order} • Diagnostic Service</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold pr-8">
            {pkg.name[currentLang]}
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {pkg.subtitle[currentLang]}
          </p>

          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-extrabold text-vital-400">
              ₹{pkg.price.toLocaleString('en-IN')}/-
            </span>
            <span className="text-xs text-slate-300 bg-white/10 px-2.5 py-1 rounded-md">
              {pkg.tests.length} {t.packagesSection.testsCount}
            </span>
            <span className="text-xs text-slate-300 bg-white/10 px-2.5 py-1 rounded-md flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-vital-400" />
              <span>{pkg.reportDelivery[currentLang]}</span>
            </span>
          </div>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {/* Clinical Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              {currentLang === 'ta' ? 'மருத்துவ கண்ணோட்டம்' : 'Clinical Overview'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {pkg.description[currentLang]}
            </p>
          </div>

          {/* Preparation & Fasting Guidelines */}
          <div className="flex items-start gap-3 bg-amber-50/80 border border-amber-200/80 p-3.5 rounded-xl text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                {currentLang === 'ta' ? 'முன்னேற்பாடுகள்:' : 'Preparation Guidelines:'}
              </span>{' '}
              {pkg.fastingHours > 0
                ? currentLang === 'ta'
                  ? `இந்த பரிசோதனைக்கு ${pkg.fastingHours} மணி நேரம் வெறும் வயிற்றில் வர வேண்டும் (தண்ணீர் அருந்தலாம்). மாதிரி வகை: ${pkg.sampleType.ta}.`
                  : `Requires ${pkg.fastingHours} hours of overnight fasting (water is allowed). Sample type: ${pkg.sampleType.en}.`
                : currentLang === 'ta'
                ? `வெறும் வயிற்றில் இருக்க வேண்டிய அவசியமில்லை. மாதிரி வகை: ${pkg.sampleType.ta}.`
                : `Fasting is not mandatory. Sample type: ${pkg.sampleType.en}.`}
            </div>
          </div>

          {/* Full Tests Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-900">
                {currentLang === 'ta' ? 'உள்ளடக்கிய அனைத்து சோதனைகள்' : 'All Tests Included in Package'} ({pkg.tests.length})
              </h4>
              <span className="text-xs text-vital-700 font-semibold bg-vital-50 px-2 py-0.5 rounded border border-vital-200">
                Authentic Hospital Tariff
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.tests.map((test, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 block">{test.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{test.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL FOOTER ACTIONS */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.packagesSection.enquireWhatsApp}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBook(pkg);
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-hospital-600 hover:bg-hospital-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.packagesSection.bookPackage}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
