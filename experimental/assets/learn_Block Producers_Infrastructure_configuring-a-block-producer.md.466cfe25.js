import{_ as s,c as a,o as n,V as l}from"./chunks/framework.f1490fb9.js";const p="/experimental/images/example-peering.png",d=JSON.parse('{"title":"Configuration","description":"","frontmatter":{"title":"Configuration","deploy":["staging","mainnet"],"outline":[0,4],"order":-95},"headers":[],"relativePath":"learn/Block Producers/Infrastructure/configuring-a-block-producer.md","lastUpdated":1686234101000}'),o={name:"learn/Block Producers/Infrastructure/configuring-a-block-producer.md"},e=l(`<h1 id="configuration-for-block-production" tabindex="-1">Configuration for Block Production <a class="header-anchor" href="#configuration-for-block-production" aria-label="Permalink to &quot;Configuration for Block Production&quot;">​</a></h1><p>Each Block Producer instance should use this document to configure their networking and to ensure a secure connection between all other Block Producers. We use a service called <a href="https://www.wireguard.com/" target="_blank" rel="noreferrer">Wireguard</a>, a private VPN.</p><h2 id="setting-up-wireguard-vpn" tabindex="-1">Setting up Wireguard VPN <a class="header-anchor" href="#setting-up-wireguard-vpn" aria-label="Permalink to &quot;Setting up Wireguard VPN&quot;">​</a></h2><p>Wireguard software will be used to connect the nodes (instances) to each other in a secure, stable, and reliable way.</p><p><strong>Install Wireguard</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">get install software</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">properties</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">common</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">get update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo add</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">apt</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">repository </span><span style="color:#FFCB6B;">ppa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">wireguard</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wireguard</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install wireguard</span></span></code></pre></div><p><strong>Install resolvconf</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install resolvconf</span></span></code></pre></div><p>Create a directory for your producer data and cd into it.</p><p><strong>Generate Keys</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wg genkey </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> tee wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">private</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> wg pubkey </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">public</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Run the following to print the data to the console</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">cat wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">public</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span></span>
<span class="line"><span style="color:#A6ACCD;">cat wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">private</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span></span></code></pre></div><p><strong>Setup wireguard interface</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo vim </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wireguard</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ultra_nodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span></span>
<span class="line"><span style="color:#A6ACCD;">OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wireguard</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ultra_nodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span></span></code></pre></div><p>Ultra will provide an example of this configuration.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[interface]</span></span>
<span class="line"><span style="color:#A6ACCD;">Address </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#A6ACCD;">ListenPort </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45888</span></span>
<span class="line"><span style="color:#A6ACCD;">DNS </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">PrivateKey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> YOUR WIREGUARD PRIVATE KEY</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># Producer</span></span>
<span class="line"><span style="color:#A6ACCD;">[Peer]</span></span>
<span class="line"><span style="color:#A6ACCD;">PublicKey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> YOUR WIREGUARD PUBLIC KEY</span></span>
<span class="line"><span style="color:#A6ACCD;">AllowedIPs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#A6ACCD;"># YOUR PUBLIC IP FOR LINUX</span></span>
<span class="line"><span style="color:#A6ACCD;"># </span><span style="color:#FFCB6B;">RUN</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;"># curl icanhazip</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com</span></span>
<span class="line"><span style="color:#A6ACCD;">Endpoint </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ip</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">45888</span></span>
<span class="line"><span style="color:#A6ACCD;">PersistentKeepalive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># API</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">SEED</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">[Peer]</span></span>
<span class="line"><span style="color:#A6ACCD;">PublicKey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> 1vBm7TyQl2KHgU</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pG</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">AllowedIPs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">1.2</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#A6ACCD;">Endpoint </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35.224</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">180.12</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">45888</span></span>
<span class="line"><span style="color:#A6ACCD;">PersistentKeepalive </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># API</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">SEED</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">[Peer]</span></span>
<span class="line"><span style="color:#A6ACCD;">PublicKey </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> jOYj5L97khV10o0zHzv2</span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">AllowedIPs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">192.168</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">1.3</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">32</span></span>
<span class="line"><span style="color:#A6ACCD;">Endpoint </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">35.189</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">216.255</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">4</span></span></code></pre></div><p><strong>Start the VPN</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">quick up </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">yourpath</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">interface_name</span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>If you ever find yourself <strong>needing to stop</strong> wireguard; this can be done by running:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">wg</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">quick down </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">yourpath</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">interface_name</span><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>Check the connection</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo wg show</span></span></code></pre></div><p>Respectively you should see the following or similar if you have a peer added other than yourself.</p><p><img src="`+p+`" alt=""></p><p>Add the path of the nodeos binaries to your PATH environment variable, if you haven’t already.</p><ol><li><p>Create a new folder for the network (eg.: ultranet)</p></li><li><p>Create a folder for the kind of node (Eg.: producer, api...)</p></li><li><p>Create logs folder</p></li><li><p>Create a config.ini provided by Ultra</p></li><li><p>Copy startup.sh and stop.sh scripts provided by Ultra</p></li><li><p>Get the genesis.json file</p></li></ol><p><strong>Note</strong></p><ul><li><p>Always use the startup.sh / stop.sh or nodeos-launcher scripts to manipulate nodeos.</p></li><li><p>For every instance (producers, APIs), you must run nodeos for the first time with --genesis-json option.</p></li></ul><p><strong>Only if running an API/Seed instance</strong></p><p>Install nginx</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install nginx</span></span></code></pre></div><p>Configure server to run at port 80</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo vim </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sites</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">available</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">OR</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo nano </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sites</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">available</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">default</span></span></code></pre></div><p><strong>Example Configuration</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">80</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;"> [::]:</span><span style="color:#F78C6C;">80</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">default_server</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">external_server_ip</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">v1</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">proxy_pass</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//127.0.0.1:8888/v1/;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">home</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ubuntu</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ultra_testnet</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">               # </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra testnet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Enable the nginx service</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl enable nginx</span></span></code></pre></div><p>Start the service</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo systemctl start nginx</span></span>
<span class="line"><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;">sudo nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">s reload </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> reload service </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">of</span><span style="color:#A6ACCD;"> any config change</span><span style="color:#89DDFF;">**</span></span></code></pre></div><p><em>sudo nginx -s reload -&gt; reload service in case of any config change</em></p><p>Install certbot for nginx (only for API instance)</p><p>Run bot to generate ssl certificates (https - port 443)</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo certbot </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">nginx </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">server_address_or_domain_including_www_if_necessary</span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Check if the nginx config file (default -&gt; /etc/nginx/sites-available/default) was edited by the bot</p><h2 id="configure-the-firewall" tabindex="-1">Configure the Firewall <a class="header-anchor" href="#configure-the-firewall" aria-label="Permalink to &quot;Configure the Firewall&quot;">​</a></h2><p><strong>WARNING!</strong></p><ul><li>Do not activate the firewall before certifying that the ssh port is open, as you could lose access to the server and you&#39;ll have to recreate your instance.</li></ul><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo ufw app list</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Nginx Full</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow </span><span style="color:#F78C6C;">45888</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">udp</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow </span><span style="color:#F78C6C;">9876</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">tcp</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow </span><span style="color:#F78C6C;">22</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> on </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">server_name_any_name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> proto tcp to any port </span><span style="color:#F78C6C;">19876</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># Useful commands</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw status numbered </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> status</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> [id] </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">delete</span><span style="color:#A6ACCD;"> a rule</span></span></code></pre></div><p>Configure a load balancer for the APIs. <a href="https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" target="_blank" rel="noreferrer">Refer to the NGINX documentation for more details.</a></p><h2 id="producer-control-switch" tabindex="-1">Producer Control Switch <a class="header-anchor" href="#producer-control-switch" aria-label="Permalink to &quot;Producer Control Switch&quot;">​</a></h2><p>The Producer Control Switch is a device (normally a PC) that has exclusive access to all the Producers. Its function is to access the producer plugin in order to do operations like stop/pause some producer, switch to the fail over producer, check the producer status, check the peer status and other very important actions related to the producer management.</p><p>The main idea is to have all Block Producer&#39;s producer nodes able to produce (with the producer plugin enabled, signature, etc), but the backup producer will be in pause mode. If something happens to the main producer or some maintenance procedures needs to be done, the Block Producer can switch to the backup producer until the main one is stabilized. This management can be done automatically, using a NodeJS script to handle the main and the backup producer or manually.</p>`,51),t=[e];function r(c,i,y,C,D,A){return n(),a("div",null,t)}const u=s(o,[["render",r]]);export{d as __pageData,u as default};
