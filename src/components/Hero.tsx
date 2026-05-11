import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      </div>
      
      <div className="container text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-tight">
            Otoč
          </h1>
        </div>
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-4 max-w-3xl mx-auto font-light">
            Svježa riba s Jadrana
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            na otoku Silba
          </p>
        </div>
        
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg font-medium"
            onClick={() => document.getElementById('meni')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Pogledaj Meni
          </Button>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="text-center">
            <div className="text-accent text-4xl mb-2">🐟</div>
            <h3 className="font-serif text-lg font-semibold mb-2">Svježi Ulov</h3>
            <p className="text-sm text-muted-foreground">Dnevno svježa riba s lokalnih tržnica</p>
          </div>
          
          <div className="text-center">
            <div className="text-accent text-4xl mb-2">🏝️</div>
            <h3 className="font-serif text-lg font-semibold mb-2">Otok Silba</h3>
            <p className="text-sm text-muted-foreground">Autentični ambijent bez automobila</p>
          </div>
          
          <div className="text-center">
            <div className="text-accent text-4xl mb-2">👨‍🍳</div>
            <h3 className="font-serif text-lg font-semibold mb-2">Tradicija</h3>
            <p className="text-sm text-muted-foreground">Recepti s generacijskim nasljeđem</p>
          </div>
        </div>
      </div>
    </section>
  );
}