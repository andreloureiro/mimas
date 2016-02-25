// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37726 = [];
var len__36572__auto___37732 = arguments.length;
var i__36573__auto___37733 = (0);
while(true){
if((i__36573__auto___37733 < len__36572__auto___37732)){
args37726.push((arguments[i__36573__auto___37733]));

var G__37734 = (i__36573__auto___37733 + (1));
i__36573__auto___37733 = G__37734;
continue;
} else {
}
break;
}

var G__37728 = args37726.length;
switch (G__37728) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37726.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37729 = (function (f,blockable,meta37730){
this.f = f;
this.blockable = blockable;
this.meta37730 = meta37730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37731,meta37730__$1){
var self__ = this;
var _37731__$1 = this;
return (new cljs.core.async.t_cljs$core$async37729(self__.f,self__.blockable,meta37730__$1));
});

cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37731){
var self__ = this;
var _37731__$1 = this;
return self__.meta37730;
});

cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37730","meta37730",-135673564,null)], null);
});

cljs.core.async.t_cljs$core$async37729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37729";

cljs.core.async.t_cljs$core$async37729.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async37729");
});

cljs.core.async.__GT_t_cljs$core$async37729 = (function cljs$core$async$__GT_t_cljs$core$async37729(f__$1,blockable__$1,meta37730){
return (new cljs.core.async.t_cljs$core$async37729(f__$1,blockable__$1,meta37730));
});

}

return (new cljs.core.async.t_cljs$core$async37729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37738 = [];
var len__36572__auto___37741 = arguments.length;
var i__36573__auto___37742 = (0);
while(true){
if((i__36573__auto___37742 < len__36572__auto___37741)){
args37738.push((arguments[i__36573__auto___37742]));

var G__37743 = (i__36573__auto___37742 + (1));
i__36573__auto___37742 = G__37743;
continue;
} else {
}
break;
}

var G__37740 = args37738.length;
switch (G__37740) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37738.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37745 = [];
var len__36572__auto___37748 = arguments.length;
var i__36573__auto___37749 = (0);
while(true){
if((i__36573__auto___37749 < len__36572__auto___37748)){
args37745.push((arguments[i__36573__auto___37749]));

var G__37750 = (i__36573__auto___37749 + (1));
i__36573__auto___37749 = G__37750;
continue;
} else {
}
break;
}

var G__37747 = args37745.length;
switch (G__37747) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37745.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37752 = [];
var len__36572__auto___37755 = arguments.length;
var i__36573__auto___37756 = (0);
while(true){
if((i__36573__auto___37756 < len__36572__auto___37755)){
args37752.push((arguments[i__36573__auto___37756]));

var G__37757 = (i__36573__auto___37756 + (1));
i__36573__auto___37756 = G__37757;
continue;
} else {
}
break;
}

var G__37754 = args37752.length;
switch (G__37754) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37752.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37759 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37759);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37759,ret){
return (function (){
return fn1.call(null,val_37759);
});})(val_37759,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37760 = [];
var len__36572__auto___37763 = arguments.length;
var i__36573__auto___37764 = (0);
while(true){
if((i__36573__auto___37764 < len__36572__auto___37763)){
args37760.push((arguments[i__36573__auto___37764]));

var G__37765 = (i__36573__auto___37764 + (1));
i__36573__auto___37764 = G__37765;
continue;
} else {
}
break;
}

var G__37762 = args37760.length;
switch (G__37762) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37760.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36417__auto___37767 = n;
var x_37768 = (0);
while(true){
if((x_37768 < n__36417__auto___37767)){
(a[x_37768] = (0));

var G__37769 = (x_37768 + (1));
x_37768 = G__37769;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37770 = (i + (1));
i = G__37770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37774 = (function (alt_flag,flag,meta37775){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37775 = meta37775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37776,meta37775__$1){
var self__ = this;
var _37776__$1 = this;
return (new cljs.core.async.t_cljs$core$async37774(self__.alt_flag,self__.flag,meta37775__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37776){
var self__ = this;
var _37776__$1 = this;
return self__.meta37775;
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37775","meta37775",-241806208,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37774";

cljs.core.async.t_cljs$core$async37774.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async37774");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37774 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37774(alt_flag__$1,flag__$1,meta37775){
return (new cljs.core.async.t_cljs$core$async37774(alt_flag__$1,flag__$1,meta37775));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37774(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37780 = (function (alt_handler,flag,cb,meta37781){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37781 = meta37781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37782,meta37781__$1){
var self__ = this;
var _37782__$1 = this;
return (new cljs.core.async.t_cljs$core$async37780(self__.alt_handler,self__.flag,self__.cb,meta37781__$1));
});

cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37782){
var self__ = this;
var _37782__$1 = this;
return self__.meta37781;
});

cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37781","meta37781",-265704067,null)], null);
});

cljs.core.async.t_cljs$core$async37780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37780";

cljs.core.async.t_cljs$core$async37780.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async37780");
});

cljs.core.async.__GT_t_cljs$core$async37780 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37780(alt_handler__$1,flag__$1,cb__$1,meta37781){
return (new cljs.core.async.t_cljs$core$async37780(alt_handler__$1,flag__$1,cb__$1,meta37781));
});

}

