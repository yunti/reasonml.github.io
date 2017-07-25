webpackJsonp([31],{"./node_modules/json-loader/index.js!./.cache/json/guide-javascript-syntax-cheetsheet.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:11}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}}]},file:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{html:'<p>Reason resembles a typed subset of modern JavaScript (the good parts).</p>\n<p><code>Reason</code>\'s syntax is easy to learn, and if you know modern\n<code>JavaScript</code> you can usually read and make sense of <code>Reason</code> code without\nactually learning <code>Reason</code>.\nThe OCaml language that <code>Reason</code> uses provides many new concepts that\ndeliver a much more expressive, yet often more constrained experience. <code>Reason</code>\nhelps you learn those new concepts more quickly and reap the benefits of the\n<code>OCaml</code> compiler sooner.</p>\n<p>The end result is that <code>Reason</code>:</p>\n<ul>\n<li>Allows writing code that a wide range of developers can <strong>easily read</strong>.</li>\n<li>Can be <strong>mastered quickly</strong>.</li>\n<li>Delivers the true <strong>"if it compiles, it works"</strong> experience pioneered by the <code>ML</code> language.</li>\n<li>Compiles to <strong>bare metal</strong> native binaries, <em>or</em> to <code>JavaScript</code>.</li>\n</ul>\n<h3>Basic Language Primitives</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><pre>\n3\n</pre></td>\n<td><pre>\n3\n</pre></td>\n</tr>\n<tr>\n<td><pre>\n3.1415 \n</pre></td>\n<td><pre>\n 3.1415 \n</pre></td>\n</tr>\n<tr>\n<td><pre>\n"Hello world!" \n</pre></td>\n<td><pre>\n"Hello world!" \n</pre></td>\n</tr>\n<tr>\n<td><pre>\n\'Hello world!\' \n</pre></td>\n<td>Strings must use "</td>\n</tr>\n<tr>\n<td>Characters are strings</td>\n<td><pre>\n\'a\'  \n</pre></td>\n</tr>\n<tr>\n<td><pre>\ntrue\n</pre></td>\n<td><pre>\ntrue \n</pre></td>\n</tr>\n<tr>\n<td><code>[1,2,3]</code></td>\n<td><code>[1,2,3]</code></td>\n</tr>\n<tr>\n<td><pre>\nnull\n</pre></td>\n<td><pre>\n()\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nconst x = y;\n</pre></td>\n<td><pre>\nlet x = y;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nlet x = y;\n</pre></td>\n<td><pre>\nreference cells\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nvar x = y;\n</pre></td>\n<td>No equivalent (thankfully)</td>\n</tr>\n<tr>\n<td><code>[x, ...lst] (linear time)</code></td>\n<td><code>[x, ...lst] (constant time)</code></td>\n</tr>\n<tr>\n<td><code>[...lst, x] (linear time)</code></td>\n<td><pre>\nNot supported\n</pre></td>\n</tr>\n<tr>\n<td><pre>\n{...obj, x: y}\n</pre></td>\n<td><pre>\n{...obj, x: y}\n</pre></td>\n</tr>\n</tbody>\n</table>\n<h3>Basic Operations on Primitives</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><pre>\n1 + 2\n</pre></td>\n<td><pre>\n1 + 2\n</pre></td>\n</tr>\n<tr>\n<td><pre>\n1.0 + 2.0 \n</pre></td>\n<td><pre>\n1.0 +. 2.0 \n</pre></td>\n</tr>\n<tr>\n<td><pre>\n"hello " + "world" \n</pre></td>\n<td><pre>\n"hello " ^ "world" \n</pre></td>\n</tr>\n</tbody>\n</table>\n<h3>Objects and Records</h3>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>"Objects"</td>\n<td>"Records"</td>\n</tr>\n<tr>\n<td>no static types</td>\n<td><pre>\ntype point = {x: int, mutable y: int};\n</pre></td>\n</tr>\n<tr>\n<td><pre>\n{x: 30, y: 20}\n</pre></td>\n<td><pre>\n{x: 30, y: 20}\n</pre></td>\n</tr>\n<tr>\n<td><pre>\npoint.x\n</pre></td>\n<td><pre>\npoint.x\n</pre></td>\n</tr>\n<tr>\n<td><pre>\npoint.y = 30;\n</pre></td>\n<td><pre>\npoint.y = 30;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\n{...point, x: 30}\n</pre></td>\n<td><pre>\n{...point, x: 30}\n</pre></td>\n</tr>\n</tbody>\n</table>\n<h3>Blocks</h3>\n<p>In <code>Reason</code>, "sequence expressions" are created with <code>{}</code> and evaluate to their\nlast statement. In <code>JavaScript</code>, this can be simulated via a temporary variable\nwhich must be created in an invalid state, then later mutated.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nlet res = undefined;\n{\n  const x = 23;\n  const y = 34;\n  res = x + y;\n};</pre>\n    </td>\n    <td>\n      <pre>\nlet res = {\n  let x = 23;\n  let y = 34;\n  x + y\n};</pre>\n    </td>\n  </tr>\n</table>\n<h3>Lambdas</h3>\n<p><code>JavaScript</code> has two different kinds of functions, whereas <code>Reason</code> only has one.</p>\n<blockquote>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><pre>\narg => retVal  \n</pre></td>\n<td><pre>\nfun arg => retVal\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nfunction named(arg) {...}</td>\n<td></td>\n</tr>\n<tr>\n<td><pre>\nlet f = function named(arg) {...}</td>\n<td></td>\n</tr>\n</tbody>\n</table>\n</blockquote>\n<p>The primary difference between modern (ES6) <code>JavaScript</code> and <code>Reason</code> lambdas is that\n<code>Reason</code> lambdas begin with the word <code>fun</code>. This is simply to assist in visual\nunderstanding of the meaning of a function when it has a very large destructured\nargument.</p>\n<blockquote>\n<table>\n<thead>\n<tr>\n<th>JavaScript</th>\n<th>Reason</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><pre>\nconst incr = x => x + 1;\n</pre></td>\n<td><pre>\nlet incr = fun x => x + 1;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nconst five = incr(4);\n</pre></td>\n<td><pre>\nlet five = incr 4;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nconst add = (x, y) => x+y;\n</pre></td>\n<td><pre>\nlet add = fun x y => x+y;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nconst x = add(3, 4);\n</pre></td>\n<td><pre>\nlet x = add 3 4;\n</pre></td>\n</tr>\n<tr>\n<td><pre>\nconst y = add(3, add(0, 1));\n</pre></td>\n<td><pre>\nlet y = add 3 (add 0 1);\n</pre></td>\n</tr>\n</tbody>\n</table>\n</blockquote>\n<p>Like <code>JavaScript</code>, <code>Reason</code> allows any expression on the right hand side of the\nlambda <code>=></code>.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nconst add = (x, y) =>\n  x + x + y + y;\n      </pre>\n    </td>\n    <td>\n      <pre>\nlet add = fun (x, y) =>\n  x + x + y + y;\n      </pre>\n    </td>\n  </tr>\n</table>\n<p>However, <code>JavaScript</code> allows lambdas to return <code>{}</code> blocks <em>instead</em> of expressions, by way of a <code>return</code>\nstatement wrapped in <code>{}</code> braces. With <code>Reason</code>, <code>{}</code> blocks are <em>already</em> expressions, so <code>Reason</code> doesn\'t\nrequire two modes for lambda - all lambdas in <code>Reason</code> have expressions on the right hand side of the <code>=></code>,\nand some of those expressions coincidentally resemble "function bodies" in <code>{}</code> braces.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nconst myFun = (x, y) => {\n  const doubleX = x + x;\n  const doubleY = y + y;\n  return doubleX + doubleY\n};</pre>\n    </td>\n    <td>\n      <pre>\nlet myFun = fun (x, y) => {\n  let doubleX = x + x;\n  let doubleY = y + y;\n  doubleX + doubleY\n};</pre>\n    </td>\n  </tr>\n</table>\n<p>When using <code>Reason</code> every function accepts a single argument. In this example,\nthat single argument happens to be a destructured tuple. This appears very\nsimilar to the <code>JavaScript</code> arguments. However, the difference is apparent\nwhen supplying those arguments as first class. In <code>JavaScript</code>, arguments\nare an array, and supplying <em>all</em> of the arguments requires <code>.apply</code>.\nIn <code>Reason</code>, you may simply supply the tuple.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nlet add = (x, y) =>\n  x + x + y + y;\nlet result = add (1, 2);\nlet myArgs = [1, 2];\nlet result = add.apply(null, myArgs);</pre>\n    </td>\n    <td>\n      <pre>\nlet add = fun (x, y) =>\n  x + x + y + y;\nlet result = add (1, 2);\nlet myArgs = (1, 2);\nlet result = add myArgs;</pre>\n    </td>\n  </tr>\n</table>\n<h3>Function Application</h3>\n<p>In <code>Reason</code>, parentheses are typically optional in places where it is obvious\nthey aren\'t needed. This means that when invoking functions, parentheses\naren\'t always required around the argument. <code>Reason</code> will let you add the\nparentheses if you really want them, but it\'s good to know why some samples\nyou read have omitted them. See how in this example, arguments that are clearly\nsingle words, or that have balanced "bookends" (such as <code>{ }</code>) do not need\nthe parentheses.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>\nlet result = aFunc (oneArg);</pre>\n    </td>\n    <td>\n      <pre>\nlet result = aFunc (oneArg);\nlet result = aFunc oneArg;</pre>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <pre>\nlet result = aFunc ({x:0});\n      </pre>\n    </td>\n    <td>\n      <pre>let result = aFunc ({x:0});\nlet result = aFunc {x:0};</pre>\n    </td>\n  </tr>\n</table>\n<h3>Currying</h3>\n<p>Both <code>JavaScript</code> and <code>Reason</code> support currying, but with <code>Reason</code>, when using\nthe native compiler (or even a <code>JavaScript</code> backend), currying is optimized.\n(Specifically, you are not penalized for currying in <code>Reason</code>, whenever you\nhappen to supply all the arguments). The main syntactic difference when defining\ncurried functions is that <code>Reason</code> lambdas always begin with the <code>fun</code> keyword.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td><pre>let add = a => b => a + b;</pre></td>\n    <td><pre>let add = fun a => fun b => a + b;</pre></td>\n  </tr>\n</table>\n<p>When invoking curried functions, the syntax is the same, but with <code>Reason</code>,\nsupplying the parenthesis is optional.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>let result = add(10)(20);</pre>\n    </td>\n    <td>\n      <pre>let result = add(10)(20);</pre>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <pre></pre>\n    </td>\n    <td>\n      <pre>let result = add 10 20;</pre>\n    </td>\n  </tr>\n</table>\n<p>Because <code>Reason</code> lambdas include the <code>fun</code> keyword, curried functions don\'t\nappear as clean as they do in <code>JavaScript</code>. To remedy this, <code>Reason</code> includes a\nsyntactic sugar to help with curried function definitions. The two forms\nare <em>exactly</em> equivalent and nothing changes about how you would invoke these\nfunctions.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>let add = a => b => a + b;</pre>\n    </td>\n    <td>\n      <pre>let add = fun a => fun b => a + b;</pre>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <pre>// No syntactic sugar needed</pre>\n    </td>\n    <td>\n      <pre>let add = fun a b => a + b;</pre>\n    </td>\n  </tr>\n</table>\n<h3>Record Fields</h3>\n<p>In <code>Reason</code>, you must ensure your record literal has an unambiguous type if you\nwant to create records or access record fields. In the simplest case, the record\ntype is already in scope and you can unambiguously create values just by using\nthe standard <code>{ key: value }</code> syntax.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead>\n    <tr>\n      <th scope="col"><p>JavaScript</p></th>\n      <th scope="col"><p>Reason</p></th>\n    </tr>\n  </thead>\n  <tr>\n    <td>\n      <pre>function make(\n  id, name) {\n  return {\n    id: id,\n    name: name\n  };\n}</pre>\n    </td>\n    <td>\n      <pre>module Person = {\n  type t = {\n    id: int, name: string\n  };\n  let make id name => { id: id, name: name };\n  /&ast;\n  Alternatively, using field name punning,\n  let make id name => { id, name };\n  &ast;/\n};</pre>\n    </td>\n  </tr>\n</table>\n<p>When the record type is declared in a different module, you have to give Reason\na little guidance on which exact type you mean, because different record types\nin different modules can share field names.</p>\n<p>In order of safety, it\'s preferred to either (1) prefix at least one record\nfield with the module name to uniquely identify the record type (safest), (2)\nprefix the record literal with a temporary module open to bring the record type\ninto scope (slightly less safe--brings all names from the opened module into\nscope for the rest of the expression), or (3) open the entire module to bring\nthe record type into scope (least safe--brings all names from the opened module\ninto scope for the rest of the block).</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead>\n    <tr>\n      <th scope="col"><p>JavaScript</p></th>\n      <th scope="col"><p>Reason</p></th>\n    </tr>\n  </thead>\n  <tr>\n    <td>\n      <pre>const bob =\n  { id: 1, name: "Bob" };</pre>\n    </td>\n    <td>\n      <pre>let bob = {\n  Person.id: 1, name: "Bob"\n};</pre>\n    </td>\n  </tr>\n  <tr>\n    <td><pre></pre></td>\n    <td>\n      <pre>let bob = Person.{\n  id: 1, name: "Bob"\n};</pre>\n    </td>\n  </tr>\n  <tr>\n    <td><pre></pre></td>\n    <td>\n      <pre>open Person;\nlet bob = {\n  id: 1, name: "Bob"\n};</pre>\n    </td>\n  </tr>\n</table>\n<h3>Expressions</h3>\n<p>If it wasn\'t already clear, in Reason, almost everything is an expression. For\nexample, in <code>Reason</code>, the <code>switch</code> statement <em>evaluates</em> to a value, which makes\nprogramming less error prone. Notice how in the <code>JavaScript</code> version, there is\nsome time when the program is in an invalid state.  The switch statement in\n<code>Reason</code> also provides many more super powers, discussed in <a href="./index.html#diving-deeper-expressive-pattern-matching">Pattern\nMatching</a>.</p>\n<blockquote>\n<table>\n</blockquote>\n  <thead><tr> <th scope="col"><p >JavaScript</p></th> <th scope="col"><p>Reason</p></th></tr></thead>\n  <tr>\n    <td>\n      <pre>login ? "hi" : "bye" </pre>\n    </td>\n    <td>\n      <pre>login ? "hi" : "bye" </pre>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <pre>\nlet res = undefined;\nswitch (thing) {\n  case first:\n     res = "first";\n     break;\n  case second:\n     res = "second";\n     break;\n};\n      </pre>\n    </td>\n    <td>\n      <pre>\nlet res = switch thing {\n  | first => "first"\n  | second => "second"\n};\n      </pre>\n    </td>\n  </tr>\n</table>',frontmatter:{title:"Syntax cheetsheet"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/javascript/syntax-cheetsheet.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-javascript-syntax-cheetsheet-5e241fe8a270080fb464.js.map