import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Fish, Heart } from "lucide-react";
import Image from "next/image";

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Fish,
      title: t("about.features.freshCatch.title"),
      description: t("about.features.freshCatch.description")
    },
    {
      icon: Heart,
      title: t("about.features.tradition.title"),
      description: t("about.features.tradition.description")
    },
    {
      icon: Award,
      title: t("about.features.quality.title"),
      description: t("about.features.quality.description")
    }
  ];

  return (
    <section id="o-nama" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("about.description.p1")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("about.description.p2")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("about.description.p3")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/generated/ambiance-terrace.png"
              alt="Restaurant ambiance"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card p-6 md:p-8 rounded-lg shadow-sm border border-border text-center space-y-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}