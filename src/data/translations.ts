export type Language = 'en' | 'ta';

export const TRANSLATIONS = {
  en: {
    hospitalName: "NMS Hospital",
    tagline: "Compassionate Care. Trusted Medical Support.",
    secondaryTagline: "Quality Healthcare, Closer to Your Family.",
    locationBadge: "Main Road (Tirunelveli Rd), Sankarankovil",
    emergencyPhone: "04636 225315",
    generalPhone: "04636 225315, 225958",
    email: "nmshospital@yahoo.co.in",
    website: "www.nmshospital.com",
    whatsappNumber: "+919442000000",
    addressText: "No. 169, C1 Main Road, Sankarankovil – 627756, Tenkasi District, Tamil Nadu, India",
    
    // Top Bar
    topBar: {
      emergency: "24/7 Emergency & Casualty:",
      location: "Sankarankovil, Tenkasi District",
      opdTiming: "OPD: 9:30 AM - 8:30 PM",
      quickWhatsApp: "Chat with Us",
      languageToggle: "தமிழ்"
    },

    // Nav
    nav: {
      home: "Home",
      packages: "Health Packages",
      departments: "Departments",
      doctors: "Doctors",
      facilities: "Facilities",
      about: "About Us",
      faq: "FAQ",
      contact: "Contact",
      bookAppointment: "Book Appointment",
      emergencyCall: "Emergency: 04636 225315"
    },

    // Hero Section
    hero: {
      badge: "Multispeciality Healthcare & Diagnostics",
      headingLine1: "Trusted Healthcare Services in",
      headingLine2: "Sankarankovil",
      subheading: "Accessible, compassionate, and patient-focused medical care for families in Sankarankovil, Tenkasi, Puliyangudi, and surrounding regions.",
      btnAppointment: "Book an Appointment",
      btnPackages: "Explore Health Packages",
      btnWhatsApp: "WhatsApp Us",
      btnCall: "Call Reception",
      stat1Number: "24/7",
      stat1Label: "Casualty & Emergency",
      stat2Number: "9",
      stat2Label: "Transparent Check-Up Packages",
      stat3Number: "₹195",
      stat3Label: "Basic Check-Up Starting At",
      stat4Number: "100%",
      stat4Label: "Dedicated Patient Care"
    },

    // Diagnostic Packages Hub
    packagesSection: {
      badge: "Hospital Diagnostic Services",
      title: "Full Body Check-Up Packages",
      subtitle: "Authentic, transparent medical packages directly from NMS Hospital diagnostic tariff board. No hidden fees, same-day reports.",
      filterAll: "All Packages (9)",
      filterRoutine: "Routine & Basic",
      filterCardiac: "Cardiac / Heart",
      filterDiabetic: "Diabetic Care",
      filterSenior: "Senior Citizen",
      filterSpecial: "Specialized & Visa",
      testsCount: "Tests Included",
      startingFrom: "Starting from",
      rupeeSymbol: "₹",
      viewTests: "View Full Test List",
      bookPackage: "Book This Package",
      enquireWhatsApp: "Book on WhatsApp",
      fastingNotice: "Requires 8-12 hours overnight fasting",
      sameDayReport: "Same Day Computerized Report",
      viewBoardOriginal: "View Original Hospital Tariff Board",
      originalBoardNotice: "Transcribed verbatim from the diagnostic tariff board inside NMS Hospital reception, Sankarankovil."
    },

    // Departments
    departmentsSection: {
      badge: "Clinical Specialties",
      title: "Comprehensive Healthcare Departments",
      subtitle: "From emergency trauma management to daily chronic illness control, our medical specialties serve every member of your family.",
      viewDoctors: "Consult Department Doctors",
      featuresTitle: "Services & Procedures:"
    },

    // Doctors
    doctorsSection: {
      badge: "Medical Professionals",
      title: "Experienced Doctors & Specialists",
      subtitle: "Qualified physicians committed to accurate diagnosis, patient guidance, and ethical medical care.",
      experienceLabel: "Clinical Experience",
      opdLabel: "OPD Consultation Schedule",
      specialitiesLabel: "Key Clinical Focus:",
      bookConsultation: "Book Consultation",
      consultationFeeLabel: "Consultation"
    },

    // Facilities
    facilitiesSection: {
      badge: "Infrastructure & Technology",
      title: "Modern Hospital Facilities",
      subtitle: "Equipped with advanced diagnostic imaging, computerized testing machinery, and sanitized patient care environments.",
      learnMore: "Hospital Features"
    },

    // Why Choose Us
    whyChooseSection: {
      badge: "Patient Trust & Transparency",
      title: "Why Families Rely on NMS Hospital",
      subtitle: "High standards of clinical ethics, affordable tariffs, and respectful patient care in Sankarankovil.",
      pillar1Title: "Transparent Diagnostic Tariffs",
      pillar1Desc: "Every test package is displayed with clear, honest pricing starting from just ₹195, preventing unexpected hospital expenses.",
      pillar2Title: "Experienced Medical Practitioners",
      pillar2Desc: "Our physicians possess decades of clinical expertise in internal medicine, cardiac assessment, diabetology, and general surgery.",
      pillar3Title: "24/7 Casualty & Immediate Care",
      pillar3Desc: "Round-the-clock emergency medical officers and trained nursing care ready to manage acute medical conditions.",
      pillar4Title: "Central Sankarankovil Location",
      pillar4Desc: "Conveniently situated on Main Road / Tirunelveli Road, directly accessible by bus and road transport from neighboring taluks."
    },

    // Emergency Bar
    emergencyBar: {
      title: "Emergency or Critical Medical Assistance?",
      desc: "Our Casualty & Trauma unit is operational 24 hours a day with doctors and nursing teams on active standby.",
      callBtn: "Emergency Call: 04636 225315",
      directionsBtn: "Get Hospital Directions"
    },

    // Booking Modal
    bookingModal: {
      title: "Book Hospital Appointment",
      subtitle: "Schedule a doctor consultation or health check-up package",
      step1: "Select Service",
      step2: "Patient Information",
      step3: "Confirm & Book",
      typeConsultation: "Doctor Consultation",
      typePackage: "Health Check-Up Package",
      selectDepartment: "Select Specialty / Department",
      selectDoctor: "Select Preferred Doctor",
      selectPackage: "Select Health Check-Up Package",
      preferredDate: "Preferred Date",
      preferredSlot: "Preferred Time Slot",
      morningSlot: "Morning Session (9:30 AM - 1:30 PM)",
      eveningSlot: "Evening Session (5:00 PM - 8:30 PM)",
      patientName: "Patient Full Name",
      phoneNumber: "Mobile Phone Number",
      patientAge: "Patient Age (Years)",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      patientNotes: "Symptoms or Medical Notes (Optional)",
      submitWhatsApp: "Confirm via WhatsApp",
      submitDirect: "Submit Appointment Request",
      noteDisclaimer: "Our reception staff will confirm your slot via phone/WhatsApp prior to your visit."
    },

    // Chatbot
    chatbot: {
      title: "NMS Care Assistant",
      subtitle: "Bilingual Hospital Guide & Triage",
      welcome: "Hello! Welcome to NMS Hospital, Sankarankovil. How can we assist you today?",
      disclaimer: "NMS Care Assistant provides hospital information and guidance only. In urgent medical emergencies, immediately call 04636 225315 or dial 108.",
      emergencyAlert: "🚨 EMERGENCY ALERT: If you or someone is experiencing severe chest pain, breathing difficulty, acute paralysis, or heavy bleeding, please call our 24/7 Emergency Casualty immediately at 04636 225315 or dial 108 for an ambulance!",
      suggestedQuestions: "Frequently Asked Questions:",
      typePlaceholder: "Type your health query or question...",
      sendBtn: "Send",
      escalateWhatsApp: "Connect with Hospital on WhatsApp",
      close: "Close"
    },

    // FAQ Section
    faqSection: {
      badge: "Patient Queries",
      title: "Frequently Asked Questions",
      subtitle: "Clear answers regarding hospital timings, diagnostic packages, fasting instructions, and facilities."
    },

    // Contact & Location
    contactSection: {
      badge: "Location & Contact",
      title: "Visit NMS Hospital in Sankarankovil",
      subtitle: "Easily accessible on Main Road. We welcome patients from Sankarankovil, Tenkasi, Puliyangudi, Rajapalayam, and nearby villages.",
      addressLabel: "Hospital Address",
      phoneLabel: "Telephone & Reception",
      emergencyLabel: "24/7 Casualty Hotline",
      hoursLabel: "Hospital Timings",
      hoursDetails: "Casualty: 24/7 | OPD: Mon - Sat: 9:30 AM - 8:30 PM",
      getDirections: "Open in Google Maps",
      busAccess: "Accessible via all buses plying on Sankarankoil - Tirunelveli Main Road."
    },

    // Footer
    footer: {
      aboutText: "NMS Hospital is dedicated to accessible, compassionate, and transparent medical care for families in Sankarankovil, Tenkasi District, and surrounding towns.",
      quickLinks: "Quick Navigation",
      specialties: "Key Departments",
      legal: "Patient Notice",
      disclaimerText: "Medical Disclaimer: The clinical information and packages displayed on this portal are for informational purposes and do not replace personalized professional diagnosis. Consult a physician for specific health symptoms.",
      copyright: "© 2026 NMS Hospital, Sankarankovil. All rights reserved.",
      addressBrief: "No. 169-C1, Main Road, Sankarankovil – 627756, Tenkasi Dist, Tamil Nadu."
    }
  },

  ta: {
    hospitalName: "என்.எம்.எஸ் மருத்துவமனை",
    tagline: "அக்கறையான சிகிச்சை. நம்பகமான மருத்துவ சேவை.",
    secondaryTagline: "உங்கள் குடும்பத்திற்கு அருகிலேயே தரமான மருத்துவ சேவை.",
    locationBadge: "மெயின் ரோடு (திருநெல்வேலி ரோடு), சங்கரன்கோவில்",
    emergencyPhone: "04636 225315",
    generalPhone: "04636 225315, 225958",
    email: "nmshospital@yahoo.co.in",
    website: "www.nmshospital.com",
    whatsappNumber: "+919442000000",
    addressText: "எண். 169, C1 மெயின் ரோடு, சங்கரன்கோவில் – 627756, தென்காசி மாவட்டம், தமிழ்நாடு, இந்தியா",
    
    // Top Bar
    topBar: {
      emergency: "24/7 அவசர சிகிச்சை உதவி எண்:",
      location: "சங்கரன்கோவில், தென்காசி மாவட்டம்",
      opdTiming: "OPD நேரம்: காலை 9:30 - இரவு 8:30",
      quickWhatsApp: "வாட்ஸ்அப் உதவி",
      languageToggle: "English"
    },

    // Nav
    nav: {
      home: "முகப்பு",
      packages: "உடல் பரிசோதனை",
      departments: "மருத்துவ பிரிவுகள்",
      doctors: "மருத்துவர்கள்",
      facilities: "வசதிகள்",
      about: "எங்களைப் பற்றி",
      faq: "கேள்வி-பதில்",
      contact: "தொடர்புக்கு",
      bookAppointment: "முன்பதிவு செய்ய",
      emergencyCall: "அவசரம்: 04636 225315"
    },

    // Hero Section
    hero: {
      badge: "மல்டிஸ்பெஷாலிட்டி மருத்துவமனை & ஆய்வகம்",
      headingLine1: "ஒவ்வொரு குடும்பத்திற்கும் நம்பகமான",
      headingLine2: "மருத்துவ சேவை",
      subheading: "சங்கரன்கோவில், தென்காசி, புளியங்குடி மற்றும் சுற்றுவட்டார பகுதி மக்களுக்கு பரிவான, தரமான மற்றும் நவீன மருத்துவ பராமரிப்பு.",
      btnAppointment: "மருத்துவரை சந்திக்க முன்பதிவு",
      btnPackages: "பரிசோதனை திட்டங்கள்",
      btnWhatsApp: "வாட்ஸ்அப் உதவி",
      btnCall: "வரவேற்பறை அழைப்பு",
      stat1Number: "24/7",
      stat1Label: "அவசர சிகிச்சை & விபத்து பிரிவு",
      stat2Number: "9",
      stat2Label: "வெளிப்படையான பரிசோதனை தொகுப்புகள்",
      stat3Number: "₹195",
      stat3Label: "ஆரம்ப உடல் பரிசோதனை கட்டணம்",
      stat4Number: "100%",
      stat4Label: "நோயாளியை மையமாகக் கொண்ட கவனிப்பு"
    },

    // Diagnostic Packages Hub
    packagesSection: {
      badge: "மருத்துவமனை ஆய்வக பரிசோதனைகள்",
      title: "முழு உடல் நல பரிசோதனை திட்டங்கள்",
      subtitle: "என்.எம்.எஸ் மருத்துவமனையின் அதிகாரப்பூர்வ கட்டண பலகையின் நேரடி தொகுப்பு. எவ்வித மறைமுக கட்டணங்களும் இன்றி, அன்றைய தினமே துல்லிய கணினி அறிக்கை.",
      filterAll: "அனைத்து திட்டங்களும் (9)",
      filterRoutine: "பொது & அடிப்படை",
      filterCardiac: "இதய நல பரிசோதனை",
      filterDiabetic: "நீரிழிவு நோய்",
      filterSenior: "மூத்த குடிமக்கள்",
      filterSpecial: "விசா & சிறப்பு திட்டங்கள்",
      testsCount: "சோதனைகள் அடங்கியது",
      startingFrom: "கட்டணம்",
      rupeeSymbol: "₹",
      viewTests: "முழு சோதனைகள் விவரம்",
      bookPackage: "இந்த திட்டத்தை தேர்வு செய்ய",
      enquireWhatsApp: "வாட்ஸ்அப்பில் பதிவு செய்ய",
      fastingNotice: "8-12 மணி நேரம் உணவு உட்கொள்ளாமல் வெறும் வயிற்றில் வரவும்",
      sameDayReport: "அன்றைய தினமே கணினி அறிக்கை",
      viewBoardOriginal: "மருத்துவமனையின் நேரடி கட்டணப் பலகையை பார்க்க",
      originalBoardNotice: "சங்கரன்கோவில் என்.எம்.எஸ் மருத்துவமனை வரவேற்பறையில் வைக்கப்பட்டுள்ள கட்டண பலகையின் நேரடி வடிவம்."
    },

    // Departments
    departmentsSection: {
      badge: "மருத்துவ துறைகள்",
      title: "சிறப்பு மருத்துவ பிரிவுகள்",
      subtitle: "24 மணி நேர அவசர சிகிச்சை முதல் அன்றாட உடல் நல கோளாறுகள் வரை, உங்கள் குடும்பத்தின் நலன் காக்கும் பல்வேறு சிறப்பு பிரிவுகள்.",
      viewDoctors: "பிரிவு மருத்துவர்களை அணுக",
      featuresTitle: "சிறப்பு சிகிச்சைகள்:"
    },

    // Doctors
    doctorsSection: {
      badge: "மருத்துவ வல்லுநர்கள்",
      title: "அனுபவம் வாய்ந்த சிறப்பு மருத்துவர்கள்",
      subtitle: "துல்லியமான பரிசோதனை, கனிவான வழிகாட்டல் மற்றும் அர்ப்பணிப்புடன் கூடிய மருத்துவ சேவை புரியும் மருத்துவர்கள்.",
      experienceLabel: "மருத்துவ அனுபவம்",
      opdLabel: "ஆலோசனை நேரம் (OPD)",
      specialitiesLabel: "முக்கிய மருத்துவ சிறப்பு:",
      bookConsultation: "முன்பதிவு செய்ய",
      consultationFeeLabel: "ஆலோசனை கட்டணம்"
    },

    // Facilities
    facilitiesSection: {
      badge: "கட்டமைப்பு & நவீன வசதிகள்",
      title: "நவீன மருத்துவமனை வசதிகள்",
      subtitle: "நவீன தானியங்கி ஆய்வகம், டிஜிட்டல் எக்ஸ்-ரே, அல்ட்ராசவுண்ட் ஸ்கேன் மற்றும் தூய்மையான உள்நோயாளி பிரிவுகள்.",
      learnMore: "வசதிகள் விவரம்"
    },

    // Why Choose Us
    whyChooseSection: {
      badge: "நம்பகத்தன்மையும் வெளிப்படைத்தன்மையும்",
      title: "என்.எம்.எஸ் மருத்துவமனையை மக்கள் தேர்வு செய்ய காரணம்",
      subtitle: "நியாயமான கட்டணம், உயர்தர மருத்துவம் மற்றும் சங்கரன்கோவில் மெயின் ரோட்டில் எளிதில் அணுகக்கூடிய அமைவிடம்.",
      pillar1Title: "வெளிப்படையான பரிசோதனை கட்டணங்கள்",
      pillar1Desc: "அனைத்து பரிசோதனை தொகுப்புகளும் ₹195 முதல் தெளிவான கட்டண பலகையுடன் வழங்கப்படுகின்றன. மறைமுக கட்டணங்கள் இல்லை.",
      pillar2Title: "அனுபவமிக்க மருத்துவர்கள்",
      pillar2Desc: "பொது மருத்துவம், இதய நலம், சர்க்கரை நோய், மகளிர் நலம் மற்றும் அறுவை சிகிச்சையில் பல ஆண்டுகள் அனுபவம் கொண்ட மருத்துவர்கள்.",
      pillar3Title: "24/7 தயார் நிலையில் அவசர பிரிவு",
      pillar3Desc: "இரவும் பகலும் தொடர்ந்து இயங்கும் அவசர சிகிச்சை மருத்துவர் மற்றும் செவிலியர் குழு உடனடியாக முதலுதவி அளிக்க தயார்.",
      pillar4Title: "சங்கரன்கோவில் மையப்பகுதி",
      pillar4Desc: "மெயின் ரோட்டில் (திருநெல்வேலி ரோடு) அமைந்திருப்பதால் சுற்றுவட்டார ஊர்களிலிருந்து பேருந்து மூலம் எளிதில் வந்தடையலாம்."
    },

    // Emergency Bar
    emergencyBar: {
      title: "அவசர மருத்துவ உதவி தேவையா?",
      desc: "எங்களின் 24 மணி நேர அவசர சிகிச்சை மற்றும் தீவிர விபத்து பிரிவு எந்நேரமும் செயல்படுகிறது.",
      callBtn: "அவசர அழைப்பு: 04636 225315",
      directionsBtn: "மருத்துவமனைக்கு வழித்தடம்"
    },

    // Booking Modal
    bookingModal: {
      title: "மருத்துவமனை முன்பதிவு படிவம்",
      subtitle: "மருத்துவர் ஆலோசனை அல்லது முழு உடல் பரிசோதனைக்கு முன்பதிவு செய்யுங்கள்",
      step1: "சேவையை தேர்வு செய்க",
      step2: "நோயாளி விவரங்கள்",
      step3: "உறுதி செய்து முன்பதிவு",
      typeConsultation: "மருத்துவர் ஆலோசனை",
      typePackage: "முழு உடல் பரிசோதனை திட்டம்",
      selectDepartment: "மருத்துவ பிரிவை தேர்வு செய்க",
      selectDoctor: "மருத்துவரை தேர்வு செய்க",
      selectPackage: "பரிசோதனை தொகுப்பை தேர்வு செய்க",
      preferredDate: "விரும்பும் தேதி",
      preferredSlot: "விரும்பும் நேரம்",
      morningSlot: "காலை நேரம் (9:30 AM - 1:30 PM)",
      eveningSlot: "மாலை நேரம் (5:00 PM - 8:30 PM)",
      patientName: "நோயாளியின் முழு பெயர்",
      phoneNumber: "மொபைல் எண்",
      patientAge: "நோயாளியின் வயது",
      gender: "பாலினம்",
      male: "ஆண்",
      female: "பெண்",
      other: "மற்றவை",
      patientNotes: "அறிகுறிகள் அல்லது குறிப்புகள் (விரும்பினால்)",
      submitWhatsApp: "வாட்ஸ்அப் மூலம் உடனடியாக பதிவு செய்ய",
      submitDirect: "முன்பதிவு கோரிக்கையை சமர்ப்பிக்க",
      noteDisclaimer: "உங்கள் வருகைக்கு முன் எங்கள் வரவேற்பறை பணியாளர்கள் உங்களை தொலைபேசியில் தொடர்பு கொண்டு நேரத்தை உறுதி செய்வர்."
    },

    // Chatbot
    chatbot: {
      title: "என்.எம்.எஸ் கேர் அசிஸ்டென்ட்",
      subtitle: "மருத்துவமனை தகவல் & வழிகாட்டி",
      welcome: "வணக்கம்! சங்கரன்கோவில் என்.எம்.எஸ் மருத்துவமனைக்கு உங்களை அன்புடன் வரவேற்கிறோம். உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      disclaimer: "என்.எம்.எஸ் கேர் அசிஸ்டென்ட் மருத்துவமனை விபரங்களை மட்டுமே வழங்கும். தீவிர அவசர சிகிச்சைகளுக்கு உடனடியாக 04636 225315 அல்லது 108 என்ற எண்ணை அழைக்கவும்.",
      emergencyAlert: "🚨 அவசர எச்சரிக்கை: நெஞ்சு வலி, மூச்சுத்திணறல், பக்கவாதம் அல்லது தீவிர ரத்தப்போக்கு ஏற்பட்டால், தாமதிக்காமல் 04636 225315 என்ற எங்களின் அவசர சிகிச்சை பிரிவை அல்லது 108 ஆம்புலன்ஸை உடனடியாக அழைக்கவும்!",
      suggestedQuestions: "அடிக்கடி கேட்கப்படும் கேள்விகள்:",
      typePlaceholder: "உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யவும்...",
      sendBtn: "அனுப்பு",
      escalateWhatsApp: "வாட்ஸ்அப் வழியாக பேச",
      close: "மூடு"
    },

    // FAQ Section
    faqSection: {
      badge: "சந்தேகங்களும் விளக்கங்களும்",
      title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      subtitle: "மருத்துவமனை நேரம், பரிசோதனை தொகுப்புகள் மற்றும் வெறும் வயிற்று வழிமுறைகள் குறித்த தெளிவான பதில்கள்."
    },

    // Contact & Location
    contactSection: {
      badge: "அமைவிடமும் தொடர்பும்",
      title: "சங்கரன்கோவில் என்.எம்.எஸ் மருத்துவமனைக்கு வருகை தருக",
      subtitle: "மெயின் ரோட்டில் எளிதில் அடையாளம் காணக்கூடிய இடம். சங்கரன்கோவில், தென்காசி, புளியங்குடி, ராஜபாளையம் மக்களின் சேவையில்.",
      addressLabel: "மருத்துவமனை முகவரி",
      phoneLabel: "தொலைபேசி & வரவேற்பறை",
      emergencyLabel: "24/7 அவசர சிகிச்சை எண்",
      hoursLabel: "செயல்படும் நேரம்",
      hoursDetails: "அவசர பிரிவு: 24 மணி நேரமும் | OPD: திங்கள் - சனி காலை 9:30 முதல் இரவு 8:30 வரை",
      getDirections: "கூகுள் மேப்பில் பார்க்க",
      busAccess: "சங்கரன்கோவில் - திருநெல்வேலி மெயின் ரோட்டில் செல்லும் அனைத்து பேருந்துகளும் நின்று செல்லும்."
    },

    // Footer
    footer: {
      aboutText: "என்.எம்.எஸ் மருத்துவமனை சங்கரன்கோவில் மற்றும் சுற்றுவட்டார மக்களுக்கு அக்கறையான, நியாயமான மற்றும் நம்பகமான மருத்துவ சேவையை வழங்க உறுதிபூண்டுள்ளது.",
      quickLinks: "விரைவு இணைப்புகள்",
      specialties: "முக்கிய பிரிவுகள்",
      legal: "நோயாளிகளுக்கான குறிப்பு",
      disclaimerText: "மருத்துவ மறுப்புரை: இந்த இணையதளத்தில் உள்ள தகவல்கள் விழிப்புணர்வு நோக்கத்திற்காக மட்டுமே. எவ்வித உடல்நல அறிகுறிகளுக்கும் தகுந்த மருத்துவரை நேரில் அணுகி ஆலோசனை பெறவும்.",
      copyright: "© 2026 என்.எம்.எஸ் மருத்துவமனை, சங்கரன்கோவில். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      addressBrief: "எண். 169-C1, மெயின் ரோடு, சங்கரன்கோவில் – 627756, தென்காசி மாவட்டம்."
    }
  }
};
