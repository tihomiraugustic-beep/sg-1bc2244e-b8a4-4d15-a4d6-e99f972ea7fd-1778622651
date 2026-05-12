import { Anchor, MapPin, Ship } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <section id="o-nama" className="py-16 md:py-20 lg:py-32 bg-card">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            {t("about.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary">
              {t("about.story.title")}
            </h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t("about.fishing")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("about.story.p2")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Anchor className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t("about.tradition")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("about.story.p1")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{t("about.location")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("about.story.p3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}