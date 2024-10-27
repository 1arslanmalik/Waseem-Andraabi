import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"why-has-infertility-become-a-common-problem-today\">Why Has Infertility Become a Common Problem Today?</h1>\n<h2 id=\"causes-of-increased-infertility\">Causes of Increased Infertility</h2>\n<ul>\n<li><strong>Stressful lifestyle</strong>: Stress, anxiety, and depression are common and can negatively impact fertility in both men and women.</li>\n<li><strong>Unhealthy eating habits</strong>: Junk food consumption and obesity contribute to hormonal imbalances and infertility.</li>\n<li><strong>Smoking and alcohol</strong>: Smoking and drinking can lower sperm count and affect sperm quality in men.</li>\n<li><strong>Harmful chemicals</strong>: Environmental exposure to chemicals like endocrine-disrupting compounds in plastics and cosmetics also contributes to fertility issues.</li>\n</ul>\n<h2 id=\"signs-of-male-and-female-infertility\">Signs of Male and Female Infertility</h2>\n<h3 id=\"female-signs\">Female Signs</h3>\n<ul>\n<li>Longer or shorter menstrual cycles</li>\n<li>Irregular or absent menstrual cycles</li>\n</ul>\n<h3 id=\"male-signs\">Male Signs</h3>\n<ul>\n<li>Issues with sexual function (low desire, erectile issues)</li>\n<li>Testicular swelling or pain</li>\n<li>Hormonal imbalance signs, such as reduced facial or body hair and low sperm count</li>\n</ul>\n<h2 id=\"how-can-we-reduce-the-chances-of-infertility\">How Can We Reduce the Chances of Infertility?</h2>\n<p>Preventing infertility largely involves lifestyle changes:</p>\n<ol>\n<li>Early marriage and family planning</li>\n<li>Stress management</li>\n<li>Healthy eating</li>\n<li>Regular exercise</li>\n</ol>\n<p>Medical treatment and fertility medications may also be necessary depending on underlying conditions.</p>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>Infertility is a growing problem, but many cases can be addressed with simple lifestyle changes or medical intervention. Couples struggling to conceive should consult a doctor to explore their options.</p>";

				const frontmatter = {"title":"Why Has Infertility Become a Common Problem Today?","description":"Explore the rising causes of infertility, including lifestyle and environmental factors.","pubDate":"Sept 10 2024","author":"Dr. Vivek Kakkad","heroImage":"/blog_images/female-infertility.jpg"};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/blog/infertility-common-problem.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# Why Has Infertility Become a Common Problem Today?  \r\n\r\n\r\n## Causes of Increased Infertility\r\n\r\n- **Stressful lifestyle**: Stress, anxiety, and depression are common and can negatively impact fertility in both men and women.\r\n- **Unhealthy eating habits**: Junk food consumption and obesity contribute to hormonal imbalances and infertility.\r\n- **Smoking and alcohol**: Smoking and drinking can lower sperm count and affect sperm quality in men.\r\n- **Harmful chemicals**: Environmental exposure to chemicals like endocrine-disrupting compounds in plastics and cosmetics also contributes to fertility issues.\r\n\r\n## Signs of Male and Female Infertility\r\n\r\n### Female Signs\r\n- Longer or shorter menstrual cycles\r\n- Irregular or absent menstrual cycles\r\n\r\n### Male Signs\r\n- Issues with sexual function (low desire, erectile issues)\r\n- Testicular swelling or pain\r\n- Hormonal imbalance signs, such as reduced facial or body hair and low sperm count\r\n\r\n## How Can We Reduce the Chances of Infertility?\r\n\r\nPreventing infertility largely involves lifestyle changes:\r\n\r\n1. Early marriage and family planning\r\n2. Stress management  \r\n3. Healthy eating\r\n4. Regular exercise\r\n\r\nMedical treatment and fertility medications may also be necessary depending on underlying conditions.\r\n\r\n## Conclusion\r\n\r\nInfertility is a growing problem, but many cases can be addressed with simple lifestyle changes or medical intervention. Couples struggling to conceive should consult a doctor to explore their options.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"why-has-infertility-become-a-common-problem-today","text":"Why Has Infertility Become a Common Problem Today?"},{"depth":2,"slug":"causes-of-increased-infertility","text":"Causes of Increased Infertility"},{"depth":2,"slug":"signs-of-male-and-female-infertility","text":"Signs of Male and Female Infertility"},{"depth":3,"slug":"female-signs","text":"Female Signs"},{"depth":3,"slug":"male-signs","text":"Male Signs"},{"depth":2,"slug":"how-can-we-reduce-the-chances-of-infertility","text":"How Can We Reduce the Chances of Infertility?"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
