import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Otok",
    "description": "Riblji restoran na otoku Silba s dnevno svježim ulovom i tradicionalnim receptima",
    "image": "https://otoc-silba.hr/og-image.png",
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
      "longitude": "14.7000"
    },
    "url": "https://otoc-silba.hr",
    "telephone": "+385-98-123-4567",
    "email": "info@otoc-silba.hr",
    "servesCuisine": ["Croatian", "Seafood", "Mediterranean"],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:00"
      }
    ],
    "acceptsReservations": "True",
    "hasMenu": "https://otoc-silba.hr/#meni"
  };

  return (
    <Html lang="hr">
      <Head>
        <SEOElements />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/og-image.png" />
        <meta name="theme-color" content="#2563A5" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
