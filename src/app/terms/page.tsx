'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { FileText, ShieldAlert } from 'lucide-react';

export default function TermsPage() {
  return (
    <SiteShell>
      {({ currentLang }) => (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-700 space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2 text-hospital-600 font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {currentLang === 'ta' ? 'விதிமுறைகள் மற்றும் நிபந்தனைகள்' : 'Terms and Conditions of Hospital Services'}
            </h1>
            <p className="text-xs text-slate-400 mt-2">NMS Hospital, Sankarankovil</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Online Appointment Requests</h2>
            <p className="text-sm leading-relaxed">
              Appointment bookings submitted through this website or via WhatsApp are tentative scheduling requests. Final confirmation of exact time slots is provided by hospital reception staff based on on-duty specialist availability and emergency room priorities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Health Check-up Tariffs and Inclusions</h2>
            <p className="text-sm leading-relaxed">
              All 9 diagnostic check-up packages and prices (₹195 to ₹2,050) reflect our published hospital tariffs. Any additional investigation, doctor referral outside package scope, or medications are billed separately at standard hospital rates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Emergency Casualty Priority</h2>
            <p className="text-sm leading-relaxed">
              In accordance with medical triage ethics, life-threatening emergency admissions and acute trauma patients receive immediate medical priority over elective outpatient appointments.
            </p>
          </section>
        </div>
      )}
    </SiteShell>
  );
}
