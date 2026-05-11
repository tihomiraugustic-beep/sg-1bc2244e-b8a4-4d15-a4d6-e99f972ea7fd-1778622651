import { MapPin, Phone, Mail, Clock, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 scroll-mt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            Posjetite Nas
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Čekamo vas u srcu otoka Silba
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adresa</h3>
                  <p className="text-muted-foreground">
                    Obala bb<br />
                    23450 Silba<br />
                    Hrvatska
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+385 23 370 XXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@otoc-silba.hr</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Radno Vrijeme</h3>
                  <p className="text-muted-foreground">
                    Ponedjeljak - Nedjelja<br />
                    12:00 - 23:00<br />
                    (Sezonsko: Travanj - Listopad)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Ship className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Kako Doći</h3>
                  <p className="text-muted-foreground">
                    Trajekt iz Zadra prema Silbi<br />
                    Otok je bez automobila<br />
                    Pješice 5 min od pristaništa
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-muted/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-semibold mb-3 text-primary">Rezervacije</h3>
            <p className="text-muted-foreground mb-6">
              Preporučujemo rezervaciju, posebno tijekom ljetne sezone
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Rezervirajte Stol
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}