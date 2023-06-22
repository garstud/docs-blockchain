import{_ as s,c as a,o as n,V as l}from"./chunks/framework.965d1348.js";const E=JSON.parse('{"title":"CDT Overview","description":"","frontmatter":{"title":"CDT Overview","deploy":["staging","mainnet"],"order":-99999,"oultine":[0,4],"prev":false},"headers":[],"relativePath":"guides/CDT/index.md","lastUpdated":null}'),o={name:"guides/CDT/index.md"},p=l(`<h1 id="contract-development-kit-cdt" tabindex="-1">Contract Development Kit (CDT) <a class="header-anchor" href="#contract-development-kit-cdt" aria-label="Permalink to &quot;Contract Development Kit (CDT)&quot;">​</a></h1><p>All information about Contract Development Kit on how to develop a smart contract.</p><p>EOSIO.CDT (Contract Development Toolkit) is a toolchain for WebAssembly (WASM) and a set of tools to facilitate smart contract development for the EOSIO platform. In addition to being a general purpose WebAssembly toolchain, EOSIO specific optimizations are available to support building EOSIO smart contracts.</p><p>This toolchain is built around Clang 7, which means that EOSIO.CDT has the most currently available optimizations and analyses from LLVM, but as the WASM target is still considered experimental, some optimizations are incomplete or not available.</p><h2 id="eosio-cpp" tabindex="-1">eosio-cpp <a class="header-anchor" href="#eosio-cpp" aria-label="Permalink to &quot;eosio-cpp&quot;">​</a></h2><p>eosio-cpp is a tool for compiling smart contracts.</p><p>It will compile c++ source code to corresponding compiled binary wasm and generated ABI file.</p><h3 id="common-command-reference" tabindex="-1">Common Command Reference <a class="header-anchor" href="#common-command-reference" aria-label="Permalink to &quot;Common Command Reference&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">USAGE:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio-cpp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fil</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">OPTIONS:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Generic</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-help</span><span style="color:#A6ACCD;">                    </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-help-hidden</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">more</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-help-list</span><span style="color:#A6ACCD;">               </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">available</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">-help-list-hidden</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">more</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-version</span><span style="color:#A6ACCD;">                 </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Display</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">program</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">compiler</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-I=&lt;string&gt;</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-L=&lt;string&gt;</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">library</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-abigen</span><span style="color:#A6ACCD;">                  </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Generate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ABI</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-abigen_output=&lt;string&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ABIGEN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-c</span><span style="color:#A6ACCD;">                       </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preprocess,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compile,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assemble</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">steps</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-contract=&lt;string&gt;</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Contract</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-include=&lt;string&gt;</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">parsing</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-l=&lt;string&gt;</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">library</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">link</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-no-abigen</span><span style="color:#A6ACCD;">               </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ABI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generation</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-o=&lt;string&gt;</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Write</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">fil</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;">                       </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Show</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commands</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">and</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">verbose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">output</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-w</span><span style="color:#A6ACCD;">                       </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Suppress</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">warnings</span></span></code></pre></div><h2 id="useful-links" tabindex="-1">Useful Links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful Links&quot;">​</a></h2><ul><li><a href="./../Docker/docker-image-usage.html">Docker Image Usage</a></li><li><a href="./create-a-contract.html">Create A Contract</a></li><li><a href="./compile-a-contract.html">Compile A Contract</a></li></ul>`,11),e=[p];function t(r,c,C,y,D,A){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{E as __pageData,d as default};
