// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__49770__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49770 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49771__i = 0, G__49771__a = new Array(arguments.length -  0);
while (G__49771__i < G__49771__a.length) {G__49771__a[G__49771__i] = arguments[G__49771__i + 0]; ++G__49771__i;}
  args = new cljs.core.IndexedSeq(G__49771__a,0);
} 
return G__49770__delegate.call(this,args);};
G__49770.cljs$lang$maxFixedArity = 0;
G__49770.cljs$lang$applyTo = (function (arglist__49772){
var args = cljs.core.seq(arglist__49772);
return G__49770__delegate(args);
});
G__49770.cljs$core$IFn$_invoke$arity$variadic = G__49770__delegate;
return G__49770;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49773__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49774__i = 0, G__49774__a = new Array(arguments.length -  0);
while (G__49774__i < G__49774__a.length) {G__49774__a[G__49774__i] = arguments[G__49774__i + 0]; ++G__49774__i;}
  args = new cljs.core.IndexedSeq(G__49774__a,0);
} 
return G__49773__delegate.call(this,args);};
G__49773.cljs$lang$maxFixedArity = 0;
G__49773.cljs$lang$applyTo = (function (arglist__49775){
var args = cljs.core.seq(arglist__49775);
return G__49773__delegate(args);
});
G__49773.cljs$core$IFn$_invoke$arity$variadic = G__49773__delegate;
return G__49773;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1456712355618