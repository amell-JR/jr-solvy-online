import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const brevoApiKey = Deno.env.get("BREVO_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
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
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Function to send email using Brevo API
    const sendBrevoEmail = async (emailData: any) => {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": brevoApiKey!,
          "content-type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
      }

      return await response.json();
    };

    // 1. Send notification email to you (Robert)
    const notificationEmailData = {
      sender: {
        name: "JRsolvy Website",
        email: "noreply@jrsolvy.com"
      },
      to: [
        {
          email: "robertsunday333@gmail.com",
          name: "Robert Sunday"
        }
      ],
      subject: `🚨 New Contact Form Message from ${name}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1E3A8A, #14B8A6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #14B8A6; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            .urgent { background: #FEF3C7; border-color: #F59E0B; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚨 New Contact Form Submission</h1>
              <p>You have received a new message through JRsolvy.com</p>
            </div>
            <div class="content">
              <div class="field">
                <strong>👤 Name:</strong><br>
                ${name}
              </div>
              <div class="field">
                <strong>📧 Email:</strong><br>
                <a href="mailto:${email}">${email}</a>
              </div>
              ${phone ? `
              <div class="field">
                <strong>📱 Phone:</strong><br>
                <a href="tel:${phone}">${phone}</a>
              </div>
              ` : ''}
              ${projectType ? `
              <div class="field">
                <strong>🎯 Project Type:</strong><br>
                ${projectType.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </div>
              ` : ''}
              <div class="field urgent">
                <strong>💬 Message:</strong><br>
                ${message.replace(/\n/g, '<br>')}
              </div>
              <div class="field">
                <strong>🕐 Received:</strong><br>
                ${new Date().toLocaleString()}
              </div>
            </div>
            <div class="footer">
              <p>💡 <strong>Quick Response Tips:</strong></p>
              <p>• Reply within 24 hours for best conversion</p>
              <p>• Ask clarifying questions about their project</p>
              <p>• Provide a rough timeline and next steps</p>
              <hr>
              <p>This email was sent from your JRsolvy website contact form.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: {
        email: email,
        name: name
      }
    };

    // 2. Send auto-response confirmation email to customer
    const autoResponseEmailData = {
      sender: {
        name: "Robert Sunday - JRsolvy",
        email: "robertsunday333@gmail.com"
      },
      to: [
        {
          email: email,
          name: name
        }
      ],
      subject: `✅ Message Received - We'll Be In Touch Soon!`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1E3A8A, #14B8A6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: white; padding: 20px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #14B8A6; }
            .services { background: white; padding: 20px; margin: 15px 0; border-radius: 5px; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
            .cta { background: #14B8A6; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Thank You, ${name}!</h1>
              <p>Your message has been received successfully</p>
            </div>
            <div class="content">
              <div class="highlight">
                <h3>🚀 What Happens Next?</h3>
                <ul>
                  <li><strong>Within 24 hours:</strong> I'll personally review your message and respond with initial thoughts</li>
                  <li><strong>Within 48 hours:</strong> We'll schedule a call/meeting to discuss your project in detail</li>
                  <li><strong>Project Timeline:</strong> I'll provide a clear roadmap and estimated timeline</li>
                </ul>
              </div>
              
              <div class="services">
                <h3>🛠️ Our Services Include:</h3>
                <ul>
                  <li><strong>AI & Software Solutions:</strong> Custom AI apps, translation tools, automation</li>
                  <li><strong>Web & Mobile Development:</strong> Modern websites, mobile apps, e-commerce</li>
                  <li><strong>IT Support:</strong> Technical troubleshooting, cybersecurity, system maintenance</li>
                  <li><strong>Digital Services:</strong> Graphic design, content creation, training</li>
                </ul>
              </div>

              <div class="highlight">
                <h3>📞 Need Urgent Help?</h3>
                <p>For immediate assistance, feel free to call or WhatsApp:</p>
                <p><strong>📱 Phone:</strong> +234 708 305 7837</p>
                <p><strong>📧 Email:</strong> robertsunday333@gmail.com</p>
                <p><strong>🌐 Website:</strong> jrsolvy.com</p>
              </div>

              <div style="text-align: center;">
                <p>Looking forward to helping you achieve your goals!</p>
                <p><strong>Best regards,</strong><br>
                Robert Sunday<br>
                Founder & Lead Developer<br>
                JRsolvy - Smart Solutions. Digital Growth.</p>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated response. I'll personally reply to your specific message soon.</p>
              <p>📍 Located in Akwa Ibom State, Nigeria | Serving clients globally</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    try {
      // Send both emails
      const [notificationResult, autoResponseResult] = await Promise.all([
        sendBrevoEmail(notificationEmailData),
        sendBrevoEmail(autoResponseEmailData)
      ]);

      console.log("Notification email sent:", notificationResult);
      console.log("Auto-response email sent:", autoResponseResult);

      return new Response(JSON.stringify({ 
        success: true, 
        notificationId: notificationResult.messageId,
        autoResponseId: autoResponseResult.messageId 
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (emailError: any) {
      console.error("Error sending emails:", emailError);
      throw new Error(`Failed to send emails: ${emailError.message}`);
    }
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);