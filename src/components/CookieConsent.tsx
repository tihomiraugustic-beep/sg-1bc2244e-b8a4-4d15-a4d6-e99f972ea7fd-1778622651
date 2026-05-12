"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics();
    }
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setPreferences(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const initializeAnalytics = () => {
    // Add Google Analytics or other tracking code here
    console.log("Analytics initialized");
  };

  const translations = {
    hr: {
      title: "Koristimo kolačiće",
      description: "Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj web stranici. Kolačići nam pomažu razumjeti kako koristite stranicu i prilagoditi sadržaj vašim potrebama.",
      acceptAll: "Prihvati sve",
      rejectAll: "Odbij sve",
      customize: "Prilagodi postavke",
      savePreferences: "Spremi postavke",
      necessary: "Nužni kolačići",
      necessaryDesc: "Potrebni za osnovno funkcioniranje stranice. Ne mogu se isključiti.",
      analytics: "Analitički kolačići",
      analyticsDesc: "Pomažu nam razumjeti kako posjetitelji koriste stranicu.",
      marketing: "Marketing kolačići",
      marketingDesc: "Koriste se za prikazivanje relevantnih oglasa.",
      settingsTitle: "Postavke kolačića",
      learnMore: "Saznaj više",
    },
    en: {
      title: "We use cookies",
      description: "We use cookies to improve your experience on our website. Cookies help us understand how you use the site and customize content to your needs.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      customize: "Customize Settings",
      savePreferences: "Save Preferences",
      necessary: "Necessary Cookies",
      necessaryDesc: "Required for basic site functionality. Cannot be disabled.",
      analytics: "Analytics Cookies",
      analyticsDesc: "Help us understand how visitors use the site.",
      marketing: "Marketing Cookies",
      marketingDesc: "Used to display relevant advertisements.",
      settingsTitle: "Cookie Settings",
      learnMore: "Learn more",
    },
  };

  const t = translations[language as keyof typeof translations];

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
            <div className="container mx-auto">
              <div className="bg-card border border-border rounded-lg shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
                <div className="flex items-start gap-4">
                  <Cookie className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t.description}{" "}
                      <Link 
                        href="/politika-privatnosti" 
                        className="text-primary hover:underline"
                      >
                        {t.learnMore}
                      </Link>
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        {t.acceptAll}
                      </Button>
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                      >
                        {t.rejectAll}
                      </Button>
                      <Button
                        onClick={() => setShowSettings(true)}
                        variant="ghost"
                        className="gap-2"
                      >
                        <Settings className="h-4 w-4" />
                        {t.customize}
                      </Button>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleRejectAll}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
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
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-accent" />
              {t.settingsTitle}
            </DialogTitle>
            <DialogDescription>
              {t.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Label htmlFor="necessary" className="font-semibold text-base">
                    {t.necessary}
                  </Label>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {language === "hr" ? "Uvijek aktivno" : "Always Active"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.necessaryDesc}
                </p>
              </div>
              <Switch
                id="necessary"
                checked={preferences.necessary}
                disabled
                className="mt-1"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <Label htmlFor="analytics" className="font-semibold text-base mb-2 block">
                  {t.analytics}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {t.analyticsDesc}
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked })
                }
                className="mt-1"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex-1">
                <Label htmlFor="marketing" className="font-semibold text-base mb-2 block">
                  {t.marketing}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {t.marketingDesc}
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked })
                }
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t.savePreferences}
            </Button>
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              className="flex-1"
            >
              {t.acceptAll}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}