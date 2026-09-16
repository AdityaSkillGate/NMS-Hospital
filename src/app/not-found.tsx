import React from 'react';
import Link from 'next/link';
import { Home, PhoneCall, HeartPulse } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-hospital-600/20 text-hospital-400 border border-hospital-500/30 flex items-center justify-center mx-auto">
          <HeartPulse className="w-10 h-10 animate-pulse" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">404</h1>
        <h2 className="text-xl font-bold text-slate-200">Page Not Found / பக்கம் கிடைக்கவில்லை</h2>

        <p className="text-sm text-slate-400 leading-relaxed">
          The healthcare page or section you are looking for might have moved or is temporarily unavailable. Return to NMS Hospital home to explore doctor appointments and health packages.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="flex items-center gap-2 bg-hospital-600 hover:bg-hospital-700 text-white text-sm font-bold px-5 py-3 rounded-xl shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href="tel:04636225315"
            className="flex items-center gap-2 bg-emergency-light border border-emergency/30 text-emergency-dark text-sm font-bold px-4 py-3 rounded-xl transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-emergency" />
            <span>Casualty: 04636 225315</span>
          </a>
        </div>
      </div>
    </div>
  );
}
