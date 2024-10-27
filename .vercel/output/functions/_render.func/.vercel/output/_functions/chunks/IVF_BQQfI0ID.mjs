import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title1":"In-Vitro Fertilization","title2":"What is IVF?","p1":"IVF (In Vitro Fertilization) is a medical procedure that helps people who have difficulty conceiving a child naturally.","p2":"IVF is a process where an egg is fertilized by sperm outside the body, typically in a laboratory dish, and then the resulting embryo is transferred to the uterus to begin a pregnancy.","p3":"This technique allows doctors to assist in conception when there are issues with fertility, offering a chance for individuals or couples to have a baby when other methods have been unsuccessful."};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/home/IVF.md";
				const url = undefined;
				function rawContent() {
					return "\n";
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
