import{_ as a,c as o,I as n,V as l,o as p,J as t}from"./chunks/framework.02b53d5b.js";const _=JSON.parse('{"title":"/get_block","description":"","frontmatter":{"title":"/get_block","deploy":["staging","mainnet"]},"headers":[],"relativePath":"api/REST/get-block.md","lastUpdated":null}'),e={name:"api/REST/get-block.md"},c=l(`<h1 id="post-get-block" tabindex="-1">POST - /get_block <a class="header-anchor" href="#post-get-block" aria-label="Permalink to &quot;POST - /get_block&quot;">​</a></h1><p>Returns information about a block.</p><p><strong>Highlights</strong></p><ul><li>confirmed - Determines if a block is finalized.</li><li>timestamp - When the block was made.</li><li>producer - Who produced the block</li></ul><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block_num_or_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61672404</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X POST -d &#39;{ &quot;block_num_or_id&quot;: 61672404 }&#39;  https://api.ultra.eossweden.org/v1/chain/get_block</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">timestamp</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-06-10T20:44:45.500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">producer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosriobrazil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">confirmed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">previous</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">03ad0bd3...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transaction_mroot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">71a4f5...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">action_mroot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">afbd14c...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">schedule_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new_producers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">producer_signature</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SIG_K1_K5...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">transactions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">03ad0bd4a31c382ad257cf72247dfbdc3317bd977f1762353a6f5171620819b5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61672404</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ref_block_prefix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">1926191058</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,11);function r(F,D,y,i,u,d){const s=t("DemoApi");return p(),o("div",null,[c,n(s,{type:"POST",query:"/v1/chain/get_block",body:[{key:"block_num_or_id",value:"8675309"}]})])}const h=a(e,[["render",r]]);export{_ as __pageData,h as default};
