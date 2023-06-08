import{_ as t,c as a,o as e,V as o}from"./chunks/framework.2730b14e.js";const g=JSON.parse('{"title":"NFT Factory Groups","description":"","frontmatter":{"title":"NFT Factory Groups","order":2,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/nft-factory-groups.md","lastUpdated":1686261083000}'),r={name:"contracts/NFT Contract/nft-factory-groups.md"},s=o('<h1 id="nft-factory-groups" tabindex="-1">NFT Factory Groups <a class="header-anchor" href="#nft-factory-groups" aria-label="Permalink to &quot;NFT Factory Groups&quot;">​</a></h1><p>Factory groups allow token factory managers to assemble multiple owned factories into a single group.</p><p>This means that any game or items that belong to the same collection can be grouped together.</p><h2 id="why" tabindex="-1">Why? <a class="header-anchor" href="#why" aria-label="Permalink to &quot;Why?&quot;">​</a></h2><p>Finding relevant data in the same collection on-chain can be difficult but this feature allows for a simple way to group a bunch of data together to represent a collection in the marketplace.</p><h2 id="how" tabindex="-1">How? <a class="header-anchor" href="#how" aria-label="Permalink to &quot;How?&quot;">​</a></h2><p>This is done by creating a table on-chain.</p><p>Each entry in the table represents a factory group.</p><p>A factory group has a metadata uri associated with it.</p><p>This metadata uri also has a hash to represent the data inside of it.</p><p>This also corresponds with the factories that belong to this group.</p><h2 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h2><ul><li><a href="./NFT Actions/creategrp.html">creategrp</a></li><li><a href="./NFT Actions/updategrp.html">updategrp</a></li><li><a href="./NFT Actions/deletegrp.html">deletegrp</a></li><li><a href="./NFT Actions/addgrpfcts.html">addgrpfcts</a></li><li><a href="./NFT Actions/rmgrpfcts.html">rmgrpfcts</a></li></ul>',13),i=[s];function n(c,l,h,p,d,f){return e(),a("div",null,i)}const m=t(r,[["render",n]]);export{g as __pageData,m as default};
