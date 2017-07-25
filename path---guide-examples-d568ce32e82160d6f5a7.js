webpackJsonp([39],{"./node_modules/json-loader/index.js!./.cache/json/guide-examples.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}}]},file:{relativePath:"guide/examples.md",childMarkdownRemark:{html:'<p>An example is worth a thousand words.</p>\n<p>This section is dedicated to newcomers trying to figure out general idioms &#x26; conventions in Reason and BuckleScript. If you\'re a beginner who\'s got a good idea for an example, please suggest an edit!</p>\n<h3>Using the <code>option</code> type</h3>\n<p><code>option</code> is a <a href="/guide/language/data-types#variant">variant</a> that comes with the <a href="/api/index.html">standard library</a>. It obviates the need for null values in other languages.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> possiblyNullValue1 = <span class="hljs-type">None</span>;\n<span class="hljs-keyword">let</span> possiblyNullValue2 = <span class="hljs-type">Some</span> <span class="hljs-string">"Hello@"</span>;\n\n<span class="hljs-keyword">switch</span> possiblyNullValue2 {\n| <span class="hljs-type">None</span> =&gt; print_endline <span class="hljs-string">"Nothing to see here."</span>\n| <span class="hljs-type">Some</span> message =&gt; print_endline message\n};</code></pre>\n      </div>\n<h3>Creating a parametrized type</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> universityStudent = {gpa: float};\n\n<span class="hljs-keyword">type</span> response \'studentType = {status: int, student: \'studentType};\n\n<span class="hljs-keyword">let</span> result: response universityStudent = fetchDataFromServer ();</code></pre>\n      </div>\n<h3>Creating a JS Object</h3>\n<p>Assuming you\'re <a href="/guide/javascript">compiling to JS</a>, of course.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> obj1 = {\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>,\n  <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>\n};\n<span class="hljs-comment">/* Compiles to a JS object that looks exactly like what you\'re seeing */</span></code></pre>\n      </div>\n<p>Note that the above isn\'t a record; the keys are quoted in string. That\'s Reason syntax sugar for <a href="http://bucklescript.github.io/bucklescript/Manual.html#_create_js_objects_using_bs_obj">bs.obj</a>. The type is inferred. Next example explicitly types it.</p>\n<h3>Typing a JS Object</h3>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> payload = <span class="hljs-type">Js</span>.t {.\n  name: string,\n  age: int\n};\n<span class="hljs-keyword">let</span> obj1: payload = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"John"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>};</code></pre>\n      </div>\n<p>Note that <code>{. name: string, age: int}</code> is the syntax for a Reason/OCaml object type declaration (not a record!). It\'s lifted into <code>Js.t</code> so that BuckleScript sees the whole type and compiles it correctly to a regular JavaScript object. Ordinary, non-lifted OCaml objects are compiled into something else (rarely needed currently).</p>\n<h3>Binding to a JS Module with Default Export</h3>\n<p>Assuming the module\'s called <code>store.js</code>, and has a default export, plus a method called <code>getDate</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> store = <span class="hljs-type">Js</span>.t {. getDate : (unit =&gt; float) [@bs.meth]};\nexternal store : store = <span class="hljs-string">"./store"</span> [@@bs.<span class="hljs-keyword">module</span>];\n<span class="hljs-type">Js</span>.log store;\n<span class="hljs-type">Js</span>.log (store##getDate ());</code></pre>\n      </div>',frontmatter:{title:"Examples"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/examples.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-examples-d568ce32e82160d6f5a7.js.map