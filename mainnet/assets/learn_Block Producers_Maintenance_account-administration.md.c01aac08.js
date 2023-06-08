import{_ as e,c as s,o as a,V as i}from"./chunks/framework.b4c71460.js";const y=JSON.parse('{"title":"Account Administration","description":"","frontmatter":{"title":"Account Administration","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"learn/Block Producers/Maintenance/account-administration.md","lastUpdated":null}'),t={name:"learn/Block Producers/Maintenance/account-administration.md"},o=i(`<h1 id="account-administration" tabindex="-1">Account Administration <a class="header-anchor" href="#account-administration" aria-label="Permalink to &quot;Account Administration&quot;">​</a></h1><p>Every Block Producer needs to be able to manage his keys in a secure and efficient manner for the sake of his own security and security of the Ultra Blockchain. As a best practice every BP account must at least use 4 key pairs:</p><ol><li><p><strong>Owner keys:</strong> This is the root permission, proving ownership of your account. These keys can be used to replace keys on any other permission. Owner keys should be stored securely and only used in emergencies.</p></li><li><p><strong>Active keys:</strong> Used for signing and executing transactions and also for pushing actions. Should be kept secure and used with caution.</p></li><li><p><strong>Signature keys:</strong> A key pair that is used only for signing blocks. It must not be used to perform any other operation.</p></li><li><p><strong>Claim keys:</strong> A key pair that is used only for claiming rewards.</p></li></ol><p>Make sure to create these four key pairs and store them securely.</p><p><strong>Recommended storage of keypairs</strong></p><p>For the Owner and Active keypairs, we recommend storing these on a hardware wallet like a Ledger which requires a second physical step for authorization.</p><p>The Signature and Claim keys can be stored securely according to the internal security policies of the Block Producers. The Signature keypair can not be stored on a hardware wallet as it needs to be input into nodeos.</p><p>When you finish this setup, you should update the signature provider record in your config.ini file with your new signature keys.</p><p>You should also create a new permission called claim using your claim keys. Don&#39;t forget to link the <em>claimrewards</em> action to this new permission. This way, your claim keys can only be used to claim rewards. This process is described below:</p><h3 id="create-the-custom-claim-permission-as-a-child-of-the-active-permission" tabindex="-1">Create the custom claim permission as a child of the active permission <a class="header-anchor" href="#create-the-custom-claim-permission-as-a-child-of-the-active-permission" aria-label="Permalink to &quot;Create the custom claim permission as a child of the active permission&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set account permission YOURACCOUNT claim CLAIM_PUBLIC_KEY active </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p YOURACCOUNT@active​</span></span></code></pre></div><h3 id="link-claimrewards-action-to-the-claim-permission" tabindex="-1">Link claimrewards action to the claim permission <a class="header-anchor" href="#link-claimrewards-action-to-the-claim-permission" aria-label="Permalink to &quot;Link claimrewards action to the claim permission&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set action permission YOURACCOUNT eosio claimrewards claim </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p YOURACCOUNT@active</span></span></code></pre></div><h3 id="claiming-the-rewards-with-claim-permission" tabindex="-1">Claiming the rewards with claim permission <a class="header-anchor" href="#claiming-the-rewards-with-claim-permission" aria-label="Permalink to &quot;Claiming the rewards with claim permission&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos system claimrewards YOURACCOUNT </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p YOURACCOUNT@claim</span></span></code></pre></div><h3 id="removing-the-claim-permission" tabindex="-1">Removing the claim permission <a class="header-anchor" href="#removing-the-claim-permission" aria-label="Permalink to &quot;Removing the claim permission&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set account permission YOURACCOUNT claim NULL active </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p YOURACCOUNT@active</span></span>
<span class="line"><span style="color:#A6ACCD;">cleos set action permission YOURACCOUNT eosio claimrewards NULL </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p YOURACCOUNT@active</span></span></code></pre></div>`,17),n=[o];function r(c,l,p,d,m,h){return a(),s("div",null,n)}const g=e(t,[["render",r]]);export{y as __pageData,g as default};
