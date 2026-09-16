'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/data/translations';
import { TopEmergencyBar } from '@/components/layout/TopEmergencyBar';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { DiagnosticHub } from '@/components/packages/DiagnosticHub';
import { DepartmentsList } from '@/components/departments/DepartmentsList';
import { DoctorsGrid } from '@/components/doctors/DoctorsGrid';
import { FacilitiesShowcase } from '@/components/facilities/FacilitiesShowcase';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { EmergencyBanner } from '@/components/home/EmergencyBanner';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { LocationContact } from '@/components/home/LocationContact';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { NMSCareAssistant } from '@/components/chatbot/NMSCareAssistant';
import { AppointmentModal } from '@/components/booking/AppointmentModal';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<
    { type: 'consultation' | 'package'; id?: string } | undefined
  >(undefined);

  // Read language preference from localStorage
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

  // Track active scroll section for navbar indicators
  useEffect(() => {
    const sections = ['home', 'packages', 'departments', 'doctors', 'facilities', 'about', 'faq', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 ${currentLang === 'ta' ? 'font-tamil' : ''}`}>
      {/* 1. TOP 24/7 EMERGENCY CONTACT STRIP */}
      <TopEmergencyBar
        currentLang={currentLang}
        onToggleLang={handleToggleLanguage}
      />

      {/* 2. STICKY RESPONSIVE NAVBAR */}
      <Navbar
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
      />

      {/* 3. CINEMATIC HERO SECTION */}
      <main className="flex-1">
        <HeroSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 4. DIAGNOSTIC SERVICES & FULL BODY CHECK-UP HUB (EXTRACTED FROM BOARD) */}
        <DiagnosticHub
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. CLINICAL DEPARTMENTS & SPECIALTIES */}
        <DepartmentsList
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. EXPERIENCED SPECIALIST DOCTORS */}
        <DoctorsGrid
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. MODERN HOSPITAL FACILITIES & DIAGNOSTICS */}
        <FacilitiesShowcase
          currentLang={currentLang}
        />

        {/* 8. TRUST PILLARS & WHY FAMILIES RELY ON NMS */}
        <WhyChooseUs
          currentLang={currentLang}
        />

        {/* 9. 24/7 EMERGENCY & AMBULANCE BANNER */}
        <EmergencyBanner
          currentLang={currentLang}
        />

        {/* 10. PATIENT FAQ ACCORDION */}
        <FAQAccordion
          currentLang={currentLang}
        />

        {/* 11. HOSPITAL LOCATION, ACCESSIBILITY & COVERAGE */}
        <LocationContact
          currentLang={currentLang}
        />
      </main>

      {/* 12. DETAILED CLINICAL FOOTER */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* 13. FLOATING WHATSAPP CHAT WIDGET */}
      <FloatingWhatsApp
        currentLang={currentLang}
      />

      {/* 14. NMS CARE ASSISTANT AI CHATBOT WITH TRIAGE SAFETY */}
      <NMSCareAssistant
        currentLang={currentLang}
      />

      {/* 15. INTERACTIVE APPOINTMENT & PACKAGE BOOKING MODAL */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        currentLang={currentLang}
        prefill={bookingPrefill}
      />
    </div>
  );
}
