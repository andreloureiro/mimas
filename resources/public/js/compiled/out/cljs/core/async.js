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
var args51532 = [];
var len__36572__auto___51538 = arguments.length;
var i__36573__auto___51539 = (0);
while(true){
if((i__36573__auto___51539 < len__36572__auto___51538)){
args51532.push((arguments[i__36573__auto___51539]));

var G__51540 = (i__36573__auto___51539 + (1));
i__36573__auto___51539 = G__51540;
continue;
} else {
}
break;
}

var G__51534 = args51532.length;
switch (G__51534) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51532.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async51535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51535 = (function (f,blockable,meta51536){
this.f = f;
this.blockable = blockable;
this.meta51536 = meta51536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51537,meta51536__$1){
var self__ = this;
var _51537__$1 = this;
return (new cljs.core.async.t_cljs$core$async51535(self__.f,self__.blockable,meta51536__$1));
});

cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51537){
var self__ = this;
var _51537__$1 = this;
return self__.meta51536;
});

cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51536","meta51536",-1250211573,null)], null);
});

cljs.core.async.t_cljs$core$async51535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51535";

cljs.core.async.t_cljs$core$async51535.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async51535");
});

cljs.core.async.__GT_t_cljs$core$async51535 = (function cljs$core$async$__GT_t_cljs$core$async51535(f__$1,blockable__$1,meta51536){
return (new cljs.core.async.t_cljs$core$async51535(f__$1,blockable__$1,meta51536));
});

}

return (new cljs.core.async.t_cljs$core$async51535(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args51544 = [];
var len__36572__auto___51547 = arguments.length;
var i__36573__auto___51548 = (0);
while(true){
if((i__36573__auto___51548 < len__36572__auto___51547)){
args51544.push((arguments[i__36573__auto___51548]));

var G__51549 = (i__36573__auto___51548 + (1));
i__36573__auto___51548 = G__51549;
continue;
} else {
}
break;
}

var G__51546 = args51544.length;
switch (G__51546) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51544.length)].join('')));

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
var args51551 = [];
var len__36572__auto___51554 = arguments.length;
var i__36573__auto___51555 = (0);
while(true){
if((i__36573__auto___51555 < len__36572__auto___51554)){
args51551.push((arguments[i__36573__auto___51555]));

var G__51556 = (i__36573__auto___51555 + (1));
i__36573__auto___51555 = G__51556;
continue;
} else {
}
break;
}

var G__51553 = args51551.length;
switch (G__51553) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51551.length)].join('')));

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
var args51558 = [];
var len__36572__auto___51561 = arguments.length;
var i__36573__auto___51562 = (0);
while(true){
if((i__36573__auto___51562 < len__36572__auto___51561)){
args51558.push((arguments[i__36573__auto___51562]));

var G__51563 = (i__36573__auto___51562 + (1));
i__36573__auto___51562 = G__51563;
continue;
} else {
}
break;
}

var G__51560 = args51558.length;
switch (G__51560) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51558.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_51565 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51565);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_51565,ret){
return (function (){
return fn1.call(null,val_51565);
});})(val_51565,ret))
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
var args51566 = [];
var len__36572__auto___51569 = arguments.length;
var i__36573__auto___51570 = (0);
while(true){
if((i__36573__auto___51570 < len__36572__auto___51569)){
args51566.push((arguments[i__36573__auto___51570]));

var G__51571 = (i__36573__auto___51570 + (1));
i__36573__auto___51570 = G__51571;
continue;
} else {
}
break;
}

var G__51568 = args51566.length;
switch (G__51568) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51566.length)].join('')));

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
var n__36417__auto___51573 = n;
var x_51574 = (0);
while(true){
if((x_51574 < n__36417__auto___51573)){
(a[x_51574] = (0));

var G__51575 = (x_51574 + (1));
x_51574 = G__51575;
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

var G__51576 = (i + (1));
i = G__51576;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async51580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51580 = (function (alt_flag,flag,meta51581){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta51581 = meta51581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51582,meta51581__$1){
var self__ = this;
var _51582__$1 = this;
return (new cljs.core.async.t_cljs$core$async51580(self__.alt_flag,self__.flag,meta51581__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51582){
var self__ = this;
var _51582__$1 = this;
return self__.meta51581;
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51581","meta51581",-1494128558,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51580";

cljs.core.async.t_cljs$core$async51580.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async51580");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async51580 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51580(alt_flag__$1,flag__$1,meta51581){
return (new cljs.core.async.t_cljs$core$async51580(alt_flag__$1,flag__$1,meta51581));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51580(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async51586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51586 = (function (alt_handler,flag,cb,meta51587){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta51587 = meta51587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51588,meta51587__$1){
var self__ = this;
var _51588__$1 = this;
return (new cljs.core.async.t_cljs$core$async51586(self__.alt_handler,self__.flag,self__.cb,meta51587__$1));
});

cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51588){
var self__ = this;
var _51588__$1 = this;
return self__.meta51587;
});

cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51587","meta51587",831810824,null)], null);
});

cljs.core.async.t_cljs$core$async51586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51586";

cljs.core.async.t_cljs$core$async51586.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async51586");
});

cljs.core.async.__GT_t_cljs$core$async51586 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51586(alt_handler__$1,flag__$1,cb__$1,meta51587){
return (new cljs.core.async.t_cljs$core$async51586(alt_handler__$1,flag__$1,cb__$1,meta51587));
});

}

