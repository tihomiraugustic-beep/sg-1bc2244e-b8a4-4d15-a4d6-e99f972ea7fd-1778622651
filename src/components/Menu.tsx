import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function Menu() {
  const dishes = [
    {
      name: "Grillani Brancin",
      description: "Svježi brancin s dalmatinskim pršutom, maslinovo ulje, limun, blitva",
      price: "180 kn",
      image: "/generated/dish-seabass.png",
      specialty: true
    },
    {
      name: "Hobotnica Ispod Peke",
      description: "Tradicionalna priprema ispod željeznog poklopca, krumpir, blitva",
      price: "160 kn",
      image: "/generated/dish-octopus-peka.png",
      specialty: true
    },
    {
      name: "Salata od Hobotnice",
      description: "Kuhana hobotnica, krumpir, crveni luk, peršin, maslinovo ulje",
      price: "95 kn",
      image: "/generated/dish-octopus-salad.png"
    },
    {
      name: "Crni Rižoto",
      description: "Rižoto od sipe s domaćim vinom i začinima",
      price: "120 kn",
      image: "/generated/dish-black-risotto.png",
      specialty: true
    },
    {
      name: "Lignje na Žaru",
      description: "Svježe lignje s roštilja, blitva, krumpir, češnjak i peršin",
      price: "110 kn",
      image: "/generated/dish-grilled-squid.png"
    },
    {
      name: "Škampi na Buzaru",
      description: "Veliki dalmatinski škampi u umaku od rajčice i bijelog vina",
      price: "220 kn",
      image: "/generated/dish-scampi-buzara.png",
      specialty: true
    },
    {
      name: "Orada na Gradele",
      description: "Cijela orada s roštilja, blitva, krumpir, maslinovo ulje",
      price: "170 kn",
      image: "/generated/dish-grilled-seabream.png"
    },
    {
      name: "Riblja Plata za Dvoje",
      description: "Miješano s roštilja: brancin, orada, lignje, škampi, prilog",
      price: "380 kn",
      image: "/generated/dish-mixed-grill.png",
      specialty: true
    },
    {
      name: "Dagnje na Buzaru",
      description: "Svježe dagnje u umaku od rajčice, bijelog vina i češnjaka",
      price: "85 kn",
      image: "/generated/dish-mussels-buzara.png"
    },
    {
      name: "Brudet",
      description: "Tradicionalna dalmatinska riblja juha s miješanom ribom i polentom",
      price: "130 kn",
      image: "/generated/dish-brudet.png"
    },
    {
      name: "Rižoto od Škampa",
      description: "Kremasti rižoto s velikim dalmatinskim škampima",
      price: "180 kn",
      image: "/generated/dish-scampi-risotto.png"
    },
    {
      name: "Tuna Steak",
      description: "Svježi tuna odrezak s grillla, sesame sjemenke, soja umak",
      price: "200 kn",
      image: "/generated/dish-tuna-steak.png"
    }
  ];

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

        {/* Menu Grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.specialty && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground font-semibold shadow-lg flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Specijalitet
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-lg md:text-xl font-bold text-accent whitespace-nowrap ml-2">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-muted-foreground italic">
            Cijene mogu varirati ovisno o sezoni i dnevnom ulovu. Sva jela se pripremaju po narudžbi.
          </p>
        </div>
      </div>
    </section>
  );
}