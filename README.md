# Restoran Silba - Website

Premium fish restaurant website showcasing fresh Adriatic seafood on the car-free island of Silba.

## Features

- 🎨 Modern, responsive design with Adriatic coastal theme
- 📧 Email-based reservation system
- 🌍 Bilingual support (Croatian/English)
- 🍽️ Interactive menu with dish galleries
- 📸 Photo gallery with lightbox
- 🗺️ Integrated Google Maps
- 🍪 GDPR-compliant cookie consent
- ⚡ Built with Next.js 15, TypeScript, and Tailwind CSS

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

### 3. Set Up Email Service (Resend)

The reservation form uses [Resend](https://resend.com) for email delivery.

1. **Create a Resend account** at https://resend.com
2. **Get your API key** from https://resend.com/api-keys
3. **Add your API key** to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Configure sender email** (optional):
   - For testing: use default `onboarding@resend.dev`
   - For production: verify your domain in Resend and update:
     ```
     RESEND_FROM_EMAIL=noreply@yourdomain.com
     ```

5. **Set restaurant email** to receive reservations:
   ```
   RESTAURANT_EMAIL=info@otoc-silba.hr
   ```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Reservation System

The website includes an email-based reservation system:

- **Customer fills out form** with name, email, phone, date, time, guests, and optional message
- **Two emails are sent automatically:**
  1. Notification email to restaurant (`RESTAURANT_EMAIL`)
  2. Confirmation email to customer
- **Restaurant staff** contacts customer to confirm reservation

### Testing Reservations

During development with default Resend settings:
- Emails will be sent from `onboarding@resend.dev`
- Check Resend dashboard to see sent emails
- For production, verify your domain in Resend

## Tech Stack

- **Framework:** Next.js 15 (Page Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Email:** Resend API
- **Forms:** React Hook Form

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── ...
├── pages/           # Next.js pages
│   ├── api/        # API routes
│   └── index.tsx   # Home page
├── contexts/        # React contexts
├── hooks/          # Custom hooks
├── styles/         # Global styles
└── lib/            # Utilities

public/
├── generated/      # AI-generated images
└── ...
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESTAURANT_EMAIL`
4. Deploy!

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key from Resend | Yes |
| `RESEND_FROM_EMAIL` | Sender email address | No (defaults to onboarding@resend.dev) |
| `RESTAURANT_EMAIL` | Email to receive reservations | No (defaults to info@otoc-silba.hr) |

## License

© 2026 Restoran Silba. All rights reserved.