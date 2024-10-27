import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"allBlogPosts":[{"id":1,"title":"How to Get Pregnant After Miscarriage: A Guide to a Healthy Pregnancy","excerpt":"Experiencing a miscarriage can be a difficult event, both mentally and physically. However, many women who have gone through this are eager to conceive again and achieve a healthy pregnancy.","author":"Dr. Rhythm Gupta","date":"06 Aug","comments":0,"image":"/blog-placeholder-2.jpg"},{"id":2,"title":"Is IVF Treatment the Right Option?","excerpt":"Many couples dream of starting a family but face challenges along the way. In vitro fertilization (IVF) can offer hope for those struggling with infertility, understanding whether IVF is the right option requires a deep dive into the treatment's details, benefits, and potential drawbacks.","author":"Dr. Sarah Johnson","date":"03 Aug","comments":0,"image":"/blog-placeholder-3.jpg"}]};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/home/blog_content.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
