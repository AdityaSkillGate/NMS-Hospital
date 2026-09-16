'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, PhoneCall, ChevronRight, HeartPulse } from 'lucide-react';
import { Language, TRANSLATIONS } from '@/data/translations';

interface NavbarProps {
  currentLang: Language;
  onOpenBooking: (prefill?: { type: 'consultation' | 'package'; id?: string }) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onOpenBooking,
  activeSection = '',
}) => {
  const t = TRANSLATIONS[currentLang];
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict Menu Order: Home | About | Doctors | Departments | Facilities | Health Packages | Contact
  // Health Packages is positioned directly before Contact and styled with single-line whitespace-nowrap
  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/departments', label: t.nav.departments },
    { href: '/facilities', label: t.nav.facilities },
    { 
      href: '/packages', 
      label: currentLang === 'ta' ? 'உடல் பரிசோதனை' : 'Health Packages', 
      highlight: true 
    },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
          : 'bg-white py-3.5 border-b border-slate-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center">
            <Image
              src="/assets/images/nms-hospital-logo.svg"
              alt="NMS Hospital Sankarankovil Logo"
              width={230}
              height={52}
              className="h-10 sm:h-11 md:h-12 w-auto object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (Single line, no wrap) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && activeSection === 'home');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-150 relative ${
                  isActive
                    ? 'text-hospital-700 bg-hospital-50 shadow-2xs font-bold'
                    : 'text-slate-700 hover:text-hospital-600 hover:bg-slate-50'
                } ${link.highlight ? 'text-vital-700 font-bold bg-vital-50/70 border border-vital-200/60 hover:bg-vital-100/70' : ''}`}
              >
                <span className="flex items-center gap-1.5">
                  {link.highlight && <HeartPulse className="w-3.5 h-3.5 text-vital-600" />}
                  <span>{link.label}</span>
                </span>
                {link.highlight && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vital-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-vital-500"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-1.5 bg-gradient-to-r from-hospital-600 to-hospital-700 hover:from-hospital-700 hover:to-hospital-800 text-white font-bold text-xs xl:text-sm px-3.5 xl:px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookAppointment}</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden flex items-center justify-center p-2 bg-hospital-600 text-white rounded-lg shadow-sm"
            aria-label="Book appointment"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-hospital-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  link.highlight 
                    ? 'text-vital-700 bg-vital-50/70 font-bold' 
                    : 'text-slate-700 hover:text-hospital-700 hover:bg-hospital-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <HeartPulse className="w-4 h-4 text-vital-600" />}
                  <span>{link.label}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-hospital-600 hover:bg-hospital-700 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.nav.bookAppointment}</span>
              </button>

              <a
                href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-emergency-light border border-emergency/30 text-emergency-dark font-bold py-2.5 rounded-xl transition-colors text-xs"
              >
                <PhoneCall className="w-4 h-4 text-emergency" />
                <span>{t.nav.emergencyCall}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
