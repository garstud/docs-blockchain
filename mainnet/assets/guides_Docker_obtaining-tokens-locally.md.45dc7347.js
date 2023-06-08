import{_ as e,c as o,o as t,V as a}from"./chunks/framework.b4c71460.js";const m=JSON.parse('{"title":"Obtaining Tokens Locally","description":"","frontmatter":{"title":"Obtaining Tokens Locally","deploy":["staging","mainnet"],"order":-9989,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/obtaining-tokens-locally.md","lastUpdated":null}'),n={name:"guides/Docker/obtaining-tokens-locally.md"},s=a('<h1 id="obtaining-tokens-locally" tabindex="-1">Obtaining Tokens Locally <a class="header-anchor" href="#obtaining-tokens-locally" aria-label="Permalink to &quot;Obtaining Tokens Locally&quot;">​</a></h1><p>Tokens can be obtained in one of two ways in the <strong>local environment</strong>.</p><p>The first way involves obtaining tokens in a unit test, check the <a href="./ultratest.html#adduos">ultratest</a> documentation for more information.</p><p>The second way involves an <code>ultratest</code> no test instance and <code>cleos</code>.</p><h2 id="before-the-transfer-action" tabindex="-1">Before the Transfer Action <a class="header-anchor" href="#before-the-transfer-action" aria-label="Permalink to &quot;Before the Transfer Action&quot;">​</a></h2><p>You should be inside of the docker image.</p><p>You should have <a href="./ultratest.html#starting-a-system-node">ultratest running in a no-tests instance</a>.</p><p>Make sure you have <a href="./cleos.html#creating-an-account">created an account locally</a> before running the following command.</p><h2 id="the-transfer-action" tabindex="-1">The Transfer Action <a class="header-anchor" href="#the-transfer-action" aria-label="Permalink to &quot;The Transfer Action&quot;">​</a></h2><p>The chain should be ran locally through ultratest.</p><p>You have all of the account keys for your own chain inside of <code>cleos</code>.</p><p>You can now perform a simple transfer action through the <code>eosio.token</code> contract.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio.token transfer &#39;[&quot;ultra.eosio&quot;, &quot;someaccount&quot;, &quot;5.00000000 UOS&quot;, &quot;&quot;]&#39; -p ultra.eosio</span></span></code></pre></div><p>_The above command transfers 5 UOS from <code>ultra.eosio</code> to <code>someaccount</code>.</p>',14),r=[s];function c(i,l,h,d,u,p){return t(),o("div",null,r)}const g=e(n,[["render",c]]);export{m as __pageData,g as default};
