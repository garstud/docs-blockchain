import{d as g,u as v,D as V,E as b,b as m,o as u,I as k,n as L,J as E,h as x,q as w,c as _,C as a,t as h,F as f,R,G as C,a5 as S,a6 as j,S as O,U as T,_ as B,A as I,Q as y,a7 as N,k as F,a8 as q,a9 as M,aa as U,ab as $,ac as G,ad as J,ae as Q,af as z,ag as H,ah as K,ai as W,aj as X,ak as Y,M as Z}from"./chunks/framework.a347656d.js";import{V as ee,t as A}from"./chunks/theme.1b87ae61.js";const te=g({__name:"CustomLayout",setup(t){const{Layout:e}=A,{page:n}=v(),s={mainnet:"/",staging:"/staging/",experimental:"/experimental/"};function d(o){return o==="mainnet"?window.location.origin+"/"+n.value.relativePath.replace(".md",".html"):window.location.origin+s[o]+n.value.relativePath.replace(".md",".html")}function i(o){!o||!o.target||!o.target.classList.contains("VPLink")||window.location.reload()}function l(){return[{text:"Mainnet",link:d("mainnet"),target:"_parent",rel:"noreferrer"},{text:"Staging",link:d("staging"),target:"_parent",rel:"noreferrer"},{text:"Experimental",link:d("experimental"),target:"_parent",rel:"noreferrer"}]}return(o,c)=>{const D=E("ClientOnly");return u(),V(m(e),null,{"nav-bar-content-after":b(()=>[k(D,null,{default:b(()=>[k(ee,{class:L({VPNavBarMenuGroup:!1,active:!1}),button:"Version",items:l(),onClick:i},null,8,["items"])]),_:1})]),_:1})}}});const r=t=>(O("data-v-20b86762"),t=t(),T(),t),ne=r(()=>a("api-title",null,"Query",-1)),ae={class:"api-container"},oe={class:"api-split"},se=r(()=>a("span",{class:"no-select"},"Endpoint",-1)),ie={id:"api",class:"input-mock"},re=r(()=>a("br",null,null,-1)),le=r(()=>a("api-title",null,"Parameters",-1)),ce={class:"api-container"},ue={class:"api-split"},pe={class:"no-select"},de=["onUpdate:modelValue"],_e=r(()=>a("br",null,null,-1)),me=r(()=>a("br",null,null,-1)),fe=r(()=>a("br",null,null,-1)),he=r(()=>a("api-title",null,"Response",-1)),ye={class:"response"},ge=g({__name:"DemoApi",props:{query:null,body:null,type:null},setup(t){const e=t;let n=x({json:!0}),s=x();async function d(){const i={method:e.type,headers:{"Content-Type":"application/json"},body:JSON.stringify(n.value)};e.type==="GET"&&delete i.body;const l=await fetch(`https://api.mainnet.ultra.io${e.query}`,i).catch(c=>(console.log(c),c));if(!l||!l.ok)return;const o=await l.json();s.value=`
`+JSON.stringify(o,null,2)}return w(()=>{if(e.body)for(let i of e.body)n.value[i.key]=i.value}),(i,l)=>(u(),_(f,null,[ne,a("div",ae,[a("div",oe,[se,a("div",ie,h(e.query),1)])]),re,e.body&&e.body.length>=1?(u(),_(f,{key:0},[le,a("div",ce,[(u(!0),_(f,null,R(e.body,o=>(u(),_("div",ue,[a("span",pe,h(o.key),1),S(a("input",{class:"input-mock",id:"api","onUpdate:modelValue":c=>m(n)[o.key]=c},null,8,de),[[j,m(n)[o.key]]])]))),256))]),_e],64)):C("",!0),a("button",{title:"execute",onClick:d},"Execute"),me,fe,m(s)?(u(),_(f,{key:1},[he,a("pre",ye,"            "+h(m(s))+`
        `,1)],64)):C("",!0)],64))}});const ve=B(ge,[["__scopeId","data-v-20b86762"]]),be={...A,Layout:te,enhanceApp({app:t,router:e,siteData:n}){t.component("DemoApi",ve)},setup(){v(),I()}};function P(t){if(t.extends){const e=P(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const p=P(be),ke=g({name:"VitePressApp",setup(){const{site:t}=v();return w(()=>{F(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),q(),M(),U(),p.setup&&p.setup(),()=>$(p.Layout)}});async function xe(){const t=we(),e=Ce();e.provide(G,t);const n=J(t.route);return e.provide(Q,n),e.component("Content",z),e.component("ClientOnly",H),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:e,router:t,siteData:K}),{app:e,router:t,data:n}}function Ce(){return W(ke)}function we(){let t=y,e;return X(n=>{let s=Y(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),y&&(t=!1),Z(()=>import(s),[])},p.NotFound)}y&&xe().then(({app:t,router:e,data:n})=>{e.go().then(()=>{N(e.route,n.site),t.mount("#app")})});export{xe as createApp};
