const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  serviceInterest?: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, serviceInterest, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email, company, serviceInterest, messageLength: message?.length });

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const SENDER_EMAIL = 'onboarding@resend.dev';
    const RECIPIENT_EMAIL = Deno.env.get('RECIPIENT_EMAIL');

    if (!RESEND_API_KEY || !RECIPIENT_EMAIL) {
      console.error("Missing RESEND_API_KEY or RECIPIENT_EMAIL environment variables.");
      return new Response(
        JSON.stringify({ error: "Server configuration error: Email service not properly set up." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1E3A8A; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1E3A8A; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #1E3A8A; margin: 15px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>JR Solvy Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Company:</span> ${company || 'Not provided'}
              </div>
              <div class="field">
                <span class="label">Service Interested In:</span> ${serviceInterest || 'Not specified'}
              </div>
              <div class="message-box">
                <div class="label">Message:</div>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>This email was sent from the JR Solvy contact form at ${new Date().toLocaleString()}</p>
                <p>Reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log("Sending email via Resend API...");

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Contact Form: ${serviceInterest || 'General Inquiry'} from ${name}`,
        html: htmlContent,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Error sending email via Resend:", resendResponse.status, resendResult);
      return new Response(
        JSON.stringify({ success: false, message: "Failed to send message. Please try again later.", details: resendResult }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Email sent successfully via Resend:", resendResult);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been received successfully! We'll get back to you within 2 hours.",
        timestamp: new Date().toISOString()
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process your message. Please try again later.", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
