import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">Restoran Silba</h3>
            <p className="text-sm text-muted-foreground">
              Svježa riba s Jadrana na otoku Silba
            </p>
            <p className="text-sm text-muted-foreground">
              Obiteljska tradicija već tri generacije
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground">Brze Poveznice</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#meni" className="text-muted-foreground hover:text-accent transition-colors">
                  Meni
                </a>
              </li>
              <li>
                <a href="#o-nama" className="text-muted-foreground hover:text-accent transition-colors">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#galerija" className="text-muted-foreground hover:text-accent transition-colors">
                  Galerija
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Obala bb, 23450 Silba</p>
              <p>+385 98 123 4567</p>
              <p>info@otoc-silba.hr</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Restoran Silba. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}