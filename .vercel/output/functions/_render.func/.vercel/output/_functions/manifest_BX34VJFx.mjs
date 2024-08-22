import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_D6-UfLoB.mjs';
import { f as decodeKey } from './chunks/astro/server_D-5jfayS.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/arsla/programming/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.xI0VDRZf.js"}],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"},{"type":"inline","content":"@font-face{font-family:Pacifico;src:url(/fonts/Pacifico-Regular.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:LaBelleAurore;src:url(/fonts/LaBelleAurore-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}@font-face{font-family:AveriaSansLibre;src:url(/fonts/AveriaSansLibre-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n@media (min-width: 1024px){div[data-astro-cid-ozq7ztgm][style*=--custom-height]{height:var(--custom-height)}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"}],"routeData":{"route":"/blod","isIndex":false,"type":"page","pattern":"^\\/blod\\/?$","segments":[[{"content":"blod","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blod.astro","pathname":"/blod","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D0m2mfR4.js"}],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"},{"type":"inline","content":"@font-face{font-family:Pacifico;src:url(/fonts/Pacifico-Regular.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:LaBelleAurore;src:url(/fonts/LaBelleAurore-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}@font-face{font-family:AveriaSansLibre;src:url(/fonts/AveriaSansLibre-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n@media (min-width: 1024px){div[data-astro-cid-ozq7ztgm][style*=--custom-height]{height:var(--custom-height)}}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.OxeX1ADG.js"}],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"},{"type":"inline","content":"@font-face{font-family:Pacifico;src:url(/fonts/Pacifico-Regular.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:LaBelleAurore;src:url(/fonts/LaBelleAurore-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}@font-face{font-family:AveriaSansLibre;src:url(/fonts/AveriaSansLibre-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.xI0VDRZf.js"}],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"},{"type":"inline","content":"@font-face{font-family:Pacifico;src:url(/fonts/Pacifico-Regular.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:LaBelleAurore;src:url(/fonts/LaBelleAurore-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}@font-face{font-family:AveriaSansLibre;src:url(/fonts/AveriaSansLibre-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n@media (min-width: 1024px){div[data-astro-cid-ozq7ztgm][style*=--custom-height]{height:var(--custom-height)}}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"}],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.xI0VDRZf.js"}],"styles":[{"type":"external","src":"/_astro/about.B6MUEPpe.css"},{"type":"inline","content":"@font-face{font-family:Pacifico;src:url(/fonts/Pacifico-Regular.ttf) format(\"truetype\");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:LaBelleAurore;src:url(/fonts/LaBelleAurore-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}@font-face{font-family:AveriaSansLibre;src:url(/fonts/AveriaSansLibre-Regular.ttf) format(\"truetype\");font-style:normal;font-display:swap}main{width:720px;max-width:calc(100% - 2em);margin:auto;padding:3em 1em}h1,h2,h3,h4,h5,h6{margin:0 0 .5rem;color:rgb(var(--black));line-height:1.2}h1{font-size:3.052em}h2{font-size:2.441em}h3{font-size:1.953em}h4{font-size:1.563em}h5{font-size:1.25em}strong,b{font-weight:700}a,a:hover{color:var(--accent)}p{margin-bottom:1em}.prose p{margin-bottom:2em}textarea{width:100%;font-size:16px}input{font-size:16px}table{width:100%}code{padding:2px 5px;background-color:rgb(var(--gray-light));border-radius:2px}pre{padding:1.5em;border-radius:8px}pre>code{all:unset}blockquote{border-left:4px solid var(--accent);padding:0 0 0 20px;margin:0;font-size:1.333em}hr{border:none;border-top:1px solid rgb(var(--gray-light))}.sr-only{border:0;padding:0;margin:0;position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:inset(50%);white-space:nowrap}\n@media (min-width: 1024px){div[data-astro-cid-ozq7ztgm][style*=--custom-height]{height:var(--custom-height)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/arsla/programming/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/arsla/programming/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/arsla/programming/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/arsla/programming/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/arsla/programming/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/arsla/programming/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/arsla/programming/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"pages/api/sendemail.json.astro.mjs","\u0000@astro-page:src/pages/blod@_@astro":"pages/blod.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/test@_@astro":"pages/test.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/arsla/programming/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/arsla/programming/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/arsla/programming/src/content/blog/first-post.md?astroContentCollectionEntry=true":"_astro/first-post.EIjZuM7i.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (10).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (10).Ddxqp64z.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (2).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (2).D73Yxv-l.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (3).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (3).BrZ8VWsL.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (4).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (4).UQ9JiYjK.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (5).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (5).DFSjK-Zh.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (6).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (6).Dyi3ILZx.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (7).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (7).H6_RXkzE.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (8).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (8).o3nbCHff.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (9).md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy (9).Dvc4qE-y.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy.md?astroContentCollectionEntry=true":"_astro/markdown-style-guide - Copy.DkaOWUQn.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"_astro/markdown-style-guide._WiukdKg.js","C:/Users/arsla/programming/src/content/home/IVF.md?astroContentCollectionEntry=true":"_astro/IVF.Bf7va5VK.js","C:/Users/arsla/programming/src/content/home/blog_content.md?astroContentCollectionEntry=true":"_astro/blog_content._JTqsLcn.js","C:/Users/arsla/programming/src/content/home/hero_content.md":"_astro/hero_content.byUS78iZ.js","C:/Users/arsla/programming/src/content/home/footer_content.md":"_astro/footer_content.tYRhBWjc.js","C:/Users/arsla/programming/src/content/home/services_content.md":"_astro/services_content.DOB5Ak1B.js","C:/Users/arsla/programming/src/content/home/IVF.md":"_astro/IVF.BP4C0vf0.js","C:/Users/arsla/programming/src/content/home/why_choose_us.md":"_astro/why_choose_us.Cbgck9Ve.js","C:/Users/arsla/programming/src/content/home/footer_content.md?astroContentCollectionEntry=true":"_astro/footer_content.8vfcaiHv.js","C:/Users/arsla/programming/src/content/home/hero_content.md?astroContentCollectionEntry=true":"_astro/hero_content.czAgsOjd.js","C:/Users/arsla/programming/src/content/home/services_content.md?astroContentCollectionEntry=true":"_astro/services_content.C-JlS6rd.js","C:/Users/arsla/programming/src/content/home/why_choose_us.md?astroContentCollectionEntry=true":"_astro/why_choose_us.Dx8hI34i.js","C:/Users/arsla/programming/src/content/blog/first-post.md?astroPropagatedAssets":"_astro/first-post.iPZ80iZo.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (10).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (10).VJhQi9kQ.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (2).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (2).DrEdp2nI.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (3).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (3).GYcTR_0G.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (4).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (4).yhRYuq2w.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (5).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (5).BPwiYLgV.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (6).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (6).oKyZc7yP.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (7).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (7).CdC3-R_F.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (8).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (8).CQNYHvA5.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (9).md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy (9).1axInTuA.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy.md?astroPropagatedAssets":"_astro/markdown-style-guide - Copy.cc_R6Xx_.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"_astro/markdown-style-guide.Brv16PmE.js","C:/Users/arsla/programming/src/content/home/IVF.md?astroPropagatedAssets":"_astro/IVF.DoX2HWnf.js","C:/Users/arsla/programming/src/content/home/blog_content.md?astroPropagatedAssets":"_astro/blog_content.Cprrdh4d.js","C:/Users/arsla/programming/src/content/home/footer_content.md?astroPropagatedAssets":"_astro/footer_content.Lu6FMc-o.js","C:/Users/arsla/programming/src/content/home/hero_content.md?astroPropagatedAssets":"_astro/hero_content.CKw8DV5D.js","C:/Users/arsla/programming/src/content/home/services_content.md?astroPropagatedAssets":"_astro/services_content.CqR9GIos.js","C:/Users/arsla/programming/src/content/home/why_choose_us.md?astroPropagatedAssets":"_astro/why_choose_us.DDf9aAx4.js","\u0000astro:asset-imports":"_astro/_astro_asset-imports.V_AETmF8.js","\u0000astro:data-layer-content":"_astro/_astro_data-layer-content.DTLWMO03.js","C:/Users/arsla/programming/src/content/blog/first-post.md":"_astro/first-post.BqQ-V61o.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (10).md":"_astro/markdown-style-guide - Copy (10).CgR1ufB2.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (2).md":"_astro/markdown-style-guide - Copy (2).DeqCyj3A.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (3).md":"_astro/markdown-style-guide - Copy (3).mLU2NbtK.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (4).md":"_astro/markdown-style-guide - Copy (4).BgevtKAg.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (5).md":"_astro/markdown-style-guide - Copy (5).WQW0vzM5.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (6).md":"_astro/markdown-style-guide - Copy (6).BajiN3oW.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (7).md":"_astro/markdown-style-guide - Copy (7).ECr9pEfJ.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (8).md":"_astro/markdown-style-guide - Copy (8).BQGqENQ2.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy (9).md":"_astro/markdown-style-guide - Copy (9).ueXdaPkp.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide - Copy.md":"_astro/markdown-style-guide - Copy.D45r4ceC.js","C:/Users/arsla/programming/src/content/blog/markdown-style-guide.md":"_astro/markdown-style-guide.DqIoeg76.js","C:/Users/arsla/programming/src/content/home/blog_content.md":"_astro/blog_content.nuAfo1Ay.js","\u0000@astrojs-manifest":"manifest_BX34VJFx.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.xI0VDRZf.js","/astro/hoisted.js?q=1":"_astro/hoisted.OxeX1ADG.js","/astro/hoisted.js?q=0":"_astro/hoisted.D0m2mfR4.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.B6MUEPpe.css","/aboutus.png","/address.svg","/Doctor.png","/DoctorVector.svg","/FamilyVector.svg","/favicon.svg","/ivf.mp4","/ivf.png","/pregnancy.png","/profile.png","/Rectangle 1.svg","/ResearchVector.svg","/services.png","/WaseemAndrabi.png","/fonts/AveriaSansLibre-Bold.ttf","/fonts/AveriaSansLibre-Light.ttf","/fonts/AveriaSansLibre-Regular.ttf","/fonts/LaBelleAurore-Regular.ttf","/fonts/Pacifico-Regular.ttf","/image_gallery/blog-placeholder-1.jpg","/image_gallery/blog-placeholder-2.jpg","/image_gallery/blog-placeholder-3.jpg","/image_gallery/blog-placeholder-4.jpg","/image_gallery/blog-placeholder-5.jpg","/image_gallery/blog-placeholder-about.jpg","/_astro/blog_content.Cprrdh4d.js","/_astro/blog_content.nuAfo1Ay.js","/_astro/blog_content._JTqsLcn.js","/_astro/client.5I5BMcNS.js","/_astro/first-post.BqQ-V61o.js","/_astro/first-post.EIjZuM7i.js","/_astro/first-post.iPZ80iZo.js","/_astro/footer_content.8vfcaiHv.js","/_astro/footer_content.Lu6FMc-o.js","/_astro/footer_content.tYRhBWjc.js","/_astro/hero_content.byUS78iZ.js","/_astro/hero_content.CKw8DV5D.js","/_astro/hero_content.czAgsOjd.js","/_astro/hoisted.D0m2mfR4.js","/_astro/hoisted.OxeX1ADG.js","/_astro/hoisted.xI0VDRZf.js","/_astro/IVF.Bf7va5VK.js","/_astro/IVF.BP4C0vf0.js","/_astro/IVF.DoX2HWnf.js","/_astro/markdown-style-guide - Copy (10).CgR1ufB2.js","/_astro/markdown-style-guide - Copy (10).Ddxqp64z.js","/_astro/markdown-style-guide - Copy (10).VJhQi9kQ.js","/_astro/markdown-style-guide - Copy (2).D73Yxv-l.js","/_astro/markdown-style-guide - Copy (2).DeqCyj3A.js","/_astro/markdown-style-guide - Copy (2).DrEdp2nI.js","/_astro/markdown-style-guide - Copy (3).BrZ8VWsL.js","/_astro/markdown-style-guide - Copy (3).GYcTR_0G.js","/_astro/markdown-style-guide - Copy (3).mLU2NbtK.js","/_astro/markdown-style-guide - Copy (4).BgevtKAg.js","/_astro/markdown-style-guide - Copy (4).UQ9JiYjK.js","/_astro/markdown-style-guide - Copy (4).yhRYuq2w.js","/_astro/markdown-style-guide - Copy (5).BPwiYLgV.js","/_astro/markdown-style-guide - Copy (5).DFSjK-Zh.js","/_astro/markdown-style-guide - Copy (5).WQW0vzM5.js","/_astro/markdown-style-guide - Copy (6).BajiN3oW.js","/_astro/markdown-style-guide - Copy (6).Dyi3ILZx.js","/_astro/markdown-style-guide - Copy (6).oKyZc7yP.js","/_astro/markdown-style-guide - Copy (7).CdC3-R_F.js","/_astro/markdown-style-guide - Copy (7).ECr9pEfJ.js","/_astro/markdown-style-guide - Copy (7).H6_RXkzE.js","/_astro/markdown-style-guide - Copy (8).BQGqENQ2.js","/_astro/markdown-style-guide - Copy (8).CQNYHvA5.js","/_astro/markdown-style-guide - Copy (8).o3nbCHff.js","/_astro/markdown-style-guide - Copy (9).1axInTuA.js","/_astro/markdown-style-guide - Copy (9).Dvc4qE-y.js","/_astro/markdown-style-guide - Copy (9).ueXdaPkp.js","/_astro/markdown-style-guide - Copy.cc_R6Xx_.js","/_astro/markdown-style-guide - Copy.D45r4ceC.js","/_astro/markdown-style-guide - Copy.DkaOWUQn.js","/_astro/markdown-style-guide.Brv16PmE.js","/_astro/markdown-style-guide.DqIoeg76.js","/_astro/markdown-style-guide._WiukdKg.js","/_astro/services_content.C-JlS6rd.js","/_astro/services_content.CqR9GIos.js","/_astro/services_content.DOB5Ak1B.js","/_astro/why_choose_us.Cbgck9Ve.js","/_astro/why_choose_us.DDf9aAx4.js","/_astro/why_choose_us.Dx8hI34i.js","/_astro/_astro_asset-imports.V_AETmF8.js","/_astro/_astro_data-layer-content.DTLWMO03.js","/_astro/astro/assets-service.CQkeY4V8.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"/pwb/dzFFu/S/R40OxqIrZr++Q2eLYWARKUmwDafyjw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
