import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <>
      <SEO 
        title="Restoran Silba - Riblji Restoran na Otoku Silba | Svježa Jadranska Riba"
        description="Restoran Silba nudi najsvježiju ribu i plodove mora na otoku Silba. Obiteljski restoran s tradicijom, autentična dalmatinska kuhinja i nezaboravan pogled na Jadransko more."
        url="https://restoran-silba.hr"
      />
      <Navigation />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCallButton />
    </>
  );
}