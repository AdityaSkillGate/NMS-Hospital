export interface Department {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  shortDesc: {
    en: string;
    ta: string;
  };
  fullDesc: {
    en: string;
    ta: string;
  };
  iconName: string;
  features: {
    en: string[];
    ta: string[];
  };
  timing: {
    en: string;
    ta: string;
  };
  is24x7?: boolean;
}

export const DEPARTMENTS: Department[] = [
  {
    id: "emergency-trauma",
    name: {
      en: "24/7 Emergency & Trauma Care",
      ta: "24/7 அவசர சிகிச்சை & தீவிர விபத்து பிரிவு"
    },
    shortDesc: {
      en: "Round-the-clock rapid medical response, acute trauma management & casualty care.",
      ta: "24 மணி நேரமும் இயங்கும் உடனடி அவசர சிகிச்சை மற்றும் விபத்து பிரிவு."
    },
    fullDesc: {
      en: "Equipped with dedicated casualty beds, cardiac monitors, defibrillators, oxygen supply, and emergency doctors on round-the-clock duty for rapid triage and stabilization.",
      ta: "இதய கண்காணிப்பு மானிட்டர்கள், அவசர மருந்துகள் மற்றும் 24 மணி நேர மருத்துவர் குழுவுடன் கூடிய முழு அவசர சிகிச்சை மையம்."
    },
    iconName: "Ambulance",
    features: {
      en: [
        "24/7 Immediate Triage & Casualty Doctor on duty",
        "Advanced life support & crash cart resuscitation",
        "Rapid diagnostic lab and X-Ray coordination",
        "Ambulance pickup & emergency transfer assistance"
      ],
      ta: [
        "24 மணி நேரமும் அனுபவம் வாய்ந்த அவசர சிகிச்சை மருத்துவர்கள்",
        "இதய அவசர சிகிச்சை & ஆக்ஸிஜன் வசதி",
        "உடனடி ரத்த பரிசோதனை மற்றும் எக்ஸ்-ரே சேவை",
        "ஆம்புலன்ஸ் அவசர வாகன உதவி"
      ]
    },
    timing: {
      en: "Open 24 Hours / 7 Days",
      ta: "24 மணி நேரமும் திறந்திருக்கும் (அனைத்து நாட்களும்)"
    },
    is24x7: true
  },
  {
    id: "general-medicine",
    name: {
      en: "General Medicine",
      ta: "பொது மருத்துவம் (General Medicine)"
    },
    shortDesc: {
      en: "Comprehensive diagnosis and compassionate treatment for adult fevers, chronic illnesses & health check-ups.",
      ta: "காய்ச்சல், தொற்று நோய்கள் மற்றும் நீண்டகால நோய்களுக்கான முழுமையான மருத்துவ சிகிச்சை."
    },
    fullDesc: {
      en: "Our physicians provide expert diagnosis and ongoing management for infections, fever syndromes (Dengue, Typhoid, Viral), hypertension, asthma, and chronic adult medical conditions.",
      ta: "மலேரியா, டெங்கு, டைபாய்டு காய்ச்சல், உயர் ரத்த அழுத்தம், ஆஸ்துமா மற்றும் பிற நீண்டகால வியாதிகளுக்கு சிறந்த மருத்துவ சிகிச்சை வழங்கப்படுகிறது."
    },
    iconName: "Stethoscope",
    features: {
      en: [
        "Acute fever evaluation & infectious disease management",
        "Hypertension (High BP) control & monitoring",
        "Respiratory infections, asthma & allergies",
        "Preventive health check-ups & lifestyle counseling"
      ],
      ta: [
        "காய்ச்சல் மற்றும் தீவிர தொற்று நோய் கண்டறிதல்",
        "உயர் ரத்த அழுத்த கட்டுப்பாடு மற்றும் சிகிச்சை",
        "சுவாசக் கோளாறுகள் மற்றும் ஒவ்வாமை சிகிச்சை",
        "முழு உடல் பரிசோதனை மற்றும் வாழ்க்கை முறை வழிகாட்டல்"
      ]
    },
    timing: {
      en: "Mon - Sat: 9:00 AM - 9:00 PM | Sun: 9:00 AM - 1:00 PM",
      ta: "திங்கள் - சனி: காலை 9:00 - இரவு 9:00 | ஞாயிறு: காலை 9:00 - மதியம் 1:00"
    }
  },
  {
    id: "cardiology-diagnostics",
    name: {
      en: "Cardiology & Cardiac Diagnostics",
      ta: "இதய நலம் & கார்டியாலஜி பரிசோதனைகள்"
    },
    shortDesc: {
      en: "Early heart disease detection, 2D Echocardiogram, Treadmill Stress Testing (TMT) and ECG.",
      ta: "2D எக்கோ, ட்ரெட்மில் (TMT) மற்றும் இ.சி.ஜி சோதனைகள் மூலம் இதய நலம் காத்தல்."
    },
    fullDesc: {
      en: "Equipped with advanced computerized cardiac diagnostic equipment including 2D Color Doppler Echocardiography, Computerized TMT, and 12-lead ECG for precise coronary risk assessment.",
      ta: "நவீன கலர் டாப்ளர் 2D எக்கோ, கணினிமயமாக்கப்பட்ட ட்ரெட்மில் சோதனை (TMT) மற்றும் 12-Lead ECG வசதிகளுடன் கூடிய இதய நல மையம்."
    },
    iconName: "HeartPulse",
    features: {
      en: [
        "Color Doppler 2D Echocardiography (ECHO)",
        "Computerized Tread Mill Test (TMT / Stress Test)",
        "12-Lead Digital ECG & Arrhythmia detection",
        "Post-infarct recovery & lipid management"
      ],
      ta: [
        "2D கலர் டாப்ளர் எக்கோ கார்டியோகிராபி",
        "கணினிமயமாக்கப்பட்ட ட்ரெட்மில் ஸ்ட்ரெஸ் டெஸ்ட் (TMT)",
        "12-Lead டிஜிட்டல் ECG பரிசோதனை",
        "கொலஸ்ட்ரால் மற்றும் இதய அடைப்பு தடுப்பு ஆலோசனை"
      ]
    },
    timing: {
      en: "Daily: 9:30 AM - 8:00 PM (Emergency on-call)",
      ta: "தினமும்: காலை 9:30 - இரவு 8:00 (அவசர நேரங்களில் 24 மணி நேரமும்)"
    }
  },
  {
    id: "diabetology",
    name: {
      en: "Diabetology & Endocrinology",
      ta: "சர்க்கரை நோய் & நாளமில்லா சுரப்பி பிரிவு"
    },
    shortDesc: {
      en: "Personalized diabetes reversal guidance, HbA1c monitoring, and diabetic foot/kidney protection.",
      ta: "சர்க்கரை நோய் கட்டுப்பாடு, HbA1c பரிசோதனை மற்றும் சிறுநீரக/பாத பாதுகாப்பு."
    },
    fullDesc: {
      en: "Specialized clinical focus on Type 1 and Type 2 Diabetes Mellitus, gestational diabetes during pregnancy, diabetic neuropathy, and kidney complication prevention.",
      ta: "டைப் 1 மற்றும் டைப் 2 சர்க்கரை நோய், கர்ப்பகால சர்க்கரை நோய் மற்றும் நீரிழிவு பாத/சிறுநீரக பாதுகாப்புக்கான சிறப்பு சிகிச்சை."
    },
    iconName: "Activity",
    features: {
      en: [
        "HbA1c testing (3-month average glucose)",
        "Urine Micro Albumin for diabetic kidney screen",
        "Diabetic foot examination & wound care",
        "Nutritional diet planning & insulin management"
      ],
      ta: [
        "HbA1c மூன்று மாத சராசரி சர்க்கரை அளவு பரிசோதனை",
        "சிறுநீரக பாதிப்பை முன்கூட்டியே கண்டறியும் Micro Albumin",
        "நீரிழிவு பாத பராமரிப்பு & காயம் ஆற்றுதல்",
        "உணவு கட்டுப்பாடு & இன்சுலின் வழிகாட்டல்"
      ]
    },
    timing: {
      en: "Mon - Sat: 9:00 AM - 8:00 PM",
      ta: "திங்கள் - சனி: காலை 9:00 - இரவு 8:00"
    }
  },
  {
    id: "general-laparoscopic-surgery",
    name: {
      en: "General & Laparoscopic Surgery",
      ta: "பொது & லேப்ராஸ்கோபிக் அறுவை சிகிச்சை"
    },
    shortDesc: {
      en: "Minimally invasive keyhole procedures, hernia repair, appendectomy & hydrocele surgery.",
      ta: "லேப்ராஸ்கோபிக் முறை அறுவை சிகிச்சை, குடல் இறக்கம் (Hernia), அப்பெண்டிக்ஸ் சிகிச்சை."
    },
    fullDesc: {
      en: "Modern sterile operating theatre offering both elective and emergency surgical procedures with shorter recovery times, minimal pain, and smaller scars.",
      ta: "நவீன அறுவை சிகிச்சை அரங்கம் (Operation Theatre) மூலம் மிகக் குறைந்த வலி மற்றும் விரைவான குணமடைதலுடன் அறுவை சிகிச்சைகள்."
    },
    iconName: "ShieldPlus",
    features: {
      en: [
        "Laparoscopic & open appendectomy",
        "Inguinal, umbilical & incisional hernia repair",
        "Hydrocele, varicocele & circumcision procedures",
        "Abscess drainage, minor surgical excisions & wound debridement"
      ],
      ta: [
        "லேப்ராஸ்கோபிக் அப்பெண்டிக்ஸ் அறுவை சிகிச்சை",
        "குடல் இறக்கம் (ஹெர்னியா) நவீன வலை சிகிச்சை",
        "ஹைட்ரோசீல், கட்டிகள் அகற்றுதல் மற்றும் காய பராமரிப்பு",
        "குறைந்த தழும்புகளுடன் விரைவான நிவாரணம்"
      ]
    },
    timing: {
      en: "OPD: Mon - Sat 10:00 AM - 6:00 PM | Surgeries by schedule",
      ta: "திங்கள் - சனி காலை 10:00 - மாலை 6:00 | அவசர அறுவை சிகிச்சைகள் 24/7"
    }
  },
  {
    id: "obstetrics-gynaecology",
    name: {
      en: "Obstetrics & Gynaecology",
      ta: "மகப்பேறு & பெண்கள் நலம் (Maternity & Gynaecology)"
    },
    shortDesc: {
      en: "Compassionate antenatal care, normal delivery, C-section and women's health wellness.",
      ta: "கர்ப்பகால கவனிப்பு, சுகப்பிரசவம், சிசேரியன் மற்றும் மகளிர் நலம்."
    },
    fullDesc: {
      en: "Dedicated care for women at every life stage, from menstrual irregularities and PCOS to healthy pregnancy monitoring, safe childbirth, and post-natal recovery.",
      ta: "கர்ப்பகால தொடர் பரிசோதனைகள், பாதுகாப்பான பிரசவம், பி.சி.ஓ.எஸ் (PCOS) மற்றும் பெண்களுக்கான ஹார்மோன் குறைபாடுகளுக்கு சிறப்பான மருத்துவ கவனிப்பு."
    },
    iconName: "Sparkles",
    features: {
      en: [
        "Antenatal check-ups & fetal ultrasound monitoring",
        "Safe normal deliveries & Cesarean section (C-Section)",
        "PCOS / PCOD, irregular periods & fibroid management",
        "Pre-conception guidance & post-delivery lactation support"
      ],
      ta: [
        "கர்ப்பகால பரிசோதனைகள் மற்றும் சிசு வளர்ச்சி ஸ்கேன்",
        "பாதுகாப்பான சுகப்பிரசவம் மற்றும் சிசேரியன் வசதி",
        "மாதவிடாய் கோளாறுகள் & PCOS சிகிச்சை",
        "தாய்ப்பால் வழிகாட்டல் & பிரசவத்திற்கு பிந்தைய பராமரிப்பு"
      ]
    },
    timing: {
      en: "Daily: 9:00 AM - 7:00 PM | Labour & Emergency: 24/7",
      ta: "தினமும்: காலை 9:00 - மாலை 7:00 | பிரசவ அவசர பிரிவு: 24 மணி நேரமும்"
    }
  },
  {
    id: "paediatrics",
    name: {
      en: "Paediatrics & Child Health",
      ta: "குழந்தைகள் நலம் & தடுப்பூசி பிரிவு"
    },
    shortDesc: {
      en: "Gentle healthcare for newborns, infants, children, and government-approved vaccination schedules.",
      ta: "பச்சிளம் குழந்தைகள், குழந்தைகளின் காய்ச்சல் சிகிச்சை மற்றும் அனைத்து தடுப்பூசிகளும்."
    },
    fullDesc: {
      en: "Friendly, gentle paediatricians dedicated to keeping your children healthy from birth through adolescence. Full immunization suite and growth milestone tracking.",
      ta: "குழந்தைகளின் உடல் வளர்ச்சி, தடுப்பூசி அட்டவணை, சளி-இருமல், காய்ச்சல் மற்றும் ஊட்டச்சத்து குறைபாடுகளுக்கான பரிவுமிக்க சிகிச்சை."
    },
    iconName: "Baby",
    features: {
      en: [
        "Newborn care & baby health assessments",
        "Complete immunization & painless vaccination options",
        "Paediatric infectious fevers, wheezing & gastroenteritis",
        "Growth and developmental milestone evaluation"
      ],
      ta: [
        "பச்சிளம் குழந்தை ஆரோக்கிய பரிசோதனை",
        "அனைத்து வகையான குழந்தைகளுக்கான தடுப்பூசிகள்",
        "குழந்தைகளுக்கான காய்ச்சல், மூச்சுத்திணறல், வயிற்றுப்போக்கு சிகிச்சை",
        "உடல் எடை & உயர வளர்ச்சி கண்காணிப்பு"
      ]
    },
    timing: {
      en: "Mon - Sat: 9:30 AM - 1:30 PM & 5:00 PM - 8:30 PM",
      ta: "திங்கள் - சனி: காலை 9:30 - 1:30 & மாலை 5:00 - 8:30"
    }
  },
  {
    id: "orthopaedics-trauma",
    name: {
      en: "Orthopaedics & Joint Care",
      ta: "எலும்பு, மூட்டு & முறிவு சிகிச்சை பிரிவு"
    },
    shortDesc: {
      en: "Fracture management, arthritis relief, back/neck pain treatment and plaster/splinting.",
      ta: "எலும்பு முறிவு, மூட்டு வலி, முதுகு தண்டுவட வலி மற்றும் மூட்டு தேய்மான சிகிச்சை."
    },
    fullDesc: {
      en: "Expert diagnosis and non-operative as well as surgical treatment for bone fractures, accidental injuries, osteoarthritis of the knee, sciatica, and cervical spondylosis.",
      ta: "விபத்து முறிவுகளுக்கு பிளாஸ்டர் மற்றும் அறுவை சிகிச்சை, மூட்டு தேய்மானத்திற்கு நவீன ஊசி/மருந்து சிகிச்சை மற்றும் இயன்முறை மருத்துவம்."
    },
    iconName: "Bone",
    features: {
      en: [
        "Accidental bone fracture fixation & emergency plastering",
        "Knee joint pain & osteoarthritis management",
        "Lumbar disc disease, backache & sciatica relief",
        "Osteoporosis screening & bone mineral density advice"
      ],
      ta: [
        "எலும்பு முறிவு சிகிச்சை மற்றும் மாவுக்கட்டு வசதி",
        "முழங்கால் மூட்டு வலி & தேய்மான சிகிச்சை",
        "முதுகு வலி, கழுத்து வலி மற்றும் நரம்பு அழுத்த நிவாரணம்",
        "எலும்பு பலவீனத்தை தடுக்கும் வழிகாட்டல்"
      ]
    },
    timing: {
      en: "Mon - Sat: 10:00 AM - 7:00 PM",
      ta: "திங்கள் - சனி: காலை 10:00 - இரவு 7:00"
    }
  },
  {
    id: "radiology-diagnostics",
    name: {
      en: "Diagnostic Imaging & Clinical Laboratory",
      ta: "கதிரியக்க ஸ்கேன் & முழு தானியங்கி ஆய்வகம்"
    },
    shortDesc: {
      en: "Fully automated biochemistry, haematology lab, Digital Chest X-Ray & Ultrasound Scan.",
      ta: "தானியங்கி ரத்த பரிசோதனை கூடம், டிஜிட்டல் எக்ஸ்-ரே மற்றும் அல்ட்ராசவுண்ட் ஸ்கேன்."
    },
    fullDesc: {
      en: "Equipped with state-of-the-art diagnostic machinery providing rapid, accurate test results for all 9 health check-up packages and daily outpatient requirements.",
      ta: "அனைத்து 9 முழு உடல் பரிசோதனை திட்டங்களுக்கும் அதிவேக மற்றும் துல்லியமான மருத்துவ முடிவுகளை வழங்கும் நவீன ஆய்வகம்."
    },
    iconName: "Microscope",
    features: {
      en: [
        "Fully automated cell counters & biochemistry analyzers",
        "High-frequency Digital X-Ray with instant digital reporting",
        "Color Ultrasound scan for abdomen, pelvis & obstetrics",
        "Same-day report delivery with computerized accuracy"
      ],
      ta: [
        "முழு தானியங்கி ரத்த அணுக்கள் & உயிர்வேதியியல் கருவிகள்",
        "உயர் துல்லிய டிஜிட்டல் எக்ஸ்-ரே வசதி",
        "அடிவயிறு மற்றும் கர்ப்பகால அல்ட்ராசவுண்ட் ஸ்கேன்",
        "அன்றைய தினமே துல்லியமான கணினி அறிக்கை"
      ]
    },
    timing: {
      en: "Lab & X-Ray open from 7:00 AM - 9:00 PM (Emergency: 24/7)",
      ta: "ஆய்வகம் & எக்ஸ்-ரே: காலை 7:00 - இரவு 9:00 (அவசர நேரங்களில் 24 மணி நேரமும்)"
    }
  }
];
