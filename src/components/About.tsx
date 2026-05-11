import { Anchor, MapPin, Ship } from "lucide-react";

export function About() {
  return (
    <section id="o-nama" className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            O Nama
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tradicija, kvaliteta i ljubav prema Jadranu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-semibold text-primary">Naša Priča</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Restoran Silba je obiteljski restoran smješten na netaknutom otoku Silba, jednom od rijetkih 
                otoka na Jadranu bez automobila. Naša priča započela je prije više od tri desetljeća 
                s jednostavnom vizijom: ponuditi najsvježiju ribu iz našeg mora pripremljenu po 
                tradicionalnim dalmatinskim receptima.
              </p>
              <p>
                Svaki dan naši ribari donose svježi ulov direktno s mora, garantirajući da svako 
                jelo koje serviramo nosi autentični okus Jadrana. Od jednostavnih grilovanih riba 
                do složenih tradicionalnih specijaliteta, svaki zalogaj priča priču o našoj strasti 
                prema kulinarskoj izvrsnosti.
              </p>
              <p>
                Uživajte u našoj terasi s pogledom na kristalno čisto more, dok vam naš tim 
                priprema nezaboravne gastronomske doživljaje. Dobrodošli u našu obitelj.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Dnevno Svjež Ulov</h4>
                <p className="text-sm text-muted-foreground">
                  Naši ribari donose ribu svaki dan, garantirajući vrhunsku svježinu i kvalitetu.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Anchor className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tradicionalni Recepti</h4>
                <p className="text-sm text-muted-foreground">
                  Pripremamo jela po autentičnim receptima prenesenim kroz generacije.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Otok Bez Automobila</h4>
                <p className="text-sm text-muted-foreground">
                  Silba je mirno utočište, savršeno za bijeg od gradske vreve i uživanje u prirodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}