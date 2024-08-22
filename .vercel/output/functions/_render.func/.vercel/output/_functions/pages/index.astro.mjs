/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, c as createAstro } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { S as SITE_TITLE } from '../chunks/consts_D04Mysqg.mjs';
import { frontmatter } from '../chunks/hero_content_Ci8jI_Y5.mjs';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_BMJm8XOv.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CqubTqP1.mjs';
import 'clsx';
import { frontmatter as frontmatter$1 } from '../chunks/IVF_CJrc9CL7.mjs';
import { frontmatter as frontmatter$2 } from '../chunks/why_choose_us_B85-BWfh.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-cream"> ${renderComponent($$result, "TiltedTrianlge", $$TiltedTrianlge, { "height": "20vh" })} <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl"> <!-- Profile content --> <div class="flex flex-col lg:flex-row items-center text-center lg:text-left justify-center lg:justify-between py-8"> <!-- Profile image --> <div class="order-1 lg:order-1 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 mb-4 lg:mb-0"> <img src="/profile.png" alt="Dr. Waseem Andraabi" class="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"> </div> <!-- Text content --> <div class="order-2 lg:order-2 lg:w-1/2 text-center lg:text-left"> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pacifico text-primary mb-4"> ${SITE_TITLE} </h1> <p class="text-lg sm:text-xl md:text-3xl text-secondary font-averia_sans w-full my-10"> <span class="bg-slate-800 px-4 py-1 rounded-sm">
A Name That You Can Trust
</span> </p> <p class="font-averia_sans text-base sm:text-lg md:text-2xl text-primary mt-4"> ${frontmatter.description} </p> <a href="/about" class="text-primary underline mt-4 font-averia_sans text-xl">Learn more</a> </div> </div> </div> </section>`;
}, "C:/Users/arsla/programming/src/components/Hero.astro", void 0);

const $$IVF = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0F2A3B] text-white p-4 sm:p-6 md:p-8 lg:p-12"> <div class="max-w-5xl mx-auto flex flex-col space-y-6 sm:space-y-12"> <!-- Title 1 --> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cursive mb-2 border-b-2 border-white inline-block w-fit font-pacifico"> ${frontmatter$1.title1} </h1> <div class="flex flex-col space-y-8 font-averia_sans"> <!-- section 1 --> <div class="space-y-4 flex flex-col"> <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500 font-cursive mb-2 pb-2 border-b-2 border-red-500 inline-block w-fit font-pacifico"> ${frontmatter$1.title2} </h2> <p class="text-sm sm:text-base md:text-lg lg:text-2xl text-secondary flex justify-center w-full"> ${frontmatter$1.p1} </p> </div> <!-- Video --> <div class="flex flex-col sm:flex-row gap-8 items-center"> <video class="w-full sm:w-1/2 h-auto rounded-sm shadow-lg" autoplay loop muted playsinline> <source src="/ivf.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <p class="text-sm sm:text-base md:text-lg lg:text-2xl"> ${frontmatter$1.p2} </p> </div> <!-- image --> <div class="flex flex-col sm:flex-row-reverse gap-8 items-center"> <img src="/ivf.png" alt="Hands holding sperm and egg symbols" class="w-full sm:w-1/2 h-auto rounded-sm shadow-lg"> <p class="text-sm sm:text-base md:text-lg lg:text-2xl"> ${frontmatter$1.p3} </p> </div> </div> </div> </section>`;
}, "C:/Users/arsla/programming/src/components/IVF.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0F2A3B] text-white p-6 sm:p-8 md:p-10 lg:p-12"> <div class="max-w-6xl mx-auto"> <!-- Title --> <h1 class="text-4xl sm:text-5xl md:text-6xl font-cursive mb-8 pb-2 border-b-4 border-[#4ADE80] inline-block w-fit font-pacifico">
Why Choose Dr. Waseem?
</h1> <!-- Introduction Text --> <p class="text-base sm:text-lg md:text-xl mb-12 font-averia_sans leading-relaxed"> <span class="text-[#4ADE80]">As an esteemed embryologist,</span> Dr. Andrabi
      has left an indelible mark through his groundbreaking research and hands-on
      experience. His unwavering dedication to the science of fertility and embryology
      has earned him acclaim and trust among patients and peers alike.
