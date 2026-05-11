"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
  return (
    <a
      href="tel:+38598123456"
      className="fixed bottom-6 right-6 z-50 md:hidden"
      aria-label="Nazovi restoran"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </a>
  );
}