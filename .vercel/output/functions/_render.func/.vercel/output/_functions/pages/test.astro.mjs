/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.drwaseemandrabi.com/");
const $$AstroForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AstroForm;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const response = await fetch(Astro2.url + "/api/sendEmail.json", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log(data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="flex flex-col space-y-10"> <label>
Name
<input type="text" id="name" name="name" required> </label> <label>
Email
<input type="email" id="email" name="email" required> </label> <label>
Message
<textarea id="message" name="message" required></textarea> </label> <button class="bg-white">Send</button> </form>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/AstroForm.astro", void 0);

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$Test = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "AstroForm", $$AstroForm, {})} </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/test.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
