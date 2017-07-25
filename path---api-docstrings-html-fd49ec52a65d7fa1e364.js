webpackJsonp([279],{"./node_modules/json-loader/index.js!./.cache/json/api-docstrings-html.json":function(t,n){t.exports={data:{file:{relativePath:"api/Docstrings.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Asttypes.html" title="Asttypes">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Lexer.html" title="Lexer">Next</a>\n</div>\n<h1>Module <a href="type_Docstrings.html">Docstrings</a></h1>\n\n<pre><span class="keyword">module</span> Docstrings: sig .. end</pre><div class="info module top">\n(Re)Initialise all docstring state<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> init: unit =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> warn_bad_docstrings: unit =&gt; unit;\n</pre><div class="info ">\nEmit warnings for unattached and ambiguous docstrings<br>\n</div>\n<br>\n<h3 id="3_Docstrings">Docstrings</h3><br>\n\n<pre><span class="keyword">type</span> docstring;\n</pre>\n<div class="info ">\nDocumentation comments<br>\n</div>\n\n\n<pre><span class="keyword">let</span> docstring: string =&gt; Location.t =&gt; docstring;\n</pre><div class="info ">\nCreate a docstring<br>\n</div>\n\n<pre><span class="keyword">let</span> docstring_body: docstring =&gt; string;\n</pre><div class="info ">\nGet the text of a docstring<br>\n</div>\n\n<pre><span class="keyword">let</span> docstring_loc: docstring =&gt; Location.t;\n</pre><div class="info ">\nGet the location of a docstring<br>\n</div>\n<br>\n<h3 id="3_Setfunctions">Set functions</h3>\n<p>\n\n   These functions are used by the lexer to associate docstrings to\n   the locations of tokens.<br>\n\n</p><pre><span class="keyword">let</span> set_pre_docstrings: Lexing.position =&gt; list docstring =&gt; unit;\n</pre><div class="info ">\nDocstrings immediately preceding a token<br>\n</div>\n\n<pre><span class="keyword">let</span> set_post_docstrings: Lexing.position =&gt; list docstring =&gt; unit;\n</pre><div class="info ">\nDocstrings immediately following a token<br>\n</div>\n\n<pre><span class="keyword">let</span> set_floating_docstrings: Lexing.position =&gt; list docstring =&gt; unit;\n</pre><div class="info ">\nDocstrings not immediately adjacent to a token<br>\n</div>\n\n<pre><span class="keyword">let</span> set_pre_extra_docstrings: Lexing.position =&gt; list docstring =&gt; unit;\n</pre><div class="info ">\nDocstrings immediately following the token which precedes this one<br>\n</div>\n\n<pre><span class="keyword">let</span> set_post_extra_docstrings: Lexing.position =&gt; list docstring =&gt; unit;\n</pre><div class="info ">\nDocstrings immediately preceding the token which follows this one<br>\n</div>\n<br>\n<h3 id="3_Items">Items</h3>\n<p>\n\n    The <a href="Docstrings.html#TYPEdocs"><code class="code">Docstrings.docs</code></a> type represents documentation attached to an item.<br>\n\n</p><pre><span class="keyword">type</span> docs = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>docs_pre&#xA0;: docstring option;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>docs_post&#xA0;: docstring option;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre><span class="keyword">let</span> empty_docs: docs;\n</pre>\n<pre><span class="keyword">let</span> docs_attr: docstring =&gt; Parsetree.attribute;\n</pre>\n<pre><span class="keyword">let</span> add_docs_attrs: docs =&gt; Parsetree.attributes =&gt; Parsetree.attributes;\n</pre><div class="info ">\nConvert item documentation to attributes and add them to an\n    attribute list<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_docs: unit =&gt; docs;\n</pre><div class="info ">\nFetch the item documentation for the current symbol. This also\n    marks this documentation (for ambiguity warnings).<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_docs_lazy: unit =&gt; Lazy.t docs;\n</pre>\n<pre><span class="keyword">let</span> rhs_docs: int =&gt; int =&gt; docs;\n</pre><div class="info ">\nFetch the item documentation for the symbols between two\n    positions. This also marks this documentation (for ambiguity\n    warnings).<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_docs_lazy: int =&gt; int =&gt; Lazy.t docs;\n</pre>\n<pre><span class="keyword">let</span> mark_symbol_docs: unit =&gt; unit;\n</pre><div class="info ">\nMark the item documentation for the current symbol (for ambiguity\n    warnings).<br>\n</div>\n\n<pre><span class="keyword">let</span> mark_rhs_docs: int =&gt; int =&gt; unit;\n</pre><div class="info ">\nMark as associated the item documentation for the symbols between\n    two positions (for ambiguity warnings)<br>\n</div>\n<br>\n<h3 id="3_Fieldsandconstructors">Fields and constructors</h3>\n<p>\n\n    The <a href="Docstrings.html#TYPEinfo"><code class="code">Docstrings.info</code></a> type represents documentation attached to a field or\n    constructor.<br>\n\n</p><pre><span class="keyword">type</span> info = option docstring;\n</pre>\n\n\n<pre><span class="keyword">let</span> empty_info: info;\n</pre>\n<pre><span class="keyword">let</span> info_attr: docstring =&gt; Parsetree.attribute;\n</pre>\n<pre><span class="keyword">let</span> add_info_attrs: info =&gt; Parsetree.attributes =&gt; Parsetree.attributes;\n</pre><div class="info ">\nConvert field info to attributes and add them to an\n    attribute list<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_info: unit =&gt; info;\n</pre><div class="info ">\nFetch the field info for the current symbol.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_info: int =&gt; info;\n</pre><div class="info ">\nFetch the field info following the symbol at a given position.<br>\n</div>\n<br>\n<h3 id="3_Unattachedcomments">Unattached comments</h3>\n<p>\n\n    The <a href="Docstrings.html#TYPEtext"><code class="code">Docstrings.text</code></a> type represents documentation which is not attached to\n    anything.<br>\n\n</p><pre><span class="keyword">type</span> text = list docstring;\n</pre>\n\n\n<pre><span class="keyword">let</span> empty_text: text;\n</pre>\n<pre><span class="keyword">let</span> text_attr: docstring =&gt; Parsetree.attribute;\n</pre>\n<pre><span class="keyword">let</span> add_text_attrs: text =&gt; Parsetree.attributes =&gt; Parsetree.attributes;\n</pre><div class="info ">\nConvert text to attributes and add them to an attribute list<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_text: unit =&gt; text;\n</pre><div class="info ">\nFetch the text preceding the current symbol.<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_text_lazy: unit =&gt; Lazy.t text;\n</pre>\n<pre><span class="keyword">let</span> rhs_text: int =&gt; text;\n</pre><div class="info ">\nFetch the text preceding the symbol at the given position.<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_text_lazy: int =&gt; Lazy.t text;\n</pre><br>\n<h3 id="3_Extratext">Extra text</h3>\n<p>\n\n    There may be additional text attached to the delimiters of a block\n    (e.g. <code class="code">struct</code> and <code class="code">end</code>). This is fetched by the following\n    functions, which are applied to the contents of the block rather\n    than the delimiters.<br>\n\n</p><pre><span class="keyword">let</span> symbol_pre_extra_text: unit =&gt; text;\n</pre><div class="info ">\nFetch additional text preceding the current symbol<br>\n</div>\n\n<pre><span class="keyword">let</span> symbol_post_extra_text: unit =&gt; text;\n</pre><div class="info ">\nFetch additional text following the current symbol<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_pre_extra_text: int =&gt; text;\n</pre><div class="info ">\nFetch additional text preceding the symbol at the given position<br>\n</div>\n\n<pre><span class="keyword">let</span> rhs_post_extra_text: int =&gt; text;\n</pre><div class="info ">\nFetch additional text following the symbol at the given position<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Docstrings.html"}}}});
//# sourceMappingURL=path---api-docstrings-html-fd49ec52a65d7fa1e364.js.map