"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, BarChart, Target, X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
    }

    // Listen for custom event to reopen settings
    const handleOpenSettings = () => {
      setShowSettings(true);
    };
    
    window.addEventListener("openCookieSettings", handleOpenSettings);
    
    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings);
    };
  }, []);

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize analytics if accepted
    if (prefs.analytics) {
      // Google Analytics initialization would go here
      console.log("Analytics enabled");
    }
    
    // Initialize marketing if accepted
    if (prefs.marketing) {
      // Marketing cookies initialization would go here
      console.log("Marketing enabled");
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      hr: {
        "banner.title": "Koristimo kolačiće",
        "banner.description": "Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj web stranici. Kliknite 'Prihvati sve' za sve kolačiće ili 'Prilagodi postavke' za više opcija.",
        "banner.acceptAll": "Prihvati sve",
        "banner.rejectAll": "Odbij sve",
        "banner.customize": "Prilagodi postavke",
        "banner.learnMore": "Saznaj više",
        
        "settings.title": "Postavke kolačića",
        "settings.description": "Ovdje možete upravljati svojim preferencijama za kolačiće. Nužni kolačići su uvijek aktivni jer su potrebni za osnovno funkcioniranje web stranice.",
        
        "necessary.title": "Nužni kolačići",
        "necessary.description": "Ovi kolačići su neophodni za pravilno funkcioniranje web stranice i ne mogu se isključiti. Uključuju postavke jezika, prijavu i osnovne sigurnosne značajke.",
        "necessary.always": "Uvijek aktivni",
        
        "analytics.title": "Analitički kolačići",
        "analytics.description": "Pomažu nam razumjeti kako posjetitelji koriste našu web stranicu prikupljanjem i prijavljivanjem anonimnih informacija. Koristimo Google Analytics.",
        
        "marketing.title": "Marketing kolačići",
        "marketing.description": "Koriste se za praćenje posjetitelja kroz različite web stranice. Cilj im je prikazivanje oglasa koji su relevantni i zanimljivi pojedinom korisniku.",
        
        "settings.saveSettings": "Spremi postavke",
        "settings.acceptAll": "Prihvati sve"
      },
      en: {
        "banner.title": "We use cookies",
        "banner.description": "We use cookies to improve your experience on our website. Click 'Accept all' for all cookies or 'Customize settings' for more options.",
        "banner.acceptAll": "Accept all",
        "banner.rejectAll": "Reject all",
        "banner.customize": "Customize settings",
        "banner.learnMore": "Learn more",
        
        "settings.title": "Cookie Settings",
        "settings.description": "Here you can manage your cookie preferences. Necessary cookies are always active as they are required for the basic functioning of the website.",
        
        "necessary.title": "Necessary Cookies",
        "necessary.description": "These cookies are essential for the website to function properly and cannot be disabled. They include language settings, login, and basic security features.",
        "necessary.always": "Always active",
        
        "analytics.title": "Analytics Cookies",
        "analytics.description": "Help us understand how visitors use our website by collecting and reporting anonymous information. We use Google Analytics.",
        
        "marketing.title": "Marketing Cookies",
        "marketing.description": "Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
        
        "settings.saveSettings": "Save Settings",
        "settings.acceptAll": "Accept All"
      }
    };

    return translations[language]?.[key] || key;
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="bg-card border border-border rounded-lg shadow-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {t("banner.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t("banner.description")}{" "}
                      <Link href="/politika-privatnosti" className="text-accent hover:underline">
                        {t("banner.learnMore")}
                      </Link>
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        onClick={acceptAll}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        {t("banner.acceptAll")}
                      </Button>
                      <Button
                        onClick={rejectAll}
                        variant="outline"
                      >
                        {t("banner.rejectAll")}
                      </Button>
                      <Button
                        onClick={() => {
                          setShowSettings(true);
                          setShowBanner(false);
                        }}
                        variant="ghost"
                      >
                        {t("banner.customize")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif flex items-center gap-2">
              <Cookie className="w-6 h-6 text-accent" />
              {t("settings.title")}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              {t("settings.description")}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-base font-semibold">
                      {t("necessary.title")}
                    </Label>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {t("necessary.always")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("necessary.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3 p-4 border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <BarChart className="w-5 h-5 text-accent mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="analytics" className="text-base font-semibold cursor-pointer">
                      {t("analytics.title")}
                    </Label>
                    <Switch
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, analytics: checked }))
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("analytics.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3 p-4 border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-accent mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="marketing" className="text-base font-semibold cursor-pointer">
                      {t("marketing.title")}
                    </Label>
                    <Switch
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, marketing: checked }))
                      }
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("marketing.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button
              onClick={handleSaveSettings}
              variant="outline"
              className="flex-1"
            >
              {t("settings.saveSettings")}
            </Button>
            <Button
              onClick={acceptAll}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t("settings.acceptAll")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}