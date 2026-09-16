'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Clock, Stethoscope, HeartPulse, CheckCircle2, MessageCircle } from 'lucide-react';
import { DOCTORS } from '@/data/doctors';
import { HEALTH_PACKAGES } from '@/data/packages';
import { DEPARTMENTS } from '@/data/departments';
import { Language, TRANSLATIONS } from '@/data/translations';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  prefill?: {
    type: 'consultation' | 'package';
    id?: string;
  };
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  prefill,
}) => {
  const t = TRANSLATIONS[currentLang];

  const [bookingType, setBookingType] = useState<'consultation' | 'package'>('consultation');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string>('');
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (9:30 AM - 1:30 PM)');
  const [patientNotes, setPatientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefill) {
      setBookingType(prefill.type);
      if (prefill.type === 'package' && prefill.id) {
        setSelectedPackageId(prefill.id);
      } else if (prefill.type === 'consultation' && prefill.id) {
        const foundDoctor = DOCTORS.find((d) => d.id === prefill.id);
        if (foundDoctor) {
          setSelectedDoctorId(foundDoctor.id);
          setSelectedDepartmentId(foundDoctor.departmentId);
        } else {
          setSelectedDepartmentId(prefill.id);
        }
      }
    }
  }, [prefill, isOpen]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, []);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let details = '';
    if (bookingType === 'package') {
      const pkg = HEALTH_PACKAGES.find((p) => p.id === selectedPackageId) || HEALTH_PACKAGES[0];
      details = `Package: ${pkg.name.en} (Rs. ${pkg.price}/-)`;
    } else {
      const doc = DOCTORS.find((d) => d.id === selectedDoctorId);
      const dept = DEPARTMENTS.find((dp) => dp.id === selectedDepartmentId);
      details = `Doctor Consultation: ${doc ? doc.name.en : 'Any Available Specialist'} (${dept ? dept.name.en : 'General OPD'})`;
    }

    const messageText = `*NMS Hospital Appointment Request*
• Service: ${details}
• Patient Name: ${patientName || 'Not specified'}
• Age/Gender: ${patientAge || '-'} yrs / ${patientGender}
• Phone: ${phoneNumber}
• Preferred Date: ${preferredDate}
• Preferred Slot: ${preferredSlot}
• Notes: ${patientNotes || 'None'}

Please confirm my appointment slot.`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${t.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER */}
        <div className="p-6 bg-gradient-to-r from-hospital-900 to-navy-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-vital-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>NMS Hospital Sankarankovil</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold">{t.bookingModal.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">{t.bookingModal.subtitle}</p>
        </div>

        {/* BODY */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-700">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-vital-100 text-vital-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                {currentLang === 'ta' ? 'முன்பதிவு கோரிக்கை பெறப்பட்டது!' : 'Appointment Request Received!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {currentLang === 'ta'
                  ? 'உங்கள் விவரங்கள் மருத்துவமனை வரவேற்பறைக்கு அனுப்பப்பட்டுள்ளன. எங்கள் குழு உங்களை விரைவில் தொடர்பு கொண்டு நேரத்தை உறுதி செய்யும்.'
                  : 'Thank you for reaching out to NMS Hospital. Our reception team will review your preferred date and contact you shortly to confirm your consultation.'}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="bg-hospital-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-hospital-700 transition-colors"
                >
                  {currentLang === 'ta' ? 'சரி, முடிந்தது' : 'Done & Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              {/* SERVICE TYPE TOGGLE */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  1. {t.bookingModal.step1}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingType('consultation')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      bookingType === 'consultation'
                        ? 'bg-hospital-50 border-hospital-600 text-hospital-700 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>{t.bookingModal.typeConsultation}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBookingType('package')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      bookingType === 'package'
                        ? 'bg-vital-50 border-vital-600 text-vital-800 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <HeartPulse className="w-4 h-4" />
                    <span>{t.bookingModal.typePackage}</span>
                  </button>
                </div>
              </div>

              {/* DYNAMIC FIELDS BASED ON TYPE */}
              {bookingType === 'consultation' ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t.bookingModal.selectDoctor}
                    </label>
                    <select
                      value={selectedDoctorId}
                      onChange={(e) => setSelectedDoctorId(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-500"
                    >
                      <option value="">Any Available Specialist Doctor (முதல் கிடைக்கும் மருத்துவர்)</option>
                      {DOCTORS.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name[currentLang]} — {doc.departmentName[currentLang]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t.bookingModal.selectPackage}
                    </label>
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-vital-500 font-medium"
                    >
                      {HEALTH_PACKAGES.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          #{pkg.order} {pkg.name[currentLang]} — ₹{pkg.price}/- ({pkg.tests.length} tests)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* DATE & TIME SLOT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {t.bookingModal.preferredDate}
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-sm p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:ring-2 focus:ring-hospital-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {t.bookingModal.preferredSlot}
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full text-sm p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:ring-2 focus:ring-hospital-500"
                  >
                    <option value="Morning (9:30 AM - 1:30 PM)">{t.bookingModal.morningSlot}</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">{t.bookingModal.eveningSlot}</option>
                  </select>
                </div>
              </div>

              {/* PATIENT DETAILS */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  2. {t.bookingModal.step2}
                </label>

                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={t.bookingModal.patientName}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <input
                        type="tel"
                        required
                        placeholder={t.bookingModal.phoneNumber}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder={t.bookingModal.patientAge}
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                        className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder={t.bookingModal.patientNotes}
                      value={patientNotes}
                      onChange={(e) => setPatientNotes(e.target.value)}
                      className="w-full text-sm p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-hospital-500 placeholder:text-slate-400 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* SUBMISSION BUTTONS */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.bookingModal.submitWhatsApp}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs"
                >
                  <span>{t.bookingModal.submitDirect}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                {t.bookingModal.noteDisclaimer}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
