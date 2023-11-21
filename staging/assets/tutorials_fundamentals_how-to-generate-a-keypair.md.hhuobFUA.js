import{_ as t,C as r,c as i,H as o,L as e,o as s}from"./chunks/framework.EMf-NuUT.js";const k=JSON.parse('{"title":"How to generate a Keypair","description":"","frontmatter":{"title":"How to generate a Keypair","order":-99999,"oultine":[0,5]},"headers":[],"relativePath":"tutorials/fundamentals/how-to-generate-a-keypair.md","filePath":"tutorials/fundamentals/how-to-generate-a-keypair.md","lastUpdated":null}'),n={name:"tutorials/fundamentals/how-to-generate-a-keypair.md"},l=e('<h1 id="how-to-generate-a-key-pair" tabindex="-1">How to Generate a Key Pair <a class="header-anchor" href="#how-to-generate-a-key-pair" aria-label="Permalink to &quot;How to Generate a Key Pair&quot;">​</a></h1><p>Ultra uses an elliptic curve key pair consists of a public key (used for verification) and a private key (kept secret for signing transactions), enabling secure digital interactions on the Ultra blockchain.</p><p>A keypair is <strong>required</strong> for most blockchain development besides reading APIs. If you are going to publish a smart contract, sign a transaction, or even sign a message you&#39;re going to need a keypair.</p><details class="details custom-block"><summary>Additional Information</summary><h4 id="what-is-a-public-key" tabindex="-1">What is a Public Key? <a class="header-anchor" href="#what-is-a-public-key" aria-label="Permalink to &quot;What is a Public Key?&quot;">​</a></h4><p>A public key is primarily used for cryptographic verification. In the context of blockchain or digital signatures, it allows others to confirm that a message or transaction was indeed signed by the corresponding private key without revealing the private key itself. This verification process is crucial for ensuring the integrity and authenticity of data in secure communications and transactions.</p><h4 id="what-is-a-private-key" tabindex="-1">What is a Private Key? <a class="header-anchor" href="#what-is-a-private-key" aria-label="Permalink to &quot;What is a Private Key?&quot;">​</a></h4><p>A private key, a secret alphanumeric code, is used to digitally sign transactions or messages. It grants control over associated assets or data in blockchain systems. Essential for secure communication, it enables identity verification and access control, emphasizing the need for stringent security measures to prevent unauthorized access or loss.</p></details><h3 id="generate-a-keypair" tabindex="-1">Generate a Keypair <a class="header-anchor" href="#generate-a-keypair" aria-label="Permalink to &quot;Generate a Keypair&quot;">​</a></h3><p>In most cases we don&#39;t recommend generating private keys online. However, if you are using this for our test network it is safe to use there. Otherwise, seek out some of the additional ways to generate a key pair safely. Such as using <a href="./../../blockchain/general/tools/cleos.html">cleos</a>.</p>',6),c=e('<br><br><h3 id="alternative-ways-to-generate-keypairs" tabindex="-1">Alternative Ways to Generate Keypairs <a class="header-anchor" href="#alternative-ways-to-generate-keypairs" aria-label="Permalink to &quot;Alternative Ways to Generate Keypairs&quot;">​</a></h3><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io VSCode Extension</a></li><li><a href="https://eosauthority.com/generate_eos_private_key" target="_blank" rel="noreferrer">EOS Authority</a></li><li><a href="https://github.com/eoscafe/eos-key" target="_blank" rel="noreferrer">EOSCafe Offline Generator</a></li><li><a href="https://nadejde.github.io/eos-token-sale/" target="_blank" rel="noreferrer">NadeJDE Key Generator</a></li></ul>',4);function h(d,p,u,y,g,m){const a=r("KeyGenerator");return s(),i("div",null,[l,o(a),c])}const _=t(n,[["render",h]]);export{k as __pageData,_ as default};
