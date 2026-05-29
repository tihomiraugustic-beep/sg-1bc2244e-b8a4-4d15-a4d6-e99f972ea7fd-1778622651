import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://restoran-silba.hr/#restaurant",
    "name": "Restoran Silba",
    "alternateName": "Otoč Silba",
    "description": "Riblji restoran s tradicijom na otoku Silba. Svježa jadranska riba, autentična dalmatinska kuhinja i nezaboravan pogled na more.",
    "url": "https://restoran-silba.hr",
    "image": [
      "https://restoran-silba.hr/og-image.png",
      "https://restoran-silba.hr/generated/fresh-seafood-display.png"
    ],
    "logo": "https://restoran-silba.hr/favicon.ico",
    "telephone": "+385-98-123-4567",
    "email": "info@otoc-silba.hr",
    "priceRange": "€€",
    "servesCuisine": ["Dalmatinska", "Mediteranska", "Plodovi Mora"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Obala bb",
      "addressLocality": "Silba",
      "postalCode": "23450",
      "addressCountry": "HR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.3667",
      "longitude": "14.7"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:00"
      }
    ],
    "acceptsReservations": "https://restoran-silba.hr/#kontakt",
    "hasMenu": "https://restoran-silba.hr/#meni",
    "paymentAccepted": "Gotovina, Kartica",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.3667",
        "longitude": "14.7"
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.facebook.com/restoransilba",
      "https://www.instagram.com/restoransilba"
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Početna",
        "item": "https://restoran-silba.hr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Meni",
        "item": "https://restoran-silba.hr/#meni"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "O Nama",
        "item": "https://restoran-silba.hr/#o-nama"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Kontakt",
        "item": "https://restoran-silba.hr/#kontakt"
      }
    ]
  };

  return (
    <Html lang="hr">
      <Head>
        <SEOElements />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}