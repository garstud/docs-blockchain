import{_ as e,c as t,o as a,V as o}from"./chunks/framework.dfdac305.js";const g=JSON.parse('{"title":"Migration Behavior","description":"","frontmatter":{"title":"Migration Behavior","order":-99,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/migration.md","lastUpdated":null}'),n={name:"contracts/NFT Contract/NFT Actions/migration.md"},i=o('<h1 id="migration-behavior" tabindex="-1">Migration Behavior <a class="header-anchor" href="#migration-behavior" aria-label="Permalink to &quot;Migration Behavior&quot;">​</a></h1><p>The NFT smart contract is written in a way to allow for <strong>migration from our existing NFT version to our new version automatically</strong>. The end user of the action does not have to do anything new, but it is <strong>highly recommended to migrate</strong> to the new action pattern as soon as possible.</p><p>This is done by having a parent function that handles migration on the fly. This means that when the action is called in the future for a specific smart contract that has not migrated from a previous version to the new version, it will re-route the action through the appropriate version after making the necessary table changes to support the new version.</p><p>These migration behaviors are done across the entire smart contract and exist in almost every action.</p><h2 id="example-behavior" tabindex="-1">Example Behavior <a class="header-anchor" href="#example-behavior" aria-label="Permalink to &quot;Example Behavior&quot;">​</a></h2><p>We will take the <code>create</code> action as an example of this behavior.</p><p>We will be doing a migration from V0 to V1 to help describe the general behavior.</p><p>Once migration has started inside of the smart contract a flag is enabled and will begin taking any of the existing <code>create</code> structs that are sent through the main function and automatically converting them.</p><p>This is done by taking the <code>V0</code> struct and automatically creating a new <code>V1</code> struct. New values are created, defined, and even in some cases transformed to support the new tables.</p><p>After performing the struct migration, it will reroute the action into the correct version of the function that can handle the new <code>struct</code> data.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>Each action has their own migration pattern and they are all complex in their own unique way.</p><p>When a new version is announced it is always best to migrate your actions to match the structs which are provided.</p>',13),r=[i];function s(c,h,l,d,p,m){return a(),t("div",null,r)}const f=e(n,[["render",s]]);export{g as __pageData,f as default};
