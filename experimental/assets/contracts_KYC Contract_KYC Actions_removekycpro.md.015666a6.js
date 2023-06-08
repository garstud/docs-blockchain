import{_ as s,c as a,o as n,V as o}from"./chunks/framework.f1490fb9.js";const d=JSON.parse('{"title":"removekycpro","description":"","frontmatter":{"title":"removekycpro","deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/KYC Contract/KYC Actions/removekycpro.md","lastUpdated":1686234101000}'),l={name:"contracts/KYC Contract/KYC Actions/removekycpro.md"},p=o(`<h1 id="removekycpro" tabindex="-1">removekycpro <a class="header-anchor" href="#removekycpro" aria-label="Permalink to &quot;removekycpro&quot;">​</a></h1><p>Remove certain KYC provider info of user</p><ul><li>Parameters</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>owner</code></td><td>eosio::name</td><td>KYC User</td></tr><tr><td><code>providers</code></td><td>vector<a href="eosio::name" target="_blank" rel="noreferrer">eosio::name</a></td><td>List of KYC Provider who user want to remove</td></tr></tbody></table><p>Required Permissions: <code>ultra.kyc</code></p><ul><li><code>cleos</code> Example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.kyc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">removekcypro</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;&lt;OWNER&gt;&quot;, [&quot;&lt;PROVIDER_1&gt;&quot;, &quot;&lt;PROVIDER_2&gt;&quot;]]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ultra.kyc</span></span></code></pre></div><ul><li><code>eos-js</code> Example</li></ul><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            actions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    account</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.kyc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">removekycpro</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    authorization</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                            actor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ultra.kyc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                            permission</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        owner</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;OWNER&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        providers</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;PROVIDER_1&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;PROVIDER_2&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,9),e=[p];function t(c,r,y,F,D,i){return n(),a("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
