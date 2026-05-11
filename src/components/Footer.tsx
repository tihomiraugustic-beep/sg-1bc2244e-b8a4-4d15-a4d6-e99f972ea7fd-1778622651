import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Otok</h3>
            <p className="text-sm text-muted-foreground">
              Riblji restoran na otoku Silba.<br />
              Svježa riba s Jadrana od 1985.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigacija</h4>
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
                <a href="#kontakt" className="text-muted-foreground hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Pratite Nas</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Otok Restoran. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}