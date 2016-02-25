// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__48946_SHARP_){
return console.log(p1__48946_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__48947_SHARP_){
return console.warn(p1__48947_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__48948_SHARP_){
return console.error(p1__48948_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__48949_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__48949_SHARP_);
} else {
return console.log(p1__48949_SHARP_);
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
var args__36579__auto__ = [];
var len__36572__auto___48951 = arguments.length;
var i__36573__auto___48952 = (0);
while(true){
if((i__36573__auto___48952 < len__36572__auto___48951)){
args__36579__auto__.push((arguments[i__36573__auto___48952]));

var G__48953 = (i__36573__auto___48952 + (1));
i__36573__auto___48952 = G__48953;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq48950){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48950));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__36579__auto__ = [];
var len__36572__auto___48955 = arguments.length;
var i__36573__auto___48956 = (0);
while(true){
if((i__36573__auto___48956 < len__36572__auto___48955)){
args__36579__auto__.push((arguments[i__36573__auto___48956]));

var G__48957 = (i__36573__auto___48956 + (1));
i__36573__auto___48956 = G__48957;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq48954){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48954));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__36579__auto__ = [];
var len__36572__auto___48959 = arguments.length;
var i__36573__auto___48960 = (0);
while(true){
if((i__36573__auto___48960 < len__36572__auto___48959)){
args__36579__auto__.push((arguments[i__36573__auto___48960]));

var G__48961 = (i__36573__auto___48960 + (1));
i__36573__auto___48960 = G__48961;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq48958){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48958));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__36579__auto__ = [];
var len__36572__auto___48963 = arguments.length;
var i__36573__auto___48964 = (0);
while(true){
if((i__36573__auto___48964 < len__36572__auto___48963)){
args__36579__auto__.push((arguments[i__36573__auto___48964]));

var G__48965 = (i__36573__auto___48964 + (1));
i__36573__auto___48964 = G__48965;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq48962){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48962));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__36579__auto__ = [];
var len__36572__auto___48967 = arguments.length;
var i__36573__auto___48968 = (0);
while(true){
if((i__36573__auto___48968 < len__36572__auto___48967)){
args__36579__auto__.push((arguments[i__36573__auto___48968]));

var G__48969 = (i__36573__auto___48968 + (1));
i__36573__auto___48968 = G__48969;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq48966){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48966));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1456363426005