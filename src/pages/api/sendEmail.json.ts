import type { APIRoute } from "astro";
import { Resend } from "resend";
import "dotenv/config";

export const POST: APIRoute = async ({ request }) => {

  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  // Validate the data - making sure values are not empty
  if (!name || !email || !message) {
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

  // Fetch the Resend API key from the environment variable
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

  // Sending information to Resend
  try {
    await resend.emails.send({
      from: "support@resend.dev",
      to: "arslanmudasir111@gmail.com",
      subject: `Submission from ${name}`,
      html: `<p>Hi ${name},</p><p>Your message was received.${message}/</p>`,
    });

    // If the message was sent successfully, return a 200 response
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
    // If there was an error sending the message, return a 500 response
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