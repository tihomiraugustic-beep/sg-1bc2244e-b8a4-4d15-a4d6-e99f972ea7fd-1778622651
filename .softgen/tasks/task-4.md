---
title: Reservation Form with Email
status: todo
priority: high
type: feature
tags: [form, email, api]
created_by: agent
created_at: 2026-05-11T23:02:52Z
position: 4
---

## Notes
Create functional reservation form that sends email notifications. Use React Hook Form for validation and Next.js API route with nodemailer for email delivery.

## Checklist
- [ ] Install nodemailer dependency
- [ ] Create API endpoint /api/reservation for handling form submissions
- [ ] Update Contact component with reservation form (name, email, phone, date, time, guests, message)
- [ ] Add form validation with React Hook Form + Zod
- [ ] Implement loading and success/error states
- [ ] Configure SMTP settings via environment variables
- [ ] Add user feedback (toast notifications)

## Acceptance
- Form validates all required fields before submission
- Successful submission sends email and shows confirmation
- Error handling provides clear feedback to user