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
reagent.dom.dom = (function (){var or__35516__auto__ = (function (){var and__35504__auto__ = typeof ReactDOM !== 'undefined';
if(and__35504__auto__){
return ReactDOM;
} else {
return and__35504__auto__;
}
})();
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
var and__35504__auto__ = typeof require !== 'undefined';
if(and__35504__auto__){
return require("react-dom");
} else {
return and__35504__auto__;
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
var _STAR_always_update_STAR_50169 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_50169){
return (function (){
var _STAR_always_update_STAR_50170 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50170;
}});})(_STAR_always_update_STAR_50169))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50169;
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
var args50171 = [];
var len__36574__auto___50174 = arguments.length;
var i__36575__auto___50175 = (0);
while(true){
if((i__36575__auto___50175 < len__36574__auto___50174)){
args50171.push((arguments[i__36575__auto___50175]));

var G__50176 = (i__36575__auto___50175 + (1));
i__36575__auto___50175 = G__50176;
continue;
} else {
}
break;
}

var G__50173 = args50171.length;
switch (G__50173) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50171.length)].join('')));

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
var seq__50182_50186 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__50183_50187 = null;
var count__50184_50188 = (0);
var i__50185_50189 = (0);
while(true){
if((i__50185_50189 < count__50184_50188)){
var v_50190 = cljs.core._nth.call(null,chunk__50183_50187,i__50185_50189);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50190);

var G__50191 = seq__50182_50186;
var G__50192 = chunk__50183_50187;
var G__50193 = count__50184_50188;
var G__50194 = (i__50185_50189 + (1));
seq__50182_50186 = G__50191;
chunk__50183_50187 = G__50192;
count__50184_50188 = G__50193;
i__50185_50189 = G__50194;
continue;
} else {
var temp__4425__auto___50195 = cljs.core.seq.call(null,seq__50182_50186);
if(temp__4425__auto___50195){
var seq__50182_50196__$1 = temp__4425__auto___50195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50182_50196__$1)){
var c__36319__auto___50197 = cljs.core.chunk_first.call(null,seq__50182_50196__$1);
var G__50198 = cljs.core.chunk_rest.call(null,seq__50182_50196__$1);
var G__50199 = c__36319__auto___50197;
var G__50200 = cljs.core.count.call(null,c__36319__auto___50197);
var G__50201 = (0);
seq__50182_50186 = G__50198;
chunk__50183_50187 = G__50199;
count__50184_50188 = G__50200;
i__50185_50189 = G__50201;
continue;
} else {
var v_50202 = cljs.core.first.call(null,seq__50182_50196__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50202);

var G__50203 = cljs.core.next.call(null,seq__50182_50196__$1);
var G__50204 = null;
var G__50205 = (0);
var G__50206 = (0);
seq__50182_50186 = G__50203;
chunk__50183_50187 = G__50204;
count__50184_50188 = G__50205;
i__50185_50189 = G__50206;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1456712356672