// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__35515__auto__ = (function (){var and__35503__auto__ = typeof Symbol !== 'undefined';
if(and__35503__auto__){
var and__35503__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__35503__auto____$1){
var and__35503__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__35503__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__35503__auto____$2;
}
} else {
return and__35503__auto____$1;
}
} else {
return and__35503__auto__;
}
})();
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__40239_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__40239_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args40240 = [];
var len__36573__auto___40243 = arguments.length;
var i__36574__auto___40244 = (0);
while(true){
if((i__36574__auto___40244 < len__36573__auto___40243)){
args40240.push((arguments[i__36574__auto___40244]));

var G__40245 = (i__36574__auto___40244 + (1));
i__36574__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var G__40242 = args40240.length;
switch (G__40242) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40240.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__35503__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__35503__auto__){
var map__40253 = c;
var map__40253__$1 = ((((!((map__40253 == null)))?((((map__40253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40253):map__40253);
var path = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__35503__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__40059__auto___40259 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__35515__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__40059__auto___40259);
}

var seq__40255_40260 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__40256_40261 = null;
var count__40257_40262 = (0);
var i__40258_40263 = (0);
while(true){
if((i__40258_40263 < count__40257_40262)){
var property__40060__auto___40264 = cljs.core._nth.call(null,chunk__40256_40261,i__40258_40263);
if(cljs.core.truth_((base__40059__auto___40259[property__40060__auto___40264]))){
(devcards.core.CodeHighlight.prototype[property__40060__auto___40264] = (base__40059__auto___40259[property__40060__auto___40264]));
} else {
}

var G__40265 = seq__40255_40260;
var G__40266 = chunk__40256_40261;
var G__40267 = count__40257_40262;
var G__40268 = (i__40258_40263 + (1));
seq__40255_40260 = G__40265;
chunk__40256_40261 = G__40266;
count__40257_40262 = G__40267;
i__40258_40263 = G__40268;
continue;
} else {
var temp__4425__auto___40269 = cljs.core.seq.call(null,seq__40255_40260);
if(temp__4425__auto___40269){
var seq__40255_40270__$1 = temp__4425__auto___40269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40255_40270__$1)){
var c__36318__auto___40271 = cljs.core.chunk_first.call(null,seq__40255_40270__$1);
var G__40272 = cljs.core.chunk_rest.call(null,seq__40255_40270__$1);
var G__40273 = c__36318__auto___40271;
var G__40274 = cljs.core.count.call(null,c__36318__auto___40271);
var G__40275 = (0);
seq__40255_40260 = G__40272;
chunk__40256_40261 = G__40273;
count__40257_40262 = G__40274;
i__40258_40263 = G__40275;
continue;
} else {
var property__40060__auto___40276 = cljs.core.first.call(null,seq__40255_40270__$1);
if(cljs.core.truth_((base__40059__auto___40259[property__40060__auto___40276]))){
(devcards.core.CodeHighlight.prototype[property__40060__auto___40276] = (base__40059__auto___40259[property__40060__auto___40276]));
} else {
}

var G__40277 = cljs.core.next.call(null,seq__40255_40270__$1);
var G__40278 = null;
var G__40279 = (0);
var G__40280 = (0);
seq__40255_40260 = G__40277;
chunk__40256_40261 = G__40278;
count__40257_40262 = G__40279;
i__40258_40263 = G__40280;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__36428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36432__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36432__auto__,method_table__36428__auto__,prefer_table__36429__auto__,method_cache__36430__auto__,cached_hierarchy__36431__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__40281){
var map__40282 = p__40281;
var map__40282__$1 = ((((!((map__40282 == null)))?((((map__40282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40282):map__40282);
var content = cljs.core.get.call(null,map__40282__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__40284){
var map__40285 = p__40284;
var map__40285__$1 = ((((!((map__40285 == null)))?((((map__40285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40285):map__40285);
var block = map__40285__$1;
var content = cljs.core.get.call(null,map__40285__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__36580__auto__ = [];
var len__36573__auto___40289 = arguments.length;
var i__36574__auto___40290 = (0);
while(true){
if((i__36574__auto___40290 < len__36573__auto___40289)){
args__36580__auto__.push((arguments[i__36574__auto___40290]));

var G__40291 = (i__36574__auto___40290 + (1));
i__36574__auto___40290 = G__40291;
continue;
} else {
}
break;
}

var argseq__36581__auto__ = ((((0) < args__36580__auto__.length))?(new cljs.core.IndexedSeq(args__36580__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__36581__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs40288 = cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40288))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-markdown",null,"com-rigsomelight-devcards-typog",null], null), null)], null),attrs40288)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40288))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40288)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq40287){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40287));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("2")].join(''), "className": (function (){var G__40293 = devcards.system.devcards_rendered_card_class;
var G__40293__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__40293),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__40293);
var G__40293__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__40293__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__40293__$1);
return G__40293__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args40294 = [];
var len__36573__auto___40302 = arguments.length;
var i__36574__auto___40303 = (0);
while(true){
if((i__36574__auto___40303 < len__36573__auto___40302)){
args40294.push((arguments[i__36574__auto___40303]));

var G__40304 = (i__36574__auto___40303 + (1));
i__36574__auto___40303 = G__40304;
continue;
} else {
}
break;
}

var G__40296 = args40294.length;
switch (G__40296) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40294.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__40297 = card;
var map__40297__$1 = ((((!((map__40297 == null)))?((((map__40297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40297):map__40297);
var path = cljs.core.get.call(null,map__40297__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__40297__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], true))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": [cljs.core.str(cljs.core.hash.call(null,card)),cljs.core.str("1")].join(''), "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__40297,map__40297__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__40297,map__40297__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs40299 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs40299))?sablono.interpreter.attributes.call(null,attrs40299):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40299))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40299)], null))));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__36170__auto__ = (((this$ == null))?null:this$);
var m__36171__auto__ = (devcards.core._devcard_options[goog.typeOf(x__36170__auto__)]);
if(!((m__36171__auto__ == null))){
return m__36171__auto__.call(null,this$,devcard_opts);
} else {
var m__36171__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__36171__auto____$1 == null))){
return m__36171__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__36170__auto__ = (((this$ == null))?null:this$);
var m__36171__auto__ = (devcards.core._devcard[goog.typeOf(x__36170__auto__)]);
if(!((m__36171__auto__ == null))){
return m__36171__auto__.call(null,this$,devcard_opts);
} else {
var m__36171__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__36171__auto____$1 == null))){
return m__36171__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__40059__auto___40311 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs40306 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40306))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-dont-update",null], null), null)], null),attrs40306)):{"className": "com-rigsomelight-dont-update"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40306))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40306)], null))));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__40059__auto___40311);
}

var seq__40307_40312 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__40308_40313 = null;
var count__40309_40314 = (0);
var i__40310_40315 = (0);
while(true){
if((i__40310_40315 < count__40309_40314)){
var property__40060__auto___40316 = cljs.core._nth.call(null,chunk__40308_40313,i__40310_40315);
if(cljs.core.truth_((base__40059__auto___40311[property__40060__auto___40316]))){
(devcards.core.DontUpdate.prototype[property__40060__auto___40316] = (base__40059__auto___40311[property__40060__auto___40316]));
} else {
}

var G__40317 = seq__40307_40312;
var G__40318 = chunk__40308_40313;
var G__40319 = count__40309_40314;
var G__40320 = (i__40310_40315 + (1));
seq__40307_40312 = G__40317;
chunk__40308_40313 = G__40318;
count__40309_40314 = G__40319;
i__40310_40315 = G__40320;
continue;
} else {
var temp__4425__auto___40321 = cljs.core.seq.call(null,seq__40307_40312);
if(temp__4425__auto___40321){
var seq__40307_40322__$1 = temp__4425__auto___40321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40307_40322__$1)){
var c__36318__auto___40323 = cljs.core.chunk_first.call(null,seq__40307_40322__$1);
var G__40324 = cljs.core.chunk_rest.call(null,seq__40307_40322__$1);
var G__40325 = c__36318__auto___40323;
var G__40326 = cljs.core.count.call(null,c__36318__auto___40323);
var G__40327 = (0);
seq__40307_40312 = G__40324;
chunk__40308_40313 = G__40325;
count__40309_40314 = G__40326;
i__40310_40315 = G__40327;
continue;
} else {
var property__40060__auto___40328 = cljs.core.first.call(null,seq__40307_40322__$1);
if(cljs.core.truth_((base__40059__auto___40311[property__40060__auto___40328]))){
(devcards.core.DontUpdate.prototype[property__40060__auto___40328] = (base__40059__auto___40311[property__40060__auto___40328]));
} else {
}

var G__40329 = cljs.core.next.call(null,seq__40307_40322__$1);
var G__40330 = null;
var G__40331 = (0);
var G__40332 = (0);
seq__40307_40312 = G__40329;
chunk__40308_40313 = G__40330;
count__40309_40314 = G__40331;
i__40310_40315 = G__40332;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__35515__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__40059__auto___40340 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__35515__auto__ = (function (){var and__35503__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__35503__auto__)){
return this$.state;
} else {
return and__35503__auto__;
}
})();
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__35503__auto__ = data_atom;
if(cljs.core.truth_(and__35503__auto__)){
return id;
} else {
return and__35503__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = ((new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false)?devcards.core.dont_update.call(null,change_count,main_obj):main_obj);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs40335 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40335))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs40335)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40335))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40335)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep_indexed.call(null,((function (data_atom,card,change_count,options,main_obj_SINGLEQUOTE_,main_obj,main,hist_ctl,document,edn,card__$1,this$){
return (function (i,child){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,child));
});})(data_atom,card,change_count,options,main_obj_SINGLEQUOTE_,main_obj,main,hist_ctl,document,edn,card__$1,this$))
,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__40059__auto___40340);
}

