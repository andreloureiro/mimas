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
var G__42559__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42560__i = 0, G__42560__a = new Array(arguments.length -  0);
while (G__42560__i < G__42560__a.length) {G__42560__a[G__42560__i] = arguments[G__42560__i + 0]; ++G__42560__i;}
  args = new cljs.core.IndexedSeq(G__42560__a,0);
} 
return G__42559__delegate.call(this,args);};
G__42559.cljs$lang$maxFixedArity = 0;
G__42559.cljs$lang$applyTo = (function (arglist__42561){
var args = cljs.core.seq(arglist__42561);
return G__42559__delegate(args);
});
G__42559.cljs$core$IFn$_invoke$arity$variadic = G__42559__delegate;
return G__42559;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42562__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42563__i = 0, G__42563__a = new Array(arguments.length -  0);
while (G__42563__i < G__42563__a.length) {G__42563__a[G__42563__i] = arguments[G__42563__i + 0]; ++G__42563__i;}
  args = new cljs.core.IndexedSeq(G__42563__a,0);
} 
return G__42562__delegate.call(this,args);};
G__42562.cljs$lang$maxFixedArity = 0;
G__42562.cljs$lang$applyTo = (function (arglist__42564){
var args = cljs.core.seq(arglist__42564);
return G__42562__delegate(args);
});
G__42562.cljs$core$IFn$_invoke$arity$variadic = G__42562__delegate;
return G__42562;
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

//# sourceMappingURL=debug.js.map?rel=1458659761550