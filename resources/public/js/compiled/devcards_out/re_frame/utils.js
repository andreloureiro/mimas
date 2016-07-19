// Compiled by ClojureScript 1.7.228 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__45193_SHARP_){
return console.log(p1__45193_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__45194_SHARP_){
return console.warn(p1__45194_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__45195_SHARP_){
return console.error(p1__45195_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__45196_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__45196_SHARP_);
} else {
return console.log(p1__45196_SHARP_);
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
var args__38508__auto__ = [];
var len__38501__auto___45198 = arguments.length;
var i__38502__auto___45199 = (0);
while(true){
if((i__38502__auto___45199 < len__38501__auto___45198)){
args__38508__auto__.push((arguments[i__38502__auto___45199]));

var G__45200 = (i__38502__auto___45199 + (1));
i__38502__auto___45199 = G__45200;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq45197){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45197));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__38508__auto__ = [];
var len__38501__auto___45202 = arguments.length;
var i__38502__auto___45203 = (0);
while(true){
if((i__38502__auto___45203 < len__38501__auto___45202)){
args__38508__auto__.push((arguments[i__38502__auto___45203]));

var G__45204 = (i__38502__auto___45203 + (1));
i__38502__auto___45203 = G__45204;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq45201){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45201));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__38508__auto__ = [];
var len__38501__auto___45206 = arguments.length;
var i__38502__auto___45207 = (0);
while(true){
if((i__38502__auto___45207 < len__38501__auto___45206)){
args__38508__auto__.push((arguments[i__38502__auto___45207]));

var G__45208 = (i__38502__auto___45207 + (1));
i__38502__auto___45207 = G__45208;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq45205){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45205));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__38508__auto__ = [];
var len__38501__auto___45210 = arguments.length;
var i__38502__auto___45211 = (0);
while(true){
if((i__38502__auto___45211 < len__38501__auto___45210)){
args__38508__auto__.push((arguments[i__38502__auto___45211]));

var G__45212 = (i__38502__auto___45211 + (1));
i__38502__auto___45211 = G__45212;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq45209){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45209));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__38508__auto__ = [];
var len__38501__auto___45214 = arguments.length;
var i__38502__auto___45215 = (0);
while(true){
if((i__38502__auto___45215 < len__38501__auto___45214)){
args__38508__auto__.push((arguments[i__38502__auto___45215]));

var G__45216 = (i__38502__auto___45215 + (1));
i__38502__auto___45215 = G__45216;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq45213){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45213));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1459008345422