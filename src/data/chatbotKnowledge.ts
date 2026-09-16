export interface ChatbotQA {
  id: string;
  category: string;
  question: {
    en: string;
    ta: string;
  };
  answer: {
    en: string;
    ta: string;
  };
  keywords: string[];
}

export const CHATBOT_KNOWLEDGE: ChatbotQA[] = [
  {
    id: "q-packages-pricing",
    category: "pricing",
    question: {
      en: "What health check-up packages and prices are offered?",
      ta: "முழு உடல் பரிசோதனை திட்டங்கள் மற்றும் கட்டணங்கள் என்ன?"
    },
    answer: {
      en: "NMS Hospital provides 9 official transparent diagnostic packages:\n1. Basic Health Check-Up: ₹195 (10 essential blood/urine tests)\n2. Health Check-Up: ₹575 (Includes Chest X-Ray & ECG)\n3. Master Heart Check-Up: ₹2,050 (Includes 2D ECHO, Treadmill TMT, Lipid profile)\n4. Master Diabetic Check-Up: ₹1,200 (Includes HbA1c, Urine Micro Albumin)\n5. Senior Citizen Check-Up: ₹1,000 (Includes Abdomen/Prostate USG Scan)\n6. Jaundice Check-Up: ₹620 (Liver enzymes + Hepatitis B & C)\n7. Comprehensive Jaundice: ₹1,000 (With GGT & Prothrombin Time)\n8. Pre-Marriage Check-Up: ₹545 (Blood match & infectious screen)\n9. Foreign Health Check-Up: ₹900 (Gulf/Visa medical fitness format)\n\nAll packages include same-day computerized reports.",
      ta: "என்.எம்.எஸ் மருத்துவமனையில் 9 வெளிப்படையான மருத்துவ பரிசோதனை தொகுப்புகள் உள்ளன:\n1. அடிப்படை உடல் பரிசோதனை: ₹195 (10 ரத்த/சிறுநீர் சோதனைகள்)\n2. எக்ஸ்-ரே & இசிஜி உடனான பரிசோதனை: ₹575\n3. மாஸ்டர் இதய பரிசோதனை: ₹2,050 (2D எக்கோ & ட்ரெட்மில் TMT உடன்)\n4. மாஸ்டர் நீரிழிவு பரிசோதனை: ₹1,200 (HbA1c & மைக்ரோ அல்புமின்)\n5. மூத்த குடிமக்கள் பரிசோதனை: ₹1,000 (அடிவயிற்று ஸ்கேன் உடன்)\n6. மஞ்சள் காமாலை பரிசோதனை: ₹620\n7. விரிவான மஞ்சள் காமாலை: ₹1,000 (GGT & ரத்த உறைவு)\n8. திருமணத்திற்கு முந்தைய பரிசோதனை: ₹545\n9. வெளிநாட்டு வேலை/விசா பரிசோதனை: ₹900\n\nஅனைத்து முடிவுகளும் அன்றைய தினமே வழங்கப்படும்."
    },
    keywords: ["package", "packages", "price", "pricing", "cost", "checkup", "check-up", "health check", "master", "திட்டம்", "விலை", "கட்டணம்", "பரிசோதனை", "செலவு"]
  },
  {
    id: "q-hospital-location",
    category: "location",
    question: {
      en: "Where is NMS Hospital located and how to reach?",
      ta: "என்.எம்.எஸ் மருத்துவமனை எங்கு அமைந்துள்ளது? எப்படி வர வேண்டும்?"
    },
    answer: {
      en: "NMS Hospital is located at No. 169-C1, Main Road (Sankarankoil Tirunelveli Road), Sankarankovil – 627756, Tenkasi District, Tamil Nadu. It is easily reachable by all regular town buses and private buses operating on the Tirunelveli - Sankarankovil highway.",
      ta: "என்.எம்.எஸ் மருத்துவமனை எண். 169-C1, மெயின் ரோடு (சங்கரன்கோவில் - திருநெல்வேலி ரோடு), சங்கரன்கோவில் – 627756, தென்காசி மாவட்டத்தில் அமைந்துள்ளது. திருநெல்வேலி - சங்கரன்கோவில் மெயின் ரோட்டில் இயங்கும் அனைத்து பேருந்துகளும் இந்த வழித்தடத்தில் நின்று செல்லும்."
    },
    keywords: ["location", "address", "where", "directions", "route", "map", "reach", "bus", "road", "இடம்", "முகவரி", "எங்கு", "வழி", "பேருந்து"]
  },
  {
    id: "q-timings-opd",
    category: "hours",
    question: {
      en: "What are the hospital working hours and OPD timings?",
      ta: "மருத்துவமனையின் வேலை நேரம் மற்றும் மருத்துவர் ஆலோசனை நேரம் என்ன?"
    },
    answer: {
      en: "• 24/7 Emergency & Casualty: Open 24 hours every day\n• OPD Consultations: Monday to Saturday: 9:30 AM - 1:30 PM & 5:00 PM - 8:30 PM\n• Sunday Morning OPD: 9:00 AM - 1:00 PM\n• Diagnostic Lab: Opens at 7:00 AM daily for fasting samples\n• Pharmacy: Available 24/7 for emergency supplies.",
      ta: "• அவசர சிகிச்சை பிரிவு: 24 மணி நேரமும் செயல்படுகிறது\n• மருத்துவர் ஆலோசனை நேரம் (OPD): திங்கள் முதல் சனி வரை: காலை 9:30 - 1:30 & மாலை 5:00 - 8:30\n• ஞாயிறு காலை: காலை 9:00 - மதியம் 1:00\n• ஆய்வகம்: காலை 7:00 மணிக்கே மாதிரிகள் எடுக்க ஆரம்பமாகும்\n• மருந்தகம்: 24 மணி நேரமும் செயல்படும்."
    },
    keywords: ["hours", "timings", "timing", "open", "time", "sunday", "morning", "evening", "நேரம்", "எப்போது", "ஞாயிறு", "திறக்கும்"]
  },
  {
    id: "q-emergency-services",
    category: "emergency",
    question: {
      en: "Is emergency casualty service available 24/7?",
      ta: "24 மணி நேர அவசர சிகிச்சை வசதி உள்ளதா?"
    },
    answer: {
      en: "Yes! NMS Hospital maintains a round-the-clock Emergency Casualty and Trauma department staffed by medical officers and trained emergency nurses. For emergency assistance or ambulance coordination, call 04636 225315 immediately.",
      ta: "ஆம்! என்.எம்.எஸ் மருத்துவமனையில் 24 மணி நேரமும் அவசர சிகிச்சை மருத்துவர்கள் மற்றும் செவிலியர்கள் பணியில் உள்ளார்கள். அவசர உதவிக்கு உடனடியாக 04636 225315 என்ற எண்ணை அழைக்கவும்."
    },
    keywords: ["emergency", "casualty", "24/7", "night", "ambulance", "trauma", "urgent", "அவசரம்", "இரவு", "ஆம்புலன்ஸ்", "விபத்து"]
  },
  {
    id: "q-book-appointment",
    category: "booking",
    question: {
      en: "How do I book an appointment with a doctor?",
      ta: "மருத்துவரை சந்திக்க முன்பதிவு செய்வது எப்படி?"
    },
    answer: {
      en: "You can book an appointment in 3 easy ways:\n1. Click the 'Book Appointment' button on this website\n2. Message us directly on WhatsApp with your preferred specialist and time\n3. Call reception at 04636 225315\nWalk-in consultations are also welcomed during OPD hours.",
      ta: "நீங்கள் 3 எளிய வழிகளில் முன்பதிவு செய்யலாம்:\n1. இணையதளத்தில் உள்ள 'முன்பதிவு செய்ய' பட்டனை கிளிக் செய்யவும்\n2. வாட்ஸ்அப் மூலம் உடனடியாக தகவல் அனுப்பவும்\n3. வரவேற்பறை எண் 04636 225315-க்கு அழைக்கவும்\nநேரடியாக வந்தும் ஆலோசனைகள் பெறலாம்."
    },
    keywords: ["book", "appointment", "booking", "consult", "consultation", "doctor", "முன்பதிவு", "மருத்துவர்", "நேரம் ஒதுக்க"]
  },
  {
    id: "q-fasting-preparation",
    category: "preparation",
    question: {
      en: "What preparation is needed before a health check-up?",
      ta: "உடல் பரிசோதனைக்கு வரும் முன் என்ன முன்னேற்பாடுகள் செய்ய வேண்டும்?"
    },
    answer: {
      en: "For health check packages involving sugar, lipid, or ultrasound scans, observe 8-12 hours of overnight fasting (no food or milk; plain water is permitted). We advise arriving between 7:30 AM and 9:30 AM. For ultrasound abdomen scans, drink 3-4 glasses of water 1 hour prior to maintain a full urinary bladder.",
      ta: "சர்க்கரை, கொலஸ்ட்ரால் மற்றும் அல்ட்ராசவுண்ட் ஸ்கேன் சோதனைகளுக்கு 8 முதல் 12 மணி நேரம் உணவு உட்கொள்ளாமல் வெறும் வயிற்றில் வரவும் (தண்ணீர் குடிக்கலாம்). காலை 7:30 முதல் 9:30 மணிக்குள் ஆய்வகத்திற்கு வர பரிந்துரைக்கப்படுகிறது. அடிவயிற்று ஸ்கேன் எடுக்க சிறுநீரை அடக்கி வைத்திருக்க வேண்டும்."
    },
    keywords: ["fasting", "preparation", "food", "water", "empty stomach", "sugar test", "வெறும் வயிறு", "சாப்பாடு", "தண்ணீர்", "தயாரிப்பு"]
  },
  {
    id: "q-heart-checkup-detail",
    category: "cardiac",
    question: {
      en: "What is included in the Master Heart Check-up (₹2050)?",
      ta: "மாஸ்டர் இதய நல பரிசோதனையில் (₹2050) என்னென்ன சோதனைகள் உள்ளன?"
    },
    answer: {
      en: "The Master Heart Check-Up (₹2,050) is our most comprehensive cardiac screening. It includes:\n• 2D Echocardiography (ECHO) - Heart structure and valve motion\n• Computerized Tread Mill Test (TMT / Stress Test)\n• 12-Lead Resting ECG\n• Digital Chest X-Ray\n• Complete Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)\n• Complete Blood Count (Hb, TC, DC, ESR, Platelets)\n• Fasting Blood Sugar, Urea & Serum Creatinine\n• Urine Routine Examination\nSame-day report and doctor review.",
      ta: "மாஸ்டர் இதய பரிசோதனை (₹2,050) மிக விரிவான இதய பாதுகாப்பு தொகுப்பாகும்:\n• 2D எக்கோ கார்டியோகிராபி (ECHO)\n• கணினிமயமாக்கப்பட்ட ட்ரெட்மில் ஸ்ட்ரெஸ் டெஸ்ட் (TMT)\n• 12-Lead டிஜிட்டல் ECG\n• டிஜிட்டல் நெஞ்சு எக்ஸ்-ரே\n• முழுமையான லிபிட் புரொஃபைல் (கொலஸ்ட்ரால்)\n• முழு ரத்த அணுக்கள் பரிசோதனை (Hb, TC, DC, ESR, Platelets)\n• இரத்த சர்க்கரை, யூரியா & கிரியேட்டினின்\n• சிறுநீர் பரிசோதனை."
    },
    keywords: ["heart", "cardiac", "echo", "tmt", "treadmill", "ecg", "2050", "இதயம்", "எக்கோ", "ட்ரெட்மில்", "இசிஜி"]
  },
  {
    id: "q-diabetic-checkup-detail",
    category: "diabetic",
    question: {
      en: "What is included in the Master Diabetic Check-up (₹1200)?",
      ta: "மாஸ்டர் நீரிழிவு பரிசோதனையில் (₹1200) என்னென்ன சோதனைகள் உள்ளன?"
    },
    answer: {
      en: "The Master Diabetic Check-Up (₹1,200) includes:\n• HbA1c (Gold-standard 3-month average blood glucose)\n• Urine Micro Albumin (Earliest marker for diabetic kidney protection)\n• Fasting and Post-Prandial Blood Sugar\n• Lipid Profile\n• Kidney Function (Blood Urea & Serum Creatinine)\n• Complete Blood Count (Hb, TC, DC, ESR, Platelets)\n• Digital Chest X-Ray & ECG\n• Urine Routine Examination.",
      ta: "மாஸ்டர் சர்க்கரை நோய் பரிசோதனை (₹1,200) உள்ளடக்கியவை:\n• HbA1c (3 மாத சராசரி சர்க்கரை அளவு)\n• Urine Micro Albumin (சிறுநீரக பாதுகாப்பு பரிசோதனை)\n• வெறும் வயிறு & சாப்பிட்ட பின் சர்க்கரை அளவு\n• கொலஸ்ட்ரால் லிபிட் பரிசோதனை\n• சிறுநீரக செயல்பாடு (யூரியா, கிரியேட்டினின்)\n• ரத்த அணுக்கள், எக்ஸ்-ரே, இசிஜி மற்றும் சிறுநீர் பரிசோதனை."
    },
    keywords: ["diabetic", "diabetes", "sugar", "hba1c", "albumin", "1200", "சர்க்கரை", "நீரிழிவு", "சுகர்"]
  },
  {
    id: "q-foreign-pre-marriage",
    category: "special",
    question: {
      en: "Do you provide Pre-Marriage and Foreign Visa Medical Check-ups?",
      ta: "திருமணத்திற்கு முந்தைய மற்றும் வெளிநாட்டு விசா பரிசோதனைகள் செய்யப்படுமா?"
    },
    answer: {
      en: "Yes! We conduct both:\n• Pre-Marriage Check-Up (₹545): Blood grouping, Rh factor compatibility, HIV 1&2, HBsAg, VDRL, and general fitness with absolute patient confidentiality.\n• Foreign Health Check-Up (₹900): Complete overseas employment and visa medical fitness tests including HIV, Hepatitis B & C, VDRL, Chest X-Ray (TB screen), ECG, and blood profiles with official medical fitness format.",
      ta: "ஆம்! இரண்டு பரிசோதனைகளும் உண்டு:\n• திருமணத்திற்கு முந்தைய பரிசோதனை (₹545): ரத்த பொருத்தம் (Rh காரணி), HIV, ஹெபடைடிஸ், VDRL சோதனைகள் முழு ரகசியத்துடன்.\n• வெளிநாட்டு வேலை/விசா பரிசோதனை (₹900): வளைகுடா மற்றும் வெளிநாடுகளில் பணிபுரிய தேவையான எக்ஸ்-ரே, இசிஜி, தொற்று நோய்கள் மற்றும் ரத்த பரிசோதனைகள் மருத்துவ சான்றிதழுடன்."
    },
    keywords: ["marriage", "pre-marriage", "foreign", "visa", "gulf", "abroad", "travel", "திருமணம்", "வெளிநாடு", "விசா"]
  },
  {
    id: "q-whatsapp-contact",
    category: "contact",
    question: {
      en: "Can I directly message the hospital on WhatsApp?",
      ta: "மருத்துவமனையுடன் வாட்ஸ்அப் மூலம் நேரடியாக பேச முடியுமா?"
    },
    answer: {
      en: "Yes! Click the green WhatsApp button located at the bottom-right or on any package/doctor card. Our care desk will assist you with appointments, package bookings, and doctor schedules.",
      ta: "ஆம்! திரையின் கீழ் வலதுபுறம் உள்ள வாட்ஸ்அப் பட்டனை கிளிக் செய்யவும். எங்கள் வரவேற்பறை குழு முன்பதிவு மற்றும் ஆலோசனைகளுக்கு உதவும்."
    },
    keywords: ["whatsapp", "chat", "message", "mobile", "வாட்ஸ்அப்", "தகவல்", "செய்தி"]
  }
];

export const EMERGENCY_KEYWORDS = [
  "chest pain", "heart attack", "can't breathe", "cannot breathe", "breathing difficulty", 
  "stroke", "unconscious", "heavy bleeding", "fracture", "poison", "snake bite", "burns",
  "நெஞ்சு வலி", "மாரடைப்பு", "மூச்சுத்திணறல்", "மயக்கம்", "விஷம்", "பாம்பு கடி", "ரத்தப்போக்கு"
];
