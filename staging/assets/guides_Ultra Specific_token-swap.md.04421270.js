import{_ as a,c as e,o as s,V as n}from"./chunks/framework.02b53d5b.js";const o="/staging/images/token-swap-pnetwork.png",C=JSON.parse('{"title":"Token Swap Overview","description":"","frontmatter":{"title":"Token Swap Overview","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"guides/Ultra Specific/token-swap.md","lastUpdated":null}'),t={name:"guides/Ultra Specific/token-swap.md"},l=n('<h1 id="token-swap-overview" tabindex="-1">Token Swap Overview <a class="header-anchor" href="#token-swap-overview" aria-label="Permalink to &quot;Token Swap Overview&quot;">​</a></h1><p>The new native Ultra Mainnet is an EOSIO-based so any exchanges that are currently familiar with the EOS Mainnet should not have any issues deploying infrastructure.</p><p>The only major differences that exchanges will need to worry about versus a standard EOSIO deployment are:</p><ul><li><p>Accounts now require KYC to deploy a smart contract to our network</p></li><li><p>Depending on how the exchange sets up their infrastructure they may need a smart contract</p></li></ul><p>In the case that an exchange needs to deploy a smart contract, please speak with our representative and we will enable the KYC flag for your account.</p><div class="tip custom-block"><p class="custom-block-title">Info</p><p>If you are simply looking for a way to swap from ERC-20 to native UOS use the following service <a href="https://dapp.ptokens.io" target="_blank" rel="noreferrer">https://dapp.ptokens.io</a> which is provided by our partner at pNetwork.</p></div><h2 id="api-nodes" tabindex="-1">API Nodes <a class="header-anchor" href="#api-nodes" aria-label="Permalink to &quot;API Nodes&quot;">​</a></h2><p>See the <a href="./../../api/">API Section</a> for a list of available nodes to transact with.</p><h2 id="block-explorers" tabindex="-1">Block Explorers <a class="header-anchor" href="#block-explorers" aria-label="Permalink to &quot;Block Explorers&quot;">​</a></h2><p>You can use these explorers to check transactions on our networks.</p><h3 id="testnet" tabindex="-1">Testnet <a class="header-anchor" href="#testnet" aria-label="Permalink to &quot;Testnet&quot;">​</a></h3><ul><li><a href="https://explorer.testnet.ultra.io/" target="_blank" rel="noreferrer">https://explorer.testnet.ultra.io/</a></li></ul><h3 id="mainnet" tabindex="-1">Mainnet <a class="header-anchor" href="#mainnet" aria-label="Permalink to &quot;Mainnet&quot;">​</a></h3><ul><li><a href="https://explorer.mainnet.ultra.io/" target="_blank" rel="noreferrer">https://explorer.mainnet.ultra.io/</a></li></ul><h2 id="creating-account-s" tabindex="-1">Creating Account(s) <a class="header-anchor" href="#creating-account-s" aria-label="Permalink to &quot;Creating Account(s)&quot;">​</a></h2><p>The exchanges will provide us with public keys for each permission (OWNER, ACTIVE) and a single, 12 character account name. Ultra will create these non-EBA accounts. Exchanges will be able to access the network and accounts through an API node.</p><ul><li><strong>Requirement checklist</strong><ul><li><strong>Accountname</strong> (12 characters, a-z, 1-5)</li><li><strong>Public Keys</strong> for each permission</li></ul></li></ul><h2 id="pre-swap" tabindex="-1">Pre-Swap <a class="header-anchor" href="#pre-swap" aria-label="Permalink to &quot;Pre-Swap&quot;">​</a></h2><p>Ultra will be leveraging the p.network token swap solution. This means that partner exchanges will log in to <a href="https://dapp.ptokens.io/" target="_blank" rel="noreferrer">https://dapp.ptokens.io/</a> and must have their metamask (or ledger, etc.) ready to perform the swap.</p><p>During the swap process you will be making Ethereum transactions. Depending on the time of day, activity, etc. of the chain gas prices may be extremely high. Please keep an eye on gas prices before performing a swap.</p><h2 id="performing-the-swap" tabindex="-1">Performing the Swap <a class="header-anchor" href="#performing-the-swap" aria-label="Permalink to &quot;Performing the Swap&quot;">​</a></h2><p>Since the original UOS token is ERC-20 based that means they will need to use the Ultra Vault Smart Contract that will automatically swap ERC-20 UOS for native chain UOS. See below for the general usage.</p><h3 id="general-flow-of-the-swap" tabindex="-1">General flow of the swap <a class="header-anchor" href="#general-flow-of-the-swap" aria-label="Permalink to &quot;General flow of the swap&quot;">​</a></h3><p><img src="'+o+`" alt=""></p><p>During the swap you will be putting in an Ultra accountname. This is the target account, controlled by the exchange. <strong>This account must exist before you swap tokens.</strong></p><h3 id="fees-and-costs" tabindex="-1">Fees and Costs <a class="header-anchor" href="#fees-and-costs" aria-label="Permalink to &quot;Fees and Costs&quot;">​</a></h3><p>The fee for ERC-20 swap to the native chain will have a 0% fee on the amount transferred. However, transferring from native UOS to ERC-20 UOS (or any other token) will have a 0.25% fee. Which means that you will only have a fee if you are moving into the ERC-20 platform. This fee will go to the validators of pNetwork and their infrastructure.</p><h4 id="actions-and-fees" tabindex="-1">Actions and fees <a class="header-anchor" href="#actions-and-fees" aria-label="Permalink to &quot;Actions and fees&quot;">​</a></h4><table><thead><tr><th>Action</th><th>Fee Covered By</th></tr></thead><tbody><tr><td>Sending ERC20 UOS tokens to the p.network Vault Contract</td><td>Covered by the user, paid in ETH (Gas Fee)</td></tr><tr><td>Peg In</td><td>Covered by p.network</td></tr><tr><td>Peg Out</td><td>The user (0.25% of transaction)</td></tr></tbody></table><h2 id="eosio-examples" tabindex="-1">EOSIO Examples <a class="header-anchor" href="#eosio-examples" aria-label="Permalink to &quot;EOSIO Examples&quot;">​</a></h2><p>Below you can see examples of the cleos commands necessary to perform the Ultra → Ethereum swap.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// using cleos</span></span>
<span class="line"><span style="color:#A6ACCD;">cleos transfer </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">YOUR_ACCOUNT</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> ultra</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">swap </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.00000000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;ETHEREUM_ADDRESS&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// using eosjs</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.token</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">transfer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> YOUR_ACCOUNT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">from</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> YOUR_ACCOUNT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">to</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ultra.swap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.00000000 UOS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ETHEREUM_ADDRESS</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="token-transfer-to-ultra" tabindex="-1">Token Transfer to Ultra <a class="header-anchor" href="#token-transfer-to-ultra" aria-label="Permalink to &quot;Token Transfer to Ultra&quot;">​</a></h2><p>Upon sending UOS token to <code>ultra.swap</code>, an inline action will be triggered to convert UOS to PUOS then redeem this PUOS to ERC20 UOS to targeted ETH address.</p><h3 id="action-flow" tabindex="-1">Action Flow <a class="header-anchor" href="#action-flow" aria-label="Permalink to &quot;Action Flow&quot;">​</a></h3><ul><li><p>User transfer UOS to <strong>ultra.swap</strong> with memo as ETH address</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos transfer user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">acc ultra</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">swap “</span><span style="color:#F78C6C;">1.00001000</span><span style="color:#A6ACCD;"> UOS” “</span><span style="color:#F78C6C;">0xB57edF3fF3e1ba7854Ec083438D53AD6032518Ac</span><span style="color:#A6ACCD;">“</span></span></code></pre></div></li><li><p><code>swap</code> contract will be notified and execute <code>on_transfer</code> to verify and process to redeem if all value is valid.</p></li><li><p><code>on_transfer</code> order of execution and check</p><ul><li><p>Skip redeem if <code>from</code> is <strong>ultra.eosio</strong></p></li><li><p>Skip redeem if <code>to</code> is not <strong>ultra.swap</strong></p></li><li><p>Skip redeem if <code>quantity</code> is not <strong>UOS</strong></p></li><li><p>Reject transaction if <code>memo</code> is empty</p></li><li><p>Reject transaction if <code>memo</code> is not a valid ETH address format</p><ul><li><p>Start with <code>0x</code></p></li><li><p>End with 40 hexadecimal characters</p></li><li><p>Example: <code>0xB57edF3fF3e1ba7854Ec083438D53AD6032518Ac</code></p></li></ul></li><li><p>Convert UOS to PUOS</p><ul><li><p>amount less than “0.00010000 UOS” will be return to <code>to</code> account</p></li><li><p>the rest will convert to PUOS for redeem</p></li><li><p>Example</p><ul><li><p>quantity = “1.00001000 UOS”</p></li><li><p>return = “0.00001000 UOS”</p></li><li><p>redeem = “1.00000000 PUOS”</p></li></ul></li></ul></li><li><p>Reject transaction if redeem amount = 0</p></li><li><p>If return amount &gt; 0, <strong>ultra.swap</strong> will transfer these fund back to user</p></li><li><p>Lastly, <strong>ultra.swap</strong> will call <code>redeem</code> action from pnetwork contract to handle the actual convert from PUOS to ERC20 UOS\\</p><ul><li><p>redeem(sender, quantity, memo)</p><ul><li><p>sender will be <strong>ultra.swap</strong></p></li><li><p>quantity will be PUOS from conversion</p></li><li><p>memo will be memo (ETH address) from transfer action</p></li></ul></li></ul></li></ul></li></ul>`,36),r=[l];function p(c,i,h,d,y,D){return s(),e("div",null,r)}const F=a(t,[["render",p]]);export{C as __pageData,F as default};
