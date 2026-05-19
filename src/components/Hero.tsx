import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/generated/hero-seafood.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Main Heading with Stagger Animation */}
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium px-4">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              {t("hero.description")}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('meni')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}