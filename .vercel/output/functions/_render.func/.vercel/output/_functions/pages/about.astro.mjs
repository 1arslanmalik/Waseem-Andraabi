/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DUT2XN8e.mjs';
import 'kleur/colors';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge__qO75hP_.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DNHWABDD.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-primary_light text-white relative overflow-hidden"> <div class="relative lg:h-[60vh] w-full"> <img src="/aboutus.png" class="w-full h-full object-cover" alt="About Background"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">
About Us
</h1> </div> </div> <div class="absolute top-0 left-0 w-full h-full z-10"> ${renderComponent($$result2, "TiltedTrianlge", $$TiltedTrianlge, { "height": "60vh" })} </div> <!-- Image carousel --> <!-- <ImageGallery 
			images={images}
		/> --> </section> ` })}`;
}, "C:/Users/arsla/programming/src/pages/about.astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
