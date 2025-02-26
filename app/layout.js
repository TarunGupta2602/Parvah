import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Pravah - Personalized Mentorship for Tier-3 College Students',
  description: 'Pravah offers personalized mentorship, career guidance, and emotional support for tier-3 college students. Connect with mentors who understand your challenges and guide your growth journey.',
  keywords: [
    'mentorship',
    'career guidance',
    'tier 3 college students',
    'student mentoring',
    'career development',
    'personal growth',
    'skill development',
    'interview preparation',
    'career counseling',
    'student support',
    'professional development',
    'mental health support',
    'career planning',
    'job preparation',
    'technical skills',
    'soft skills training'
  ],
  authors: [{ name: 'Tarun Gupta' }],
  creator: 'Tarun Gupta',
  publisher: 'Pravah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pravah.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pravah - Empowering Tier-3 College Students Through Personalized Mentorship',
    description: 'Join Pravah for personalized mentorship, career guidance, and emotional support. We help tier-3 college students overcome challenges and achieve their career goals.',
    url: 'https://pravah.vercel.app', // Update with your actual domain
    siteName: 'Pravah',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Pravah - Student Mentorship Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pravah - Student Mentorship Platform',
    description: 'Personalized mentorship and career guidance for tier-3 college students',
    images: ['/twitter-image.jpg'], // Add your Twitter card image
    creator: '@YourTwitterHandle', // Update with your Twitter handle
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // If you want to verify with Yandex
    yahoo: 'your-yahoo-verification-code', // If you want to verify with Yahoo
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#4F46E5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pravah" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Pravah" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Pravah",
              "url": "https://pravah.vercel.app",
              "logo": "https://pravah.vercel.app/logo.png",
              "sameAs": [
                "https://twitter.com/YourTwitter",
                "https://www.linkedin.com/company/pravah",
                "https://www.instagram.com/pravah"
              ],
              "description": "Pravah offers personalized mentorship and career guidance for tier-3 college students, helping them achieve their professional goals through expert guidance and support.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hapur",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "itstarungarg07@gmail.com",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          `}
        </script>
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
