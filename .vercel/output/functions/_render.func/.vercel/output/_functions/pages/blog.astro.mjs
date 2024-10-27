/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BJSHESbQ.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_LptHuSnK.mjs';
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_abkxbNb0.mjs';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.drwaseemandrabi.com/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${post.slug}`, "href")} class="block group prose-neutral"> <article class="bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-sm transition-all duration-300
               group-hover:shadow-lg group-hover:bg-opacity-100 group-hover:-translate-y-1"> <div class="relative aspect-w-16 aspect-h-9"> <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"> </div> <div class="p-6"> <h2 class="text-2xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300"> ${post.data.title} </h2> <p class="text-black mb-4 line-clamp-3"> ${post.data.description} </p> <div class="flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-600"> <!-- <span class="flex items-center mr-2 sm:mb-0">
          {post.data.author !== "unknown" && post.data.author !== "Unknown" ? (
            <FaUser className="mr-1 flex-shrink-0" />
            <span class="truncate max-w-[120px] sm:max-w-none">
              {post.data.author}
            </span>
          ) : ""}
        </span> --> <span class="flex items-center"> ${renderComponent($$result, "FaCalendarAlt", FaCalendarAlt, { "className": "mr-1 flex-shrink-0" })} <span class="whitespace-nowrap"> ${new Date(post.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </span> </span> </div> </div> </article> </a>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$RecentPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecentPosts;
  const { post } = Astro2.props;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-gray-200 pb-4 last:border-b-0"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="block group"> <h3 class="text-lg sm:text-xl font-semibold underline text-gray-800 group-hover:text-primary transition-colors duration-300 mb-2"> ${post.data.title} </h3> <p class="text-sm sm:text-base text-gray-600 mb-2 line-clamp-2"> ${post.data.description} </p> <div class="flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-500"> <!-- <span class="flex items-center mr-2 mb-1 sm:mb-0">
    {post.data.author !== "unknown" && post.data.author !== "Unknown" ? (

      <FaUser className="mr-1 flex-shrink-0" />
      <span class="truncate max-w-[120px] sm:max-w-none">
        {post.data.author}
      </span>
    ) : "" }
      </span> --> <span class="flex items-center"> ${renderComponent($$result, "FaCalendarAlt", FaCalendarAlt, { "className": "mr-1 flex-shrink-0" })} <span class="whitespace-nowrap"> ${formatDate(post.data.pubDate)} </span> </span> </div> </a> </div>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/RecentPosts.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 5);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gradient-to-r from-primary to-primary_light relative"> <div class="relative lg:h-[60vh] w-full"> <img src="/pregnancy.webp" class="w-full h-full object-cover" alt="Blog Background"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">
Blog
</h1> </div> </div> <div class="absolute top-0 left-0 w-full z-10"> ${renderComponent($$result2, "TiltedTrianlge", $$TiltedTrianlge, { "height": "60vh" })} </div> <div class="container mx-auto px-4 py-8"> <div class="flex flex-col lg:flex-row lg:justify-center gap-8"> <!-- Blog Posts (right on larger screens, bottom on smaller screens) --> <div class="lg:w-2/3 order-1 lg:order-2"> <div class="space-y-6 bg-primary_light shadow-2xl bg-opacity-80 px-5 py-5 rounded-md z-100" id="blogPosts"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "post": post })}`)} </div> ${posts.length < 5 ? "" : renderTemplate`<div class="text-center mt-8"> <button id="viewMoreBtn" class="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:from-teal-600 hover:to-blue-600">
View All Posts
</button> </div>`} </div> <!-- Recent Posts --> <div class="lg:w-1/4 order-1 lg:order-2"> <div class="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-8"> <h2 class="text-2xl font-bold mb-6 text-primary">Recent Posts</h2> <div class="space-y-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "RecentPosts", $$RecentPosts, { "post": post })}`)} </div> </div> </div> <!-- this is just recreating the blogpost component : --> <template id="blog-post-template" class="bg-white"> <a href="" class="block group" id="blog-post-component"> <article class="bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-sm transition-all duration-300
               group-hover:shadow-lg group-hover:bg-opacity-100 group-hover:-translate-y-1"> <div class="aspect-w-16 aspect-h-9"> <img src="" class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"> </div> <div class="p-6"> <h2 class="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"></h2> <p class="text-gray-600 mb-4 line-clamp-3"></p> <div class="flex items-center justify-between text-gray-500 text-sm"> <span class="flex items-center"> ${renderComponent($$result2, "FaUser", FaUser, { "className": "mr-2" })} <span class="author"></span> </span> <span class="flex items-center"> ${renderComponent($$result2, "FaCalendarAlt", FaCalendarAlt, { "className": "mr-2" })} <span class="date bg-b"></span> </span> </div> </div> </article> </a> </template> </div> </div> </section> ` })} `;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
