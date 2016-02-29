// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__42472_SHARP_){
return console.log(p1__42472_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__42473_SHARP_){
return console.warn(p1__42473_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__42474_SHARP_){
return console.error(p1__42474_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__42475_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__42475_SHARP_);
} else {
return console.log(p1__42475_SHARP_);
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
var len__36574__auto___42477 = arguments.length;
var i__36575__auto___42478 = (0);
while(true){
if((i__36575__auto___42478 < len__36574__auto___42477)){
args__36581__auto__.push((arguments[i__36575__auto___42478]));

var G__42479 = (i__36575__auto___42478 + (1));
i__36575__auto___42478 = G__42479;
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

re_frame.utils.log.cljs$lang$applyTo = (function (seq42476){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42476));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__36581__auto__ = [];
var len__36574__auto___42481 = arguments.length;
var i__36575__auto___42482 = (0);
while(true){
if((i__36575__auto___42482 < len__36574__auto___42481)){
args__36581__auto__.push((arguments[i__36575__auto___42482]));

var G__42483 = (i__36575__auto___42482 + (1));
i__36575__auto___42482 = G__42483;
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

re_frame.utils.warn.cljs$lang$applyTo = (function (seq42480){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42480));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__36581__auto__ = [];
var len__36574__auto___42485 = arguments.length;
var i__36575__auto___42486 = (0);
while(true){
if((i__36575__auto___42486 < len__36574__auto___42485)){
args__36581__auto__.push((arguments[i__36575__auto___42486]));

var G__42487 = (i__36575__auto___42486 + (1));
i__36575__auto___42486 = G__42487;
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

re_frame.utils.group.cljs$lang$applyTo = (function (seq42484){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42484));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__36581__auto__ = [];
var len__36574__auto___42489 = arguments.length;
var i__36575__auto___42490 = (0);
while(true){
if((i__36575__auto___42490 < len__36574__auto___42489)){
args__36581__auto__.push((arguments[i__36575__auto___42490]));

var G__42491 = (i__36575__auto___42490 + (1));
i__36575__auto___42490 = G__42491;
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

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq42488){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42488));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__36581__auto__ = [];
var len__36574__auto___42493 = arguments.length;
var i__36575__auto___42494 = (0);
while(true){
if((i__36575__auto___42494 < len__36574__auto___42493)){
args__36581__auto__.push((arguments[i__36575__auto___42494]));

var G__42495 = (i__36575__auto___42494 + (1));
i__36575__auto___42494 = G__42495;
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

re_frame.utils.error.cljs$lang$applyTo = (function (seq42492){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42492));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1456711302132