return (new cljs.core.async.t_cljs$core$async37780(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37783_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37783_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37784_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37784_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35514__auto__ = wport;
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37785 = (i + (1));
i = G__37785;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35514__auto__ = ret;
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__35502__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35502__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35502__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__36579__auto__ = [];
var len__36572__auto___37791 = arguments.length;
var i__36573__auto___37792 = (0);
while(true){
if((i__36573__auto___37792 < len__36572__auto___37791)){
args__36579__auto__.push((arguments[i__36573__auto___37792]));

var G__37793 = (i__36573__auto___37792 + (1));
i__36573__auto___37792 = G__37793;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((1) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36580__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37788){
var map__37789 = p__37788;
var map__37789__$1 = ((((!((map__37789 == null)))?((((map__37789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37789):map__37789);
var opts = map__37789__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37786){
var G__37787 = cljs.core.first.call(null,seq37786);
var seq37786__$1 = cljs.core.next.call(null,seq37786);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37787,seq37786__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37794 = [];
var len__36572__auto___37844 = arguments.length;
var i__36573__auto___37845 = (0);
while(true){
if((i__36573__auto___37845 < len__36572__auto___37844)){
args37794.push((arguments[i__36573__auto___37845]));

var G__37846 = (i__36573__auto___37845 + (1));
i__36573__auto___37845 = G__37846;
continue;
} else {
}
break;
}

var G__37796 = args37794.length;
switch (G__37796) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37794.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37681__auto___37848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___37848){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___37848){
return (function (state_37820){
var state_val_37821 = (state_37820[(1)]);
if((state_val_37821 === (7))){
var inst_37816 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
var statearr_37822_37849 = state_37820__$1;
(statearr_37822_37849[(2)] = inst_37816);

(statearr_37822_37849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (1))){
var state_37820__$1 = state_37820;
var statearr_37823_37850 = state_37820__$1;
(statearr_37823_37850[(2)] = null);

(statearr_37823_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (4))){
var inst_37799 = (state_37820[(7)]);
var inst_37799__$1 = (state_37820[(2)]);
var inst_37800 = (inst_37799__$1 == null);
var state_37820__$1 = (function (){var statearr_37824 = state_37820;
(statearr_37824[(7)] = inst_37799__$1);

return statearr_37824;
})();
if(cljs.core.truth_(inst_37800)){
var statearr_37825_37851 = state_37820__$1;
(statearr_37825_37851[(1)] = (5));

} else {
var statearr_37826_37852 = state_37820__$1;
(statearr_37826_37852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (13))){
var state_37820__$1 = state_37820;
var statearr_37827_37853 = state_37820__$1;
(statearr_37827_37853[(2)] = null);

(statearr_37827_37853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (6))){
var inst_37799 = (state_37820[(7)]);
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37820__$1,(11),to,inst_37799);
} else {
if((state_val_37821 === (3))){
var inst_37818 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37820__$1,inst_37818);
} else {
if((state_val_37821 === (12))){
var state_37820__$1 = state_37820;
var statearr_37828_37854 = state_37820__$1;
(statearr_37828_37854[(2)] = null);

(statearr_37828_37854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (2))){
var state_37820__$1 = state_37820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37820__$1,(4),from);
} else {
if((state_val_37821 === (11))){
var inst_37809 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
if(cljs.core.truth_(inst_37809)){
var statearr_37829_37855 = state_37820__$1;
(statearr_37829_37855[(1)] = (12));

} else {
var statearr_37830_37856 = state_37820__$1;
(statearr_37830_37856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (9))){
var state_37820__$1 = state_37820;
var statearr_37831_37857 = state_37820__$1;
(statearr_37831_37857[(2)] = null);

(statearr_37831_37857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (5))){
var state_37820__$1 = state_37820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37832_37858 = state_37820__$1;
(statearr_37832_37858[(1)] = (8));

} else {
var statearr_37833_37859 = state_37820__$1;
(statearr_37833_37859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (14))){
var inst_37814 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
var statearr_37834_37860 = state_37820__$1;
(statearr_37834_37860[(2)] = inst_37814);

(statearr_37834_37860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (10))){
var inst_37806 = (state_37820[(2)]);
var state_37820__$1 = state_37820;
var statearr_37835_37861 = state_37820__$1;
(statearr_37835_37861[(2)] = inst_37806);

(statearr_37835_37861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37821 === (8))){
var inst_37803 = cljs.core.async.close_BANG_.call(null,to);
var state_37820__$1 = state_37820;
var statearr_37836_37862 = state_37820__$1;
(statearr_37836_37862[(2)] = inst_37803);

(statearr_37836_37862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___37848))
;
return ((function (switch__37569__auto__,c__37681__auto___37848){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_37840 = [null,null,null,null,null,null,null,null];
(statearr_37840[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_37840[(1)] = (1));

return statearr_37840;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_37820){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_37820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e37841){if((e37841 instanceof Object)){
var ex__37573__auto__ = e37841;
var statearr_37842_37863 = state_37820;
(statearr_37842_37863[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37864 = state_37820;
state_37820 = G__37864;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_37820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_37820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___37848))
})();
var state__37683__auto__ = (function (){var statearr_37843 = f__37682__auto__.call(null);
(statearr_37843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___37848);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___37848))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38048){
var vec__38049 = p__38048;
var v = cljs.core.nth.call(null,vec__38049,(0),null);
var p = cljs.core.nth.call(null,vec__38049,(1),null);
var job = vec__38049;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37681__auto___38231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results){
return (function (state_38054){
var state_val_38055 = (state_38054[(1)]);
if((state_val_38055 === (1))){
var state_38054__$1 = state_38054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38054__$1,(2),res,v);
} else {
if((state_val_38055 === (2))){
var inst_38051 = (state_38054[(2)]);
var inst_38052 = cljs.core.async.close_BANG_.call(null,res);
var state_38054__$1 = (function (){var statearr_38056 = state_38054;
(statearr_38056[(7)] = inst_38051);

return statearr_38056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38054__$1,inst_38052);
} else {
return null;
}
}
});})(c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results))
;
return ((function (switch__37569__auto__,c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_38060 = [null,null,null,null,null,null,null,null];
(statearr_38060[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_38060[(1)] = (1));

return statearr_38060;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_38054){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38061){if((e38061 instanceof Object)){
var ex__37573__auto__ = e38061;
var statearr_38062_38232 = state_38054;
(statearr_38062_38232[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_38054;
state_38054 = G__38233;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_38054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_38054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results))
})();
var state__37683__auto__ = (function (){var statearr_38063 = f__37682__auto__.call(null);
(statearr_38063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38231);

return statearr_38063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___38231,res,vec__38049,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38064){
var vec__38065 = p__38064;
var v = cljs.core.nth.call(null,vec__38065,(0),null);
var p = cljs.core.nth.call(null,vec__38065,(1),null);
var job = vec__38065;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36417__auto___38234 = n;
var __38235 = (0);
while(true){
if((__38235 < n__36417__auto___38234)){
var G__38066_38236 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38066_38236) {
case "compute":
var c__37681__auto___38238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38235,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (__38235,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function (state_38079){
var state_val_38080 = (state_38079[(1)]);
if((state_val_38080 === (1))){
var state_38079__$1 = state_38079;
var statearr_38081_38239 = state_38079__$1;
(statearr_38081_38239[(2)] = null);

(statearr_38081_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (2))){
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38079__$1,(4),jobs);
} else {
if((state_val_38080 === (3))){
var inst_38077 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38079__$1,inst_38077);
} else {
if((state_val_38080 === (4))){
var inst_38069 = (state_38079[(2)]);
var inst_38070 = process.call(null,inst_38069);
var state_38079__$1 = state_38079;
if(cljs.core.truth_(inst_38070)){
var statearr_38082_38240 = state_38079__$1;
(statearr_38082_38240[(1)] = (5));

} else {
var statearr_38083_38241 = state_38079__$1;
(statearr_38083_38241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (5))){
var state_38079__$1 = state_38079;
var statearr_38084_38242 = state_38079__$1;
(statearr_38084_38242[(2)] = null);

(statearr_38084_38242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (6))){
var state_38079__$1 = state_38079;
var statearr_38085_38243 = state_38079__$1;
(statearr_38085_38243[(2)] = null);

(statearr_38085_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (7))){
var inst_38075 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38086_38244 = state_38079__$1;
(statearr_38086_38244[(2)] = inst_38075);

(statearr_38086_38244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38235,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
;
return ((function (__38235,switch__37569__auto__,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_38090 = [null,null,null,null,null,null,null];
(statearr_38090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_38090[(1)] = (1));

return statearr_38090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_38079){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38091){if((e38091 instanceof Object)){
var ex__37573__auto__ = e38091;
var statearr_38092_38245 = state_38079;
(statearr_38092_38245[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38246 = state_38079;
state_38079 = G__38246;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_38079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_38079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(__38235,switch__37569__auto__,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_38093 = f__37682__auto__.call(null);
(statearr_38093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38238);

return statearr_38093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(__38235,c__37681__auto___38238,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
);


break;
case "async":
var c__37681__auto___38247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38235,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (__38235,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function (state_38106){
var state_val_38107 = (state_38106[(1)]);
if((state_val_38107 === (1))){
var state_38106__$1 = state_38106;
var statearr_38108_38248 = state_38106__$1;
(statearr_38108_38248[(2)] = null);

(statearr_38108_38248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38107 === (2))){
var state_38106__$1 = state_38106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38106__$1,(4),jobs);
} else {
if((state_val_38107 === (3))){
var inst_38104 = (state_38106[(2)]);
var state_38106__$1 = state_38106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38106__$1,inst_38104);
} else {
if((state_val_38107 === (4))){
var inst_38096 = (state_38106[(2)]);
var inst_38097 = async.call(null,inst_38096);
var state_38106__$1 = state_38106;
if(cljs.core.truth_(inst_38097)){
var statearr_38109_38249 = state_38106__$1;
(statearr_38109_38249[(1)] = (5));

} else {
var statearr_38110_38250 = state_38106__$1;
(statearr_38110_38250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38107 === (5))){
var state_38106__$1 = state_38106;
var statearr_38111_38251 = state_38106__$1;
(statearr_38111_38251[(2)] = null);

(statearr_38111_38251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38107 === (6))){
var state_38106__$1 = state_38106;
var statearr_38112_38252 = state_38106__$1;
(statearr_38112_38252[(2)] = null);

(statearr_38112_38252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38107 === (7))){
var inst_38102 = (state_38106[(2)]);
var state_38106__$1 = state_38106;
var statearr_38113_38253 = state_38106__$1;
(statearr_38113_38253[(2)] = inst_38102);

(statearr_38113_38253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__38235,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
;
return ((function (__38235,switch__37569__auto__,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_38117 = [null,null,null,null,null,null,null];
(statearr_38117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_38117[(1)] = (1));

return statearr_38117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_38106){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38118){if((e38118 instanceof Object)){
var ex__37573__auto__ = e38118;
var statearr_38119_38254 = state_38106;
(statearr_38119_38254[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38255 = state_38106;
state_38106 = G__38255;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_38106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_38106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(__38235,switch__37569__auto__,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_38120 = f__37682__auto__.call(null);
(statearr_38120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38247);

return statearr_38120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(__38235,c__37681__auto___38247,G__38066_38236,n__36417__auto___38234,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38256 = (__38235 + (1));
__38235 = G__38256;
continue;
} else {
}
break;
}

var c__37681__auto___38257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___38257,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___38257,jobs,results,process,async){
return (function (state_38142){
var state_val_38143 = (state_38142[(1)]);
if((state_val_38143 === (1))){
var state_38142__$1 = state_38142;
var statearr_38144_38258 = state_38142__$1;
(statearr_38144_38258[(2)] = null);

(statearr_38144_38258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (2))){
var state_38142__$1 = state_38142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38142__$1,(4),from);
} else {
if((state_val_38143 === (3))){
var inst_38140 = (state_38142[(2)]);
var state_38142__$1 = state_38142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38142__$1,inst_38140);
} else {
if((state_val_38143 === (4))){
var inst_38123 = (state_38142[(7)]);
var inst_38123__$1 = (state_38142[(2)]);
var inst_38124 = (inst_38123__$1 == null);
var state_38142__$1 = (function (){var statearr_38145 = state_38142;
(statearr_38145[(7)] = inst_38123__$1);

return statearr_38145;
})();
if(cljs.core.truth_(inst_38124)){
var statearr_38146_38259 = state_38142__$1;
(statearr_38146_38259[(1)] = (5));

} else {
var statearr_38147_38260 = state_38142__$1;
(statearr_38147_38260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (5))){
var inst_38126 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38142__$1 = state_38142;
var statearr_38148_38261 = state_38142__$1;
(statearr_38148_38261[(2)] = inst_38126);

(statearr_38148_38261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (6))){
var inst_38128 = (state_38142[(8)]);
var inst_38123 = (state_38142[(7)]);
var inst_38128__$1 = cljs.core.async.chan.call(null,(1));
var inst_38129 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38130 = [inst_38123,inst_38128__$1];
var inst_38131 = (new cljs.core.PersistentVector(null,2,(5),inst_38129,inst_38130,null));
var state_38142__$1 = (function (){var statearr_38149 = state_38142;
(statearr_38149[(8)] = inst_38128__$1);

return statearr_38149;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38142__$1,(8),jobs,inst_38131);
} else {
if((state_val_38143 === (7))){
var inst_38138 = (state_38142[(2)]);
var state_38142__$1 = state_38142;
var statearr_38150_38262 = state_38142__$1;
(statearr_38150_38262[(2)] = inst_38138);

(statearr_38150_38262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38143 === (8))){
var inst_38128 = (state_38142[(8)]);
var inst_38133 = (state_38142[(2)]);
var state_38142__$1 = (function (){var statearr_38151 = state_38142;
(statearr_38151[(9)] = inst_38133);

return statearr_38151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38142__$1,(9),results,inst_38128);
} else {
if((state_val_38143 === (9))){
var inst_38135 = (state_38142[(2)]);
var state_38142__$1 = (function (){var statearr_38152 = state_38142;
(statearr_38152[(10)] = inst_38135);

return statearr_38152;
})();
var statearr_38153_38263 = state_38142__$1;
(statearr_38153_38263[(2)] = null);

(statearr_38153_38263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___38257,jobs,results,process,async))
;
return ((function (switch__37569__auto__,c__37681__auto___38257,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_38157 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_38157[(1)] = (1));

return statearr_38157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_38142){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38158){if((e38158 instanceof Object)){
var ex__37573__auto__ = e38158;
var statearr_38159_38264 = state_38142;
(statearr_38159_38264[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38265 = state_38142;
state_38142 = G__38265;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_38142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_38142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___38257,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_38160 = f__37682__auto__.call(null);
(statearr_38160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38257);

return statearr_38160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___38257,jobs,results,process,async))
);


var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,jobs,results,process,async){
return (function (state_38198){
var state_val_38199 = (state_38198[(1)]);
if((state_val_38199 === (7))){
var inst_38194 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
var statearr_38200_38266 = state_38198__$1;
(statearr_38200_38266[(2)] = inst_38194);

(statearr_38200_38266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (20))){
var state_38198__$1 = state_38198;
var statearr_38201_38267 = state_38198__$1;
(statearr_38201_38267[(2)] = null);

(statearr_38201_38267[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (1))){
var state_38198__$1 = state_38198;
var statearr_38202_38268 = state_38198__$1;
(statearr_38202_38268[(2)] = null);

(statearr_38202_38268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (4))){
var inst_38163 = (state_38198[(7)]);
var inst_38163__$1 = (state_38198[(2)]);
var inst_38164 = (inst_38163__$1 == null);
var state_38198__$1 = (function (){var statearr_38203 = state_38198;
(statearr_38203[(7)] = inst_38163__$1);

return statearr_38203;
})();
if(cljs.core.truth_(inst_38164)){
var statearr_38204_38269 = state_38198__$1;
(statearr_38204_38269[(1)] = (5));

} else {
var statearr_38205_38270 = state_38198__$1;
(statearr_38205_38270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (15))){
var inst_38176 = (state_38198[(8)]);
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38198__$1,(18),to,inst_38176);
} else {
if((state_val_38199 === (21))){
var inst_38189 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
var statearr_38206_38271 = state_38198__$1;
(statearr_38206_38271[(2)] = inst_38189);

(statearr_38206_38271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (13))){
var inst_38191 = (state_38198[(2)]);
var state_38198__$1 = (function (){var statearr_38207 = state_38198;
(statearr_38207[(9)] = inst_38191);

return statearr_38207;
})();
var statearr_38208_38272 = state_38198__$1;
(statearr_38208_38272[(2)] = null);

(statearr_38208_38272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (6))){
var inst_38163 = (state_38198[(7)]);
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38198__$1,(11),inst_38163);
} else {
if((state_val_38199 === (17))){
var inst_38184 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
if(cljs.core.truth_(inst_38184)){
var statearr_38209_38273 = state_38198__$1;
(statearr_38209_38273[(1)] = (19));

} else {
var statearr_38210_38274 = state_38198__$1;
(statearr_38210_38274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (3))){
var inst_38196 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38198__$1,inst_38196);
} else {
if((state_val_38199 === (12))){
var inst_38173 = (state_38198[(10)]);
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38198__$1,(14),inst_38173);
} else {
if((state_val_38199 === (2))){
var state_38198__$1 = state_38198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38198__$1,(4),results);
} else {
if((state_val_38199 === (19))){
var state_38198__$1 = state_38198;
var statearr_38211_38275 = state_38198__$1;
(statearr_38211_38275[(2)] = null);

(statearr_38211_38275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (11))){
var inst_38173 = (state_38198[(2)]);
var state_38198__$1 = (function (){var statearr_38212 = state_38198;
(statearr_38212[(10)] = inst_38173);

return statearr_38212;
})();
var statearr_38213_38276 = state_38198__$1;
(statearr_38213_38276[(2)] = null);

(statearr_38213_38276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (9))){
var state_38198__$1 = state_38198;
var statearr_38214_38277 = state_38198__$1;
(statearr_38214_38277[(2)] = null);

(statearr_38214_38277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (5))){
var state_38198__$1 = state_38198;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38215_38278 = state_38198__$1;
(statearr_38215_38278[(1)] = (8));

} else {
var statearr_38216_38279 = state_38198__$1;
(statearr_38216_38279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (14))){
var inst_38176 = (state_38198[(8)]);
var inst_38178 = (state_38198[(11)]);
var inst_38176__$1 = (state_38198[(2)]);
var inst_38177 = (inst_38176__$1 == null);
var inst_38178__$1 = cljs.core.not.call(null,inst_38177);
var state_38198__$1 = (function (){var statearr_38217 = state_38198;
(statearr_38217[(8)] = inst_38176__$1);

(statearr_38217[(11)] = inst_38178__$1);

return statearr_38217;
})();
if(inst_38178__$1){
var statearr_38218_38280 = state_38198__$1;
(statearr_38218_38280[(1)] = (15));

} else {
var statearr_38219_38281 = state_38198__$1;
(statearr_38219_38281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (16))){
var inst_38178 = (state_38198[(11)]);
var state_38198__$1 = state_38198;
var statearr_38220_38282 = state_38198__$1;
(statearr_38220_38282[(2)] = inst_38178);

(statearr_38220_38282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (10))){
var inst_38170 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
var statearr_38221_38283 = state_38198__$1;
(statearr_38221_38283[(2)] = inst_38170);

(statearr_38221_38283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (18))){
var inst_38181 = (state_38198[(2)]);
var state_38198__$1 = state_38198;
var statearr_38222_38284 = state_38198__$1;
(statearr_38222_38284[(2)] = inst_38181);

(statearr_38222_38284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38199 === (8))){
var inst_38167 = cljs.core.async.close_BANG_.call(null,to);
var state_38198__$1 = state_38198;
var statearr_38223_38285 = state_38198__$1;
(statearr_38223_38285[(2)] = inst_38167);

(statearr_38223_38285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__,jobs,results,process,async))
;
return ((function (switch__37569__auto__,c__37681__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_38227 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_38227[(1)] = (1));

return statearr_38227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_38198){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38228){if((e38228 instanceof Object)){
var ex__37573__auto__ = e38228;
var statearr_38229_38286 = state_38198;
(statearr_38229_38286[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38287 = state_38198;
state_38198 = G__38287;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_38198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_38198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_38230 = f__37682__auto__.call(null);
(statearr_38230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_38230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__,jobs,results,process,async))
);

return c__37681__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38288 = [];
var len__36572__auto___38291 = arguments.length;
var i__36573__auto___38292 = (0);
while(true){
if((i__36573__auto___38292 < len__36572__auto___38291)){
args38288.push((arguments[i__36573__auto___38292]));

var G__38293 = (i__36573__auto___38292 + (1));
i__36573__auto___38292 = G__38293;
continue;
} else {
}
break;
}

var G__38290 = args38288.length;
switch (G__38290) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38288.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38295 = [];
var len__36572__auto___38298 = arguments.length;
var i__36573__auto___38299 = (0);
while(true){
if((i__36573__auto___38299 < len__36572__auto___38298)){
args38295.push((arguments[i__36573__auto___38299]));

var G__38300 = (i__36573__auto___38299 + (1));
i__36573__auto___38299 = G__38300;
continue;
} else {
}
break;
}

var G__38297 = args38295.length;
switch (G__38297) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38295.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38302 = [];
var len__36572__auto___38355 = arguments.length;
var i__36573__auto___38356 = (0);
while(true){
if((i__36573__auto___38356 < len__36572__auto___38355)){
args38302.push((arguments[i__36573__auto___38356]));

var G__38357 = (i__36573__auto___38356 + (1));
i__36573__auto___38356 = G__38357;
continue;
} else {
}
break;
}

var G__38304 = args38302.length;
switch (G__38304) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38302.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37681__auto___38359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___38359,tc,fc){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___38359,tc,fc){
return (function (state_38330){
var state_val_38331 = (state_38330[(1)]);
if((state_val_38331 === (7))){
var inst_38326 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38332_38360 = state_38330__$1;
(statearr_38332_38360[(2)] = inst_38326);

(statearr_38332_38360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (1))){
var state_38330__$1 = state_38330;
var statearr_38333_38361 = state_38330__$1;
(statearr_38333_38361[(2)] = null);

(statearr_38333_38361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (4))){
var inst_38307 = (state_38330[(7)]);
var inst_38307__$1 = (state_38330[(2)]);
var inst_38308 = (inst_38307__$1 == null);
var state_38330__$1 = (function (){var statearr_38334 = state_38330;
(statearr_38334[(7)] = inst_38307__$1);

return statearr_38334;
})();
if(cljs.core.truth_(inst_38308)){
var statearr_38335_38362 = state_38330__$1;
(statearr_38335_38362[(1)] = (5));

} else {
var statearr_38336_38363 = state_38330__$1;
(statearr_38336_38363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (13))){
var state_38330__$1 = state_38330;
var statearr_38337_38364 = state_38330__$1;
(statearr_38337_38364[(2)] = null);

(statearr_38337_38364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (6))){
var inst_38307 = (state_38330[(7)]);
var inst_38313 = p.call(null,inst_38307);
var state_38330__$1 = state_38330;
if(cljs.core.truth_(inst_38313)){
var statearr_38338_38365 = state_38330__$1;
(statearr_38338_38365[(1)] = (9));

} else {
var statearr_38339_38366 = state_38330__$1;
(statearr_38339_38366[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (3))){
var inst_38328 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38330__$1,inst_38328);
} else {
if((state_val_38331 === (12))){
var state_38330__$1 = state_38330;
var statearr_38340_38367 = state_38330__$1;
(statearr_38340_38367[(2)] = null);

(statearr_38340_38367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (2))){
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38330__$1,(4),ch);
} else {
if((state_val_38331 === (11))){
var inst_38307 = (state_38330[(7)]);
var inst_38317 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38330__$1,(8),inst_38317,inst_38307);
} else {
if((state_val_38331 === (9))){
var state_38330__$1 = state_38330;
var statearr_38341_38368 = state_38330__$1;
(statearr_38341_38368[(2)] = tc);

(statearr_38341_38368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (5))){
var inst_38310 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38311 = cljs.core.async.close_BANG_.call(null,fc);
var state_38330__$1 = (function (){var statearr_38342 = state_38330;
(statearr_38342[(8)] = inst_38310);

return statearr_38342;
})();
var statearr_38343_38369 = state_38330__$1;
(statearr_38343_38369[(2)] = inst_38311);

(statearr_38343_38369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (14))){
var inst_38324 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38344_38370 = state_38330__$1;
(statearr_38344_38370[(2)] = inst_38324);

(statearr_38344_38370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (10))){
var state_38330__$1 = state_38330;
var statearr_38345_38371 = state_38330__$1;
(statearr_38345_38371[(2)] = fc);

(statearr_38345_38371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (8))){
var inst_38319 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
if(cljs.core.truth_(inst_38319)){
var statearr_38346_38372 = state_38330__$1;
(statearr_38346_38372[(1)] = (12));

} else {
var statearr_38347_38373 = state_38330__$1;
(statearr_38347_38373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___38359,tc,fc))
;
return ((function (switch__37569__auto__,c__37681__auto___38359,tc,fc){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_38351 = [null,null,null,null,null,null,null,null,null];
(statearr_38351[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_38351[(1)] = (1));

return statearr_38351;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_38330){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38352){if((e38352 instanceof Object)){
var ex__37573__auto__ = e38352;
var statearr_38353_38374 = state_38330;
(statearr_38353_38374[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38375 = state_38330;
state_38330 = G__38375;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_38330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_38330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___38359,tc,fc))
})();
var state__37683__auto__ = (function (){var statearr_38354 = f__37682__auto__.call(null);
(statearr_38354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38359);

return statearr_38354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___38359,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_38439){
var state_val_38440 = (state_38439[(1)]);
if((state_val_38440 === (7))){
var inst_38435 = (state_38439[(2)]);
var state_38439__$1 = state_38439;
var statearr_38441_38462 = state_38439__$1;
(statearr_38441_38462[(2)] = inst_38435);

(statearr_38441_38462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (1))){
var inst_38419 = init;
var state_38439__$1 = (function (){var statearr_38442 = state_38439;
(statearr_38442[(7)] = inst_38419);

return statearr_38442;
})();
var statearr_38443_38463 = state_38439__$1;
(statearr_38443_38463[(2)] = null);

(statearr_38443_38463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (4))){
var inst_38422 = (state_38439[(8)]);
var inst_38422__$1 = (state_38439[(2)]);
var inst_38423 = (inst_38422__$1 == null);
var state_38439__$1 = (function (){var statearr_38444 = state_38439;
(statearr_38444[(8)] = inst_38422__$1);

return statearr_38444;
})();
if(cljs.core.truth_(inst_38423)){
var statearr_38445_38464 = state_38439__$1;
(statearr_38445_38464[(1)] = (5));

} else {
var statearr_38446_38465 = state_38439__$1;
(statearr_38446_38465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (6))){
var inst_38422 = (state_38439[(8)]);
var inst_38419 = (state_38439[(7)]);
var inst_38426 = (state_38439[(9)]);
var inst_38426__$1 = f.call(null,inst_38419,inst_38422);
var inst_38427 = cljs.core.reduced_QMARK_.call(null,inst_38426__$1);
var state_38439__$1 = (function (){var statearr_38447 = state_38439;
(statearr_38447[(9)] = inst_38426__$1);

return statearr_38447;
})();
if(inst_38427){
var statearr_38448_38466 = state_38439__$1;
(statearr_38448_38466[(1)] = (8));

} else {
var statearr_38449_38467 = state_38439__$1;
(statearr_38449_38467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (3))){
var inst_38437 = (state_38439[(2)]);
var state_38439__$1 = state_38439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38439__$1,inst_38437);
} else {
if((state_val_38440 === (2))){
var state_38439__$1 = state_38439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38439__$1,(4),ch);
} else {
if((state_val_38440 === (9))){
var inst_38426 = (state_38439[(9)]);
var inst_38419 = inst_38426;
var state_38439__$1 = (function (){var statearr_38450 = state_38439;
(statearr_38450[(7)] = inst_38419);

return statearr_38450;
})();
var statearr_38451_38468 = state_38439__$1;
(statearr_38451_38468[(2)] = null);

(statearr_38451_38468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (5))){
var inst_38419 = (state_38439[(7)]);
var state_38439__$1 = state_38439;
var statearr_38452_38469 = state_38439__$1;
(statearr_38452_38469[(2)] = inst_38419);

(statearr_38452_38469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (10))){
var inst_38433 = (state_38439[(2)]);
var state_38439__$1 = state_38439;
var statearr_38453_38470 = state_38439__$1;
(statearr_38453_38470[(2)] = inst_38433);

(statearr_38453_38470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38440 === (8))){
var inst_38426 = (state_38439[(9)]);
var inst_38429 = cljs.core.deref.call(null,inst_38426);
var state_38439__$1 = state_38439;
var statearr_38454_38471 = state_38439__$1;
(statearr_38454_38471[(2)] = inst_38429);

(statearr_38454_38471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37570__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37570__auto____0 = (function (){
var statearr_38458 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38458[(0)] = cljs$core$async$reduce_$_state_machine__37570__auto__);

(statearr_38458[(1)] = (1));

return statearr_38458;
});
var cljs$core$async$reduce_$_state_machine__37570__auto____1 = (function (state_38439){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38459){if((e38459 instanceof Object)){
var ex__37573__auto__ = e38459;
var statearr_38460_38472 = state_38439;
(statearr_38460_38472[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38473 = state_38439;
state_38439 = G__38473;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37570__auto__ = function(state_38439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37570__auto____1.call(this,state_38439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37570__auto____0;
cljs$core$async$reduce_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37570__auto____1;
return cljs$core$async$reduce_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_38461 = f__37682__auto__.call(null);
(statearr_38461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_38461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38474 = [];
var len__36572__auto___38526 = arguments.length;
var i__36573__auto___38527 = (0);
while(true){
if((i__36573__auto___38527 < len__36572__auto___38526)){
args38474.push((arguments[i__36573__auto___38527]));

var G__38528 = (i__36573__auto___38527 + (1));
i__36573__auto___38527 = G__38528;
continue;
} else {
}
break;
}

var G__38476 = args38474.length;
switch (G__38476) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38474.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_38501){
var state_val_38502 = (state_38501[(1)]);
if((state_val_38502 === (7))){
var inst_38483 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38503_38530 = state_38501__$1;
(statearr_38503_38530[(2)] = inst_38483);

(statearr_38503_38530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (1))){
var inst_38477 = cljs.core.seq.call(null,coll);
var inst_38478 = inst_38477;
var state_38501__$1 = (function (){var statearr_38504 = state_38501;
(statearr_38504[(7)] = inst_38478);

return statearr_38504;
})();
var statearr_38505_38531 = state_38501__$1;
(statearr_38505_38531[(2)] = null);

(statearr_38505_38531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (4))){
var inst_38478 = (state_38501[(7)]);
var inst_38481 = cljs.core.first.call(null,inst_38478);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38501__$1,(7),ch,inst_38481);
} else {
if((state_val_38502 === (13))){
var inst_38495 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38506_38532 = state_38501__$1;
(statearr_38506_38532[(2)] = inst_38495);

(statearr_38506_38532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (6))){
var inst_38486 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
if(cljs.core.truth_(inst_38486)){
var statearr_38507_38533 = state_38501__$1;
(statearr_38507_38533[(1)] = (8));

} else {
var statearr_38508_38534 = state_38501__$1;
(statearr_38508_38534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (3))){
var inst_38499 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38501__$1,inst_38499);
} else {
if((state_val_38502 === (12))){
var state_38501__$1 = state_38501;
var statearr_38509_38535 = state_38501__$1;
(statearr_38509_38535[(2)] = null);

(statearr_38509_38535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (2))){
var inst_38478 = (state_38501[(7)]);
var state_38501__$1 = state_38501;
if(cljs.core.truth_(inst_38478)){
var statearr_38510_38536 = state_38501__$1;
(statearr_38510_38536[(1)] = (4));

} else {
var statearr_38511_38537 = state_38501__$1;
(statearr_38511_38537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (11))){
var inst_38492 = cljs.core.async.close_BANG_.call(null,ch);
var state_38501__$1 = state_38501;
var statearr_38512_38538 = state_38501__$1;
(statearr_38512_38538[(2)] = inst_38492);

(statearr_38512_38538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (9))){
var state_38501__$1 = state_38501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38513_38539 = state_38501__$1;
(statearr_38513_38539[(1)] = (11));

} else {
var statearr_38514_38540 = state_38501__$1;
(statearr_38514_38540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (5))){
var inst_38478 = (state_38501[(7)]);
var state_38501__$1 = state_38501;
var statearr_38515_38541 = state_38501__$1;
(statearr_38515_38541[(2)] = inst_38478);

(statearr_38515_38541[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (10))){
var inst_38497 = (state_38501[(2)]);
var state_38501__$1 = state_38501;
var statearr_38516_38542 = state_38501__$1;
(statearr_38516_38542[(2)] = inst_38497);

(statearr_38516_38542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38502 === (8))){
var inst_38478 = (state_38501[(7)]);
var inst_38488 = cljs.core.next.call(null,inst_38478);
var inst_38478__$1 = inst_38488;
var state_38501__$1 = (function (){var statearr_38517 = state_38501;
(statearr_38517[(7)] = inst_38478__$1);

return statearr_38517;
})();
var statearr_38518_38543 = state_38501__$1;
(statearr_38518_38543[(2)] = null);

(statearr_38518_38543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_38522 = [null,null,null,null,null,null,null,null];
(statearr_38522[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_38522[(1)] = (1));

return statearr_38522;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_38501){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38523){if((e38523 instanceof Object)){
var ex__37573__auto__ = e38523;
var statearr_38524_38544 = state_38501;
(statearr_38524_38544[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38545 = state_38501;
state_38501 = G__38545;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_38501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_38501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_38525 = f__37682__auto__.call(null);
(statearr_38525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_38525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36169__auto__ = (((_ == null))?null:_);
var m__36170__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,_);
} else {
var m__36170__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36170__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,ch);
} else {
var m__36170__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m);
} else {
var m__36170__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38767 = (function (mult,ch,cs,meta38768){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38768 = meta38768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38769,meta38768__$1){
var self__ = this;
var _38769__$1 = this;
return (new cljs.core.async.t_cljs$core$async38767(self__.mult,self__.ch,self__.cs,meta38768__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38769){
var self__ = this;
var _38769__$1 = this;
return self__.meta38768;
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38768","meta38768",-1282867193,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38767";

cljs.core.async.t_cljs$core$async38767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async38767");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38767(mult__$1,ch__$1,cs__$1,meta38768){
return (new cljs.core.async.t_cljs$core$async38767(mult__$1,ch__$1,cs__$1,meta38768));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38767(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37681__auto___38988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___38988,cs,m,dchan,dctr,done){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___38988,cs,m,dchan,dctr,done){
return (function (state_38900){
var state_val_38901 = (state_38900[(1)]);
if((state_val_38901 === (7))){
var inst_38896 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38902_38989 = state_38900__$1;
(statearr_38902_38989[(2)] = inst_38896);

(statearr_38902_38989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (20))){
var inst_38801 = (state_38900[(7)]);
var inst_38811 = cljs.core.first.call(null,inst_38801);
var inst_38812 = cljs.core.nth.call(null,inst_38811,(0),null);
var inst_38813 = cljs.core.nth.call(null,inst_38811,(1),null);
var state_38900__$1 = (function (){var statearr_38903 = state_38900;
(statearr_38903[(8)] = inst_38812);

return statearr_38903;
})();
if(cljs.core.truth_(inst_38813)){
var statearr_38904_38990 = state_38900__$1;
(statearr_38904_38990[(1)] = (22));

} else {
var statearr_38905_38991 = state_38900__$1;
(statearr_38905_38991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (27))){
var inst_38772 = (state_38900[(9)]);
var inst_38848 = (state_38900[(10)]);
var inst_38843 = (state_38900[(11)]);
var inst_38841 = (state_38900[(12)]);
var inst_38848__$1 = cljs.core._nth.call(null,inst_38841,inst_38843);
var inst_38849 = cljs.core.async.put_BANG_.call(null,inst_38848__$1,inst_38772,done);
var state_38900__$1 = (function (){var statearr_38906 = state_38900;
(statearr_38906[(10)] = inst_38848__$1);

return statearr_38906;
})();
if(cljs.core.truth_(inst_38849)){
var statearr_38907_38992 = state_38900__$1;
(statearr_38907_38992[(1)] = (30));

} else {
var statearr_38908_38993 = state_38900__$1;
(statearr_38908_38993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (1))){
var state_38900__$1 = state_38900;
var statearr_38909_38994 = state_38900__$1;
(statearr_38909_38994[(2)] = null);

(statearr_38909_38994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (24))){
var inst_38801 = (state_38900[(7)]);
var inst_38818 = (state_38900[(2)]);
var inst_38819 = cljs.core.next.call(null,inst_38801);
var inst_38781 = inst_38819;
var inst_38782 = null;
var inst_38783 = (0);
var inst_38784 = (0);
var state_38900__$1 = (function (){var statearr_38910 = state_38900;
(statearr_38910[(13)] = inst_38818);

(statearr_38910[(14)] = inst_38784);

(statearr_38910[(15)] = inst_38783);

(statearr_38910[(16)] = inst_38782);

(statearr_38910[(17)] = inst_38781);

return statearr_38910;
})();
var statearr_38911_38995 = state_38900__$1;
(statearr_38911_38995[(2)] = null);

(statearr_38911_38995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (39))){
var state_38900__$1 = state_38900;
var statearr_38915_38996 = state_38900__$1;
(statearr_38915_38996[(2)] = null);

(statearr_38915_38996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (4))){
var inst_38772 = (state_38900[(9)]);
var inst_38772__$1 = (state_38900[(2)]);
var inst_38773 = (inst_38772__$1 == null);
var state_38900__$1 = (function (){var statearr_38916 = state_38900;
(statearr_38916[(9)] = inst_38772__$1);

return statearr_38916;
})();
if(cljs.core.truth_(inst_38773)){
var statearr_38917_38997 = state_38900__$1;
(statearr_38917_38997[(1)] = (5));

} else {
var statearr_38918_38998 = state_38900__$1;
(statearr_38918_38998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (15))){
var inst_38784 = (state_38900[(14)]);
var inst_38783 = (state_38900[(15)]);
var inst_38782 = (state_38900[(16)]);
var inst_38781 = (state_38900[(17)]);
var inst_38797 = (state_38900[(2)]);
var inst_38798 = (inst_38784 + (1));
var tmp38912 = inst_38783;
var tmp38913 = inst_38782;
var tmp38914 = inst_38781;
var inst_38781__$1 = tmp38914;
var inst_38782__$1 = tmp38913;
var inst_38783__$1 = tmp38912;
var inst_38784__$1 = inst_38798;
var state_38900__$1 = (function (){var statearr_38919 = state_38900;
(statearr_38919[(18)] = inst_38797);

(statearr_38919[(14)] = inst_38784__$1);

(statearr_38919[(15)] = inst_38783__$1);

(statearr_38919[(16)] = inst_38782__$1);

(statearr_38919[(17)] = inst_38781__$1);

return statearr_38919;
})();
var statearr_38920_38999 = state_38900__$1;
(statearr_38920_38999[(2)] = null);

(statearr_38920_38999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (21))){
var inst_38822 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38924_39000 = state_38900__$1;
(statearr_38924_39000[(2)] = inst_38822);

(statearr_38924_39000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (31))){
var inst_38848 = (state_38900[(10)]);
var inst_38852 = done.call(null,null);
var inst_38853 = cljs.core.async.untap_STAR_.call(null,m,inst_38848);
var state_38900__$1 = (function (){var statearr_38925 = state_38900;
(statearr_38925[(19)] = inst_38852);

return statearr_38925;
})();
var statearr_38926_39001 = state_38900__$1;
(statearr_38926_39001[(2)] = inst_38853);

(statearr_38926_39001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (32))){
var inst_38840 = (state_38900[(20)]);
var inst_38842 = (state_38900[(21)]);
var inst_38843 = (state_38900[(11)]);
var inst_38841 = (state_38900[(12)]);
var inst_38855 = (state_38900[(2)]);
var inst_38856 = (inst_38843 + (1));
var tmp38921 = inst_38840;
var tmp38922 = inst_38842;
var tmp38923 = inst_38841;
var inst_38840__$1 = tmp38921;
var inst_38841__$1 = tmp38923;
var inst_38842__$1 = tmp38922;
var inst_38843__$1 = inst_38856;
var state_38900__$1 = (function (){var statearr_38927 = state_38900;
(statearr_38927[(20)] = inst_38840__$1);

(statearr_38927[(22)] = inst_38855);

(statearr_38927[(21)] = inst_38842__$1);

(statearr_38927[(11)] = inst_38843__$1);

(statearr_38927[(12)] = inst_38841__$1);

return statearr_38927;
})();
var statearr_38928_39002 = state_38900__$1;
(statearr_38928_39002[(2)] = null);

(statearr_38928_39002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (40))){
var inst_38868 = (state_38900[(23)]);
var inst_38872 = done.call(null,null);
var inst_38873 = cljs.core.async.untap_STAR_.call(null,m,inst_38868);
var state_38900__$1 = (function (){var statearr_38929 = state_38900;
(statearr_38929[(24)] = inst_38872);

return statearr_38929;
})();
var statearr_38930_39003 = state_38900__$1;
(statearr_38930_39003[(2)] = inst_38873);

(statearr_38930_39003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (33))){
var inst_38859 = (state_38900[(25)]);
var inst_38861 = cljs.core.chunked_seq_QMARK_.call(null,inst_38859);
var state_38900__$1 = state_38900;
if(inst_38861){
var statearr_38931_39004 = state_38900__$1;
(statearr_38931_39004[(1)] = (36));

} else {
var statearr_38932_39005 = state_38900__$1;
(statearr_38932_39005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (13))){
var inst_38791 = (state_38900[(26)]);
var inst_38794 = cljs.core.async.close_BANG_.call(null,inst_38791);
var state_38900__$1 = state_38900;
var statearr_38933_39006 = state_38900__$1;
(statearr_38933_39006[(2)] = inst_38794);

(statearr_38933_39006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (22))){
var inst_38812 = (state_38900[(8)]);
var inst_38815 = cljs.core.async.close_BANG_.call(null,inst_38812);
var state_38900__$1 = state_38900;
var statearr_38934_39007 = state_38900__$1;
(statearr_38934_39007[(2)] = inst_38815);

(statearr_38934_39007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (36))){
var inst_38859 = (state_38900[(25)]);
var inst_38863 = cljs.core.chunk_first.call(null,inst_38859);
var inst_38864 = cljs.core.chunk_rest.call(null,inst_38859);
var inst_38865 = cljs.core.count.call(null,inst_38863);
var inst_38840 = inst_38864;
var inst_38841 = inst_38863;
var inst_38842 = inst_38865;
var inst_38843 = (0);
var state_38900__$1 = (function (){var statearr_38935 = state_38900;
(statearr_38935[(20)] = inst_38840);

(statearr_38935[(21)] = inst_38842);

(statearr_38935[(11)] = inst_38843);

(statearr_38935[(12)] = inst_38841);

return statearr_38935;
})();
var statearr_38936_39008 = state_38900__$1;
(statearr_38936_39008[(2)] = null);

(statearr_38936_39008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (41))){
var inst_38859 = (state_38900[(25)]);
var inst_38875 = (state_38900[(2)]);
var inst_38876 = cljs.core.next.call(null,inst_38859);
var inst_38840 = inst_38876;
var inst_38841 = null;
var inst_38842 = (0);
var inst_38843 = (0);
var state_38900__$1 = (function (){var statearr_38937 = state_38900;
(statearr_38937[(20)] = inst_38840);

(statearr_38937[(27)] = inst_38875);

(statearr_38937[(21)] = inst_38842);

(statearr_38937[(11)] = inst_38843);

(statearr_38937[(12)] = inst_38841);

return statearr_38937;
})();
var statearr_38938_39009 = state_38900__$1;
(statearr_38938_39009[(2)] = null);

(statearr_38938_39009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (43))){
var state_38900__$1 = state_38900;
var statearr_38939_39010 = state_38900__$1;
(statearr_38939_39010[(2)] = null);

(statearr_38939_39010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (29))){
var inst_38884 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38940_39011 = state_38900__$1;
(statearr_38940_39011[(2)] = inst_38884);

(statearr_38940_39011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (44))){
var inst_38893 = (state_38900[(2)]);
var state_38900__$1 = (function (){var statearr_38941 = state_38900;
(statearr_38941[(28)] = inst_38893);

return statearr_38941;
})();
var statearr_38942_39012 = state_38900__$1;
(statearr_38942_39012[(2)] = null);

(statearr_38942_39012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (6))){
var inst_38832 = (state_38900[(29)]);
var inst_38831 = cljs.core.deref.call(null,cs);
var inst_38832__$1 = cljs.core.keys.call(null,inst_38831);
var inst_38833 = cljs.core.count.call(null,inst_38832__$1);
var inst_38834 = cljs.core.reset_BANG_.call(null,dctr,inst_38833);
var inst_38839 = cljs.core.seq.call(null,inst_38832__$1);
var inst_38840 = inst_38839;
var inst_38841 = null;
var inst_38842 = (0);
var inst_38843 = (0);
var state_38900__$1 = (function (){var statearr_38943 = state_38900;
(statearr_38943[(20)] = inst_38840);

(statearr_38943[(21)] = inst_38842);

(statearr_38943[(11)] = inst_38843);

(statearr_38943[(29)] = inst_38832__$1);

(statearr_38943[(30)] = inst_38834);

(statearr_38943[(12)] = inst_38841);

return statearr_38943;
})();
var statearr_38944_39013 = state_38900__$1;
(statearr_38944_39013[(2)] = null);

(statearr_38944_39013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (28))){
var inst_38840 = (state_38900[(20)]);
var inst_38859 = (state_38900[(25)]);
var inst_38859__$1 = cljs.core.seq.call(null,inst_38840);
var state_38900__$1 = (function (){var statearr_38945 = state_38900;
(statearr_38945[(25)] = inst_38859__$1);

return statearr_38945;
})();
if(inst_38859__$1){
var statearr_38946_39014 = state_38900__$1;
(statearr_38946_39014[(1)] = (33));

} else {
var statearr_38947_39015 = state_38900__$1;
(statearr_38947_39015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (25))){
var inst_38842 = (state_38900[(21)]);
var inst_38843 = (state_38900[(11)]);
var inst_38845 = (inst_38843 < inst_38842);
var inst_38846 = inst_38845;
var state_38900__$1 = state_38900;
if(cljs.core.truth_(inst_38846)){
var statearr_38948_39016 = state_38900__$1;
(statearr_38948_39016[(1)] = (27));

} else {
var statearr_38949_39017 = state_38900__$1;
(statearr_38949_39017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (34))){
var state_38900__$1 = state_38900;
var statearr_38950_39018 = state_38900__$1;
(statearr_38950_39018[(2)] = null);

(statearr_38950_39018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (17))){
var state_38900__$1 = state_38900;
var statearr_38951_39019 = state_38900__$1;
(statearr_38951_39019[(2)] = null);

(statearr_38951_39019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (3))){
var inst_38898 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38900__$1,inst_38898);
} else {
if((state_val_38901 === (12))){
var inst_38827 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38952_39020 = state_38900__$1;
(statearr_38952_39020[(2)] = inst_38827);

(statearr_38952_39020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (2))){
var state_38900__$1 = state_38900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38900__$1,(4),ch);
} else {
if((state_val_38901 === (23))){
var state_38900__$1 = state_38900;
var statearr_38953_39021 = state_38900__$1;
(statearr_38953_39021[(2)] = null);

(statearr_38953_39021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (35))){
var inst_38882 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38954_39022 = state_38900__$1;
(statearr_38954_39022[(2)] = inst_38882);

(statearr_38954_39022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (19))){
var inst_38801 = (state_38900[(7)]);
var inst_38805 = cljs.core.chunk_first.call(null,inst_38801);
var inst_38806 = cljs.core.chunk_rest.call(null,inst_38801);
var inst_38807 = cljs.core.count.call(null,inst_38805);
var inst_38781 = inst_38806;
var inst_38782 = inst_38805;
var inst_38783 = inst_38807;
var inst_38784 = (0);
var state_38900__$1 = (function (){var statearr_38955 = state_38900;
(statearr_38955[(14)] = inst_38784);

(statearr_38955[(15)] = inst_38783);

(statearr_38955[(16)] = inst_38782);

(statearr_38955[(17)] = inst_38781);

return statearr_38955;
})();
var statearr_38956_39023 = state_38900__$1;
(statearr_38956_39023[(2)] = null);

(statearr_38956_39023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (11))){
var inst_38801 = (state_38900[(7)]);
var inst_38781 = (state_38900[(17)]);
var inst_38801__$1 = cljs.core.seq.call(null,inst_38781);
var state_38900__$1 = (function (){var statearr_38957 = state_38900;
(statearr_38957[(7)] = inst_38801__$1);

return statearr_38957;
})();
if(inst_38801__$1){
var statearr_38958_39024 = state_38900__$1;
(statearr_38958_39024[(1)] = (16));

} else {
var statearr_38959_39025 = state_38900__$1;
(statearr_38959_39025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (9))){
var inst_38829 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38960_39026 = state_38900__$1;
(statearr_38960_39026[(2)] = inst_38829);

(statearr_38960_39026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (5))){
var inst_38779 = cljs.core.deref.call(null,cs);
var inst_38780 = cljs.core.seq.call(null,inst_38779);
var inst_38781 = inst_38780;
var inst_38782 = null;
var inst_38783 = (0);
var inst_38784 = (0);
var state_38900__$1 = (function (){var statearr_38961 = state_38900;
(statearr_38961[(14)] = inst_38784);

(statearr_38961[(15)] = inst_38783);

(statearr_38961[(16)] = inst_38782);

(statearr_38961[(17)] = inst_38781);

return statearr_38961;
})();
var statearr_38962_39027 = state_38900__$1;
(statearr_38962_39027[(2)] = null);

(statearr_38962_39027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (14))){
var state_38900__$1 = state_38900;
var statearr_38963_39028 = state_38900__$1;
(statearr_38963_39028[(2)] = null);

(statearr_38963_39028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (45))){
var inst_38890 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38964_39029 = state_38900__$1;
(statearr_38964_39029[(2)] = inst_38890);

(statearr_38964_39029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (26))){
var inst_38832 = (state_38900[(29)]);
var inst_38886 = (state_38900[(2)]);
var inst_38887 = cljs.core.seq.call(null,inst_38832);
var state_38900__$1 = (function (){var statearr_38965 = state_38900;
(statearr_38965[(31)] = inst_38886);

return statearr_38965;
})();
if(inst_38887){
var statearr_38966_39030 = state_38900__$1;
(statearr_38966_39030[(1)] = (42));

} else {
var statearr_38967_39031 = state_38900__$1;
(statearr_38967_39031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (16))){
var inst_38801 = (state_38900[(7)]);
var inst_38803 = cljs.core.chunked_seq_QMARK_.call(null,inst_38801);
var state_38900__$1 = state_38900;
if(inst_38803){
var statearr_38968_39032 = state_38900__$1;
(statearr_38968_39032[(1)] = (19));

} else {
var statearr_38969_39033 = state_38900__$1;
(statearr_38969_39033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (38))){
var inst_38879 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38970_39034 = state_38900__$1;
(statearr_38970_39034[(2)] = inst_38879);

(statearr_38970_39034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (30))){
var state_38900__$1 = state_38900;
var statearr_38971_39035 = state_38900__$1;
(statearr_38971_39035[(2)] = null);

(statearr_38971_39035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (10))){
var inst_38784 = (state_38900[(14)]);
var inst_38782 = (state_38900[(16)]);
var inst_38790 = cljs.core._nth.call(null,inst_38782,inst_38784);
var inst_38791 = cljs.core.nth.call(null,inst_38790,(0),null);
var inst_38792 = cljs.core.nth.call(null,inst_38790,(1),null);
var state_38900__$1 = (function (){var statearr_38972 = state_38900;
(statearr_38972[(26)] = inst_38791);

return statearr_38972;
})();
if(cljs.core.truth_(inst_38792)){
var statearr_38973_39036 = state_38900__$1;
(statearr_38973_39036[(1)] = (13));

} else {
var statearr_38974_39037 = state_38900__$1;
(statearr_38974_39037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (18))){
var inst_38825 = (state_38900[(2)]);
var state_38900__$1 = state_38900;
var statearr_38975_39038 = state_38900__$1;
(statearr_38975_39038[(2)] = inst_38825);

(statearr_38975_39038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (42))){
var state_38900__$1 = state_38900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38900__$1,(45),dchan);
} else {
if((state_val_38901 === (37))){
var inst_38868 = (state_38900[(23)]);
var inst_38772 = (state_38900[(9)]);
var inst_38859 = (state_38900[(25)]);
var inst_38868__$1 = cljs.core.first.call(null,inst_38859);
var inst_38869 = cljs.core.async.put_BANG_.call(null,inst_38868__$1,inst_38772,done);
var state_38900__$1 = (function (){var statearr_38976 = state_38900;
(statearr_38976[(23)] = inst_38868__$1);

return statearr_38976;
})();
if(cljs.core.truth_(inst_38869)){
var statearr_38977_39039 = state_38900__$1;
(statearr_38977_39039[(1)] = (39));

} else {
var statearr_38978_39040 = state_38900__$1;
(statearr_38978_39040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38901 === (8))){
var inst_38784 = (state_38900[(14)]);
var inst_38783 = (state_38900[(15)]);
var inst_38786 = (inst_38784 < inst_38783);
var inst_38787 = inst_38786;
var state_38900__$1 = state_38900;
if(cljs.core.truth_(inst_38787)){
var statearr_38979_39041 = state_38900__$1;
(statearr_38979_39041[(1)] = (10));

} else {
var statearr_38980_39042 = state_38900__$1;
(statearr_38980_39042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___38988,cs,m,dchan,dctr,done))
;
return ((function (switch__37569__auto__,c__37681__auto___38988,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37570__auto__ = null;
var cljs$core$async$mult_$_state_machine__37570__auto____0 = (function (){
var statearr_38984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38984[(0)] = cljs$core$async$mult_$_state_machine__37570__auto__);

(statearr_38984[(1)] = (1));

return statearr_38984;
});
var cljs$core$async$mult_$_state_machine__37570__auto____1 = (function (state_38900){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_38900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e38985){if((e38985 instanceof Object)){
var ex__37573__auto__ = e38985;
var statearr_38986_39043 = state_38900;
(statearr_38986_39043[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39044 = state_38900;
state_38900 = G__39044;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37570__auto__ = function(state_38900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37570__auto____1.call(this,state_38900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37570__auto____0;
cljs$core$async$mult_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37570__auto____1;
return cljs$core$async$mult_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___38988,cs,m,dchan,dctr,done))
})();
var state__37683__auto__ = (function (){var statearr_38987 = f__37682__auto__.call(null);
(statearr_38987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___38988);

return statearr_38987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___38988,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args39045 = [];
var len__36572__auto___39048 = arguments.length;
var i__36573__auto___39049 = (0);
while(true){
if((i__36573__auto___39049 < len__36572__auto___39048)){
args39045.push((arguments[i__36573__auto___39049]));

var G__39050 = (i__36573__auto___39049 + (1));
i__36573__auto___39049 = G__39050;
continue;
} else {
}
break;
}

var G__39047 = args39045.length;
switch (G__39047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39045.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,ch);
} else {
var m__36170__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,ch);
} else {
var m__36170__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m);
} else {
var m__36170__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,state_map);
} else {
var m__36170__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36169__auto__ = (((m == null))?null:m);
var m__36170__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,m,mode);
} else {
var m__36170__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36579__auto__ = [];
var len__36572__auto___39062 = arguments.length;
var i__36573__auto___39063 = (0);
while(true){
if((i__36573__auto___39063 < len__36572__auto___39062)){
args__36579__auto__.push((arguments[i__36573__auto___39063]));

var G__39064 = (i__36573__auto___39063 + (1));
i__36573__auto___39063 = G__39064;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((3) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36580__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39056){
var map__39057 = p__39056;
var map__39057__$1 = ((((!((map__39057 == null)))?((((map__39057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39057):map__39057);
var opts = map__39057__$1;
var statearr_39059_39065 = state;
(statearr_39059_39065[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__39057,map__39057__$1,opts){
return (function (val){
var statearr_39060_39066 = state;
(statearr_39060_39066[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39057,map__39057__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_39061_39067 = state;
(statearr_39061_39067[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39052){
var G__39053 = cljs.core.first.call(null,seq39052);
var seq39052__$1 = cljs.core.next.call(null,seq39052);
var G__39054 = cljs.core.first.call(null,seq39052__$1);
var seq39052__$2 = cljs.core.next.call(null,seq39052__$1);
var G__39055 = cljs.core.first.call(null,seq39052__$2);
var seq39052__$3 = cljs.core.next.call(null,seq39052__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39053,G__39054,G__39055,seq39052__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39231 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39232){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39232 = meta39232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39233,meta39232__$1){
var self__ = this;
var _39233__$1 = this;
return (new cljs.core.async.t_cljs$core$async39231(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39232__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39233){
var self__ = this;
var _39233__$1 = this;
return self__.meta39232;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39232","meta39232",1779026202,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39231";

cljs.core.async.t_cljs$core$async39231.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39231");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39231 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39232){
return (new cljs.core.async.t_cljs$core$async39231(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39232));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39231(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37681__auto___39394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39331){
var state_val_39332 = (state_39331[(1)]);
if((state_val_39332 === (7))){
var inst_39249 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39333_39395 = state_39331__$1;
(statearr_39333_39395[(2)] = inst_39249);

(statearr_39333_39395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (20))){
var inst_39261 = (state_39331[(7)]);
var state_39331__$1 = state_39331;
var statearr_39334_39396 = state_39331__$1;
(statearr_39334_39396[(2)] = inst_39261);

(statearr_39334_39396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (27))){
var state_39331__$1 = state_39331;
var statearr_39335_39397 = state_39331__$1;
(statearr_39335_39397[(2)] = null);

(statearr_39335_39397[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (1))){
var inst_39237 = (state_39331[(8)]);
var inst_39237__$1 = calc_state.call(null);
var inst_39239 = (inst_39237__$1 == null);
var inst_39240 = cljs.core.not.call(null,inst_39239);
var state_39331__$1 = (function (){var statearr_39336 = state_39331;
(statearr_39336[(8)] = inst_39237__$1);

return statearr_39336;
})();
if(inst_39240){
var statearr_39337_39398 = state_39331__$1;
(statearr_39337_39398[(1)] = (2));

} else {
var statearr_39338_39399 = state_39331__$1;
(statearr_39338_39399[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (24))){
var inst_39305 = (state_39331[(9)]);
var inst_39291 = (state_39331[(10)]);
var inst_39284 = (state_39331[(11)]);
var inst_39305__$1 = inst_39284.call(null,inst_39291);
var state_39331__$1 = (function (){var statearr_39339 = state_39331;
(statearr_39339[(9)] = inst_39305__$1);

return statearr_39339;
})();
if(cljs.core.truth_(inst_39305__$1)){
var statearr_39340_39400 = state_39331__$1;
(statearr_39340_39400[(1)] = (29));

} else {
var statearr_39341_39401 = state_39331__$1;
(statearr_39341_39401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (4))){
var inst_39252 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39252)){
var statearr_39342_39402 = state_39331__$1;
(statearr_39342_39402[(1)] = (8));

} else {
var statearr_39343_39403 = state_39331__$1;
(statearr_39343_39403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (15))){
var inst_39278 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39278)){
var statearr_39344_39404 = state_39331__$1;
(statearr_39344_39404[(1)] = (19));

} else {
var statearr_39345_39405 = state_39331__$1;
(statearr_39345_39405[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (21))){
var inst_39283 = (state_39331[(12)]);
var inst_39283__$1 = (state_39331[(2)]);
var inst_39284 = cljs.core.get.call(null,inst_39283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39285 = cljs.core.get.call(null,inst_39283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39286 = cljs.core.get.call(null,inst_39283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39331__$1 = (function (){var statearr_39346 = state_39331;
(statearr_39346[(13)] = inst_39285);

(statearr_39346[(12)] = inst_39283__$1);

(statearr_39346[(11)] = inst_39284);

return statearr_39346;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39331__$1,(22),inst_39286);
} else {
if((state_val_39332 === (31))){
var inst_39313 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39313)){
var statearr_39347_39406 = state_39331__$1;
(statearr_39347_39406[(1)] = (32));

} else {
var statearr_39348_39407 = state_39331__$1;
(statearr_39348_39407[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (32))){
var inst_39290 = (state_39331[(14)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39331__$1,(35),out,inst_39290);
} else {
if((state_val_39332 === (33))){
var inst_39283 = (state_39331[(12)]);
var inst_39261 = inst_39283;
var state_39331__$1 = (function (){var statearr_39349 = state_39331;
(statearr_39349[(7)] = inst_39261);

return statearr_39349;
})();
var statearr_39350_39408 = state_39331__$1;
(statearr_39350_39408[(2)] = null);

(statearr_39350_39408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (13))){
var inst_39261 = (state_39331[(7)]);
var inst_39268 = inst_39261.cljs$lang$protocol_mask$partition0$;
var inst_39269 = (inst_39268 & (64));
var inst_39270 = inst_39261.cljs$core$ISeq$;
var inst_39271 = (inst_39269) || (inst_39270);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39271)){
var statearr_39351_39409 = state_39331__$1;
(statearr_39351_39409[(1)] = (16));

} else {
var statearr_39352_39410 = state_39331__$1;
(statearr_39352_39410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (22))){
var inst_39291 = (state_39331[(10)]);
var inst_39290 = (state_39331[(14)]);
var inst_39289 = (state_39331[(2)]);
var inst_39290__$1 = cljs.core.nth.call(null,inst_39289,(0),null);
var inst_39291__$1 = cljs.core.nth.call(null,inst_39289,(1),null);
var inst_39292 = (inst_39290__$1 == null);
var inst_39293 = cljs.core._EQ_.call(null,inst_39291__$1,change);
var inst_39294 = (inst_39292) || (inst_39293);
var state_39331__$1 = (function (){var statearr_39353 = state_39331;
(statearr_39353[(10)] = inst_39291__$1);

(statearr_39353[(14)] = inst_39290__$1);

return statearr_39353;
})();
if(cljs.core.truth_(inst_39294)){
var statearr_39354_39411 = state_39331__$1;
(statearr_39354_39411[(1)] = (23));

} else {
var statearr_39355_39412 = state_39331__$1;
(statearr_39355_39412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (36))){
var inst_39283 = (state_39331[(12)]);
var inst_39261 = inst_39283;
var state_39331__$1 = (function (){var statearr_39356 = state_39331;
(statearr_39356[(7)] = inst_39261);

return statearr_39356;
})();
var statearr_39357_39413 = state_39331__$1;
(statearr_39357_39413[(2)] = null);

(statearr_39357_39413[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (29))){
var inst_39305 = (state_39331[(9)]);
var state_39331__$1 = state_39331;
var statearr_39358_39414 = state_39331__$1;
(statearr_39358_39414[(2)] = inst_39305);

(statearr_39358_39414[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (6))){
var state_39331__$1 = state_39331;
var statearr_39359_39415 = state_39331__$1;
(statearr_39359_39415[(2)] = false);

(statearr_39359_39415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (28))){
var inst_39301 = (state_39331[(2)]);
var inst_39302 = calc_state.call(null);
var inst_39261 = inst_39302;
var state_39331__$1 = (function (){var statearr_39360 = state_39331;
(statearr_39360[(15)] = inst_39301);

(statearr_39360[(7)] = inst_39261);

return statearr_39360;
})();
var statearr_39361_39416 = state_39331__$1;
(statearr_39361_39416[(2)] = null);

(statearr_39361_39416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (25))){
var inst_39327 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39362_39417 = state_39331__$1;
(statearr_39362_39417[(2)] = inst_39327);

(statearr_39362_39417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (34))){
var inst_39325 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39363_39418 = state_39331__$1;
(statearr_39363_39418[(2)] = inst_39325);

(statearr_39363_39418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (17))){
var state_39331__$1 = state_39331;
var statearr_39364_39419 = state_39331__$1;
(statearr_39364_39419[(2)] = false);

(statearr_39364_39419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (3))){
var state_39331__$1 = state_39331;
var statearr_39365_39420 = state_39331__$1;
(statearr_39365_39420[(2)] = false);

(statearr_39365_39420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (12))){
var inst_39329 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39331__$1,inst_39329);
} else {
if((state_val_39332 === (2))){
var inst_39237 = (state_39331[(8)]);
var inst_39242 = inst_39237.cljs$lang$protocol_mask$partition0$;
var inst_39243 = (inst_39242 & (64));
var inst_39244 = inst_39237.cljs$core$ISeq$;
var inst_39245 = (inst_39243) || (inst_39244);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39245)){
var statearr_39366_39421 = state_39331__$1;
(statearr_39366_39421[(1)] = (5));

} else {
var statearr_39367_39422 = state_39331__$1;
(statearr_39367_39422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (23))){
var inst_39290 = (state_39331[(14)]);
var inst_39296 = (inst_39290 == null);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39296)){
var statearr_39368_39423 = state_39331__$1;
(statearr_39368_39423[(1)] = (26));

} else {
var statearr_39369_39424 = state_39331__$1;
(statearr_39369_39424[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (35))){
var inst_39316 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
if(cljs.core.truth_(inst_39316)){
var statearr_39370_39425 = state_39331__$1;
(statearr_39370_39425[(1)] = (36));

} else {
var statearr_39371_39426 = state_39331__$1;
(statearr_39371_39426[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (19))){
var inst_39261 = (state_39331[(7)]);
var inst_39280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39261);
var state_39331__$1 = state_39331;
var statearr_39372_39427 = state_39331__$1;
(statearr_39372_39427[(2)] = inst_39280);

(statearr_39372_39427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (11))){
var inst_39261 = (state_39331[(7)]);
var inst_39265 = (inst_39261 == null);
var inst_39266 = cljs.core.not.call(null,inst_39265);
var state_39331__$1 = state_39331;
if(inst_39266){
var statearr_39373_39428 = state_39331__$1;
(statearr_39373_39428[(1)] = (13));

} else {
var statearr_39374_39429 = state_39331__$1;
(statearr_39374_39429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (9))){
var inst_39237 = (state_39331[(8)]);
var state_39331__$1 = state_39331;
var statearr_39375_39430 = state_39331__$1;
(statearr_39375_39430[(2)] = inst_39237);

(statearr_39375_39430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (5))){
var state_39331__$1 = state_39331;
var statearr_39376_39431 = state_39331__$1;
(statearr_39376_39431[(2)] = true);

(statearr_39376_39431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (14))){
var state_39331__$1 = state_39331;
var statearr_39377_39432 = state_39331__$1;
(statearr_39377_39432[(2)] = false);

(statearr_39377_39432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (26))){
var inst_39291 = (state_39331[(10)]);
var inst_39298 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39291);
var state_39331__$1 = state_39331;
var statearr_39378_39433 = state_39331__$1;
(statearr_39378_39433[(2)] = inst_39298);

(statearr_39378_39433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (16))){
var state_39331__$1 = state_39331;
var statearr_39379_39434 = state_39331__$1;
(statearr_39379_39434[(2)] = true);

(statearr_39379_39434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (38))){
var inst_39321 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39380_39435 = state_39331__$1;
(statearr_39380_39435[(2)] = inst_39321);

(statearr_39380_39435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (30))){
var inst_39285 = (state_39331[(13)]);
var inst_39291 = (state_39331[(10)]);
var inst_39284 = (state_39331[(11)]);
var inst_39308 = cljs.core.empty_QMARK_.call(null,inst_39284);
var inst_39309 = inst_39285.call(null,inst_39291);
var inst_39310 = cljs.core.not.call(null,inst_39309);
var inst_39311 = (inst_39308) && (inst_39310);
var state_39331__$1 = state_39331;
var statearr_39381_39436 = state_39331__$1;
(statearr_39381_39436[(2)] = inst_39311);

(statearr_39381_39436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (10))){
var inst_39237 = (state_39331[(8)]);
var inst_39257 = (state_39331[(2)]);
var inst_39258 = cljs.core.get.call(null,inst_39257,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39259 = cljs.core.get.call(null,inst_39257,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39260 = cljs.core.get.call(null,inst_39257,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39261 = inst_39237;
var state_39331__$1 = (function (){var statearr_39382 = state_39331;
(statearr_39382[(16)] = inst_39260);

(statearr_39382[(17)] = inst_39259);

(statearr_39382[(18)] = inst_39258);

(statearr_39382[(7)] = inst_39261);

return statearr_39382;
})();
var statearr_39383_39437 = state_39331__$1;
(statearr_39383_39437[(2)] = null);

(statearr_39383_39437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (18))){
var inst_39275 = (state_39331[(2)]);
var state_39331__$1 = state_39331;
var statearr_39384_39438 = state_39331__$1;
(statearr_39384_39438[(2)] = inst_39275);

(statearr_39384_39438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (37))){
var state_39331__$1 = state_39331;
var statearr_39385_39439 = state_39331__$1;
(statearr_39385_39439[(2)] = null);

(statearr_39385_39439[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39332 === (8))){
var inst_39237 = (state_39331[(8)]);
var inst_39254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39237);
var state_39331__$1 = state_39331;
var statearr_39386_39440 = state_39331__$1;
(statearr_39386_39440[(2)] = inst_39254);

(statearr_39386_39440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37569__auto__,c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37570__auto__ = null;
var cljs$core$async$mix_$_state_machine__37570__auto____0 = (function (){
var statearr_39390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39390[(0)] = cljs$core$async$mix_$_state_machine__37570__auto__);

(statearr_39390[(1)] = (1));

return statearr_39390;
});
var cljs$core$async$mix_$_state_machine__37570__auto____1 = (function (state_39331){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39391){if((e39391 instanceof Object)){
var ex__37573__auto__ = e39391;
var statearr_39392_39441 = state_39331;
(statearr_39392_39441[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_39331;
state_39331 = G__39442;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37570__auto__ = function(state_39331){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37570__auto____1.call(this,state_39331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37570__auto____0;
cljs$core$async$mix_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37570__auto____1;
return cljs$core$async$mix_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37683__auto__ = (function (){var statearr_39393 = f__37682__auto__.call(null);
(statearr_39393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39394);

return statearr_39393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39394,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36169__auto__ = (((p == null))?null:p);
var m__36170__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36170__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36169__auto__ = (((p == null))?null:p);
var m__36170__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,p,v,ch);
} else {
var m__36170__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39443 = [];
var len__36572__auto___39446 = arguments.length;
var i__36573__auto___39447 = (0);
while(true){
if((i__36573__auto___39447 < len__36572__auto___39446)){
args39443.push((arguments[i__36573__auto___39447]));

var G__39448 = (i__36573__auto___39447 + (1));
i__36573__auto___39447 = G__39448;
continue;
} else {
}
break;
}

var G__39445 = args39443.length;
switch (G__39445) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39443.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36169__auto__ = (((p == null))?null:p);
var m__36170__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,p);
} else {
var m__36170__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36169__auto__ = (((p == null))?null:p);
var m__36170__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36169__auto__)]);
if(!((m__36170__auto__ == null))){
return m__36170__auto__.call(null,p,v);
} else {
var m__36170__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36170__auto____$1 == null))){
return m__36170__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39451 = [];
var len__36572__auto___39576 = arguments.length;
var i__36573__auto___39577 = (0);
while(true){
if((i__36573__auto___39577 < len__36572__auto___39576)){
args39451.push((arguments[i__36573__auto___39577]));

var G__39578 = (i__36573__auto___39577 + (1));
i__36573__auto___39577 = G__39578;
continue;
} else {
}
break;
}

var G__39453 = args39451.length;
switch (G__39453) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39451.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35514__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35514__auto__,mults){
return (function (p1__39450_SHARP_){
if(cljs.core.truth_(p1__39450_SHARP_.call(null,topic))){
return p1__39450_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39450_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35514__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39454 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39455){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39455 = meta39455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39456,meta39455__$1){
var self__ = this;
var _39456__$1 = this;
return (new cljs.core.async.t_cljs$core$async39454(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39455__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39456){
var self__ = this;
var _39456__$1 = this;
return self__.meta39455;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39455","meta39455",498082912,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39454";

cljs.core.async.t_cljs$core$async39454.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39454");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39454 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39455){
return (new cljs.core.async.t_cljs$core$async39454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39455));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39454(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37681__auto___39580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39580,mults,ensure_mult,p){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39580,mults,ensure_mult,p){
return (function (state_39528){
var state_val_39529 = (state_39528[(1)]);
if((state_val_39529 === (7))){
var inst_39524 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39530_39581 = state_39528__$1;
(statearr_39530_39581[(2)] = inst_39524);

(statearr_39530_39581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (20))){
var state_39528__$1 = state_39528;
var statearr_39531_39582 = state_39528__$1;
(statearr_39531_39582[(2)] = null);

(statearr_39531_39582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (1))){
var state_39528__$1 = state_39528;
var statearr_39532_39583 = state_39528__$1;
(statearr_39532_39583[(2)] = null);

(statearr_39532_39583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (24))){
var inst_39507 = (state_39528[(7)]);
var inst_39516 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39507);
var state_39528__$1 = state_39528;
var statearr_39533_39584 = state_39528__$1;
(statearr_39533_39584[(2)] = inst_39516);

(statearr_39533_39584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (4))){
var inst_39459 = (state_39528[(8)]);
var inst_39459__$1 = (state_39528[(2)]);
var inst_39460 = (inst_39459__$1 == null);
var state_39528__$1 = (function (){var statearr_39534 = state_39528;
(statearr_39534[(8)] = inst_39459__$1);

return statearr_39534;
})();
if(cljs.core.truth_(inst_39460)){
var statearr_39535_39585 = state_39528__$1;
(statearr_39535_39585[(1)] = (5));

} else {
var statearr_39536_39586 = state_39528__$1;
(statearr_39536_39586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (15))){
var inst_39501 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39537_39587 = state_39528__$1;
(statearr_39537_39587[(2)] = inst_39501);

(statearr_39537_39587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (21))){
var inst_39521 = (state_39528[(2)]);
var state_39528__$1 = (function (){var statearr_39538 = state_39528;
(statearr_39538[(9)] = inst_39521);

return statearr_39538;
})();
var statearr_39539_39588 = state_39528__$1;
(statearr_39539_39588[(2)] = null);

(statearr_39539_39588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (13))){
var inst_39483 = (state_39528[(10)]);
var inst_39485 = cljs.core.chunked_seq_QMARK_.call(null,inst_39483);
var state_39528__$1 = state_39528;
if(inst_39485){
var statearr_39540_39589 = state_39528__$1;
(statearr_39540_39589[(1)] = (16));

} else {
var statearr_39541_39590 = state_39528__$1;
(statearr_39541_39590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (22))){
var inst_39513 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
if(cljs.core.truth_(inst_39513)){
var statearr_39542_39591 = state_39528__$1;
(statearr_39542_39591[(1)] = (23));

} else {
var statearr_39543_39592 = state_39528__$1;
(statearr_39543_39592[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (6))){
var inst_39459 = (state_39528[(8)]);
var inst_39509 = (state_39528[(11)]);
var inst_39507 = (state_39528[(7)]);
var inst_39507__$1 = topic_fn.call(null,inst_39459);
var inst_39508 = cljs.core.deref.call(null,mults);
var inst_39509__$1 = cljs.core.get.call(null,inst_39508,inst_39507__$1);
var state_39528__$1 = (function (){var statearr_39544 = state_39528;
(statearr_39544[(11)] = inst_39509__$1);

(statearr_39544[(7)] = inst_39507__$1);

return statearr_39544;
})();
if(cljs.core.truth_(inst_39509__$1)){
var statearr_39545_39593 = state_39528__$1;
(statearr_39545_39593[(1)] = (19));

} else {
var statearr_39546_39594 = state_39528__$1;
(statearr_39546_39594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (25))){
var inst_39518 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39547_39595 = state_39528__$1;
(statearr_39547_39595[(2)] = inst_39518);

(statearr_39547_39595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (17))){
var inst_39483 = (state_39528[(10)]);
var inst_39492 = cljs.core.first.call(null,inst_39483);
var inst_39493 = cljs.core.async.muxch_STAR_.call(null,inst_39492);
var inst_39494 = cljs.core.async.close_BANG_.call(null,inst_39493);
var inst_39495 = cljs.core.next.call(null,inst_39483);
var inst_39469 = inst_39495;
var inst_39470 = null;
var inst_39471 = (0);
var inst_39472 = (0);
var state_39528__$1 = (function (){var statearr_39548 = state_39528;
(statearr_39548[(12)] = inst_39471);

(statearr_39548[(13)] = inst_39494);

(statearr_39548[(14)] = inst_39469);

(statearr_39548[(15)] = inst_39470);

(statearr_39548[(16)] = inst_39472);

return statearr_39548;
})();
var statearr_39549_39596 = state_39528__$1;
(statearr_39549_39596[(2)] = null);

(statearr_39549_39596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (3))){
var inst_39526 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39528__$1,inst_39526);
} else {
if((state_val_39529 === (12))){
var inst_39503 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39550_39597 = state_39528__$1;
(statearr_39550_39597[(2)] = inst_39503);

(statearr_39550_39597[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (2))){
var state_39528__$1 = state_39528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39528__$1,(4),ch);
} else {
if((state_val_39529 === (23))){
var state_39528__$1 = state_39528;
var statearr_39551_39598 = state_39528__$1;
(statearr_39551_39598[(2)] = null);

(statearr_39551_39598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (19))){
var inst_39459 = (state_39528[(8)]);
var inst_39509 = (state_39528[(11)]);
var inst_39511 = cljs.core.async.muxch_STAR_.call(null,inst_39509);
var state_39528__$1 = state_39528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39528__$1,(22),inst_39511,inst_39459);
} else {
if((state_val_39529 === (11))){
var inst_39469 = (state_39528[(14)]);
var inst_39483 = (state_39528[(10)]);
var inst_39483__$1 = cljs.core.seq.call(null,inst_39469);
var state_39528__$1 = (function (){var statearr_39552 = state_39528;
(statearr_39552[(10)] = inst_39483__$1);

return statearr_39552;
})();
if(inst_39483__$1){
var statearr_39553_39599 = state_39528__$1;
(statearr_39553_39599[(1)] = (13));

} else {
var statearr_39554_39600 = state_39528__$1;
(statearr_39554_39600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (9))){
var inst_39505 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39555_39601 = state_39528__$1;
(statearr_39555_39601[(2)] = inst_39505);

(statearr_39555_39601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (5))){
var inst_39466 = cljs.core.deref.call(null,mults);
var inst_39467 = cljs.core.vals.call(null,inst_39466);
var inst_39468 = cljs.core.seq.call(null,inst_39467);
var inst_39469 = inst_39468;
var inst_39470 = null;
var inst_39471 = (0);
var inst_39472 = (0);
var state_39528__$1 = (function (){var statearr_39556 = state_39528;
(statearr_39556[(12)] = inst_39471);

(statearr_39556[(14)] = inst_39469);

(statearr_39556[(15)] = inst_39470);

(statearr_39556[(16)] = inst_39472);

return statearr_39556;
})();
var statearr_39557_39602 = state_39528__$1;
(statearr_39557_39602[(2)] = null);

(statearr_39557_39602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (14))){
var state_39528__$1 = state_39528;
var statearr_39561_39603 = state_39528__$1;
(statearr_39561_39603[(2)] = null);

(statearr_39561_39603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (16))){
var inst_39483 = (state_39528[(10)]);
var inst_39487 = cljs.core.chunk_first.call(null,inst_39483);
var inst_39488 = cljs.core.chunk_rest.call(null,inst_39483);
var inst_39489 = cljs.core.count.call(null,inst_39487);
var inst_39469 = inst_39488;
var inst_39470 = inst_39487;
var inst_39471 = inst_39489;
var inst_39472 = (0);
var state_39528__$1 = (function (){var statearr_39562 = state_39528;
(statearr_39562[(12)] = inst_39471);

(statearr_39562[(14)] = inst_39469);

(statearr_39562[(15)] = inst_39470);

(statearr_39562[(16)] = inst_39472);

return statearr_39562;
})();
var statearr_39563_39604 = state_39528__$1;
(statearr_39563_39604[(2)] = null);

(statearr_39563_39604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (10))){
var inst_39471 = (state_39528[(12)]);
var inst_39469 = (state_39528[(14)]);
var inst_39470 = (state_39528[(15)]);
var inst_39472 = (state_39528[(16)]);
var inst_39477 = cljs.core._nth.call(null,inst_39470,inst_39472);
var inst_39478 = cljs.core.async.muxch_STAR_.call(null,inst_39477);
var inst_39479 = cljs.core.async.close_BANG_.call(null,inst_39478);
var inst_39480 = (inst_39472 + (1));
var tmp39558 = inst_39471;
var tmp39559 = inst_39469;
var tmp39560 = inst_39470;
var inst_39469__$1 = tmp39559;
var inst_39470__$1 = tmp39560;
var inst_39471__$1 = tmp39558;
var inst_39472__$1 = inst_39480;
var state_39528__$1 = (function (){var statearr_39564 = state_39528;
(statearr_39564[(17)] = inst_39479);

(statearr_39564[(12)] = inst_39471__$1);

(statearr_39564[(14)] = inst_39469__$1);

(statearr_39564[(15)] = inst_39470__$1);

(statearr_39564[(16)] = inst_39472__$1);

return statearr_39564;
})();
var statearr_39565_39605 = state_39528__$1;
(statearr_39565_39605[(2)] = null);

(statearr_39565_39605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (18))){
var inst_39498 = (state_39528[(2)]);
var state_39528__$1 = state_39528;
var statearr_39566_39606 = state_39528__$1;
(statearr_39566_39606[(2)] = inst_39498);

(statearr_39566_39606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39529 === (8))){
var inst_39471 = (state_39528[(12)]);
var inst_39472 = (state_39528[(16)]);
var inst_39474 = (inst_39472 < inst_39471);
var inst_39475 = inst_39474;
var state_39528__$1 = state_39528;
if(cljs.core.truth_(inst_39475)){
var statearr_39567_39607 = state_39528__$1;
(statearr_39567_39607[(1)] = (10));

} else {
var statearr_39568_39608 = state_39528__$1;
(statearr_39568_39608[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39580,mults,ensure_mult,p))
;
return ((function (switch__37569__auto__,c__37681__auto___39580,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_39572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39572[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_39572[(1)] = (1));

return statearr_39572;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_39528){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39573){if((e39573 instanceof Object)){
var ex__37573__auto__ = e39573;
var statearr_39574_39609 = state_39528;
(statearr_39574_39609[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39610 = state_39528;
state_39528 = G__39610;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_39528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_39528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39580,mults,ensure_mult,p))
})();
var state__37683__auto__ = (function (){var statearr_39575 = f__37682__auto__.call(null);
(statearr_39575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39580);

return statearr_39575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39580,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39611 = [];
var len__36572__auto___39614 = arguments.length;
var i__36573__auto___39615 = (0);
while(true){
if((i__36573__auto___39615 < len__36572__auto___39614)){
args39611.push((arguments[i__36573__auto___39615]));

var G__39616 = (i__36573__auto___39615 + (1));
i__36573__auto___39615 = G__39616;
continue;
} else {
}
break;
}

var G__39613 = args39611.length;
switch (G__39613) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39611.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39618 = [];
var len__36572__auto___39621 = arguments.length;
var i__36573__auto___39622 = (0);
while(true){
if((i__36573__auto___39622 < len__36572__auto___39621)){
args39618.push((arguments[i__36573__auto___39622]));

var G__39623 = (i__36573__auto___39622 + (1));
i__36573__auto___39622 = G__39623;
continue;
} else {
}
break;
}

var G__39620 = args39618.length;
switch (G__39620) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39618.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39625 = [];
var len__36572__auto___39696 = arguments.length;
var i__36573__auto___39697 = (0);
while(true){
if((i__36573__auto___39697 < len__36572__auto___39696)){
args39625.push((arguments[i__36573__auto___39697]));

var G__39698 = (i__36573__auto___39697 + (1));
i__36573__auto___39697 = G__39698;
continue;
} else {
}
break;
}

var G__39627 = args39625.length;
switch (G__39627) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39625.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37681__auto___39700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39666){
var state_val_39667 = (state_39666[(1)]);
if((state_val_39667 === (7))){
var state_39666__$1 = state_39666;
var statearr_39668_39701 = state_39666__$1;
(statearr_39668_39701[(2)] = null);

(statearr_39668_39701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (1))){
var state_39666__$1 = state_39666;
var statearr_39669_39702 = state_39666__$1;
(statearr_39669_39702[(2)] = null);

(statearr_39669_39702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (4))){
var inst_39630 = (state_39666[(7)]);
var inst_39632 = (inst_39630 < cnt);
var state_39666__$1 = state_39666;
if(cljs.core.truth_(inst_39632)){
var statearr_39670_39703 = state_39666__$1;
(statearr_39670_39703[(1)] = (6));

} else {
var statearr_39671_39704 = state_39666__$1;
(statearr_39671_39704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (15))){
var inst_39662 = (state_39666[(2)]);
var state_39666__$1 = state_39666;
var statearr_39672_39705 = state_39666__$1;
(statearr_39672_39705[(2)] = inst_39662);

(statearr_39672_39705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (13))){
var inst_39655 = cljs.core.async.close_BANG_.call(null,out);
var state_39666__$1 = state_39666;
var statearr_39673_39706 = state_39666__$1;
(statearr_39673_39706[(2)] = inst_39655);

(statearr_39673_39706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (6))){
var state_39666__$1 = state_39666;
var statearr_39674_39707 = state_39666__$1;
(statearr_39674_39707[(2)] = null);

(statearr_39674_39707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (3))){
var inst_39664 = (state_39666[(2)]);
var state_39666__$1 = state_39666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39666__$1,inst_39664);
} else {
if((state_val_39667 === (12))){
var inst_39652 = (state_39666[(8)]);
var inst_39652__$1 = (state_39666[(2)]);
var inst_39653 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39652__$1);
var state_39666__$1 = (function (){var statearr_39675 = state_39666;
(statearr_39675[(8)] = inst_39652__$1);

return statearr_39675;
})();
if(cljs.core.truth_(inst_39653)){
var statearr_39676_39708 = state_39666__$1;
(statearr_39676_39708[(1)] = (13));

} else {
var statearr_39677_39709 = state_39666__$1;
(statearr_39677_39709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (2))){
var inst_39629 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39630 = (0);
var state_39666__$1 = (function (){var statearr_39678 = state_39666;
(statearr_39678[(7)] = inst_39630);

(statearr_39678[(9)] = inst_39629);

return statearr_39678;
})();
var statearr_39679_39710 = state_39666__$1;
(statearr_39679_39710[(2)] = null);

(statearr_39679_39710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (11))){
var inst_39630 = (state_39666[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39666,(10),Object,null,(9));
var inst_39639 = chs__$1.call(null,inst_39630);
var inst_39640 = done.call(null,inst_39630);
var inst_39641 = cljs.core.async.take_BANG_.call(null,inst_39639,inst_39640);
var state_39666__$1 = state_39666;
var statearr_39680_39711 = state_39666__$1;
(statearr_39680_39711[(2)] = inst_39641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (9))){
var inst_39630 = (state_39666[(7)]);
var inst_39643 = (state_39666[(2)]);
var inst_39644 = (inst_39630 + (1));
var inst_39630__$1 = inst_39644;
var state_39666__$1 = (function (){var statearr_39681 = state_39666;
(statearr_39681[(10)] = inst_39643);

(statearr_39681[(7)] = inst_39630__$1);

return statearr_39681;
})();
var statearr_39682_39712 = state_39666__$1;
(statearr_39682_39712[(2)] = null);

(statearr_39682_39712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (5))){
var inst_39650 = (state_39666[(2)]);
var state_39666__$1 = (function (){var statearr_39683 = state_39666;
(statearr_39683[(11)] = inst_39650);

return statearr_39683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39666__$1,(12),dchan);
} else {
if((state_val_39667 === (14))){
var inst_39652 = (state_39666[(8)]);
var inst_39657 = cljs.core.apply.call(null,f,inst_39652);
var state_39666__$1 = state_39666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39666__$1,(16),out,inst_39657);
} else {
if((state_val_39667 === (16))){
var inst_39659 = (state_39666[(2)]);
var state_39666__$1 = (function (){var statearr_39684 = state_39666;
(statearr_39684[(12)] = inst_39659);

return statearr_39684;
})();
var statearr_39685_39713 = state_39666__$1;
(statearr_39685_39713[(2)] = null);

(statearr_39685_39713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (10))){
var inst_39634 = (state_39666[(2)]);
var inst_39635 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39666__$1 = (function (){var statearr_39686 = state_39666;
(statearr_39686[(13)] = inst_39634);

return statearr_39686;
})();
var statearr_39687_39714 = state_39666__$1;
(statearr_39687_39714[(2)] = inst_39635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39666__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39667 === (8))){
var inst_39648 = (state_39666[(2)]);
var state_39666__$1 = state_39666;
var statearr_39688_39715 = state_39666__$1;
(statearr_39688_39715[(2)] = inst_39648);

(statearr_39688_39715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37569__auto__,c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_39692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39692[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_39692[(1)] = (1));

return statearr_39692;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_39666){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39693){if((e39693 instanceof Object)){
var ex__37573__auto__ = e39693;
var statearr_39694_39716 = state_39666;
(statearr_39694_39716[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39717 = state_39666;
state_39666 = G__39717;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_39666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_39666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37683__auto__ = (function (){var statearr_39695 = f__37682__auto__.call(null);
(statearr_39695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39700);

return statearr_39695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39700,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39719 = [];
var len__36572__auto___39775 = arguments.length;
var i__36573__auto___39776 = (0);
while(true){
if((i__36573__auto___39776 < len__36572__auto___39775)){
args39719.push((arguments[i__36573__auto___39776]));

var G__39777 = (i__36573__auto___39776 + (1));
i__36573__auto___39776 = G__39777;
continue;
} else {
}
break;
}

var G__39721 = args39719.length;
switch (G__39721) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39719.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___39779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39779,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39779,out){
return (function (state_39751){
var state_val_39752 = (state_39751[(1)]);
if((state_val_39752 === (7))){
var inst_39730 = (state_39751[(7)]);
var inst_39731 = (state_39751[(8)]);
var inst_39730__$1 = (state_39751[(2)]);
var inst_39731__$1 = cljs.core.nth.call(null,inst_39730__$1,(0),null);
var inst_39732 = cljs.core.nth.call(null,inst_39730__$1,(1),null);
var inst_39733 = (inst_39731__$1 == null);
var state_39751__$1 = (function (){var statearr_39753 = state_39751;
(statearr_39753[(7)] = inst_39730__$1);

(statearr_39753[(9)] = inst_39732);

(statearr_39753[(8)] = inst_39731__$1);

return statearr_39753;
})();
if(cljs.core.truth_(inst_39733)){
var statearr_39754_39780 = state_39751__$1;
(statearr_39754_39780[(1)] = (8));

} else {
var statearr_39755_39781 = state_39751__$1;
(statearr_39755_39781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (1))){
var inst_39722 = cljs.core.vec.call(null,chs);
var inst_39723 = inst_39722;
var state_39751__$1 = (function (){var statearr_39756 = state_39751;
(statearr_39756[(10)] = inst_39723);

return statearr_39756;
})();
var statearr_39757_39782 = state_39751__$1;
(statearr_39757_39782[(2)] = null);

(statearr_39757_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (4))){
var inst_39723 = (state_39751[(10)]);
var state_39751__$1 = state_39751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39751__$1,(7),inst_39723);
} else {
if((state_val_39752 === (6))){
var inst_39747 = (state_39751[(2)]);
var state_39751__$1 = state_39751;
var statearr_39758_39783 = state_39751__$1;
(statearr_39758_39783[(2)] = inst_39747);

(statearr_39758_39783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (3))){
var inst_39749 = (state_39751[(2)]);
var state_39751__$1 = state_39751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39751__$1,inst_39749);
} else {
if((state_val_39752 === (2))){
var inst_39723 = (state_39751[(10)]);
var inst_39725 = cljs.core.count.call(null,inst_39723);
var inst_39726 = (inst_39725 > (0));
var state_39751__$1 = state_39751;
if(cljs.core.truth_(inst_39726)){
var statearr_39760_39784 = state_39751__$1;
(statearr_39760_39784[(1)] = (4));

} else {
var statearr_39761_39785 = state_39751__$1;
(statearr_39761_39785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (11))){
var inst_39723 = (state_39751[(10)]);
var inst_39740 = (state_39751[(2)]);
var tmp39759 = inst_39723;
var inst_39723__$1 = tmp39759;
var state_39751__$1 = (function (){var statearr_39762 = state_39751;
(statearr_39762[(11)] = inst_39740);

(statearr_39762[(10)] = inst_39723__$1);

return statearr_39762;
})();
var statearr_39763_39786 = state_39751__$1;
(statearr_39763_39786[(2)] = null);

(statearr_39763_39786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (9))){
var inst_39731 = (state_39751[(8)]);
var state_39751__$1 = state_39751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39751__$1,(11),out,inst_39731);
} else {
if((state_val_39752 === (5))){
var inst_39745 = cljs.core.async.close_BANG_.call(null,out);
var state_39751__$1 = state_39751;
var statearr_39764_39787 = state_39751__$1;
(statearr_39764_39787[(2)] = inst_39745);

(statearr_39764_39787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (10))){
var inst_39743 = (state_39751[(2)]);
var state_39751__$1 = state_39751;
var statearr_39765_39788 = state_39751__$1;
(statearr_39765_39788[(2)] = inst_39743);

(statearr_39765_39788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39752 === (8))){
var inst_39730 = (state_39751[(7)]);
var inst_39732 = (state_39751[(9)]);
var inst_39731 = (state_39751[(8)]);
var inst_39723 = (state_39751[(10)]);
var inst_39735 = (function (){var cs = inst_39723;
var vec__39728 = inst_39730;
var v = inst_39731;
var c = inst_39732;
return ((function (cs,vec__39728,v,c,inst_39730,inst_39732,inst_39731,inst_39723,state_val_39752,c__37681__auto___39779,out){
return (function (p1__39718_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39718_SHARP_);
});
;})(cs,vec__39728,v,c,inst_39730,inst_39732,inst_39731,inst_39723,state_val_39752,c__37681__auto___39779,out))
})();
var inst_39736 = cljs.core.filterv.call(null,inst_39735,inst_39723);
var inst_39723__$1 = inst_39736;
var state_39751__$1 = (function (){var statearr_39766 = state_39751;
(statearr_39766[(10)] = inst_39723__$1);

return statearr_39766;
})();
var statearr_39767_39789 = state_39751__$1;
(statearr_39767_39789[(2)] = null);

(statearr_39767_39789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39779,out))
;
return ((function (switch__37569__auto__,c__37681__auto___39779,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_39771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39771[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_39771[(1)] = (1));

return statearr_39771;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_39751){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39772){if((e39772 instanceof Object)){
var ex__37573__auto__ = e39772;
var statearr_39773_39790 = state_39751;
(statearr_39773_39790[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39791 = state_39751;
state_39751 = G__39791;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_39751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_39751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39779,out))
})();
var state__37683__auto__ = (function (){var statearr_39774 = f__37682__auto__.call(null);
(statearr_39774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39779);

return statearr_39774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39779,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39792 = [];
var len__36572__auto___39841 = arguments.length;
var i__36573__auto___39842 = (0);
while(true){
if((i__36573__auto___39842 < len__36572__auto___39841)){
args39792.push((arguments[i__36573__auto___39842]));

var G__39843 = (i__36573__auto___39842 + (1));
i__36573__auto___39842 = G__39843;
continue;
} else {
}
break;
}

var G__39794 = args39792.length;
switch (G__39794) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39792.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___39845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39845,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39845,out){
return (function (state_39818){
var state_val_39819 = (state_39818[(1)]);
if((state_val_39819 === (7))){
var inst_39800 = (state_39818[(7)]);
var inst_39800__$1 = (state_39818[(2)]);
var inst_39801 = (inst_39800__$1 == null);
var inst_39802 = cljs.core.not.call(null,inst_39801);
var state_39818__$1 = (function (){var statearr_39820 = state_39818;
(statearr_39820[(7)] = inst_39800__$1);

return statearr_39820;
})();
if(inst_39802){
var statearr_39821_39846 = state_39818__$1;
(statearr_39821_39846[(1)] = (8));

} else {
var statearr_39822_39847 = state_39818__$1;
(statearr_39822_39847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (1))){
var inst_39795 = (0);
var state_39818__$1 = (function (){var statearr_39823 = state_39818;
(statearr_39823[(8)] = inst_39795);

return statearr_39823;
})();
var statearr_39824_39848 = state_39818__$1;
(statearr_39824_39848[(2)] = null);

(statearr_39824_39848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (4))){
var state_39818__$1 = state_39818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39818__$1,(7),ch);
} else {
if((state_val_39819 === (6))){
var inst_39813 = (state_39818[(2)]);
var state_39818__$1 = state_39818;
var statearr_39825_39849 = state_39818__$1;
(statearr_39825_39849[(2)] = inst_39813);

(statearr_39825_39849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (3))){
var inst_39815 = (state_39818[(2)]);
var inst_39816 = cljs.core.async.close_BANG_.call(null,out);
var state_39818__$1 = (function (){var statearr_39826 = state_39818;
(statearr_39826[(9)] = inst_39815);

return statearr_39826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39818__$1,inst_39816);
} else {
if((state_val_39819 === (2))){
var inst_39795 = (state_39818[(8)]);
var inst_39797 = (inst_39795 < n);
var state_39818__$1 = state_39818;
if(cljs.core.truth_(inst_39797)){
var statearr_39827_39850 = state_39818__$1;
(statearr_39827_39850[(1)] = (4));

} else {
var statearr_39828_39851 = state_39818__$1;
(statearr_39828_39851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (11))){
var inst_39795 = (state_39818[(8)]);
var inst_39805 = (state_39818[(2)]);
var inst_39806 = (inst_39795 + (1));
var inst_39795__$1 = inst_39806;
var state_39818__$1 = (function (){var statearr_39829 = state_39818;
(statearr_39829[(8)] = inst_39795__$1);

(statearr_39829[(10)] = inst_39805);

return statearr_39829;
})();
var statearr_39830_39852 = state_39818__$1;
(statearr_39830_39852[(2)] = null);

(statearr_39830_39852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (9))){
var state_39818__$1 = state_39818;
var statearr_39831_39853 = state_39818__$1;
(statearr_39831_39853[(2)] = null);

(statearr_39831_39853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (5))){
var state_39818__$1 = state_39818;
var statearr_39832_39854 = state_39818__$1;
(statearr_39832_39854[(2)] = null);

(statearr_39832_39854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (10))){
var inst_39810 = (state_39818[(2)]);
var state_39818__$1 = state_39818;
var statearr_39833_39855 = state_39818__$1;
(statearr_39833_39855[(2)] = inst_39810);

(statearr_39833_39855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39819 === (8))){
var inst_39800 = (state_39818[(7)]);
var state_39818__$1 = state_39818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39818__$1,(11),out,inst_39800);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39845,out))
;
return ((function (switch__37569__auto__,c__37681__auto___39845,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_39837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39837[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_39837[(1)] = (1));

return statearr_39837;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_39818){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39838){if((e39838 instanceof Object)){
var ex__37573__auto__ = e39838;
var statearr_39839_39856 = state_39818;
(statearr_39839_39856[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39857 = state_39818;
state_39818 = G__39857;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_39818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_39818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39845,out))
})();
var state__37683__auto__ = (function (){var statearr_39840 = f__37682__auto__.call(null);
(statearr_39840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39845);

return statearr_39840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39845,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39865 = (function (map_LT_,f,ch,meta39866){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39866 = meta39866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39867,meta39866__$1){
var self__ = this;
var _39867__$1 = this;
return (new cljs.core.async.t_cljs$core$async39865(self__.map_LT_,self__.f,self__.ch,meta39866__$1));
});

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39867){
var self__ = this;
var _39867__$1 = this;
return self__.meta39866;
});

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39868 = (function (map_LT_,f,ch,meta39866,_,fn1,meta39869){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39866 = meta39866;
this._ = _;
this.fn1 = fn1;
this.meta39869 = meta39869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39870,meta39869__$1){
var self__ = this;
var _39870__$1 = this;
return (new cljs.core.async.t_cljs$core$async39868(self__.map_LT_,self__.f,self__.ch,self__.meta39866,self__._,self__.fn1,meta39869__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39870){
var self__ = this;
var _39870__$1 = this;
return self__.meta39869;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39858_SHARP_){
return f1.call(null,(((p1__39858_SHARP_ == null))?null:self__.f.call(null,p1__39858_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39866","meta39866",880715324,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39865","cljs.core.async/t_cljs$core$async39865",1228092227,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39869","meta39869",-37715987,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39868";

cljs.core.async.t_cljs$core$async39868.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39868");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39868 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39868(map_LT___$1,f__$1,ch__$1,meta39866__$1,___$2,fn1__$1,meta39869){
return (new cljs.core.async.t_cljs$core$async39868(map_LT___$1,f__$1,ch__$1,meta39866__$1,___$2,fn1__$1,meta39869));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39868(self__.map_LT_,self__.f,self__.ch,self__.meta39866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35502__auto__ = ret;
if(cljs.core.truth_(and__35502__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35502__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39866","meta39866",880715324,null)], null);
});

cljs.core.async.t_cljs$core$async39865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39865";

cljs.core.async.t_cljs$core$async39865.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39865");
});

cljs.core.async.__GT_t_cljs$core$async39865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39865(map_LT___$1,f__$1,ch__$1,meta39866){
return (new cljs.core.async.t_cljs$core$async39865(map_LT___$1,f__$1,ch__$1,meta39866));
});

}

return (new cljs.core.async.t_cljs$core$async39865(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39874 = (function (map_GT_,f,ch,meta39875){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39875 = meta39875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39876,meta39875__$1){
var self__ = this;
var _39876__$1 = this;
return (new cljs.core.async.t_cljs$core$async39874(self__.map_GT_,self__.f,self__.ch,meta39875__$1));
});

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39876){
var self__ = this;
var _39876__$1 = this;
return self__.meta39875;
});

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39875","meta39875",1942845709,null)], null);
});

cljs.core.async.t_cljs$core$async39874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39874";

cljs.core.async.t_cljs$core$async39874.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39874");
});

cljs.core.async.__GT_t_cljs$core$async39874 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39874(map_GT___$1,f__$1,ch__$1,meta39875){
return (new cljs.core.async.t_cljs$core$async39874(map_GT___$1,f__$1,ch__$1,meta39875));
});

}

return (new cljs.core.async.t_cljs$core$async39874(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39880 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39880 = (function (filter_GT_,p,ch,meta39881){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39881 = meta39881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39882,meta39881__$1){
var self__ = this;
var _39882__$1 = this;
return (new cljs.core.async.t_cljs$core$async39880(self__.filter_GT_,self__.p,self__.ch,meta39881__$1));
});

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39882){
var self__ = this;
var _39882__$1 = this;
return self__.meta39881;
});

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39881","meta39881",-1623544643,null)], null);
});

cljs.core.async.t_cljs$core$async39880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39880";

cljs.core.async.t_cljs$core$async39880.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async39880");
});

cljs.core.async.__GT_t_cljs$core$async39880 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39880(filter_GT___$1,p__$1,ch__$1,meta39881){
return (new cljs.core.async.t_cljs$core$async39880(filter_GT___$1,p__$1,ch__$1,meta39881));
});

}

return (new cljs.core.async.t_cljs$core$async39880(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39883 = [];
var len__36572__auto___39927 = arguments.length;
var i__36573__auto___39928 = (0);
while(true){
if((i__36573__auto___39928 < len__36572__auto___39927)){
args39883.push((arguments[i__36573__auto___39928]));

var G__39929 = (i__36573__auto___39928 + (1));
i__36573__auto___39928 = G__39929;
continue;
} else {
}
break;
}

var G__39885 = args39883.length;
switch (G__39885) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39883.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___39931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___39931,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___39931,out){
return (function (state_39906){
var state_val_39907 = (state_39906[(1)]);
if((state_val_39907 === (7))){
var inst_39902 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39908_39932 = state_39906__$1;
(statearr_39908_39932[(2)] = inst_39902);

(statearr_39908_39932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (1))){
var state_39906__$1 = state_39906;
var statearr_39909_39933 = state_39906__$1;
(statearr_39909_39933[(2)] = null);

(statearr_39909_39933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (4))){
var inst_39888 = (state_39906[(7)]);
var inst_39888__$1 = (state_39906[(2)]);
var inst_39889 = (inst_39888__$1 == null);
var state_39906__$1 = (function (){var statearr_39910 = state_39906;
(statearr_39910[(7)] = inst_39888__$1);

return statearr_39910;
})();
if(cljs.core.truth_(inst_39889)){
var statearr_39911_39934 = state_39906__$1;
(statearr_39911_39934[(1)] = (5));

} else {
var statearr_39912_39935 = state_39906__$1;
(statearr_39912_39935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (6))){
var inst_39888 = (state_39906[(7)]);
var inst_39893 = p.call(null,inst_39888);
var state_39906__$1 = state_39906;
if(cljs.core.truth_(inst_39893)){
var statearr_39913_39936 = state_39906__$1;
(statearr_39913_39936[(1)] = (8));

} else {
var statearr_39914_39937 = state_39906__$1;
(statearr_39914_39937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (3))){
var inst_39904 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39906__$1,inst_39904);
} else {
if((state_val_39907 === (2))){
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39906__$1,(4),ch);
} else {
if((state_val_39907 === (11))){
var inst_39896 = (state_39906[(2)]);
var state_39906__$1 = state_39906;
var statearr_39915_39938 = state_39906__$1;
(statearr_39915_39938[(2)] = inst_39896);

(statearr_39915_39938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (9))){
var state_39906__$1 = state_39906;
var statearr_39916_39939 = state_39906__$1;
(statearr_39916_39939[(2)] = null);

(statearr_39916_39939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (5))){
var inst_39891 = cljs.core.async.close_BANG_.call(null,out);
var state_39906__$1 = state_39906;
var statearr_39917_39940 = state_39906__$1;
(statearr_39917_39940[(2)] = inst_39891);

(statearr_39917_39940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (10))){
var inst_39899 = (state_39906[(2)]);
var state_39906__$1 = (function (){var statearr_39918 = state_39906;
(statearr_39918[(8)] = inst_39899);

return statearr_39918;
})();
var statearr_39919_39941 = state_39906__$1;
(statearr_39919_39941[(2)] = null);

(statearr_39919_39941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39907 === (8))){
var inst_39888 = (state_39906[(7)]);
var state_39906__$1 = state_39906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39906__$1,(11),out,inst_39888);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___39931,out))
;
return ((function (switch__37569__auto__,c__37681__auto___39931,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_39923 = [null,null,null,null,null,null,null,null,null];
(statearr_39923[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_39923[(1)] = (1));

return statearr_39923;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_39906){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_39906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e39924){if((e39924 instanceof Object)){
var ex__37573__auto__ = e39924;
var statearr_39925_39942 = state_39906;
(statearr_39925_39942[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39943 = state_39906;
state_39906 = G__39943;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_39906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_39906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___39931,out))
})();
var state__37683__auto__ = (function (){var statearr_39926 = f__37682__auto__.call(null);
(statearr_39926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___39931);

return statearr_39926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___39931,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39944 = [];
var len__36572__auto___39947 = arguments.length;
var i__36573__auto___39948 = (0);
while(true){
if((i__36573__auto___39948 < len__36572__auto___39947)){
args39944.push((arguments[i__36573__auto___39948]));

var G__39949 = (i__36573__auto___39948 + (1));
i__36573__auto___39948 = G__39949;
continue;
} else {
}
break;
}

var G__39946 = args39944.length;
switch (G__39946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39944.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_40116){
var state_val_40117 = (state_40116[(1)]);
if((state_val_40117 === (7))){
var inst_40112 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
var statearr_40118_40159 = state_40116__$1;
(statearr_40118_40159[(2)] = inst_40112);

(statearr_40118_40159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (20))){
var inst_40082 = (state_40116[(7)]);
var inst_40093 = (state_40116[(2)]);
var inst_40094 = cljs.core.next.call(null,inst_40082);
var inst_40068 = inst_40094;
var inst_40069 = null;
var inst_40070 = (0);
var inst_40071 = (0);
var state_40116__$1 = (function (){var statearr_40119 = state_40116;
(statearr_40119[(8)] = inst_40070);

(statearr_40119[(9)] = inst_40093);

(statearr_40119[(10)] = inst_40069);

(statearr_40119[(11)] = inst_40071);

(statearr_40119[(12)] = inst_40068);

return statearr_40119;
})();
var statearr_40120_40160 = state_40116__$1;
(statearr_40120_40160[(2)] = null);

(statearr_40120_40160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (1))){
var state_40116__$1 = state_40116;
var statearr_40121_40161 = state_40116__$1;
(statearr_40121_40161[(2)] = null);

(statearr_40121_40161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (4))){
var inst_40057 = (state_40116[(13)]);
var inst_40057__$1 = (state_40116[(2)]);
var inst_40058 = (inst_40057__$1 == null);
var state_40116__$1 = (function (){var statearr_40122 = state_40116;
(statearr_40122[(13)] = inst_40057__$1);

return statearr_40122;
})();
if(cljs.core.truth_(inst_40058)){
var statearr_40123_40162 = state_40116__$1;
(statearr_40123_40162[(1)] = (5));

} else {
var statearr_40124_40163 = state_40116__$1;
(statearr_40124_40163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (15))){
var state_40116__$1 = state_40116;
var statearr_40128_40164 = state_40116__$1;
(statearr_40128_40164[(2)] = null);

(statearr_40128_40164[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (21))){
var state_40116__$1 = state_40116;
var statearr_40129_40165 = state_40116__$1;
(statearr_40129_40165[(2)] = null);

(statearr_40129_40165[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (13))){
var inst_40070 = (state_40116[(8)]);
var inst_40069 = (state_40116[(10)]);
var inst_40071 = (state_40116[(11)]);
var inst_40068 = (state_40116[(12)]);
var inst_40078 = (state_40116[(2)]);
var inst_40079 = (inst_40071 + (1));
var tmp40125 = inst_40070;
var tmp40126 = inst_40069;
var tmp40127 = inst_40068;
var inst_40068__$1 = tmp40127;
var inst_40069__$1 = tmp40126;
var inst_40070__$1 = tmp40125;
var inst_40071__$1 = inst_40079;
var state_40116__$1 = (function (){var statearr_40130 = state_40116;
(statearr_40130[(14)] = inst_40078);

(statearr_40130[(8)] = inst_40070__$1);

(statearr_40130[(10)] = inst_40069__$1);

(statearr_40130[(11)] = inst_40071__$1);

(statearr_40130[(12)] = inst_40068__$1);

return statearr_40130;
})();
var statearr_40131_40166 = state_40116__$1;
(statearr_40131_40166[(2)] = null);

(statearr_40131_40166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (22))){
var state_40116__$1 = state_40116;
var statearr_40132_40167 = state_40116__$1;
(statearr_40132_40167[(2)] = null);

(statearr_40132_40167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (6))){
var inst_40057 = (state_40116[(13)]);
var inst_40066 = f.call(null,inst_40057);
var inst_40067 = cljs.core.seq.call(null,inst_40066);
var inst_40068 = inst_40067;
var inst_40069 = null;
var inst_40070 = (0);
var inst_40071 = (0);
var state_40116__$1 = (function (){var statearr_40133 = state_40116;
(statearr_40133[(8)] = inst_40070);

(statearr_40133[(10)] = inst_40069);

(statearr_40133[(11)] = inst_40071);

(statearr_40133[(12)] = inst_40068);

return statearr_40133;
})();
var statearr_40134_40168 = state_40116__$1;
(statearr_40134_40168[(2)] = null);

(statearr_40134_40168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (17))){
var inst_40082 = (state_40116[(7)]);
var inst_40086 = cljs.core.chunk_first.call(null,inst_40082);
var inst_40087 = cljs.core.chunk_rest.call(null,inst_40082);
var inst_40088 = cljs.core.count.call(null,inst_40086);
var inst_40068 = inst_40087;
var inst_40069 = inst_40086;
var inst_40070 = inst_40088;
var inst_40071 = (0);
var state_40116__$1 = (function (){var statearr_40135 = state_40116;
(statearr_40135[(8)] = inst_40070);

(statearr_40135[(10)] = inst_40069);

(statearr_40135[(11)] = inst_40071);

(statearr_40135[(12)] = inst_40068);

return statearr_40135;
})();
var statearr_40136_40169 = state_40116__$1;
(statearr_40136_40169[(2)] = null);

(statearr_40136_40169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (3))){
var inst_40114 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40116__$1,inst_40114);
} else {
if((state_val_40117 === (12))){
var inst_40102 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
var statearr_40137_40170 = state_40116__$1;
(statearr_40137_40170[(2)] = inst_40102);

(statearr_40137_40170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (2))){
var state_40116__$1 = state_40116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40116__$1,(4),in$);
} else {
if((state_val_40117 === (23))){
var inst_40110 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
var statearr_40138_40171 = state_40116__$1;
(statearr_40138_40171[(2)] = inst_40110);

(statearr_40138_40171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (19))){
var inst_40097 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
var statearr_40139_40172 = state_40116__$1;
(statearr_40139_40172[(2)] = inst_40097);

(statearr_40139_40172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (11))){
var inst_40082 = (state_40116[(7)]);
var inst_40068 = (state_40116[(12)]);
var inst_40082__$1 = cljs.core.seq.call(null,inst_40068);
var state_40116__$1 = (function (){var statearr_40140 = state_40116;
(statearr_40140[(7)] = inst_40082__$1);

return statearr_40140;
})();
if(inst_40082__$1){
var statearr_40141_40173 = state_40116__$1;
(statearr_40141_40173[(1)] = (14));

} else {
var statearr_40142_40174 = state_40116__$1;
(statearr_40142_40174[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (9))){
var inst_40104 = (state_40116[(2)]);
var inst_40105 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40116__$1 = (function (){var statearr_40143 = state_40116;
(statearr_40143[(15)] = inst_40104);

return statearr_40143;
})();
if(cljs.core.truth_(inst_40105)){
var statearr_40144_40175 = state_40116__$1;
(statearr_40144_40175[(1)] = (21));

} else {
var statearr_40145_40176 = state_40116__$1;
(statearr_40145_40176[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (5))){
var inst_40060 = cljs.core.async.close_BANG_.call(null,out);
var state_40116__$1 = state_40116;
var statearr_40146_40177 = state_40116__$1;
(statearr_40146_40177[(2)] = inst_40060);

(statearr_40146_40177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (14))){
var inst_40082 = (state_40116[(7)]);
var inst_40084 = cljs.core.chunked_seq_QMARK_.call(null,inst_40082);
var state_40116__$1 = state_40116;
if(inst_40084){
var statearr_40147_40178 = state_40116__$1;
(statearr_40147_40178[(1)] = (17));

} else {
var statearr_40148_40179 = state_40116__$1;
(statearr_40148_40179[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (16))){
var inst_40100 = (state_40116[(2)]);
var state_40116__$1 = state_40116;
var statearr_40149_40180 = state_40116__$1;
(statearr_40149_40180[(2)] = inst_40100);

(statearr_40149_40180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40117 === (10))){
var inst_40069 = (state_40116[(10)]);
var inst_40071 = (state_40116[(11)]);
var inst_40076 = cljs.core._nth.call(null,inst_40069,inst_40071);
var state_40116__$1 = state_40116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40116__$1,(13),out,inst_40076);
} else {
if((state_val_40117 === (18))){
var inst_40082 = (state_40116[(7)]);
var inst_40091 = cljs.core.first.call(null,inst_40082);
var state_40116__$1 = state_40116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40116__$1,(20),out,inst_40091);
} else {
if((state_val_40117 === (8))){
var inst_40070 = (state_40116[(8)]);
var inst_40071 = (state_40116[(11)]);
var inst_40073 = (inst_40071 < inst_40070);
var inst_40074 = inst_40073;
var state_40116__$1 = state_40116;
if(cljs.core.truth_(inst_40074)){
var statearr_40150_40181 = state_40116__$1;
(statearr_40150_40181[(1)] = (10));

} else {
var statearr_40151_40182 = state_40116__$1;
(statearr_40151_40182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_40155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__);

(statearr_40155[(1)] = (1));

return statearr_40155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1 = (function (state_40116){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40156){if((e40156 instanceof Object)){
var ex__37573__auto__ = e40156;
var statearr_40157_40183 = state_40116;
(statearr_40157_40183[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40184 = state_40116;
state_40116 = G__40184;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__ = function(state_40116){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1.call(this,state_40116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_40158 = f__37682__auto__.call(null);
(statearr_40158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_40158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40185 = [];
var len__36572__auto___40188 = arguments.length;
var i__36573__auto___40189 = (0);
while(true){
if((i__36573__auto___40189 < len__36572__auto___40188)){
args40185.push((arguments[i__36573__auto___40189]));

var G__40190 = (i__36573__auto___40189 + (1));
i__36573__auto___40189 = G__40190;
continue;
} else {
}
break;
}

var G__40187 = args40185.length;
switch (G__40187) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40185.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args40192 = [];
var len__36572__auto___40195 = arguments.length;
var i__36573__auto___40196 = (0);
while(true){
if((i__36573__auto___40196 < len__36572__auto___40195)){
args40192.push((arguments[i__36573__auto___40196]));

var G__40197 = (i__36573__auto___40196 + (1));
i__36573__auto___40196 = G__40197;
continue;
} else {
}
break;
}

var G__40194 = args40192.length;
switch (G__40194) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40192.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args40199 = [];
var len__36572__auto___40250 = arguments.length;
var i__36573__auto___40251 = (0);
while(true){
if((i__36573__auto___40251 < len__36572__auto___40250)){
args40199.push((arguments[i__36573__auto___40251]));

var G__40252 = (i__36573__auto___40251 + (1));
i__36573__auto___40251 = G__40252;
continue;
} else {
}
break;
}

var G__40201 = args40199.length;
switch (G__40201) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40199.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___40254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___40254,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___40254,out){
return (function (state_40225){
var state_val_40226 = (state_40225[(1)]);
if((state_val_40226 === (7))){
var inst_40220 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40227_40255 = state_40225__$1;
(statearr_40227_40255[(2)] = inst_40220);

(statearr_40227_40255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (1))){
var inst_40202 = null;
var state_40225__$1 = (function (){var statearr_40228 = state_40225;
(statearr_40228[(7)] = inst_40202);

return statearr_40228;
})();
var statearr_40229_40256 = state_40225__$1;
(statearr_40229_40256[(2)] = null);

(statearr_40229_40256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (4))){
var inst_40205 = (state_40225[(8)]);
var inst_40205__$1 = (state_40225[(2)]);
var inst_40206 = (inst_40205__$1 == null);
var inst_40207 = cljs.core.not.call(null,inst_40206);
var state_40225__$1 = (function (){var statearr_40230 = state_40225;
(statearr_40230[(8)] = inst_40205__$1);

return statearr_40230;
})();
if(inst_40207){
var statearr_40231_40257 = state_40225__$1;
(statearr_40231_40257[(1)] = (5));

} else {
var statearr_40232_40258 = state_40225__$1;
(statearr_40232_40258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (6))){
var state_40225__$1 = state_40225;
var statearr_40233_40259 = state_40225__$1;
(statearr_40233_40259[(2)] = null);

(statearr_40233_40259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (3))){
var inst_40222 = (state_40225[(2)]);
var inst_40223 = cljs.core.async.close_BANG_.call(null,out);
var state_40225__$1 = (function (){var statearr_40234 = state_40225;
(statearr_40234[(9)] = inst_40222);

return statearr_40234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40225__$1,inst_40223);
} else {
if((state_val_40226 === (2))){
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40225__$1,(4),ch);
} else {
if((state_val_40226 === (11))){
var inst_40205 = (state_40225[(8)]);
var inst_40214 = (state_40225[(2)]);
var inst_40202 = inst_40205;
var state_40225__$1 = (function (){var statearr_40235 = state_40225;
(statearr_40235[(7)] = inst_40202);

(statearr_40235[(10)] = inst_40214);

return statearr_40235;
})();
var statearr_40236_40260 = state_40225__$1;
(statearr_40236_40260[(2)] = null);

(statearr_40236_40260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (9))){
var inst_40205 = (state_40225[(8)]);
var state_40225__$1 = state_40225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40225__$1,(11),out,inst_40205);
} else {
if((state_val_40226 === (5))){
var inst_40205 = (state_40225[(8)]);
var inst_40202 = (state_40225[(7)]);
var inst_40209 = cljs.core._EQ_.call(null,inst_40205,inst_40202);
var state_40225__$1 = state_40225;
if(inst_40209){
var statearr_40238_40261 = state_40225__$1;
(statearr_40238_40261[(1)] = (8));

} else {
var statearr_40239_40262 = state_40225__$1;
(statearr_40239_40262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (10))){
var inst_40217 = (state_40225[(2)]);
var state_40225__$1 = state_40225;
var statearr_40240_40263 = state_40225__$1;
(statearr_40240_40263[(2)] = inst_40217);

(statearr_40240_40263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40226 === (8))){
var inst_40202 = (state_40225[(7)]);
var tmp40237 = inst_40202;
var inst_40202__$1 = tmp40237;
var state_40225__$1 = (function (){var statearr_40241 = state_40225;
(statearr_40241[(7)] = inst_40202__$1);

return statearr_40241;
})();
var statearr_40242_40264 = state_40225__$1;
(statearr_40242_40264[(2)] = null);

(statearr_40242_40264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___40254,out))
;
return ((function (switch__37569__auto__,c__37681__auto___40254,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_40246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40246[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_40246[(1)] = (1));

return statearr_40246;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_40225){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40247){if((e40247 instanceof Object)){
var ex__37573__auto__ = e40247;
var statearr_40248_40265 = state_40225;
(statearr_40248_40265[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40266 = state_40225;
state_40225 = G__40266;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_40225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_40225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___40254,out))
})();
var state__37683__auto__ = (function (){var statearr_40249 = f__37682__auto__.call(null);
(statearr_40249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___40254);

return statearr_40249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___40254,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40267 = [];
var len__36572__auto___40337 = arguments.length;
var i__36573__auto___40338 = (0);
while(true){
if((i__36573__auto___40338 < len__36572__auto___40337)){
args40267.push((arguments[i__36573__auto___40338]));

var G__40339 = (i__36573__auto___40338 + (1));
i__36573__auto___40338 = G__40339;
continue;
} else {
}
break;
}

var G__40269 = args40267.length;
switch (G__40269) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40267.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___40341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___40341,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___40341,out){
return (function (state_40307){
var state_val_40308 = (state_40307[(1)]);
if((state_val_40308 === (7))){
var inst_40303 = (state_40307[(2)]);
var state_40307__$1 = state_40307;
var statearr_40309_40342 = state_40307__$1;
(statearr_40309_40342[(2)] = inst_40303);

(statearr_40309_40342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (1))){
var inst_40270 = (new Array(n));
var inst_40271 = inst_40270;
var inst_40272 = (0);
var state_40307__$1 = (function (){var statearr_40310 = state_40307;
(statearr_40310[(7)] = inst_40272);

(statearr_40310[(8)] = inst_40271);

return statearr_40310;
})();
var statearr_40311_40343 = state_40307__$1;
(statearr_40311_40343[(2)] = null);

(statearr_40311_40343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (4))){
var inst_40275 = (state_40307[(9)]);
var inst_40275__$1 = (state_40307[(2)]);
var inst_40276 = (inst_40275__$1 == null);
var inst_40277 = cljs.core.not.call(null,inst_40276);
var state_40307__$1 = (function (){var statearr_40312 = state_40307;
(statearr_40312[(9)] = inst_40275__$1);

return statearr_40312;
})();
if(inst_40277){
var statearr_40313_40344 = state_40307__$1;
(statearr_40313_40344[(1)] = (5));

} else {
var statearr_40314_40345 = state_40307__$1;
(statearr_40314_40345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (15))){
var inst_40297 = (state_40307[(2)]);
var state_40307__$1 = state_40307;
var statearr_40315_40346 = state_40307__$1;
(statearr_40315_40346[(2)] = inst_40297);

(statearr_40315_40346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (13))){
var state_40307__$1 = state_40307;
var statearr_40316_40347 = state_40307__$1;
(statearr_40316_40347[(2)] = null);

(statearr_40316_40347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (6))){
var inst_40272 = (state_40307[(7)]);
var inst_40293 = (inst_40272 > (0));
var state_40307__$1 = state_40307;
if(cljs.core.truth_(inst_40293)){
var statearr_40317_40348 = state_40307__$1;
(statearr_40317_40348[(1)] = (12));

} else {
var statearr_40318_40349 = state_40307__$1;
(statearr_40318_40349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (3))){
var inst_40305 = (state_40307[(2)]);
var state_40307__$1 = state_40307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40307__$1,inst_40305);
} else {
if((state_val_40308 === (12))){
var inst_40271 = (state_40307[(8)]);
var inst_40295 = cljs.core.vec.call(null,inst_40271);
var state_40307__$1 = state_40307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40307__$1,(15),out,inst_40295);
} else {
if((state_val_40308 === (2))){
var state_40307__$1 = state_40307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40307__$1,(4),ch);
} else {
if((state_val_40308 === (11))){
var inst_40287 = (state_40307[(2)]);
var inst_40288 = (new Array(n));
var inst_40271 = inst_40288;
var inst_40272 = (0);
var state_40307__$1 = (function (){var statearr_40319 = state_40307;
(statearr_40319[(7)] = inst_40272);

(statearr_40319[(10)] = inst_40287);

(statearr_40319[(8)] = inst_40271);

return statearr_40319;
})();
var statearr_40320_40350 = state_40307__$1;
(statearr_40320_40350[(2)] = null);

(statearr_40320_40350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (9))){
var inst_40271 = (state_40307[(8)]);
var inst_40285 = cljs.core.vec.call(null,inst_40271);
var state_40307__$1 = state_40307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40307__$1,(11),out,inst_40285);
} else {
if((state_val_40308 === (5))){
var inst_40272 = (state_40307[(7)]);
var inst_40280 = (state_40307[(11)]);
var inst_40275 = (state_40307[(9)]);
var inst_40271 = (state_40307[(8)]);
var inst_40279 = (inst_40271[inst_40272] = inst_40275);
var inst_40280__$1 = (inst_40272 + (1));
var inst_40281 = (inst_40280__$1 < n);
var state_40307__$1 = (function (){var statearr_40321 = state_40307;
(statearr_40321[(11)] = inst_40280__$1);

(statearr_40321[(12)] = inst_40279);

return statearr_40321;
})();
if(cljs.core.truth_(inst_40281)){
var statearr_40322_40351 = state_40307__$1;
(statearr_40322_40351[(1)] = (8));

} else {
var statearr_40323_40352 = state_40307__$1;
(statearr_40323_40352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (14))){
var inst_40300 = (state_40307[(2)]);
var inst_40301 = cljs.core.async.close_BANG_.call(null,out);
var state_40307__$1 = (function (){var statearr_40325 = state_40307;
(statearr_40325[(13)] = inst_40300);

return statearr_40325;
})();
var statearr_40326_40353 = state_40307__$1;
(statearr_40326_40353[(2)] = inst_40301);

(statearr_40326_40353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (10))){
var inst_40291 = (state_40307[(2)]);
var state_40307__$1 = state_40307;
var statearr_40327_40354 = state_40307__$1;
(statearr_40327_40354[(2)] = inst_40291);

(statearr_40327_40354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40308 === (8))){
var inst_40280 = (state_40307[(11)]);
var inst_40271 = (state_40307[(8)]);
var tmp40324 = inst_40271;
var inst_40271__$1 = tmp40324;
var inst_40272 = inst_40280;
var state_40307__$1 = (function (){var statearr_40328 = state_40307;
(statearr_40328[(7)] = inst_40272);

(statearr_40328[(8)] = inst_40271__$1);

return statearr_40328;
})();
var statearr_40329_40355 = state_40307__$1;
(statearr_40329_40355[(2)] = null);

(statearr_40329_40355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___40341,out))
;
return ((function (switch__37569__auto__,c__37681__auto___40341,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_40333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40333[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_40333[(1)] = (1));

return statearr_40333;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_40307){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40334){if((e40334 instanceof Object)){
var ex__37573__auto__ = e40334;
var statearr_40335_40356 = state_40307;
(statearr_40335_40356[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40357 = state_40307;
state_40307 = G__40357;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_40307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_40307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___40341,out))
})();
var state__37683__auto__ = (function (){var statearr_40336 = f__37682__auto__.call(null);
(statearr_40336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___40341);

return statearr_40336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___40341,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40358 = [];
var len__36572__auto___40432 = arguments.length;
var i__36573__auto___40433 = (0);
while(true){
if((i__36573__auto___40433 < len__36572__auto___40432)){
args40358.push((arguments[i__36573__auto___40433]));

var G__40434 = (i__36573__auto___40433 + (1));
i__36573__auto___40433 = G__40434;
continue;
} else {
}
break;
}

var G__40360 = args40358.length;
switch (G__40360) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40358.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___40436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___40436,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___40436,out){
return (function (state_40402){
var state_val_40403 = (state_40402[(1)]);
if((state_val_40403 === (7))){
var inst_40398 = (state_40402[(2)]);
var state_40402__$1 = state_40402;
var statearr_40404_40437 = state_40402__$1;
(statearr_40404_40437[(2)] = inst_40398);

(statearr_40404_40437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (1))){
var inst_40361 = [];
var inst_40362 = inst_40361;
var inst_40363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40402__$1 = (function (){var statearr_40405 = state_40402;
(statearr_40405[(7)] = inst_40363);

(statearr_40405[(8)] = inst_40362);

return statearr_40405;
})();
var statearr_40406_40438 = state_40402__$1;
(statearr_40406_40438[(2)] = null);

(statearr_40406_40438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (4))){
var inst_40366 = (state_40402[(9)]);
var inst_40366__$1 = (state_40402[(2)]);
var inst_40367 = (inst_40366__$1 == null);
var inst_40368 = cljs.core.not.call(null,inst_40367);
var state_40402__$1 = (function (){var statearr_40407 = state_40402;
(statearr_40407[(9)] = inst_40366__$1);

return statearr_40407;
})();
if(inst_40368){
var statearr_40408_40439 = state_40402__$1;
(statearr_40408_40439[(1)] = (5));

} else {
var statearr_40409_40440 = state_40402__$1;
(statearr_40409_40440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (15))){
var inst_40392 = (state_40402[(2)]);
var state_40402__$1 = state_40402;
var statearr_40410_40441 = state_40402__$1;
(statearr_40410_40441[(2)] = inst_40392);

(statearr_40410_40441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (13))){
var state_40402__$1 = state_40402;
var statearr_40411_40442 = state_40402__$1;
(statearr_40411_40442[(2)] = null);

(statearr_40411_40442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (6))){
var inst_40362 = (state_40402[(8)]);
var inst_40387 = inst_40362.length;
var inst_40388 = (inst_40387 > (0));
var state_40402__$1 = state_40402;
if(cljs.core.truth_(inst_40388)){
var statearr_40412_40443 = state_40402__$1;
(statearr_40412_40443[(1)] = (12));

} else {
var statearr_40413_40444 = state_40402__$1;
(statearr_40413_40444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (3))){
var inst_40400 = (state_40402[(2)]);
var state_40402__$1 = state_40402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40402__$1,inst_40400);
} else {
if((state_val_40403 === (12))){
var inst_40362 = (state_40402[(8)]);
var inst_40390 = cljs.core.vec.call(null,inst_40362);
var state_40402__$1 = state_40402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40402__$1,(15),out,inst_40390);
} else {
if((state_val_40403 === (2))){
var state_40402__$1 = state_40402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40402__$1,(4),ch);
} else {
if((state_val_40403 === (11))){
var inst_40370 = (state_40402[(10)]);
var inst_40366 = (state_40402[(9)]);
var inst_40380 = (state_40402[(2)]);
var inst_40381 = [];
var inst_40382 = inst_40381.push(inst_40366);
var inst_40362 = inst_40381;
var inst_40363 = inst_40370;
var state_40402__$1 = (function (){var statearr_40414 = state_40402;
(statearr_40414[(11)] = inst_40382);

(statearr_40414[(12)] = inst_40380);

(statearr_40414[(7)] = inst_40363);

(statearr_40414[(8)] = inst_40362);

return statearr_40414;
})();
var statearr_40415_40445 = state_40402__$1;
(statearr_40415_40445[(2)] = null);

(statearr_40415_40445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (9))){
var inst_40362 = (state_40402[(8)]);
var inst_40378 = cljs.core.vec.call(null,inst_40362);
var state_40402__$1 = state_40402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40402__$1,(11),out,inst_40378);
} else {
if((state_val_40403 === (5))){
var inst_40370 = (state_40402[(10)]);
var inst_40366 = (state_40402[(9)]);
var inst_40363 = (state_40402[(7)]);
var inst_40370__$1 = f.call(null,inst_40366);
var inst_40371 = cljs.core._EQ_.call(null,inst_40370__$1,inst_40363);
var inst_40372 = cljs.core.keyword_identical_QMARK_.call(null,inst_40363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40373 = (inst_40371) || (inst_40372);
var state_40402__$1 = (function (){var statearr_40416 = state_40402;
(statearr_40416[(10)] = inst_40370__$1);

return statearr_40416;
})();
if(cljs.core.truth_(inst_40373)){
var statearr_40417_40446 = state_40402__$1;
(statearr_40417_40446[(1)] = (8));

} else {
var statearr_40418_40447 = state_40402__$1;
(statearr_40418_40447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (14))){
var inst_40395 = (state_40402[(2)]);
var inst_40396 = cljs.core.async.close_BANG_.call(null,out);
var state_40402__$1 = (function (){var statearr_40420 = state_40402;
(statearr_40420[(13)] = inst_40395);

return statearr_40420;
})();
var statearr_40421_40448 = state_40402__$1;
(statearr_40421_40448[(2)] = inst_40396);

(statearr_40421_40448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (10))){
var inst_40385 = (state_40402[(2)]);
var state_40402__$1 = state_40402;
var statearr_40422_40449 = state_40402__$1;
(statearr_40422_40449[(2)] = inst_40385);

(statearr_40422_40449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40403 === (8))){
var inst_40370 = (state_40402[(10)]);
var inst_40366 = (state_40402[(9)]);
var inst_40362 = (state_40402[(8)]);
var inst_40375 = inst_40362.push(inst_40366);
var tmp40419 = inst_40362;
var inst_40362__$1 = tmp40419;
var inst_40363 = inst_40370;
var state_40402__$1 = (function (){var statearr_40423 = state_40402;
(statearr_40423[(7)] = inst_40363);

(statearr_40423[(14)] = inst_40375);

(statearr_40423[(8)] = inst_40362__$1);

return statearr_40423;
})();
var statearr_40424_40450 = state_40402__$1;
(statearr_40424_40450[(2)] = null);

(statearr_40424_40450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto___40436,out))
;
return ((function (switch__37569__auto__,c__37681__auto___40436,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_40428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40428[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_40428[(1)] = (1));

return statearr_40428;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_40402){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40429){if((e40429 instanceof Object)){
var ex__37573__auto__ = e40429;
var statearr_40430_40451 = state_40402;
(statearr_40430_40451[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40452 = state_40402;
state_40402 = G__40452;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_40402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_40402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___40436,out))
})();
var state__37683__auto__ = (function (){var statearr_40431 = f__37682__auto__.call(null);
(statearr_40431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___40436);

return statearr_40431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___40436,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456361399551