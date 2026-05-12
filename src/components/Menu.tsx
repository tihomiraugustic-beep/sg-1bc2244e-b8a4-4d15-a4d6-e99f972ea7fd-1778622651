import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Waves, Flame, UtensilsCrossed } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    name: "Brancin na žaru",
    description: "Svježi brancin s Jadrana, grillan na drvenom ugljenu, maslac od svježih trava",
    price: "35€",
    icon: <Fish className="w-6 h-6" />
  },
  {
    name: "Orada na solima",
    description: "Cijela orada pečena u morskoj soli, maslinovo ulje i limun",
    price: "32€",
    icon: <Flame className="w-6 h-6" />
  },
  {
    name: "Hobotnica ispod peke",
    description: "Traditionally cooked octopus with potatoes, cherry tomatoes, garlic",
    price: "38€",
    icon: <Waves className="w-6 h-6" />
  },
  {
    name: "Crni rižoto od sipe",
    description: "Domaći rižoto od svježe sipe, bijelo vino, peršin",
    price: "28€",
    icon: <UtensilsCrossed className="w-6 h-6" />
  },
  {
    name: "Carpaccio od tune",
    description: "Tanko rezana svježa tuna, ekstra djevičansko maslinovo ulje, kapari, rukkola",
    price: "24€",
    icon: <Fish className="w-6 h-6" />
  },
  {
    name: "Škampi na buzaru",
    description: "Jumbo škampi, domaća paradajz salsa, bijelo vino, češnjak",
    price: "42€",
    icon: <Waves className="w-6 h-6" />
  },
  {
    name: "Dagnje na crno",
    description: "Fresh mussels in white wine sauce with garlic and parsley",
    price: "22€",
    icon: <Waves className="w-6 h-6" />
  },
  {
    name: "Salata od hobotnice",
    description: "Tender octopus salad with potatoes, onions, olive oil, lemon",
    price: "26€",
    icon: <UtensilsCrossed className="w-6 h-6" />
  },
  {
    name: "Dnevni ulov",
    description: "Pitajte konobara za današnji svježi ulov",
    price: "Cijena na upit",
    icon: <Fish className="w-6 h-6" />
  }
];

export function Menu() {
  return (
    <section id="meni" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Naš Meni
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dnevno svjež ulov iz Jadranskog mora
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2 text-primary">
                      {item.name}
                    </CardTitle>
                  </div>
                  <div className="text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mb-4 leading-relaxed">
                  {item.description}
                </CardDescription>
                <div className="font-semibold text-lg text-accent">
                  {item.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Cijene su informativne i podložne promjenama ovisno o svježem dnevnom ulovu
          </p>
        </div>
      </div>
    </section>
  );
}