import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Dr. Waseem Andrabi","subtitle":"IVF Specialist","description":"Dr. Waseem Andrabi has dedicated his career to serving couples grappling with fertility challenges, offering not only practical solutions but also pioneering scientific advancements. His commitment to excellence is evident in his innovative approaches and compassionate care, which have brought hope and joy to countless families worldwide.","address":"Visan Eye & Retina Centre, Plot No. - 2227, near Wazirabad Road, Wazirabad, Sector 57, Gurugram, Haryana 122011","phone1":"+91 8899889988","phone2":"+91 8899889988","links":[{"title":"Home","href":"/"},{"title":"Services","href":"/services"},{"title":"About","href":"/about"},{"title":"Blog","href":"/blog"},{"title":"Contact","href":"/contact"}]};
				const file = "C:/Users/arsla/programming/src/content/home/footer_content.md";
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
