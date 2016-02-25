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
var G__49566__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49567__i = 0, G__49567__a = new Array(arguments.length -  0);
while (G__49567__i < G__49567__a.length) {G__49567__a[G__49567__i] = arguments[G__49567__i + 0]; ++G__49567__i;}
  args = new cljs.core.IndexedSeq(G__49567__a,0);
} 
return G__49566__delegate.call(this,args);};
G__49566.cljs$lang$maxFixedArity = 0;
G__49566.cljs$lang$applyTo = (function (arglist__49568){
var args = cljs.core.seq(arglist__49568);
return G__49566__delegate(args);
});
G__49566.cljs$core$IFn$_invoke$arity$variadic = G__49566__delegate;
return G__49566;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49569__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49570__i = 0, G__49570__a = new Array(arguments.length -  0);
while (G__49570__i < G__49570__a.length) {G__49570__a[G__49570__i] = arguments[G__49570__i + 0]; ++G__49570__i;}
  args = new cljs.core.IndexedSeq(G__49570__a,0);
} 
return G__49569__delegate.call(this,args);};
G__49569.cljs$lang$maxFixedArity = 0;
G__49569.cljs$lang$applyTo = (function (arglist__49571){
var args = cljs.core.seq(arglist__49571);
return G__49569__delegate(args);
});
G__49569.cljs$core$IFn$_invoke$arity$variadic = G__49569__delegate;
return G__49569;
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

//# sourceMappingURL=debug.js.map?rel=1456364837108