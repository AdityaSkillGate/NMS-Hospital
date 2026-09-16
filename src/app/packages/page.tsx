'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { DiagnosticHub } from '@/components/packages/DiagnosticHub';
import { TRANSLATIONS } from '@/data/translations';
import { HEALTH_PACKAGES } from '@/data/packages';
import { Check, ShieldCheck, Clock, FileText, ArrowRight } from 'lucide-react';

export default function PackagesPage() {
  return (
    <SiteShell>
      {({ currentLang, onOpenBooking }) => {
        const t = TRANSLATIONS[currentLang];

        return (
          <div className="space-y-12">
            {/* DEDICATED PACKAGES HERO */}
            <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-flex items-center gap-1.5 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% Transparent Tariffs</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  {currentLang === 'ta'
                    ? 'முழு உடல் பரிசோதனை திட்டங்கள்'
                    : 'NMS Diagnostic Services & Health Check-Up Packages'}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ta'
                    ? 'என்.எம்.எஸ் மருத்துவமனையின் அதிகாரப்பூர்வ கட்டண பலகையின் அடிப்படையில் ₹195 முதல் ₹2,050 வரையிலான 9 முழுமையான பரிசோதனை தொகுப்புகள். மறைமுக கட்டணங்கள் இல்லை, அன்றைய தினமே துல்லிய கணினி அறிக்கை.'
                    : 'Standardized clinical screening packages ranging from ₹195 to ₹2,050 transcribed verbatim from the NMS Hospital diagnostic tariff board in Sankarankovil. Same-day computerized results with zero hidden charges.'}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <span>Same-Day Computerized Reports</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <FileText className="w-4 h-4 text-vital-400" />
                    <span>9 Specialized Panels</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <ShieldCheck className="w-4 h-4 text-teal-300" />
                    <span>Fasting Blood & Radiology Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC HUB SECTION WITH ALL 9 PACKAGES */}
            <DiagnosticHub currentLang={currentLang} onOpenBooking={onOpenBooking} />

            {/* PACKAGES COMPARISON TABLE */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentLang === 'ta' ? 'அனைத்து தொகுப்புகளின் ஒப்பீட்டு அட்டவணை' : 'Package Comparison & Test Summary'}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {currentLang === 'ta' ? 'உங்களுக்கு தேவையான பரிசோதனையை எளிதாக தேர்ந்தெடுக்கவும்' : 'Compare tests, sample requirements, and transparent hospital rates'}
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                      <th className="p-4 font-bold">#</th>
                      <th className="p-4 font-bold">Package Name</th>
                      <th className="p-4 font-bold">Category</th>
                      <th className="p-4 font-bold">Tests Included</th>
                      <th className="p-4 font-bold">Fasting</th>
                      <th className="p-4 font-bold">Price</th>
                      <th className="p-4 font-bold text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {HEALTH_PACKAGES.map((pkg) => (
                      <tr key={pkg.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 font-bold text-slate-400">#{pkg.order}</td>
                        <td className="p-4 font-bold text-slate-900">
                          {pkg.name[currentLang]}
                          <span className="block text-xs font-normal text-slate-500">{pkg.subtitle[currentLang]}</span>
                        </td>
                        <td className="p-4 capitalize text-slate-600 font-medium">{pkg.category}</td>
                        <td className="p-4 text-hospital-700 font-bold">{pkg.tests.length} Tests</td>
                        <td className="p-4 text-slate-600">{pkg.fastingHours > 0 ? `${pkg.fastingHours} hrs` : 'None'}</td>
                        <td className="p-4 font-black text-vital-600 text-base">₹{pkg.price}/-</td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => onOpenBooking({ type: 'package', id: pkg.id })}
                            className="bg-hospital-600 hover:bg-hospital-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                          >
                            Book
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
    </SiteShell>
  );
}
