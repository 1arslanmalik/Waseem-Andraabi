import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"about":[{"title":"Dr. Waseem Andrabi"},{"sub_title":"Cluster Head of Embryology, NOVA IVF Fertility"},{"p1":"Dr. Waseem Andrabi is a distinguished embryologist with over a decade of experience in reproductive science. His expertise and compassionate approach have helped countless couples achieve their dreams of parenthood."},{"p2":"With a Ph.D. in Reproductive Sciences, Dr. Andrabi combines cutting-edge scientific knowledge with personalized care to provide the best possible outcomes for his patients at NOVA IVF Fertility."}],"imageGallery":[{"src":"/Doctor.png"}],"experiences":[{"years":"2024-Present","position":"Cluster Head Embryology- North at NOVA Fertility and IVF","icon":"mdi:hospital-building"},{"years":"2023-2024","position":"Chief Embryologist and Academic Head-Embryology in WINGS IVF Hospitals","icon":"mdi:teach"},{"years":"2022-2023","position":"Associate Director Embryology-North at Milann-The Fertility Centre","icon":"mdi:account-tie"},{"years":"2021-2022","position":"Senior Embryologist and Lab Manager in Cloudnine-Hospitals Gurgaon","icon":"mdi:microscope"},{"years":"2018-2021","position":"Lab Manager and Senior Embryologist at Milann-The Fertility Centre (New Delhi)","icon":"mdi:test-tube"},{"years":"2014-2018","position":"Clinical embryologist at MMC LUCKNOW","icon":"mdi:dna"}]};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/home/about_content.md";
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
