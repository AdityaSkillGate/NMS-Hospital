export interface FAQItem {
  id: string;
  question: {
    en: string;
    ta: string;
  };
  answer: {
    en: string;
    ta: string;
  };
  category: 'general' | 'packages' | 'appointments' | 'emergency';
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-location",
    question: {
      en: "Where is NMS Hospital located in Sankarankovil?",
      ta: "சங்கரன்கோவிலில் என்.எம்.எஸ் மருத்துவமனை எங்கு அமைந்துள்ளது?"
    },
    answer: {
      en: "NMS Hospital is conveniently located at No. 169-C1, Main Road (Sankarankoil Tirunelveli Road), Sankarankovil – 627756, Tenkasi District, Tamil Nadu. It is easily accessible by town buses and private transport from Tirunelveli, Rajapalayam, Tenkasi, and Puliyangudi.",
      ta: "என்.எம்.எஸ் மருத்துவமனை எண். 169-C1, மெயின் ரோடு (சங்கரன்கோவில் - திருநெல்வேலி ரோடு), சங்கரன்கோவில் – 627756, தென்காசி மாவட்டத்தில் அமைந்துள்ளது. திருநெல்வேலி, ராஜபாளையம், தென்காசி மற்றும் புளியங்குடியிலிருந்து வரும் பேருந்துகள் எளிதில் வந்து செல்லும் இடத்தில் அமைந்துள்ளது."
    },
    category: "general"
  },
  {
    id: "faq-packages-pricing",
    question: {
      en: "What health check-up packages are available and what are the charges?",
      ta: "என்னென்ன முழு உடல் பரிசோதனை திட்டங்கள் உள்ளன மற்றும் அவற்றின் கட்டணம் என்ன?"
    },
    answer: {
      en: "We offer 9 standardized packages with transparent pricing:\n• Basic Health Check-Up: ₹195 (10 tests)\n• Health Check-Up with X-Ray & ECG: ₹575\n• Master Health Check-Up (Heart Check-Up with Echo & TMT): ₹2,050\n• Master Health Check-Up (Diabetic Check-Up with HbA1c): ₹1,200\n• Senior Citizen Check-Up with Ultrasound Scan: ₹1,000\n• Jaundice Check-Up: ₹620\n• Comprehensive Jaundice Check-Up: ₹1,000\n• Pre-Marriage Check-Up: ₹545\n• Foreign Health Check-Up for Visas: ₹900",
      ta: "எங்களிடம் 9 வெளிப்படையான கட்டண மருத்துவ பரிசோதனை தொகுப்புகள் உள்ளன:\n• அடிப்படை உடல் பரிசோதனை: ₹195 (10 சோதனைகள்)\n• எக்ஸ்-ரே மற்றும் இசிஜி உடன்: ₹575\n• மாஸ்டர் இதய நல பரிசோதனை (Echo & TMT உடன்): ₹2,050\n• மாஸ்டர் சர்க்கரை நோய் பரிசோதனை (HbA1c உடன்): ₹1,200\n• மூத்த குடிமக்கள் பரிசோதனை (ஸ்கேன் உடன்): ₹1,000\n• மஞ்சள் காமாலை பரிசோதனை: ₹620\n• விரிவான மஞ்சள் காமாலை பரிசோதனை: ₹1,000\n• திருமணத்திற்கு முந்தைய பரிசோதனை: ₹545\n• வெளிநாட்டு வேலை மற்றும் விசா பரிசோதனை: ₹900"
    },
    category: "packages"
  },
  {
    id: "faq-fasting-instructions",
    question: {
      en: "Do I need to fast before coming for a health check-up package?",
      ta: "முழு உடல் பரிசோதனைக்கு வரும் முன் வெறும் வயிற்றில் இருக்க வேண்டுமா?"
    },
    answer: {
      en: "Yes, for packages containing blood glucose, lipid profile, or ultrasound scans (Basic, Health Check, Heart, Diabetic, Senior Citizen, and Foreign Check-Up), an overnight fasting of 8 to 12 hours is recommended. You may drink plain water. Please arrive at the laboratory between 7:30 AM and 10:00 AM for sample collection.",
      ta: "ஆம், சர்க்கரை, கொலஸ்ட்ரால் மற்றும் அல்ட்ராசவுண்ட் ஸ்கேன் சோதனைகள் அடங்கிய திட்டங்களுக்கு 8 முதல் 12 மணி நேரம் வரை உணவு உட்கொள்ளாமல் வெறும் வயிற்றில் வர வேண்டும். தண்ணீர் குடிக்கலாம். மாதிரி கொடுக்க காலை 7:30 முதல் 10:00 மணிக்குள் ஆய்வகத்திற்கு வரவும்."
    },
    category: "packages"
  },
  {
    id: "faq-emergency-services",
    question: {
      en: "Is Emergency and Casualty service open 24 hours?",
      ta: "அவசர சிகிச்சை பிரிவு (Emergency) 24 மணி நேரமும் செயல்படுகிறதா?"
    },
    answer: {
      en: "Yes, NMS Hospital Casualty & Emergency Care operates 24 hours a day, 365 days a year. Our emergency medical officers and nursing staff are stationed on-site round the clock for acute trauma, severe fevers, chest pain, and urgent medical emergencies. Emergency Hotline: 04636 225315.",
      ta: "ஆம், என்.எம்.எஸ் மருத்துவமனையின் அவசர சிகிச்சை பிரிவு (Casualty) வருடம் முழுவதும் 24 மணி நேரமும் செயல்படுகிறது. அவசர சிகிச்சை மருத்துவர்கள் மற்றும் செவிலியர்கள் எப்போதும் பணியில் இருப்பார்கள். அவசர தொலைபேசி எண்: 04636 225315."
    },
    category: "emergency"
  },
  {
    id: "faq-doctor-appointment",
    question: {
      en: "How can I book an appointment with a specialist doctor?",
      ta: "மருத்துவர்களை சந்திக்க முன்பதிவு செய்வது எப்படி?"
    },
    answer: {
      en: "You can book directly using our website appointment booking form, via WhatsApp by clicking the 'Book on WhatsApp' button, or by calling our hospital reception at 04636 225315. Walk-in consultations are also welcomed during standard OPD hours.",
      ta: "எங்கள் இணையதளத்தில் உள்ள முன்பதிவு படிவம் வழியாகவோ, வாட்ஸ்அப் பட்டனை கிளிக் செய்தோ, அல்லது மருத்துவமனை வரவேற்பறை எண் 04636 225315-க்கு அழைத்தோ முன்பதிவு செய்யலாம். நேரடியாக வந்தும் மருத்துவர்களை அணுகலாம்."
    },
    category: "appointments"
  },
  {
    id: "faq-report-timing",
    question: {
      en: "How soon will I receive my diagnostic test reports?",
      ta: "பரிசோதனை முடிவுகள் (Reports) எவ்வளவு நேரத்தில் கிடைக்கும்?"
    },
    answer: {
      en: "Most routine blood tests, urine examinations, and Digital X-Rays are delivered within 3 to 4 hours on the same day. Ultrasound scan reports and Echocardiogram reports are handed over immediately following the examination after physician review.",
      ta: "பெரும்பாலான இரத்த, சிறுநீர் பரிசோதனைகள் மற்றும் எக்ஸ்-ரே அறிக்கைகள் அன்றைய தினமே 3 முதல் 4 மணி நேரத்திற்குள் வழங்கப்படுகின்றன. அல்ட்ராசவுண்ட் ஸ்கேன் மற்றும் எக்கோ அறிக்கைகள் பரிசோதனை முடிந்த உடனே மருத்துவ ஆலோசனைக்கு பின் வழங்கப்படுகிறது."
    },
    category: "packages"
  },
  {
    id: "faq-opd-hours",
    question: {
      en: "What are the regular Outpatient (OPD) consultation hours?",
      ta: "வெளிநோயாளி பிரிவு (OPD) ஆலோசனை நேரம் என்ன?"
    },
    answer: {
      en: "Outpatient consultations run Monday through Saturday from 9:30 AM to 1:30 PM (Morning Session) and 5:00 PM to 8:30 PM (Evening Session). Sunday morning OPD is open from 9:00 AM to 1:00 PM. Emergency Casualty remains open 24/7.",
      ta: "திங்கள் முதல் சனிக்கிழமை வரை காலை 9:30 முதல் 1:30 மணி வரையிலும், மாலை 5:00 முதல் 8:30 மணி வரையிலும் ஆலோசனைகள் நடைபெறும். ஞாயிற்றுக்கிழமை காலை 9:00 முதல் 1:00 மணி வரை செயல்படும். அவசர பிரிவு 24/7 இயங்கும்."
    },
    category: "general"
  },
  {
    id: "faq-payment-methods",
    question: {
      en: "What payment methods are accepted at NMS Hospital?",
      ta: "மருத்துவமனையில் என்னென்ன கட்டண முறைகள் ஏற்றுக்கொள்ளப்படுகின்றன?"
    },
    answer: {
      en: "We accept Cash, UPI payments (Google Pay, PhonePe, Paytm), Debit Cards, and Credit Cards at our billing desk for patient convenience.",
      ta: "ரொக்கப் பணம், கூகுள் பே, போன்பே, பேடிஎம் போன்ற UPI முறைகள் மற்றும் டெபிட்/கிரெடிட் கார்டுகள் மூலமும் கட்டணம் செலுத்தலாம்."
    },
    category: "general"
  }
];
