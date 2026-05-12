import Head from "next/head";
import { Fragment } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultSEO = {
  title: "Restoran Silba - Riblji Restoran na Otoku Silba | Svježa Riba s Jadrana",
  description: "Otkrijte autentični okus Jadrana u restoranu Restoran Silba na otoku Silba. Dnevno svjež ulov, tradicionalni recepti, grillani brancin, hobotnica, crni rižoto. Rezervirajte stol online.",
  image: "/og-image.png",
  url: "https://otoc-silba.hr"
};

// For static SEO in _document.tsx (no Head wrapper)
export function SEOElements({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url
}: SEOProps) {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  return (
    <>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="restoran Silba, riblji restoran, Jadran, svježa riba, mediteranska kuhinja, hrvatski restoran, otočki restoran, tradicionalna kuhinja, dalmatinska kuhinja, fish restaurant Croatia" />
      <meta name="author" content="Restoran Silba" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Croatian" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Restoran Silba" />
      <meta property="og:locale" content="hr_HR" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Restaurant-specific Open Graph */}
      <meta property="restaurant:contact_info:street_address" content="Obala bb" />
      <meta property="restaurant:contact_info:locality" content="Silba" />
      <meta property="restaurant:contact_info:postal_code" content="23450" />
      <meta property="restaurant:contact_info:country_name" content="Croatia" />
      <meta property="restaurant:contact_info:phone_number" content="+385981234567" />
      <meta property="restaurant:contact_info:email" content="info@otoc-silba.hr" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#1e5575" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Restoran Silba" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="HR-15" />
      <meta name="geo.placename" content="Silba" />
      <meta name="geo.position" content="44.3667;14.6947" />
      <meta name="ICBM" content="44.3667, 14.6947" />
    </>
  );
}

// For dynamic page-level SEO (wrapped in Head)
export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url
}: SEOProps) {
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  
  // Restaurant Structured Data (JSON-LD)
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": url,
    "name": "Restoran Silba",
    "alternateName": "Otoc Riblji Restoran",
    "description": description,
    "url": url,
    "logo": `${url}/og-image.png`,
    "image": fullImageUrl,
    "priceRange": "€€",
    "servesCuisine": ["Mediterranean", "Croatian", "Seafood", "Dalmatian"],
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
      "longitude": "14.6947"
    },
    "telephone": "+385981234567",
    "email": "info@otoc-silba.hr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "23:00"
      }
    ],
    "hasMenu": {
      "@type": "Menu",
      "url": `${url}#meni`,
      "hasMenuSection": {
        "@type": "MenuSection",
        "name": "Riblji Specijaliteti",
        "description": "Dnevno svjež ulov iz Jadranskog mora"
      }
    },
    "acceptsReservations": "True",
    "paymentAccepted": "Cash, Credit Card",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Outdoor Seating",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Waterfront View",
        "value": true
      }
    ],
    "knowsAbout": [
      "Fresh Fish",
      "Grilled Seafood",
      "Traditional Croatian Cuisine",
      "Mediterranean Food",
      "Island Dining"
    ]
  };

  // Breadcrumb Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Menu",
        "item": `${url}#meni`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": `${url}#o-nama`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${url}#kontakt`
      }
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="restoran Silba, riblji restoran, Jadran, svježa riba, mediteranska kuhinja, hrvatski restoran, otočki restoran, tradicionalna kuhinja, dalmatinska kuhinja, fish restaurant Croatia" />
      
      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Restoran Silba" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </Head>
  );
}