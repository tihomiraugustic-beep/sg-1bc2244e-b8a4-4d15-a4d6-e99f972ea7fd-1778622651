"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "hr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hr: {
    // Navigation
    "nav.menu": "Meni",
    "nav.about": "O Nama",
    "nav.gallery": "Galerija",
    "nav.contact": "Kontakt",
    
    // Hero
    "hero.title": "Restoran Silba",
    "hero.subtitle": "Svježa riba s Jadrana na otoku Silba",
    "hero.description": "Autentična otočka konoba s generacijskim nasljeđem",
    "hero.cta": "Pogledaj Meni",
    
    // Menu
    "menu.title": "Naš Meni",
    "menu.subtitle": "Dnevno svjež ulov iz Jadranskog mora",
    "menu.specialty": "Specijalitet kuće",
    "menu.note": "* Sve cijene su u eurima. Sva jela se pripremaju po narudžbi.",
    
    // Dishes
    "dish.seabass": "Grillani Brancin",
    "dish.seabass.desc": "Svježi brancin s roštilja s blitvom, krumpirom i maslinovim uljem",
    "dish.octopus": "Hobotnica Ispod Peke",
    "dish.octopus.desc": "Tradicionalna hobotnica pečena pod pekom s krumpirom i blitvom",
    "dish.squid": "Lignje na Žaru",
    "dish.squid.desc": "Pržene lignje punjene sa češnjakom i peršinom, blitva i krumpir",
    "dish.risotto": "Crni Rižoto",
    "dish.risotto.desc": "Crni rižoto od sipe s domaćim bijelim vinom",
    "dish.octopus.salad": "Salata od Hobotnice",
    "dish.octopus.salad.desc": "Hobotnica, krumpir, crveni luk, kapare, maslinovo ulje i limun",
    "dish.scampi": "Škampi na Buzaru",
    "dish.scampi.desc": "Dalmatinski škampi u umaku od rajčice, bijelog vina i češnjaka",
    "dish.seabream": "Grillana Orada",
    "dish.seabream.desc": "Cijela orada s roštilja, blitva, krumpir, maslinovo ulje",
    "dish.platter": "Riblja Plata za Dvoje",
    "dish.platter.desc": "Mješavina grillanih riba i školjki - brancin, orada, lignje, škampi",
    "dish.mussels": "Dagnje na Buzaru",
    "dish.mussels.desc": "Svježe dagnje u umaku od rajčice, bijelog vina i češnjaka",
    "dish.brudet": "Brudet",
    "dish.brudet.desc": "Tradicionalni dalmatinski riblji gulaš s polentom",
    "dish.scampi.risotto": "Rižoto od Škampa",
    "dish.scampi.risotto.desc": "Kremasto rižoto s dalmatinskim škampima i bijelim vinom",
    "dish.tuna": "Tuna Steak",
    "dish.tuna.desc": "Grillani tuna odrezak s sezamom i soja umakom",
    
    // About
    "about.title": "O Nama",
    "about.subtitle": "Tradicija, kvaliteta i ljubav prema Jadranu",
    "about.story.title": "Naša Priča",
    "about.story.p1": "Restoran Silba je obiteljska tradicija koja traje već tri generacije. Osnovan 1965. godine, naš restoran je postao sinonim za svježu ribu i autentičnu dalmatinsku kuhinju na otoku Silba.",
    "about.story.p2": "Svaka riba koju poslužujemo dolazi iz lokalnog ulova naših ribara, osiguravajući najvišu kvalitetu i svježinu. Naši recepti prenose se s generacije na generaciju, čuvajući autentične okuse dalmatinske obale.",
    "about.story.p3": "Smješteni na mirnom otoku Silba, bez automobila i buke, nudimo jedinstveno gastro iskustvo u okruženju kristalno čistog mora i netaknute prirode.",
    "about.tradition": "Obiteljska Tradicija",
    "about.location": "Otok Silba",
    "about.fishing": "Lokalni Ulov",
    
    // Gallery
    "gallery.title": "Galerija",
    "gallery.subtitle": "Zavirite u naš svijet okusa i ambijenta",
    
    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Rezervirajte stol ili nas kontaktirajte",
    "contact.location": "Lokacija",
    "contact.hours": "Radno Vrijeme",
    "contact.hours.daily": "Svaki dan: 12:00 - 23:00",
    "contact.hours.season": "Sezona: Travanj - Listopad",
    "contact.phone": "Telefon",
    "contact.email": "Email",
    "contact.reservation.title": "Rezervacija Stola",
    "contact.form.name": "Ime i Prezime",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefon",
    "contact.form.date": "Datum",
    "contact.form.time": "Vrijeme",
    "contact.form.guests": "Broj Gostiju",
    "contact.form.message": "Dodatne Napomene",
    "contact.form.submit": "Pošalji Rezervaciju",
    "contact.form.submitting": "Šaljem...",
    "contact.form.success": "Hvala! Vaša rezervacija je primljena. Kontaktirat ćemo vas uskoro.",
    "contact.form.error": "Greška pri slanju. Molimo pokušajte ponovno.",
    
    // Footer
    "footer.title": "Restoran Silba",
    "footer.tagline": "Svježa riba s Jadrana na otoku Silba",
    "footer.tradition": "Obiteljska tradicija već tri generacije",
    "footer.links": "Brze Poveznice",
    "footer.contact": "Kontakt",
    "footer.copyright": "Sva prava pridržana.",
  },
  en: {
    // Navigation
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Restaurant Silba",
    "hero.subtitle": "Fresh Adriatic Seafood on Silba Island",
    "hero.description": "Authentic island tavern with generational heritage",
    "hero.cta": "View Menu",
    
    // Menu
    "menu.title": "Our Menu",
    "menu.subtitle": "Daily fresh catch from the Adriatic Sea",
    "menu.specialty": "House Specialty",
    "menu.note": "* All prices in euros. All dishes prepared to order.",
    
    // Dishes
    "dish.seabass": "Grilled Sea Bass",
    "dish.seabass.desc": "Fresh sea bass from the grill with Swiss chard, potatoes and olive oil",
    "dish.octopus": "Octopus Under Peka",
    "dish.octopus.desc": "Traditional octopus baked under iron bell with potatoes and Swiss chard",
    "dish.squid": "Grilled Squid",
    "dish.squid.desc": "Fried squid stuffed with garlic and parsley, Swiss chard and potatoes",
    "dish.risotto": "Black Risotto",
    "dish.risotto.desc": "Black cuttlefish risotto with house white wine",
    "dish.octopus.salad": "Octopus Salad",
    "dish.octopus.salad.desc": "Octopus, potatoes, red onion, capers, olive oil and lemon",
    "dish.scampi": "Scampi Buzara",
    "dish.scampi.desc": "Dalmatian scampi in tomato, white wine and garlic sauce",
    "dish.seabream": "Grilled Sea Bream",
    "dish.seabream.desc": "Whole grilled sea bream, Swiss chard, potatoes, olive oil",
    "dish.platter": "Seafood Platter for Two",
    "dish.platter.desc": "Mix of grilled fish and shellfish - sea bass, sea bream, squid, scampi",
    "dish.mussels": "Mussels Buzara",
    "dish.mussels.desc": "Fresh mussels in tomato, white wine and garlic sauce",
    "dish.brudet": "Fish Stew",
    "dish.brudet.desc": "Traditional Dalmatian fish stew with polenta",
    "dish.scampi.risotto": "Scampi Risotto",
    "dish.scampi.risotto.desc": "Creamy risotto with Dalmatian scampi and white wine",
    "dish.tuna": "Tuna Steak",
    "dish.tuna.desc": "Grilled tuna steak with sesame and soy sauce",
    
    // About
    "about.title": "About Us",
    "about.subtitle": "Tradition, quality and love for the Adriatic",
    "about.story.title": "Our Story",
    "about.story.p1": "Restaurant Silba is a family tradition spanning three generations. Founded in 1965, our restaurant has become synonymous with fresh fish and authentic Dalmatian cuisine on Silba Island.",
    "about.story.p2": "Every fish we serve comes from the local catch of our fishermen, ensuring the highest quality and freshness. Our recipes are passed down through generations, preserving the authentic flavors of the Dalmatian coast.",
    "about.story.p3": "Located on the peaceful car-free island of Silba, we offer a unique gastronomic experience surrounded by crystal clear sea and untouched nature.",
    "about.tradition": "Family Tradition",
    "about.location": "Silba Island",
    "about.fishing": "Local Catch",
    
    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Peek into our world of flavors and ambiance",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Reserve a table or get in touch",
    "contact.location": "Location",
    "contact.hours": "Opening Hours",
    "contact.hours.daily": "Daily: 12:00 PM - 11:00 PM",
    "contact.hours.season": "Season: April - October",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.reservation.title": "Table Reservation",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.date": "Date",
    "contact.form.time": "Time",
    "contact.form.guests": "Number of Guests",
    "contact.form.message": "Additional Notes",
    "contact.form.submit": "Send Reservation",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Thank you! Your reservation has been received. We will contact you soon.",
    "contact.form.error": "Error sending. Please try again.",
    
    // Footer
    "footer.title": "Restaurant Silba",
    "footer.tagline": "Fresh Adriatic Seafood on Silba Island",
    "footer.tradition": "Family tradition for three generations",
    "footer.links": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("hr");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "hr" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}