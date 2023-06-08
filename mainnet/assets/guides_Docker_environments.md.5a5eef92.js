import{_ as e,c as t,o as a,V as o}from"./chunks/framework.b4c71460.js";const y=JSON.parse('{"title":"Environments","description":"","frontmatter":{"title":"Environments","deploy":["staging","mainnet"],"order":-9992,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/environments.md","lastUpdated":null}'),n={name:"guides/Docker/environments.md"},r=o('<h1 id="environments" tabindex="-1">Environments <a class="header-anchor" href="#environments" aria-label="Permalink to &quot;Environments&quot;">​</a></h1><p>Environments are specific locations where you can perform tests against your smart contracts, and applications.</p><p>There are three environments; local, testnet, and mainnet.</p><p><a href="./../../api/">See this API section</a> for information on block producer endpoints that are publicly available.</p><h2 id="local" tabindex="-1">Local <a class="header-anchor" href="#local" aria-label="Permalink to &quot;Local&quot;">​</a></h2><p>The local environment is where you are browsing this documentation from.</p><p>You would be running code against your local machine on a blockchain that is also running on your local machine.</p><p>In the case of <code>cleos</code> you would not provide any <code>-u</code> parameters to target your own local blockchain inside of a docker image.</p><h3 id="why-use-local" tabindex="-1">Why use local? <a class="header-anchor" href="#why-use-local" aria-label="Permalink to &quot;Why use local?&quot;">​</a></h3><ul><li>Just beginning smart contract development.</li><li>Need to test and write tests before full deployment.</li><li>Easy way to start and stop a blockchain and restart from zero each time.</li></ul><h2 id="test-network" tabindex="-1">Test Network <a class="header-anchor" href="#test-network" aria-label="Permalink to &quot;Test Network&quot;">​</a></h2><p>The test network environment is where you want to deploy your smart contract after going through general testing.</p><p>This should be the first place you will want to deploy your smart contract for other users to interact with.</p><h2 id="why-use-testnet" tabindex="-1">Why use Testnet? <a class="header-anchor" href="#why-use-testnet" aria-label="Permalink to &quot;Why use Testnet?&quot;">​</a></h2><ul><li>Ready to deploy smart contracts to other users.</li><li>Begin getting feedback in a public manner.</li><li>Begin writing frontend for your decentralized application.</li><li>Need a way for others to easily interact and test your smart contract.</li></ul><p>Go to the <a href="./../Ultra Specific/faucet.html">faucet documentation page</a> to start working with testnet.</p><h2 id="main-network" tabindex="-1">Main Network <a class="header-anchor" href="#main-network" aria-label="Permalink to &quot;Main Network&quot;">​</a></h2><p>The main network environment is when you want to partner with ultra to get your smart contract deployed to the world.</p><p>This is the stage where you have a smart contract, you have had that contract audited, you have an application, and you want to get it into ultra ecosystem for everyone to interact with.</p><h2 id="why-use-mainnet" tabindex="-1">Why use Mainnet? <a class="header-anchor" href="#why-use-mainnet" aria-label="Permalink to &quot;Why use Mainnet?&quot;">​</a></h2><ul><li>Ready to go live with your smart contract.</li><li>Smart contract has already been audited.</li><li>Optional frontend application is ready to be used.</li></ul>',21),i=[r];function l(s,c,h,d,u,p){return a(),t("div",null,i)}const w=e(n,[["render",l]]);export{y as __pageData,w as default};
