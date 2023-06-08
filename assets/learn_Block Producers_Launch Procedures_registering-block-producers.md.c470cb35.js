import{_ as e,c as s,o as a,V as t}from"./chunks/framework.a347656d.js";const D=JSON.parse('{"title":"Registering Block Producers","description":"","frontmatter":{"title":"Registering Block Producers","deploy":["staging","mainnet"],"outline":[0,4],"order":-96},"headers":[],"relativePath":"learn/Block Producers/Launch Procedures/registering-block-producers.md","lastUpdated":null}'),o={name:"learn/Block Producers/Launch Procedures/registering-block-producers.md"},l=t('<h1 id="registering-block-producers" tabindex="-1">Registering Block Producers <a class="header-anchor" href="#registering-block-producers" aria-label="Permalink to &quot;Registering Block Producers&quot;">​</a></h1><h2 id="obtaining-a-private-and-public-key-pair" tabindex="-1">Obtaining a Private and Public Key Pair <a class="header-anchor" href="#obtaining-a-private-and-public-key-pair" aria-label="Permalink to &quot;Obtaining a Private and Public Key Pair&quot;">​</a></h2><p>Each Block Producer must provide Ultra with a public key that they will generate locally.</p><p>It is highly recommended that when you generate these keys that the private key is stored in a safe location. Please formulate a plan to keep this private key a secret. We refer you to <a href="./../Maintenance/account-administration.html">Account administration</a> for more details.</p><h3 id="to-output-the-key-pair-to-the-console" tabindex="-1">To output the key pair to the console. <a class="header-anchor" href="#to-output-the-key-pair-to-the-console" aria-label="Permalink to &quot;To output the key pair to the console.&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos create key </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">console</span></span></code></pre></div><h3 id="to-save-the-key-pair-to-file" tabindex="-1">To save the key pair to file <a class="header-anchor" href="#to-save-the-key-pair-to-file" aria-label="Permalink to &quot;To save the key pair to file&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos create key </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">file FILE_TO_SAVEKEY</span></span></code></pre></div><p>Ultra will then create the Block Producers&#39; accounts with the Block Producer’s public key.</p><p>Once this is done; Ultra can use the following command to create an account for them.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos system newaccount ultra </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">account_name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">public_key</span><span style="color:#A6ACCD;">&gt; </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">transfer </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">net </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cpu </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">gift</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ram</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">kbytes </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">determine_kbytes_to_buy</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">id </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ultra_id</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Block Producers must be registered through Ultra and will need to synchronize their chains up with the genesis nodeos. Once synchronized and the Block Producer is receiving blocks successfully, they can request for Ultra to register them on the network.</p><h2 id="block-producer-checklist" tabindex="-1">Block Producer Checklist <a class="header-anchor" href="#block-producer-checklist" aria-label="Permalink to &quot;Block Producer Checklist&quot;">​</a></h2><p>Here are some things that block producers will be providing to Ultra for their genesis node.</p><ul><li><p>Wireguard IP / Port</p></li><li><p>Endpoint Address</p></li><li><p>Public Key for Producer</p></li></ul><p>Once they are provided; Ultra can easily register them. This can be done through the following command.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio regproducer </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;&lt;account_name&gt;&quot;,&quot;&lt;public_key&gt;&quot;,&quot;&lt;url&gt;&quot;,&lt;location&gt;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>Once this is done, Ultra can verify the current producers by checking the following table.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos get table eosio eosio producers</span></span></code></pre></div>',19),n=[l];function r(p,c,i,u,y,d){return a(),s("div",null,n)}const C=e(o,[["render",r]]);export{D as __pageData,C as default};
