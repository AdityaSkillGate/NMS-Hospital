'use client';

import React, { useState } from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { LocationContact } from '@/components/home/LocationContact';
import { PhoneCall, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '@/data/translations';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      {({ currentLang }) => {
        const t = TRANSLATIONS[currentLang];

        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          const encoded = encodeURIComponent(
            `Hello NMS Hospital, my name is ${name}. Phone: ${phone}. Message: ${message}`
          );
          window.open(
            `https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`,
            '_blank'
          );
          setSubmitted(true);
        };

        return (
          <div className="space-y-12">
            {/* HERO */}
            <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-navy-950 text-white py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-flex items-center gap-1.5 bg-vital-500/20 text-vital-300 border border-vital-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Hospital Contact Desk</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  {currentLang === 'ta'
                    ? 'மருத்துவமனை தொடர்பும் அமைவிடமும்'
                    : 'Contact NMS Hospital & Directions'}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ta'
                    ? 'சங்கரன்கோவில் மெயின் ரோட்டில் அமைந்துள்ள எங்கள் மருத்துவமனையை தொலைபேசி, வாட்ஸ்அப் அல்லது நேரில் நேரடியாக தொடர்பு கொள்ளலாம்.'
                    : 'Located conveniently on Main Road / Tirunelveli Road, Sankarankovil. Connect with our reception desk for inquiries, doctor appointments, and emergency assistance.'}
                </p>
              </div>
            </div>

            {/* QUICK FORM & FAST CONTACT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {currentLang === 'ta' ? 'விரைவு தொடர்பு படிவம்' : 'Send an Enquiry'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    {currentLang === 'ta'
                      ? 'உங்கள் விவரங்களை பூர்த்தி செய்து உடனடியாக வாட்ஸ்அப்பில் அனுப்பவும்'
                      : 'Fill in your details below to connect directly with our care desk on WhatsApp'}
                  </p>

                  {submitted ? (
                    <div className="text-center py-8 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-vital-100 text-vital-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Message Sent to WhatsApp!</h3>
                      <p className="text-xs text-slate-600">Our staff will reply to your enquiry shortly.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-hospital-700 font-bold hover:underline"
                      >
                        Send another query
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Karthik / கார்த்திக்"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Mobile Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 9876543210"
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">Message or Query</label>
                        <textarea
                          rows={3}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Ask about check-up packages, doctor availability, or hospital timings..."
                          className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </form>
                  )}
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900">Hospital Direct Contacts</h3>

                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200">
                        <PhoneCall className="w-5 h-5 text-emergency shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">24/7 Casualty & Reception:</span>
                          <a href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`} className="font-bold text-slate-900 hover:text-emergency">
                            {t.emergencyPhone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200">
                        <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">Official WhatsApp Desk:</span>
                          <span className="font-bold text-slate-900">+91 94420 00000 (Available 9:00 AM - 9:00 PM)</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200">
                        <Clock className="w-5 h-5 text-hospital-600 shrink-0" />
                        <div>
                          <span className="text-xs text-slate-500 block">Consultation Schedule:</span>
                          <span className="font-semibold text-slate-800">OPD: Mon-Sat 9:30 AM - 8:30 PM | Casualty: 24 Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCATION CONTACT COMPONENT */}
            <LocationContact currentLang={currentLang} />
          </div>
        );
      }}
    </SiteShell>
  );
}
