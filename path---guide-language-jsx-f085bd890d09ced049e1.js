webpackJsonp([28],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-jsx.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:1}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/language/array.md",childMarkdownRemark:{frontmatter:{title:"Array",order:90}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:110}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:130}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:100}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:170}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list.md",childMarkdownRemark:{frontmatter:{title:"List",order:80}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:10}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:180}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types!",order:120}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant",order:70}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}}]},file:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{html:'<p>Would you like some HTML syntax in your Reason? If not, quickly skip over this section and pretend you\'ve seen nothing!</p>\n<p>Reason supports the JSX syntax, with some slight differences compared to the one in <a href="https://facebook.github.io/react/docs/introducing-jsx.html">ReactJS</a>. JSX tags translate to function calls as shown in these examples:</p>\n<p>Capitalized tag:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">MyComponent</span> foo=bar /&gt;</code></pre>\n      </div>\n<p>becomes</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-type">MyComponent</span>.make foo::bar children::[] ()</code></pre>\n      </div>\n<p>Lowercase tag:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;div foo=bar&gt;child1 child2&lt;/div&gt;</code></pre>\n      </div>\n<p>becomes</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>div foo::bar children::[child1, child2] () [@<span class="hljs-type">JSX</span>]</code></pre>\n      </div>\n<p>The <code>[@JSX]</code> syntax attribute can be safely ignored; it\'s a hook for potential\nppx macros to spot them and syntactically transform the preceeding expression\ninto something else. This way, everyone gets to benefit the JSX syntax without\nneeding to opt into a specific library using it, e.g. React.</p>\n<p>Some departures from JS JSX: Children text needs to be converted to a React element.\nThis is done using <code>ReasonReact.stringToElement "string"</code>. Attributes\ndon\'t mandate curly braces, unless they\'re complex expressions (in which case\nthey\'re formatted to parentheses).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">NoCurlyBraces</span>\n  booleanAttribute=<span class="hljs-literal">true</span>\n  stringAttribute=<span class="hljs-string">"string"</span>\n  intAttribute=<span class="hljs-number">1</span>\n  floatAttribute=<span class="hljs-number">0.1</span>\n  forcedOptional=?(<span class="hljs-type">Some</span> <span class="hljs-string">"hello"</span>)\n  onClick={updater handleClick}\n  thisWorksToo=(updater handleClick)&gt;\n  (<span class="hljs-type">ReasonReact</span>.stringToElement <span class="hljs-string">"foo bar"</span>)\n&lt;/<span class="hljs-type">NoCurlyBraces</span>&gt;</code></pre>\n      </div>\n<p>There is also support for punning!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>&lt;div foo /&gt; <span class="hljs-comment">/* same as &lt;div foo=foo /&gt; */</span></code></pre>\n      </div>\n<p>Note that this would translate to <code>foo=true</code> within JSX in JS code.</p>\n<p>There is no support for JSX spread attributes.</p>\n<p>JSX calls supports the features of <a href="#basics-function">labeled functions</a>: optional, explicitly passed optional and optional with default.</p>',frontmatter:{title:"JSX"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/jsx.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-jsx-f085bd890d09ced049e1.js.map