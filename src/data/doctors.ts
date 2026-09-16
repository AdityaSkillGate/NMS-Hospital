export interface Doctor {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  qualification: string;
  role: 'chief' | 'visiting' | 'resident';
  roleTitle: {
    en: string;
    ta: string;
  };
  departmentId: string;
  departmentName: {
    en: string;
    ta: string;
  };
  specialityFocus: {
    en: string;
    ta: string;
  };
  hospitalDesignation?: string;
  opdTimings: {
    en: string;
    ta: string;
  };
  visitFrequency: {
    en: string;
    ta: string;
  };
  phone?: string;
}

// 1. CHIEF RESIDENT DOCTORS (FOUNDERS & CHIEF PHYSICIANS)
export const CHIEF_DOCTORS: Doctor[] = [
  {
    id: "dr-s-nallamuthusamy",
    name: {
      en: "Dr. S. Nallamuthusamy",
      ta: "Dr. S. நல்லமுத்துசாமி"
    },
    qualification: "MD.,",
    role: "chief",
    roleTitle: {
      en: "Chief Consultant Physician & Director",
      ta: "முதன்மையான பொது நல & இதய சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "cardiology-diabetology-general",
    departmentName: {
      en: "Heart, Diabetes & General Medicine",
      ta: "இருதய நோய், சர்க்கரை நோய் மற்றும் பொது நலம்"
    },
    specialityFocus: {
      en: "Heart Diseases, Diabetes Management & General Adult Medicine",
      ta: "இருதய நோய், சர்க்கரை நோய் மற்றும் பொது நல சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Daily: Morning 9:30 AM - 1:30 PM | Evening 5:00 PM - 8:30 PM",
      ta: "தினமும்: காலை 9:30 - 1:30 | மாலை 5:00 - 8:30"
    },
    visitFrequency: {
      en: "Daily Available (முழுநேர மருத்துவர்)",
      ta: "தினமும் ஆலோசனைகள் உண்டு"
    },
    phone: "04636 225315, 225958"
  },
  {
    id: "dr-vasuki-nallamuthusamy",
    name: {
      en: "Dr. Vasuki Nallamuthusamy",
      ta: "Dr. வாசுகி நல்லமுத்துசாமி"
    },
    qualification: "MBBS., DGO.,",
    role: "chief",
    roleTitle: {
      en: "Chief Obstetrician & Gynaecologist",
      ta: "முதன்மையான மகப்பேறு & பெண்கள் நல சிறப்பு மருத்துவர்"
    },
    departmentId: "obstetrics-gynaecology-infertility",
    departmentName: {
      en: "Maternity, Gynaecology & Infertility",
      ta: "மகப்பேறு மற்றும் குழந்தை பேறின்மை"
    },
    specialityFocus: {
      en: "Pregnancy Care, Normal Delivery, Cesarean & Infertility Treatments",
      ta: "மகப்பேறு மற்றும் குழந்தை பேறின்மை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Daily: Morning 9:30 AM - 2:00 PM | Evening 5:00 PM - 7:30 PM",
      ta: "தினமும்: காலை 9:30 - 2:00 | மாலை 5:00 - 7:30"
    },
    visitFrequency: {
      en: "Daily Available (முழுநேர மருத்துவர்)",
      ta: "தினமும் ஆலோசனைகள் உண்டு"
    },
    phone: "04636 225315, 225958"
  }
];

// 2. WEEKLY VISITING SPECIALISTS (SPECIAL APPEARANCE / வாராந்திர வருகை தரும் சிறப்பு நிபுணர்கள்)
export const VISITING_DOCTORS: Doctor[] = [
  {
    id: "dr-e-kandhasamy-kumar",
    name: {
      en: "Dr. E. Kandhasamy @ Kumar",
      ta: "Dr. E. கந்தசாமி @ குமார்"
    },
    qualification: "MD., DM (Gastro)",
    role: "visiting",
    roleTitle: {
      en: "Visiting Gastroenterologist (Prof. of Gastro, TVMCH)",
      ta: "வயிறு, குடல் மற்றும் மஞ்சள்காமாலை சிறப்பு நிபுணர்"
    },
    hospitalDesignation: "Prof. of Gastro (TVMCH)",
    departmentId: "gastroenterology",
    departmentName: {
      en: "Medical Gastroenterology & Liver",
      ta: "வயிறு, குடல், மஞ்சள்காமாலை சிறப்பு பிரிவு"
    },
    specialityFocus: {
      en: "Stomach, Intestine, Liver & Jaundice Specialist",
      ta: "வயிறு, குடல், மஞ்சள்காமாலை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Designated Session (Prior Appointment Required)",
      ta: "வாராந்திர வருகை (முன் பதிவு அவசியம்)"
    },
    visitFrequency: {
      en: "Weekly Once (வாரத்திற்கு ஒருமுறை)",
      ta: "வாரத்திற்கு ஒருமுறை வருகை"
    }
  },
  {
    id: "dr-srinivasan-cardio",
    name: {
      en: "Dr. Srinivasan",
      ta: "Dr. சீனிவாசன்"
    },
    qualification: "MD., DNB (Cardio).,",
    role: "visiting",
    roleTitle: {
      en: "Visiting Senior Cardiologist",
      ta: "இருதய நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "cardiology",
    departmentName: {
      en: "Cardiology",
      ta: "இருதய நோய் பிரிவு"
    },
    specialityFocus: {
      en: "Coronary Artery Disease & Advanced Heart Care",
      ta: "இருதய நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Session (Prior Appointment)",
      ta: "வாராந்திர வருகை (முன் அனுமதி)"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-arunachalam-cardio",
    name: {
      en: "Dr. Arunachalam",
      ta: "Dr. அருணாச்சலம்"
    },
    qualification: "MD., DM (Cardio).,",
    role: "visiting",
    roleTitle: {
      en: "Visiting Cardiologist",
      ta: "இருதய நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "cardiology",
    departmentName: {
      en: "Cardiology",
      ta: "இருதய நோய் பிரிவு"
    },
    specialityFocus: {
      en: "Cardiology & Interventional Evaluation",
      ta: "இருதய நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Consultation",
      ta: "வாராந்திர சிறப்பு ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-g-nirmalkumar-surgery",
    name: {
      en: "Dr. G. Nirmalkumar",
      ta: "Dr. G. நிர்மல்குமார்"
    },
    qualification: "MS (Gen Surg)., FIAGES., FACRSI.,",
    role: "visiting",
    roleTitle: {
      en: "Senior Laparoscopic & General Surgeon",
      ta: "அறுவை சிகிச்சை, லேப்ராஸ்கோபிக் சிறப்பு நிபுணர்"
    },
    hospitalDesignation: "Senior Asst Prof. TVMCH",
    departmentId: "surgery",
    departmentName: {
      en: "General & Laparoscopic Surgery",
      ta: "பொது & லேப்ராஸ்கோபிக் அறுவை சிகிச்சை"
    },
    specialityFocus: {
      en: "Keyhole Laparoscopic Procedures & General Surgeries",
      ta: "அறுவை சிகிச்சை, லேப்ராஸ்கோபிக் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Surgical OPD & Scheduled Cases",
      ta: "வாராந்திர ஆலோசனை & அறுவை சிகிச்சை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-karuppasamy-surgery",
    name: {
      en: "Dr. Karuppasamy",
      ta: "Dr. கருப்பசாமி"
    },
    qualification: "MS (Gen. Surg)., DA.,",
    role: "visiting",
    roleTitle: {
      en: "Surgeon & Anaesthesiologist",
      ta: "அறுவை சிகிச்சை & மயக்க மருந்து சிறப்பு நிபுணர்"
    },
    departmentId: "surgery",
    departmentName: {
      en: "General Surgery & Anaesthesia",
      ta: "அறுவை சிகிச்சை மற்றும் மயக்க மருந்து"
    },
    specialityFocus: {
      en: "General Surgical Care & Pain Management",
      ta: "அறுவை சிகிச்சை மற்றும் மயக்க மருந்து சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Consultation",
      ta: "வாராந்திர ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-n-babuji-paed-surg",
    name: {
      en: "Dr. N. Babuji",
      ta: "Dr. N. பாபுஜி"
    },
    qualification: "MS., MCh (Paed Surg)",
    role: "visiting",
    roleTitle: {
      en: "Visiting Paediatric Surgeon",
      ta: "குழந்தைகள் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "paediatric-surgery",
    departmentName: {
      en: "Paediatric Surgery",
      ta: "குழந்தைகள் அறுவை சிகிச்சை பிரிவு"
    },
    specialityFocus: {
      en: "Congenital & Pediatric Surgical Interventions",
      ta: "குழந்தைகள் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Visit by Appointment",
      ta: "வாராந்திர வருகை (முன்பதிவு முறை)"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-a-v-gokul-uro",
    name: {
      en: "Dr. A. V. Gokul",
      ta: "Dr. A. V. கோகுல்"
    },
    qualification: "MS., MCh (Uro).,",
    role: "visiting",
    roleTitle: {
      en: "Visiting Urologist & Kidney Stone Specialist",
      ta: "சிறுநீரகவியல், சிறுநீரக கல் அகற்றுதல் சிறப்பு நிபுணர்"
    },
    departmentId: "urology",
    departmentName: {
      en: "Urology & Nephro-Care",
      ta: "சிறுநீரகவியல் & கல் அகற்றுதல் பிரிவு"
    },
    specialityFocus: {
      en: "Kidney Stones, Prostate, Bladder & Urological Surgeries",
      ta: "சிறுநீரகவியல், சிறுநீரக கல் அகற்றுதல், சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Special Consultation",
      ta: "வாராந்திர சிறப்பு பரிசோதனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-madhusudhanan-gastro",
    name: {
      en: "Dr. Madhusudhanan J",
      ta: "Dr. மதுசூதனன் J"
    },
    qualification: "MBBS., MS., MCh (Gastro)",
    role: "visiting",
    roleTitle: {
      en: "Surgical Gastroenterologist & Liver Transplant Fellow",
      ta: "கல்லீரல், கணைய அறுவை சிகிச்சை நிபுணர்"
    },
    hospitalDesignation: "Fellowship in Liver Transplantation",
    departmentId: "surgical-gastro",
    departmentName: {
      en: "Surgical Gastroenterology",
      ta: "இரைப்பை, குடல், கல்லீரல் அறுவை சிகிச்சை"
    },
    specialityFocus: {
      en: "Liver, Pancreas, Intestinal & Biliary Surgeries",
      ta: "இரைப்பை, குடல், கல்லீரல், கணைய அறுவை சிகிச்சை நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Visit by Appointment",
      ta: "வாராந்திர வருகை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-c-edwin-emperor-plastic",
    name: {
      en: "Dr. C. Edwin Emperor",
      ta: "Dr. C. எட்வின் எம்பெரர்"
    },
    qualification: "MCh (Plastic), MS (Gen), DLO.,",
    role: "visiting",
    roleTitle: {
      en: "Plastic & Reconstructive Surgeon",
      ta: "பிளாஸ்டிக் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "plastic-surgery",
    departmentName: {
      en: "Plastic & Reconstructive Surgery",
      ta: "பிளாஸ்டிக் அறுவை சிகிச்சை பிரிவு"
    },
    specialityFocus: {
      en: "Cosmetic, Reconstructive, Burns & Scar Revision",
      ta: "பிளாஸ்டிக் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Consultation",
      ta: "வாராந்திர ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-r-deivanayagam-oncology",
    name: {
      en: "Dr. R. Deivanayagam",
      ta: "Dr. R. தெய்வநாயகம்"
    },
    qualification: "MBBS., DA., DNB (RT)., DM (Med. Onco).,",
    role: "visiting",
    roleTitle: {
      en: "Chief Medical Oncologist (Prof. & HOD TVMCH)",
      ta: "கேன்சர் நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    hospitalDesignation: "Prof. And HOD TVMCH",
    departmentId: "oncology",
    departmentName: {
      en: "Medical Oncology & Cancer Care",
      ta: "புற்றுநோய் (Cancer) சிறப்பு பிரிவு"
    },
    specialityFocus: {
      en: "Medical Oncology, Cancer Screening & Chemotherapy",
      ta: "கேன்சர் நோய் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Specialized Cancer Clinic",
      ta: "வாராந்திர புற்றுநோய் ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-s-joeldhanapandian-neuro",
    name: {
      en: "Dr. S. Joeldhanapandian",
      ta: "Dr. S. ஜோயல் தனபாண்டியன்"
    },
    qualification: "MS., MCh (Neuro).,",
    role: "visiting",
    roleTitle: {
      en: "Senior Neuro Surgeon (HOD of Neuro Surgery, TVMCH)",
      ta: "மூளை அறுவை சிகிச்சை & நரம்பியல் நிபுணர்"
    },
    hospitalDesignation: "HOD Of Neuro Surgery (TVMCH)",
    departmentId: "neurosurgery",
    departmentName: {
      en: "Neurosurgery & Spine Care",
      ta: "மூளை & நரம்பியல் அறுவை சிகிச்சை"
    },
    specialityFocus: {
      en: "Brain & Spine Surgery, Head Trauma & Sciatica",
      ta: "மூளை அறுவை சிகிச்சை மற்றும் நரம்பியல் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Special Consultation",
      ta: "வாராந்திர நரம்பியல் ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-t-balasugumar-ortho",
    name: {
      en: "Dr. T. Balasugumar",
      ta: "Dr. T. பாலசுகுமார்"
    },
    qualification: "MBBS., MS (Ortho)",
    role: "visiting",
    roleTitle: {
      en: "Orthopaedic & Joint Replacement Surgeon",
      ta: "எலும்பு முறிவு மற்றும் மூட்டு மாற்று அறுவை சிகிச்சை நிபுணர்"
    },
    hospitalDesignation: "Fellowship in Arthroscopy (UK)",
    departmentId: "orthopaedics",
    departmentName: {
      en: "Orthopaedics & Joint Replacement",
      ta: "எலும்பு, மூட்டு மாற்று அறுவை சிகிச்சை"
    },
    specialityFocus: {
      en: "Arthroscopy (UK), Knee/Hip Replacement & Fractures",
      ta: "எலும்பு முறிவு மற்றும் மூட்டு மாற்று அறுவை சிகிச்சை நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Joint & Fracture Clinic",
      ta: "வாராந்திர மூட்டு மாற்று ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-balasubramaniyan-paed",
    name: {
      en: "Dr. Balasubramaniyan",
      ta: "Dr. பாலசுப்பிரமணியன்"
    },
    qualification: "MD., DCH.,",
    role: "visiting",
    roleTitle: {
      en: "Visiting Paediatrician",
      ta: "குழந்தைகள் நல சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "paediatrics",
    departmentName: {
      en: "Paediatrics & Child Health",
      ta: "குழந்தைகள் நல பிரிவு"
    },
    specialityFocus: {
      en: "Pediatric Fevers, Newborn Care & Childhood Illnesses",
      ta: "குழந்தைகள் நல சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Consultation",
      ta: "வாராந்திர ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-venkatachalapathy-facial",
    name: {
      en: "Dr. Venkatachalapathy",
      ta: "Dr. வெங்கடாசலபதி"
    },
    qualification: "MDS.,",
    role: "visiting",
    roleTitle: {
      en: "Facial & Maxillofacial Surgeon",
      ta: "முகம் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "maxillofacial",
    departmentName: {
      en: "Facial & Maxillofacial Surgery",
      ta: "முக அறுவை சிகிச்சை பிரிவு"
    },
    specialityFocus: {
      en: "Facial Bone Trauma, Jaw Reconstruction & Maxillofacial Surgeries",
      ta: "முகம் அறுவை சிகிச்சை சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Scheduled Sessions",
      ta: "வாராந்திர வருகை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-arulselvi-scan",
    name: {
      en: "Dr. Arulselvi",
      ta: "Dr. அருள்செல்வி"
    },
    qualification: "MBBS., DMRD.,",
    role: "visiting",
    roleTitle: {
      en: "Sonologist & Scan Specialist",
      ta: "ஸ்கேன் சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "radiology",
    departmentName: {
      en: "Ultrasound & Radiology",
      ta: "அல்ட்ராசவுண்ட் ஸ்கேன் பிரிவு"
    },
    specialityFocus: {
      en: "Abdomen, Pelvis, Obstetric & Color Doppler Sonography",
      ta: "ஸ்கேன் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Diagnostic Scan Session",
      ta: "வாராந்திர ஸ்கேன் பரிசோதனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  },
  {
    id: "dr-k-jayanthi-scan",
    name: {
      en: "Dr. K. Jayanthi",
      ta: "Dr. K. ஜெயந்தி"
    },
    qualification: "MBBS., DMRD.,",
    role: "visiting",
    roleTitle: {
      en: "Radiologist & Scan Specialist",
      ta: "ஸ்கேன் சிறப்பு மருத்துவ நிபுணர்"
    },
    departmentId: "radiology",
    departmentName: {
      en: "Ultrasound & Diagnostic Imaging",
      ta: "கதிரியக்கம் & ஸ்கேன் பிரிவு"
    },
    specialityFocus: {
      en: "Diagnostic Ultrasound, Antenatal Anomaly & Doppler",
      ta: "ஸ்கேன் சிறப்பு மருத்துவ நிபுணர்"
    },
    opdTimings: {
      en: "Weekly Scan Sessions",
      ta: "வாராந்திர ஸ்கேன் ஆலோசனை"
    },
    visitFrequency: {
      en: "Weekly Once",
      ta: "வாரத்திற்கு ஒருமுறை"
    }
  }
];

// 3. RESIDENT MEDICAL OFFICERS (GENERAL PHYSICIANS ON 24/7 CASUALTY & OPD DUTY)
export const RESIDENT_DOCTORS: Doctor[] = [
  {
    id: "dr-nms-seenikarthick",
    name: {
      en: "Dr. NMS. Seenikarthick",
      ta: "Dr. NMS. சீனிகார்த்திக்"
    },
    qualification: "MBBS.,",
    role: "resident",
    roleTitle: {
      en: "Resident General Physician",
      ta: "பொது நல மருத்துவர்"
    },
    departmentId: "casualty-general",
    departmentName: {
      en: "General OPD & Casualty",
      ta: "பொது நலம் & அவசர சிகிச்சை"
    },
    specialityFocus: {
      en: "Acute Fevers, Adult Care & 24/7 Emergency Triage",
      ta: "பொது நல மருத்துவர் (General Physician)"
    },
    opdTimings: {
      en: "Daily Routine OPD & Duty Roster",
      ta: "தினசரி மருத்துவ ஆலோசனை"
    },
    visitFrequency: {
      en: "Full-Time Resident",
      ta: "முழுநேர மருத்துவர்"
    }
  },
  {
    id: "dr-a-narmadha",
    name: {
      en: "Dr. A. Narmadha",
      ta: "Dr. A. நர்மதா"
    },
    qualification: "MBBS.,",
    role: "resident",
    roleTitle: {
      en: "Resident General Physician",
      ta: "பொது நல மருத்துவர்"
    },
    departmentId: "casualty-general",
    departmentName: {
      en: "General OPD & Casualty",
      ta: "பொது நலம் & அவசர சிகிச்சை"
    },
    specialityFocus: {
      en: "General Health, Infectious Diseases & Inpatient Care",
      ta: "பொது நல மருத்துவர் (General Physician)"
    },
    opdTimings: {
      en: "Daily Routine OPD & Duty Roster",
      ta: "தினசரி மருத்துவ ஆலோசனை"
    },
    visitFrequency: {
      en: "Full-Time Resident",
      ta: "முழுநேர மருத்துவர்"
    }
  }
];

export const DOCTORS: Doctor[] = [
  ...CHIEF_DOCTORS,
  ...VISITING_DOCTORS,
  ...RESIDENT_DOCTORS
];
