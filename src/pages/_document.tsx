import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restoran Silba",
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/og-image.png" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Load fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Static SEO Tags */}
        <SEOElements />
        
        {/* Additional SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="msapplication-TileColor" content="#1e5575" />
        
        {/* Sitemap & Robots */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
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