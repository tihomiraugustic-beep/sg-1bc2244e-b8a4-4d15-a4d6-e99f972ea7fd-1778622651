import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
            Otoč
          </Link>
          
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#meni" className="text-sm md:text-base font-medium hover:text-accent transition-colors">
              Meni
            </a>
            <a href="#o-nama" className="text-sm md:text-base font-medium hover:text-accent transition-colors">
              O Nama
            </a>
            <a href="#galerija" className="text-sm md:text-base font-medium hover:text-accent transition-colors">
              Galerija
            </a>
            <a href="#kontakt" className="text-sm md:text-base font-medium hover:text-accent transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}