"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Ship, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
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
          title: t("contact.form.success"),
          description: t("contact.form.success"),
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
          title: t("contact.form.error"),
          description: data.error || t("contact.form.error"),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("contact.form.error"),
        description: t("contact.form.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-20 lg:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Contact Information Grid - Stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-accent mt-1">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.location")}</h3>
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
                <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                <p className="text-muted-foreground">+385 23 370 XXX</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-accent mt-1">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
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
                <h3 className="font-semibold mb-1">{t("contact.hours")}</h3>
                <p className="text-muted-foreground">
                  {t("contact.hours.daily")}<br />
                  {t("contact.hours.season")}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps Embed */}
        <div className="rounded-lg overflow-hidden border border-border shadow-md mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11588.427947864147!2d14.694684!3d44.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47634e0f0f0f0f0f%3A0x0!2sSilba%2C%20Croatia!5e0!3m2!1sen!2shr!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("contact.location")}
            className="w-full"
          />
        </div>
        
        <div className="bg-muted/50 rounded-lg p-8">
          <h3 className="font-serif text-2xl font-semibold mb-3 text-primary text-center">
            {t("contact.reservation.title")}
          </h3>
          <p className="text-muted-foreground mb-6 text-center">
            {t("contact.subtitle")}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t("contact.form.name")} *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t("contact.form.name")}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact.form.email")} *</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">{t("contact.form.phone")} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+385 91 234 5678"
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests">{t("contact.form.guests")} *</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  name="guests"
                  placeholder="2"
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.guests}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">{t("contact.form.date")} *</Label>
                <Input
                  id="date"
                  type="date"
                  name="date"
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.date}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">{t("contact.form.time")} *</Label>
                <Input
                  id="time"
                  type="time"
                  name="time"
                  disabled={isSubmitting}
                  onChange={handleChange}
                  value={formData.time}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("contact.form.message")}
                rows={4}
                disabled={isSubmitting}
                onChange={handleChange}
                value={formData.message}
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
                  {t("contact.form.submitting")}
                </>
              ) : (
                t("contact.form.submit")
              )}
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              * {t("contact.form.name")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}