var seq__40336_40341 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__40337_40342 = null;
var count__40338_40343 = (0);
var i__40339_40344 = (0);
while(true){
if((i__40339_40344 < count__40338_40343)){
var property__40060__auto___40345 = cljs.core._nth.call(null,chunk__40337_40342,i__40339_40344);
if(cljs.core.truth_((base__40059__auto___40340[property__40060__auto___40345]))){
(devcards.core.DevcardBase.prototype[property__40060__auto___40345] = (base__40059__auto___40340[property__40060__auto___40345]));
} else {
}

var G__40346 = seq__40336_40341;
var G__40347 = chunk__40337_40342;
var G__40348 = count__40338_40343;
var G__40349 = (i__40339_40344 + (1));
seq__40336_40341 = G__40346;
chunk__40337_40342 = G__40347;
count__40338_40343 = G__40348;
i__40339_40344 = G__40349;
continue;
} else {
var temp__4425__auto___40350 = cljs.core.seq.call(null,seq__40336_40341);
if(temp__4425__auto___40350){
var seq__40336_40351__$1 = temp__4425__auto___40350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40336_40351__$1)){
var c__36318__auto___40352 = cljs.core.chunk_first.call(null,seq__40336_40351__$1);
var G__40353 = cljs.core.chunk_rest.call(null,seq__40336_40351__$1);
var G__40354 = c__36318__auto___40352;
var G__40355 = cljs.core.count.call(null,c__36318__auto___40352);
var G__40356 = (0);
seq__40336_40341 = G__40353;
chunk__40337_40342 = G__40354;
count__40338_40343 = G__40355;
i__40339_40344 = G__40356;
continue;
} else {
var property__40060__auto___40357 = cljs.core.first.call(null,seq__40336_40351__$1);
if(cljs.core.truth_((base__40059__auto___40340[property__40060__auto___40357]))){
(devcards.core.DevcardBase.prototype[property__40060__auto___40357] = (base__40059__auto___40340[property__40060__auto___40357]));
} else {
}

var G__40358 = cljs.core.next.call(null,seq__40336_40351__$1);
var G__40359 = null;
var G__40360 = (0);
var G__40361 = (0);
seq__40336_40341 = G__40358;
chunk__40337_40342 = G__40359;
count__40338_40343 = G__40360;
i__40339_40344 = G__40361;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__40059__auto___40366 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__35503__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__35503__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__35503__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__40059__auto___40366);
}