</p> <div class="flex flex-col lg:flex-row gap-12 items-center"> <!-- Image Section --> <div class="lg:w-1/2 flex justify-center"> <img src="/Doctor.png" alt="Dr. Waseem Andrabi" class="w-full max-w-md rounded-lg shadow-xl mb-8 lg:mb-0 transition-transform transform hover:scale-105"> </div> <!-- Slogans Section --> <div class="lg:w-1/2 space-y-10"> ${frontmatter$2.slogans.map((slogan) => renderTemplate`<div class="flex flex-col sm:flex-row items-start gap-6"> <!-- Icon --> <img${addAttribute(slogan.icon, "src")}${addAttribute(`${slogan.title} icon`, "alt")} class="w-14 h-14 text-light_green flex-shrink-0 transition-transform transform hover:scale-110"> <!-- Slogan Content --> <div class="font-averia_sans space-y-4"> <h3 class="text-2xl sm:text-3xl font-bold text-[#4ADE80] mb-2"> ${slogan.title} </h3> <ul class="list-disc list-inside space-y-2 text-base sm:text-lg"> ${slogan.points.map((point) => renderTemplate`<li class="ml-4">${point}</li>`)} </ul> </div> </div>`)} </div> </div> </div> </section>`;
}, "C:/Users/arsla/programming/src/components/WhyChooseUs.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$ServiceBannerPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceBannerPost;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row justify-start items-center w-full p-10"> <!-- Outer container --> <div class="relative bg-[#0B2D43] rounded-full w-full md:w-3/4 h-40 md:h-56"> <!-- Heading --> <h1 class="text-2xl md:text-4xl">In-Vitro Fertilization (IVF)</h1> </div> <!-- Inner circle --> <div class="absolute bg-[#0C2332] border-2 border-white rounded-full w-40 h-40 md:w-72 md:h-72 mt-8 md:mt-0"></div> </div>`;
}, "C:/Users/arsla/programming/src/components/ServiceBannerPost.astro", void 0);

const $$ServicesBanner = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "In-Vitro Fertilization (IVF)",
      description: "IVF is an assisted reproductive technique where eggs and sperm are fertilized in a laboratory dish. Mature eggs are retrieved from the female's ovaries and combined with sperm, forming embryos. After a few days, the healthiest embryo is transferred into the uterus for implantation.",
      icon: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    },
    {
      title: "Female Infertility Tests",
      description: "These tests help identify female fertility problems. They include hormone testing to evaluate ovulation, pelvic ultrasound to check the reproductive organs' health, and hysterosalpingography to assess the fallopian tubes and uterus.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description: "IUI is a fertility treatment that involves placing specially prepared sperm directly into the uterus during the female's ovulation period. It is an effective option for couples with mild male infertility or unexplained fertility problems. IUI increases the chances of sperm reaching the egg & conception.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0C2332] text-white p-8 rounded-lg"> <h2 class="text-4xl font-bold mb-8 text-center">Our Services</h2> <div class="flex flex-col items-center"> ${services.map((service, index) => renderTemplate`<div class="flex flex-col space-x-4 p-6 w-full items-center justify-center"> ${index % 2 === 0 ? renderTemplate`${renderComponent($$result, "ServiceBannerPost", $$ServiceBannerPost, { "rotate": true })}` : renderTemplate`${renderComponent($$result, "ServiceBannerPost", $$ServiceBannerPost, { "rotate": false })}`} </div>`)} </div> <div class="mt-8 text-center"> <a href="#" class="bg-white text-black font-averia_sans px-6 py-2 rounded-full inline-block hover:bg-secondary hover:text-black transition-colors">
View more services
</a> </div> </section>`;
}, "C:/Users/arsla/programming/src/components/ServicesBanner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "IVF", $$IVF, {})} ${maybeRenderHead()}<div class="flex justify-center items-center"> <img src="/WaseemAndrabi.png" class="w-full h-1/2"> </div> ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "ServicesBanner", $$ServicesBanner, {})} ` })}`;
}, "C:/Users/arsla/programming/src/pages/index.astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
