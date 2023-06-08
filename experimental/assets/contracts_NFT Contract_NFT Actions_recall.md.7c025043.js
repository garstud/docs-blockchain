import{_ as s,c as a,o as n,V as e}from"./chunks/framework.f1490fb9.js";const F=JSON.parse('{"title":"recall","description":"","frontmatter":{"title":"recall","order":19,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/recall.md","lastUpdated":1686234101000}'),o={name:"contracts/NFT Contract/NFT Actions/recall.md"},t=e(`<h1 id="recall" tabindex="-1">recall <a class="header-anchor" href="#recall" aria-label="Permalink to &quot;recall&quot;">​</a></h1><p>The token factory manager can use it to recall a token.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Upon the usage of the <strong>recall action</strong> the action will verify that the parameters supplied in the action have values. This includes <strong>owner, token_ids.</strong> The memo specifically has a 256 byte limitation. The required authorization is the <strong>token factory manager</strong> of the <strong>token_ids</strong> specified. This can be done entirely without the token owner’s permission.</p><p>After doing the initial value checks the NFT contract version is determined and routes the recall function depending on what version the NFT token is.</p><p>Each token that is specified inside of <strong>token_ids</strong> will verify the following:</p><ul><li><p>The <strong>owner</strong> actually owns the <strong>token_id</strong>.</p></li><li><p>The <strong>token_id</strong> has an entry in the table and a corresponding <strong>token_factory.</strong></p></li><li><p>The authorization of the <strong>token_factory manager</strong> was given.</p></li><li><p>It will check if a recall window is specified.</p><ul><li>It will fail the transaction if no recall window exists for the token.</li><li>At least a start or end time for recall windows must be specified for this action to work.</li></ul></li><li><p>It will check if the <strong>token</strong> is past the recall window.</p><ul><li>Adds recall window time to the mint time of the token.</li><li>Adds recall window end time to the mint time of the token.</li><li>If the first bullet exceeds the end time then it cannot be recalled and the transaction will fail.</li></ul></li></ul><p>After checking the above, it will remove any entries in the resale table if available. Then the manager will have the <strong>token</strong> assigned to them.</p><p>The <strong>owner</strong> will have the token removed from their table.</p><p><em>*This business decision was decided upon to prevent credit card fraud and revoke tokens during a grace period for token sales. After the grace period is exceeded the token cannot be recalled.</em></p><h2 id="on-the-fly-migration" tabindex="-1">On-the-fly migration <a class="header-anchor" href="#on-the-fly-migration" aria-label="Permalink to &quot;On-the-fly migration&quot;">​</a></h2><p>After v1 is activated by activers action, if token exists in v0 token table, token.a, it is moved to v1 token table, token.b. Also, if the token factory from which the token was minted exists in v0 factory table, factory.a, it is moved to factory.b.</p><p>When done, v0 entry will be deleted so next time when interact with these data, no migration is needed.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The NFT Owner account</td></tr><tr><td>token_ids</td><td>std::vector<code>&lt;uint64_t&gt;</code></td><td>The NFTs to recall.</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">recall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{ &quot;owner&quot;: &quot;owner.user.acc&quot;, &quot;token_ids&quot;: [1], &quot;memo&quot;: &quot;credit card fraud&quot;}]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manager.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">recall</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">manager.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">recall</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">owner.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">token_ids</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">credit card fraud</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,20),l=[t];function p(r,c,i,D,y,d){return n(),a("div",null,l)}const C=s(o,[["render",p]]);export{F as __pageData,C as default};
