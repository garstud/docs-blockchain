import{_ as a,c as n,I as o,V as l,o as p,J as t}from"./chunks/framework.a347656d.js";const q=JSON.parse('{"title":"/get_info","description":"","frontmatter":{"title":"/get_info","deploy":["staging","mainnet"],"order":-99},"headers":[],"relativePath":"api/REST/get-info.md","lastUpdated":null}'),e={name:"api/REST/get-info.md"},c=l(`<h1 id="get-get-info" tabindex="-1">GET - /get_info <a class="header-anchor" href="#get-get-info" aria-label="Permalink to &quot;GET - /get_info&quot;">​</a></h1><p>A good way to get information about the chain including a unique identifier for the chain, current head block number, etc.</p><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X GET https://api.ultra.eossweden.org/v1/chain/get_info</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><details class="details custom-block"><summary>Response</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">server_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dcec8f25</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chain_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a9c481d....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61691776</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">last_irreversible_block_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61691680</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">last_irreversible_block_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">03ad57....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">03ad5....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2022-06-10T23:26:11.500</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">head_block_producer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosnationftw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">virtual_block_cpu_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">400000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">virtual_block_net_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">1048576</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block_cpu_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">399999</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block_net_limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">1048568</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">server_version_string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v2.0.9-1.13.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fork_db_head_block_num</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">61691776</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fork_db_head_block_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">03ad57....</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">server_full_version_string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">v2.0.9-1.13.1-dc....</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,7);function r(F,D,y,i,u,_){const s=t("DemoApi");return p(),n("div",null,[c,o(s,{type:"GET",query:"/v1/chain/get_info",body:[]})])}const C=a(e,[["render",r]]);export{q as __pageData,C as default};
