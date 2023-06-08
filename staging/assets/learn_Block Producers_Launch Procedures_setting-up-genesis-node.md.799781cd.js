import{_ as s,c as a,o as e,V as o}from"./chunks/framework.ab141f3b.js";const d=JSON.parse('{"title":"Genesis Node","description":"","frontmatter":{"title":"Genesis Node","deploy":["staging","mainnet"],"outline":[0,4],"order":-98},"headers":[],"relativePath":"learn/Block Producers/Launch Procedures/setting-up-genesis-node.md","lastUpdated":null}'),n={name:"learn/Block Producers/Launch Procedures/setting-up-genesis-node.md"},t=o(`<h1 id="setting-up-genesis-node" tabindex="-1">Setting Up Genesis Node <a class="header-anchor" href="#setting-up-genesis-node" aria-label="Permalink to &quot;Setting Up Genesis Node&quot;">​</a></h1><p>While you are reading this article keep in mind that these are steps that Ultra will be performing on their Genesis Node. These are not steps that are going to be taken by the Block Producers.</p><p>The Ultra system token is <strong>UOS</strong> and has a decimal count of <strong>4</strong>. This will be used to launch the system contract and ensure everything is synchronized between the eosio.token contract and eosio.system contract.</p><p>Ultra will be providing pre-compiled contract ABIs and WASMs.</p><p><strong>Important:</strong> Before launch, any default chain parameters inside of the source files need to be <strong>DISCUSSED</strong> and <strong>ADJUSTED</strong> before the system contract is used.</p><h2 id="creating-system-accounts" tabindex="-1">Creating System Accounts <a class="header-anchor" href="#creating-system-accounts" aria-label="Permalink to &quot;Creating System Accounts&quot;">​</a></h2><p>The first thing that we’re going to do is create the system accounts. Here’s a full list of the system accounts.</p><ul><li><p>eosio</p></li><li><p>eosio.token</p></li><li><p>eosio.system</p></li><li><p>eosio.msig</p></li><li><p>eosio.ram: store ram payment</p></li><li><p>eosio.ramfee: store ram fee</p></li><li><p>eosio.stake: store staked token</p></li><li><p>eosio.wrap: for the wrap contract</p></li><li><p>ultra: ultra root account</p></li></ul><p><strong>Note:</strong> All of the accounts should be placed under the same genesis key <strong>except</strong> for <strong>ULTRA</strong>. As these accounts will eventually forfeit their permissions to the producers. The creation of these accounts can be done through the following action.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos create account eosio </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">account_name</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>We will ensure that all accounts are created by checking them manually.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos get account </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">account_name</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>Accounts which EOS mainnet use whereas ultra doesn&#39;t</strong></p><ul><li><p>eosio.rex, as we don&#39;t have res</p></li><li><p>eosio.names, as we don&#39;t have premium name policy yet, no name bidding</p></li><li><p>eosio.saving, as we don&#39;t have extra inflation, so we don&#39;t need the saving account</p></li><li><p>eosio.bpay: producers&#39; block reward, as we inflate token when doing reward for each BP, we don&#39;t need the cache</p></li><li><p>eosio.vpay</p></li></ul><h2 id="setting-up-for-chain-feature-activation" tabindex="-1">Setting Up for Chain Feature Activation <a class="header-anchor" href="#setting-up-for-chain-feature-activation" aria-label="Permalink to &quot;Setting Up for Chain Feature Activation&quot;">​</a></h2><p>The chain features must be manually activated before launch; here’s how we can do that.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#F78C6C;">8888</span><span style="color:#C3E88D;">/v1/producer/schedule_protocol_feature_activations</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;protocol_features_to_activate&quot;: [&quot;0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd&quot;]}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">jq</span></span></code></pre></div><h2 id="initializing-the-bios-contract" tabindex="-1">Initializing the BIOS Contract <a class="header-anchor" href="#initializing-the-bios-contract" aria-label="Permalink to &quot;Initializing the BIOS Contract&quot;">​</a></h2><p>The BIOS contract must be deployed on eosio before we continue any further.</p><p>Ultra provides a compiled version of this contract.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set contract eosio </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">contracts</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">contracts</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wasm eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bios</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">abi </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span></code></pre></div><h2 id="activating-the-chain-features" tabindex="-1">Activating the Chain Features <a class="header-anchor" href="#activating-the-chain-features" aria-label="Permalink to &quot;Activating the Chain Features&quot;">​</a></h2><p>These chain features must be activated manually. In order, the following features are going to be activated.</p><ul><li><p>GET_SENDER</p></li><li><p>FORWARD_SETCODE</p></li><li><p>ONLY_BILL_FIRST_AUTHORIZER</p></li><li><p>RESTRICT_ACTION_TO_SELF</p></li><li><p>DISALLOW_EMPTY_PRODUCER_SCHEDULE</p></li><li><p>FIX_LINKAUTH_RESTRICTION</p></li><li><p>REPLACE_DEFERRED</p></li><li><p>NO_DUPLICATE_DEFERRED_ID</p></li><li><p>ONLY_LINK_TO_EXISTING_PERMISSION</p></li><li><p>RAM_RESTRICTIONS</p></li><li><p>WEBAUTHN_KEYS</p></li><li><p>WTMSIG_BLOCK_SIGNATURES</p></li></ul><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos push action eosio activate </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span></code></pre></div><p>We will verify all of these are activated by running the following command.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#F78C6C;">8888</span><span style="color:#C3E88D;">/v1/producer/get_supported_protocol_features</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">jq</span></span></code></pre></div><h2 id="initialize-base-contracts" tabindex="-1">Initialize Base Contracts <a class="header-anchor" href="#initialize-base-contracts" aria-label="Permalink to &quot;Initialize Base Contracts&quot;">​</a></h2><p>We’re first going to initialize the <strong>eosio.token</strong> and <strong>eosio.msig</strong> contracts. This is entirely dependent on the directory you are in, but it should be a similar process. Ensure the keys for the accounts are inside of your wallet at this time.</p><p>After we’ll start with setting both the eosio.token and eosio.msig contracts. We’ll be using the ‘eosio.contracts/contracts’ the folder in this reference.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set contract eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cleos set contract eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msig </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">msig</span></span></code></pre></div><p>After that, we&#39;ll be adding some permissions to the token account.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set account permission eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token active </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">code eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token owner </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token</span></span>
<span class="line"><span style="color:#A6ACCD;">cleos set account permission ultra active </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">code eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token owner </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>Then we’ll initialize the actual eosio.token contract immediately after; putting reserved symbols into the eosio.token table.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token init </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>Then we’ll initialize the system currency. Please replace <strong>MAX_SUPPLY</strong> with the maximum tokens agreed upon in the IEO, which was 1,000,000,000 tokens.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token create </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;ultra&quot;,&quot;1000000000.0000 UOS&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><p>Ultra needs to take into consideration their token pre-sale. This should match the pre-sale numbers and will be distributed after launch.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token issue </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;ultra&quot;,&quot;AMOUNT.0000 UOS&quot;, &quot;Init&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><h2 id="initialize-the-system-contract" tabindex="-1">Initialize the System Contract <a class="header-anchor" href="#initialize-the-system-contract" aria-label="Permalink to &quot;Initialize the System Contract&quot;">​</a></h2><p>We’ll start off by setting the contract for the account <strong>eosio</strong>.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos set contract eosio </span><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">system</span></span></code></pre></div><p>After setting this contract we need to initialize the system contract with our currency. Remember that we’re using <code>8</code> for the precision of our system currency.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio init </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[0,&quot;8,UOS&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p eosio</span></span></code></pre></div><p>We also cannot forget to reserve some RAM for ultra.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio resvrambytes </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;1073741824&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><h2 id="registering-new-accounts" tabindex="-1">Registering New Accounts <a class="header-anchor" href="#registering-new-accounts" aria-label="Permalink to &quot;Registering New Accounts&quot;">​</a></h2><p>At this point, we will need to register accounts for our Block Producer partners. Our Block Producer partners will need to provide their account names as well as their public key. We will use the system contract to make new accounts from this point forward.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos system newaccount ultra </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">account_name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">public_key</span><span style="color:#A6ACCD;">&gt; </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">transfer </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">net </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cpu </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.0000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">gift</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ram</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">kbytes 4k </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div><h2 id="resigning-genesis-account-to-block-producers" tabindex="-1">Resigning Genesis Account to Block Producers <a class="header-anchor" href="#resigning-genesis-account-to-block-producers" aria-label="Permalink to &quot;Resigning Genesis Account to Block Producers&quot;">​</a></h2><p>At this stage we will be resigning our genesis account and removing all of the associated permissions. The <strong>eosio.system</strong> contract will be distributing its permissions to our Block Producers from here on in. After this step Ultra will no longer be responsible for anything that the system contract does and it will be fully automated by the block production schedule.</p><p>There are additional details on how this is done in the following article: <a href="./resigning-eosio-and-system-accounts.html">Resigning eosio and system accounts</a></p>`,52),l=[t];function p(c,r,i,D,y,C){return e(),a("div",null,l)}const A=s(n,[["render",p]]);export{d as __pageData,A as default};
