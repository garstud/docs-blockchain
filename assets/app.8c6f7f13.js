import{d as c,u as p,D as g,E as u,b as h,o as v,I as l,n as y,J as A,A as C,Q as i,a5 as P,q as w,k as x,a6 as L,a7 as b,a8 as R,a9 as k,aa as E,ab as V,ac as D,ad as O,ae as S,af as T,ag as B,ah as F,ai as M,M as j}from"./chunks/framework.5bc8cf21.js";import{V as I,t as m}from"./chunks/theme.7898a65e.js";const N=c({__name:"CustomLayout",setup(e){const{Layout:t}=m,{page:a}=p(),n={mainnet:"/",staging:"/staging/",experimental:"/experimental/"};function s(r){return r==="mainnet"?window.location.origin+"/"+a.value.relativePath.replace(".md",".html"):window.location.origin+n[r]+a.value.relativePath.replace(".md",".html")}function d(){return[{text:"Mainnet",link:s("mainnet"),target:"_parent",rel:"noopener"},{text:"Staging",link:s("staging"),target:"_parent",rel:"noopener"},{text:"Experimental",link:s("experimental"),target:"_parent",rel:"noopener"}]}return(r,H)=>{const _=A("ClientOnly");return v(),g(h(t),null,{"nav-bar-content-after":u(()=>[l(_,null,{default:u(()=>[l(I,{class:y({VPNavBarMenuGroup:!1,active:!1}),button:"Version",items:d()},null,8,["items"])]),_:1})]),_:1})}}});const $={...m,Layout:N,enhanceApp({app:e,router:t,siteData:a}){},setup(){p(),C()}};function f(e){if(e.extends){const t=f(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=f($),G=c({name:"VitePressApp",setup(){const{site:e}=p();return w(()=>{x(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),L(),b(),R(),o.setup&&o.setup(),()=>k(o.Layout)}});async function U(){const e=z(),t=q();t.provide(E,e);const a=V(e.route);return t.provide(D,a),t.component("Content",O),t.component("ClientOnly",S),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:T}),{app:t,router:e,data:a}}function q(){return B(G)}function z(){let e=i,t;return F(a=>{let n=M(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),i&&(e=!1),j(()=>import(n),[])},o.NotFound)}i&&U().then(({app:e,router:t,data:a})=>{t.go().then(()=>{P(t.route,a.site),e.mount("#app")})});export{U as createApp};