var seq__40362_40367 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__40363_40368 = null;
var count__40364_40369 = (0);
var i__40365_40370 = (0);
while(true){
if((i__40365_40370 < count__40364_40369)){
var property__40060__auto___40371 = cljs.core._nth.call(null,chunk__40363_40368,i__40365_40370);
if(cljs.core.truth_((base__40059__auto___40366[property__40060__auto___40371]))){
(devcards.core.DomComponent.prototype[property__40060__auto___40371] = (base__40059__auto___40366[property__40060__auto___40371]));
} else {
}

var G__40372 = seq__40362_40367;
var G__40373 = chunk__40363_40368;
var G__40374 = count__40364_40369;
var G__40375 = (i__40365_40370 + (1));
seq__40362_40367 = G__40372;
chunk__40363_40368 = G__40373;
count__40364_40369 = G__40374;
i__40365_40370 = G__40375;
continue;
} else {
var temp__4425__auto___40376 = cljs.core.seq.call(null,seq__40362_40367);
if(temp__4425__auto___40376){
var seq__40362_40377__$1 = temp__4425__auto___40376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40362_40377__$1)){
var c__36318__auto___40378 = cljs.core.chunk_first.call(null,seq__40362_40377__$1);
var G__40379 = cljs.core.chunk_rest.call(null,seq__40362_40377__$1);
var G__40380 = c__36318__auto___40378;
var G__40381 = cljs.core.count.call(null,c__36318__auto___40378);
var G__40382 = (0);
seq__40362_40367 = G__40379;
chunk__40363_40368 = G__40380;
count__40364_40369 = G__40381;
i__40365_40370 = G__40382;
continue;
} else {
var property__40060__auto___40383 = cljs.core.first.call(null,seq__40362_40377__$1);
if(cljs.core.truth_((base__40059__auto___40366[property__40060__auto___40383]))){
(devcards.core.DomComponent.prototype[property__40060__auto___40383] = (base__40059__auto___40366[property__40060__auto___40383]));
} else {
}

var G__40384 = cljs.core.next.call(null,seq__40362_40377__$1);
var G__40385 = null;
var G__40386 = (0);
var G__40387 = (0);
seq__40362_40367 = G__40384;
chunk__40363_40368 = G__40385;
count__40364_40369 = G__40386;
i__40365_40370 = G__40387;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__35515__auto__ = x === true;
if(or__35515__auto__){
return or__35515__auto__;
} else {
var or__35515__auto____$1 = x === false;
if(or__35515__auto____$1){
return or__35515__auto____$1;
} else {
var or__35515__auto____$2 = (x == null);
if(or__35515__auto____$2){
return or__35515__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__35515__auto__ = typeof x === 'string';
if(or__35515__auto__){
return or__35515__auto__;
} else {
var or__35515__auto____$1 = (x == null);
if(or__35515__auto____$1){
return or__35515__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__35515__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__40388_SHARP_){
return !(p1__40388_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__40397 = opts;
var map__40397__$1 = ((((!((map__40397 == null)))?((((map__40397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40397):map__40397);
var name = cljs.core.get.call(null,map__40397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__40397__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__40397__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__40397__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__35515__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__35515__auto__){
return or__35515__auto__;
} else {
var or__35515__auto____$1 = (options == null);
if(or__35515__auto____$1){
return or__35515__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__35515__auto__ = (initial_data == null);
if(or__35515__auto__){
return or__35515__auto__;
} else {
var or__35515__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__35515__auto____$1){
return or__35515__auto____$1;
} else {
var or__35515__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__35515__auto____$2){
return or__35515__auto____$2;
} else {
var or__35515__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__35515__auto____$3){
return or__35515__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__40397,map__40397__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__40389_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__40389_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__40397,map__40397__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs40405 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs40405))?sablono.interpreter.attributes.call(null,attrs40405):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40405)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs40409 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40409))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-fail",null,"com-rigsomelight-devcards-panel-heading",null], null), null)], null),attrs40409)):{"className": "com-rigsomelight-devcards-fail com-rigsomelight-devcards-panel-heading"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40409)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs40410 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40410))?sablono.interpreter.attributes.call(null,attrs40410):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40410))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40410)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs40411 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40411))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-padding-top-border",null], null), null)], null),attrs40411)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40411))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40411)], null))));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__40412_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__40412_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36129__auto__,k__36130__auto__){
var self__ = this;
var this__36129__auto____$1 = this;
return cljs.core._lookup.call(null,this__36129__auto____$1,k__36130__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36131__auto__,k40414,else__36132__auto__){
var self__ = this;
var this__36131__auto____$1 = this;
var G__40416 = (((k40414 instanceof cljs.core.Keyword))?k40414.fqn:null);
switch (G__40416) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40414,else__36132__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36143__auto__,writer__36144__auto__,opts__36145__auto__){
var self__ = this;
var this__36143__auto____$1 = this;
var pr_pair__36146__auto__ = ((function (this__36143__auto____$1){
return (function (keyval__36147__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,cljs.core.pr_writer,""," ","",opts__36145__auto__,keyval__36147__auto__);
});})(this__36143__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,pr_pair__36146__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__36145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40413){
var self__ = this;
var G__40413__$1 = this;
return (new cljs.core.RecordIter((0),G__40413__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36127__auto__){
var self__ = this;
var this__36127__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36123__auto__){
var self__ = this;
var this__36123__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36133__auto__){
var self__ = this;
var this__36133__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36124__auto__){
var self__ = this;
var this__36124__auto____$1 = this;
var h__35950__auto__ = self__.__hash;
if(!((h__35950__auto__ == null))){
return h__35950__auto__;
} else {
var h__35950__auto____$1 = cljs.core.hash_imap.call(null,this__36124__auto____$1);
self__.__hash = h__35950__auto____$1;

return h__35950__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36125__auto__,other__36126__auto__){
var self__ = this;
var this__36125__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35503__auto__ = other__36126__auto__;
if(cljs.core.truth_(and__35503__auto__)){
var and__35503__auto____$1 = (this__36125__auto____$1.constructor === other__36126__auto__.constructor);
if(and__35503__auto____$1){
return cljs.core.equiv_map.call(null,this__36125__auto____$1,other__36126__auto__);
} else {
return and__35503__auto____$1;
}
} else {
return and__35503__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36138__auto__,k__36139__auto__){
var self__ = this;
var this__36138__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__36139__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36138__auto____$1),self__.__meta),k__36139__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36139__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36136__auto__,k__36137__auto__,G__40413){
var self__ = this;
var this__36136__auto____$1 = this;
var pred__40417 = cljs.core.keyword_identical_QMARK_;
var expr__40418 = k__36137__auto__;
if(cljs.core.truth_(pred__40417.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__40418))){
return (new devcards.core.IdentiyOptions(G__40413,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36137__auto__,G__40413),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36141__auto__){
var self__ = this;
var this__36141__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36128__auto__,G__40413){
var self__ = this;
var this__36128__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__40413,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36134__auto__,entry__36135__auto__){
var self__ = this;
var this__36134__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36135__auto__)){
return cljs.core._assoc.call(null,this__36134__auto____$1,cljs.core._nth.call(null,entry__36135__auto__,(0)),cljs.core._nth.call(null,entry__36135__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36134__auto____$1,entry__36135__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__36163__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__36163__auto__,writer__36164__auto__){
return cljs.core._write.call(null,writer__36164__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__40415){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__40415),null,cljs.core.dissoc.call(null,G__40415,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__40421){
var map__40424 = p__40421;
var map__40424__$1 = ((((!((map__40424 == null)))?((((map__40424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40424):map__40424);
var devcard_opts = map__40424__$1;
var options = cljs.core.get.call(null,map__40424__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__40424,map__40424__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__40424,map__40424__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36129__auto__,k__36130__auto__){
var self__ = this;
var this__36129__auto____$1 = this;
return cljs.core._lookup.call(null,this__36129__auto____$1,k__36130__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36131__auto__,k40427,else__36132__auto__){
var self__ = this;
var this__36131__auto____$1 = this;
var G__40429 = (((k40427 instanceof cljs.core.Keyword))?k40427.fqn:null);
switch (G__40429) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40427,else__36132__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36143__auto__,writer__36144__auto__,opts__36145__auto__){
var self__ = this;
var this__36143__auto____$1 = this;
var pr_pair__36146__auto__ = ((function (this__36143__auto____$1){
return (function (keyval__36147__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,cljs.core.pr_writer,""," ","",opts__36145__auto__,keyval__36147__auto__);
});})(this__36143__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,pr_pair__36146__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__36145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40426){
var self__ = this;
var G__40426__$1 = this;
return (new cljs.core.RecordIter((0),G__40426__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36127__auto__){
var self__ = this;
var this__36127__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36123__auto__){
var self__ = this;
var this__36123__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36133__auto__){
var self__ = this;
var this__36133__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36124__auto__){
var self__ = this;
var this__36124__auto____$1 = this;
var h__35950__auto__ = self__.__hash;
if(!((h__35950__auto__ == null))){
return h__35950__auto__;
} else {
var h__35950__auto____$1 = cljs.core.hash_imap.call(null,this__36124__auto____$1);
self__.__hash = h__35950__auto____$1;

return h__35950__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36125__auto__,other__36126__auto__){
var self__ = this;
var this__36125__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35503__auto__ = other__36126__auto__;
if(cljs.core.truth_(and__35503__auto__)){
var and__35503__auto____$1 = (this__36125__auto____$1.constructor === other__36126__auto__.constructor);
if(and__35503__auto____$1){
return cljs.core.equiv_map.call(null,this__36125__auto____$1,other__36126__auto__);
} else {
return and__35503__auto____$1;
}
} else {
return and__35503__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36138__auto__,k__36139__auto__){
var self__ = this;
var this__36138__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__36139__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36138__auto____$1),self__.__meta),k__36139__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36139__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36136__auto__,k__36137__auto__,G__40426){
var self__ = this;
var this__36136__auto____$1 = this;
var pred__40430 = cljs.core.keyword_identical_QMARK_;
var expr__40431 = k__36137__auto__;
if(cljs.core.truth_(pred__40430.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__40431))){
return (new devcards.core.AtomLikeOptions(G__40426,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36137__auto__,G__40426),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36141__auto__){
var self__ = this;
var this__36141__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36128__auto__,G__40426){
var self__ = this;
var this__36128__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__40426,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36134__auto__,entry__36135__auto__){
var self__ = this;
var this__36134__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36135__auto__)){
return cljs.core._assoc.call(null,this__36134__auto____$1,cljs.core._nth.call(null,entry__36135__auto__,(0)),cljs.core._nth.call(null,entry__36135__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36134__auto____$1,entry__36135__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__36163__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__36163__auto__,writer__36164__auto__){
return cljs.core._write.call(null,writer__36164__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__40428){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__40428),null,cljs.core.dissoc.call(null,G__40428,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36129__auto__,k__36130__auto__){
var self__ = this;
var this__36129__auto____$1 = this;
return cljs.core._lookup.call(null,this__36129__auto____$1,k__36130__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36131__auto__,k40437,else__36132__auto__){
var self__ = this;
var this__36131__auto____$1 = this;
var G__40439 = (((k40437 instanceof cljs.core.Keyword))?k40437.fqn:null);
switch (G__40439) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40437,else__36132__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36143__auto__,writer__36144__auto__,opts__36145__auto__){
var self__ = this;
var this__36143__auto____$1 = this;
var pr_pair__36146__auto__ = ((function (this__36143__auto____$1){
return (function (keyval__36147__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,cljs.core.pr_writer,""," ","",opts__36145__auto__,keyval__36147__auto__);
});})(this__36143__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36144__auto__,pr_pair__36146__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__36145__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40436){
var self__ = this;
var G__40436__$1 = this;
return (new cljs.core.RecordIter((0),G__40436__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36127__auto__){
var self__ = this;
var this__36127__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36123__auto__){
var self__ = this;
var this__36123__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36133__auto__){
var self__ = this;
var this__36133__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36124__auto__){
var self__ = this;
var this__36124__auto____$1 = this;
var h__35950__auto__ = self__.__hash;
if(!((h__35950__auto__ == null))){
return h__35950__auto__;
} else {
var h__35950__auto____$1 = cljs.core.hash_imap.call(null,this__36124__auto____$1);
self__.__hash = h__35950__auto____$1;

return h__35950__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36125__auto__,other__36126__auto__){
var self__ = this;
var this__36125__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35503__auto__ = other__36126__auto__;
if(cljs.core.truth_(and__35503__auto__)){
var and__35503__auto____$1 = (this__36125__auto____$1.constructor === other__36126__auto__.constructor);
if(and__35503__auto____$1){
return cljs.core.equiv_map.call(null,this__36125__auto____$1,other__36126__auto__);
} else {
return and__35503__auto____$1;
}
} else {
return and__35503__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36138__auto__,k__36139__auto__){
var self__ = this;
var this__36138__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__36139__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36138__auto____$1),self__.__meta),k__36139__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36139__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36136__auto__,k__36137__auto__,G__40436){
var self__ = this;
var this__36136__auto____$1 = this;
var pred__40440 = cljs.core.keyword_identical_QMARK_;
var expr__40441 = k__36137__auto__;
if(cljs.core.truth_(pred__40440.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__40441))){
return (new devcards.core.EdnLikeOptions(G__40436,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36137__auto__,G__40436),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36141__auto__){
var self__ = this;
var this__36141__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36128__auto__,G__40436){
var self__ = this;
var this__36128__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__40436,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36134__auto__,entry__36135__auto__){
var self__ = this;
var this__36134__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36135__auto__)){
return cljs.core._assoc.call(null,this__36134__auto____$1,cljs.core._nth.call(null,entry__36135__auto__,(0)),cljs.core._nth.call(null,entry__36135__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36134__auto____$1,entry__36135__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__36163__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__36163__auto__,writer__36164__auto__){
return cljs.core._write.call(null,writer__36164__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__40438){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__40438),null,cljs.core.dissoc.call(null,G__40438,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__35503__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__35503__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__35503__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__40455 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__40455 == null))){
if((false) || (G__40455.devcards$core$IDevcard$)){
return true;
} else {
if((!G__40455.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__40455);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__40455);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__40458 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__40458__$1 = ((((!((map__40458 == null)))?((((map__40458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40458):map__40458);
var history = cljs.core.get.call(null,map__40458__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__40458__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__40462 = cljs.core.deref.call(null,history_atom);
var map__40462__$1 = ((((!((map__40462 == null)))?((((map__40462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);
var history = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__40466 = cljs.core.deref.call(null,history_atom);
var map__40466__$1 = ((((!((map__40466 == null)))?((((map__40466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40466):map__40466);
var history = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__40470 = cljs.core.deref.call(null,history_atom);
var map__40470__$1 = ((((!((map__40470 == null)))?((((map__40470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40470):map__40470);
var history = cljs.core.get.call(null,map__40470__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__35503__auto__ = data_atom;
if(cljs.core.truth_(and__35503__auto__)){
return id;
} else {
return and__35503__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__40472){
var map__40473 = p__40472;
var map__40473__$1 = ((((!((map__40473 == null)))?((((map__40473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40473):map__40473);
var ha = map__40473__$1;
var pointer = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__35515__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__35515__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"}));
})()));
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_40488 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_40488;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__36428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36432__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36432__auto__,method_table__36428__auto__,prefer_table__36429__auto__,method_cache__36430__auto__,cached_hierarchy__36431__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs40489 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40489))?sablono.interpreter.attributes.call(null,attrs40489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40489))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40489)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__40490,body){
var map__40494 = p__40490;
var map__40494__$1 = ((((!((map__40494 == null)))?((((map__40494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40494):map__40494);
var message = cljs.core.get.call(null,map__40494__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs40496 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs40496))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-message",null], null), null)], null),attrs40496)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40496))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40496)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__40497){
var map__40505 = p__40497;
var map__40505__$1 = ((((!((map__40505 == null)))?((((map__40505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40505):map__40505);
var m = map__40505__$1;
var expected = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__40505__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs40507 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40507))?sablono.interpreter.attributes.call(null,attrs40507):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40507))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40507),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null))));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs40514 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs40514))?sablono.interpreter.attributes.call(null,attrs40514):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40514))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40514)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs40515 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40515))?sablono.interpreter.attributes.call(null,attrs40515):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40515))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40515)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__40516){
var map__40517 = p__40516;
var map__40517__$1 = ((((!((map__40517 == null)))?((((map__40517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40517):map__40517);
var testing_contexts = cljs.core.get.call(null,map__40517__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs40519 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__40517,map__40517__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__40517,map__40517__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40519))?sablono.interpreter.attributes.call(null,attrs40519):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40519))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40519)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs40524 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__40525,t){
var map__40526 = p__40525;
var map__40526__$1 = ((((!((map__40526 == null)))?((((map__40526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40526):map__40526);
var last_context = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__40526__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40524))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["com-rigsomelight-devcards-test-card",null], null), null)], null),attrs40524)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40524))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40524)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__40540){
var map__40541 = p__40540;
var map__40541__$1 = ((((!((map__40541 == null)))?((((map__40541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40541):map__40541);
var type = cljs.core.get.call(null,map__40541__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__40539 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__40539__$1 = ((((!((map__40539 == null)))?((((map__40539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40539):map__40539);
var fail = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__40539__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (p__40544){
var map__40545 = p__40544;
var map__40545__$1 = ((((!((map__40545 == null)))?((((map__40545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40545):map__40545);
var type = cljs.core.get.call(null,map__40545__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1){
return (function (p__40547){
var map__40548 = p__40547;
var map__40548__$1 = ((((!((map__40548 == null)))?((((map__40548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40548):map__40548);
var type = cljs.core.get.call(null,map__40548__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__40539,map__40539__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__35515__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__35515__auto__)){
return or__35515__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__39545__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39545__auto__){
return (function (){
var f__39546__auto__ = (function (){var switch__39524__auto__ = ((function (c__39545__auto__){
return (function (state_40636){
var state_val_40637 = (state_40636[(1)]);
if((state_val_40637 === (7))){
var state_40636__$1 = state_40636;
var statearr_40638_40687 = state_40636__$1;
(statearr_40638_40687[(2)] = false);

(statearr_40638_40687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (20))){
var inst_40577 = (state_40636[(7)]);
var inst_40596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40577);
var state_40636__$1 = state_40636;
var statearr_40639_40688 = state_40636__$1;
(statearr_40639_40688[(2)] = inst_40596);

(statearr_40639_40688[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (27))){
var inst_40601 = (state_40636[(8)]);
var inst_40611 = (state_40636[(9)]);
var inst_40615 = inst_40601.call(null,inst_40611);
var state_40636__$1 = state_40636;
var statearr_40640_40689 = state_40636__$1;
(statearr_40640_40689[(2)] = inst_40615);

(statearr_40640_40689[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (1))){
var state_40636__$1 = state_40636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40636__$1,(2),devcards.core.test_channel);
} else {
if((state_val_40637 === (24))){
var state_40636__$1 = state_40636;
var statearr_40641_40690 = state_40636__$1;
(statearr_40641_40690[(2)] = null);

(statearr_40641_40690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (4))){
var state_40636__$1 = state_40636;
var statearr_40642_40691 = state_40636__$1;
(statearr_40642_40691[(2)] = false);

(statearr_40642_40691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (15))){
var state_40636__$1 = state_40636;
var statearr_40643_40692 = state_40636__$1;
(statearr_40643_40692[(2)] = false);

(statearr_40643_40692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (21))){
var inst_40577 = (state_40636[(7)]);
var state_40636__$1 = state_40636;
var statearr_40644_40693 = state_40636__$1;
(statearr_40644_40693[(2)] = inst_40577);

(statearr_40644_40693[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (13))){
var inst_40634 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40636__$1,inst_40634);
} else {
if((state_val_40637 === (22))){
var inst_40600 = (state_40636[(10)]);
var inst_40599 = (state_40636[(2)]);
var inst_40600__$1 = cljs.core.get.call(null,inst_40599,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_40601 = cljs.core.get.call(null,inst_40599,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_40636__$1 = (function (){var statearr_40645 = state_40636;
(statearr_40645[(8)] = inst_40601);

(statearr_40645[(10)] = inst_40600__$1);

return statearr_40645;
})();
if(cljs.core.truth_(inst_40600__$1)){
var statearr_40646_40694 = state_40636__$1;
(statearr_40646_40694[(1)] = (23));

} else {
var statearr_40647_40695 = state_40636__$1;
(statearr_40647_40695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (29))){
var inst_40625 = (state_40636[(2)]);
var inst_40626 = cljs.test.clear_env_BANG_.call(null);
var state_40636__$1 = (function (){var statearr_40648 = state_40636;
(statearr_40648[(11)] = inst_40625);

(statearr_40648[(12)] = inst_40626);

return statearr_40648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40636__$1,(30),devcards.core.test_channel);
} else {
if((state_val_40637 === (6))){
var state_40636__$1 = state_40636;
var statearr_40649_40696 = state_40636__$1;
(statearr_40649_40696[(2)] = true);

(statearr_40649_40696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (28))){
var inst_40601 = (state_40636[(8)]);
var inst_40617 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_40618 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_40619 = cljs.core.PersistentHashMap.fromArrays(inst_40617,inst_40618);
var inst_40620 = devcards.core.collect_test.call(null,inst_40619);
var inst_40621 = cljs.test.get_current_env.call(null);
var inst_40622 = cljs.core.assoc.call(null,inst_40621,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_40623 = inst_40601.call(null,inst_40622);
var state_40636__$1 = (function (){var statearr_40650 = state_40636;
(statearr_40650[(13)] = inst_40620);

return statearr_40650;
})();
var statearr_40651_40697 = state_40636__$1;
(statearr_40651_40697[(2)] = inst_40623);

(statearr_40651_40697[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (25))){
var inst_40632 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
var statearr_40652_40698 = state_40636__$1;
(statearr_40652_40698[(2)] = inst_40632);

(statearr_40652_40698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (17))){
var state_40636__$1 = state_40636;
var statearr_40653_40699 = state_40636__$1;
(statearr_40653_40699[(2)] = true);

(statearr_40653_40699[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (3))){
var inst_40554 = (state_40636[(14)]);
var inst_40559 = inst_40554.cljs$lang$protocol_mask$partition0$;
var inst_40560 = (inst_40559 & (64));
var inst_40561 = inst_40554.cljs$core$ISeq$;
var inst_40562 = (inst_40560) || (inst_40561);
var state_40636__$1 = state_40636;
if(cljs.core.truth_(inst_40562)){
var statearr_40654_40700 = state_40636__$1;
(statearr_40654_40700[(1)] = (6));

} else {
var statearr_40655_40701 = state_40636__$1;
(statearr_40655_40701[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (12))){
var inst_40577 = (state_40636[(7)]);
var inst_40581 = (inst_40577 == null);
var inst_40582 = cljs.core.not.call(null,inst_40581);
var state_40636__$1 = state_40636;
if(inst_40582){
var statearr_40656_40702 = state_40636__$1;
(statearr_40656_40702[(1)] = (14));

} else {
var statearr_40657_40703 = state_40636__$1;
(statearr_40657_40703[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (2))){
var inst_40554 = (state_40636[(14)]);
var inst_40554__$1 = (state_40636[(2)]);
var inst_40556 = (inst_40554__$1 == null);
var inst_40557 = cljs.core.not.call(null,inst_40556);
var state_40636__$1 = (function (){var statearr_40658 = state_40636;
(statearr_40658[(14)] = inst_40554__$1);

return statearr_40658;
})();
if(inst_40557){
var statearr_40659_40704 = state_40636__$1;
(statearr_40659_40704[(1)] = (3));

} else {
var statearr_40660_40705 = state_40636__$1;
(statearr_40660_40705[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (23))){
var inst_40604 = (state_40636[(15)]);
var inst_40600 = (state_40636[(10)]);
var inst_40604__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_40605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40606 = devcards.core.run_card_tests.call(null,inst_40600);
var inst_40607 = [inst_40606,inst_40604__$1];
var inst_40608 = (new cljs.core.PersistentVector(null,2,(5),inst_40605,inst_40607,null));
var state_40636__$1 = (function (){var statearr_40661 = state_40636;
(statearr_40661[(15)] = inst_40604__$1);

return statearr_40661;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40636__$1,(26),inst_40608);
} else {
if((state_val_40637 === (19))){
var inst_40591 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
var statearr_40662_40706 = state_40636__$1;
(statearr_40662_40706[(2)] = inst_40591);

(statearr_40662_40706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (11))){
var inst_40554 = (state_40636[(14)]);
var inst_40574 = (state_40636[(2)]);
var inst_40575 = cljs.core.get.call(null,inst_40574,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_40576 = cljs.core.get.call(null,inst_40574,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_40577 = inst_40554;
var state_40636__$1 = (function (){var statearr_40663 = state_40636;
(statearr_40663[(16)] = inst_40576);

(statearr_40663[(7)] = inst_40577);

(statearr_40663[(17)] = inst_40575);

return statearr_40663;
})();
var statearr_40664_40707 = state_40636__$1;
(statearr_40664_40707[(2)] = null);

(statearr_40664_40707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (9))){
var inst_40554 = (state_40636[(14)]);
var inst_40571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40554);
var state_40636__$1 = state_40636;
var statearr_40665_40708 = state_40636__$1;
(statearr_40665_40708[(2)] = inst_40571);

(statearr_40665_40708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (5))){
var inst_40569 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
if(cljs.core.truth_(inst_40569)){
var statearr_40666_40709 = state_40636__$1;
(statearr_40666_40709[(1)] = (9));

} else {
var statearr_40667_40710 = state_40636__$1;
(statearr_40667_40710[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (14))){
var inst_40577 = (state_40636[(7)]);
var inst_40584 = inst_40577.cljs$lang$protocol_mask$partition0$;
var inst_40585 = (inst_40584 & (64));
var inst_40586 = inst_40577.cljs$core$ISeq$;
var inst_40587 = (inst_40585) || (inst_40586);
var state_40636__$1 = state_40636;
if(cljs.core.truth_(inst_40587)){
var statearr_40668_40711 = state_40636__$1;
(statearr_40668_40711[(1)] = (17));

} else {
var statearr_40669_40712 = state_40636__$1;
(statearr_40669_40712[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (26))){
var inst_40604 = (state_40636[(15)]);
var inst_40610 = (state_40636[(2)]);
var inst_40611 = cljs.core.nth.call(null,inst_40610,(0),null);
var inst_40612 = cljs.core.nth.call(null,inst_40610,(1),null);
var inst_40613 = cljs.core.not_EQ_.call(null,inst_40612,inst_40604);
var state_40636__$1 = (function (){var statearr_40670 = state_40636;
(statearr_40670[(9)] = inst_40611);

return statearr_40670;
})();
if(inst_40613){
var statearr_40671_40713 = state_40636__$1;
(statearr_40671_40713[(1)] = (27));

} else {
var statearr_40672_40714 = state_40636__$1;
(statearr_40672_40714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (16))){
var inst_40594 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
if(cljs.core.truth_(inst_40594)){
var statearr_40673_40715 = state_40636__$1;
(statearr_40673_40715[(1)] = (20));

} else {
var statearr_40674_40716 = state_40636__$1;
(statearr_40674_40716[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (30))){
var inst_40628 = (state_40636[(2)]);
var inst_40577 = inst_40628;
var state_40636__$1 = (function (){var statearr_40675 = state_40636;
(statearr_40675[(7)] = inst_40577);

return statearr_40675;
})();
var statearr_40676_40717 = state_40636__$1;
(statearr_40676_40717[(2)] = null);

(statearr_40676_40717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (10))){
var inst_40554 = (state_40636[(14)]);
var state_40636__$1 = state_40636;
var statearr_40677_40718 = state_40636__$1;
(statearr_40677_40718[(2)] = inst_40554);

(statearr_40677_40718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (18))){
var state_40636__$1 = state_40636;
var statearr_40678_40719 = state_40636__$1;
(statearr_40678_40719[(2)] = false);

(statearr_40678_40719[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (8))){
var inst_40566 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
var statearr_40679_40720 = state_40636__$1;
(statearr_40679_40720[(2)] = inst_40566);

(statearr_40679_40720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39545__auto__))
;
return ((function (switch__39524__auto__,c__39545__auto__){
return (function() {
var devcards$core$state_machine__39525__auto__ = null;
var devcards$core$state_machine__39525__auto____0 = (function (){
var statearr_40683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40683[(0)] = devcards$core$state_machine__39525__auto__);

(statearr_40683[(1)] = (1));

return statearr_40683;
});
var devcards$core$state_machine__39525__auto____1 = (function (state_40636){
while(true){
var ret_value__39526__auto__ = (function (){try{while(true){
var result__39527__auto__ = switch__39524__auto__.call(null,state_40636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39527__auto__;
}
break;
}
}catch (e40684){if((e40684 instanceof Object)){
var ex__39528__auto__ = e40684;
var statearr_40685_40721 = state_40636;
(statearr_40685_40721[(5)] = ex__39528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40722 = state_40636;
state_40636 = G__40722;
continue;
} else {
return ret_value__39526__auto__;
}
break;
}
});
devcards$core$state_machine__39525__auto__ = function(state_40636){
switch(arguments.length){
case 0:
return devcards$core$state_machine__39525__auto____0.call(this);
case 1:
return devcards$core$state_machine__39525__auto____1.call(this,state_40636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__39525__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__39525__auto____0;
devcards$core$state_machine__39525__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__39525__auto____1;
return devcards$core$state_machine__39525__auto__;
})()
;})(switch__39524__auto__,c__39545__auto__))
})();
var state__39547__auto__ = (function (){var statearr_40686 = f__39546__auto__.call(null);
(statearr_40686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39545__auto__);

return statearr_40686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39547__auto__);
});})(c__39545__auto__))
);

return c__39545__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__40059__auto___40727 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__40059__auto___40727);
}

var seq__40723_40728 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__40724_40729 = null;
var count__40725_40730 = (0);
var i__40726_40731 = (0);
while(true){
if((i__40726_40731 < count__40725_40730)){
var property__40060__auto___40732 = cljs.core._nth.call(null,chunk__40724_40729,i__40726_40731);
if(cljs.core.truth_((base__40059__auto___40727[property__40060__auto___40732]))){
(devcards.core.TestDevcard.prototype[property__40060__auto___40732] = (base__40059__auto___40727[property__40060__auto___40732]));
} else {
}

var G__40733 = seq__40723_40728;
var G__40734 = chunk__40724_40729;
var G__40735 = count__40725_40730;
var G__40736 = (i__40726_40731 + (1));
seq__40723_40728 = G__40733;
chunk__40724_40729 = G__40734;
count__40725_40730 = G__40735;
i__40726_40731 = G__40736;
continue;
} else {
var temp__4425__auto___40737 = cljs.core.seq.call(null,seq__40723_40728);
if(temp__4425__auto___40737){
var seq__40723_40738__$1 = temp__4425__auto___40737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40723_40738__$1)){
var c__36318__auto___40739 = cljs.core.chunk_first.call(null,seq__40723_40738__$1);
var G__40740 = cljs.core.chunk_rest.call(null,seq__40723_40738__$1);
var G__40741 = c__36318__auto___40739;
var G__40742 = cljs.core.count.call(null,c__36318__auto___40739);
var G__40743 = (0);
seq__40723_40728 = G__40740;
chunk__40724_40729 = G__40741;
count__40725_40730 = G__40742;
i__40726_40731 = G__40743;
continue;
} else {
var property__40060__auto___40744 = cljs.core.first.call(null,seq__40723_40738__$1);
if(cljs.core.truth_((base__40059__auto___40727[property__40060__auto___40744]))){
(devcards.core.TestDevcard.prototype[property__40060__auto___40744] = (base__40059__auto___40727[property__40060__auto___40744]));
} else {
}

var G__40745 = cljs.core.next.call(null,seq__40723_40738__$1);
var G__40746 = null;
var G__40747 = (0);
var G__40748 = (0);
seq__40723_40728 = G__40745;
chunk__40724_40729 = G__40746;
count__40725_40730 = G__40747;
i__40726_40731 = G__40748;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__36580__auto__ = [];
var len__36573__auto___40753 = arguments.length;
var i__36574__auto___40754 = (0);
while(true){
if((i__36574__auto___40754 < len__36573__auto___40753)){
args__36580__auto__.push((arguments[i__36574__auto___40754]));

var G__40755 = (i__36574__auto___40754 + (1));
i__36574__auto___40754 = G__40755;
continue;
} else {
}
break;
}

var argseq__36581__auto__ = ((((0) < args__36580__auto__.length))?(new cljs.core.IndexedSeq(args__36580__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__36581__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core40750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core40750 = (function (test_thunks,meta40751){
this.test_thunks = test_thunks;
this.meta40751 = meta40751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core40750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40752,meta40751__$1){
var self__ = this;
var _40752__$1 = this;
return (new devcards.core.t_devcards$core40750(self__.test_thunks,meta40751__$1));
});

devcards.core.t_devcards$core40750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40752){
var self__ = this;
var _40752__$1 = this;
return self__.meta40751;
});

devcards.core.t_devcards$core40750.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core40750.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core40750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta40751","meta40751",-776405708,null)], null);
});

devcards.core.t_devcards$core40750.cljs$lang$type = true;

devcards.core.t_devcards$core40750.cljs$lang$ctorStr = "devcards.core/t_devcards$core40750";

devcards.core.t_devcards$core40750.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"devcards.core/t_devcards$core40750");
});

devcards.core.__GT_t_devcards$core40750 = (function devcards$core$__GT_t_devcards$core40750(test_thunks__$1,meta40751){
return (new devcards.core.t_devcards$core40750(test_thunks__$1,meta40751));
});

}

return (new devcards.core.t_devcards$core40750(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq40749){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40749));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards__$1 = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs40757 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40757))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs40757)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40757))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40757)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs40759 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40759))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["com-rigsomelight-devcards-base",null,"com-rigsomelight-devcards-string-render",null], null), null)], null),attrs40759)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40759))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40759)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__39545__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39545__auto__){
return (function (){
var f__39546__auto__ = (function (){var switch__39524__auto__ = ((function (c__39545__auto__){
return (function (state_40789){
var state_val_40790 = (state_40789[(1)]);
if((state_val_40790 === (1))){
var inst_40780 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_40789__$1 = state_40789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40789__$1,(2),inst_40780);
} else {
if((state_val_40790 === (2))){
var inst_40782 = (state_40789[(2)]);
var inst_40783 = cljs.core.async.timeout.call(null,(100));
var state_40789__$1 = (function (){var statearr_40791 = state_40789;
(statearr_40791[(7)] = inst_40782);

return statearr_40791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40789__$1,(3),inst_40783);
} else {
if((state_val_40790 === (3))){
var inst_40785 = (state_40789[(2)]);
var inst_40786 = (function (){return ((function (inst_40785,state_val_40790,c__39545__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_40785,state_val_40790,c__39545__auto__))
})();
var inst_40787 = setTimeout(inst_40786,(0));
var state_40789__$1 = (function (){var statearr_40792 = state_40789;
(statearr_40792[(8)] = inst_40785);

return statearr_40792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40789__$1,inst_40787);
} else {
return null;
}
}
}
});})(c__39545__auto__))
;
return ((function (switch__39524__auto__,c__39545__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__39525__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__39525__auto____0 = (function (){
var statearr_40796 = [null,null,null,null,null,null,null,null,null];
(statearr_40796[(0)] = devcards$core$mount_namespace_$_state_machine__39525__auto__);

(statearr_40796[(1)] = (1));

return statearr_40796;
});
var devcards$core$mount_namespace_$_state_machine__39525__auto____1 = (function (state_40789){
while(true){
var ret_value__39526__auto__ = (function (){try{while(true){
var result__39527__auto__ = switch__39524__auto__.call(null,state_40789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39527__auto__;
}
break;
}
}catch (e40797){if((e40797 instanceof Object)){
var ex__39528__auto__ = e40797;
var statearr_40798_40800 = state_40789;
(statearr_40798_40800[(5)] = ex__39528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40801 = state_40789;
state_40789 = G__40801;
continue;
} else {
return ret_value__39526__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__39525__auto__ = function(state_40789){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__39525__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__39525__auto____1.call(this,state_40789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__39525__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__39525__auto____0;
devcards$core$mount_namespace_$_state_machine__39525__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__39525__auto____1;
return devcards$core$mount_namespace_$_state_machine__39525__auto__;
})()
;})(switch__39524__auto__,c__39545__auto__))
})();
var state__39547__auto__ = (function (){var statearr_40799 = f__39546__auto__.call(null);
(statearr_40799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39545__auto__);

return statearr_40799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39547__auto__);
});})(c__39545__auto__))
);

return c__39545__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1456752964645