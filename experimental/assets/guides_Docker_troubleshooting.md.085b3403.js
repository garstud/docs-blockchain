import{_ as e,c as a,o,V as t}from"./chunks/framework.2730b14e.js";const m=JSON.parse('{"title":"Troubleshooting Docker Image","description":"","frontmatter":{"title":"Troubleshooting Docker Image","deploy":["staging","mainnet"],"order":99999,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/troubleshooting.md","lastUpdated":1686261083000}'),n={name:"guides/Docker/troubleshooting.md"},s=t(`<h1 id="troubleshooting-docker-image" tabindex="-1">Troubleshooting Docker Image <a class="header-anchor" href="#troubleshooting-docker-image" aria-label="Permalink to &quot;Troubleshooting Docker Image&quot;">​</a></h1><p>General troubleshooting while working with the docker image and individual tools inside of the image.</p><h2 id="smart-contract-debugging" tabindex="-1">Smart Contract Debugging <a class="header-anchor" href="#smart-contract-debugging" aria-label="Permalink to &quot;Smart Contract Debugging&quot;">​</a></h2><p>If you are unable to determinne what the issue is inside of a smart contract we suggest the following methods.</p><p><strong>Rubber Ducky Debugging</strong></p><ul><li>Step through your code one at a time and read it back to yourself out loud.</li><li>Ensure that it makes as much sense as possible as you read it out loud.</li><li>Usually during the explanation page you can figure out where your error may be.</li></ul><p><strong>Cave Man Debugging</strong></p><ul><li>Add various <code>eosio::print</code> statements inside of your smart contract.</li><li>Print out every step of the way to help figure out where your smart contract may be failing.</li></ul><p><strong>Test Based Debugging</strong></p><ul><li>Using the <code>ultratest</code> framework inside of the Docker image, you can write your own tests for a smart contract.</li><li>This is very useful for debugging a smart contract that can already compile.</li></ul><h2 id="container-is-not-starting" tabindex="-1">Container is not starting <a class="header-anchor" href="#container-is-not-starting" aria-label="Permalink to &quot;Container is not starting&quot;">​</a></h2><p><code>Bind for 0.0.0.0:9876 failed: port is already allocated</code></p><p><strong>Solution(s)</strong></p><p>Make sure there are no processes listening to ports <code>8888</code> and <code>9876</code>. They&#39;re used by the container. To find the pid of the process listening to <code>PORT</code> on linux run <code>sudo lsof -i | grep PORT</code>, on windows - <code>netstat -ano | findStr &quot;PORT&quot;</code>.</p><h2 id="compiling-smart-contracts" tabindex="-1">Compiling smart contracts <a class="header-anchor" href="#compiling-smart-contracts" aria-label="Permalink to &quot;Compiling smart contracts&quot;">​</a></h2><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">error 2022-03-16T09:23:47.545 cleos     main.cpp:3985                 main                 ] Failed with error: Assert Exception (10)</span></span>
<span class="line"><span style="color:#A6ACCD;">!action_type.empty(): Unknown action &lt;action_name&gt; in contract hello</span></span></code></pre></div><p><strong>Solution(s)</strong></p><p>Make sure the <code>&lt;action_name&gt;</code> is inside the abi file. If not check that it&#39;s marked with an <code>[[eosio::action]]</code> compiler attribute.</p><h2 id="transaction-exceeding-cpu-limit" tabindex="-1">Transaction Exceeding CPU Limit <a class="header-anchor" href="#transaction-exceeding-cpu-limit" aria-label="Permalink to &quot;Transaction Exceeding CPU Limit&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Error 3080002: transaction exceeded the current network usage limit imposed on the transaction</span></span></code></pre></div><p><strong>Solution(s)</strong></p><ul><li>Improve the efficiency of your smart contract</li><li>Attempt to deploy the transaction multiple times</li><li>Find an HTTP endpoint for Testnet / Mainnet deployment that is very close to your network</li><li>Change transaction CPU Limits (Only applies to own networks)</li></ul><h2 id="authorization-error" tabindex="-1">Authorization Error <a class="header-anchor" href="#authorization-error" aria-label="Permalink to &quot;Authorization Error&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Provided keys, permissions, and delays do not satisfy declared authorizations</span></span></code></pre></div><p><strong>Solution(s)</strong></p><p>Revolves around specific private keys not currently available in your wallet that match the account permissions.</p><h2 id="no-abi-or-wasm-files" tabindex="-1">No ABI or WASM Files <a class="header-anchor" href="#no-abi-or-wasm-files" aria-label="Permalink to &quot;No ABI or WASM Files&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Error 3160010: No abi file found</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Error 3160009: No wasm file found</span></span></code></pre></div><p><strong>Solution(s)</strong></p><p>During the compilation of the smart contract it may not have compiled correctly. Try reviewing the compilation process and ensure that there are no additional errors showing inside of the console.</p><h2 id="out-of-ram-error" tabindex="-1">Out of ram error <a class="header-anchor" href="#out-of-ram-error" aria-label="Permalink to &quot;Out of ram error&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Reading WASM from /Users/shankar/contracts/hello/hello.wasm...</span></span>
<span class="line"><span style="color:#A6ACCD;">Publishing contract...</span></span>
<span class="line"><span style="color:#A6ACCD;">Error 3080001: Account using more than allotted RAM usage</span></span>
<span class="line"><span style="color:#A6ACCD;">Error Details:</span></span>
<span class="line"><span style="color:#A6ACCD;">account youraccname1 has insufficient ram; needs 25588 bytes has 9547 bytes</span></span></code></pre></div><p>The state of a contract, along with the code and ABI are stored in a in-memory database. Your storage quota is calculated based on the RAM resource.</p><p><strong>Solution(s)</strong></p><ul><li>Buy more ram using <code>buyram</code> action of the system contract</li><li>Reduce your code size by not relying on 3rdparty libraries</li></ul>`,36),i=[s];function r(l,c,p,d,u,h){return o(),a("div",null,i)}const y=e(n,[["render",r]]);export{m as __pageData,y as default};
