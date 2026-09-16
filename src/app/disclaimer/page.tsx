'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { ShieldAlert, AlertTriangle, PhoneCall } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <SiteShell>
      {({ currentLang }) => (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Medical & Health Notice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {currentLang === 'ta' ? 'மருத்துவ மறுப்புரை' : 'Medical Disclaimer & Clinical Notice'}
            </h1>
            <p className="text-xs text-slate-400 mt-2">NMS Hospital, Sankarankovil</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Crucial Notice:</strong> The medical, diagnostic, and health information presented on this portal is strictly for educational, informational, and healthcare awareness purposes. It does NOT constitute medical advice, diagnosis, or treatment planning.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">No Doctor-Patient Relationship via Website</h2>
            <p className="text-sm leading-relaxed">
              Browsing this website, interacting with the NMS Care Assistant AI chatbot, or submitting an online enquiry does not create a formal physician-patient relationship. Professional diagnosis and treatment require a personal physical examination by a registered medical practitioner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Emergency Medical Symptoms</h2>
            <p className="text-sm leading-relaxed">
              If you or a family member is experiencing acute chest pain, shortness of breath, paralysis, loss of consciousness, uncontrolled bleeding, severe trauma, or poisoning, DO NOT use online forms or wait for email replies.
            </p>
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-bold">
                Immediately call our 24/7 Casualty Hotline:
              </span>
              <a
                href="tel:04636225315"
                className="bg-emergency text-white font-black text-xs sm:text-sm px-4 py-2 rounded-lg"
              >
                04636 225315
              </a>
            </div>
          </section>
        </div>
      )}
    </SiteShell>
  );
}
