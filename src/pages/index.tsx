import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Restoran Silba - Riblji Restoran na Otoku Silba | Svježa Riba s Jadrana"
        description="Otkrijte autentični okus Jadrana u restoranu Restoran Silba na otoku Silba. Dnevno svjež ulov, tradicionalni recepti, grillani brancin, hobotnica, crni rižoto. Rezervirajte stol online."
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
      <FloatingCallButton />
    </>
  );
}