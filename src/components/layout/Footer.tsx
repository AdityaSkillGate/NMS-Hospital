'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneCall, MapPin, Clock, ShieldAlert, ChevronRight, MessageCircle } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner inside Footer: Rapid Action */}
      <div className="bg-gradient-to-r from-hospital-900 to-hospital-950 border-b border-hospital-800/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-vital-400 font-semibold text-sm mb-1">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vital-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-vital-500"></span>
              </span>
              <span>{currentLang === 'ta' ? '24 மணி நேரமும் செயல்படும் அவசர பிரிவு' : 'Round-The-Clock Medical Assistance'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentLang === 'ta'
                ? 'மருத்துவ ஆலோசனை அல்லது பரிசோதனைக்கு இன்றே பதிவு செய்யுங்கள்'
                : 'Need Doctor Consultation or Diagnostic Health Check-Up?'}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-vital-600 hover:bg-vital-500 text-white font-bold text-sm px-5 py-3 rounded-xl shadow-lg transition-all"
            >
              {t.nav.bookAppointment}
            </button>
            <a
              href={`https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello NMS Hospital, I visited your website and would like assistance with booking.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-800/60 hover:bg-emerald-700/80 text-emerald-200 border border-emerald-600/40 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Ethos */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/nms-hospital-logo-dark.svg"
                alt="NMS Hospital Logo"
                width={220}
                height={52}
                className="h-11 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-hospital-900/60 text-hospital-300 text-xs px-3 py-1.5 rounded-full border border-hospital-700/50 font-medium">
                {t.tagline}
              </span>
            </div>
          </div>

          {/* Col 2: Diagnostic Packages */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">
              {currentLang === 'ta' ? 'முழு உடல் பரிசோதனைகள்' : 'Diagnostic Packages'}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Basic Health Check-Up</span>
                  <span className="text-xs font-bold text-vital-400">₹195</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Health Check-Up (X-Ray + ECG)</span>
                  <span className="text-xs font-bold text-vital-400">₹575</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Master Heart Check-Up (Echo+TMT)</span>
                  <span className="text-xs font-bold text-vital-400">₹2,050</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Master Diabetic Check-Up (HbA1c)</span>
                  <span className="text-xs font-bold text-vital-400">₹1,200</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Senior Citizen Check-Up (USG Scan)</span>
                  <span className="text-xs font-bold text-vital-400">₹1,000</span>
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-vital-400 flex items-center justify-between group transition-colors">
                  <span className="group-hover:translate-x-1 transition-transform">Foreign Health Check-Up</span>
                  <span className="text-xs font-bold text-vital-400">₹900</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/emergency" className="hover:text-emergency-light flex items-center gap-1.5 transition-colors font-semibold text-emergency">
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span>24/7 Emergency & Casualty</span>
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>Specialist Doctors</span>
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>Clinical Departments</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>Hospital Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>Insurance & Cashless Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>About NMS Hospital</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hospital-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-hospital-500" />
                  <span>Contact & Map Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hospital Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">
              {currentLang === 'ta' ? 'தொடர்பு & அமைவிடம்' : 'Contact & Location'}
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="w-5 h-5 text-hospital-400 shrink-0 mt-0.5" />
              <span>{t.addressText}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400 pt-1">
              <PhoneCall className="w-4 h-4 text-emergency shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block">Casualty & Reception:</span>
                <a href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`} className="text-white font-bold hover:text-hospital-300">
                  {t.emergencyPhone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-sm text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-vital-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-500 block">Timings:</span>
                <span>Casualty: 24/7 | OPD: 9:30 AM - 8:30 PM</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-300 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-lg transition-colors"
              >
                <span>Staff Portal</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-slate-500 space-y-4">
          <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{t.footer.disclaimerText}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>{t.footer.copyright}</p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">Medical Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
