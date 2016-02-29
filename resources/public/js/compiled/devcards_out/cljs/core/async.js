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
var args52370 = [];
var len__36574__auto___52376 = arguments.length;
var i__36575__auto___52377 = (0);
while(true){
if((i__36575__auto___52377 < len__36574__auto___52376)){
args52370.push((arguments[i__36575__auto___52377]));

var G__52378 = (i__36575__auto___52377 + (1));
i__36575__auto___52377 = G__52378;
continue;
} else {
}
break;
}

var G__52372 = args52370.length;
switch (G__52372) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52370.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async52373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52373 = (function (f,blockable,meta52374){
this.f = f;
this.blockable = blockable;
this.meta52374 = meta52374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52375,meta52374__$1){
var self__ = this;
var _52375__$1 = this;
return (new cljs.core.async.t_cljs$core$async52373(self__.f,self__.blockable,meta52374__$1));
});

cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52375){
var self__ = this;
var _52375__$1 = this;
return self__.meta52374;
});

cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52374","meta52374",237737990,null)], null);
});

cljs.core.async.t_cljs$core$async52373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52373";

cljs.core.async.t_cljs$core$async52373.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async52373");
});

cljs.core.async.__GT_t_cljs$core$async52373 = (function cljs$core$async$__GT_t_cljs$core$async52373(f__$1,blockable__$1,meta52374){
return (new cljs.core.async.t_cljs$core$async52373(f__$1,blockable__$1,meta52374));
});

}

return (new cljs.core.async.t_cljs$core$async52373(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args52382 = [];
var len__36574__auto___52385 = arguments.length;
var i__36575__auto___52386 = (0);
while(true){
if((i__36575__auto___52386 < len__36574__auto___52385)){
args52382.push((arguments[i__36575__auto___52386]));

var G__52387 = (i__36575__auto___52386 + (1));
i__36575__auto___52386 = G__52387;
continue;
} else {
}
break;
}

var G__52384 = args52382.length;
switch (G__52384) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52382.length)].join('')));

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
var args52389 = [];
var len__36574__auto___52392 = arguments.length;
var i__36575__auto___52393 = (0);
while(true){
if((i__36575__auto___52393 < len__36574__auto___52392)){
args52389.push((arguments[i__36575__auto___52393]));

var G__52394 = (i__36575__auto___52393 + (1));
i__36575__auto___52393 = G__52394;
continue;
} else {
}
break;
}

var G__52391 = args52389.length;
switch (G__52391) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52389.length)].join('')));

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
var args52396 = [];
var len__36574__auto___52399 = arguments.length;
var i__36575__auto___52400 = (0);
while(true){
if((i__36575__auto___52400 < len__36574__auto___52399)){
args52396.push((arguments[i__36575__auto___52400]));

var G__52401 = (i__36575__auto___52400 + (1));
i__36575__auto___52400 = G__52401;
continue;
} else {
}
break;
}

var G__52398 = args52396.length;
switch (G__52398) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52396.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_52403 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52403);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52403,ret){
return (function (){
return fn1.call(null,val_52403);
});})(val_52403,ret))
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
var args52404 = [];
var len__36574__auto___52407 = arguments.length;
var i__36575__auto___52408 = (0);
while(true){
if((i__36575__auto___52408 < len__36574__auto___52407)){
args52404.push((arguments[i__36575__auto___52408]));

var G__52409 = (i__36575__auto___52408 + (1));
i__36575__auto___52408 = G__52409;
continue;
} else {
}
break;
}

var G__52406 = args52404.length;
switch (G__52406) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52404.length)].join('')));

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
var n__36419__auto___52411 = n;
var x_52412 = (0);
while(true){
if((x_52412 < n__36419__auto___52411)){
(a[x_52412] = (0));

var G__52413 = (x_52412 + (1));
x_52412 = G__52413;
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

var G__52414 = (i + (1));
i = G__52414;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async52418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52418 = (function (alt_flag,flag,meta52419){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta52419 = meta52419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52420,meta52419__$1){
var self__ = this;
var _52420__$1 = this;
return (new cljs.core.async.t_cljs$core$async52418(self__.alt_flag,self__.flag,meta52419__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52420){
var self__ = this;
var _52420__$1 = this;
return self__.meta52419;
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52419","meta52419",1252590371,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52418";

cljs.core.async.t_cljs$core$async52418.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async52418");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async52418 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52418(alt_flag__$1,flag__$1,meta52419){
return (new cljs.core.async.t_cljs$core$async52418(alt_flag__$1,flag__$1,meta52419));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52418(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async52424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52424 = (function (alt_handler,flag,cb,meta52425){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta52425 = meta52425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52426,meta52425__$1){
var self__ = this;
var _52426__$1 = this;
return (new cljs.core.async.t_cljs$core$async52424(self__.alt_handler,self__.flag,self__.cb,meta52425__$1));
});

cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52426){
var self__ = this;
var _52426__$1 = this;
return self__.meta52425;
});

cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52425","meta52425",246846510,null)], null);
});

cljs.core.async.t_cljs$core$async52424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52424";

cljs.core.async.t_cljs$core$async52424.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async52424");
});

cljs.core.async.__GT_t_cljs$core$async52424 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52424(alt_handler__$1,flag__$1,cb__$1,meta52425){
return (new cljs.core.async.t_cljs$core$async52424(alt_handler__$1,flag__$1,cb__$1,meta52425));
});

}

