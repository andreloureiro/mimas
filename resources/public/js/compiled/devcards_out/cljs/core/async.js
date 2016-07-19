// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args47440 = [];
var len__38501__auto___47446 = arguments.length;
var i__38502__auto___47447 = (0);
while(true){
if((i__38502__auto___47447 < len__38501__auto___47446)){
args47440.push((arguments[i__38502__auto___47447]));

var G__47448 = (i__38502__auto___47447 + (1));
i__38502__auto___47447 = G__47448;
continue;
} else {
}
break;
}

var G__47442 = args47440.length;
switch (G__47442) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47440.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async47443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47443 = (function (f,blockable,meta47444){
this.f = f;
this.blockable = blockable;
this.meta47444 = meta47444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47445,meta47444__$1){
var self__ = this;
var _47445__$1 = this;
return (new cljs.core.async.t_cljs$core$async47443(self__.f,self__.blockable,meta47444__$1));
});

cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47445){
var self__ = this;
var _47445__$1 = this;
return self__.meta47444;
});

cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47444","meta47444",-740785142,null)], null);
});

cljs.core.async.t_cljs$core$async47443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47443";

cljs.core.async.t_cljs$core$async47443.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async47443");
});

cljs.core.async.__GT_t_cljs$core$async47443 = (function cljs$core$async$__GT_t_cljs$core$async47443(f__$1,blockable__$1,meta47444){
return (new cljs.core.async.t_cljs$core$async47443(f__$1,blockable__$1,meta47444));
});

}

return (new cljs.core.async.t_cljs$core$async47443(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args47452 = [];
var len__38501__auto___47455 = arguments.length;
var i__38502__auto___47456 = (0);
while(true){
if((i__38502__auto___47456 < len__38501__auto___47455)){
args47452.push((arguments[i__38502__auto___47456]));

var G__47457 = (i__38502__auto___47456 + (1));
i__38502__auto___47456 = G__47457;
continue;
} else {
}
break;
}

var G__47454 = args47452.length;
switch (G__47454) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47452.length)].join('')));

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
var args47459 = [];
var len__38501__auto___47462 = arguments.length;
var i__38502__auto___47463 = (0);
while(true){
if((i__38502__auto___47463 < len__38501__auto___47462)){
args47459.push((arguments[i__38502__auto___47463]));

var G__47464 = (i__38502__auto___47463 + (1));
i__38502__auto___47463 = G__47464;
continue;
} else {
}
break;
}

var G__47461 = args47459.length;
switch (G__47461) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47459.length)].join('')));

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
var args47466 = [];
var len__38501__auto___47469 = arguments.length;
var i__38502__auto___47470 = (0);
while(true){
if((i__38502__auto___47470 < len__38501__auto___47469)){
args47466.push((arguments[i__38502__auto___47470]));

var G__47471 = (i__38502__auto___47470 + (1));
i__38502__auto___47470 = G__47471;
continue;
} else {
}
break;
}

var G__47468 = args47466.length;
switch (G__47468) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47466.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_47473 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47473);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47473,ret){
return (function (){
return fn1.call(null,val_47473);
});})(val_47473,ret))
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
var args47474 = [];
var len__38501__auto___47477 = arguments.length;
var i__38502__auto___47478 = (0);
while(true){
if((i__38502__auto___47478 < len__38501__auto___47477)){
args47474.push((arguments[i__38502__auto___47478]));

var G__47479 = (i__38502__auto___47478 + (1));
i__38502__auto___47478 = G__47479;
continue;
} else {
}
break;
}

var G__47476 = args47474.length;
switch (G__47476) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47474.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__38346__auto___47481 = n;
var x_47482 = (0);
while(true){
if((x_47482 < n__38346__auto___47481)){
(a[x_47482] = (0));

var G__47483 = (x_47482 + (1));
x_47482 = G__47483;
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

var G__47484 = (i + (1));
i = G__47484;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47488 = (function (alt_flag,flag,meta47489){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta47489 = meta47489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47490,meta47489__$1){
var self__ = this;
var _47490__$1 = this;
return (new cljs.core.async.t_cljs$core$async47488(self__.alt_flag,self__.flag,meta47489__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47490){
var self__ = this;
var _47490__$1 = this;
return self__.meta47489;
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47489","meta47489",1214198829,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47488";

cljs.core.async.t_cljs$core$async47488.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async47488");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47488 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47488(alt_flag__$1,flag__$1,meta47489){
return (new cljs.core.async.t_cljs$core$async47488(alt_flag__$1,flag__$1,meta47489));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47488(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47494 = (function (alt_handler,flag,cb,meta47495){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta47495 = meta47495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47496,meta47495__$1){
var self__ = this;
var _47496__$1 = this;
return (new cljs.core.async.t_cljs$core$async47494(self__.alt_handler,self__.flag,self__.cb,meta47495__$1));
});

cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47496){
var self__ = this;
var _47496__$1 = this;
return self__.meta47495;
});

cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47495","meta47495",-1810204603,null)], null);
});

cljs.core.async.t_cljs$core$async47494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47494";

cljs.core.async.t_cljs$core$async47494.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async47494");
});

cljs.core.async.__GT_t_cljs$core$async47494 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47494(alt_handler__$1,flag__$1,cb__$1,meta47495){
return (new cljs.core.async.t_cljs$core$async47494(alt_handler__$1,flag__$1,cb__$1,meta47495));
});

}

