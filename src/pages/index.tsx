import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
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
      
      <main className="min-h-screen">
        <section id="meni" className="py-24 scroll-mt-20">
          <div className="container">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              Naš Meni
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Sve što vidite dolazi svježe s jutarnjeg ribarskog tržišta
            </p>
          </div>
        </section>
        
        <section id="o-nama" className="py-24 bg-muted/30 scroll-mt-20">
          <div className="container">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              O Nama
            </h2>
          </div>
        </section>
        
        <section id="kontakt" className="py-24 scroll-mt-20">
          <div className="container">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
              Posjetite Nas
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}