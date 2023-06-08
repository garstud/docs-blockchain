import{_ as s,c as a,o as n,V as l}from"./chunks/framework.f1490fb9.js";const C=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{"title":"Getting Started","deploy":["staging","mainnet"],"order":-9999,"outline":[0,4]},"headers":[],"relativePath":"guides/Docker/getting-started.md","lastUpdated":1686234101000}'),o={name:"guides/Docker/getting-started.md"},p=l(`<h1 id="docker-quickstart" tabindex="-1">Docker Quickstart <a class="header-anchor" href="#docker-quickstart" aria-label="Permalink to &quot;Docker Quickstart&quot;">​</a></h1><p>The goal of this document is to get a development environment setup in as little time as possible.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/desktop/windows/install/" target="_blank" rel="noreferrer">Docker for Windows</a></li><li><a href="https://docs.docker.com/engine/install/ubuntu/" target="_blank" rel="noreferrer">Docker for Linux</a></li><li><a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git for Windows / Linux</a><ul><li>Ensure that you install Git Bash</li></ul></li><li><a href="https://github.com/ultraio/blockchain-development-tools" target="_blank" rel="noreferrer">Clone Ultra Blockchain Dev Tools</a></li></ul><h2 id="obtaining-the-docker-image" tabindex="-1">Obtaining the Docker Image <a class="header-anchor" href="#obtaining-the-docker-image" aria-label="Permalink to &quot;Obtaining the Docker Image&quot;">​</a></h2><p>Pull the docker image down from quay.io</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><p><em>The above image tag may be out of date. Visit <a href="https://quay.io/ultra.io/3rdparty-devtools" target="_blank" rel="noreferrer">our official quay.io repository</a> to get the latest image tag.</em></p><h2 id="starting-stopping-image" tabindex="-1">Starting / Stopping Image <a class="header-anchor" href="#starting-stopping-image" aria-label="Permalink to &quot;Starting / Stopping Image&quot;">​</a></h2><p>Inside of the <code>blockchain-development-tools</code> directory run the following command to start the image.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/scripts/docker/start_docker.sh</span></span></code></pre></div><p>Alternatively you can optionally specify a full docker image URL with a tag:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/scripts/docker/start_docker.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quay.io/ultra.io/3rdparty-devtools:0.1.1</span></span></code></pre></div><p>To stop existing development docker instance use the stop script</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/scripts/docker/stop_docker.sh</span></span></code></pre></div><h2 id="accessing-the-image" tabindex="-1">Accessing the Image <a class="header-anchor" href="#accessing-the-image" aria-label="Permalink to &quot;Accessing the Image&quot;">​</a></h2><p>If the <code>start_docker</code> script does not attach automatically you can use the following command to get access inside the container.</p><p><strong>Linux</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ultra-dev-environment</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span></code></pre></div><p><strong>Windows</strong></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">winpty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ultra-dev-environment</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span></code></pre></div><h2 id="accessing-docker-volume" tabindex="-1">Accessing Docker Volume <a class="header-anchor" href="#accessing-docker-volume" aria-label="Permalink to &quot;Accessing Docker Volume&quot;">​</a></h2><p>The docker container has a shared directory located somewhere in your operating system.</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir</code></p></li><li><p>Linux: <code>~/ultra_workdir</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir</code></p></li></ul><h2 id="creating-a-smart-contract" tabindex="-1">Creating a Smart Contract <a class="header-anchor" href="#creating-a-smart-contract" aria-label="Permalink to &quot;Creating a Smart Contract&quot;">​</a></h2><p>Create a directory in the <code>ultra_workdir</code> directory called <code>contracts</code> with a file inside called <code>hello.cpp</code>.</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">eosio/eosio.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#89DDFF;">]]</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">hello</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">public</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#F78C6C;">using</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">contract</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">contract</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">action</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">world</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">name</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> name</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="compiling-a-smart-contract" tabindex="-1">Compiling a Smart Contract <a class="header-anchor" href="#compiling-a-smart-contract" aria-label="Permalink to &quot;Compiling a Smart Contract&quot;">​</a></h3><p>Inside of the docker image navigate into the <code>contracts</code> directory, and run the following command.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/ultra_workdir/contracts</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">eosio-cpp -abigen -o hello.wasm hello.cpp</span></span></code></pre></div><h2 id="writing-your-first-test" tabindex="-1">Writing your first test <a class="header-anchor" href="#writing-your-first-test" aria-label="Permalink to &quot;Writing your first test&quot;">​</a></h2><h3 id="setup-directory-structure" tabindex="-1">Setup directory Structure <a class="header-anchor" href="#setup-directory-structure" aria-label="Permalink to &quot;Setup directory Structure&quot;">​</a></h3><p>This directory structure should be reflected inside of the docker image.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/opt</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">/ultra_workdir</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">/contracts</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.wasm</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.abi</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.cpp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">/tests</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.ultra_test.js</span></span></code></pre></div><h3 id="write-tests" tabindex="-1">Write Tests <a class="header-anchor" href="#write-tests" aria-label="Permalink to &quot;Write Tests&quot;">​</a></h3><p>Test files are written in JavaScript and must have <code>ultra_test.js</code> suffix.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Deploys ultra system contracts to the nodeos instance</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">requiresSystemContracts</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// What account to create, and what contract to deploy on it</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">importContracts</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> account</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">smrtcntract1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../contracts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> contract</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Created after importing contracts</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">requiredAccounts</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tests</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">assert</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">endpoint</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">cleos</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">rpc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">api</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ecc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">keychain</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">assert</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This will never trigger because it is true.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// Should always return an object of async tests</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">should execute transaction</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    actions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        account</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">smrtcntract1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// The smart contract account</span></span>
<span class="line"><span style="color:#F07178;">                        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Name of the action</span></span>
<span class="line"><span style="color:#F07178;">                        authorization</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">                            </span><span style="color:#676E95;font-style:italic;">// actor -&gt; The account performing the action</span></span>
<span class="line"><span style="color:#89DDFF;">                            </span><span style="color:#676E95;font-style:italic;">// permission -&gt; Permission required for that account. Usually &#39;active&#39;.</span></span>
<span class="line"><span style="color:#F07178;">                            </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> actor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> permission</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;font-style:italic;">// This is an exact match of the data to send to the &#39;action&#39;.</span></span>
<span class="line"><span style="color:#89DDFF;">                        </span><span style="color:#676E95;font-style:italic;">// In the example below the &#39;hello&#39; action will take a name parameter.</span></span>
<span class="line"><span style="color:#F07178;">                        data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                            name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">account1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},{</span><span style="color:#F07178;"> blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="running-tests" tabindex="-1">Running Tests <a class="header-anchor" href="#running-tests" aria-label="Permalink to &quot;Running Tests&quot;">​</a></h3><p>Inside of the docker image run the following commands.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/ultra_workdir</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ultratest -D</span></span></code></pre></div><p>If you are experiencing issues with deployment try appending <code>-P</code> as a parameter.</p>`,43),e=[p];function t(c,r,i,y,F,D){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{C as __pageData,h as default};
