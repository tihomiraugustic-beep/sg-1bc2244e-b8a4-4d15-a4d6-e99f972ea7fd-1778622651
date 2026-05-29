import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  locale?: string;
}

const defaultSEO = {
  title: "Restoran Silba - Riblji Restoran na Otoku Silba | Svježa Jadranska Riba",
  description: "Restoran Silba nudi najsvježiju ribu i plodove mora na otoku Silba. Obiteljski restoran s tradicijom, autentična dalmatinska kuhinja i nezaboravan pogled na Jadransko more.",
  image: "https://restoran-silba.hr/og-image.png",
  url: "https://restoran-silba.hr",
};

export function SEOElements({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = "website",
  locale = "hr_HR",
}: SEOProps = {}) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Restoran Silba`;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Keywords */}
      <meta name="keywords" content="restoran silba, riblji restoran silba, restoran na otoku silba, riba silba, plodove mora silba, dalmatinska kuhinja, svježa riba, jadranska riba, silba restoran, gastronomija silba, restoran bez auta silba" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Restoran Silba" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="HR-15" />
      <meta name="geo.placename" content="Silba, Hrvatska" />
      <meta name="geo.position" content="44.3667;14.7" />
      <meta name="ICBM" content="44.3667, 14.7" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="hr" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Author & Copyright */}
      <meta name="author" content="Restoran Silba" />
      <meta name="copyright" content="© 2026 Restoran Silba. Sva prava pridržana." />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </>
  );
}

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = "website",
  locale = "hr_HR",
}: SEOProps = {}) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Restoran Silba`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="restoran silba, riblji restoran silba, restoran na otoku silba, riba silba, plodove mora silba, dalmatinska kuhinja, svježa riba, jadranska riba, silba restoran, gastronomija silba, restoran bez auta silba" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Restoran Silba" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <meta name="geo.region" content="HR-15" />
      <meta name="geo.placename" content="Silba, Hrvatska" />
      <meta name="geo.position" content="44.3667;14.7" />
      <meta name="ICBM" content="44.3667, 14.7" />
      <meta httpEquiv="content-language" content="hr" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </Head>
  );
}