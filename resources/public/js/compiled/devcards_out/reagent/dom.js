// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__37443__auto__ = (function (){var and__37431__auto__ = typeof ReactDOM !== 'undefined';
if(and__37431__auto__){
return ReactDOM;
} else {
return and__37431__auto__;
}
})();
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
var and__37431__auto__ = typeof require !== 'undefined';
if(and__37431__auto__){
return require("react-dom");
} else {
return and__37431__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_44968 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_44968){
return (function (){
var _STAR_always_update_STAR_44969 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44969;
}});})(_STAR_always_update_STAR_44968))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_44968;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args44970 = [];
var len__38501__auto___44973 = arguments.length;
var i__38502__auto___44974 = (0);
while(true){
if((i__38502__auto___44974 < len__38501__auto___44973)){
args44970.push((arguments[i__38502__auto___44974]));

var G__44975 = (i__38502__auto___44974 + (1));
i__38502__auto___44974 = G__44975;
continue;
} else {
}
break;
}

var G__44972 = args44970.length;
switch (G__44972) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44970.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__44981_44985 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__44982_44986 = null;
var count__44983_44987 = (0);
var i__44984_44988 = (0);
while(true){
if((i__44984_44988 < count__44983_44987)){
var v_44989 = cljs.core._nth.call(null,chunk__44982_44986,i__44984_44988);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_44989);

var G__44990 = seq__44981_44985;
var G__44991 = chunk__44982_44986;
var G__44992 = count__44983_44987;
var G__44993 = (i__44984_44988 + (1));
seq__44981_44985 = G__44990;
chunk__44982_44986 = G__44991;
count__44983_44987 = G__44992;
i__44984_44988 = G__44993;
continue;
} else {
var temp__4657__auto___44994 = cljs.core.seq.call(null,seq__44981_44985);
if(temp__4657__auto___44994){
var seq__44981_44995__$1 = temp__4657__auto___44994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44981_44995__$1)){
var c__38246__auto___44996 = cljs.core.chunk_first.call(null,seq__44981_44995__$1);
var G__44997 = cljs.core.chunk_rest.call(null,seq__44981_44995__$1);
var G__44998 = c__38246__auto___44996;
var G__44999 = cljs.core.count.call(null,c__38246__auto___44996);
var G__45000 = (0);
seq__44981_44985 = G__44997;
chunk__44982_44986 = G__44998;
count__44983_44987 = G__44999;
i__44984_44988 = G__45000;
continue;
} else {
var v_45001 = cljs.core.first.call(null,seq__44981_44995__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45001);

var G__45002 = cljs.core.next.call(null,seq__44981_44995__$1);
var G__45003 = null;
var G__45004 = (0);
var G__45005 = (0);
seq__44981_44985 = G__45002;
chunk__44982_44986 = G__45003;
count__44983_44987 = G__45004;
i__44984_44988 = G__45005;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1459008344805