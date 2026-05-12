import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Menu() {
  const { t } = useLanguage();
  
  const dishes = [
    {
      nameKey: "dish.seabass",
      descKey: "dish.seabass.desc",
      price: "20€",
      image: "/generated/dish-seabass.png",
      specialty: true
    },
    {
      nameKey: "dish.octopus",
      descKey: "dish.octopus.desc",
      price: "22€",
      image: "/generated/dish-octopus-peka.png",
      specialty: true
    },
    {
      nameKey: "dish.octopus.salad",
      descKey: "dish.octopus.salad.desc",
      price: "14€",
      image: "/generated/dish-octopus-salad.png"
    },
    {
      nameKey: "dish.risotto",
      descKey: "dish.risotto.desc",
      price: "18€",
      image: "/generated/dish-black-risotto.png",
      specialty: true
    },
    {
      nameKey: "dish.squid",
      descKey: "dish.squid.desc",
      price: "16€",
      image: "/generated/dish-grilled-squid.png"
    },
    {
      nameKey: "dish.scampi",
      descKey: "dish.scampi.desc",
      price: "24€",
      image: "/generated/dish-scampi-buzara.png",
      specialty: true
    },
    {
      nameKey: "dish.seabream",
      descKey: "dish.seabream.desc",
      price: "18€",
      image: "/generated/dish-grilled-seabream.png"
    },
    {
      nameKey: "dish.platter",
      descKey: "dish.platter.desc",
      price: "45€",
      image: "/generated/dish-mixed-grill.png",
      specialty: true
    },
    {
      nameKey: "dish.mussels",
      descKey: "dish.mussels.desc",
      price: "12€",
      image: "/generated/dish-mussels-buzara.png"
    },
    {
      nameKey: "dish.brudet",
      descKey: "dish.brudet.desc",
      price: "16€",
      image: "/generated/dish-brudet.png"
    },
    {
      nameKey: "dish.scampi.risotto",
      descKey: "dish.scampi.risotto.desc",
      price: "20€",
      image: "/generated/dish-scampi-risotto.png"
    },
    {
      nameKey: "dish.tuna",
      descKey: "dish.tuna.desc",
      price: "22€",
      image: "/generated/dish-tuna-steak.png"
    }
  ];

  return (
    <section id="meni" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            {t("menu.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("menu.subtitle")}
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
                  alt={t(dish.nameKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.specialty && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-accent text-accent-foreground font-semibold shadow-lg flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      {t("menu.specialty")}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                    {t(dish.nameKey)}
                  </h3>
                  <span className="text-lg md:text-xl font-bold text-accent whitespace-nowrap ml-2">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t(dish.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-muted-foreground italic">
            {t("menu.note")}
          </p>
        </div>
      </div>
    </section>
  );
}