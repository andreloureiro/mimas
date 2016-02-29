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
var args44588 = [];
var len__36574__auto___44594 = arguments.length;
var i__36575__auto___44595 = (0);
while(true){
if((i__36575__auto___44595 < len__36574__auto___44594)){
args44588.push((arguments[i__36575__auto___44595]));

var G__44596 = (i__36575__auto___44595 + (1));
i__36575__auto___44595 = G__44596;
continue;
} else {
}
break;
}

var G__44590 = args44588.length;
switch (G__44590) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44588.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44591 = (function (f,blockable,meta44592){
this.f = f;
this.blockable = blockable;
this.meta44592 = meta44592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44593,meta44592__$1){
var self__ = this;
var _44593__$1 = this;
return (new cljs.core.async.t_cljs$core$async44591(self__.f,self__.blockable,meta44592__$1));
});

cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44593){
var self__ = this;
var _44593__$1 = this;
return self__.meta44592;
});

cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44592","meta44592",122796902,null)], null);
});

cljs.core.async.t_cljs$core$async44591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44591";

cljs.core.async.t_cljs$core$async44591.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async44591");
});

cljs.core.async.__GT_t_cljs$core$async44591 = (function cljs$core$async$__GT_t_cljs$core$async44591(f__$1,blockable__$1,meta44592){
return (new cljs.core.async.t_cljs$core$async44591(f__$1,blockable__$1,meta44592));
});

}

return (new cljs.core.async.t_cljs$core$async44591(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44600 = [];
var len__36574__auto___44603 = arguments.length;
var i__36575__auto___44604 = (0);
while(true){
if((i__36575__auto___44604 < len__36574__auto___44603)){
args44600.push((arguments[i__36575__auto___44604]));

var G__44605 = (i__36575__auto___44604 + (1));
i__36575__auto___44604 = G__44605;
continue;
} else {
}
break;
}

var G__44602 = args44600.length;
switch (G__44602) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44600.length)].join('')));

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
var args44607 = [];
var len__36574__auto___44610 = arguments.length;
var i__36575__auto___44611 = (0);
while(true){
if((i__36575__auto___44611 < len__36574__auto___44610)){
args44607.push((arguments[i__36575__auto___44611]));

var G__44612 = (i__36575__auto___44611 + (1));
i__36575__auto___44611 = G__44612;
continue;
} else {
}
break;
}

var G__44609 = args44607.length;
switch (G__44609) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44607.length)].join('')));

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
var args44614 = [];
var len__36574__auto___44617 = arguments.length;
var i__36575__auto___44618 = (0);
while(true){
if((i__36575__auto___44618 < len__36574__auto___44617)){
args44614.push((arguments[i__36575__auto___44618]));

var G__44619 = (i__36575__auto___44618 + (1));
i__36575__auto___44618 = G__44619;
continue;
} else {
}
break;
}

var G__44616 = args44614.length;
switch (G__44616) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44614.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44621 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44621);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44621,ret){
return (function (){
return fn1.call(null,val_44621);
});})(val_44621,ret))
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
var args44622 = [];
var len__36574__auto___44625 = arguments.length;
var i__36575__auto___44626 = (0);
while(true){
if((i__36575__auto___44626 < len__36574__auto___44625)){
args44622.push((arguments[i__36575__auto___44626]));

var G__44627 = (i__36575__auto___44626 + (1));
i__36575__auto___44626 = G__44627;
continue;
} else {
}
break;
}

var G__44624 = args44622.length;
switch (G__44624) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44622.length)].join('')));

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
var n__36419__auto___44629 = n;
var x_44630 = (0);
while(true){
if((x_44630 < n__36419__auto___44629)){
(a[x_44630] = (0));

var G__44631 = (x_44630 + (1));
x_44630 = G__44631;
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

var G__44632 = (i + (1));
i = G__44632;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44636 = (function (alt_flag,flag,meta44637){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44637 = meta44637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44638,meta44637__$1){
var self__ = this;
var _44638__$1 = this;
return (new cljs.core.async.t_cljs$core$async44636(self__.alt_flag,self__.flag,meta44637__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44638){
var self__ = this;
var _44638__$1 = this;
return self__.meta44637;
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44637","meta44637",1129659037,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44636";

cljs.core.async.t_cljs$core$async44636.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async44636");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44636 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44636(alt_flag__$1,flag__$1,meta44637){
return (new cljs.core.async.t_cljs$core$async44636(alt_flag__$1,flag__$1,meta44637));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44636(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44642 = (function (alt_handler,flag,cb,meta44643){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44643 = meta44643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44644,meta44643__$1){
var self__ = this;
var _44644__$1 = this;
return (new cljs.core.async.t_cljs$core$async44642(self__.alt_handler,self__.flag,self__.cb,meta44643__$1));
});

cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44644){
var self__ = this;
var _44644__$1 = this;
return self__.meta44643;
});

cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44643","meta44643",180414597,null)], null);
});

cljs.core.async.t_cljs$core$async44642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44642";

cljs.core.async.t_cljs$core$async44642.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async44642");
});

cljs.core.async.__GT_t_cljs$core$async44642 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44642(alt_handler__$1,flag__$1,cb__$1,meta44643){
return (new cljs.core.async.t_cljs$core$async44642(alt_handler__$1,flag__$1,cb__$1,meta44643));
});

}

