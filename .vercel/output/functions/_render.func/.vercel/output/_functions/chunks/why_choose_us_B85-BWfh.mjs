import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slogans":[{"title":"Expertise In Fertility","icon":"/DoctorVector.svg","points":["10+ Years of Experience","Serving Thousands of Couples Grappling with Fertility Challenges"]},{"title":"Research And Education","icon":"/ResearchVector.svg","points":["Multiple Publications in Reproductive Biology","Chapter Contributor to \"The Infertility Manual\"","Ph.D. Clinical Andrology"]},{"title":"Your Baby Awaits","icon":"/FamilyVector.svg","points":["Trusted by Leading Fertility Centers Across India","95% Patient Satisfaction Rate","Personalized Care for Every Patient"]}]};
				const file = "C:/Users/arsla/programming/src/content/home/why_choose_us.md";
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