return (new cljs.core.async.t_cljs$core$async51586(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51589_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51589_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51590_SHARP_,port], null));
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
var G__51591 = (i + (1));
i = G__51591;
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
var len__36572__auto___51597 = arguments.length;
var i__36573__auto___51598 = (0);
while(true){
if((i__36573__auto___51598 < len__36572__auto___51597)){
args__36579__auto__.push((arguments[i__36573__auto___51598]));

var G__51599 = (i__36573__auto___51598 + (1));
i__36573__auto___51598 = G__51599;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((1) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36580__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51594){
var map__51595 = p__51594;
var map__51595__$1 = ((((!((map__51595 == null)))?((((map__51595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51595):map__51595);
var opts = map__51595__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51592){
var G__51593 = cljs.core.first.call(null,seq51592);
var seq51592__$1 = cljs.core.next.call(null,seq51592);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51593,seq51592__$1);
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
var args51600 = [];
var len__36572__auto___51650 = arguments.length;
var i__36573__auto___51651 = (0);
while(true){
if((i__36573__auto___51651 < len__36572__auto___51650)){
args51600.push((arguments[i__36573__auto___51651]));

var G__51652 = (i__36573__auto___51651 + (1));
i__36573__auto___51651 = G__51652;
continue;
} else {
}
break;
}

var G__51602 = args51600.length;
switch (G__51602) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51600.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37681__auto___51654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___51654){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___51654){
return (function (state_51626){
var state_val_51627 = (state_51626[(1)]);
if((state_val_51627 === (7))){
var inst_51622 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
var statearr_51628_51655 = state_51626__$1;
(statearr_51628_51655[(2)] = inst_51622);

(statearr_51628_51655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (1))){
var state_51626__$1 = state_51626;
var statearr_51629_51656 = state_51626__$1;
(statearr_51629_51656[(2)] = null);

(statearr_51629_51656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (4))){
var inst_51605 = (state_51626[(7)]);
var inst_51605__$1 = (state_51626[(2)]);
var inst_51606 = (inst_51605__$1 == null);
var state_51626__$1 = (function (){var statearr_51630 = state_51626;
(statearr_51630[(7)] = inst_51605__$1);

return statearr_51630;
})();
if(cljs.core.truth_(inst_51606)){
var statearr_51631_51657 = state_51626__$1;
(statearr_51631_51657[(1)] = (5));

} else {
var statearr_51632_51658 = state_51626__$1;
(statearr_51632_51658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (13))){
var state_51626__$1 = state_51626;
var statearr_51633_51659 = state_51626__$1;
(statearr_51633_51659[(2)] = null);

(statearr_51633_51659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (6))){
var inst_51605 = (state_51626[(7)]);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51626__$1,(11),to,inst_51605);
} else {
if((state_val_51627 === (3))){
var inst_51624 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51626__$1,inst_51624);
} else {
if((state_val_51627 === (12))){
var state_51626__$1 = state_51626;
var statearr_51634_51660 = state_51626__$1;
(statearr_51634_51660[(2)] = null);

(statearr_51634_51660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (2))){
var state_51626__$1 = state_51626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51626__$1,(4),from);
} else {
if((state_val_51627 === (11))){
var inst_51615 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
if(cljs.core.truth_(inst_51615)){
var statearr_51635_51661 = state_51626__$1;
(statearr_51635_51661[(1)] = (12));

} else {
var statearr_51636_51662 = state_51626__$1;
(statearr_51636_51662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (9))){
var state_51626__$1 = state_51626;
var statearr_51637_51663 = state_51626__$1;
(statearr_51637_51663[(2)] = null);

(statearr_51637_51663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (5))){
var state_51626__$1 = state_51626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51638_51664 = state_51626__$1;
(statearr_51638_51664[(1)] = (8));

} else {
var statearr_51639_51665 = state_51626__$1;
(statearr_51639_51665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (14))){
var inst_51620 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
var statearr_51640_51666 = state_51626__$1;
(statearr_51640_51666[(2)] = inst_51620);

(statearr_51640_51666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (10))){
var inst_51612 = (state_51626[(2)]);
var state_51626__$1 = state_51626;
var statearr_51641_51667 = state_51626__$1;
(statearr_51641_51667[(2)] = inst_51612);

(statearr_51641_51667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51627 === (8))){
var inst_51609 = cljs.core.async.close_BANG_.call(null,to);
var state_51626__$1 = state_51626;
var statearr_51642_51668 = state_51626__$1;
(statearr_51642_51668[(2)] = inst_51609);

(statearr_51642_51668[(1)] = (10));


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
});})(c__37681__auto___51654))
;
return ((function (switch__37569__auto__,c__37681__auto___51654){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_51646 = [null,null,null,null,null,null,null,null];
(statearr_51646[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_51646[(1)] = (1));

return statearr_51646;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_51626){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_51626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e51647){if((e51647 instanceof Object)){
var ex__37573__auto__ = e51647;
var statearr_51648_51669 = state_51626;
(statearr_51648_51669[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51670 = state_51626;
state_51626 = G__51670;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_51626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_51626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___51654))
})();
var state__37683__auto__ = (function (){var statearr_51649 = f__37682__auto__.call(null);
(statearr_51649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___51654);

return statearr_51649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___51654))
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
return (function (p__51854){
var vec__51855 = p__51854;
var v = cljs.core.nth.call(null,vec__51855,(0),null);
var p = cljs.core.nth.call(null,vec__51855,(1),null);
var job = vec__51855;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37681__auto___52037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results){
return (function (state_51860){
var state_val_51861 = (state_51860[(1)]);
if((state_val_51861 === (1))){
var state_51860__$1 = state_51860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51860__$1,(2),res,v);
} else {
if((state_val_51861 === (2))){
var inst_51857 = (state_51860[(2)]);
var inst_51858 = cljs.core.async.close_BANG_.call(null,res);
var state_51860__$1 = (function (){var statearr_51862 = state_51860;
(statearr_51862[(7)] = inst_51857);

return statearr_51862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51860__$1,inst_51858);
} else {
return null;
}
}
});})(c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results))
;
return ((function (switch__37569__auto__,c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_51866 = [null,null,null,null,null,null,null,null];
(statearr_51866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_51866[(1)] = (1));

return statearr_51866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_51860){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_51860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e51867){if((e51867 instanceof Object)){
var ex__37573__auto__ = e51867;
var statearr_51868_52038 = state_51860;
(statearr_51868_52038[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52039 = state_51860;
state_51860 = G__52039;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_51860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_51860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results))
})();
var state__37683__auto__ = (function (){var statearr_51869 = f__37682__auto__.call(null);
(statearr_51869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52037);

return statearr_51869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___52037,res,vec__51855,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51870){
var vec__51871 = p__51870;
var v = cljs.core.nth.call(null,vec__51871,(0),null);
var p = cljs.core.nth.call(null,vec__51871,(1),null);
var job = vec__51871;
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
var n__36417__auto___52040 = n;
var __52041 = (0);
while(true){
if((__52041 < n__36417__auto___52040)){
var G__51872_52042 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__51872_52042) {
case "compute":
var c__37681__auto___52044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52041,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (__52041,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function (state_51885){
var state_val_51886 = (state_51885[(1)]);
if((state_val_51886 === (1))){
var state_51885__$1 = state_51885;
var statearr_51887_52045 = state_51885__$1;
(statearr_51887_52045[(2)] = null);

(statearr_51887_52045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51886 === (2))){
var state_51885__$1 = state_51885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51885__$1,(4),jobs);
} else {
if((state_val_51886 === (3))){
var inst_51883 = (state_51885[(2)]);
var state_51885__$1 = state_51885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51885__$1,inst_51883);
} else {
if((state_val_51886 === (4))){
var inst_51875 = (state_51885[(2)]);
var inst_51876 = process.call(null,inst_51875);
var state_51885__$1 = state_51885;
if(cljs.core.truth_(inst_51876)){
var statearr_51888_52046 = state_51885__$1;
(statearr_51888_52046[(1)] = (5));

} else {
var statearr_51889_52047 = state_51885__$1;
(statearr_51889_52047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51886 === (5))){
var state_51885__$1 = state_51885;
var statearr_51890_52048 = state_51885__$1;
(statearr_51890_52048[(2)] = null);

(statearr_51890_52048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51886 === (6))){
var state_51885__$1 = state_51885;
var statearr_51891_52049 = state_51885__$1;
(statearr_51891_52049[(2)] = null);

(statearr_51891_52049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51886 === (7))){
var inst_51881 = (state_51885[(2)]);
var state_51885__$1 = state_51885;
var statearr_51892_52050 = state_51885__$1;
(statearr_51892_52050[(2)] = inst_51881);

(statearr_51892_52050[(1)] = (3));


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
});})(__52041,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
;
return ((function (__52041,switch__37569__auto__,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_51896 = [null,null,null,null,null,null,null];
(statearr_51896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_51896[(1)] = (1));

return statearr_51896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_51885){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_51885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e51897){if((e51897 instanceof Object)){
var ex__37573__auto__ = e51897;
var statearr_51898_52051 = state_51885;
(statearr_51898_52051[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52052 = state_51885;
state_51885 = G__52052;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_51885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_51885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(__52041,switch__37569__auto__,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_51899 = f__37682__auto__.call(null);
(statearr_51899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52044);

return statearr_51899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(__52041,c__37681__auto___52044,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
);


break;
case "async":
var c__37681__auto___52053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52041,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (__52041,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function (state_51912){
var state_val_51913 = (state_51912[(1)]);
if((state_val_51913 === (1))){
var state_51912__$1 = state_51912;
var statearr_51914_52054 = state_51912__$1;
(statearr_51914_52054[(2)] = null);

(statearr_51914_52054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (2))){
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51912__$1,(4),jobs);
} else {
if((state_val_51913 === (3))){
var inst_51910 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51912__$1,inst_51910);
} else {
if((state_val_51913 === (4))){
var inst_51902 = (state_51912[(2)]);
var inst_51903 = async.call(null,inst_51902);
var state_51912__$1 = state_51912;
if(cljs.core.truth_(inst_51903)){
var statearr_51915_52055 = state_51912__$1;
(statearr_51915_52055[(1)] = (5));

} else {
var statearr_51916_52056 = state_51912__$1;
(statearr_51916_52056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (5))){
var state_51912__$1 = state_51912;
var statearr_51917_52057 = state_51912__$1;
(statearr_51917_52057[(2)] = null);

(statearr_51917_52057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (6))){
var state_51912__$1 = state_51912;
var statearr_51918_52058 = state_51912__$1;
(statearr_51918_52058[(2)] = null);

(statearr_51918_52058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51913 === (7))){
var inst_51908 = (state_51912[(2)]);
var state_51912__$1 = state_51912;
var statearr_51919_52059 = state_51912__$1;
(statearr_51919_52059[(2)] = inst_51908);

(statearr_51919_52059[(1)] = (3));


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
});})(__52041,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
;
return ((function (__52041,switch__37569__auto__,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_51923 = [null,null,null,null,null,null,null];
(statearr_51923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_51923[(1)] = (1));

return statearr_51923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_51912){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_51912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e51924){if((e51924 instanceof Object)){
var ex__37573__auto__ = e51924;
var statearr_51925_52060 = state_51912;
(statearr_51925_52060[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52061 = state_51912;
state_51912 = G__52061;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_51912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_51912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(__52041,switch__37569__auto__,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_51926 = f__37682__auto__.call(null);
(statearr_51926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52053);

return statearr_51926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(__52041,c__37681__auto___52053,G__51872_52042,n__36417__auto___52040,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__52062 = (__52041 + (1));
__52041 = G__52062;
continue;
} else {
}
break;
}

var c__37681__auto___52063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___52063,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___52063,jobs,results,process,async){
return (function (state_51948){
var state_val_51949 = (state_51948[(1)]);
if((state_val_51949 === (1))){
var state_51948__$1 = state_51948;
var statearr_51950_52064 = state_51948__$1;
(statearr_51950_52064[(2)] = null);

(statearr_51950_52064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (2))){
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51948__$1,(4),from);
} else {
if((state_val_51949 === (3))){
var inst_51946 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51948__$1,inst_51946);
} else {
if((state_val_51949 === (4))){
var inst_51929 = (state_51948[(7)]);
var inst_51929__$1 = (state_51948[(2)]);
var inst_51930 = (inst_51929__$1 == null);
var state_51948__$1 = (function (){var statearr_51951 = state_51948;
(statearr_51951[(7)] = inst_51929__$1);

return statearr_51951;
})();
if(cljs.core.truth_(inst_51930)){
var statearr_51952_52065 = state_51948__$1;
(statearr_51952_52065[(1)] = (5));

} else {
var statearr_51953_52066 = state_51948__$1;
(statearr_51953_52066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (5))){
var inst_51932 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51948__$1 = state_51948;
var statearr_51954_52067 = state_51948__$1;
(statearr_51954_52067[(2)] = inst_51932);

(statearr_51954_52067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (6))){
var inst_51929 = (state_51948[(7)]);
var inst_51934 = (state_51948[(8)]);
var inst_51934__$1 = cljs.core.async.chan.call(null,(1));
var inst_51935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51936 = [inst_51929,inst_51934__$1];
var inst_51937 = (new cljs.core.PersistentVector(null,2,(5),inst_51935,inst_51936,null));
var state_51948__$1 = (function (){var statearr_51955 = state_51948;
(statearr_51955[(8)] = inst_51934__$1);

return statearr_51955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51948__$1,(8),jobs,inst_51937);
} else {
if((state_val_51949 === (7))){
var inst_51944 = (state_51948[(2)]);
var state_51948__$1 = state_51948;
var statearr_51956_52068 = state_51948__$1;
(statearr_51956_52068[(2)] = inst_51944);

(statearr_51956_52068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51949 === (8))){
var inst_51934 = (state_51948[(8)]);
var inst_51939 = (state_51948[(2)]);
var state_51948__$1 = (function (){var statearr_51957 = state_51948;
(statearr_51957[(9)] = inst_51939);

return statearr_51957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51948__$1,(9),results,inst_51934);
} else {
if((state_val_51949 === (9))){
var inst_51941 = (state_51948[(2)]);
var state_51948__$1 = (function (){var statearr_51958 = state_51948;
(statearr_51958[(10)] = inst_51941);

return statearr_51958;
})();
var statearr_51959_52069 = state_51948__$1;
(statearr_51959_52069[(2)] = null);

(statearr_51959_52069[(1)] = (2));


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
});})(c__37681__auto___52063,jobs,results,process,async))
;
return ((function (switch__37569__auto__,c__37681__auto___52063,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0 = (function (){
var statearr_51963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_51963[(1)] = (1));

return statearr_51963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_51948){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_51948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e51964){if((e51964 instanceof Object)){
var ex__37573__auto__ = e51964;
var statearr_51965_52070 = state_51948;
(statearr_51965_52070[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52071 = state_51948;
state_51948 = G__52071;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_51948){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_51948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___52063,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_51966 = f__37682__auto__.call(null);
(statearr_51966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52063);

return statearr_51966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___52063,jobs,results,process,async))
);


var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,jobs,results,process,async){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,jobs,results,process,async){
return (function (state_52004){
var state_val_52005 = (state_52004[(1)]);
if((state_val_52005 === (7))){
var inst_52000 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
var statearr_52006_52072 = state_52004__$1;
(statearr_52006_52072[(2)] = inst_52000);

(statearr_52006_52072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (20))){
var state_52004__$1 = state_52004;
var statearr_52007_52073 = state_52004__$1;
(statearr_52007_52073[(2)] = null);

(statearr_52007_52073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (1))){
var state_52004__$1 = state_52004;
var statearr_52008_52074 = state_52004__$1;
(statearr_52008_52074[(2)] = null);

(statearr_52008_52074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (4))){
var inst_51969 = (state_52004[(7)]);
var inst_51969__$1 = (state_52004[(2)]);
var inst_51970 = (inst_51969__$1 == null);
var state_52004__$1 = (function (){var statearr_52009 = state_52004;
(statearr_52009[(7)] = inst_51969__$1);

return statearr_52009;
})();
if(cljs.core.truth_(inst_51970)){
var statearr_52010_52075 = state_52004__$1;
(statearr_52010_52075[(1)] = (5));

} else {
var statearr_52011_52076 = state_52004__$1;
(statearr_52011_52076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (15))){
var inst_51982 = (state_52004[(8)]);
var state_52004__$1 = state_52004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52004__$1,(18),to,inst_51982);
} else {
if((state_val_52005 === (21))){
var inst_51995 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
var statearr_52012_52077 = state_52004__$1;
(statearr_52012_52077[(2)] = inst_51995);

(statearr_52012_52077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (13))){
var inst_51997 = (state_52004[(2)]);
var state_52004__$1 = (function (){var statearr_52013 = state_52004;
(statearr_52013[(9)] = inst_51997);

return statearr_52013;
})();
var statearr_52014_52078 = state_52004__$1;
(statearr_52014_52078[(2)] = null);

(statearr_52014_52078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (6))){
var inst_51969 = (state_52004[(7)]);
var state_52004__$1 = state_52004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52004__$1,(11),inst_51969);
} else {
if((state_val_52005 === (17))){
var inst_51990 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
if(cljs.core.truth_(inst_51990)){
var statearr_52015_52079 = state_52004__$1;
(statearr_52015_52079[(1)] = (19));

} else {
var statearr_52016_52080 = state_52004__$1;
(statearr_52016_52080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (3))){
var inst_52002 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52004__$1,inst_52002);
} else {
if((state_val_52005 === (12))){
var inst_51979 = (state_52004[(10)]);
var state_52004__$1 = state_52004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52004__$1,(14),inst_51979);
} else {
if((state_val_52005 === (2))){
var state_52004__$1 = state_52004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52004__$1,(4),results);
} else {
if((state_val_52005 === (19))){
var state_52004__$1 = state_52004;
var statearr_52017_52081 = state_52004__$1;
(statearr_52017_52081[(2)] = null);

(statearr_52017_52081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (11))){
var inst_51979 = (state_52004[(2)]);
var state_52004__$1 = (function (){var statearr_52018 = state_52004;
(statearr_52018[(10)] = inst_51979);

return statearr_52018;
})();
var statearr_52019_52082 = state_52004__$1;
(statearr_52019_52082[(2)] = null);

(statearr_52019_52082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (9))){
var state_52004__$1 = state_52004;
var statearr_52020_52083 = state_52004__$1;
(statearr_52020_52083[(2)] = null);

(statearr_52020_52083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (5))){
var state_52004__$1 = state_52004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52021_52084 = state_52004__$1;
(statearr_52021_52084[(1)] = (8));

} else {
var statearr_52022_52085 = state_52004__$1;
(statearr_52022_52085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (14))){
var inst_51982 = (state_52004[(8)]);
var inst_51984 = (state_52004[(11)]);
var inst_51982__$1 = (state_52004[(2)]);
var inst_51983 = (inst_51982__$1 == null);
var inst_51984__$1 = cljs.core.not.call(null,inst_51983);
var state_52004__$1 = (function (){var statearr_52023 = state_52004;
(statearr_52023[(8)] = inst_51982__$1);

(statearr_52023[(11)] = inst_51984__$1);

return statearr_52023;
})();
if(inst_51984__$1){
var statearr_52024_52086 = state_52004__$1;
(statearr_52024_52086[(1)] = (15));

} else {
var statearr_52025_52087 = state_52004__$1;
(statearr_52025_52087[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (16))){
var inst_51984 = (state_52004[(11)]);
var state_52004__$1 = state_52004;
var statearr_52026_52088 = state_52004__$1;
(statearr_52026_52088[(2)] = inst_51984);

(statearr_52026_52088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (10))){
var inst_51976 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
var statearr_52027_52089 = state_52004__$1;
(statearr_52027_52089[(2)] = inst_51976);

(statearr_52027_52089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (18))){
var inst_51987 = (state_52004[(2)]);
var state_52004__$1 = state_52004;
var statearr_52028_52090 = state_52004__$1;
(statearr_52028_52090[(2)] = inst_51987);

(statearr_52028_52090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52005 === (8))){
var inst_51973 = cljs.core.async.close_BANG_.call(null,to);
var state_52004__$1 = state_52004;
var statearr_52029_52091 = state_52004__$1;
(statearr_52029_52091[(2)] = inst_51973);

(statearr_52029_52091[(1)] = (10));


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
var statearr_52033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__);

(statearr_52033[(1)] = (1));

return statearr_52033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1 = (function (state_52004){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_52004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e52034){if((e52034 instanceof Object)){
var ex__37573__auto__ = e52034;
var statearr_52035_52092 = state_52004;
(statearr_52035_52092[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52093 = state_52004;
state_52004 = G__52093;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__ = function(state_52004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1.call(this,state_52004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,jobs,results,process,async))
})();
var state__37683__auto__ = (function (){var statearr_52036 = f__37682__auto__.call(null);
(statearr_52036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_52036;
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
var args52094 = [];
var len__36572__auto___52097 = arguments.length;
var i__36573__auto___52098 = (0);
while(true){
if((i__36573__auto___52098 < len__36572__auto___52097)){
args52094.push((arguments[i__36573__auto___52098]));

var G__52099 = (i__36573__auto___52098 + (1));
i__36573__auto___52098 = G__52099;
continue;
} else {
}
break;
}

var G__52096 = args52094.length;
switch (G__52096) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52094.length)].join('')));

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
var args52101 = [];
var len__36572__auto___52104 = arguments.length;
var i__36573__auto___52105 = (0);
while(true){
if((i__36573__auto___52105 < len__36572__auto___52104)){
args52101.push((arguments[i__36573__auto___52105]));

var G__52106 = (i__36573__auto___52105 + (1));
i__36573__auto___52105 = G__52106;
continue;
} else {
}
break;
}

var G__52103 = args52101.length;
switch (G__52103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52101.length)].join('')));

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
var args52108 = [];
var len__36572__auto___52161 = arguments.length;
var i__36573__auto___52162 = (0);
while(true){
if((i__36573__auto___52162 < len__36572__auto___52161)){
args52108.push((arguments[i__36573__auto___52162]));

var G__52163 = (i__36573__auto___52162 + (1));
i__36573__auto___52162 = G__52163;
continue;
} else {
}
break;
}

var G__52110 = args52108.length;
switch (G__52110) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52108.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37681__auto___52165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___52165,tc,fc){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___52165,tc,fc){
return (function (state_52136){
var state_val_52137 = (state_52136[(1)]);
if((state_val_52137 === (7))){
var inst_52132 = (state_52136[(2)]);
var state_52136__$1 = state_52136;
var statearr_52138_52166 = state_52136__$1;
(statearr_52138_52166[(2)] = inst_52132);

(statearr_52138_52166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (1))){
var state_52136__$1 = state_52136;
var statearr_52139_52167 = state_52136__$1;
(statearr_52139_52167[(2)] = null);

(statearr_52139_52167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (4))){
var inst_52113 = (state_52136[(7)]);
var inst_52113__$1 = (state_52136[(2)]);
var inst_52114 = (inst_52113__$1 == null);
var state_52136__$1 = (function (){var statearr_52140 = state_52136;
(statearr_52140[(7)] = inst_52113__$1);

return statearr_52140;
})();
if(cljs.core.truth_(inst_52114)){
var statearr_52141_52168 = state_52136__$1;
(statearr_52141_52168[(1)] = (5));

} else {
var statearr_52142_52169 = state_52136__$1;
(statearr_52142_52169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (13))){
var state_52136__$1 = state_52136;
var statearr_52143_52170 = state_52136__$1;
(statearr_52143_52170[(2)] = null);

(statearr_52143_52170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (6))){
var inst_52113 = (state_52136[(7)]);
var inst_52119 = p.call(null,inst_52113);
var state_52136__$1 = state_52136;
if(cljs.core.truth_(inst_52119)){
var statearr_52144_52171 = state_52136__$1;
(statearr_52144_52171[(1)] = (9));

} else {
var statearr_52145_52172 = state_52136__$1;
(statearr_52145_52172[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (3))){
var inst_52134 = (state_52136[(2)]);
var state_52136__$1 = state_52136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52136__$1,inst_52134);
} else {
if((state_val_52137 === (12))){
var state_52136__$1 = state_52136;
var statearr_52146_52173 = state_52136__$1;
(statearr_52146_52173[(2)] = null);

(statearr_52146_52173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (2))){
var state_52136__$1 = state_52136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52136__$1,(4),ch);
} else {
if((state_val_52137 === (11))){
var inst_52113 = (state_52136[(7)]);
var inst_52123 = (state_52136[(2)]);
var state_52136__$1 = state_52136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52136__$1,(8),inst_52123,inst_52113);
} else {
if((state_val_52137 === (9))){
var state_52136__$1 = state_52136;
var statearr_52147_52174 = state_52136__$1;
(statearr_52147_52174[(2)] = tc);

(statearr_52147_52174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (5))){
var inst_52116 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52117 = cljs.core.async.close_BANG_.call(null,fc);
var state_52136__$1 = (function (){var statearr_52148 = state_52136;
(statearr_52148[(8)] = inst_52116);

return statearr_52148;
})();
var statearr_52149_52175 = state_52136__$1;
(statearr_52149_52175[(2)] = inst_52117);

(statearr_52149_52175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (14))){
var inst_52130 = (state_52136[(2)]);
var state_52136__$1 = state_52136;
var statearr_52150_52176 = state_52136__$1;
(statearr_52150_52176[(2)] = inst_52130);

(statearr_52150_52176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (10))){
var state_52136__$1 = state_52136;
var statearr_52151_52177 = state_52136__$1;
(statearr_52151_52177[(2)] = fc);

(statearr_52151_52177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52137 === (8))){
var inst_52125 = (state_52136[(2)]);
var state_52136__$1 = state_52136;
if(cljs.core.truth_(inst_52125)){
var statearr_52152_52178 = state_52136__$1;
(statearr_52152_52178[(1)] = (12));

} else {
var statearr_52153_52179 = state_52136__$1;
(statearr_52153_52179[(1)] = (13));

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
});})(c__37681__auto___52165,tc,fc))
;
return ((function (switch__37569__auto__,c__37681__auto___52165,tc,fc){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_52157 = [null,null,null,null,null,null,null,null,null];
(statearr_52157[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_52157[(1)] = (1));

return statearr_52157;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_52136){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_52136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e52158){if((e52158 instanceof Object)){
var ex__37573__auto__ = e52158;
var statearr_52159_52180 = state_52136;
(statearr_52159_52180[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52181 = state_52136;
state_52136 = G__52181;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_52136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_52136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___52165,tc,fc))
})();
var state__37683__auto__ = (function (){var statearr_52160 = f__37682__auto__.call(null);
(statearr_52160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52165);

return statearr_52160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___52165,tc,fc))
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
return (function (state_52245){
var state_val_52246 = (state_52245[(1)]);
if((state_val_52246 === (7))){
var inst_52241 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52247_52268 = state_52245__$1;
(statearr_52247_52268[(2)] = inst_52241);

(statearr_52247_52268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (1))){
var inst_52225 = init;
var state_52245__$1 = (function (){var statearr_52248 = state_52245;
(statearr_52248[(7)] = inst_52225);

return statearr_52248;
})();
var statearr_52249_52269 = state_52245__$1;
(statearr_52249_52269[(2)] = null);

(statearr_52249_52269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (4))){
var inst_52228 = (state_52245[(8)]);
var inst_52228__$1 = (state_52245[(2)]);
var inst_52229 = (inst_52228__$1 == null);
var state_52245__$1 = (function (){var statearr_52250 = state_52245;
(statearr_52250[(8)] = inst_52228__$1);

return statearr_52250;
})();
if(cljs.core.truth_(inst_52229)){
var statearr_52251_52270 = state_52245__$1;
(statearr_52251_52270[(1)] = (5));

} else {
var statearr_52252_52271 = state_52245__$1;
(statearr_52252_52271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (6))){
var inst_52232 = (state_52245[(9)]);
var inst_52228 = (state_52245[(8)]);
var inst_52225 = (state_52245[(7)]);
var inst_52232__$1 = f.call(null,inst_52225,inst_52228);
var inst_52233 = cljs.core.reduced_QMARK_.call(null,inst_52232__$1);
var state_52245__$1 = (function (){var statearr_52253 = state_52245;
(statearr_52253[(9)] = inst_52232__$1);

return statearr_52253;
})();
if(inst_52233){
var statearr_52254_52272 = state_52245__$1;
(statearr_52254_52272[(1)] = (8));

} else {
var statearr_52255_52273 = state_52245__$1;
(statearr_52255_52273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (3))){
var inst_52243 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52245__$1,inst_52243);
} else {
if((state_val_52246 === (2))){
var state_52245__$1 = state_52245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52245__$1,(4),ch);
} else {
if((state_val_52246 === (9))){
var inst_52232 = (state_52245[(9)]);
var inst_52225 = inst_52232;
var state_52245__$1 = (function (){var statearr_52256 = state_52245;
(statearr_52256[(7)] = inst_52225);

return statearr_52256;
})();
var statearr_52257_52274 = state_52245__$1;
(statearr_52257_52274[(2)] = null);

(statearr_52257_52274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (5))){
var inst_52225 = (state_52245[(7)]);
var state_52245__$1 = state_52245;
var statearr_52258_52275 = state_52245__$1;
(statearr_52258_52275[(2)] = inst_52225);

(statearr_52258_52275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (10))){
var inst_52239 = (state_52245[(2)]);
var state_52245__$1 = state_52245;
var statearr_52259_52276 = state_52245__$1;
(statearr_52259_52276[(2)] = inst_52239);

(statearr_52259_52276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52246 === (8))){
var inst_52232 = (state_52245[(9)]);
var inst_52235 = cljs.core.deref.call(null,inst_52232);
var state_52245__$1 = state_52245;
var statearr_52260_52277 = state_52245__$1;
(statearr_52260_52277[(2)] = inst_52235);

(statearr_52260_52277[(1)] = (10));


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
var statearr_52264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52264[(0)] = cljs$core$async$reduce_$_state_machine__37570__auto__);

(statearr_52264[(1)] = (1));

return statearr_52264;
});
var cljs$core$async$reduce_$_state_machine__37570__auto____1 = (function (state_52245){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_52245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e52265){if((e52265 instanceof Object)){
var ex__37573__auto__ = e52265;
var statearr_52266_52278 = state_52245;
(statearr_52266_52278[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52279 = state_52245;
state_52245 = G__52279;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37570__auto__ = function(state_52245){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37570__auto____1.call(this,state_52245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37570__auto____0;
cljs$core$async$reduce_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37570__auto____1;
return cljs$core$async$reduce_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_52267 = f__37682__auto__.call(null);
(statearr_52267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_52267;
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
var args52280 = [];
var len__36572__auto___52332 = arguments.length;
var i__36573__auto___52333 = (0);
while(true){
if((i__36573__auto___52333 < len__36572__auto___52332)){
args52280.push((arguments[i__36573__auto___52333]));

var G__52334 = (i__36573__auto___52333 + (1));
i__36573__auto___52333 = G__52334;
continue;
} else {
}
break;
}

var G__52282 = args52280.length;
switch (G__52282) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52280.length)].join('')));

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
return (function (state_52307){
var state_val_52308 = (state_52307[(1)]);
if((state_val_52308 === (7))){
var inst_52289 = (state_52307[(2)]);
var state_52307__$1 = state_52307;
var statearr_52309_52336 = state_52307__$1;
(statearr_52309_52336[(2)] = inst_52289);

(statearr_52309_52336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (1))){
var inst_52283 = cljs.core.seq.call(null,coll);
var inst_52284 = inst_52283;
var state_52307__$1 = (function (){var statearr_52310 = state_52307;
(statearr_52310[(7)] = inst_52284);

return statearr_52310;
})();
var statearr_52311_52337 = state_52307__$1;
(statearr_52311_52337[(2)] = null);

(statearr_52311_52337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (4))){
var inst_52284 = (state_52307[(7)]);
var inst_52287 = cljs.core.first.call(null,inst_52284);
var state_52307__$1 = state_52307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52307__$1,(7),ch,inst_52287);
} else {
if((state_val_52308 === (13))){
var inst_52301 = (state_52307[(2)]);
var state_52307__$1 = state_52307;
var statearr_52312_52338 = state_52307__$1;
(statearr_52312_52338[(2)] = inst_52301);

(statearr_52312_52338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (6))){
var inst_52292 = (state_52307[(2)]);
var state_52307__$1 = state_52307;
if(cljs.core.truth_(inst_52292)){
var statearr_52313_52339 = state_52307__$1;
(statearr_52313_52339[(1)] = (8));

} else {
var statearr_52314_52340 = state_52307__$1;
(statearr_52314_52340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (3))){
var inst_52305 = (state_52307[(2)]);
var state_52307__$1 = state_52307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52307__$1,inst_52305);
} else {
if((state_val_52308 === (12))){
var state_52307__$1 = state_52307;
var statearr_52315_52341 = state_52307__$1;
(statearr_52315_52341[(2)] = null);

(statearr_52315_52341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (2))){
var inst_52284 = (state_52307[(7)]);
var state_52307__$1 = state_52307;
if(cljs.core.truth_(inst_52284)){
var statearr_52316_52342 = state_52307__$1;
(statearr_52316_52342[(1)] = (4));

} else {
var statearr_52317_52343 = state_52307__$1;
(statearr_52317_52343[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (11))){
var inst_52298 = cljs.core.async.close_BANG_.call(null,ch);
var state_52307__$1 = state_52307;
var statearr_52318_52344 = state_52307__$1;
(statearr_52318_52344[(2)] = inst_52298);

(statearr_52318_52344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (9))){
var state_52307__$1 = state_52307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52319_52345 = state_52307__$1;
(statearr_52319_52345[(1)] = (11));

} else {
var statearr_52320_52346 = state_52307__$1;
(statearr_52320_52346[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (5))){
var inst_52284 = (state_52307[(7)]);
var state_52307__$1 = state_52307;
var statearr_52321_52347 = state_52307__$1;
(statearr_52321_52347[(2)] = inst_52284);

(statearr_52321_52347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (10))){
var inst_52303 = (state_52307[(2)]);
var state_52307__$1 = state_52307;
var statearr_52322_52348 = state_52307__$1;
(statearr_52322_52348[(2)] = inst_52303);

(statearr_52322_52348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52308 === (8))){
var inst_52284 = (state_52307[(7)]);
var inst_52294 = cljs.core.next.call(null,inst_52284);
var inst_52284__$1 = inst_52294;
var state_52307__$1 = (function (){var statearr_52323 = state_52307;
(statearr_52323[(7)] = inst_52284__$1);

return statearr_52323;
})();
var statearr_52324_52349 = state_52307__$1;
(statearr_52324_52349[(2)] = null);

(statearr_52324_52349[(1)] = (2));


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
var statearr_52328 = [null,null,null,null,null,null,null,null];
(statearr_52328[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_52328[(1)] = (1));

return statearr_52328;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_52307){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_52307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e52329){if((e52329 instanceof Object)){
var ex__37573__auto__ = e52329;
var statearr_52330_52350 = state_52307;
(statearr_52330_52350[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52351 = state_52307;
state_52307 = G__52351;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_52307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_52307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_52331 = f__37682__auto__.call(null);
(statearr_52331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_52331;
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
if(typeof cljs.core.async.t_cljs$core$async52573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52573 = (function (mult,ch,cs,meta52574){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta52574 = meta52574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52575,meta52574__$1){
var self__ = this;
var _52575__$1 = this;
return (new cljs.core.async.t_cljs$core$async52573(self__.mult,self__.ch,self__.cs,meta52574__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52575){
var self__ = this;
var _52575__$1 = this;
return self__.meta52574;
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52574","meta52574",2036483887,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52573";

cljs.core.async.t_cljs$core$async52573.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async52573");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async52573 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52573(mult__$1,ch__$1,cs__$1,meta52574){
return (new cljs.core.async.t_cljs$core$async52573(mult__$1,ch__$1,cs__$1,meta52574));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52573(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37681__auto___52794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___52794,cs,m,dchan,dctr,done){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___52794,cs,m,dchan,dctr,done){
return (function (state_52706){
var state_val_52707 = (state_52706[(1)]);
if((state_val_52707 === (7))){
var inst_52702 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52708_52795 = state_52706__$1;
(statearr_52708_52795[(2)] = inst_52702);

(statearr_52708_52795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (20))){
var inst_52607 = (state_52706[(7)]);
var inst_52617 = cljs.core.first.call(null,inst_52607);
var inst_52618 = cljs.core.nth.call(null,inst_52617,(0),null);
var inst_52619 = cljs.core.nth.call(null,inst_52617,(1),null);
var state_52706__$1 = (function (){var statearr_52709 = state_52706;
(statearr_52709[(8)] = inst_52618);

return statearr_52709;
})();
if(cljs.core.truth_(inst_52619)){
var statearr_52710_52796 = state_52706__$1;
(statearr_52710_52796[(1)] = (22));

} else {
var statearr_52711_52797 = state_52706__$1;
(statearr_52711_52797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (27))){
var inst_52654 = (state_52706[(9)]);
var inst_52647 = (state_52706[(10)]);
var inst_52578 = (state_52706[(11)]);
var inst_52649 = (state_52706[(12)]);
var inst_52654__$1 = cljs.core._nth.call(null,inst_52647,inst_52649);
var inst_52655 = cljs.core.async.put_BANG_.call(null,inst_52654__$1,inst_52578,done);
var state_52706__$1 = (function (){var statearr_52712 = state_52706;
(statearr_52712[(9)] = inst_52654__$1);

return statearr_52712;
})();
if(cljs.core.truth_(inst_52655)){
var statearr_52713_52798 = state_52706__$1;
(statearr_52713_52798[(1)] = (30));

} else {
var statearr_52714_52799 = state_52706__$1;
(statearr_52714_52799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (1))){
var state_52706__$1 = state_52706;
var statearr_52715_52800 = state_52706__$1;
(statearr_52715_52800[(2)] = null);

(statearr_52715_52800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (24))){
var inst_52607 = (state_52706[(7)]);
var inst_52624 = (state_52706[(2)]);
var inst_52625 = cljs.core.next.call(null,inst_52607);
var inst_52587 = inst_52625;
var inst_52588 = null;
var inst_52589 = (0);
var inst_52590 = (0);
var state_52706__$1 = (function (){var statearr_52716 = state_52706;
(statearr_52716[(13)] = inst_52624);

(statearr_52716[(14)] = inst_52589);

(statearr_52716[(15)] = inst_52590);

(statearr_52716[(16)] = inst_52587);

(statearr_52716[(17)] = inst_52588);

return statearr_52716;
})();
var statearr_52717_52801 = state_52706__$1;
(statearr_52717_52801[(2)] = null);

(statearr_52717_52801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (39))){
var state_52706__$1 = state_52706;
var statearr_52721_52802 = state_52706__$1;
(statearr_52721_52802[(2)] = null);

(statearr_52721_52802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (4))){
var inst_52578 = (state_52706[(11)]);
var inst_52578__$1 = (state_52706[(2)]);
var inst_52579 = (inst_52578__$1 == null);
var state_52706__$1 = (function (){var statearr_52722 = state_52706;
(statearr_52722[(11)] = inst_52578__$1);

return statearr_52722;
})();
if(cljs.core.truth_(inst_52579)){
var statearr_52723_52803 = state_52706__$1;
(statearr_52723_52803[(1)] = (5));

} else {
var statearr_52724_52804 = state_52706__$1;
(statearr_52724_52804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (15))){
var inst_52589 = (state_52706[(14)]);
var inst_52590 = (state_52706[(15)]);
var inst_52587 = (state_52706[(16)]);
var inst_52588 = (state_52706[(17)]);
var inst_52603 = (state_52706[(2)]);
var inst_52604 = (inst_52590 + (1));
var tmp52718 = inst_52589;
var tmp52719 = inst_52587;
var tmp52720 = inst_52588;
var inst_52587__$1 = tmp52719;
var inst_52588__$1 = tmp52720;
var inst_52589__$1 = tmp52718;
var inst_52590__$1 = inst_52604;
var state_52706__$1 = (function (){var statearr_52725 = state_52706;
(statearr_52725[(18)] = inst_52603);

(statearr_52725[(14)] = inst_52589__$1);

(statearr_52725[(15)] = inst_52590__$1);

(statearr_52725[(16)] = inst_52587__$1);

(statearr_52725[(17)] = inst_52588__$1);

return statearr_52725;
})();
var statearr_52726_52805 = state_52706__$1;
(statearr_52726_52805[(2)] = null);

(statearr_52726_52805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (21))){
var inst_52628 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52730_52806 = state_52706__$1;
(statearr_52730_52806[(2)] = inst_52628);

(statearr_52730_52806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (31))){
var inst_52654 = (state_52706[(9)]);
var inst_52658 = done.call(null,null);
var inst_52659 = cljs.core.async.untap_STAR_.call(null,m,inst_52654);
var state_52706__$1 = (function (){var statearr_52731 = state_52706;
(statearr_52731[(19)] = inst_52658);

return statearr_52731;
})();
var statearr_52732_52807 = state_52706__$1;
(statearr_52732_52807[(2)] = inst_52659);

(statearr_52732_52807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (32))){
var inst_52648 = (state_52706[(20)]);
var inst_52647 = (state_52706[(10)]);
var inst_52646 = (state_52706[(21)]);
var inst_52649 = (state_52706[(12)]);
var inst_52661 = (state_52706[(2)]);
var inst_52662 = (inst_52649 + (1));
var tmp52727 = inst_52648;
var tmp52728 = inst_52647;
var tmp52729 = inst_52646;
var inst_52646__$1 = tmp52729;
var inst_52647__$1 = tmp52728;
var inst_52648__$1 = tmp52727;
var inst_52649__$1 = inst_52662;
var state_52706__$1 = (function (){var statearr_52733 = state_52706;
(statearr_52733[(20)] = inst_52648__$1);

(statearr_52733[(22)] = inst_52661);

(statearr_52733[(10)] = inst_52647__$1);

(statearr_52733[(21)] = inst_52646__$1);

(statearr_52733[(12)] = inst_52649__$1);

return statearr_52733;
})();
var statearr_52734_52808 = state_52706__$1;
(statearr_52734_52808[(2)] = null);

(statearr_52734_52808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (40))){
var inst_52674 = (state_52706[(23)]);
var inst_52678 = done.call(null,null);
var inst_52679 = cljs.core.async.untap_STAR_.call(null,m,inst_52674);
var state_52706__$1 = (function (){var statearr_52735 = state_52706;
(statearr_52735[(24)] = inst_52678);

return statearr_52735;
})();
var statearr_52736_52809 = state_52706__$1;
(statearr_52736_52809[(2)] = inst_52679);

(statearr_52736_52809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (33))){
var inst_52665 = (state_52706[(25)]);
var inst_52667 = cljs.core.chunked_seq_QMARK_.call(null,inst_52665);
var state_52706__$1 = state_52706;
if(inst_52667){
var statearr_52737_52810 = state_52706__$1;
(statearr_52737_52810[(1)] = (36));

} else {
var statearr_52738_52811 = state_52706__$1;
(statearr_52738_52811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (13))){
var inst_52597 = (state_52706[(26)]);
var inst_52600 = cljs.core.async.close_BANG_.call(null,inst_52597);
var state_52706__$1 = state_52706;
var statearr_52739_52812 = state_52706__$1;
(statearr_52739_52812[(2)] = inst_52600);

(statearr_52739_52812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (22))){
var inst_52618 = (state_52706[(8)]);
var inst_52621 = cljs.core.async.close_BANG_.call(null,inst_52618);
var state_52706__$1 = state_52706;
var statearr_52740_52813 = state_52706__$1;
(statearr_52740_52813[(2)] = inst_52621);

(statearr_52740_52813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (36))){
var inst_52665 = (state_52706[(25)]);
var inst_52669 = cljs.core.chunk_first.call(null,inst_52665);
var inst_52670 = cljs.core.chunk_rest.call(null,inst_52665);
var inst_52671 = cljs.core.count.call(null,inst_52669);
var inst_52646 = inst_52670;
var inst_52647 = inst_52669;
var inst_52648 = inst_52671;
var inst_52649 = (0);
var state_52706__$1 = (function (){var statearr_52741 = state_52706;
(statearr_52741[(20)] = inst_52648);

(statearr_52741[(10)] = inst_52647);

(statearr_52741[(21)] = inst_52646);

(statearr_52741[(12)] = inst_52649);

return statearr_52741;
})();
var statearr_52742_52814 = state_52706__$1;
(statearr_52742_52814[(2)] = null);

(statearr_52742_52814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (41))){
var inst_52665 = (state_52706[(25)]);
var inst_52681 = (state_52706[(2)]);
var inst_52682 = cljs.core.next.call(null,inst_52665);
var inst_52646 = inst_52682;
var inst_52647 = null;
var inst_52648 = (0);
var inst_52649 = (0);
var state_52706__$1 = (function (){var statearr_52743 = state_52706;
(statearr_52743[(20)] = inst_52648);

(statearr_52743[(10)] = inst_52647);

(statearr_52743[(27)] = inst_52681);

(statearr_52743[(21)] = inst_52646);

(statearr_52743[(12)] = inst_52649);

return statearr_52743;
})();
var statearr_52744_52815 = state_52706__$1;
(statearr_52744_52815[(2)] = null);

(statearr_52744_52815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (43))){
var state_52706__$1 = state_52706;
var statearr_52745_52816 = state_52706__$1;
(statearr_52745_52816[(2)] = null);

(statearr_52745_52816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (29))){
var inst_52690 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52746_52817 = state_52706__$1;
(statearr_52746_52817[(2)] = inst_52690);

(statearr_52746_52817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (44))){
var inst_52699 = (state_52706[(2)]);
var state_52706__$1 = (function (){var statearr_52747 = state_52706;
(statearr_52747[(28)] = inst_52699);

return statearr_52747;
})();
var statearr_52748_52818 = state_52706__$1;
(statearr_52748_52818[(2)] = null);

(statearr_52748_52818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (6))){
var inst_52638 = (state_52706[(29)]);
var inst_52637 = cljs.core.deref.call(null,cs);
var inst_52638__$1 = cljs.core.keys.call(null,inst_52637);
var inst_52639 = cljs.core.count.call(null,inst_52638__$1);
var inst_52640 = cljs.core.reset_BANG_.call(null,dctr,inst_52639);
var inst_52645 = cljs.core.seq.call(null,inst_52638__$1);
var inst_52646 = inst_52645;
var inst_52647 = null;
var inst_52648 = (0);
var inst_52649 = (0);
var state_52706__$1 = (function (){var statearr_52749 = state_52706;
(statearr_52749[(20)] = inst_52648);

(statearr_52749[(10)] = inst_52647);

(statearr_52749[(30)] = inst_52640);

(statearr_52749[(21)] = inst_52646);

(statearr_52749[(12)] = inst_52649);

(statearr_52749[(29)] = inst_52638__$1);

return statearr_52749;
})();
var statearr_52750_52819 = state_52706__$1;
(statearr_52750_52819[(2)] = null);

(statearr_52750_52819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (28))){
var inst_52665 = (state_52706[(25)]);
var inst_52646 = (state_52706[(21)]);
var inst_52665__$1 = cljs.core.seq.call(null,inst_52646);
var state_52706__$1 = (function (){var statearr_52751 = state_52706;
(statearr_52751[(25)] = inst_52665__$1);

return statearr_52751;
})();
if(inst_52665__$1){
var statearr_52752_52820 = state_52706__$1;
(statearr_52752_52820[(1)] = (33));

} else {
var statearr_52753_52821 = state_52706__$1;
(statearr_52753_52821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (25))){
var inst_52648 = (state_52706[(20)]);
var inst_52649 = (state_52706[(12)]);
var inst_52651 = (inst_52649 < inst_52648);
var inst_52652 = inst_52651;
var state_52706__$1 = state_52706;
if(cljs.core.truth_(inst_52652)){
var statearr_52754_52822 = state_52706__$1;
(statearr_52754_52822[(1)] = (27));

} else {
var statearr_52755_52823 = state_52706__$1;
(statearr_52755_52823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (34))){
var state_52706__$1 = state_52706;
var statearr_52756_52824 = state_52706__$1;
(statearr_52756_52824[(2)] = null);

(statearr_52756_52824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (17))){
var state_52706__$1 = state_52706;
var statearr_52757_52825 = state_52706__$1;
(statearr_52757_52825[(2)] = null);

(statearr_52757_52825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (3))){
var inst_52704 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52706__$1,inst_52704);
} else {
if((state_val_52707 === (12))){
var inst_52633 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52758_52826 = state_52706__$1;
(statearr_52758_52826[(2)] = inst_52633);

(statearr_52758_52826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (2))){
var state_52706__$1 = state_52706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52706__$1,(4),ch);
} else {
if((state_val_52707 === (23))){
var state_52706__$1 = state_52706;
var statearr_52759_52827 = state_52706__$1;
(statearr_52759_52827[(2)] = null);

(statearr_52759_52827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (35))){
var inst_52688 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52760_52828 = state_52706__$1;
(statearr_52760_52828[(2)] = inst_52688);

(statearr_52760_52828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (19))){
var inst_52607 = (state_52706[(7)]);
var inst_52611 = cljs.core.chunk_first.call(null,inst_52607);
var inst_52612 = cljs.core.chunk_rest.call(null,inst_52607);
var inst_52613 = cljs.core.count.call(null,inst_52611);
var inst_52587 = inst_52612;
var inst_52588 = inst_52611;
var inst_52589 = inst_52613;
var inst_52590 = (0);
var state_52706__$1 = (function (){var statearr_52761 = state_52706;
(statearr_52761[(14)] = inst_52589);

(statearr_52761[(15)] = inst_52590);

(statearr_52761[(16)] = inst_52587);

(statearr_52761[(17)] = inst_52588);

return statearr_52761;
})();
var statearr_52762_52829 = state_52706__$1;
(statearr_52762_52829[(2)] = null);

(statearr_52762_52829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (11))){
var inst_52607 = (state_52706[(7)]);
var inst_52587 = (state_52706[(16)]);
var inst_52607__$1 = cljs.core.seq.call(null,inst_52587);
var state_52706__$1 = (function (){var statearr_52763 = state_52706;
(statearr_52763[(7)] = inst_52607__$1);

return statearr_52763;
})();
if(inst_52607__$1){
var statearr_52764_52830 = state_52706__$1;
(statearr_52764_52830[(1)] = (16));

} else {
var statearr_52765_52831 = state_52706__$1;
(statearr_52765_52831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (9))){
var inst_52635 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52766_52832 = state_52706__$1;
(statearr_52766_52832[(2)] = inst_52635);

(statearr_52766_52832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (5))){
var inst_52585 = cljs.core.deref.call(null,cs);
var inst_52586 = cljs.core.seq.call(null,inst_52585);
var inst_52587 = inst_52586;
var inst_52588 = null;
var inst_52589 = (0);
var inst_52590 = (0);
var state_52706__$1 = (function (){var statearr_52767 = state_52706;
(statearr_52767[(14)] = inst_52589);

(statearr_52767[(15)] = inst_52590);

(statearr_52767[(16)] = inst_52587);

(statearr_52767[(17)] = inst_52588);

return statearr_52767;
})();
var statearr_52768_52833 = state_52706__$1;
(statearr_52768_52833[(2)] = null);

(statearr_52768_52833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (14))){
var state_52706__$1 = state_52706;
var statearr_52769_52834 = state_52706__$1;
(statearr_52769_52834[(2)] = null);

(statearr_52769_52834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (45))){
var inst_52696 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52770_52835 = state_52706__$1;
(statearr_52770_52835[(2)] = inst_52696);

(statearr_52770_52835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (26))){
var inst_52638 = (state_52706[(29)]);
var inst_52692 = (state_52706[(2)]);
var inst_52693 = cljs.core.seq.call(null,inst_52638);
var state_52706__$1 = (function (){var statearr_52771 = state_52706;
(statearr_52771[(31)] = inst_52692);

return statearr_52771;
})();
if(inst_52693){
var statearr_52772_52836 = state_52706__$1;
(statearr_52772_52836[(1)] = (42));

} else {
var statearr_52773_52837 = state_52706__$1;
(statearr_52773_52837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (16))){
var inst_52607 = (state_52706[(7)]);
var inst_52609 = cljs.core.chunked_seq_QMARK_.call(null,inst_52607);
var state_52706__$1 = state_52706;
if(inst_52609){
var statearr_52774_52838 = state_52706__$1;
(statearr_52774_52838[(1)] = (19));

} else {
var statearr_52775_52839 = state_52706__$1;
(statearr_52775_52839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (38))){
var inst_52685 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52776_52840 = state_52706__$1;
(statearr_52776_52840[(2)] = inst_52685);

(statearr_52776_52840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (30))){
var state_52706__$1 = state_52706;
var statearr_52777_52841 = state_52706__$1;
(statearr_52777_52841[(2)] = null);

(statearr_52777_52841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (10))){
var inst_52590 = (state_52706[(15)]);
var inst_52588 = (state_52706[(17)]);
var inst_52596 = cljs.core._nth.call(null,inst_52588,inst_52590);
var inst_52597 = cljs.core.nth.call(null,inst_52596,(0),null);
var inst_52598 = cljs.core.nth.call(null,inst_52596,(1),null);
var state_52706__$1 = (function (){var statearr_52778 = state_52706;
(statearr_52778[(26)] = inst_52597);

return statearr_52778;
})();
if(cljs.core.truth_(inst_52598)){
var statearr_52779_52842 = state_52706__$1;
(statearr_52779_52842[(1)] = (13));

} else {
var statearr_52780_52843 = state_52706__$1;
(statearr_52780_52843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (18))){
var inst_52631 = (state_52706[(2)]);
var state_52706__$1 = state_52706;
var statearr_52781_52844 = state_52706__$1;
(statearr_52781_52844[(2)] = inst_52631);

(statearr_52781_52844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (42))){
var state_52706__$1 = state_52706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52706__$1,(45),dchan);
} else {
if((state_val_52707 === (37))){
var inst_52665 = (state_52706[(25)]);
var inst_52674 = (state_52706[(23)]);
var inst_52578 = (state_52706[(11)]);
var inst_52674__$1 = cljs.core.first.call(null,inst_52665);
var inst_52675 = cljs.core.async.put_BANG_.call(null,inst_52674__$1,inst_52578,done);
var state_52706__$1 = (function (){var statearr_52782 = state_52706;
(statearr_52782[(23)] = inst_52674__$1);

return statearr_52782;
})();
if(cljs.core.truth_(inst_52675)){
var statearr_52783_52845 = state_52706__$1;
(statearr_52783_52845[(1)] = (39));

} else {
var statearr_52784_52846 = state_52706__$1;
(statearr_52784_52846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52707 === (8))){
var inst_52589 = (state_52706[(14)]);
var inst_52590 = (state_52706[(15)]);
var inst_52592 = (inst_52590 < inst_52589);
var inst_52593 = inst_52592;
var state_52706__$1 = state_52706;
if(cljs.core.truth_(inst_52593)){
var statearr_52785_52847 = state_52706__$1;
(statearr_52785_52847[(1)] = (10));

} else {
var statearr_52786_52848 = state_52706__$1;
(statearr_52786_52848[(1)] = (11));

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
});})(c__37681__auto___52794,cs,m,dchan,dctr,done))
;
return ((function (switch__37569__auto__,c__37681__auto___52794,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37570__auto__ = null;
var cljs$core$async$mult_$_state_machine__37570__auto____0 = (function (){
var statearr_52790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52790[(0)] = cljs$core$async$mult_$_state_machine__37570__auto__);

(statearr_52790[(1)] = (1));

return statearr_52790;
});
var cljs$core$async$mult_$_state_machine__37570__auto____1 = (function (state_52706){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_52706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e52791){if((e52791 instanceof Object)){
var ex__37573__auto__ = e52791;
var statearr_52792_52849 = state_52706;
(statearr_52792_52849[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52850 = state_52706;
state_52706 = G__52850;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37570__auto__ = function(state_52706){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37570__auto____1.call(this,state_52706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37570__auto____0;
cljs$core$async$mult_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37570__auto____1;
return cljs$core$async$mult_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___52794,cs,m,dchan,dctr,done))
})();
var state__37683__auto__ = (function (){var statearr_52793 = f__37682__auto__.call(null);
(statearr_52793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___52794);

return statearr_52793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___52794,cs,m,dchan,dctr,done))
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
var args52851 = [];
var len__36572__auto___52854 = arguments.length;
var i__36573__auto___52855 = (0);
while(true){
if((i__36573__auto___52855 < len__36572__auto___52854)){
args52851.push((arguments[i__36573__auto___52855]));

var G__52856 = (i__36573__auto___52855 + (1));
i__36573__auto___52855 = G__52856;
continue;
} else {
}
break;
}

var G__52853 = args52851.length;
switch (G__52853) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52851.length)].join('')));

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
var len__36572__auto___52868 = arguments.length;
var i__36573__auto___52869 = (0);
while(true){
if((i__36573__auto___52869 < len__36572__auto___52868)){
args__36579__auto__.push((arguments[i__36573__auto___52869]));

var G__52870 = (i__36573__auto___52869 + (1));
i__36573__auto___52869 = G__52870;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((3) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36580__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52862){
var map__52863 = p__52862;
var map__52863__$1 = ((((!((map__52863 == null)))?((((map__52863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52863):map__52863);
var opts = map__52863__$1;
var statearr_52865_52871 = state;
(statearr_52865_52871[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__52863,map__52863__$1,opts){
return (function (val){
var statearr_52866_52872 = state;
(statearr_52866_52872[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52863,map__52863__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_52867_52873 = state;
(statearr_52867_52873[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52858){
var G__52859 = cljs.core.first.call(null,seq52858);
var seq52858__$1 = cljs.core.next.call(null,seq52858);
var G__52860 = cljs.core.first.call(null,seq52858__$1);
var seq52858__$2 = cljs.core.next.call(null,seq52858__$1);
var G__52861 = cljs.core.first.call(null,seq52858__$2);
var seq52858__$3 = cljs.core.next.call(null,seq52858__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52859,G__52860,G__52861,seq52858__$3);
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
if(typeof cljs.core.async.t_cljs$core$async53037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53037 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53038){
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
this.meta53038 = meta53038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53039,meta53038__$1){
var self__ = this;
var _53039__$1 = this;
return (new cljs.core.async.t_cljs$core$async53037(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53038__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53039){
var self__ = this;
var _53039__$1 = this;
return self__.meta53038;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async53037.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta53038","meta53038",-808599226,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async53037.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53037";

cljs.core.async.t_cljs$core$async53037.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53037");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async53037 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async53037(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53038){
return (new cljs.core.async.t_cljs$core$async53037(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53038));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async53037(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37681__auto___53200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53137){
var state_val_53138 = (state_53137[(1)]);
if((state_val_53138 === (7))){
var inst_53055 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
var statearr_53139_53201 = state_53137__$1;
(statearr_53139_53201[(2)] = inst_53055);

(statearr_53139_53201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (20))){
var inst_53067 = (state_53137[(7)]);
var state_53137__$1 = state_53137;
var statearr_53140_53202 = state_53137__$1;
(statearr_53140_53202[(2)] = inst_53067);

(statearr_53140_53202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (27))){
var state_53137__$1 = state_53137;
var statearr_53141_53203 = state_53137__$1;
(statearr_53141_53203[(2)] = null);

(statearr_53141_53203[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (1))){
var inst_53043 = (state_53137[(8)]);
var inst_53043__$1 = calc_state.call(null);
var inst_53045 = (inst_53043__$1 == null);
var inst_53046 = cljs.core.not.call(null,inst_53045);
var state_53137__$1 = (function (){var statearr_53142 = state_53137;
(statearr_53142[(8)] = inst_53043__$1);

return statearr_53142;
})();
if(inst_53046){
var statearr_53143_53204 = state_53137__$1;
(statearr_53143_53204[(1)] = (2));

} else {
var statearr_53144_53205 = state_53137__$1;
(statearr_53144_53205[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (24))){
var inst_53090 = (state_53137[(9)]);
var inst_53111 = (state_53137[(10)]);
var inst_53097 = (state_53137[(11)]);
var inst_53111__$1 = inst_53090.call(null,inst_53097);
var state_53137__$1 = (function (){var statearr_53145 = state_53137;
(statearr_53145[(10)] = inst_53111__$1);

return statearr_53145;
})();
if(cljs.core.truth_(inst_53111__$1)){
var statearr_53146_53206 = state_53137__$1;
(statearr_53146_53206[(1)] = (29));

} else {
var statearr_53147_53207 = state_53137__$1;
(statearr_53147_53207[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (4))){
var inst_53058 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53058)){
var statearr_53148_53208 = state_53137__$1;
(statearr_53148_53208[(1)] = (8));

} else {
var statearr_53149_53209 = state_53137__$1;
(statearr_53149_53209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (15))){
var inst_53084 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53084)){
var statearr_53150_53210 = state_53137__$1;
(statearr_53150_53210[(1)] = (19));

} else {
var statearr_53151_53211 = state_53137__$1;
(statearr_53151_53211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (21))){
var inst_53089 = (state_53137[(12)]);
var inst_53089__$1 = (state_53137[(2)]);
var inst_53090 = cljs.core.get.call(null,inst_53089__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53091 = cljs.core.get.call(null,inst_53089__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53092 = cljs.core.get.call(null,inst_53089__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53137__$1 = (function (){var statearr_53152 = state_53137;
(statearr_53152[(12)] = inst_53089__$1);

(statearr_53152[(9)] = inst_53090);

(statearr_53152[(13)] = inst_53091);

return statearr_53152;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53137__$1,(22),inst_53092);
} else {
if((state_val_53138 === (31))){
var inst_53119 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53119)){
var statearr_53153_53212 = state_53137__$1;
(statearr_53153_53212[(1)] = (32));

} else {
var statearr_53154_53213 = state_53137__$1;
(statearr_53154_53213[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (32))){
var inst_53096 = (state_53137[(14)]);
var state_53137__$1 = state_53137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53137__$1,(35),out,inst_53096);
} else {
if((state_val_53138 === (33))){
var inst_53089 = (state_53137[(12)]);
var inst_53067 = inst_53089;
var state_53137__$1 = (function (){var statearr_53155 = state_53137;
(statearr_53155[(7)] = inst_53067);

return statearr_53155;
})();
var statearr_53156_53214 = state_53137__$1;
(statearr_53156_53214[(2)] = null);

(statearr_53156_53214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (13))){
var inst_53067 = (state_53137[(7)]);
var inst_53074 = inst_53067.cljs$lang$protocol_mask$partition0$;
var inst_53075 = (inst_53074 & (64));
var inst_53076 = inst_53067.cljs$core$ISeq$;
var inst_53077 = (inst_53075) || (inst_53076);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53077)){
var statearr_53157_53215 = state_53137__$1;
(statearr_53157_53215[(1)] = (16));

} else {
var statearr_53158_53216 = state_53137__$1;
(statearr_53158_53216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (22))){
var inst_53096 = (state_53137[(14)]);
var inst_53097 = (state_53137[(11)]);
var inst_53095 = (state_53137[(2)]);
var inst_53096__$1 = cljs.core.nth.call(null,inst_53095,(0),null);
var inst_53097__$1 = cljs.core.nth.call(null,inst_53095,(1),null);
var inst_53098 = (inst_53096__$1 == null);
var inst_53099 = cljs.core._EQ_.call(null,inst_53097__$1,change);
var inst_53100 = (inst_53098) || (inst_53099);
var state_53137__$1 = (function (){var statearr_53159 = state_53137;
(statearr_53159[(14)] = inst_53096__$1);

(statearr_53159[(11)] = inst_53097__$1);

return statearr_53159;
})();
if(cljs.core.truth_(inst_53100)){
var statearr_53160_53217 = state_53137__$1;
(statearr_53160_53217[(1)] = (23));

} else {
var statearr_53161_53218 = state_53137__$1;
(statearr_53161_53218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (36))){
var inst_53089 = (state_53137[(12)]);
var inst_53067 = inst_53089;
var state_53137__$1 = (function (){var statearr_53162 = state_53137;
(statearr_53162[(7)] = inst_53067);

return statearr_53162;
})();
var statearr_53163_53219 = state_53137__$1;
(statearr_53163_53219[(2)] = null);

(statearr_53163_53219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (29))){
var inst_53111 = (state_53137[(10)]);
var state_53137__$1 = state_53137;
var statearr_53164_53220 = state_53137__$1;
(statearr_53164_53220[(2)] = inst_53111);

(statearr_53164_53220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (6))){
var state_53137__$1 = state_53137;
var statearr_53165_53221 = state_53137__$1;
(statearr_53165_53221[(2)] = false);

(statearr_53165_53221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (28))){
var inst_53107 = (state_53137[(2)]);
var inst_53108 = calc_state.call(null);
var inst_53067 = inst_53108;
var state_53137__$1 = (function (){var statearr_53166 = state_53137;
(statearr_53166[(7)] = inst_53067);

(statearr_53166[(15)] = inst_53107);

return statearr_53166;
})();
var statearr_53167_53222 = state_53137__$1;
(statearr_53167_53222[(2)] = null);

(statearr_53167_53222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (25))){
var inst_53133 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
var statearr_53168_53223 = state_53137__$1;
(statearr_53168_53223[(2)] = inst_53133);

(statearr_53168_53223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (34))){
var inst_53131 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
var statearr_53169_53224 = state_53137__$1;
(statearr_53169_53224[(2)] = inst_53131);

(statearr_53169_53224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (17))){
var state_53137__$1 = state_53137;
var statearr_53170_53225 = state_53137__$1;
(statearr_53170_53225[(2)] = false);

(statearr_53170_53225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (3))){
var state_53137__$1 = state_53137;
var statearr_53171_53226 = state_53137__$1;
(statearr_53171_53226[(2)] = false);

(statearr_53171_53226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (12))){
var inst_53135 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53137__$1,inst_53135);
} else {
if((state_val_53138 === (2))){
var inst_53043 = (state_53137[(8)]);
var inst_53048 = inst_53043.cljs$lang$protocol_mask$partition0$;
var inst_53049 = (inst_53048 & (64));
var inst_53050 = inst_53043.cljs$core$ISeq$;
var inst_53051 = (inst_53049) || (inst_53050);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53051)){
var statearr_53172_53227 = state_53137__$1;
(statearr_53172_53227[(1)] = (5));

} else {
var statearr_53173_53228 = state_53137__$1;
(statearr_53173_53228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (23))){
var inst_53096 = (state_53137[(14)]);
var inst_53102 = (inst_53096 == null);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53102)){
var statearr_53174_53229 = state_53137__$1;
(statearr_53174_53229[(1)] = (26));

} else {
var statearr_53175_53230 = state_53137__$1;
(statearr_53175_53230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (35))){
var inst_53122 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
if(cljs.core.truth_(inst_53122)){
var statearr_53176_53231 = state_53137__$1;
(statearr_53176_53231[(1)] = (36));

} else {
var statearr_53177_53232 = state_53137__$1;
(statearr_53177_53232[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (19))){
var inst_53067 = (state_53137[(7)]);
var inst_53086 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53067);
var state_53137__$1 = state_53137;
var statearr_53178_53233 = state_53137__$1;
(statearr_53178_53233[(2)] = inst_53086);

(statearr_53178_53233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (11))){
var inst_53067 = (state_53137[(7)]);
var inst_53071 = (inst_53067 == null);
var inst_53072 = cljs.core.not.call(null,inst_53071);
var state_53137__$1 = state_53137;
if(inst_53072){
var statearr_53179_53234 = state_53137__$1;
(statearr_53179_53234[(1)] = (13));

} else {
var statearr_53180_53235 = state_53137__$1;
(statearr_53180_53235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (9))){
var inst_53043 = (state_53137[(8)]);
var state_53137__$1 = state_53137;
var statearr_53181_53236 = state_53137__$1;
(statearr_53181_53236[(2)] = inst_53043);

(statearr_53181_53236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (5))){
var state_53137__$1 = state_53137;
var statearr_53182_53237 = state_53137__$1;
(statearr_53182_53237[(2)] = true);

(statearr_53182_53237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (14))){
var state_53137__$1 = state_53137;
var statearr_53183_53238 = state_53137__$1;
(statearr_53183_53238[(2)] = false);

(statearr_53183_53238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (26))){
var inst_53097 = (state_53137[(11)]);
var inst_53104 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53097);
var state_53137__$1 = state_53137;
var statearr_53184_53239 = state_53137__$1;
(statearr_53184_53239[(2)] = inst_53104);

(statearr_53184_53239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (16))){
var state_53137__$1 = state_53137;
var statearr_53185_53240 = state_53137__$1;
(statearr_53185_53240[(2)] = true);

(statearr_53185_53240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (38))){
var inst_53127 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
var statearr_53186_53241 = state_53137__$1;
(statearr_53186_53241[(2)] = inst_53127);

(statearr_53186_53241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (30))){
var inst_53090 = (state_53137[(9)]);
var inst_53097 = (state_53137[(11)]);
var inst_53091 = (state_53137[(13)]);
var inst_53114 = cljs.core.empty_QMARK_.call(null,inst_53090);
var inst_53115 = inst_53091.call(null,inst_53097);
var inst_53116 = cljs.core.not.call(null,inst_53115);
var inst_53117 = (inst_53114) && (inst_53116);
var state_53137__$1 = state_53137;
var statearr_53187_53242 = state_53137__$1;
(statearr_53187_53242[(2)] = inst_53117);

(statearr_53187_53242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (10))){
var inst_53043 = (state_53137[(8)]);
var inst_53063 = (state_53137[(2)]);
var inst_53064 = cljs.core.get.call(null,inst_53063,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_53065 = cljs.core.get.call(null,inst_53063,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_53066 = cljs.core.get.call(null,inst_53063,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_53067 = inst_53043;
var state_53137__$1 = (function (){var statearr_53188 = state_53137;
(statearr_53188[(16)] = inst_53066);

(statearr_53188[(17)] = inst_53065);

(statearr_53188[(7)] = inst_53067);

(statearr_53188[(18)] = inst_53064);

return statearr_53188;
})();
var statearr_53189_53243 = state_53137__$1;
(statearr_53189_53243[(2)] = null);

(statearr_53189_53243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (18))){
var inst_53081 = (state_53137[(2)]);
var state_53137__$1 = state_53137;
var statearr_53190_53244 = state_53137__$1;
(statearr_53190_53244[(2)] = inst_53081);

(statearr_53190_53244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (37))){
var state_53137__$1 = state_53137;
var statearr_53191_53245 = state_53137__$1;
(statearr_53191_53245[(2)] = null);

(statearr_53191_53245[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53138 === (8))){
var inst_53043 = (state_53137[(8)]);
var inst_53060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53043);
var state_53137__$1 = state_53137;
var statearr_53192_53246 = state_53137__$1;
(statearr_53192_53246[(2)] = inst_53060);

(statearr_53192_53246[(1)] = (10));


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
});})(c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37569__auto__,c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37570__auto__ = null;
var cljs$core$async$mix_$_state_machine__37570__auto____0 = (function (){
var statearr_53196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53196[(0)] = cljs$core$async$mix_$_state_machine__37570__auto__);

(statearr_53196[(1)] = (1));

return statearr_53196;
});
var cljs$core$async$mix_$_state_machine__37570__auto____1 = (function (state_53137){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53197){if((e53197 instanceof Object)){
var ex__37573__auto__ = e53197;
var statearr_53198_53247 = state_53137;
(statearr_53198_53247[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53248 = state_53137;
state_53137 = G__53248;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37570__auto__ = function(state_53137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37570__auto____1.call(this,state_53137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37570__auto____0;
cljs$core$async$mix_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37570__auto____1;
return cljs$core$async$mix_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37683__auto__ = (function (){var statearr_53199 = f__37682__auto__.call(null);
(statearr_53199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53200);

return statearr_53199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53200,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args53249 = [];
var len__36572__auto___53252 = arguments.length;
var i__36573__auto___53253 = (0);
while(true){
if((i__36573__auto___53253 < len__36572__auto___53252)){
args53249.push((arguments[i__36573__auto___53253]));

var G__53254 = (i__36573__auto___53253 + (1));
i__36573__auto___53253 = G__53254;
continue;
} else {
}
break;
}

var G__53251 = args53249.length;
switch (G__53251) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53249.length)].join('')));

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
var args53257 = [];
var len__36572__auto___53382 = arguments.length;
var i__36573__auto___53383 = (0);
while(true){
if((i__36573__auto___53383 < len__36572__auto___53382)){
args53257.push((arguments[i__36573__auto___53383]));

var G__53384 = (i__36573__auto___53383 + (1));
i__36573__auto___53383 = G__53384;
continue;
} else {
}
break;
}

var G__53259 = args53257.length;
switch (G__53259) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53257.length)].join('')));

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
return (function (p1__53256_SHARP_){
if(cljs.core.truth_(p1__53256_SHARP_.call(null,topic))){
return p1__53256_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53256_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35514__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53260 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53261){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53261 = meta53261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53262,meta53261__$1){
var self__ = this;
var _53262__$1 = this;
return (new cljs.core.async.t_cljs$core$async53260(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53261__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53262){
var self__ = this;
var _53262__$1 = this;
return self__.meta53261;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53261","meta53261",-280748267,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53260";

cljs.core.async.t_cljs$core$async53260.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53260");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53260 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53261){
return (new cljs.core.async.t_cljs$core$async53260(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53261));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53260(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37681__auto___53386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53386,mults,ensure_mult,p){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53386,mults,ensure_mult,p){
return (function (state_53334){
var state_val_53335 = (state_53334[(1)]);
if((state_val_53335 === (7))){
var inst_53330 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53336_53387 = state_53334__$1;
(statearr_53336_53387[(2)] = inst_53330);

(statearr_53336_53387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (20))){
var state_53334__$1 = state_53334;
var statearr_53337_53388 = state_53334__$1;
(statearr_53337_53388[(2)] = null);

(statearr_53337_53388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (1))){
var state_53334__$1 = state_53334;
var statearr_53338_53389 = state_53334__$1;
(statearr_53338_53389[(2)] = null);

(statearr_53338_53389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (24))){
var inst_53313 = (state_53334[(7)]);
var inst_53322 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53313);
var state_53334__$1 = state_53334;
var statearr_53339_53390 = state_53334__$1;
(statearr_53339_53390[(2)] = inst_53322);

(statearr_53339_53390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (4))){
var inst_53265 = (state_53334[(8)]);
var inst_53265__$1 = (state_53334[(2)]);
var inst_53266 = (inst_53265__$1 == null);
var state_53334__$1 = (function (){var statearr_53340 = state_53334;
(statearr_53340[(8)] = inst_53265__$1);

return statearr_53340;
})();
if(cljs.core.truth_(inst_53266)){
var statearr_53341_53391 = state_53334__$1;
(statearr_53341_53391[(1)] = (5));

} else {
var statearr_53342_53392 = state_53334__$1;
(statearr_53342_53392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (15))){
var inst_53307 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53343_53393 = state_53334__$1;
(statearr_53343_53393[(2)] = inst_53307);

(statearr_53343_53393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (21))){
var inst_53327 = (state_53334[(2)]);
var state_53334__$1 = (function (){var statearr_53344 = state_53334;
(statearr_53344[(9)] = inst_53327);

return statearr_53344;
})();
var statearr_53345_53394 = state_53334__$1;
(statearr_53345_53394[(2)] = null);

(statearr_53345_53394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (13))){
var inst_53289 = (state_53334[(10)]);
var inst_53291 = cljs.core.chunked_seq_QMARK_.call(null,inst_53289);
var state_53334__$1 = state_53334;
if(inst_53291){
var statearr_53346_53395 = state_53334__$1;
(statearr_53346_53395[(1)] = (16));

} else {
var statearr_53347_53396 = state_53334__$1;
(statearr_53347_53396[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (22))){
var inst_53319 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53319)){
var statearr_53348_53397 = state_53334__$1;
(statearr_53348_53397[(1)] = (23));

} else {
var statearr_53349_53398 = state_53334__$1;
(statearr_53349_53398[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (6))){
var inst_53315 = (state_53334[(11)]);
var inst_53265 = (state_53334[(8)]);
var inst_53313 = (state_53334[(7)]);
var inst_53313__$1 = topic_fn.call(null,inst_53265);
var inst_53314 = cljs.core.deref.call(null,mults);
var inst_53315__$1 = cljs.core.get.call(null,inst_53314,inst_53313__$1);
var state_53334__$1 = (function (){var statearr_53350 = state_53334;
(statearr_53350[(11)] = inst_53315__$1);

(statearr_53350[(7)] = inst_53313__$1);

return statearr_53350;
})();
if(cljs.core.truth_(inst_53315__$1)){
var statearr_53351_53399 = state_53334__$1;
(statearr_53351_53399[(1)] = (19));

} else {
var statearr_53352_53400 = state_53334__$1;
(statearr_53352_53400[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (25))){
var inst_53324 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53353_53401 = state_53334__$1;
(statearr_53353_53401[(2)] = inst_53324);

(statearr_53353_53401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (17))){
var inst_53289 = (state_53334[(10)]);
var inst_53298 = cljs.core.first.call(null,inst_53289);
var inst_53299 = cljs.core.async.muxch_STAR_.call(null,inst_53298);
var inst_53300 = cljs.core.async.close_BANG_.call(null,inst_53299);
var inst_53301 = cljs.core.next.call(null,inst_53289);
var inst_53275 = inst_53301;
var inst_53276 = null;
var inst_53277 = (0);
var inst_53278 = (0);
var state_53334__$1 = (function (){var statearr_53354 = state_53334;
(statearr_53354[(12)] = inst_53277);

(statearr_53354[(13)] = inst_53300);

(statearr_53354[(14)] = inst_53278);

(statearr_53354[(15)] = inst_53275);

(statearr_53354[(16)] = inst_53276);

return statearr_53354;
})();
var statearr_53355_53402 = state_53334__$1;
(statearr_53355_53402[(2)] = null);

(statearr_53355_53402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (3))){
var inst_53332 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53334__$1,inst_53332);
} else {
if((state_val_53335 === (12))){
var inst_53309 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53356_53403 = state_53334__$1;
(statearr_53356_53403[(2)] = inst_53309);

(statearr_53356_53403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (2))){
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53334__$1,(4),ch);
} else {
if((state_val_53335 === (23))){
var state_53334__$1 = state_53334;
var statearr_53357_53404 = state_53334__$1;
(statearr_53357_53404[(2)] = null);

(statearr_53357_53404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (19))){
var inst_53315 = (state_53334[(11)]);
var inst_53265 = (state_53334[(8)]);
var inst_53317 = cljs.core.async.muxch_STAR_.call(null,inst_53315);
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53334__$1,(22),inst_53317,inst_53265);
} else {
if((state_val_53335 === (11))){
var inst_53289 = (state_53334[(10)]);
var inst_53275 = (state_53334[(15)]);
var inst_53289__$1 = cljs.core.seq.call(null,inst_53275);
var state_53334__$1 = (function (){var statearr_53358 = state_53334;
(statearr_53358[(10)] = inst_53289__$1);

return statearr_53358;
})();
if(inst_53289__$1){
var statearr_53359_53405 = state_53334__$1;
(statearr_53359_53405[(1)] = (13));

} else {
var statearr_53360_53406 = state_53334__$1;
(statearr_53360_53406[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (9))){
var inst_53311 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53361_53407 = state_53334__$1;
(statearr_53361_53407[(2)] = inst_53311);

(statearr_53361_53407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (5))){
var inst_53272 = cljs.core.deref.call(null,mults);
var inst_53273 = cljs.core.vals.call(null,inst_53272);
var inst_53274 = cljs.core.seq.call(null,inst_53273);
var inst_53275 = inst_53274;
var inst_53276 = null;
var inst_53277 = (0);
var inst_53278 = (0);
var state_53334__$1 = (function (){var statearr_53362 = state_53334;
(statearr_53362[(12)] = inst_53277);

(statearr_53362[(14)] = inst_53278);

(statearr_53362[(15)] = inst_53275);

(statearr_53362[(16)] = inst_53276);

return statearr_53362;
})();
var statearr_53363_53408 = state_53334__$1;
(statearr_53363_53408[(2)] = null);

(statearr_53363_53408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (14))){
var state_53334__$1 = state_53334;
var statearr_53367_53409 = state_53334__$1;
(statearr_53367_53409[(2)] = null);

(statearr_53367_53409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (16))){
var inst_53289 = (state_53334[(10)]);
var inst_53293 = cljs.core.chunk_first.call(null,inst_53289);
var inst_53294 = cljs.core.chunk_rest.call(null,inst_53289);
var inst_53295 = cljs.core.count.call(null,inst_53293);
var inst_53275 = inst_53294;
var inst_53276 = inst_53293;
var inst_53277 = inst_53295;
var inst_53278 = (0);
var state_53334__$1 = (function (){var statearr_53368 = state_53334;
(statearr_53368[(12)] = inst_53277);

(statearr_53368[(14)] = inst_53278);

(statearr_53368[(15)] = inst_53275);

(statearr_53368[(16)] = inst_53276);

return statearr_53368;
})();
var statearr_53369_53410 = state_53334__$1;
(statearr_53369_53410[(2)] = null);

(statearr_53369_53410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (10))){
var inst_53277 = (state_53334[(12)]);
var inst_53278 = (state_53334[(14)]);
var inst_53275 = (state_53334[(15)]);
var inst_53276 = (state_53334[(16)]);
var inst_53283 = cljs.core._nth.call(null,inst_53276,inst_53278);
var inst_53284 = cljs.core.async.muxch_STAR_.call(null,inst_53283);
var inst_53285 = cljs.core.async.close_BANG_.call(null,inst_53284);
var inst_53286 = (inst_53278 + (1));
var tmp53364 = inst_53277;
var tmp53365 = inst_53275;
var tmp53366 = inst_53276;
var inst_53275__$1 = tmp53365;
var inst_53276__$1 = tmp53366;
var inst_53277__$1 = tmp53364;
var inst_53278__$1 = inst_53286;
var state_53334__$1 = (function (){var statearr_53370 = state_53334;
(statearr_53370[(12)] = inst_53277__$1);

(statearr_53370[(17)] = inst_53285);

(statearr_53370[(14)] = inst_53278__$1);

(statearr_53370[(15)] = inst_53275__$1);

(statearr_53370[(16)] = inst_53276__$1);

return statearr_53370;
})();
var statearr_53371_53411 = state_53334__$1;
(statearr_53371_53411[(2)] = null);

(statearr_53371_53411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (18))){
var inst_53304 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53372_53412 = state_53334__$1;
(statearr_53372_53412[(2)] = inst_53304);

(statearr_53372_53412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (8))){
var inst_53277 = (state_53334[(12)]);
var inst_53278 = (state_53334[(14)]);
var inst_53280 = (inst_53278 < inst_53277);
var inst_53281 = inst_53280;
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53281)){
var statearr_53373_53413 = state_53334__$1;
(statearr_53373_53413[(1)] = (10));

} else {
var statearr_53374_53414 = state_53334__$1;
(statearr_53374_53414[(1)] = (11));

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
});})(c__37681__auto___53386,mults,ensure_mult,p))
;
return ((function (switch__37569__auto__,c__37681__auto___53386,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_53378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53378[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_53378[(1)] = (1));

return statearr_53378;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_53334){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53379){if((e53379 instanceof Object)){
var ex__37573__auto__ = e53379;
var statearr_53380_53415 = state_53334;
(statearr_53380_53415[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53416 = state_53334;
state_53334 = G__53416;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_53334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_53334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53386,mults,ensure_mult,p))
})();
var state__37683__auto__ = (function (){var statearr_53381 = f__37682__auto__.call(null);
(statearr_53381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53386);

return statearr_53381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53386,mults,ensure_mult,p))
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
var args53417 = [];
var len__36572__auto___53420 = arguments.length;
var i__36573__auto___53421 = (0);
while(true){
if((i__36573__auto___53421 < len__36572__auto___53420)){
args53417.push((arguments[i__36573__auto___53421]));

var G__53422 = (i__36573__auto___53421 + (1));
i__36573__auto___53421 = G__53422;
continue;
} else {
}
break;
}

var G__53419 = args53417.length;
switch (G__53419) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53417.length)].join('')));

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
var args53424 = [];
var len__36572__auto___53427 = arguments.length;
var i__36573__auto___53428 = (0);
while(true){
if((i__36573__auto___53428 < len__36572__auto___53427)){
args53424.push((arguments[i__36573__auto___53428]));

var G__53429 = (i__36573__auto___53428 + (1));
i__36573__auto___53428 = G__53429;
continue;
} else {
}
break;
}

var G__53426 = args53424.length;
switch (G__53426) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53424.length)].join('')));

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
var args53431 = [];
var len__36572__auto___53502 = arguments.length;
var i__36573__auto___53503 = (0);
while(true){
if((i__36573__auto___53503 < len__36572__auto___53502)){
args53431.push((arguments[i__36573__auto___53503]));

var G__53504 = (i__36573__auto___53503 + (1));
i__36573__auto___53503 = G__53504;
continue;
} else {
}
break;
}

var G__53433 = args53431.length;
switch (G__53433) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53431.length)].join('')));

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
var c__37681__auto___53506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53472){
var state_val_53473 = (state_53472[(1)]);
if((state_val_53473 === (7))){
var state_53472__$1 = state_53472;
var statearr_53474_53507 = state_53472__$1;
(statearr_53474_53507[(2)] = null);

(statearr_53474_53507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (1))){
var state_53472__$1 = state_53472;
var statearr_53475_53508 = state_53472__$1;
(statearr_53475_53508[(2)] = null);

(statearr_53475_53508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (4))){
var inst_53436 = (state_53472[(7)]);
var inst_53438 = (inst_53436 < cnt);
var state_53472__$1 = state_53472;
if(cljs.core.truth_(inst_53438)){
var statearr_53476_53509 = state_53472__$1;
(statearr_53476_53509[(1)] = (6));

} else {
var statearr_53477_53510 = state_53472__$1;
(statearr_53477_53510[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (15))){
var inst_53468 = (state_53472[(2)]);
var state_53472__$1 = state_53472;
var statearr_53478_53511 = state_53472__$1;
(statearr_53478_53511[(2)] = inst_53468);

(statearr_53478_53511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (13))){
var inst_53461 = cljs.core.async.close_BANG_.call(null,out);
var state_53472__$1 = state_53472;
var statearr_53479_53512 = state_53472__$1;
(statearr_53479_53512[(2)] = inst_53461);

(statearr_53479_53512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (6))){
var state_53472__$1 = state_53472;
var statearr_53480_53513 = state_53472__$1;
(statearr_53480_53513[(2)] = null);

(statearr_53480_53513[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (3))){
var inst_53470 = (state_53472[(2)]);
var state_53472__$1 = state_53472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53472__$1,inst_53470);
} else {
if((state_val_53473 === (12))){
var inst_53458 = (state_53472[(8)]);
var inst_53458__$1 = (state_53472[(2)]);
var inst_53459 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53458__$1);
var state_53472__$1 = (function (){var statearr_53481 = state_53472;
(statearr_53481[(8)] = inst_53458__$1);

return statearr_53481;
})();
if(cljs.core.truth_(inst_53459)){
var statearr_53482_53514 = state_53472__$1;
(statearr_53482_53514[(1)] = (13));

} else {
var statearr_53483_53515 = state_53472__$1;
(statearr_53483_53515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (2))){
var inst_53435 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53436 = (0);
var state_53472__$1 = (function (){var statearr_53484 = state_53472;
(statearr_53484[(7)] = inst_53436);

(statearr_53484[(9)] = inst_53435);

return statearr_53484;
})();
var statearr_53485_53516 = state_53472__$1;
(statearr_53485_53516[(2)] = null);

(statearr_53485_53516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (11))){
var inst_53436 = (state_53472[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53472,(10),Object,null,(9));
var inst_53445 = chs__$1.call(null,inst_53436);
var inst_53446 = done.call(null,inst_53436);
var inst_53447 = cljs.core.async.take_BANG_.call(null,inst_53445,inst_53446);
var state_53472__$1 = state_53472;
var statearr_53486_53517 = state_53472__$1;
(statearr_53486_53517[(2)] = inst_53447);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (9))){
var inst_53436 = (state_53472[(7)]);
var inst_53449 = (state_53472[(2)]);
var inst_53450 = (inst_53436 + (1));
var inst_53436__$1 = inst_53450;
var state_53472__$1 = (function (){var statearr_53487 = state_53472;
(statearr_53487[(7)] = inst_53436__$1);

(statearr_53487[(10)] = inst_53449);

return statearr_53487;
})();
var statearr_53488_53518 = state_53472__$1;
(statearr_53488_53518[(2)] = null);

(statearr_53488_53518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (5))){
var inst_53456 = (state_53472[(2)]);
var state_53472__$1 = (function (){var statearr_53489 = state_53472;
(statearr_53489[(11)] = inst_53456);

return statearr_53489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53472__$1,(12),dchan);
} else {
if((state_val_53473 === (14))){
var inst_53458 = (state_53472[(8)]);
var inst_53463 = cljs.core.apply.call(null,f,inst_53458);
var state_53472__$1 = state_53472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53472__$1,(16),out,inst_53463);
} else {
if((state_val_53473 === (16))){
var inst_53465 = (state_53472[(2)]);
var state_53472__$1 = (function (){var statearr_53490 = state_53472;
(statearr_53490[(12)] = inst_53465);

return statearr_53490;
})();
var statearr_53491_53519 = state_53472__$1;
(statearr_53491_53519[(2)] = null);

(statearr_53491_53519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (10))){
var inst_53440 = (state_53472[(2)]);
var inst_53441 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53472__$1 = (function (){var statearr_53492 = state_53472;
(statearr_53492[(13)] = inst_53440);

return statearr_53492;
})();
var statearr_53493_53520 = state_53472__$1;
(statearr_53493_53520[(2)] = inst_53441);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53472__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53473 === (8))){
var inst_53454 = (state_53472[(2)]);
var state_53472__$1 = state_53472;
var statearr_53494_53521 = state_53472__$1;
(statearr_53494_53521[(2)] = inst_53454);

(statearr_53494_53521[(1)] = (5));


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
});})(c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37569__auto__,c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_53498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53498[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_53498[(1)] = (1));

return statearr_53498;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_53472){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53499){if((e53499 instanceof Object)){
var ex__37573__auto__ = e53499;
var statearr_53500_53522 = state_53472;
(statearr_53500_53522[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53523 = state_53472;
state_53472 = G__53523;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_53472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_53472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37683__auto__ = (function (){var statearr_53501 = f__37682__auto__.call(null);
(statearr_53501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53506);

return statearr_53501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53506,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args53525 = [];
var len__36572__auto___53581 = arguments.length;
var i__36573__auto___53582 = (0);
while(true){
if((i__36573__auto___53582 < len__36572__auto___53581)){
args53525.push((arguments[i__36573__auto___53582]));

var G__53583 = (i__36573__auto___53582 + (1));
i__36573__auto___53582 = G__53583;
continue;
} else {
}
break;
}

var G__53527 = args53525.length;
switch (G__53527) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53525.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___53585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53585,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53585,out){
return (function (state_53557){
var state_val_53558 = (state_53557[(1)]);
if((state_val_53558 === (7))){
var inst_53537 = (state_53557[(7)]);
var inst_53536 = (state_53557[(8)]);
var inst_53536__$1 = (state_53557[(2)]);
var inst_53537__$1 = cljs.core.nth.call(null,inst_53536__$1,(0),null);
var inst_53538 = cljs.core.nth.call(null,inst_53536__$1,(1),null);
var inst_53539 = (inst_53537__$1 == null);
var state_53557__$1 = (function (){var statearr_53559 = state_53557;
(statearr_53559[(9)] = inst_53538);

(statearr_53559[(7)] = inst_53537__$1);

(statearr_53559[(8)] = inst_53536__$1);

return statearr_53559;
})();
if(cljs.core.truth_(inst_53539)){
var statearr_53560_53586 = state_53557__$1;
(statearr_53560_53586[(1)] = (8));

} else {
var statearr_53561_53587 = state_53557__$1;
(statearr_53561_53587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (1))){
var inst_53528 = cljs.core.vec.call(null,chs);
var inst_53529 = inst_53528;
var state_53557__$1 = (function (){var statearr_53562 = state_53557;
(statearr_53562[(10)] = inst_53529);

return statearr_53562;
})();
var statearr_53563_53588 = state_53557__$1;
(statearr_53563_53588[(2)] = null);

(statearr_53563_53588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (4))){
var inst_53529 = (state_53557[(10)]);
var state_53557__$1 = state_53557;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53557__$1,(7),inst_53529);
} else {
if((state_val_53558 === (6))){
var inst_53553 = (state_53557[(2)]);
var state_53557__$1 = state_53557;
var statearr_53564_53589 = state_53557__$1;
(statearr_53564_53589[(2)] = inst_53553);

(statearr_53564_53589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (3))){
var inst_53555 = (state_53557[(2)]);
var state_53557__$1 = state_53557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53557__$1,inst_53555);
} else {
if((state_val_53558 === (2))){
var inst_53529 = (state_53557[(10)]);
var inst_53531 = cljs.core.count.call(null,inst_53529);
var inst_53532 = (inst_53531 > (0));
var state_53557__$1 = state_53557;
if(cljs.core.truth_(inst_53532)){
var statearr_53566_53590 = state_53557__$1;
(statearr_53566_53590[(1)] = (4));

} else {
var statearr_53567_53591 = state_53557__$1;
(statearr_53567_53591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (11))){
var inst_53529 = (state_53557[(10)]);
var inst_53546 = (state_53557[(2)]);
var tmp53565 = inst_53529;
var inst_53529__$1 = tmp53565;
var state_53557__$1 = (function (){var statearr_53568 = state_53557;
(statearr_53568[(10)] = inst_53529__$1);

(statearr_53568[(11)] = inst_53546);

return statearr_53568;
})();
var statearr_53569_53592 = state_53557__$1;
(statearr_53569_53592[(2)] = null);

(statearr_53569_53592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (9))){
var inst_53537 = (state_53557[(7)]);
var state_53557__$1 = state_53557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53557__$1,(11),out,inst_53537);
} else {
if((state_val_53558 === (5))){
var inst_53551 = cljs.core.async.close_BANG_.call(null,out);
var state_53557__$1 = state_53557;
var statearr_53570_53593 = state_53557__$1;
(statearr_53570_53593[(2)] = inst_53551);

(statearr_53570_53593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (10))){
var inst_53549 = (state_53557[(2)]);
var state_53557__$1 = state_53557;
var statearr_53571_53594 = state_53557__$1;
(statearr_53571_53594[(2)] = inst_53549);

(statearr_53571_53594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53558 === (8))){
var inst_53538 = (state_53557[(9)]);
var inst_53537 = (state_53557[(7)]);
var inst_53529 = (state_53557[(10)]);
var inst_53536 = (state_53557[(8)]);
var inst_53541 = (function (){var cs = inst_53529;
var vec__53534 = inst_53536;
var v = inst_53537;
var c = inst_53538;
return ((function (cs,vec__53534,v,c,inst_53538,inst_53537,inst_53529,inst_53536,state_val_53558,c__37681__auto___53585,out){
return (function (p1__53524_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53524_SHARP_);
});
;})(cs,vec__53534,v,c,inst_53538,inst_53537,inst_53529,inst_53536,state_val_53558,c__37681__auto___53585,out))
})();
var inst_53542 = cljs.core.filterv.call(null,inst_53541,inst_53529);
var inst_53529__$1 = inst_53542;
var state_53557__$1 = (function (){var statearr_53572 = state_53557;
(statearr_53572[(10)] = inst_53529__$1);

return statearr_53572;
})();
var statearr_53573_53595 = state_53557__$1;
(statearr_53573_53595[(2)] = null);

(statearr_53573_53595[(1)] = (2));


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
});})(c__37681__auto___53585,out))
;
return ((function (switch__37569__auto__,c__37681__auto___53585,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_53577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53577[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_53577[(1)] = (1));

return statearr_53577;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_53557){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53578){if((e53578 instanceof Object)){
var ex__37573__auto__ = e53578;
var statearr_53579_53596 = state_53557;
(statearr_53579_53596[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53597 = state_53557;
state_53557 = G__53597;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_53557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_53557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53585,out))
})();
var state__37683__auto__ = (function (){var statearr_53580 = f__37682__auto__.call(null);
(statearr_53580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53585);

return statearr_53580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53585,out))
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
var args53598 = [];
var len__36572__auto___53647 = arguments.length;
var i__36573__auto___53648 = (0);
while(true){
if((i__36573__auto___53648 < len__36572__auto___53647)){
args53598.push((arguments[i__36573__auto___53648]));

var G__53649 = (i__36573__auto___53648 + (1));
i__36573__auto___53648 = G__53649;
continue;
} else {
}
break;
}

var G__53600 = args53598.length;
switch (G__53600) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53598.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___53651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53651,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53651,out){
return (function (state_53624){
var state_val_53625 = (state_53624[(1)]);
if((state_val_53625 === (7))){
var inst_53606 = (state_53624[(7)]);
var inst_53606__$1 = (state_53624[(2)]);
var inst_53607 = (inst_53606__$1 == null);
var inst_53608 = cljs.core.not.call(null,inst_53607);
var state_53624__$1 = (function (){var statearr_53626 = state_53624;
(statearr_53626[(7)] = inst_53606__$1);

return statearr_53626;
})();
if(inst_53608){
var statearr_53627_53652 = state_53624__$1;
(statearr_53627_53652[(1)] = (8));

} else {
var statearr_53628_53653 = state_53624__$1;
(statearr_53628_53653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (1))){
var inst_53601 = (0);
var state_53624__$1 = (function (){var statearr_53629 = state_53624;
(statearr_53629[(8)] = inst_53601);

return statearr_53629;
})();
var statearr_53630_53654 = state_53624__$1;
(statearr_53630_53654[(2)] = null);

(statearr_53630_53654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (4))){
var state_53624__$1 = state_53624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53624__$1,(7),ch);
} else {
if((state_val_53625 === (6))){
var inst_53619 = (state_53624[(2)]);
var state_53624__$1 = state_53624;
var statearr_53631_53655 = state_53624__$1;
(statearr_53631_53655[(2)] = inst_53619);

(statearr_53631_53655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (3))){
var inst_53621 = (state_53624[(2)]);
var inst_53622 = cljs.core.async.close_BANG_.call(null,out);
var state_53624__$1 = (function (){var statearr_53632 = state_53624;
(statearr_53632[(9)] = inst_53621);

return statearr_53632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53624__$1,inst_53622);
} else {
if((state_val_53625 === (2))){
var inst_53601 = (state_53624[(8)]);
var inst_53603 = (inst_53601 < n);
var state_53624__$1 = state_53624;
if(cljs.core.truth_(inst_53603)){
var statearr_53633_53656 = state_53624__$1;
(statearr_53633_53656[(1)] = (4));

} else {
var statearr_53634_53657 = state_53624__$1;
(statearr_53634_53657[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (11))){
var inst_53601 = (state_53624[(8)]);
var inst_53611 = (state_53624[(2)]);
var inst_53612 = (inst_53601 + (1));
var inst_53601__$1 = inst_53612;
var state_53624__$1 = (function (){var statearr_53635 = state_53624;
(statearr_53635[(10)] = inst_53611);

(statearr_53635[(8)] = inst_53601__$1);

return statearr_53635;
})();
var statearr_53636_53658 = state_53624__$1;
(statearr_53636_53658[(2)] = null);

(statearr_53636_53658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (9))){
var state_53624__$1 = state_53624;
var statearr_53637_53659 = state_53624__$1;
(statearr_53637_53659[(2)] = null);

(statearr_53637_53659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (5))){
var state_53624__$1 = state_53624;
var statearr_53638_53660 = state_53624__$1;
(statearr_53638_53660[(2)] = null);

(statearr_53638_53660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (10))){
var inst_53616 = (state_53624[(2)]);
var state_53624__$1 = state_53624;
var statearr_53639_53661 = state_53624__$1;
(statearr_53639_53661[(2)] = inst_53616);

(statearr_53639_53661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53625 === (8))){
var inst_53606 = (state_53624[(7)]);
var state_53624__$1 = state_53624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53624__$1,(11),out,inst_53606);
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
});})(c__37681__auto___53651,out))
;
return ((function (switch__37569__auto__,c__37681__auto___53651,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_53643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53643[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_53643[(1)] = (1));

return statearr_53643;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_53624){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53644){if((e53644 instanceof Object)){
var ex__37573__auto__ = e53644;
var statearr_53645_53662 = state_53624;
(statearr_53645_53662[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53663 = state_53624;
state_53624 = G__53663;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_53624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_53624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53651,out))
})();
var state__37683__auto__ = (function (){var statearr_53646 = f__37682__auto__.call(null);
(statearr_53646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53651);

return statearr_53646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53651,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53671 = (function (map_LT_,f,ch,meta53672){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53672 = meta53672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53673,meta53672__$1){
var self__ = this;
var _53673__$1 = this;
return (new cljs.core.async.t_cljs$core$async53671(self__.map_LT_,self__.f,self__.ch,meta53672__$1));
});

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53673){
var self__ = this;
var _53673__$1 = this;
return self__.meta53672;
});

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async53674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53674 = (function (map_LT_,f,ch,meta53672,_,fn1,meta53675){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta53672 = meta53672;
this._ = _;
this.fn1 = fn1;
this.meta53675 = meta53675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53676,meta53675__$1){
var self__ = this;
var _53676__$1 = this;
return (new cljs.core.async.t_cljs$core$async53674(self__.map_LT_,self__.f,self__.ch,self__.meta53672,self__._,self__.fn1,meta53675__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53676){
var self__ = this;
var _53676__$1 = this;
return self__.meta53675;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53664_SHARP_){
return f1.call(null,(((p1__53664_SHARP_ == null))?null:self__.f.call(null,p1__53664_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53672","meta53672",-328955769,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53671","cljs.core.async/t_cljs$core$async53671",-985108951,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53675","meta53675",172869634,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53674";

cljs.core.async.t_cljs$core$async53674.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53674");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async53674 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53674(map_LT___$1,f__$1,ch__$1,meta53672__$1,___$2,fn1__$1,meta53675){
return (new cljs.core.async.t_cljs$core$async53674(map_LT___$1,f__$1,ch__$1,meta53672__$1,___$2,fn1__$1,meta53675));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53674(self__.map_LT_,self__.f,self__.ch,self__.meta53672,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53672","meta53672",-328955769,null)], null);
});

cljs.core.async.t_cljs$core$async53671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53671";

cljs.core.async.t_cljs$core$async53671.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53671");
});

cljs.core.async.__GT_t_cljs$core$async53671 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53671(map_LT___$1,f__$1,ch__$1,meta53672){
return (new cljs.core.async.t_cljs$core$async53671(map_LT___$1,f__$1,ch__$1,meta53672));
});

}

return (new cljs.core.async.t_cljs$core$async53671(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53680 = (function (map_GT_,f,ch,meta53681){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta53681 = meta53681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53682,meta53681__$1){
var self__ = this;
var _53682__$1 = this;
return (new cljs.core.async.t_cljs$core$async53680(self__.map_GT_,self__.f,self__.ch,meta53681__$1));
});

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53682){
var self__ = this;
var _53682__$1 = this;
return self__.meta53681;
});

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async53680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53681","meta53681",-2097472397,null)], null);
});

cljs.core.async.t_cljs$core$async53680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53680";

cljs.core.async.t_cljs$core$async53680.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53680");
});

cljs.core.async.__GT_t_cljs$core$async53680 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53680(map_GT___$1,f__$1,ch__$1,meta53681){
return (new cljs.core.async.t_cljs$core$async53680(map_GT___$1,f__$1,ch__$1,meta53681));
});

}

return (new cljs.core.async.t_cljs$core$async53680(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async53686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53686 = (function (filter_GT_,p,ch,meta53687){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta53687 = meta53687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53688,meta53687__$1){
var self__ = this;
var _53688__$1 = this;
return (new cljs.core.async.t_cljs$core$async53686(self__.filter_GT_,self__.p,self__.ch,meta53687__$1));
});

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53688){
var self__ = this;
var _53688__$1 = this;
return self__.meta53687;
});

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async53686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53687","meta53687",-99883317,null)], null);
});

cljs.core.async.t_cljs$core$async53686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53686";

cljs.core.async.t_cljs$core$async53686.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cljs.core.async/t_cljs$core$async53686");
});

cljs.core.async.__GT_t_cljs$core$async53686 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53686(filter_GT___$1,p__$1,ch__$1,meta53687){
return (new cljs.core.async.t_cljs$core$async53686(filter_GT___$1,p__$1,ch__$1,meta53687));
});

}

return (new cljs.core.async.t_cljs$core$async53686(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args53689 = [];
var len__36572__auto___53733 = arguments.length;
var i__36573__auto___53734 = (0);
while(true){
if((i__36573__auto___53734 < len__36572__auto___53733)){
args53689.push((arguments[i__36573__auto___53734]));

var G__53735 = (i__36573__auto___53734 + (1));
i__36573__auto___53734 = G__53735;
continue;
} else {
}
break;
}

var G__53691 = args53689.length;
switch (G__53691) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53689.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___53737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___53737,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___53737,out){
return (function (state_53712){
var state_val_53713 = (state_53712[(1)]);
if((state_val_53713 === (7))){
var inst_53708 = (state_53712[(2)]);
var state_53712__$1 = state_53712;
var statearr_53714_53738 = state_53712__$1;
(statearr_53714_53738[(2)] = inst_53708);

(statearr_53714_53738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (1))){
var state_53712__$1 = state_53712;
var statearr_53715_53739 = state_53712__$1;
(statearr_53715_53739[(2)] = null);

(statearr_53715_53739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (4))){
var inst_53694 = (state_53712[(7)]);
var inst_53694__$1 = (state_53712[(2)]);
var inst_53695 = (inst_53694__$1 == null);
var state_53712__$1 = (function (){var statearr_53716 = state_53712;
(statearr_53716[(7)] = inst_53694__$1);

return statearr_53716;
})();
if(cljs.core.truth_(inst_53695)){
var statearr_53717_53740 = state_53712__$1;
(statearr_53717_53740[(1)] = (5));

} else {
var statearr_53718_53741 = state_53712__$1;
(statearr_53718_53741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (6))){
var inst_53694 = (state_53712[(7)]);
var inst_53699 = p.call(null,inst_53694);
var state_53712__$1 = state_53712;
if(cljs.core.truth_(inst_53699)){
var statearr_53719_53742 = state_53712__$1;
(statearr_53719_53742[(1)] = (8));

} else {
var statearr_53720_53743 = state_53712__$1;
(statearr_53720_53743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (3))){
var inst_53710 = (state_53712[(2)]);
var state_53712__$1 = state_53712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53712__$1,inst_53710);
} else {
if((state_val_53713 === (2))){
var state_53712__$1 = state_53712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53712__$1,(4),ch);
} else {
if((state_val_53713 === (11))){
var inst_53702 = (state_53712[(2)]);
var state_53712__$1 = state_53712;
var statearr_53721_53744 = state_53712__$1;
(statearr_53721_53744[(2)] = inst_53702);

(statearr_53721_53744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (9))){
var state_53712__$1 = state_53712;
var statearr_53722_53745 = state_53712__$1;
(statearr_53722_53745[(2)] = null);

(statearr_53722_53745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (5))){
var inst_53697 = cljs.core.async.close_BANG_.call(null,out);
var state_53712__$1 = state_53712;
var statearr_53723_53746 = state_53712__$1;
(statearr_53723_53746[(2)] = inst_53697);

(statearr_53723_53746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (10))){
var inst_53705 = (state_53712[(2)]);
var state_53712__$1 = (function (){var statearr_53724 = state_53712;
(statearr_53724[(8)] = inst_53705);

return statearr_53724;
})();
var statearr_53725_53747 = state_53712__$1;
(statearr_53725_53747[(2)] = null);

(statearr_53725_53747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53713 === (8))){
var inst_53694 = (state_53712[(7)]);
var state_53712__$1 = state_53712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53712__$1,(11),out,inst_53694);
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
});})(c__37681__auto___53737,out))
;
return ((function (switch__37569__auto__,c__37681__auto___53737,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_53729 = [null,null,null,null,null,null,null,null,null];
(statearr_53729[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_53729[(1)] = (1));

return statearr_53729;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_53712){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53730){if((e53730 instanceof Object)){
var ex__37573__auto__ = e53730;
var statearr_53731_53748 = state_53712;
(statearr_53731_53748[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53749 = state_53712;
state_53712 = G__53749;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_53712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_53712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___53737,out))
})();
var state__37683__auto__ = (function (){var statearr_53732 = f__37682__auto__.call(null);
(statearr_53732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___53737);

return statearr_53732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___53737,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args53750 = [];
var len__36572__auto___53753 = arguments.length;
var i__36573__auto___53754 = (0);
while(true){
if((i__36573__auto___53754 < len__36572__auto___53753)){
args53750.push((arguments[i__36573__auto___53754]));

var G__53755 = (i__36573__auto___53754 + (1));
i__36573__auto___53754 = G__53755;
continue;
} else {
}
break;
}

var G__53752 = args53750.length;
switch (G__53752) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53750.length)].join('')));

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
return (function (state_53922){
var state_val_53923 = (state_53922[(1)]);
if((state_val_53923 === (7))){
var inst_53918 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
var statearr_53924_53965 = state_53922__$1;
(statearr_53924_53965[(2)] = inst_53918);

(statearr_53924_53965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (20))){
var inst_53888 = (state_53922[(7)]);
var inst_53899 = (state_53922[(2)]);
var inst_53900 = cljs.core.next.call(null,inst_53888);
var inst_53874 = inst_53900;
var inst_53875 = null;
var inst_53876 = (0);
var inst_53877 = (0);
var state_53922__$1 = (function (){var statearr_53925 = state_53922;
(statearr_53925[(8)] = inst_53874);

(statearr_53925[(9)] = inst_53876);

(statearr_53925[(10)] = inst_53875);

(statearr_53925[(11)] = inst_53877);

(statearr_53925[(12)] = inst_53899);

return statearr_53925;
})();
var statearr_53926_53966 = state_53922__$1;
(statearr_53926_53966[(2)] = null);

(statearr_53926_53966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (1))){
var state_53922__$1 = state_53922;
var statearr_53927_53967 = state_53922__$1;
(statearr_53927_53967[(2)] = null);

(statearr_53927_53967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (4))){
var inst_53863 = (state_53922[(13)]);
var inst_53863__$1 = (state_53922[(2)]);
var inst_53864 = (inst_53863__$1 == null);
var state_53922__$1 = (function (){var statearr_53928 = state_53922;
(statearr_53928[(13)] = inst_53863__$1);

return statearr_53928;
})();
if(cljs.core.truth_(inst_53864)){
var statearr_53929_53968 = state_53922__$1;
(statearr_53929_53968[(1)] = (5));

} else {
var statearr_53930_53969 = state_53922__$1;
(statearr_53930_53969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (15))){
var state_53922__$1 = state_53922;
var statearr_53934_53970 = state_53922__$1;
(statearr_53934_53970[(2)] = null);

(statearr_53934_53970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (21))){
var state_53922__$1 = state_53922;
var statearr_53935_53971 = state_53922__$1;
(statearr_53935_53971[(2)] = null);

(statearr_53935_53971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (13))){
var inst_53874 = (state_53922[(8)]);
var inst_53876 = (state_53922[(9)]);
var inst_53875 = (state_53922[(10)]);
var inst_53877 = (state_53922[(11)]);
var inst_53884 = (state_53922[(2)]);
var inst_53885 = (inst_53877 + (1));
var tmp53931 = inst_53874;
var tmp53932 = inst_53876;
var tmp53933 = inst_53875;
var inst_53874__$1 = tmp53931;
var inst_53875__$1 = tmp53933;
var inst_53876__$1 = tmp53932;
var inst_53877__$1 = inst_53885;
var state_53922__$1 = (function (){var statearr_53936 = state_53922;
(statearr_53936[(8)] = inst_53874__$1);

(statearr_53936[(9)] = inst_53876__$1);

(statearr_53936[(10)] = inst_53875__$1);

(statearr_53936[(14)] = inst_53884);

(statearr_53936[(11)] = inst_53877__$1);

return statearr_53936;
})();
var statearr_53937_53972 = state_53922__$1;
(statearr_53937_53972[(2)] = null);

(statearr_53937_53972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (22))){
var state_53922__$1 = state_53922;
var statearr_53938_53973 = state_53922__$1;
(statearr_53938_53973[(2)] = null);

(statearr_53938_53973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (6))){
var inst_53863 = (state_53922[(13)]);
var inst_53872 = f.call(null,inst_53863);
var inst_53873 = cljs.core.seq.call(null,inst_53872);
var inst_53874 = inst_53873;
var inst_53875 = null;
var inst_53876 = (0);
var inst_53877 = (0);
var state_53922__$1 = (function (){var statearr_53939 = state_53922;
(statearr_53939[(8)] = inst_53874);

(statearr_53939[(9)] = inst_53876);

(statearr_53939[(10)] = inst_53875);

(statearr_53939[(11)] = inst_53877);

return statearr_53939;
})();
var statearr_53940_53974 = state_53922__$1;
(statearr_53940_53974[(2)] = null);

(statearr_53940_53974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (17))){
var inst_53888 = (state_53922[(7)]);
var inst_53892 = cljs.core.chunk_first.call(null,inst_53888);
var inst_53893 = cljs.core.chunk_rest.call(null,inst_53888);
var inst_53894 = cljs.core.count.call(null,inst_53892);
var inst_53874 = inst_53893;
var inst_53875 = inst_53892;
var inst_53876 = inst_53894;
var inst_53877 = (0);
var state_53922__$1 = (function (){var statearr_53941 = state_53922;
(statearr_53941[(8)] = inst_53874);

(statearr_53941[(9)] = inst_53876);

(statearr_53941[(10)] = inst_53875);

(statearr_53941[(11)] = inst_53877);

return statearr_53941;
})();
var statearr_53942_53975 = state_53922__$1;
(statearr_53942_53975[(2)] = null);

(statearr_53942_53975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (3))){
var inst_53920 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53922__$1,inst_53920);
} else {
if((state_val_53923 === (12))){
var inst_53908 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
var statearr_53943_53976 = state_53922__$1;
(statearr_53943_53976[(2)] = inst_53908);

(statearr_53943_53976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (2))){
var state_53922__$1 = state_53922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53922__$1,(4),in$);
} else {
if((state_val_53923 === (23))){
var inst_53916 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
var statearr_53944_53977 = state_53922__$1;
(statearr_53944_53977[(2)] = inst_53916);

(statearr_53944_53977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (19))){
var inst_53903 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
var statearr_53945_53978 = state_53922__$1;
(statearr_53945_53978[(2)] = inst_53903);

(statearr_53945_53978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (11))){
var inst_53874 = (state_53922[(8)]);
var inst_53888 = (state_53922[(7)]);
var inst_53888__$1 = cljs.core.seq.call(null,inst_53874);
var state_53922__$1 = (function (){var statearr_53946 = state_53922;
(statearr_53946[(7)] = inst_53888__$1);

return statearr_53946;
})();
if(inst_53888__$1){
var statearr_53947_53979 = state_53922__$1;
(statearr_53947_53979[(1)] = (14));

} else {
var statearr_53948_53980 = state_53922__$1;
(statearr_53948_53980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (9))){
var inst_53910 = (state_53922[(2)]);
var inst_53911 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53922__$1 = (function (){var statearr_53949 = state_53922;
(statearr_53949[(15)] = inst_53910);

return statearr_53949;
})();
if(cljs.core.truth_(inst_53911)){
var statearr_53950_53981 = state_53922__$1;
(statearr_53950_53981[(1)] = (21));

} else {
var statearr_53951_53982 = state_53922__$1;
(statearr_53951_53982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (5))){
var inst_53866 = cljs.core.async.close_BANG_.call(null,out);
var state_53922__$1 = state_53922;
var statearr_53952_53983 = state_53922__$1;
(statearr_53952_53983[(2)] = inst_53866);

(statearr_53952_53983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (14))){
var inst_53888 = (state_53922[(7)]);
var inst_53890 = cljs.core.chunked_seq_QMARK_.call(null,inst_53888);
var state_53922__$1 = state_53922;
if(inst_53890){
var statearr_53953_53984 = state_53922__$1;
(statearr_53953_53984[(1)] = (17));

} else {
var statearr_53954_53985 = state_53922__$1;
(statearr_53954_53985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (16))){
var inst_53906 = (state_53922[(2)]);
var state_53922__$1 = state_53922;
var statearr_53955_53986 = state_53922__$1;
(statearr_53955_53986[(2)] = inst_53906);

(statearr_53955_53986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53923 === (10))){
var inst_53875 = (state_53922[(10)]);
var inst_53877 = (state_53922[(11)]);
var inst_53882 = cljs.core._nth.call(null,inst_53875,inst_53877);
var state_53922__$1 = state_53922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53922__$1,(13),out,inst_53882);
} else {
if((state_val_53923 === (18))){
var inst_53888 = (state_53922[(7)]);
var inst_53897 = cljs.core.first.call(null,inst_53888);
var state_53922__$1 = state_53922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53922__$1,(20),out,inst_53897);
} else {
if((state_val_53923 === (8))){
var inst_53876 = (state_53922[(9)]);
var inst_53877 = (state_53922[(11)]);
var inst_53879 = (inst_53877 < inst_53876);
var inst_53880 = inst_53879;
var state_53922__$1 = state_53922;
if(cljs.core.truth_(inst_53880)){
var statearr_53956_53987 = state_53922__$1;
(statearr_53956_53987[(1)] = (10));

} else {
var statearr_53957_53988 = state_53922__$1;
(statearr_53957_53988[(1)] = (11));

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
var statearr_53961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53961[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__);

(statearr_53961[(1)] = (1));

return statearr_53961;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1 = (function (state_53922){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_53922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e53962){if((e53962 instanceof Object)){
var ex__37573__auto__ = e53962;
var statearr_53963_53989 = state_53922;
(statearr_53963_53989[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53990 = state_53922;
state_53922 = G__53990;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__ = function(state_53922){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1.call(this,state_53922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37570__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_53964 = f__37682__auto__.call(null);
(statearr_53964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_53964;
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
var args53991 = [];
var len__36572__auto___53994 = arguments.length;
var i__36573__auto___53995 = (0);
while(true){
if((i__36573__auto___53995 < len__36572__auto___53994)){
args53991.push((arguments[i__36573__auto___53995]));

var G__53996 = (i__36573__auto___53995 + (1));
i__36573__auto___53995 = G__53996;
continue;
} else {
}
break;
}

var G__53993 = args53991.length;
switch (G__53993) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53991.length)].join('')));

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
var args53998 = [];
var len__36572__auto___54001 = arguments.length;
var i__36573__auto___54002 = (0);
while(true){
if((i__36573__auto___54002 < len__36572__auto___54001)){
args53998.push((arguments[i__36573__auto___54002]));

var G__54003 = (i__36573__auto___54002 + (1));
i__36573__auto___54002 = G__54003;
continue;
} else {
}
break;
}

var G__54000 = args53998.length;
switch (G__54000) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53998.length)].join('')));

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
var args54005 = [];
var len__36572__auto___54056 = arguments.length;
var i__36573__auto___54057 = (0);
while(true){
if((i__36573__auto___54057 < len__36572__auto___54056)){
args54005.push((arguments[i__36573__auto___54057]));

var G__54058 = (i__36573__auto___54057 + (1));
i__36573__auto___54057 = G__54058;
continue;
} else {
}
break;
}

var G__54007 = args54005.length;
switch (G__54007) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54005.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___54060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___54060,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___54060,out){
return (function (state_54031){
var state_val_54032 = (state_54031[(1)]);
if((state_val_54032 === (7))){
var inst_54026 = (state_54031[(2)]);
var state_54031__$1 = state_54031;
var statearr_54033_54061 = state_54031__$1;
(statearr_54033_54061[(2)] = inst_54026);

(statearr_54033_54061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (1))){
var inst_54008 = null;
var state_54031__$1 = (function (){var statearr_54034 = state_54031;
(statearr_54034[(7)] = inst_54008);

return statearr_54034;
})();
var statearr_54035_54062 = state_54031__$1;
(statearr_54035_54062[(2)] = null);

(statearr_54035_54062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (4))){
var inst_54011 = (state_54031[(8)]);
var inst_54011__$1 = (state_54031[(2)]);
var inst_54012 = (inst_54011__$1 == null);
var inst_54013 = cljs.core.not.call(null,inst_54012);
var state_54031__$1 = (function (){var statearr_54036 = state_54031;
(statearr_54036[(8)] = inst_54011__$1);

return statearr_54036;
})();
if(inst_54013){
var statearr_54037_54063 = state_54031__$1;
(statearr_54037_54063[(1)] = (5));

} else {
var statearr_54038_54064 = state_54031__$1;
(statearr_54038_54064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (6))){
var state_54031__$1 = state_54031;
var statearr_54039_54065 = state_54031__$1;
(statearr_54039_54065[(2)] = null);

(statearr_54039_54065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (3))){
var inst_54028 = (state_54031[(2)]);
var inst_54029 = cljs.core.async.close_BANG_.call(null,out);
var state_54031__$1 = (function (){var statearr_54040 = state_54031;
(statearr_54040[(9)] = inst_54028);

return statearr_54040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54031__$1,inst_54029);
} else {
if((state_val_54032 === (2))){
var state_54031__$1 = state_54031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54031__$1,(4),ch);
} else {
if((state_val_54032 === (11))){
var inst_54011 = (state_54031[(8)]);
var inst_54020 = (state_54031[(2)]);
var inst_54008 = inst_54011;
var state_54031__$1 = (function (){var statearr_54041 = state_54031;
(statearr_54041[(10)] = inst_54020);

(statearr_54041[(7)] = inst_54008);

return statearr_54041;
})();
var statearr_54042_54066 = state_54031__$1;
(statearr_54042_54066[(2)] = null);

(statearr_54042_54066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (9))){
var inst_54011 = (state_54031[(8)]);
var state_54031__$1 = state_54031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54031__$1,(11),out,inst_54011);
} else {
if((state_val_54032 === (5))){
var inst_54011 = (state_54031[(8)]);
var inst_54008 = (state_54031[(7)]);
var inst_54015 = cljs.core._EQ_.call(null,inst_54011,inst_54008);
var state_54031__$1 = state_54031;
if(inst_54015){
var statearr_54044_54067 = state_54031__$1;
(statearr_54044_54067[(1)] = (8));

} else {
var statearr_54045_54068 = state_54031__$1;
(statearr_54045_54068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (10))){
var inst_54023 = (state_54031[(2)]);
var state_54031__$1 = state_54031;
var statearr_54046_54069 = state_54031__$1;
(statearr_54046_54069[(2)] = inst_54023);

(statearr_54046_54069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54032 === (8))){
var inst_54008 = (state_54031[(7)]);
var tmp54043 = inst_54008;
var inst_54008__$1 = tmp54043;
var state_54031__$1 = (function (){var statearr_54047 = state_54031;
(statearr_54047[(7)] = inst_54008__$1);

return statearr_54047;
})();
var statearr_54048_54070 = state_54031__$1;
(statearr_54048_54070[(2)] = null);

(statearr_54048_54070[(1)] = (2));


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
});})(c__37681__auto___54060,out))
;
return ((function (switch__37569__auto__,c__37681__auto___54060,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_54052 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54052[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_54052[(1)] = (1));

return statearr_54052;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_54031){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_54031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e54053){if((e54053 instanceof Object)){
var ex__37573__auto__ = e54053;
var statearr_54054_54071 = state_54031;
(statearr_54054_54071[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54072 = state_54031;
state_54031 = G__54072;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_54031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_54031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___54060,out))
})();
var state__37683__auto__ = (function (){var statearr_54055 = f__37682__auto__.call(null);
(statearr_54055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___54060);

return statearr_54055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___54060,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args54073 = [];
var len__36572__auto___54143 = arguments.length;
var i__36573__auto___54144 = (0);
while(true){
if((i__36573__auto___54144 < len__36572__auto___54143)){
args54073.push((arguments[i__36573__auto___54144]));

var G__54145 = (i__36573__auto___54144 + (1));
i__36573__auto___54144 = G__54145;
continue;
} else {
}
break;
}

var G__54075 = args54073.length;
switch (G__54075) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54073.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___54147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___54147,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___54147,out){
return (function (state_54113){
var state_val_54114 = (state_54113[(1)]);
if((state_val_54114 === (7))){
var inst_54109 = (state_54113[(2)]);
var state_54113__$1 = state_54113;
var statearr_54115_54148 = state_54113__$1;
(statearr_54115_54148[(2)] = inst_54109);

(statearr_54115_54148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (1))){
var inst_54076 = (new Array(n));
var inst_54077 = inst_54076;
var inst_54078 = (0);
var state_54113__$1 = (function (){var statearr_54116 = state_54113;
(statearr_54116[(7)] = inst_54078);

(statearr_54116[(8)] = inst_54077);

return statearr_54116;
})();
var statearr_54117_54149 = state_54113__$1;
(statearr_54117_54149[(2)] = null);

(statearr_54117_54149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (4))){
var inst_54081 = (state_54113[(9)]);
var inst_54081__$1 = (state_54113[(2)]);
var inst_54082 = (inst_54081__$1 == null);
var inst_54083 = cljs.core.not.call(null,inst_54082);
var state_54113__$1 = (function (){var statearr_54118 = state_54113;
(statearr_54118[(9)] = inst_54081__$1);

return statearr_54118;
})();
if(inst_54083){
var statearr_54119_54150 = state_54113__$1;
(statearr_54119_54150[(1)] = (5));

} else {
var statearr_54120_54151 = state_54113__$1;
(statearr_54120_54151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (15))){
var inst_54103 = (state_54113[(2)]);
var state_54113__$1 = state_54113;
var statearr_54121_54152 = state_54113__$1;
(statearr_54121_54152[(2)] = inst_54103);

(statearr_54121_54152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (13))){
var state_54113__$1 = state_54113;
var statearr_54122_54153 = state_54113__$1;
(statearr_54122_54153[(2)] = null);

(statearr_54122_54153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (6))){
var inst_54078 = (state_54113[(7)]);
var inst_54099 = (inst_54078 > (0));
var state_54113__$1 = state_54113;
if(cljs.core.truth_(inst_54099)){
var statearr_54123_54154 = state_54113__$1;
(statearr_54123_54154[(1)] = (12));

} else {
var statearr_54124_54155 = state_54113__$1;
(statearr_54124_54155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (3))){
var inst_54111 = (state_54113[(2)]);
var state_54113__$1 = state_54113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54113__$1,inst_54111);
} else {
if((state_val_54114 === (12))){
var inst_54077 = (state_54113[(8)]);
var inst_54101 = cljs.core.vec.call(null,inst_54077);
var state_54113__$1 = state_54113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54113__$1,(15),out,inst_54101);
} else {
if((state_val_54114 === (2))){
var state_54113__$1 = state_54113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54113__$1,(4),ch);
} else {
if((state_val_54114 === (11))){
var inst_54093 = (state_54113[(2)]);
var inst_54094 = (new Array(n));
var inst_54077 = inst_54094;
var inst_54078 = (0);
var state_54113__$1 = (function (){var statearr_54125 = state_54113;
(statearr_54125[(7)] = inst_54078);

(statearr_54125[(8)] = inst_54077);

(statearr_54125[(10)] = inst_54093);

return statearr_54125;
})();
var statearr_54126_54156 = state_54113__$1;
(statearr_54126_54156[(2)] = null);

(statearr_54126_54156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (9))){
var inst_54077 = (state_54113[(8)]);
var inst_54091 = cljs.core.vec.call(null,inst_54077);
var state_54113__$1 = state_54113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54113__$1,(11),out,inst_54091);
} else {
if((state_val_54114 === (5))){
var inst_54081 = (state_54113[(9)]);
var inst_54078 = (state_54113[(7)]);
var inst_54077 = (state_54113[(8)]);
var inst_54086 = (state_54113[(11)]);
var inst_54085 = (inst_54077[inst_54078] = inst_54081);
var inst_54086__$1 = (inst_54078 + (1));
var inst_54087 = (inst_54086__$1 < n);
var state_54113__$1 = (function (){var statearr_54127 = state_54113;
(statearr_54127[(12)] = inst_54085);

(statearr_54127[(11)] = inst_54086__$1);

return statearr_54127;
})();
if(cljs.core.truth_(inst_54087)){
var statearr_54128_54157 = state_54113__$1;
(statearr_54128_54157[(1)] = (8));

} else {
var statearr_54129_54158 = state_54113__$1;
(statearr_54129_54158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (14))){
var inst_54106 = (state_54113[(2)]);
var inst_54107 = cljs.core.async.close_BANG_.call(null,out);
var state_54113__$1 = (function (){var statearr_54131 = state_54113;
(statearr_54131[(13)] = inst_54106);

return statearr_54131;
})();
var statearr_54132_54159 = state_54113__$1;
(statearr_54132_54159[(2)] = inst_54107);

(statearr_54132_54159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (10))){
var inst_54097 = (state_54113[(2)]);
var state_54113__$1 = state_54113;
var statearr_54133_54160 = state_54113__$1;
(statearr_54133_54160[(2)] = inst_54097);

(statearr_54133_54160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54114 === (8))){
var inst_54077 = (state_54113[(8)]);
var inst_54086 = (state_54113[(11)]);
var tmp54130 = inst_54077;
var inst_54077__$1 = tmp54130;
var inst_54078 = inst_54086;
var state_54113__$1 = (function (){var statearr_54134 = state_54113;
(statearr_54134[(7)] = inst_54078);

(statearr_54134[(8)] = inst_54077__$1);

return statearr_54134;
})();
var statearr_54135_54161 = state_54113__$1;
(statearr_54135_54161[(2)] = null);

(statearr_54135_54161[(1)] = (2));


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
});})(c__37681__auto___54147,out))
;
return ((function (switch__37569__auto__,c__37681__auto___54147,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_54139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54139[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_54139[(1)] = (1));

return statearr_54139;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_54113){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_54113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e54140){if((e54140 instanceof Object)){
var ex__37573__auto__ = e54140;
var statearr_54141_54162 = state_54113;
(statearr_54141_54162[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54163 = state_54113;
state_54113 = G__54163;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_54113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_54113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___54147,out))
})();
var state__37683__auto__ = (function (){var statearr_54142 = f__37682__auto__.call(null);
(statearr_54142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___54147);

return statearr_54142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___54147,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args54164 = [];
var len__36572__auto___54238 = arguments.length;
var i__36573__auto___54239 = (0);
while(true){
if((i__36573__auto___54239 < len__36572__auto___54238)){
args54164.push((arguments[i__36573__auto___54239]));

var G__54240 = (i__36573__auto___54239 + (1));
i__36573__auto___54239 = G__54240;
continue;
} else {
}
break;
}

var G__54166 = args54164.length;
switch (G__54166) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54164.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37681__auto___54242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___54242,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___54242,out){
return (function (state_54208){
var state_val_54209 = (state_54208[(1)]);
if((state_val_54209 === (7))){
var inst_54204 = (state_54208[(2)]);
var state_54208__$1 = state_54208;
var statearr_54210_54243 = state_54208__$1;
(statearr_54210_54243[(2)] = inst_54204);

(statearr_54210_54243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (1))){
var inst_54167 = [];
var inst_54168 = inst_54167;
var inst_54169 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54208__$1 = (function (){var statearr_54211 = state_54208;
(statearr_54211[(7)] = inst_54168);

(statearr_54211[(8)] = inst_54169);

return statearr_54211;
})();
var statearr_54212_54244 = state_54208__$1;
(statearr_54212_54244[(2)] = null);

(statearr_54212_54244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (4))){
var inst_54172 = (state_54208[(9)]);
var inst_54172__$1 = (state_54208[(2)]);
var inst_54173 = (inst_54172__$1 == null);
var inst_54174 = cljs.core.not.call(null,inst_54173);
var state_54208__$1 = (function (){var statearr_54213 = state_54208;
(statearr_54213[(9)] = inst_54172__$1);

return statearr_54213;
})();
if(inst_54174){
var statearr_54214_54245 = state_54208__$1;
(statearr_54214_54245[(1)] = (5));

} else {
var statearr_54215_54246 = state_54208__$1;
(statearr_54215_54246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (15))){
var inst_54198 = (state_54208[(2)]);
var state_54208__$1 = state_54208;
var statearr_54216_54247 = state_54208__$1;
(statearr_54216_54247[(2)] = inst_54198);

(statearr_54216_54247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (13))){
var state_54208__$1 = state_54208;
var statearr_54217_54248 = state_54208__$1;
(statearr_54217_54248[(2)] = null);

(statearr_54217_54248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (6))){
var inst_54168 = (state_54208[(7)]);
var inst_54193 = inst_54168.length;
var inst_54194 = (inst_54193 > (0));
var state_54208__$1 = state_54208;
if(cljs.core.truth_(inst_54194)){
var statearr_54218_54249 = state_54208__$1;
(statearr_54218_54249[(1)] = (12));

} else {
var statearr_54219_54250 = state_54208__$1;
(statearr_54219_54250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (3))){
var inst_54206 = (state_54208[(2)]);
var state_54208__$1 = state_54208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54208__$1,inst_54206);
} else {
if((state_val_54209 === (12))){
var inst_54168 = (state_54208[(7)]);
var inst_54196 = cljs.core.vec.call(null,inst_54168);
var state_54208__$1 = state_54208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54208__$1,(15),out,inst_54196);
} else {
if((state_val_54209 === (2))){
var state_54208__$1 = state_54208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54208__$1,(4),ch);
} else {
if((state_val_54209 === (11))){
var inst_54176 = (state_54208[(10)]);
var inst_54172 = (state_54208[(9)]);
var inst_54186 = (state_54208[(2)]);
var inst_54187 = [];
var inst_54188 = inst_54187.push(inst_54172);
var inst_54168 = inst_54187;
var inst_54169 = inst_54176;
var state_54208__$1 = (function (){var statearr_54220 = state_54208;
(statearr_54220[(11)] = inst_54188);

(statearr_54220[(7)] = inst_54168);

(statearr_54220[(8)] = inst_54169);

(statearr_54220[(12)] = inst_54186);

return statearr_54220;
})();
var statearr_54221_54251 = state_54208__$1;
(statearr_54221_54251[(2)] = null);

(statearr_54221_54251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (9))){
var inst_54168 = (state_54208[(7)]);
var inst_54184 = cljs.core.vec.call(null,inst_54168);
var state_54208__$1 = state_54208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54208__$1,(11),out,inst_54184);
} else {
if((state_val_54209 === (5))){
var inst_54176 = (state_54208[(10)]);
var inst_54172 = (state_54208[(9)]);
var inst_54169 = (state_54208[(8)]);
var inst_54176__$1 = f.call(null,inst_54172);
var inst_54177 = cljs.core._EQ_.call(null,inst_54176__$1,inst_54169);
var inst_54178 = cljs.core.keyword_identical_QMARK_.call(null,inst_54169,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54179 = (inst_54177) || (inst_54178);
var state_54208__$1 = (function (){var statearr_54222 = state_54208;
(statearr_54222[(10)] = inst_54176__$1);

return statearr_54222;
})();
if(cljs.core.truth_(inst_54179)){
var statearr_54223_54252 = state_54208__$1;
(statearr_54223_54252[(1)] = (8));

} else {
var statearr_54224_54253 = state_54208__$1;
(statearr_54224_54253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (14))){
var inst_54201 = (state_54208[(2)]);
var inst_54202 = cljs.core.async.close_BANG_.call(null,out);
var state_54208__$1 = (function (){var statearr_54226 = state_54208;
(statearr_54226[(13)] = inst_54201);

return statearr_54226;
})();
var statearr_54227_54254 = state_54208__$1;
(statearr_54227_54254[(2)] = inst_54202);

(statearr_54227_54254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (10))){
var inst_54191 = (state_54208[(2)]);
var state_54208__$1 = state_54208;
var statearr_54228_54255 = state_54208__$1;
(statearr_54228_54255[(2)] = inst_54191);

(statearr_54228_54255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54209 === (8))){
var inst_54176 = (state_54208[(10)]);
var inst_54168 = (state_54208[(7)]);
var inst_54172 = (state_54208[(9)]);
var inst_54181 = inst_54168.push(inst_54172);
var tmp54225 = inst_54168;
var inst_54168__$1 = tmp54225;
var inst_54169 = inst_54176;
var state_54208__$1 = (function (){var statearr_54229 = state_54208;
(statearr_54229[(7)] = inst_54168__$1);

(statearr_54229[(14)] = inst_54181);

(statearr_54229[(8)] = inst_54169);

return statearr_54229;
})();
var statearr_54230_54256 = state_54208__$1;
(statearr_54230_54256[(2)] = null);

(statearr_54230_54256[(1)] = (2));


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
});})(c__37681__auto___54242,out))
;
return ((function (switch__37569__auto__,c__37681__auto___54242,out){
return (function() {
var cljs$core$async$state_machine__37570__auto__ = null;
var cljs$core$async$state_machine__37570__auto____0 = (function (){
var statearr_54234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54234[(0)] = cljs$core$async$state_machine__37570__auto__);

(statearr_54234[(1)] = (1));

return statearr_54234;
});
var cljs$core$async$state_machine__37570__auto____1 = (function (state_54208){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_54208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e54235){if((e54235 instanceof Object)){
var ex__37573__auto__ = e54235;
var statearr_54236_54257 = state_54208;
(statearr_54236_54257[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54258 = state_54208;
state_54208 = G__54258;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
cljs$core$async$state_machine__37570__auto__ = function(state_54208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37570__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37570__auto____1.call(this,state_54208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37570__auto____0;
cljs$core$async$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37570__auto____1;
return cljs$core$async$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___54242,out))
})();
var state__37683__auto__ = (function (){var statearr_54237 = f__37682__auto__.call(null);
(statearr_54237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___54242);

return statearr_54237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___54242,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456364843769