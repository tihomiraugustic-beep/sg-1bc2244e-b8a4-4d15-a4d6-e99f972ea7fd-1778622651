import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ReservationData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, date, time, guests, message }: ReservationData = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: "Sva obavezna polja moraju biti popunjena." });
    }

    // Create nodemailer transporter
    // For development, you can use ethereal.email or configure your own SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to restaurant
    const restaurantMailOptions = {
      from: `"Restoran Silba" <${process.env.SMTP_USER}>`,
      to: process.env.RESTAURANT_EMAIL || "info@otoc-silba.hr",
      subject: `Nova Rezervacija - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563A5;">Nova Rezervacija</h2>
          <p>Primljena je nova rezervacija sa sljedećim detaljima:</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Ime i prezime:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Datum:</strong> ${date}</p>
            <p><strong>Vrijeme:</strong> ${time}</p>
            <p><strong>Broj gostiju:</strong> ${guests}</p>
            ${message ? `<p><strong>Napomena:</strong> ${message}</p>` : ""}
          </div>
          
          <p>Molimo kontaktirajte gosta za potvrdu rezervacije.</p>
        </div>
      `,
    };

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: `"Restoran Silba" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Potvrda Rezervacije - Restoran Silba",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563A5;">Poštovani/a ${name},</h2>
          <p>Hvala što ste odabrali Restoran Silba! Primili smo Vašu rezervaciju sa sljedećim detaljima:</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Datum:</strong> ${date}</p>
            <p><strong>Vrijeme:</strong> ${time}</p>
            <p><strong>Broj gostiju:</strong> ${guests}</p>
            ${message ? `<p><strong>Vaša napomena:</strong> ${message}</p>` : ""}
          </div>
          
          <p>Ukoliko trebate promijeniti ili otkazati rezervaciju, molimo kontaktirajte nas putem telefona.</p>
          <p>Veselimo se Vašem dolasku!</p>
          <p>Srdačan pozdrav,<br><strong>Tim Restoran Silba</strong></p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin-top: 30px;" />
          <div style="color: #777; font-size: 12px; margin-top: 10px;">
            <p>
              Restoran Silba | Obala bb, 23450 Silba | +385 23 370 XXX<br>
              Ovaj email je generiran automatski. Molimo ne odgovarajte direktno na ovu poruku.
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(restaurantMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ 
      success: true, 
      message: "Rezervacija uspješno poslana!" 
    });
  } catch (error) {
    console.error("Error sending reservation:", error);
    res.status(500).json({ 
      error: "Došlo je do greške pri slanju rezervacije. Molimo pokušajte ponovo ili nas kontaktirajte telefonom." 
    });
  }
}