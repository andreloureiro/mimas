// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__50072_SHARP_){
return console.log(p1__50072_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__50073_SHARP_){
return console.warn(p1__50073_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__50074_SHARP_){
return console.error(p1__50074_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__50075_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__50075_SHARP_);
} else {
return console.log(p1__50075_SHARP_);
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
var len__36572__auto___50077 = arguments.length;
var i__36573__auto___50078 = (0);
while(true){
if((i__36573__auto___50078 < len__36572__auto___50077)){
args__36579__auto__.push((arguments[i__36573__auto___50078]));

var G__50079 = (i__36573__auto___50078 + (1));
i__36573__auto___50078 = G__50079;
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

re_frame.utils.log.cljs$lang$applyTo = (function (seq50076){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50076));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__36579__auto__ = [];
var len__36572__auto___50081 = arguments.length;
var i__36573__auto___50082 = (0);
while(true){
if((i__36573__auto___50082 < len__36572__auto___50081)){
args__36579__auto__.push((arguments[i__36573__auto___50082]));

var G__50083 = (i__36573__auto___50082 + (1));
i__36573__auto___50082 = G__50083;
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

re_frame.utils.warn.cljs$lang$applyTo = (function (seq50080){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50080));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__36579__auto__ = [];
var len__36572__auto___50085 = arguments.length;
var i__36573__auto___50086 = (0);
while(true){
if((i__36573__auto___50086 < len__36572__auto___50085)){
args__36579__auto__.push((arguments[i__36573__auto___50086]));

var G__50087 = (i__36573__auto___50086 + (1));
i__36573__auto___50086 = G__50087;
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

re_frame.utils.group.cljs$lang$applyTo = (function (seq50084){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50084));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__36579__auto__ = [];
var len__36572__auto___50089 = arguments.length;
var i__36573__auto___50090 = (0);
while(true){
if((i__36573__auto___50090 < len__36572__auto___50089)){
args__36579__auto__.push((arguments[i__36573__auto___50090]));

var G__50091 = (i__36573__auto___50090 + (1));
i__36573__auto___50090 = G__50091;
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

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq50088){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50088));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__36579__auto__ = [];
var len__36572__auto___50093 = arguments.length;
var i__36573__auto___50094 = (0);
while(true){
if((i__36573__auto___50094 < len__36572__auto___50093)){
args__36579__auto__.push((arguments[i__36573__auto___50094]));

var G__50095 = (i__36573__auto___50094 + (1));
i__36573__auto___50094 = G__50095;
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

re_frame.utils.error.cljs$lang$applyTo = (function (seq50092){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50092));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1456364838173