export interface HospitalFacility {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  shortDesc: {
    en: string;
    ta: string;
  };
  details: {
    en: string;
    ta: string;
  };
  iconName: string;
  highlight: {
    en: string;
    ta: string;
  };
}

export const FACILITIES: HospitalFacility[] = [
  {
    id: "diagnostic-laboratory",
    name: {
      en: "Automated Clinical Laboratory",
      ta: "முழு தானியங்கி மருத்துவ ஆய்வகம்"
    },
    shortDesc: {
      en: "State-of-the-art cell counters and biochemistry analyzers delivering precision results for all 9 health check packages.",
      ta: "அனைத்து 9 மருத்துவ பரிசோதனை தொகுப்புகளுக்கும் அதிதுல்லியமான முடிவுகளை தரும் தானியங்கி ஆய்வகம்."
    },
    details: {
      en: "Operates 7 days a week with barcoded samples, strict internal quality controls, and certified lab technicians. Blood sugar, liver profiles, kidney panels, and complete blood counts generated with rapid turnaround times.",
      ta: "வாரத்தின் 7 நாட்களும் இயங்கும் பார்-கோடு முறை ஆய்வகம். இரத்த சர்க்கரை, கல்லீரல், சிறுநீரக பரிசோதனைகள் அன்றைய தினமே துல்லியமாக வழங்கப்படுகின்றன."
    },
    iconName: "TestTubes",
    highlight: {
      en: "Same Day Computerized Reports",
      ta: "அன்றைய தினமே கணினி அறிக்கை"
    }
  },
  {
    id: "digital-xray-imaging",
    name: {
      en: "Digital High-Frequency X-Ray",
      ta: "டிஜிட்டல் உயர் துல்லிய எக்ஸ்-ரே"
    },
    shortDesc: {
      en: "Low-radiation high-definition digital radiology for chest, spine, bones, and joint diagnostics.",
      ta: "குறைந்த கதிர்வீச்சு கொண்ட உயர்தர டிஜிட்டல் எக்ஸ்-ரே வசதி."
    },
    details: {
      en: "Minimizes patient radiation exposure while providing ultra-sharp radiological imaging for detecting bone fractures, lung infections, pneumonia, cardiomegaly, and joint degeneration.",
      ta: "எலும்பு முறிவு, நெஞ்சு சளி, நிமோனியா மற்றும் எலும்பு மூட்டுகளின் நிலையை உடனடியாக துல்லியமாக படம் பிடிக்கும் நவீன கருவி."
    },
    iconName: "Scan",
    highlight: {
      en: "Low-Radiation Digital Sensor",
      ta: "குறைந்த கதிர்வீச்சு டிஜிட்டல் சென்சார்"
    }
  },
  {
    id: "ultrasound-scanning",
    name: {
      en: "Ultrasound & Color Doppler Scan",
      ta: "அல்ட்ராசவுண்ட் & கலர் டாப்ளர் ஸ்கேன்"
    },
    shortDesc: {
      en: "High-resolution ultrasound imaging for whole abdomen, pelvic organs, prostate, and obstetric antenatal scans.",
      ta: "அடிவயிறு, கல்லீரல், சிறுநீரகம், புரோஸ்டேட் மற்றும் கர்ப்பகால சிசு வளர்ச்சி ஸ்கேன்."
    },
    details: {
      en: "Enables non-invasive scanning of the gallbladder (gallstones), kidneys (calculi), liver, urinary bladder, prostate enlargement in senior citizens, and fetal well-being in expecting mothers.",
      ta: "சிறுநீரக கல், பித்தப்பை கல், முதியவர்களுக்கான புரோஸ்டேட் வீக்கம் மற்றும் கர்ப்பிணி பெண்களுக்கான சிசு வளர்ச்சி ஆகியவற்றை அறிய உதவும்."
    },
    iconName: "Layers",
    highlight: {
      en: "High-Resolution Sonography",
      ta: "உயர் துல்லிய சோனோகிராபி"
    }
  },
  {
    id: "cardiac-echo-tmt",
    name: {
      en: "2D ECHO & Computerized TMT",
      ta: "2D எக்கோ & கணினிமயமாக்கப்பட்ட ட்ரெட்மில் (TMT)"
    },
    shortDesc: {
      en: "Advanced cardiac evaluation suite for heart valve motion, ejection fraction, and exercise stress testing.",
      ta: "இதய தசைகளின் இயக்கம், ரத்த ஓட்டம் மற்றும் ட்ரெட்மில் உடற்பயிற்சி இதய சோதனை."
    },
    details: {
      en: "Crucial for patients with chest discomfort, hypertension, or high cholesterol. Directly included in the Master Health Check-up (Heart Check-Up) package at transparent rates.",
      ta: "நெஞ்சு படபடப்பு, உயர் ரத்த அழுத்தம் உள்ளவர்களுக்கு அவசியமான பரிசோதனை. மாஸ்டர் இதய பரிசோதனை தொகுப்பில் வெளிப்படையான கட்டணத்தில் கிடைக்கிறது."
    },
    iconName: "HeartPulse",
    highlight: {
      en: "Dedicated Cardiac Suite",
      ta: "சிறப்பு இதய நல மையம்"
    }
  },
  {
    id: "casualty-emergency-care",
    name: {
      en: "24/7 Casualty & Trauma Unit",
      ta: "24/7 அவசர சிகிச்சை & விபத்து பிரிவு"
    },
    shortDesc: {
      en: "Equipped casualty department with dedicated doctor and trained nursing staff on active duty day and night.",
      ta: "இரவும் பகலும் தொடர்ந்து செயல்படும் மருத்துவர்கள் மற்றும் செவிலியர்கள் கொண்ட அவசர பிரிவு."
    },
    details: {
      en: "Immediate emergency triage, nebulization, intravenous fluids, wound dressing, fracture immobilization, and stabilization for acute cardiac or medical emergencies.",
      ta: "திடீர் மூச்சுத்திணறல், நெஞ்சு வலி, விபத்து காயங்கள் மற்றும் அவசர நிலைகளுக்கு உடனடியாக மருத்துவ சிகிச்சை அளிக்கப்படுகிறது."
    },
    iconName: "Ambulance",
    highlight: {
      en: "24/7 Doctor On Duty",
      ta: "24/7 மருத்துவர் தயார் நிலை"
    }
  },
  {
    id: "inpatient-daycare-wards",
    name: {
      en: "Clean Inpatient & Day-Care Wards",
      ta: "தூய்மையான உள்நோயாளி & பகல்நேர படுக்கை வசதி"
    },
    shortDesc: {
      en: "Hygienic, comfortable general wards, semi-private rooms, and private air-conditioned patient suites.",
      ta: "சுத்தமான பொது படுக்கை பிரிவு மற்றும் குளிரூட்டப்பட்ட தனி அறைகள்."
    },
    details: {
      en: "Maintained with strict hospital infection control protocols, adjustable medical beds, 24/7 nursing call systems, attendant seating, and continuous medical supervision.",
      ta: "நோயாளிகளுக்கு அமைதியான, தூய்மையான மற்றும் மருத்துவ கவனிப்பு நிறைந்த வசதியான தங்கும் சூழல்."
    },
    iconName: "Bed",
    highlight: {
      en: "Sanitized Clinical Comfort",
      ta: "கிருமிநீக்கம் செய்யப்பட்ட தூய சூழல்"
    }
  },
  {
    id: "pharmacy-24x7",
    name: {
      en: "Hospital Pharmacy Service",
      ta: "மருத்துவமனை மருந்தகம்"
    },
    shortDesc: {
      en: "Genuine branded pharmaceuticals, essential emergency injections, surgical consumables, and pediatric medicines.",
      ta: "அனைத்து அவசர மருந்துகள், ஊசிகள் மற்றும் தரமான மருந்து மாத்திரைகள்."
    },
    details: {
      en: "Stocked with authentic pharmaceutical medications stored under temperature-controlled conditions. Serves outpatients, inpatients, and emergency walk-ins without delays.",
      ta: "சரியான வெப்பநிலையில் பராமரிக்கப்படும் தரமான மருந்துகள் மருத்துவமனை நோயாளிகளுக்கும் பொதுமக்களுக்கும் உடனடியாக வழங்கப்படுகிறது."
    },
    iconName: "Pill",
    highlight: {
      en: "Temperature-Controlled Storage",
      ta: "சரியான குளிர்சாதன பராமரிப்பு"
    }
  }
];
