import{_ as l,c as s,I as r,E as o,V as a,J as c,o as i,C as t,a as e}from"./chunks/framework.dfdac305.js";const z=JSON.parse('{"title":"4. Deploy Smart Contract","description":"","frontmatter":{"title":"4. Deploy Smart Contract","deploy":["staging","mainnet"],"outline":[0,5],"order":0},"headers":[],"relativePath":"guides/Smart Contracts/4.deploy.md","lastUpdated":null}'),u={name:"guides/Smart Contracts/4.deploy.md"},p=a('<h1 id="deploy-smart-contract" tabindex="-1">Deploy Smart Contract <a class="header-anchor" href="#deploy-smart-contract" aria-label="Permalink to &quot;Deploy Smart Contract&quot;">​</a></h1><p>Once you have an <code>abi</code> and <code>wasm</code> file for a contract you are ready for deployment.</p><h2 id="create-a-wallet" tabindex="-1">Create a Wallet <a class="header-anchor" href="#create-a-wallet" aria-label="Permalink to &quot;Create a Wallet&quot;">​</a></h2><p>You can create a wallet through <a href="https://marketplace.visualstudio.com/items?itemName=ultraio.ultra-cpp" target="_blank" rel="noreferrer">Ultra.io Smart Contract Toolkit</a>.</p><p>Using the Command Palette (F1), type <code>Ultra: Create Wallet</code>.</p><p>You can use <a href="https://eosauthority.com/generate_eos_private_key" target="_blank" rel="noreferrer">EOSAuthority</a> to create a Private Key.</p><p>Take note of both your <code>private key</code> and <code>public key</code>.</p><p><strong>You will need your public key after importing</strong>.</p><ul><li>Fill out the password fields <ul><li>This will be used to unlock your wallet</li></ul></li><li>Fill out the private key field</li></ul><p>Wallet will tell you the account creation was successful in the bottom-right upon completion.</p><h2 id="creating-a-test-network-account" tabindex="-1">Creating a Test Network Account <a class="header-anchor" href="#creating-a-test-network-account" aria-label="Permalink to &quot;Creating a Test Network Account&quot;">​</a></h2><p>You will need a test network account on a supported blockchain to deploy a contract and test it.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Currently we recommend the Jungle Testnet as the Ultra is still building infrastructure.</p></div>',13),d=t("b",null,"Jungle Testnet",-1),h=t("span",null,[e("Visit "),t("a",{href:"https://monitor4.jungletestnet.io/"},"https://monitor4.jungletestnet.io/"),e(" to get started.")],-1),_=t("em",null,"This is a multi-step process before publishing.",-1),m=t("hr",null,null,-1),y=t("b",null,"Create an Account",-1),b=t("span",null,"1. Click Create Account",-1),g=t("span",null,"2. Fill out account name with a 12 character name",-1),w=t("span",null,"3. Paste a Public Key in Owner & Active Keys",-1),C=t("span",null,"4. Click Create",-1),f=t("hr",null,null,-1),k=t("b",null,"Get Tokens",-1),T=t("span",null,"1. Click Faucet",-1),S=t("span",null,"2. Fill out account name",-1),v=t("span",null,"3. Click Send Coins",-1),A=t("hr",null,null,-1),P=t("b",null,"Get RAM Resource",-1),U=t("span",null,[e("1. Open VSCode and Command Palette (F1) and type "),t("em",null,"Ultra: Create Transaction")],-1),D=t("span",null,"2. Select jungle testnet",-1),N=t("span",null,"3. Enter Wallet Password",-1),V=t("span",null,"4. Lookup eosio",-1),x=t("span",null,[e("5. Select action "),t("em",null,"buyrambytes")],-1),F=t("span",null,"6. Look at your .wasm file properties to determine the RAM you need. Buy extra for storing table data. You will want to lookup the total amount of bytes your .wasm file has.",-1),q=t("span",null,"7. Fill out the form, and buy some RAM. payer and receiver should be the same.",-1),E=t("span",null,"8. Ensure that the transaction is successful",-1),I=t("hr",null,null,-1),R=t("em",null,"Follow the rest of the instructions below for publishing.",-1),W=t("b",null,"Ultra Testnet",-1),Y=t("em",null,"The Ultra Testnet does not currently allow publishing contracts at this time.",-1),J=t("em",null,"However, it will soon be available. Q3 2023.",-1),M=t("b",null,[e("Contact "),t("a",{href:"mailto:developers@ultra.io"},"developers@ultra.io")],-1),O=a('<h2 id="deploy-contract" tabindex="-1">Deploy Contract <a class="header-anchor" href="#deploy-contract" aria-label="Permalink to &quot;Deploy Contract&quot;">​</a></h2><p>Using the Command Palette (F1), type <code>Ultra: Deploy Contract</code>.</p><p>Select the contract you want to deploy.</p><p><img src="https://i.imgur.com/58DlWY2.png" alt=""></p><p>Select the endpoint you want to deploy to.</p><p><img src="https://i.imgur.com/YCiLvTD.png" alt=""></p><p>Enter your wallet password.</p><p>Type in the <code>account</code> you have access to on the network you have picked.</p><p>If successful you will see the smart contract has been deployed in the output window.</p>',9);function B($,j,G,K,L,H){const n=c("Tabs");return i(),s("div",null,[p,r(n,{titles:["Jungle-Testnet","Ultra-Testnet","Ultra-Mainnet"]},{"Jungle-Testnet":o(()=>[d,h,_,m,y,b,g,w,C,f,k,T,S,v,A,P,U,D,N,V,x,F,q,E,I,R]),"Ultra-Testnet":o(()=>[W,Y,J]),"Ultra-Mainnet":o(()=>[M]),_:1}),O])}const X=l(u,[["render",B]]);export{z as __pageData,X as default};
