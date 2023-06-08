import{_ as a,c as e,o as t,V as o}from"./chunks/framework.b4c71460.js";const C=JSON.parse('{"title":"Using cleos","description":"","frontmatter":{"title":"Using cleos","deploy":["staging","mainnet"],"order":-99997,"oultine":[0,4]},"headers":[],"relativePath":"guides/Basics/using-cleos.md","lastUpdated":null}'),s={name:"guides/Basics/using-cleos.md"},n=o('<h1 id="using-cleos" tabindex="-1">Using cleos <a class="header-anchor" href="#using-cleos" aria-label="Permalink to &quot;Using cleos&quot;">​</a></h1><p>With <code>cleos</code>, developers and users can interact with Ultra&#39;s blockchain network by executing various commands. Some of the common operations that can be performed using cleos include:</p><ul><li>Account management: Creating, modifying, and managing user accounts on the EOSIO blockchain.</li><li>Contract deployment: Compiling and deploying smart contracts onto the blockchain network.</li><li>Interacting with smart contracts: Sending actions to smart contracts and querying their state.</li><li>Transaction management: Creating, signing, and broadcasting transactions to the blockchain.</li><li>Blockchain data queries: Retrieving information about blocks, transactions, accounts, and other data on the blockchain.</li></ul><p>By utilizing the <code>cleos</code> command-line tool, developers can automate interactions with Ultra&#39;s blockchain network, build DApps, and integrate web3 functionality into their applications.</p><p>These sections are written with the assumption that you have started a local chain with <code>ultratest</code>. See <a href="./start-local-chain.html">Start Local Chain</a> for further information if you have not.</p><h2 id="key-generation-and-wallets" tabindex="-1">Key Generation and Wallets <a class="header-anchor" href="#key-generation-and-wallets" aria-label="Permalink to &quot;Key Generation and Wallets&quot;">​</a></h2><p>Ultratest comes with a <code>default</code> wallet which you can display with the command</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">more</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/ultratest/wallet.txt</span></span></code></pre></div><p>To learn more about wallets and how to use them from the command line, we recommend that you <a href="./../../learn/Blockchains/wallets.html">read through our section on Wallets</a>.</p><p>The basic process is simply:</p><ol><li>Generate keys</li><li>Create a wallet</li><li>Open the wallet</li><li>Unlock the wallet</li></ol><p>Then you&#39;ll be able to use it to do things like creating accounts or signing transactions.</p><h2 id="account-creation" tabindex="-1">Account Creation <a class="header-anchor" href="#account-creation" aria-label="Permalink to &quot;Account Creation&quot;">​</a></h2><p>Ultra has a <a href="./../../learn/Blockchains/accounts-and-permissions.html">few different types of accounts</a> that are available for creation. In short, there are:</p><ul><li>EBA accounts - These are created by the Ultra client on Mainnet and Testnet. They are non-custodial, recoverable accounts.</li><li>Non-EBA accounts - These are created by users and developers who wish to self-manage their keys.</li><li>Premium accounts - These are custom names reserved for Ultra and their partners.</li></ul><p>For your local chain, you&#39;ll be creating a <strong>non-EBA account</strong>. You can do so with the cleos command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">newnonebact</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;creator&quot;:&quot;default&quot;, &quot;owner&quot;:{&quot;threshold&quot;:1,&quot;keys&quot;:[{&quot;key&quot;:&quot;YOURPRIVATEKEY&quot;,&quot;weight&quot;:1}],&quot;accounts&quot;:[],&quot;waits&quot;:[]}, &quot;active&quot;:{&quot;threshold&quot;:1,&quot;keys&quot;:[{&quot;key&quot;:&quot;PUBLICKEY&quot;,&quot;weight&quot;:1}],&quot;accounts&quot;:[],&quot;waits&quot;:[]}, &quot;max_payment&quot;:&quot;1.00000000 UOS&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span></code></pre></div><p>To perform the account creation transaction, you&#39;ll need to have enough UOS to cover the RAM cost associated with account creation.</p><h2 id="transferring-tokens" tabindex="-1">Transferring Tokens <a class="header-anchor" href="#transferring-tokens" aria-label="Permalink to &quot;Transferring Tokens&quot;">​</a></h2><p>Open and unlock your wallet.</p><p>To transfer tokens you run the command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">transfer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;myaccount&quot;, &quot;recipientacc&quot;, &quot;10.00000000 UOS&quot;, &quot;Memo message&quot;]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myaccount@active</span></span></code></pre></div><h2 id="publishing-a-contract" tabindex="-1">Publishing a Contract <a class="header-anchor" href="#publishing-a-contract" aria-label="Permalink to &quot;Publishing a Contract&quot;">​</a></h2><p>Open and unlock your wallet.</p><p>To publish a contract you run the command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">account_nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">contract_wasm_fil</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">account_nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">@active</span></span></code></pre></div><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h2><p>On Ultra, tables are a fundamental concept used for storing and organizing data within smart contracts. Tables act as a persistent data storage mechanism, allowing contracts to store, retrieve, and modify structured data on the blockchain.</p><p>Tables consist of rows and columns. Each row represents a record or an entry, and each column represents a field or a piece of data associated with that record.</p><p>They are commonly used to store various types of information, such as user accounts, token balances, transaction histories, game data, or any other structured data relevant to the contract&#39;s functionality. Contracts define their own custom tables, specifying the fields and their types. A table also includes an index, which allows for efficient querying and retrieval of data.</p><p>The data stored in tables is persistent on the blockchain. It remains available even after the execution of a contract&#39;s actions or transactions.</p><p>Smart contracts can read, modify, and delete data in tables. This allows for the creation of decentralized applications with complex business logic that can interact with and update the stored data.</p><p>Tables have a scope, which defines the context in which the data is stored. Each row in a table has a primary key, which is a unique identifier for that specific row. The combination of scope and primary key allows contracts to organize and retrieve data efficiently.</p><p>Tables can have one or more indexes defined on specific fields. Indexes enhance the performance of data retrieval by enabling faster search and filtering capabilities.</p><p>Storing data in tables consumes RAM resources on the EOSIO network. Contracts typically need to manage their RAM usage efficiently to avoid running out of resources.</p><h3 id="reading-table-data-with-cleos" tabindex="-1">Reading Table Data with Cleos <a class="header-anchor" href="#reading-table-data-with-cleos" aria-label="Permalink to &quot;Reading Table Data with Cleos&quot;">​</a></h3><p>To read table row data in EOSIO, you can use the EOSIO database API functions available within your smart contract.</p><h4 id="read-the-table-row-data" tabindex="-1">Read the table row data <a class="header-anchor" href="#read-the-table-row-data" aria-label="Permalink to &quot;Read the table row data&quot;">​</a></h4><p>To read table row data using <code>cleos</code> on Ultra, you can use the get table command.</p><p>Here&#39;s how you can do it:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">contract_accoun</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">scop</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">table_nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li><code>&lt;contract_account&gt;</code>: The EOSIO account associated with the smart contract containing the table.</li><li><code>&lt;scope&gt;</code>: The scope or context in which the table data is stored. It determines the subset of data you want to retrieve.</li><li><code>&lt;table_name&gt;</code>: The name of the table you want to read.</li></ul><p>Replace <code>&lt;contract_account&gt;</code>, <code>&lt;scope&gt;</code>, and <code>&lt;table_name&gt;</code> with the actual values specific to your contract and table.</p><p>For example, if you want to read the accounts table of the eosio.token contract on the EOS mainnet, you can use the following command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myaccount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">accounts</span></span></code></pre></div><p>This command retrieves the table data for the <code>accounts</code> table in the <code>eosio.token</code> contract, scoped to the account <code>myaccount</code>.</p><p>The output will display the table row data in JSON format, including all the rows and their associated fields.</p><p>Note: The <code>get table</code> command retrieves the entire table, so it may take some time to display the output if the table has a large number of rows. If you only need specific rows or want to filter the results, you can use additional options like <code>--lower</code>, <code>--upper</code>, or <code>--index</code> with the <code>get table</code> command. Check the cleos documentation for more details on these options.</p><p>Using the <code>get table</code> command in cleos, you can conveniently retrieve and view table row data on the EOSIO blockchain without the need for direct smart contract interaction.</p><h3 id="using-scope" tabindex="-1">Using Scope <a class="header-anchor" href="#using-scope" aria-label="Permalink to &quot;Using Scope&quot;">​</a></h3><p>When using <code>cleos</code> to interact with Ultra table data, you can specify the scope parameter to retrieve table data associated with a specific scope. Here&#39;s how you can use scope with <code>cleos</code> to query table data:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">contract_accoun</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">scop</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">table_nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li><code>&lt;contract_account&gt;</code>: The EOSIO account associated with the smart contract containing the table.</li><li><code>&lt;scope&gt;</code>: The scope or context in which the table data is stored. It determines the subset of data you want to retrieve.</li><li><code>&lt;table_name&gt;</code>: The name of the table you want to query.</li></ul><p>Replace <code>&lt;contract_account&gt;</code>, <code>&lt;scope&gt;</code>, and <code>&lt;table_name&gt;</code> with the actual values specific to your contract and table.</p><p>For example, if you want to retrieve the table data with a scope of &quot;myaccount&quot; from the <code>accounts</code> table of the <code>eosio.token</code> contract on the EOS mainnet, you can use the following command:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.token</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myaccount</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">accounts</span></span></code></pre></div><p>This command retrieves the table data for the <code>accounts</code> table in the <code>eosio.token</code> contract, specifically scoped to the account name &quot;myaccount&quot;.</p><p>The output will display the table row data in JSON format, including all the rows and their associated fields that match the specified scope.</p><p>By providing the desired scope parameter in the <code>get table</code> command, you can retrieve table data associated with a specific scope using <code>cleos</code>. This allows you to access and view subsets of data within the table based on your defined scopes.</p>',59),l=[n];function c(r,i,p,d,h,u){return t(),e("div",null,l)}const m=a(s,[["render",c]]);export{C as __pageData,m as default};
