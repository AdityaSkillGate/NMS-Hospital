'use client';

import React from 'react';
import { CheckCircle2, Clock, Eye, MessageCircle, Calendar } from 'lucide-react';
import { HealthPackage } from '@/data/packages';
import { Language, TRANSLATIONS } from '@/data/translations';

interface PackageCardProps {
  pkg: HealthPackage;
  currentLang: Language;
  onViewDetails: (pkg: HealthPackage) => void;
  onBook: (pkg: HealthPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currentLang,
  onViewDetails,
  onBook,
}) => {
  const t = TRANSLATIONS[currentLang];

  const whatsappMessage = encodeURIComponent(
    currentLang === 'ta'
      ? `வணக்கம் என்.எம்.எஸ் மருத்துவமனை, நான் "${pkg.name.ta}" (கட்டணம்: ₹${pkg.price.toLocaleString('en-IN')}) பரிசோதனைக்கு முன்பதிவு செய்ய விரும்புகிறேன்.`
      : `Hello NMS Hospital, I would like to book the "${pkg.name.en}" (Tariff: ₹${pkg.price.toLocaleString('en-IN')}).`
  );

  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl ${
      pkg.popular 
        ? 'border-hospital-500 shadow-md ring-1 ring-hospital-500/20' 
        : 'border-slate-200 shadow-sm hover:border-hospital-300'
    }`}>
      {/* TOP ACCENT BADGES */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Package #{pkg.order}
          </span>
          {pkg.badge && (
            <span className="text-xs font-bold bg-vital-50 text-vital-700 border border-vital-200 px-2.5 py-1 rounded-full">
              {pkg.badge[currentLang]}
            </span>
          )}
        </div>

        {/* PACKAGE TITLE & SUBTITLE */}
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-hospital-700 transition-colors leading-snug">
          {pkg.name[currentLang]}
        </h3>
        <p className="text-xs text-slate-500 mt-1 min-h-[32px] line-clamp-2">
          {pkg.subtitle[currentLang]}
        </p>

        {/* PRICING BLOCK */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-600 block">{t.packagesSection.startingFrom}</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-vital-600 tracking-tight">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-slate-600">/-</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block bg-sky-50 text-hospital-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-sky-100">
              {pkg.tests.length} {t.packagesSection.testsCount}
            </span>
          </div>
        </div>

        {/* FASTING & REPORT TIMING */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl">
          <Clock className="w-3.5 h-3.5 text-hospital-500 shrink-0" />
          <span className="truncate">
            {pkg.fastingHours > 0
              ? `${pkg.fastingHours} hrs fasting • ${pkg.reportDelivery[currentLang]}`
              : `${pkg.reportDelivery[currentLang]}`}
          </span>
        </div>

        {/* TEST SAMPLES PREVIEW */}
        <div className="mt-4 space-y-1.5">
          <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            {currentLang === 'ta' ? 'முக்கிய சோதனைகள்:' : 'Key Tests Included:'}
          </div>
          <div className="space-y-1">
            {pkg.tests.slice(0, 4).map((test, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-vital-500 shrink-0" />
                <span className="truncate">{test.name}</span>
              </div>
            ))}
            {pkg.tests.length > 4 && (
              <div className="text-xs font-medium text-hospital-600 pl-5 pt-0.5">
                + {pkg.tests.length - 4} {currentLang === 'ta' ? 'கூடுதல் சோதனைகள்' : 'more diagnostic tests'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CARD ACTIONS */}
      <div className="p-4 sm:p-6 pt-0 space-y-2 border-t border-slate-100 mt-4 bg-slate-50/50">
        <button
          onClick={() => onViewDetails(pkg)}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 hover:border-hospital-400 bg-white hover:bg-hospital-50 text-slate-700 hover:text-hospital-700 text-xs font-bold transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{t.packagesSection.viewTests}</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <a
            href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors text-center"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onBook(pkg)}
            className="flex items-center justify-center gap-1 bg-hospital-600 hover:bg-hospital-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors text-center shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{currentLang === 'ta' ? 'முன்பதிவு' : 'Book'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
