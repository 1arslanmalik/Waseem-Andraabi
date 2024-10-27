import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><strong>Intrauterine Insemination (IUI)</strong> is a fertility treatment designed to increase the chances of conception by placing sperm directly into a woman’s uterus.</p>\n<h2 id=\"the-iui-treatment-process\"><strong>The IUI Treatment Process</strong></h2>\n<h4 id=\"step-1-initial-consultation\">Step 1: Initial Consultation</h4>\n<p>The process begins with a thorough consultation where medical histories are reviewed. This helps identify any underlying fertility issues and determines if IUI is the most suitable treatment option.</p>\n<h4 id=\"step-2-ovulation-induction\">Step 2: Ovulation Induction</h4>\n<p>In many cases, women are given medications to stimulate the ovaries and encourage the development of multiple eggs, enhancing the chances of successful fertilization. Hormone levels and follicle growth are closely monitored via ultrasound.</p>\n<h4 id=\"step-3-sperm-preparation\">Step 3: Sperm Preparation</h4>\n<p>On the day of the procedure, a sperm sample is collected. This sample is processed in the lab to concentrate the most viable sperm, which are then prepared for insemination.</p>\n<h4 id=\"step-4-insemination\">Step 4: Insemination</h4>\n<p>The insemination procedure is simple and painless. A thin, flexible catheter is used to introduce the prepared sperm directly into the uterus, reducing the distance sperm need to travel to reach the egg and increasing the likelihood of fertilization.</p>\n<h4 id=\"step-5-monitoring-and-support\">Step 5: Monitoring and Support</h4>\n<p>After the procedure, patients are usually advised to rest briefly. Progress is monitored throughout the menstrual cycle, and a pregnancy test is typically conducted about two weeks after the procedure to determine if conception has occurred.</p>";

				const frontmatter = {"slug":"iui-treatment","title":"IUI Treatment","description":"Discover the IUI treatment process, a fertility procedure where sperm is placed directly into the uterus to improve the chances of conception."};
				const file = "C:/Users/arsla/OneDrive/Desktop/waseem-andrabi/src/content/services/iui.md";
				const url = undefined;
				function rawContent() {
					return "\n**Intrauterine Insemination (IUI)** is a fertility treatment designed to increase the chances of conception by placing sperm directly into a woman’s uterus.\n\n## **The IUI Treatment Process**\n\n\n#### Step 1: Initial Consultation\n\nThe process begins with a thorough consultation where medical histories are reviewed. This helps identify any underlying fertility issues and determines if IUI is the most suitable treatment option.\n\n#### Step 2: Ovulation Induction\n\nIn many cases, women are given medications to stimulate the ovaries and encourage the development of multiple eggs, enhancing the chances of successful fertilization. Hormone levels and follicle growth are closely monitored via ultrasound.\n\n#### Step 3: Sperm Preparation\n\nOn the day of the procedure, a sperm sample is collected. This sample is processed in the lab to concentrate the most viable sperm, which are then prepared for insemination.\n\n#### Step 4: Insemination\n\nThe insemination procedure is simple and painless. A thin, flexible catheter is used to introduce the prepared sperm directly into the uterus, reducing the distance sperm need to travel to reach the egg and increasing the likelihood of fertilization.\n\n#### Step 5: Monitoring and Support\n\nAfter the procedure, patients are usually advised to rest briefly. Progress is monitored throughout the menstrual cycle, and a pregnancy test is typically conducted about two weeks after the procedure to determine if conception has occurred.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"the-iui-treatment-process","text":"The IUI Treatment Process"},{"depth":4,"slug":"step-1-initial-consultation","text":"Step 1: Initial Consultation"},{"depth":4,"slug":"step-2-ovulation-induction","text":"Step 2: Ovulation Induction"},{"depth":4,"slug":"step-3-sperm-preparation","text":"Step 3: Sperm Preparation"},{"depth":4,"slug":"step-4-insemination","text":"Step 4: Insemination"},{"depth":4,"slug":"step-5-monitoring-and-support","text":"Step 5: Monitoring and Support"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
