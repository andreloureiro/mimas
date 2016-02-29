// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__50276_SHARP_){
return console.log(p1__50276_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__50277_SHARP_){
return console.warn(p1__50277_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__50278_SHARP_){
return console.error(p1__50278_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__50279_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__50279_SHARP_);
} else {
return console.log(p1__50279_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__36581__auto__ = [];
var len__36574__auto___50281 = arguments.length;
var i__36575__auto___50282 = (0);
while(true){
if((i__36575__auto___50282 < len__36574__auto___50281)){
args__36581__auto__.push((arguments[i__36575__auto___50282]));

var G__50283 = (i__36575__auto___50282 + (1));
i__36575__auto___50282 = G__50283;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq50280){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50280));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__36581__auto__ = [];
var len__36574__auto___50285 = arguments.length;
var i__36575__auto___50286 = (0);
while(true){
if((i__36575__auto___50286 < len__36574__auto___50285)){
args__36581__auto__.push((arguments[i__36575__auto___50286]));

var G__50287 = (i__36575__auto___50286 + (1));
i__36575__auto___50286 = G__50287;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq50284){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50284));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__36581__auto__ = [];
var len__36574__auto___50289 = arguments.length;
var i__36575__auto___50290 = (0);
while(true){
if((i__36575__auto___50290 < len__36574__auto___50289)){
args__36581__auto__.push((arguments[i__36575__auto___50290]));

var G__50291 = (i__36575__auto___50290 + (1));
i__36575__auto___50290 = G__50291;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq50288){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50288));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__36581__auto__ = [];
var len__36574__auto___50293 = arguments.length;
var i__36575__auto___50294 = (0);
while(true){
if((i__36575__auto___50294 < len__36574__auto___50293)){
args__36581__auto__.push((arguments[i__36575__auto___50294]));

var G__50295 = (i__36575__auto___50294 + (1));
i__36575__auto___50294 = G__50295;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq50292){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50292));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__36581__auto__ = [];
var len__36574__auto___50297 = arguments.length;
var i__36575__auto___50298 = (0);
while(true){
if((i__36575__auto___50298 < len__36574__auto___50297)){
args__36581__auto__.push((arguments[i__36575__auto___50298]));

var G__50299 = (i__36575__auto___50298 + (1));
i__36575__auto___50298 = G__50299;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq50296){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50296));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1456712356880