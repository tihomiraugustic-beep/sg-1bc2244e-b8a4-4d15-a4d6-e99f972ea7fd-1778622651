import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Otoč - Riblji Restoran na Otoku Silba"
        description="Svježa riba s Jadrana. Autentični otočki restoran na Silbi s dnevno svježim ulovom i tradicionalnim receptima."
        image="/og-image.png"
      />
      
      <Navigation />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}