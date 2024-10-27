/* empty css                                 */
import { a as createComponent, r as renderTemplate } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$OldServices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ---
import TiltedTrianlge from "../components/TiltedTrianlge.astro";
import MainLayout from "../layouts/MainLayout.astro";
import { frontmatter as services } from "../content/home/services_content.md";
import ServiceCard from "../components/ServiceCard.astro";

const { services: serviceList } = services;
---
<MainLayout>
    <section class="bg-primary_light text-white relative overflow-hidden">
        <div class="relative lg:h-[60vh] w-full">
            <img 
                src="/services.png"
                class="w-full h-full object-cover"
                alt="Services Background"
            />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">Our Services</h1>
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full z-10">
            <TiltedTrianlge height="60vh" />
        </div>
        <div class="container mx-auto px-4 py-12 relative z-20">
            <div class="flex flex-wrap -mx-4">
                {serviceList.map((service, index) => (
                    <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ServiceCard service={service} />
                    </div>
                ))}
            </div>
        </div>
    </section>
</MainLayout> -->`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/oldServices.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/oldServices.astro";
const $$url = "/oldServices";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$OldServices,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
