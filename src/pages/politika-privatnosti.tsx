import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    hr: {
      title: "Politika Privatnosti",
      lastUpdated: "Posljednje ažurirano: 12. svibnja 2026.",
      intro: "Restoran Silba poštuje vašu privatnost i zalaže se za zaštitu vaših osobnih podataka. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše informacije.",
      sections: [
        {
          icon: FileText,
          title: "1. Podaci koje prikupljamo",
          content: [
            "Prilikom rezervacije stola ili kontaktiranja prikupljamo sljedeće podatke:",
            "• Ime i prezime",
            "• Email adresu",
            "• Telefonski broj",
            "• Datum i vrijeme rezervacije",
            "• Broj gostiju",
            "• Posebne zahtjeve (alergije, prehrambene preferencije)",
            "",
            "Podaci se prikupljaju isključivo putem kontakt forme na našoj web stranici ili telefonskim putem."
          ]
        },
        {
          icon: Lock,
          title: "2. Kako koristimo vaše podatke",
          content: [
            "Vaše osobne podatke koristimo isključivo u sljedeće svrhe:",
            "• Potvrda i upravljanje rezervacijama",
            "• Kontaktiranje u vezi vaše rezervacije",
            "• Odgovaranje na vaša pitanja i zahtjeve",
            "• Poboljšanje kvalitete naših usluga",
            "",
            "Vaše podatke NIKADA ne prodajemo, ne iznajmljujemo niti dijelimo s trećim stranama u marketinške svrhe."
          ]
        },
        {
          icon: Shield,
          title: "3. Zaštita podataka",
          content: [
            "Koristimo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka:",
            "• SSL enkripcija za prijenos podataka",
            "• Siguran hosting infrastruktura",
            "• Ograničen pristup podacima samo ovlaštenom osoblju",
            "• Redovno brisanje starih rezervacija (starijih od 12 mjeseci)",
            "",
            "Vaši podaci se pohranjuju na sigurnim serverima unutar Europske unije."
          ]
        },
        {
          icon: Eye,
          title: "4. Kolačići (Cookies)",
          content: [
            "Naša web stranica koristi osnovne kolačiće za:",
            "• Pamćenje odabira jezika (hrvatski/engleski)",
            "• Pamćenje odabira teme (light/dark mode)",
            "• Poboljšanje korisničkog iskustva",
            "",
            "Ne koristimo kolačiće za praćenje (tracking) ili marketinške svrhe. Možete onemogućiti kolačiće u postavkama vašeg preglednika, ali to može utjecati na funkcionalnost stranice."
          ]
        },
        {
          icon: FileText,
          title: "5. Vaša prava",
          content: [
            "U skladu s GDPR-om (Općom uredbom o zaštiti podataka), imate sljedeća prava:",
            "• Pravo pristupa svojim podacima",
            "• Pravo na ispravak netočnih podataka",
            "• Pravo na brisanje podataka ('pravo na zaborav')",
            "• Pravo na ograničenje obrade",
            "• Pravo na prenosivost podataka",
            "• Pravo na prigovor obradi",
            "",
            "Za ostvarivanje svojih prava, kontaktirajte nas putem email-a ili telefona navedenih ispod."
          ]
        },
        {
          icon: Mail,
          title: "6. Kontakt",
          content: [
            "Za sva pitanja vezana uz zaštitu vaših osobnih podataka, kontaktirajte nas:",
            "",
            "Email: info@otoc-silba.hr",
            "Telefon: +385 23 370 XXX",
            "Adresa: Obala bb, 23450 Silba, Hrvatska",
            "",
            "Odgovorit ćemo na vaš upit u roku od 30 dana."
          ]
        },
        {
          icon: Shield,
          title: "7. Promjene politike privatnosti",
          content: [
            "Zadržavamo pravo ažuriranja ove politike privatnosti. Sve promjene bit će objavljene na ovoj stranici s datumom posljednjeg ažuriranja.",
            "",
            "Preporučujemo povremenu provjeru ove stranice kako biste bili informirani o načinu na koji štitimo vaše podatke."
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 12, 2026",
      intro: "Restoran Silba respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information.",
      sections: [
        {
          icon: FileText,
          title: "1. Data We Collect",
          content: [
            "When making a reservation or contacting us, we collect the following data:",
            "• Full name",
            "• Email address",
            "• Phone number",
            "• Reservation date and time",
            "• Number of guests",
            "• Special requests (allergies, dietary preferences)",
            "",
            "Data is collected exclusively through the contact form on our website or by phone."
          ]
        },
        {
          icon: Lock,
          title: "2. How We Use Your Data",
          content: [
            "We use your personal data exclusively for the following purposes:",
            "• Confirming and managing reservations",
            "• Contacting you regarding your reservation",
            "• Responding to your questions and requests",
            "• Improving the quality of our services",
            "",
            "We NEVER sell, rent, or share your data with third parties for marketing purposes."
          ]
        },
        {
          icon: Shield,
          title: "3. Data Protection",
          content: [
            "We use appropriate technical and organizational measures to protect your personal data:",
            "• SSL encryption for data transmission",
            "• Secure hosting infrastructure",
            "• Limited data access to authorized personnel only",
            "• Regular deletion of old reservations (older than 12 months)",
            "",
            "Your data is stored on secure servers within the European Union."
          ]
        },
        {
          icon: Eye,
          title: "4. Cookies",
          content: [
            "Our website uses basic cookies for:",
            "• Remembering language selection (Croatian/English)",
            "• Remembering theme selection (light/dark mode)",
            "• Improving user experience",
            "",
            "We do not use tracking or marketing cookies. You can disable cookies in your browser settings, but this may affect site functionality."
          ]
        },
        {
          icon: FileText,
          title: "5. Your Rights",
          content: [
            "In accordance with GDPR (General Data Protection Regulation), you have the following rights:",
            "• Right of access to your data",
            "• Right to rectification of inaccurate data",
            "• Right to erasure ('right to be forgotten')",
            "• Right to restriction of processing",
            "• Right to data portability",
            "• Right to object to processing",
            "",
            "To exercise your rights, contact us via email or phone listed below."
          ]
        },
        {
          icon: Mail,
          title: "6. Contact",
          content: [
            "For all questions regarding the protection of your personal data, contact us:",
            "",
            "Email: info@otoc-silba.hr",
            "Phone: +385 23 370 XXX",
            "Address: Obala bb, 23450 Silba, Croatia",
            "",
            "We will respond to your inquiry within 30 days."
          ]
        },
        {
          icon: Shield,
          title: "7. Privacy Policy Changes",
          content: [
            "We reserve the right to update this privacy policy. All changes will be published on this page with the date of last update.",
            "",
            "We recommend checking this page periodically to stay informed about how we protect your data."
          ]
        }
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <>
      <SEO
        title={`${currentContent.title} - Restoran Silba`}
        description="Saznajte kako Restoran Silba prikuplja, koristi i štiti vaše osobne podatke. Poštujemo vašu privatnost i pridržavamo se GDPR-a."
      />
      <Navigation />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-20">
          <div className="container px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                {currentContent.title}
              </h1>
              <p className="text-muted-foreground text-sm">
                {currentContent.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <motion.div
                className="mb-12 p-6 bg-card rounded-lg border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-foreground leading-relaxed">
                  {currentContent.intro}
                </p>
              </motion.div>

              {/* Sections */}
              <div className="space-y-8">
                {currentContent.sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-card rounded-lg border border-border p-6 md:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-primary">
                          {section.title}
                        </h2>
                      </div>
                      <div className="ml-14 space-y-2">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Back to Home */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <a
                  href="/"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  ← {language === "hr" ? "Povratak na početnu" : "Back to Home"}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}