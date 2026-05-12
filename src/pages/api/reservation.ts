import type { NextApiRequest, NextApiResponse } from "next";

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
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data: ReservationData = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({ 
        message: "Email service not configured. Please add RESEND_API_KEY to environment variables." 
      });
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: process.env.RESTAURANT_EMAIL || "info@otoc-silba.hr",
        subject: `Nova rezervacija - ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              Nova rezervacija stola
            </h2>
            
            <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Informacije o gostu</h3>
              <p><strong>Ime:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Telefon:</strong> ${data.phone}</p>
            </div>

            <div style="margin: 20px 0; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Detalji rezervacije</h3>
              <p><strong>Datum:</strong> ${new Date(data.date).toLocaleDateString('hr-HR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Vrijeme:</strong> ${data.time}</p>
              <p><strong>Broj osoba:</strong> ${data.guests}</p>
              ${data.message ? `<p><strong>Napomena:</strong> ${data.message}</p>` : ''}
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #dbeafe; border-left: 4px solid #2563eb; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Napomena:</strong> Molimo kontaktirajte gosta na ${data.email} ili ${data.phone} za potvrdu rezervacije.
              </p>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              Ova email poruka je automatski generirana iz web stranice Restoran Silba.
            </p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    // Send confirmation email to customer
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
        to: data.email,
        subject: "Potvrda rezervacije - Restoran Silba",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              Restoran Silba
            </h2>
            
            <p>Poštovani/a ${data.name},</p>
            
            <p>Hvala vam na rezervaciji! Primili smo vašu rezervaciju s sljedećim detaljima:</p>

            <div style="margin: 20px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
              <p><strong>Datum:</strong> ${new Date(data.date).toLocaleDateString('hr-HR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Vrijeme:</strong> ${data.time}</p>
              <p><strong>Broj osoba:</strong> ${data.guests}</p>
              ${data.message ? `<p><strong>Vaša napomena:</strong> ${data.message}</p>` : ''}
            </div>

            <div style="margin: 20px 0; padding: 15px; background-color: #dbeafe; border-left: 4px solid #2563eb; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Važno:</strong> Javit ćemo vam se uskoro za finalnu potvrdu rezervacije.
              </p>
            </div>

            <p>U slučaju bilo kakvih pitanja, možete nas kontaktirati:</p>
            <ul style="color: #374151;">
              <li>Telefon: +385 98 123 4567</li>
              <li>Email: info@otoc-silba.hr</li>
            </ul>

            <p>Radujemo se vašem dolasku!</p>
            
            <p style="margin-top: 30px;">
              S poštovanjem,<br>
              <strong>Tim Restoran Silba</strong>
            </p>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              Restoran Silba | Obala bb, 23450 Silba<br>
              info@otoc-silba.hr | +385 98 123 4567
            </p>
          </div>
        `,
      }),
    });

    return res.status(200).json({ 
      message: "Reservation received successfully",
      emailId: emailData.id 
    });

  } catch (error) {
    console.error("Error processing reservation:", error);
    return res.status(500).json({ 
      message: "Error processing reservation. Please try again or contact us directly." 
    });
  }
}