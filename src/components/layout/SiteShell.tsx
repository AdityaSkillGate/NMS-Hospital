'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/data/translations';
import { TopEmergencyBar } from '@/components/layout/TopEmergencyBar';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { NMSCareAssistant } from '@/components/chatbot/NMSCareAssistant';
import { AppointmentModal } from '@/components/booking/AppointmentModal';

interface SiteShellProps {
  children: (props: {
    currentLang: Language;
    onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
  }) => React.ReactNode;
}

export const SiteShell: React.FC<SiteShellProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<
    { type: 'consultation' | 'package'; id?: string } | undefined
  >(undefined);

  useEffect(() => {
    const saved = localStorage.getItem('nms_preferred_lang');
    if (saved === 'ta' || saved === 'en') {
      setCurrentLang(saved);
    }
  }, []);

  const handleToggleLanguage = () => {
    const nextLang: Language = currentLang === 'en' ? 'ta' : 'en';
    setCurrentLang(nextLang);
    localStorage.setItem('nms_preferred_lang', nextLang);
  };

  const handleOpenBooking = (prefill?: { type: 'consultation' | 'package'; id?: string }) => {
    setBookingPrefill(prefill);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPrefill(undefined);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 ${currentLang === 'ta' ? 'font-tamil' : ''}`}>
      {/* 1. TOP 24/7 EMERGENCY CONTACT STRIP */}
      <TopEmergencyBar
        currentLang={currentLang}
        onToggleLang={handleToggleLanguage}
      />

      {/* 2. STICKY NAVBAR */}
      <Navbar
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* 3. DYNAMIC ROUTE CONTENT */}
      <main className="flex-1">
        {children({ currentLang, onOpenBooking: handleOpenBooking })}
      </main>

      {/* 4. FOOTER */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* 5. FLOATING WHATSAPP & AI CHATBOT */}
      <FloatingWhatsApp currentLang={currentLang} />
      <NMSCareAssistant currentLang={currentLang} />

      {/* 6. BOOKING MODAL */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        currentLang={currentLang}
        prefill={bookingPrefill}
      />
    </div>
  );
};
