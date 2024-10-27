/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { S as SITE_TITLE } from '../chunks/consts_DKj39Uo3.mjs';
import { frontmatter } from '../chunks/hero_content_COxJhJTL.mjs';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_abkxbNb0.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_LptHuSnK.mjs';
import 'clsx';
import { frontmatter as frontmatter$1 } from '../chunks/IVF_BQQfI0ID.mjs';
import { frontmatter as frontmatter$2 } from '../chunks/why_choose_us_9zsTv30z.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-cream "> ${renderComponent($$result, "TiltedTrianlge", $$TiltedTrianlge, { "height": "20vh" })} <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl"> <!-- Profile content --> <div class="flex flex-col lg:flex-row items-center text-center lg:text-left justify-center lg:justify-between py-8"> <!-- Profile image --> <div class="order-1 lg:order-1 relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 mb-4 lg:mb-0"> <img src="/profile.webp" alt="Dr. Waseem Andraabi" class="absolute inset-0 w-full h-full rounded-full object-cover shadow-lg border-4 border-white transition-transform duration-300 hover:scale-105"> </div> <!-- Text content --> <div class="order-2 lg:order-2 lg:w-1/2 text-center lg:text-left"> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pacifico text-primary mb-4"> ${SITE_TITLE} </h1> <p class="text-lg sm:text-xl md:text-3xl text-secondary font-averia_sans w-full my-10"> <span class="bg-slate-800 px-4 py-1 rounded-sm">
A Name That You Can Trust
</span> </p> <p class="font-averia_sans text-base sm:text-lg md:text-2xl text-primary mt-4"> ${frontmatter.description} </p> <a href="/about" class="text-primary underline mt-4 font-averia_sans text-xl">Learn more</a> </div> </div> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/Hero.astro", void 0);

const $$IVF = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0F2A3B] text-white p-4 sm:p-6 md:p-8 lg:p-12"> <div class="max-w-5xl mx-auto flex flex-col space-y-6 sm:space-y-12"> <!-- Title 1 --> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cursive mb-2 border-b-2 border-white inline-block w-fit font-pacifico"> ${frontmatter$1.title1} </h1> <div class="flex flex-col space-y-8 font-averia_sans"> <!-- section 1 --> <div class="space-y-4 flex flex-col"> <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500 font-cursive mb-2 pb-2 border-b-2 border-red-500 inline-block w-fit font-pacifico"> ${frontmatter$1.title2} </h2> <p class="text-sm sm:text-base md:text-lg lg:text-2xl text-secondary flex justify-center w-full"> ${frontmatter$1.p1} </p> </div> <!-- Video --> <div class="flex flex-col sm:flex-row gap-8 items-center"> <video class="w-full sm:w-1/2 h-auto rounded-sm shadow-lg" autoplay loop muted playsinline> <source src="/ivf.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <p class="text-sm sm:text-base md:text-lg lg:text-2xl"> ${frontmatter$1.p2} </p> </div> <!-- image --> <div class="flex flex-col sm:flex-row-reverse gap-8 items-center"> <img src="/ivf.png" alt="Hands holding sperm and egg symbols" class="w-full sm:w-1/2 h-auto rounded-sm shadow-lg"> <p class="text-sm sm:text-base md:text-lg lg:text-2xl"> ${frontmatter$1.p3} </p> </div> </div> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/IVF.astro", void 0);

