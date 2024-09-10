import type { APIRoute } from "astro";
import { Resend } from "resend";
import "dotenv/config";
import rateLimiter from "../../rateLimiter";

export const POST: APIRoute = async ({ request }) => {
  const validRequest = rateLimiter(request)
  
  if (!validRequest) {
    return new Response("Too many requests", { status: 429 })
  }

  const data = await request.formData();

  const clientName = data.get("name");
  const clientEmail = data.get("email");
  const clientMessage = data.get("message");
  const clientNumber = data.get("phone");

  if (!clientName || !clientEmail || !clientMessage || !clientNumber) {
    return new Response(
      JSON.stringify({
        message: `Fill out all fields.`,
      }),
      {
        status: 400,
        statusText: "Bad Request",
      }
    );
  }

  const resendApiKey = process.env.API_KEY;
  if (!resendApiKey) {
    return new Response(
      JSON.stringify({
        message: `Resend API key not found.`,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }

  const resend = new Resend(resendApiKey);

  const html = `
 <html lang="en">
  <head>
    <title>New Client Consultation</title>
  </head>
  <body>
    <h1>Dr Waseem Andrabi</h1>
    <p><strong>Clients Name:</strong> ${clientName}</p>
    <p><strong>Clients Email:</strong> ${clientEmail}</p>
    <p><strong>Clients Phone:</strong> ${clientNumber}</p>
    <p><strong>Message:</strong> ${clientMessage}</p>
  </body>
</html>
 `;

  try {
    await resend.emails.send({
      from: "support@resend.dev",
      to: "arslanmudasir111@gmail.com",
      subject: `New Client for Dr. Waseem`,
      html: html,
    });

    return new Response(
      JSON.stringify({
        message: `Message successfully sent!`,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `Message failed to send: ${error.message}`,
      }),
      {
        status: 500,
        statusText: `Internal Server Error`,
      }
    );
  }
};
