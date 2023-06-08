import{_ as e,c as s,o as a,V as n}from"./chunks/framework.f1490fb9.js";const C=JSON.parse('{"title":"Understanding the Config","description":"","frontmatter":{"title":"Understanding the Config","deploy":["staging","mainnet"],"outline":[0,4],"order":-97},"headers":[],"relativePath":"learn/Block Producers/Infrastructure/understanding-the-config.md","lastUpdated":1686234101000}'),o={name:"learn/Block Producers/Infrastructure/understanding-the-config.md"},l=n(`<h1 id="understanding-the-config" tabindex="-1">Understanding the Config <a class="header-anchor" href="#understanding-the-config" aria-label="Permalink to &quot;Understanding the Config&quot;">​</a></h1><p>Ultra provides <a href="./templates-for-config.html">Templates for config.ini</a>, but a good way for you to better understand <em>nodeos</em> software is to look into its help options or scroll through the <em>config.ini</em> file and search for configurations that may fit your needs. Below you will find listed only the basic configurations needed for your operation.</p><h2 id="set-block-producer-s-name" tabindex="-1">Set Block Producer&#39;s name <a class="header-anchor" href="#set-block-producer-s-name" aria-label="Permalink to &quot;Set Block Producer&#39;s name&quot;">​</a></h2><p>Set the producer-name option to your blockchain account.</p><p>The blockchain account will be provided to Block Producers by Ultra</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">producer</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> BP_EOS_ACCOUNT</span></span></code></pre></div><h2 id="set-block-producer-s-signature-provider" tabindex="-1">Set Block Producer&#39;s signature provider <a class="header-anchor" href="#set-block-producer-s-signature-provider" aria-label="Permalink to &quot;Set Block Producer&#39;s signature provider&quot;">​</a></h2><p>You will need to set the signature keys for your Block Producer. By now you should have created a key pair specifically for this using cleos. For further details, please refer to the <a href="./../Maintenance/account-administration.html">Account Administration</a> section.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">signature</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">provider </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> PUBLIC_SIGNING_KEY</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">PRIVATE_SIGNING_KEY</span></span></code></pre></div><h2 id="set-block-producer-s-server-address" tabindex="-1">Set Block Producer&#39;s server address <a class="header-anchor" href="#set-block-producer-s-server-address" aria-label="Permalink to &quot;Set Block Producer&#39;s server address&quot;">​</a></h2><p>Here you should set your node IP address.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p2p</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">address </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">YOUR_NODE_IP_ADDRESS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">PORT</span></span></code></pre></div><h2 id="define-peers-list" tabindex="-1">Define peers list <a class="header-anchor" href="#define-peers-list" aria-label="Permalink to &quot;Define peers list&quot;">​</a></h2><p>Here you should define all peers that your nodeos instance is in communication with. Ideally, you want to keep your Producer node IP secret. Most Block Producers have several API/seed nodes that hide their producer node as described before. The producer-only peers with the API/seed node.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">p2p</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">peer</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">address </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PEER_NODE_IP_ADDRESS</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">PORT</span></span></code></pre></div><h2 id="new-wasm-runtime" tabindex="-1">New WASM Runtime <a class="header-anchor" href="#new-wasm-runtime" aria-label="Permalink to &quot;New WASM Runtime&quot;">​</a></h2><p>After EOS v1.9 there were major performance increases for EOSIO in general. We’ll be utilizing those performance increases in our chain and we can directly enable some of those performance increases with the following two parameters. <a href="https://eos.io/news/eos-virtual-machine-a-high-performance-blockchain-webassembly-interpreter/" target="_blank" rel="noreferrer">Read more about EOS-VM performance increases.</a></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wasm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">runtime</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">eos</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">jit</span></span>
<span class="line"><span style="color:#A6ACCD;">eos</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">oc</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">enable</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">true</span></span></code></pre></div><h2 id="load-the-required-plugins" tabindex="-1">Load the required plugins <a class="header-anchor" href="#load-the-required-plugins" aria-label="Permalink to &quot;Load the required plugins&quot;">​</a></h2><p>Here the configuration changes according to the node type. For your Producer nodes, you need to enable at least the Producer and the Producer API plugins. For the Full and API nodes, enable Chain API and State History plugins as well in addition to the aforementioned. See the listing below as a reference for the Full and API nodes:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:producer_plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:producer_api_plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:chain_api_plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:http_plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:history_plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">:history_api_plugin</span></span></code></pre></div>`,21),t=[l];function r(p,c,i,d,u,y){return a(),s("div",null,t)}const D=e(o,[["render",r]]);export{C as __pageData,D as default};
