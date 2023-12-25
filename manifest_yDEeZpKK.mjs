import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_MCnfm83P.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
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
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"let l=1;const n=document.getElementsByClassName(\"slide\"),i=document.getElementsByClassName(\"dot\");function o(s){s>n.length&&(l=1),s<1&&(l=n.length);for(let e=0;e<n.length;e++)n[e].style.display=\"none\";for(let e=0;e<i.length;e++)i[e].className=i[e].className.replace(\" active\",\"\");n[l-1].style.display=\"block\",i[l-1].className+=\" active\"}function m(s){o(l+=s)}setInterval(function(){m(1)},5e3);o(l);let t=1;const a=document.getElementsByClassName(\"slidesecond\"),c=document.getElementsByClassName(\"dotSecont\");function d(s){s>a.length&&(t=1),s<1&&(t=a.length);for(let e=0;e<a.length;e++)a[e].style.display=\"none\";for(let e=0;e<c.length;e++)c[e].className=c[e].className.replace(\" active\",\"\");a[t-1].style.display=\"block\",c[t-1].className+=\" active\"}function f(s){d(t+=s)}setInterval(function(){f(1)},5e3);d(t);\n"}],"styles":[{"type":"external","src":"/Users/JaimeDS3/Desktop/laskshmi/dist/_astro/about.TG82AfVJ.css"},{"type":"inline","content":".pricing-card[data-astro-cid-dohjnao5]{margin:2rem;background-color:var(--color-golden-300);border-radius:8px;box-shadow:0 0 10px #0000001a;text-align:center;padding:20px;max-width:300px;width:100%}.containerImg[data-astro-cid-dohjnao5]{margin-bottom:15px}.containerImg[data-astro-cid-dohjnao5] img[data-astro-cid-dohjnao5]{width:100%;height:auto;border-radius:8px}.pricing-title[data-astro-cid-dohjnao5]{color:#333;font-size:1.5rem;margin-bottom:10px}.pricing-features[data-astro-cid-dohjnao5]{list-style:none;padding:0}.pricing-features[data-astro-cid-dohjnao5] li[data-astro-cid-dohjnao5]{margin:10px 0;display:flex;align-items:center;justify-content:space-between}.pricing-features[data-astro-cid-dohjnao5] hr[data-astro-cid-dohjnao5]{flex-grow:3;margin:0 10px;border:none;border-top:1px solid var(--color-vinotinto)}.pricing-features[data-astro-cid-dohjnao5] .time[data-astro-cid-dohjnao5],.pricing-features[data-astro-cid-dohjnao5] .pricing[data-astro-cid-dohjnao5]{flex-grow:1}.pricing-button[data-astro-cid-dohjnao5]{background-color:var(--color-vinotinto);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:1rem;text-decoration:none;display:inline-block;transition:background-color .3s ease;margin-top:20px}.pricing-button[data-astro-cid-dohjnao5]:hover{background-color:#3a0309}@media only screen and (max-width: 600px){.pricing-card[data-astro-cid-dohjnao5]{margin:1rem 0}}\n"},{"type":"external","src":"/Users/JaimeDS3/Desktop/laskshmi/dist/_astro/index.aYgc0mXO.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/Users/JaimeDS3/Desktop/laskshmi/dist/_astro/about.TG82AfVJ.css"},{"type":"inline","content":".pricing-card[data-astro-cid-dohjnao5]{margin:2rem;background-color:var(--color-golden-300);border-radius:8px;box-shadow:0 0 10px #0000001a;text-align:center;padding:20px;max-width:300px;width:100%}.containerImg[data-astro-cid-dohjnao5]{margin-bottom:15px}.containerImg[data-astro-cid-dohjnao5] img[data-astro-cid-dohjnao5]{width:100%;height:auto;border-radius:8px}.pricing-title[data-astro-cid-dohjnao5]{color:#333;font-size:1.5rem;margin-bottom:10px}.pricing-features[data-astro-cid-dohjnao5]{list-style:none;padding:0}.pricing-features[data-astro-cid-dohjnao5] li[data-astro-cid-dohjnao5]{margin:10px 0;display:flex;align-items:center;justify-content:space-between}.pricing-features[data-astro-cid-dohjnao5] hr[data-astro-cid-dohjnao5]{flex-grow:3;margin:0 10px;border:none;border-top:1px solid var(--color-vinotinto)}.pricing-features[data-astro-cid-dohjnao5] .time[data-astro-cid-dohjnao5],.pricing-features[data-astro-cid-dohjnao5] .pricing[data-astro-cid-dohjnao5]{flex-grow:1}.pricing-button[data-astro-cid-dohjnao5]{background-color:var(--color-vinotinto);color:#fff;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;font-size:1rem;text-decoration:none;display:inline-block;transition:background-color .3s ease;margin-top:20px}.pricing-button[data-astro-cid-dohjnao5]:hover{background-color:#3a0309}@media only screen and (max-width: 600px){.pricing-card[data-astro-cid-dohjnao5]{margin:1rem 0}}\n.setionMain[data-astro-cid-ucd2ps2b]{max-width:100%;max-height:100vh;overflow:hidden;position:relative}.setionMain[data-astro-cid-ucd2ps2b] div[data-astro-cid-ucd2ps2b]{z-index:2}.setionMain[data-astro-cid-ucd2ps2b] img[data-astro-cid-ucd2ps2b]{object-fit:cover;object-position:center;display:block}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/Users/JaimeDS3/Desktop/laskshmi/dist/_astro/about.TG82AfVJ.css"},{"type":"inline","content":"main[data-astro-cid-uw5kdbxl]{margin-top:3rem}.contentInfo[data-astro-cid-uw5kdbxl] div[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{max-width:95%}.frase[data-astro-cid-uw5kdbxl]{color:var(--color-vinotinto);font-size:23px;font-style:oblique}.linkIg[data-astro-cid-uw5kdbxl]{text-decoration:none;color:var(--color-golden-200);font-weight:600}.containerImgIg[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{border-radius:5px}@media only screen and (max-width: 600px){.containerImgIg[data-astro-cid-uw5kdbxl] img[data-astro-cid-uw5kdbxl]{width:45%;margin:.4rem}}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/Users/JaimeDS3/Desktop/laskshmi/dist/_astro/about.TG82AfVJ.css"},{"type":"inline","content":"main[data-astro-cid-kh7btl4r]{margin-top:3rem}.contentInfo[data-astro-cid-kh7btl4r] div[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{max-width:95%}.frase[data-astro-cid-kh7btl4r]{color:var(--color-vinotinto);font-size:23px;font-style:oblique}.linkIg[data-astro-cid-kh7btl4r]{text-decoration:none;color:var(--color-golden-200);font-weight:600}.containerImgIg[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{border-radius:5px}@media only screen and (max-width: 600px){.containerImgIg[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{width:45%;margin:.4rem}}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://jaimecalderon16.github.io","base":"/Users/JaimeDS3/Desktop/laskshmi/dist","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/JaimeDS3/Desktop/laskshmi/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/contact.astro":"chunks/pages/contact_FehvAs12.mjs","/src/pages/services.astro":"chunks/pages/services_KDlwU19j.mjs","\u0000@astrojs-manifest":"manifest_yDEeZpKK.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.cQB23-9q.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
