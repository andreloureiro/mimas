// Compiled by ClojureScript 1.7.228 {}
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
devcards.core.react_element_type_symbol = (function (){var or__37443__auto__ = (function (){var and__37431__auto__ = typeof Symbol !== 'undefined';
if(and__37431__auto__){
var and__37431__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__37431__auto____$1){
var and__37431__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__37431__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__37431__auto____$2;
}
} else {
return and__37431__auto____$1;
}
} else {
return and__37431__auto__;
}
})();
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__51728_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__51728_SHARP_.detail], null));
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
var args51729 = [];
var len__38501__auto___51732 = arguments.length;
var i__38502__auto___51733 = (0);
while(true){
if((i__38502__auto___51733 < len__38501__auto___51732)){
args51729.push((arguments[i__38502__auto___51733]));

var G__51734 = (i__38502__auto___51733 + (1));
i__38502__auto___51733 = G__51734;
continue;
} else {
}
break;
}

var G__51731 = args51729.length;
switch (G__51731) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51729.length)].join('')));

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
var and__37431__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__37431__auto__){
var map__51742 = c;
var map__51742__$1 = ((((!((map__51742 == null)))?((((map__51742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51742):map__51742);
var path = cljs.core.get.call(null,map__51742__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__51742__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__37431__auto__;
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

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
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
var base__50973__auto___51748 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__37443__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__50973__auto___51748);
}

var seq__51744_51749 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__51745_51750 = null;
var count__51746_51751 = (0);
var i__51747_51752 = (0);
while(true){
if((i__51747_51752 < count__51746_51751)){
var property__50974__auto___51753 = cljs.core._nth.call(null,chunk__51745_51750,i__51747_51752);
if(cljs.core.truth_((base__50973__auto___51748[property__50974__auto___51753]))){
(devcards.core.CodeHighlight.prototype[property__50974__auto___51753] = (base__50973__auto___51748[property__50974__auto___51753]));
} else {
}

var G__51754 = seq__51744_51749;
var G__51755 = chunk__51745_51750;
var G__51756 = count__51746_51751;
var G__51757 = (i__51747_51752 + (1));
seq__51744_51749 = G__51754;
chunk__51745_51750 = G__51755;
count__51746_51751 = G__51756;
i__51747_51752 = G__51757;
continue;
} else {
var temp__4657__auto___51758 = cljs.core.seq.call(null,seq__51744_51749);
if(temp__4657__auto___51758){
var seq__51744_51759__$1 = temp__4657__auto___51758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51744_51759__$1)){
var c__38246__auto___51760 = cljs.core.chunk_first.call(null,seq__51744_51759__$1);
var G__51761 = cljs.core.chunk_rest.call(null,seq__51744_51759__$1);
var G__51762 = c__38246__auto___51760;
var G__51763 = cljs.core.count.call(null,c__38246__auto___51760);
var G__51764 = (0);
seq__51744_51749 = G__51761;
chunk__51745_51750 = G__51762;
count__51746_51751 = G__51763;
i__51747_51752 = G__51764;
continue;
} else {
var property__50974__auto___51765 = cljs.core.first.call(null,seq__51744_51759__$1);
if(cljs.core.truth_((base__50973__auto___51748[property__50974__auto___51765]))){
(devcards.core.CodeHighlight.prototype[property__50974__auto___51765] = (base__50973__auto___51748[property__50974__auto___51765]));
} else {
}

var G__51766 = cljs.core.next.call(null,seq__51744_51759__$1);
var G__51767 = null;
var G__51768 = (0);
var G__51769 = (0);
seq__51744_51749 = G__51766;
chunk__51745_51750 = G__51767;
count__51746_51751 = G__51768;
i__51747_51752 = G__51769;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__38356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38360__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38360__auto__,method_table__38356__auto__,prefer_table__38357__auto__,method_cache__38358__auto__,cached_hierarchy__38359__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__51770){
var map__51771 = p__51770;
var map__51771__$1 = ((((!((map__51771 == null)))?((((map__51771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51771):map__51771);
var content = cljs.core.get.call(null,map__51771__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__51773){
var map__51774 = p__51773;
var map__51774__$1 = ((((!((map__51774 == null)))?((((map__51774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51774):map__51774);
var block = map__51774__$1;
var content = cljs.core.get.call(null,map__51774__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__38508__auto__ = [];
var len__38501__auto___51777 = arguments.length;
var i__38502__auto___51778 = (0);
while(true){
if((i__38502__auto___51778 < len__38501__auto___51777)){
args__38508__auto__.push((arguments[i__38502__auto___51778]));

var G__51779 = (i__38502__auto___51778 + (1));
i__38502__auto___51778 = G__51779;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
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
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq51776){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51776));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__51781 = devcards.system.devcards_rendered_card_class;
var G__51781__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__51781),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__51781);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__51781__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__51781__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args51782 = [];
var len__38501__auto___51790 = arguments.length;
var i__38502__auto___51791 = (0);
while(true){
if((i__38502__auto___51791 < len__38501__auto___51790)){
args51782.push((arguments[i__38502__auto___51791]));

var G__51792 = (i__38502__auto___51791 + (1));
i__38502__auto___51791 = G__51792;
continue;
} else {
}
break;
}

var G__51784 = args51782.length;
switch (G__51784) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51782.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__51785 = card;
var map__51785__$1 = ((((!((map__51785 == null)))?((((map__51785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51785):map__51785);
var path = cljs.core.get.call(null,map__51785__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__51785__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__51785,map__51785__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__51785,map__51785__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs51787 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs51787))?sablono.interpreter.attributes.call(null,attrs51787):null),((cljs.core.map_QMARK_.call(null,attrs51787))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51787)], null)));
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
var x__38098__auto__ = (((this$ == null))?null:this$);
var m__38099__auto__ = (devcards.core._devcard_options[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,this$,devcard_opts);
} else {
var m__38099__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,this$,devcard_opts);
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
var x__38098__auto__ = (((this$ == null))?null:this$);
var m__38099__auto__ = (devcards.core._devcard[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,this$,devcard_opts);
} else {
var m__38099__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
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
var base__50973__auto___51799 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs51794 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51794))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs51794)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs51794))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51794)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__50973__auto___51799);
}

var seq__51795_51800 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__51796_51801 = null;
var count__51797_51802 = (0);
var i__51798_51803 = (0);
while(true){
if((i__51798_51803 < count__51797_51802)){
var property__50974__auto___51804 = cljs.core._nth.call(null,chunk__51796_51801,i__51798_51803);
if(cljs.core.truth_((base__50973__auto___51799[property__50974__auto___51804]))){
(devcards.core.DontUpdate.prototype[property__50974__auto___51804] = (base__50973__auto___51799[property__50974__auto___51804]));
} else {
}

var G__51805 = seq__51795_51800;
var G__51806 = chunk__51796_51801;
var G__51807 = count__51797_51802;
var G__51808 = (i__51798_51803 + (1));
seq__51795_51800 = G__51805;
chunk__51796_51801 = G__51806;
count__51797_51802 = G__51807;
i__51798_51803 = G__51808;
continue;
} else {
var temp__4657__auto___51809 = cljs.core.seq.call(null,seq__51795_51800);
if(temp__4657__auto___51809){
var seq__51795_51810__$1 = temp__4657__auto___51809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51795_51810__$1)){
var c__38246__auto___51811 = cljs.core.chunk_first.call(null,seq__51795_51810__$1);
var G__51812 = cljs.core.chunk_rest.call(null,seq__51795_51810__$1);
var G__51813 = c__38246__auto___51811;
var G__51814 = cljs.core.count.call(null,c__38246__auto___51811);
var G__51815 = (0);
seq__51795_51800 = G__51812;
chunk__51796_51801 = G__51813;
count__51797_51802 = G__51814;
i__51798_51803 = G__51815;
continue;
} else {
var property__50974__auto___51816 = cljs.core.first.call(null,seq__51795_51810__$1);
if(cljs.core.truth_((base__50973__auto___51799[property__50974__auto___51816]))){
(devcards.core.DontUpdate.prototype[property__50974__auto___51816] = (base__50973__auto___51799[property__50974__auto___51816]));
} else {
}

var G__51817 = cljs.core.next.call(null,seq__51795_51810__$1);
var G__51818 = null;
var G__51819 = (0);
var G__51820 = (0);
seq__51795_51800 = G__51817;
chunk__51796_51801 = G__51818;
count__51797_51802 = G__51819;
i__51798_51803 = G__51820;
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
var data = (function (){var or__37443__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
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
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main__$1),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__50973__auto___51827 = {"getInitialState": (function (){
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
return this$.setState((function (){var or__37443__auto__ = (function (){var and__37431__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__37431__auto__)){
return this$.state;
} else {
return and__37431__auto__;
}
})();
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
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
if(cljs.core.truth_((function (){var and__37431__auto__ = data_atom;
if(cljs.core.truth_(and__37431__auto__)){
return id;
} else {
return and__37431__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
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
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__50973__auto___51827);
}

var seq__51823_51828 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__51824_51829 = null;
var count__51825_51830 = (0);
var i__51826_51831 = (0);
while(true){
if((i__51826_51831 < count__51825_51830)){
var property__50974__auto___51832 = cljs.core._nth.call(null,chunk__51824_51829,i__51826_51831);
if(cljs.core.truth_((base__50973__auto___51827[property__50974__auto___51832]))){
(devcards.core.DevcardBase.prototype[property__50974__auto___51832] = (base__50973__auto___51827[property__50974__auto___51832]));
} else {
}

var G__51833 = seq__51823_51828;
var G__51834 = chunk__51824_51829;
var G__51835 = count__51825_51830;
var G__51836 = (i__51826_51831 + (1));
seq__51823_51828 = G__51833;
chunk__51824_51829 = G__51834;
count__51825_51830 = G__51835;
i__51826_51831 = G__51836;
continue;
} else {
var temp__4657__auto___51837 = cljs.core.seq.call(null,seq__51823_51828);
if(temp__4657__auto___51837){
var seq__51823_51838__$1 = temp__4657__auto___51837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51823_51838__$1)){
var c__38246__auto___51839 = cljs.core.chunk_first.call(null,seq__51823_51838__$1);
var G__51840 = cljs.core.chunk_rest.call(null,seq__51823_51838__$1);
var G__51841 = c__38246__auto___51839;
var G__51842 = cljs.core.count.call(null,c__38246__auto___51839);
var G__51843 = (0);
seq__51823_51828 = G__51840;
chunk__51824_51829 = G__51841;
count__51825_51830 = G__51842;
i__51826_51831 = G__51843;
continue;
} else {
var property__50974__auto___51844 = cljs.core.first.call(null,seq__51823_51838__$1);
if(cljs.core.truth_((base__50973__auto___51827[property__50974__auto___51844]))){
(devcards.core.DevcardBase.prototype[property__50974__auto___51844] = (base__50973__auto___51827[property__50974__auto___51844]));
} else {
}

var G__51845 = cljs.core.next.call(null,seq__51823_51838__$1);
var G__51846 = null;
var G__51847 = (0);
var G__51848 = (0);
seq__51823_51828 = G__51845;
chunk__51824_51829 = G__51846;
count__51825_51830 = G__51847;
i__51826_51831 = G__51848;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__50973__auto___51853 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__37431__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__37431__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__37431__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
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
devcards.core.DomComponent = React.createClass(base__50973__auto___51853);
}

var seq__51849_51854 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__51850_51855 = null;
var count__51851_51856 = (0);
var i__51852_51857 = (0);
while(true){
if((i__51852_51857 < count__51851_51856)){
var property__50974__auto___51858 = cljs.core._nth.call(null,chunk__51850_51855,i__51852_51857);
if(cljs.core.truth_((base__50973__auto___51853[property__50974__auto___51858]))){
(devcards.core.DomComponent.prototype[property__50974__auto___51858] = (base__50973__auto___51853[property__50974__auto___51858]));
} else {
}

var G__51859 = seq__51849_51854;
var G__51860 = chunk__51850_51855;
var G__51861 = count__51851_51856;
var G__51862 = (i__51852_51857 + (1));
seq__51849_51854 = G__51859;
chunk__51850_51855 = G__51860;
count__51851_51856 = G__51861;
i__51852_51857 = G__51862;
continue;
} else {
var temp__4657__auto___51863 = cljs.core.seq.call(null,seq__51849_51854);
if(temp__4657__auto___51863){
var seq__51849_51864__$1 = temp__4657__auto___51863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51849_51864__$1)){
var c__38246__auto___51865 = cljs.core.chunk_first.call(null,seq__51849_51864__$1);
var G__51866 = cljs.core.chunk_rest.call(null,seq__51849_51864__$1);
var G__51867 = c__38246__auto___51865;
var G__51868 = cljs.core.count.call(null,c__38246__auto___51865);
var G__51869 = (0);
seq__51849_51854 = G__51866;
chunk__51850_51855 = G__51867;
count__51851_51856 = G__51868;
i__51852_51857 = G__51869;
continue;
} else {
var property__50974__auto___51870 = cljs.core.first.call(null,seq__51849_51864__$1);
if(cljs.core.truth_((base__50973__auto___51853[property__50974__auto___51870]))){
(devcards.core.DomComponent.prototype[property__50974__auto___51870] = (base__50973__auto___51853[property__50974__auto___51870]));
} else {
}

var G__51871 = cljs.core.next.call(null,seq__51849_51864__$1);
var G__51872 = null;
var G__51873 = (0);
var G__51874 = (0);
seq__51849_51854 = G__51871;
chunk__51850_51855 = G__51872;
count__51851_51856 = G__51873;
i__51852_51857 = G__51874;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__37443__auto__ = x === true;
if(or__37443__auto__){
return or__37443__auto__;
} else {
var or__37443__auto____$1 = x === false;
if(or__37443__auto____$1){
return or__37443__auto____$1;
} else {
var or__37443__auto____$2 = (x == null);
if(or__37443__auto____$2){
return or__37443__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__37443__auto__ = typeof x === 'string';
if(or__37443__auto__){
return or__37443__auto__;
} else {
var or__37443__auto____$1 = (x == null);
if(or__37443__auto____$1){
return or__37443__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__37443__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__51875_SHARP_){
return !(p1__51875_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__51884 = opts;
var map__51884__$1 = ((((!((map__51884 == null)))?((((map__51884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51884):map__51884);
var name = cljs.core.get.call(null,map__51884__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__51884__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__51884__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__51884__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__37443__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__37443__auto__){
return or__37443__auto__;
} else {
var or__37443__auto____$1 = (options == null);
if(or__37443__auto____$1){
return or__37443__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__37443__auto__ = (initial_data == null);
if(or__37443__auto__){
return or__37443__auto__;
} else {
var or__37443__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__37443__auto____$1){
return or__37443__auto____$1;
} else {
var or__37443__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__37443__auto____$2){
return or__37443__auto____$2;
} else {
var or__37443__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__37443__auto____$3){
return or__37443__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__51884,map__51884__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__51876_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__51876_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__51884,map__51884__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs51892 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs51892))?sablono.interpreter.attributes.call(null,attrs51892):null),((cljs.core.map_QMARK_.call(null,attrs51892))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51892)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs51896 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51896))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs51896)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs51896))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51896)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs51897 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51897))?sablono.interpreter.attributes.call(null,attrs51897):null),((cljs.core.map_QMARK_.call(null,attrs51897))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51897)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs51898 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51898))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs51898)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs51898))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51898)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__51899_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__51899_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__38057__auto__,k__38058__auto__){
var self__ = this;
var this__38057__auto____$1 = this;
return cljs.core._lookup.call(null,this__38057__auto____$1,k__38058__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__38059__auto__,k51901,else__38060__auto__){
var self__ = this;
var this__38059__auto____$1 = this;
var G__51903 = (((k51901 instanceof cljs.core.Keyword))?k51901.fqn:null);
switch (G__51903) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51901,else__38060__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__38071__auto__,writer__38072__auto__,opts__38073__auto__){
var self__ = this;
var this__38071__auto____$1 = this;
var pr_pair__38074__auto__ = ((function (this__38071__auto____$1){
return (function (keyval__38075__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,cljs.core.pr_writer,""," ","",opts__38073__auto__,keyval__38075__auto__);
});})(this__38071__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,pr_pair__38074__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__38073__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51900){
var self__ = this;
var G__51900__$1 = this;
return (new cljs.core.RecordIter((0),G__51900__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__38055__auto__){
var self__ = this;
var this__38055__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__38051__auto__){
var self__ = this;
var this__38051__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__38061__auto__){
var self__ = this;
var this__38061__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__38052__auto__){
var self__ = this;
var this__38052__auto____$1 = this;
var h__37878__auto__ = self__.__hash;
if(!((h__37878__auto__ == null))){
return h__37878__auto__;
} else {
var h__37878__auto____$1 = cljs.core.hash_imap.call(null,this__38052__auto____$1);
self__.__hash = h__37878__auto____$1;

return h__37878__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__38053__auto__,other__38054__auto__){
var self__ = this;
var this__38053__auto____$1 = this;
if(cljs.core.truth_((function (){var and__37431__auto__ = other__38054__auto__;
if(cljs.core.truth_(and__37431__auto__)){
var and__37431__auto____$1 = (this__38053__auto____$1.constructor === other__38054__auto__.constructor);
if(and__37431__auto____$1){
return cljs.core.equiv_map.call(null,this__38053__auto____$1,other__38054__auto__);
} else {
return and__37431__auto____$1;
}
} else {
return and__37431__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__38066__auto__,k__38067__auto__){
var self__ = this;
var this__38066__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__38067__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__38066__auto____$1),self__.__meta),k__38067__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__38067__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__38064__auto__,k__38065__auto__,G__51900){
var self__ = this;
var this__38064__auto____$1 = this;
var pred__51904 = cljs.core.keyword_identical_QMARK_;
var expr__51905 = k__38065__auto__;
if(cljs.core.truth_(pred__51904.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__51905))){
return (new devcards.core.IdentiyOptions(G__51900,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__38065__auto__,G__51900),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38069__auto__){
var self__ = this;
var this__38069__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__38056__auto__,G__51900){
var self__ = this;
var this__38056__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__51900,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__38062__auto__,entry__38063__auto__){
var self__ = this;
var this__38062__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__38063__auto__)){
return cljs.core._assoc.call(null,this__38062__auto____$1,cljs.core._nth.call(null,entry__38063__auto__,(0)),cljs.core._nth.call(null,entry__38063__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__38062__auto____$1,entry__38063__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__38091__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__38091__auto__,writer__38092__auto__){
return cljs.core._write.call(null,writer__38092__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__51902){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51902),null,cljs.core.dissoc.call(null,G__51902,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__51908){
var map__51911 = p__51908;
var map__51911__$1 = ((((!((map__51911 == null)))?((((map__51911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51911):map__51911);
var devcard_opts = map__51911__$1;
var options = cljs.core.get.call(null,map__51911__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__51911,map__51911__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__51911,map__51911__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__38057__auto__,k__38058__auto__){
var self__ = this;
var this__38057__auto____$1 = this;
return cljs.core._lookup.call(null,this__38057__auto____$1,k__38058__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__38059__auto__,k51914,else__38060__auto__){
var self__ = this;
var this__38059__auto____$1 = this;
var G__51916 = (((k51914 instanceof cljs.core.Keyword))?k51914.fqn:null);
switch (G__51916) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51914,else__38060__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__38071__auto__,writer__38072__auto__,opts__38073__auto__){
var self__ = this;
var this__38071__auto____$1 = this;
var pr_pair__38074__auto__ = ((function (this__38071__auto____$1){
return (function (keyval__38075__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,cljs.core.pr_writer,""," ","",opts__38073__auto__,keyval__38075__auto__);
});})(this__38071__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,pr_pair__38074__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__38073__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51913){
var self__ = this;
var G__51913__$1 = this;
return (new cljs.core.RecordIter((0),G__51913__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__38055__auto__){
var self__ = this;
var this__38055__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__38051__auto__){
var self__ = this;
var this__38051__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__38061__auto__){
var self__ = this;
var this__38061__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__38052__auto__){
var self__ = this;
var this__38052__auto____$1 = this;
var h__37878__auto__ = self__.__hash;
if(!((h__37878__auto__ == null))){
return h__37878__auto__;
} else {
var h__37878__auto____$1 = cljs.core.hash_imap.call(null,this__38052__auto____$1);
self__.__hash = h__37878__auto____$1;

return h__37878__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__38053__auto__,other__38054__auto__){
var self__ = this;
var this__38053__auto____$1 = this;
if(cljs.core.truth_((function (){var and__37431__auto__ = other__38054__auto__;
if(cljs.core.truth_(and__37431__auto__)){
var and__37431__auto____$1 = (this__38053__auto____$1.constructor === other__38054__auto__.constructor);
if(and__37431__auto____$1){
return cljs.core.equiv_map.call(null,this__38053__auto____$1,other__38054__auto__);
} else {
return and__37431__auto____$1;
}
} else {
return and__37431__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__38066__auto__,k__38067__auto__){
var self__ = this;
var this__38066__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__38067__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__38066__auto____$1),self__.__meta),k__38067__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__38067__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__38064__auto__,k__38065__auto__,G__51913){
var self__ = this;
var this__38064__auto____$1 = this;
var pred__51917 = cljs.core.keyword_identical_QMARK_;
var expr__51918 = k__38065__auto__;
if(cljs.core.truth_(pred__51917.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__51918))){
return (new devcards.core.AtomLikeOptions(G__51913,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__38065__auto__,G__51913),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38069__auto__){
var self__ = this;
var this__38069__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__38056__auto__,G__51913){
var self__ = this;
var this__38056__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__51913,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__38062__auto__,entry__38063__auto__){
var self__ = this;
var this__38062__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__38063__auto__)){
return cljs.core._assoc.call(null,this__38062__auto____$1,cljs.core._nth.call(null,entry__38063__auto__,(0)),cljs.core._nth.call(null,entry__38063__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__38062__auto____$1,entry__38063__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__38091__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__38091__auto__,writer__38092__auto__){
return cljs.core._write.call(null,writer__38092__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__51915){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51915),null,cljs.core.dissoc.call(null,G__51915,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__38057__auto__,k__38058__auto__){
var self__ = this;
var this__38057__auto____$1 = this;
return cljs.core._lookup.call(null,this__38057__auto____$1,k__38058__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__38059__auto__,k51924,else__38060__auto__){
var self__ = this;
var this__38059__auto____$1 = this;
var G__51926 = (((k51924 instanceof cljs.core.Keyword))?k51924.fqn:null);
switch (G__51926) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51924,else__38060__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__38071__auto__,writer__38072__auto__,opts__38073__auto__){
var self__ = this;
var this__38071__auto____$1 = this;
var pr_pair__38074__auto__ = ((function (this__38071__auto____$1){
return (function (keyval__38075__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,cljs.core.pr_writer,""," ","",opts__38073__auto__,keyval__38075__auto__);
});})(this__38071__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__38072__auto__,pr_pair__38074__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__38073__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51923){
var self__ = this;
var G__51923__$1 = this;
return (new cljs.core.RecordIter((0),G__51923__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__38055__auto__){
var self__ = this;
var this__38055__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__38051__auto__){
var self__ = this;
var this__38051__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__38061__auto__){
var self__ = this;
var this__38061__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__38052__auto__){
var self__ = this;
var this__38052__auto____$1 = this;
var h__37878__auto__ = self__.__hash;
if(!((h__37878__auto__ == null))){
return h__37878__auto__;
} else {
var h__37878__auto____$1 = cljs.core.hash_imap.call(null,this__38052__auto____$1);
self__.__hash = h__37878__auto____$1;

return h__37878__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__38053__auto__,other__38054__auto__){
var self__ = this;
var this__38053__auto____$1 = this;
if(cljs.core.truth_((function (){var and__37431__auto__ = other__38054__auto__;
if(cljs.core.truth_(and__37431__auto__)){
var and__37431__auto____$1 = (this__38053__auto____$1.constructor === other__38054__auto__.constructor);
if(and__37431__auto____$1){
return cljs.core.equiv_map.call(null,this__38053__auto____$1,other__38054__auto__);
} else {
return and__37431__auto____$1;
}
} else {
return and__37431__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__38066__auto__,k__38067__auto__){
var self__ = this;
var this__38066__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__38067__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__38066__auto____$1),self__.__meta),k__38067__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__38067__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__38064__auto__,k__38065__auto__,G__51923){
var self__ = this;
var this__38064__auto____$1 = this;
var pred__51927 = cljs.core.keyword_identical_QMARK_;
var expr__51928 = k__38065__auto__;
if(cljs.core.truth_(pred__51927.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__51928))){
return (new devcards.core.EdnLikeOptions(G__51923,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__38065__auto__,G__51923),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__38069__auto__){
var self__ = this;
var this__38069__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__38056__auto__,G__51923){
var self__ = this;
var this__38056__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__51923,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__38062__auto__,entry__38063__auto__){
var self__ = this;
var this__38062__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__38063__auto__)){
return cljs.core._assoc.call(null,this__38062__auto____$1,cljs.core._nth.call(null,entry__38063__auto__,(0)),cljs.core._nth.call(null,entry__38063__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__38062__auto____$1,entry__38063__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__38091__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__38091__auto__,writer__38092__auto__){
return cljs.core._write.call(null,writer__38092__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__51925){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__51925),null,cljs.core.dissoc.call(null,G__51925,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__37431__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__37431__auto__){
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
return and__37431__auto__;
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
if((function (){var G__51942 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__51942 == null))){
if((false) || (G__51942.devcards$core$IDevcard$)){
return true;
} else {
if((!G__51942.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__51942);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__51942);
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
var map__51945 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__51945__$1 = ((((!((map__51945 == null)))?((((map__51945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51945):map__51945);
var history = cljs.core.get.call(null,map__51945__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__51945__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__51949 = cljs.core.deref.call(null,history_atom);
var map__51949__$1 = ((((!((map__51949 == null)))?((((map__51949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51949):map__51949);
var history = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__51953 = cljs.core.deref.call(null,history_atom);
var map__51953__$1 = ((((!((map__51953 == null)))?((((map__51953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51953):map__51953);
var history = cljs.core.get.call(null,map__51953__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__51953__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__51957 = cljs.core.deref.call(null,history_atom);
var map__51957__$1 = ((((!((map__51957 == null)))?((((map__51957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51957):map__51957);
var history = cljs.core.get.call(null,map__51957__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
if(cljs.core.truth_((function (){var and__37431__auto__ = data_atom;
if(cljs.core.truth_(and__37431__auto__)){
return id;
} else {
return and__37431__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__51959){
var map__51960 = p__51959;
var map__51960__$1 = ((((!((map__51960 == null)))?((((map__51960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51960):map__51960);
var ha = map__51960__$1;
var pointer = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__51960__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
if(cljs.core.truth_((function (){var or__37443__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__37443__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
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
var _STAR_current_env_STAR_51975 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_51975;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__38356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38360__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38360__auto__,method_table__38356__auto__,prefer_table__38357__auto__,method_cache__38358__auto__,cached_hierarchy__38359__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs51976 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51976))?sablono.interpreter.attributes.call(null,attrs51976):null),((cljs.core.map_QMARK_.call(null,attrs51976))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51976)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__51977,body){
var map__51981 = p__51977;
var map__51981__$1 = ((((!((map__51981 == null)))?((((map__51981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51981):map__51981);
var message = cljs.core.get.call(null,map__51981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs51983 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs51983))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs51983)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs51983))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51983)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__51984){
var map__51992 = p__51984;
var map__51992__$1 = ((((!((map__51992 == null)))?((((map__51992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51992):map__51992);
var m = map__51992__$1;
var expected = cljs.core.get.call(null,map__51992__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__51992__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__51992__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs51994 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs51994))?sablono.interpreter.attributes.call(null,attrs51994):null),((cljs.core.map_QMARK_.call(null,attrs51994))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51994),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs52001 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs52001))?sablono.interpreter.attributes.call(null,attrs52001):null),((cljs.core.map_QMARK_.call(null,attrs52001))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52001)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs52002 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52002))?sablono.interpreter.attributes.call(null,attrs52002):null),((cljs.core.map_QMARK_.call(null,attrs52002))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52002)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__52003){
var map__52004 = p__52003;
var map__52004__$1 = ((((!((map__52004 == null)))?((((map__52004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52004):map__52004);
var testing_contexts = cljs.core.get.call(null,map__52004__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs52006 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__52004,map__52004__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__52004,map__52004__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52006))?sablono.interpreter.attributes.call(null,attrs52006):null),((cljs.core.map_QMARK_.call(null,attrs52006))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52006)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs52011 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__52012,t){
var map__52013 = p__52012;
var map__52013__$1 = ((((!((map__52013 == null)))?((((map__52013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52013):map__52013);
var last_context = cljs.core.get.call(null,map__52013__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__52013__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52011))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs52011)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs52011))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52011)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__52027){
var map__52028 = p__52027;
var map__52028__$1 = ((((!((map__52028 == null)))?((((map__52028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52028):map__52028);
var type = cljs.core.get.call(null,map__52028__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__52026 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__52026__$1 = ((((!((map__52026 == null)))?((((map__52026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52026):map__52026);
var fail = cljs.core.get.call(null,map__52026__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__52026__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__52026__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (p__52031){
var map__52032 = p__52031;
var map__52032__$1 = ((((!((map__52032 == null)))?((((map__52032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52032):map__52032);
var type = cljs.core.get.call(null,map__52032__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1){
return (function (p__52034){
var map__52035 = p__52034;
var map__52035__$1 = ((((!((map__52035 == null)))?((((map__52035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52035):map__52035);
var type = cljs.core.get.call(null,map__52035__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__52026,map__52026__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__37443__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
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
devcards.core.test_loop = (function (){var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_52123){
var state_val_52124 = (state_52123[(1)]);
if((state_val_52124 === (7))){
var state_52123__$1 = state_52123;
var statearr_52125_52174 = state_52123__$1;
(statearr_52125_52174[(2)] = false);

(statearr_52125_52174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (20))){
var inst_52064 = (state_52123[(7)]);
var inst_52083 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52064);
var state_52123__$1 = state_52123;
var statearr_52126_52175 = state_52123__$1;
(statearr_52126_52175[(2)] = inst_52083);

(statearr_52126_52175[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (27))){
var inst_52098 = (state_52123[(8)]);
var inst_52088 = (state_52123[(9)]);
var inst_52102 = inst_52088.call(null,inst_52098);
var state_52123__$1 = state_52123;
var statearr_52127_52176 = state_52123__$1;
(statearr_52127_52176[(2)] = inst_52102);

(statearr_52127_52176[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (1))){
var state_52123__$1 = state_52123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52123__$1,(2),devcards.core.test_channel);
} else {
if((state_val_52124 === (24))){
var state_52123__$1 = state_52123;
var statearr_52128_52177 = state_52123__$1;
(statearr_52128_52177[(2)] = null);

(statearr_52128_52177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (4))){
var state_52123__$1 = state_52123;
var statearr_52129_52178 = state_52123__$1;
(statearr_52129_52178[(2)] = false);

(statearr_52129_52178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (15))){
var state_52123__$1 = state_52123;
var statearr_52130_52179 = state_52123__$1;
(statearr_52130_52179[(2)] = false);

(statearr_52130_52179[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (21))){
var inst_52064 = (state_52123[(7)]);
var state_52123__$1 = state_52123;
var statearr_52131_52180 = state_52123__$1;
(statearr_52131_52180[(2)] = inst_52064);

(statearr_52131_52180[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (13))){
var inst_52121 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52123__$1,inst_52121);
} else {
if((state_val_52124 === (22))){
var inst_52087 = (state_52123[(10)]);
var inst_52086 = (state_52123[(2)]);
var inst_52087__$1 = cljs.core.get.call(null,inst_52086,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_52088 = cljs.core.get.call(null,inst_52086,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_52123__$1 = (function (){var statearr_52132 = state_52123;
(statearr_52132[(10)] = inst_52087__$1);

(statearr_52132[(9)] = inst_52088);

return statearr_52132;
})();
if(cljs.core.truth_(inst_52087__$1)){
var statearr_52133_52181 = state_52123__$1;
(statearr_52133_52181[(1)] = (23));

} else {
var statearr_52134_52182 = state_52123__$1;
(statearr_52134_52182[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (29))){
var inst_52112 = (state_52123[(2)]);
var inst_52113 = cljs.test.clear_env_BANG_.call(null);
var state_52123__$1 = (function (){var statearr_52135 = state_52123;
(statearr_52135[(11)] = inst_52113);

(statearr_52135[(12)] = inst_52112);

return statearr_52135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52123__$1,(30),devcards.core.test_channel);
} else {
if((state_val_52124 === (6))){
var state_52123__$1 = state_52123;
var statearr_52136_52183 = state_52123__$1;
(statearr_52136_52183[(2)] = true);

(statearr_52136_52183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (28))){
var inst_52088 = (state_52123[(9)]);
var inst_52104 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_52105 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_52106 = cljs.core.PersistentHashMap.fromArrays(inst_52104,inst_52105);
var inst_52107 = devcards.core.collect_test.call(null,inst_52106);
var inst_52108 = cljs.test.get_current_env.call(null);
var inst_52109 = cljs.core.assoc.call(null,inst_52108,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_52110 = inst_52088.call(null,inst_52109);
var state_52123__$1 = (function (){var statearr_52137 = state_52123;
(statearr_52137[(13)] = inst_52107);

return statearr_52137;
})();
var statearr_52138_52184 = state_52123__$1;
(statearr_52138_52184[(2)] = inst_52110);

(statearr_52138_52184[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (25))){
var inst_52119 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
var statearr_52139_52185 = state_52123__$1;
(statearr_52139_52185[(2)] = inst_52119);

(statearr_52139_52185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (17))){
var state_52123__$1 = state_52123;
var statearr_52140_52186 = state_52123__$1;
(statearr_52140_52186[(2)] = true);

(statearr_52140_52186[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (3))){
var inst_52041 = (state_52123[(14)]);
var inst_52046 = inst_52041.cljs$lang$protocol_mask$partition0$;
var inst_52047 = (inst_52046 & (64));
var inst_52048 = inst_52041.cljs$core$ISeq$;
var inst_52049 = (inst_52047) || (inst_52048);
var state_52123__$1 = state_52123;
if(cljs.core.truth_(inst_52049)){
var statearr_52141_52187 = state_52123__$1;
(statearr_52141_52187[(1)] = (6));

} else {
var statearr_52142_52188 = state_52123__$1;
(statearr_52142_52188[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (12))){
var inst_52064 = (state_52123[(7)]);
var inst_52068 = (inst_52064 == null);
var inst_52069 = cljs.core.not.call(null,inst_52068);
var state_52123__$1 = state_52123;
if(inst_52069){
var statearr_52143_52189 = state_52123__$1;
(statearr_52143_52189[(1)] = (14));

} else {
var statearr_52144_52190 = state_52123__$1;
(statearr_52144_52190[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (2))){
var inst_52041 = (state_52123[(14)]);
var inst_52041__$1 = (state_52123[(2)]);
var inst_52043 = (inst_52041__$1 == null);
var inst_52044 = cljs.core.not.call(null,inst_52043);
var state_52123__$1 = (function (){var statearr_52145 = state_52123;
(statearr_52145[(14)] = inst_52041__$1);

return statearr_52145;
})();
if(inst_52044){
var statearr_52146_52191 = state_52123__$1;
(statearr_52146_52191[(1)] = (3));

} else {
var statearr_52147_52192 = state_52123__$1;
(statearr_52147_52192[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (23))){
var inst_52087 = (state_52123[(10)]);
var inst_52091 = (state_52123[(15)]);
var inst_52091__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_52092 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52093 = devcards.core.run_card_tests.call(null,inst_52087);
var inst_52094 = [inst_52093,inst_52091__$1];
var inst_52095 = (new cljs.core.PersistentVector(null,2,(5),inst_52092,inst_52094,null));
var state_52123__$1 = (function (){var statearr_52148 = state_52123;
(statearr_52148[(15)] = inst_52091__$1);

return statearr_52148;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52123__$1,(26),inst_52095);
} else {
if((state_val_52124 === (19))){
var inst_52078 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
var statearr_52149_52193 = state_52123__$1;
(statearr_52149_52193[(2)] = inst_52078);

(statearr_52149_52193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (11))){
var inst_52041 = (state_52123[(14)]);
var inst_52061 = (state_52123[(2)]);
var inst_52062 = cljs.core.get.call(null,inst_52061,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_52063 = cljs.core.get.call(null,inst_52061,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_52064 = inst_52041;
var state_52123__$1 = (function (){var statearr_52150 = state_52123;
(statearr_52150[(16)] = inst_52062);

(statearr_52150[(17)] = inst_52063);

(statearr_52150[(7)] = inst_52064);

return statearr_52150;
})();
var statearr_52151_52194 = state_52123__$1;
(statearr_52151_52194[(2)] = null);

(statearr_52151_52194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (9))){
var inst_52041 = (state_52123[(14)]);
var inst_52058 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52041);
var state_52123__$1 = state_52123;
var statearr_52152_52195 = state_52123__$1;
(statearr_52152_52195[(2)] = inst_52058);

(statearr_52152_52195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (5))){
var inst_52056 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
if(cljs.core.truth_(inst_52056)){
var statearr_52153_52196 = state_52123__$1;
(statearr_52153_52196[(1)] = (9));

} else {
var statearr_52154_52197 = state_52123__$1;
(statearr_52154_52197[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (14))){
var inst_52064 = (state_52123[(7)]);
var inst_52071 = inst_52064.cljs$lang$protocol_mask$partition0$;
var inst_52072 = (inst_52071 & (64));
var inst_52073 = inst_52064.cljs$core$ISeq$;
var inst_52074 = (inst_52072) || (inst_52073);
var state_52123__$1 = state_52123;
if(cljs.core.truth_(inst_52074)){
var statearr_52155_52198 = state_52123__$1;
(statearr_52155_52198[(1)] = (17));

} else {
var statearr_52156_52199 = state_52123__$1;
(statearr_52156_52199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (26))){
var inst_52091 = (state_52123[(15)]);
var inst_52097 = (state_52123[(2)]);
var inst_52098 = cljs.core.nth.call(null,inst_52097,(0),null);
var inst_52099 = cljs.core.nth.call(null,inst_52097,(1),null);
var inst_52100 = cljs.core.not_EQ_.call(null,inst_52099,inst_52091);
var state_52123__$1 = (function (){var statearr_52157 = state_52123;
(statearr_52157[(8)] = inst_52098);

return statearr_52157;
})();
if(inst_52100){
var statearr_52158_52200 = state_52123__$1;
(statearr_52158_52200[(1)] = (27));

} else {
var statearr_52159_52201 = state_52123__$1;
(statearr_52159_52201[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (16))){
var inst_52081 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
if(cljs.core.truth_(inst_52081)){
var statearr_52160_52202 = state_52123__$1;
(statearr_52160_52202[(1)] = (20));

} else {
var statearr_52161_52203 = state_52123__$1;
(statearr_52161_52203[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (30))){
var inst_52115 = (state_52123[(2)]);
var inst_52064 = inst_52115;
var state_52123__$1 = (function (){var statearr_52162 = state_52123;
(statearr_52162[(7)] = inst_52064);

return statearr_52162;
})();
var statearr_52163_52204 = state_52123__$1;
(statearr_52163_52204[(2)] = null);

(statearr_52163_52204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (10))){
var inst_52041 = (state_52123[(14)]);
var state_52123__$1 = state_52123;
var statearr_52164_52205 = state_52123__$1;
(statearr_52164_52205[(2)] = inst_52041);

(statearr_52164_52205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (18))){
var state_52123__$1 = state_52123;
var statearr_52165_52206 = state_52123__$1;
(statearr_52165_52206[(2)] = false);

(statearr_52165_52206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52124 === (8))){
var inst_52053 = (state_52123[(2)]);
var state_52123__$1 = state_52123;
var statearr_52166_52207 = state_52123__$1;
(statearr_52166_52207[(2)] = inst_52053);

(statearr_52166_52207[(1)] = (5));


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
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var devcards$core$state_machine__41354__auto__ = null;
var devcards$core$state_machine__41354__auto____0 = (function (){
var statearr_52170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52170[(0)] = devcards$core$state_machine__41354__auto__);

(statearr_52170[(1)] = (1));

return statearr_52170;
});
var devcards$core$state_machine__41354__auto____1 = (function (state_52123){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_52123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e52171){if((e52171 instanceof Object)){
var ex__41357__auto__ = e52171;
var statearr_52172_52208 = state_52123;
(statearr_52172_52208[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52209 = state_52123;
state_52123 = G__52209;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
devcards$core$state_machine__41354__auto__ = function(state_52123){
switch(arguments.length){
case 0:
return devcards$core$state_machine__41354__auto____0.call(this);
case 1:
return devcards$core$state_machine__41354__auto____1.call(this,state_52123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__41354__auto____0;
devcards$core$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__41354__auto____1;
return devcards$core$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_52173 = f__41375__auto__.call(null);
(statearr_52173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_52173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__50973__auto___52214 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
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
devcards.core.TestDevcard = React.createClass(base__50973__auto___52214);
}

var seq__52210_52215 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52211_52216 = null;
var count__52212_52217 = (0);
var i__52213_52218 = (0);
while(true){
if((i__52213_52218 < count__52212_52217)){
var property__50974__auto___52219 = cljs.core._nth.call(null,chunk__52211_52216,i__52213_52218);
if(cljs.core.truth_((base__50973__auto___52214[property__50974__auto___52219]))){
(devcards.core.TestDevcard.prototype[property__50974__auto___52219] = (base__50973__auto___52214[property__50974__auto___52219]));
} else {
}

var G__52220 = seq__52210_52215;
var G__52221 = chunk__52211_52216;
var G__52222 = count__52212_52217;
var G__52223 = (i__52213_52218 + (1));
seq__52210_52215 = G__52220;
chunk__52211_52216 = G__52221;
count__52212_52217 = G__52222;
i__52213_52218 = G__52223;
continue;
} else {
var temp__4657__auto___52224 = cljs.core.seq.call(null,seq__52210_52215);
if(temp__4657__auto___52224){
var seq__52210_52225__$1 = temp__4657__auto___52224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52210_52225__$1)){
var c__38246__auto___52226 = cljs.core.chunk_first.call(null,seq__52210_52225__$1);
var G__52227 = cljs.core.chunk_rest.call(null,seq__52210_52225__$1);
var G__52228 = c__38246__auto___52226;
var G__52229 = cljs.core.count.call(null,c__38246__auto___52226);
var G__52230 = (0);
seq__52210_52215 = G__52227;
chunk__52211_52216 = G__52228;
count__52212_52217 = G__52229;
i__52213_52218 = G__52230;
continue;
} else {
var property__50974__auto___52231 = cljs.core.first.call(null,seq__52210_52225__$1);
if(cljs.core.truth_((base__50973__auto___52214[property__50974__auto___52231]))){
(devcards.core.TestDevcard.prototype[property__50974__auto___52231] = (base__50973__auto___52214[property__50974__auto___52231]));
} else {
}

var G__52232 = cljs.core.next.call(null,seq__52210_52225__$1);
var G__52233 = null;
var G__52234 = (0);
var G__52235 = (0);
seq__52210_52215 = G__52232;
chunk__52211_52216 = G__52233;
count__52212_52217 = G__52234;
i__52213_52218 = G__52235;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__38508__auto__ = [];
var len__38501__auto___52240 = arguments.length;
var i__38502__auto___52241 = (0);
while(true){
if((i__38502__auto___52241 < len__38501__auto___52240)){
args__38508__auto__.push((arguments[i__38502__auto___52241]));

var G__52242 = (i__38502__auto___52241 + (1));
i__38502__auto___52241 = G__52242;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core52237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core52237 = (function (test_thunks,meta52238){
this.test_thunks = test_thunks;
this.meta52238 = meta52238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core52237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52239,meta52238__$1){
var self__ = this;
var _52239__$1 = this;
return (new devcards.core.t_devcards$core52237(self__.test_thunks,meta52238__$1));
});

devcards.core.t_devcards$core52237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52239){
var self__ = this;
var _52239__$1 = this;
return self__.meta52238;
});

devcards.core.t_devcards$core52237.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core52237.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core52237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta52238","meta52238",1456308485,null)], null);
});

devcards.core.t_devcards$core52237.cljs$lang$type = true;

devcards.core.t_devcards$core52237.cljs$lang$ctorStr = "devcards.core/t_devcards$core52237";

devcards.core.t_devcards$core52237.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"devcards.core/t_devcards$core52237");
});

devcards.core.__GT_t_devcards$core52237 = (function devcards$core$__GT_t_devcards$core52237(test_thunks__$1,meta52238){
return (new devcards.core.t_devcards$core52237(test_thunks__$1,meta52238));
});

}

return (new devcards.core.t_devcards$core52237(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq52236){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52236));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards__$1 = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs52244 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52244))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs52244)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs52244))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52244)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs52246 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52246))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs52246)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs52246))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52246)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_52276){
var state_val_52277 = (state_52276[(1)]);
if((state_val_52277 === (1))){
var inst_52267 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_52276__$1 = state_52276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52276__$1,(2),inst_52267);
} else {
if((state_val_52277 === (2))){
var inst_52269 = (state_52276[(2)]);
var inst_52270 = cljs.core.async.timeout.call(null,(100));
var state_52276__$1 = (function (){var statearr_52278 = state_52276;
(statearr_52278[(7)] = inst_52269);

return statearr_52278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52276__$1,(3),inst_52270);
} else {
if((state_val_52277 === (3))){
var inst_52272 = (state_52276[(2)]);
var inst_52273 = (function (){return ((function (inst_52272,state_val_52277,c__41374__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_52272,state_val_52277,c__41374__auto__))
})();
var inst_52274 = setTimeout(inst_52273,(0));
var state_52276__$1 = (function (){var statearr_52279 = state_52276;
(statearr_52279[(8)] = inst_52272);

return statearr_52279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52276__$1,inst_52274);
} else {
return null;
}
}
}
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__41354__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__41354__auto____0 = (function (){
var statearr_52283 = [null,null,null,null,null,null,null,null,null];
(statearr_52283[(0)] = devcards$core$mount_namespace_$_state_machine__41354__auto__);

(statearr_52283[(1)] = (1));

return statearr_52283;
});
var devcards$core$mount_namespace_$_state_machine__41354__auto____1 = (function (state_52276){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_52276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e52284){if((e52284 instanceof Object)){
var ex__41357__auto__ = e52284;
var statearr_52285_52287 = state_52276;
(statearr_52285_52287[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52288 = state_52276;
state_52276 = G__52288;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__41354__auto__ = function(state_52276){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__41354__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__41354__auto____1.call(this,state_52276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__41354__auto____0;
devcards$core$mount_namespace_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__41354__auto____1;
return devcards$core$mount_namespace_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_52286 = f__41375__auto__.call(null);
(statearr_52286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_52286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1459008359920