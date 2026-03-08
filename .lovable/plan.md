
Goal
- Fix contact form submission failing with 500 from Supabase Edge Function `send-contact-email`.
- Ensure the contact form fields match what the Edge Function expects.
- Keep Nigeria-focused contact options (WhatsApp, phone in header) and the “We reply within 2 hours” messaging.

What the error means (your screenshots/logs)
1) `POST https://cgneawqstfihvtxzoemd.supabase.co/functions/v1/send-contact-email 500`
- The browser successfully reached Supabase and called the Edge Function.
- A 500 means the Edge Function ran but returned an internal error.

2) Edge Function logs show the real cause:
- `Error sending email via Brevo: 401 { message: "API Key is not enabled", code: "unauthorized" }`
- This means Brevo rejected the request because the API key is either:
  - not enabled for SMTP/Transactional Email, or
  - not allowed to use the endpoint, or
  - the account is restricted until setup is completed.
- Our function currently converts that Brevo 401 into a 500 response to the frontend, which is why you see 500.

3) There is also a data mismatch risk (not the main crash, but we should fix it):
- Frontend currently sends: `company`, `serviceInterest`
- Edge function currently expects: `phone`, `projectType`
- This doesn’t necessarily crash, but it causes emails/subjects to be missing the intended fields and makes future validation confusing.

Plan (recommended fix: switch email sending to Resend)
Reason: You already have `RESEND_API_KEY` secret configured, and Resend is usually simpler/less error-prone than Brevo for transactional contact forms.

Step 1 — Update the Edge Function to use Resend instead of Brevo
- Edit `supabase/functions/send-contact-email/index.ts`:
  - Replace the Brevo fetch call with Resend SDK usage.
  - Read secrets:
    - `RESEND_API_KEY`
    - `SENDER_EMAIL` (or use a Resend verified sender like `onboarding@resend.dev` temporarily)
    - `RECIPIENT_EMAIL`
  - Keep CORS handling as-is.
  - Improve error logging so we can see Resend errors clearly (status + message).
  - Return 200 on success, 4xx for validation issues, and 5xx only for real server issues.

Step 2 — Align request payload between frontend and Edge Function
- Decide the canonical fields we want to store/send:
  - name (required)
  - email (required)
  - company (optional)
  - serviceInterest (optional but recommended)
  - message (required)
- Update the Edge Function interface and destructuring accordingly:
  - Replace `phone` / `projectType` with `company` / `serviceInterest`.
- Update the HTML email template to display:
  - Company
  - Service Interested In
  - Message
  - Reply-To set to the user’s email (so you can reply directly)

Step 3 — Keep the Nigeria contact UX (no major changes, just ensure everything is consistent)
- Confirm the WhatsApp button URL format is correct: `https://wa.me/2347083057837`
- Confirm the phone number in Navbar uses `tel:+2347083057837`
- Keep the “We reply within 2 hours” text:
  - On the contact page (near WhatsApp + form)
  - In the success toast message

Step 4 — Validate with logs
- After implementation:
  - Submit the form once.
  - Check Supabase Edge Function logs for:
    - “Received contact form submission”
    - “Email sent successfully”
  - Confirm the UI shows success toast, and email arrives at RECIPIENT_EMAIL.

Step 5 (optional fallback) — If you prefer staying on Brevo instead
- If you want Brevo specifically, the fix is on the Brevo account side:
  - Ensure Transactional Email is activated
  - Ensure the API key has SMTP/email permissions enabled
  - Ensure sender email/domain is verified
- Then we keep current Brevo code, but:
  - Update it to include company/serviceInterest
  - Improve surfaced error message so it doesn’t just look like “500”

Files involved
- Backend: `supabase/functions/send-contact-email/index.ts` (main fix)
- Frontend: `src/components/ContactForm.tsx` (already sending company/serviceInterest; we’ll keep or slightly refine)
- Optional: `src/pages/Contact.tsx` and `src/components/Navbar.tsx` only if we need to adjust phone/WhatsApp formatting (likely fine as-is)

Acceptance criteria
- Contact form submits without errors.
- Edge Function returns 200 and logs “Email sent successfully”.
- Admin receives email containing name, email, company (if provided), serviceInterest (if chosen), and message.
- UI displays “We reply within 2 hours” and success toast confirms it.
