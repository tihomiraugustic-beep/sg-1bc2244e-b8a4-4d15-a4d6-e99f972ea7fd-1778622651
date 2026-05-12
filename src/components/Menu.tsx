import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function Menu() {
  const { t } = useLanguage();

  const menuItems = [
    {
      name: t("menu.items.seabass.name"),
      description: t("menu.items.seabass.description"),
      price: t("menu.items.seabass.price"),
      image: "/generated/dish-seabass.png"
    },
    {
      name: t("menu.items.octopusSalad.name"),
      description: t("menu.items.octopusSalad.description"),
      price: t("menu.items.octopusSalad.price"),
      image: "/generated/dish-octopus-salad.png"
    },
    {
      name: t("menu.items.blackRisotto.name"),
      description: t("menu.items.blackRisotto.description"),
      price: t("menu.items.blackRisotto.price"),
      image: "/generated/dish-black-risotto.png"
    },
    {
      name: t("menu.items.grilledSeabream.name"),
      description: t("menu.items.grilledSeabream.description"),
      price: t("menu.items.grilledSeabream.price"),
      image: "/generated/dish-grilled-seabream.png"
    },
    {
      name: t("menu.items.scampiRisotto.name"),
      description: t("menu.items.scampiRisotto.description"),
      price: t("menu.items.scampiRisotto.price"),
      image: "/generated/dish-scampi-risotto.png"
    },
    {
      name: t("menu.items.grilledSquid.name"),
      description: t("menu.items.grilledSquid.description"),
      price: t("menu.items.grilledSquid.price"),
      image: "/generated/dish-grilled-squid.png"
    },
    {
      name: t("menu.items.musselsBuzara.name"),
      description: t("menu.items.musselsBuzara.description"),
      price: t("menu.items.musselsBuzara.price"),
      image: "/generated/dish-mussels-buzara.png"
    },
    {
      name: t("menu.items.brudet.name"),
      description: t("menu.items.brudet.description"),
      price: t("menu.items.brudet.price"),
      image: "/generated/dish-brudet.png"
    },
    {
      name: t("menu.items.mixedGrill.name"),
      description: t("menu.items.mixedGrill.description"),
      price: t("menu.items.mixedGrill.price"),
      image: "/generated/dish-mixed-grill.png"
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="meni" className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("menu.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("menu.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold text-lg whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}