export interface InsuranceProvider {
  id: string;
  name: string;
  type: 'government' | 'private_tpa' | 'corporate';
  category: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  popular?: boolean;
}

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    id: "cmchis",
    name: "Chief Minister's Comprehensive Health Insurance (CMCHIS)",
    type: "government",
    category: {
      en: "Tamil Nadu Government Scheme",
      ta: "தமிழ்நாடு அரசு மருத்துவக் காப்பீடு"
    },
    description: {
      en: "Assistance and guidance for eligible smart ration card holders under the Tamil Nadu Government CMCHIS scheme.",
      ta: "தமிழ்நாடு முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டு திட்ட வழிகாட்டல் மற்றும் தகுதியான சிகிச்சைகள்."
    },
    popular: true
  },
  {
    id: "star-health",
    name: "Star Health & Allied Insurance",
    type: "private_tpa",
    category: {
      en: "Cashless Health Insurance",
      ta: "ரொக்கமில்லா மருத்துவக் காப்பீடு"
    },
    description: {
      en: "Direct cashless pre-authorization desk assistance for individual, family, and senior citizen Star Health policies.",
      ta: "ஸ்டார் ஹெல்த் பாலிசிதாரர்களுக்கான நேரடி ரொக்கமில்லா சிகிச்சை முன்-அனுமதி உதவி மையம்."
    },
    popular: true
  },
  {
    id: "medi-assist",
    name: "Medi Assist TPA",
    type: "private_tpa",
    category: {
      en: "Third Party Administrator",
      ta: "டி.பி.ஏ காப்பீட்டு சேவை"
    },
    description: {
      en: "Seamless cashless hospitalization claims processing for corporate and individual policies managed by Medi Assist.",
      ta: "மெடி அசிஸ்ட் மூலம் நிர்வகிக்கப்படும் பாலிசிகளுக்கு துரித அனுமதி மற்றும் உரிமைகோரல் உதவி."
    },
    popular: true
  },
  {
    id: "icici-lombard",
    name: "ICICI Lombard General Insurance",
    type: "private_tpa",
    category: {
      en: "Private Health Insurance",
      ta: "தனியார் மருத்துவக் காப்பீடு"
    },
    description: {
      en: "Pre-authorization support for inpatient admissions covered under ICICI Lombard health plans.",
      ta: "ஐசிஐசிஐ லொம்பார்ட் பாலிசிதாரர்களுக்கு மருத்துவமனையில் தங்கி சிகிச்சை பெறுவதற்கான அனுமதி உதவி."
    }
  },
  {
    id: "vidal-health",
    name: "Vidal Health TPA",
    type: "private_tpa",
    category: {
      en: "Third Party Administrator",
      ta: "டி.பி.ஏ காப்பீட்டு சேவை"
    },
    description: {
      en: "Coordination of claim documents, query resolution, and reimbursement filings for Vidal Health policyholders.",
      ta: "விடால் ஹெல்த் காப்பீட்டு திட்டங்களுக்கான ஆவண சரிபார்ப்பு மற்றும் சிகிச்சை உதவி மையம்."
    }
  },
  {
    id: "mdindia",
    name: "MDIndia Health Insurance TPA",
    type: "private_tpa",
    category: {
      en: "Third Party Administrator",
      ta: "டி.பி.ஏ காப்பீட்டு சேவை"
    },
    description: {
      en: "Cashless desk liaison for public sector and private insurance firms administered by MDIndia.",
      ta: "எம்.டி இந்தியா மூலம் செயல்படுத்தப்படும் பொதுத்துறை மற்றும் தனியார் காப்பீட்டு உரிமைகோரல் சேவை."
    }
  }
];

export const REQUIRED_DOCUMENTS = {
  en: [
    "Health Insurance Card or Policy Document copy with Policy Number",
    "Government Photo ID Proof (Aadhaar Card, Voter ID, or Driving Licence)",
    "Employee ID Card (for corporate group insurance coverage)",
    "Previous medical records, prescription slips, and recent investigation reports",
    "Treating doctor's initial admission advice / diagnostic requisition"
  ],
  ta: [
    "மருத்துவக் காப்பீட்டு அட்டை அல்லது பாலிசி ஆவணத்தின் நகல் (Policy Number)",
    "அரசு புகைப்பட அடையாள அட்டை (ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை)",
    "நிறுவன பணியாளர் அட்டை (கார்ப்பரேட் குழு காப்பீட்டு திட்டங்களுக்கு)",
    "முந்தைய மருத்துவ பரிசோதனை அறிக்கைகள் மற்றும் மருந்து சீட்டுகள்",
    "மருத்துவரின் அனுமதி பரிந்துரை கடிதம் (Doctor's Admission Advice)"
  ]
};
