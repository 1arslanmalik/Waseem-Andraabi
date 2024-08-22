/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { $ as $$MainLayout } from '../chunks/MainLayout_CqubTqP1.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary_light py-8 lg:py-16 px-4"> <div class="container mx-auto max-w-6xl bg-primary p-4 lg:p-5 rounded-lg"> <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center items-center"> <!-- Left Column: Doctor's Information --> <div class="w-full lg:w-1/2"> <div class="flex flex-col sm:flex-row items-center sm:items-start mb-6 lg:mb-8"> <div class="w-full sm:w-1/3 mb-4 sm:mb-0"> <!-- Placeholder for doctor's photo --> <div class="bg-gray-300 w-32 h-32 rounded-full mx-auto sm:mx-0"></div> </div> <div class="w-full sm:w-2/3 text-center sm:text-left"> <h1 class="text-2xl sm:text-4xl font-pacifico underline text-white">
Dr. Waseem Andraabi
</h1> <p class="font-averia_sans m-0 p-0">
IVF Specialist
</p> <p class="font-averia_sans m-0 p-0">
Qualification here
</p> <p class="font-averia_sans m-0 p-0"> <!-- Fellowship- Reproductive Endocrinology & Infertility (IFS-SGRH) --> </p> <!-- <p class="text-gray-600">DMC/R-04903</p> --> </div> </div> <div class="mb-8 space-y-2 flex flex-col items-start"> <div class="flex items-center justify-center sm:justify-start"> ${renderComponent($$result2, "FaMapMarkerAlt", FaMapMarkerAlt, { "className": "text-gray-600 mr-2 flex-shrink-0" })} <p class="text-gray-600 p-0 m-0">
Address Here
</p> </div> <div class="flex items-center justify-center sm:justify-start"> ${renderComponent($$result2, "FaPhone", FaPhone, { "className": "text-gray-600 mr-2 flex-shrink-0" })} <p class="text-gray-600 p-0 m-0">+91 9044584527</p> </div> <div class="flex items-center justify-center sm:justify-start"> ${renderComponent($$result2, "FaEnvelope", FaEnvelope, { "className": "text-gray-600 mr-2 flex-shrink-0" })} <p class="text-gray-600 p-0 m-0">andrabiofficial@gmail.com</p> </div> <!-- <div class="flex items-center justify-center sm:justify-start">
              <FaClock className="text-gray-600 mr-2 flex-shrink-0" />
              <p class="text-gray-600 text-center sm:text-left p-0 m-0">
                MON - SAT<br />09:00 AM - 11:00 AM<br />05:00 PM - 07:00 PM
              </p>
            </div> --> </div> </div> <div class="w-full lg:w-1/2 mb-5"> <!-- Contact Form --> <form id="contact-form" class="bg-cream rounded-lg p-4 lg:p-6"> <div class="mb-4"> <input type="text" id="name" name="name" placeholder="Your Name*" required class="w-full bg-white rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="mb-4"> <input type="email" id="email" name="email" placeholder="Your Email*" required class="w-full bg-white rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="mb-4"> <input type="tel" id="phone" name="phone" placeholder="Phone Number*" required class="w-full bg-white rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div class="mb-4"> <textarea id="message" name="message" placeholder="Please Tell Us Your Concerns *" required rows="4" class="w-full bg-white rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea> </div> <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded">
Send
</button> </form> </div> </div> <div class="bg-gray-300 w-full h-64 mb-8 rounded-lg"></div> </div> </section> ` })} `;
}, "C:/Users/arsla/programming/src/pages/contact.astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
