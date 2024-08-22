import { Resend } from 'resend';
import 'dotenv/config';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: `Fill out all fields.`
      }),
      {
        status: 400,
        statusText: "Bad Request"
      }
    );
  }
  const resendApiKey = process.env.API_KEY;
  if (!resendApiKey) {
    return new Response(
      JSON.stringify({
        message: `Resend API key not found.`
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
  const resend = new Resend(resendApiKey);
  try {
    await resend.emails.send({
      from: "support@resend.dev",
      to: "arslanmudasir111@gmail.com",
      subject: `Submission from ${name}`,
      html: `<p>Hi ${name},</p><p>Your message was received.${message}/</p>`
    });
    return new Response(
      JSON.stringify({
        message: `Message successfully sent!`
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `Message failed to send: ${error.message}`
      }),
      {
        status: 500,
        statusText: `Internal Server Error`
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
