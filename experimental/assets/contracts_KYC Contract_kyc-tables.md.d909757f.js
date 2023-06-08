import{_ as s,c as e,o,V as t}from"./chunks/framework.f1490fb9.js";const D=JSON.parse('{"title":"KYC Tables","description":"","frontmatter":{"title":"KYC Tables","order":1,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/KYC Contract/kyc-tables.md","lastUpdated":1686234101000}'),a={name:"contracts/KYC Contract/kyc-tables.md"},l=t('<h1 id="kyc-tables" tabindex="-1">KYC Tables <a class="header-anchor" href="#kyc-tables" aria-label="Permalink to &quot;KYC Tables&quot;">​</a></h1><h2 id="kyc" tabindex="-1">kyc <a class="header-anchor" href="#kyc" aria-label="Permalink to &quot;kyc&quot;">​</a></h2><ul><li>Code: <code>eosio.kyc</code></li><li>Table: <code>kyc</code></li><li>Scope: <code>user</code></li><li>Key: <code>provider</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>provider</code></td><td>eosio::name</td><td>KYC Provider who user registered</td></tr><tr><td><code>cert_id</code></td><td>eosio::checksum256</td><td>User KYC data</td></tr><tr><td><code>req_signature</code></td><td>eosio::signature</td><td>User signature</td></tr><tr><td><code>pro_signature</code></td><td>eosio::signature</td><td>Provider signature</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.kyc</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">USE</span><span style="color:#A6ACCD;">R</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kyc</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">NODEOS_API_I</span><span style="color:#A6ACCD;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/v1/chain/get_table_rows</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;scope&quot;:&quot;&lt;USER&gt;&quot;, &quot;code&quot;:&quot;eosio.kyc&quot;, &quot;table&quot;:&quot;kyc&quot;, &quot;json&quot;: true}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="kyc-state" tabindex="-1">kyc.state <a class="header-anchor" href="#kyc-state" aria-label="Permalink to &quot;kyc.state&quot;">​</a></h2><ul><li>Code: <code>eosio.kyc</code></li><li>Table: <code>kyc.state</code></li><li>Scope: <code>eosio.kyc</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>is_enabled</code></td><td>bool</td><td>KYC state</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.kyc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.kyc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kyc.state</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">NODEOS_API_I</span><span style="color:#A6ACCD;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/v1/chain/get_table_rows</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;scope&quot;:&quot;eosio.kyc&quot;, &quot;code&quot;:&quot;eosio.kyc&quot;, &quot;table&quot;:&quot;kyc.state&quot;, &quot;json&quot;: true}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div>',15),n=[l];function c(p,r,d,i,y,C){return o(),e("div",null,n)}const h=s(a,[["render",c]]);export{D as __pageData,h as default};
