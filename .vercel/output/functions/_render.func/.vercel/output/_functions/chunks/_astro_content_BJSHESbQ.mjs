import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_CwYqlLnt.mjs';
import { a as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_D-5jfayS.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  params.set("importer", filePath);
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.drwaseemandrabi.com/", "SSR": true};
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
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = rawEntry.filePath ? updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap) : rawEntry.data;
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
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
    if (!Object.assign(__vite_import_meta_env__, {})?.DEV && cacheEntriesByCollection.has(collection)) {
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
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/boost-male-fertility.md": () => import('./boost-male-fertility_BFLFefGY.mjs'),"/src/content/blog/egg-freezing-guide.md": () => import('./egg-freezing-guide_Bh4G5G24.mjs'),"/src/content/blog/fertility-assessment.md": () => import('./fertility-assessment_Ba1lniOo.mjs'),"/src/content/blog/identifying-infertility.md": () => import('./identifying-infertility_DR-HbuE7.mjs'),"/src/content/blog/infertility-common-problem.md": () => import('./infertility-common-problem_C9g05gcw.mjs'),"/src/content/blog/is-ivf-right.md": () => import('./is-ivf-right_DXGHlceQ.mjs'),"/src/content/blog/pcos.md": () => import('./pcos_Cm35GNdw.mjs'),"/src/content/blog/preimplantation-genetic-testing.md": () => import('./preimplantation-genetic-testing_D_jVbUSl.mjs'),"/src/content/blog/stress-and-fertility.md": () => import('./stress-and-fertility_ChcDusDB.mjs'),"/src/content/home/IVF.md": () => import('./IVF_STdnUliK.mjs'),"/src/content/home/about_content.md": () => import('./about_content_CwNfUATV.mjs'),"/src/content/home/blog_content.md": () => import('./blog_content_BBX0rdMs.mjs'),"/src/content/home/footer_content.md": () => import('./footer_content_Dro_pcp4.mjs'),"/src/content/home/hero_content.md": () => import('./hero_content_DSZK73LP.mjs'),"/src/content/home/services_content.md": () => import('./services_content_DAYTekBf.mjs'),"/src/content/home/why_choose_us.md": () => import('./why_choose_us_5bmcXwuY.mjs'),"/src/content/services/egg-freezing.md": () => import('./egg-freezing_DWLd8oWw.mjs'),"/src/content/services/era.md": () => import('./era_CjaA4JwA.mjs'),"/src/content/services/female-infertility-treatment.md": () => import('./female-infertility-treatment_BIHX26e9.mjs'),"/src/content/services/follicular-ultrasound.md": () => import('./follicular-ultrasound_DeX_GTkB.mjs'),"/src/content/services/icsi.md": () => import('./icsi_DzlFqPoI.mjs'),"/src/content/services/iui.md": () => import('./iui_CZ5DmtZq.mjs'),"/src/content/services/ivf.md": () => import('./ivf_Cbvq-kFU.mjs'),"/src/content/services/laparoscopy-hysteroscopy.md": () => import('./laparoscopy-hysteroscopy_DZuJK_FN.mjs'),"/src/content/services/laser-assisted-hatching.md": () => import('./laser-assisted-hatching_BFnSBUvE.mjs'),"/src/content/services/low-amh-treatment.md": () => import('./low-amh-treatment_snWGEjyG.mjs'),"/src/content/services/male-infertility-treatment.md": () => import('./male-infertility-treatment_H98-0yVa.mjs'),"/src/content/services/minimal-stimulation-ivf.md": () => import('./minimal-stimulation-ivf_rFMWhQx8.mjs'),"/src/content/services/pcos-pcod.md": () => import('./pcos-pcod_D_pl15JA.mjs'),"/src/content/services/preimplantation-genetic-testing.md": () => import('./preimplantation-genetic-testing_D-MYKYL-.mjs'),"/src/content/services/prp-treatment-ivf.md": () => import('./prp-treatment-ivf_CHHnzwtT.mjs'),"/src/content/services/recurrent-pregnancy-loss-miscarriage.md": () => import('./recurrent-pregnancy-loss-miscarriage_BIAixtAn.mjs')});
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
lookupMap = {"blog":{"type":"content","entries":{"identifying-infertility":"/src/content/blog/identifying-infertility.md","boost-male-fertility":"/src/content/blog/boost-male-fertility.md","egg-freezing-guide":"/src/content/blog/egg-freezing-guide.md","fertility-assessment":"/src/content/blog/fertility-assessment.md","infertility-common-problem":"/src/content/blog/infertility-common-problem.md","pcos":"/src/content/blog/pcos.md","stress-and-fertility":"/src/content/blog/stress-and-fertility.md","preimplantation-genetic-testing":"/src/content/blog/preimplantation-genetic-testing.md","is-ivf-right":"/src/content/blog/is-ivf-right.md"}},"home":{"type":"content","entries":{"about_content":"/src/content/home/about_content.md","blog_content":"/src/content/home/blog_content.md","footer_content":"/src/content/home/footer_content.md","hero_content":"/src/content/home/hero_content.md","ivf":"/src/content/home/IVF.md","services_content":"/src/content/home/services_content.md","why_choose_us":"/src/content/home/why_choose_us.md"}},"services":{"type":"content","entries":{"egg-freezing":"/src/content/services/egg-freezing.md","era":"/src/content/services/era.md","female-infertility-treatment":"/src/content/services/female-infertility-treatment.md","follicular-ultrasound":"/src/content/services/follicular-ultrasound.md","icsi":"/src/content/services/icsi.md","iui-treatment":"/src/content/services/iui.md","ivf-treatment":"/src/content/services/ivf.md","laser-assisted-hatching":"/src/content/services/laser-assisted-hatching.md","male-infertility-treatment":"/src/content/services/male-infertility-treatment.md","laparoscopy-hysteroscopy":"/src/content/services/laparoscopy-hysteroscopy.md","low-amh-treatment":"/src/content/services/low-amh-treatment.md","minimal-stimulation-ivf":"/src/content/services/minimal-stimulation-ivf.md","pcos-pcod":"/src/content/services/pcos-pcod.md","preimplantation-genetic-testing":"/src/content/services/preimplantation-genetic-testing.md","prp-treatment-ivf":"/src/content/services/prp-treatment-ivf.md","recurrent-pregnancy-loss-miscarriage":"/src/content/services/recurrent-pregnancy-loss-miscarriage.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/boost-male-fertility.md": () => import('./boost-male-fertility_CAG4M2-C.mjs'),"/src/content/blog/egg-freezing-guide.md": () => import('./egg-freezing-guide_BDQvrQ0w.mjs'),"/src/content/blog/fertility-assessment.md": () => import('./fertility-assessment_5O0bBP0M.mjs'),"/src/content/blog/identifying-infertility.md": () => import('./identifying-infertility_kh8YnzZ4.mjs'),"/src/content/blog/infertility-common-problem.md": () => import('./infertility-common-problem_BxZpKG7L.mjs'),"/src/content/blog/is-ivf-right.md": () => import('./is-ivf-right_BZX79nrq.mjs'),"/src/content/blog/pcos.md": () => import('./pcos_DB3tpexc.mjs'),"/src/content/blog/preimplantation-genetic-testing.md": () => import('./preimplantation-genetic-testing_2Fyn6GKd.mjs'),"/src/content/blog/stress-and-fertility.md": () => import('./stress-and-fertility_D4M6M4RS.mjs'),"/src/content/home/IVF.md": () => import('./IVF_CBuhjeih.mjs'),"/src/content/home/about_content.md": () => import('./about_content_DIbtd_DN.mjs'),"/src/content/home/blog_content.md": () => import('./blog_content_BR1EUj2n.mjs'),"/src/content/home/footer_content.md": () => import('./footer_content_B4IZpB2m.mjs'),"/src/content/home/hero_content.md": () => import('./hero_content_NP8b0iqE.mjs'),"/src/content/home/services_content.md": () => import('./services_content_C9tvx-sE.mjs'),"/src/content/home/why_choose_us.md": () => import('./why_choose_us_Bn7tcIOH.mjs'),"/src/content/services/egg-freezing.md": () => import('./egg-freezing_D2hr2E8C.mjs'),"/src/content/services/era.md": () => import('./era_D5mF3loi.mjs'),"/src/content/services/female-infertility-treatment.md": () => import('./female-infertility-treatment_BcgYVda9.mjs'),"/src/content/services/follicular-ultrasound.md": () => import('./follicular-ultrasound_B2DDJMnG.mjs'),"/src/content/services/icsi.md": () => import('./icsi_Cqgnydtz.mjs'),"/src/content/services/iui.md": () => import('./iui_C91vDVyW.mjs'),"/src/content/services/ivf.md": () => import('./ivf_aurWq8Oe.mjs'),"/src/content/services/laparoscopy-hysteroscopy.md": () => import('./laparoscopy-hysteroscopy_BvZ5zFm7.mjs'),"/src/content/services/laser-assisted-hatching.md": () => import('./laser-assisted-hatching_BV7Cr2BF.mjs'),"/src/content/services/low-amh-treatment.md": () => import('./low-amh-treatment_IS-yFIO4.mjs'),"/src/content/services/male-infertility-treatment.md": () => import('./male-infertility-treatment_CdVDcZk0.mjs'),"/src/content/services/minimal-stimulation-ivf.md": () => import('./minimal-stimulation-ivf_C8iGdT_S.mjs'),"/src/content/services/pcos-pcod.md": () => import('./pcos-pcod_CmKUoZ8M.mjs'),"/src/content/services/preimplantation-genetic-testing.md": () => import('./preimplantation-genetic-testing_CvR2M-CF.mjs'),"/src/content/services/prp-treatment-ivf.md": () => import('./prp-treatment-ivf_BTmxmMZa.mjs'),"/src/content/services/recurrent-pregnancy-loss-miscarriage.md": () => import('./recurrent-pregnancy-loss-miscarriage_CK_3l-uV.mjs')});
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