return (new cljs.core.async.t_cljs$core$async47494(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47497_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47497_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47498_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47498_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37443__auto__ = wport;
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47499 = (i + (1));
i = G__47499;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37443__auto__ = ret;
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__37431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37431__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37431__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__38508__auto__ = [];
var len__38501__auto___47505 = arguments.length;
var i__38502__auto___47506 = (0);
while(true){
if((i__38502__auto___47506 < len__38501__auto___47505)){
args__38508__auto__.push((arguments[i__38502__auto___47506]));

var G__47507 = (i__38502__auto___47506 + (1));
i__38502__auto___47506 = G__47507;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((1) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38509__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47502){
var map__47503 = p__47502;
var map__47503__$1 = ((((!((map__47503 == null)))?((((map__47503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47503):map__47503);
var opts = map__47503__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47500){
var G__47501 = cljs.core.first.call(null,seq47500);
var seq47500__$1 = cljs.core.next.call(null,seq47500);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47501,seq47500__$1);
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
var args47508 = [];
var len__38501__auto___47558 = arguments.length;
var i__38502__auto___47559 = (0);
while(true){
if((i__38502__auto___47559 < len__38501__auto___47558)){
args47508.push((arguments[i__38502__auto___47559]));

var G__47560 = (i__38502__auto___47559 + (1));
i__38502__auto___47559 = G__47560;
continue;
} else {
}
break;
}

var G__47510 = args47508.length;
switch (G__47510) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47508.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41374__auto___47562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___47562){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___47562){
return (function (state_47534){
var state_val_47535 = (state_47534[(1)]);
if((state_val_47535 === (7))){
var inst_47530 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
var statearr_47536_47563 = state_47534__$1;
(statearr_47536_47563[(2)] = inst_47530);

(statearr_47536_47563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (1))){
var state_47534__$1 = state_47534;
var statearr_47537_47564 = state_47534__$1;
(statearr_47537_47564[(2)] = null);

(statearr_47537_47564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (4))){
var inst_47513 = (state_47534[(7)]);
var inst_47513__$1 = (state_47534[(2)]);
var inst_47514 = (inst_47513__$1 == null);
var state_47534__$1 = (function (){var statearr_47538 = state_47534;
(statearr_47538[(7)] = inst_47513__$1);

return statearr_47538;
})();
if(cljs.core.truth_(inst_47514)){
var statearr_47539_47565 = state_47534__$1;
(statearr_47539_47565[(1)] = (5));

} else {
var statearr_47540_47566 = state_47534__$1;
(statearr_47540_47566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (13))){
var state_47534__$1 = state_47534;
var statearr_47541_47567 = state_47534__$1;
(statearr_47541_47567[(2)] = null);

(statearr_47541_47567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (6))){
var inst_47513 = (state_47534[(7)]);
var state_47534__$1 = state_47534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47534__$1,(11),to,inst_47513);
} else {
if((state_val_47535 === (3))){
var inst_47532 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47534__$1,inst_47532);
} else {
if((state_val_47535 === (12))){
var state_47534__$1 = state_47534;
var statearr_47542_47568 = state_47534__$1;
(statearr_47542_47568[(2)] = null);

(statearr_47542_47568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (2))){
var state_47534__$1 = state_47534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47534__$1,(4),from);
} else {
if((state_val_47535 === (11))){
var inst_47523 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
if(cljs.core.truth_(inst_47523)){
var statearr_47543_47569 = state_47534__$1;
(statearr_47543_47569[(1)] = (12));

} else {
var statearr_47544_47570 = state_47534__$1;
(statearr_47544_47570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (9))){
var state_47534__$1 = state_47534;
var statearr_47545_47571 = state_47534__$1;
(statearr_47545_47571[(2)] = null);

(statearr_47545_47571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (5))){
var state_47534__$1 = state_47534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47546_47572 = state_47534__$1;
(statearr_47546_47572[(1)] = (8));

} else {
var statearr_47547_47573 = state_47534__$1;
(statearr_47547_47573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (14))){
var inst_47528 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
var statearr_47548_47574 = state_47534__$1;
(statearr_47548_47574[(2)] = inst_47528);

(statearr_47548_47574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (10))){
var inst_47520 = (state_47534[(2)]);
var state_47534__$1 = state_47534;
var statearr_47549_47575 = state_47534__$1;
(statearr_47549_47575[(2)] = inst_47520);

(statearr_47549_47575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47535 === (8))){
var inst_47517 = cljs.core.async.close_BANG_.call(null,to);
var state_47534__$1 = state_47534;
var statearr_47550_47576 = state_47534__$1;
(statearr_47550_47576[(2)] = inst_47517);

(statearr_47550_47576[(1)] = (10));


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
});})(c__41374__auto___47562))
;
return ((function (switch__41353__auto__,c__41374__auto___47562){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_47554 = [null,null,null,null,null,null,null,null];
(statearr_47554[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_47554[(1)] = (1));

return statearr_47554;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_47534){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47555){if((e47555 instanceof Object)){
var ex__41357__auto__ = e47555;
var statearr_47556_47577 = state_47534;
(statearr_47556_47577[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47578 = state_47534;
state_47534 = G__47578;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_47534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_47534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___47562))
})();
var state__41376__auto__ = (function (){var statearr_47557 = f__41375__auto__.call(null);
(statearr_47557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___47562);

return statearr_47557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___47562))
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
return (function (p__47762){
var vec__47763 = p__47762;
var v = cljs.core.nth.call(null,vec__47763,(0),null);
var p = cljs.core.nth.call(null,vec__47763,(1),null);
var job = vec__47763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41374__auto___47945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results){
return (function (state_47768){
var state_val_47769 = (state_47768[(1)]);
if((state_val_47769 === (1))){
var state_47768__$1 = state_47768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47768__$1,(2),res,v);
} else {
if((state_val_47769 === (2))){
var inst_47765 = (state_47768[(2)]);
var inst_47766 = cljs.core.async.close_BANG_.call(null,res);
var state_47768__$1 = (function (){var statearr_47770 = state_47768;
(statearr_47770[(7)] = inst_47765);

return statearr_47770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47768__$1,inst_47766);
} else {
return null;
}
}
});})(c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results))
;
return ((function (switch__41353__auto__,c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_47774 = [null,null,null,null,null,null,null,null];
(statearr_47774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__);

(statearr_47774[(1)] = (1));

return statearr_47774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1 = (function (state_47768){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47775){if((e47775 instanceof Object)){
var ex__41357__auto__ = e47775;
var statearr_47776_47946 = state_47768;
(statearr_47776_47946[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47947 = state_47768;
state_47768 = G__47947;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = function(state_47768){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1.call(this,state_47768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results))
})();
var state__41376__auto__ = (function (){var statearr_47777 = f__41375__auto__.call(null);
(statearr_47777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___47945);

return statearr_47777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___47945,res,vec__47763,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47778){
var vec__47779 = p__47778;
var v = cljs.core.nth.call(null,vec__47779,(0),null);
var p = cljs.core.nth.call(null,vec__47779,(1),null);
var job = vec__47779;
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
var n__38346__auto___47948 = n;
var __47949 = (0);
while(true){
if((__47949 < n__38346__auto___47948)){
var G__47780_47950 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47780_47950) {
case "compute":
var c__41374__auto___47952 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47949,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (__47949,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function (state_47793){
var state_val_47794 = (state_47793[(1)]);
if((state_val_47794 === (1))){
var state_47793__$1 = state_47793;
var statearr_47795_47953 = state_47793__$1;
(statearr_47795_47953[(2)] = null);

(statearr_47795_47953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (2))){
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47793__$1,(4),jobs);
} else {
if((state_val_47794 === (3))){
var inst_47791 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47793__$1,inst_47791);
} else {
if((state_val_47794 === (4))){
var inst_47783 = (state_47793[(2)]);
var inst_47784 = process.call(null,inst_47783);
var state_47793__$1 = state_47793;
if(cljs.core.truth_(inst_47784)){
var statearr_47796_47954 = state_47793__$1;
(statearr_47796_47954[(1)] = (5));

} else {
var statearr_47797_47955 = state_47793__$1;
(statearr_47797_47955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (5))){
var state_47793__$1 = state_47793;
var statearr_47798_47956 = state_47793__$1;
(statearr_47798_47956[(2)] = null);

(statearr_47798_47956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (6))){
var state_47793__$1 = state_47793;
var statearr_47799_47957 = state_47793__$1;
(statearr_47799_47957[(2)] = null);

(statearr_47799_47957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (7))){
var inst_47789 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47800_47958 = state_47793__$1;
(statearr_47800_47958[(2)] = inst_47789);

(statearr_47800_47958[(1)] = (3));


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
});})(__47949,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
;
return ((function (__47949,switch__41353__auto__,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_47804 = [null,null,null,null,null,null,null];
(statearr_47804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__);

(statearr_47804[(1)] = (1));

return statearr_47804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1 = (function (state_47793){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47805){if((e47805 instanceof Object)){
var ex__41357__auto__ = e47805;
var statearr_47806_47959 = state_47793;
(statearr_47806_47959[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47960 = state_47793;
state_47793 = G__47960;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = function(state_47793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1.call(this,state_47793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__;
})()
;})(__47949,switch__41353__auto__,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
})();
var state__41376__auto__ = (function (){var statearr_47807 = f__41375__auto__.call(null);
(statearr_47807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___47952);

return statearr_47807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(__47949,c__41374__auto___47952,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
);


break;
case "async":
var c__41374__auto___47961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47949,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (__47949,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function (state_47820){
var state_val_47821 = (state_47820[(1)]);
if((state_val_47821 === (1))){
var state_47820__$1 = state_47820;
var statearr_47822_47962 = state_47820__$1;
(statearr_47822_47962[(2)] = null);

(statearr_47822_47962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (2))){
var state_47820__$1 = state_47820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47820__$1,(4),jobs);
} else {
if((state_val_47821 === (3))){
var inst_47818 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47820__$1,inst_47818);
} else {
if((state_val_47821 === (4))){
var inst_47810 = (state_47820[(2)]);
var inst_47811 = async.call(null,inst_47810);
var state_47820__$1 = state_47820;
if(cljs.core.truth_(inst_47811)){
var statearr_47823_47963 = state_47820__$1;
(statearr_47823_47963[(1)] = (5));

} else {
var statearr_47824_47964 = state_47820__$1;
(statearr_47824_47964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (5))){
var state_47820__$1 = state_47820;
var statearr_47825_47965 = state_47820__$1;
(statearr_47825_47965[(2)] = null);

(statearr_47825_47965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (6))){
var state_47820__$1 = state_47820;
var statearr_47826_47966 = state_47820__$1;
(statearr_47826_47966[(2)] = null);

(statearr_47826_47966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47821 === (7))){
var inst_47816 = (state_47820[(2)]);
var state_47820__$1 = state_47820;
var statearr_47827_47967 = state_47820__$1;
(statearr_47827_47967[(2)] = inst_47816);

(statearr_47827_47967[(1)] = (3));


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
});})(__47949,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
;
return ((function (__47949,switch__41353__auto__,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_47831 = [null,null,null,null,null,null,null];
(statearr_47831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__);

(statearr_47831[(1)] = (1));

return statearr_47831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1 = (function (state_47820){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47832){if((e47832 instanceof Object)){
var ex__41357__auto__ = e47832;
var statearr_47833_47968 = state_47820;
(statearr_47833_47968[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47969 = state_47820;
state_47820 = G__47969;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = function(state_47820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1.call(this,state_47820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__;
})()
;})(__47949,switch__41353__auto__,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
})();
var state__41376__auto__ = (function (){var statearr_47834 = f__41375__auto__.call(null);
(statearr_47834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___47961);

return statearr_47834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(__47949,c__41374__auto___47961,G__47780_47950,n__38346__auto___47948,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47970 = (__47949 + (1));
__47949 = G__47970;
continue;
} else {
}
break;
}

var c__41374__auto___47971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___47971,jobs,results,process,async){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___47971,jobs,results,process,async){
return (function (state_47856){
var state_val_47857 = (state_47856[(1)]);
if((state_val_47857 === (1))){
var state_47856__$1 = state_47856;
var statearr_47858_47972 = state_47856__$1;
(statearr_47858_47972[(2)] = null);

(statearr_47858_47972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47857 === (2))){
var state_47856__$1 = state_47856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47856__$1,(4),from);
} else {
if((state_val_47857 === (3))){
var inst_47854 = (state_47856[(2)]);
var state_47856__$1 = state_47856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47856__$1,inst_47854);
} else {
if((state_val_47857 === (4))){
var inst_47837 = (state_47856[(7)]);
var inst_47837__$1 = (state_47856[(2)]);
var inst_47838 = (inst_47837__$1 == null);
var state_47856__$1 = (function (){var statearr_47859 = state_47856;
(statearr_47859[(7)] = inst_47837__$1);

return statearr_47859;
})();
if(cljs.core.truth_(inst_47838)){
var statearr_47860_47973 = state_47856__$1;
(statearr_47860_47973[(1)] = (5));

} else {
var statearr_47861_47974 = state_47856__$1;
(statearr_47861_47974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47857 === (5))){
var inst_47840 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47856__$1 = state_47856;
var statearr_47862_47975 = state_47856__$1;
(statearr_47862_47975[(2)] = inst_47840);

(statearr_47862_47975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47857 === (6))){
var inst_47837 = (state_47856[(7)]);
var inst_47842 = (state_47856[(8)]);
var inst_47842__$1 = cljs.core.async.chan.call(null,(1));
var inst_47843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47844 = [inst_47837,inst_47842__$1];
var inst_47845 = (new cljs.core.PersistentVector(null,2,(5),inst_47843,inst_47844,null));
var state_47856__$1 = (function (){var statearr_47863 = state_47856;
(statearr_47863[(8)] = inst_47842__$1);

return statearr_47863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47856__$1,(8),jobs,inst_47845);
} else {
if((state_val_47857 === (7))){
var inst_47852 = (state_47856[(2)]);
var state_47856__$1 = state_47856;
var statearr_47864_47976 = state_47856__$1;
(statearr_47864_47976[(2)] = inst_47852);

(statearr_47864_47976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47857 === (8))){
var inst_47842 = (state_47856[(8)]);
var inst_47847 = (state_47856[(2)]);
var state_47856__$1 = (function (){var statearr_47865 = state_47856;
(statearr_47865[(9)] = inst_47847);

return statearr_47865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47856__$1,(9),results,inst_47842);
} else {
if((state_val_47857 === (9))){
var inst_47849 = (state_47856[(2)]);
var state_47856__$1 = (function (){var statearr_47866 = state_47856;
(statearr_47866[(10)] = inst_47849);

return statearr_47866;
})();
var statearr_47867_47977 = state_47856__$1;
(statearr_47867_47977[(2)] = null);

(statearr_47867_47977[(1)] = (2));


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
});})(c__41374__auto___47971,jobs,results,process,async))
;
return ((function (switch__41353__auto__,c__41374__auto___47971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_47871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__);

(statearr_47871[(1)] = (1));

return statearr_47871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1 = (function (state_47856){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47872){if((e47872 instanceof Object)){
var ex__41357__auto__ = e47872;
var statearr_47873_47978 = state_47856;
(statearr_47873_47978[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47979 = state_47856;
state_47856 = G__47979;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = function(state_47856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1.call(this,state_47856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___47971,jobs,results,process,async))
})();
var state__41376__auto__ = (function (){var statearr_47874 = f__41375__auto__.call(null);
(statearr_47874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___47971);

return statearr_47874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___47971,jobs,results,process,async))
);


var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__,jobs,results,process,async){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__,jobs,results,process,async){
return (function (state_47912){
var state_val_47913 = (state_47912[(1)]);
if((state_val_47913 === (7))){
var inst_47908 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
var statearr_47914_47980 = state_47912__$1;
(statearr_47914_47980[(2)] = inst_47908);

(statearr_47914_47980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (20))){
var state_47912__$1 = state_47912;
var statearr_47915_47981 = state_47912__$1;
(statearr_47915_47981[(2)] = null);

(statearr_47915_47981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (1))){
var state_47912__$1 = state_47912;
var statearr_47916_47982 = state_47912__$1;
(statearr_47916_47982[(2)] = null);

(statearr_47916_47982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (4))){
var inst_47877 = (state_47912[(7)]);
var inst_47877__$1 = (state_47912[(2)]);
var inst_47878 = (inst_47877__$1 == null);
var state_47912__$1 = (function (){var statearr_47917 = state_47912;
(statearr_47917[(7)] = inst_47877__$1);

return statearr_47917;
})();
if(cljs.core.truth_(inst_47878)){
var statearr_47918_47983 = state_47912__$1;
(statearr_47918_47983[(1)] = (5));

} else {
var statearr_47919_47984 = state_47912__$1;
(statearr_47919_47984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (15))){
var inst_47890 = (state_47912[(8)]);
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47912__$1,(18),to,inst_47890);
} else {
if((state_val_47913 === (21))){
var inst_47903 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
var statearr_47920_47985 = state_47912__$1;
(statearr_47920_47985[(2)] = inst_47903);

(statearr_47920_47985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (13))){
var inst_47905 = (state_47912[(2)]);
var state_47912__$1 = (function (){var statearr_47921 = state_47912;
(statearr_47921[(9)] = inst_47905);

return statearr_47921;
})();
var statearr_47922_47986 = state_47912__$1;
(statearr_47922_47986[(2)] = null);

(statearr_47922_47986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (6))){
var inst_47877 = (state_47912[(7)]);
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(11),inst_47877);
} else {
if((state_val_47913 === (17))){
var inst_47898 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
if(cljs.core.truth_(inst_47898)){
var statearr_47923_47987 = state_47912__$1;
(statearr_47923_47987[(1)] = (19));

} else {
var statearr_47924_47988 = state_47912__$1;
(statearr_47924_47988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (3))){
var inst_47910 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47912__$1,inst_47910);
} else {
if((state_val_47913 === (12))){
var inst_47887 = (state_47912[(10)]);
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(14),inst_47887);
} else {
if((state_val_47913 === (2))){
var state_47912__$1 = state_47912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47912__$1,(4),results);
} else {
if((state_val_47913 === (19))){
var state_47912__$1 = state_47912;
var statearr_47925_47989 = state_47912__$1;
(statearr_47925_47989[(2)] = null);

(statearr_47925_47989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (11))){
var inst_47887 = (state_47912[(2)]);
var state_47912__$1 = (function (){var statearr_47926 = state_47912;
(statearr_47926[(10)] = inst_47887);

return statearr_47926;
})();
var statearr_47927_47990 = state_47912__$1;
(statearr_47927_47990[(2)] = null);

(statearr_47927_47990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (9))){
var state_47912__$1 = state_47912;
var statearr_47928_47991 = state_47912__$1;
(statearr_47928_47991[(2)] = null);

(statearr_47928_47991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (5))){
var state_47912__$1 = state_47912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47929_47992 = state_47912__$1;
(statearr_47929_47992[(1)] = (8));

} else {
var statearr_47930_47993 = state_47912__$1;
(statearr_47930_47993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (14))){
var inst_47892 = (state_47912[(11)]);
var inst_47890 = (state_47912[(8)]);
var inst_47890__$1 = (state_47912[(2)]);
var inst_47891 = (inst_47890__$1 == null);
var inst_47892__$1 = cljs.core.not.call(null,inst_47891);
var state_47912__$1 = (function (){var statearr_47931 = state_47912;
(statearr_47931[(11)] = inst_47892__$1);

(statearr_47931[(8)] = inst_47890__$1);

return statearr_47931;
})();
if(inst_47892__$1){
var statearr_47932_47994 = state_47912__$1;
(statearr_47932_47994[(1)] = (15));

} else {
var statearr_47933_47995 = state_47912__$1;
(statearr_47933_47995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (16))){
var inst_47892 = (state_47912[(11)]);
var state_47912__$1 = state_47912;
var statearr_47934_47996 = state_47912__$1;
(statearr_47934_47996[(2)] = inst_47892);

(statearr_47934_47996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (10))){
var inst_47884 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
var statearr_47935_47997 = state_47912__$1;
(statearr_47935_47997[(2)] = inst_47884);

(statearr_47935_47997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (18))){
var inst_47895 = (state_47912[(2)]);
var state_47912__$1 = state_47912;
var statearr_47936_47998 = state_47912__$1;
(statearr_47936_47998[(2)] = inst_47895);

(statearr_47936_47998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47913 === (8))){
var inst_47881 = cljs.core.async.close_BANG_.call(null,to);
var state_47912__$1 = state_47912;
var statearr_47937_47999 = state_47912__$1;
(statearr_47937_47999[(2)] = inst_47881);

(statearr_47937_47999[(1)] = (10));


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
});})(c__41374__auto__,jobs,results,process,async))
;
return ((function (switch__41353__auto__,c__41374__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_47941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__);

(statearr_47941[(1)] = (1));

return statearr_47941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1 = (function (state_47912){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_47912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e47942){if((e47942 instanceof Object)){
var ex__41357__auto__ = e47942;
var statearr_47943_48000 = state_47912;
(statearr_47943_48000[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48001 = state_47912;
state_47912 = G__48001;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__ = function(state_47912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1.call(this,state_47912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__,jobs,results,process,async))
})();
var state__41376__auto__ = (function (){var statearr_47944 = f__41375__auto__.call(null);
(statearr_47944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_47944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__,jobs,results,process,async))
);

return c__41374__auto__;
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
var args48002 = [];
var len__38501__auto___48005 = arguments.length;
var i__38502__auto___48006 = (0);
while(true){
if((i__38502__auto___48006 < len__38501__auto___48005)){
args48002.push((arguments[i__38502__auto___48006]));

var G__48007 = (i__38502__auto___48006 + (1));
i__38502__auto___48006 = G__48007;
continue;
} else {
}
break;
}

var G__48004 = args48002.length;
switch (G__48004) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48002.length)].join('')));

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
var args48009 = [];
var len__38501__auto___48012 = arguments.length;
var i__38502__auto___48013 = (0);
while(true){
if((i__38502__auto___48013 < len__38501__auto___48012)){
args48009.push((arguments[i__38502__auto___48013]));

var G__48014 = (i__38502__auto___48013 + (1));
i__38502__auto___48013 = G__48014;
continue;
} else {
}
break;
}

var G__48011 = args48009.length;
switch (G__48011) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48009.length)].join('')));

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
var args48016 = [];
var len__38501__auto___48069 = arguments.length;
var i__38502__auto___48070 = (0);
while(true){
if((i__38502__auto___48070 < len__38501__auto___48069)){
args48016.push((arguments[i__38502__auto___48070]));

var G__48071 = (i__38502__auto___48070 + (1));
i__38502__auto___48070 = G__48071;
continue;
} else {
}
break;
}

var G__48018 = args48016.length;
switch (G__48018) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48016.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41374__auto___48073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___48073,tc,fc){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___48073,tc,fc){
return (function (state_48044){
var state_val_48045 = (state_48044[(1)]);
if((state_val_48045 === (7))){
var inst_48040 = (state_48044[(2)]);
var state_48044__$1 = state_48044;
var statearr_48046_48074 = state_48044__$1;
(statearr_48046_48074[(2)] = inst_48040);

(statearr_48046_48074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (1))){
var state_48044__$1 = state_48044;
var statearr_48047_48075 = state_48044__$1;
(statearr_48047_48075[(2)] = null);

(statearr_48047_48075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (4))){
var inst_48021 = (state_48044[(7)]);
var inst_48021__$1 = (state_48044[(2)]);
var inst_48022 = (inst_48021__$1 == null);
var state_48044__$1 = (function (){var statearr_48048 = state_48044;
(statearr_48048[(7)] = inst_48021__$1);

return statearr_48048;
})();
if(cljs.core.truth_(inst_48022)){
var statearr_48049_48076 = state_48044__$1;
(statearr_48049_48076[(1)] = (5));

} else {
var statearr_48050_48077 = state_48044__$1;
(statearr_48050_48077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (13))){
var state_48044__$1 = state_48044;
var statearr_48051_48078 = state_48044__$1;
(statearr_48051_48078[(2)] = null);

(statearr_48051_48078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (6))){
var inst_48021 = (state_48044[(7)]);
var inst_48027 = p.call(null,inst_48021);
var state_48044__$1 = state_48044;
if(cljs.core.truth_(inst_48027)){
var statearr_48052_48079 = state_48044__$1;
(statearr_48052_48079[(1)] = (9));

} else {
var statearr_48053_48080 = state_48044__$1;
(statearr_48053_48080[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (3))){
var inst_48042 = (state_48044[(2)]);
var state_48044__$1 = state_48044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48044__$1,inst_48042);
} else {
if((state_val_48045 === (12))){
var state_48044__$1 = state_48044;
var statearr_48054_48081 = state_48044__$1;
(statearr_48054_48081[(2)] = null);

(statearr_48054_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (2))){
var state_48044__$1 = state_48044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48044__$1,(4),ch);
} else {
if((state_val_48045 === (11))){
var inst_48021 = (state_48044[(7)]);
var inst_48031 = (state_48044[(2)]);
var state_48044__$1 = state_48044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48044__$1,(8),inst_48031,inst_48021);
} else {
if((state_val_48045 === (9))){
var state_48044__$1 = state_48044;
var statearr_48055_48082 = state_48044__$1;
(statearr_48055_48082[(2)] = tc);

(statearr_48055_48082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (5))){
var inst_48024 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48025 = cljs.core.async.close_BANG_.call(null,fc);
var state_48044__$1 = (function (){var statearr_48056 = state_48044;
(statearr_48056[(8)] = inst_48024);

return statearr_48056;
})();
var statearr_48057_48083 = state_48044__$1;
(statearr_48057_48083[(2)] = inst_48025);

(statearr_48057_48083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (14))){
var inst_48038 = (state_48044[(2)]);
var state_48044__$1 = state_48044;
var statearr_48058_48084 = state_48044__$1;
(statearr_48058_48084[(2)] = inst_48038);

(statearr_48058_48084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (10))){
var state_48044__$1 = state_48044;
var statearr_48059_48085 = state_48044__$1;
(statearr_48059_48085[(2)] = fc);

(statearr_48059_48085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48045 === (8))){
var inst_48033 = (state_48044[(2)]);
var state_48044__$1 = state_48044;
if(cljs.core.truth_(inst_48033)){
var statearr_48060_48086 = state_48044__$1;
(statearr_48060_48086[(1)] = (12));

} else {
var statearr_48061_48087 = state_48044__$1;
(statearr_48061_48087[(1)] = (13));

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
});})(c__41374__auto___48073,tc,fc))
;
return ((function (switch__41353__auto__,c__41374__auto___48073,tc,fc){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_48065 = [null,null,null,null,null,null,null,null,null];
(statearr_48065[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_48065[(1)] = (1));

return statearr_48065;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_48044){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_48044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e48066){if((e48066 instanceof Object)){
var ex__41357__auto__ = e48066;
var statearr_48067_48088 = state_48044;
(statearr_48067_48088[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48089 = state_48044;
state_48044 = G__48089;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_48044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_48044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___48073,tc,fc))
})();
var state__41376__auto__ = (function (){var statearr_48068 = f__41375__auto__.call(null);
(statearr_48068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___48073);

return statearr_48068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___48073,tc,fc))
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
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_48153){
var state_val_48154 = (state_48153[(1)]);
if((state_val_48154 === (7))){
var inst_48149 = (state_48153[(2)]);
var state_48153__$1 = state_48153;
var statearr_48155_48176 = state_48153__$1;
(statearr_48155_48176[(2)] = inst_48149);

(statearr_48155_48176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (1))){
var inst_48133 = init;
var state_48153__$1 = (function (){var statearr_48156 = state_48153;
(statearr_48156[(7)] = inst_48133);

return statearr_48156;
})();
var statearr_48157_48177 = state_48153__$1;
(statearr_48157_48177[(2)] = null);

(statearr_48157_48177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (4))){
var inst_48136 = (state_48153[(8)]);
var inst_48136__$1 = (state_48153[(2)]);
var inst_48137 = (inst_48136__$1 == null);
var state_48153__$1 = (function (){var statearr_48158 = state_48153;
(statearr_48158[(8)] = inst_48136__$1);

return statearr_48158;
})();
if(cljs.core.truth_(inst_48137)){
var statearr_48159_48178 = state_48153__$1;
(statearr_48159_48178[(1)] = (5));

} else {
var statearr_48160_48179 = state_48153__$1;
(statearr_48160_48179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (6))){
var inst_48140 = (state_48153[(9)]);
var inst_48136 = (state_48153[(8)]);
var inst_48133 = (state_48153[(7)]);
var inst_48140__$1 = f.call(null,inst_48133,inst_48136);
var inst_48141 = cljs.core.reduced_QMARK_.call(null,inst_48140__$1);
var state_48153__$1 = (function (){var statearr_48161 = state_48153;
(statearr_48161[(9)] = inst_48140__$1);

return statearr_48161;
})();
if(inst_48141){
var statearr_48162_48180 = state_48153__$1;
(statearr_48162_48180[(1)] = (8));

} else {
var statearr_48163_48181 = state_48153__$1;
(statearr_48163_48181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (3))){
var inst_48151 = (state_48153[(2)]);
var state_48153__$1 = state_48153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48153__$1,inst_48151);
} else {
if((state_val_48154 === (2))){
var state_48153__$1 = state_48153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48153__$1,(4),ch);
} else {
if((state_val_48154 === (9))){
var inst_48140 = (state_48153[(9)]);
var inst_48133 = inst_48140;
var state_48153__$1 = (function (){var statearr_48164 = state_48153;
(statearr_48164[(7)] = inst_48133);

return statearr_48164;
})();
var statearr_48165_48182 = state_48153__$1;
(statearr_48165_48182[(2)] = null);

(statearr_48165_48182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (5))){
var inst_48133 = (state_48153[(7)]);
var state_48153__$1 = state_48153;
var statearr_48166_48183 = state_48153__$1;
(statearr_48166_48183[(2)] = inst_48133);

(statearr_48166_48183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (10))){
var inst_48147 = (state_48153[(2)]);
var state_48153__$1 = state_48153;
var statearr_48167_48184 = state_48153__$1;
(statearr_48167_48184[(2)] = inst_48147);

(statearr_48167_48184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48154 === (8))){
var inst_48140 = (state_48153[(9)]);
var inst_48143 = cljs.core.deref.call(null,inst_48140);
var state_48153__$1 = state_48153;
var statearr_48168_48185 = state_48153__$1;
(statearr_48168_48185[(2)] = inst_48143);

(statearr_48168_48185[(1)] = (10));


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
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41354__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41354__auto____0 = (function (){
var statearr_48172 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48172[(0)] = cljs$core$async$reduce_$_state_machine__41354__auto__);

(statearr_48172[(1)] = (1));

return statearr_48172;
});
var cljs$core$async$reduce_$_state_machine__41354__auto____1 = (function (state_48153){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_48153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e48173){if((e48173 instanceof Object)){
var ex__41357__auto__ = e48173;
var statearr_48174_48186 = state_48153;
(statearr_48174_48186[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48187 = state_48153;
state_48153 = G__48187;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41354__auto__ = function(state_48153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41354__auto____1.call(this,state_48153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41354__auto____0;
cljs$core$async$reduce_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41354__auto____1;
return cljs$core$async$reduce_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_48175 = f__41375__auto__.call(null);
(statearr_48175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_48175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
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
var args48188 = [];
var len__38501__auto___48240 = arguments.length;
var i__38502__auto___48241 = (0);
while(true){
if((i__38502__auto___48241 < len__38501__auto___48240)){
args48188.push((arguments[i__38502__auto___48241]));

var G__48242 = (i__38502__auto___48241 + (1));
i__38502__auto___48241 = G__48242;
continue;
} else {
}
break;
}

var G__48190 = args48188.length;
switch (G__48190) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48188.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_48215){
var state_val_48216 = (state_48215[(1)]);
if((state_val_48216 === (7))){
var inst_48197 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48217_48244 = state_48215__$1;
(statearr_48217_48244[(2)] = inst_48197);

(statearr_48217_48244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (1))){
var inst_48191 = cljs.core.seq.call(null,coll);
var inst_48192 = inst_48191;
var state_48215__$1 = (function (){var statearr_48218 = state_48215;
(statearr_48218[(7)] = inst_48192);

return statearr_48218;
})();
var statearr_48219_48245 = state_48215__$1;
(statearr_48219_48245[(2)] = null);

(statearr_48219_48245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (4))){
var inst_48192 = (state_48215[(7)]);
var inst_48195 = cljs.core.first.call(null,inst_48192);
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48215__$1,(7),ch,inst_48195);
} else {
if((state_val_48216 === (13))){
var inst_48209 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48220_48246 = state_48215__$1;
(statearr_48220_48246[(2)] = inst_48209);

(statearr_48220_48246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (6))){
var inst_48200 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
if(cljs.core.truth_(inst_48200)){
var statearr_48221_48247 = state_48215__$1;
(statearr_48221_48247[(1)] = (8));

} else {
var statearr_48222_48248 = state_48215__$1;
(statearr_48222_48248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (3))){
var inst_48213 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48215__$1,inst_48213);
} else {
if((state_val_48216 === (12))){
var state_48215__$1 = state_48215;
var statearr_48223_48249 = state_48215__$1;
(statearr_48223_48249[(2)] = null);

(statearr_48223_48249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (2))){
var inst_48192 = (state_48215[(7)]);
var state_48215__$1 = state_48215;
if(cljs.core.truth_(inst_48192)){
var statearr_48224_48250 = state_48215__$1;
(statearr_48224_48250[(1)] = (4));

} else {
var statearr_48225_48251 = state_48215__$1;
(statearr_48225_48251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (11))){
var inst_48206 = cljs.core.async.close_BANG_.call(null,ch);
var state_48215__$1 = state_48215;
var statearr_48226_48252 = state_48215__$1;
(statearr_48226_48252[(2)] = inst_48206);

(statearr_48226_48252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (9))){
var state_48215__$1 = state_48215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48227_48253 = state_48215__$1;
(statearr_48227_48253[(1)] = (11));

} else {
var statearr_48228_48254 = state_48215__$1;
(statearr_48228_48254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (5))){
var inst_48192 = (state_48215[(7)]);
var state_48215__$1 = state_48215;
var statearr_48229_48255 = state_48215__$1;
(statearr_48229_48255[(2)] = inst_48192);

(statearr_48229_48255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (10))){
var inst_48211 = (state_48215[(2)]);
var state_48215__$1 = state_48215;
var statearr_48230_48256 = state_48215__$1;
(statearr_48230_48256[(2)] = inst_48211);

(statearr_48230_48256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48216 === (8))){
var inst_48192 = (state_48215[(7)]);
var inst_48202 = cljs.core.next.call(null,inst_48192);
var inst_48192__$1 = inst_48202;
var state_48215__$1 = (function (){var statearr_48231 = state_48215;
(statearr_48231[(7)] = inst_48192__$1);

return statearr_48231;
})();
var statearr_48232_48257 = state_48215__$1;
(statearr_48232_48257[(2)] = null);

(statearr_48232_48257[(1)] = (2));


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
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_48236 = [null,null,null,null,null,null,null,null];
(statearr_48236[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_48236[(1)] = (1));

return statearr_48236;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_48215){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_48215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e48237){if((e48237 instanceof Object)){
var ex__41357__auto__ = e48237;
var statearr_48238_48258 = state_48215;
(statearr_48238_48258[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48259 = state_48215;
state_48215 = G__48259;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_48215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_48215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_48239 = f__41375__auto__.call(null);
(statearr_48239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_48239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
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
var x__38098__auto__ = (((_ == null))?null:_);
var m__38099__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,_);
} else {
var m__38099__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,_);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__38099__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,ch);
} else {
var m__38099__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,ch);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m);
} else {
var m__38099__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48481 = (function (mult,ch,cs,meta48482){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta48482 = meta48482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48483,meta48482__$1){
var self__ = this;
var _48483__$1 = this;
return (new cljs.core.async.t_cljs$core$async48481(self__.mult,self__.ch,self__.cs,meta48482__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48483){
var self__ = this;
var _48483__$1 = this;
return self__.meta48482;
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48482","meta48482",1931804513,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48481";

cljs.core.async.t_cljs$core$async48481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async48481");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48481(mult__$1,ch__$1,cs__$1,meta48482){
return (new cljs.core.async.t_cljs$core$async48481(mult__$1,ch__$1,cs__$1,meta48482));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48481(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41374__auto___48702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___48702,cs,m,dchan,dctr,done){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___48702,cs,m,dchan,dctr,done){
return (function (state_48614){
var state_val_48615 = (state_48614[(1)]);
if((state_val_48615 === (7))){
var inst_48610 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48616_48703 = state_48614__$1;
(statearr_48616_48703[(2)] = inst_48610);

(statearr_48616_48703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (20))){
var inst_48515 = (state_48614[(7)]);
var inst_48525 = cljs.core.first.call(null,inst_48515);
var inst_48526 = cljs.core.nth.call(null,inst_48525,(0),null);
var inst_48527 = cljs.core.nth.call(null,inst_48525,(1),null);
var state_48614__$1 = (function (){var statearr_48617 = state_48614;
(statearr_48617[(8)] = inst_48526);

return statearr_48617;
})();
if(cljs.core.truth_(inst_48527)){
var statearr_48618_48704 = state_48614__$1;
(statearr_48618_48704[(1)] = (22));

} else {
var statearr_48619_48705 = state_48614__$1;
(statearr_48619_48705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (27))){
var inst_48486 = (state_48614[(9)]);
var inst_48557 = (state_48614[(10)]);
var inst_48555 = (state_48614[(11)]);
var inst_48562 = (state_48614[(12)]);
var inst_48562__$1 = cljs.core._nth.call(null,inst_48555,inst_48557);
var inst_48563 = cljs.core.async.put_BANG_.call(null,inst_48562__$1,inst_48486,done);
var state_48614__$1 = (function (){var statearr_48620 = state_48614;
(statearr_48620[(12)] = inst_48562__$1);

return statearr_48620;
})();
if(cljs.core.truth_(inst_48563)){
var statearr_48621_48706 = state_48614__$1;
(statearr_48621_48706[(1)] = (30));

} else {
var statearr_48622_48707 = state_48614__$1;
(statearr_48622_48707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (1))){
var state_48614__$1 = state_48614;
var statearr_48623_48708 = state_48614__$1;
(statearr_48623_48708[(2)] = null);

(statearr_48623_48708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (24))){
var inst_48515 = (state_48614[(7)]);
var inst_48532 = (state_48614[(2)]);
var inst_48533 = cljs.core.next.call(null,inst_48515);
var inst_48495 = inst_48533;
var inst_48496 = null;
var inst_48497 = (0);
var inst_48498 = (0);
var state_48614__$1 = (function (){var statearr_48624 = state_48614;
(statearr_48624[(13)] = inst_48495);

(statearr_48624[(14)] = inst_48496);

(statearr_48624[(15)] = inst_48498);

(statearr_48624[(16)] = inst_48532);

(statearr_48624[(17)] = inst_48497);

return statearr_48624;
})();
var statearr_48625_48709 = state_48614__$1;
(statearr_48625_48709[(2)] = null);

(statearr_48625_48709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (39))){
var state_48614__$1 = state_48614;
var statearr_48629_48710 = state_48614__$1;
(statearr_48629_48710[(2)] = null);

(statearr_48629_48710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (4))){
var inst_48486 = (state_48614[(9)]);
var inst_48486__$1 = (state_48614[(2)]);
var inst_48487 = (inst_48486__$1 == null);
var state_48614__$1 = (function (){var statearr_48630 = state_48614;
(statearr_48630[(9)] = inst_48486__$1);

return statearr_48630;
})();
if(cljs.core.truth_(inst_48487)){
var statearr_48631_48711 = state_48614__$1;
(statearr_48631_48711[(1)] = (5));

} else {
var statearr_48632_48712 = state_48614__$1;
(statearr_48632_48712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (15))){
var inst_48495 = (state_48614[(13)]);
var inst_48496 = (state_48614[(14)]);
var inst_48498 = (state_48614[(15)]);
var inst_48497 = (state_48614[(17)]);
var inst_48511 = (state_48614[(2)]);
var inst_48512 = (inst_48498 + (1));
var tmp48626 = inst_48495;
var tmp48627 = inst_48496;
var tmp48628 = inst_48497;
var inst_48495__$1 = tmp48626;
var inst_48496__$1 = tmp48627;
var inst_48497__$1 = tmp48628;
var inst_48498__$1 = inst_48512;
var state_48614__$1 = (function (){var statearr_48633 = state_48614;
(statearr_48633[(13)] = inst_48495__$1);

(statearr_48633[(14)] = inst_48496__$1);

(statearr_48633[(15)] = inst_48498__$1);

(statearr_48633[(17)] = inst_48497__$1);

(statearr_48633[(18)] = inst_48511);

return statearr_48633;
})();
var statearr_48634_48713 = state_48614__$1;
(statearr_48634_48713[(2)] = null);

(statearr_48634_48713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (21))){
var inst_48536 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48638_48714 = state_48614__$1;
(statearr_48638_48714[(2)] = inst_48536);

(statearr_48638_48714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (31))){
var inst_48562 = (state_48614[(12)]);
var inst_48566 = done.call(null,null);
var inst_48567 = cljs.core.async.untap_STAR_.call(null,m,inst_48562);
var state_48614__$1 = (function (){var statearr_48639 = state_48614;
(statearr_48639[(19)] = inst_48566);

return statearr_48639;
})();
var statearr_48640_48715 = state_48614__$1;
(statearr_48640_48715[(2)] = inst_48567);

(statearr_48640_48715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (32))){
var inst_48556 = (state_48614[(20)]);
var inst_48557 = (state_48614[(10)]);
var inst_48555 = (state_48614[(11)]);
var inst_48554 = (state_48614[(21)]);
var inst_48569 = (state_48614[(2)]);
var inst_48570 = (inst_48557 + (1));
var tmp48635 = inst_48556;
var tmp48636 = inst_48555;
var tmp48637 = inst_48554;
var inst_48554__$1 = tmp48637;
var inst_48555__$1 = tmp48636;
var inst_48556__$1 = tmp48635;
var inst_48557__$1 = inst_48570;
var state_48614__$1 = (function (){var statearr_48641 = state_48614;
(statearr_48641[(22)] = inst_48569);

(statearr_48641[(20)] = inst_48556__$1);

(statearr_48641[(10)] = inst_48557__$1);

(statearr_48641[(11)] = inst_48555__$1);

(statearr_48641[(21)] = inst_48554__$1);

return statearr_48641;
})();
var statearr_48642_48716 = state_48614__$1;
(statearr_48642_48716[(2)] = null);

(statearr_48642_48716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (40))){
var inst_48582 = (state_48614[(23)]);
var inst_48586 = done.call(null,null);
var inst_48587 = cljs.core.async.untap_STAR_.call(null,m,inst_48582);
var state_48614__$1 = (function (){var statearr_48643 = state_48614;
(statearr_48643[(24)] = inst_48586);

return statearr_48643;
})();
var statearr_48644_48717 = state_48614__$1;
(statearr_48644_48717[(2)] = inst_48587);

(statearr_48644_48717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (33))){
var inst_48573 = (state_48614[(25)]);
var inst_48575 = cljs.core.chunked_seq_QMARK_.call(null,inst_48573);
var state_48614__$1 = state_48614;
if(inst_48575){
var statearr_48645_48718 = state_48614__$1;
(statearr_48645_48718[(1)] = (36));

} else {
var statearr_48646_48719 = state_48614__$1;
(statearr_48646_48719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (13))){
var inst_48505 = (state_48614[(26)]);
var inst_48508 = cljs.core.async.close_BANG_.call(null,inst_48505);
var state_48614__$1 = state_48614;
var statearr_48647_48720 = state_48614__$1;
(statearr_48647_48720[(2)] = inst_48508);

(statearr_48647_48720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (22))){
var inst_48526 = (state_48614[(8)]);
var inst_48529 = cljs.core.async.close_BANG_.call(null,inst_48526);
var state_48614__$1 = state_48614;
var statearr_48648_48721 = state_48614__$1;
(statearr_48648_48721[(2)] = inst_48529);

(statearr_48648_48721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (36))){
var inst_48573 = (state_48614[(25)]);
var inst_48577 = cljs.core.chunk_first.call(null,inst_48573);
var inst_48578 = cljs.core.chunk_rest.call(null,inst_48573);
var inst_48579 = cljs.core.count.call(null,inst_48577);
var inst_48554 = inst_48578;
var inst_48555 = inst_48577;
var inst_48556 = inst_48579;
var inst_48557 = (0);
var state_48614__$1 = (function (){var statearr_48649 = state_48614;
(statearr_48649[(20)] = inst_48556);

(statearr_48649[(10)] = inst_48557);

(statearr_48649[(11)] = inst_48555);

(statearr_48649[(21)] = inst_48554);

return statearr_48649;
})();
var statearr_48650_48722 = state_48614__$1;
(statearr_48650_48722[(2)] = null);

(statearr_48650_48722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (41))){
var inst_48573 = (state_48614[(25)]);
var inst_48589 = (state_48614[(2)]);
var inst_48590 = cljs.core.next.call(null,inst_48573);
var inst_48554 = inst_48590;
var inst_48555 = null;
var inst_48556 = (0);
var inst_48557 = (0);
var state_48614__$1 = (function (){var statearr_48651 = state_48614;
(statearr_48651[(20)] = inst_48556);

(statearr_48651[(27)] = inst_48589);

(statearr_48651[(10)] = inst_48557);

(statearr_48651[(11)] = inst_48555);

(statearr_48651[(21)] = inst_48554);

return statearr_48651;
})();
var statearr_48652_48723 = state_48614__$1;
(statearr_48652_48723[(2)] = null);

(statearr_48652_48723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (43))){
var state_48614__$1 = state_48614;
var statearr_48653_48724 = state_48614__$1;
(statearr_48653_48724[(2)] = null);

(statearr_48653_48724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (29))){
var inst_48598 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48654_48725 = state_48614__$1;
(statearr_48654_48725[(2)] = inst_48598);

(statearr_48654_48725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (44))){
var inst_48607 = (state_48614[(2)]);
var state_48614__$1 = (function (){var statearr_48655 = state_48614;
(statearr_48655[(28)] = inst_48607);

return statearr_48655;
})();
var statearr_48656_48726 = state_48614__$1;
(statearr_48656_48726[(2)] = null);

(statearr_48656_48726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (6))){
var inst_48546 = (state_48614[(29)]);
var inst_48545 = cljs.core.deref.call(null,cs);
var inst_48546__$1 = cljs.core.keys.call(null,inst_48545);
var inst_48547 = cljs.core.count.call(null,inst_48546__$1);
var inst_48548 = cljs.core.reset_BANG_.call(null,dctr,inst_48547);
var inst_48553 = cljs.core.seq.call(null,inst_48546__$1);
var inst_48554 = inst_48553;
var inst_48555 = null;
var inst_48556 = (0);
var inst_48557 = (0);
var state_48614__$1 = (function (){var statearr_48657 = state_48614;
(statearr_48657[(20)] = inst_48556);

(statearr_48657[(10)] = inst_48557);

(statearr_48657[(11)] = inst_48555);

(statearr_48657[(21)] = inst_48554);

(statearr_48657[(29)] = inst_48546__$1);

(statearr_48657[(30)] = inst_48548);

return statearr_48657;
})();
var statearr_48658_48727 = state_48614__$1;
(statearr_48658_48727[(2)] = null);

(statearr_48658_48727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (28))){
var inst_48573 = (state_48614[(25)]);
var inst_48554 = (state_48614[(21)]);
var inst_48573__$1 = cljs.core.seq.call(null,inst_48554);
var state_48614__$1 = (function (){var statearr_48659 = state_48614;
(statearr_48659[(25)] = inst_48573__$1);

return statearr_48659;
})();
if(inst_48573__$1){
var statearr_48660_48728 = state_48614__$1;
(statearr_48660_48728[(1)] = (33));

} else {
var statearr_48661_48729 = state_48614__$1;
(statearr_48661_48729[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (25))){
var inst_48556 = (state_48614[(20)]);
var inst_48557 = (state_48614[(10)]);
var inst_48559 = (inst_48557 < inst_48556);
var inst_48560 = inst_48559;
var state_48614__$1 = state_48614;
if(cljs.core.truth_(inst_48560)){
var statearr_48662_48730 = state_48614__$1;
(statearr_48662_48730[(1)] = (27));

} else {
var statearr_48663_48731 = state_48614__$1;
(statearr_48663_48731[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (34))){
var state_48614__$1 = state_48614;
var statearr_48664_48732 = state_48614__$1;
(statearr_48664_48732[(2)] = null);

(statearr_48664_48732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (17))){
var state_48614__$1 = state_48614;
var statearr_48665_48733 = state_48614__$1;
(statearr_48665_48733[(2)] = null);

(statearr_48665_48733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (3))){
var inst_48612 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48614__$1,inst_48612);
} else {
if((state_val_48615 === (12))){
var inst_48541 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48666_48734 = state_48614__$1;
(statearr_48666_48734[(2)] = inst_48541);

(statearr_48666_48734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (2))){
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48614__$1,(4),ch);
} else {
if((state_val_48615 === (23))){
var state_48614__$1 = state_48614;
var statearr_48667_48735 = state_48614__$1;
(statearr_48667_48735[(2)] = null);

(statearr_48667_48735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (35))){
var inst_48596 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48668_48736 = state_48614__$1;
(statearr_48668_48736[(2)] = inst_48596);

(statearr_48668_48736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (19))){
var inst_48515 = (state_48614[(7)]);
var inst_48519 = cljs.core.chunk_first.call(null,inst_48515);
var inst_48520 = cljs.core.chunk_rest.call(null,inst_48515);
var inst_48521 = cljs.core.count.call(null,inst_48519);
var inst_48495 = inst_48520;
var inst_48496 = inst_48519;
var inst_48497 = inst_48521;
var inst_48498 = (0);
var state_48614__$1 = (function (){var statearr_48669 = state_48614;
(statearr_48669[(13)] = inst_48495);

(statearr_48669[(14)] = inst_48496);

(statearr_48669[(15)] = inst_48498);

(statearr_48669[(17)] = inst_48497);

return statearr_48669;
})();
var statearr_48670_48737 = state_48614__$1;
(statearr_48670_48737[(2)] = null);

(statearr_48670_48737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (11))){
var inst_48495 = (state_48614[(13)]);
var inst_48515 = (state_48614[(7)]);
var inst_48515__$1 = cljs.core.seq.call(null,inst_48495);
var state_48614__$1 = (function (){var statearr_48671 = state_48614;
(statearr_48671[(7)] = inst_48515__$1);

return statearr_48671;
})();
if(inst_48515__$1){
var statearr_48672_48738 = state_48614__$1;
(statearr_48672_48738[(1)] = (16));

} else {
var statearr_48673_48739 = state_48614__$1;
(statearr_48673_48739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (9))){
var inst_48543 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48674_48740 = state_48614__$1;
(statearr_48674_48740[(2)] = inst_48543);

(statearr_48674_48740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (5))){
var inst_48493 = cljs.core.deref.call(null,cs);
var inst_48494 = cljs.core.seq.call(null,inst_48493);
var inst_48495 = inst_48494;
var inst_48496 = null;
var inst_48497 = (0);
var inst_48498 = (0);
var state_48614__$1 = (function (){var statearr_48675 = state_48614;
(statearr_48675[(13)] = inst_48495);

(statearr_48675[(14)] = inst_48496);

(statearr_48675[(15)] = inst_48498);

(statearr_48675[(17)] = inst_48497);

return statearr_48675;
})();
var statearr_48676_48741 = state_48614__$1;
(statearr_48676_48741[(2)] = null);

(statearr_48676_48741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (14))){
var state_48614__$1 = state_48614;
var statearr_48677_48742 = state_48614__$1;
(statearr_48677_48742[(2)] = null);

(statearr_48677_48742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (45))){
var inst_48604 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48678_48743 = state_48614__$1;
(statearr_48678_48743[(2)] = inst_48604);

(statearr_48678_48743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (26))){
var inst_48546 = (state_48614[(29)]);
var inst_48600 = (state_48614[(2)]);
var inst_48601 = cljs.core.seq.call(null,inst_48546);
var state_48614__$1 = (function (){var statearr_48679 = state_48614;
(statearr_48679[(31)] = inst_48600);

return statearr_48679;
})();
if(inst_48601){
var statearr_48680_48744 = state_48614__$1;
(statearr_48680_48744[(1)] = (42));

} else {
var statearr_48681_48745 = state_48614__$1;
(statearr_48681_48745[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (16))){
var inst_48515 = (state_48614[(7)]);
var inst_48517 = cljs.core.chunked_seq_QMARK_.call(null,inst_48515);
var state_48614__$1 = state_48614;
if(inst_48517){
var statearr_48682_48746 = state_48614__$1;
(statearr_48682_48746[(1)] = (19));

} else {
var statearr_48683_48747 = state_48614__$1;
(statearr_48683_48747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (38))){
var inst_48593 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48684_48748 = state_48614__$1;
(statearr_48684_48748[(2)] = inst_48593);

(statearr_48684_48748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (30))){
var state_48614__$1 = state_48614;
var statearr_48685_48749 = state_48614__$1;
(statearr_48685_48749[(2)] = null);

(statearr_48685_48749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (10))){
var inst_48496 = (state_48614[(14)]);
var inst_48498 = (state_48614[(15)]);
var inst_48504 = cljs.core._nth.call(null,inst_48496,inst_48498);
var inst_48505 = cljs.core.nth.call(null,inst_48504,(0),null);
var inst_48506 = cljs.core.nth.call(null,inst_48504,(1),null);
var state_48614__$1 = (function (){var statearr_48686 = state_48614;
(statearr_48686[(26)] = inst_48505);

return statearr_48686;
})();
if(cljs.core.truth_(inst_48506)){
var statearr_48687_48750 = state_48614__$1;
(statearr_48687_48750[(1)] = (13));

} else {
var statearr_48688_48751 = state_48614__$1;
(statearr_48688_48751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (18))){
var inst_48539 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48689_48752 = state_48614__$1;
(statearr_48689_48752[(2)] = inst_48539);

(statearr_48689_48752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (42))){
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48614__$1,(45),dchan);
} else {
if((state_val_48615 === (37))){
var inst_48486 = (state_48614[(9)]);
var inst_48573 = (state_48614[(25)]);
var inst_48582 = (state_48614[(23)]);
var inst_48582__$1 = cljs.core.first.call(null,inst_48573);
var inst_48583 = cljs.core.async.put_BANG_.call(null,inst_48582__$1,inst_48486,done);
var state_48614__$1 = (function (){var statearr_48690 = state_48614;
(statearr_48690[(23)] = inst_48582__$1);

return statearr_48690;
})();
if(cljs.core.truth_(inst_48583)){
var statearr_48691_48753 = state_48614__$1;
(statearr_48691_48753[(1)] = (39));

} else {
var statearr_48692_48754 = state_48614__$1;
(statearr_48692_48754[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (8))){
var inst_48498 = (state_48614[(15)]);
var inst_48497 = (state_48614[(17)]);
var inst_48500 = (inst_48498 < inst_48497);
var inst_48501 = inst_48500;
var state_48614__$1 = state_48614;
if(cljs.core.truth_(inst_48501)){
var statearr_48693_48755 = state_48614__$1;
(statearr_48693_48755[(1)] = (10));

} else {
var statearr_48694_48756 = state_48614__$1;
(statearr_48694_48756[(1)] = (11));

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
});})(c__41374__auto___48702,cs,m,dchan,dctr,done))
;
return ((function (switch__41353__auto__,c__41374__auto___48702,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41354__auto__ = null;
var cljs$core$async$mult_$_state_machine__41354__auto____0 = (function (){
var statearr_48698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48698[(0)] = cljs$core$async$mult_$_state_machine__41354__auto__);

(statearr_48698[(1)] = (1));

return statearr_48698;
});
var cljs$core$async$mult_$_state_machine__41354__auto____1 = (function (state_48614){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_48614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e48699){if((e48699 instanceof Object)){
var ex__41357__auto__ = e48699;
var statearr_48700_48757 = state_48614;
(statearr_48700_48757[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48758 = state_48614;
state_48614 = G__48758;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41354__auto__ = function(state_48614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41354__auto____1.call(this,state_48614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41354__auto____0;
cljs$core$async$mult_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41354__auto____1;
return cljs$core$async$mult_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___48702,cs,m,dchan,dctr,done))
})();
var state__41376__auto__ = (function (){var statearr_48701 = f__41375__auto__.call(null);
(statearr_48701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___48702);

return statearr_48701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___48702,cs,m,dchan,dctr,done))
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
var args48759 = [];
var len__38501__auto___48762 = arguments.length;
var i__38502__auto___48763 = (0);
while(true){
if((i__38502__auto___48763 < len__38501__auto___48762)){
args48759.push((arguments[i__38502__auto___48763]));

var G__48764 = (i__38502__auto___48763 + (1));
i__38502__auto___48763 = G__48764;
continue;
} else {
}
break;
}

var G__48761 = args48759.length;
switch (G__48761) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48759.length)].join('')));

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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,ch);
} else {
var m__38099__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,ch);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,ch);
} else {
var m__38099__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,ch);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m);
} else {
var m__38099__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,state_map);
} else {
var m__38099__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,state_map);
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
var x__38098__auto__ = (((m == null))?null:m);
var m__38099__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,m,mode);
} else {
var m__38099__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38508__auto__ = [];
var len__38501__auto___48776 = arguments.length;
var i__38502__auto___48777 = (0);
while(true){
if((i__38502__auto___48777 < len__38501__auto___48776)){
args__38508__auto__.push((arguments[i__38502__auto___48777]));

var G__48778 = (i__38502__auto___48777 + (1));
i__38502__auto___48777 = G__48778;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((3) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38509__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48770){
var map__48771 = p__48770;
var map__48771__$1 = ((((!((map__48771 == null)))?((((map__48771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48771):map__48771);
var opts = map__48771__$1;
var statearr_48773_48779 = state;
(statearr_48773_48779[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48771,map__48771__$1,opts){
return (function (val){
var statearr_48774_48780 = state;
(statearr_48774_48780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48771,map__48771__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48775_48781 = state;
(statearr_48775_48781[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48766){
var G__48767 = cljs.core.first.call(null,seq48766);
var seq48766__$1 = cljs.core.next.call(null,seq48766);
var G__48768 = cljs.core.first.call(null,seq48766__$1);
var seq48766__$2 = cljs.core.next.call(null,seq48766__$1);
var G__48769 = cljs.core.first.call(null,seq48766__$2);
var seq48766__$3 = cljs.core.next.call(null,seq48766__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48767,G__48768,G__48769,seq48766__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48945 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48946){
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
this.meta48946 = meta48946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48947,meta48946__$1){
var self__ = this;
var _48947__$1 = this;
return (new cljs.core.async.t_cljs$core$async48945(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48947){
var self__ = this;
var _48947__$1 = this;
return self__.meta48946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48945.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48946","meta48946",-585914503,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48945";

cljs.core.async.t_cljs$core$async48945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async48945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48946){
return (new cljs.core.async.t_cljs$core$async48945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48945(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41374__auto___49108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49045){
var state_val_49046 = (state_49045[(1)]);
if((state_val_49046 === (7))){
var inst_48963 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
var statearr_49047_49109 = state_49045__$1;
(statearr_49047_49109[(2)] = inst_48963);

(statearr_49047_49109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (20))){
var inst_48975 = (state_49045[(7)]);
var state_49045__$1 = state_49045;
var statearr_49048_49110 = state_49045__$1;
(statearr_49048_49110[(2)] = inst_48975);

(statearr_49048_49110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (27))){
var state_49045__$1 = state_49045;
var statearr_49049_49111 = state_49045__$1;
(statearr_49049_49111[(2)] = null);

(statearr_49049_49111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (1))){
var inst_48951 = (state_49045[(8)]);
var inst_48951__$1 = calc_state.call(null);
var inst_48953 = (inst_48951__$1 == null);
var inst_48954 = cljs.core.not.call(null,inst_48953);
var state_49045__$1 = (function (){var statearr_49050 = state_49045;
(statearr_49050[(8)] = inst_48951__$1);

return statearr_49050;
})();
if(inst_48954){
var statearr_49051_49112 = state_49045__$1;
(statearr_49051_49112[(1)] = (2));

} else {
var statearr_49052_49113 = state_49045__$1;
(statearr_49052_49113[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (24))){
var inst_49019 = (state_49045[(9)]);
var inst_49005 = (state_49045[(10)]);
var inst_48998 = (state_49045[(11)]);
var inst_49019__$1 = inst_48998.call(null,inst_49005);
var state_49045__$1 = (function (){var statearr_49053 = state_49045;
(statearr_49053[(9)] = inst_49019__$1);

return statearr_49053;
})();
if(cljs.core.truth_(inst_49019__$1)){
var statearr_49054_49114 = state_49045__$1;
(statearr_49054_49114[(1)] = (29));

} else {
var statearr_49055_49115 = state_49045__$1;
(statearr_49055_49115[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (4))){
var inst_48966 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_48966)){
var statearr_49056_49116 = state_49045__$1;
(statearr_49056_49116[(1)] = (8));

} else {
var statearr_49057_49117 = state_49045__$1;
(statearr_49057_49117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (15))){
var inst_48992 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_48992)){
var statearr_49058_49118 = state_49045__$1;
(statearr_49058_49118[(1)] = (19));

} else {
var statearr_49059_49119 = state_49045__$1;
(statearr_49059_49119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (21))){
var inst_48997 = (state_49045[(12)]);
var inst_48997__$1 = (state_49045[(2)]);
var inst_48998 = cljs.core.get.call(null,inst_48997__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48999 = cljs.core.get.call(null,inst_48997__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49000 = cljs.core.get.call(null,inst_48997__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49045__$1 = (function (){var statearr_49060 = state_49045;
(statearr_49060[(12)] = inst_48997__$1);

(statearr_49060[(11)] = inst_48998);

(statearr_49060[(13)] = inst_48999);

return statearr_49060;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49045__$1,(22),inst_49000);
} else {
if((state_val_49046 === (31))){
var inst_49027 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_49027)){
var statearr_49061_49120 = state_49045__$1;
(statearr_49061_49120[(1)] = (32));

} else {
var statearr_49062_49121 = state_49045__$1;
(statearr_49062_49121[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (32))){
var inst_49004 = (state_49045[(14)]);
var state_49045__$1 = state_49045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49045__$1,(35),out,inst_49004);
} else {
if((state_val_49046 === (33))){
var inst_48997 = (state_49045[(12)]);
var inst_48975 = inst_48997;
var state_49045__$1 = (function (){var statearr_49063 = state_49045;
(statearr_49063[(7)] = inst_48975);

return statearr_49063;
})();
var statearr_49064_49122 = state_49045__$1;
(statearr_49064_49122[(2)] = null);

(statearr_49064_49122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (13))){
var inst_48975 = (state_49045[(7)]);
var inst_48982 = inst_48975.cljs$lang$protocol_mask$partition0$;
var inst_48983 = (inst_48982 & (64));
var inst_48984 = inst_48975.cljs$core$ISeq$;
var inst_48985 = (inst_48983) || (inst_48984);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_48985)){
var statearr_49065_49123 = state_49045__$1;
(statearr_49065_49123[(1)] = (16));

} else {
var statearr_49066_49124 = state_49045__$1;
(statearr_49066_49124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (22))){
var inst_49005 = (state_49045[(10)]);
var inst_49004 = (state_49045[(14)]);
var inst_49003 = (state_49045[(2)]);
var inst_49004__$1 = cljs.core.nth.call(null,inst_49003,(0),null);
var inst_49005__$1 = cljs.core.nth.call(null,inst_49003,(1),null);
var inst_49006 = (inst_49004__$1 == null);
var inst_49007 = cljs.core._EQ_.call(null,inst_49005__$1,change);
var inst_49008 = (inst_49006) || (inst_49007);
var state_49045__$1 = (function (){var statearr_49067 = state_49045;
(statearr_49067[(10)] = inst_49005__$1);

(statearr_49067[(14)] = inst_49004__$1);

return statearr_49067;
})();
if(cljs.core.truth_(inst_49008)){
var statearr_49068_49125 = state_49045__$1;
(statearr_49068_49125[(1)] = (23));

} else {
var statearr_49069_49126 = state_49045__$1;
(statearr_49069_49126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (36))){
var inst_48997 = (state_49045[(12)]);
var inst_48975 = inst_48997;
var state_49045__$1 = (function (){var statearr_49070 = state_49045;
(statearr_49070[(7)] = inst_48975);

return statearr_49070;
})();
var statearr_49071_49127 = state_49045__$1;
(statearr_49071_49127[(2)] = null);

(statearr_49071_49127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (29))){
var inst_49019 = (state_49045[(9)]);
var state_49045__$1 = state_49045;
var statearr_49072_49128 = state_49045__$1;
(statearr_49072_49128[(2)] = inst_49019);

(statearr_49072_49128[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (6))){
var state_49045__$1 = state_49045;
var statearr_49073_49129 = state_49045__$1;
(statearr_49073_49129[(2)] = false);

(statearr_49073_49129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (28))){
var inst_49015 = (state_49045[(2)]);
var inst_49016 = calc_state.call(null);
var inst_48975 = inst_49016;
var state_49045__$1 = (function (){var statearr_49074 = state_49045;
(statearr_49074[(7)] = inst_48975);

(statearr_49074[(15)] = inst_49015);

return statearr_49074;
})();
var statearr_49075_49130 = state_49045__$1;
(statearr_49075_49130[(2)] = null);

(statearr_49075_49130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (25))){
var inst_49041 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
var statearr_49076_49131 = state_49045__$1;
(statearr_49076_49131[(2)] = inst_49041);

(statearr_49076_49131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (34))){
var inst_49039 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
var statearr_49077_49132 = state_49045__$1;
(statearr_49077_49132[(2)] = inst_49039);

(statearr_49077_49132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (17))){
var state_49045__$1 = state_49045;
var statearr_49078_49133 = state_49045__$1;
(statearr_49078_49133[(2)] = false);

(statearr_49078_49133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (3))){
var state_49045__$1 = state_49045;
var statearr_49079_49134 = state_49045__$1;
(statearr_49079_49134[(2)] = false);

(statearr_49079_49134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (12))){
var inst_49043 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49045__$1,inst_49043);
} else {
if((state_val_49046 === (2))){
var inst_48951 = (state_49045[(8)]);
var inst_48956 = inst_48951.cljs$lang$protocol_mask$partition0$;
var inst_48957 = (inst_48956 & (64));
var inst_48958 = inst_48951.cljs$core$ISeq$;
var inst_48959 = (inst_48957) || (inst_48958);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_48959)){
var statearr_49080_49135 = state_49045__$1;
(statearr_49080_49135[(1)] = (5));

} else {
var statearr_49081_49136 = state_49045__$1;
(statearr_49081_49136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (23))){
var inst_49004 = (state_49045[(14)]);
var inst_49010 = (inst_49004 == null);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_49010)){
var statearr_49082_49137 = state_49045__$1;
(statearr_49082_49137[(1)] = (26));

} else {
var statearr_49083_49138 = state_49045__$1;
(statearr_49083_49138[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (35))){
var inst_49030 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
if(cljs.core.truth_(inst_49030)){
var statearr_49084_49139 = state_49045__$1;
(statearr_49084_49139[(1)] = (36));

} else {
var statearr_49085_49140 = state_49045__$1;
(statearr_49085_49140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (19))){
var inst_48975 = (state_49045[(7)]);
var inst_48994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48975);
var state_49045__$1 = state_49045;
var statearr_49086_49141 = state_49045__$1;
(statearr_49086_49141[(2)] = inst_48994);

(statearr_49086_49141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (11))){
var inst_48975 = (state_49045[(7)]);
var inst_48979 = (inst_48975 == null);
var inst_48980 = cljs.core.not.call(null,inst_48979);
var state_49045__$1 = state_49045;
if(inst_48980){
var statearr_49087_49142 = state_49045__$1;
(statearr_49087_49142[(1)] = (13));

} else {
var statearr_49088_49143 = state_49045__$1;
(statearr_49088_49143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (9))){
var inst_48951 = (state_49045[(8)]);
var state_49045__$1 = state_49045;
var statearr_49089_49144 = state_49045__$1;
(statearr_49089_49144[(2)] = inst_48951);

(statearr_49089_49144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (5))){
var state_49045__$1 = state_49045;
var statearr_49090_49145 = state_49045__$1;
(statearr_49090_49145[(2)] = true);

(statearr_49090_49145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (14))){
var state_49045__$1 = state_49045;
var statearr_49091_49146 = state_49045__$1;
(statearr_49091_49146[(2)] = false);

(statearr_49091_49146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (26))){
var inst_49005 = (state_49045[(10)]);
var inst_49012 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49005);
var state_49045__$1 = state_49045;
var statearr_49092_49147 = state_49045__$1;
(statearr_49092_49147[(2)] = inst_49012);

(statearr_49092_49147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (16))){
var state_49045__$1 = state_49045;
var statearr_49093_49148 = state_49045__$1;
(statearr_49093_49148[(2)] = true);

(statearr_49093_49148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (38))){
var inst_49035 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
var statearr_49094_49149 = state_49045__$1;
(statearr_49094_49149[(2)] = inst_49035);

(statearr_49094_49149[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (30))){
var inst_49005 = (state_49045[(10)]);
var inst_48998 = (state_49045[(11)]);
var inst_48999 = (state_49045[(13)]);
var inst_49022 = cljs.core.empty_QMARK_.call(null,inst_48998);
var inst_49023 = inst_48999.call(null,inst_49005);
var inst_49024 = cljs.core.not.call(null,inst_49023);
var inst_49025 = (inst_49022) && (inst_49024);
var state_49045__$1 = state_49045;
var statearr_49095_49150 = state_49045__$1;
(statearr_49095_49150[(2)] = inst_49025);

(statearr_49095_49150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (10))){
var inst_48951 = (state_49045[(8)]);
var inst_48971 = (state_49045[(2)]);
var inst_48972 = cljs.core.get.call(null,inst_48971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48973 = cljs.core.get.call(null,inst_48971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48974 = cljs.core.get.call(null,inst_48971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48975 = inst_48951;
var state_49045__$1 = (function (){var statearr_49096 = state_49045;
(statearr_49096[(7)] = inst_48975);

(statearr_49096[(16)] = inst_48972);

(statearr_49096[(17)] = inst_48974);

(statearr_49096[(18)] = inst_48973);

return statearr_49096;
})();
var statearr_49097_49151 = state_49045__$1;
(statearr_49097_49151[(2)] = null);

(statearr_49097_49151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (18))){
var inst_48989 = (state_49045[(2)]);
var state_49045__$1 = state_49045;
var statearr_49098_49152 = state_49045__$1;
(statearr_49098_49152[(2)] = inst_48989);

(statearr_49098_49152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (37))){
var state_49045__$1 = state_49045;
var statearr_49099_49153 = state_49045__$1;
(statearr_49099_49153[(2)] = null);

(statearr_49099_49153[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49046 === (8))){
var inst_48951 = (state_49045[(8)]);
var inst_48968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48951);
var state_49045__$1 = state_49045;
var statearr_49100_49154 = state_49045__$1;
(statearr_49100_49154[(2)] = inst_48968);

(statearr_49100_49154[(1)] = (10));


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
});})(c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41353__auto__,c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41354__auto__ = null;
var cljs$core$async$mix_$_state_machine__41354__auto____0 = (function (){
var statearr_49104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49104[(0)] = cljs$core$async$mix_$_state_machine__41354__auto__);

(statearr_49104[(1)] = (1));

return statearr_49104;
});
var cljs$core$async$mix_$_state_machine__41354__auto____1 = (function (state_49045){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49105){if((e49105 instanceof Object)){
var ex__41357__auto__ = e49105;
var statearr_49106_49155 = state_49045;
(statearr_49106_49155[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49156 = state_49045;
state_49045 = G__49156;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41354__auto__ = function(state_49045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41354__auto____1.call(this,state_49045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41354__auto____0;
cljs$core$async$mix_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41354__auto____1;
return cljs$core$async$mix_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41376__auto__ = (function (){var statearr_49107 = f__41375__auto__.call(null);
(statearr_49107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49108);

return statearr_49107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__38098__auto__ = (((p == null))?null:p);
var m__38099__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__38099__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__38098__auto__ = (((p == null))?null:p);
var m__38099__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,p,v,ch);
} else {
var m__38099__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49157 = [];
var len__38501__auto___49160 = arguments.length;
var i__38502__auto___49161 = (0);
while(true){
if((i__38502__auto___49161 < len__38501__auto___49160)){
args49157.push((arguments[i__38502__auto___49161]));

var G__49162 = (i__38502__auto___49161 + (1));
i__38502__auto___49161 = G__49162;
continue;
} else {
}
break;
}

var G__49159 = args49157.length;
switch (G__49159) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49157.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__38098__auto__ = (((p == null))?null:p);
var m__38099__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,p);
} else {
var m__38099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,p);
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
var x__38098__auto__ = (((p == null))?null:p);
var m__38099__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__38098__auto__)]);
if(!((m__38099__auto__ == null))){
return m__38099__auto__.call(null,p,v);
} else {
var m__38099__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__38099__auto____$1 == null))){
return m__38099__auto____$1.call(null,p,v);
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
var args49165 = [];
var len__38501__auto___49290 = arguments.length;
var i__38502__auto___49291 = (0);
while(true){
if((i__38502__auto___49291 < len__38501__auto___49290)){
args49165.push((arguments[i__38502__auto___49291]));

var G__49292 = (i__38502__auto___49291 + (1));
i__38502__auto___49291 = G__49292;
continue;
} else {
}
break;
}

var G__49167 = args49165.length;
switch (G__49167) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49165.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37443__auto__,mults){
return (function (p1__49164_SHARP_){
if(cljs.core.truth_(p1__49164_SHARP_.call(null,topic))){
return p1__49164_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49164_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37443__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49168 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49169){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49169 = meta49169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49170,meta49169__$1){
var self__ = this;
var _49170__$1 = this;
return (new cljs.core.async.t_cljs$core$async49168(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49169__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49170){
var self__ = this;
var _49170__$1 = this;
return self__.meta49169;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49169","meta49169",1837721213,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49168";

cljs.core.async.t_cljs$core$async49168.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async49168");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49168 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49169){
return (new cljs.core.async.t_cljs$core$async49168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49169));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49168(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41374__auto___49294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49294,mults,ensure_mult,p){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49294,mults,ensure_mult,p){
return (function (state_49242){
var state_val_49243 = (state_49242[(1)]);
if((state_val_49243 === (7))){
var inst_49238 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49244_49295 = state_49242__$1;
(statearr_49244_49295[(2)] = inst_49238);

(statearr_49244_49295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (20))){
var state_49242__$1 = state_49242;
var statearr_49245_49296 = state_49242__$1;
(statearr_49245_49296[(2)] = null);

(statearr_49245_49296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (1))){
var state_49242__$1 = state_49242;
var statearr_49246_49297 = state_49242__$1;
(statearr_49246_49297[(2)] = null);

(statearr_49246_49297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (24))){
var inst_49221 = (state_49242[(7)]);
var inst_49230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49221);
var state_49242__$1 = state_49242;
var statearr_49247_49298 = state_49242__$1;
(statearr_49247_49298[(2)] = inst_49230);

(statearr_49247_49298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (4))){
var inst_49173 = (state_49242[(8)]);
var inst_49173__$1 = (state_49242[(2)]);
var inst_49174 = (inst_49173__$1 == null);
var state_49242__$1 = (function (){var statearr_49248 = state_49242;
(statearr_49248[(8)] = inst_49173__$1);

return statearr_49248;
})();
if(cljs.core.truth_(inst_49174)){
var statearr_49249_49299 = state_49242__$1;
(statearr_49249_49299[(1)] = (5));

} else {
var statearr_49250_49300 = state_49242__$1;
(statearr_49250_49300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (15))){
var inst_49215 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49251_49301 = state_49242__$1;
(statearr_49251_49301[(2)] = inst_49215);

(statearr_49251_49301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (21))){
var inst_49235 = (state_49242[(2)]);
var state_49242__$1 = (function (){var statearr_49252 = state_49242;
(statearr_49252[(9)] = inst_49235);

return statearr_49252;
})();
var statearr_49253_49302 = state_49242__$1;
(statearr_49253_49302[(2)] = null);

(statearr_49253_49302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (13))){
var inst_49197 = (state_49242[(10)]);
var inst_49199 = cljs.core.chunked_seq_QMARK_.call(null,inst_49197);
var state_49242__$1 = state_49242;
if(inst_49199){
var statearr_49254_49303 = state_49242__$1;
(statearr_49254_49303[(1)] = (16));

} else {
var statearr_49255_49304 = state_49242__$1;
(statearr_49255_49304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (22))){
var inst_49227 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
if(cljs.core.truth_(inst_49227)){
var statearr_49256_49305 = state_49242__$1;
(statearr_49256_49305[(1)] = (23));

} else {
var statearr_49257_49306 = state_49242__$1;
(statearr_49257_49306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (6))){
var inst_49221 = (state_49242[(7)]);
var inst_49223 = (state_49242[(11)]);
var inst_49173 = (state_49242[(8)]);
var inst_49221__$1 = topic_fn.call(null,inst_49173);
var inst_49222 = cljs.core.deref.call(null,mults);
var inst_49223__$1 = cljs.core.get.call(null,inst_49222,inst_49221__$1);
var state_49242__$1 = (function (){var statearr_49258 = state_49242;
(statearr_49258[(7)] = inst_49221__$1);

(statearr_49258[(11)] = inst_49223__$1);

return statearr_49258;
})();
if(cljs.core.truth_(inst_49223__$1)){
var statearr_49259_49307 = state_49242__$1;
(statearr_49259_49307[(1)] = (19));

} else {
var statearr_49260_49308 = state_49242__$1;
(statearr_49260_49308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (25))){
var inst_49232 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49261_49309 = state_49242__$1;
(statearr_49261_49309[(2)] = inst_49232);

(statearr_49261_49309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (17))){
var inst_49197 = (state_49242[(10)]);
var inst_49206 = cljs.core.first.call(null,inst_49197);
var inst_49207 = cljs.core.async.muxch_STAR_.call(null,inst_49206);
var inst_49208 = cljs.core.async.close_BANG_.call(null,inst_49207);
var inst_49209 = cljs.core.next.call(null,inst_49197);
var inst_49183 = inst_49209;
var inst_49184 = null;
var inst_49185 = (0);
var inst_49186 = (0);
var state_49242__$1 = (function (){var statearr_49262 = state_49242;
(statearr_49262[(12)] = inst_49184);

(statearr_49262[(13)] = inst_49183);

(statearr_49262[(14)] = inst_49186);

(statearr_49262[(15)] = inst_49185);

(statearr_49262[(16)] = inst_49208);

return statearr_49262;
})();
var statearr_49263_49310 = state_49242__$1;
(statearr_49263_49310[(2)] = null);

(statearr_49263_49310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (3))){
var inst_49240 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49242__$1,inst_49240);
} else {
if((state_val_49243 === (12))){
var inst_49217 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49264_49311 = state_49242__$1;
(statearr_49264_49311[(2)] = inst_49217);

(statearr_49264_49311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (2))){
var state_49242__$1 = state_49242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49242__$1,(4),ch);
} else {
if((state_val_49243 === (23))){
var state_49242__$1 = state_49242;
var statearr_49265_49312 = state_49242__$1;
(statearr_49265_49312[(2)] = null);

(statearr_49265_49312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (19))){
var inst_49223 = (state_49242[(11)]);
var inst_49173 = (state_49242[(8)]);
var inst_49225 = cljs.core.async.muxch_STAR_.call(null,inst_49223);
var state_49242__$1 = state_49242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49242__$1,(22),inst_49225,inst_49173);
} else {
if((state_val_49243 === (11))){
var inst_49183 = (state_49242[(13)]);
var inst_49197 = (state_49242[(10)]);
var inst_49197__$1 = cljs.core.seq.call(null,inst_49183);
var state_49242__$1 = (function (){var statearr_49266 = state_49242;
(statearr_49266[(10)] = inst_49197__$1);

return statearr_49266;
})();
if(inst_49197__$1){
var statearr_49267_49313 = state_49242__$1;
(statearr_49267_49313[(1)] = (13));

} else {
var statearr_49268_49314 = state_49242__$1;
(statearr_49268_49314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (9))){
var inst_49219 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49269_49315 = state_49242__$1;
(statearr_49269_49315[(2)] = inst_49219);

(statearr_49269_49315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (5))){
var inst_49180 = cljs.core.deref.call(null,mults);
var inst_49181 = cljs.core.vals.call(null,inst_49180);
var inst_49182 = cljs.core.seq.call(null,inst_49181);
var inst_49183 = inst_49182;
var inst_49184 = null;
var inst_49185 = (0);
var inst_49186 = (0);
var state_49242__$1 = (function (){var statearr_49270 = state_49242;
(statearr_49270[(12)] = inst_49184);

(statearr_49270[(13)] = inst_49183);

(statearr_49270[(14)] = inst_49186);

(statearr_49270[(15)] = inst_49185);

return statearr_49270;
})();
var statearr_49271_49316 = state_49242__$1;
(statearr_49271_49316[(2)] = null);

(statearr_49271_49316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (14))){
var state_49242__$1 = state_49242;
var statearr_49275_49317 = state_49242__$1;
(statearr_49275_49317[(2)] = null);

(statearr_49275_49317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (16))){
var inst_49197 = (state_49242[(10)]);
var inst_49201 = cljs.core.chunk_first.call(null,inst_49197);
var inst_49202 = cljs.core.chunk_rest.call(null,inst_49197);
var inst_49203 = cljs.core.count.call(null,inst_49201);
var inst_49183 = inst_49202;
var inst_49184 = inst_49201;
var inst_49185 = inst_49203;
var inst_49186 = (0);
var state_49242__$1 = (function (){var statearr_49276 = state_49242;
(statearr_49276[(12)] = inst_49184);

(statearr_49276[(13)] = inst_49183);

(statearr_49276[(14)] = inst_49186);

(statearr_49276[(15)] = inst_49185);

return statearr_49276;
})();
var statearr_49277_49318 = state_49242__$1;
(statearr_49277_49318[(2)] = null);

(statearr_49277_49318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (10))){
var inst_49184 = (state_49242[(12)]);
var inst_49183 = (state_49242[(13)]);
var inst_49186 = (state_49242[(14)]);
var inst_49185 = (state_49242[(15)]);
var inst_49191 = cljs.core._nth.call(null,inst_49184,inst_49186);
var inst_49192 = cljs.core.async.muxch_STAR_.call(null,inst_49191);
var inst_49193 = cljs.core.async.close_BANG_.call(null,inst_49192);
var inst_49194 = (inst_49186 + (1));
var tmp49272 = inst_49184;
var tmp49273 = inst_49183;
var tmp49274 = inst_49185;
var inst_49183__$1 = tmp49273;
var inst_49184__$1 = tmp49272;
var inst_49185__$1 = tmp49274;
var inst_49186__$1 = inst_49194;
var state_49242__$1 = (function (){var statearr_49278 = state_49242;
(statearr_49278[(12)] = inst_49184__$1);

(statearr_49278[(13)] = inst_49183__$1);

(statearr_49278[(14)] = inst_49186__$1);

(statearr_49278[(17)] = inst_49193);

(statearr_49278[(15)] = inst_49185__$1);

return statearr_49278;
})();
var statearr_49279_49319 = state_49242__$1;
(statearr_49279_49319[(2)] = null);

(statearr_49279_49319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (18))){
var inst_49212 = (state_49242[(2)]);
var state_49242__$1 = state_49242;
var statearr_49280_49320 = state_49242__$1;
(statearr_49280_49320[(2)] = inst_49212);

(statearr_49280_49320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49243 === (8))){
var inst_49186 = (state_49242[(14)]);
var inst_49185 = (state_49242[(15)]);
var inst_49188 = (inst_49186 < inst_49185);
var inst_49189 = inst_49188;
var state_49242__$1 = state_49242;
if(cljs.core.truth_(inst_49189)){
var statearr_49281_49321 = state_49242__$1;
(statearr_49281_49321[(1)] = (10));

} else {
var statearr_49282_49322 = state_49242__$1;
(statearr_49282_49322[(1)] = (11));

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
});})(c__41374__auto___49294,mults,ensure_mult,p))
;
return ((function (switch__41353__auto__,c__41374__auto___49294,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49286[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49286[(1)] = (1));

return statearr_49286;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49242){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49287){if((e49287 instanceof Object)){
var ex__41357__auto__ = e49287;
var statearr_49288_49323 = state_49242;
(statearr_49288_49323[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49324 = state_49242;
state_49242 = G__49324;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49294,mults,ensure_mult,p))
})();
var state__41376__auto__ = (function (){var statearr_49289 = f__41375__auto__.call(null);
(statearr_49289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49294);

return statearr_49289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49294,mults,ensure_mult,p))
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
var args49325 = [];
var len__38501__auto___49328 = arguments.length;
var i__38502__auto___49329 = (0);
while(true){
if((i__38502__auto___49329 < len__38501__auto___49328)){
args49325.push((arguments[i__38502__auto___49329]));

var G__49330 = (i__38502__auto___49329 + (1));
i__38502__auto___49329 = G__49330;
continue;
} else {
}
break;
}

var G__49327 = args49325.length;
switch (G__49327) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49325.length)].join('')));

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
var args49332 = [];
var len__38501__auto___49335 = arguments.length;
var i__38502__auto___49336 = (0);
while(true){
if((i__38502__auto___49336 < len__38501__auto___49335)){
args49332.push((arguments[i__38502__auto___49336]));

var G__49337 = (i__38502__auto___49336 + (1));
i__38502__auto___49336 = G__49337;
continue;
} else {
}
break;
}

var G__49334 = args49332.length;
switch (G__49334) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49332.length)].join('')));

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
var args49339 = [];
var len__38501__auto___49410 = arguments.length;
var i__38502__auto___49411 = (0);
while(true){
if((i__38502__auto___49411 < len__38501__auto___49410)){
args49339.push((arguments[i__38502__auto___49411]));

var G__49412 = (i__38502__auto___49411 + (1));
i__38502__auto___49411 = G__49412;
continue;
} else {
}
break;
}

var G__49341 = args49339.length;
switch (G__49341) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49339.length)].join('')));

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
var c__41374__auto___49414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49380){
var state_val_49381 = (state_49380[(1)]);
if((state_val_49381 === (7))){
var state_49380__$1 = state_49380;
var statearr_49382_49415 = state_49380__$1;
(statearr_49382_49415[(2)] = null);

(statearr_49382_49415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (1))){
var state_49380__$1 = state_49380;
var statearr_49383_49416 = state_49380__$1;
(statearr_49383_49416[(2)] = null);

(statearr_49383_49416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (4))){
var inst_49344 = (state_49380[(7)]);
var inst_49346 = (inst_49344 < cnt);
var state_49380__$1 = state_49380;
if(cljs.core.truth_(inst_49346)){
var statearr_49384_49417 = state_49380__$1;
(statearr_49384_49417[(1)] = (6));

} else {
var statearr_49385_49418 = state_49380__$1;
(statearr_49385_49418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (15))){
var inst_49376 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49386_49419 = state_49380__$1;
(statearr_49386_49419[(2)] = inst_49376);

(statearr_49386_49419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (13))){
var inst_49369 = cljs.core.async.close_BANG_.call(null,out);
var state_49380__$1 = state_49380;
var statearr_49387_49420 = state_49380__$1;
(statearr_49387_49420[(2)] = inst_49369);

(statearr_49387_49420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (6))){
var state_49380__$1 = state_49380;
var statearr_49388_49421 = state_49380__$1;
(statearr_49388_49421[(2)] = null);

(statearr_49388_49421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (3))){
var inst_49378 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49380__$1,inst_49378);
} else {
if((state_val_49381 === (12))){
var inst_49366 = (state_49380[(8)]);
var inst_49366__$1 = (state_49380[(2)]);
var inst_49367 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49366__$1);
var state_49380__$1 = (function (){var statearr_49389 = state_49380;
(statearr_49389[(8)] = inst_49366__$1);

return statearr_49389;
})();
if(cljs.core.truth_(inst_49367)){
var statearr_49390_49422 = state_49380__$1;
(statearr_49390_49422[(1)] = (13));

} else {
var statearr_49391_49423 = state_49380__$1;
(statearr_49391_49423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (2))){
var inst_49343 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49344 = (0);
var state_49380__$1 = (function (){var statearr_49392 = state_49380;
(statearr_49392[(9)] = inst_49343);

(statearr_49392[(7)] = inst_49344);

return statearr_49392;
})();
var statearr_49393_49424 = state_49380__$1;
(statearr_49393_49424[(2)] = null);

(statearr_49393_49424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (11))){
var inst_49344 = (state_49380[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49380,(10),Object,null,(9));
var inst_49353 = chs__$1.call(null,inst_49344);
var inst_49354 = done.call(null,inst_49344);
var inst_49355 = cljs.core.async.take_BANG_.call(null,inst_49353,inst_49354);
var state_49380__$1 = state_49380;
var statearr_49394_49425 = state_49380__$1;
(statearr_49394_49425[(2)] = inst_49355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (9))){
var inst_49344 = (state_49380[(7)]);
var inst_49357 = (state_49380[(2)]);
var inst_49358 = (inst_49344 + (1));
var inst_49344__$1 = inst_49358;
var state_49380__$1 = (function (){var statearr_49395 = state_49380;
(statearr_49395[(10)] = inst_49357);

(statearr_49395[(7)] = inst_49344__$1);

return statearr_49395;
})();
var statearr_49396_49426 = state_49380__$1;
(statearr_49396_49426[(2)] = null);

(statearr_49396_49426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (5))){
var inst_49364 = (state_49380[(2)]);
var state_49380__$1 = (function (){var statearr_49397 = state_49380;
(statearr_49397[(11)] = inst_49364);

return statearr_49397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49380__$1,(12),dchan);
} else {
if((state_val_49381 === (14))){
var inst_49366 = (state_49380[(8)]);
var inst_49371 = cljs.core.apply.call(null,f,inst_49366);
var state_49380__$1 = state_49380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49380__$1,(16),out,inst_49371);
} else {
if((state_val_49381 === (16))){
var inst_49373 = (state_49380[(2)]);
var state_49380__$1 = (function (){var statearr_49398 = state_49380;
(statearr_49398[(12)] = inst_49373);

return statearr_49398;
})();
var statearr_49399_49427 = state_49380__$1;
(statearr_49399_49427[(2)] = null);

(statearr_49399_49427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (10))){
var inst_49348 = (state_49380[(2)]);
var inst_49349 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49380__$1 = (function (){var statearr_49400 = state_49380;
(statearr_49400[(13)] = inst_49348);

return statearr_49400;
})();
var statearr_49401_49428 = state_49380__$1;
(statearr_49401_49428[(2)] = inst_49349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (8))){
var inst_49362 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49402_49429 = state_49380__$1;
(statearr_49402_49429[(2)] = inst_49362);

(statearr_49402_49429[(1)] = (5));


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
});})(c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41353__auto__,c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49406[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49406[(1)] = (1));

return statearr_49406;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49380){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49407){if((e49407 instanceof Object)){
var ex__41357__auto__ = e49407;
var statearr_49408_49430 = state_49380;
(statearr_49408_49430[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49431 = state_49380;
state_49380 = G__49431;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41376__auto__ = (function (){var statearr_49409 = f__41375__auto__.call(null);
(statearr_49409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49414);

return statearr_49409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49414,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args49433 = [];
var len__38501__auto___49489 = arguments.length;
var i__38502__auto___49490 = (0);
while(true){
if((i__38502__auto___49490 < len__38501__auto___49489)){
args49433.push((arguments[i__38502__auto___49490]));

var G__49491 = (i__38502__auto___49490 + (1));
i__38502__auto___49490 = G__49491;
continue;
} else {
}
break;
}

var G__49435 = args49433.length;
switch (G__49435) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49433.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___49493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49493,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49493,out){
return (function (state_49465){
var state_val_49466 = (state_49465[(1)]);
if((state_val_49466 === (7))){
var inst_49445 = (state_49465[(7)]);
var inst_49444 = (state_49465[(8)]);
var inst_49444__$1 = (state_49465[(2)]);
var inst_49445__$1 = cljs.core.nth.call(null,inst_49444__$1,(0),null);
var inst_49446 = cljs.core.nth.call(null,inst_49444__$1,(1),null);
var inst_49447 = (inst_49445__$1 == null);
var state_49465__$1 = (function (){var statearr_49467 = state_49465;
(statearr_49467[(7)] = inst_49445__$1);

(statearr_49467[(8)] = inst_49444__$1);

(statearr_49467[(9)] = inst_49446);

return statearr_49467;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49468_49494 = state_49465__$1;
(statearr_49468_49494[(1)] = (8));

} else {
var statearr_49469_49495 = state_49465__$1;
(statearr_49469_49495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (1))){
var inst_49436 = cljs.core.vec.call(null,chs);
var inst_49437 = inst_49436;
var state_49465__$1 = (function (){var statearr_49470 = state_49465;
(statearr_49470[(10)] = inst_49437);

return statearr_49470;
})();
var statearr_49471_49496 = state_49465__$1;
(statearr_49471_49496[(2)] = null);

(statearr_49471_49496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (4))){
var inst_49437 = (state_49465[(10)]);
var state_49465__$1 = state_49465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49465__$1,(7),inst_49437);
} else {
if((state_val_49466 === (6))){
var inst_49461 = (state_49465[(2)]);
var state_49465__$1 = state_49465;
var statearr_49472_49497 = state_49465__$1;
(statearr_49472_49497[(2)] = inst_49461);

(statearr_49472_49497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (3))){
var inst_49463 = (state_49465[(2)]);
var state_49465__$1 = state_49465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49465__$1,inst_49463);
} else {
if((state_val_49466 === (2))){
var inst_49437 = (state_49465[(10)]);
var inst_49439 = cljs.core.count.call(null,inst_49437);
var inst_49440 = (inst_49439 > (0));
var state_49465__$1 = state_49465;
if(cljs.core.truth_(inst_49440)){
var statearr_49474_49498 = state_49465__$1;
(statearr_49474_49498[(1)] = (4));

} else {
var statearr_49475_49499 = state_49465__$1;
(statearr_49475_49499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (11))){
var inst_49437 = (state_49465[(10)]);
var inst_49454 = (state_49465[(2)]);
var tmp49473 = inst_49437;
var inst_49437__$1 = tmp49473;
var state_49465__$1 = (function (){var statearr_49476 = state_49465;
(statearr_49476[(11)] = inst_49454);

(statearr_49476[(10)] = inst_49437__$1);

return statearr_49476;
})();
var statearr_49477_49500 = state_49465__$1;
(statearr_49477_49500[(2)] = null);

(statearr_49477_49500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (9))){
var inst_49445 = (state_49465[(7)]);
var state_49465__$1 = state_49465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49465__$1,(11),out,inst_49445);
} else {
if((state_val_49466 === (5))){
var inst_49459 = cljs.core.async.close_BANG_.call(null,out);
var state_49465__$1 = state_49465;
var statearr_49478_49501 = state_49465__$1;
(statearr_49478_49501[(2)] = inst_49459);

(statearr_49478_49501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (10))){
var inst_49457 = (state_49465[(2)]);
var state_49465__$1 = state_49465;
var statearr_49479_49502 = state_49465__$1;
(statearr_49479_49502[(2)] = inst_49457);

(statearr_49479_49502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (8))){
var inst_49445 = (state_49465[(7)]);
var inst_49444 = (state_49465[(8)]);
var inst_49446 = (state_49465[(9)]);
var inst_49437 = (state_49465[(10)]);
var inst_49449 = (function (){var cs = inst_49437;
var vec__49442 = inst_49444;
var v = inst_49445;
var c = inst_49446;
return ((function (cs,vec__49442,v,c,inst_49445,inst_49444,inst_49446,inst_49437,state_val_49466,c__41374__auto___49493,out){
return (function (p1__49432_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49432_SHARP_);
});
;})(cs,vec__49442,v,c,inst_49445,inst_49444,inst_49446,inst_49437,state_val_49466,c__41374__auto___49493,out))
})();
var inst_49450 = cljs.core.filterv.call(null,inst_49449,inst_49437);
var inst_49437__$1 = inst_49450;
var state_49465__$1 = (function (){var statearr_49480 = state_49465;
(statearr_49480[(10)] = inst_49437__$1);

return statearr_49480;
})();
var statearr_49481_49503 = state_49465__$1;
(statearr_49481_49503[(2)] = null);

(statearr_49481_49503[(1)] = (2));


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
});})(c__41374__auto___49493,out))
;
return ((function (switch__41353__auto__,c__41374__auto___49493,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49485[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49485[(1)] = (1));

return statearr_49485;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49465){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49486){if((e49486 instanceof Object)){
var ex__41357__auto__ = e49486;
var statearr_49487_49504 = state_49465;
(statearr_49487_49504[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49505 = state_49465;
state_49465 = G__49505;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49493,out))
})();
var state__41376__auto__ = (function (){var statearr_49488 = f__41375__auto__.call(null);
(statearr_49488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49493);

return statearr_49488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49493,out))
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
var args49506 = [];
var len__38501__auto___49555 = arguments.length;
var i__38502__auto___49556 = (0);
while(true){
if((i__38502__auto___49556 < len__38501__auto___49555)){
args49506.push((arguments[i__38502__auto___49556]));

var G__49557 = (i__38502__auto___49556 + (1));
i__38502__auto___49556 = G__49557;
continue;
} else {
}
break;
}

var G__49508 = args49506.length;
switch (G__49508) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49506.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___49559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49559,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49559,out){
return (function (state_49532){
var state_val_49533 = (state_49532[(1)]);
if((state_val_49533 === (7))){
var inst_49514 = (state_49532[(7)]);
var inst_49514__$1 = (state_49532[(2)]);
var inst_49515 = (inst_49514__$1 == null);
var inst_49516 = cljs.core.not.call(null,inst_49515);
var state_49532__$1 = (function (){var statearr_49534 = state_49532;
(statearr_49534[(7)] = inst_49514__$1);

return statearr_49534;
})();
if(inst_49516){
var statearr_49535_49560 = state_49532__$1;
(statearr_49535_49560[(1)] = (8));

} else {
var statearr_49536_49561 = state_49532__$1;
(statearr_49536_49561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (1))){
var inst_49509 = (0);
var state_49532__$1 = (function (){var statearr_49537 = state_49532;
(statearr_49537[(8)] = inst_49509);

return statearr_49537;
})();
var statearr_49538_49562 = state_49532__$1;
(statearr_49538_49562[(2)] = null);

(statearr_49538_49562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (4))){
var state_49532__$1 = state_49532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49532__$1,(7),ch);
} else {
if((state_val_49533 === (6))){
var inst_49527 = (state_49532[(2)]);
var state_49532__$1 = state_49532;
var statearr_49539_49563 = state_49532__$1;
(statearr_49539_49563[(2)] = inst_49527);

(statearr_49539_49563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (3))){
var inst_49529 = (state_49532[(2)]);
var inst_49530 = cljs.core.async.close_BANG_.call(null,out);
var state_49532__$1 = (function (){var statearr_49540 = state_49532;
(statearr_49540[(9)] = inst_49529);

return statearr_49540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49532__$1,inst_49530);
} else {
if((state_val_49533 === (2))){
var inst_49509 = (state_49532[(8)]);
var inst_49511 = (inst_49509 < n);
var state_49532__$1 = state_49532;
if(cljs.core.truth_(inst_49511)){
var statearr_49541_49564 = state_49532__$1;
(statearr_49541_49564[(1)] = (4));

} else {
var statearr_49542_49565 = state_49532__$1;
(statearr_49542_49565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (11))){
var inst_49509 = (state_49532[(8)]);
var inst_49519 = (state_49532[(2)]);
var inst_49520 = (inst_49509 + (1));
var inst_49509__$1 = inst_49520;
var state_49532__$1 = (function (){var statearr_49543 = state_49532;
(statearr_49543[(10)] = inst_49519);

(statearr_49543[(8)] = inst_49509__$1);

return statearr_49543;
})();
var statearr_49544_49566 = state_49532__$1;
(statearr_49544_49566[(2)] = null);

(statearr_49544_49566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (9))){
var state_49532__$1 = state_49532;
var statearr_49545_49567 = state_49532__$1;
(statearr_49545_49567[(2)] = null);

(statearr_49545_49567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (5))){
var state_49532__$1 = state_49532;
var statearr_49546_49568 = state_49532__$1;
(statearr_49546_49568[(2)] = null);

(statearr_49546_49568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (10))){
var inst_49524 = (state_49532[(2)]);
var state_49532__$1 = state_49532;
var statearr_49547_49569 = state_49532__$1;
(statearr_49547_49569[(2)] = inst_49524);

(statearr_49547_49569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49533 === (8))){
var inst_49514 = (state_49532[(7)]);
var state_49532__$1 = state_49532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49532__$1,(11),out,inst_49514);
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
});})(c__41374__auto___49559,out))
;
return ((function (switch__41353__auto__,c__41374__auto___49559,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49551[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49551[(1)] = (1));

return statearr_49551;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49532){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49552){if((e49552 instanceof Object)){
var ex__41357__auto__ = e49552;
var statearr_49553_49570 = state_49532;
(statearr_49553_49570[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49571 = state_49532;
state_49532 = G__49571;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49559,out))
})();
var state__41376__auto__ = (function (){var statearr_49554 = f__41375__auto__.call(null);
(statearr_49554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49559);

return statearr_49554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49559,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49579 = (function (map_LT_,f,ch,meta49580){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49580 = meta49580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49581,meta49580__$1){
var self__ = this;
var _49581__$1 = this;
return (new cljs.core.async.t_cljs$core$async49579(self__.map_LT_,self__.f,self__.ch,meta49580__$1));
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49581){
var self__ = this;
var _49581__$1 = this;
return self__.meta49580;
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49582 = (function (map_LT_,f,ch,meta49580,_,fn1,meta49583){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta49580 = meta49580;
this._ = _;
this.fn1 = fn1;
this.meta49583 = meta49583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49584,meta49583__$1){
var self__ = this;
var _49584__$1 = this;
return (new cljs.core.async.t_cljs$core$async49582(self__.map_LT_,self__.f,self__.ch,self__.meta49580,self__._,self__.fn1,meta49583__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49584){
var self__ = this;
var _49584__$1 = this;
return self__.meta49583;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49572_SHARP_){
return f1.call(null,(((p1__49572_SHARP_ == null))?null:self__.f.call(null,p1__49572_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49580","meta49580",-1617757334,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49579","cljs.core.async/t_cljs$core$async49579",635944290,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49583","meta49583",323936680,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49582";

cljs.core.async.t_cljs$core$async49582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async49582");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49582 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49582(map_LT___$1,f__$1,ch__$1,meta49580__$1,___$2,fn1__$1,meta49583){
return (new cljs.core.async.t_cljs$core$async49582(map_LT___$1,f__$1,ch__$1,meta49580__$1,___$2,fn1__$1,meta49583));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49582(self__.map_LT_,self__.f,self__.ch,self__.meta49580,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37431__auto__ = ret;
if(cljs.core.truth_(and__37431__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37431__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49580","meta49580",-1617757334,null)], null);
});

cljs.core.async.t_cljs$core$async49579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49579";

cljs.core.async.t_cljs$core$async49579.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async49579");
});

cljs.core.async.__GT_t_cljs$core$async49579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49579(map_LT___$1,f__$1,ch__$1,meta49580){
return (new cljs.core.async.t_cljs$core$async49579(map_LT___$1,f__$1,ch__$1,meta49580));
});

}

return (new cljs.core.async.t_cljs$core$async49579(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49588 = (function (map_GT_,f,ch,meta49589){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta49589 = meta49589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49590,meta49589__$1){
var self__ = this;
var _49590__$1 = this;
return (new cljs.core.async.t_cljs$core$async49588(self__.map_GT_,self__.f,self__.ch,meta49589__$1));
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49590){
var self__ = this;
var _49590__$1 = this;
return self__.meta49589;
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49589","meta49589",1691703007,null)], null);
});

cljs.core.async.t_cljs$core$async49588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49588";

cljs.core.async.t_cljs$core$async49588.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async49588");
});

cljs.core.async.__GT_t_cljs$core$async49588 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49588(map_GT___$1,f__$1,ch__$1,meta49589){
return (new cljs.core.async.t_cljs$core$async49588(map_GT___$1,f__$1,ch__$1,meta49589));
});

}

return (new cljs.core.async.t_cljs$core$async49588(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49594 = (function (filter_GT_,p,ch,meta49595){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta49595 = meta49595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49596,meta49595__$1){
var self__ = this;
var _49596__$1 = this;
return (new cljs.core.async.t_cljs$core$async49594(self__.filter_GT_,self__.p,self__.ch,meta49595__$1));
});

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49596){
var self__ = this;
var _49596__$1 = this;
return self__.meta49595;
});

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async49594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49595","meta49595",1295669640,null)], null);
});

cljs.core.async.t_cljs$core$async49594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49594";

cljs.core.async.t_cljs$core$async49594.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async49594");
});

cljs.core.async.__GT_t_cljs$core$async49594 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49594(filter_GT___$1,p__$1,ch__$1,meta49595){
return (new cljs.core.async.t_cljs$core$async49594(filter_GT___$1,p__$1,ch__$1,meta49595));
});

}

return (new cljs.core.async.t_cljs$core$async49594(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args49597 = [];
var len__38501__auto___49641 = arguments.length;
var i__38502__auto___49642 = (0);
while(true){
if((i__38502__auto___49642 < len__38501__auto___49641)){
args49597.push((arguments[i__38502__auto___49642]));

var G__49643 = (i__38502__auto___49642 + (1));
i__38502__auto___49642 = G__49643;
continue;
} else {
}
break;
}

var G__49599 = args49597.length;
switch (G__49599) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49597.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___49645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49645,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49645,out){
return (function (state_49620){
var state_val_49621 = (state_49620[(1)]);
if((state_val_49621 === (7))){
var inst_49616 = (state_49620[(2)]);
var state_49620__$1 = state_49620;
var statearr_49622_49646 = state_49620__$1;
(statearr_49622_49646[(2)] = inst_49616);

(statearr_49622_49646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (1))){
var state_49620__$1 = state_49620;
var statearr_49623_49647 = state_49620__$1;
(statearr_49623_49647[(2)] = null);

(statearr_49623_49647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (4))){
var inst_49602 = (state_49620[(7)]);
var inst_49602__$1 = (state_49620[(2)]);
var inst_49603 = (inst_49602__$1 == null);
var state_49620__$1 = (function (){var statearr_49624 = state_49620;
(statearr_49624[(7)] = inst_49602__$1);

return statearr_49624;
})();
if(cljs.core.truth_(inst_49603)){
var statearr_49625_49648 = state_49620__$1;
(statearr_49625_49648[(1)] = (5));

} else {
var statearr_49626_49649 = state_49620__$1;
(statearr_49626_49649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (6))){
var inst_49602 = (state_49620[(7)]);
var inst_49607 = p.call(null,inst_49602);
var state_49620__$1 = state_49620;
if(cljs.core.truth_(inst_49607)){
var statearr_49627_49650 = state_49620__$1;
(statearr_49627_49650[(1)] = (8));

} else {
var statearr_49628_49651 = state_49620__$1;
(statearr_49628_49651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (3))){
var inst_49618 = (state_49620[(2)]);
var state_49620__$1 = state_49620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49620__$1,inst_49618);
} else {
if((state_val_49621 === (2))){
var state_49620__$1 = state_49620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49620__$1,(4),ch);
} else {
if((state_val_49621 === (11))){
var inst_49610 = (state_49620[(2)]);
var state_49620__$1 = state_49620;
var statearr_49629_49652 = state_49620__$1;
(statearr_49629_49652[(2)] = inst_49610);

(statearr_49629_49652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (9))){
var state_49620__$1 = state_49620;
var statearr_49630_49653 = state_49620__$1;
(statearr_49630_49653[(2)] = null);

(statearr_49630_49653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (5))){
var inst_49605 = cljs.core.async.close_BANG_.call(null,out);
var state_49620__$1 = state_49620;
var statearr_49631_49654 = state_49620__$1;
(statearr_49631_49654[(2)] = inst_49605);

(statearr_49631_49654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (10))){
var inst_49613 = (state_49620[(2)]);
var state_49620__$1 = (function (){var statearr_49632 = state_49620;
(statearr_49632[(8)] = inst_49613);

return statearr_49632;
})();
var statearr_49633_49655 = state_49620__$1;
(statearr_49633_49655[(2)] = null);

(statearr_49633_49655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49621 === (8))){
var inst_49602 = (state_49620[(7)]);
var state_49620__$1 = state_49620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49620__$1,(11),out,inst_49602);
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
});})(c__41374__auto___49645,out))
;
return ((function (switch__41353__auto__,c__41374__auto___49645,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49637 = [null,null,null,null,null,null,null,null,null];
(statearr_49637[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49637[(1)] = (1));

return statearr_49637;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49620){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49638){if((e49638 instanceof Object)){
var ex__41357__auto__ = e49638;
var statearr_49639_49656 = state_49620;
(statearr_49639_49656[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49657 = state_49620;
state_49620 = G__49657;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49645,out))
})();
var state__41376__auto__ = (function (){var statearr_49640 = f__41375__auto__.call(null);
(statearr_49640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49645);

return statearr_49640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49645,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49658 = [];
var len__38501__auto___49661 = arguments.length;
var i__38502__auto___49662 = (0);
while(true){
if((i__38502__auto___49662 < len__38501__auto___49661)){
args49658.push((arguments[i__38502__auto___49662]));

var G__49663 = (i__38502__auto___49662 + (1));
i__38502__auto___49662 = G__49663;
continue;
} else {
}
break;
}

var G__49660 = args49658.length;
switch (G__49660) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49658.length)].join('')));

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
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_49830){
var state_val_49831 = (state_49830[(1)]);
if((state_val_49831 === (7))){
var inst_49826 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
var statearr_49832_49873 = state_49830__$1;
(statearr_49832_49873[(2)] = inst_49826);

(statearr_49832_49873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (20))){
var inst_49796 = (state_49830[(7)]);
var inst_49807 = (state_49830[(2)]);
var inst_49808 = cljs.core.next.call(null,inst_49796);
var inst_49782 = inst_49808;
var inst_49783 = null;
var inst_49784 = (0);
var inst_49785 = (0);
var state_49830__$1 = (function (){var statearr_49833 = state_49830;
(statearr_49833[(8)] = inst_49782);

(statearr_49833[(9)] = inst_49784);

(statearr_49833[(10)] = inst_49785);

(statearr_49833[(11)] = inst_49807);

(statearr_49833[(12)] = inst_49783);

return statearr_49833;
})();
var statearr_49834_49874 = state_49830__$1;
(statearr_49834_49874[(2)] = null);

(statearr_49834_49874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (1))){
var state_49830__$1 = state_49830;
var statearr_49835_49875 = state_49830__$1;
(statearr_49835_49875[(2)] = null);

(statearr_49835_49875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (4))){
var inst_49771 = (state_49830[(13)]);
var inst_49771__$1 = (state_49830[(2)]);
var inst_49772 = (inst_49771__$1 == null);
var state_49830__$1 = (function (){var statearr_49836 = state_49830;
(statearr_49836[(13)] = inst_49771__$1);

return statearr_49836;
})();
if(cljs.core.truth_(inst_49772)){
var statearr_49837_49876 = state_49830__$1;
(statearr_49837_49876[(1)] = (5));

} else {
var statearr_49838_49877 = state_49830__$1;
(statearr_49838_49877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (15))){
var state_49830__$1 = state_49830;
var statearr_49842_49878 = state_49830__$1;
(statearr_49842_49878[(2)] = null);

(statearr_49842_49878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (21))){
var state_49830__$1 = state_49830;
var statearr_49843_49879 = state_49830__$1;
(statearr_49843_49879[(2)] = null);

(statearr_49843_49879[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (13))){
var inst_49782 = (state_49830[(8)]);
var inst_49784 = (state_49830[(9)]);
var inst_49785 = (state_49830[(10)]);
var inst_49783 = (state_49830[(12)]);
var inst_49792 = (state_49830[(2)]);
var inst_49793 = (inst_49785 + (1));
var tmp49839 = inst_49782;
var tmp49840 = inst_49784;
var tmp49841 = inst_49783;
var inst_49782__$1 = tmp49839;
var inst_49783__$1 = tmp49841;
var inst_49784__$1 = tmp49840;
var inst_49785__$1 = inst_49793;
var state_49830__$1 = (function (){var statearr_49844 = state_49830;
(statearr_49844[(8)] = inst_49782__$1);

(statearr_49844[(9)] = inst_49784__$1);

(statearr_49844[(14)] = inst_49792);

(statearr_49844[(10)] = inst_49785__$1);

(statearr_49844[(12)] = inst_49783__$1);

return statearr_49844;
})();
var statearr_49845_49880 = state_49830__$1;
(statearr_49845_49880[(2)] = null);

(statearr_49845_49880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (22))){
var state_49830__$1 = state_49830;
var statearr_49846_49881 = state_49830__$1;
(statearr_49846_49881[(2)] = null);

(statearr_49846_49881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (6))){
var inst_49771 = (state_49830[(13)]);
var inst_49780 = f.call(null,inst_49771);
var inst_49781 = cljs.core.seq.call(null,inst_49780);
var inst_49782 = inst_49781;
var inst_49783 = null;
var inst_49784 = (0);
var inst_49785 = (0);
var state_49830__$1 = (function (){var statearr_49847 = state_49830;
(statearr_49847[(8)] = inst_49782);

(statearr_49847[(9)] = inst_49784);

(statearr_49847[(10)] = inst_49785);

(statearr_49847[(12)] = inst_49783);

return statearr_49847;
})();
var statearr_49848_49882 = state_49830__$1;
(statearr_49848_49882[(2)] = null);

(statearr_49848_49882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (17))){
var inst_49796 = (state_49830[(7)]);
var inst_49800 = cljs.core.chunk_first.call(null,inst_49796);
var inst_49801 = cljs.core.chunk_rest.call(null,inst_49796);
var inst_49802 = cljs.core.count.call(null,inst_49800);
var inst_49782 = inst_49801;
var inst_49783 = inst_49800;
var inst_49784 = inst_49802;
var inst_49785 = (0);
var state_49830__$1 = (function (){var statearr_49849 = state_49830;
(statearr_49849[(8)] = inst_49782);

(statearr_49849[(9)] = inst_49784);

(statearr_49849[(10)] = inst_49785);

(statearr_49849[(12)] = inst_49783);

return statearr_49849;
})();
var statearr_49850_49883 = state_49830__$1;
(statearr_49850_49883[(2)] = null);

(statearr_49850_49883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (3))){
var inst_49828 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49830__$1,inst_49828);
} else {
if((state_val_49831 === (12))){
var inst_49816 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
var statearr_49851_49884 = state_49830__$1;
(statearr_49851_49884[(2)] = inst_49816);

(statearr_49851_49884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (2))){
var state_49830__$1 = state_49830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49830__$1,(4),in$);
} else {
if((state_val_49831 === (23))){
var inst_49824 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
var statearr_49852_49885 = state_49830__$1;
(statearr_49852_49885[(2)] = inst_49824);

(statearr_49852_49885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (19))){
var inst_49811 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
var statearr_49853_49886 = state_49830__$1;
(statearr_49853_49886[(2)] = inst_49811);

(statearr_49853_49886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (11))){
var inst_49782 = (state_49830[(8)]);
var inst_49796 = (state_49830[(7)]);
var inst_49796__$1 = cljs.core.seq.call(null,inst_49782);
var state_49830__$1 = (function (){var statearr_49854 = state_49830;
(statearr_49854[(7)] = inst_49796__$1);

return statearr_49854;
})();
if(inst_49796__$1){
var statearr_49855_49887 = state_49830__$1;
(statearr_49855_49887[(1)] = (14));

} else {
var statearr_49856_49888 = state_49830__$1;
(statearr_49856_49888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (9))){
var inst_49818 = (state_49830[(2)]);
var inst_49819 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49830__$1 = (function (){var statearr_49857 = state_49830;
(statearr_49857[(15)] = inst_49818);

return statearr_49857;
})();
if(cljs.core.truth_(inst_49819)){
var statearr_49858_49889 = state_49830__$1;
(statearr_49858_49889[(1)] = (21));

} else {
var statearr_49859_49890 = state_49830__$1;
(statearr_49859_49890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (5))){
var inst_49774 = cljs.core.async.close_BANG_.call(null,out);
var state_49830__$1 = state_49830;
var statearr_49860_49891 = state_49830__$1;
(statearr_49860_49891[(2)] = inst_49774);

(statearr_49860_49891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (14))){
var inst_49796 = (state_49830[(7)]);
var inst_49798 = cljs.core.chunked_seq_QMARK_.call(null,inst_49796);
var state_49830__$1 = state_49830;
if(inst_49798){
var statearr_49861_49892 = state_49830__$1;
(statearr_49861_49892[(1)] = (17));

} else {
var statearr_49862_49893 = state_49830__$1;
(statearr_49862_49893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (16))){
var inst_49814 = (state_49830[(2)]);
var state_49830__$1 = state_49830;
var statearr_49863_49894 = state_49830__$1;
(statearr_49863_49894[(2)] = inst_49814);

(statearr_49863_49894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49831 === (10))){
var inst_49785 = (state_49830[(10)]);
var inst_49783 = (state_49830[(12)]);
var inst_49790 = cljs.core._nth.call(null,inst_49783,inst_49785);
var state_49830__$1 = state_49830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49830__$1,(13),out,inst_49790);
} else {
if((state_val_49831 === (18))){
var inst_49796 = (state_49830[(7)]);
var inst_49805 = cljs.core.first.call(null,inst_49796);
var state_49830__$1 = state_49830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49830__$1,(20),out,inst_49805);
} else {
if((state_val_49831 === (8))){
var inst_49784 = (state_49830[(9)]);
var inst_49785 = (state_49830[(10)]);
var inst_49787 = (inst_49785 < inst_49784);
var inst_49788 = inst_49787;
var state_49830__$1 = state_49830;
if(cljs.core.truth_(inst_49788)){
var statearr_49864_49895 = state_49830__$1;
(statearr_49864_49895[(1)] = (10));

} else {
var statearr_49865_49896 = state_49830__$1;
(statearr_49865_49896[(1)] = (11));

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
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____0 = (function (){
var statearr_49869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49869[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__);

(statearr_49869[(1)] = (1));

return statearr_49869;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____1 = (function (state_49830){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49870){if((e49870 instanceof Object)){
var ex__41357__auto__ = e49870;
var statearr_49871_49897 = state_49830;
(statearr_49871_49897[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49898 = state_49830;
state_49830 = G__49898;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__ = function(state_49830){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____1.call(this,state_49830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41354__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_49872 = f__41375__auto__.call(null);
(statearr_49872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_49872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49899 = [];
var len__38501__auto___49902 = arguments.length;
var i__38502__auto___49903 = (0);
while(true){
if((i__38502__auto___49903 < len__38501__auto___49902)){
args49899.push((arguments[i__38502__auto___49903]));

var G__49904 = (i__38502__auto___49903 + (1));
i__38502__auto___49903 = G__49904;
continue;
} else {
}
break;
}

var G__49901 = args49899.length;
switch (G__49901) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49899.length)].join('')));

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
var args49906 = [];
var len__38501__auto___49909 = arguments.length;
var i__38502__auto___49910 = (0);
while(true){
if((i__38502__auto___49910 < len__38501__auto___49909)){
args49906.push((arguments[i__38502__auto___49910]));

var G__49911 = (i__38502__auto___49910 + (1));
i__38502__auto___49910 = G__49911;
continue;
} else {
}
break;
}

var G__49908 = args49906.length;
switch (G__49908) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49906.length)].join('')));

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
var args49913 = [];
var len__38501__auto___49964 = arguments.length;
var i__38502__auto___49965 = (0);
while(true){
if((i__38502__auto___49965 < len__38501__auto___49964)){
args49913.push((arguments[i__38502__auto___49965]));

var G__49966 = (i__38502__auto___49965 + (1));
i__38502__auto___49965 = G__49966;
continue;
} else {
}
break;
}

var G__49915 = args49913.length;
switch (G__49915) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49913.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___49968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___49968,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___49968,out){
return (function (state_49939){
var state_val_49940 = (state_49939[(1)]);
if((state_val_49940 === (7))){
var inst_49934 = (state_49939[(2)]);
var state_49939__$1 = state_49939;
var statearr_49941_49969 = state_49939__$1;
(statearr_49941_49969[(2)] = inst_49934);

(statearr_49941_49969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (1))){
var inst_49916 = null;
var state_49939__$1 = (function (){var statearr_49942 = state_49939;
(statearr_49942[(7)] = inst_49916);

return statearr_49942;
})();
var statearr_49943_49970 = state_49939__$1;
(statearr_49943_49970[(2)] = null);

(statearr_49943_49970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (4))){
var inst_49919 = (state_49939[(8)]);
var inst_49919__$1 = (state_49939[(2)]);
var inst_49920 = (inst_49919__$1 == null);
var inst_49921 = cljs.core.not.call(null,inst_49920);
var state_49939__$1 = (function (){var statearr_49944 = state_49939;
(statearr_49944[(8)] = inst_49919__$1);

return statearr_49944;
})();
if(inst_49921){
var statearr_49945_49971 = state_49939__$1;
(statearr_49945_49971[(1)] = (5));

} else {
var statearr_49946_49972 = state_49939__$1;
(statearr_49946_49972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (6))){
var state_49939__$1 = state_49939;
var statearr_49947_49973 = state_49939__$1;
(statearr_49947_49973[(2)] = null);

(statearr_49947_49973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (3))){
var inst_49936 = (state_49939[(2)]);
var inst_49937 = cljs.core.async.close_BANG_.call(null,out);
var state_49939__$1 = (function (){var statearr_49948 = state_49939;
(statearr_49948[(9)] = inst_49936);

return statearr_49948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49939__$1,inst_49937);
} else {
if((state_val_49940 === (2))){
var state_49939__$1 = state_49939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49939__$1,(4),ch);
} else {
if((state_val_49940 === (11))){
var inst_49919 = (state_49939[(8)]);
var inst_49928 = (state_49939[(2)]);
var inst_49916 = inst_49919;
var state_49939__$1 = (function (){var statearr_49949 = state_49939;
(statearr_49949[(7)] = inst_49916);

(statearr_49949[(10)] = inst_49928);

return statearr_49949;
})();
var statearr_49950_49974 = state_49939__$1;
(statearr_49950_49974[(2)] = null);

(statearr_49950_49974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (9))){
var inst_49919 = (state_49939[(8)]);
var state_49939__$1 = state_49939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49939__$1,(11),out,inst_49919);
} else {
if((state_val_49940 === (5))){
var inst_49919 = (state_49939[(8)]);
var inst_49916 = (state_49939[(7)]);
var inst_49923 = cljs.core._EQ_.call(null,inst_49919,inst_49916);
var state_49939__$1 = state_49939;
if(inst_49923){
var statearr_49952_49975 = state_49939__$1;
(statearr_49952_49975[(1)] = (8));

} else {
var statearr_49953_49976 = state_49939__$1;
(statearr_49953_49976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (10))){
var inst_49931 = (state_49939[(2)]);
var state_49939__$1 = state_49939;
var statearr_49954_49977 = state_49939__$1;
(statearr_49954_49977[(2)] = inst_49931);

(statearr_49954_49977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49940 === (8))){
var inst_49916 = (state_49939[(7)]);
var tmp49951 = inst_49916;
var inst_49916__$1 = tmp49951;
var state_49939__$1 = (function (){var statearr_49955 = state_49939;
(statearr_49955[(7)] = inst_49916__$1);

return statearr_49955;
})();
var statearr_49956_49978 = state_49939__$1;
(statearr_49956_49978[(2)] = null);

(statearr_49956_49978[(1)] = (2));


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
});})(c__41374__auto___49968,out))
;
return ((function (switch__41353__auto__,c__41374__auto___49968,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_49960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49960[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_49960[(1)] = (1));

return statearr_49960;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_49939){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_49939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e49961){if((e49961 instanceof Object)){
var ex__41357__auto__ = e49961;
var statearr_49962_49979 = state_49939;
(statearr_49962_49979[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49980 = state_49939;
state_49939 = G__49980;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_49939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_49939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___49968,out))
})();
var state__41376__auto__ = (function (){var statearr_49963 = f__41375__auto__.call(null);
(statearr_49963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___49968);

return statearr_49963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___49968,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49981 = [];
var len__38501__auto___50051 = arguments.length;
var i__38502__auto___50052 = (0);
while(true){
if((i__38502__auto___50052 < len__38501__auto___50051)){
args49981.push((arguments[i__38502__auto___50052]));

var G__50053 = (i__38502__auto___50052 + (1));
i__38502__auto___50052 = G__50053;
continue;
} else {
}
break;
}

var G__49983 = args49981.length;
switch (G__49983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49981.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___50055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___50055,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___50055,out){
return (function (state_50021){
var state_val_50022 = (state_50021[(1)]);
if((state_val_50022 === (7))){
var inst_50017 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
var statearr_50023_50056 = state_50021__$1;
(statearr_50023_50056[(2)] = inst_50017);

(statearr_50023_50056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (1))){
var inst_49984 = (new Array(n));
var inst_49985 = inst_49984;
var inst_49986 = (0);
var state_50021__$1 = (function (){var statearr_50024 = state_50021;
(statearr_50024[(7)] = inst_49986);

(statearr_50024[(8)] = inst_49985);

return statearr_50024;
})();
var statearr_50025_50057 = state_50021__$1;
(statearr_50025_50057[(2)] = null);

(statearr_50025_50057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (4))){
var inst_49989 = (state_50021[(9)]);
var inst_49989__$1 = (state_50021[(2)]);
var inst_49990 = (inst_49989__$1 == null);
var inst_49991 = cljs.core.not.call(null,inst_49990);
var state_50021__$1 = (function (){var statearr_50026 = state_50021;
(statearr_50026[(9)] = inst_49989__$1);

return statearr_50026;
})();
if(inst_49991){
var statearr_50027_50058 = state_50021__$1;
(statearr_50027_50058[(1)] = (5));

} else {
var statearr_50028_50059 = state_50021__$1;
(statearr_50028_50059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (15))){
var inst_50011 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
var statearr_50029_50060 = state_50021__$1;
(statearr_50029_50060[(2)] = inst_50011);

(statearr_50029_50060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (13))){
var state_50021__$1 = state_50021;
var statearr_50030_50061 = state_50021__$1;
(statearr_50030_50061[(2)] = null);

(statearr_50030_50061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (6))){
var inst_49986 = (state_50021[(7)]);
var inst_50007 = (inst_49986 > (0));
var state_50021__$1 = state_50021;
if(cljs.core.truth_(inst_50007)){
var statearr_50031_50062 = state_50021__$1;
(statearr_50031_50062[(1)] = (12));

} else {
var statearr_50032_50063 = state_50021__$1;
(statearr_50032_50063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (3))){
var inst_50019 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50021__$1,inst_50019);
} else {
if((state_val_50022 === (12))){
var inst_49985 = (state_50021[(8)]);
var inst_50009 = cljs.core.vec.call(null,inst_49985);
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50021__$1,(15),out,inst_50009);
} else {
if((state_val_50022 === (2))){
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50021__$1,(4),ch);
} else {
if((state_val_50022 === (11))){
var inst_50001 = (state_50021[(2)]);
var inst_50002 = (new Array(n));
var inst_49985 = inst_50002;
var inst_49986 = (0);
var state_50021__$1 = (function (){var statearr_50033 = state_50021;
(statearr_50033[(10)] = inst_50001);

(statearr_50033[(7)] = inst_49986);

(statearr_50033[(8)] = inst_49985);

return statearr_50033;
})();
var statearr_50034_50064 = state_50021__$1;
(statearr_50034_50064[(2)] = null);

(statearr_50034_50064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (9))){
var inst_49985 = (state_50021[(8)]);
var inst_49999 = cljs.core.vec.call(null,inst_49985);
var state_50021__$1 = state_50021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50021__$1,(11),out,inst_49999);
} else {
if((state_val_50022 === (5))){
var inst_49986 = (state_50021[(7)]);
var inst_49985 = (state_50021[(8)]);
var inst_49989 = (state_50021[(9)]);
var inst_49994 = (state_50021[(11)]);
var inst_49993 = (inst_49985[inst_49986] = inst_49989);
var inst_49994__$1 = (inst_49986 + (1));
var inst_49995 = (inst_49994__$1 < n);
var state_50021__$1 = (function (){var statearr_50035 = state_50021;
(statearr_50035[(12)] = inst_49993);

(statearr_50035[(11)] = inst_49994__$1);

return statearr_50035;
})();
if(cljs.core.truth_(inst_49995)){
var statearr_50036_50065 = state_50021__$1;
(statearr_50036_50065[(1)] = (8));

} else {
var statearr_50037_50066 = state_50021__$1;
(statearr_50037_50066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (14))){
var inst_50014 = (state_50021[(2)]);
var inst_50015 = cljs.core.async.close_BANG_.call(null,out);
var state_50021__$1 = (function (){var statearr_50039 = state_50021;
(statearr_50039[(13)] = inst_50014);

return statearr_50039;
})();
var statearr_50040_50067 = state_50021__$1;
(statearr_50040_50067[(2)] = inst_50015);

(statearr_50040_50067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (10))){
var inst_50005 = (state_50021[(2)]);
var state_50021__$1 = state_50021;
var statearr_50041_50068 = state_50021__$1;
(statearr_50041_50068[(2)] = inst_50005);

(statearr_50041_50068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50022 === (8))){
var inst_49985 = (state_50021[(8)]);
var inst_49994 = (state_50021[(11)]);
var tmp50038 = inst_49985;
var inst_49985__$1 = tmp50038;
var inst_49986 = inst_49994;
var state_50021__$1 = (function (){var statearr_50042 = state_50021;
(statearr_50042[(7)] = inst_49986);

(statearr_50042[(8)] = inst_49985__$1);

return statearr_50042;
})();
var statearr_50043_50069 = state_50021__$1;
(statearr_50043_50069[(2)] = null);

(statearr_50043_50069[(1)] = (2));


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
});})(c__41374__auto___50055,out))
;
return ((function (switch__41353__auto__,c__41374__auto___50055,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_50047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50047[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_50047[(1)] = (1));

return statearr_50047;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_50021){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_50021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e50048){if((e50048 instanceof Object)){
var ex__41357__auto__ = e50048;
var statearr_50049_50070 = state_50021;
(statearr_50049_50070[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50071 = state_50021;
state_50021 = G__50071;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_50021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_50021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___50055,out))
})();
var state__41376__auto__ = (function (){var statearr_50050 = f__41375__auto__.call(null);
(statearr_50050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___50055);

return statearr_50050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___50055,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50072 = [];
var len__38501__auto___50146 = arguments.length;
var i__38502__auto___50147 = (0);
while(true){
if((i__38502__auto___50147 < len__38501__auto___50146)){
args50072.push((arguments[i__38502__auto___50147]));

var G__50148 = (i__38502__auto___50147 + (1));
i__38502__auto___50147 = G__50148;
continue;
} else {
}
break;
}

var G__50074 = args50072.length;
switch (G__50074) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50072.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41374__auto___50150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___50150,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___50150,out){
return (function (state_50116){
var state_val_50117 = (state_50116[(1)]);
if((state_val_50117 === (7))){
var inst_50112 = (state_50116[(2)]);
var state_50116__$1 = state_50116;
var statearr_50118_50151 = state_50116__$1;
(statearr_50118_50151[(2)] = inst_50112);

(statearr_50118_50151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (1))){
var inst_50075 = [];
var inst_50076 = inst_50075;
var inst_50077 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50116__$1 = (function (){var statearr_50119 = state_50116;
(statearr_50119[(7)] = inst_50076);

(statearr_50119[(8)] = inst_50077);

return statearr_50119;
})();
var statearr_50120_50152 = state_50116__$1;
(statearr_50120_50152[(2)] = null);

(statearr_50120_50152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (4))){
var inst_50080 = (state_50116[(9)]);
var inst_50080__$1 = (state_50116[(2)]);
var inst_50081 = (inst_50080__$1 == null);
var inst_50082 = cljs.core.not.call(null,inst_50081);
var state_50116__$1 = (function (){var statearr_50121 = state_50116;
(statearr_50121[(9)] = inst_50080__$1);

return statearr_50121;
})();
if(inst_50082){
var statearr_50122_50153 = state_50116__$1;
(statearr_50122_50153[(1)] = (5));

} else {
var statearr_50123_50154 = state_50116__$1;
(statearr_50123_50154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (15))){
var inst_50106 = (state_50116[(2)]);
var state_50116__$1 = state_50116;
var statearr_50124_50155 = state_50116__$1;
(statearr_50124_50155[(2)] = inst_50106);

(statearr_50124_50155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (13))){
var state_50116__$1 = state_50116;
var statearr_50125_50156 = state_50116__$1;
(statearr_50125_50156[(2)] = null);

(statearr_50125_50156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (6))){
var inst_50076 = (state_50116[(7)]);
var inst_50101 = inst_50076.length;
var inst_50102 = (inst_50101 > (0));
var state_50116__$1 = state_50116;
if(cljs.core.truth_(inst_50102)){
var statearr_50126_50157 = state_50116__$1;
(statearr_50126_50157[(1)] = (12));

} else {
var statearr_50127_50158 = state_50116__$1;
(statearr_50127_50158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (3))){
var inst_50114 = (state_50116[(2)]);
var state_50116__$1 = state_50116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50116__$1,inst_50114);
} else {
if((state_val_50117 === (12))){
var inst_50076 = (state_50116[(7)]);
var inst_50104 = cljs.core.vec.call(null,inst_50076);
var state_50116__$1 = state_50116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50116__$1,(15),out,inst_50104);
} else {
if((state_val_50117 === (2))){
var state_50116__$1 = state_50116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50116__$1,(4),ch);
} else {
if((state_val_50117 === (11))){
var inst_50084 = (state_50116[(10)]);
var inst_50080 = (state_50116[(9)]);
var inst_50094 = (state_50116[(2)]);
var inst_50095 = [];
var inst_50096 = inst_50095.push(inst_50080);
var inst_50076 = inst_50095;
var inst_50077 = inst_50084;
var state_50116__$1 = (function (){var statearr_50128 = state_50116;
(statearr_50128[(7)] = inst_50076);

(statearr_50128[(8)] = inst_50077);

(statearr_50128[(11)] = inst_50094);

(statearr_50128[(12)] = inst_50096);

return statearr_50128;
})();
var statearr_50129_50159 = state_50116__$1;
(statearr_50129_50159[(2)] = null);

(statearr_50129_50159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (9))){
var inst_50076 = (state_50116[(7)]);
var inst_50092 = cljs.core.vec.call(null,inst_50076);
var state_50116__$1 = state_50116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50116__$1,(11),out,inst_50092);
} else {
if((state_val_50117 === (5))){
var inst_50084 = (state_50116[(10)]);
var inst_50080 = (state_50116[(9)]);
var inst_50077 = (state_50116[(8)]);
var inst_50084__$1 = f.call(null,inst_50080);
var inst_50085 = cljs.core._EQ_.call(null,inst_50084__$1,inst_50077);
var inst_50086 = cljs.core.keyword_identical_QMARK_.call(null,inst_50077,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50087 = (inst_50085) || (inst_50086);
var state_50116__$1 = (function (){var statearr_50130 = state_50116;
(statearr_50130[(10)] = inst_50084__$1);

return statearr_50130;
})();
if(cljs.core.truth_(inst_50087)){
var statearr_50131_50160 = state_50116__$1;
(statearr_50131_50160[(1)] = (8));

} else {
var statearr_50132_50161 = state_50116__$1;
(statearr_50132_50161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (14))){
var inst_50109 = (state_50116[(2)]);
var inst_50110 = cljs.core.async.close_BANG_.call(null,out);
var state_50116__$1 = (function (){var statearr_50134 = state_50116;
(statearr_50134[(13)] = inst_50109);

return statearr_50134;
})();
var statearr_50135_50162 = state_50116__$1;
(statearr_50135_50162[(2)] = inst_50110);

(statearr_50135_50162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (10))){
var inst_50099 = (state_50116[(2)]);
var state_50116__$1 = state_50116;
var statearr_50136_50163 = state_50116__$1;
(statearr_50136_50163[(2)] = inst_50099);

(statearr_50136_50163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50117 === (8))){
var inst_50084 = (state_50116[(10)]);
var inst_50076 = (state_50116[(7)]);
var inst_50080 = (state_50116[(9)]);
var inst_50089 = inst_50076.push(inst_50080);
var tmp50133 = inst_50076;
var inst_50076__$1 = tmp50133;
var inst_50077 = inst_50084;
var state_50116__$1 = (function (){var statearr_50137 = state_50116;
(statearr_50137[(7)] = inst_50076__$1);

(statearr_50137[(14)] = inst_50089);

(statearr_50137[(8)] = inst_50077);

return statearr_50137;
})();
var statearr_50138_50164 = state_50116__$1;
(statearr_50138_50164[(2)] = null);

(statearr_50138_50164[(1)] = (2));


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
});})(c__41374__auto___50150,out))
;
return ((function (switch__41353__auto__,c__41374__auto___50150,out){
return (function() {
var cljs$core$async$state_machine__41354__auto__ = null;
var cljs$core$async$state_machine__41354__auto____0 = (function (){
var statearr_50142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50142[(0)] = cljs$core$async$state_machine__41354__auto__);

(statearr_50142[(1)] = (1));

return statearr_50142;
});
var cljs$core$async$state_machine__41354__auto____1 = (function (state_50116){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_50116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e50143){if((e50143 instanceof Object)){
var ex__41357__auto__ = e50143;
var statearr_50144_50165 = state_50116;
(statearr_50144_50165[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50166 = state_50116;
state_50116 = G__50166;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
cljs$core$async$state_machine__41354__auto__ = function(state_50116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41354__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41354__auto____1.call(this,state_50116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41354__auto____0;
cljs$core$async$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41354__auto____1;
return cljs$core$async$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___50150,out))
})();
var state__41376__auto__ = (function (){var statearr_50145 = f__41375__auto__.call(null);
(statearr_50145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___50150);

return statearr_50145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___50150,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459008355261