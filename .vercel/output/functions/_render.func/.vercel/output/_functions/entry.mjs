import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bt3SKLC4.mjs';
import { manifest } from './manifest_DuxzlnVi.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/review.astro.mjs');
const _page3 = () => import('./pages/api/sendemail.json.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/oldservices.astro.mjs');
const _page8 = () => import('./pages/rss.xml.astro.mjs');
const _page9 = () => import('./pages/services.astro.mjs');
const _page10 = () => import('./pages/services/_---slug_.astro.mjs');
const _page11 = () => import('./pages/test.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/review.ts", _page2],
    ["src/pages/api/sendEmail.json.ts", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/oldServices.astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/services/index.astro", _page9],
    ["src/pages/services/[...slug].astro", _page10],
    ["src/pages/test.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a0116b06-e151-4913-bdb9-d89e2d531261",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
