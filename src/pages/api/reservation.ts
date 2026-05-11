import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ReservationData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, date, time, guests, message }: ReservationData = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: "Molimo popunite sva obavezna polja" });
    }

    // Create nodemailer transporter
    // For development, you can use ethereal.email or configure your own SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to restaurant
    const restaurantEmail = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RESTAURANT_EMAIL || "info@otoc-silba.hr",
      subject: `Nova Rezervacija - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563A5;">Nova Rezervacija Stola</h2>
          
          <div style="background: #F5F0E8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Detalji Rezervacije:</h3>
            <p><strong>Ime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Datum:</strong> ${date}</p>
            <p><strong>Vrijeme:</strong> ${time}</p>
            <p><strong>Broj gostiju:</strong> ${guests}</p>
            ${message ? `<p><strong>Napomena:</strong> ${message}</p>` : ""}
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Ova rezervacija je poslana putem web forme na otoc-silba.hr
          </p>
        </div>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Potvrda Rezervacije - Otoč Restoran",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563A5;">Potvrda Vaše Rezervacije</h2>
          
          <p>Poštovani ${name},</p>
          
          <p>Hvala što ste odabrali Otoč restoran! Primili smo Vašu rezervaciju sa sljedećim detaljima:</p>
          
          <div style="background: #F5F0E8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Datum:</strong> ${date}</p>
            <p><strong>Vrijeme:</strong> ${time}</p>
            <p><strong>Broj gostiju:</strong> ${guests}</p>
          </div>
          
          <p>Kontaktirat ćemo Vas uskoro telefonom na broj ${phone} kako bismo potvrdili rezervaciju.</p>
          
          <p>Veselimo se Vašem posjetu!</p>
          
          <p style="margin-top: 30px;">
            S poštovanjem,<br>
            <strong>Tim Otoč Restorana</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Otoč Restoran | Obala bb, 23450 Silba | +385 23 370 XXX<br>
            info@otoc-silba.hr
          </p>
        </div>
      `,
    };

    // Send emails
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(restaurantEmail);
      await transporter.sendMail(customerEmail);
      
      return res.status(200).json({ 
        message: "Rezervacija uspješno poslana! Provjerite svoj email za potvrdu." 
      });
    } else {
      // If SMTP not configured, just log and return success
      console.log("Reservation received:", { name, email, phone, date, time, guests, message });
      console.log("Note: SMTP not configured. Set SMTP_USER and SMTP_PASS environment variables to enable email sending.");
      
      return res.status(200).json({ 
        message: "Rezervacija primljena! (Email nije poslan - SMTP nije konfiguriran)" 
      });
    }
  } catch (error) {
    console.error("Error sending reservation:", error);
    return res.status(500).json({ 
      message: "Greška prilikom slanja rezervacije. Molimo pokušajte ponovo ili nas kontaktirajte telefonom." 
    });
  }
}