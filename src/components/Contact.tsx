"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Rezervacija uspješna!",
          description: "Vaša rezervacija je primljena. Poslali smo vam potvrdu na email.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          message: "",
        });
      } else {
        toast({
          title: "Greška",
          description: data.error || "Dogodila se greška pri slanju rezervacije.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Greška",
        description: "Nismo mogli poslati vašu rezervaciju. Molimo pokušajte ponovo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 scroll-mt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            Posjetite Nas
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Čekamo vas u srcu otoka Silba
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adresa</h3>
                  <p className="text-muted-foreground">
                    Obala bb<br />
                    23450 Silba<br />
                    Hrvatska
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <p className="text-muted-foreground">+385 23 370 XXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@otoc-silba.hr</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Radno Vrijeme</h3>
                  <p className="text-muted-foreground">
                    Ponedjeljak - Nedjelja<br />
                    12:00 - 23:00<br />
                    (Sezonsko: Travanj - Listopad)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-accent mt-1">
                  <Ship className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Kako Doći</h3>
                  <p className="text-muted-foreground">
                    Trajekt iz Zadra prema Silbi<br />
                    Otok je bez automobila<br />
                    Pješice 5 min od pristaništa
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-semibold mb-3 text-primary text-center">
              Rezervirajte Stol
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Preporučujemo rezervaciju, posebno tijekom ljetne sezone
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ime i Prezime *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Vaše ime"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="vas@email.com"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+385 91 234 5678"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Broj Gostiju *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    name="guests"
                    placeholder="2"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Datum *</Label>
                  <Input
                    id="date"
                    type="date"
                    name="date"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Vrijeme *</Label>
                  <Input
                    id="time"
                    type="time"
                    name="time"
                    disabled={isSubmitting}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Posebne Napomene (opcionalno)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Alergije, posebni zahtjevi, proslave..."
                  rows={4}
                  disabled={isSubmitting}
                  onChange={handleChange}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Šaljem...
                  </>
                ) : (
                  "Pošalji Rezervaciju"
                )}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Obavezna polja
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}