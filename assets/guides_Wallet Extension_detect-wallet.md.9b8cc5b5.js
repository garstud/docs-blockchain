import{_ as e,c as a,o as t,V as s}from"./chunks/framework.965d1348.js";const _=JSON.parse('{"title":"Detecting the Ultra Wallet","description":"","frontmatter":{"title":"Detecting the Ultra Wallet","deploy":["staging","mainnet"],"order":4,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/detect-wallet.md","lastUpdated":null}'),l={name:"guides/Wallet Extension/detect-wallet.md"},n=s(`<h1 id="detecting-the-ultra-wallet" tabindex="-1">Detecting the Ultra Wallet <a class="header-anchor" href="#detecting-the-ultra-wallet" aria-label="Permalink to &quot;Detecting the Ultra Wallet&quot;">​</a></h1><p>To detect if a user has already installed the Ultra Wallet browser extension, the web application should run over HTTPS and check for the existence of an <code>ultra</code> object in the <code>window</code> variable.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ultra </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Ultra Wallet is installed!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),o=[n];function p(c,r,i,d,D,y){return t(),a("div",null,o)}const h=e(l,[["render",p]]);export{_ as __pageData,h as default};