return (new cljs.core.async.t_cljs$core$async44642(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44645_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44645_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44646_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44646_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35516__auto__ = wport;
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44647 = (i + (1));
i = G__44647;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35516__auto__ = ret;
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__35504__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35504__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35504__auto__;
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
var args__36581__auto__ = [];
var len__36574__auto___44653 = arguments.length;
var i__36575__auto___44654 = (0);
while(true){
if((i__36575__auto___44654 < len__36574__auto___44653)){
args__36581__auto__.push((arguments[i__36575__auto___44654]));

var G__44655 = (i__36575__auto___44654 + (1));
i__36575__auto___44654 = G__44655;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((1) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36582__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44650){
var map__44651 = p__44650;
var map__44651__$1 = ((((!((map__44651 == null)))?((((map__44651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44651):map__44651);
var opts = map__44651__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44648){
var G__44649 = cljs.core.first.call(null,seq44648);
var seq44648__$1 = cljs.core.next.call(null,seq44648);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44649,seq44648__$1);
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
var args44656 = [];
var len__36574__auto___44706 = arguments.length;
var i__36575__auto___44707 = (0);
while(true){
if((i__36575__auto___44707 < len__36574__auto___44706)){
args44656.push((arguments[i__36575__auto___44707]));

var G__44708 = (i__36575__auto___44707 + (1));
i__36575__auto___44707 = G__44708;
continue;
} else {
}
break;
}

var G__44658 = args44656.length;
switch (G__44658) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44656.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37632__auto___44710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___44710){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___44710){
return (function (state_44682){
var state_val_44683 = (state_44682[(1)]);
if((state_val_44683 === (7))){
var inst_44678 = (state_44682[(2)]);
var state_44682__$1 = state_44682;
var statearr_44684_44711 = state_44682__$1;
(statearr_44684_44711[(2)] = inst_44678);

(statearr_44684_44711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (1))){
var state_44682__$1 = state_44682;
var statearr_44685_44712 = state_44682__$1;
(statearr_44685_44712[(2)] = null);

(statearr_44685_44712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (4))){
var inst_44661 = (state_44682[(7)]);
var inst_44661__$1 = (state_44682[(2)]);
var inst_44662 = (inst_44661__$1 == null);
var state_44682__$1 = (function (){var statearr_44686 = state_44682;
(statearr_44686[(7)] = inst_44661__$1);

return statearr_44686;
})();
if(cljs.core.truth_(inst_44662)){
var statearr_44687_44713 = state_44682__$1;
(statearr_44687_44713[(1)] = (5));

} else {
var statearr_44688_44714 = state_44682__$1;
(statearr_44688_44714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (13))){
var state_44682__$1 = state_44682;
var statearr_44689_44715 = state_44682__$1;
(statearr_44689_44715[(2)] = null);

(statearr_44689_44715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (6))){
var inst_44661 = (state_44682[(7)]);
var state_44682__$1 = state_44682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44682__$1,(11),to,inst_44661);
} else {
if((state_val_44683 === (3))){
var inst_44680 = (state_44682[(2)]);
var state_44682__$1 = state_44682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44682__$1,inst_44680);
} else {
if((state_val_44683 === (12))){
var state_44682__$1 = state_44682;
var statearr_44690_44716 = state_44682__$1;
(statearr_44690_44716[(2)] = null);

(statearr_44690_44716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (2))){
var state_44682__$1 = state_44682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44682__$1,(4),from);
} else {
if((state_val_44683 === (11))){
var inst_44671 = (state_44682[(2)]);
var state_44682__$1 = state_44682;
if(cljs.core.truth_(inst_44671)){
var statearr_44691_44717 = state_44682__$1;
(statearr_44691_44717[(1)] = (12));

} else {
var statearr_44692_44718 = state_44682__$1;
(statearr_44692_44718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (9))){
var state_44682__$1 = state_44682;
var statearr_44693_44719 = state_44682__$1;
(statearr_44693_44719[(2)] = null);

(statearr_44693_44719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (5))){
var state_44682__$1 = state_44682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44694_44720 = state_44682__$1;
(statearr_44694_44720[(1)] = (8));

} else {
var statearr_44695_44721 = state_44682__$1;
(statearr_44695_44721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (14))){
var inst_44676 = (state_44682[(2)]);
var state_44682__$1 = state_44682;
var statearr_44696_44722 = state_44682__$1;
(statearr_44696_44722[(2)] = inst_44676);

(statearr_44696_44722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (10))){
var inst_44668 = (state_44682[(2)]);
var state_44682__$1 = state_44682;
var statearr_44697_44723 = state_44682__$1;
(statearr_44697_44723[(2)] = inst_44668);

(statearr_44697_44723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44683 === (8))){
var inst_44665 = cljs.core.async.close_BANG_.call(null,to);
var state_44682__$1 = state_44682;
var statearr_44698_44724 = state_44682__$1;
(statearr_44698_44724[(2)] = inst_44665);

(statearr_44698_44724[(1)] = (10));


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
});})(c__37632__auto___44710))
;
return ((function (switch__37611__auto__,c__37632__auto___44710){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_44702 = [null,null,null,null,null,null,null,null];
(statearr_44702[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_44702[(1)] = (1));

return statearr_44702;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_44682){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_44682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e44703){if((e44703 instanceof Object)){
var ex__37615__auto__ = e44703;
var statearr_44704_44725 = state_44682;
(statearr_44704_44725[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44726 = state_44682;
state_44682 = G__44726;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_44682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_44682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___44710))
})();
var state__37634__auto__ = (function (){var statearr_44705 = f__37633__auto__.call(null);
(statearr_44705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___44710);

return statearr_44705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___44710))
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
return (function (p__44910){
var vec__44911 = p__44910;
var v = cljs.core.nth.call(null,vec__44911,(0),null);
var p = cljs.core.nth.call(null,vec__44911,(1),null);
var job = vec__44911;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37632__auto___45093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results){
return (function (state_44916){
var state_val_44917 = (state_44916[(1)]);
if((state_val_44917 === (1))){
var state_44916__$1 = state_44916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44916__$1,(2),res,v);
} else {
if((state_val_44917 === (2))){
var inst_44913 = (state_44916[(2)]);
var inst_44914 = cljs.core.async.close_BANG_.call(null,res);
var state_44916__$1 = (function (){var statearr_44918 = state_44916;
(statearr_44918[(7)] = inst_44913);

return statearr_44918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44916__$1,inst_44914);
} else {
return null;
}
}
});})(c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results))
;
return ((function (switch__37611__auto__,c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_44922 = [null,null,null,null,null,null,null,null];
(statearr_44922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_44922[(1)] = (1));

return statearr_44922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_44916){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_44916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e44923){if((e44923 instanceof Object)){
var ex__37615__auto__ = e44923;
var statearr_44924_45094 = state_44916;
(statearr_44924_45094[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45095 = state_44916;
state_44916 = G__45095;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_44916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_44916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results))
})();
var state__37634__auto__ = (function (){var statearr_44925 = f__37633__auto__.call(null);
(statearr_44925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45093);

return statearr_44925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___45093,res,vec__44911,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44926){
var vec__44927 = p__44926;
var v = cljs.core.nth.call(null,vec__44927,(0),null);
var p = cljs.core.nth.call(null,vec__44927,(1),null);
var job = vec__44927;
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
var n__36419__auto___45096 = n;
var __45097 = (0);
while(true){
if((__45097 < n__36419__auto___45096)){
var G__44928_45098 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44928_45098) {
case "compute":
var c__37632__auto___45100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45097,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (__45097,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function (state_44941){
var state_val_44942 = (state_44941[(1)]);
if((state_val_44942 === (1))){
var state_44941__$1 = state_44941;
var statearr_44943_45101 = state_44941__$1;
(statearr_44943_45101[(2)] = null);

(statearr_44943_45101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (2))){
var state_44941__$1 = state_44941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44941__$1,(4),jobs);
} else {
if((state_val_44942 === (3))){
var inst_44939 = (state_44941[(2)]);
var state_44941__$1 = state_44941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44941__$1,inst_44939);
} else {
if((state_val_44942 === (4))){
var inst_44931 = (state_44941[(2)]);
var inst_44932 = process.call(null,inst_44931);
var state_44941__$1 = state_44941;
if(cljs.core.truth_(inst_44932)){
var statearr_44944_45102 = state_44941__$1;
(statearr_44944_45102[(1)] = (5));

} else {
var statearr_44945_45103 = state_44941__$1;
(statearr_44945_45103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (5))){
var state_44941__$1 = state_44941;
var statearr_44946_45104 = state_44941__$1;
(statearr_44946_45104[(2)] = null);

(statearr_44946_45104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (6))){
var state_44941__$1 = state_44941;
var statearr_44947_45105 = state_44941__$1;
(statearr_44947_45105[(2)] = null);

(statearr_44947_45105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (7))){
var inst_44937 = (state_44941[(2)]);
var state_44941__$1 = state_44941;
var statearr_44948_45106 = state_44941__$1;
(statearr_44948_45106[(2)] = inst_44937);

(statearr_44948_45106[(1)] = (3));


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
});})(__45097,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
;
return ((function (__45097,switch__37611__auto__,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_44952 = [null,null,null,null,null,null,null];
(statearr_44952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_44952[(1)] = (1));

return statearr_44952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_44941){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_44941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e44953){if((e44953 instanceof Object)){
var ex__37615__auto__ = e44953;
var statearr_44954_45107 = state_44941;
(statearr_44954_45107[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45108 = state_44941;
state_44941 = G__45108;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_44941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_44941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(__45097,switch__37611__auto__,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_44955 = f__37633__auto__.call(null);
(statearr_44955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45100);

return statearr_44955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(__45097,c__37632__auto___45100,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
);


break;
case "async":
var c__37632__auto___45109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45097,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (__45097,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function (state_44968){
var state_val_44969 = (state_44968[(1)]);
if((state_val_44969 === (1))){
var state_44968__$1 = state_44968;
var statearr_44970_45110 = state_44968__$1;
(statearr_44970_45110[(2)] = null);

(statearr_44970_45110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (2))){
var state_44968__$1 = state_44968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44968__$1,(4),jobs);
} else {
if((state_val_44969 === (3))){
var inst_44966 = (state_44968[(2)]);
var state_44968__$1 = state_44968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44968__$1,inst_44966);
} else {
if((state_val_44969 === (4))){
var inst_44958 = (state_44968[(2)]);
var inst_44959 = async.call(null,inst_44958);
var state_44968__$1 = state_44968;
if(cljs.core.truth_(inst_44959)){
var statearr_44971_45111 = state_44968__$1;
(statearr_44971_45111[(1)] = (5));

} else {
var statearr_44972_45112 = state_44968__$1;
(statearr_44972_45112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (5))){
var state_44968__$1 = state_44968;
var statearr_44973_45113 = state_44968__$1;
(statearr_44973_45113[(2)] = null);

(statearr_44973_45113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (6))){
var state_44968__$1 = state_44968;
var statearr_44974_45114 = state_44968__$1;
(statearr_44974_45114[(2)] = null);

(statearr_44974_45114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44969 === (7))){
var inst_44964 = (state_44968[(2)]);
var state_44968__$1 = state_44968;
var statearr_44975_45115 = state_44968__$1;
(statearr_44975_45115[(2)] = inst_44964);

(statearr_44975_45115[(1)] = (3));


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
});})(__45097,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
;
return ((function (__45097,switch__37611__auto__,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_44979 = [null,null,null,null,null,null,null];
(statearr_44979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_44979[(1)] = (1));

return statearr_44979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_44968){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_44968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e44980){if((e44980 instanceof Object)){
var ex__37615__auto__ = e44980;
var statearr_44981_45116 = state_44968;
(statearr_44981_45116[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45117 = state_44968;
state_44968 = G__45117;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_44968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_44968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(__45097,switch__37611__auto__,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_44982 = f__37633__auto__.call(null);
(statearr_44982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45109);

return statearr_44982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(__45097,c__37632__auto___45109,G__44928_45098,n__36419__auto___45096,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45118 = (__45097 + (1));
__45097 = G__45118;
continue;
} else {
}
break;
}

var c__37632__auto___45119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___45119,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___45119,jobs,results,process,async){
return (function (state_45004){
var state_val_45005 = (state_45004[(1)]);
if((state_val_45005 === (1))){
var state_45004__$1 = state_45004;
var statearr_45006_45120 = state_45004__$1;
(statearr_45006_45120[(2)] = null);

(statearr_45006_45120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45005 === (2))){
var state_45004__$1 = state_45004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45004__$1,(4),from);
} else {
if((state_val_45005 === (3))){
var inst_45002 = (state_45004[(2)]);
var state_45004__$1 = state_45004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45004__$1,inst_45002);
} else {
if((state_val_45005 === (4))){
var inst_44985 = (state_45004[(7)]);
var inst_44985__$1 = (state_45004[(2)]);
var inst_44986 = (inst_44985__$1 == null);
var state_45004__$1 = (function (){var statearr_45007 = state_45004;
(statearr_45007[(7)] = inst_44985__$1);

return statearr_45007;
})();
if(cljs.core.truth_(inst_44986)){
var statearr_45008_45121 = state_45004__$1;
(statearr_45008_45121[(1)] = (5));

} else {
var statearr_45009_45122 = state_45004__$1;
(statearr_45009_45122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45005 === (5))){
var inst_44988 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45004__$1 = state_45004;
var statearr_45010_45123 = state_45004__$1;
(statearr_45010_45123[(2)] = inst_44988);

(statearr_45010_45123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45005 === (6))){
var inst_44985 = (state_45004[(7)]);
var inst_44990 = (state_45004[(8)]);
var inst_44990__$1 = cljs.core.async.chan.call(null,(1));
var inst_44991 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44992 = [inst_44985,inst_44990__$1];
var inst_44993 = (new cljs.core.PersistentVector(null,2,(5),inst_44991,inst_44992,null));
var state_45004__$1 = (function (){var statearr_45011 = state_45004;
(statearr_45011[(8)] = inst_44990__$1);

return statearr_45011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45004__$1,(8),jobs,inst_44993);
} else {
if((state_val_45005 === (7))){
var inst_45000 = (state_45004[(2)]);
var state_45004__$1 = state_45004;
var statearr_45012_45124 = state_45004__$1;
(statearr_45012_45124[(2)] = inst_45000);

(statearr_45012_45124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45005 === (8))){
var inst_44990 = (state_45004[(8)]);
var inst_44995 = (state_45004[(2)]);
var state_45004__$1 = (function (){var statearr_45013 = state_45004;
(statearr_45013[(9)] = inst_44995);

return statearr_45013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45004__$1,(9),results,inst_44990);
} else {
if((state_val_45005 === (9))){
var inst_44997 = (state_45004[(2)]);
var state_45004__$1 = (function (){var statearr_45014 = state_45004;
(statearr_45014[(10)] = inst_44997);

return statearr_45014;
})();
var statearr_45015_45125 = state_45004__$1;
(statearr_45015_45125[(2)] = null);

(statearr_45015_45125[(1)] = (2));


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
});})(c__37632__auto___45119,jobs,results,process,async))
;
return ((function (switch__37611__auto__,c__37632__auto___45119,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_45019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_45019[(1)] = (1));

return statearr_45019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_45004){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45020){if((e45020 instanceof Object)){
var ex__37615__auto__ = e45020;
var statearr_45021_45126 = state_45004;
(statearr_45021_45126[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45127 = state_45004;
state_45004 = G__45127;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_45004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_45004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___45119,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_45022 = f__37633__auto__.call(null);
(statearr_45022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45119);

return statearr_45022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___45119,jobs,results,process,async))
);


var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,jobs,results,process,async){
return (function (state_45060){
var state_val_45061 = (state_45060[(1)]);
if((state_val_45061 === (7))){
var inst_45056 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
var statearr_45062_45128 = state_45060__$1;
(statearr_45062_45128[(2)] = inst_45056);

(statearr_45062_45128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (20))){
var state_45060__$1 = state_45060;
var statearr_45063_45129 = state_45060__$1;
(statearr_45063_45129[(2)] = null);

(statearr_45063_45129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (1))){
var state_45060__$1 = state_45060;
var statearr_45064_45130 = state_45060__$1;
(statearr_45064_45130[(2)] = null);

(statearr_45064_45130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (4))){
var inst_45025 = (state_45060[(7)]);
var inst_45025__$1 = (state_45060[(2)]);
var inst_45026 = (inst_45025__$1 == null);
var state_45060__$1 = (function (){var statearr_45065 = state_45060;
(statearr_45065[(7)] = inst_45025__$1);

return statearr_45065;
})();
if(cljs.core.truth_(inst_45026)){
var statearr_45066_45131 = state_45060__$1;
(statearr_45066_45131[(1)] = (5));

} else {
var statearr_45067_45132 = state_45060__$1;
(statearr_45067_45132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (15))){
var inst_45038 = (state_45060[(8)]);
var state_45060__$1 = state_45060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45060__$1,(18),to,inst_45038);
} else {
if((state_val_45061 === (21))){
var inst_45051 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
var statearr_45068_45133 = state_45060__$1;
(statearr_45068_45133[(2)] = inst_45051);

(statearr_45068_45133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (13))){
var inst_45053 = (state_45060[(2)]);
var state_45060__$1 = (function (){var statearr_45069 = state_45060;
(statearr_45069[(9)] = inst_45053);

return statearr_45069;
})();
var statearr_45070_45134 = state_45060__$1;
(statearr_45070_45134[(2)] = null);

(statearr_45070_45134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (6))){
var inst_45025 = (state_45060[(7)]);
var state_45060__$1 = state_45060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45060__$1,(11),inst_45025);
} else {
if((state_val_45061 === (17))){
var inst_45046 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
if(cljs.core.truth_(inst_45046)){
var statearr_45071_45135 = state_45060__$1;
(statearr_45071_45135[(1)] = (19));

} else {
var statearr_45072_45136 = state_45060__$1;
(statearr_45072_45136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (3))){
var inst_45058 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45060__$1,inst_45058);
} else {
if((state_val_45061 === (12))){
var inst_45035 = (state_45060[(10)]);
var state_45060__$1 = state_45060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45060__$1,(14),inst_45035);
} else {
if((state_val_45061 === (2))){
var state_45060__$1 = state_45060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45060__$1,(4),results);
} else {
if((state_val_45061 === (19))){
var state_45060__$1 = state_45060;
var statearr_45073_45137 = state_45060__$1;
(statearr_45073_45137[(2)] = null);

(statearr_45073_45137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (11))){
var inst_45035 = (state_45060[(2)]);
var state_45060__$1 = (function (){var statearr_45074 = state_45060;
(statearr_45074[(10)] = inst_45035);

return statearr_45074;
})();
var statearr_45075_45138 = state_45060__$1;
(statearr_45075_45138[(2)] = null);

(statearr_45075_45138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (9))){
var state_45060__$1 = state_45060;
var statearr_45076_45139 = state_45060__$1;
(statearr_45076_45139[(2)] = null);

(statearr_45076_45139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (5))){
var state_45060__$1 = state_45060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45077_45140 = state_45060__$1;
(statearr_45077_45140[(1)] = (8));

} else {
var statearr_45078_45141 = state_45060__$1;
(statearr_45078_45141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (14))){
var inst_45040 = (state_45060[(11)]);
var inst_45038 = (state_45060[(8)]);
var inst_45038__$1 = (state_45060[(2)]);
var inst_45039 = (inst_45038__$1 == null);
var inst_45040__$1 = cljs.core.not.call(null,inst_45039);
var state_45060__$1 = (function (){var statearr_45079 = state_45060;
(statearr_45079[(11)] = inst_45040__$1);

(statearr_45079[(8)] = inst_45038__$1);

return statearr_45079;
})();
if(inst_45040__$1){
var statearr_45080_45142 = state_45060__$1;
(statearr_45080_45142[(1)] = (15));

} else {
var statearr_45081_45143 = state_45060__$1;
(statearr_45081_45143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (16))){
var inst_45040 = (state_45060[(11)]);
var state_45060__$1 = state_45060;
var statearr_45082_45144 = state_45060__$1;
(statearr_45082_45144[(2)] = inst_45040);

(statearr_45082_45144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (10))){
var inst_45032 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
var statearr_45083_45145 = state_45060__$1;
(statearr_45083_45145[(2)] = inst_45032);

(statearr_45083_45145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (18))){
var inst_45043 = (state_45060[(2)]);
var state_45060__$1 = state_45060;
var statearr_45084_45146 = state_45060__$1;
(statearr_45084_45146[(2)] = inst_45043);

(statearr_45084_45146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45061 === (8))){
var inst_45029 = cljs.core.async.close_BANG_.call(null,to);
var state_45060__$1 = state_45060;
var statearr_45085_45147 = state_45060__$1;
(statearr_45085_45147[(2)] = inst_45029);

(statearr_45085_45147[(1)] = (10));


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
});})(c__37632__auto__,jobs,results,process,async))
;
return ((function (switch__37611__auto__,c__37632__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_45089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_45089[(1)] = (1));

return statearr_45089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_45060){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45090){if((e45090 instanceof Object)){
var ex__37615__auto__ = e45090;
var statearr_45091_45148 = state_45060;
(statearr_45091_45148[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45149 = state_45060;
state_45060 = G__45149;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_45060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_45060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_45092 = f__37633__auto__.call(null);
(statearr_45092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_45092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__,jobs,results,process,async))
);

return c__37632__auto__;
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
var args45150 = [];
var len__36574__auto___45153 = arguments.length;
var i__36575__auto___45154 = (0);
while(true){
if((i__36575__auto___45154 < len__36574__auto___45153)){
args45150.push((arguments[i__36575__auto___45154]));

var G__45155 = (i__36575__auto___45154 + (1));
i__36575__auto___45154 = G__45155;
continue;
} else {
}
break;
}

var G__45152 = args45150.length;
switch (G__45152) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45150.length)].join('')));

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
var args45157 = [];
var len__36574__auto___45160 = arguments.length;
var i__36575__auto___45161 = (0);
while(true){
if((i__36575__auto___45161 < len__36574__auto___45160)){
args45157.push((arguments[i__36575__auto___45161]));

var G__45162 = (i__36575__auto___45161 + (1));
i__36575__auto___45161 = G__45162;
continue;
} else {
}
break;
}

var G__45159 = args45157.length;
switch (G__45159) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45157.length)].join('')));

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
var args45164 = [];
var len__36574__auto___45217 = arguments.length;
var i__36575__auto___45218 = (0);
while(true){
if((i__36575__auto___45218 < len__36574__auto___45217)){
args45164.push((arguments[i__36575__auto___45218]));

var G__45219 = (i__36575__auto___45218 + (1));
i__36575__auto___45218 = G__45219;
continue;
} else {
}
break;
}

var G__45166 = args45164.length;
switch (G__45166) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45164.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37632__auto___45221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___45221,tc,fc){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___45221,tc,fc){
return (function (state_45192){
var state_val_45193 = (state_45192[(1)]);
if((state_val_45193 === (7))){
var inst_45188 = (state_45192[(2)]);
var state_45192__$1 = state_45192;
var statearr_45194_45222 = state_45192__$1;
(statearr_45194_45222[(2)] = inst_45188);

(statearr_45194_45222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (1))){
var state_45192__$1 = state_45192;
var statearr_45195_45223 = state_45192__$1;
(statearr_45195_45223[(2)] = null);

(statearr_45195_45223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (4))){
var inst_45169 = (state_45192[(7)]);
var inst_45169__$1 = (state_45192[(2)]);
var inst_45170 = (inst_45169__$1 == null);
var state_45192__$1 = (function (){var statearr_45196 = state_45192;
(statearr_45196[(7)] = inst_45169__$1);

return statearr_45196;
})();
if(cljs.core.truth_(inst_45170)){
var statearr_45197_45224 = state_45192__$1;
(statearr_45197_45224[(1)] = (5));

} else {
var statearr_45198_45225 = state_45192__$1;
(statearr_45198_45225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (13))){
var state_45192__$1 = state_45192;
var statearr_45199_45226 = state_45192__$1;
(statearr_45199_45226[(2)] = null);

(statearr_45199_45226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (6))){
var inst_45169 = (state_45192[(7)]);
var inst_45175 = p.call(null,inst_45169);
var state_45192__$1 = state_45192;
if(cljs.core.truth_(inst_45175)){
var statearr_45200_45227 = state_45192__$1;
(statearr_45200_45227[(1)] = (9));

} else {
var statearr_45201_45228 = state_45192__$1;
(statearr_45201_45228[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (3))){
var inst_45190 = (state_45192[(2)]);
var state_45192__$1 = state_45192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45192__$1,inst_45190);
} else {
if((state_val_45193 === (12))){
var state_45192__$1 = state_45192;
var statearr_45202_45229 = state_45192__$1;
(statearr_45202_45229[(2)] = null);

(statearr_45202_45229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (2))){
var state_45192__$1 = state_45192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45192__$1,(4),ch);
} else {
if((state_val_45193 === (11))){
var inst_45169 = (state_45192[(7)]);
var inst_45179 = (state_45192[(2)]);
var state_45192__$1 = state_45192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45192__$1,(8),inst_45179,inst_45169);
} else {
if((state_val_45193 === (9))){
var state_45192__$1 = state_45192;
var statearr_45203_45230 = state_45192__$1;
(statearr_45203_45230[(2)] = tc);

(statearr_45203_45230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (5))){
var inst_45172 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45173 = cljs.core.async.close_BANG_.call(null,fc);
var state_45192__$1 = (function (){var statearr_45204 = state_45192;
(statearr_45204[(8)] = inst_45172);

return statearr_45204;
})();
var statearr_45205_45231 = state_45192__$1;
(statearr_45205_45231[(2)] = inst_45173);

(statearr_45205_45231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (14))){
var inst_45186 = (state_45192[(2)]);
var state_45192__$1 = state_45192;
var statearr_45206_45232 = state_45192__$1;
(statearr_45206_45232[(2)] = inst_45186);

(statearr_45206_45232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (10))){
var state_45192__$1 = state_45192;
var statearr_45207_45233 = state_45192__$1;
(statearr_45207_45233[(2)] = fc);

(statearr_45207_45233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45193 === (8))){
var inst_45181 = (state_45192[(2)]);
var state_45192__$1 = state_45192;
if(cljs.core.truth_(inst_45181)){
var statearr_45208_45234 = state_45192__$1;
(statearr_45208_45234[(1)] = (12));

} else {
var statearr_45209_45235 = state_45192__$1;
(statearr_45209_45235[(1)] = (13));

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
});})(c__37632__auto___45221,tc,fc))
;
return ((function (switch__37611__auto__,c__37632__auto___45221,tc,fc){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_45213 = [null,null,null,null,null,null,null,null,null];
(statearr_45213[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_45213[(1)] = (1));

return statearr_45213;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_45192){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45214){if((e45214 instanceof Object)){
var ex__37615__auto__ = e45214;
var statearr_45215_45236 = state_45192;
(statearr_45215_45236[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45237 = state_45192;
state_45192 = G__45237;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_45192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_45192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___45221,tc,fc))
})();
var state__37634__auto__ = (function (){var statearr_45216 = f__37633__auto__.call(null);
(statearr_45216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45221);

return statearr_45216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___45221,tc,fc))
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
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_45301){
var state_val_45302 = (state_45301[(1)]);
if((state_val_45302 === (7))){
var inst_45297 = (state_45301[(2)]);
var state_45301__$1 = state_45301;
var statearr_45303_45324 = state_45301__$1;
(statearr_45303_45324[(2)] = inst_45297);

(statearr_45303_45324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (1))){
var inst_45281 = init;
var state_45301__$1 = (function (){var statearr_45304 = state_45301;
(statearr_45304[(7)] = inst_45281);

return statearr_45304;
})();
var statearr_45305_45325 = state_45301__$1;
(statearr_45305_45325[(2)] = null);

(statearr_45305_45325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (4))){
var inst_45284 = (state_45301[(8)]);
var inst_45284__$1 = (state_45301[(2)]);
var inst_45285 = (inst_45284__$1 == null);
var state_45301__$1 = (function (){var statearr_45306 = state_45301;
(statearr_45306[(8)] = inst_45284__$1);

return statearr_45306;
})();
if(cljs.core.truth_(inst_45285)){
var statearr_45307_45326 = state_45301__$1;
(statearr_45307_45326[(1)] = (5));

} else {
var statearr_45308_45327 = state_45301__$1;
(statearr_45308_45327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (6))){
var inst_45288 = (state_45301[(9)]);
var inst_45284 = (state_45301[(8)]);
var inst_45281 = (state_45301[(7)]);
var inst_45288__$1 = f.call(null,inst_45281,inst_45284);
var inst_45289 = cljs.core.reduced_QMARK_.call(null,inst_45288__$1);
var state_45301__$1 = (function (){var statearr_45309 = state_45301;
(statearr_45309[(9)] = inst_45288__$1);

return statearr_45309;
})();
if(inst_45289){
var statearr_45310_45328 = state_45301__$1;
(statearr_45310_45328[(1)] = (8));

} else {
var statearr_45311_45329 = state_45301__$1;
(statearr_45311_45329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (3))){
var inst_45299 = (state_45301[(2)]);
var state_45301__$1 = state_45301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45301__$1,inst_45299);
} else {
if((state_val_45302 === (2))){
var state_45301__$1 = state_45301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45301__$1,(4),ch);
} else {
if((state_val_45302 === (9))){
var inst_45288 = (state_45301[(9)]);
var inst_45281 = inst_45288;
var state_45301__$1 = (function (){var statearr_45312 = state_45301;
(statearr_45312[(7)] = inst_45281);

return statearr_45312;
})();
var statearr_45313_45330 = state_45301__$1;
(statearr_45313_45330[(2)] = null);

(statearr_45313_45330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (5))){
var inst_45281 = (state_45301[(7)]);
var state_45301__$1 = state_45301;
var statearr_45314_45331 = state_45301__$1;
(statearr_45314_45331[(2)] = inst_45281);

(statearr_45314_45331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (10))){
var inst_45295 = (state_45301[(2)]);
var state_45301__$1 = state_45301;
var statearr_45315_45332 = state_45301__$1;
(statearr_45315_45332[(2)] = inst_45295);

(statearr_45315_45332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45302 === (8))){
var inst_45288 = (state_45301[(9)]);
var inst_45291 = cljs.core.deref.call(null,inst_45288);
var state_45301__$1 = state_45301;
var statearr_45316_45333 = state_45301__$1;
(statearr_45316_45333[(2)] = inst_45291);

(statearr_45316_45333[(1)] = (10));


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
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37612__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37612__auto____0 = (function (){
var statearr_45320 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45320[(0)] = cljs$core$async$reduce_$_state_machine__37612__auto__);

(statearr_45320[(1)] = (1));

return statearr_45320;
});
var cljs$core$async$reduce_$_state_machine__37612__auto____1 = (function (state_45301){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45321){if((e45321 instanceof Object)){
var ex__37615__auto__ = e45321;
var statearr_45322_45334 = state_45301;
(statearr_45322_45334[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45335 = state_45301;
state_45301 = G__45335;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37612__auto__ = function(state_45301){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37612__auto____1.call(this,state_45301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37612__auto____0;
cljs$core$async$reduce_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37612__auto____1;
return cljs$core$async$reduce_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_45323 = f__37633__auto__.call(null);
(statearr_45323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_45323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
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
var args45336 = [];
var len__36574__auto___45388 = arguments.length;
var i__36575__auto___45389 = (0);
while(true){
if((i__36575__auto___45389 < len__36574__auto___45388)){
args45336.push((arguments[i__36575__auto___45389]));

var G__45390 = (i__36575__auto___45389 + (1));
i__36575__auto___45389 = G__45390;
continue;
} else {
}
break;
}

var G__45338 = args45336.length;
switch (G__45338) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45336.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_45363){
var state_val_45364 = (state_45363[(1)]);
if((state_val_45364 === (7))){
var inst_45345 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
var statearr_45365_45392 = state_45363__$1;
(statearr_45365_45392[(2)] = inst_45345);

(statearr_45365_45392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (1))){
var inst_45339 = cljs.core.seq.call(null,coll);
var inst_45340 = inst_45339;
var state_45363__$1 = (function (){var statearr_45366 = state_45363;
(statearr_45366[(7)] = inst_45340);

return statearr_45366;
})();
var statearr_45367_45393 = state_45363__$1;
(statearr_45367_45393[(2)] = null);

(statearr_45367_45393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (4))){
var inst_45340 = (state_45363[(7)]);
var inst_45343 = cljs.core.first.call(null,inst_45340);
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45363__$1,(7),ch,inst_45343);
} else {
if((state_val_45364 === (13))){
var inst_45357 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
var statearr_45368_45394 = state_45363__$1;
(statearr_45368_45394[(2)] = inst_45357);

(statearr_45368_45394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (6))){
var inst_45348 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
if(cljs.core.truth_(inst_45348)){
var statearr_45369_45395 = state_45363__$1;
(statearr_45369_45395[(1)] = (8));

} else {
var statearr_45370_45396 = state_45363__$1;
(statearr_45370_45396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (3))){
var inst_45361 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45363__$1,inst_45361);
} else {
if((state_val_45364 === (12))){
var state_45363__$1 = state_45363;
var statearr_45371_45397 = state_45363__$1;
(statearr_45371_45397[(2)] = null);

(statearr_45371_45397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (2))){
var inst_45340 = (state_45363[(7)]);
var state_45363__$1 = state_45363;
if(cljs.core.truth_(inst_45340)){
var statearr_45372_45398 = state_45363__$1;
(statearr_45372_45398[(1)] = (4));

} else {
var statearr_45373_45399 = state_45363__$1;
(statearr_45373_45399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (11))){
var inst_45354 = cljs.core.async.close_BANG_.call(null,ch);
var state_45363__$1 = state_45363;
var statearr_45374_45400 = state_45363__$1;
(statearr_45374_45400[(2)] = inst_45354);

(statearr_45374_45400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (9))){
var state_45363__$1 = state_45363;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45375_45401 = state_45363__$1;
(statearr_45375_45401[(1)] = (11));

} else {
var statearr_45376_45402 = state_45363__$1;
(statearr_45376_45402[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (5))){
var inst_45340 = (state_45363[(7)]);
var state_45363__$1 = state_45363;
var statearr_45377_45403 = state_45363__$1;
(statearr_45377_45403[(2)] = inst_45340);

(statearr_45377_45403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (10))){
var inst_45359 = (state_45363[(2)]);
var state_45363__$1 = state_45363;
var statearr_45378_45404 = state_45363__$1;
(statearr_45378_45404[(2)] = inst_45359);

(statearr_45378_45404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45364 === (8))){
var inst_45340 = (state_45363[(7)]);
var inst_45350 = cljs.core.next.call(null,inst_45340);
var inst_45340__$1 = inst_45350;
var state_45363__$1 = (function (){var statearr_45379 = state_45363;
(statearr_45379[(7)] = inst_45340__$1);

return statearr_45379;
})();
var statearr_45380_45405 = state_45363__$1;
(statearr_45380_45405[(2)] = null);

(statearr_45380_45405[(1)] = (2));


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
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_45384 = [null,null,null,null,null,null,null,null];
(statearr_45384[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_45384[(1)] = (1));

return statearr_45384;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_45363){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45385){if((e45385 instanceof Object)){
var ex__37615__auto__ = e45385;
var statearr_45386_45406 = state_45363;
(statearr_45386_45406[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45407 = state_45363;
state_45363 = G__45407;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_45363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_45363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_45387 = f__37633__auto__.call(null);
(statearr_45387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_45387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
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
var x__36171__auto__ = (((_ == null))?null:_);
var m__36172__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,_);
} else {
var m__36172__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,_);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36172__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,ch);
} else {
var m__36172__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,ch);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m);
} else {
var m__36172__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async45629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45629 = (function (mult,ch,cs,meta45630){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45630 = meta45630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45631,meta45630__$1){
var self__ = this;
var _45631__$1 = this;
return (new cljs.core.async.t_cljs$core$async45629(self__.mult,self__.ch,self__.cs,meta45630__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45631){
var self__ = this;
var _45631__$1 = this;
return self__.meta45630;
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45630","meta45630",598116663,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45629";

cljs.core.async.t_cljs$core$async45629.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async45629");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45629 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45629(mult__$1,ch__$1,cs__$1,meta45630){
return (new cljs.core.async.t_cljs$core$async45629(mult__$1,ch__$1,cs__$1,meta45630));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45629(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37632__auto___45850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___45850,cs,m,dchan,dctr,done){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___45850,cs,m,dchan,dctr,done){
return (function (state_45762){
var state_val_45763 = (state_45762[(1)]);
if((state_val_45763 === (7))){
var inst_45758 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45764_45851 = state_45762__$1;
(statearr_45764_45851[(2)] = inst_45758);

(statearr_45764_45851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (20))){
var inst_45663 = (state_45762[(7)]);
var inst_45673 = cljs.core.first.call(null,inst_45663);
var inst_45674 = cljs.core.nth.call(null,inst_45673,(0),null);
var inst_45675 = cljs.core.nth.call(null,inst_45673,(1),null);
var state_45762__$1 = (function (){var statearr_45765 = state_45762;
(statearr_45765[(8)] = inst_45674);

return statearr_45765;
})();
if(cljs.core.truth_(inst_45675)){
var statearr_45766_45852 = state_45762__$1;
(statearr_45766_45852[(1)] = (22));

} else {
var statearr_45767_45853 = state_45762__$1;
(statearr_45767_45853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (27))){
var inst_45710 = (state_45762[(9)]);
var inst_45703 = (state_45762[(10)]);
var inst_45705 = (state_45762[(11)]);
var inst_45634 = (state_45762[(12)]);
var inst_45710__$1 = cljs.core._nth.call(null,inst_45703,inst_45705);
var inst_45711 = cljs.core.async.put_BANG_.call(null,inst_45710__$1,inst_45634,done);
var state_45762__$1 = (function (){var statearr_45768 = state_45762;
(statearr_45768[(9)] = inst_45710__$1);

return statearr_45768;
})();
if(cljs.core.truth_(inst_45711)){
var statearr_45769_45854 = state_45762__$1;
(statearr_45769_45854[(1)] = (30));

} else {
var statearr_45770_45855 = state_45762__$1;
(statearr_45770_45855[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (1))){
var state_45762__$1 = state_45762;
var statearr_45771_45856 = state_45762__$1;
(statearr_45771_45856[(2)] = null);

(statearr_45771_45856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (24))){
var inst_45663 = (state_45762[(7)]);
var inst_45680 = (state_45762[(2)]);
var inst_45681 = cljs.core.next.call(null,inst_45663);
var inst_45643 = inst_45681;
var inst_45644 = null;
var inst_45645 = (0);
var inst_45646 = (0);
var state_45762__$1 = (function (){var statearr_45772 = state_45762;
(statearr_45772[(13)] = inst_45643);

(statearr_45772[(14)] = inst_45645);

(statearr_45772[(15)] = inst_45644);

(statearr_45772[(16)] = inst_45680);

(statearr_45772[(17)] = inst_45646);

return statearr_45772;
})();
var statearr_45773_45857 = state_45762__$1;
(statearr_45773_45857[(2)] = null);

(statearr_45773_45857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (39))){
var state_45762__$1 = state_45762;
var statearr_45777_45858 = state_45762__$1;
(statearr_45777_45858[(2)] = null);

(statearr_45777_45858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (4))){
var inst_45634 = (state_45762[(12)]);
var inst_45634__$1 = (state_45762[(2)]);
var inst_45635 = (inst_45634__$1 == null);
var state_45762__$1 = (function (){var statearr_45778 = state_45762;
(statearr_45778[(12)] = inst_45634__$1);

return statearr_45778;
})();
if(cljs.core.truth_(inst_45635)){
var statearr_45779_45859 = state_45762__$1;
(statearr_45779_45859[(1)] = (5));

} else {
var statearr_45780_45860 = state_45762__$1;
(statearr_45780_45860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (15))){
var inst_45643 = (state_45762[(13)]);
var inst_45645 = (state_45762[(14)]);
var inst_45644 = (state_45762[(15)]);
var inst_45646 = (state_45762[(17)]);
var inst_45659 = (state_45762[(2)]);
var inst_45660 = (inst_45646 + (1));
var tmp45774 = inst_45643;
var tmp45775 = inst_45645;
var tmp45776 = inst_45644;
var inst_45643__$1 = tmp45774;
var inst_45644__$1 = tmp45776;
var inst_45645__$1 = tmp45775;
var inst_45646__$1 = inst_45660;
var state_45762__$1 = (function (){var statearr_45781 = state_45762;
(statearr_45781[(13)] = inst_45643__$1);

(statearr_45781[(14)] = inst_45645__$1);

(statearr_45781[(15)] = inst_45644__$1);

(statearr_45781[(17)] = inst_45646__$1);

(statearr_45781[(18)] = inst_45659);

return statearr_45781;
})();
var statearr_45782_45861 = state_45762__$1;
(statearr_45782_45861[(2)] = null);

(statearr_45782_45861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (21))){
var inst_45684 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45786_45862 = state_45762__$1;
(statearr_45786_45862[(2)] = inst_45684);

(statearr_45786_45862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (31))){
var inst_45710 = (state_45762[(9)]);
var inst_45714 = done.call(null,null);
var inst_45715 = cljs.core.async.untap_STAR_.call(null,m,inst_45710);
var state_45762__$1 = (function (){var statearr_45787 = state_45762;
(statearr_45787[(19)] = inst_45714);

return statearr_45787;
})();
var statearr_45788_45863 = state_45762__$1;
(statearr_45788_45863[(2)] = inst_45715);

(statearr_45788_45863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (32))){
var inst_45704 = (state_45762[(20)]);
var inst_45703 = (state_45762[(10)]);
var inst_45705 = (state_45762[(11)]);
var inst_45702 = (state_45762[(21)]);
var inst_45717 = (state_45762[(2)]);
var inst_45718 = (inst_45705 + (1));
var tmp45783 = inst_45704;
var tmp45784 = inst_45703;
var tmp45785 = inst_45702;
var inst_45702__$1 = tmp45785;
var inst_45703__$1 = tmp45784;
var inst_45704__$1 = tmp45783;
var inst_45705__$1 = inst_45718;
var state_45762__$1 = (function (){var statearr_45789 = state_45762;
(statearr_45789[(20)] = inst_45704__$1);

(statearr_45789[(10)] = inst_45703__$1);

(statearr_45789[(11)] = inst_45705__$1);

(statearr_45789[(21)] = inst_45702__$1);

(statearr_45789[(22)] = inst_45717);

return statearr_45789;
})();
var statearr_45790_45864 = state_45762__$1;
(statearr_45790_45864[(2)] = null);

(statearr_45790_45864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (40))){
var inst_45730 = (state_45762[(23)]);
var inst_45734 = done.call(null,null);
var inst_45735 = cljs.core.async.untap_STAR_.call(null,m,inst_45730);
var state_45762__$1 = (function (){var statearr_45791 = state_45762;
(statearr_45791[(24)] = inst_45734);

return statearr_45791;
})();
var statearr_45792_45865 = state_45762__$1;
(statearr_45792_45865[(2)] = inst_45735);

(statearr_45792_45865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (33))){
var inst_45721 = (state_45762[(25)]);
var inst_45723 = cljs.core.chunked_seq_QMARK_.call(null,inst_45721);
var state_45762__$1 = state_45762;
if(inst_45723){
var statearr_45793_45866 = state_45762__$1;
(statearr_45793_45866[(1)] = (36));

} else {
var statearr_45794_45867 = state_45762__$1;
(statearr_45794_45867[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (13))){
var inst_45653 = (state_45762[(26)]);
var inst_45656 = cljs.core.async.close_BANG_.call(null,inst_45653);
var state_45762__$1 = state_45762;
var statearr_45795_45868 = state_45762__$1;
(statearr_45795_45868[(2)] = inst_45656);

(statearr_45795_45868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (22))){
var inst_45674 = (state_45762[(8)]);
var inst_45677 = cljs.core.async.close_BANG_.call(null,inst_45674);
var state_45762__$1 = state_45762;
var statearr_45796_45869 = state_45762__$1;
(statearr_45796_45869[(2)] = inst_45677);

(statearr_45796_45869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (36))){
var inst_45721 = (state_45762[(25)]);
var inst_45725 = cljs.core.chunk_first.call(null,inst_45721);
var inst_45726 = cljs.core.chunk_rest.call(null,inst_45721);
var inst_45727 = cljs.core.count.call(null,inst_45725);
var inst_45702 = inst_45726;
var inst_45703 = inst_45725;
var inst_45704 = inst_45727;
var inst_45705 = (0);
var state_45762__$1 = (function (){var statearr_45797 = state_45762;
(statearr_45797[(20)] = inst_45704);

(statearr_45797[(10)] = inst_45703);

(statearr_45797[(11)] = inst_45705);

(statearr_45797[(21)] = inst_45702);

return statearr_45797;
})();
var statearr_45798_45870 = state_45762__$1;
(statearr_45798_45870[(2)] = null);

(statearr_45798_45870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (41))){
var inst_45721 = (state_45762[(25)]);
var inst_45737 = (state_45762[(2)]);
var inst_45738 = cljs.core.next.call(null,inst_45721);
var inst_45702 = inst_45738;
var inst_45703 = null;
var inst_45704 = (0);
var inst_45705 = (0);
var state_45762__$1 = (function (){var statearr_45799 = state_45762;
(statearr_45799[(20)] = inst_45704);

(statearr_45799[(10)] = inst_45703);

(statearr_45799[(11)] = inst_45705);

(statearr_45799[(27)] = inst_45737);

(statearr_45799[(21)] = inst_45702);

return statearr_45799;
})();
var statearr_45800_45871 = state_45762__$1;
(statearr_45800_45871[(2)] = null);

(statearr_45800_45871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (43))){
var state_45762__$1 = state_45762;
var statearr_45801_45872 = state_45762__$1;
(statearr_45801_45872[(2)] = null);

(statearr_45801_45872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (29))){
var inst_45746 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45802_45873 = state_45762__$1;
(statearr_45802_45873[(2)] = inst_45746);

(statearr_45802_45873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (44))){
var inst_45755 = (state_45762[(2)]);
var state_45762__$1 = (function (){var statearr_45803 = state_45762;
(statearr_45803[(28)] = inst_45755);

return statearr_45803;
})();
var statearr_45804_45874 = state_45762__$1;
(statearr_45804_45874[(2)] = null);

(statearr_45804_45874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (6))){
var inst_45694 = (state_45762[(29)]);
var inst_45693 = cljs.core.deref.call(null,cs);
var inst_45694__$1 = cljs.core.keys.call(null,inst_45693);
var inst_45695 = cljs.core.count.call(null,inst_45694__$1);
var inst_45696 = cljs.core.reset_BANG_.call(null,dctr,inst_45695);
var inst_45701 = cljs.core.seq.call(null,inst_45694__$1);
var inst_45702 = inst_45701;
var inst_45703 = null;
var inst_45704 = (0);
var inst_45705 = (0);
var state_45762__$1 = (function (){var statearr_45805 = state_45762;
(statearr_45805[(29)] = inst_45694__$1);

(statearr_45805[(20)] = inst_45704);

(statearr_45805[(10)] = inst_45703);

(statearr_45805[(11)] = inst_45705);

(statearr_45805[(30)] = inst_45696);

(statearr_45805[(21)] = inst_45702);

return statearr_45805;
})();
var statearr_45806_45875 = state_45762__$1;
(statearr_45806_45875[(2)] = null);

(statearr_45806_45875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (28))){
var inst_45721 = (state_45762[(25)]);
var inst_45702 = (state_45762[(21)]);
var inst_45721__$1 = cljs.core.seq.call(null,inst_45702);
var state_45762__$1 = (function (){var statearr_45807 = state_45762;
(statearr_45807[(25)] = inst_45721__$1);

return statearr_45807;
})();
if(inst_45721__$1){
var statearr_45808_45876 = state_45762__$1;
(statearr_45808_45876[(1)] = (33));

} else {
var statearr_45809_45877 = state_45762__$1;
(statearr_45809_45877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (25))){
var inst_45704 = (state_45762[(20)]);
var inst_45705 = (state_45762[(11)]);
var inst_45707 = (inst_45705 < inst_45704);
var inst_45708 = inst_45707;
var state_45762__$1 = state_45762;
if(cljs.core.truth_(inst_45708)){
var statearr_45810_45878 = state_45762__$1;
(statearr_45810_45878[(1)] = (27));

} else {
var statearr_45811_45879 = state_45762__$1;
(statearr_45811_45879[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (34))){
var state_45762__$1 = state_45762;
var statearr_45812_45880 = state_45762__$1;
(statearr_45812_45880[(2)] = null);

(statearr_45812_45880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (17))){
var state_45762__$1 = state_45762;
var statearr_45813_45881 = state_45762__$1;
(statearr_45813_45881[(2)] = null);

(statearr_45813_45881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (3))){
var inst_45760 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45762__$1,inst_45760);
} else {
if((state_val_45763 === (12))){
var inst_45689 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45814_45882 = state_45762__$1;
(statearr_45814_45882[(2)] = inst_45689);

(statearr_45814_45882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (2))){
var state_45762__$1 = state_45762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45762__$1,(4),ch);
} else {
if((state_val_45763 === (23))){
var state_45762__$1 = state_45762;
var statearr_45815_45883 = state_45762__$1;
(statearr_45815_45883[(2)] = null);

(statearr_45815_45883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (35))){
var inst_45744 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45816_45884 = state_45762__$1;
(statearr_45816_45884[(2)] = inst_45744);

(statearr_45816_45884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (19))){
var inst_45663 = (state_45762[(7)]);
var inst_45667 = cljs.core.chunk_first.call(null,inst_45663);
var inst_45668 = cljs.core.chunk_rest.call(null,inst_45663);
var inst_45669 = cljs.core.count.call(null,inst_45667);
var inst_45643 = inst_45668;
var inst_45644 = inst_45667;
var inst_45645 = inst_45669;
var inst_45646 = (0);
var state_45762__$1 = (function (){var statearr_45817 = state_45762;
(statearr_45817[(13)] = inst_45643);

(statearr_45817[(14)] = inst_45645);

(statearr_45817[(15)] = inst_45644);

(statearr_45817[(17)] = inst_45646);

return statearr_45817;
})();
var statearr_45818_45885 = state_45762__$1;
(statearr_45818_45885[(2)] = null);

(statearr_45818_45885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (11))){
var inst_45663 = (state_45762[(7)]);
var inst_45643 = (state_45762[(13)]);
var inst_45663__$1 = cljs.core.seq.call(null,inst_45643);
var state_45762__$1 = (function (){var statearr_45819 = state_45762;
(statearr_45819[(7)] = inst_45663__$1);

return statearr_45819;
})();
if(inst_45663__$1){
var statearr_45820_45886 = state_45762__$1;
(statearr_45820_45886[(1)] = (16));

} else {
var statearr_45821_45887 = state_45762__$1;
(statearr_45821_45887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (9))){
var inst_45691 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45822_45888 = state_45762__$1;
(statearr_45822_45888[(2)] = inst_45691);

(statearr_45822_45888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (5))){
var inst_45641 = cljs.core.deref.call(null,cs);
var inst_45642 = cljs.core.seq.call(null,inst_45641);
var inst_45643 = inst_45642;
var inst_45644 = null;
var inst_45645 = (0);
var inst_45646 = (0);
var state_45762__$1 = (function (){var statearr_45823 = state_45762;
(statearr_45823[(13)] = inst_45643);

(statearr_45823[(14)] = inst_45645);

(statearr_45823[(15)] = inst_45644);

(statearr_45823[(17)] = inst_45646);

return statearr_45823;
})();
var statearr_45824_45889 = state_45762__$1;
(statearr_45824_45889[(2)] = null);

(statearr_45824_45889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (14))){
var state_45762__$1 = state_45762;
var statearr_45825_45890 = state_45762__$1;
(statearr_45825_45890[(2)] = null);

(statearr_45825_45890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (45))){
var inst_45752 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45826_45891 = state_45762__$1;
(statearr_45826_45891[(2)] = inst_45752);

(statearr_45826_45891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (26))){
var inst_45694 = (state_45762[(29)]);
var inst_45748 = (state_45762[(2)]);
var inst_45749 = cljs.core.seq.call(null,inst_45694);
var state_45762__$1 = (function (){var statearr_45827 = state_45762;
(statearr_45827[(31)] = inst_45748);

return statearr_45827;
})();
if(inst_45749){
var statearr_45828_45892 = state_45762__$1;
(statearr_45828_45892[(1)] = (42));

} else {
var statearr_45829_45893 = state_45762__$1;
(statearr_45829_45893[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (16))){
var inst_45663 = (state_45762[(7)]);
var inst_45665 = cljs.core.chunked_seq_QMARK_.call(null,inst_45663);
var state_45762__$1 = state_45762;
if(inst_45665){
var statearr_45830_45894 = state_45762__$1;
(statearr_45830_45894[(1)] = (19));

} else {
var statearr_45831_45895 = state_45762__$1;
(statearr_45831_45895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (38))){
var inst_45741 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45832_45896 = state_45762__$1;
(statearr_45832_45896[(2)] = inst_45741);

(statearr_45832_45896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (30))){
var state_45762__$1 = state_45762;
var statearr_45833_45897 = state_45762__$1;
(statearr_45833_45897[(2)] = null);

(statearr_45833_45897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (10))){
var inst_45644 = (state_45762[(15)]);
var inst_45646 = (state_45762[(17)]);
var inst_45652 = cljs.core._nth.call(null,inst_45644,inst_45646);
var inst_45653 = cljs.core.nth.call(null,inst_45652,(0),null);
var inst_45654 = cljs.core.nth.call(null,inst_45652,(1),null);
var state_45762__$1 = (function (){var statearr_45834 = state_45762;
(statearr_45834[(26)] = inst_45653);

return statearr_45834;
})();
if(cljs.core.truth_(inst_45654)){
var statearr_45835_45898 = state_45762__$1;
(statearr_45835_45898[(1)] = (13));

} else {
var statearr_45836_45899 = state_45762__$1;
(statearr_45836_45899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (18))){
var inst_45687 = (state_45762[(2)]);
var state_45762__$1 = state_45762;
var statearr_45837_45900 = state_45762__$1;
(statearr_45837_45900[(2)] = inst_45687);

(statearr_45837_45900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (42))){
var state_45762__$1 = state_45762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45762__$1,(45),dchan);
} else {
if((state_val_45763 === (37))){
var inst_45721 = (state_45762[(25)]);
var inst_45730 = (state_45762[(23)]);
var inst_45634 = (state_45762[(12)]);
var inst_45730__$1 = cljs.core.first.call(null,inst_45721);
var inst_45731 = cljs.core.async.put_BANG_.call(null,inst_45730__$1,inst_45634,done);
var state_45762__$1 = (function (){var statearr_45838 = state_45762;
(statearr_45838[(23)] = inst_45730__$1);

return statearr_45838;
})();
if(cljs.core.truth_(inst_45731)){
var statearr_45839_45901 = state_45762__$1;
(statearr_45839_45901[(1)] = (39));

} else {
var statearr_45840_45902 = state_45762__$1;
(statearr_45840_45902[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45763 === (8))){
var inst_45645 = (state_45762[(14)]);
var inst_45646 = (state_45762[(17)]);
var inst_45648 = (inst_45646 < inst_45645);
var inst_45649 = inst_45648;
var state_45762__$1 = state_45762;
if(cljs.core.truth_(inst_45649)){
var statearr_45841_45903 = state_45762__$1;
(statearr_45841_45903[(1)] = (10));

} else {
var statearr_45842_45904 = state_45762__$1;
(statearr_45842_45904[(1)] = (11));

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
});})(c__37632__auto___45850,cs,m,dchan,dctr,done))
;
return ((function (switch__37611__auto__,c__37632__auto___45850,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37612__auto__ = null;
var cljs$core$async$mult_$_state_machine__37612__auto____0 = (function (){
var statearr_45846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45846[(0)] = cljs$core$async$mult_$_state_machine__37612__auto__);

(statearr_45846[(1)] = (1));

return statearr_45846;
});
var cljs$core$async$mult_$_state_machine__37612__auto____1 = (function (state_45762){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_45762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e45847){if((e45847 instanceof Object)){
var ex__37615__auto__ = e45847;
var statearr_45848_45905 = state_45762;
(statearr_45848_45905[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45906 = state_45762;
state_45762 = G__45906;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37612__auto__ = function(state_45762){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37612__auto____1.call(this,state_45762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37612__auto____0;
cljs$core$async$mult_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37612__auto____1;
return cljs$core$async$mult_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___45850,cs,m,dchan,dctr,done))
})();
var state__37634__auto__ = (function (){var statearr_45849 = f__37633__auto__.call(null);
(statearr_45849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___45850);

return statearr_45849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___45850,cs,m,dchan,dctr,done))
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
var args45907 = [];
var len__36574__auto___45910 = arguments.length;
var i__36575__auto___45911 = (0);
while(true){
if((i__36575__auto___45911 < len__36574__auto___45910)){
args45907.push((arguments[i__36575__auto___45911]));

var G__45912 = (i__36575__auto___45911 + (1));
i__36575__auto___45911 = G__45912;
continue;
} else {
}
break;
}

var G__45909 = args45907.length;
switch (G__45909) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45907.length)].join('')));

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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,ch);
} else {
var m__36172__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,ch);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,ch);
} else {
var m__36172__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,ch);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m);
} else {
var m__36172__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,state_map);
} else {
var m__36172__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,state_map);
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
var x__36171__auto__ = (((m == null))?null:m);
var m__36172__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,m,mode);
} else {
var m__36172__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36581__auto__ = [];
var len__36574__auto___45924 = arguments.length;
var i__36575__auto___45925 = (0);
while(true){
if((i__36575__auto___45925 < len__36574__auto___45924)){
args__36581__auto__.push((arguments[i__36575__auto___45925]));

var G__45926 = (i__36575__auto___45925 + (1));
i__36575__auto___45925 = G__45926;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((3) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36582__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45918){
var map__45919 = p__45918;
var map__45919__$1 = ((((!((map__45919 == null)))?((((map__45919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45919):map__45919);
var opts = map__45919__$1;
var statearr_45921_45927 = state;
(statearr_45921_45927[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__45919,map__45919__$1,opts){
return (function (val){
var statearr_45922_45928 = state;
(statearr_45922_45928[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45919,map__45919__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_45923_45929 = state;
(statearr_45923_45929[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45914){
var G__45915 = cljs.core.first.call(null,seq45914);
var seq45914__$1 = cljs.core.next.call(null,seq45914);
var G__45916 = cljs.core.first.call(null,seq45914__$1);
var seq45914__$2 = cljs.core.next.call(null,seq45914__$1);
var G__45917 = cljs.core.first.call(null,seq45914__$2);
var seq45914__$3 = cljs.core.next.call(null,seq45914__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45915,G__45916,G__45917,seq45914__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46093 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46094){
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
this.meta46094 = meta46094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46095,meta46094__$1){
var self__ = this;
var _46095__$1 = this;
return (new cljs.core.async.t_cljs$core$async46093(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46094__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46095){
var self__ = this;
var _46095__$1 = this;
return self__.meta46094;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46093.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46094","meta46094",1820740390,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46093";

cljs.core.async.t_cljs$core$async46093.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46093");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46093 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46093(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46094){
return (new cljs.core.async.t_cljs$core$async46093(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46094));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46093(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37632__auto___46256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46193){
var state_val_46194 = (state_46193[(1)]);
if((state_val_46194 === (7))){
var inst_46111 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
var statearr_46195_46257 = state_46193__$1;
(statearr_46195_46257[(2)] = inst_46111);

(statearr_46195_46257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (20))){
var inst_46123 = (state_46193[(7)]);
var state_46193__$1 = state_46193;
var statearr_46196_46258 = state_46193__$1;
(statearr_46196_46258[(2)] = inst_46123);

(statearr_46196_46258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (27))){
var state_46193__$1 = state_46193;
var statearr_46197_46259 = state_46193__$1;
(statearr_46197_46259[(2)] = null);

(statearr_46197_46259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (1))){
var inst_46099 = (state_46193[(8)]);
var inst_46099__$1 = calc_state.call(null);
var inst_46101 = (inst_46099__$1 == null);
var inst_46102 = cljs.core.not.call(null,inst_46101);
var state_46193__$1 = (function (){var statearr_46198 = state_46193;
(statearr_46198[(8)] = inst_46099__$1);

return statearr_46198;
})();
if(inst_46102){
var statearr_46199_46260 = state_46193__$1;
(statearr_46199_46260[(1)] = (2));

} else {
var statearr_46200_46261 = state_46193__$1;
(statearr_46200_46261[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (24))){
var inst_46153 = (state_46193[(9)]);
var inst_46146 = (state_46193[(10)]);
var inst_46167 = (state_46193[(11)]);
var inst_46167__$1 = inst_46146.call(null,inst_46153);
var state_46193__$1 = (function (){var statearr_46201 = state_46193;
(statearr_46201[(11)] = inst_46167__$1);

return statearr_46201;
})();
if(cljs.core.truth_(inst_46167__$1)){
var statearr_46202_46262 = state_46193__$1;
(statearr_46202_46262[(1)] = (29));

} else {
var statearr_46203_46263 = state_46193__$1;
(statearr_46203_46263[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (4))){
var inst_46114 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46114)){
var statearr_46204_46264 = state_46193__$1;
(statearr_46204_46264[(1)] = (8));

} else {
var statearr_46205_46265 = state_46193__$1;
(statearr_46205_46265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (15))){
var inst_46140 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46140)){
var statearr_46206_46266 = state_46193__$1;
(statearr_46206_46266[(1)] = (19));

} else {
var statearr_46207_46267 = state_46193__$1;
(statearr_46207_46267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (21))){
var inst_46145 = (state_46193[(12)]);
var inst_46145__$1 = (state_46193[(2)]);
var inst_46146 = cljs.core.get.call(null,inst_46145__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46147 = cljs.core.get.call(null,inst_46145__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46148 = cljs.core.get.call(null,inst_46145__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46193__$1 = (function (){var statearr_46208 = state_46193;
(statearr_46208[(12)] = inst_46145__$1);

(statearr_46208[(10)] = inst_46146);

(statearr_46208[(13)] = inst_46147);

return statearr_46208;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46193__$1,(22),inst_46148);
} else {
if((state_val_46194 === (31))){
var inst_46175 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46175)){
var statearr_46209_46268 = state_46193__$1;
(statearr_46209_46268[(1)] = (32));

} else {
var statearr_46210_46269 = state_46193__$1;
(statearr_46210_46269[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (32))){
var inst_46152 = (state_46193[(14)]);
var state_46193__$1 = state_46193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46193__$1,(35),out,inst_46152);
} else {
if((state_val_46194 === (33))){
var inst_46145 = (state_46193[(12)]);
var inst_46123 = inst_46145;
var state_46193__$1 = (function (){var statearr_46211 = state_46193;
(statearr_46211[(7)] = inst_46123);

return statearr_46211;
})();
var statearr_46212_46270 = state_46193__$1;
(statearr_46212_46270[(2)] = null);

(statearr_46212_46270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (13))){
var inst_46123 = (state_46193[(7)]);
var inst_46130 = inst_46123.cljs$lang$protocol_mask$partition0$;
var inst_46131 = (inst_46130 & (64));
var inst_46132 = inst_46123.cljs$core$ISeq$;
var inst_46133 = (inst_46131) || (inst_46132);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46133)){
var statearr_46213_46271 = state_46193__$1;
(statearr_46213_46271[(1)] = (16));

} else {
var statearr_46214_46272 = state_46193__$1;
(statearr_46214_46272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (22))){
var inst_46153 = (state_46193[(9)]);
var inst_46152 = (state_46193[(14)]);
var inst_46151 = (state_46193[(2)]);
var inst_46152__$1 = cljs.core.nth.call(null,inst_46151,(0),null);
var inst_46153__$1 = cljs.core.nth.call(null,inst_46151,(1),null);
var inst_46154 = (inst_46152__$1 == null);
var inst_46155 = cljs.core._EQ_.call(null,inst_46153__$1,change);
var inst_46156 = (inst_46154) || (inst_46155);
var state_46193__$1 = (function (){var statearr_46215 = state_46193;
(statearr_46215[(9)] = inst_46153__$1);

(statearr_46215[(14)] = inst_46152__$1);

return statearr_46215;
})();
if(cljs.core.truth_(inst_46156)){
var statearr_46216_46273 = state_46193__$1;
(statearr_46216_46273[(1)] = (23));

} else {
var statearr_46217_46274 = state_46193__$1;
(statearr_46217_46274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (36))){
var inst_46145 = (state_46193[(12)]);
var inst_46123 = inst_46145;
var state_46193__$1 = (function (){var statearr_46218 = state_46193;
(statearr_46218[(7)] = inst_46123);

return statearr_46218;
})();
var statearr_46219_46275 = state_46193__$1;
(statearr_46219_46275[(2)] = null);

(statearr_46219_46275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (29))){
var inst_46167 = (state_46193[(11)]);
var state_46193__$1 = state_46193;
var statearr_46220_46276 = state_46193__$1;
(statearr_46220_46276[(2)] = inst_46167);

(statearr_46220_46276[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (6))){
var state_46193__$1 = state_46193;
var statearr_46221_46277 = state_46193__$1;
(statearr_46221_46277[(2)] = false);

(statearr_46221_46277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (28))){
var inst_46163 = (state_46193[(2)]);
var inst_46164 = calc_state.call(null);
var inst_46123 = inst_46164;
var state_46193__$1 = (function (){var statearr_46222 = state_46193;
(statearr_46222[(15)] = inst_46163);

(statearr_46222[(7)] = inst_46123);

return statearr_46222;
})();
var statearr_46223_46278 = state_46193__$1;
(statearr_46223_46278[(2)] = null);

(statearr_46223_46278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (25))){
var inst_46189 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
var statearr_46224_46279 = state_46193__$1;
(statearr_46224_46279[(2)] = inst_46189);

(statearr_46224_46279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (34))){
var inst_46187 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
var statearr_46225_46280 = state_46193__$1;
(statearr_46225_46280[(2)] = inst_46187);

(statearr_46225_46280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (17))){
var state_46193__$1 = state_46193;
var statearr_46226_46281 = state_46193__$1;
(statearr_46226_46281[(2)] = false);

(statearr_46226_46281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (3))){
var state_46193__$1 = state_46193;
var statearr_46227_46282 = state_46193__$1;
(statearr_46227_46282[(2)] = false);

(statearr_46227_46282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (12))){
var inst_46191 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46193__$1,inst_46191);
} else {
if((state_val_46194 === (2))){
var inst_46099 = (state_46193[(8)]);
var inst_46104 = inst_46099.cljs$lang$protocol_mask$partition0$;
var inst_46105 = (inst_46104 & (64));
var inst_46106 = inst_46099.cljs$core$ISeq$;
var inst_46107 = (inst_46105) || (inst_46106);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46107)){
var statearr_46228_46283 = state_46193__$1;
(statearr_46228_46283[(1)] = (5));

} else {
var statearr_46229_46284 = state_46193__$1;
(statearr_46229_46284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (23))){
var inst_46152 = (state_46193[(14)]);
var inst_46158 = (inst_46152 == null);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46158)){
var statearr_46230_46285 = state_46193__$1;
(statearr_46230_46285[(1)] = (26));

} else {
var statearr_46231_46286 = state_46193__$1;
(statearr_46231_46286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (35))){
var inst_46178 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
if(cljs.core.truth_(inst_46178)){
var statearr_46232_46287 = state_46193__$1;
(statearr_46232_46287[(1)] = (36));

} else {
var statearr_46233_46288 = state_46193__$1;
(statearr_46233_46288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (19))){
var inst_46123 = (state_46193[(7)]);
var inst_46142 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46123);
var state_46193__$1 = state_46193;
var statearr_46234_46289 = state_46193__$1;
(statearr_46234_46289[(2)] = inst_46142);

(statearr_46234_46289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (11))){
var inst_46123 = (state_46193[(7)]);
var inst_46127 = (inst_46123 == null);
var inst_46128 = cljs.core.not.call(null,inst_46127);
var state_46193__$1 = state_46193;
if(inst_46128){
var statearr_46235_46290 = state_46193__$1;
(statearr_46235_46290[(1)] = (13));

} else {
var statearr_46236_46291 = state_46193__$1;
(statearr_46236_46291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (9))){
var inst_46099 = (state_46193[(8)]);
var state_46193__$1 = state_46193;
var statearr_46237_46292 = state_46193__$1;
(statearr_46237_46292[(2)] = inst_46099);

(statearr_46237_46292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (5))){
var state_46193__$1 = state_46193;
var statearr_46238_46293 = state_46193__$1;
(statearr_46238_46293[(2)] = true);

(statearr_46238_46293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (14))){
var state_46193__$1 = state_46193;
var statearr_46239_46294 = state_46193__$1;
(statearr_46239_46294[(2)] = false);

(statearr_46239_46294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (26))){
var inst_46153 = (state_46193[(9)]);
var inst_46160 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46153);
var state_46193__$1 = state_46193;
var statearr_46240_46295 = state_46193__$1;
(statearr_46240_46295[(2)] = inst_46160);

(statearr_46240_46295[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (16))){
var state_46193__$1 = state_46193;
var statearr_46241_46296 = state_46193__$1;
(statearr_46241_46296[(2)] = true);

(statearr_46241_46296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (38))){
var inst_46183 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
var statearr_46242_46297 = state_46193__$1;
(statearr_46242_46297[(2)] = inst_46183);

(statearr_46242_46297[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (30))){
var inst_46153 = (state_46193[(9)]);
var inst_46146 = (state_46193[(10)]);
var inst_46147 = (state_46193[(13)]);
var inst_46170 = cljs.core.empty_QMARK_.call(null,inst_46146);
var inst_46171 = inst_46147.call(null,inst_46153);
var inst_46172 = cljs.core.not.call(null,inst_46171);
var inst_46173 = (inst_46170) && (inst_46172);
var state_46193__$1 = state_46193;
var statearr_46243_46298 = state_46193__$1;
(statearr_46243_46298[(2)] = inst_46173);

(statearr_46243_46298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (10))){
var inst_46099 = (state_46193[(8)]);
var inst_46119 = (state_46193[(2)]);
var inst_46120 = cljs.core.get.call(null,inst_46119,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46121 = cljs.core.get.call(null,inst_46119,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46122 = cljs.core.get.call(null,inst_46119,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46123 = inst_46099;
var state_46193__$1 = (function (){var statearr_46244 = state_46193;
(statearr_46244[(16)] = inst_46120);

(statearr_46244[(17)] = inst_46121);

(statearr_46244[(7)] = inst_46123);

(statearr_46244[(18)] = inst_46122);

return statearr_46244;
})();
var statearr_46245_46299 = state_46193__$1;
(statearr_46245_46299[(2)] = null);

(statearr_46245_46299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (18))){
var inst_46137 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
var statearr_46246_46300 = state_46193__$1;
(statearr_46246_46300[(2)] = inst_46137);

(statearr_46246_46300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (37))){
var state_46193__$1 = state_46193;
var statearr_46247_46301 = state_46193__$1;
(statearr_46247_46301[(2)] = null);

(statearr_46247_46301[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (8))){
var inst_46099 = (state_46193[(8)]);
var inst_46116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46099);
var state_46193__$1 = state_46193;
var statearr_46248_46302 = state_46193__$1;
(statearr_46248_46302[(2)] = inst_46116);

(statearr_46248_46302[(1)] = (10));


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
});})(c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37611__auto__,c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37612__auto__ = null;
var cljs$core$async$mix_$_state_machine__37612__auto____0 = (function (){
var statearr_46252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46252[(0)] = cljs$core$async$mix_$_state_machine__37612__auto__);

(statearr_46252[(1)] = (1));

return statearr_46252;
});
var cljs$core$async$mix_$_state_machine__37612__auto____1 = (function (state_46193){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46253){if((e46253 instanceof Object)){
var ex__37615__auto__ = e46253;
var statearr_46254_46303 = state_46193;
(statearr_46254_46303[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46304 = state_46193;
state_46193 = G__46304;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37612__auto__ = function(state_46193){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37612__auto____1.call(this,state_46193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37612__auto____0;
cljs$core$async$mix_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37612__auto____1;
return cljs$core$async$mix_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37634__auto__ = (function (){var statearr_46255 = f__37633__auto__.call(null);
(statearr_46255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46256);

return statearr_46255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46256,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__36171__auto__ = (((p == null))?null:p);
var m__36172__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36172__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__36171__auto__ = (((p == null))?null:p);
var m__36172__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,p,v,ch);
} else {
var m__36172__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46305 = [];
var len__36574__auto___46308 = arguments.length;
var i__36575__auto___46309 = (0);
while(true){
if((i__36575__auto___46309 < len__36574__auto___46308)){
args46305.push((arguments[i__36575__auto___46309]));

var G__46310 = (i__36575__auto___46309 + (1));
i__36575__auto___46309 = G__46310;
continue;
} else {
}
break;
}

var G__46307 = args46305.length;
switch (G__46307) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46305.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36171__auto__ = (((p == null))?null:p);
var m__36172__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,p);
} else {
var m__36172__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,p);
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
var x__36171__auto__ = (((p == null))?null:p);
var m__36172__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36171__auto__)]);
if(!((m__36172__auto__ == null))){
return m__36172__auto__.call(null,p,v);
} else {
var m__36172__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36172__auto____$1 == null))){
return m__36172__auto____$1.call(null,p,v);
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
var args46313 = [];
var len__36574__auto___46438 = arguments.length;
var i__36575__auto___46439 = (0);
while(true){
if((i__36575__auto___46439 < len__36574__auto___46438)){
args46313.push((arguments[i__36575__auto___46439]));

var G__46440 = (i__36575__auto___46439 + (1));
i__36575__auto___46439 = G__46440;
continue;
} else {
}
break;
}

var G__46315 = args46313.length;
switch (G__46315) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46313.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35516__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35516__auto__,mults){
return (function (p1__46312_SHARP_){
if(cljs.core.truth_(p1__46312_SHARP_.call(null,topic))){
return p1__46312_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35516__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46316 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46317){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46317 = meta46317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46318,meta46317__$1){
var self__ = this;
var _46318__$1 = this;
return (new cljs.core.async.t_cljs$core$async46316(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46317__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46318){
var self__ = this;
var _46318__$1 = this;
return self__.meta46317;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46317","meta46317",1327070358,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46316";

cljs.core.async.t_cljs$core$async46316.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46316");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46316 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46317){
return (new cljs.core.async.t_cljs$core$async46316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46317));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46316(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37632__auto___46442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46442,mults,ensure_mult,p){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46442,mults,ensure_mult,p){
return (function (state_46390){
var state_val_46391 = (state_46390[(1)]);
if((state_val_46391 === (7))){
var inst_46386 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46392_46443 = state_46390__$1;
(statearr_46392_46443[(2)] = inst_46386);

(statearr_46392_46443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (20))){
var state_46390__$1 = state_46390;
var statearr_46393_46444 = state_46390__$1;
(statearr_46393_46444[(2)] = null);

(statearr_46393_46444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (1))){
var state_46390__$1 = state_46390;
var statearr_46394_46445 = state_46390__$1;
(statearr_46394_46445[(2)] = null);

(statearr_46394_46445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (24))){
var inst_46369 = (state_46390[(7)]);
var inst_46378 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46369);
var state_46390__$1 = state_46390;
var statearr_46395_46446 = state_46390__$1;
(statearr_46395_46446[(2)] = inst_46378);

(statearr_46395_46446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (4))){
var inst_46321 = (state_46390[(8)]);
var inst_46321__$1 = (state_46390[(2)]);
var inst_46322 = (inst_46321__$1 == null);
var state_46390__$1 = (function (){var statearr_46396 = state_46390;
(statearr_46396[(8)] = inst_46321__$1);

return statearr_46396;
})();
if(cljs.core.truth_(inst_46322)){
var statearr_46397_46447 = state_46390__$1;
(statearr_46397_46447[(1)] = (5));

} else {
var statearr_46398_46448 = state_46390__$1;
(statearr_46398_46448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (15))){
var inst_46363 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46399_46449 = state_46390__$1;
(statearr_46399_46449[(2)] = inst_46363);

(statearr_46399_46449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (21))){
var inst_46383 = (state_46390[(2)]);
var state_46390__$1 = (function (){var statearr_46400 = state_46390;
(statearr_46400[(9)] = inst_46383);

return statearr_46400;
})();
var statearr_46401_46450 = state_46390__$1;
(statearr_46401_46450[(2)] = null);

(statearr_46401_46450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (13))){
var inst_46345 = (state_46390[(10)]);
var inst_46347 = cljs.core.chunked_seq_QMARK_.call(null,inst_46345);
var state_46390__$1 = state_46390;
if(inst_46347){
var statearr_46402_46451 = state_46390__$1;
(statearr_46402_46451[(1)] = (16));

} else {
var statearr_46403_46452 = state_46390__$1;
(statearr_46403_46452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (22))){
var inst_46375 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
if(cljs.core.truth_(inst_46375)){
var statearr_46404_46453 = state_46390__$1;
(statearr_46404_46453[(1)] = (23));

} else {
var statearr_46405_46454 = state_46390__$1;
(statearr_46405_46454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (6))){
var inst_46321 = (state_46390[(8)]);
var inst_46371 = (state_46390[(11)]);
var inst_46369 = (state_46390[(7)]);
var inst_46369__$1 = topic_fn.call(null,inst_46321);
var inst_46370 = cljs.core.deref.call(null,mults);
var inst_46371__$1 = cljs.core.get.call(null,inst_46370,inst_46369__$1);
var state_46390__$1 = (function (){var statearr_46406 = state_46390;
(statearr_46406[(11)] = inst_46371__$1);

(statearr_46406[(7)] = inst_46369__$1);

return statearr_46406;
})();
if(cljs.core.truth_(inst_46371__$1)){
var statearr_46407_46455 = state_46390__$1;
(statearr_46407_46455[(1)] = (19));

} else {
var statearr_46408_46456 = state_46390__$1;
(statearr_46408_46456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (25))){
var inst_46380 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46409_46457 = state_46390__$1;
(statearr_46409_46457[(2)] = inst_46380);

(statearr_46409_46457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (17))){
var inst_46345 = (state_46390[(10)]);
var inst_46354 = cljs.core.first.call(null,inst_46345);
var inst_46355 = cljs.core.async.muxch_STAR_.call(null,inst_46354);
var inst_46356 = cljs.core.async.close_BANG_.call(null,inst_46355);
var inst_46357 = cljs.core.next.call(null,inst_46345);
var inst_46331 = inst_46357;
var inst_46332 = null;
var inst_46333 = (0);
var inst_46334 = (0);
var state_46390__$1 = (function (){var statearr_46410 = state_46390;
(statearr_46410[(12)] = inst_46331);

(statearr_46410[(13)] = inst_46334);

(statearr_46410[(14)] = inst_46332);

(statearr_46410[(15)] = inst_46356);

(statearr_46410[(16)] = inst_46333);

return statearr_46410;
})();
var statearr_46411_46458 = state_46390__$1;
(statearr_46411_46458[(2)] = null);

(statearr_46411_46458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (3))){
var inst_46388 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46390__$1,inst_46388);
} else {
if((state_val_46391 === (12))){
var inst_46365 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46412_46459 = state_46390__$1;
(statearr_46412_46459[(2)] = inst_46365);

(statearr_46412_46459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (2))){
var state_46390__$1 = state_46390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46390__$1,(4),ch);
} else {
if((state_val_46391 === (23))){
var state_46390__$1 = state_46390;
var statearr_46413_46460 = state_46390__$1;
(statearr_46413_46460[(2)] = null);

(statearr_46413_46460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (19))){
var inst_46321 = (state_46390[(8)]);
var inst_46371 = (state_46390[(11)]);
var inst_46373 = cljs.core.async.muxch_STAR_.call(null,inst_46371);
var state_46390__$1 = state_46390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46390__$1,(22),inst_46373,inst_46321);
} else {
if((state_val_46391 === (11))){
var inst_46331 = (state_46390[(12)]);
var inst_46345 = (state_46390[(10)]);
var inst_46345__$1 = cljs.core.seq.call(null,inst_46331);
var state_46390__$1 = (function (){var statearr_46414 = state_46390;
(statearr_46414[(10)] = inst_46345__$1);

return statearr_46414;
})();
if(inst_46345__$1){
var statearr_46415_46461 = state_46390__$1;
(statearr_46415_46461[(1)] = (13));

} else {
var statearr_46416_46462 = state_46390__$1;
(statearr_46416_46462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (9))){
var inst_46367 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46417_46463 = state_46390__$1;
(statearr_46417_46463[(2)] = inst_46367);

(statearr_46417_46463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (5))){
var inst_46328 = cljs.core.deref.call(null,mults);
var inst_46329 = cljs.core.vals.call(null,inst_46328);
var inst_46330 = cljs.core.seq.call(null,inst_46329);
var inst_46331 = inst_46330;
var inst_46332 = null;
var inst_46333 = (0);
var inst_46334 = (0);
var state_46390__$1 = (function (){var statearr_46418 = state_46390;
(statearr_46418[(12)] = inst_46331);

(statearr_46418[(13)] = inst_46334);

(statearr_46418[(14)] = inst_46332);

(statearr_46418[(16)] = inst_46333);

return statearr_46418;
})();
var statearr_46419_46464 = state_46390__$1;
(statearr_46419_46464[(2)] = null);

(statearr_46419_46464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (14))){
var state_46390__$1 = state_46390;
var statearr_46423_46465 = state_46390__$1;
(statearr_46423_46465[(2)] = null);

(statearr_46423_46465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (16))){
var inst_46345 = (state_46390[(10)]);
var inst_46349 = cljs.core.chunk_first.call(null,inst_46345);
var inst_46350 = cljs.core.chunk_rest.call(null,inst_46345);
var inst_46351 = cljs.core.count.call(null,inst_46349);
var inst_46331 = inst_46350;
var inst_46332 = inst_46349;
var inst_46333 = inst_46351;
var inst_46334 = (0);
var state_46390__$1 = (function (){var statearr_46424 = state_46390;
(statearr_46424[(12)] = inst_46331);

(statearr_46424[(13)] = inst_46334);

(statearr_46424[(14)] = inst_46332);

(statearr_46424[(16)] = inst_46333);

return statearr_46424;
})();
var statearr_46425_46466 = state_46390__$1;
(statearr_46425_46466[(2)] = null);

(statearr_46425_46466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (10))){
var inst_46331 = (state_46390[(12)]);
var inst_46334 = (state_46390[(13)]);
var inst_46332 = (state_46390[(14)]);
var inst_46333 = (state_46390[(16)]);
var inst_46339 = cljs.core._nth.call(null,inst_46332,inst_46334);
var inst_46340 = cljs.core.async.muxch_STAR_.call(null,inst_46339);
var inst_46341 = cljs.core.async.close_BANG_.call(null,inst_46340);
var inst_46342 = (inst_46334 + (1));
var tmp46420 = inst_46331;
var tmp46421 = inst_46332;
var tmp46422 = inst_46333;
var inst_46331__$1 = tmp46420;
var inst_46332__$1 = tmp46421;
var inst_46333__$1 = tmp46422;
var inst_46334__$1 = inst_46342;
var state_46390__$1 = (function (){var statearr_46426 = state_46390;
(statearr_46426[(17)] = inst_46341);

(statearr_46426[(12)] = inst_46331__$1);

(statearr_46426[(13)] = inst_46334__$1);

(statearr_46426[(14)] = inst_46332__$1);

(statearr_46426[(16)] = inst_46333__$1);

return statearr_46426;
})();
var statearr_46427_46467 = state_46390__$1;
(statearr_46427_46467[(2)] = null);

(statearr_46427_46467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (18))){
var inst_46360 = (state_46390[(2)]);
var state_46390__$1 = state_46390;
var statearr_46428_46468 = state_46390__$1;
(statearr_46428_46468[(2)] = inst_46360);

(statearr_46428_46468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46391 === (8))){
var inst_46334 = (state_46390[(13)]);
var inst_46333 = (state_46390[(16)]);
var inst_46336 = (inst_46334 < inst_46333);
var inst_46337 = inst_46336;
var state_46390__$1 = state_46390;
if(cljs.core.truth_(inst_46337)){
var statearr_46429_46469 = state_46390__$1;
(statearr_46429_46469[(1)] = (10));

} else {
var statearr_46430_46470 = state_46390__$1;
(statearr_46430_46470[(1)] = (11));

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
});})(c__37632__auto___46442,mults,ensure_mult,p))
;
return ((function (switch__37611__auto__,c__37632__auto___46442,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_46434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46434[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_46434[(1)] = (1));

return statearr_46434;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_46390){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46435){if((e46435 instanceof Object)){
var ex__37615__auto__ = e46435;
var statearr_46436_46471 = state_46390;
(statearr_46436_46471[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46472 = state_46390;
state_46390 = G__46472;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_46390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_46390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46442,mults,ensure_mult,p))
})();
var state__37634__auto__ = (function (){var statearr_46437 = f__37633__auto__.call(null);
(statearr_46437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46442);

return statearr_46437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46442,mults,ensure_mult,p))
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
var args46473 = [];
var len__36574__auto___46476 = arguments.length;
var i__36575__auto___46477 = (0);
while(true){
if((i__36575__auto___46477 < len__36574__auto___46476)){
args46473.push((arguments[i__36575__auto___46477]));

var G__46478 = (i__36575__auto___46477 + (1));
i__36575__auto___46477 = G__46478;
continue;
} else {
}
break;
}

var G__46475 = args46473.length;
switch (G__46475) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46473.length)].join('')));

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
var args46480 = [];
var len__36574__auto___46483 = arguments.length;
var i__36575__auto___46484 = (0);
while(true){
if((i__36575__auto___46484 < len__36574__auto___46483)){
args46480.push((arguments[i__36575__auto___46484]));

var G__46485 = (i__36575__auto___46484 + (1));
i__36575__auto___46484 = G__46485;
continue;
} else {
}
break;
}

var G__46482 = args46480.length;
switch (G__46482) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46480.length)].join('')));

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
var args46487 = [];
var len__36574__auto___46558 = arguments.length;
var i__36575__auto___46559 = (0);
while(true){
if((i__36575__auto___46559 < len__36574__auto___46558)){
args46487.push((arguments[i__36575__auto___46559]));

var G__46560 = (i__36575__auto___46559 + (1));
i__36575__auto___46559 = G__46560;
continue;
} else {
}
break;
}

var G__46489 = args46487.length;
switch (G__46489) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46487.length)].join('')));

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
var c__37632__auto___46562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46528){
var state_val_46529 = (state_46528[(1)]);
if((state_val_46529 === (7))){
var state_46528__$1 = state_46528;
var statearr_46530_46563 = state_46528__$1;
(statearr_46530_46563[(2)] = null);

(statearr_46530_46563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (1))){
var state_46528__$1 = state_46528;
var statearr_46531_46564 = state_46528__$1;
(statearr_46531_46564[(2)] = null);

(statearr_46531_46564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (4))){
var inst_46492 = (state_46528[(7)]);
var inst_46494 = (inst_46492 < cnt);
var state_46528__$1 = state_46528;
if(cljs.core.truth_(inst_46494)){
var statearr_46532_46565 = state_46528__$1;
(statearr_46532_46565[(1)] = (6));

} else {
var statearr_46533_46566 = state_46528__$1;
(statearr_46533_46566[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (15))){
var inst_46524 = (state_46528[(2)]);
var state_46528__$1 = state_46528;
var statearr_46534_46567 = state_46528__$1;
(statearr_46534_46567[(2)] = inst_46524);

(statearr_46534_46567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (13))){
var inst_46517 = cljs.core.async.close_BANG_.call(null,out);
var state_46528__$1 = state_46528;
var statearr_46535_46568 = state_46528__$1;
(statearr_46535_46568[(2)] = inst_46517);

(statearr_46535_46568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (6))){
var state_46528__$1 = state_46528;
var statearr_46536_46569 = state_46528__$1;
(statearr_46536_46569[(2)] = null);

(statearr_46536_46569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (3))){
var inst_46526 = (state_46528[(2)]);
var state_46528__$1 = state_46528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46528__$1,inst_46526);
} else {
if((state_val_46529 === (12))){
var inst_46514 = (state_46528[(8)]);
var inst_46514__$1 = (state_46528[(2)]);
var inst_46515 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46514__$1);
var state_46528__$1 = (function (){var statearr_46537 = state_46528;
(statearr_46537[(8)] = inst_46514__$1);

return statearr_46537;
})();
if(cljs.core.truth_(inst_46515)){
var statearr_46538_46570 = state_46528__$1;
(statearr_46538_46570[(1)] = (13));

} else {
var statearr_46539_46571 = state_46528__$1;
(statearr_46539_46571[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (2))){
var inst_46491 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46492 = (0);
var state_46528__$1 = (function (){var statearr_46540 = state_46528;
(statearr_46540[(7)] = inst_46492);

(statearr_46540[(9)] = inst_46491);

return statearr_46540;
})();
var statearr_46541_46572 = state_46528__$1;
(statearr_46541_46572[(2)] = null);

(statearr_46541_46572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (11))){
var inst_46492 = (state_46528[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46528,(10),Object,null,(9));
var inst_46501 = chs__$1.call(null,inst_46492);
var inst_46502 = done.call(null,inst_46492);
var inst_46503 = cljs.core.async.take_BANG_.call(null,inst_46501,inst_46502);
var state_46528__$1 = state_46528;
var statearr_46542_46573 = state_46528__$1;
(statearr_46542_46573[(2)] = inst_46503);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46528__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (9))){
var inst_46492 = (state_46528[(7)]);
var inst_46505 = (state_46528[(2)]);
var inst_46506 = (inst_46492 + (1));
var inst_46492__$1 = inst_46506;
var state_46528__$1 = (function (){var statearr_46543 = state_46528;
(statearr_46543[(7)] = inst_46492__$1);

(statearr_46543[(10)] = inst_46505);

return statearr_46543;
})();
var statearr_46544_46574 = state_46528__$1;
(statearr_46544_46574[(2)] = null);

(statearr_46544_46574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (5))){
var inst_46512 = (state_46528[(2)]);
var state_46528__$1 = (function (){var statearr_46545 = state_46528;
(statearr_46545[(11)] = inst_46512);

return statearr_46545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46528__$1,(12),dchan);
} else {
if((state_val_46529 === (14))){
var inst_46514 = (state_46528[(8)]);
var inst_46519 = cljs.core.apply.call(null,f,inst_46514);
var state_46528__$1 = state_46528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46528__$1,(16),out,inst_46519);
} else {
if((state_val_46529 === (16))){
var inst_46521 = (state_46528[(2)]);
var state_46528__$1 = (function (){var statearr_46546 = state_46528;
(statearr_46546[(12)] = inst_46521);

return statearr_46546;
})();
var statearr_46547_46575 = state_46528__$1;
(statearr_46547_46575[(2)] = null);

(statearr_46547_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (10))){
var inst_46496 = (state_46528[(2)]);
var inst_46497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46528__$1 = (function (){var statearr_46548 = state_46528;
(statearr_46548[(13)] = inst_46496);

return statearr_46548;
})();
var statearr_46549_46576 = state_46528__$1;
(statearr_46549_46576[(2)] = inst_46497);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46528__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46529 === (8))){
var inst_46510 = (state_46528[(2)]);
var state_46528__$1 = state_46528;
var statearr_46550_46577 = state_46528__$1;
(statearr_46550_46577[(2)] = inst_46510);

(statearr_46550_46577[(1)] = (5));


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
});})(c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37611__auto__,c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_46554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46554[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_46554[(1)] = (1));

return statearr_46554;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_46528){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46555){if((e46555 instanceof Object)){
var ex__37615__auto__ = e46555;
var statearr_46556_46578 = state_46528;
(statearr_46556_46578[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46579 = state_46528;
state_46528 = G__46579;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_46528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_46528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37634__auto__ = (function (){var statearr_46557 = f__37633__auto__.call(null);
(statearr_46557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46562);

return statearr_46557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46562,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46581 = [];
var len__36574__auto___46637 = arguments.length;
var i__36575__auto___46638 = (0);
while(true){
if((i__36575__auto___46638 < len__36574__auto___46637)){
args46581.push((arguments[i__36575__auto___46638]));

var G__46639 = (i__36575__auto___46638 + (1));
i__36575__auto___46638 = G__46639;
continue;
} else {
}
break;
}

var G__46583 = args46581.length;
switch (G__46583) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46581.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___46641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46641,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46641,out){
return (function (state_46613){
var state_val_46614 = (state_46613[(1)]);
if((state_val_46614 === (7))){
var inst_46593 = (state_46613[(7)]);
var inst_46592 = (state_46613[(8)]);
var inst_46592__$1 = (state_46613[(2)]);
var inst_46593__$1 = cljs.core.nth.call(null,inst_46592__$1,(0),null);
var inst_46594 = cljs.core.nth.call(null,inst_46592__$1,(1),null);
var inst_46595 = (inst_46593__$1 == null);
var state_46613__$1 = (function (){var statearr_46615 = state_46613;
(statearr_46615[(9)] = inst_46594);

(statearr_46615[(7)] = inst_46593__$1);

(statearr_46615[(8)] = inst_46592__$1);

return statearr_46615;
})();
if(cljs.core.truth_(inst_46595)){
var statearr_46616_46642 = state_46613__$1;
(statearr_46616_46642[(1)] = (8));

} else {
var statearr_46617_46643 = state_46613__$1;
(statearr_46617_46643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (1))){
var inst_46584 = cljs.core.vec.call(null,chs);
var inst_46585 = inst_46584;
var state_46613__$1 = (function (){var statearr_46618 = state_46613;
(statearr_46618[(10)] = inst_46585);

return statearr_46618;
})();
var statearr_46619_46644 = state_46613__$1;
(statearr_46619_46644[(2)] = null);

(statearr_46619_46644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (4))){
var inst_46585 = (state_46613[(10)]);
var state_46613__$1 = state_46613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46613__$1,(7),inst_46585);
} else {
if((state_val_46614 === (6))){
var inst_46609 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
var statearr_46620_46645 = state_46613__$1;
(statearr_46620_46645[(2)] = inst_46609);

(statearr_46620_46645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (3))){
var inst_46611 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46613__$1,inst_46611);
} else {
if((state_val_46614 === (2))){
var inst_46585 = (state_46613[(10)]);
var inst_46587 = cljs.core.count.call(null,inst_46585);
var inst_46588 = (inst_46587 > (0));
var state_46613__$1 = state_46613;
if(cljs.core.truth_(inst_46588)){
var statearr_46622_46646 = state_46613__$1;
(statearr_46622_46646[(1)] = (4));

} else {
var statearr_46623_46647 = state_46613__$1;
(statearr_46623_46647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (11))){
var inst_46585 = (state_46613[(10)]);
var inst_46602 = (state_46613[(2)]);
var tmp46621 = inst_46585;
var inst_46585__$1 = tmp46621;
var state_46613__$1 = (function (){var statearr_46624 = state_46613;
(statearr_46624[(10)] = inst_46585__$1);

(statearr_46624[(11)] = inst_46602);

return statearr_46624;
})();
var statearr_46625_46648 = state_46613__$1;
(statearr_46625_46648[(2)] = null);

(statearr_46625_46648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (9))){
var inst_46593 = (state_46613[(7)]);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46613__$1,(11),out,inst_46593);
} else {
if((state_val_46614 === (5))){
var inst_46607 = cljs.core.async.close_BANG_.call(null,out);
var state_46613__$1 = state_46613;
var statearr_46626_46649 = state_46613__$1;
(statearr_46626_46649[(2)] = inst_46607);

(statearr_46626_46649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (10))){
var inst_46605 = (state_46613[(2)]);
var state_46613__$1 = state_46613;
var statearr_46627_46650 = state_46613__$1;
(statearr_46627_46650[(2)] = inst_46605);

(statearr_46627_46650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46614 === (8))){
var inst_46594 = (state_46613[(9)]);
var inst_46593 = (state_46613[(7)]);
var inst_46585 = (state_46613[(10)]);
var inst_46592 = (state_46613[(8)]);
var inst_46597 = (function (){var cs = inst_46585;
var vec__46590 = inst_46592;
var v = inst_46593;
var c = inst_46594;
return ((function (cs,vec__46590,v,c,inst_46594,inst_46593,inst_46585,inst_46592,state_val_46614,c__37632__auto___46641,out){
return (function (p1__46580_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46580_SHARP_);
});
;})(cs,vec__46590,v,c,inst_46594,inst_46593,inst_46585,inst_46592,state_val_46614,c__37632__auto___46641,out))
})();
var inst_46598 = cljs.core.filterv.call(null,inst_46597,inst_46585);
var inst_46585__$1 = inst_46598;
var state_46613__$1 = (function (){var statearr_46628 = state_46613;
(statearr_46628[(10)] = inst_46585__$1);

return statearr_46628;
})();
var statearr_46629_46651 = state_46613__$1;
(statearr_46629_46651[(2)] = null);

(statearr_46629_46651[(1)] = (2));


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
});})(c__37632__auto___46641,out))
;
return ((function (switch__37611__auto__,c__37632__auto___46641,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_46633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46633[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_46633[(1)] = (1));

return statearr_46633;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_46613){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46634){if((e46634 instanceof Object)){
var ex__37615__auto__ = e46634;
var statearr_46635_46652 = state_46613;
(statearr_46635_46652[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46653 = state_46613;
state_46613 = G__46653;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_46613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_46613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46641,out))
})();
var state__37634__auto__ = (function (){var statearr_46636 = f__37633__auto__.call(null);
(statearr_46636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46641);

return statearr_46636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46641,out))
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
var args46654 = [];
var len__36574__auto___46703 = arguments.length;
var i__36575__auto___46704 = (0);
while(true){
if((i__36575__auto___46704 < len__36574__auto___46703)){
args46654.push((arguments[i__36575__auto___46704]));

var G__46705 = (i__36575__auto___46704 + (1));
i__36575__auto___46704 = G__46705;
continue;
} else {
}
break;
}

var G__46656 = args46654.length;
switch (G__46656) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46654.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___46707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46707,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46707,out){
return (function (state_46680){
var state_val_46681 = (state_46680[(1)]);
if((state_val_46681 === (7))){
var inst_46662 = (state_46680[(7)]);
var inst_46662__$1 = (state_46680[(2)]);
var inst_46663 = (inst_46662__$1 == null);
var inst_46664 = cljs.core.not.call(null,inst_46663);
var state_46680__$1 = (function (){var statearr_46682 = state_46680;
(statearr_46682[(7)] = inst_46662__$1);

return statearr_46682;
})();
if(inst_46664){
var statearr_46683_46708 = state_46680__$1;
(statearr_46683_46708[(1)] = (8));

} else {
var statearr_46684_46709 = state_46680__$1;
(statearr_46684_46709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (1))){
var inst_46657 = (0);
var state_46680__$1 = (function (){var statearr_46685 = state_46680;
(statearr_46685[(8)] = inst_46657);

return statearr_46685;
})();
var statearr_46686_46710 = state_46680__$1;
(statearr_46686_46710[(2)] = null);

(statearr_46686_46710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (4))){
var state_46680__$1 = state_46680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46680__$1,(7),ch);
} else {
if((state_val_46681 === (6))){
var inst_46675 = (state_46680[(2)]);
var state_46680__$1 = state_46680;
var statearr_46687_46711 = state_46680__$1;
(statearr_46687_46711[(2)] = inst_46675);

(statearr_46687_46711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (3))){
var inst_46677 = (state_46680[(2)]);
var inst_46678 = cljs.core.async.close_BANG_.call(null,out);
var state_46680__$1 = (function (){var statearr_46688 = state_46680;
(statearr_46688[(9)] = inst_46677);

return statearr_46688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46680__$1,inst_46678);
} else {
if((state_val_46681 === (2))){
var inst_46657 = (state_46680[(8)]);
var inst_46659 = (inst_46657 < n);
var state_46680__$1 = state_46680;
if(cljs.core.truth_(inst_46659)){
var statearr_46689_46712 = state_46680__$1;
(statearr_46689_46712[(1)] = (4));

} else {
var statearr_46690_46713 = state_46680__$1;
(statearr_46690_46713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (11))){
var inst_46657 = (state_46680[(8)]);
var inst_46667 = (state_46680[(2)]);
var inst_46668 = (inst_46657 + (1));
var inst_46657__$1 = inst_46668;
var state_46680__$1 = (function (){var statearr_46691 = state_46680;
(statearr_46691[(10)] = inst_46667);

(statearr_46691[(8)] = inst_46657__$1);

return statearr_46691;
})();
var statearr_46692_46714 = state_46680__$1;
(statearr_46692_46714[(2)] = null);

(statearr_46692_46714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (9))){
var state_46680__$1 = state_46680;
var statearr_46693_46715 = state_46680__$1;
(statearr_46693_46715[(2)] = null);

(statearr_46693_46715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (5))){
var state_46680__$1 = state_46680;
var statearr_46694_46716 = state_46680__$1;
(statearr_46694_46716[(2)] = null);

(statearr_46694_46716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (10))){
var inst_46672 = (state_46680[(2)]);
var state_46680__$1 = state_46680;
var statearr_46695_46717 = state_46680__$1;
(statearr_46695_46717[(2)] = inst_46672);

(statearr_46695_46717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46681 === (8))){
var inst_46662 = (state_46680[(7)]);
var state_46680__$1 = state_46680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46680__$1,(11),out,inst_46662);
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
});})(c__37632__auto___46707,out))
;
return ((function (switch__37611__auto__,c__37632__auto___46707,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_46699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46699[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_46699[(1)] = (1));

return statearr_46699;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_46680){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46700){if((e46700 instanceof Object)){
var ex__37615__auto__ = e46700;
var statearr_46701_46718 = state_46680;
(statearr_46701_46718[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46719 = state_46680;
state_46680 = G__46719;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_46680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_46680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46707,out))
})();
var state__37634__auto__ = (function (){var statearr_46702 = f__37633__auto__.call(null);
(statearr_46702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46707);

return statearr_46702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46707,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46727 = (function (map_LT_,f,ch,meta46728){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46728 = meta46728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46729,meta46728__$1){
var self__ = this;
var _46729__$1 = this;
return (new cljs.core.async.t_cljs$core$async46727(self__.map_LT_,self__.f,self__.ch,meta46728__$1));
});

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46729){
var self__ = this;
var _46729__$1 = this;
return self__.meta46728;
});

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46730 = (function (map_LT_,f,ch,meta46728,_,fn1,meta46731){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46728 = meta46728;
this._ = _;
this.fn1 = fn1;
this.meta46731 = meta46731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46732,meta46731__$1){
var self__ = this;
var _46732__$1 = this;
return (new cljs.core.async.t_cljs$core$async46730(self__.map_LT_,self__.f,self__.ch,self__.meta46728,self__._,self__.fn1,meta46731__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46732){
var self__ = this;
var _46732__$1 = this;
return self__.meta46731;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46720_SHARP_){
return f1.call(null,(((p1__46720_SHARP_ == null))?null:self__.f.call(null,p1__46720_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46728","meta46728",212090302,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46727","cljs.core.async/t_cljs$core$async46727",1646206153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46731","meta46731",-1081927550,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46730";

cljs.core.async.t_cljs$core$async46730.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46730");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46730 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46730(map_LT___$1,f__$1,ch__$1,meta46728__$1,___$2,fn1__$1,meta46731){
return (new cljs.core.async.t_cljs$core$async46730(map_LT___$1,f__$1,ch__$1,meta46728__$1,___$2,fn1__$1,meta46731));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46730(self__.map_LT_,self__.f,self__.ch,self__.meta46728,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35504__auto__ = ret;
if(cljs.core.truth_(and__35504__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35504__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46728","meta46728",212090302,null)], null);
});

cljs.core.async.t_cljs$core$async46727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46727";

cljs.core.async.t_cljs$core$async46727.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46727");
});

cljs.core.async.__GT_t_cljs$core$async46727 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46727(map_LT___$1,f__$1,ch__$1,meta46728){
return (new cljs.core.async.t_cljs$core$async46727(map_LT___$1,f__$1,ch__$1,meta46728));
});

}

return (new cljs.core.async.t_cljs$core$async46727(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46736 = (function (map_GT_,f,ch,meta46737){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46737 = meta46737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46738,meta46737__$1){
var self__ = this;
var _46738__$1 = this;
return (new cljs.core.async.t_cljs$core$async46736(self__.map_GT_,self__.f,self__.ch,meta46737__$1));
});

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46738){
var self__ = this;
var _46738__$1 = this;
return self__.meta46737;
});

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46737","meta46737",-1209768917,null)], null);
});

cljs.core.async.t_cljs$core$async46736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46736";

cljs.core.async.t_cljs$core$async46736.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46736");
});

cljs.core.async.__GT_t_cljs$core$async46736 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46736(map_GT___$1,f__$1,ch__$1,meta46737){
return (new cljs.core.async.t_cljs$core$async46736(map_GT___$1,f__$1,ch__$1,meta46737));
});

}

return (new cljs.core.async.t_cljs$core$async46736(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46742 = (function (filter_GT_,p,ch,meta46743){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46743 = meta46743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46744,meta46743__$1){
var self__ = this;
var _46744__$1 = this;
return (new cljs.core.async.t_cljs$core$async46742(self__.filter_GT_,self__.p,self__.ch,meta46743__$1));
});

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46744){
var self__ = this;
var _46744__$1 = this;
return self__.meta46743;
});

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46743","meta46743",101376084,null)], null);
});

cljs.core.async.t_cljs$core$async46742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46742";

cljs.core.async.t_cljs$core$async46742.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async46742");
});

cljs.core.async.__GT_t_cljs$core$async46742 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46742(filter_GT___$1,p__$1,ch__$1,meta46743){
return (new cljs.core.async.t_cljs$core$async46742(filter_GT___$1,p__$1,ch__$1,meta46743));
});

}

return (new cljs.core.async.t_cljs$core$async46742(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args46745 = [];
var len__36574__auto___46789 = arguments.length;
var i__36575__auto___46790 = (0);
while(true){
if((i__36575__auto___46790 < len__36574__auto___46789)){
args46745.push((arguments[i__36575__auto___46790]));

var G__46791 = (i__36575__auto___46790 + (1));
i__36575__auto___46790 = G__46791;
continue;
} else {
}
break;
}

var G__46747 = args46745.length;
switch (G__46747) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46745.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___46793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___46793,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___46793,out){
return (function (state_46768){
var state_val_46769 = (state_46768[(1)]);
if((state_val_46769 === (7))){
var inst_46764 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46770_46794 = state_46768__$1;
(statearr_46770_46794[(2)] = inst_46764);

(statearr_46770_46794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (1))){
var state_46768__$1 = state_46768;
var statearr_46771_46795 = state_46768__$1;
(statearr_46771_46795[(2)] = null);

(statearr_46771_46795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (4))){
var inst_46750 = (state_46768[(7)]);
var inst_46750__$1 = (state_46768[(2)]);
var inst_46751 = (inst_46750__$1 == null);
var state_46768__$1 = (function (){var statearr_46772 = state_46768;
(statearr_46772[(7)] = inst_46750__$1);

return statearr_46772;
})();
if(cljs.core.truth_(inst_46751)){
var statearr_46773_46796 = state_46768__$1;
(statearr_46773_46796[(1)] = (5));

} else {
var statearr_46774_46797 = state_46768__$1;
(statearr_46774_46797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (6))){
var inst_46750 = (state_46768[(7)]);
var inst_46755 = p.call(null,inst_46750);
var state_46768__$1 = state_46768;
if(cljs.core.truth_(inst_46755)){
var statearr_46775_46798 = state_46768__$1;
(statearr_46775_46798[(1)] = (8));

} else {
var statearr_46776_46799 = state_46768__$1;
(statearr_46776_46799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (3))){
var inst_46766 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46768__$1,inst_46766);
} else {
if((state_val_46769 === (2))){
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46768__$1,(4),ch);
} else {
if((state_val_46769 === (11))){
var inst_46758 = (state_46768[(2)]);
var state_46768__$1 = state_46768;
var statearr_46777_46800 = state_46768__$1;
(statearr_46777_46800[(2)] = inst_46758);

(statearr_46777_46800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (9))){
var state_46768__$1 = state_46768;
var statearr_46778_46801 = state_46768__$1;
(statearr_46778_46801[(2)] = null);

(statearr_46778_46801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (5))){
var inst_46753 = cljs.core.async.close_BANG_.call(null,out);
var state_46768__$1 = state_46768;
var statearr_46779_46802 = state_46768__$1;
(statearr_46779_46802[(2)] = inst_46753);

(statearr_46779_46802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (10))){
var inst_46761 = (state_46768[(2)]);
var state_46768__$1 = (function (){var statearr_46780 = state_46768;
(statearr_46780[(8)] = inst_46761);

return statearr_46780;
})();
var statearr_46781_46803 = state_46768__$1;
(statearr_46781_46803[(2)] = null);

(statearr_46781_46803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46769 === (8))){
var inst_46750 = (state_46768[(7)]);
var state_46768__$1 = state_46768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46768__$1,(11),out,inst_46750);
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
});})(c__37632__auto___46793,out))
;
return ((function (switch__37611__auto__,c__37632__auto___46793,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_46785 = [null,null,null,null,null,null,null,null,null];
(statearr_46785[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_46785[(1)] = (1));

return statearr_46785;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_46768){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e46786){if((e46786 instanceof Object)){
var ex__37615__auto__ = e46786;
var statearr_46787_46804 = state_46768;
(statearr_46787_46804[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46805 = state_46768;
state_46768 = G__46805;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_46768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_46768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___46793,out))
})();
var state__37634__auto__ = (function (){var statearr_46788 = f__37633__auto__.call(null);
(statearr_46788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___46793);

return statearr_46788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___46793,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46806 = [];
var len__36574__auto___46809 = arguments.length;
var i__36575__auto___46810 = (0);
while(true){
if((i__36575__auto___46810 < len__36574__auto___46809)){
args46806.push((arguments[i__36575__auto___46810]));

var G__46811 = (i__36575__auto___46810 + (1));
i__36575__auto___46810 = G__46811;
continue;
} else {
}
break;
}

var G__46808 = args46806.length;
switch (G__46808) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46806.length)].join('')));

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
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_46978){
var state_val_46979 = (state_46978[(1)]);
if((state_val_46979 === (7))){
var inst_46974 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_46980_47021 = state_46978__$1;
(statearr_46980_47021[(2)] = inst_46974);

(statearr_46980_47021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (20))){
var inst_46944 = (state_46978[(7)]);
var inst_46955 = (state_46978[(2)]);
var inst_46956 = cljs.core.next.call(null,inst_46944);
var inst_46930 = inst_46956;
var inst_46931 = null;
var inst_46932 = (0);
var inst_46933 = (0);
var state_46978__$1 = (function (){var statearr_46981 = state_46978;
(statearr_46981[(8)] = inst_46930);

(statearr_46981[(9)] = inst_46955);

(statearr_46981[(10)] = inst_46931);

(statearr_46981[(11)] = inst_46933);

(statearr_46981[(12)] = inst_46932);

return statearr_46981;
})();
var statearr_46982_47022 = state_46978__$1;
(statearr_46982_47022[(2)] = null);

(statearr_46982_47022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (1))){
var state_46978__$1 = state_46978;
var statearr_46983_47023 = state_46978__$1;
(statearr_46983_47023[(2)] = null);

(statearr_46983_47023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (4))){
var inst_46919 = (state_46978[(13)]);
var inst_46919__$1 = (state_46978[(2)]);
var inst_46920 = (inst_46919__$1 == null);
var state_46978__$1 = (function (){var statearr_46984 = state_46978;
(statearr_46984[(13)] = inst_46919__$1);

return statearr_46984;
})();
if(cljs.core.truth_(inst_46920)){
var statearr_46985_47024 = state_46978__$1;
(statearr_46985_47024[(1)] = (5));

} else {
var statearr_46986_47025 = state_46978__$1;
(statearr_46986_47025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (15))){
var state_46978__$1 = state_46978;
var statearr_46990_47026 = state_46978__$1;
(statearr_46990_47026[(2)] = null);

(statearr_46990_47026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (21))){
var state_46978__$1 = state_46978;
var statearr_46991_47027 = state_46978__$1;
(statearr_46991_47027[(2)] = null);

(statearr_46991_47027[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (13))){
var inst_46930 = (state_46978[(8)]);
var inst_46931 = (state_46978[(10)]);
var inst_46933 = (state_46978[(11)]);
var inst_46932 = (state_46978[(12)]);
var inst_46940 = (state_46978[(2)]);
var inst_46941 = (inst_46933 + (1));
var tmp46987 = inst_46930;
var tmp46988 = inst_46931;
var tmp46989 = inst_46932;
var inst_46930__$1 = tmp46987;
var inst_46931__$1 = tmp46988;
var inst_46932__$1 = tmp46989;
var inst_46933__$1 = inst_46941;
var state_46978__$1 = (function (){var statearr_46992 = state_46978;
(statearr_46992[(8)] = inst_46930__$1);

(statearr_46992[(14)] = inst_46940);

(statearr_46992[(10)] = inst_46931__$1);

(statearr_46992[(11)] = inst_46933__$1);

(statearr_46992[(12)] = inst_46932__$1);

return statearr_46992;
})();
var statearr_46993_47028 = state_46978__$1;
(statearr_46993_47028[(2)] = null);

(statearr_46993_47028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (22))){
var state_46978__$1 = state_46978;
var statearr_46994_47029 = state_46978__$1;
(statearr_46994_47029[(2)] = null);

(statearr_46994_47029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (6))){
var inst_46919 = (state_46978[(13)]);
var inst_46928 = f.call(null,inst_46919);
var inst_46929 = cljs.core.seq.call(null,inst_46928);
var inst_46930 = inst_46929;
var inst_46931 = null;
var inst_46932 = (0);
var inst_46933 = (0);
var state_46978__$1 = (function (){var statearr_46995 = state_46978;
(statearr_46995[(8)] = inst_46930);

(statearr_46995[(10)] = inst_46931);

(statearr_46995[(11)] = inst_46933);

(statearr_46995[(12)] = inst_46932);

return statearr_46995;
})();
var statearr_46996_47030 = state_46978__$1;
(statearr_46996_47030[(2)] = null);

(statearr_46996_47030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (17))){
var inst_46944 = (state_46978[(7)]);
var inst_46948 = cljs.core.chunk_first.call(null,inst_46944);
var inst_46949 = cljs.core.chunk_rest.call(null,inst_46944);
var inst_46950 = cljs.core.count.call(null,inst_46948);
var inst_46930 = inst_46949;
var inst_46931 = inst_46948;
var inst_46932 = inst_46950;
var inst_46933 = (0);
var state_46978__$1 = (function (){var statearr_46997 = state_46978;
(statearr_46997[(8)] = inst_46930);

(statearr_46997[(10)] = inst_46931);

(statearr_46997[(11)] = inst_46933);

(statearr_46997[(12)] = inst_46932);

return statearr_46997;
})();
var statearr_46998_47031 = state_46978__$1;
(statearr_46998_47031[(2)] = null);

(statearr_46998_47031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (3))){
var inst_46976 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46978__$1,inst_46976);
} else {
if((state_val_46979 === (12))){
var inst_46964 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_46999_47032 = state_46978__$1;
(statearr_46999_47032[(2)] = inst_46964);

(statearr_46999_47032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (2))){
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46978__$1,(4),in$);
} else {
if((state_val_46979 === (23))){
var inst_46972 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_47000_47033 = state_46978__$1;
(statearr_47000_47033[(2)] = inst_46972);

(statearr_47000_47033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (19))){
var inst_46959 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_47001_47034 = state_46978__$1;
(statearr_47001_47034[(2)] = inst_46959);

(statearr_47001_47034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (11))){
var inst_46930 = (state_46978[(8)]);
var inst_46944 = (state_46978[(7)]);
var inst_46944__$1 = cljs.core.seq.call(null,inst_46930);
var state_46978__$1 = (function (){var statearr_47002 = state_46978;
(statearr_47002[(7)] = inst_46944__$1);

return statearr_47002;
})();
if(inst_46944__$1){
var statearr_47003_47035 = state_46978__$1;
(statearr_47003_47035[(1)] = (14));

} else {
var statearr_47004_47036 = state_46978__$1;
(statearr_47004_47036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (9))){
var inst_46966 = (state_46978[(2)]);
var inst_46967 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46978__$1 = (function (){var statearr_47005 = state_46978;
(statearr_47005[(15)] = inst_46966);

return statearr_47005;
})();
if(cljs.core.truth_(inst_46967)){
var statearr_47006_47037 = state_46978__$1;
(statearr_47006_47037[(1)] = (21));

} else {
var statearr_47007_47038 = state_46978__$1;
(statearr_47007_47038[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (5))){
var inst_46922 = cljs.core.async.close_BANG_.call(null,out);
var state_46978__$1 = state_46978;
var statearr_47008_47039 = state_46978__$1;
(statearr_47008_47039[(2)] = inst_46922);

(statearr_47008_47039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (14))){
var inst_46944 = (state_46978[(7)]);
var inst_46946 = cljs.core.chunked_seq_QMARK_.call(null,inst_46944);
var state_46978__$1 = state_46978;
if(inst_46946){
var statearr_47009_47040 = state_46978__$1;
(statearr_47009_47040[(1)] = (17));

} else {
var statearr_47010_47041 = state_46978__$1;
(statearr_47010_47041[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (16))){
var inst_46962 = (state_46978[(2)]);
var state_46978__$1 = state_46978;
var statearr_47011_47042 = state_46978__$1;
(statearr_47011_47042[(2)] = inst_46962);

(statearr_47011_47042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46979 === (10))){
var inst_46931 = (state_46978[(10)]);
var inst_46933 = (state_46978[(11)]);
var inst_46938 = cljs.core._nth.call(null,inst_46931,inst_46933);
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46978__$1,(13),out,inst_46938);
} else {
if((state_val_46979 === (18))){
var inst_46944 = (state_46978[(7)]);
var inst_46953 = cljs.core.first.call(null,inst_46944);
var state_46978__$1 = state_46978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46978__$1,(20),out,inst_46953);
} else {
if((state_val_46979 === (8))){
var inst_46933 = (state_46978[(11)]);
var inst_46932 = (state_46978[(12)]);
var inst_46935 = (inst_46933 < inst_46932);
var inst_46936 = inst_46935;
var state_46978__$1 = state_46978;
if(cljs.core.truth_(inst_46936)){
var statearr_47012_47043 = state_46978__$1;
(statearr_47012_47043[(1)] = (10));

} else {
var statearr_47013_47044 = state_46978__$1;
(statearr_47013_47044[(1)] = (11));

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
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_47017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47017[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__);

(statearr_47017[(1)] = (1));

return statearr_47017;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1 = (function (state_46978){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_46978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47018){if((e47018 instanceof Object)){
var ex__37615__auto__ = e47018;
var statearr_47019_47045 = state_46978;
(statearr_47019_47045[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47046 = state_46978;
state_46978 = G__47046;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__ = function(state_46978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1.call(this,state_46978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_47020 = f__37633__auto__.call(null);
(statearr_47020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_47020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args47047 = [];
var len__36574__auto___47050 = arguments.length;
var i__36575__auto___47051 = (0);
while(true){
if((i__36575__auto___47051 < len__36574__auto___47050)){
args47047.push((arguments[i__36575__auto___47051]));

var G__47052 = (i__36575__auto___47051 + (1));
i__36575__auto___47051 = G__47052;
continue;
} else {
}
break;
}

var G__47049 = args47047.length;
switch (G__47049) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47047.length)].join('')));

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
var args47054 = [];
var len__36574__auto___47057 = arguments.length;
var i__36575__auto___47058 = (0);
while(true){
if((i__36575__auto___47058 < len__36574__auto___47057)){
args47054.push((arguments[i__36575__auto___47058]));

var G__47059 = (i__36575__auto___47058 + (1));
i__36575__auto___47058 = G__47059;
continue;
} else {
}
break;
}

var G__47056 = args47054.length;
switch (G__47056) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47054.length)].join('')));

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
var args47061 = [];
var len__36574__auto___47112 = arguments.length;
var i__36575__auto___47113 = (0);
while(true){
if((i__36575__auto___47113 < len__36574__auto___47112)){
args47061.push((arguments[i__36575__auto___47113]));

var G__47114 = (i__36575__auto___47113 + (1));
i__36575__auto___47113 = G__47114;
continue;
} else {
}
break;
}

var G__47063 = args47061.length;
switch (G__47063) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47061.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___47116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___47116,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___47116,out){
return (function (state_47087){
var state_val_47088 = (state_47087[(1)]);
if((state_val_47088 === (7))){
var inst_47082 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
var statearr_47089_47117 = state_47087__$1;
(statearr_47089_47117[(2)] = inst_47082);

(statearr_47089_47117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (1))){
var inst_47064 = null;
var state_47087__$1 = (function (){var statearr_47090 = state_47087;
(statearr_47090[(7)] = inst_47064);

return statearr_47090;
})();
var statearr_47091_47118 = state_47087__$1;
(statearr_47091_47118[(2)] = null);

(statearr_47091_47118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (4))){
var inst_47067 = (state_47087[(8)]);
var inst_47067__$1 = (state_47087[(2)]);
var inst_47068 = (inst_47067__$1 == null);
var inst_47069 = cljs.core.not.call(null,inst_47068);
var state_47087__$1 = (function (){var statearr_47092 = state_47087;
(statearr_47092[(8)] = inst_47067__$1);

return statearr_47092;
})();
if(inst_47069){
var statearr_47093_47119 = state_47087__$1;
(statearr_47093_47119[(1)] = (5));

} else {
var statearr_47094_47120 = state_47087__$1;
(statearr_47094_47120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (6))){
var state_47087__$1 = state_47087;
var statearr_47095_47121 = state_47087__$1;
(statearr_47095_47121[(2)] = null);

(statearr_47095_47121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (3))){
var inst_47084 = (state_47087[(2)]);
var inst_47085 = cljs.core.async.close_BANG_.call(null,out);
var state_47087__$1 = (function (){var statearr_47096 = state_47087;
(statearr_47096[(9)] = inst_47084);

return statearr_47096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47087__$1,inst_47085);
} else {
if((state_val_47088 === (2))){
var state_47087__$1 = state_47087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47087__$1,(4),ch);
} else {
if((state_val_47088 === (11))){
var inst_47067 = (state_47087[(8)]);
var inst_47076 = (state_47087[(2)]);
var inst_47064 = inst_47067;
var state_47087__$1 = (function (){var statearr_47097 = state_47087;
(statearr_47097[(7)] = inst_47064);

(statearr_47097[(10)] = inst_47076);

return statearr_47097;
})();
var statearr_47098_47122 = state_47087__$1;
(statearr_47098_47122[(2)] = null);

(statearr_47098_47122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (9))){
var inst_47067 = (state_47087[(8)]);
var state_47087__$1 = state_47087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47087__$1,(11),out,inst_47067);
} else {
if((state_val_47088 === (5))){
var inst_47064 = (state_47087[(7)]);
var inst_47067 = (state_47087[(8)]);
var inst_47071 = cljs.core._EQ_.call(null,inst_47067,inst_47064);
var state_47087__$1 = state_47087;
if(inst_47071){
var statearr_47100_47123 = state_47087__$1;
(statearr_47100_47123[(1)] = (8));

} else {
var statearr_47101_47124 = state_47087__$1;
(statearr_47101_47124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (10))){
var inst_47079 = (state_47087[(2)]);
var state_47087__$1 = state_47087;
var statearr_47102_47125 = state_47087__$1;
(statearr_47102_47125[(2)] = inst_47079);

(statearr_47102_47125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47088 === (8))){
var inst_47064 = (state_47087[(7)]);
var tmp47099 = inst_47064;
var inst_47064__$1 = tmp47099;
var state_47087__$1 = (function (){var statearr_47103 = state_47087;
(statearr_47103[(7)] = inst_47064__$1);

return statearr_47103;
})();
var statearr_47104_47126 = state_47087__$1;
(statearr_47104_47126[(2)] = null);

(statearr_47104_47126[(1)] = (2));


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
});})(c__37632__auto___47116,out))
;
return ((function (switch__37611__auto__,c__37632__auto___47116,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_47108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47108[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_47108[(1)] = (1));

return statearr_47108;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_47087){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_47087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47109){if((e47109 instanceof Object)){
var ex__37615__auto__ = e47109;
var statearr_47110_47127 = state_47087;
(statearr_47110_47127[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47128 = state_47087;
state_47087 = G__47128;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_47087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_47087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___47116,out))
})();
var state__37634__auto__ = (function (){var statearr_47111 = f__37633__auto__.call(null);
(statearr_47111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___47116);

return statearr_47111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___47116,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47129 = [];
var len__36574__auto___47199 = arguments.length;
var i__36575__auto___47200 = (0);
while(true){
if((i__36575__auto___47200 < len__36574__auto___47199)){
args47129.push((arguments[i__36575__auto___47200]));

var G__47201 = (i__36575__auto___47200 + (1));
i__36575__auto___47200 = G__47201;
continue;
} else {
}
break;
}

var G__47131 = args47129.length;
switch (G__47131) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47129.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___47203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___47203,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___47203,out){
return (function (state_47169){
var state_val_47170 = (state_47169[(1)]);
if((state_val_47170 === (7))){
var inst_47165 = (state_47169[(2)]);
var state_47169__$1 = state_47169;
var statearr_47171_47204 = state_47169__$1;
(statearr_47171_47204[(2)] = inst_47165);

(statearr_47171_47204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (1))){
var inst_47132 = (new Array(n));
var inst_47133 = inst_47132;
var inst_47134 = (0);
var state_47169__$1 = (function (){var statearr_47172 = state_47169;
(statearr_47172[(7)] = inst_47133);

(statearr_47172[(8)] = inst_47134);

return statearr_47172;
})();
var statearr_47173_47205 = state_47169__$1;
(statearr_47173_47205[(2)] = null);

(statearr_47173_47205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (4))){
var inst_47137 = (state_47169[(9)]);
var inst_47137__$1 = (state_47169[(2)]);
var inst_47138 = (inst_47137__$1 == null);
var inst_47139 = cljs.core.not.call(null,inst_47138);
var state_47169__$1 = (function (){var statearr_47174 = state_47169;
(statearr_47174[(9)] = inst_47137__$1);

return statearr_47174;
})();
if(inst_47139){
var statearr_47175_47206 = state_47169__$1;
(statearr_47175_47206[(1)] = (5));

} else {
var statearr_47176_47207 = state_47169__$1;
(statearr_47176_47207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (15))){
var inst_47159 = (state_47169[(2)]);
var state_47169__$1 = state_47169;
var statearr_47177_47208 = state_47169__$1;
(statearr_47177_47208[(2)] = inst_47159);

(statearr_47177_47208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (13))){
var state_47169__$1 = state_47169;
var statearr_47178_47209 = state_47169__$1;
(statearr_47178_47209[(2)] = null);

(statearr_47178_47209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (6))){
var inst_47134 = (state_47169[(8)]);
var inst_47155 = (inst_47134 > (0));
var state_47169__$1 = state_47169;
if(cljs.core.truth_(inst_47155)){
var statearr_47179_47210 = state_47169__$1;
(statearr_47179_47210[(1)] = (12));

} else {
var statearr_47180_47211 = state_47169__$1;
(statearr_47180_47211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (3))){
var inst_47167 = (state_47169[(2)]);
var state_47169__$1 = state_47169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47169__$1,inst_47167);
} else {
if((state_val_47170 === (12))){
var inst_47133 = (state_47169[(7)]);
var inst_47157 = cljs.core.vec.call(null,inst_47133);
var state_47169__$1 = state_47169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47169__$1,(15),out,inst_47157);
} else {
if((state_val_47170 === (2))){
var state_47169__$1 = state_47169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47169__$1,(4),ch);
} else {
if((state_val_47170 === (11))){
var inst_47149 = (state_47169[(2)]);
var inst_47150 = (new Array(n));
var inst_47133 = inst_47150;
var inst_47134 = (0);
var state_47169__$1 = (function (){var statearr_47181 = state_47169;
(statearr_47181[(10)] = inst_47149);

(statearr_47181[(7)] = inst_47133);

(statearr_47181[(8)] = inst_47134);

return statearr_47181;
})();
var statearr_47182_47212 = state_47169__$1;
(statearr_47182_47212[(2)] = null);

(statearr_47182_47212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (9))){
var inst_47133 = (state_47169[(7)]);
var inst_47147 = cljs.core.vec.call(null,inst_47133);
var state_47169__$1 = state_47169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47169__$1,(11),out,inst_47147);
} else {
if((state_val_47170 === (5))){
var inst_47133 = (state_47169[(7)]);
var inst_47134 = (state_47169[(8)]);
var inst_47137 = (state_47169[(9)]);
var inst_47142 = (state_47169[(11)]);
var inst_47141 = (inst_47133[inst_47134] = inst_47137);
var inst_47142__$1 = (inst_47134 + (1));
var inst_47143 = (inst_47142__$1 < n);
var state_47169__$1 = (function (){var statearr_47183 = state_47169;
(statearr_47183[(12)] = inst_47141);

(statearr_47183[(11)] = inst_47142__$1);

return statearr_47183;
})();
if(cljs.core.truth_(inst_47143)){
var statearr_47184_47213 = state_47169__$1;
(statearr_47184_47213[(1)] = (8));

} else {
var statearr_47185_47214 = state_47169__$1;
(statearr_47185_47214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (14))){
var inst_47162 = (state_47169[(2)]);
var inst_47163 = cljs.core.async.close_BANG_.call(null,out);
var state_47169__$1 = (function (){var statearr_47187 = state_47169;
(statearr_47187[(13)] = inst_47162);

return statearr_47187;
})();
var statearr_47188_47215 = state_47169__$1;
(statearr_47188_47215[(2)] = inst_47163);

(statearr_47188_47215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (10))){
var inst_47153 = (state_47169[(2)]);
var state_47169__$1 = state_47169;
var statearr_47189_47216 = state_47169__$1;
(statearr_47189_47216[(2)] = inst_47153);

(statearr_47189_47216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47170 === (8))){
var inst_47133 = (state_47169[(7)]);
var inst_47142 = (state_47169[(11)]);
var tmp47186 = inst_47133;
var inst_47133__$1 = tmp47186;
var inst_47134 = inst_47142;
var state_47169__$1 = (function (){var statearr_47190 = state_47169;
(statearr_47190[(7)] = inst_47133__$1);

(statearr_47190[(8)] = inst_47134);

return statearr_47190;
})();
var statearr_47191_47217 = state_47169__$1;
(statearr_47191_47217[(2)] = null);

(statearr_47191_47217[(1)] = (2));


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
});})(c__37632__auto___47203,out))
;
return ((function (switch__37611__auto__,c__37632__auto___47203,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_47195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47195[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_47195[(1)] = (1));

return statearr_47195;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_47169){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_47169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47196){if((e47196 instanceof Object)){
var ex__37615__auto__ = e47196;
var statearr_47197_47218 = state_47169;
(statearr_47197_47218[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47219 = state_47169;
state_47169 = G__47219;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_47169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_47169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___47203,out))
})();
var state__37634__auto__ = (function (){var statearr_47198 = f__37633__auto__.call(null);
(statearr_47198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___47203);

return statearr_47198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___47203,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47220 = [];
var len__36574__auto___47294 = arguments.length;
var i__36575__auto___47295 = (0);
while(true){
if((i__36575__auto___47295 < len__36574__auto___47294)){
args47220.push((arguments[i__36575__auto___47295]));

var G__47296 = (i__36575__auto___47295 + (1));
i__36575__auto___47295 = G__47296;
continue;
} else {
}
break;
}

var G__47222 = args47220.length;
switch (G__47222) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47220.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___47298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___47298,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___47298,out){
return (function (state_47264){
var state_val_47265 = (state_47264[(1)]);
if((state_val_47265 === (7))){
var inst_47260 = (state_47264[(2)]);
var state_47264__$1 = state_47264;
var statearr_47266_47299 = state_47264__$1;
(statearr_47266_47299[(2)] = inst_47260);

(statearr_47266_47299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (1))){
var inst_47223 = [];
var inst_47224 = inst_47223;
var inst_47225 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47264__$1 = (function (){var statearr_47267 = state_47264;
(statearr_47267[(7)] = inst_47224);

(statearr_47267[(8)] = inst_47225);

return statearr_47267;
})();
var statearr_47268_47300 = state_47264__$1;
(statearr_47268_47300[(2)] = null);

(statearr_47268_47300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (4))){
var inst_47228 = (state_47264[(9)]);
var inst_47228__$1 = (state_47264[(2)]);
var inst_47229 = (inst_47228__$1 == null);
var inst_47230 = cljs.core.not.call(null,inst_47229);
var state_47264__$1 = (function (){var statearr_47269 = state_47264;
(statearr_47269[(9)] = inst_47228__$1);

return statearr_47269;
})();
if(inst_47230){
var statearr_47270_47301 = state_47264__$1;
(statearr_47270_47301[(1)] = (5));

} else {
var statearr_47271_47302 = state_47264__$1;
(statearr_47271_47302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (15))){
var inst_47254 = (state_47264[(2)]);
var state_47264__$1 = state_47264;
var statearr_47272_47303 = state_47264__$1;
(statearr_47272_47303[(2)] = inst_47254);

(statearr_47272_47303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (13))){
var state_47264__$1 = state_47264;
var statearr_47273_47304 = state_47264__$1;
(statearr_47273_47304[(2)] = null);

(statearr_47273_47304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (6))){
var inst_47224 = (state_47264[(7)]);
var inst_47249 = inst_47224.length;
var inst_47250 = (inst_47249 > (0));
var state_47264__$1 = state_47264;
if(cljs.core.truth_(inst_47250)){
var statearr_47274_47305 = state_47264__$1;
(statearr_47274_47305[(1)] = (12));

} else {
var statearr_47275_47306 = state_47264__$1;
(statearr_47275_47306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (3))){
var inst_47262 = (state_47264[(2)]);
var state_47264__$1 = state_47264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47264__$1,inst_47262);
} else {
if((state_val_47265 === (12))){
var inst_47224 = (state_47264[(7)]);
var inst_47252 = cljs.core.vec.call(null,inst_47224);
var state_47264__$1 = state_47264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47264__$1,(15),out,inst_47252);
} else {
if((state_val_47265 === (2))){
var state_47264__$1 = state_47264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47264__$1,(4),ch);
} else {
if((state_val_47265 === (11))){
var inst_47228 = (state_47264[(9)]);
var inst_47232 = (state_47264[(10)]);
var inst_47242 = (state_47264[(2)]);
var inst_47243 = [];
var inst_47244 = inst_47243.push(inst_47228);
var inst_47224 = inst_47243;
var inst_47225 = inst_47232;
var state_47264__$1 = (function (){var statearr_47276 = state_47264;
(statearr_47276[(7)] = inst_47224);

(statearr_47276[(8)] = inst_47225);

(statearr_47276[(11)] = inst_47244);

(statearr_47276[(12)] = inst_47242);

return statearr_47276;
})();
var statearr_47277_47307 = state_47264__$1;
(statearr_47277_47307[(2)] = null);

(statearr_47277_47307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (9))){
var inst_47224 = (state_47264[(7)]);
var inst_47240 = cljs.core.vec.call(null,inst_47224);
var state_47264__$1 = state_47264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47264__$1,(11),out,inst_47240);
} else {
if((state_val_47265 === (5))){
var inst_47228 = (state_47264[(9)]);
var inst_47225 = (state_47264[(8)]);
var inst_47232 = (state_47264[(10)]);
var inst_47232__$1 = f.call(null,inst_47228);
var inst_47233 = cljs.core._EQ_.call(null,inst_47232__$1,inst_47225);
var inst_47234 = cljs.core.keyword_identical_QMARK_.call(null,inst_47225,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47235 = (inst_47233) || (inst_47234);
var state_47264__$1 = (function (){var statearr_47278 = state_47264;
(statearr_47278[(10)] = inst_47232__$1);

return statearr_47278;
})();
if(cljs.core.truth_(inst_47235)){
var statearr_47279_47308 = state_47264__$1;
(statearr_47279_47308[(1)] = (8));

} else {
var statearr_47280_47309 = state_47264__$1;
(statearr_47280_47309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (14))){
var inst_47257 = (state_47264[(2)]);
var inst_47258 = cljs.core.async.close_BANG_.call(null,out);
var state_47264__$1 = (function (){var statearr_47282 = state_47264;
(statearr_47282[(13)] = inst_47257);

return statearr_47282;
})();
var statearr_47283_47310 = state_47264__$1;
(statearr_47283_47310[(2)] = inst_47258);

(statearr_47283_47310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (10))){
var inst_47247 = (state_47264[(2)]);
var state_47264__$1 = state_47264;
var statearr_47284_47311 = state_47264__$1;
(statearr_47284_47311[(2)] = inst_47247);

(statearr_47284_47311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47265 === (8))){
var inst_47228 = (state_47264[(9)]);
var inst_47224 = (state_47264[(7)]);
var inst_47232 = (state_47264[(10)]);
var inst_47237 = inst_47224.push(inst_47228);
var tmp47281 = inst_47224;
var inst_47224__$1 = tmp47281;
var inst_47225 = inst_47232;
var state_47264__$1 = (function (){var statearr_47285 = state_47264;
(statearr_47285[(7)] = inst_47224__$1);

(statearr_47285[(14)] = inst_47237);

(statearr_47285[(8)] = inst_47225);

return statearr_47285;
})();
var statearr_47286_47312 = state_47264__$1;
(statearr_47286_47312[(2)] = null);

(statearr_47286_47312[(1)] = (2));


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
});})(c__37632__auto___47298,out))
;
return ((function (switch__37611__auto__,c__37632__auto___47298,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_47290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47290[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_47290[(1)] = (1));

return statearr_47290;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_47264){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_47264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47291){if((e47291 instanceof Object)){
var ex__37615__auto__ = e47291;
var statearr_47292_47313 = state_47264;
(statearr_47292_47313[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47314 = state_47264;
state_47264 = G__47314;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_47264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_47264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___47298,out))
})();
var state__37634__auto__ = (function (){var statearr_47293 = f__37633__auto__.call(null);
(statearr_47293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___47298);

return statearr_47293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___47298,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456711311324