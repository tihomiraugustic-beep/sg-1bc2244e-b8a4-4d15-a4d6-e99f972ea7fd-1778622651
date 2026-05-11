import { Anchor, MapPin, Ship } from "lucide-react";

export function About() {
  return (
    <section id="o-nama" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            O Nama
          </h2>
          
          <div className="prose prose-lg max-w-none text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Otoč je obiteljski restoran smješten na netaknutom otoku Silba, jednom od rijetkih 
              otoka bez automobila na Jadranu. Već tri generacije pripremamo najsvježiju ribu 
              koju more može ponuditi.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Svako jutro naši ribari izlaze na more, a mi za vas biramo najbolje iz dnevnog ulova. 
              Jednostavna priprema, tradicijski recepti, i ljubav prema moru — to je naša priča.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Anchor className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Lokalni Ulov</h3>
              <p className="text-sm text-muted-foreground">
                Svježa riba direktno s lokalnih ribarskih brodova
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Otok bez Automobila</h3>
              <p className="text-sm text-muted-foreground">
                Autentično otočko iskustvo u miru i tišini
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Obiteljska Tradicija</h3>
              <p className="text-sm text-muted-foreground">
                Tri generacije čuvaju recepte i kvalitetu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}