import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Dr. Waseem","title":"A Name That You Can Trust","description":"Welcome to the distinguished realm of Dr. Waseem Andrabi, a renowned figure in the domain of reproductive biology and embryology. With a decade of profound experience, Dr. Andrabi stands as a beacon of expertise, both nationally and internationally, in the field of assisted reproductive technologies. "};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/home/hero_content.md";
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
