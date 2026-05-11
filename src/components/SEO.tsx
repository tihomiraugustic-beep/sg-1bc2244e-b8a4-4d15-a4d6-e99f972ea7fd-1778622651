import Head from "next/head";
import { Fragment } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// SEOElements for _document.tsx (static, no Head wrapper)
export function SEOElements({
  title = "Otoč - Riblji Restoran na Otoku Silba | Svježa Riba s Jadrana",
  description = "Otkrijte autentični okus Jadrana u restoranu Otoč na otoku Silba. Dnevno svjež ulov, tradicionalni recepti, i jedinstvena otočka atmosfera. Rezervirajte svoj stol danas.",
  image = "/og-image.png",
  url = "https://otoc-silba.hr"
}: SEOProps) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="restoran Silba, riblji restoran, svježa riba, Jadran, otočki restoran, Silba, dalmatinska kuhinja, morski plodovi, rezervacija stola, Zadar, Hrvatska" />
      <meta name="author" content="Otoč Restoran" />
      
      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Otoč Restoran" />
      <meta property="og:locale" content="hr_HR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      <title>{title}</title>
    </>
  );
}

// SEO component for dynamic pages (wrapped in Head)
export function SEO({
  title = "Otoč - Riblji Restoran na Otoku Silba | Svježa Riba s Jadrana",
  description = "Otkrijte autentični okus Jadrana u restoranu Otoč na otoku Silba. Dnevno svjež ulov, tradicionalni recepti, i jedinstvena otočka atmosfera. Rezervirajte svoj stol danas.",
  image = "/og-image.png",
  url = "https://otoc-silba.hr"
}: SEOProps) {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <title>{title}</title>
    </Head>
  );
}