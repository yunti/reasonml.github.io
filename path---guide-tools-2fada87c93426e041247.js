webpackJsonp([11],{"./node_modules/json-loader/index.js!./.cache/json/guide-tools.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/language/externals.md",childMarkdownRemark:{frontmatter:{title:"Externals",order:11}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:12}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}}]},file:{relativePath:"guide/tools.md",childMarkdownRemark:{html:'<h2>Reason-tools</h2>\n<p><a href="https://github.com/reasonml/reason-tools">Reason-tools</a> is a convenient browser\nextension for quickly toggling between OCaml syntax and Reason syntax. It also\nprettifies the OCaml libraries documentation pages.\n<a href="https://reasonml.github.io/reason-tools/popup.html">Here</a>\'s the standalone\nversion.</p>\n<h2>Command Line Utilities</h2>\n<p>The Reason toolchain uses a few important tools that are used in the terminal,\nand/or with your editor.</p>\n<p><strong>Note</strong>: the <a href="/guide/javascript">JavaScript</a>\nand <a href="/guide/native">native</a>\nworkflow have different ways of installing  these tools. Please consult their\nrespective sections for the installation proper. This section only describes\nwhat they are.</p>\n<h3>Refmt</h3>\n<p><code>refmt</code> ("Reason format") takes in your code text and spits it out, nicely formatted. Developers\nuse it pervasively to prettify their code, either through invoking it in the\nterminal, or through an editor shortcut. It also serves to convert to/from\nReason/OCaml syntax.</p>\n<p><code>refmt</code> optionally takes in a column width, and <strong>responsively</strong> formats your\ncode based on it. In other words, it doesn\'t just naively break to the next line\nat a certain characters limit; it solves the constrains and arranges your code\naccordingly. Here\'s <code>refmt</code> inside Vim, called once per window resize (just to\nshow the point):</p>\n<html><head></head><body><img src="images/LiquidSmallOptCrop.gif" style="width:100%; max-width:466px; max-height:433px;"></body></html>\n<p>The Reason community uses it to enforce a consistent style and avoid time-consuming\nmanual formatting &#x26; stylistic debates.</p>\n<p>See <code>refmt --help</code> for the options.</p>\n<h3>Merlin</h3>\n<p><a href="https://github.com/ocaml/merlin">Merlin</a> provides type hint, refactor, real-\ntime errors, jump to definitions, etc. to our editors.</p>\n<p>Merlin\'s command line name is called <code>ocamlmerlin</code>, though you wouldn\'t call it\nmanually (editors start it themselves and query it). To configure Merlin to\nunderstand your project, you\'d write a <code>.merlin</code> file at the root (documentation\n<a href="https://github.com/ocaml/merlin/wiki/project-configuration">here</a>).</p>\n<p><strong>Note</strong>: For the JS workflow, we generate the <code>.merlin</code> file for you, so no\nneed to worry about it.</p>\n<p>Merlin is for OCaml, but has first-class support for Reason. <strong>For the support to\nwork, you\'d need the <code>ocamlmerlin-reason</code> binary</strong>. Again, the installation of\nthese utilities are described in the <a href="/guide/javascript">JS Workflow</a>\nand <a href="/guide/native">Native Workflow</a>\npage.</p>\n<h3>REPL</h3>\n<p>Reason comes with a REPL called <code>rtop</code> which lets you interactively evaluate\nReason. It features intelligent, type-driven autocompletion.</p>\n<html><head></head><body><img src="images/RtopOptCrop.gif" style="width:100%; max-width:466px; max-height:433px;"></body></html>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment"># The rtop command begins a REPL session</span>\nrtop</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-built_in">let</span> myVar = <span class="hljs-string">"Hello Reason!"</span>;\n<span class="hljs-comment"># myVar: bytes = "Hello Reason!"</span>\n\n<span class="hljs-built_in">let</span> result = <span class="hljs-number">100</span> + <span class="hljs-number">200</span>;\n<span class="hljs-comment"># result : int = 300;</span></code></pre>\n      </div>\n<p>Use <code>#quit;</code> to close your REPL session.</p>\n<h1>Editor Integration</h1>\n<p>All our editor integrations provides at minimum:</p>\n<ul>\n<li>Displaying types.</li>\n<li><code>refmt</code>-ing a file.</li>\n<li>Showing errors</li>\n<li>Syntax highlighting.</li>\n</ul>\n<p>They\'re powered by Reason\'s <code>refmt</code> and Merlin, mentioned in the previous sections.</p>\n<h3>VSCode (recommended)</h3>\n<p>The Visual Studio Code Reason plugin offers lots of great features and polish.\n<a href="https://github.com/freebroccolo/vscode-reasonml">https://github.com/freebroccolo/vscode-reasonml</a></p>\n<h3>Atom</h3>\n<p>You can install the <a href="https://atom.io/">Atom</a> Reason integration through either\n<a href="https://atom.io/packages/ocaml-merlin">atom-ocaml-merlin</a> or\n<a href="https://nuclide.io/">Nuclide</a>. The former is lighter.</p>\n<html><head></head><body></body></html>\n<h4>OCaml-Merlin</h4>\n<p>As per the instructions <a href="https://atom.io/packages/ocaml-merlin">here</a>, you\'ll also need:</p>\n<ul>\n<li><a href="https://atom.io/packages/language-reason">language-reason</a></li>\n<li><a href="https://atom.io/packages/linter-refmt">linter-refmt</a></li>\n<li><a href="https://atom.io/packages/reason-refmt">reason-refmt</a></li>\n</ul>\n<p>As noted on the page, you\'ll also need the linter (which itself needs Linter-ui-default,\nIntention and Busy-signal).</p>\n<p><strong>Note</strong>: if you\'ve installed the global binaries through the <a href="./gettingStarted.html#javascript-workflow-project-setup">JS Workflow</a> then you can ignore the <code>opam install merlin</code> instructions at the end.</p>\n<h4>Nuclide</h4>\n<p>Alternatively, if you use Nuclide:</p>\n<ul>\n<li>Open the package installer from the menu <code>Packages > Settings View > Install Packages and Themes</code>.</li>\n<li>Search for and install <code>nuclide</code> if not already installed.</li>\n<li>\n<p>If you don\'t want to turn on all of Nuclide\'s features, you can disable most of it except for:</p>\n<ul>\n<li>nuclide-ocaml</li>\n<li>hyperclick</li>\n<li>autocomplete</li>\n<li>linter</li>\n<li>nuclide-code-format</li>\n<li>nuclide-outline-view</li>\n<li>nuclide-datatip</li>\n<li>nuclide-language-reason</li>\n<li>nuclide-type-hint</li>\n</ul>\n</li>\n</ul>\n<p>We piggy back on Nuclide\'s facilities (formatting, diagnosis, datatip). <code>⌘+shift+p</code> and search for these keywords).</p>\n<h3>Vim</h3>\n<p>Install <a href="https://github.com/reasonml-editor/vim-reason">vim-reason</a> like you would any Vim plugin.</p>\n<p>For example, through <a href="https://github.com/Shougo/neobundle.vim">NeoBundle</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-type">NeoBundle</span> <span class="hljs-symbol">\'reasonml</span>-editor/vim-reason\'</code></pre>\n      </div>\n<p>Likewise for <a href="https://github.com/junegunn/vim-plug">vim-plug</a> and others.</p>\n<html><head></head><body></body></html>\n<h4>Merlin</h4>\n<p><code>merlin</code> has built in <code>Vim</code> support.</p>\n<p>Completion is provided using <code>omnifunc</code>. By default you can trigger it with <code>&#x3C;C-X>&#x3C;C-O></code> while in insert mode.\nIf you use completion plugins, most of them can use <code>omni</code> as a source.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code><span class="hljs-string">" deoplete\n\nlet g:deoplete#omni_patterns = {}\nlet g:deoplete#omni_patterns.reason = \'[^. *\\t]\\.\\w*\\|\\h\\w*|#\'\nlet g:deoplete#sources = {}\nlet g:deoplete#sources.reason = [\'omni\', \'buffer\']\n\n"</span> neocomplete <span class="hljs-keyword">and</span> <span class="hljs-type">YouCompleteMe</span> work out <span class="hljs-keyword">of</span> the box</code></pre>\n      </div>\n<p>You can use syntactic checks with plugins like <a href="https://github.com/vim-syntastic/syntastic">Syntastic</a> (vim-reason should just work with it out of the box), ALE, and others.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-none"><code>" For ALE\n\nlet g:ale_linter_aliases = {\'reason\': \'ocaml\'}</code></pre>\n      </div>\n<p>See the other provided Merlin features in the <a href="https://github.com/reasonml-editor/vim-reason#merlin">README</a>.</p>\n<p>The command <code>:ReasonPrettyPrint</code> invokes the binary <code>refmt</code> and formats text in the current buffer.\nYou can set <code>g:vimreason_extra_args_expr_reason</code> variable to control the arguments passed to <code>refmt</code> (such as <code>--print-width</code>).</p>\n<h3>Emacs</h3>\n<p><a href="https://github.com/arichiardi/reason-mode">Reason-mode</a> provides <code>refmt</code> and optional REPL support.\nFor Merlin support, merlin-mode is on <a href="https://www.emacswiki.org/emacs/ELPA">Elpa</a>. Please see merlin-mode\'s usage <a href="https://github.com/ocaml/merlin/wiki/emacs-from-scratch#discovering-the-emacs-mode">here</a> (ignore the installation part above).</p>\n<h3>Sublime Text</h3>\n<p><em>Experimental</em>. Doesn\'t support Merlin yet!\n<a href="https://github.com/reasonml-editor/sublime-reason">https://github.com/reasonml-editor/sublime-reason</a></p>\n<h3>IDEA</h3>\n<p><em>Experimental</em>.\n<a href="https://github.com/reasonml-editor/reasonml-idea-plugin">https://github.com/reasonml-editor/reasonml-idea-plugin</a></p>',frontmatter:{title:"Tools"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/tools.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-tools-2fada87c93426e041247.js.map