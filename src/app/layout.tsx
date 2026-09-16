import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NMS Hospital Sankarankovil | Doctors & Diagnostic Check-Up Packages',
  description: 'NMS Hospital in Sankarankovil, Tenkasi District provides patient-focused healthcare, 24/7 Emergency Casualty, experienced doctor consultations, and 9 transparent full-body check-up packages starting from ₹195.',
  keywords: [
    'NMS Hospital',
    'Hospital in Sankarankovil',
    'Doctors in Sankarankovil',
    'Sankarankoil Tirunelveli Road Hospital',
    'Diagnostic services Sankarankovil',
    'Full body check up Sankarankovil',
    'Heart check up Sankarankovil',
    'Diabetic check up Tenkasi',
    'மருத்துவமனை சங்கரன்கோவில்',
    'சங்கரன்கோவில் மருத்துவர்கள்'
  ],
  authors: [{ name: 'NMS Hospital' }],
  creator: 'NMS Hospital',
  publisher: 'NMS Hospital',
  metadataBase: new URL('https://www.nmshospital.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NMS Hospital Sankarankovil | Compassionate Care. Trusted Medical Support.',
    description: 'Premier multispeciality healthcare and transparent diagnostic check-up packages in Sankarankovil, Tenkasi District.',
    url: 'https://www.nmshospital.in',
    siteName: 'NMS Hospital',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const hospitalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hospital',
  name: 'NMS Hospital',
  alternateName: 'NMS மருத்துவமனை',
  description: 'Multispeciality hospital and diagnostic centre offering 24/7 emergency casualty, specialist outpatient care, digital radiology, ultrasound, and standardized full body health check-up packages.',
  url: 'https://www.nmshospital.in',
  telephone: '+91-4636-225315',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 169-C1, Main Road, Sankarankoil Tirunelveli Road',
    addressLocality: 'Sankarankovil',
    addressRegion: 'Tamil Nadu',
    postalCode: '627756',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.1724,
    longitude: 77.5332
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59',
      description: '24/7 Emergency Casualty & Inpatient Services'
    }
  ],
  medicalSpecialty: [
    'EmergencyMedicine',
    'Cardiology',
    'Endocrinology',
    'GeneralSurgery',
    'Pediatrics',
    'ObstetricsAndGynecology',
    'Orthopedics',
    'DiagnosticRadiology'
  ],
  availableService: [
    {
      '@type': 'MedicalTest',
      name: 'Basic Health Check-Up',
      description: '10 essential blood and urine tests starting at ₹195'
    },
    {
      '@type': 'MedicalTest',
      name: 'Master Health Check-Up (Heart Check-Up)',
      description: 'Comprehensive cardiac assessment with 2D ECHO and TMT for ₹2050'
    },
    {
      '@type': 'MedicalTest',
      name: 'Master Health Check-Up (Diabetic Check-Up)',
      description: 'Diabetes screening with HbA1c and Urine Micro Albumin for ₹1200'
    }
  ],
  priceRange: '₹195 - ₹2050'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-hospital-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
