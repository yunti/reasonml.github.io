webpackJsonp([289],{"./node_modules/json-loader/index.js!./.cache/json/api-bytes-labels-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/BytesLabels.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Bytes.html" title="Bytes">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Callback.html" title="Callback">Next</a>\n</div>\n<h1>Module <a href="type_BytesLabels.html">BytesLabels</a></h1>\n\n<pre><span class="keyword">module</span> BytesLabels: sig .. end</pre><div class="info module top">\nByte sequence operations.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> length: bytes =&gt; int;\n</pre><div class="info ">\nReturn the length (number of bytes) of the argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> get: bytes =&gt; int =&gt; char;\n</pre><div class="info ">\n<code class="code">get s n</code> returns the byte at index <code class="code">n</code> in argument <code class="code">s</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> set: bytes =&gt; int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<code class="code">set s n c</code> modifies <code class="code">s</code> in place, replacing the byte at index <code class="code">n</code>\n    with <code class="code">c</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> is not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> create: int =&gt; bytes;\n</pre><div class="info ">\n<code class="code">create n</code> returns a new byte sequence of length <code class="code">n</code>. The\n    sequence is uninitialized and contains arbitrary bytes.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> make: int =&gt; char =&gt; bytes;\n</pre><div class="info ">\n<code class="code">make n c</code> returns a new byte sequence of length <code class="code">n</code>, filled with\n    the byte <code class="code">c</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> init: int =&gt; f::(int =&gt; char) =&gt; bytes;\n</pre><div class="info ">\n<code class="code">init n f</code> returns a fresh byte sequence of length <code class="code">n</code>,\n    with character <code class="code">i</code> initialized to the result of <code class="code">f i</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> empty: bytes;\n</pre><div class="info ">\nA byte sequence of size 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> copy: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a new byte sequence that contains the same bytes as the\n    argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> of_string: string =&gt; bytes;\n</pre><div class="info ">\nReturn a new byte sequence that contains the same bytes as the\n    given string.<br>\n</div>\n\n<pre><span class="keyword">let</span> to_string: bytes =&gt; string;\n</pre><div class="info ">\nReturn a new string that contains the same bytes as the given byte\n    sequence.<br>\n</div>\n\n<pre><span class="keyword">let</span> sub: bytes =&gt; pos::int =&gt; len::int =&gt; bytes;\n</pre><div class="info ">\n<code class="code">sub s start len</code> returns a new byte sequence of length <code class="code">len</code>,\n    containing the subsequence of <code class="code">s</code> that starts at position <code class="code">start</code>\n    and has length <code class="code">len</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not designate a\n    valid range of <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> sub_string: bytes =&gt; int =&gt; int =&gt; string;\n</pre><div class="info ">\nSame as <code class="code">sub</code> but return a string instead of a byte sequence.<br>\n</div>\n\n<pre><span class="keyword">let</span> fill: bytes =&gt; pos::int =&gt; len::int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<code class="code">fill s start len c</code> modifies <code class="code">s</code> in place, replacing <code class="code">len</code>\n    characters with <code class="code">c</code>, starting at <code class="code">start</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not designate a\n    valid range of <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> blit: src::bytes =&gt; src_pos::int =&gt; dst::bytes =&gt; dst_pos::int =&gt; len::int =&gt; unit;\n</pre><div class="info ">\n<code class="code">blit src srcoff dst dstoff len</code> copies <code class="code">len</code> bytes from sequence\n    <code class="code">src</code>, starting at index <code class="code">srcoff</code>, to sequence <code class="code">dst</code>, starting at\n    index <code class="code">dstoff</code>. It works correctly even if <code class="code">src</code> and <code class="code">dst</code> are the\n    same byte sequence, and the source and destination intervals\n    overlap.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">srcoff</code> and <code class="code">len</code> do not\n    designate a valid range of <code class="code">src</code>, or if <code class="code">dstoff</code> and <code class="code">len</code>\n    do not designate a valid range of <code class="code">dst</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> concat: sep::bytes =&gt; list bytes =&gt; bytes;\n</pre><div class="info ">\n<code class="code">concat sep sl</code> concatenates the list of byte sequences <code class="code">sl</code>,\n    inserting the separator byte sequence <code class="code">sep</code> between each, and\n    returns the result as a new byte sequence.<br>\n</div>\n\n<pre><span class="keyword">let</span> iter: f::(char =&gt; unit) =&gt; bytes =&gt; unit;\n</pre><div class="info ">\n<code class="code">iter f s</code> applies function <code class="code">f</code> in turn to all the bytes of <code class="code">s</code>.\n    It is equivalent to <code class="code">f (get s 0); f (get s 1); ...; f (get s\n    (length s - 1)); ()</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iteri: f::(int =&gt; char =&gt; unit) =&gt; bytes =&gt; unit;\n</pre><div class="info ">\nSame as <a href="Bytes.html#VALiter"><code class="code">Bytes.iter</code></a>, but the function is applied to the index of\n    the byte as first argument and the byte itself as second\n    argument.<br>\n</div>\n\n<pre><span class="keyword">let</span> map: f::(char =&gt; char) =&gt; bytes =&gt; bytes;\n</pre><div class="info ">\n<code class="code">map f s</code> applies function <code class="code">f</code> in turn to all the bytes of <code class="code">s</code> and\n    stores the resulting bytes in a new sequence that is returned as\n    the result.<br>\n</div>\n\n<pre><span class="keyword">let</span> mapi: f::(int =&gt; char =&gt; char) =&gt; bytes =&gt; bytes;\n</pre><div class="info ">\n<code class="code">mapi f s</code> calls <code class="code">f</code> with each character of <code class="code">s</code> and its\n    index (in increasing index order) and stores the resulting bytes\n    in a new sequence that is returned as the result.<br>\n</div>\n\n<pre><span class="keyword">let</span> trim: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, without leading and trailing\n    whitespace. The bytes regarded as whitespace are the ASCII\n    characters <code class="code">&apos; &apos;</code>, <code class="code">&apos;\\012&apos;</code>, <code class="code">&apos;\\n&apos;</code>, <code class="code">&apos;\\r&apos;</code>, and <code class="code">&apos;\\t&apos;</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> escaped: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, with special characters represented\n    by escape sequences, following the lexical conventions of OCaml.<br>\n</div>\n\n<pre><span class="keyword">let</span> index: bytes =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">index s c</code> returns the index of the first occurrence of byte <code class="code">c</code>\n    in <code class="code">s</code>.\n<p>\n\n    Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rindex: bytes =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">rindex s c</code> returns the index of the last occurrence of byte <code class="code">c</code>\n    in <code class="code">s</code>.\n<p>\n\n    Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> index_from: bytes =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">index_from s i c</code> returns the index of the first occurrence of\n    byte <code class="code">c</code> in <code class="code">s</code> after position <code class="code">i</code>.  <code class="code">Bytes.index s c</code> is\n    equivalent to <code class="code">Bytes.index_from s 0 c</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">i</code> is not a valid position in <code class="code">s</code>.\n    Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> after position <code class="code">i</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rindex_from: bytes =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">rindex_from s i c</code> returns the index of the last occurrence of\n    byte <code class="code">c</code> in <code class="code">s</code> before position <code class="code">i+1</code>.  <code class="code">rindex s c</code> is equivalent\n    to <code class="code">rindex_from s (Bytes.length s - 1) c</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">i+1</code> is not a valid position in <code class="code">s</code>.\n    Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> before position <code class="code">i+1</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> contains: bytes =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">contains s c</code> tests if byte <code class="code">c</code> appears in <code class="code">s</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> contains_from: bytes =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">contains_from s start c</code> tests if byte <code class="code">c</code> appears in <code class="code">s</code> after\n    position <code class="code">start</code>.  <code class="code">contains s c</code> is equivalent to <code class="code">contains_from\n    s 0 c</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> is not a valid position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> rcontains_from: bytes =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">rcontains_from s stop c</code> tests if byte <code class="code">c</code> appears in <code class="code">s</code> before\n    position <code class="code">stop+1</code>.\n<p>\n\n    Raise <code class="code">Invalid_argument</code> if <code class="code">stop &lt; 0</code> or <code class="code">stop+1</code> is not a valid\n    position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre><span class="keyword">let</span> uppercase: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, with all lowercase letters\n    translated to uppercase, including accented letters of the ISO\n    Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre><span class="keyword">let</span> lowercase: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, with all uppercase letters\n    translated to lowercase, including accented letters of the ISO\n    Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre><span class="keyword">let</span> capitalize: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, with the first byte set to\n    uppercase.<br>\n</div>\n\n<pre><span class="keyword">let</span> uncapitalize: bytes =&gt; bytes;\n</pre><div class="info ">\nReturn a copy of the argument, with the first byte set to\n    lowercase.<br>\n</div>\n\n<pre><span class="keyword">type</span> t = bytes;\n</pre>\n<div class="info ">\nAn alias for the type of byte sequences.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for byte sequences, with the same\n    specification as <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.  Along with the type <code class="code">t</code>,\n    this function <code class="code">compare</code> allows the module <code class="code">Bytes</code> to be passed as\n    argument to the functors <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/BytesLabels.html"}}}});
//# sourceMappingURL=path---api-bytes-labels-html-1f1a1886b97abccf4b3b.js.map