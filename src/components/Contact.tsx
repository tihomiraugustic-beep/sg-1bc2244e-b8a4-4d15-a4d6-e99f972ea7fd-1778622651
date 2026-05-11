"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Ship, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const reservationSchema = z.object({
  name: z.string().min(2, "Ime mora imati najmanje 2 znaka"),
  email: z.string().email("Unesite ispravnu email adresu"),
  phone: z.string().min(9, "Unesite ispravan broj telefona"),
  date: z.string().min(1, "Odaberite datum"),
  time: z.string().min(1, "Odaberite vrijeme"),
  guests: z.string().min(1, "Unesite broj gostiju"),
  message: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          guests: parseInt(data.guests),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Rezervacija poslana!",
          description: result.message,
        });
        reset();
      } else {
        toast({
          title: "Greška",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Greška",
        description: "Nešto je pošlo po krivu. Molimo pokušajte ponovo.",
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
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ime i Prezime *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Vaše ime"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="vas@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+385 91 234 5678"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Broj Gostiju *</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    {...register("guests")}
                    placeholder="2"
                    disabled={isSubmitting}
                  />
                  {errors.guests && (
                    <p className="text-sm text-destructive">{errors.guests.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Datum *</Label>
                  <Input
                    id="date"
                    type="date"
                    {...register("date")}
                    disabled={isSubmitting}
                  />
                  {errors.date && (
                    <p className="text-sm text-destructive">{errors.date.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Vrijeme *</Label>
                  <Input
                    id="time"
                    type="time"
                    {...register("time")}
                    disabled={isSubmitting}
                  />
                  {errors.time && (
                    <p className="text-sm text-destructive">{errors.time.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Posebne Napomene (opcionalno)</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Alergije, posebni zahtjevi, proslave..."
                  rows={4}
                  disabled={isSubmitting}
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