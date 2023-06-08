import{_ as a,c as t,o as e,V as n}from"./chunks/framework.2730b14e.js";const _=JSON.parse('{"title":"Starting a Local Chain","description":"","frontmatter":{"title":"Starting a Local Chain","deploy":["staging","mainnet"],"order":-99998,"oultine":[0,4]},"headers":[],"relativePath":"guides/Basics/start-local-chain.md","lastUpdated":1686261083000}'),s={name:"guides/Basics/start-local-chain.md"},o=n('<h1 id="start-a-local-chain" tabindex="-1">Start a Local Chain <a class="header-anchor" href="#start-a-local-chain" aria-label="Permalink to &quot;Start a Local Chain&quot;">​</a></h1><p>Now that you have the <a href="./introduction.html">Docker image up and running</a>, we can move on to spinning up a local chain which you can use for development.</p><p>Inside your Docker image instance, you can start a local chain by running the following command that runs our test suite, Ultratest.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ultratest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span></span></code></pre></div><p>Ultratest automatically sets up a wallet, keys, and all smart contracts. These are necessary to grant you access to the functionality necessary to develop on our stack.</p><p>A quick note on the flags above.</p><p><code>-D</code> stops the <code>ultratest</code> framework from closing after tests have ran.</p><p><code>-s</code> enables all system contracts</p><p><code>-n</code> tells the program to not run any tests.</p><h2 id="verifying-chain-api-is-started" tabindex="-1">Verifying Chain API is Started <a class="header-anchor" href="#verifying-chain-api-is-started" aria-label="Permalink to &quot;Verifying Chain API is Started&quot;">​</a></h2><p>Check <a href="http://localhost:8888/v1/chain/get_info" target="_blank" rel="noreferrer"><a href="http://localhost:8888/v1/chain/get_info" target="_blank" rel="noreferrer">http://localhost:8888/v1/chain/get_info</a></a> to ensure that it is running.</p><p>When accessing the API externally use the URL <code>http://localhost:8888</code>.</p>',12),r=[o];function c(l,i,h,p,d,u){return e(),t("div",null,r)}const f=a(s,[["render",c]]);export{_ as __pageData,f as default};
