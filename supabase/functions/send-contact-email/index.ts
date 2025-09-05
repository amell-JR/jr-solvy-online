const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, projectType, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, projectType, messageLength: message.length });

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Retrieve Brevo API key and emails from environment variables
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    const SENDER_EMAIL = Deno.env.get('SENDER_EMAIL');
    const RECIPIENT_EMAIL = Deno.env.get('RECIPIENT_EMAIL');

    if (!BREVO_API_KEY || !SENDER_EMAIL || !RECIPIENT_EMAIL) {
      console.error("Brevo API key or email environment variables are not set.");
      return new Response(
        JSON.stringify({ error: "Server configuration error: Email service not properly set up." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Construct the HTML content for the email
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
                <span class="label">Phone:</span> ${phone || 'Not provided'}
              </div>
              <div class="field">
                <span class="label">Project Type:</span> ${projectType || 'Not specified'}
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

    // Prepare the payload for the Brevo API
    const brevoPayload = {
      sender: {
        name: "JR Solvy Contact Form",
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: RECIPIENT_EMAIL,
          name: "JR Solvy Admin",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New Contact Form Submission: ${projectType || 'General Inquiry'} from ${name}`,
      htmlContent: htmlContent,
    };

    console.log("Sending email via Brevo API...");

    // Send the email using Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error("Error sending email via Brevo:", brevoResponse.status, errorData);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Failed to send message. Please try again later.",
          details: errorData 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const brevoResult = await brevoResponse.json();
    console.log("Email sent successfully via Brevo:", brevoResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been received successfully! We'll get back to you within 24 hours.",
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to process your message. Please try again later.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});