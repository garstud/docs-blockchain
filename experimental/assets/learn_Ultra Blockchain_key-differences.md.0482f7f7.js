import{_ as e,c as a,o as r,V as o}from"./chunks/framework.2730b14e.js";const g=JSON.parse('{"title":"Key Differences","description":"","frontmatter":{"title":"Key Differences","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"learn/Ultra Blockchain/key-differences.md","lastUpdated":1686261083000}'),t={name:"learn/Ultra Blockchain/key-differences.md"},n=o('<h1 id="key-differences" tabindex="-1">Key Differences <a class="header-anchor" href="#key-differences" aria-label="Permalink to &quot;Key Differences&quot;">​</a></h1><p>Ultra is based on <a href="https://github.com/EOSIO" target="_blank" rel="noreferrer">EOSIO technology</a> and is maintained at feature parity with the standard releases, there are many key changes that have been implemented by our blockchain team. These changes alter the way that Ultra allocates resources, assigns permissions, and runs the blockchain and its schedule.</p><h2 id="choosing-block-producers" tabindex="-1">Choosing Block Producers <a class="header-anchor" href="#choosing-block-producers" aria-label="Permalink to &quot;Choosing Block Producers&quot;">​</a></h2><p>As an enterprise blockchain network, Ultra carefully selects and elects Block Producers manually. There is no voting process. Block Producers&#39; accounts are created by Ultra, with the keys being generated by the Block Producer themselves.</p><p>Block producers are given a specific order based on their geographical location and the distance between each producer. The goal is to reduce the distance between producers and the overall latency.</p><p>See <a href="./../Blockchains/consensus.html#proof-of-authority-poa">Proof of Authority</a></p><h2 id="block-producer-schedule" tabindex="-1">Block Producer Schedule <a class="header-anchor" href="#block-producer-schedule" aria-label="Permalink to &quot;Block Producer Schedule&quot;">​</a></h2><p>During the initial Testnets and Mainnet, it will be Ultra who is defining the Block Producer schedule. There is not an ordered, elected ranking like on other EOSIO chains. There is no voting for Block Producers.</p><p>All block producers are given an equal opportunity to produce blocks for the chain.</p><h2 id="block-producer-rewards" tabindex="-1">Block Producer Rewards <a class="header-anchor" href="#block-producer-rewards" aria-label="Permalink to &quot;Block Producer Rewards&quot;">​</a></h2><p>Ultra’s block production rewards are divided up according to how many blocks they produce. A Block Producer that successfully produces all blocks will be able to claim the full Block Producer reward.</p><p>The compensation that a Block Producer receives is paid out in <strong>UOS tokens</strong>. The reward is always calculated as the equivalent of a set USD sum that is agreed upon when the Block Producer signs the contract with Ultra.</p><h2 id="transactions-ranking" tabindex="-1">Transactions Ranking <a class="header-anchor" href="#transactions-ranking" aria-label="Permalink to &quot;Transactions Ranking&quot;">​</a></h2><p>On the Ultra blockchain, the ranking mechanism for the queuing of transactions has been substantially altered to ensure that</p><ul><li><p>Transactions critical to the Ultra network get processed with priority</p></li><li><p>Transactions from users who do not have enough resources can still access the network</p></li></ul><h2 id="cpu-net-resources" tabindex="-1">CPU/NET Resources <a class="header-anchor" href="#cpu-net-resources" aria-label="Permalink to &quot;CPU/NET Resources&quot;">​</a></h2><p>Extensive changes have been made by Ultra to the core concept of <strong>CPU/NET</strong>. On Ultra these have been combined into a simplified, single resource called POWER. User accounts stake <strong>UOS</strong> to gain <strong>POWER</strong>. Dapp user can pay for their users&#39; transaction <strong>POWER</strong> usage.</p><p>Read more in the <a href="./power-resource.html">Power Policy</a> section as well as the <a href="./transaction-limits-queues.html">Transaction Queue</a>.</p><p><strong>RAM</strong></p><p>The most common or important usage of RAM is free, account creation for example. Users don’t need to purchase RAM for simple blockchain usage. Developers have the option to buy more for deployment of smart contracts that require it.</p><p>Read more in the <a href="./ram-policy.html">RAM Policy</a> section.</p><h2 id="accounts" tabindex="-1">Accounts <a class="header-anchor" href="#accounts" aria-label="Permalink to &quot;Accounts&quot;">​</a></h2><p>Blockchain accounts on the Ultra network are free (up to a certain number of accounts per user) since it is Ultra who assumes the cost of the <strong>RAM</strong> required to create a new account. For users who require additional accounts, they can purchase extra RAM as required. To begin with, ultra will be the only one that can create a new account.</p><h2 id="permissions" tabindex="-1">Permissions <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions&quot;">​</a></h2><p>The Ultra blockchain has also made alterations at the protocol level to how permissions are applied. In a traditional EOSIO blockchain, permission may change itself. On Ultra, only a parent authority may change a child’s permission. This means that, for example, <strong>ACTIVE</strong> permission must be changed by the <strong>OWNER</strong> permission, and can not be changed by the <strong>ACTIVE</strong> permission.</p><p><strong>Veto Power</strong></p><p>As an enterprise-focused blockchain solution, Ultra retains veto power over proposals that it deems improper or malicious. For example, a proposal to upgrade to an undesired system contract implementation which could potentially undermine the Ultra blockchain.</p><p><strong>Premium Names</strong></p><p>Premium names are not currently supported.</p><p><strong>Chain activation</strong></p><p>Only Ultra can activate the chain.</p>',31),s=[n];function c(i,l,h,d,u,p){return r(),a("div",null,s)}const k=e(t,[["render",c]]);export{g as __pageData,k as default};
