'use client';

import React from 'react';
import { SiteShell } from '@/components/layout/SiteShell';
import { Ambulance, PhoneCall, MapPin, AlertTriangle, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '@/data/translations';

export default function EmergencyPage() {
  return (
    <SiteShell>
      {({ currentLang }) => {
        const t = TRANSLATIONS[currentLang];

        const triageGuides = [
          {
            title: currentLang === 'ta' ? 'திடீர் நெஞ்சு வலி / மாரடைப்பு அறிகுறி' : 'Acute Chest Pain / Heart Attack Symptoms',
            desc: currentLang === 'ta'
              ? 'மார்பில் கடுமையான அழுத்தம், இடது கை அல்லது தாடை வரை வலி பரவுதல், திடீர் வியர்வை ஏற்பட்டால் நோயாளியை படுக்க வைக்காமல் உடனே மருத்துவமனைக்கு அழைத்து வரவும்.'
              : 'Severe crushing chest pressure radiating to left shoulder/jaw, sudden cold sweating or shortness of breath. Do not delay; transport immediately to casualty.',
            action: 'Call 04636 225315'
          },
          {
            title: currentLang === 'ta' ? 'பக்கவாதம் (Stroke) அறிகுறிகள்' : 'Suspected Stroke (F.A.S.T Protocol)',
            desc: currentLang === 'ta'
              ? 'முகம் ஒருபுறம் கோணுதல் (Face drooping), ஒரு கை அல்லது கால் பலவீனம் (Arm weakness), குழப்பமான பேச்சு (Slurred speech) இருந்தால் முதல் 3 மணி நேரத்திற்குள் மருத்துவமனைக்கு வர வேண்டும்.'
              : 'Face drooping, arm weakness, or speech slurring. Immediate emergency presentation within the golden window is vital for neurological recovery.',
            action: 'Call 04636 225315'
          },
          {
            title: currentLang === 'ta' ? 'சாலை விபத்து / கடுமையான ரத்தப்போக்கு' : 'Trauma & Heavy Bleeding',
            desc: currentLang === 'ta'
              ? 'காயத்தின் மீது சுத்தமான துணியை வைத்து அழுத்தவும். எலும்பு முறிவு சந்தேகப்பட்டால் அந்த பகுதியை அசைக்காமல் நிலைநிறுத்தி உடனடியாக அவசர பிரிவிற்கு வரவும்.'
              : 'Apply firm direct pressure with a clean cloth over bleeding wounds. Immobilize suspected limb fractures and transfer immediately via ambulance or safe transport.',
            action: 'Call 04636 225315'
          },
          {
            title: currentLang === 'ta' ? 'குழந்தைகளுக்கு திடீர் மூச்சுத்திணறல் / காய்ச்சல் வலிப்பு' : 'Pediatric High Fever & Convulsions',
            desc: currentLang === 'ta'
              ? 'குழந்தைக்கு கடுமையான காய்ச்சல், வலிப்பு அல்லது மூச்சுத்திணறல் ஏற்பட்டால் பதற்றமடையாமல் குழந்தையை பக்கவாட்டில் படுக்க வைத்து உடனடியாக மருத்துவமனைக்கு வரவும்.'
              : 'Turn the child onto their side gently to clear the airway. Do not force objects into the mouth. Bring directly to 24/7 pediatric emergency triage.',
            action: 'Call 04636 225315'
          }
        ];

        return (
          <div className="space-y-12">
            {/* HERO BANNER */}
            <div className="bg-gradient-to-r from-red-950 via-emergency to-red-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-red-400">
              <div className="max-w-7xl mx-auto text-center">
                <span className="inline-flex items-center gap-1.5 bg-black/40 text-red-200 border border-red-400/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
                  <Ambulance className="w-3.5 h-3.5" />
                  <span>24 Hours / 7 Days Active Emergency Care</span>
                </span>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                  {currentLang === 'ta'
                    ? '24/7 அவசர சிகிச்சை & தீவிர விபத்து பிரிவு'
                    : '24/7 Emergency Casualty & Acute Trauma Care'}
                </h1>
                <p className="mt-4 text-base sm:text-lg text-red-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ta'
                    ? 'சங்கரன்கோவில் மெயின் ரோட்டில் அமைந்துள்ள என்.எம்.எஸ் மருத்துவமனையின் அவசர சிகிச்சை பிரிவு இரவும் பகலும் தொடர்ந்து செயல்படுகிறது. அவசர சிகிச்சை மருத்துவர்கள் மற்றும் செவிலியர்கள் எந்நேரமும் தயார் நிலையில் உள்ளனர்.'
                    : 'Round-the-clock emergency casualty staffed by experienced medical officers and trauma nursing staff. Equipped with oxygen, cardiac defibrillation, ECG, and urgent laboratory support.'}
                </p>

                {/* EMERGENCY HOTLINE CARD */}
                <div className="mt-8 max-w-lg mx-auto bg-white text-slate-900 rounded-3xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                      Hospital Emergency Line
                    </span>
                    <a
                      href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                      className="text-2xl sm:text-3xl font-black text-slate-950 hover:text-red-600 transition-colors"
                    >
                      {t.emergencyPhone}
                    </a>
                  </div>

                  <a
                    href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emergency hover:bg-red-700 text-white font-black text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all"
                  >
                    <PhoneCall className="w-4 h-4 animate-bounce" />
                    <span>Call Casualty Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* TRIAGE PROTOCOL GUIDELINES */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentLang === 'ta' ? 'அவசர கால வழிகாட்டுதல்கள்' : 'Emergency Action Protocols'}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {currentLang === 'ta' ? 'மருத்துவமனைக்கு வரும் முன் கவனிக்க வேண்டிய முக்கிய குறிப்புகள்' : 'Critical first-response steps while en-route to NMS Hospital'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {triageGuides.map((guide, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-emergency font-bold text-sm mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Protocol #{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{guide.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {guide.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">Casualty Action:</span>
                      <a
                        href={`tel:${t.emergencyPhone.replace(/\s/g, '')}`}
                        className="text-xs font-bold text-emergency hover:underline flex items-center gap-1"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>{guide.action}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION MAP CALLOUT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <div className="flex items-center gap-2 text-vital-400 font-bold text-xs uppercase mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Casualty Reception Location</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    No. 169-C1, Main Road, Sankarankoil – Tirunelveli Highway
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Direct ambulance drop-off zone with ramp access and stretcher availability at the entrance.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=NMS+Hospital+Sankarankovil+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-vital-500 hover:bg-vital-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl transition-all whitespace-nowrap shadow-lg"
                >
                  Navigate on Google Maps →
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </SiteShell>
  );
}
