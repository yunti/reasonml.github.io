webpackJsonp([320],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-helper-cl-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Ast_helper.Cl.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_helper.Ctf.html" title="Ast_helper.Ctf">Previous</a>\n&#xA0;<a class="up" href="Ast_helper.html" title="Ast_helper">Up</a>\n&#xA0;<a class="post" href="Ast_helper.Cf.html" title="Ast_helper.Cf">Next</a>\n</div>\n<h1>Module <a href="type_Ast_helper.Cl.html">Ast_helper.Cl</a></h1>\n\n<pre><span class="keyword">module</span> Cl: sig .. end</pre><div class="info module top">\nClass expressions<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> mk:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.class_expr_desc =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> attr: Parsetree.class_expr =&gt; Parsetree.attribute =&gt; Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> constr:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Ast_helper.lid =&gt;\n  list Parsetree.core_type =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> structure:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.class_structure =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> fun_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.label =&gt;\n  option Parsetree.expression =&gt;\n  Parsetree.pattern =&gt;\n  Parsetree.class_expr =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> apply:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.class_expr =&gt;\n  list (Asttypes.label, Parsetree.expression) =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> let_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Asttypes.rec_flag =&gt;\n  list Parsetree.value_binding =&gt;\n  Parsetree.class_expr =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> constraint_:\n  loc::Ast_helper.loc? =&gt;\n  attrs::Ast_helper.attrs? =&gt;\n  Parsetree.class_expr =&gt;\n  Parsetree.class_type =&gt;\n  Parsetree.class_expr;\n</pre>\n<pre><span class="keyword">let</span> extension:\n  loc::Ast_helper.loc? =&gt; attrs::Ast_helper.attrs? =&gt; Parsetree.extension =&gt; Parsetree.class_expr;\n</pre></div>'}}},pathContext:{relativePath:"api/Ast_helper.Cl.html"}}}});
//# sourceMappingURL=path---api-ast-helper-cl-html-af1cba34937d439aed34.js.map