const $$WhereWeComeIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex justify-start items-center"> <div class="absolute font-pacifico flex flex-col justify-start w-full leading-none px-3 sm:px-5 md:px-8 lg:px-12 space-y-2 sm:space-y-3"> <h1 class="text-[#5D4C62] text-[9.4vw] m-0 p-0">That's Where</h1> <h1 class="underline decoration decoration-[1vw] text-[#0080A8] text-[9.4vw] m-0 p-0">Dr. Waseem</h1> <h1 class="text-[#5D4C62] text-[9.4vw]">Comes In</h1> </div> <img src="/WhereWeComeIn.webp" class="w-full h-auto"> </div>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/WhereWeComeIn.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0F2A3B] text-white p-6 sm:p-8 md:p-10 lg:p-12"> <div class="max-w-6xl mx-auto"> <h1 class="text-[7vw] sm:text-5xl md:text-6xl lg:text-[5vw] xl:text-[4vw] font-cursive mb-4 sm:mb-6 md:mb-8 font-pacifico flex flex-wrap justify-center w-full"> <span class="inline-block border-b-2 sm:border-b-4 border-[#4ADE80] leading-relaxed px-1">Why Choose Dr</span> <span class="inline-block border-b-2 sm:border-b-4 border-[#4ADE80] leading-relaxed px-1">Waseem?</span> </h1> <p class="text-base sm:text-lg md:text-xl mb-12 font-averia_sans leading-relaxed"> <span class="text-[#4ADE80]">As an esteemed embryologist,</span> Dr. Andrabi
      has left an indelible mark through his groundbreaking research and hands-on
      experience. His unwavering dedication to the science of fertility and embryology
      has earned him acclaim and trust among patients and peers alike.
</p> <div class="flex flex-col lg:flex-row gap-12 items-center"> <div class="lg:w-1/2 flex justify-center"> <img src="/HomeFullPicture.webp" alt="Dr. Waseem Andrabi" class="w-full max-w-md rounded-lg shadow-xl mb-8 lg:mb-0 transition-transform transform hover:scale-105"> </div> <div class="lg:w-1/2 space-y-10"> ${frontmatter$2.slogans.map((slogan) => renderTemplate`<div class="flex flex-col sm:flex-row items-start gap-6"> <img${addAttribute(slogan.icon, "src")}${addAttribute(`${slogan.title} icon`, "alt")} class="w-14 h-14 text-light_green flex-shrink-0 transition-transform transform hover:scale-110"> <div class="font-averia_sans space-y-4"> <h3 class="text-2xl sm:text-3xl font-bold text-[#4ADE80] mb-2"> ${slogan.title} </h3> <ul class="list-disc list-inside space-y-2 text-base sm:text-lg"> ${slogan.points.map((point) => renderTemplate`<li class="ml-4">${point}</li>`)} </ul> </div> </div>`)} </div> </div> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/WhyChooseUs.astro", void 0);

const $$ServicesBanner = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: "/sperms.svg",
      href: "/services/ivf-treatment",
      title: "In-Vitro Fertilization (IVF)",
      description: "IVF is an assisted reproductive technique where eggs and sperm are fertilized in a laboratory dish. Mature eggs are retrieved from the female's ovaries and combined with sperm, forming embryos. After a few days, the healthiest embryo is transferred into the uterus for implantation."
    },
    {
      icon: "/zygote.svg",
      title: "Female Infertility Tests",
      href: "/services/female-infertility-treatment",
      description: "These tests help identify female fertility problems. They include hormone testing to evaluate ovulation, pelvic ultrasound to check the reproductive organs' health, and hysterosalpingography to assess the fallopian tubes and uterus."
    },
    {
      icon: "/uterus.svg",
      title: "Intrauterine Insemination (IUI)",
      href: "/services/iui-treatment",
      description: "IUI is a fertility treatment that involves placing specially prepared sperm directly into the uterus during the female's ovulation period. It is an effective option for couples with mild male infertility or unexplained fertility problems. IUI increases the chances of sperm reaching the egg & conception."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-900 text-white p-6 sm:p-8"> <h2 class="text-4xl sm:text-5xl lg:text-6xl font-pacifico underline mb-8 sm:mb-12 text-center">
Our Services
</h2> <div class="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center"> ${services.map((service) => renderTemplate`<a${addAttribute(service.href, "href")} class="bg-slate-800 p-6 sm:p-8 rounded-lg relative flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-lg"> <div class="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full mb-4 sm:mb-6"> <img class="text-2xl sm:text-3xl font-bold text-white"${addAttribute(service.icon, "src")}> </div> <h3 class="text-xl sm:text-2xl font-pacifico underline mb-3 sm:mb-4 text-teal-400"> ${service.title} </h3> <p class="text-gray-300 text-sm sm:text-base"> ${service.description} </p> </a>`)} </div> <div class="text-center mt-8 sm:mt-12"> <a href="/services" class="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in animation-delay-800 hover:from-teal-600 hover:to-blue-600">
view more services
</a> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/ServicesBanner.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-cream via-cyan-100 to-blue-100 py-16 px-4 sm:px-6 md:px-8 lg:px-16 h-full flex items-center overflow-hidden"> <div class="max-w-6xl mx-auto w-full"> <div class="flex flex-col items-center text-center space-y-8"> <h1 class="text-4xl sm:text-5xl font-bold text-teal-800 animate-fade-in"> <span class="inline-block">Your Journey to Parenthood Starts Here</span> </h1> <h2 class="text-xl sm:text-2xl font-semibold text-teal-600 animate-fade-in animation-delay-200 underline">
Take the first step towards your future family today.
</h2> <div class="w-full max-w-2xl"> <p class="text-lg text-gray-700 animate-fade-in animation-delay-400">
Dr. Waseem is here to guide you through every step of your fertility journey. With compassionate care and cutting-edge treatments, we're committed to helping you achieve your dream of parenthood.
</p> </div> <a href="/contact" class="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg animate-fade-in animation-delay-600 hover:from-teal-600 hover:text-white  hover:to-blue-600">
Book Your Consultation Now
</a> </div> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/CallToAction.astro", void 0);

const $$Review = createComponent(async ($$result, $$props, $$slots) => {
  const apiUrl = "https://www.drwaseemandrabi.com/api/review" ;
  let reviews = [];
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.statusText}`);
    }
    reviews = await response.json();
  } catch (error) {
    console.error(error);
  }
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const recommendedReviews = reviews.filter(
    (review) => review.rating >= 4
  ).length;
  const recommendPercentage = totalReviews > 0 ? Math.round(recommendedReviews / totalReviews * 100) : 0;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto p-6 space-y-8 bg-teal-800 flex flex-col items-center" data-astro-cid-ggmzwvk4> <div class="max-w-4xl w-full text-center mb-8 overflow-hidden" data-astro-cid-ggmzwvk4> <h2 class="text-3xl font-bold mb-2 text-white" data-astro-cid-ggmzwvk4>Patient Reviews</h2> <p class="text-teal-300" data-astro-cid-ggmzwvk4>Share your experience with Dr. Waseem Andrabi</p> <div class="flex justify-center items-start gap-4 mt-6" data-astro-cid-ggmzwvk4> <div class="text-center" data-astro-cid-ggmzwvk4> <span class="block text-2xl font-bold text-white" data-astro-cid-ggmzwvk4>${averageRating}</span> <div class="flex gap-1 text-yellow-400 justify-center" data-astro-cid-ggmzwvk4> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(
    i < Math.round(Number(averageRating)) ? "text-yellow-400" : "text-gray-300",
    "class"
  )} data-astro-cid-ggmzwvk4>
★
</span>`)} </div> <span class="text-sm text-slate-300" data-astro-cid-ggmzwvk4>Average Rating</span> </div> <div class="h-12 w-px bg-slate-700" data-astro-cid-ggmzwvk4></div> <div class="text-center" data-astro-cid-ggmzwvk4> <span class="block text-2xl font-bold text-white" data-astro-cid-ggmzwvk4>${totalReviews}</span> <span class="text-sm text-slate-300" data-astro-cid-ggmzwvk4>Total Reviews</span> </div> <div class="h-12 w-px bg-slate-700" data-astro-cid-ggmzwvk4></div> <div class="text-center" data-astro-cid-ggmzwvk4> <span class="block text-2xl font-bold text-white" data-astro-cid-ggmzwvk4>${recommendPercentage}%</span> <span class="text-sm text-slate-300" data-astro-cid-ggmzwvk4>Recommend</span> </div> </div> </div> <div class="flex flex-wrap justify-center gap-6 p-4" id="reviewsList" data-astro-cid-ggmzwvk4> ${reviews.map((review) => renderTemplate`<div class="min-w-[300px] max-w-md bg-slate-800 p-6 rounded-lg shadow-lg" data-astro-cid-ggmzwvk4> <div class="flex justify-between items-start mb-4" data-astro-cid-ggmzwvk4> <div class="flex items-center gap-3" data-astro-cid-ggmzwvk4> <div class="bg-teal-500 p-2 rounded-full" data-astro-cid-ggmzwvk4> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ggmzwvk4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-ggmzwvk4></path> </svg> </div> <div data-astro-cid-ggmzwvk4> <h3 class="text-lg font-semibold text-white" data-astro-cid-ggmzwvk4>${review.name}</h3> </div> </div> <span class="text-slate-400 text-sm flex items-center gap-1" data-astro-cid-ggmzwvk4> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ggmzwvk4> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ggmzwvk4></path> </svg> ${formatDate(review.date)} </span> </div> <div class="flex gap-1 text-yellow-400 mb-3" data-astro-cid-ggmzwvk4> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(i < review.rating ? "text-yellow-400" : "text-gray-300", "class")} data-astro-cid-ggmzwvk4>
★
</span>`)} </div> <p class="text-slate-300 review-content"${addAttribute(review.id, "data-review-id")} data-astro-cid-ggmzwvk4> ${review.comment} </p> </div>`)} </div> <form id="reviewForm" class="w-full max-w-xl space-y-6 bg-slate-800 p-4 rounded-lg shadow-lg" data-astro-cid-ggmzwvk4> <div class="space-y-4" data-astro-cid-ggmzwvk4> <div data-astro-cid-ggmzwvk4> <label for="name" class="block text-white mb-2" data-astro-cid-ggmzwvk4>Your Name</label> <input type="text" id="name" name="name" required class="w-full p-2 border border-slate-600 rounded bg-slate-700 text-white" data-astro-cid-ggmzwvk4> </div> <div data-astro-cid-ggmzwvk4> <label class="block text-white mb-2" data-astro-cid-ggmzwvk4>Rating</label> <div class="star-rating flex gap-2" data-astro-cid-ggmzwvk4> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<button type="button" class="text-3xl focus:outline-none star-btn"${addAttribute(i + 1, "data-rating")} data-astro-cid-ggmzwvk4>
☆
</button>`)} </div> <input type="hidden" name="rating" id="rating" required value="" data-astro-cid-ggmzwvk4> </div> <div data-astro-cid-ggmzwvk4> <label for="comment" class="block text-white mb-2" data-astro-cid-ggmzwvk4>Your Review</label> <textarea id="comment" name="comment" rows="4" required class="w-full p-2 border border-slate-600 rounded bg-slate-700 text-white" data-astro-cid-ggmzwvk4></textarea> </div> <button type="submit" class="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600 transition-colors" data-astro-cid-ggmzwvk4>
Post Review
</button> </div> </form> </section>  `;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/Review.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "IVF", $$IVF, {})} ${renderComponent($$result2, "WhereWeComeIn", $$WhereWeComeIn, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "Review", $$Review, {})} ${renderComponent($$result2, "ServicesBanner", $$ServicesBanner, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ` })}`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/index.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
