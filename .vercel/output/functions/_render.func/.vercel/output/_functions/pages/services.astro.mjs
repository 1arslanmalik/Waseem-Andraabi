/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_abkxbNb0.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_LptHuSnK.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_BJSHESbQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { service, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/services/${service.slug}`, "href")}${addAttribute(`bg-opacity-10 bg-white p-6 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group ${index === 0 ? "md:col-span-2 lg:col-span-3" : "md:col-span-1 lg:col-span-1"} w-full max-w-1/3 h-full flex flex-col`, "class")}> <div class="flex items-center mb-4"> <!-- <div class="bg-secondary p-3 rounded-full mr-4"> --> <!-- Example SVG icon --> <!-- <svg class="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg> --> <!-- </div> --> <h3 class="text-lg md:text-xl font-semibold truncate underline text-white"> ${service.title} </h3> </div> <p class="text-sm flex-1 overflow-hidden text-ellipsis text-cream"> ${service.description} </p> <button class="mt-2 bg-teal-500 text-primary font-averia_sans py-1 px-3 text-sm sm:text-base md:text-lg lg:text-xl rounded-sm transition duration-300 transform hover:-translate-y-1">
read more
</button> </a>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/ServiceCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const serviceList = await getCollection("services");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary_light text-white relative overflow-hidden"> <div class="relative lg:h-[60vh] w-full"> <img src="/services.webp" class="w-full h-full object-cover" alt="Services Background"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">Our Services</h1> </div> </div> <div class="absolute top-0 left-0 w-full h-full z-10"> ${renderComponent($$result2, "TiltedTrianlge", $$TiltedTrianlge, { "height": "60vh" })} </div> <div class="container mx-auto px-4 py-12 relative z-20"> <div class="flex flex-wrap -mx-4"> ${serviceList.map((service, index) => renderTemplate`<div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service.data })} </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
