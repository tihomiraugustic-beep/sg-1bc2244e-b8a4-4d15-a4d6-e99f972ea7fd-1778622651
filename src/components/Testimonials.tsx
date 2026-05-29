"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Marko Kovačević",
    location: "Zagreb",
    date: "Kolovoz 2025",
    rating: 5,
    text: "Najbolja riba koju sam probao na Jadranu! Svježe izlovljena, savršeno pripremljena. Ambijent je topao i autentičan, a pogled na more nezaboravan. Svakako ćemo se vratiti.",
    textEn: "The best fish I've tried on the Adriatic! Freshly caught, perfectly prepared. The ambiance is warm and authentic, and the sea view is unforgettable. We will definitely return."
  },
  {
    name: "Ana Jurić",
    location: "Split",
    date: "Srpanj 2025",
    rating: 5,
    text: "Obiteljski restoran s dušom. Škampi na buzaru su bili divine, a osoblje iznimno ljubazno. Silba je prekrasna, a Otoč je prava perla ovog otoka.",
    textEn: "A family restaurant with soul. The scampi buzara were divine, and the staff incredibly friendly. Silba is beautiful, and Otoč is the true gem of this island."
  },
  {
    name: "Luka Perić",
    location: "Rijeka",
    date: "Lipanj 2025",
    rating: 5,
    text: "Svaka preporuka! Rižoto s hobotnicom je remek-djelo, a cijena više nego korektna za kvalitetu koju dobijete. Pravi doživljaj dalmatinske kuhinje.",
    textEn: "Highly recommended! The octopus risotto is a masterpiece, and the price is more than fair for the quality you get. A true Dalmatian cuisine experience."
  },
  {
    name: "Ivana Tomić",
    location: "Ljubljana",
    date: "Kolovoz 2025",
    rating: 5,
    text: "Romantična večera uz zalazak sunca i svježu ribu - što više tražiti? Atmosfera je opuštajuća, hrana vrhunska, a ljudi srdačni. Naš najdraži restoran na otocima.",
    textEn: "Romantic dinner at sunset with fresh fish - what more could you ask for? The atmosphere is relaxing, the food excellent, and the people warm. Our favorite restaurant on the islands."
  },
  {
    name: "Petar Novak",
    location: "Zadar",
    date: "Rujan 2025",
    rating: 5,
    text: "Tradicija se osjeća u svakom zalogaju. Brancin na žaru je bio savršen, a crni rižoto - wow! Definitivno se vraćamo sljedeće godine.",
    textEn: "Tradition is felt in every bite. The grilled sea bass was perfect, and the black risotto - wow! We're definitely coming back next year."
  },
  {
    name: "Maja Babić",
    location: "Trst",
    date: "Srpanj 2025",
    rating: 5,
    text: "Uživali smo u svakom trenutku. Hobotnica ispod peke je bila fenomenalna, a vino odlično. Osoblje zna sve o ribi koju servira - prava priča iza svakog jela.",
    textEn: "We enjoyed every moment. The octopus under the bell was phenomenal, and the wine excellent. The staff knows everything about the fish they serve - a real story behind every dish."
  }
];

export function Testimonials() {
  const { language } = useLanguage();

  return (
    <section id="recenzije" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            {language === "hr" ? "Što Kažu Naši Gosti" : "What Our Guests Say"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "hr" 
              ? "Zadovoljstvo naših gostiju je naša najveća nagrada"
              : "The satisfaction of our guests is our greatest reward"}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-2 border-border/50 hover:border-accent/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{language === "hr" ? testimonial.text : testimonial.textEn}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location} • {testimonial.date}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            {language === "hr"
              ? "Želite li i vi postati dio naše priče?"
              : "Would you like to become part of our story?"}
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            {language === "hr" ? "Rezervirajte Stol" : "Reserve a Table"}
          </a>
        </div>
      </div>
    </section>
  );
}