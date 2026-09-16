'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      {({ currentLang }) => (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 text-vital-600 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Compliance & Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {currentLang === 'ta' ? 'நோயாளி தனியுரிமை கொள்கை' : 'Patient Privacy & Data Confidentiality Policy'}
            </h1>
            <p className="text-xs text-slate-400 mt-2">Last Updated: September 2026 • NMS Hospital, Sankarankovil</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Commitment to Medical Confidentiality</h2>
            <p className="text-sm leading-relaxed">
              At NMS Hospital (Sankarankovil, Tenkasi District), patient confidentiality is our highest ethical obligation. All personal information, medical history, clinical diagnoses, and laboratory diagnostic reports are treated as strictly confidential medical records.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              When you interact with our website or book an appointment, we may collect:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Patient name, age, gender, and contact phone number.</li>
              <li>Requested doctor speciality or selected diagnostic check-up package.</li>
              <li>Optional medical symptoms or referral doctor details shared voluntarily for triage.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Diagnostic Test Results Confidentiality</h2>
            <p className="text-sm leading-relaxed">
              Sensitive diagnostic panels—including HIV screening in Pre-Marriage and Foreign Health Check-Ups—are delivered in sealed reports directly to the patient or authorized representative with rigorous privacy verification. Results are never disclosed to unauthorized third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Contacting Hospital Administration</h2>
            <p className="text-sm leading-relaxed">
              For any questions regarding medical records or privacy inquiries, please contact the Hospital Reception at No. 169-C1, Main Road, Sankarankovil – 627756 or call 04636 225315.
            </p>
          </section>
        </div>
      )}
    </SiteShell>
  );
}
