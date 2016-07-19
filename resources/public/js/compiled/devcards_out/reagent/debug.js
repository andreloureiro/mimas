// Compiled by ClojureScript 1.7.228 {}
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
var G__44620__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44621__i = 0, G__44621__a = new Array(arguments.length -  0);
while (G__44621__i < G__44621__a.length) {G__44621__a[G__44621__i] = arguments[G__44621__i + 0]; ++G__44621__i;}
  args = new cljs.core.IndexedSeq(G__44621__a,0);
} 
return G__44620__delegate.call(this,args);};
G__44620.cljs$lang$maxFixedArity = 0;
G__44620.cljs$lang$applyTo = (function (arglist__44622){
var args = cljs.core.seq(arglist__44622);
return G__44620__delegate(args);
});
G__44620.cljs$core$IFn$_invoke$arity$variadic = G__44620__delegate;
return G__44620;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44623__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44624__i = 0, G__44624__a = new Array(arguments.length -  0);
while (G__44624__i < G__44624__a.length) {G__44624__a[G__44624__i] = arguments[G__44624__i + 0]; ++G__44624__i;}
  args = new cljs.core.IndexedSeq(G__44624__a,0);
} 
return G__44623__delegate.call(this,args);};
G__44623.cljs$lang$maxFixedArity = 0;
G__44623.cljs$lang$applyTo = (function (arglist__44625){
var args = cljs.core.seq(arglist__44625);
return G__44623__delegate(args);
});
G__44623.cljs$core$IFn$_invoke$arity$variadic = G__44623__delegate;
return G__44623;
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

//# sourceMappingURL=debug.js.map?rel=1459008343784