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
        title="Otok - Riblji Restoran na Otoku Silba | Svježa Riba s Jadrana"
        description="Otkrijte autentični okus Jadrana u restoranu Otok na otoku Silba. Dnevno svjež ulov, tradicionalni recepti, grillani brancin, hobotnica, crni rižoto. Rezervirajte stol online."
        image="/og-image.png"
        url="https://otoc-silba.hr"
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