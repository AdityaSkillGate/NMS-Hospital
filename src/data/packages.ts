export interface HealthPackage {
  id: string;
  order: number;
  name: {
    en: string;
    ta: string;
  };
  subtitle: {
    en: string;
    ta: string;
  };
  price: number;
  category: 'routine' | 'cardiac' | 'diabetic' | 'senior' | 'liver' | 'special';
  badge?: {
    en: string;
    ta: string;
  };
  popular?: boolean;
  fastingHours: number;
  sampleType: {
    en: string;
    ta: string;
  };
  reportDelivery: {
    en: string;
    ta: string;
  };
  tests: {
    name: string;
    category: string;
  }[];
  description: {
    en: string;
    ta: string;
  };
}

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "basic-health-checkup",
    order: 1,
    name: {
      en: "Basic Health Check-Up",
      ta: "அடிப்படை உடல் பரிசோதனை (Basic Health Check-Up)"
    },
    subtitle: {
      en: "Essential baseline blood & metabolic profile",
      ta: "அடிப்படை ரத்த மற்றும் சிறுநீர் பரிசோதனை"
    },
    price: 195,
    category: "routine",
    badge: {
      en: "Most Affordable",
      ta: "மிகவும் சிக்கனமானது"
    },
    fastingHours: 8,
    sampleType: {
      en: "Blood & Urine Sample",
      ta: "ரத்தம் & சிறுநீர் மாதிரி"
    },
    reportDelivery: {
      en: "Same Day (Within 3 Hours)",
      ta: "அன்றைய தினமே (3 மணி நேரத்திற்குள்)"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR (Erythrocyte Sedimentation Rate)", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping & Rh Typing", category: "Haematology" },
      { name: "Blood Sugar (Random / Fasting)", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "Urine Routine Examination", category: "Clinical Pathology" }
    ],
    description: {
      en: "A foundational diagnostic panel covering anaemia, infection markers, platelet health, blood group identification, blood glucose levels, and essential kidney function markers.",
      ta: "இரத்த சோகை, நோய்த்தொற்று, பிளேட்லெட் எண்ணிக்கை, இரத்த வகை, சர்க்கரை அளவு மற்றும் சிறுநீரக செயல்பாட்டை அறிய உதவும் அடிப்படை பரிசோதனை."
    }
  },
  {
    id: "health-checkup-vital",
    order: 2,
    name: {
      en: "Health Check-Up",
      ta: "முழு உடல் நலம் பரிசோதனை (Health Check-Up)"
    },
    subtitle: {
      en: "Complete vital panel with X-Ray and ECG",
      ta: "எக்ஸ்-ரே மற்றும் இ.சி.ஜி உடனான முழு பரிசோதனை"
    },
    price: 575,
    category: "routine",
    badge: {
      en: "Recommended Baseline",
      ta: "பரிந்துரைக்கப்படும் தொடக்கம்"
    },
    fastingHours: 10,
    sampleType: {
      en: "Blood, Urine & Radiology",
      ta: "ரத்தம், சிறுநீர் & கதிரியக்க பரிசோதனை"
    },
    reportDelivery: {
      en: "Same Day (Within 4 Hours)",
      ta: "அன்றைய தினமே (4 மணி நேரத்திற்குள்)"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping & Rh Type", category: "Haematology" },
      { name: "Blood Sugar", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "Urine Routine", category: "Clinical Pathology" },
      { name: "Digital Chest X-Ray", category: "Radiology" },
      { name: "Electrocardiogram (ECG)", category: "Cardiology" }
    ],
    description: {
      en: "Includes all basic blood parameters enhanced with Digital Chest X-Ray for respiratory evaluation and 12-lead ECG for heart rhythm assessment.",
      ta: "அடிப்படை இரத்த பரிசோதனைகளுடன் நெஞ்சு எக்ஸ்-ரே மற்றும் இதயத் துடிப்பு (ECG) பரிசோதனை அடங்கிய சிறப்பான தொகுப்பு."
    }
  },
  {
    id: "master-health-checkup-heart",
    order: 3,
    name: {
      en: "Master Health Check-Up (Heart Check-Up)",
      ta: "மாஸ்டர் இதய நல பரிசோதனை (Heart Check-Up)"
    },
    subtitle: {
      en: "Comprehensive Cardiac Panel with Echo & TMT",
      ta: "2D எக்கோ & ட்ரெட்மில் சோதனையுடன் கூடிய முழு இதய பரிசோதனை"
    },
    price: 2050,
    category: "cardiac",
    badge: {
      en: "Complete Cardiac Care",
      ta: "முழு இதய நல பாதுகாப்பு"
    },
    popular: true,
    fastingHours: 12,
    sampleType: {
      en: "Blood, Urine, Radiology & Advanced Cardiology",
      ta: "ரத்தம், சிறுநீர், எக்ஸ்-ரே & இதய பரிசோதனைகள்"
    },
    reportDelivery: {
      en: "Same Day with Doctor Consultation",
      ta: "அன்றைய தினமே மருத்துவ ஆலோசனையுடன்"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping & Rh", category: "Haematology" },
      { name: "Blood Sugar Fasting", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)", category: "Cardiology Lab" },
      { name: "Urine Routine", category: "Clinical Pathology" },
      { name: "Digital Chest X-Ray", category: "Radiology" },
      { name: "12-Lead Resting ECG", category: "Cardiology" },
      { name: "Tread Mill Test (TMT / Stress Test)", category: "Cardiology" },
      { name: "2D Echocardiogram (ECHO)", category: "Cardiology" }
    ],
    description: {
      en: "Our flagship heart evaluation package designed by cardiologists. Includes lipid profile, 2D ECHO to view heart chamber structure, and stress treadmill test (TMT) to detect coronary ischemia early.",
      ta: "இதய மருத்துவர்களால் வடிவமைக்கப்பட்ட முழுமையான இதய பரிசோதனை. கொலஸ்ட்ரால், 2D எக்கோ, ட்ரெட்மில் ஸ்ட்ரெஸ் டெஸ்ட் மற்றும் நெஞ்சு எக்ஸ்-ரே உள்ளடக்கியது."
    }
  },
  {
    id: "master-health-checkup-diabetic",
    order: 4,
    name: {
      en: "Master Health Check-Up (Diabetic Check-Up)",
      ta: "மாஸ்டர் சர்க்கரை நோய் பரிசோதனை (Diabetic Check-Up)"
    },
    subtitle: {
      en: "End-to-end diabetes complication screening",
      ta: "HbA1c மற்றும் மைக்ரோ அல்புமின் உடனான நீரிழிவு பரிசோதனை"
    },
    price: 1200,
    category: "diabetic",
    badge: {
      en: "Specialist Diabetic Care",
      ta: "சிறப்பு நீரிழிவு பரிசோதனை"
    },
    popular: true,
    fastingHours: 10,
    sampleType: {
      en: "Fasting Blood, Urine & Diagnostics",
      ta: "வெறும் வயிற்று ரத்தம், சிறுநீர் & பரிசோதனைகள்"
    },
    reportDelivery: {
      en: "Same Day (Within 4 Hours)",
      ta: "அன்றைய தினமே (4 மணி நேரத்திற்குள்)"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping", category: "Haematology" },
      { name: "Fasting & Post-Prandial Sugar", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "Lipid Profile", category: "Biochemistry" },
      { name: "Glycated Haemoglobin (HbA1c - 3 Month Average)", category: "Diabetes Specific" },
      { name: "Urine Micro Albumin", category: "Nephrology Marker" },
      { name: "Urine Routine", category: "Clinical Pathology" },
      { name: "Digital Chest X-Ray", category: "Radiology" },
      { name: "Electrocardiogram (ECG)", category: "Cardiology" }
    ],
    description: {
      en: "Crucial for both newly diagnosed and long-term diabetic patients. Features gold-standard HbA1c to evaluate glycemic control over 90 days and Urine Micro Albumin to catch early diabetic nephropathy.",
      ta: "சர்க்கரை நோயாளிகளுக்கு 3 மாத சராசரி சர்க்கரை அளவு (HbA1c) மற்றும் சிறுநீரக பாதிப்பை முன்கூட்டியே கண்டறியும் Micro Albumin உள்ளிட்ட விரிவான பரிசோதனை."
    }
  },
  {
    id: "master-health-checkup-senior",
    order: 5,
    name: {
      en: "Master Health Check-Up (Senior Citizen)",
      ta: "மூத்த குடிமக்கள் முழு நல பரிசோதனை (Senior Citizen Check-Up)"
    },
    subtitle: {
      en: "Tailored for adults aged 50+ with Ultrasound Scan",
      ta: "அடிவயிற்று ஸ்கேன் மற்றும் முழு உடல் பரிசோதனை"
    },
    price: 1000,
    category: "senior",
    badge: {
      en: "Senior Wellness Care",
      ta: "முதியோர் நல பாதுகாப்பு"
    },
    fastingHours: 10,
    sampleType: {
      en: "Blood, Urine, Radiology & USG Scan",
      ta: "ரத்தம், சிறுநீர், எக்ஸ்-ரே & அல்ட்ராசவுண்ட் ஸ்கேன்"
    },
    reportDelivery: {
      en: "Same Day with Scan Report",
      ta: "ஸ்கேன் அறிக்கையுடன் அன்றைய தினமே"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping", category: "Haematology" },
      { name: "Blood Sugar", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "Lipid Profile", category: "Biochemistry" },
      { name: "Digital Chest X-Ray", category: "Radiology" },
      { name: "ECG", category: "Cardiology" },
      { name: "Ultrasound Scan Abdomen & Pelvis (Prostate Screen)", category: "Ultrasound Imaging" },
      { name: "Urine Routine", category: "Clinical Pathology" }
    ],
    description: {
      en: "Dedicated geriatric evaluation package addressing age-related health changes. Incorporates an Ultrasound Scan of the abdomen and pelvis to examine liver, kidneys, bladder, and prostate gland.",
      ta: "50 வயதிற்கு மேற்பட்ட பெரியவர்களுக்கான சிறப்பு பரிசோதனை. கல்லீரல், சிறுநீரகம், புரோஸ்டேட் சுரப்பியை பரிசோதிக்க அடிவயிற்று அல்ட்ராசவுண்ட் ஸ்கேன் உள்ளடக்கியது."
    }
  },
  {
    id: "jaundice-checkup",
    order: 6,
    name: {
      en: "Jaundice Check-Up",
      ta: "மஞ்சள் காமாலை பரிசோதனை (Jaundice Check-Up)"
    },
    subtitle: {
      en: "Primary liver enzymes and viral hepatitis panel",
      ta: "கல்லீரல் செயல்பாடு மற்றும் மஞ்சள் காமாலை சோதனை"
    },
    price: 620,
    category: "liver",
    badge: {
      en: "Fast Liver Screen",
      ta: "விரைவான கல்லீரல் பரிசோதனை"
    },
    fastingHours: 8,
    sampleType: {
      en: "Serum Blood & Urine",
      ta: "ரத்த சீரம் & சிறுநீர்"
    },
    reportDelivery: {
      en: "Within 3 Hours",
      ta: "3 மணி நேரத்திற்குள்"
    },
    tests: [
      { name: "Urine Routine & Bile Salts/Pigments", category: "Clinical Pathology" },
      { name: "Serum Bilirubin (Total & Direct)", category: "Liver Function" },
      { name: "AST / SGOT (Aspartate Aminotransferase)", category: "Liver Function" },
      { name: "ALT / SGPT (Alanine Aminotransferase)", category: "Liver Function" },
      { name: "ALP (Alkaline Phosphatase)", category: "Liver Function" },
      { name: "HBsAg (Hepatitis B Surface Antigen)", category: "Serology" },
      { name: "HCV (Hepatitis C Virus Antibody)", category: "Serology" }
    ],
    description: {
      en: "Rapid diagnostic battery for patients presenting with yellowing of eyes/skin, fatigue, or dark urine. Detects viral hepatitis B & C as well as hepatic enzyme elevation.",
      ta: "கண்கள் அல்லது தோல் மஞ்சள் நிறமாக மாறுதல், சோர்வு போன்ற அறிகுறிகளுக்கு கல்லீரல் நொதிகள் மற்றும் ஹெபடைடிஸ் பி & சி வைரஸ் தொற்றை கண்டறியும் பரிசோதனை."
    }
  },
  {
    id: "comprehensive-jaundice-checkup",
    order: 7,
    name: {
      en: "Comprehensive Jaundice Check-Up",
      ta: "விரிவான மஞ்சள் காமாலை பரிசோதனை (Comprehensive Jaundice)"
    },
    subtitle: {
      en: "Full hepatic synthesis, GGT and coagulation profile",
      ta: "கல்லீரல் செயல்பாடு, GGT மற்றும் ரத்த உறைவு பரிசோதனை"
    },
    price: 1000,
    category: "liver",
    badge: {
      en: "Advanced Liver Profile",
      ta: "மேம்பட்ட கல்லீரல் பரிசோதனை"
    },
    fastingHours: 10,
    sampleType: {
      en: "Blood & Urine",
      ta: "ரத்தம் & சிறுநீர்"
    },
    reportDelivery: {
      en: "Same Day (Within 4 Hours)",
      ta: "அன்றைய தினமே (4 மணி நேரத்திற்குள்)"
    },
    tests: [
      { name: "Urine Routine", category: "Clinical Pathology" },
      { name: "Serum Bilirubin (Total, Direct & Indirect)", category: "Liver Function" },
      { name: "AST / SGOT", category: "Liver Function" },
      { name: "ALT / SGPT", category: "Liver Function" },
      { name: "ALP (Alkaline Phosphatase)", category: "Liver Function" },
      { name: "Gamma-Glutamyl Transferase (GGT)", category: "Liver Function" },
      { name: "HBsAg (Hepatitis B)", category: "Serology" },
      { name: "HCV (Hepatitis C)", category: "Serology" },
      { name: "Total Serum Protein", category: "Liver Synthesis" },
      { name: "Serum Albumin & Globulin (A/G Ratio)", category: "Liver Synthesis" },
      { name: "Prothrombin Time (PT / INR Coagulation)", category: "Haematology & Clotting" }
    ],
    description: {
      en: "Advanced hepatology package providing a detailed insight into liver cell damage, biliary tract health (GGT), protein synthetic capacity, and blood clotting factors (Prothrombin Time).",
      ta: "கல்லீரல் செல்கள் சேதம், பித்த நாள ஆரோக்கியம் (GGT), புரத உற்பத்தி மற்றும் ரத்த உறைவு திறனை (PT/INR) துல்லியமாக கணிக்கும் விரிவான பரிசோதனை."
    }
  },
  {
    id: "pre-marriage-checkup",
    order: 8,
    name: {
      en: "Pre-Marriage Check-Up",
      ta: "திருமணத்திற்கு முந்தைய பரிசோதனை (Pre-Marriage Check-Up)"
    },
    subtitle: {
      en: "Pre-marital wellness, blood compatibility & infectious screen",
      ta: "திருமணத்திற்கு முந்தைய உடல் நலம் & தொற்று நோய் பரிசோதனை"
    },
    price: 545,
    category: "special",
    badge: {
      en: "Essential For Couples",
      ta: "தம்பதியருக்கு அவசியமானது"
    },
    fastingHours: 8,
    sampleType: {
      en: "Blood & Urine",
      ta: "ரத்தம் & சிறுநீர்"
    },
    reportDelivery: {
      en: "Strictly Confidential (Same Day)",
      ta: "முழு ரகசியத்துடன் (அன்றைய தினமே)"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping & Rh Factor (Rh Incompatibility)", category: "Haematology" },
      { name: "Blood Sugar Fasting", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "HIV 1 & 2 Antibody Screening", category: "Confidential Serology" },
      { name: "HBsAg (Hepatitis B Surface Antigen)", category: "Serology" },
      { name: "VDRL (Syphilis Screening)", category: "Serology" },
      { name: "Urine Routine Examination", category: "Clinical Pathology" }
    ],
    description: {
      en: "Recommended for couples before tying the knot. Evaluates Rh blood compatibility for future pregnancies, general fitness, and tests for sexually transmitted or communicable conditions with complete confidentiality.",
      ta: "திருமணத்திற்கு முன் இருவரின் ரத்த பொருத்தம் (Rh காரணி), பொதுவான உடல் தகுதி மற்றும் தொற்று நோய்களை கண்டறிய உதவும் ரகசியமான மருத்துவ பரிசோதனை."
    }
  },
  {
    id: "foreign-health-checkup",
    order: 9,
    name: {
      en: "Foreign Health Check-Up",
      ta: "வெளிநாட்டு வேலை & விசா பரிசோதனை (Foreign Health Check-Up)"
    },
    subtitle: {
      en: "Accredited medical fitness screening for overseas visas & jobs",
      ta: "வெளிநாடு பயணம் மற்றும் வேலை வாய்ப்பிற்கான மருத்துவ சான்றிதழ்"
    },
    price: 900,
    category: "special",
    badge: {
      en: "Visa & Overseas Fitness",
      ta: "விசா & வெளிநாட்டு வேலை"
    },
    fastingHours: 10,
    sampleType: {
      en: "Blood, Urine, Chest X-Ray & ECG",
      ta: "ரத்தம், சிறுநீர், எக்ஸ்-ரே & இ.சி.ஜி"
    },
    reportDelivery: {
      en: "With Official Medical Fitness Format (Same Day)",
      ta: "அரசு வழிகாட்டுதல் அறிக்கையுடன் (அன்றைய தினமே)"
    },
    tests: [
      { name: "Haemoglobin (Hb)", category: "Haematology" },
      { name: "Total Count (TC)", category: "Haematology" },
      { name: "Differential Count (DC)", category: "Haematology" },
      { name: "ESR", category: "Haematology" },
      { name: "Platelet Count", category: "Haematology" },
      { name: "Blood Grouping & Rh", category: "Haematology" },
      { name: "Blood Sugar", category: "Biochemistry" },
      { name: "Blood Urea", category: "Renal Function" },
      { name: "Serum Creatinine", category: "Renal Function" },
      { name: "HIV 1 & 2 Rapid Screening", category: "Serology" },
      { name: "HBsAg (Hepatitis B)", category: "Serology" },
      { name: "VDRL", category: "Serology" },
      { name: "HCV (Hepatitis C)", category: "Serology" },
      { name: "Urine Routine", category: "Clinical Pathology" },
      { name: "Digital Chest X-Ray (Tuberculosis Screen)", category: "Radiology" },
      { name: "Electrocardiogram (ECG)", category: "Cardiology" }
    ],
    description: {
      en: "Meets international visa medical requirements for Gulf countries (GAMCA/GCC) and overseas employment. Covers infectious disease profiles, Chest X-Ray for tuberculosis screening, and heart fitness.",
      ta: "வளைகுடா மற்றும் வெளிநாடுகளில் பணிபுரிய செல்லும் நபர்களுக்கான முழு மருத்துவ தகுதி பரிசோதனை. காசநோய், தொற்று நோய்கள் மற்றும் இதய ஆரோக்கியத்தை உறுதி செய்யும்."
    }
  }
];
