import{_ as s,c as a,o,V as t}from"./chunks/framework.dfdac305.js";const d=JSON.parse('{"title":"System Contract Upgrade","description":"","frontmatter":{"title":"System Contract Upgrade","deploy":["staging","mainnet"],"outline":[0,4],"order":-94},"headers":[],"relativePath":"learn/Block Producers/Maintenance/system-contract-upgrade.md","lastUpdated":null}'),e={name:"learn/Block Producers/Maintenance/system-contract-upgrade.md"},n=t(`<h1 id="system-contract-upgrade" tabindex="-1">System Contract Upgrade <a class="header-anchor" href="#system-contract-upgrade" aria-label="Permalink to &quot;System Contract Upgrade&quot;">​</a></h1><p>The system contract upgrade needs to go through a packed transaction action; that will get the transaction ready. Once the transaction is ready we send it up to eosio.msig contract and get it ready for all of the active BPs to vote upon.</p><p>First, we need to pack the transaction and get it ready. This will output the transaction to a file. However, this step implies that the system contract is already compiled, and you’ve copied this data to a new folder and opened it up with a terminal.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set contract eosio </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;"> eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">system</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wasm eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">system</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">abi </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prods </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x </span><span style="color:#F78C6C;">60000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">|&amp;</span><span style="color:#A6ACCD;"> tee upgrade</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span></code></pre></div><p>Here’s an example of <strong>before</strong>:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">expiration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-08-15T22:07:41</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Here’s an example of <strong>after</strong>:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">expiration</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2019-08-17T22:07:41</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>After completing this step; you’ll want to get a list of the current producers and set up a file of ‘potential’ permissions that will be necessary to get this contract upgraded with Ultra’s permission. The way that we can do this is to run a simple command and then paste the following line of code; copy the below code first and modify it where necessary.</p><p><strong>Template</strong>:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">producer1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span></code></pre></div><p><strong>Example:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">producacnt11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">producacnt12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span></code></pre></div><p>Once your template is ready to type the following and paste your modified permissions JSON.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> perms</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json</span></span></code></pre></div><p>After it is pasted inside; press ctrl+c and that’ll cancel the editing and save the file. You can always re-open to ensure the permissions made it inside.</p><p>Now we’re ready to push up the proposal for the upgrade.</p><h2 id="deploying-the-multi-signature-transaction" tabindex="-1">Deploying the Multi-Signature Transaction <a class="header-anchor" href="#deploying-the-multi-signature-transaction" aria-label="Permalink to &quot;Deploying the Multi-Signature Transaction&quot;">​</a></h2><p>Instead of using ‘propose’ from eosio.msig we’re going to use a different version. Inside the folder with your ‘.wasm’, ‘.abi’, and two ‘.json’ files we’ll use the following to deploy it.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos multisig propose_trx upgradesys perms</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json upgrade</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">json ultra </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>Great! We can review this on-chain after it has been deployed.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos multisig review ultra upgradesys</span></span></code></pre></div><h2 id="gather-signatures" tabindex="-1">Gather Signatures <a class="header-anchor" href="#gather-signatures" aria-label="Permalink to &quot;Gather Signatures&quot;">​</a></h2><p>One of the final steps is to gather signatures for this upgrade. We can do this by having our block producers approve of the upgrade. Here’s an example template for the cleos command they can run.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos multisig approve ultra upgradesys </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;actor&quot;:&quot;producacnt11&quot;,&quot;permission&quot;:&quot;active&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p producacnt11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos multisig approve ultra upgradesys </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;actor&quot;:&quot;producacnt12&quot;,&quot;permission&quot;:&quot;active&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p producacnt12</span></span></code></pre></div><p>Very easy to get an upgrade going.</p><h2 id="final-step" tabindex="-1">Final Step <a class="header-anchor" href="#final-step" aria-label="Permalink to &quot;Final Step&quot;">​</a></h2><p>After enough signatures are gathered and Ultra has also signed on to this proposal; we can execute the code.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos multisig exec ultra upgrade </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>The transaction is complete. Celebrate by checking the system tables or running some of the new system contract actions that may or may not have been included.</p>`,30),p=[n];function l(r,c,i,y,D,F){return o(),a("div",null,p)}const C=s(e,[["render",l]]);export{d as __pageData,C as default};
