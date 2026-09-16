'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { FacilitiesShowcase } from '@/components/facilities/FacilitiesShowcase';
import { Building2, Microscope, ShieldCheck } from 'lucide-react';

export default function FacilitiesPage() {
  return (
    <SiteShell>
      {({ currentLang }) => (
        <div className="space-y-12">
          {/* HERO BANNER */}
          <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Hospital Infrastructure</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {currentLang === 'ta'
                  ? 'நவீன மருத்துவ கட்டமைப்பு வசதிகள்'
                  : 'Diagnostic Infrastructure & Hospital Facilities'}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ta'
                  ? 'முழு தானியங்கி ஆய்வகம், டிஜிட்டல் எக்ஸ்-ரே, 2D கலர் டாப்ளர் எக்கோ, ட்ரெட்மில் சோதனைக் கூடம், தூய்மையான உள்நோயாளி படுக்கை வசதி மற்றும் 24 மணி நேர மருந்தகம்.'
                  : 'High-frequency digital radiography, 2D echocardiography, automated laboratory analyzers, sterile minor operation theatres, and 24/7 in-house pharmaceutical availability.'}
              </p>
            </div>
          </div>

          {/* FACILITIES SHOWCASE */}
          <FacilitiesShowcase currentLang={currentLang} />
        </div>
      )}
    </SiteShell>
  );
}
