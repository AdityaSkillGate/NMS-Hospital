'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { INSURANCE_PROVIDERS, REQUIRED_DOCUMENTS } from '@/data/insurance';
import { ShieldCheck, FileCheck, CheckCircle2, PhoneCall, MessageCircle, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '@/data/translations';

export default function InsurancePage() {
  return (
    <SiteShell>
      {({ currentLang, onOpenBooking }) => {
        const t = TRANSLATIONS[currentLang];

        return (
          <div className="space-y-12">
            {/* HERO BANNER */}
            <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-flex items-center gap-1.5 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Cashless Hospitalization Desk</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  {currentLang === 'ta'
                    ? 'மருத்துவக் காப்பீடு & ரொக்கமில்லா சிகிச்சை'
                    : 'Insurance & Cashless Treatment Assistance'}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ta'
                    ? 'என்.எம்.எஸ் மருத்துவமனையில் அனுமதிக்கப்படும் நோயாளிகளுக்கு ரொக்கமில்லா சிகிச்சை பெற எங்கள் காப்பீட்டு உதவி மையம் முழுமையான வழிகாட்டல் மற்றும் ஆவண சரிபார்ப்பு உதவிகளை வழங்குகிறது.'
                    : 'Our dedicated TPA & Insurance Desk assists patients and families with pre-authorization, claim documentation, and cashless hospitalization across leading private insurers and government schemes.'}
                </p>
              </div>
            </div>

            {/* INSURANCE PROVIDERS GRID */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentLang === 'ta' ? 'ஆதரிக்கப்படும் காப்பீட்டு நிறுவனங்கள்' : 'Supported Insurance & TPA Networks'}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {currentLang === 'ta' ? 'அங்கீகரிக்கப்பட்ட தனியார் மற்றும் அரசு மருத்துவக் காப்பீட்டு திட்டங்கள்' : 'Pre-authorization and cashless claim processing assistance'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {INSURANCE_PROVIDERS.map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-hospital-700 bg-hospital-50 border border-hospital-200 px-2.5 py-1 rounded-full">
                          {provider.category[currentLang]}
                        </span>
                        {provider.popular && (
                          <span className="text-[10px] font-bold text-vital-700 bg-vital-50 border border-vital-200 px-2 py-0.5 rounded-full">
                            Active Desk
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{provider.name}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {provider.description[currentLang]}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Claim Assistance</span>
                      <a
                        href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hello NMS Hospital Insurance Desk, I need assistance regarding ${provider.name} cashless admission.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-vital-700 font-bold hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REQUIRED DOCUMENTS CHECKLIST */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl bg-hospital-600 text-white shadow-sm">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {currentLang === 'ta' ? 'காப்பீட்டு அனுமதிக்கு தேவையான ஆவணங்கள்' : 'Documents Required for Cashless Pre-Authorization'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {currentLang === 'ta' ? 'மருத்துவமனையில் அனுமதிக்கப்படும் போது கொண்டு வர வேண்டியவை' : 'Please present these documents at the hospital admission desk'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-6">
                  {REQUIRED_DOCUMENTS[currentLang].map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Important Note:</span> Pre-authorization approval timing depends on the respective insurance company or TPA protocols. For planned surgeries, please submit documents at least 48 hours prior to admission. In emergency admissions, our desk initiates pre-auth immediately.
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
