import{_ as o,c as e,o as n,C as t,a as c}from"./chunks/framework.f1490fb9.js";const r="/experimental/images/ultra-bp-production.jpg",x=JSON.parse('{"title":"Block Production","description":"","frontmatter":{"title":"Block Production","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"learn/Blockchains/block-production.md","lastUpdated":1686234101000}'),s={name:"learn/Blockchains/block-production.md"},a=t("h1",{id:"block-production",tabindex:"-1"},[c("Block Production "),t("a",{class:"header-anchor",href:"#block-production","aria-label":'Permalink to "Block Production"'},"​")],-1),i=t("p",null,"Block production is the base function for the network.",-1),d=t("p",null,"Each Block Producer is either producing or is on standby, waiting in the wings in case a producing team needs to be swapped out.",-1),l=t("p",null,"The production schedule decides in which order that the network sends transactions to a BP’s node. In a traditional EOSIO network, this order is decided by the token holders voting the Block Producers up and down the ranks. In Ultra’s network, we tightly control the production schedule and optimize it to increase the network’s throughput.",-1),h=t("p",null,"Typically, EOSIO-based networks have 21 producing BPs and many more in standby. Ultra currently has 7 producing BPs, and none in standby.",-1),u=t("p",null,"The default block time is 500ms, meaning that a new block is produced by the network twice a second.",-1),p=t("p",null,[t("strong",null,"Ultra Block Production Strategy")],-1),_=t("p",null,[t("img",{src:r,alt:""})],-1),k=[a,i,d,l,h,u,p,_];function m(b,g,B,w,P,y){return n(),e("div",null,k)}const O=o(s,[["render",m]]);export{x as __pageData,O as default};