return (new cljs.core.async.t_cljs$core$async52424(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__52427_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52427_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52428_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52428_SHARP_,port], null));
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
var G__52429 = (i + (1));
i = G__52429;
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
var len__36574__auto___52435 = arguments.length;
var i__36575__auto___52436 = (0);
while(true){
if((i__36575__auto___52436 < len__36574__auto___52435)){
args__36581__auto__.push((arguments[i__36575__auto___52436]));

var G__52437 = (i__36575__auto___52436 + (1));
i__36575__auto___52436 = G__52437;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((1) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36582__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52432){
var map__52433 = p__52432;
var map__52433__$1 = ((((!((map__52433 == null)))?((((map__52433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52433):map__52433);
var opts = map__52433__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52430){
var G__52431 = cljs.core.first.call(null,seq52430);
var seq52430__$1 = cljs.core.next.call(null,seq52430);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52431,seq52430__$1);
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
var args52438 = [];
var len__36574__auto___52488 = arguments.length;
var i__36575__auto___52489 = (0);
while(true){
if((i__36575__auto___52489 < len__36574__auto___52488)){
args52438.push((arguments[i__36575__auto___52489]));

var G__52490 = (i__36575__auto___52489 + (1));
i__36575__auto___52489 = G__52490;
continue;
} else {
}
break;
}

var G__52440 = args52438.length;
switch (G__52440) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52438.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37632__auto___52492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___52492){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___52492){
return (function (state_52464){
var state_val_52465 = (state_52464[(1)]);
if((state_val_52465 === (7))){
var inst_52460 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
var statearr_52466_52493 = state_52464__$1;
(statearr_52466_52493[(2)] = inst_52460);

(statearr_52466_52493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (1))){
var state_52464__$1 = state_52464;
var statearr_52467_52494 = state_52464__$1;
(statearr_52467_52494[(2)] = null);

(statearr_52467_52494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (4))){
var inst_52443 = (state_52464[(7)]);
var inst_52443__$1 = (state_52464[(2)]);
var inst_52444 = (inst_52443__$1 == null);
var state_52464__$1 = (function (){var statearr_52468 = state_52464;
(statearr_52468[(7)] = inst_52443__$1);

return statearr_52468;
})();
if(cljs.core.truth_(inst_52444)){
var statearr_52469_52495 = state_52464__$1;
(statearr_52469_52495[(1)] = (5));

} else {
var statearr_52470_52496 = state_52464__$1;
(statearr_52470_52496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (13))){
var state_52464__$1 = state_52464;
var statearr_52471_52497 = state_52464__$1;
(statearr_52471_52497[(2)] = null);

(statearr_52471_52497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (6))){
var inst_52443 = (state_52464[(7)]);
var state_52464__$1 = state_52464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52464__$1,(11),to,inst_52443);
} else {
if((state_val_52465 === (3))){
var inst_52462 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52464__$1,inst_52462);
} else {
if((state_val_52465 === (12))){
var state_52464__$1 = state_52464;
var statearr_52472_52498 = state_52464__$1;
(statearr_52472_52498[(2)] = null);

(statearr_52472_52498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (2))){
var state_52464__$1 = state_52464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52464__$1,(4),from);
} else {
if((state_val_52465 === (11))){
var inst_52453 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
if(cljs.core.truth_(inst_52453)){
var statearr_52473_52499 = state_52464__$1;
(statearr_52473_52499[(1)] = (12));

} else {
var statearr_52474_52500 = state_52464__$1;
(statearr_52474_52500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (9))){
var state_52464__$1 = state_52464;
var statearr_52475_52501 = state_52464__$1;
(statearr_52475_52501[(2)] = null);

(statearr_52475_52501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (5))){
var state_52464__$1 = state_52464;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52476_52502 = state_52464__$1;
(statearr_52476_52502[(1)] = (8));

} else {
var statearr_52477_52503 = state_52464__$1;
(statearr_52477_52503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (14))){
var inst_52458 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
var statearr_52478_52504 = state_52464__$1;
(statearr_52478_52504[(2)] = inst_52458);

(statearr_52478_52504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (10))){
var inst_52450 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
var statearr_52479_52505 = state_52464__$1;
(statearr_52479_52505[(2)] = inst_52450);

(statearr_52479_52505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (8))){
var inst_52447 = cljs.core.async.close_BANG_.call(null,to);
var state_52464__$1 = state_52464;
var statearr_52480_52506 = state_52464__$1;
(statearr_52480_52506[(2)] = inst_52447);

(statearr_52480_52506[(1)] = (10));


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
});})(c__37632__auto___52492))
;
return ((function (switch__37611__auto__,c__37632__auto___52492){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_52484 = [null,null,null,null,null,null,null,null];
(statearr_52484[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_52484[(1)] = (1));

return statearr_52484;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_52464){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52485){if((e52485 instanceof Object)){
var ex__37615__auto__ = e52485;
var statearr_52486_52507 = state_52464;
(statearr_52486_52507[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52508 = state_52464;
state_52464 = G__52508;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_52464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_52464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___52492))
})();
var state__37634__auto__ = (function (){var statearr_52487 = f__37633__auto__.call(null);
(statearr_52487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___52492);

return statearr_52487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___52492))
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
return (function (p__52692){
var vec__52693 = p__52692;
var v = cljs.core.nth.call(null,vec__52693,(0),null);
var p = cljs.core.nth.call(null,vec__52693,(1),null);
var job = vec__52693;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37632__auto___52875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results){
return (function (state_52698){
var state_val_52699 = (state_52698[(1)]);
if((state_val_52699 === (1))){
var state_52698__$1 = state_52698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52698__$1,(2),res,v);
} else {
if((state_val_52699 === (2))){
var inst_52695 = (state_52698[(2)]);
var inst_52696 = cljs.core.async.close_BANG_.call(null,res);
var state_52698__$1 = (function (){var statearr_52700 = state_52698;
(statearr_52700[(7)] = inst_52695);

return statearr_52700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52698__$1,inst_52696);
} else {
return null;
}
}
});})(c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results))
;
return ((function (switch__37611__auto__,c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_52704 = [null,null,null,null,null,null,null,null];
(statearr_52704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_52704[(1)] = (1));

return statearr_52704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_52698){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52705){if((e52705 instanceof Object)){
var ex__37615__auto__ = e52705;
var statearr_52706_52876 = state_52698;
(statearr_52706_52876[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52877 = state_52698;
state_52698 = G__52877;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_52698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_52698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results))
})();
var state__37634__auto__ = (function (){var statearr_52707 = f__37633__auto__.call(null);
(statearr_52707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___52875);

return statearr_52707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___52875,res,vec__52693,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52708){
var vec__52709 = p__52708;
var v = cljs.core.nth.call(null,vec__52709,(0),null);
var p = cljs.core.nth.call(null,vec__52709,(1),null);
var job = vec__52709;
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
var n__36419__auto___52878 = n;
var __52879 = (0);
while(true){
if((__52879 < n__36419__auto___52878)){
var G__52710_52880 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__52710_52880) {
case "compute":
var c__37632__auto___52882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52879,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (__52879,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function (state_52723){
var state_val_52724 = (state_52723[(1)]);
if((state_val_52724 === (1))){
var state_52723__$1 = state_52723;
var statearr_52725_52883 = state_52723__$1;
(statearr_52725_52883[(2)] = null);

(statearr_52725_52883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (2))){
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52723__$1,(4),jobs);
} else {
if((state_val_52724 === (3))){
var inst_52721 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52723__$1,inst_52721);
} else {
if((state_val_52724 === (4))){
var inst_52713 = (state_52723[(2)]);
var inst_52714 = process.call(null,inst_52713);
var state_52723__$1 = state_52723;
if(cljs.core.truth_(inst_52714)){
var statearr_52726_52884 = state_52723__$1;
(statearr_52726_52884[(1)] = (5));

} else {
var statearr_52727_52885 = state_52723__$1;
(statearr_52727_52885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (5))){
var state_52723__$1 = state_52723;
var statearr_52728_52886 = state_52723__$1;
(statearr_52728_52886[(2)] = null);

(statearr_52728_52886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (6))){
var state_52723__$1 = state_52723;
var statearr_52729_52887 = state_52723__$1;
(statearr_52729_52887[(2)] = null);

(statearr_52729_52887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52724 === (7))){
var inst_52719 = (state_52723[(2)]);
var state_52723__$1 = state_52723;
var statearr_52730_52888 = state_52723__$1;
(statearr_52730_52888[(2)] = inst_52719);

(statearr_52730_52888[(1)] = (3));


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
});})(__52879,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
;
return ((function (__52879,switch__37611__auto__,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_52734 = [null,null,null,null,null,null,null];
(statearr_52734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_52734[(1)] = (1));

return statearr_52734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_52723){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52735){if((e52735 instanceof Object)){
var ex__37615__auto__ = e52735;
var statearr_52736_52889 = state_52723;
(statearr_52736_52889[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52890 = state_52723;
state_52723 = G__52890;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_52723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_52723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(__52879,switch__37611__auto__,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_52737 = f__37633__auto__.call(null);
(statearr_52737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___52882);

return statearr_52737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(__52879,c__37632__auto___52882,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
);


break;
case "async":
var c__37632__auto___52891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52879,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (__52879,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function (state_52750){
var state_val_52751 = (state_52750[(1)]);
if((state_val_52751 === (1))){
var state_52750__$1 = state_52750;
var statearr_52752_52892 = state_52750__$1;
(statearr_52752_52892[(2)] = null);

(statearr_52752_52892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52751 === (2))){
var state_52750__$1 = state_52750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52750__$1,(4),jobs);
} else {
if((state_val_52751 === (3))){
var inst_52748 = (state_52750[(2)]);
var state_52750__$1 = state_52750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52750__$1,inst_52748);
} else {
if((state_val_52751 === (4))){
var inst_52740 = (state_52750[(2)]);
var inst_52741 = async.call(null,inst_52740);
var state_52750__$1 = state_52750;
if(cljs.core.truth_(inst_52741)){
var statearr_52753_52893 = state_52750__$1;
(statearr_52753_52893[(1)] = (5));

} else {
var statearr_52754_52894 = state_52750__$1;
(statearr_52754_52894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52751 === (5))){
var state_52750__$1 = state_52750;
var statearr_52755_52895 = state_52750__$1;
(statearr_52755_52895[(2)] = null);

(statearr_52755_52895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52751 === (6))){
var state_52750__$1 = state_52750;
var statearr_52756_52896 = state_52750__$1;
(statearr_52756_52896[(2)] = null);

(statearr_52756_52896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52751 === (7))){
var inst_52746 = (state_52750[(2)]);
var state_52750__$1 = state_52750;
var statearr_52757_52897 = state_52750__$1;
(statearr_52757_52897[(2)] = inst_52746);

(statearr_52757_52897[(1)] = (3));


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
});})(__52879,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
;
return ((function (__52879,switch__37611__auto__,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_52761 = [null,null,null,null,null,null,null];
(statearr_52761[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_52761[(1)] = (1));

return statearr_52761;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_52750){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52762){if((e52762 instanceof Object)){
var ex__37615__auto__ = e52762;
var statearr_52763_52898 = state_52750;
(statearr_52763_52898[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52899 = state_52750;
state_52750 = G__52899;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_52750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_52750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(__52879,switch__37611__auto__,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_52764 = f__37633__auto__.call(null);
(statearr_52764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___52891);

return statearr_52764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(__52879,c__37632__auto___52891,G__52710_52880,n__36419__auto___52878,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__52900 = (__52879 + (1));
__52879 = G__52900;
continue;
} else {
}
break;
}

var c__37632__auto___52901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___52901,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___52901,jobs,results,process,async){
return (function (state_52786){
var state_val_52787 = (state_52786[(1)]);
if((state_val_52787 === (1))){
var state_52786__$1 = state_52786;
var statearr_52788_52902 = state_52786__$1;
(statearr_52788_52902[(2)] = null);

(statearr_52788_52902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52787 === (2))){
var state_52786__$1 = state_52786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52786__$1,(4),from);
} else {
if((state_val_52787 === (3))){
var inst_52784 = (state_52786[(2)]);
var state_52786__$1 = state_52786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52786__$1,inst_52784);
} else {
if((state_val_52787 === (4))){
var inst_52767 = (state_52786[(7)]);
var inst_52767__$1 = (state_52786[(2)]);
var inst_52768 = (inst_52767__$1 == null);
var state_52786__$1 = (function (){var statearr_52789 = state_52786;
(statearr_52789[(7)] = inst_52767__$1);

return statearr_52789;
})();
if(cljs.core.truth_(inst_52768)){
var statearr_52790_52903 = state_52786__$1;
(statearr_52790_52903[(1)] = (5));

} else {
var statearr_52791_52904 = state_52786__$1;
(statearr_52791_52904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52787 === (5))){
var inst_52770 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52786__$1 = state_52786;
var statearr_52792_52905 = state_52786__$1;
(statearr_52792_52905[(2)] = inst_52770);

(statearr_52792_52905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52787 === (6))){
var inst_52767 = (state_52786[(7)]);
var inst_52772 = (state_52786[(8)]);
var inst_52772__$1 = cljs.core.async.chan.call(null,(1));
var inst_52773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52774 = [inst_52767,inst_52772__$1];
var inst_52775 = (new cljs.core.PersistentVector(null,2,(5),inst_52773,inst_52774,null));
var state_52786__$1 = (function (){var statearr_52793 = state_52786;
(statearr_52793[(8)] = inst_52772__$1);

return statearr_52793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52786__$1,(8),jobs,inst_52775);
} else {
if((state_val_52787 === (7))){
var inst_52782 = (state_52786[(2)]);
var state_52786__$1 = state_52786;
var statearr_52794_52906 = state_52786__$1;
(statearr_52794_52906[(2)] = inst_52782);

(statearr_52794_52906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52787 === (8))){
var inst_52772 = (state_52786[(8)]);
var inst_52777 = (state_52786[(2)]);
var state_52786__$1 = (function (){var statearr_52795 = state_52786;
(statearr_52795[(9)] = inst_52777);

return statearr_52795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52786__$1,(9),results,inst_52772);
} else {
if((state_val_52787 === (9))){
var inst_52779 = (state_52786[(2)]);
var state_52786__$1 = (function (){var statearr_52796 = state_52786;
(statearr_52796[(10)] = inst_52779);

return statearr_52796;
})();
var statearr_52797_52907 = state_52786__$1;
(statearr_52797_52907[(2)] = null);

(statearr_52797_52907[(1)] = (2));


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
});})(c__37632__auto___52901,jobs,results,process,async))
;
return ((function (switch__37611__auto__,c__37632__auto___52901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0 = (function (){
var statearr_52801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_52801[(1)] = (1));

return statearr_52801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_52786){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52802){if((e52802 instanceof Object)){
var ex__37615__auto__ = e52802;
var statearr_52803_52908 = state_52786;
(statearr_52803_52908[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52909 = state_52786;
state_52786 = G__52909;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_52786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_52786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___52901,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_52804 = f__37633__auto__.call(null);
(statearr_52804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___52901);

return statearr_52804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___52901,jobs,results,process,async))
);


var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,jobs,results,process,async){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,jobs,results,process,async){
return (function (state_52842){
var state_val_52843 = (state_52842[(1)]);
if((state_val_52843 === (7))){
var inst_52838 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
var statearr_52844_52910 = state_52842__$1;
(statearr_52844_52910[(2)] = inst_52838);

(statearr_52844_52910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (20))){
var state_52842__$1 = state_52842;
var statearr_52845_52911 = state_52842__$1;
(statearr_52845_52911[(2)] = null);

(statearr_52845_52911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (1))){
var state_52842__$1 = state_52842;
var statearr_52846_52912 = state_52842__$1;
(statearr_52846_52912[(2)] = null);

(statearr_52846_52912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (4))){
var inst_52807 = (state_52842[(7)]);
var inst_52807__$1 = (state_52842[(2)]);
var inst_52808 = (inst_52807__$1 == null);
var state_52842__$1 = (function (){var statearr_52847 = state_52842;
(statearr_52847[(7)] = inst_52807__$1);

return statearr_52847;
})();
if(cljs.core.truth_(inst_52808)){
var statearr_52848_52913 = state_52842__$1;
(statearr_52848_52913[(1)] = (5));

} else {
var statearr_52849_52914 = state_52842__$1;
(statearr_52849_52914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (15))){
var inst_52820 = (state_52842[(8)]);
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52842__$1,(18),to,inst_52820);
} else {
if((state_val_52843 === (21))){
var inst_52833 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
var statearr_52850_52915 = state_52842__$1;
(statearr_52850_52915[(2)] = inst_52833);

(statearr_52850_52915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (13))){
var inst_52835 = (state_52842[(2)]);
var state_52842__$1 = (function (){var statearr_52851 = state_52842;
(statearr_52851[(9)] = inst_52835);

return statearr_52851;
})();
var statearr_52852_52916 = state_52842__$1;
(statearr_52852_52916[(2)] = null);

(statearr_52852_52916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (6))){
var inst_52807 = (state_52842[(7)]);
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52842__$1,(11),inst_52807);
} else {
if((state_val_52843 === (17))){
var inst_52828 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
if(cljs.core.truth_(inst_52828)){
var statearr_52853_52917 = state_52842__$1;
(statearr_52853_52917[(1)] = (19));

} else {
var statearr_52854_52918 = state_52842__$1;
(statearr_52854_52918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (3))){
var inst_52840 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52842__$1,inst_52840);
} else {
if((state_val_52843 === (12))){
var inst_52817 = (state_52842[(10)]);
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52842__$1,(14),inst_52817);
} else {
if((state_val_52843 === (2))){
var state_52842__$1 = state_52842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52842__$1,(4),results);
} else {
if((state_val_52843 === (19))){
var state_52842__$1 = state_52842;
var statearr_52855_52919 = state_52842__$1;
(statearr_52855_52919[(2)] = null);

(statearr_52855_52919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (11))){
var inst_52817 = (state_52842[(2)]);
var state_52842__$1 = (function (){var statearr_52856 = state_52842;
(statearr_52856[(10)] = inst_52817);

return statearr_52856;
})();
var statearr_52857_52920 = state_52842__$1;
(statearr_52857_52920[(2)] = null);

(statearr_52857_52920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (9))){
var state_52842__$1 = state_52842;
var statearr_52858_52921 = state_52842__$1;
(statearr_52858_52921[(2)] = null);

(statearr_52858_52921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (5))){
var state_52842__$1 = state_52842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52859_52922 = state_52842__$1;
(statearr_52859_52922[(1)] = (8));

} else {
var statearr_52860_52923 = state_52842__$1;
(statearr_52860_52923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (14))){
var inst_52820 = (state_52842[(8)]);
var inst_52822 = (state_52842[(11)]);
var inst_52820__$1 = (state_52842[(2)]);
var inst_52821 = (inst_52820__$1 == null);
var inst_52822__$1 = cljs.core.not.call(null,inst_52821);
var state_52842__$1 = (function (){var statearr_52861 = state_52842;
(statearr_52861[(8)] = inst_52820__$1);

(statearr_52861[(11)] = inst_52822__$1);

return statearr_52861;
})();
if(inst_52822__$1){
var statearr_52862_52924 = state_52842__$1;
(statearr_52862_52924[(1)] = (15));

} else {
var statearr_52863_52925 = state_52842__$1;
(statearr_52863_52925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (16))){
var inst_52822 = (state_52842[(11)]);
var state_52842__$1 = state_52842;
var statearr_52864_52926 = state_52842__$1;
(statearr_52864_52926[(2)] = inst_52822);

(statearr_52864_52926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (10))){
var inst_52814 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
var statearr_52865_52927 = state_52842__$1;
(statearr_52865_52927[(2)] = inst_52814);

(statearr_52865_52927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (18))){
var inst_52825 = (state_52842[(2)]);
var state_52842__$1 = state_52842;
var statearr_52866_52928 = state_52842__$1;
(statearr_52866_52928[(2)] = inst_52825);

(statearr_52866_52928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52843 === (8))){
var inst_52811 = cljs.core.async.close_BANG_.call(null,to);
var state_52842__$1 = state_52842;
var statearr_52867_52929 = state_52842__$1;
(statearr_52867_52929[(2)] = inst_52811);

(statearr_52867_52929[(1)] = (10));


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
var statearr_52871 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__);

(statearr_52871[(1)] = (1));

return statearr_52871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1 = (function (state_52842){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52872){if((e52872 instanceof Object)){
var ex__37615__auto__ = e52872;
var statearr_52873_52930 = state_52842;
(statearr_52873_52930[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52931 = state_52842;
state_52842 = G__52931;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__ = function(state_52842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1.call(this,state_52842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,jobs,results,process,async))
})();
var state__37634__auto__ = (function (){var statearr_52874 = f__37633__auto__.call(null);
(statearr_52874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_52874;
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
var args52932 = [];
var len__36574__auto___52935 = arguments.length;
var i__36575__auto___52936 = (0);
while(true){
if((i__36575__auto___52936 < len__36574__auto___52935)){
args52932.push((arguments[i__36575__auto___52936]));

var G__52937 = (i__36575__auto___52936 + (1));
i__36575__auto___52936 = G__52937;
continue;
} else {
}
break;
}

var G__52934 = args52932.length;
switch (G__52934) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52932.length)].join('')));

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
var args52939 = [];
var len__36574__auto___52942 = arguments.length;
var i__36575__auto___52943 = (0);
while(true){
if((i__36575__auto___52943 < len__36574__auto___52942)){
args52939.push((arguments[i__36575__auto___52943]));

var G__52944 = (i__36575__auto___52943 + (1));
i__36575__auto___52943 = G__52944;
continue;
} else {
}
break;
}

var G__52941 = args52939.length;
switch (G__52941) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52939.length)].join('')));

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
var args52946 = [];
var len__36574__auto___52999 = arguments.length;
var i__36575__auto___53000 = (0);
while(true){
if((i__36575__auto___53000 < len__36574__auto___52999)){
args52946.push((arguments[i__36575__auto___53000]));

var G__53001 = (i__36575__auto___53000 + (1));
i__36575__auto___53000 = G__53001;
continue;
} else {
}
break;
}

var G__52948 = args52946.length;
switch (G__52948) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52946.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37632__auto___53003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___53003,tc,fc){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___53003,tc,fc){
return (function (state_52974){
var state_val_52975 = (state_52974[(1)]);
if((state_val_52975 === (7))){
var inst_52970 = (state_52974[(2)]);
var state_52974__$1 = state_52974;
var statearr_52976_53004 = state_52974__$1;
(statearr_52976_53004[(2)] = inst_52970);

(statearr_52976_53004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (1))){
var state_52974__$1 = state_52974;
var statearr_52977_53005 = state_52974__$1;
(statearr_52977_53005[(2)] = null);

(statearr_52977_53005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (4))){
var inst_52951 = (state_52974[(7)]);
var inst_52951__$1 = (state_52974[(2)]);
var inst_52952 = (inst_52951__$1 == null);
var state_52974__$1 = (function (){var statearr_52978 = state_52974;
(statearr_52978[(7)] = inst_52951__$1);

return statearr_52978;
})();
if(cljs.core.truth_(inst_52952)){
var statearr_52979_53006 = state_52974__$1;
(statearr_52979_53006[(1)] = (5));

} else {
var statearr_52980_53007 = state_52974__$1;
(statearr_52980_53007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (13))){
var state_52974__$1 = state_52974;
var statearr_52981_53008 = state_52974__$1;
(statearr_52981_53008[(2)] = null);

(statearr_52981_53008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (6))){
var inst_52951 = (state_52974[(7)]);
var inst_52957 = p.call(null,inst_52951);
var state_52974__$1 = state_52974;
if(cljs.core.truth_(inst_52957)){
var statearr_52982_53009 = state_52974__$1;
(statearr_52982_53009[(1)] = (9));

} else {
var statearr_52983_53010 = state_52974__$1;
(statearr_52983_53010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (3))){
var inst_52972 = (state_52974[(2)]);
var state_52974__$1 = state_52974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52974__$1,inst_52972);
} else {
if((state_val_52975 === (12))){
var state_52974__$1 = state_52974;
var statearr_52984_53011 = state_52974__$1;
(statearr_52984_53011[(2)] = null);

(statearr_52984_53011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (2))){
var state_52974__$1 = state_52974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52974__$1,(4),ch);
} else {
if((state_val_52975 === (11))){
var inst_52951 = (state_52974[(7)]);
var inst_52961 = (state_52974[(2)]);
var state_52974__$1 = state_52974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52974__$1,(8),inst_52961,inst_52951);
} else {
if((state_val_52975 === (9))){
var state_52974__$1 = state_52974;
var statearr_52985_53012 = state_52974__$1;
(statearr_52985_53012[(2)] = tc);

(statearr_52985_53012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (5))){
var inst_52954 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52955 = cljs.core.async.close_BANG_.call(null,fc);
var state_52974__$1 = (function (){var statearr_52986 = state_52974;
(statearr_52986[(8)] = inst_52954);

return statearr_52986;
})();
var statearr_52987_53013 = state_52974__$1;
(statearr_52987_53013[(2)] = inst_52955);

(statearr_52987_53013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (14))){
var inst_52968 = (state_52974[(2)]);
var state_52974__$1 = state_52974;
var statearr_52988_53014 = state_52974__$1;
(statearr_52988_53014[(2)] = inst_52968);

(statearr_52988_53014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (10))){
var state_52974__$1 = state_52974;
var statearr_52989_53015 = state_52974__$1;
(statearr_52989_53015[(2)] = fc);

(statearr_52989_53015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52975 === (8))){
var inst_52963 = (state_52974[(2)]);
var state_52974__$1 = state_52974;
if(cljs.core.truth_(inst_52963)){
var statearr_52990_53016 = state_52974__$1;
(statearr_52990_53016[(1)] = (12));

} else {
var statearr_52991_53017 = state_52974__$1;
(statearr_52991_53017[(1)] = (13));

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
});})(c__37632__auto___53003,tc,fc))
;
return ((function (switch__37611__auto__,c__37632__auto___53003,tc,fc){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_52995 = [null,null,null,null,null,null,null,null,null];
(statearr_52995[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_52995[(1)] = (1));

return statearr_52995;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_52974){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_52974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e52996){if((e52996 instanceof Object)){
var ex__37615__auto__ = e52996;
var statearr_52997_53018 = state_52974;
(statearr_52997_53018[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53019 = state_52974;
state_52974 = G__53019;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_52974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_52974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___53003,tc,fc))
})();
var state__37634__auto__ = (function (){var statearr_52998 = f__37633__auto__.call(null);
(statearr_52998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___53003);

return statearr_52998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___53003,tc,fc))
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
return (function (state_53083){
var state_val_53084 = (state_53083[(1)]);
if((state_val_53084 === (7))){
var inst_53079 = (state_53083[(2)]);
var state_53083__$1 = state_53083;
var statearr_53085_53106 = state_53083__$1;
(statearr_53085_53106[(2)] = inst_53079);

(statearr_53085_53106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (1))){
var inst_53063 = init;
var state_53083__$1 = (function (){var statearr_53086 = state_53083;
(statearr_53086[(7)] = inst_53063);

return statearr_53086;
})();
var statearr_53087_53107 = state_53083__$1;
(statearr_53087_53107[(2)] = null);

(statearr_53087_53107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (4))){
var inst_53066 = (state_53083[(8)]);
var inst_53066__$1 = (state_53083[(2)]);
var inst_53067 = (inst_53066__$1 == null);
var state_53083__$1 = (function (){var statearr_53088 = state_53083;
(statearr_53088[(8)] = inst_53066__$1);

return statearr_53088;
})();
if(cljs.core.truth_(inst_53067)){
var statearr_53089_53108 = state_53083__$1;
(statearr_53089_53108[(1)] = (5));

} else {
var statearr_53090_53109 = state_53083__$1;
(statearr_53090_53109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (6))){
var inst_53066 = (state_53083[(8)]);
var inst_53063 = (state_53083[(7)]);
var inst_53070 = (state_53083[(9)]);
var inst_53070__$1 = f.call(null,inst_53063,inst_53066);
var inst_53071 = cljs.core.reduced_QMARK_.call(null,inst_53070__$1);
var state_53083__$1 = (function (){var statearr_53091 = state_53083;
(statearr_53091[(9)] = inst_53070__$1);

return statearr_53091;
})();
if(inst_53071){
var statearr_53092_53110 = state_53083__$1;
(statearr_53092_53110[(1)] = (8));

} else {
var statearr_53093_53111 = state_53083__$1;
(statearr_53093_53111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (3))){
var inst_53081 = (state_53083[(2)]);
var state_53083__$1 = state_53083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53083__$1,inst_53081);
} else {
if((state_val_53084 === (2))){
var state_53083__$1 = state_53083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53083__$1,(4),ch);
} else {
if((state_val_53084 === (9))){
var inst_53070 = (state_53083[(9)]);
var inst_53063 = inst_53070;
var state_53083__$1 = (function (){var statearr_53094 = state_53083;
(statearr_53094[(7)] = inst_53063);

return statearr_53094;
})();
var statearr_53095_53112 = state_53083__$1;
(statearr_53095_53112[(2)] = null);

(statearr_53095_53112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (5))){
var inst_53063 = (state_53083[(7)]);
var state_53083__$1 = state_53083;
var statearr_53096_53113 = state_53083__$1;
(statearr_53096_53113[(2)] = inst_53063);

(statearr_53096_53113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (10))){
var inst_53077 = (state_53083[(2)]);
var state_53083__$1 = state_53083;
var statearr_53097_53114 = state_53083__$1;
(statearr_53097_53114[(2)] = inst_53077);

(statearr_53097_53114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53084 === (8))){
var inst_53070 = (state_53083[(9)]);
var inst_53073 = cljs.core.deref.call(null,inst_53070);
var state_53083__$1 = state_53083;
var statearr_53098_53115 = state_53083__$1;
(statearr_53098_53115[(2)] = inst_53073);

(statearr_53098_53115[(1)] = (10));


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
var statearr_53102 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53102[(0)] = cljs$core$async$reduce_$_state_machine__37612__auto__);

(statearr_53102[(1)] = (1));

return statearr_53102;
});
var cljs$core$async$reduce_$_state_machine__37612__auto____1 = (function (state_53083){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_53083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e53103){if((e53103 instanceof Object)){
var ex__37615__auto__ = e53103;
var statearr_53104_53116 = state_53083;
(statearr_53104_53116[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53117 = state_53083;
state_53083 = G__53117;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37612__auto__ = function(state_53083){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37612__auto____1.call(this,state_53083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37612__auto____0;
cljs$core$async$reduce_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37612__auto____1;
return cljs$core$async$reduce_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_53105 = f__37633__auto__.call(null);
(statearr_53105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_53105;
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
var args53118 = [];
var len__36574__auto___53170 = arguments.length;
var i__36575__auto___53171 = (0);
while(true){
if((i__36575__auto___53171 < len__36574__auto___53170)){
args53118.push((arguments[i__36575__auto___53171]));

var G__53172 = (i__36575__auto___53171 + (1));
i__36575__auto___53171 = G__53172;
continue;
} else {
}
break;
}

var G__53120 = args53118.length;
switch (G__53120) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53118.length)].join('')));

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
return (function (state_53145){
var state_val_53146 = (state_53145[(1)]);
if((state_val_53146 === (7))){
var inst_53127 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53147_53174 = state_53145__$1;
(statearr_53147_53174[(2)] = inst_53127);

(statearr_53147_53174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (1))){
var inst_53121 = cljs.core.seq.call(null,coll);
var inst_53122 = inst_53121;
var state_53145__$1 = (function (){var statearr_53148 = state_53145;
(statearr_53148[(7)] = inst_53122);

return statearr_53148;
})();
var statearr_53149_53175 = state_53145__$1;
(statearr_53149_53175[(2)] = null);

(statearr_53149_53175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (4))){
var inst_53122 = (state_53145[(7)]);
var inst_53125 = cljs.core.first.call(null,inst_53122);
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53145__$1,(7),ch,inst_53125);
} else {
if((state_val_53146 === (13))){
var inst_53139 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53150_53176 = state_53145__$1;
(statearr_53150_53176[(2)] = inst_53139);

(statearr_53150_53176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (6))){
var inst_53130 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
if(cljs.core.truth_(inst_53130)){
var statearr_53151_53177 = state_53145__$1;
(statearr_53151_53177[(1)] = (8));

} else {
var statearr_53152_53178 = state_53145__$1;
(statearr_53152_53178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (3))){
var inst_53143 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53145__$1,inst_53143);
} else {
if((state_val_53146 === (12))){
var state_53145__$1 = state_53145;
var statearr_53153_53179 = state_53145__$1;
(statearr_53153_53179[(2)] = null);

(statearr_53153_53179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (2))){
var inst_53122 = (state_53145[(7)]);
var state_53145__$1 = state_53145;
if(cljs.core.truth_(inst_53122)){
var statearr_53154_53180 = state_53145__$1;
(statearr_53154_53180[(1)] = (4));

} else {
var statearr_53155_53181 = state_53145__$1;
(statearr_53155_53181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (11))){
var inst_53136 = cljs.core.async.close_BANG_.call(null,ch);
var state_53145__$1 = state_53145;
var statearr_53156_53182 = state_53145__$1;
(statearr_53156_53182[(2)] = inst_53136);

(statearr_53156_53182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (9))){
var state_53145__$1 = state_53145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_53157_53183 = state_53145__$1;
(statearr_53157_53183[(1)] = (11));

} else {
var statearr_53158_53184 = state_53145__$1;
(statearr_53158_53184[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (5))){
var inst_53122 = (state_53145[(7)]);
var state_53145__$1 = state_53145;
var statearr_53159_53185 = state_53145__$1;
(statearr_53159_53185[(2)] = inst_53122);

(statearr_53159_53185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (10))){
var inst_53141 = (state_53145[(2)]);
var state_53145__$1 = state_53145;
var statearr_53160_53186 = state_53145__$1;
(statearr_53160_53186[(2)] = inst_53141);

(statearr_53160_53186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53146 === (8))){
var inst_53122 = (state_53145[(7)]);
var inst_53132 = cljs.core.next.call(null,inst_53122);
var inst_53122__$1 = inst_53132;
var state_53145__$1 = (function (){var statearr_53161 = state_53145;
(statearr_53161[(7)] = inst_53122__$1);

return statearr_53161;
})();
var statearr_53162_53187 = state_53145__$1;
(statearr_53162_53187[(2)] = null);

(statearr_53162_53187[(1)] = (2));


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
var statearr_53166 = [null,null,null,null,null,null,null,null];
(statearr_53166[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_53166[(1)] = (1));

return statearr_53166;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_53145){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_53145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e53167){if((e53167 instanceof Object)){
var ex__37615__auto__ = e53167;
var statearr_53168_53188 = state_53145;
(statearr_53168_53188[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53189 = state_53145;
state_53145 = G__53189;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_53145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_53145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_53169 = f__37633__auto__.call(null);
(statearr_53169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_53169;
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
if(typeof cljs.core.async.t_cljs$core$async53411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53411 = (function (mult,ch,cs,meta53412){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta53412 = meta53412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_53413,meta53412__$1){
var self__ = this;
var _53413__$1 = this;
return (new cljs.core.async.t_cljs$core$async53411(self__.mult,self__.ch,self__.cs,meta53412__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_53413){
var self__ = this;
var _53413__$1 = this;
return self__.meta53412;
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta53412","meta53412",1686822177,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async53411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53411";

cljs.core.async.t_cljs$core$async53411.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async53411");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async53411 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async53411(mult__$1,ch__$1,cs__$1,meta53412){
return (new cljs.core.async.t_cljs$core$async53411(mult__$1,ch__$1,cs__$1,meta53412));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async53411(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37632__auto___53632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___53632,cs,m,dchan,dctr,done){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___53632,cs,m,dchan,dctr,done){
return (function (state_53544){
var state_val_53545 = (state_53544[(1)]);
if((state_val_53545 === (7))){
var inst_53540 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53546_53633 = state_53544__$1;
(statearr_53546_53633[(2)] = inst_53540);

(statearr_53546_53633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (20))){
var inst_53445 = (state_53544[(7)]);
var inst_53455 = cljs.core.first.call(null,inst_53445);
var inst_53456 = cljs.core.nth.call(null,inst_53455,(0),null);
var inst_53457 = cljs.core.nth.call(null,inst_53455,(1),null);
var state_53544__$1 = (function (){var statearr_53547 = state_53544;
(statearr_53547[(8)] = inst_53456);

return statearr_53547;
})();
if(cljs.core.truth_(inst_53457)){
var statearr_53548_53634 = state_53544__$1;
(statearr_53548_53634[(1)] = (22));

} else {
var statearr_53549_53635 = state_53544__$1;
(statearr_53549_53635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (27))){
var inst_53492 = (state_53544[(9)]);
var inst_53485 = (state_53544[(10)]);
var inst_53487 = (state_53544[(11)]);
var inst_53416 = (state_53544[(12)]);
var inst_53492__$1 = cljs.core._nth.call(null,inst_53485,inst_53487);
var inst_53493 = cljs.core.async.put_BANG_.call(null,inst_53492__$1,inst_53416,done);
var state_53544__$1 = (function (){var statearr_53550 = state_53544;
(statearr_53550[(9)] = inst_53492__$1);

return statearr_53550;
})();
if(cljs.core.truth_(inst_53493)){
var statearr_53551_53636 = state_53544__$1;
(statearr_53551_53636[(1)] = (30));

} else {
var statearr_53552_53637 = state_53544__$1;
(statearr_53552_53637[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (1))){
var state_53544__$1 = state_53544;
var statearr_53553_53638 = state_53544__$1;
(statearr_53553_53638[(2)] = null);

(statearr_53553_53638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (24))){
var inst_53445 = (state_53544[(7)]);
var inst_53462 = (state_53544[(2)]);
var inst_53463 = cljs.core.next.call(null,inst_53445);
var inst_53425 = inst_53463;
var inst_53426 = null;
var inst_53427 = (0);
var inst_53428 = (0);
var state_53544__$1 = (function (){var statearr_53554 = state_53544;
(statearr_53554[(13)] = inst_53462);

(statearr_53554[(14)] = inst_53426);

(statearr_53554[(15)] = inst_53427);

(statearr_53554[(16)] = inst_53428);

(statearr_53554[(17)] = inst_53425);

return statearr_53554;
})();
var statearr_53555_53639 = state_53544__$1;
(statearr_53555_53639[(2)] = null);

(statearr_53555_53639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (39))){
var state_53544__$1 = state_53544;
var statearr_53559_53640 = state_53544__$1;
(statearr_53559_53640[(2)] = null);

(statearr_53559_53640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (4))){
var inst_53416 = (state_53544[(12)]);
var inst_53416__$1 = (state_53544[(2)]);
var inst_53417 = (inst_53416__$1 == null);
var state_53544__$1 = (function (){var statearr_53560 = state_53544;
(statearr_53560[(12)] = inst_53416__$1);

return statearr_53560;
})();
if(cljs.core.truth_(inst_53417)){
var statearr_53561_53641 = state_53544__$1;
(statearr_53561_53641[(1)] = (5));

} else {
var statearr_53562_53642 = state_53544__$1;
(statearr_53562_53642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (15))){
var inst_53426 = (state_53544[(14)]);
var inst_53427 = (state_53544[(15)]);
var inst_53428 = (state_53544[(16)]);
var inst_53425 = (state_53544[(17)]);
var inst_53441 = (state_53544[(2)]);
var inst_53442 = (inst_53428 + (1));
var tmp53556 = inst_53426;
var tmp53557 = inst_53427;
var tmp53558 = inst_53425;
var inst_53425__$1 = tmp53558;
var inst_53426__$1 = tmp53556;
var inst_53427__$1 = tmp53557;
var inst_53428__$1 = inst_53442;
var state_53544__$1 = (function (){var statearr_53563 = state_53544;
(statearr_53563[(14)] = inst_53426__$1);

(statearr_53563[(15)] = inst_53427__$1);

(statearr_53563[(16)] = inst_53428__$1);

(statearr_53563[(17)] = inst_53425__$1);

(statearr_53563[(18)] = inst_53441);

return statearr_53563;
})();
var statearr_53564_53643 = state_53544__$1;
(statearr_53564_53643[(2)] = null);

(statearr_53564_53643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (21))){
var inst_53466 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53568_53644 = state_53544__$1;
(statearr_53568_53644[(2)] = inst_53466);

(statearr_53568_53644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (31))){
var inst_53492 = (state_53544[(9)]);
var inst_53496 = done.call(null,null);
var inst_53497 = cljs.core.async.untap_STAR_.call(null,m,inst_53492);
var state_53544__$1 = (function (){var statearr_53569 = state_53544;
(statearr_53569[(19)] = inst_53496);

return statearr_53569;
})();
var statearr_53570_53645 = state_53544__$1;
(statearr_53570_53645[(2)] = inst_53497);

(statearr_53570_53645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (32))){
var inst_53486 = (state_53544[(20)]);
var inst_53484 = (state_53544[(21)]);
var inst_53485 = (state_53544[(10)]);
var inst_53487 = (state_53544[(11)]);
var inst_53499 = (state_53544[(2)]);
var inst_53500 = (inst_53487 + (1));
var tmp53565 = inst_53486;
var tmp53566 = inst_53484;
var tmp53567 = inst_53485;
var inst_53484__$1 = tmp53566;
var inst_53485__$1 = tmp53567;
var inst_53486__$1 = tmp53565;
var inst_53487__$1 = inst_53500;
var state_53544__$1 = (function (){var statearr_53571 = state_53544;
(statearr_53571[(20)] = inst_53486__$1);

(statearr_53571[(21)] = inst_53484__$1);

(statearr_53571[(10)] = inst_53485__$1);

(statearr_53571[(22)] = inst_53499);

(statearr_53571[(11)] = inst_53487__$1);

return statearr_53571;
})();
var statearr_53572_53646 = state_53544__$1;
(statearr_53572_53646[(2)] = null);

(statearr_53572_53646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (40))){
var inst_53512 = (state_53544[(23)]);
var inst_53516 = done.call(null,null);
var inst_53517 = cljs.core.async.untap_STAR_.call(null,m,inst_53512);
var state_53544__$1 = (function (){var statearr_53573 = state_53544;
(statearr_53573[(24)] = inst_53516);

return statearr_53573;
})();
var statearr_53574_53647 = state_53544__$1;
(statearr_53574_53647[(2)] = inst_53517);

(statearr_53574_53647[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (33))){
var inst_53503 = (state_53544[(25)]);
var inst_53505 = cljs.core.chunked_seq_QMARK_.call(null,inst_53503);
var state_53544__$1 = state_53544;
if(inst_53505){
var statearr_53575_53648 = state_53544__$1;
(statearr_53575_53648[(1)] = (36));

} else {
var statearr_53576_53649 = state_53544__$1;
(statearr_53576_53649[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (13))){
var inst_53435 = (state_53544[(26)]);
var inst_53438 = cljs.core.async.close_BANG_.call(null,inst_53435);
var state_53544__$1 = state_53544;
var statearr_53577_53650 = state_53544__$1;
(statearr_53577_53650[(2)] = inst_53438);

(statearr_53577_53650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (22))){
var inst_53456 = (state_53544[(8)]);
var inst_53459 = cljs.core.async.close_BANG_.call(null,inst_53456);
var state_53544__$1 = state_53544;
var statearr_53578_53651 = state_53544__$1;
(statearr_53578_53651[(2)] = inst_53459);

(statearr_53578_53651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (36))){
var inst_53503 = (state_53544[(25)]);
var inst_53507 = cljs.core.chunk_first.call(null,inst_53503);
var inst_53508 = cljs.core.chunk_rest.call(null,inst_53503);
var inst_53509 = cljs.core.count.call(null,inst_53507);
var inst_53484 = inst_53508;
var inst_53485 = inst_53507;
var inst_53486 = inst_53509;
var inst_53487 = (0);
var state_53544__$1 = (function (){var statearr_53579 = state_53544;
(statearr_53579[(20)] = inst_53486);

(statearr_53579[(21)] = inst_53484);

(statearr_53579[(10)] = inst_53485);

(statearr_53579[(11)] = inst_53487);

return statearr_53579;
})();
var statearr_53580_53652 = state_53544__$1;
(statearr_53580_53652[(2)] = null);

(statearr_53580_53652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (41))){
var inst_53503 = (state_53544[(25)]);
var inst_53519 = (state_53544[(2)]);
var inst_53520 = cljs.core.next.call(null,inst_53503);
var inst_53484 = inst_53520;
var inst_53485 = null;
var inst_53486 = (0);
var inst_53487 = (0);
var state_53544__$1 = (function (){var statearr_53581 = state_53544;
(statearr_53581[(20)] = inst_53486);

(statearr_53581[(27)] = inst_53519);

(statearr_53581[(21)] = inst_53484);

(statearr_53581[(10)] = inst_53485);

(statearr_53581[(11)] = inst_53487);

return statearr_53581;
})();
var statearr_53582_53653 = state_53544__$1;
(statearr_53582_53653[(2)] = null);

(statearr_53582_53653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (43))){
var state_53544__$1 = state_53544;
var statearr_53583_53654 = state_53544__$1;
(statearr_53583_53654[(2)] = null);

(statearr_53583_53654[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (29))){
var inst_53528 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53584_53655 = state_53544__$1;
(statearr_53584_53655[(2)] = inst_53528);

(statearr_53584_53655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (44))){
var inst_53537 = (state_53544[(2)]);
var state_53544__$1 = (function (){var statearr_53585 = state_53544;
(statearr_53585[(28)] = inst_53537);

return statearr_53585;
})();
var statearr_53586_53656 = state_53544__$1;
(statearr_53586_53656[(2)] = null);

(statearr_53586_53656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (6))){
var inst_53476 = (state_53544[(29)]);
var inst_53475 = cljs.core.deref.call(null,cs);
var inst_53476__$1 = cljs.core.keys.call(null,inst_53475);
var inst_53477 = cljs.core.count.call(null,inst_53476__$1);
var inst_53478 = cljs.core.reset_BANG_.call(null,dctr,inst_53477);
var inst_53483 = cljs.core.seq.call(null,inst_53476__$1);
var inst_53484 = inst_53483;
var inst_53485 = null;
var inst_53486 = (0);
var inst_53487 = (0);
var state_53544__$1 = (function (){var statearr_53587 = state_53544;
(statearr_53587[(30)] = inst_53478);

(statearr_53587[(20)] = inst_53486);

(statearr_53587[(29)] = inst_53476__$1);

(statearr_53587[(21)] = inst_53484);

(statearr_53587[(10)] = inst_53485);

(statearr_53587[(11)] = inst_53487);

return statearr_53587;
})();
var statearr_53588_53657 = state_53544__$1;
(statearr_53588_53657[(2)] = null);

(statearr_53588_53657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (28))){
var inst_53484 = (state_53544[(21)]);
var inst_53503 = (state_53544[(25)]);
var inst_53503__$1 = cljs.core.seq.call(null,inst_53484);
var state_53544__$1 = (function (){var statearr_53589 = state_53544;
(statearr_53589[(25)] = inst_53503__$1);

return statearr_53589;
})();
if(inst_53503__$1){
var statearr_53590_53658 = state_53544__$1;
(statearr_53590_53658[(1)] = (33));

} else {
var statearr_53591_53659 = state_53544__$1;
(statearr_53591_53659[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (25))){
var inst_53486 = (state_53544[(20)]);
var inst_53487 = (state_53544[(11)]);
var inst_53489 = (inst_53487 < inst_53486);
var inst_53490 = inst_53489;
var state_53544__$1 = state_53544;
if(cljs.core.truth_(inst_53490)){
var statearr_53592_53660 = state_53544__$1;
(statearr_53592_53660[(1)] = (27));

} else {
var statearr_53593_53661 = state_53544__$1;
(statearr_53593_53661[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (34))){
var state_53544__$1 = state_53544;
var statearr_53594_53662 = state_53544__$1;
(statearr_53594_53662[(2)] = null);

(statearr_53594_53662[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (17))){
var state_53544__$1 = state_53544;
var statearr_53595_53663 = state_53544__$1;
(statearr_53595_53663[(2)] = null);

(statearr_53595_53663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (3))){
var inst_53542 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53544__$1,inst_53542);
} else {
if((state_val_53545 === (12))){
var inst_53471 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53596_53664 = state_53544__$1;
(statearr_53596_53664[(2)] = inst_53471);

(statearr_53596_53664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (2))){
var state_53544__$1 = state_53544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53544__$1,(4),ch);
} else {
if((state_val_53545 === (23))){
var state_53544__$1 = state_53544;
var statearr_53597_53665 = state_53544__$1;
(statearr_53597_53665[(2)] = null);

(statearr_53597_53665[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (35))){
var inst_53526 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53598_53666 = state_53544__$1;
(statearr_53598_53666[(2)] = inst_53526);

(statearr_53598_53666[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (19))){
var inst_53445 = (state_53544[(7)]);
var inst_53449 = cljs.core.chunk_first.call(null,inst_53445);
var inst_53450 = cljs.core.chunk_rest.call(null,inst_53445);
var inst_53451 = cljs.core.count.call(null,inst_53449);
var inst_53425 = inst_53450;
var inst_53426 = inst_53449;
var inst_53427 = inst_53451;
var inst_53428 = (0);
var state_53544__$1 = (function (){var statearr_53599 = state_53544;
(statearr_53599[(14)] = inst_53426);

(statearr_53599[(15)] = inst_53427);

(statearr_53599[(16)] = inst_53428);

(statearr_53599[(17)] = inst_53425);

return statearr_53599;
})();
var statearr_53600_53667 = state_53544__$1;
(statearr_53600_53667[(2)] = null);

(statearr_53600_53667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (11))){
var inst_53445 = (state_53544[(7)]);
var inst_53425 = (state_53544[(17)]);
var inst_53445__$1 = cljs.core.seq.call(null,inst_53425);
var state_53544__$1 = (function (){var statearr_53601 = state_53544;
(statearr_53601[(7)] = inst_53445__$1);

return statearr_53601;
})();
if(inst_53445__$1){
var statearr_53602_53668 = state_53544__$1;
(statearr_53602_53668[(1)] = (16));

} else {
var statearr_53603_53669 = state_53544__$1;
(statearr_53603_53669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (9))){
var inst_53473 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53604_53670 = state_53544__$1;
(statearr_53604_53670[(2)] = inst_53473);

(statearr_53604_53670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (5))){
var inst_53423 = cljs.core.deref.call(null,cs);
var inst_53424 = cljs.core.seq.call(null,inst_53423);
var inst_53425 = inst_53424;
var inst_53426 = null;
var inst_53427 = (0);
var inst_53428 = (0);
var state_53544__$1 = (function (){var statearr_53605 = state_53544;
(statearr_53605[(14)] = inst_53426);

(statearr_53605[(15)] = inst_53427);

(statearr_53605[(16)] = inst_53428);

(statearr_53605[(17)] = inst_53425);

return statearr_53605;
})();
var statearr_53606_53671 = state_53544__$1;
(statearr_53606_53671[(2)] = null);

(statearr_53606_53671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (14))){
var state_53544__$1 = state_53544;
var statearr_53607_53672 = state_53544__$1;
(statearr_53607_53672[(2)] = null);

(statearr_53607_53672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (45))){
var inst_53534 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53608_53673 = state_53544__$1;
(statearr_53608_53673[(2)] = inst_53534);

(statearr_53608_53673[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (26))){
var inst_53476 = (state_53544[(29)]);
var inst_53530 = (state_53544[(2)]);
var inst_53531 = cljs.core.seq.call(null,inst_53476);
var state_53544__$1 = (function (){var statearr_53609 = state_53544;
(statearr_53609[(31)] = inst_53530);

return statearr_53609;
})();
if(inst_53531){
var statearr_53610_53674 = state_53544__$1;
(statearr_53610_53674[(1)] = (42));

} else {
var statearr_53611_53675 = state_53544__$1;
(statearr_53611_53675[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (16))){
var inst_53445 = (state_53544[(7)]);
var inst_53447 = cljs.core.chunked_seq_QMARK_.call(null,inst_53445);
var state_53544__$1 = state_53544;
if(inst_53447){
var statearr_53612_53676 = state_53544__$1;
(statearr_53612_53676[(1)] = (19));

} else {
var statearr_53613_53677 = state_53544__$1;
(statearr_53613_53677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (38))){
var inst_53523 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53614_53678 = state_53544__$1;
(statearr_53614_53678[(2)] = inst_53523);

(statearr_53614_53678[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (30))){
var state_53544__$1 = state_53544;
var statearr_53615_53679 = state_53544__$1;
(statearr_53615_53679[(2)] = null);

(statearr_53615_53679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (10))){
var inst_53426 = (state_53544[(14)]);
var inst_53428 = (state_53544[(16)]);
var inst_53434 = cljs.core._nth.call(null,inst_53426,inst_53428);
var inst_53435 = cljs.core.nth.call(null,inst_53434,(0),null);
var inst_53436 = cljs.core.nth.call(null,inst_53434,(1),null);
var state_53544__$1 = (function (){var statearr_53616 = state_53544;
(statearr_53616[(26)] = inst_53435);

return statearr_53616;
})();
if(cljs.core.truth_(inst_53436)){
var statearr_53617_53680 = state_53544__$1;
(statearr_53617_53680[(1)] = (13));

} else {
var statearr_53618_53681 = state_53544__$1;
(statearr_53618_53681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (18))){
var inst_53469 = (state_53544[(2)]);
var state_53544__$1 = state_53544;
var statearr_53619_53682 = state_53544__$1;
(statearr_53619_53682[(2)] = inst_53469);

(statearr_53619_53682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (42))){
var state_53544__$1 = state_53544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53544__$1,(45),dchan);
} else {
if((state_val_53545 === (37))){
var inst_53503 = (state_53544[(25)]);
var inst_53416 = (state_53544[(12)]);
var inst_53512 = (state_53544[(23)]);
var inst_53512__$1 = cljs.core.first.call(null,inst_53503);
var inst_53513 = cljs.core.async.put_BANG_.call(null,inst_53512__$1,inst_53416,done);
var state_53544__$1 = (function (){var statearr_53620 = state_53544;
(statearr_53620[(23)] = inst_53512__$1);

return statearr_53620;
})();
if(cljs.core.truth_(inst_53513)){
var statearr_53621_53683 = state_53544__$1;
(statearr_53621_53683[(1)] = (39));

} else {
var statearr_53622_53684 = state_53544__$1;
(statearr_53622_53684[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53545 === (8))){
var inst_53427 = (state_53544[(15)]);
var inst_53428 = (state_53544[(16)]);
var inst_53430 = (inst_53428 < inst_53427);
var inst_53431 = inst_53430;
var state_53544__$1 = state_53544;
if(cljs.core.truth_(inst_53431)){
var statearr_53623_53685 = state_53544__$1;
(statearr_53623_53685[(1)] = (10));

} else {
var statearr_53624_53686 = state_53544__$1;
(statearr_53624_53686[(1)] = (11));

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
});})(c__37632__auto___53632,cs,m,dchan,dctr,done))
;
return ((function (switch__37611__auto__,c__37632__auto___53632,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37612__auto__ = null;
var cljs$core$async$mult_$_state_machine__37612__auto____0 = (function (){
var statearr_53628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53628[(0)] = cljs$core$async$mult_$_state_machine__37612__auto__);

(statearr_53628[(1)] = (1));

return statearr_53628;
});
var cljs$core$async$mult_$_state_machine__37612__auto____1 = (function (state_53544){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_53544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e53629){if((e53629 instanceof Object)){
var ex__37615__auto__ = e53629;
var statearr_53630_53687 = state_53544;
(statearr_53630_53687[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53688 = state_53544;
state_53544 = G__53688;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37612__auto__ = function(state_53544){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37612__auto____1.call(this,state_53544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37612__auto____0;
cljs$core$async$mult_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37612__auto____1;
return cljs$core$async$mult_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___53632,cs,m,dchan,dctr,done))
})();
var state__37634__auto__ = (function (){var statearr_53631 = f__37633__auto__.call(null);
(statearr_53631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___53632);

return statearr_53631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___53632,cs,m,dchan,dctr,done))
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
var args53689 = [];
var len__36574__auto___53692 = arguments.length;
var i__36575__auto___53693 = (0);
while(true){
if((i__36575__auto___53693 < len__36574__auto___53692)){
args53689.push((arguments[i__36575__auto___53693]));

var G__53694 = (i__36575__auto___53693 + (1));
i__36575__auto___53693 = G__53694;
continue;
} else {
}
break;
}

var G__53691 = args53689.length;
switch (G__53691) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53689.length)].join('')));

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
var len__36574__auto___53706 = arguments.length;
var i__36575__auto___53707 = (0);
while(true){
if((i__36575__auto___53707 < len__36574__auto___53706)){
args__36581__auto__.push((arguments[i__36575__auto___53707]));

var G__53708 = (i__36575__auto___53707 + (1));
i__36575__auto___53707 = G__53708;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((3) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36582__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__53700){
var map__53701 = p__53700;
var map__53701__$1 = ((((!((map__53701 == null)))?((((map__53701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53701):map__53701);
var opts = map__53701__$1;
var statearr_53703_53709 = state;
(statearr_53703_53709[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__53701,map__53701__$1,opts){
return (function (val){
var statearr_53704_53710 = state;
(statearr_53704_53710[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__53701,map__53701__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_53705_53711 = state;
(statearr_53705_53711[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq53696){
var G__53697 = cljs.core.first.call(null,seq53696);
var seq53696__$1 = cljs.core.next.call(null,seq53696);
var G__53698 = cljs.core.first.call(null,seq53696__$1);
var seq53696__$2 = cljs.core.next.call(null,seq53696__$1);
var G__53699 = cljs.core.first.call(null,seq53696__$2);
var seq53696__$3 = cljs.core.next.call(null,seq53696__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53697,G__53698,G__53699,seq53696__$3);
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
if(typeof cljs.core.async.t_cljs$core$async53875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53875 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53876){
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
this.meta53876 = meta53876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53877,meta53876__$1){
var self__ = this;
var _53877__$1 = this;
return (new cljs.core.async.t_cljs$core$async53875(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53876__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53877){
var self__ = this;
var _53877__$1 = this;
return self__.meta53876;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async53875.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53876","meta53876",1283064322,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53875";

cljs.core.async.t_cljs$core$async53875.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async53875");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async53875 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53876){
return (new cljs.core.async.t_cljs$core$async53875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53876));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53875(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37632__auto___54038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53975){
var state_val_53976 = (state_53975[(1)]);
if((state_val_53976 === (7))){
var inst_53893 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
var statearr_53977_54039 = state_53975__$1;
(statearr_53977_54039[(2)] = inst_53893);

(statearr_53977_54039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (20))){
var inst_53905 = (state_53975[(7)]);
var state_53975__$1 = state_53975;
var statearr_53978_54040 = state_53975__$1;
(statearr_53978_54040[(2)] = inst_53905);

(statearr_53978_54040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (27))){
var state_53975__$1 = state_53975;
var statearr_53979_54041 = state_53975__$1;
(statearr_53979_54041[(2)] = null);

(statearr_53979_54041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (1))){
var inst_53881 = (state_53975[(8)]);
var inst_53881__$1 = calc_state.call(null);
var inst_53883 = (inst_53881__$1 == null);
var inst_53884 = cljs.core.not.call(null,inst_53883);
var state_53975__$1 = (function (){var statearr_53980 = state_53975;
(statearr_53980[(8)] = inst_53881__$1);

return statearr_53980;
})();
if(inst_53884){
var statearr_53981_54042 = state_53975__$1;
(statearr_53981_54042[(1)] = (2));

} else {
var statearr_53982_54043 = state_53975__$1;
(statearr_53982_54043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (24))){
var inst_53935 = (state_53975[(9)]);
var inst_53949 = (state_53975[(10)]);
var inst_53928 = (state_53975[(11)]);
var inst_53949__$1 = inst_53928.call(null,inst_53935);
var state_53975__$1 = (function (){var statearr_53983 = state_53975;
(statearr_53983[(10)] = inst_53949__$1);

return statearr_53983;
})();
if(cljs.core.truth_(inst_53949__$1)){
var statearr_53984_54044 = state_53975__$1;
(statearr_53984_54044[(1)] = (29));

} else {
var statearr_53985_54045 = state_53975__$1;
(statearr_53985_54045[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (4))){
var inst_53896 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53896)){
var statearr_53986_54046 = state_53975__$1;
(statearr_53986_54046[(1)] = (8));

} else {
var statearr_53987_54047 = state_53975__$1;
(statearr_53987_54047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (15))){
var inst_53922 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53922)){
var statearr_53988_54048 = state_53975__$1;
(statearr_53988_54048[(1)] = (19));

} else {
var statearr_53989_54049 = state_53975__$1;
(statearr_53989_54049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (21))){
var inst_53927 = (state_53975[(12)]);
var inst_53927__$1 = (state_53975[(2)]);
var inst_53928 = cljs.core.get.call(null,inst_53927__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53929 = cljs.core.get.call(null,inst_53927__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53930 = cljs.core.get.call(null,inst_53927__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53975__$1 = (function (){var statearr_53990 = state_53975;
(statearr_53990[(12)] = inst_53927__$1);

(statearr_53990[(13)] = inst_53929);

(statearr_53990[(11)] = inst_53928);

return statearr_53990;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53975__$1,(22),inst_53930);
} else {
if((state_val_53976 === (31))){
var inst_53957 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53957)){
var statearr_53991_54050 = state_53975__$1;
(statearr_53991_54050[(1)] = (32));

} else {
var statearr_53992_54051 = state_53975__$1;
(statearr_53992_54051[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (32))){
var inst_53934 = (state_53975[(14)]);
var state_53975__$1 = state_53975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53975__$1,(35),out,inst_53934);
} else {
if((state_val_53976 === (33))){
var inst_53927 = (state_53975[(12)]);
var inst_53905 = inst_53927;
var state_53975__$1 = (function (){var statearr_53993 = state_53975;
(statearr_53993[(7)] = inst_53905);

return statearr_53993;
})();
var statearr_53994_54052 = state_53975__$1;
(statearr_53994_54052[(2)] = null);

(statearr_53994_54052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (13))){
var inst_53905 = (state_53975[(7)]);
var inst_53912 = inst_53905.cljs$lang$protocol_mask$partition0$;
var inst_53913 = (inst_53912 & (64));
var inst_53914 = inst_53905.cljs$core$ISeq$;
var inst_53915 = (inst_53913) || (inst_53914);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53915)){
var statearr_53995_54053 = state_53975__$1;
(statearr_53995_54053[(1)] = (16));

} else {
var statearr_53996_54054 = state_53975__$1;
(statearr_53996_54054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (22))){
var inst_53935 = (state_53975[(9)]);
var inst_53934 = (state_53975[(14)]);
var inst_53933 = (state_53975[(2)]);
var inst_53934__$1 = cljs.core.nth.call(null,inst_53933,(0),null);
var inst_53935__$1 = cljs.core.nth.call(null,inst_53933,(1),null);
var inst_53936 = (inst_53934__$1 == null);
var inst_53937 = cljs.core._EQ_.call(null,inst_53935__$1,change);
var inst_53938 = (inst_53936) || (inst_53937);
var state_53975__$1 = (function (){var statearr_53997 = state_53975;
(statearr_53997[(9)] = inst_53935__$1);

(statearr_53997[(14)] = inst_53934__$1);

return statearr_53997;
})();
if(cljs.core.truth_(inst_53938)){
var statearr_53998_54055 = state_53975__$1;
(statearr_53998_54055[(1)] = (23));

} else {
var statearr_53999_54056 = state_53975__$1;
(statearr_53999_54056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (36))){
var inst_53927 = (state_53975[(12)]);
var inst_53905 = inst_53927;
var state_53975__$1 = (function (){var statearr_54000 = state_53975;
(statearr_54000[(7)] = inst_53905);

return statearr_54000;
})();
var statearr_54001_54057 = state_53975__$1;
(statearr_54001_54057[(2)] = null);

(statearr_54001_54057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (29))){
var inst_53949 = (state_53975[(10)]);
var state_53975__$1 = state_53975;
var statearr_54002_54058 = state_53975__$1;
(statearr_54002_54058[(2)] = inst_53949);

(statearr_54002_54058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (6))){
var state_53975__$1 = state_53975;
var statearr_54003_54059 = state_53975__$1;
(statearr_54003_54059[(2)] = false);

(statearr_54003_54059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (28))){
var inst_53945 = (state_53975[(2)]);
var inst_53946 = calc_state.call(null);
var inst_53905 = inst_53946;
var state_53975__$1 = (function (){var statearr_54004 = state_53975;
(statearr_54004[(15)] = inst_53945);

(statearr_54004[(7)] = inst_53905);

return statearr_54004;
})();
var statearr_54005_54060 = state_53975__$1;
(statearr_54005_54060[(2)] = null);

(statearr_54005_54060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (25))){
var inst_53971 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
var statearr_54006_54061 = state_53975__$1;
(statearr_54006_54061[(2)] = inst_53971);

(statearr_54006_54061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (34))){
var inst_53969 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
var statearr_54007_54062 = state_53975__$1;
(statearr_54007_54062[(2)] = inst_53969);

(statearr_54007_54062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (17))){
var state_53975__$1 = state_53975;
var statearr_54008_54063 = state_53975__$1;
(statearr_54008_54063[(2)] = false);

(statearr_54008_54063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (3))){
var state_53975__$1 = state_53975;
var statearr_54009_54064 = state_53975__$1;
(statearr_54009_54064[(2)] = false);

(statearr_54009_54064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (12))){
var inst_53973 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53975__$1,inst_53973);
} else {
if((state_val_53976 === (2))){
var inst_53881 = (state_53975[(8)]);
var inst_53886 = inst_53881.cljs$lang$protocol_mask$partition0$;
var inst_53887 = (inst_53886 & (64));
var inst_53888 = inst_53881.cljs$core$ISeq$;
var inst_53889 = (inst_53887) || (inst_53888);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53889)){
var statearr_54010_54065 = state_53975__$1;
(statearr_54010_54065[(1)] = (5));

} else {
var statearr_54011_54066 = state_53975__$1;
(statearr_54011_54066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (23))){
var inst_53934 = (state_53975[(14)]);
var inst_53940 = (inst_53934 == null);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53940)){
var statearr_54012_54067 = state_53975__$1;
(statearr_54012_54067[(1)] = (26));

} else {
var statearr_54013_54068 = state_53975__$1;
(statearr_54013_54068[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (35))){
var inst_53960 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
if(cljs.core.truth_(inst_53960)){
var statearr_54014_54069 = state_53975__$1;
(statearr_54014_54069[(1)] = (36));

} else {
var statearr_54015_54070 = state_53975__$1;
(statearr_54015_54070[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (19))){
var inst_53905 = (state_53975[(7)]);
var inst_53924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53905);
var state_53975__$1 = state_53975;
var statearr_54016_54071 = state_53975__$1;
(statearr_54016_54071[(2)] = inst_53924);

(statearr_54016_54071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (11))){
var inst_53905 = (state_53975[(7)]);
var inst_53909 = (inst_53905 == null);
var inst_53910 = cljs.core.not.call(null,inst_53909);
var state_53975__$1 = state_53975;
if(inst_53910){
var statearr_54017_54072 = state_53975__$1;
(statearr_54017_54072[(1)] = (13));

} else {
var statearr_54018_54073 = state_53975__$1;
(statearr_54018_54073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (9))){
var inst_53881 = (state_53975[(8)]);
var state_53975__$1 = state_53975;
var statearr_54019_54074 = state_53975__$1;
(statearr_54019_54074[(2)] = inst_53881);

(statearr_54019_54074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (5))){
var state_53975__$1 = state_53975;
var statearr_54020_54075 = state_53975__$1;
(statearr_54020_54075[(2)] = true);

(statearr_54020_54075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (14))){
var state_53975__$1 = state_53975;
var statearr_54021_54076 = state_53975__$1;
(statearr_54021_54076[(2)] = false);

(statearr_54021_54076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (26))){
var inst_53935 = (state_53975[(9)]);
var inst_53942 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53935);
var state_53975__$1 = state_53975;
var statearr_54022_54077 = state_53975__$1;
(statearr_54022_54077[(2)] = inst_53942);

(statearr_54022_54077[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (16))){
var state_53975__$1 = state_53975;
var statearr_54023_54078 = state_53975__$1;
(statearr_54023_54078[(2)] = true);

(statearr_54023_54078[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (38))){
var inst_53965 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
var statearr_54024_54079 = state_53975__$1;
(statearr_54024_54079[(2)] = inst_53965);

(statearr_54024_54079[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (30))){
var inst_53935 = (state_53975[(9)]);
var inst_53929 = (state_53975[(13)]);
var inst_53928 = (state_53975[(11)]);
var inst_53952 = cljs.core.empty_QMARK_.call(null,inst_53928);
var inst_53953 = inst_53929.call(null,inst_53935);
var inst_53954 = cljs.core.not.call(null,inst_53953);
var inst_53955 = (inst_53952) && (inst_53954);
var state_53975__$1 = state_53975;
var statearr_54025_54080 = state_53975__$1;
(statearr_54025_54080[(2)] = inst_53955);

(statearr_54025_54080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (10))){
var inst_53881 = (state_53975[(8)]);
var inst_53901 = (state_53975[(2)]);
var inst_53902 = cljs.core.get.call(null,inst_53901,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53903 = cljs.core.get.call(null,inst_53901,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53904 = cljs.core.get.call(null,inst_53901,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53905 = inst_53881;
var state_53975__$1 = (function (){var statearr_54026 = state_53975;
(statearr_54026[(16)] = inst_53902);

(statearr_54026[(17)] = inst_53903);

(statearr_54026[(18)] = inst_53904);

(statearr_54026[(7)] = inst_53905);

return statearr_54026;
})();
var statearr_54027_54081 = state_53975__$1;
(statearr_54027_54081[(2)] = null);

(statearr_54027_54081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (18))){
var inst_53919 = (state_53975[(2)]);
var state_53975__$1 = state_53975;
var statearr_54028_54082 = state_53975__$1;
(statearr_54028_54082[(2)] = inst_53919);

(statearr_54028_54082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (37))){
var state_53975__$1 = state_53975;
var statearr_54029_54083 = state_53975__$1;
(statearr_54029_54083[(2)] = null);

(statearr_54029_54083[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53976 === (8))){
var inst_53881 = (state_53975[(8)]);
var inst_53898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53881);
var state_53975__$1 = state_53975;
var statearr_54030_54084 = state_53975__$1;
(statearr_54030_54084[(2)] = inst_53898);

(statearr_54030_54084[(1)] = (10));


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
});})(c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37611__auto__,c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37612__auto__ = null;
var cljs$core$async$mix_$_state_machine__37612__auto____0 = (function (){
var statearr_54034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54034[(0)] = cljs$core$async$mix_$_state_machine__37612__auto__);

(statearr_54034[(1)] = (1));

return statearr_54034;
});
var cljs$core$async$mix_$_state_machine__37612__auto____1 = (function (state_53975){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_53975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54035){if((e54035 instanceof Object)){
var ex__37615__auto__ = e54035;
var statearr_54036_54085 = state_53975;
(statearr_54036_54085[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54086 = state_53975;
state_53975 = G__54086;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37612__auto__ = function(state_53975){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37612__auto____1.call(this,state_53975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37612__auto____0;
cljs$core$async$mix_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37612__auto____1;
return cljs$core$async$mix_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37634__auto__ = (function (){var statearr_54037 = f__37633__auto__.call(null);
(statearr_54037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54038);

return statearr_54037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54038,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args54087 = [];
var len__36574__auto___54090 = arguments.length;
var i__36575__auto___54091 = (0);
while(true){
if((i__36575__auto___54091 < len__36574__auto___54090)){
args54087.push((arguments[i__36575__auto___54091]));

var G__54092 = (i__36575__auto___54091 + (1));
i__36575__auto___54091 = G__54092;
continue;
} else {
}
break;
}

var G__54089 = args54087.length;
switch (G__54089) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54087.length)].join('')));

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
var args54095 = [];
var len__36574__auto___54220 = arguments.length;
var i__36575__auto___54221 = (0);
while(true){
if((i__36575__auto___54221 < len__36574__auto___54220)){
args54095.push((arguments[i__36575__auto___54221]));

var G__54222 = (i__36575__auto___54221 + (1));
i__36575__auto___54221 = G__54222;
continue;
} else {
}
break;
}

var G__54097 = args54095.length;
switch (G__54097) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54095.length)].join('')));

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
return (function (p1__54094_SHARP_){
if(cljs.core.truth_(p1__54094_SHARP_.call(null,topic))){
return p1__54094_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__54094_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35516__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async54098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54098 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta54099){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta54099 = meta54099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_54100,meta54099__$1){
var self__ = this;
var _54100__$1 = this;
return (new cljs.core.async.t_cljs$core$async54098(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta54099__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_54100){
var self__ = this;
var _54100__$1 = this;
return self__.meta54099;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta54099","meta54099",358032038,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async54098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54098";

cljs.core.async.t_cljs$core$async54098.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async54098");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async54098 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async54098(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54099){
return (new cljs.core.async.t_cljs$core$async54098(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta54099));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async54098(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37632__auto___54224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54224,mults,ensure_mult,p){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54224,mults,ensure_mult,p){
return (function (state_54172){
var state_val_54173 = (state_54172[(1)]);
if((state_val_54173 === (7))){
var inst_54168 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54174_54225 = state_54172__$1;
(statearr_54174_54225[(2)] = inst_54168);

(statearr_54174_54225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (20))){
var state_54172__$1 = state_54172;
var statearr_54175_54226 = state_54172__$1;
(statearr_54175_54226[(2)] = null);

(statearr_54175_54226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (1))){
var state_54172__$1 = state_54172;
var statearr_54176_54227 = state_54172__$1;
(statearr_54176_54227[(2)] = null);

(statearr_54176_54227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (24))){
var inst_54151 = (state_54172[(7)]);
var inst_54160 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_54151);
var state_54172__$1 = state_54172;
var statearr_54177_54228 = state_54172__$1;
(statearr_54177_54228[(2)] = inst_54160);

(statearr_54177_54228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (4))){
var inst_54103 = (state_54172[(8)]);
var inst_54103__$1 = (state_54172[(2)]);
var inst_54104 = (inst_54103__$1 == null);
var state_54172__$1 = (function (){var statearr_54178 = state_54172;
(statearr_54178[(8)] = inst_54103__$1);

return statearr_54178;
})();
if(cljs.core.truth_(inst_54104)){
var statearr_54179_54229 = state_54172__$1;
(statearr_54179_54229[(1)] = (5));

} else {
var statearr_54180_54230 = state_54172__$1;
(statearr_54180_54230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (15))){
var inst_54145 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54181_54231 = state_54172__$1;
(statearr_54181_54231[(2)] = inst_54145);

(statearr_54181_54231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (21))){
var inst_54165 = (state_54172[(2)]);
var state_54172__$1 = (function (){var statearr_54182 = state_54172;
(statearr_54182[(9)] = inst_54165);

return statearr_54182;
})();
var statearr_54183_54232 = state_54172__$1;
(statearr_54183_54232[(2)] = null);

(statearr_54183_54232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (13))){
var inst_54127 = (state_54172[(10)]);
var inst_54129 = cljs.core.chunked_seq_QMARK_.call(null,inst_54127);
var state_54172__$1 = state_54172;
if(inst_54129){
var statearr_54184_54233 = state_54172__$1;
(statearr_54184_54233[(1)] = (16));

} else {
var statearr_54185_54234 = state_54172__$1;
(statearr_54185_54234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (22))){
var inst_54157 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
if(cljs.core.truth_(inst_54157)){
var statearr_54186_54235 = state_54172__$1;
(statearr_54186_54235[(1)] = (23));

} else {
var statearr_54187_54236 = state_54172__$1;
(statearr_54187_54236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (6))){
var inst_54151 = (state_54172[(7)]);
var inst_54153 = (state_54172[(11)]);
var inst_54103 = (state_54172[(8)]);
var inst_54151__$1 = topic_fn.call(null,inst_54103);
var inst_54152 = cljs.core.deref.call(null,mults);
var inst_54153__$1 = cljs.core.get.call(null,inst_54152,inst_54151__$1);
var state_54172__$1 = (function (){var statearr_54188 = state_54172;
(statearr_54188[(7)] = inst_54151__$1);

(statearr_54188[(11)] = inst_54153__$1);

return statearr_54188;
})();
if(cljs.core.truth_(inst_54153__$1)){
var statearr_54189_54237 = state_54172__$1;
(statearr_54189_54237[(1)] = (19));

} else {
var statearr_54190_54238 = state_54172__$1;
(statearr_54190_54238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (25))){
var inst_54162 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54191_54239 = state_54172__$1;
(statearr_54191_54239[(2)] = inst_54162);

(statearr_54191_54239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (17))){
var inst_54127 = (state_54172[(10)]);
var inst_54136 = cljs.core.first.call(null,inst_54127);
var inst_54137 = cljs.core.async.muxch_STAR_.call(null,inst_54136);
var inst_54138 = cljs.core.async.close_BANG_.call(null,inst_54137);
var inst_54139 = cljs.core.next.call(null,inst_54127);
var inst_54113 = inst_54139;
var inst_54114 = null;
var inst_54115 = (0);
var inst_54116 = (0);
var state_54172__$1 = (function (){var statearr_54192 = state_54172;
(statearr_54192[(12)] = inst_54113);

(statearr_54192[(13)] = inst_54138);

(statearr_54192[(14)] = inst_54114);

(statearr_54192[(15)] = inst_54116);

(statearr_54192[(16)] = inst_54115);

return statearr_54192;
})();
var statearr_54193_54240 = state_54172__$1;
(statearr_54193_54240[(2)] = null);

(statearr_54193_54240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (3))){
var inst_54170 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54172__$1,inst_54170);
} else {
if((state_val_54173 === (12))){
var inst_54147 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54194_54241 = state_54172__$1;
(statearr_54194_54241[(2)] = inst_54147);

(statearr_54194_54241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (2))){
var state_54172__$1 = state_54172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54172__$1,(4),ch);
} else {
if((state_val_54173 === (23))){
var state_54172__$1 = state_54172;
var statearr_54195_54242 = state_54172__$1;
(statearr_54195_54242[(2)] = null);

(statearr_54195_54242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (19))){
var inst_54153 = (state_54172[(11)]);
var inst_54103 = (state_54172[(8)]);
var inst_54155 = cljs.core.async.muxch_STAR_.call(null,inst_54153);
var state_54172__$1 = state_54172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54172__$1,(22),inst_54155,inst_54103);
} else {
if((state_val_54173 === (11))){
var inst_54113 = (state_54172[(12)]);
var inst_54127 = (state_54172[(10)]);
var inst_54127__$1 = cljs.core.seq.call(null,inst_54113);
var state_54172__$1 = (function (){var statearr_54196 = state_54172;
(statearr_54196[(10)] = inst_54127__$1);

return statearr_54196;
})();
if(inst_54127__$1){
var statearr_54197_54243 = state_54172__$1;
(statearr_54197_54243[(1)] = (13));

} else {
var statearr_54198_54244 = state_54172__$1;
(statearr_54198_54244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (9))){
var inst_54149 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54199_54245 = state_54172__$1;
(statearr_54199_54245[(2)] = inst_54149);

(statearr_54199_54245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (5))){
var inst_54110 = cljs.core.deref.call(null,mults);
var inst_54111 = cljs.core.vals.call(null,inst_54110);
var inst_54112 = cljs.core.seq.call(null,inst_54111);
var inst_54113 = inst_54112;
var inst_54114 = null;
var inst_54115 = (0);
var inst_54116 = (0);
var state_54172__$1 = (function (){var statearr_54200 = state_54172;
(statearr_54200[(12)] = inst_54113);

(statearr_54200[(14)] = inst_54114);

(statearr_54200[(15)] = inst_54116);

(statearr_54200[(16)] = inst_54115);

return statearr_54200;
})();
var statearr_54201_54246 = state_54172__$1;
(statearr_54201_54246[(2)] = null);

(statearr_54201_54246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (14))){
var state_54172__$1 = state_54172;
var statearr_54205_54247 = state_54172__$1;
(statearr_54205_54247[(2)] = null);

(statearr_54205_54247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (16))){
var inst_54127 = (state_54172[(10)]);
var inst_54131 = cljs.core.chunk_first.call(null,inst_54127);
var inst_54132 = cljs.core.chunk_rest.call(null,inst_54127);
var inst_54133 = cljs.core.count.call(null,inst_54131);
var inst_54113 = inst_54132;
var inst_54114 = inst_54131;
var inst_54115 = inst_54133;
var inst_54116 = (0);
var state_54172__$1 = (function (){var statearr_54206 = state_54172;
(statearr_54206[(12)] = inst_54113);

(statearr_54206[(14)] = inst_54114);

(statearr_54206[(15)] = inst_54116);

(statearr_54206[(16)] = inst_54115);

return statearr_54206;
})();
var statearr_54207_54248 = state_54172__$1;
(statearr_54207_54248[(2)] = null);

(statearr_54207_54248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (10))){
var inst_54113 = (state_54172[(12)]);
var inst_54114 = (state_54172[(14)]);
var inst_54116 = (state_54172[(15)]);
var inst_54115 = (state_54172[(16)]);
var inst_54121 = cljs.core._nth.call(null,inst_54114,inst_54116);
var inst_54122 = cljs.core.async.muxch_STAR_.call(null,inst_54121);
var inst_54123 = cljs.core.async.close_BANG_.call(null,inst_54122);
var inst_54124 = (inst_54116 + (1));
var tmp54202 = inst_54113;
var tmp54203 = inst_54114;
var tmp54204 = inst_54115;
var inst_54113__$1 = tmp54202;
var inst_54114__$1 = tmp54203;
var inst_54115__$1 = tmp54204;
var inst_54116__$1 = inst_54124;
var state_54172__$1 = (function (){var statearr_54208 = state_54172;
(statearr_54208[(12)] = inst_54113__$1);

(statearr_54208[(17)] = inst_54123);

(statearr_54208[(14)] = inst_54114__$1);

(statearr_54208[(15)] = inst_54116__$1);

(statearr_54208[(16)] = inst_54115__$1);

return statearr_54208;
})();
var statearr_54209_54249 = state_54172__$1;
(statearr_54209_54249[(2)] = null);

(statearr_54209_54249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (18))){
var inst_54142 = (state_54172[(2)]);
var state_54172__$1 = state_54172;
var statearr_54210_54250 = state_54172__$1;
(statearr_54210_54250[(2)] = inst_54142);

(statearr_54210_54250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54173 === (8))){
var inst_54116 = (state_54172[(15)]);
var inst_54115 = (state_54172[(16)]);
var inst_54118 = (inst_54116 < inst_54115);
var inst_54119 = inst_54118;
var state_54172__$1 = state_54172;
if(cljs.core.truth_(inst_54119)){
var statearr_54211_54251 = state_54172__$1;
(statearr_54211_54251[(1)] = (10));

} else {
var statearr_54212_54252 = state_54172__$1;
(statearr_54212_54252[(1)] = (11));

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
});})(c__37632__auto___54224,mults,ensure_mult,p))
;
return ((function (switch__37611__auto__,c__37632__auto___54224,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54216[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54216[(1)] = (1));

return statearr_54216;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54172){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54217){if((e54217 instanceof Object)){
var ex__37615__auto__ = e54217;
var statearr_54218_54253 = state_54172;
(statearr_54218_54253[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54254 = state_54172;
state_54172 = G__54254;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54224,mults,ensure_mult,p))
})();
var state__37634__auto__ = (function (){var statearr_54219 = f__37633__auto__.call(null);
(statearr_54219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54224);

return statearr_54219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54224,mults,ensure_mult,p))
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
var args54255 = [];
var len__36574__auto___54258 = arguments.length;
var i__36575__auto___54259 = (0);
while(true){
if((i__36575__auto___54259 < len__36574__auto___54258)){
args54255.push((arguments[i__36575__auto___54259]));

var G__54260 = (i__36575__auto___54259 + (1));
i__36575__auto___54259 = G__54260;
continue;
} else {
}
break;
}

var G__54257 = args54255.length;
switch (G__54257) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54255.length)].join('')));

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
var args54262 = [];
var len__36574__auto___54265 = arguments.length;
var i__36575__auto___54266 = (0);
while(true){
if((i__36575__auto___54266 < len__36574__auto___54265)){
args54262.push((arguments[i__36575__auto___54266]));

var G__54267 = (i__36575__auto___54266 + (1));
i__36575__auto___54266 = G__54267;
continue;
} else {
}
break;
}

var G__54264 = args54262.length;
switch (G__54264) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54262.length)].join('')));

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
var args54269 = [];
var len__36574__auto___54340 = arguments.length;
var i__36575__auto___54341 = (0);
while(true){
if((i__36575__auto___54341 < len__36574__auto___54340)){
args54269.push((arguments[i__36575__auto___54341]));

var G__54342 = (i__36575__auto___54341 + (1));
i__36575__auto___54341 = G__54342;
continue;
} else {
}
break;
}

var G__54271 = args54269.length;
switch (G__54271) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54269.length)].join('')));

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
var c__37632__auto___54344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_54310){
var state_val_54311 = (state_54310[(1)]);
if((state_val_54311 === (7))){
var state_54310__$1 = state_54310;
var statearr_54312_54345 = state_54310__$1;
(statearr_54312_54345[(2)] = null);

(statearr_54312_54345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (1))){
var state_54310__$1 = state_54310;
var statearr_54313_54346 = state_54310__$1;
(statearr_54313_54346[(2)] = null);

(statearr_54313_54346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (4))){
var inst_54274 = (state_54310[(7)]);
var inst_54276 = (inst_54274 < cnt);
var state_54310__$1 = state_54310;
if(cljs.core.truth_(inst_54276)){
var statearr_54314_54347 = state_54310__$1;
(statearr_54314_54347[(1)] = (6));

} else {
var statearr_54315_54348 = state_54310__$1;
(statearr_54315_54348[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (15))){
var inst_54306 = (state_54310[(2)]);
var state_54310__$1 = state_54310;
var statearr_54316_54349 = state_54310__$1;
(statearr_54316_54349[(2)] = inst_54306);

(statearr_54316_54349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (13))){
var inst_54299 = cljs.core.async.close_BANG_.call(null,out);
var state_54310__$1 = state_54310;
var statearr_54317_54350 = state_54310__$1;
(statearr_54317_54350[(2)] = inst_54299);

(statearr_54317_54350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (6))){
var state_54310__$1 = state_54310;
var statearr_54318_54351 = state_54310__$1;
(statearr_54318_54351[(2)] = null);

(statearr_54318_54351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (3))){
var inst_54308 = (state_54310[(2)]);
var state_54310__$1 = state_54310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54310__$1,inst_54308);
} else {
if((state_val_54311 === (12))){
var inst_54296 = (state_54310[(8)]);
var inst_54296__$1 = (state_54310[(2)]);
var inst_54297 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_54296__$1);
var state_54310__$1 = (function (){var statearr_54319 = state_54310;
(statearr_54319[(8)] = inst_54296__$1);

return statearr_54319;
})();
if(cljs.core.truth_(inst_54297)){
var statearr_54320_54352 = state_54310__$1;
(statearr_54320_54352[(1)] = (13));

} else {
var statearr_54321_54353 = state_54310__$1;
(statearr_54321_54353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (2))){
var inst_54273 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_54274 = (0);
var state_54310__$1 = (function (){var statearr_54322 = state_54310;
(statearr_54322[(7)] = inst_54274);

(statearr_54322[(9)] = inst_54273);

return statearr_54322;
})();
var statearr_54323_54354 = state_54310__$1;
(statearr_54323_54354[(2)] = null);

(statearr_54323_54354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (11))){
var inst_54274 = (state_54310[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_54310,(10),Object,null,(9));
var inst_54283 = chs__$1.call(null,inst_54274);
var inst_54284 = done.call(null,inst_54274);
var inst_54285 = cljs.core.async.take_BANG_.call(null,inst_54283,inst_54284);
var state_54310__$1 = state_54310;
var statearr_54324_54355 = state_54310__$1;
(statearr_54324_54355[(2)] = inst_54285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (9))){
var inst_54274 = (state_54310[(7)]);
var inst_54287 = (state_54310[(2)]);
var inst_54288 = (inst_54274 + (1));
var inst_54274__$1 = inst_54288;
var state_54310__$1 = (function (){var statearr_54325 = state_54310;
(statearr_54325[(7)] = inst_54274__$1);

(statearr_54325[(10)] = inst_54287);

return statearr_54325;
})();
var statearr_54326_54356 = state_54310__$1;
(statearr_54326_54356[(2)] = null);

(statearr_54326_54356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (5))){
var inst_54294 = (state_54310[(2)]);
var state_54310__$1 = (function (){var statearr_54327 = state_54310;
(statearr_54327[(11)] = inst_54294);

return statearr_54327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54310__$1,(12),dchan);
} else {
if((state_val_54311 === (14))){
var inst_54296 = (state_54310[(8)]);
var inst_54301 = cljs.core.apply.call(null,f,inst_54296);
var state_54310__$1 = state_54310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54310__$1,(16),out,inst_54301);
} else {
if((state_val_54311 === (16))){
var inst_54303 = (state_54310[(2)]);
var state_54310__$1 = (function (){var statearr_54328 = state_54310;
(statearr_54328[(12)] = inst_54303);

return statearr_54328;
})();
var statearr_54329_54357 = state_54310__$1;
(statearr_54329_54357[(2)] = null);

(statearr_54329_54357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (10))){
var inst_54278 = (state_54310[(2)]);
var inst_54279 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_54310__$1 = (function (){var statearr_54330 = state_54310;
(statearr_54330[(13)] = inst_54278);

return statearr_54330;
})();
var statearr_54331_54358 = state_54310__$1;
(statearr_54331_54358[(2)] = inst_54279);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54311 === (8))){
var inst_54292 = (state_54310[(2)]);
var state_54310__$1 = state_54310;
var statearr_54332_54359 = state_54310__$1;
(statearr_54332_54359[(2)] = inst_54292);

(statearr_54332_54359[(1)] = (5));


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
});})(c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37611__auto__,c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54336[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54336[(1)] = (1));

return statearr_54336;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54310){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54337){if((e54337 instanceof Object)){
var ex__37615__auto__ = e54337;
var statearr_54338_54360 = state_54310;
(statearr_54338_54360[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54361 = state_54310;
state_54310 = G__54361;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37634__auto__ = (function (){var statearr_54339 = f__37633__auto__.call(null);
(statearr_54339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54344);

return statearr_54339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54344,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args54363 = [];
var len__36574__auto___54419 = arguments.length;
var i__36575__auto___54420 = (0);
while(true){
if((i__36575__auto___54420 < len__36574__auto___54419)){
args54363.push((arguments[i__36575__auto___54420]));

var G__54421 = (i__36575__auto___54420 + (1));
i__36575__auto___54420 = G__54421;
continue;
} else {
}
break;
}

var G__54365 = args54363.length;
switch (G__54365) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54363.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___54423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54423,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54423,out){
return (function (state_54395){
var state_val_54396 = (state_54395[(1)]);
if((state_val_54396 === (7))){
var inst_54374 = (state_54395[(7)]);
var inst_54375 = (state_54395[(8)]);
var inst_54374__$1 = (state_54395[(2)]);
var inst_54375__$1 = cljs.core.nth.call(null,inst_54374__$1,(0),null);
var inst_54376 = cljs.core.nth.call(null,inst_54374__$1,(1),null);
var inst_54377 = (inst_54375__$1 == null);
var state_54395__$1 = (function (){var statearr_54397 = state_54395;
(statearr_54397[(7)] = inst_54374__$1);

(statearr_54397[(9)] = inst_54376);

(statearr_54397[(8)] = inst_54375__$1);

return statearr_54397;
})();
if(cljs.core.truth_(inst_54377)){
var statearr_54398_54424 = state_54395__$1;
(statearr_54398_54424[(1)] = (8));

} else {
var statearr_54399_54425 = state_54395__$1;
(statearr_54399_54425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (1))){
var inst_54366 = cljs.core.vec.call(null,chs);
var inst_54367 = inst_54366;
var state_54395__$1 = (function (){var statearr_54400 = state_54395;
(statearr_54400[(10)] = inst_54367);

return statearr_54400;
})();
var statearr_54401_54426 = state_54395__$1;
(statearr_54401_54426[(2)] = null);

(statearr_54401_54426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (4))){
var inst_54367 = (state_54395[(10)]);
var state_54395__$1 = state_54395;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54395__$1,(7),inst_54367);
} else {
if((state_val_54396 === (6))){
var inst_54391 = (state_54395[(2)]);
var state_54395__$1 = state_54395;
var statearr_54402_54427 = state_54395__$1;
(statearr_54402_54427[(2)] = inst_54391);

(statearr_54402_54427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (3))){
var inst_54393 = (state_54395[(2)]);
var state_54395__$1 = state_54395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54395__$1,inst_54393);
} else {
if((state_val_54396 === (2))){
var inst_54367 = (state_54395[(10)]);
var inst_54369 = cljs.core.count.call(null,inst_54367);
var inst_54370 = (inst_54369 > (0));
var state_54395__$1 = state_54395;
if(cljs.core.truth_(inst_54370)){
var statearr_54404_54428 = state_54395__$1;
(statearr_54404_54428[(1)] = (4));

} else {
var statearr_54405_54429 = state_54395__$1;
(statearr_54405_54429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (11))){
var inst_54367 = (state_54395[(10)]);
var inst_54384 = (state_54395[(2)]);
var tmp54403 = inst_54367;
var inst_54367__$1 = tmp54403;
var state_54395__$1 = (function (){var statearr_54406 = state_54395;
(statearr_54406[(11)] = inst_54384);

(statearr_54406[(10)] = inst_54367__$1);

return statearr_54406;
})();
var statearr_54407_54430 = state_54395__$1;
(statearr_54407_54430[(2)] = null);

(statearr_54407_54430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (9))){
var inst_54375 = (state_54395[(8)]);
var state_54395__$1 = state_54395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54395__$1,(11),out,inst_54375);
} else {
if((state_val_54396 === (5))){
var inst_54389 = cljs.core.async.close_BANG_.call(null,out);
var state_54395__$1 = state_54395;
var statearr_54408_54431 = state_54395__$1;
(statearr_54408_54431[(2)] = inst_54389);

(statearr_54408_54431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (10))){
var inst_54387 = (state_54395[(2)]);
var state_54395__$1 = state_54395;
var statearr_54409_54432 = state_54395__$1;
(statearr_54409_54432[(2)] = inst_54387);

(statearr_54409_54432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54396 === (8))){
var inst_54374 = (state_54395[(7)]);
var inst_54376 = (state_54395[(9)]);
var inst_54375 = (state_54395[(8)]);
var inst_54367 = (state_54395[(10)]);
var inst_54379 = (function (){var cs = inst_54367;
var vec__54372 = inst_54374;
var v = inst_54375;
var c = inst_54376;
return ((function (cs,vec__54372,v,c,inst_54374,inst_54376,inst_54375,inst_54367,state_val_54396,c__37632__auto___54423,out){
return (function (p1__54362_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__54362_SHARP_);
});
;})(cs,vec__54372,v,c,inst_54374,inst_54376,inst_54375,inst_54367,state_val_54396,c__37632__auto___54423,out))
})();
var inst_54380 = cljs.core.filterv.call(null,inst_54379,inst_54367);
var inst_54367__$1 = inst_54380;
var state_54395__$1 = (function (){var statearr_54410 = state_54395;
(statearr_54410[(10)] = inst_54367__$1);

return statearr_54410;
})();
var statearr_54411_54433 = state_54395__$1;
(statearr_54411_54433[(2)] = null);

(statearr_54411_54433[(1)] = (2));


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
});})(c__37632__auto___54423,out))
;
return ((function (switch__37611__auto__,c__37632__auto___54423,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54415[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54415[(1)] = (1));

return statearr_54415;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54395){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54416){if((e54416 instanceof Object)){
var ex__37615__auto__ = e54416;
var statearr_54417_54434 = state_54395;
(statearr_54417_54434[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54435 = state_54395;
state_54395 = G__54435;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54423,out))
})();
var state__37634__auto__ = (function (){var statearr_54418 = f__37633__auto__.call(null);
(statearr_54418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54423);

return statearr_54418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54423,out))
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
var args54436 = [];
var len__36574__auto___54485 = arguments.length;
var i__36575__auto___54486 = (0);
while(true){
if((i__36575__auto___54486 < len__36574__auto___54485)){
args54436.push((arguments[i__36575__auto___54486]));

var G__54487 = (i__36575__auto___54486 + (1));
i__36575__auto___54486 = G__54487;
continue;
} else {
}
break;
}

var G__54438 = args54436.length;
switch (G__54438) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54436.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___54489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54489,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54489,out){
return (function (state_54462){
var state_val_54463 = (state_54462[(1)]);
if((state_val_54463 === (7))){
var inst_54444 = (state_54462[(7)]);
var inst_54444__$1 = (state_54462[(2)]);
var inst_54445 = (inst_54444__$1 == null);
var inst_54446 = cljs.core.not.call(null,inst_54445);
var state_54462__$1 = (function (){var statearr_54464 = state_54462;
(statearr_54464[(7)] = inst_54444__$1);

return statearr_54464;
})();
if(inst_54446){
var statearr_54465_54490 = state_54462__$1;
(statearr_54465_54490[(1)] = (8));

} else {
var statearr_54466_54491 = state_54462__$1;
(statearr_54466_54491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (1))){
var inst_54439 = (0);
var state_54462__$1 = (function (){var statearr_54467 = state_54462;
(statearr_54467[(8)] = inst_54439);

return statearr_54467;
})();
var statearr_54468_54492 = state_54462__$1;
(statearr_54468_54492[(2)] = null);

(statearr_54468_54492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (4))){
var state_54462__$1 = state_54462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54462__$1,(7),ch);
} else {
if((state_val_54463 === (6))){
var inst_54457 = (state_54462[(2)]);
var state_54462__$1 = state_54462;
var statearr_54469_54493 = state_54462__$1;
(statearr_54469_54493[(2)] = inst_54457);

(statearr_54469_54493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (3))){
var inst_54459 = (state_54462[(2)]);
var inst_54460 = cljs.core.async.close_BANG_.call(null,out);
var state_54462__$1 = (function (){var statearr_54470 = state_54462;
(statearr_54470[(9)] = inst_54459);

return statearr_54470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54462__$1,inst_54460);
} else {
if((state_val_54463 === (2))){
var inst_54439 = (state_54462[(8)]);
var inst_54441 = (inst_54439 < n);
var state_54462__$1 = state_54462;
if(cljs.core.truth_(inst_54441)){
var statearr_54471_54494 = state_54462__$1;
(statearr_54471_54494[(1)] = (4));

} else {
var statearr_54472_54495 = state_54462__$1;
(statearr_54472_54495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (11))){
var inst_54439 = (state_54462[(8)]);
var inst_54449 = (state_54462[(2)]);
var inst_54450 = (inst_54439 + (1));
var inst_54439__$1 = inst_54450;
var state_54462__$1 = (function (){var statearr_54473 = state_54462;
(statearr_54473[(8)] = inst_54439__$1);

(statearr_54473[(10)] = inst_54449);

return statearr_54473;
})();
var statearr_54474_54496 = state_54462__$1;
(statearr_54474_54496[(2)] = null);

(statearr_54474_54496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (9))){
var state_54462__$1 = state_54462;
var statearr_54475_54497 = state_54462__$1;
(statearr_54475_54497[(2)] = null);

(statearr_54475_54497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (5))){
var state_54462__$1 = state_54462;
var statearr_54476_54498 = state_54462__$1;
(statearr_54476_54498[(2)] = null);

(statearr_54476_54498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (10))){
var inst_54454 = (state_54462[(2)]);
var state_54462__$1 = state_54462;
var statearr_54477_54499 = state_54462__$1;
(statearr_54477_54499[(2)] = inst_54454);

(statearr_54477_54499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54463 === (8))){
var inst_54444 = (state_54462[(7)]);
var state_54462__$1 = state_54462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54462__$1,(11),out,inst_54444);
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
});})(c__37632__auto___54489,out))
;
return ((function (switch__37611__auto__,c__37632__auto___54489,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54481[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54481[(1)] = (1));

return statearr_54481;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54462){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54482){if((e54482 instanceof Object)){
var ex__37615__auto__ = e54482;
var statearr_54483_54500 = state_54462;
(statearr_54483_54500[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54501 = state_54462;
state_54462 = G__54501;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54489,out))
})();
var state__37634__auto__ = (function (){var statearr_54484 = f__37633__auto__.call(null);
(statearr_54484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54489);

return statearr_54484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54489,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54509 = (function (map_LT_,f,ch,meta54510){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta54510 = meta54510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54511,meta54510__$1){
var self__ = this;
var _54511__$1 = this;
return (new cljs.core.async.t_cljs$core$async54509(self__.map_LT_,self__.f,self__.ch,meta54510__$1));
});

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54511){
var self__ = this;
var _54511__$1 = this;
return self__.meta54510;
});

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async54512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54512 = (function (map_LT_,f,ch,meta54510,_,fn1,meta54513){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta54510 = meta54510;
this._ = _;
this.fn1 = fn1;
this.meta54513 = meta54513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_54514,meta54513__$1){
var self__ = this;
var _54514__$1 = this;
return (new cljs.core.async.t_cljs$core$async54512(self__.map_LT_,self__.f,self__.ch,self__.meta54510,self__._,self__.fn1,meta54513__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_54514){
var self__ = this;
var _54514__$1 = this;
return self__.meta54513;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__54502_SHARP_){
return f1.call(null,(((p1__54502_SHARP_ == null))?null:self__.f.call(null,p1__54502_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54510","meta54510",-2085966816,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async54509","cljs.core.async/t_cljs$core$async54509",558277954,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta54513","meta54513",1669259466,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async54512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54512";

cljs.core.async.t_cljs$core$async54512.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async54512");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async54512 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54512(map_LT___$1,f__$1,ch__$1,meta54510__$1,___$2,fn1__$1,meta54513){
return (new cljs.core.async.t_cljs$core$async54512(map_LT___$1,f__$1,ch__$1,meta54510__$1,___$2,fn1__$1,meta54513));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async54512(self__.map_LT_,self__.f,self__.ch,self__.meta54510,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54509.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async54509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54510","meta54510",-2085966816,null)], null);
});

cljs.core.async.t_cljs$core$async54509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54509";

cljs.core.async.t_cljs$core$async54509.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async54509");
});

cljs.core.async.__GT_t_cljs$core$async54509 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async54509(map_LT___$1,f__$1,ch__$1,meta54510){
return (new cljs.core.async.t_cljs$core$async54509(map_LT___$1,f__$1,ch__$1,meta54510));
});

}

return (new cljs.core.async.t_cljs$core$async54509(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async54518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54518 = (function (map_GT_,f,ch,meta54519){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta54519 = meta54519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54520,meta54519__$1){
var self__ = this;
var _54520__$1 = this;
return (new cljs.core.async.t_cljs$core$async54518(self__.map_GT_,self__.f,self__.ch,meta54519__$1));
});

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54520){
var self__ = this;
var _54520__$1 = this;
return self__.meta54519;
});

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async54518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54519","meta54519",-924920905,null)], null);
});

cljs.core.async.t_cljs$core$async54518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54518";

cljs.core.async.t_cljs$core$async54518.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async54518");
});

cljs.core.async.__GT_t_cljs$core$async54518 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async54518(map_GT___$1,f__$1,ch__$1,meta54519){
return (new cljs.core.async.t_cljs$core$async54518(map_GT___$1,f__$1,ch__$1,meta54519));
});

}

return (new cljs.core.async.t_cljs$core$async54518(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async54524 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54524 = (function (filter_GT_,p,ch,meta54525){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta54525 = meta54525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54526,meta54525__$1){
var self__ = this;
var _54526__$1 = this;
return (new cljs.core.async.t_cljs$core$async54524(self__.filter_GT_,self__.p,self__.ch,meta54525__$1));
});

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54526){
var self__ = this;
var _54526__$1 = this;
return self__.meta54525;
});

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async54524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async54524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta54525","meta54525",2054514569,null)], null);
});

cljs.core.async.t_cljs$core$async54524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async54524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54524";

cljs.core.async.t_cljs$core$async54524.cljs$lang$ctorPrWriter = (function (this__36114__auto__,writer__36115__auto__,opt__36116__auto__){
return cljs.core._write.call(null,writer__36115__auto__,"cljs.core.async/t_cljs$core$async54524");
});

cljs.core.async.__GT_t_cljs$core$async54524 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async54524(filter_GT___$1,p__$1,ch__$1,meta54525){
return (new cljs.core.async.t_cljs$core$async54524(filter_GT___$1,p__$1,ch__$1,meta54525));
});

}

return (new cljs.core.async.t_cljs$core$async54524(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args54527 = [];
var len__36574__auto___54571 = arguments.length;
var i__36575__auto___54572 = (0);
while(true){
if((i__36575__auto___54572 < len__36574__auto___54571)){
args54527.push((arguments[i__36575__auto___54572]));

var G__54573 = (i__36575__auto___54572 + (1));
i__36575__auto___54572 = G__54573;
continue;
} else {
}
break;
}

var G__54529 = args54527.length;
switch (G__54529) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54527.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___54575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54575,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54575,out){
return (function (state_54550){
var state_val_54551 = (state_54550[(1)]);
if((state_val_54551 === (7))){
var inst_54546 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
var statearr_54552_54576 = state_54550__$1;
(statearr_54552_54576[(2)] = inst_54546);

(statearr_54552_54576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (1))){
var state_54550__$1 = state_54550;
var statearr_54553_54577 = state_54550__$1;
(statearr_54553_54577[(2)] = null);

(statearr_54553_54577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (4))){
var inst_54532 = (state_54550[(7)]);
var inst_54532__$1 = (state_54550[(2)]);
var inst_54533 = (inst_54532__$1 == null);
var state_54550__$1 = (function (){var statearr_54554 = state_54550;
(statearr_54554[(7)] = inst_54532__$1);

return statearr_54554;
})();
if(cljs.core.truth_(inst_54533)){
var statearr_54555_54578 = state_54550__$1;
(statearr_54555_54578[(1)] = (5));

} else {
var statearr_54556_54579 = state_54550__$1;
(statearr_54556_54579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (6))){
var inst_54532 = (state_54550[(7)]);
var inst_54537 = p.call(null,inst_54532);
var state_54550__$1 = state_54550;
if(cljs.core.truth_(inst_54537)){
var statearr_54557_54580 = state_54550__$1;
(statearr_54557_54580[(1)] = (8));

} else {
var statearr_54558_54581 = state_54550__$1;
(statearr_54558_54581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (3))){
var inst_54548 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54550__$1,inst_54548);
} else {
if((state_val_54551 === (2))){
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54550__$1,(4),ch);
} else {
if((state_val_54551 === (11))){
var inst_54540 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
var statearr_54559_54582 = state_54550__$1;
(statearr_54559_54582[(2)] = inst_54540);

(statearr_54559_54582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (9))){
var state_54550__$1 = state_54550;
var statearr_54560_54583 = state_54550__$1;
(statearr_54560_54583[(2)] = null);

(statearr_54560_54583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (5))){
var inst_54535 = cljs.core.async.close_BANG_.call(null,out);
var state_54550__$1 = state_54550;
var statearr_54561_54584 = state_54550__$1;
(statearr_54561_54584[(2)] = inst_54535);

(statearr_54561_54584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (10))){
var inst_54543 = (state_54550[(2)]);
var state_54550__$1 = (function (){var statearr_54562 = state_54550;
(statearr_54562[(8)] = inst_54543);

return statearr_54562;
})();
var statearr_54563_54585 = state_54550__$1;
(statearr_54563_54585[(2)] = null);

(statearr_54563_54585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (8))){
var inst_54532 = (state_54550[(7)]);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54550__$1,(11),out,inst_54532);
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
});})(c__37632__auto___54575,out))
;
return ((function (switch__37611__auto__,c__37632__auto___54575,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54567 = [null,null,null,null,null,null,null,null,null];
(statearr_54567[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54567[(1)] = (1));

return statearr_54567;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54550){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54568){if((e54568 instanceof Object)){
var ex__37615__auto__ = e54568;
var statearr_54569_54586 = state_54550;
(statearr_54569_54586[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54587 = state_54550;
state_54550 = G__54587;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54575,out))
})();
var state__37634__auto__ = (function (){var statearr_54570 = f__37633__auto__.call(null);
(statearr_54570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54575);

return statearr_54570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54575,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args54588 = [];
var len__36574__auto___54591 = arguments.length;
var i__36575__auto___54592 = (0);
while(true){
if((i__36575__auto___54592 < len__36574__auto___54591)){
args54588.push((arguments[i__36575__auto___54592]));

var G__54593 = (i__36575__auto___54592 + (1));
i__36575__auto___54592 = G__54593;
continue;
} else {
}
break;
}

var G__54590 = args54588.length;
switch (G__54590) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54588.length)].join('')));

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
return (function (state_54760){
var state_val_54761 = (state_54760[(1)]);
if((state_val_54761 === (7))){
var inst_54756 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
var statearr_54762_54803 = state_54760__$1;
(statearr_54762_54803[(2)] = inst_54756);

(statearr_54762_54803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (20))){
var inst_54726 = (state_54760[(7)]);
var inst_54737 = (state_54760[(2)]);
var inst_54738 = cljs.core.next.call(null,inst_54726);
var inst_54712 = inst_54738;
var inst_54713 = null;
var inst_54714 = (0);
var inst_54715 = (0);
var state_54760__$1 = (function (){var statearr_54763 = state_54760;
(statearr_54763[(8)] = inst_54737);

(statearr_54763[(9)] = inst_54714);

(statearr_54763[(10)] = inst_54715);

(statearr_54763[(11)] = inst_54712);

(statearr_54763[(12)] = inst_54713);

return statearr_54763;
})();
var statearr_54764_54804 = state_54760__$1;
(statearr_54764_54804[(2)] = null);

(statearr_54764_54804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (1))){
var state_54760__$1 = state_54760;
var statearr_54765_54805 = state_54760__$1;
(statearr_54765_54805[(2)] = null);

(statearr_54765_54805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (4))){
var inst_54701 = (state_54760[(13)]);
var inst_54701__$1 = (state_54760[(2)]);
var inst_54702 = (inst_54701__$1 == null);
var state_54760__$1 = (function (){var statearr_54766 = state_54760;
(statearr_54766[(13)] = inst_54701__$1);

return statearr_54766;
})();
if(cljs.core.truth_(inst_54702)){
var statearr_54767_54806 = state_54760__$1;
(statearr_54767_54806[(1)] = (5));

} else {
var statearr_54768_54807 = state_54760__$1;
(statearr_54768_54807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (15))){
var state_54760__$1 = state_54760;
var statearr_54772_54808 = state_54760__$1;
(statearr_54772_54808[(2)] = null);

(statearr_54772_54808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (21))){
var state_54760__$1 = state_54760;
var statearr_54773_54809 = state_54760__$1;
(statearr_54773_54809[(2)] = null);

(statearr_54773_54809[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (13))){
var inst_54714 = (state_54760[(9)]);
var inst_54715 = (state_54760[(10)]);
var inst_54712 = (state_54760[(11)]);
var inst_54713 = (state_54760[(12)]);
var inst_54722 = (state_54760[(2)]);
var inst_54723 = (inst_54715 + (1));
var tmp54769 = inst_54714;
var tmp54770 = inst_54712;
var tmp54771 = inst_54713;
var inst_54712__$1 = tmp54770;
var inst_54713__$1 = tmp54771;
var inst_54714__$1 = tmp54769;
var inst_54715__$1 = inst_54723;
var state_54760__$1 = (function (){var statearr_54774 = state_54760;
(statearr_54774[(14)] = inst_54722);

(statearr_54774[(9)] = inst_54714__$1);

(statearr_54774[(10)] = inst_54715__$1);

(statearr_54774[(11)] = inst_54712__$1);

(statearr_54774[(12)] = inst_54713__$1);

return statearr_54774;
})();
var statearr_54775_54810 = state_54760__$1;
(statearr_54775_54810[(2)] = null);

(statearr_54775_54810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (22))){
var state_54760__$1 = state_54760;
var statearr_54776_54811 = state_54760__$1;
(statearr_54776_54811[(2)] = null);

(statearr_54776_54811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (6))){
var inst_54701 = (state_54760[(13)]);
var inst_54710 = f.call(null,inst_54701);
var inst_54711 = cljs.core.seq.call(null,inst_54710);
var inst_54712 = inst_54711;
var inst_54713 = null;
var inst_54714 = (0);
var inst_54715 = (0);
var state_54760__$1 = (function (){var statearr_54777 = state_54760;
(statearr_54777[(9)] = inst_54714);

(statearr_54777[(10)] = inst_54715);

(statearr_54777[(11)] = inst_54712);

(statearr_54777[(12)] = inst_54713);

return statearr_54777;
})();
var statearr_54778_54812 = state_54760__$1;
(statearr_54778_54812[(2)] = null);

(statearr_54778_54812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (17))){
var inst_54726 = (state_54760[(7)]);
var inst_54730 = cljs.core.chunk_first.call(null,inst_54726);
var inst_54731 = cljs.core.chunk_rest.call(null,inst_54726);
var inst_54732 = cljs.core.count.call(null,inst_54730);
var inst_54712 = inst_54731;
var inst_54713 = inst_54730;
var inst_54714 = inst_54732;
var inst_54715 = (0);
var state_54760__$1 = (function (){var statearr_54779 = state_54760;
(statearr_54779[(9)] = inst_54714);

(statearr_54779[(10)] = inst_54715);

(statearr_54779[(11)] = inst_54712);

(statearr_54779[(12)] = inst_54713);

return statearr_54779;
})();
var statearr_54780_54813 = state_54760__$1;
(statearr_54780_54813[(2)] = null);

(statearr_54780_54813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (3))){
var inst_54758 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54760__$1,inst_54758);
} else {
if((state_val_54761 === (12))){
var inst_54746 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
var statearr_54781_54814 = state_54760__$1;
(statearr_54781_54814[(2)] = inst_54746);

(statearr_54781_54814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (2))){
var state_54760__$1 = state_54760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54760__$1,(4),in$);
} else {
if((state_val_54761 === (23))){
var inst_54754 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
var statearr_54782_54815 = state_54760__$1;
(statearr_54782_54815[(2)] = inst_54754);

(statearr_54782_54815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (19))){
var inst_54741 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
var statearr_54783_54816 = state_54760__$1;
(statearr_54783_54816[(2)] = inst_54741);

(statearr_54783_54816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (11))){
var inst_54726 = (state_54760[(7)]);
var inst_54712 = (state_54760[(11)]);
var inst_54726__$1 = cljs.core.seq.call(null,inst_54712);
var state_54760__$1 = (function (){var statearr_54784 = state_54760;
(statearr_54784[(7)] = inst_54726__$1);

return statearr_54784;
})();
if(inst_54726__$1){
var statearr_54785_54817 = state_54760__$1;
(statearr_54785_54817[(1)] = (14));

} else {
var statearr_54786_54818 = state_54760__$1;
(statearr_54786_54818[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (9))){
var inst_54748 = (state_54760[(2)]);
var inst_54749 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_54760__$1 = (function (){var statearr_54787 = state_54760;
(statearr_54787[(15)] = inst_54748);

return statearr_54787;
})();
if(cljs.core.truth_(inst_54749)){
var statearr_54788_54819 = state_54760__$1;
(statearr_54788_54819[(1)] = (21));

} else {
var statearr_54789_54820 = state_54760__$1;
(statearr_54789_54820[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (5))){
var inst_54704 = cljs.core.async.close_BANG_.call(null,out);
var state_54760__$1 = state_54760;
var statearr_54790_54821 = state_54760__$1;
(statearr_54790_54821[(2)] = inst_54704);

(statearr_54790_54821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (14))){
var inst_54726 = (state_54760[(7)]);
var inst_54728 = cljs.core.chunked_seq_QMARK_.call(null,inst_54726);
var state_54760__$1 = state_54760;
if(inst_54728){
var statearr_54791_54822 = state_54760__$1;
(statearr_54791_54822[(1)] = (17));

} else {
var statearr_54792_54823 = state_54760__$1;
(statearr_54792_54823[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (16))){
var inst_54744 = (state_54760[(2)]);
var state_54760__$1 = state_54760;
var statearr_54793_54824 = state_54760__$1;
(statearr_54793_54824[(2)] = inst_54744);

(statearr_54793_54824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54761 === (10))){
var inst_54715 = (state_54760[(10)]);
var inst_54713 = (state_54760[(12)]);
var inst_54720 = cljs.core._nth.call(null,inst_54713,inst_54715);
var state_54760__$1 = state_54760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54760__$1,(13),out,inst_54720);
} else {
if((state_val_54761 === (18))){
var inst_54726 = (state_54760[(7)]);
var inst_54735 = cljs.core.first.call(null,inst_54726);
var state_54760__$1 = state_54760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54760__$1,(20),out,inst_54735);
} else {
if((state_val_54761 === (8))){
var inst_54714 = (state_54760[(9)]);
var inst_54715 = (state_54760[(10)]);
var inst_54717 = (inst_54715 < inst_54714);
var inst_54718 = inst_54717;
var state_54760__$1 = state_54760;
if(cljs.core.truth_(inst_54718)){
var statearr_54794_54825 = state_54760__$1;
(statearr_54794_54825[(1)] = (10));

} else {
var statearr_54795_54826 = state_54760__$1;
(statearr_54795_54826[(1)] = (11));

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
var statearr_54799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54799[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__);

(statearr_54799[(1)] = (1));

return statearr_54799;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1 = (function (state_54760){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54800){if((e54800 instanceof Object)){
var ex__37615__auto__ = e54800;
var statearr_54801_54827 = state_54760;
(statearr_54801_54827[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54828 = state_54760;
state_54760 = G__54828;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__ = function(state_54760){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1.call(this,state_54760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37612__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_54802 = f__37633__auto__.call(null);
(statearr_54802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_54802;
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
var args54829 = [];
var len__36574__auto___54832 = arguments.length;
var i__36575__auto___54833 = (0);
while(true){
if((i__36575__auto___54833 < len__36574__auto___54832)){
args54829.push((arguments[i__36575__auto___54833]));

var G__54834 = (i__36575__auto___54833 + (1));
i__36575__auto___54833 = G__54834;
continue;
} else {
}
break;
}

var G__54831 = args54829.length;
switch (G__54831) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54829.length)].join('')));

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
var args54836 = [];
var len__36574__auto___54839 = arguments.length;
var i__36575__auto___54840 = (0);
while(true){
if((i__36575__auto___54840 < len__36574__auto___54839)){
args54836.push((arguments[i__36575__auto___54840]));

var G__54841 = (i__36575__auto___54840 + (1));
i__36575__auto___54840 = G__54841;
continue;
} else {
}
break;
}

var G__54838 = args54836.length;
switch (G__54838) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54836.length)].join('')));

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
var args54843 = [];
var len__36574__auto___54894 = arguments.length;
var i__36575__auto___54895 = (0);
while(true){
if((i__36575__auto___54895 < len__36574__auto___54894)){
args54843.push((arguments[i__36575__auto___54895]));

var G__54896 = (i__36575__auto___54895 + (1));
i__36575__auto___54895 = G__54896;
continue;
} else {
}
break;
}

var G__54845 = args54843.length;
switch (G__54845) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54843.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___54898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54898,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54898,out){
return (function (state_54869){
var state_val_54870 = (state_54869[(1)]);
if((state_val_54870 === (7))){
var inst_54864 = (state_54869[(2)]);
var state_54869__$1 = state_54869;
var statearr_54871_54899 = state_54869__$1;
(statearr_54871_54899[(2)] = inst_54864);

(statearr_54871_54899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (1))){
var inst_54846 = null;
var state_54869__$1 = (function (){var statearr_54872 = state_54869;
(statearr_54872[(7)] = inst_54846);

return statearr_54872;
})();
var statearr_54873_54900 = state_54869__$1;
(statearr_54873_54900[(2)] = null);

(statearr_54873_54900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (4))){
var inst_54849 = (state_54869[(8)]);
var inst_54849__$1 = (state_54869[(2)]);
var inst_54850 = (inst_54849__$1 == null);
var inst_54851 = cljs.core.not.call(null,inst_54850);
var state_54869__$1 = (function (){var statearr_54874 = state_54869;
(statearr_54874[(8)] = inst_54849__$1);

return statearr_54874;
})();
if(inst_54851){
var statearr_54875_54901 = state_54869__$1;
(statearr_54875_54901[(1)] = (5));

} else {
var statearr_54876_54902 = state_54869__$1;
(statearr_54876_54902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (6))){
var state_54869__$1 = state_54869;
var statearr_54877_54903 = state_54869__$1;
(statearr_54877_54903[(2)] = null);

(statearr_54877_54903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (3))){
var inst_54866 = (state_54869[(2)]);
var inst_54867 = cljs.core.async.close_BANG_.call(null,out);
var state_54869__$1 = (function (){var statearr_54878 = state_54869;
(statearr_54878[(9)] = inst_54866);

return statearr_54878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54869__$1,inst_54867);
} else {
if((state_val_54870 === (2))){
var state_54869__$1 = state_54869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54869__$1,(4),ch);
} else {
if((state_val_54870 === (11))){
var inst_54849 = (state_54869[(8)]);
var inst_54858 = (state_54869[(2)]);
var inst_54846 = inst_54849;
var state_54869__$1 = (function (){var statearr_54879 = state_54869;
(statearr_54879[(10)] = inst_54858);

(statearr_54879[(7)] = inst_54846);

return statearr_54879;
})();
var statearr_54880_54904 = state_54869__$1;
(statearr_54880_54904[(2)] = null);

(statearr_54880_54904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (9))){
var inst_54849 = (state_54869[(8)]);
var state_54869__$1 = state_54869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54869__$1,(11),out,inst_54849);
} else {
if((state_val_54870 === (5))){
var inst_54846 = (state_54869[(7)]);
var inst_54849 = (state_54869[(8)]);
var inst_54853 = cljs.core._EQ_.call(null,inst_54849,inst_54846);
var state_54869__$1 = state_54869;
if(inst_54853){
var statearr_54882_54905 = state_54869__$1;
(statearr_54882_54905[(1)] = (8));

} else {
var statearr_54883_54906 = state_54869__$1;
(statearr_54883_54906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (10))){
var inst_54861 = (state_54869[(2)]);
var state_54869__$1 = state_54869;
var statearr_54884_54907 = state_54869__$1;
(statearr_54884_54907[(2)] = inst_54861);

(statearr_54884_54907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54870 === (8))){
var inst_54846 = (state_54869[(7)]);
var tmp54881 = inst_54846;
var inst_54846__$1 = tmp54881;
var state_54869__$1 = (function (){var statearr_54885 = state_54869;
(statearr_54885[(7)] = inst_54846__$1);

return statearr_54885;
})();
var statearr_54886_54908 = state_54869__$1;
(statearr_54886_54908[(2)] = null);

(statearr_54886_54908[(1)] = (2));


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
});})(c__37632__auto___54898,out))
;
return ((function (switch__37611__auto__,c__37632__auto___54898,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54890[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54890[(1)] = (1));

return statearr_54890;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54869){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54891){if((e54891 instanceof Object)){
var ex__37615__auto__ = e54891;
var statearr_54892_54909 = state_54869;
(statearr_54892_54909[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54910 = state_54869;
state_54869 = G__54910;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54898,out))
})();
var state__37634__auto__ = (function (){var statearr_54893 = f__37633__auto__.call(null);
(statearr_54893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54898);

return statearr_54893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54898,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args54911 = [];
var len__36574__auto___54981 = arguments.length;
var i__36575__auto___54982 = (0);
while(true){
if((i__36575__auto___54982 < len__36574__auto___54981)){
args54911.push((arguments[i__36575__auto___54982]));

var G__54983 = (i__36575__auto___54982 + (1));
i__36575__auto___54982 = G__54983;
continue;
} else {
}
break;
}

var G__54913 = args54911.length;
switch (G__54913) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54911.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___54985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___54985,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___54985,out){
return (function (state_54951){
var state_val_54952 = (state_54951[(1)]);
if((state_val_54952 === (7))){
var inst_54947 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
var statearr_54953_54986 = state_54951__$1;
(statearr_54953_54986[(2)] = inst_54947);

(statearr_54953_54986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (1))){
var inst_54914 = (new Array(n));
var inst_54915 = inst_54914;
var inst_54916 = (0);
var state_54951__$1 = (function (){var statearr_54954 = state_54951;
(statearr_54954[(7)] = inst_54916);

(statearr_54954[(8)] = inst_54915);

return statearr_54954;
})();
var statearr_54955_54987 = state_54951__$1;
(statearr_54955_54987[(2)] = null);

(statearr_54955_54987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (4))){
var inst_54919 = (state_54951[(9)]);
var inst_54919__$1 = (state_54951[(2)]);
var inst_54920 = (inst_54919__$1 == null);
var inst_54921 = cljs.core.not.call(null,inst_54920);
var state_54951__$1 = (function (){var statearr_54956 = state_54951;
(statearr_54956[(9)] = inst_54919__$1);

return statearr_54956;
})();
if(inst_54921){
var statearr_54957_54988 = state_54951__$1;
(statearr_54957_54988[(1)] = (5));

} else {
var statearr_54958_54989 = state_54951__$1;
(statearr_54958_54989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (15))){
var inst_54941 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
var statearr_54959_54990 = state_54951__$1;
(statearr_54959_54990[(2)] = inst_54941);

(statearr_54959_54990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (13))){
var state_54951__$1 = state_54951;
var statearr_54960_54991 = state_54951__$1;
(statearr_54960_54991[(2)] = null);

(statearr_54960_54991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (6))){
var inst_54916 = (state_54951[(7)]);
var inst_54937 = (inst_54916 > (0));
var state_54951__$1 = state_54951;
if(cljs.core.truth_(inst_54937)){
var statearr_54961_54992 = state_54951__$1;
(statearr_54961_54992[(1)] = (12));

} else {
var statearr_54962_54993 = state_54951__$1;
(statearr_54962_54993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (3))){
var inst_54949 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54951__$1,inst_54949);
} else {
if((state_val_54952 === (12))){
var inst_54915 = (state_54951[(8)]);
var inst_54939 = cljs.core.vec.call(null,inst_54915);
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54951__$1,(15),out,inst_54939);
} else {
if((state_val_54952 === (2))){
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54951__$1,(4),ch);
} else {
if((state_val_54952 === (11))){
var inst_54931 = (state_54951[(2)]);
var inst_54932 = (new Array(n));
var inst_54915 = inst_54932;
var inst_54916 = (0);
var state_54951__$1 = (function (){var statearr_54963 = state_54951;
(statearr_54963[(7)] = inst_54916);

(statearr_54963[(8)] = inst_54915);

(statearr_54963[(10)] = inst_54931);

return statearr_54963;
})();
var statearr_54964_54994 = state_54951__$1;
(statearr_54964_54994[(2)] = null);

(statearr_54964_54994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (9))){
var inst_54915 = (state_54951[(8)]);
var inst_54929 = cljs.core.vec.call(null,inst_54915);
var state_54951__$1 = state_54951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54951__$1,(11),out,inst_54929);
} else {
if((state_val_54952 === (5))){
var inst_54916 = (state_54951[(7)]);
var inst_54924 = (state_54951[(11)]);
var inst_54919 = (state_54951[(9)]);
var inst_54915 = (state_54951[(8)]);
var inst_54923 = (inst_54915[inst_54916] = inst_54919);
var inst_54924__$1 = (inst_54916 + (1));
var inst_54925 = (inst_54924__$1 < n);
var state_54951__$1 = (function (){var statearr_54965 = state_54951;
(statearr_54965[(11)] = inst_54924__$1);

(statearr_54965[(12)] = inst_54923);

return statearr_54965;
})();
if(cljs.core.truth_(inst_54925)){
var statearr_54966_54995 = state_54951__$1;
(statearr_54966_54995[(1)] = (8));

} else {
var statearr_54967_54996 = state_54951__$1;
(statearr_54967_54996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (14))){
var inst_54944 = (state_54951[(2)]);
var inst_54945 = cljs.core.async.close_BANG_.call(null,out);
var state_54951__$1 = (function (){var statearr_54969 = state_54951;
(statearr_54969[(13)] = inst_54944);

return statearr_54969;
})();
var statearr_54970_54997 = state_54951__$1;
(statearr_54970_54997[(2)] = inst_54945);

(statearr_54970_54997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (10))){
var inst_54935 = (state_54951[(2)]);
var state_54951__$1 = state_54951;
var statearr_54971_54998 = state_54951__$1;
(statearr_54971_54998[(2)] = inst_54935);

(statearr_54971_54998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54952 === (8))){
var inst_54924 = (state_54951[(11)]);
var inst_54915 = (state_54951[(8)]);
var tmp54968 = inst_54915;
var inst_54915__$1 = tmp54968;
var inst_54916 = inst_54924;
var state_54951__$1 = (function (){var statearr_54972 = state_54951;
(statearr_54972[(7)] = inst_54916);

(statearr_54972[(8)] = inst_54915__$1);

return statearr_54972;
})();
var statearr_54973_54999 = state_54951__$1;
(statearr_54973_54999[(2)] = null);

(statearr_54973_54999[(1)] = (2));


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
});})(c__37632__auto___54985,out))
;
return ((function (switch__37611__auto__,c__37632__auto___54985,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_54977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54977[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_54977[(1)] = (1));

return statearr_54977;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_54951){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_54951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e54978){if((e54978 instanceof Object)){
var ex__37615__auto__ = e54978;
var statearr_54979_55000 = state_54951;
(statearr_54979_55000[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55001 = state_54951;
state_54951 = G__55001;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_54951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_54951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___54985,out))
})();
var state__37634__auto__ = (function (){var statearr_54980 = f__37633__auto__.call(null);
(statearr_54980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___54985);

return statearr_54980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___54985,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args55002 = [];
var len__36574__auto___55076 = arguments.length;
var i__36575__auto___55077 = (0);
while(true){
if((i__36575__auto___55077 < len__36574__auto___55076)){
args55002.push((arguments[i__36575__auto___55077]));

var G__55078 = (i__36575__auto___55077 + (1));
i__36575__auto___55077 = G__55078;
continue;
} else {
}
break;
}

var G__55004 = args55002.length;
switch (G__55004) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55002.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37632__auto___55080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___55080,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___55080,out){
return (function (state_55046){
var state_val_55047 = (state_55046[(1)]);
if((state_val_55047 === (7))){
var inst_55042 = (state_55046[(2)]);
var state_55046__$1 = state_55046;
var statearr_55048_55081 = state_55046__$1;
(statearr_55048_55081[(2)] = inst_55042);

(statearr_55048_55081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (1))){
var inst_55005 = [];
var inst_55006 = inst_55005;
var inst_55007 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55046__$1 = (function (){var statearr_55049 = state_55046;
(statearr_55049[(7)] = inst_55006);

(statearr_55049[(8)] = inst_55007);

return statearr_55049;
})();
var statearr_55050_55082 = state_55046__$1;
(statearr_55050_55082[(2)] = null);

(statearr_55050_55082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (4))){
var inst_55010 = (state_55046[(9)]);
var inst_55010__$1 = (state_55046[(2)]);
var inst_55011 = (inst_55010__$1 == null);
var inst_55012 = cljs.core.not.call(null,inst_55011);
var state_55046__$1 = (function (){var statearr_55051 = state_55046;
(statearr_55051[(9)] = inst_55010__$1);

return statearr_55051;
})();
if(inst_55012){
var statearr_55052_55083 = state_55046__$1;
(statearr_55052_55083[(1)] = (5));

} else {
var statearr_55053_55084 = state_55046__$1;
(statearr_55053_55084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (15))){
var inst_55036 = (state_55046[(2)]);
var state_55046__$1 = state_55046;
var statearr_55054_55085 = state_55046__$1;
(statearr_55054_55085[(2)] = inst_55036);

(statearr_55054_55085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (13))){
var state_55046__$1 = state_55046;
var statearr_55055_55086 = state_55046__$1;
(statearr_55055_55086[(2)] = null);

(statearr_55055_55086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (6))){
var inst_55006 = (state_55046[(7)]);
var inst_55031 = inst_55006.length;
var inst_55032 = (inst_55031 > (0));
var state_55046__$1 = state_55046;
if(cljs.core.truth_(inst_55032)){
var statearr_55056_55087 = state_55046__$1;
(statearr_55056_55087[(1)] = (12));

} else {
var statearr_55057_55088 = state_55046__$1;
(statearr_55057_55088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (3))){
var inst_55044 = (state_55046[(2)]);
var state_55046__$1 = state_55046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55046__$1,inst_55044);
} else {
if((state_val_55047 === (12))){
var inst_55006 = (state_55046[(7)]);
var inst_55034 = cljs.core.vec.call(null,inst_55006);
var state_55046__$1 = state_55046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55046__$1,(15),out,inst_55034);
} else {
if((state_val_55047 === (2))){
var state_55046__$1 = state_55046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55046__$1,(4),ch);
} else {
if((state_val_55047 === (11))){
var inst_55014 = (state_55046[(10)]);
var inst_55010 = (state_55046[(9)]);
var inst_55024 = (state_55046[(2)]);
var inst_55025 = [];
var inst_55026 = inst_55025.push(inst_55010);
var inst_55006 = inst_55025;
var inst_55007 = inst_55014;
var state_55046__$1 = (function (){var statearr_55058 = state_55046;
(statearr_55058[(7)] = inst_55006);

(statearr_55058[(11)] = inst_55024);

(statearr_55058[(12)] = inst_55026);

(statearr_55058[(8)] = inst_55007);

return statearr_55058;
})();
var statearr_55059_55089 = state_55046__$1;
(statearr_55059_55089[(2)] = null);

(statearr_55059_55089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (9))){
var inst_55006 = (state_55046[(7)]);
var inst_55022 = cljs.core.vec.call(null,inst_55006);
var state_55046__$1 = state_55046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_55046__$1,(11),out,inst_55022);
} else {
if((state_val_55047 === (5))){
var inst_55014 = (state_55046[(10)]);
var inst_55010 = (state_55046[(9)]);
var inst_55007 = (state_55046[(8)]);
var inst_55014__$1 = f.call(null,inst_55010);
var inst_55015 = cljs.core._EQ_.call(null,inst_55014__$1,inst_55007);
var inst_55016 = cljs.core.keyword_identical_QMARK_.call(null,inst_55007,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_55017 = (inst_55015) || (inst_55016);
var state_55046__$1 = (function (){var statearr_55060 = state_55046;
(statearr_55060[(10)] = inst_55014__$1);

return statearr_55060;
})();
if(cljs.core.truth_(inst_55017)){
var statearr_55061_55090 = state_55046__$1;
(statearr_55061_55090[(1)] = (8));

} else {
var statearr_55062_55091 = state_55046__$1;
(statearr_55062_55091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (14))){
var inst_55039 = (state_55046[(2)]);
var inst_55040 = cljs.core.async.close_BANG_.call(null,out);
var state_55046__$1 = (function (){var statearr_55064 = state_55046;
(statearr_55064[(13)] = inst_55039);

return statearr_55064;
})();
var statearr_55065_55092 = state_55046__$1;
(statearr_55065_55092[(2)] = inst_55040);

(statearr_55065_55092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (10))){
var inst_55029 = (state_55046[(2)]);
var state_55046__$1 = state_55046;
var statearr_55066_55093 = state_55046__$1;
(statearr_55066_55093[(2)] = inst_55029);

(statearr_55066_55093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55047 === (8))){
var inst_55014 = (state_55046[(10)]);
var inst_55006 = (state_55046[(7)]);
var inst_55010 = (state_55046[(9)]);
var inst_55019 = inst_55006.push(inst_55010);
var tmp55063 = inst_55006;
var inst_55006__$1 = tmp55063;
var inst_55007 = inst_55014;
var state_55046__$1 = (function (){var statearr_55067 = state_55046;
(statearr_55067[(7)] = inst_55006__$1);

(statearr_55067[(14)] = inst_55019);

(statearr_55067[(8)] = inst_55007);

return statearr_55067;
})();
var statearr_55068_55094 = state_55046__$1;
(statearr_55068_55094[(2)] = null);

(statearr_55068_55094[(1)] = (2));


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
});})(c__37632__auto___55080,out))
;
return ((function (switch__37611__auto__,c__37632__auto___55080,out){
return (function() {
var cljs$core$async$state_machine__37612__auto__ = null;
var cljs$core$async$state_machine__37612__auto____0 = (function (){
var statearr_55072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55072[(0)] = cljs$core$async$state_machine__37612__auto__);

(statearr_55072[(1)] = (1));

return statearr_55072;
});
var cljs$core$async$state_machine__37612__auto____1 = (function (state_55046){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_55046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e55073){if((e55073 instanceof Object)){
var ex__37615__auto__ = e55073;
var statearr_55074_55095 = state_55046;
(statearr_55074_55095[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55096 = state_55046;
state_55046 = G__55096;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
cljs$core$async$state_machine__37612__auto__ = function(state_55046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37612__auto____1.call(this,state_55046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37612__auto____0;
cljs$core$async$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37612__auto____1;
return cljs$core$async$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___55080,out))
})();
var state__37634__auto__ = (function (){var statearr_55075 = f__37633__auto__.call(null);
(statearr_55075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___55080);

return statearr_55075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___55080,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456712365525