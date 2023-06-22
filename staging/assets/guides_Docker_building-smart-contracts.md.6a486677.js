import{_ as e,c as a,o as s,V as o}from"./chunks/framework.dfdac305.js";const l="/staging/images/vscode-eosio-token-contract-build.png",C=JSON.parse('{"title":"Building Smart Contracts","description":"","frontmatter":{"title":"Building Smart Contracts","deploy":["staging","mainnet"],"order":-9990,"outline":[0,4],"prev":false},"headers":[],"relativePath":"guides/Docker/building-smart-contracts.md","lastUpdated":null}'),n={name:"guides/Docker/building-smart-contracts.md"},t=o(`<h1 id="building-smart-contracts" tabindex="-1">Building Smart Contracts <a class="header-anchor" href="#building-smart-contracts" aria-label="Permalink to &quot;Building Smart Contracts&quot;">​</a></h1><p>A smart contract is written in C++ but compiled into WASM.</p><p>Developers must have some knowledge in C++ to write smart contracts for the Ultra Blockchain.</p><h2 id="hello-world-smart-contract" tabindex="-1">Hello World Smart Contract <a class="header-anchor" href="#hello-world-smart-contract" aria-label="Permalink to &quot;Hello World Smart Contract&quot;">​</a></h2><p>Recommended to setup a <a href="./development-environment.html">VSCode Environment</a> before moving forward.</p><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>Create a directory called <code>hello</code> inside of any of the following directories:</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir\\\\hello</code></p></li><li><p>Linux: <code>~/ultra_workdir/hello</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir/hello</code></p></li></ul><p><em>Additional permissions may be required to create the directory.</em></p><h3 id="create-hello-cpp" tabindex="-1">Create hello.cpp <a class="header-anchor" href="#create-hello-cpp" aria-label="Permalink to &quot;Create hello.cpp&quot;">​</a></h3><p>Navigate to the following directory.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /opt/ultra_workdir/hello</span></span></code></pre></div><p>Create the file <code>hello.cpp</code> inside of the <code>hello</code> directory.</p><p>Then place the following content inside of <code>hello.cpp</code> and ensure you save the file.</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">eosio/eosio.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#89DDFF;">]]</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">hello</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">public</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#F78C6C;">using</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">contract</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">[[</span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">action</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">hi</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">name</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">user</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> user</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p><em>Above is Content for <code>hello.cpp</code></em></p><h2 id="eosio-cpp-binary" tabindex="-1">eosio-cpp binary <a class="header-anchor" href="#eosio-cpp-binary" aria-label="Permalink to &quot;eosio-cpp binary&quot;">​</a></h2><p>There is a single binary which is included with our docker image.</p><h3 id="what-is-it" tabindex="-1">What is it? <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;What is it?&quot;">​</a></h3><ul><li>A clang-based WASM compiler and ABI generator tool</li><li>Must be ran anywhere inside of the docker image</li></ul><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">eosio-cpp -help</span></span></code></pre></div><h2 id="compiling-a-smart-contract" tabindex="-1">Compiling a Smart Contract <a class="header-anchor" href="#compiling-a-smart-contract" aria-label="Permalink to &quot;Compiling a Smart Contract&quot;">​</a></h2><p>Using the above <code>hello.cpp</code> file we can utilize <code>eosio-cpp</code> to compile it.</p><p>Run the following command <strong>inside the docker image</strong>.</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">eosio</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cpp hello</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cpp</span></span></code></pre></div><p>Three files should be created in the <code>hello</code> directory.</p><ul><li>hello.cpp <ul><li>This is the source code of an example smart contract.</li></ul></li><li>hello.abi <ul><li>This file describes the interface of the smart contract.</li></ul></li><li>hello.wasm <ul><li>This is a compiled Web Assembly smart contract.</li></ul></li></ul><p>After compiling the smart contract there are two options for deployment in the local development environment.</p><ul><li><a href="./ultratest.html">Deploy with &#39;ultratest&#39; framework</a></li><li><a href="./cleos.html#deploying-a-smart-contract">&#39;cleos&#39; based contract deployment</a></li></ul><h2 id="cmake" tabindex="-1">CMake <a class="header-anchor" href="#cmake" aria-label="Permalink to &quot;CMake&quot;">​</a></h2><p>When building smart contracts, developers may have more than one file. While <code>eosio-cpp</code> provides the basics, it is recommended to use CMake for anything more complex than single file.</p><p>We will try compiling the <code>eosio.token</code> contract in this example.</p><h3 id="preparations" tabindex="-1">Preparations <a class="header-anchor" href="#preparations" aria-label="Permalink to &quot;Preparations&quot;">​</a></h3><p>Create a directory called <code>eosio.token</code> in one of the following locations:</p><ul><li><p>Windows: <code>C:\\\\Users\\\\Username\\\\ultra_workdir\\\\eosio.token</code></p></li><li><p>Linux: <code>~/ultra_workdir/eosio.token</code></p></li><li><p>Docker Container: <code>/opt/ultra_workdir/eosio.token</code></p></li></ul><p>After creating the directory, create directories inside of <code>eosio.token</code> with the following paths:</p><ul><li><code>eosio.token/include/eosio.token</code></li><li><code>eosio.token/src</code></li></ul><p>Obtain the following files from <a href="./../../examples/eosio.token.html">the following markdown page</a> and append the content from each section in their own corresponding file.</p><h3 id="example-folder-structure" tabindex="-1">Example Folder Structure <a class="header-anchor" href="#example-folder-structure" aria-label="Permalink to &quot;Example Folder Structure&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/opt/ultra_workdir/eosio.token/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- CMakeLists.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- include/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |  |- eosio.token/</span></span>
<span class="line"><span style="color:#A6ACCD;">    |     |- eosio.token.hpp</span></span>
<span class="line"><span style="color:#A6ACCD;">    |- src/</span></span>
<span class="line"><span style="color:#A6ACCD;">        |- eosio.token.cpp</span></span></code></pre></div><h3 id="building-with-the-wrapper-script" tabindex="-1">Building with the Wrapper Script <a class="header-anchor" href="#building-with-the-wrapper-script" aria-label="Permalink to &quot;Building with the Wrapper Script&quot;">​</a></h3><p>Inside of the docker image there is a script called <code>build_contracts</code> which can be ran from anywhere inside of the docker image.</p><p>This script will create a build folder and put build artifacts (wasm and abi files) in the folder.</p><p>Run the following command in any folder.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">build_contracts</span></span></code></pre></div><p>If everything is setup correctly the script will automatically tap into the <code>CMakeLists.txt</code> and build your contract.</p><p><img src="`+l+`" alt=""></p><br><h2 id="additional-files-with-cmake" tabindex="-1">Additional Files with CMake <a class="header-anchor" href="#additional-files-with-cmake" aria-label="Permalink to &quot;Additional Files with CMake&quot;">​</a></h2><p>CMake has a handful of functions that can be placed inside of a <code>CMakeLists.txt</code> file to include other files, and folders.</p><hr><p><code>target_include_directories(target PUBLIC dir_list)</code></p><blockquote><p>Specifies include directories to use when compiling a given target.</p></blockquote><p><strong>Example</strong></p><p>This example shows how to include other folders.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">target_include_directories(mycontract </span></span>
<span class="line"><span style="color:#A6ACCD;">    PUBLIC </span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_SOURCE_DIR}/include </span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_SOURCE_DIR}/common/include </span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_SOURCE_DIR}/mycontract_specific/include)</span></span></code></pre></div><hr><p><code>add_contract</code></p><blockquote><p>Used to build your smart contract and generate an ABI, the first parameter is the contract name, the second is the cmake target name, and the rest are the CPP files needed to build the contract.</p></blockquote><p><strong>Example</strong></p><p>This example shows how to include additional <code>.cpp</code> source files.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">add_contract(mycontract mycontract </span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_SOURCE_DIR}/src/a.cpp </span></span>
<span class="line"><span style="color:#A6ACCD;">    \${CMAKE_CURRENT_SOURCE_DIR}/src/b.cpp)</span></span></code></pre></div><hr><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><p>Any errors encountered during builds or deployment can potentially have solutions in our <a href="./troubleshooting.html">troubleshooting section</a>.</p>`,66),p=[t];function i(r,c,d,h,u,m){return s(),a("div",null,p)}const g=e(n,[["render",i]]);export{C as __pageData,g as default};
