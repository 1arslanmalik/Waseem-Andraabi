import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DUT2XN8e.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"services":[{"title":"In-vitro fertilization (IVF)","description":"IVF is an assisted reproductive technique where eggs and sperm are fertilized in a laboratory dish. Mature eggs are retrieved from the female�s ovaries and combined with sperm, forming embryos. After a few days, the healthiest embryo is transferred into the uterus for implantation."},{"title":"Intrauterine Insemination (IUI)","description":"IUI is a fertility treatment that involves placing specially prepared sperm directly into the uterus during the female�s ovulation period. It is an effective option for couples with mild male infertility or unexplained fertility problems. IUI increases the chances of sperm reaching the egg, & conception."},{"title":"Ovulation Induction/Follicular Ultrasound","description":"Ovulation induction involves stimulating the ovaries with medications to promote the growth of multiple eggs. Follicular ultrasound monitors the developing follicles in the ovaries to determine the ideal time for egg retrieval or insemination."},{"title":"Female Infertility Tests","description":"These tests help identify female fertility problems. They include hormone testing to evaluate ovulation, pelvic ultrasound to check the reproductive organs� health, and hysterosalpingography to assess the fallopian tubes and uterus."},{"title":"Male Infertility Tests","description":"These tests are conducted to assess male fertility issues. Semen analysis is the most common test, evaluating sperm count, motility, and morphology. Hormonal and genetic tests can also identify potential problems affecting sperm production or function."},{"title":"Mini IVF","description":"Mini IVF, also known as micro IVF, is a modified version of traditional IVF. It uses lower doses of fertility drugs to produce a smaller number of eggs, reducing costs and potential side effects. It is suitable for older women or those with a lower ovarian reserve."},{"title":"Intracytoplasmic Sperm Injection (ICSI)","description":"ICSI is an advanced IVF technique used when male infertility is severe. It involves injecting a single sperm directly into an egg to facilitate fertilization. ICSI increases the chances of fertilization and is recommended when conventional IVF may not be successful."},{"title":"Blastocyst Transfer","description":"Blastocyst transfer is an extended embryo culture method where embryos are grown in the laboratory for around five days until they reach the blastocyst stage. A high-quality blastocyst is then selected and transferred into the uterus. This technique allows better embryo selection and improves pregnancy."},{"title":"Endometrial Receptivity Analysis (ERA) Test","description":"Endometrial Receptivity Analysis (ERA) is a diagnostic procedure to assess the optimal window of implantation during the menstrual cycle. By analyzing the endometrial tissue, doctors can determine the most suitable time for embryo transfer, increasing the chances of successful implantation and pregnancy."},{"title":"PCOS/PCOD Treatment","description":"PCOS (Polycystic Ovary Syndrome) or PCOD (Polycystic Ovary Disease) treatment focuses on managing hormone imbalances & promoting ovulation. Lifestyle changes, oral medications like Clomiphene, & injectable gonadotropins can help induce ovulation. Ovulation induction techniques, including IUI/IVF, may be recommended if conservative treatments are unsuccessful, facilitating pregnancy in women."},{"title":"Donor Eggs/Donor Sperms","description":"Donor eggs or donor sperm are used in assisted reproductive techniques when a person or couple is unable to produce viable eggs or sperm. Donor eggs are retrieved from a healthy, screened woman, while donor sperm is obtained from a healthy, screened male. These are used in procedures like IVF or IUI to achieve pregnancy. This option is beneficial for individuals with diminished"},{"title":"Recurrent Pregnancy Loss","description":"It refers to cases where multiple Pregnancy attempts have been unsuccessful. To address this, an evaluation of factors contributing to repeated failures is conducted. Treatment may involve advanced techniques like PGT, assisted hatching, or personalized protocols to optimize embryo quality and improve the likelihood of a successful pregnancy. Psychological support may also be provided to cope with the ."},{"title":"Laparoscopy & Hysteroscopy","description":"Laparoscopy is a surgical procedure used to diagnose & treat endometriosis, blocked fallopian tubes, or ovarian cysts. Hysteroscopy, on the other hand, involves the inspection of the uterine cavity to diagnose and treat abnormalities like polyps or fibroids. These procedures can improve fertility outcomes and may be used to address unexplained infertility."},{"title":"Low AMH Treatment","description":"Anti-Mullerian Hormone (AMH) is a marker of ovarian reserve. IVF with low AMH refers to the process of undergoing IVF treatment with diminished ovarian reserve. While response to fertility medications may be limited, personalized protocols and higher medication doses are often used to stimulate the ovaries and increase the number of eggs retrieved."},{"title":"Assisted Hatching","description":"Assisted hatching is a procedure performed during IVF to enhance embryo implantation. A small hole is made in the outer shell (zona pellucida) of the embryo to facilitate its hatching and subsequent attachment to the uterus. This technique is especially useful for older women or those with thick zona pellucida, increasing the chances of successful embryo implantation."},{"title":"Fertility Preservation (Egg Freezing/Embryo Freezing)","description":"Fertility preservation allows individuals to store eggs or embryos for future use. Egg freezing involves retrieving and freezing a woman�s eggs for later fertilization through IVF. Embryo freezing involves freezing fertilized embryos. It is beneficial for those undergoing cancer treatment, delaying parenthood, or facing fertility risks."},{"title":"PRP - Ovarian and Endometrial","description":"Platelet-Rich Plasma (PRP) therapy involves using a concentrated solution of the patient�s own platelets to promote tissue regeneration and healing. In the context of fertility, PRP can be applied to the ovaries or endometrial lining to potentially improve ovarian function or endometrial receptivity, respectively, and enhance the chances of successful embryo implantation."},{"title":"Preimplantation Genetic Testing (PGT)","description":"PGT is a genetic screening technique used alongside IVF to identify chromosomal or genetic abnormalities in embryos before implantation. This screening helps in selecting healthy embryos, reducing the risk of passing on genetic disorders, and increasing the chances of successful pregnancies, particularly for couples with known genetic conditions or recurrent miscarriages."}]};
				const file = "C:/Users/arsla/programming/src/content/home/services_content.md";
				const url = undefined;
				function rawContent() {
					return "    ";
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
