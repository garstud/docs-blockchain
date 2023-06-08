import{_ as e,c as a,o as s,V as o}from"./chunks/framework.02b53d5b.js";const k=JSON.parse('{"title":"Keosd Usage","description":"","frontmatter":{"title":"Keosd Usage","deploy":["staging","mainnet"],"order":-9995,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/keosd.md","lastUpdated":null}'),t={name:"guides/Docker/keosd.md"},l=o('<h1 id="keosd-usage" tabindex="-1">Keosd Usage <a class="header-anchor" href="#keosd-usage" aria-label="Permalink to &quot;Keosd Usage&quot;">​</a></h1><p>Keosd is a program that runs in the background to help store priate keys, and sign transactions. It&#39;s a secure and encrypted key storage program.</p><h2 id="who-is-it-for" tabindex="-1">Who is it for? <a class="header-anchor" href="#who-is-it-for" aria-label="Permalink to &quot;Who is it for?&quot;">​</a></h2><ul><li>Developers</li><li>Advanced Users</li></ul><h2 id="obtaining-keosd" tabindex="-1">Obtaining Keosd <a class="header-anchor" href="#obtaining-keosd" aria-label="Permalink to &quot;Obtaining Keosd&quot;">​</a></h2><p>We have created a Docker image that has pre-created scripts, tools, and pre-packaged binaries. Keosd is already included inside of the Docker image.</p><p>Individual binaries are not currently available for download.</p><p><a href="./docker-image-usage.html">Docker Image Usage</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Inside the Docker Container the following can be executed for general usage.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">keosd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--help</span></span></code></pre></div><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><p>Keosd can be ran by itself without even specifying <code>help</code>. It by default creates all wallet files in the <code>~/eosio-wallet</code> directory.</p><p>It is highly suggested to use <code>cleos</code> in tandem with <code>keosd</code>, or let <code>cleos</code> run <code>keosd</code> by itself. Using any <code>cleos wallet</code> functions will automatically perform all <code>keosd</code> actions.</p><h3 id="wallet-infinite-unlock" tabindex="-1">Wallet Infinite Unlock <a class="header-anchor" href="#wallet-infinite-unlock" aria-label="Permalink to &quot;Wallet Infinite Unlock&quot;">​</a></h3><p>If you find a need for a wallet that almost never locks itself you will need to stop the keosd service first.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pkill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keosd</span></span></code></pre></div><p>keosd can be ran by itself with a specific timeout for the unlock, and the command below will also run it in the background.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">keosd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--http-server-address=localhost:8899</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--http-max-response-time-ms=30000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unlock-timeout=999999</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span></code></pre></div>',19),n=[l];function i(r,c,d,p,h,u){return s(),a("div",null,n)}const f=e(t,[["render",i]]);export{k as __pageData,f as default};
