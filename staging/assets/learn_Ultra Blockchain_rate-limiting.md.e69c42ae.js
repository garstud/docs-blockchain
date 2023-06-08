import{_ as e,c as t,o as a,V as i}from"./chunks/framework.ab141f3b.js";const n="/staging/images/rate-limiting-diagram.jpg",o="/staging/images/rate-limiting-account-power-diagram.jpg",r="/staging/images/rate-limiting-after-transaction.jpg",b=JSON.parse('{"title":"Rate Limiting","description":"","frontmatter":{"title":"Rate Limiting","deploy":["staging","mainnet"],"outline":[0,4],"order":-93},"headers":[],"relativePath":"learn/Ultra Blockchain/rate-limiting.md","lastUpdated":null}'),s={name:"learn/Ultra Blockchain/rate-limiting.md"},c=i('<h1 id="rate-limiting" tabindex="-1">Rate Limiting <a class="header-anchor" href="#rate-limiting" aria-label="Permalink to &quot;Rate Limiting&quot;">​</a></h1><p>Ultra has a rate limiting system added to the chain itself for controlling how many transactions a single account can push into a block.</p><h2 id="who-is-affected-by-rate-limits" tabindex="-1">Who is affected by Rate Limits? <a class="header-anchor" href="#who-is-affected-by-rate-limits" aria-label="Permalink to &quot;Who is affected by Rate Limits?&quot;">​</a></h2><p>There are two types of accounts that exist on the chain.</p><ul><li>limited</li><li>unlimited</li></ul><p>Obviously, the unlimited has no limitations, and can push as many transactions as it needs to. These unlimited accounts were usually created during the chain launch, or through a special multi-signature transaction.</p><p>While limited accounts are effected by staking rules.</p><h2 id="unstaked-limitations" tabindex="-1">Unstaked Limitations <a class="header-anchor" href="#unstaked-limitations" aria-label="Permalink to &quot;Unstaked Limitations&quot;">​</a></h2><p>Accounts that have not staked with <code>delegatebw</code> action are only able to send <code>1</code> transaction per block. This is termed as a <code>free</code> transaction.</p><h2 id="staked-limitations" tabindex="-1">Staked Limitations <a class="header-anchor" href="#staked-limitations" aria-label="Permalink to &quot;Staked Limitations&quot;">​</a></h2><p>An account with staked tokens increases their priority for their transactions to be added to a block.</p><p>Basically, the higher amount you stake the more transactions you can push into one single block.</p><p>You also get higher transaction priority in the ranked transaction queue.</p><h2 id="understanding-the-rate-limiting-structure" tabindex="-1">Understanding the Rate Limiting Structure <a class="header-anchor" href="#understanding-the-rate-limiting-structure" aria-label="Permalink to &quot;Understanding the Rate Limiting Structure&quot;">​</a></h2><p>The diagram below describes how transactions enter the ranked queue. Each account has a designated power <code>50, 30, 10, etc.</code></p><p>The transactions that are being sent from that account are to the right of the account.</p><ul><li><code>Account A</code> is performing <code>3</code> transactions</li><li><code>Account G</code> is performing just <code>2</code>. <ul><li>Account G cannot perform both transactions within the same block since they have negative power.</li></ul></li></ul><p>This means that <code>Account G</code> can use <code>1 free transaction per block</code> to send one transaction through. The other transaction is rejected.</p><p><img src="'+n+'" alt=""></p><p>After performing transactions in a block each account has their power reduced until it is negative. A negative account can still send a single transaction in each block.</p><p><img src="'+o+'" alt=""></p><p>When power is reduced their position in the queue is also reduced and re-ordered per-account. This means that if you have <strong>more power</strong> you have <strong>higher priority</strong>.</p><p><img src="'+r+'" alt=""></p><p>In the above diagram we can see that originally the ordering of the accounts was <code>A</code> and then <code>B</code>. However, once account <code>A</code> had a few of their transactions included into the block (yellow rectangles), its rank in the queue dropped below account <code>B</code>. At that point, account <code>B</code> started having their transactions included into the block first instead.</p><h2 id="what-happens-if-i-m-stuck-in-the-queue" tabindex="-1">What happens if I&#39;m stuck in the queue? <a class="header-anchor" href="#what-happens-if-i-m-stuck-in-the-queue" aria-label="Permalink to &quot;What happens if I&#39;m stuck in the queue?&quot;">​</a></h2><p>The queue will keep draining and impacting the ranks of the accounts it contains. Transactions that are lower in the queue will stay in the queue until they are consumed by being put into a block, expire because it took too long to get to them, or are ejected if the queue grows large enough to hit our queue size limitations and new higher ranking accounts enter the queue.</p>',26),h=[c];function d(l,u,p,m,g,f){return a(),t("div",null,h)}const _=e(s,[["render",d]]);export{b as __pageData,_ as default};
