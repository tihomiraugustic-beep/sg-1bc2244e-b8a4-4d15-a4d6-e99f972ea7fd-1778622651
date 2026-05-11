"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera } from "lucide-react";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = galleryImages.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.title
  }));

  return (
    <section id="galerija" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="h-6 w-6 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Galerija
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Naša Jela i Ambijent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Doživite okuse Jadrana kroz našu kulinarsku priču
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            </div>
          ))}
        </div>
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