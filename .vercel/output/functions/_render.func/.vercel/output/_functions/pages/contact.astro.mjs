/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { $ as $$MainLayout } from '../chunks/MainLayout_LptHuSnK.mjs';
import { S as SITE_TITLE, A as ADDRESS, P as PHONE1, a as PHONE2, E as EMAIL } from '../chunks/consts_DKj39Uo3.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary py-8 lg:py-12 px-4 sm:px-6 lg:px-8"> <div class="mx-auto max-w-6xl bg-white rounded-xl overflow-hidden shadow-lg"> <div class="flex flex-col lg:flex-row"> <div class="w-full lg:w-1/2 p-6 lg:p-8 bg-primary_light text-white"> <div class="flex flex-col items-center mb-8"> <div class="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg mb-6"> <img src="/AboutProfile.webp"${addAttribute(SITE_TITLE, "alt")} class="w-full h-full object-cover"> </div> <div class="text-center"> <h1 class="text-3xl sm:text-4xl font-pacifico underline mb-2"> ${SITE_TITLE} </h1> <p class="font-averia_sans text-xl text-teal-500 mb-1">
IVF Specialist
</p> <p class="font-averia_sans text-lg">
10+ years in Reproductive Sciences
</p> </div> </div> <div class="space-y-5 text-base sm:text-lg font-averia_sans"> <div class="flex items-center"> ${renderComponent($$result2, "FaMapMarkerAlt", FaMapMarkerAlt, { "className": "text-2xl mr-4 flex-shrink-0" })} <p class="break-words">${ADDRESS}</p> </div> <div class="flex items-center"> ${renderComponent($$result2, "FaPhone", FaPhone, { "className": "text-2xl mr-4 flex-shrink-0" })} <p>${PHONE1}</p> </div> <div class="flex items-center"> ${renderComponent($$result2, "FaPhone", FaPhone, { "className": "text-2xl mr-4 flex-shrink-0" })} <p>${PHONE2}</p> </div> <div class="flex items-center"> ${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "text-2xl mr-4 flex-shrink-0" })} <p class="break-all">${EMAIL}</p> </div> </div> </div> <div class="w-full lg:w-1/2 p-6 lg:p-8 bg-gray-50"> <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 underline">
Contact Us
</h2> <form id="contact-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label> <input type="text" id="name" name="name" required class="block w-full rounded-md border-gray-300 bg-cream shadow-sm focus:ring-primary focus:border-primary text-black p-3 text-base"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required class="block w-full rounded-md border-gray-300 bg-cream shadow-sm focus:ring-primary focus:border-primary text-black p-3 text-base"> </div> <div> <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label> <input type="tel" id="phone" name="phone" required class="block w-full rounded-md border-gray-300 bg-cream shadow-sm focus:ring-primary focus:border-primary text-black p-3 text-base"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label> <textarea id="message" name="message" rows="4" required class="block w-full rounded-md border-gray-300 bg-cream shadow-sm focus:ring-primary focus:border-primary text-black p-3 text-base"></textarea> </div> <button type="submit" id="submit-button" class="w-full bg-primary hover:bg-primary-dark text-white font-averia_sans py-3 px-4 rounded-md transition duration-300 text-base mt-4">
Send Message
</button> </form> <div id="confirmation-message" class="mt-6 p-4 bg-green-100 text-green-700 rounded-md hidden"> <p class="font-bold">Thank You!</p> <p>
Your message has been sent successfully. We'll get back to you
              soon.
</p> </div> </div> </div> <div class="bg-gray-300 w-full h-64 sm:h-72 lg:h-80 rounded-lg"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.8619445612!2d77.15425769850339!3d28.40234435175807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1729440968709!5m2!1sen!2sin" class="w-full h-full" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> </section> ` })} `;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/contact.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
