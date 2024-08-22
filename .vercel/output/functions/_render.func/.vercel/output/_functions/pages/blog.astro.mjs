/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DqmTCoEF.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CqubTqP1.mjs';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_BMJm8XOv.mjs';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  return renderTemplate`<!-- <template id="blog-post-template"> -->${maybeRenderHead()}<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group"> <article class="bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-sm transition-all duration-300
               group-hover:shadow-lg group-hover:bg-opacity-100 group-hover:-translate-y-1"> <div class="aspect-w-16 aspect-h-9"> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"> </div> <div class="p-6"> <h2 class="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"> ${post.data.title} </h2> <p class="text-gray-600 mb-4 line-clamp-3"> ${post.data.description} </p> <div class="flex items-center justify-between text-gray-500 text-sm"> <span class="flex items-center"> ${renderComponent($$result, "FaUser", FaUser, { "className": "mr-2" })} ${post.author} </span> <span class="flex items-center"> ${renderComponent($$result, "FaCalendarAlt", FaCalendarAlt, { "className": "mr-2" })} ${new Date(post.data.pubDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )} </span> </div> </div> </article> </a> <!-- </template> -->`;
}, "C:/Users/arsla/programming/src/components/BlogPost.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 5);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-primary_light relative"> <div class="relative lg:h-[60vh] w-full"> <img src="/pregnancy.png" class="w-full h-full object-cover" alt="Blog Background"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">
Blog
</h1> </div> </div> <div class="absolute top-0 left-0 w-full z-10"> ${renderComponent($$result2, "TiltedTrianlge", $$TiltedTrianlge, { "height": "60vh" })} </div> <div class="container mx-auto px-4 py-8"> <div class="flex flex-col justify-start lg:flex-row lg:items-start lg:justify-center gap-8"> <div class="lg:w-1/2"> <div class="space-y-6 bg-primary bg-opacity-80 px-5 py-5 rounded-md z-100" id="blogPosts"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "post": post })}`)} </div> <div class="text-center mt-8"> <button id="viewMoreBtn" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
View More
</button> </div> </div> <!-- ... other code ... --> </div> <!-- this is just recreating the blogpost component : --> <template id="blog-post-template" class="bg-white"> <a href="" class="block group" id="blog-post-component"> <article class="bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-sm transition-all duration-300
               group-hover:shadow-lg group-hover:bg-opacity-100 group-hover:-translate-y-1"> <div class="aspect-w-16 aspect-h-9"> <img src="" class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"> </div> <div class="p-6"> <h2 class="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"></h2> <p class="text-gray-600 mb-4 line-clamp-3"></p> <div class="flex items-center justify-between text-gray-500 text-sm"> <span class="flex items-center"> ${renderComponent($$result2, "FaUser", FaUser, { "className": "mr-2" })} <span class="author"></span> </span> <span class="flex items-center"> ${renderComponent($$result2, "FaCalendarAlt", FaCalendarAlt, { "className": "mr-2" })} <span class="date bg-b"></span> </span> </div> </div> </article> </a> </template>  </div> </section> ` })}`;
}, "C:/Users/arsla/programming/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
