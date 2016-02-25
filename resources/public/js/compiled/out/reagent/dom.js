// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__35514__auto__ = (function (){var and__35502__auto__ = typeof ReactDOM !== 'undefined';
if(and__35502__auto__){
return ReactDOM;
} else {
return and__35502__auto__;
}
})();
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
var and__35502__auto__ = typeof require !== 'undefined';
if(and__35502__auto__){
return require("react-dom");
} else {
return and__35502__auto__;
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
var _STAR_always_update_STAR_49965 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_49965){
return (function (){
var _STAR_always_update_STAR_49966 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49966;
}});})(_STAR_always_update_STAR_49965))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_49965;
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
var args49967 = [];
var len__36572__auto___49970 = arguments.length;
var i__36573__auto___49971 = (0);
while(true){
if((i__36573__auto___49971 < len__36572__auto___49970)){
args49967.push((arguments[i__36573__auto___49971]));

var G__49972 = (i__36573__auto___49971 + (1));
i__36573__auto___49971 = G__49972;
continue;
} else {
}
break;
}

var G__49969 = args49967.length;
switch (G__49969) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49967.length)].join('')));

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
var seq__49978_49982 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__49979_49983 = null;
var count__49980_49984 = (0);
var i__49981_49985 = (0);
while(true){
if((i__49981_49985 < count__49980_49984)){
var v_49986 = cljs.core._nth.call(null,chunk__49979_49983,i__49981_49985);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49986);

var G__49987 = seq__49978_49982;
var G__49988 = chunk__49979_49983;
var G__49989 = count__49980_49984;
var G__49990 = (i__49981_49985 + (1));
seq__49978_49982 = G__49987;
chunk__49979_49983 = G__49988;
count__49980_49984 = G__49989;
i__49981_49985 = G__49990;
continue;
} else {
var temp__4425__auto___49991 = cljs.core.seq.call(null,seq__49978_49982);
if(temp__4425__auto___49991){
var seq__49978_49992__$1 = temp__4425__auto___49991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49978_49992__$1)){
var c__36317__auto___49993 = cljs.core.chunk_first.call(null,seq__49978_49992__$1);
var G__49994 = cljs.core.chunk_rest.call(null,seq__49978_49992__$1);
var G__49995 = c__36317__auto___49993;
var G__49996 = cljs.core.count.call(null,c__36317__auto___49993);
var G__49997 = (0);
seq__49978_49982 = G__49994;
chunk__49979_49983 = G__49995;
count__49980_49984 = G__49996;
i__49981_49985 = G__49997;
continue;
} else {
var v_49998 = cljs.core.first.call(null,seq__49978_49992__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49998);

var G__49999 = cljs.core.next.call(null,seq__49978_49992__$1);
var G__50000 = null;
var G__50001 = (0);
var G__50002 = (0);
seq__49978_49982 = G__49999;
chunk__49979_49983 = G__50000;
count__49980_49984 = G__50001;
i__49981_49985 = G__50002;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1456364837999