webpackJsonp([213],{"./node_modules/json-loader/index.js!./.cache/json/api-printexc-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Printexc.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Pervasives.html" title="Pervasives">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Printf.html" title="Printf">Next</a>\n</div>\n<h1>Module <a href="type_Printexc.html">Printexc</a></h1>\n\n<pre><span class="keyword">module</span> Printexc: sig .. end</pre><div class="info module top">\nFacilities for printing exceptions and inspecting current call stack.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">let</span> to_string: exn =&gt; string;\n</pre><div class="info ">\n<code class="code">Printexc.to_string e</code> returns a string representation of\n   the exception <code class="code">e</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> print: (&apos;a =&gt; &apos;b) =&gt; &apos;a =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">Printexc.print fn x</code> applies <code class="code">fn</code> to <code class="code">x</code> and returns the result.\n   If the evaluation of <code class="code">fn x</code> raises any exception, the\n   name of the exception is printed on standard error output,\n   and the exception is raised again.\n   The typical use is to catch and report exceptions that\n   escape a function application.<br>\n</div>\n\n<pre><span class="keyword">let</span> catch: (&apos;a =&gt; &apos;b) =&gt; &apos;a =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">Printexc.catch fn x</code> is similar to <a href="Printexc.html#VALprint"><code class="code">Printexc.print</code></a>, but\n   aborts the program with exit code 2 after printing the\n   uncaught exception.  This function is deprecated: the runtime\n   system is now able to print uncaught exceptions as precisely\n   as <code class="code">Printexc.catch</code> does.  Moreover, calling <code class="code">Printexc.catch</code>\n   makes it harder to track the location of the exception\n   using the debugger or the stack backtrace facility.\n   So, do not use <code class="code">Printexc.catch</code> in new code.<br>\n</div>\n\n<pre><span class="keyword">let</span> print_backtrace: Pervasives.out_channel =&gt; unit;\n</pre><div class="info ">\n<code class="code">Printexc.print_backtrace oc</code> prints an exception backtrace\n    on the output channel <code class="code">oc</code>.  The backtrace lists the program\n    locations where the most-recently raised exception was raised\n    and where it was propagated through function calls.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n\n<pre><span class="keyword">let</span> get_backtrace: unit =&gt; string;\n</pre><div class="info ">\n<code class="code">Printexc.get_backtrace ()</code> returns a string containing the\n    same exception backtrace that <code class="code">Printexc.print_backtrace</code> would\n    print.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n\n<pre><span class="keyword">let</span> record_backtrace: bool =&gt; unit;\n</pre><div class="info ">\n<code class="code">Printexc.record_backtrace b</code> turns recording of exception backtraces\n    on (if <code class="code">b = true</code>) or off (if <code class="code">b = false</code>).  Initially, backtraces\n    are not recorded, unless the <code class="code">b</code> flag is given to the program\n    through the <code class="code">OCAMLRUNPARAM</code> variable.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n\n<pre><span class="keyword">let</span> backtrace_status: unit =&gt; bool;\n</pre><div class="info ">\n<code class="code">Printexc.backtrace_status()</code> returns <code class="code">true</code> if exception\n    backtraces are currently recorded, <code class="code">false</code> if not.<br>\n<b>Since</b> 3.11.0<br>\n</div>\n\n<pre><span class="keyword">let</span> register_printer: (exn =&gt; option string) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Printexc.register_printer fn</code> registers <code class="code">fn</code> as an exception\n    printer.  The printer should return <code class="code">None</code> or raise an exception\n    if it does not know how to convert the passed exception, and <code class="code">Some\n    s</code> with <code class="code">s</code> the resulting string if it can convert the passed\n    exception. Exceptions raised by the printer are ignored.\n<p>\n\n    When converting an exception into a string, the printers will be invoked\n    in the reverse order of their registrations, until a printer returns\n    a <code class="code">Some s</code> value (if no such printer exists, the runtime will use a\n    generic printer).\n</p><p>\n\n    When using this mechanism, one should be aware that an exception backtrace\n    is attached to the thread that saw it raised, rather than to the exception\n    itself. Practically, it means that the code related to <code class="code">fn</code> should not use\n    the backtrace if it has itself raised an exception before.<br>\n<b>Since</b> 3.11.2<br>\n</p></div>\n<br>\n<h6 id="6_Rawbacktraces">Raw backtraces</h6><br>\n\n<pre><span class="keyword">type</span> raw_backtrace;\n</pre>\n<div class="info ">\nThe abstract type <code class="code">raw_backtrace</code> stores a backtrace in\n    a low-level format, instead of directly exposing them as string as\n    the <code class="code">get_backtrace()</code> function does.\n<p>\n\n    This allows delaying the formatting of backtraces to when they are\n    actually printed, which may be useful if you record more\n    backtraces than you print.\n</p><p>\n\n    Raw backtraces cannot be marshalled. If you need marshalling, you\n    should use the array returned by the <code class="code">backtrace_slots</code> function of\n    the next section.<br>\n<b>Since</b> 4.01.0<br>\n</p></div>\n\n\n<pre><span class="keyword">let</span> get_raw_backtrace: unit =&gt; raw_backtrace;\n</pre><div class="info ">\n<code class="code">Printexc.get_raw_backtrace ()</code> returns the same exception\n    backtrace that <code class="code">Printexc.print_backtrace</code> would print, but in\n    a raw format.<br>\n<b>Since</b> 4.01.0<br>\n</div>\n\n<pre><span class="keyword">let</span> print_raw_backtrace: Pervasives.out_channel =&gt; raw_backtrace =&gt; unit;\n</pre><div class="info ">\nPrint a raw backtrace in the same format\n    <code class="code">Printexc.print_backtrace</code> uses.<br>\n<b>Since</b> 4.01.0<br>\n</div>\n\n<pre><span class="keyword">let</span> raw_backtrace_to_string: raw_backtrace =&gt; string;\n</pre><div class="info ">\nReturn a string from a raw backtrace, in the same format\n    <code class="code">Printexc.get_backtrace</code> uses.<br>\n<b>Since</b> 4.01.0<br>\n</div>\n<br>\n<h6 id="6_Currentcallstack">Current call stack</h6><br>\n\n<pre><span class="keyword">let</span> get_callstack: int =&gt; raw_backtrace;\n</pre><div class="info ">\n<code class="code">Printexc.get_callstack n</code> returns a description of the top of the\n    call stack on the current program point (for the current thread),\n    with at most <code class="code">n</code> entries.  (Note: this function is not related to\n    exceptions at all, despite being part of the <code class="code">Printexc</code> module.)<br>\n<b>Since</b> 4.01.0<br>\n</div>\n<br>\n<h6 id="6_Uncaughtexceptions">Uncaught exceptions</h6><br>\n\n<pre><span class="keyword">let</span> set_uncaught_exception_handler: (exn =&gt; raw_backtrace =&gt; unit) =&gt; unit;\n</pre><div class="info ">\n<code class="code">Printexc.set_uncaught_exception_handler fn</code> registers <code class="code">fn</code> as the handler\n    for uncaught exceptions. The default handler prints the exception and\n    backtrace on standard error output.\n<p>\n\n    Note that when <code class="code">fn</code> is called all the functions registered with\n    <a href="Pervasives.html#VALat_exit"><code class="code">Pervasives.at_exit</code></a> have already been called. Because of this you must\n    make sure any output channel <code class="code">fn</code> writes on is flushed.\n</p><p>\n\n    Also note that exceptions raised by user code in the interactive toplevel\n    are not passed to this function as they are caught by the toplevel itself.\n</p><p>\n\n    If <code class="code">fn</code> raises an exception, both the exceptions passed to <code class="code">fn</code> and raised\n    by <code class="code">fn</code> will be printed with their respective backtrace.<br>\n<b>Since</b> 4.02.0<br>\n</p></div>\n<br>\n<h6 id="6_Manipulationofbacktraceinformation">Manipulation of backtrace information</h6>\n<p>\n\n    Those function allow to traverse the slots of a raw backtrace,\n    extract information from them in a programmer-friendly format.<br>\n\n</p><pre><span class="keyword">type</span> backtrace_slot;\n</pre>\n<div class="info ">\nThe abstract type <code class="code">backtrace_slot</code> represents a single slot of\n    a backtrace.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n\n<pre><span class="keyword">let</span> backtrace_slots: raw_backtrace =&gt; option (array backtrace_slot);\n</pre><div class="info ">\nReturns the slots of a raw backtrace, or <code class="code">None</code> if none of them\n    contain useful information.\n<p>\n\n    In the return array, the slot at index <code class="code">0</code> corresponds to the most\n    recent function call, raise, or primitive <code class="code">get_backtrace</code> call in\n    the trace.\n</p><p>\n\n    Some possible reasons for returning <code class="code">None</code> are as follow:</p><ul>\n<li>none of the slots in the trace come from modules compiled with\n    debug information (<code class="code">-g</code>)</li>\n<li>the program is a bytecode program that has not been linked with\n    debug information enabled (<code class="code">ocamlc -g</code>)</li>\n</ul>\n<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">type</span> location = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>filename&#xA0;: string;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>line_number&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>start_char&#xA0;: int;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>end_char&#xA0;: int;</code></td>\n\n</tr></tbody></table>\n}\n\n<div class="info ">\nThe type of location information found in backtraces. <code class="code">start_char</code>\n    and <code class="code">end_char</code> are positions relative to the beginning of the\n    line.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n\n<pre><span class="keyword">module</span> Slot: sig .. end</pre><br>\n<h6 id="6_Rawbacktraceslots">Raw backtrace slots</h6><br>\n\n<pre><span class="keyword">type</span> raw_backtrace_slot;\n</pre>\n<div class="info ">\nThis type allows direct access to raw backtrace slots, without any\n    conversion in an OCaml-usable data-structure. Being\n    process-specific, they must absolutely not be marshalled, and are\n    unsafe to use for this reason (marshalling them may not fail, but\n    un-marshalling and using the result will result in\n    undefined behavior).\n<p>\n\n    Elements of this type can still be compared and hashed: when two\n    elements are equal, then they represent the same source location\n    (the converse is not necessarily true in presence of inlining,\n    for example).<br>\n<b>Since</b> 4.02.0<br>\n</p></div>\n\n\n<pre><span class="keyword">let</span> raw_backtrace_length: raw_backtrace =&gt; int;\n</pre><div class="info ">\n<code class="code">raw_backtrace_length bckt</code> returns the number of slots in the\n    backtrace <code class="code">bckt</code>.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre><span class="keyword">let</span> get_raw_backtrace_slot: raw_backtrace =&gt; int =&gt; raw_backtrace_slot;\n</pre><div class="info ">\n<code class="code">get_slot bckt pos</code> returns the slot in position <code class="code">pos</code> in the\n    backtrace <code class="code">bckt</code>.<br>\n<b>Since</b> 4.02<br>\n</div>\n\n<pre><span class="keyword">let</span> convert_raw_backtrace_slot: raw_backtrace_slot =&gt; backtrace_slot;\n</pre><div class="info ">\nExtracts the user-friendly <code class="code">backtrace_slot</code> from a low-level\n    <code class="code">raw_backtrace_slot</code>.<br>\n<b>Since</b> 4.02<br>\n</div>\n<br>\n<h6 id="6_Exceptionslots">Exception slots</h6><br>\n\n<pre><span class="keyword">let</span> exn_slot_id: exn =&gt; int;\n</pre><div class="info ">\n<code class="code">Printexc.exn_slot_id</code> returns an integer which uniquely identifies\n    the constructor used to create the exception value <code class="code">exn</code>\n    (in the current runtime).<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre><span class="keyword">let</span> exn_slot_name: exn =&gt; string;\n</pre><div class="info ">\n<code class="code">Printexc.exn_slot_id exn</code> returns the internal name of the constructor\n    used to create the exception value <code class="code">exn</code>.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Printexc.html"}}}});
//# sourceMappingURL=path---api-printexc-html-699309622f9854170819.js.map