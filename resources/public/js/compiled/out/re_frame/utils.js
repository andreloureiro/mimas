// Compiled by ClojureScript 1.7.228 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__43132_SHARP_){
return console.log(p1__43132_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__43133_SHARP_){
return console.warn(p1__43133_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__43134_SHARP_){
return console.error(p1__43134_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__43135_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__43135_SHARP_);
} else {
return console.log(p1__43135_SHARP_);
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
var len__38501__auto___43137 = arguments.length;
var i__38502__auto___43138 = (0);
while(true){
if((i__38502__auto___43138 < len__38501__auto___43137)){
args__38508__auto__.push((arguments[i__38502__auto___43138]));

var G__43139 = (i__38502__auto___43138 + (1));
i__38502__auto___43138 = G__43139;
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

re_frame.utils.log.cljs$lang$applyTo = (function (seq43136){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43136));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__38508__auto__ = [];
var len__38501__auto___43141 = arguments.length;
var i__38502__auto___43142 = (0);
while(true){
if((i__38502__auto___43142 < len__38501__auto___43141)){
args__38508__auto__.push((arguments[i__38502__auto___43142]));

var G__43143 = (i__38502__auto___43142 + (1));
i__38502__auto___43142 = G__43143;
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

re_frame.utils.warn.cljs$lang$applyTo = (function (seq43140){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43140));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__38508__auto__ = [];
var len__38501__auto___43145 = arguments.length;
var i__38502__auto___43146 = (0);
while(true){
if((i__38502__auto___43146 < len__38501__auto___43145)){
args__38508__auto__.push((arguments[i__38502__auto___43146]));

var G__43147 = (i__38502__auto___43146 + (1));
i__38502__auto___43146 = G__43147;
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

re_frame.utils.group.cljs$lang$applyTo = (function (seq43144){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43144));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__38508__auto__ = [];
var len__38501__auto___43149 = arguments.length;
var i__38502__auto___43150 = (0);
while(true){
if((i__38502__auto___43150 < len__38501__auto___43149)){
args__38508__auto__.push((arguments[i__38502__auto___43150]));

var G__43151 = (i__38502__auto___43150 + (1));
i__38502__auto___43150 = G__43151;
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

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq43148){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43148));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__38508__auto__ = [];
var len__38501__auto___43153 = arguments.length;
var i__38502__auto___43154 = (0);
while(true){
if((i__38502__auto___43154 < len__38501__auto___43153)){
args__38508__auto__.push((arguments[i__38502__auto___43154]));

var G__43155 = (i__38502__auto___43154 + (1));
i__38502__auto___43154 = G__43155;
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

re_frame.utils.error.cljs$lang$applyTo = (function (seq43152){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43152));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1458659763411