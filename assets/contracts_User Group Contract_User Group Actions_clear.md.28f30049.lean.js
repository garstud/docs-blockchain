import{_ as s,v as a,b as o,R as e}from"./chunks/framework.99ac92c4.js";const u=JSON.parse('{"title":"clear","description":"","frontmatter":{"title":"clear","order":5,"deploy":["experimental","staging","mainnet"]},"headers":[],"relativePath":"contracts/User Group Contract/User Group Actions/clear.md","filePath":"contracts/User Group Contract/User Group Actions/clear.md","lastUpdated":null}'),n={name:"contracts/User Group Contract/User Group Actions/clear.md"},l=e(`<h2 id="clear-a" tabindex="-1"><code>clear.a</code> <a class="header-anchor" href="#clear-a" aria-label="Permalink to &quot;\`clear.a\`&quot;">​</a></h2><p>The <code>clear.a</code> action is the first version of the <code>clear</code> action in the Ultra blockchain. This action allows the creator of a group to remove all or a specified number of users from a group. The number of users removed is controlled by the <code>nr_removals</code> parameter.</p><h3 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h3><ul><li>The creator of the group can remove all or a specified number of users from the group.</li><li>The <code>nr_users</code> field in the <code>groups.a</code> table will be decremented by the number of users removed.</li><li>The action will fail if there are no users in the group.</li></ul><h3 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h3><table><thead><tr><th>Name</th><th>C++ Type</th><th>JavaScript Type</th><th>Remarks</th></tr></thead><tbody><tr><td><code>creator</code></td><td><code>name</code></td><td><code>String</code></td><td>The account that originally created the group.</td></tr><tr><td><code>group_id</code></td><td><code>uint64_t</code></td><td><code>Number/String</code></td><td>The ID used to identify the group to clear the users from.</td></tr><tr><td><code>nr_removals</code></td><td><code>optional&lt;uint64_t&gt;</code></td><td><code>Number/null</code></td><td>If not specified, all users will be removed. Otherwise, the number of users specified will be removed.</td></tr><tr><td><code>memo</code></td><td><code>string</code></td><td><code>String</code></td><td>A memo string.</td></tr></tbody></table><p><strong>Note</strong>:</p><ul><li>The <code>creator</code> should be the original creator of the group specified by <code>group_id</code>.</li></ul><h3 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h3><p>To clear users from a group, use the following <code>cleos</code> command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.group</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clear.a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;creator&quot;: &quot;alice&quot;, &quot;group_id&quot;: 0, &quot;nr_removals&quot; : 1, &quot;memo&quot;: &quot;remove one user&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice@active</span></span></code></pre></div><h3 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h3><p>You can also use the following eosjs code snippet to clear users from a group:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio.group</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clear.a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">creator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">group_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">nr_removals</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">remove one user</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,14),t=[l];function p(r,c,D,i,y,d){return a(),o("div",null,t)}const C=s(n,[["render",p]]);export{u as __pageData,C as default};
