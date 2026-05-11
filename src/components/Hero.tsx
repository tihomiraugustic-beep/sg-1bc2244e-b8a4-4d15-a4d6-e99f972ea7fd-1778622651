import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/generated/hero-seafood.png')" }}
        />
        {/* Darker overlay for light theme, lighter for dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/85 to-background dark:from-background/60 dark:via-background/70 dark:to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading with Stagger Animation */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">
              Restoran Silba
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium">
              Svježa riba s Jadrana na otoku Silba
            </p>
          </div>

          {/* Description */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Autentična otočka konoba s generacijskim nasljeđem
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('meni')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pogledaj Meni
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}