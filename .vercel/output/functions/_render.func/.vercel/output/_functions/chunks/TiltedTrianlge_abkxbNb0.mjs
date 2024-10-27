import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { P as PHONE1, a as PHONE2, A as ADDRESS } from './consts_DKj39Uo3.mjs';
/* empty css                         */

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$TiltedTrianlge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TiltedTrianlge;
  const { height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ozq7ztgm> <div${addAttribute(`relative w-full hidden md:h-[10vh] md:block`, "class")}${addAttribute(`--custom-height: ${height};`, "style")} data-astro-cid-ozq7ztgm> <!-- <div class="relative w-full hidden md:block md:h-[20vh]"> --> <svg width="100%" height="auto" viewBox="0 0 1448 262" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" class="w-full h-auto absolute top-0 left-0" data-astro-cid-ozq7ztgm> <path d="M0 0H1448L0 262V0Z" fill="#0F2A3B" data-astro-cid-ozq7ztgm></path> </svg> <div class="absolute top-0 left-0 w-full flex flex-col justify-center text-[0.8rem] lg:text-[1rem] xl:text-[1.4rem] underline text-white space-y-2 p-2 lg:p-5 font-averia_sans" data-astro-cid-ozq7ztgm> <div class="flex flex-col sm:flex-row sm:space-x-4 mb-2 sm:mb-0 w-1/2" data-astro-cid-ozq7ztgm> <a${addAttribute(`tel:${PHONE1}`, "href")} class="flex items-center space-x-2 mb-1 sm:mb-0" data-astro-cid-ozq7ztgm> ${renderComponent($$result, "FaPhoneAlt", FaPhoneAlt, { "className": "text-[1.2em]", "data-astro-cid-ozq7ztgm": true })} <span data-astro-cid-ozq7ztgm>${PHONE1}</span> </a> <a${addAttribute(`tel:${PHONE2}`, "href")} class="flex items-center space-x-2" data-astro-cid-ozq7ztgm> ${renderComponent($$result, "FaPhoneAlt", FaPhoneAlt, { "className": "text-[1.2em]", "data-astro-cid-ozq7ztgm": true })} <span data-astro-cid-ozq7ztgm>${PHONE2}</span> </a> </div> <div class="flex items-start space-x-2 w-1/2 bg-opacity-15" data-astro-cid-ozq7ztgm> ${renderComponent($$result, "FaLocationDot", FaLocationDot, { "className": "text-[1.2em]", "data-astro-cid-ozq7ztgm": true })} <span data-astro-cid-ozq7ztgm>${ADDRESS}</span> </div> </div> </div> </section> `;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/TiltedTrianlge.astro", void 0);

export { $$TiltedTrianlge as $ };
