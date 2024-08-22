/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot } from '../../chunks/astro/server_DUT2XN8e.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BsU5OTCC.mjs';
import 'clsx';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DNHWABDD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/arsla/programming/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="text-gray-800 bg-cream bg-opacity-20"> <div class="container bg-white mx-auto px-4 py-8 max-w-4xl"> <div class="mb-8"> <a href="/blog" class="text-primary hover:underline">&larr; Back to Blog</a> </div> <h1 class="text-3xl sm:text-4xl font-bold text-primary mb-4">${title}</h1> <div class="mb-6 text-sm text-gray-600"> <span>Published on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": pubDate })}</span> ${updatedDate && renderTemplate`<span class="ml-4">
(Updated: ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })})
</span>`} </div> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="w-full h-auto object-cover rounded-lg shadow-md mb-8">`} <div class="prose max-w-none"> <p class="text-xl text-gray-700 mb-8">${description}</p> ${renderSlot($$result2, $$slots["default"])} </div> </div> <aside class="bg-gray-100 py-8 mt-12"> <div class="container mx-auto px-4 max-w-4xl"> <h2 class="text-2xl font-bold text-primary mb-6">Recent Posts</h2> <!-- Add your recent posts component here --> </div> </aside> </article> ` })}`;
}, "C:/Users/arsla/programming/src/layouts/BlogLayout.astro", void 0);

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogLayout, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/arsla/programming/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/arsla/programming/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
