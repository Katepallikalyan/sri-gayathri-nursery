import type { Metadata } from 'next';
import './globals.css';
import { BUSINESS_CONFIG } from '@/config/business';

export const metadata: Metadata = {
  title: 'Sri Gayathri Nursery | Fresh Plants in KPHB, Kukatpally, Hyderabad',
  description:
    'Locally nurtured indoor plants, flowering varieties, fruit saplings, and terracotta pots at Sri Gayathri Nursery, KPHB Colony, Kukatpally, Hyderabad.',
  keywords: [
    'Sri Gayathri Nursery',
    'Sri Gayatri Nursery KPHB',
    'Plant Nursery Kukatpally',
    'Plant nursery near One City Hyderabad',
    'Indoor plants Hyderabad',
    'Terrace garden plants KPHB',
    'Mango sapling Hyderabad',
    'Terracotta pots Kukatpally',
  ],
  authors: [{ name: 'Sri Gayathri Nursery' }],
  openGraph: {
    title: 'Sri Gayathri Nursery | Fresh Plants in KPHB, Kukatpally, Hyderabad',
    description:
      'Explore indoor foliage, flowering plants, fruit saplings, and planters in KPHB, Kukatpally. Enquire directly on WhatsApp.',
    siteName: 'Sri Gayathri Nursery',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GardenStore',
    name: BUSINESS_CONFIG.brandName,
    alternateName: BUSINESS_CONFIG.alternateSpelling,
    description: BUSINESS_CONFIG.subTagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.address.line1,
      addressLocality: BUSINESS_CONFIG.address.area,
      addressRegion: BUSINESS_CONFIG.address.state,
      postalCode: BUSINESS_CONFIG.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.4938',
      longitude: '78.3912',
    },
    url: BUSINESS_CONFIG.address.mapsSearchUrl,
    hasMap: BUSINESS_CONFIG.address.mapsSearchUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@600&family=Hanken+Grotesk:wght@400;500&family=Newsreader:opsz,wght@6..72,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
