import{_ as a,c as e,o as s,V as l}from"./chunks/framework.a347656d.js";const u=JSON.parse('{"title":"Creating a Wallet","description":"","frontmatter":{"title":"Creating a Wallet","deploy":["staging","mainnet"],"order":-99995,"oultine":[0,4]},"headers":[],"relativePath":"guides/Basics/creating-a-wallet.md","lastUpdated":null}'),t={name:"guides/Basics/creating-a-wallet.md"},n=l('<h1 id="creating-a-wallet" tabindex="-1">Creating a Wallet <a class="header-anchor" href="#creating-a-wallet" aria-label="Permalink to &quot;Creating a Wallet&quot;">​</a></h1><p>This should only be done when you are <strong>NOT</strong> using <code>cleos</code> with <code>ultratest</code>. If you prefer to have Ultratest generate your accounts and wallets automatically, check the <a href="./start-local-chain.html">start a local chain</a> section for how to do so.</p><h2 id="creating-a-wallet-1" tabindex="-1">Creating a Wallet <a class="header-anchor" href="#creating-a-wallet-1" aria-label="Permalink to &quot;Creating a Wallet&quot;">​</a></h2><p>You can create a wallet with cleos using the command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wallet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--to-console</span></span></code></pre></div><p>Alternatively, you can also output to a password file:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wallet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--file</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">filenam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="unlocking-a-wallet" tabindex="-1">Unlocking a Wallet <a class="header-anchor" href="#unlocking-a-wallet" aria-label="Permalink to &quot;Unlocking a Wallet&quot;">​</a></h2><p>You can unlock your wallet with:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wallet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unlock</span></span></code></pre></div><p>You&#39;ll be prompted to provide your password.</p><h2 id="generating-a-key-pair" tabindex="-1">Generating a Key Pair <a class="header-anchor" href="#generating-a-key-pair" aria-label="Permalink to &quot;Generating a Key Pair&quot;">​</a></h2><p>Run the following command to generate a key pair:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--to-console</span></span></code></pre></div><p>This command will generate a new key pair and display the public and private keys on the console.</p><p>Make sure to securely store the generated private key as it will be needed for signing transactions.</p><p>Here&#39;s an example output of the cleos create key command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Private</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`&lt;</span><span style="color:#C3E88D;">private_key</span><span style="color:#89DDFF;">&gt;`</span></span>\n<span class="line"><span style="color:#FFCB6B;">Public</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">key:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`&lt;</span><span style="color:#C3E88D;">public_key</span><span style="color:#89DDFF;">&gt;`</span></span></code></pre></div><p>Remember to keep your private key safe and secure. It&#39;s crucial to protect your private key from unauthorized access to prevent any potential misuse.</p><h2 id="adding-keys-to-a-wallet" tabindex="-1">Adding Keys to a Wallet <a class="header-anchor" href="#adding-keys-to-a-wallet" aria-label="Permalink to &quot;Adding Keys to a Wallet&quot;">​</a></h2><p>You must have your wallet open and unlocked. You&#39;ll need to generate a new key pair as is shown in the above section.</p><p>Run the following command to import the private key into your wallet:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wallet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--private-key</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">private_ke</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Make sure to keep your wallet secure and protect it with a strong password.</p>',24),o=[n];function p(r,c,i,y,d,C){return s(),e("div",null,o)}const g=a(t,[["render",p]]);export{u as __pageData,g as default};
