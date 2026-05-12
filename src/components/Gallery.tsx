"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera } from "lucide-react";
import Image from "next/image"; // Added import
import { useLanguage } from "@/contexts/LanguageContext"; // Added import
import { motion } from "framer-motion"; // Added import
import { useInView } from "framer-motion"; // Added import
import { useRef } from "react"; // Added import

const galleryImages = [
  {
    src: "/generated/dish-seabass.png",
    alt: "Brancin na žaru s limunom i mediteranskim začinima",
    title: "Brancin na žaru"
  },
  {
    src: "/generated/dish-octopus-salad.png",
    alt: "Salata od hobotnice s rajčicama i kaparima",
    title: "Salata od hobotnice"
  },
  {
    src: "/generated/dish-black-risotto.png",
    alt: "Crni rižot od sipe",
    title: "Crni rižot"
  },
  {
    src: "/generated/ambiance-terrace.png",
    alt: "Terasa restorana s pogledom na more",
    title: "Naša terasa"
  },
  {
    src: "/generated/fresh-seafood-display.png",
    alt: "Svježi morski plodovi na ledu",
    title: "Svježi ulov dana"
  },
  {
    src: "/generated/ambiance-interior.png",
    alt: "Interijer restorana s mediteranskim ambijentom",
    title: "Topla atmosfera"
  }
];

export function Gallery() {
  const { t } = useLanguage(); // Added to use the language context
  const ref = useRef(null); // Added to track visibility
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Added for animation
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = galleryImages.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.title
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="galerija" className="py-16 md:py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background font-serif text-lg font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 rounded-full p-3">
                  <Camera className="h-6 w-6 text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" }
        }}
      />
    </section>
  );
}