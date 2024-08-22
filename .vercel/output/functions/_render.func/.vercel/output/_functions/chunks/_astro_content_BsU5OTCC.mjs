import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, q as prependForwardSlash } from './astro/assets-service_ZrS77jej.mjs';
import { a as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_DUT2XN8e.mjs';
import 'kleur/colors';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://example.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_C4iDH41e.mjs'),"/src/content/blog/markdown-style-guide - Copy (10).md": () => import('./markdown-style-guide - Copy (10)_DLst5dDV.mjs'),"/src/content/blog/markdown-style-guide - Copy (2).md": () => import('./markdown-style-guide - Copy (2)_D5huvU7i.mjs'),"/src/content/blog/markdown-style-guide - Copy (3).md": () => import('./markdown-style-guide - Copy (3)_CVjdyIcS.mjs'),"/src/content/blog/markdown-style-guide - Copy (4).md": () => import('./markdown-style-guide - Copy (4)_BQfBoiX2.mjs'),"/src/content/blog/markdown-style-guide - Copy (5).md": () => import('./markdown-style-guide - Copy (5)_CPLG571D.mjs'),"/src/content/blog/markdown-style-guide - Copy (6).md": () => import('./markdown-style-guide - Copy (6)_B-kf2aUD.mjs'),"/src/content/blog/markdown-style-guide - Copy (7).md": () => import('./markdown-style-guide - Copy (7)_CSZcXk_O.mjs'),"/src/content/blog/markdown-style-guide - Copy (8).md": () => import('./markdown-style-guide - Copy (8)_BNBJoiQM.mjs'),"/src/content/blog/markdown-style-guide - Copy (9).md": () => import('./markdown-style-guide - Copy (9)_t8Iit1j5.mjs'),"/src/content/blog/markdown-style-guide - Copy.md": () => import('./markdown-style-guide - Copy_DhwePeAl.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_DvaIUp-l.mjs'),"/src/content/home/IVF.md": () => import('./IVF_Dg5F0F7e.mjs'),"/src/content/home/blog_content.md": () => import('./blog_content_qbIlvREl.mjs'),"/src/content/home/footer_content.md": () => import('./footer_content_Bo_7dpO4.mjs'),"/src/content/home/hero_content.md": () => import('./hero_content_CIwWSNZa.mjs'),"/src/content/home/services_content.md": () => import('./services_content_ClAKuAwi.mjs'),"/src/content/home/why_choose_us.md": () => import('./why_choose_us_DhgYP5Or.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"first-post":"/src/content/blog/first-post.md","markdown-style-guide---copy-4":"/src/content/blog/markdown-style-guide - Copy (4).md","markdown-style-guide---copy-6":"/src/content/blog/markdown-style-guide - Copy (6).md","markdown-style-guide---copy-7":"/src/content/blog/markdown-style-guide - Copy (7).md","markdown-style-guide---copy-2":"/src/content/blog/markdown-style-guide - Copy (2).md","markdown-style-guide---copy-3":"/src/content/blog/markdown-style-guide - Copy (3).md","markdown-style-guide---copy-9":"/src/content/blog/markdown-style-guide - Copy (9).md","markdown-style-guide---copy-8":"/src/content/blog/markdown-style-guide - Copy (8).md","markdown-style-guide---copy-5":"/src/content/blog/markdown-style-guide - Copy (5).md","markdown-style-guide---copy-10":"/src/content/blog/markdown-style-guide - Copy (10).md","markdown-style-guide---copy":"/src/content/blog/markdown-style-guide - Copy.md","markdown-style-guide":"/src/content/blog/markdown-style-guide.md"}},"home":{"type":"content","entries":{"blog_content":"/src/content/home/blog_content.md","footer_content":"/src/content/home/footer_content.md","hero_content":"/src/content/home/hero_content.md","ivf":"/src/content/home/IVF.md","services_content":"/src/content/home/services_content.md","why_choose_us":"/src/content/home/why_choose_us.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/first-post.md": () => import('./first-post_C6YQ6ljc.mjs'),"/src/content/blog/markdown-style-guide - Copy (10).md": () => import('./markdown-style-guide - Copy (10)_Bf_T1RF6.mjs'),"/src/content/blog/markdown-style-guide - Copy (2).md": () => import('./markdown-style-guide - Copy (2)_BJTYNKdB.mjs'),"/src/content/blog/markdown-style-guide - Copy (3).md": () => import('./markdown-style-guide - Copy (3)_CrvhAkvQ.mjs'),"/src/content/blog/markdown-style-guide - Copy (4).md": () => import('./markdown-style-guide - Copy (4)_3twy-2zd.mjs'),"/src/content/blog/markdown-style-guide - Copy (5).md": () => import('./markdown-style-guide - Copy (5)_7t0DDwzC.mjs'),"/src/content/blog/markdown-style-guide - Copy (6).md": () => import('./markdown-style-guide - Copy (6)_CqVZhZfF.mjs'),"/src/content/blog/markdown-style-guide - Copy (7).md": () => import('./markdown-style-guide - Copy (7)_CFIex6np.mjs'),"/src/content/blog/markdown-style-guide - Copy (8).md": () => import('./markdown-style-guide - Copy (8)_DTmYFzba.mjs'),"/src/content/blog/markdown-style-guide - Copy (9).md": () => import('./markdown-style-guide - Copy (9)_BS07gX8D.mjs'),"/src/content/blog/markdown-style-guide - Copy.md": () => import('./markdown-style-guide - Copy_DB1Se-bS.mjs'),"/src/content/blog/markdown-style-guide.md": () => import('./markdown-style-guide_BRwMDyjc.mjs'),"/src/content/home/IVF.md": () => import('./IVF_BOQ5X57X.mjs'),"/src/content/home/blog_content.md": () => import('./blog_content_BQ_HcMn6.mjs'),"/src/content/home/footer_content.md": () => import('./footer_content_DBHvIKYw.mjs'),"/src/content/home/hero_content.md": () => import('./hero_content_DnK6xC1i.mjs'),"/src/content/home/services_content.md": () => import('./services_content_D40kuIHc.mjs'),"/src/content/home/why_choose_us.md": () => import('./why_choose_us_C_GrqTHl.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
