webpackJsonp([241],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-html.json":function(a,s){a.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar">&#xA0;<a class="up" href="MoreLabels.html" title="MoreLabels">Up</a>\n&#xA0;<a class="post" href="MoreLabels.Map.html" title="MoreLabels.Map">Next</a>\n</div>\n<h1>Module <a href="type_MoreLabels.Hashtbl.html">MoreLabels.Hashtbl</a></h1>\n\n<pre><span class="keyword">module</span> Hashtbl: sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> t &apos;a &apos;b = Hashtbl.t &apos;a &apos;b;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: random::bool? =&gt; int =&gt; t &apos;a &apos;b;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a &apos;b =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a &apos;b =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a &apos;b =&gt; t &apos;a &apos;b;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a &apos;b =&gt; key::&apos;a =&gt; data::&apos;b =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a &apos;b =&gt; &apos;a =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a &apos;b =&gt; &apos;a =&gt; list &apos;b;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a &apos;b =&gt; &apos;a =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a &apos;b =&gt; &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a &apos;b =&gt; key::&apos;a =&gt; data::&apos;b =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(key::&apos;a =&gt; data::&apos;b =&gt; unit) =&gt; t &apos;a &apos;b =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(key::&apos;a =&gt; data::&apos;b =&gt; &apos;c =&gt; &apos;c) =&gt; t &apos;a &apos;b =&gt; init::&apos;c =&gt; &apos;c;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a &apos;b =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> randomize: unit =&gt; unit;\n</pre>\n<pre><span class="keyword">type</span> statistics = Hashtbl.statistics;\n</pre>\n\n\n<pre><span class="keyword">let</span> stats: t &apos;a &apos;b =&gt; statistics;\n</pre>\n<pre><span class="keyword">module</span> type HashedType = Hashtbl.HashedType;\n</pre>\n<pre><span class="keyword">module</span> type SeededHashedType = Hashtbl.SeededHashedType;\n</pre>\n<pre><span class="keyword">module</span> type S = sig .. end</pre>\n<pre><span class="keyword">module</span> type SeededS = sig .. end</pre>\n<pre><span class="keyword">module</span> Make: (H: HashedType) =&gt; S with type key = H.t;\n</pre>\n<pre><span class="keyword">module</span> MakeSeeded: (H: SeededHashedType) =&gt; SeededS with type key = H.t;\n</pre>\n<pre><span class="keyword">let</span> hash: &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> seeded_hash: int =&gt; &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> hash_param: int =&gt; int =&gt; &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> seeded_hash_param: int =&gt; int =&gt; int =&gt; &apos;a =&gt; int;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-html-52568a49b5f0efe7ed44.js.map