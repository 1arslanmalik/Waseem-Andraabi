import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, d as renderComponent, j as renderHead } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { P as PHONE1, a as PHONE2, S as SITE_TITLE, A as ADDRESS, b as SITE_DESCRIPTION } from './consts_DKj39Uo3.mjs';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { frontmatter } from './footer_content_BWli1-zD.mjs';

const $$Astro$1 = createAstro("https://www.drwaseemandrabi.com/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/WebsiteLogo.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/Pacifico-Regular.ttf" as="font" type="font/truetype" crossorigin><link rel="preload" href="/fonts/AveriaSansLibre-Regular.ttf" as="font" type="font/truetype" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook
<meta property="og:type" content="website" />
<meta property="og:url" content={Astro.url} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.url)} /> --><!-- Twitter
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={Astro.url} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(image, Astro.url)} /> -->`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`<!-- apply classes in the class:list if current page is active -->${maybeRenderHead()}<h5 class=""> <a${addAttribute(href, "href")}${addAttribute([
    className,
    {
      underline: isActive,
      "text-xl": isActive,
      "text-teal-300": isActive,
      "text-teal-700": !isActive
    }
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a> </h5>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-gradient-to-b from-primary to-primary_light text-white fixed top-0 left-0 w-full z-50"> <!-- Contact info for mobile --> <div class="md:hidden w-full px-2 font-averia_sans text-[0.7rem] text-nowrap order-3 bg-primary_light"> <div class="flex justify-between px-5 items-center flex-row w-full sm:space-x-5 p-1"> <a${addAttribute(`tel:${PHONE1}`, "href")} class="flex items-center space-x-1"> ${renderComponent($$result, "FaPhoneAlt", FaPhoneAlt, {})}<span>${PHONE1}</span> </a> <a${addAttribute(`tel:${PHONE2}`, "href")} class="flex items-center space-x-1"> ${renderComponent($$result, "FaPhoneAlt", FaPhoneAlt, {})}<span>${PHONE2}</span> </a> </div> </div> <div class="navbar container mx-auto flex flex-wrap justify-between items-center"> <div class="navbar-start p-2 sm:p-3 md:p-4 lg:p-5"> <a href="/" class="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-cursive font-pacifico text-white whitespace-nowrap"> ${SITE_TITLE} </a> </div> <div class="navbar-center hidden lg:flex mr-5"> <ul class="flex space-x-6 font-averia_sans text-lg"> <li>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "nav-link" }, { "default": ($$result2) => renderTemplate`Home` })}</li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/services", "class": "nav-link" }, { "default": ($$result2) => renderTemplate`Services` })} </li> <li>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "nav-link" }, { "default": ($$result2) => renderTemplate`About` })}</li> <li>${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "nav-link" }, { "default": ($$result2) => renderTemplate`Blog` })}</li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "class": "nav-link" }, { "default": ($$result2) => renderTemplate`Contact` })} </li> </ul> </div> <!-- dropdown --> <div class="navbar-end lg:hidden"> <div class="dropdown dropdown-end"> <label tabindex="0" class="btn btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </label> <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 bg-primary rounded-box w-52 shadow-md shadow-black"> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "hover:text-green-400" }, { "default": ($$result2) => renderTemplate`Home` })} </li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/services", "class": "hover:text-green-400" }, { "default": ($$result2) => renderTemplate`Services` })} </li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "hover:text-green-400" }, { "default": ($$result2) => renderTemplate`About` })} </li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "hover:text-green-400" }, { "default": ($$result2) => renderTemplate`Blog` })} </li> <li> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/contact", "class": "hover:text-green-400" }, { "default": ($$result2) => renderTemplate`Contact` })} </li> </ul> </div> </div> </div> </header> <div id="nav-spacer" class="m-[1px]"></div> `;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-800 text-white py-8 px-4"> <div class="container mx-auto flex flex-wrap font-averia_sans"> <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 px-4"> <h2 class="text-3xl font-cursive font-pacifico mb-2"> ${SITE_TITLE} </h2> <span class="text-secondary text-xl mb-4 inline-block border-b-2 border-secondary"> ${frontmatter.subtitle} </span> <p class="text-sm mt-4">${frontmatter.description}</p> </div> <div class="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 px-4"> <h1 class="mb-5"> <span class="text-secondary text-2xl border-secondary border-b-2">Quick Links</span> </h1> <ul class="space-y-2"> ${frontmatter.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:text-green-400"> ${link.title} </a> </li>`)} </ul> </div> <div class="w-full md:w-1/2 lg:w-1/3 px-4"> <h1 class="mb-5"> <span class="text-secondary text-2xl border-secondary border-b-2">Contact Us</span> </h1> <div class="space-y-2"> <a${addAttribute(`tel:${PHONE1}`, "href")} class="flex items-center space-x-1 hover:text-green-400"> <span>${PHONE1}</span> </a> <a${addAttribute(`tel:${PHONE2}`, "href")} class="flex items-center space-x-1 hover:text-green-400"> <span>${PHONE2}</span> </a> <h1 class="text-lg mb-4 flex items-center space-x-1"> <span>${ADDRESS}</span> </h1> </div> <div class="flex space-x-4 my-5"> <a href="#" class="text-white hover:text-green-400">${renderComponent($$result, "FaFacebookF", FaFacebookF, {})}</a> <a href="#" class="text-white hover:text-green-400">${renderComponent($$result, "FaTwitter", FaTwitter, {})}</a> <a href="#" class="text-white hover:text-green-400">${renderComponent($$result, "FaLinkedinIn", FaLinkedinIn, {})}</a> <a href="#" class="text-white hover:text-green-400">${renderComponent($$result, "FaInstagram", FaInstagram, {})}</a> </div> </div> </div> <div class="mt-8 pt-4 border-t border-gray-700 text-sm text-center"> <a href="/terms" class="hover:text-green-400">Terms of Use</a> |
<a href="/privacy" class="hover:text-green-400">Privacy Policy</a> <p class="mt-2">
Copyright ${today.getFullYear()} - Dr. Waseem Andrabi. All Rights Reserved.
</p> </div> </footer>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/components/Footer.astro", void 0);

const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body class="bg-white w-fit"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
