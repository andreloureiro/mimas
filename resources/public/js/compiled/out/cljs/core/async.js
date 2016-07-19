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
var args44165 = [];
var len__38501__auto___44171 = arguments.length;
var i__38502__auto___44172 = (0);
while(true){
if((i__38502__auto___44172 < len__38501__auto___44171)){
args44165.push((arguments[i__38502__auto___44172]));

var G__44173 = (i__38502__auto___44172 + (1));
i__38502__auto___44172 = G__44173;
continue;
} else {
}
break;
}

var G__44167 = args44165.length;
switch (G__44167) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44165.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44168 = (function (f,blockable,meta44169){
this.f = f;
this.blockable = blockable;
this.meta44169 = meta44169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44170,meta44169__$1){
var self__ = this;
var _44170__$1 = this;
return (new cljs.core.async.t_cljs$core$async44168(self__.f,self__.blockable,meta44169__$1));
});

cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44170){
var self__ = this;
var _44170__$1 = this;
return self__.meta44169;
});

cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44169","meta44169",1181675835,null)], null);
});

cljs.core.async.t_cljs$core$async44168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44168";

cljs.core.async.t_cljs$core$async44168.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async44168");
});

cljs.core.async.__GT_t_cljs$core$async44168 = (function cljs$core$async$__GT_t_cljs$core$async44168(f__$1,blockable__$1,meta44169){
return (new cljs.core.async.t_cljs$core$async44168(f__$1,blockable__$1,meta44169));
});

}

return (new cljs.core.async.t_cljs$core$async44168(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44177 = [];
var len__38501__auto___44180 = arguments.length;
var i__38502__auto___44181 = (0);
while(true){
if((i__38502__auto___44181 < len__38501__auto___44180)){
args44177.push((arguments[i__38502__auto___44181]));

var G__44182 = (i__38502__auto___44181 + (1));
i__38502__auto___44181 = G__44182;
continue;
} else {
}
break;
}

var G__44179 = args44177.length;
switch (G__44179) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44177.length)].join('')));

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
var args44184 = [];
var len__38501__auto___44187 = arguments.length;
var i__38502__auto___44188 = (0);
while(true){
if((i__38502__auto___44188 < len__38501__auto___44187)){
args44184.push((arguments[i__38502__auto___44188]));

var G__44189 = (i__38502__auto___44188 + (1));
i__38502__auto___44188 = G__44189;
continue;
} else {
}
break;
}

var G__44186 = args44184.length;
switch (G__44186) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44184.length)].join('')));

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
var args44191 = [];
var len__38501__auto___44194 = arguments.length;
var i__38502__auto___44195 = (0);
while(true){
if((i__38502__auto___44195 < len__38501__auto___44194)){
args44191.push((arguments[i__38502__auto___44195]));

var G__44196 = (i__38502__auto___44195 + (1));
i__38502__auto___44195 = G__44196;
continue;
} else {
}
break;
}

var G__44193 = args44191.length;
switch (G__44193) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44191.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44198 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44198);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44198,ret){
return (function (){
return fn1.call(null,val_44198);
});})(val_44198,ret))
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
var args44199 = [];
var len__38501__auto___44202 = arguments.length;
var i__38502__auto___44203 = (0);
while(true){
if((i__38502__auto___44203 < len__38501__auto___44202)){
args44199.push((arguments[i__38502__auto___44203]));

var G__44204 = (i__38502__auto___44203 + (1));
i__38502__auto___44203 = G__44204;
continue;
} else {
}
break;
}

var G__44201 = args44199.length;
switch (G__44201) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44199.length)].join('')));

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
var n__38346__auto___44206 = n;
var x_44207 = (0);
while(true){
if((x_44207 < n__38346__auto___44206)){
(a[x_44207] = (0));

var G__44208 = (x_44207 + (1));
x_44207 = G__44208;
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

var G__44209 = (i + (1));
i = G__44209;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44213 = (function (alt_flag,flag,meta44214){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta44214 = meta44214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44215,meta44214__$1){
var self__ = this;
var _44215__$1 = this;
return (new cljs.core.async.t_cljs$core$async44213(self__.alt_flag,self__.flag,meta44214__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44215){
var self__ = this;
var _44215__$1 = this;
return self__.meta44214;
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44214","meta44214",-2123347516,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44213";

cljs.core.async.t_cljs$core$async44213.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async44213");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44213 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44213(alt_flag__$1,flag__$1,meta44214){
return (new cljs.core.async.t_cljs$core$async44213(alt_flag__$1,flag__$1,meta44214));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44213(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44219 = (function (alt_handler,flag,cb,meta44220){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta44220 = meta44220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44221,meta44220__$1){
var self__ = this;
var _44221__$1 = this;
return (new cljs.core.async.t_cljs$core$async44219(self__.alt_handler,self__.flag,self__.cb,meta44220__$1));
});

cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44221){
var self__ = this;
var _44221__$1 = this;
return self__.meta44220;
});

cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44220","meta44220",29208207,null)], null);
});

cljs.core.async.t_cljs$core$async44219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44219";

cljs.core.async.t_cljs$core$async44219.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async44219");
});

cljs.core.async.__GT_t_cljs$core$async44219 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44219(alt_handler__$1,flag__$1,cb__$1,meta44220){
return (new cljs.core.async.t_cljs$core$async44219(alt_handler__$1,flag__$1,cb__$1,meta44220));
});

}

return (new cljs.core.async.t_cljs$core$async44219(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44222_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44223_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44223_SHARP_,port], null));
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
var G__44224 = (i + (1));
i = G__44224;
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
var len__38501__auto___44230 = arguments.length;
var i__38502__auto___44231 = (0);
while(true){
if((i__38502__auto___44231 < len__38501__auto___44230)){
args__38508__auto__.push((arguments[i__38502__auto___44231]));

var G__44232 = (i__38502__auto___44231 + (1));
i__38502__auto___44231 = G__44232;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((1) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38509__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44227){
var map__44228 = p__44227;
var map__44228__$1 = ((((!((map__44228 == null)))?((((map__44228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44228):map__44228);
var opts = map__44228__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44225){
var G__44226 = cljs.core.first.call(null,seq44225);
var seq44225__$1 = cljs.core.next.call(null,seq44225);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44226,seq44225__$1);
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
var args44233 = [];
var len__38501__auto___44283 = arguments.length;
var i__38502__auto___44284 = (0);
while(true){
if((i__38502__auto___44284 < len__38501__auto___44283)){
args44233.push((arguments[i__38502__auto___44284]));

var G__44285 = (i__38502__auto___44284 + (1));
i__38502__auto___44284 = G__44285;
continue;
} else {
}
break;
}

var G__44235 = args44233.length;
switch (G__44235) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44233.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41400__auto___44287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___44287){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___44287){
return (function (state_44259){
var state_val_44260 = (state_44259[(1)]);
if((state_val_44260 === (7))){
var inst_44255 = (state_44259[(2)]);
var state_44259__$1 = state_44259;
var statearr_44261_44288 = state_44259__$1;
(statearr_44261_44288[(2)] = inst_44255);

(statearr_44261_44288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (1))){
var state_44259__$1 = state_44259;
var statearr_44262_44289 = state_44259__$1;
(statearr_44262_44289[(2)] = null);

(statearr_44262_44289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (4))){
var inst_44238 = (state_44259[(7)]);
var inst_44238__$1 = (state_44259[(2)]);
var inst_44239 = (inst_44238__$1 == null);
var state_44259__$1 = (function (){var statearr_44263 = state_44259;
(statearr_44263[(7)] = inst_44238__$1);

return statearr_44263;
})();
if(cljs.core.truth_(inst_44239)){
var statearr_44264_44290 = state_44259__$1;
(statearr_44264_44290[(1)] = (5));

} else {
var statearr_44265_44291 = state_44259__$1;
(statearr_44265_44291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (13))){
var state_44259__$1 = state_44259;
var statearr_44266_44292 = state_44259__$1;
(statearr_44266_44292[(2)] = null);

(statearr_44266_44292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (6))){
var inst_44238 = (state_44259[(7)]);
var state_44259__$1 = state_44259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44259__$1,(11),to,inst_44238);
} else {
if((state_val_44260 === (3))){
var inst_44257 = (state_44259[(2)]);
var state_44259__$1 = state_44259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44259__$1,inst_44257);
} else {
if((state_val_44260 === (12))){
var state_44259__$1 = state_44259;
var statearr_44267_44293 = state_44259__$1;
(statearr_44267_44293[(2)] = null);

(statearr_44267_44293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (2))){
var state_44259__$1 = state_44259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44259__$1,(4),from);
} else {
if((state_val_44260 === (11))){
var inst_44248 = (state_44259[(2)]);
var state_44259__$1 = state_44259;
if(cljs.core.truth_(inst_44248)){
var statearr_44268_44294 = state_44259__$1;
(statearr_44268_44294[(1)] = (12));

} else {
var statearr_44269_44295 = state_44259__$1;
(statearr_44269_44295[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (9))){
var state_44259__$1 = state_44259;
var statearr_44270_44296 = state_44259__$1;
(statearr_44270_44296[(2)] = null);

(statearr_44270_44296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (5))){
var state_44259__$1 = state_44259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44271_44297 = state_44259__$1;
(statearr_44271_44297[(1)] = (8));

} else {
var statearr_44272_44298 = state_44259__$1;
(statearr_44272_44298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (14))){
var inst_44253 = (state_44259[(2)]);
var state_44259__$1 = state_44259;
var statearr_44273_44299 = state_44259__$1;
(statearr_44273_44299[(2)] = inst_44253);

(statearr_44273_44299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (10))){
var inst_44245 = (state_44259[(2)]);
var state_44259__$1 = state_44259;
var statearr_44274_44300 = state_44259__$1;
(statearr_44274_44300[(2)] = inst_44245);

(statearr_44274_44300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44260 === (8))){
var inst_44242 = cljs.core.async.close_BANG_.call(null,to);
var state_44259__$1 = state_44259;
var statearr_44275_44301 = state_44259__$1;
(statearr_44275_44301[(2)] = inst_44242);

(statearr_44275_44301[(1)] = (10));


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
});})(c__41400__auto___44287))
;
return ((function (switch__41379__auto__,c__41400__auto___44287){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_44279 = [null,null,null,null,null,null,null,null];
(statearr_44279[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_44279[(1)] = (1));

return statearr_44279;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_44259){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44280){if((e44280 instanceof Object)){
var ex__41383__auto__ = e44280;
var statearr_44281_44302 = state_44259;
(statearr_44281_44302[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44303 = state_44259;
state_44259 = G__44303;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_44259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_44259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___44287))
})();
var state__41402__auto__ = (function (){var statearr_44282 = f__41401__auto__.call(null);
(statearr_44282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44287);

return statearr_44282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___44287))
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
return (function (p__44487){
var vec__44488 = p__44487;
var v = cljs.core.nth.call(null,vec__44488,(0),null);
var p = cljs.core.nth.call(null,vec__44488,(1),null);
var job = vec__44488;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41400__auto___44670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results){
return (function (state_44493){
var state_val_44494 = (state_44493[(1)]);
if((state_val_44494 === (1))){
var state_44493__$1 = state_44493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44493__$1,(2),res,v);
} else {
if((state_val_44494 === (2))){
var inst_44490 = (state_44493[(2)]);
var inst_44491 = cljs.core.async.close_BANG_.call(null,res);
var state_44493__$1 = (function (){var statearr_44495 = state_44493;
(statearr_44495[(7)] = inst_44490);

return statearr_44495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44493__$1,inst_44491);
} else {
return null;
}
}
});})(c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results))
;
return ((function (switch__41379__auto__,c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_44499 = [null,null,null,null,null,null,null,null];
(statearr_44499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__);

(statearr_44499[(1)] = (1));

return statearr_44499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1 = (function (state_44493){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44500){if((e44500 instanceof Object)){
var ex__41383__auto__ = e44500;
var statearr_44501_44671 = state_44493;
(statearr_44501_44671[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44672 = state_44493;
state_44493 = G__44672;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = function(state_44493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1.call(this,state_44493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results))
})();
var state__41402__auto__ = (function (){var statearr_44502 = f__41401__auto__.call(null);
(statearr_44502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44670);

return statearr_44502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___44670,res,vec__44488,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44503){
var vec__44504 = p__44503;
var v = cljs.core.nth.call(null,vec__44504,(0),null);
var p = cljs.core.nth.call(null,vec__44504,(1),null);
var job = vec__44504;
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
var n__38346__auto___44673 = n;
var __44674 = (0);
while(true){
if((__44674 < n__38346__auto___44673)){
var G__44505_44675 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44505_44675) {
case "compute":
var c__41400__auto___44677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44674,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (__44674,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function (state_44518){
var state_val_44519 = (state_44518[(1)]);
if((state_val_44519 === (1))){
var state_44518__$1 = state_44518;
var statearr_44520_44678 = state_44518__$1;
(statearr_44520_44678[(2)] = null);

(statearr_44520_44678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (2))){
var state_44518__$1 = state_44518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44518__$1,(4),jobs);
} else {
if((state_val_44519 === (3))){
var inst_44516 = (state_44518[(2)]);
var state_44518__$1 = state_44518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44518__$1,inst_44516);
} else {
if((state_val_44519 === (4))){
var inst_44508 = (state_44518[(2)]);
var inst_44509 = process.call(null,inst_44508);
var state_44518__$1 = state_44518;
if(cljs.core.truth_(inst_44509)){
var statearr_44521_44679 = state_44518__$1;
(statearr_44521_44679[(1)] = (5));

} else {
var statearr_44522_44680 = state_44518__$1;
(statearr_44522_44680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (5))){
var state_44518__$1 = state_44518;
var statearr_44523_44681 = state_44518__$1;
(statearr_44523_44681[(2)] = null);

(statearr_44523_44681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (6))){
var state_44518__$1 = state_44518;
var statearr_44524_44682 = state_44518__$1;
(statearr_44524_44682[(2)] = null);

(statearr_44524_44682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44519 === (7))){
var inst_44514 = (state_44518[(2)]);
var state_44518__$1 = state_44518;
var statearr_44525_44683 = state_44518__$1;
(statearr_44525_44683[(2)] = inst_44514);

(statearr_44525_44683[(1)] = (3));


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
});})(__44674,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
;
return ((function (__44674,switch__41379__auto__,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_44529 = [null,null,null,null,null,null,null];
(statearr_44529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__);

(statearr_44529[(1)] = (1));

return statearr_44529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1 = (function (state_44518){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44530){if((e44530 instanceof Object)){
var ex__41383__auto__ = e44530;
var statearr_44531_44684 = state_44518;
(statearr_44531_44684[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44685 = state_44518;
state_44518 = G__44685;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = function(state_44518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1.call(this,state_44518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__;
})()
;})(__44674,switch__41379__auto__,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
})();
var state__41402__auto__ = (function (){var statearr_44532 = f__41401__auto__.call(null);
(statearr_44532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44677);

return statearr_44532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(__44674,c__41400__auto___44677,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
);


break;
case "async":
var c__41400__auto___44686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44674,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (__44674,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function (state_44545){
var state_val_44546 = (state_44545[(1)]);
if((state_val_44546 === (1))){
var state_44545__$1 = state_44545;
var statearr_44547_44687 = state_44545__$1;
(statearr_44547_44687[(2)] = null);

(statearr_44547_44687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44546 === (2))){
var state_44545__$1 = state_44545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44545__$1,(4),jobs);
} else {
if((state_val_44546 === (3))){
var inst_44543 = (state_44545[(2)]);
var state_44545__$1 = state_44545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44545__$1,inst_44543);
} else {
if((state_val_44546 === (4))){
var inst_44535 = (state_44545[(2)]);
var inst_44536 = async.call(null,inst_44535);
var state_44545__$1 = state_44545;
if(cljs.core.truth_(inst_44536)){
var statearr_44548_44688 = state_44545__$1;
(statearr_44548_44688[(1)] = (5));

} else {
var statearr_44549_44689 = state_44545__$1;
(statearr_44549_44689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44546 === (5))){
var state_44545__$1 = state_44545;
var statearr_44550_44690 = state_44545__$1;
(statearr_44550_44690[(2)] = null);

(statearr_44550_44690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44546 === (6))){
var state_44545__$1 = state_44545;
var statearr_44551_44691 = state_44545__$1;
(statearr_44551_44691[(2)] = null);

(statearr_44551_44691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44546 === (7))){
var inst_44541 = (state_44545[(2)]);
var state_44545__$1 = state_44545;
var statearr_44552_44692 = state_44545__$1;
(statearr_44552_44692[(2)] = inst_44541);

(statearr_44552_44692[(1)] = (3));


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
});})(__44674,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
;
return ((function (__44674,switch__41379__auto__,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_44556 = [null,null,null,null,null,null,null];
(statearr_44556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__);

(statearr_44556[(1)] = (1));

return statearr_44556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1 = (function (state_44545){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44557){if((e44557 instanceof Object)){
var ex__41383__auto__ = e44557;
var statearr_44558_44693 = state_44545;
(statearr_44558_44693[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44694 = state_44545;
state_44545 = G__44694;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = function(state_44545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1.call(this,state_44545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__;
})()
;})(__44674,switch__41379__auto__,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
})();
var state__41402__auto__ = (function (){var statearr_44559 = f__41401__auto__.call(null);
(statearr_44559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44686);

return statearr_44559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(__44674,c__41400__auto___44686,G__44505_44675,n__38346__auto___44673,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44695 = (__44674 + (1));
__44674 = G__44695;
continue;
} else {
}
break;
}

var c__41400__auto___44696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___44696,jobs,results,process,async){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___44696,jobs,results,process,async){
return (function (state_44581){
var state_val_44582 = (state_44581[(1)]);
if((state_val_44582 === (1))){
var state_44581__$1 = state_44581;
var statearr_44583_44697 = state_44581__$1;
(statearr_44583_44697[(2)] = null);

(statearr_44583_44697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44582 === (2))){
var state_44581__$1 = state_44581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44581__$1,(4),from);
} else {
if((state_val_44582 === (3))){
var inst_44579 = (state_44581[(2)]);
var state_44581__$1 = state_44581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44581__$1,inst_44579);
} else {
if((state_val_44582 === (4))){
var inst_44562 = (state_44581[(7)]);
var inst_44562__$1 = (state_44581[(2)]);
var inst_44563 = (inst_44562__$1 == null);
var state_44581__$1 = (function (){var statearr_44584 = state_44581;
(statearr_44584[(7)] = inst_44562__$1);

return statearr_44584;
})();
if(cljs.core.truth_(inst_44563)){
var statearr_44585_44698 = state_44581__$1;
(statearr_44585_44698[(1)] = (5));

} else {
var statearr_44586_44699 = state_44581__$1;
(statearr_44586_44699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44582 === (5))){
var inst_44565 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44581__$1 = state_44581;
var statearr_44587_44700 = state_44581__$1;
(statearr_44587_44700[(2)] = inst_44565);

(statearr_44587_44700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44582 === (6))){
var inst_44567 = (state_44581[(8)]);
var inst_44562 = (state_44581[(7)]);
var inst_44567__$1 = cljs.core.async.chan.call(null,(1));
var inst_44568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44569 = [inst_44562,inst_44567__$1];
var inst_44570 = (new cljs.core.PersistentVector(null,2,(5),inst_44568,inst_44569,null));
var state_44581__$1 = (function (){var statearr_44588 = state_44581;
(statearr_44588[(8)] = inst_44567__$1);

return statearr_44588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44581__$1,(8),jobs,inst_44570);
} else {
if((state_val_44582 === (7))){
var inst_44577 = (state_44581[(2)]);
var state_44581__$1 = state_44581;
var statearr_44589_44701 = state_44581__$1;
(statearr_44589_44701[(2)] = inst_44577);

(statearr_44589_44701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44582 === (8))){
var inst_44567 = (state_44581[(8)]);
var inst_44572 = (state_44581[(2)]);
var state_44581__$1 = (function (){var statearr_44590 = state_44581;
(statearr_44590[(9)] = inst_44572);

return statearr_44590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44581__$1,(9),results,inst_44567);
} else {
if((state_val_44582 === (9))){
var inst_44574 = (state_44581[(2)]);
var state_44581__$1 = (function (){var statearr_44591 = state_44581;
(statearr_44591[(10)] = inst_44574);

return statearr_44591;
})();
var statearr_44592_44702 = state_44581__$1;
(statearr_44592_44702[(2)] = null);

(statearr_44592_44702[(1)] = (2));


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
});})(c__41400__auto___44696,jobs,results,process,async))
;
return ((function (switch__41379__auto__,c__41400__auto___44696,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_44596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__);

(statearr_44596[(1)] = (1));

return statearr_44596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1 = (function (state_44581){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44597){if((e44597 instanceof Object)){
var ex__41383__auto__ = e44597;
var statearr_44598_44703 = state_44581;
(statearr_44598_44703[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44704 = state_44581;
state_44581 = G__44704;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = function(state_44581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1.call(this,state_44581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___44696,jobs,results,process,async))
})();
var state__41402__auto__ = (function (){var statearr_44599 = f__41401__auto__.call(null);
(statearr_44599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44696);

return statearr_44599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___44696,jobs,results,process,async))
);


var c__41400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto__,jobs,results,process,async){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto__,jobs,results,process,async){
return (function (state_44637){
var state_val_44638 = (state_44637[(1)]);
if((state_val_44638 === (7))){
var inst_44633 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44639_44705 = state_44637__$1;
(statearr_44639_44705[(2)] = inst_44633);

(statearr_44639_44705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (20))){
var state_44637__$1 = state_44637;
var statearr_44640_44706 = state_44637__$1;
(statearr_44640_44706[(2)] = null);

(statearr_44640_44706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (1))){
var state_44637__$1 = state_44637;
var statearr_44641_44707 = state_44637__$1;
(statearr_44641_44707[(2)] = null);

(statearr_44641_44707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (4))){
var inst_44602 = (state_44637[(7)]);
var inst_44602__$1 = (state_44637[(2)]);
var inst_44603 = (inst_44602__$1 == null);
var state_44637__$1 = (function (){var statearr_44642 = state_44637;
(statearr_44642[(7)] = inst_44602__$1);

return statearr_44642;
})();
if(cljs.core.truth_(inst_44603)){
var statearr_44643_44708 = state_44637__$1;
(statearr_44643_44708[(1)] = (5));

} else {
var statearr_44644_44709 = state_44637__$1;
(statearr_44644_44709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (15))){
var inst_44615 = (state_44637[(8)]);
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44637__$1,(18),to,inst_44615);
} else {
if((state_val_44638 === (21))){
var inst_44628 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44645_44710 = state_44637__$1;
(statearr_44645_44710[(2)] = inst_44628);

(statearr_44645_44710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (13))){
var inst_44630 = (state_44637[(2)]);
var state_44637__$1 = (function (){var statearr_44646 = state_44637;
(statearr_44646[(9)] = inst_44630);

return statearr_44646;
})();
var statearr_44647_44711 = state_44637__$1;
(statearr_44647_44711[(2)] = null);

(statearr_44647_44711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (6))){
var inst_44602 = (state_44637[(7)]);
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44637__$1,(11),inst_44602);
} else {
if((state_val_44638 === (17))){
var inst_44623 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
if(cljs.core.truth_(inst_44623)){
var statearr_44648_44712 = state_44637__$1;
(statearr_44648_44712[(1)] = (19));

} else {
var statearr_44649_44713 = state_44637__$1;
(statearr_44649_44713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (3))){
var inst_44635 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44637__$1,inst_44635);
} else {
if((state_val_44638 === (12))){
var inst_44612 = (state_44637[(10)]);
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44637__$1,(14),inst_44612);
} else {
if((state_val_44638 === (2))){
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44637__$1,(4),results);
} else {
if((state_val_44638 === (19))){
var state_44637__$1 = state_44637;
var statearr_44650_44714 = state_44637__$1;
(statearr_44650_44714[(2)] = null);

(statearr_44650_44714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (11))){
var inst_44612 = (state_44637[(2)]);
var state_44637__$1 = (function (){var statearr_44651 = state_44637;
(statearr_44651[(10)] = inst_44612);

return statearr_44651;
})();
var statearr_44652_44715 = state_44637__$1;
(statearr_44652_44715[(2)] = null);

(statearr_44652_44715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (9))){
var state_44637__$1 = state_44637;
var statearr_44653_44716 = state_44637__$1;
(statearr_44653_44716[(2)] = null);

(statearr_44653_44716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (5))){
var state_44637__$1 = state_44637;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44654_44717 = state_44637__$1;
(statearr_44654_44717[(1)] = (8));

} else {
var statearr_44655_44718 = state_44637__$1;
(statearr_44655_44718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (14))){
var inst_44617 = (state_44637[(11)]);
var inst_44615 = (state_44637[(8)]);
var inst_44615__$1 = (state_44637[(2)]);
var inst_44616 = (inst_44615__$1 == null);
var inst_44617__$1 = cljs.core.not.call(null,inst_44616);
var state_44637__$1 = (function (){var statearr_44656 = state_44637;
(statearr_44656[(11)] = inst_44617__$1);

(statearr_44656[(8)] = inst_44615__$1);

return statearr_44656;
})();
if(inst_44617__$1){
var statearr_44657_44719 = state_44637__$1;
(statearr_44657_44719[(1)] = (15));

} else {
var statearr_44658_44720 = state_44637__$1;
(statearr_44658_44720[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (16))){
var inst_44617 = (state_44637[(11)]);
var state_44637__$1 = state_44637;
var statearr_44659_44721 = state_44637__$1;
(statearr_44659_44721[(2)] = inst_44617);

(statearr_44659_44721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (10))){
var inst_44609 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44660_44722 = state_44637__$1;
(statearr_44660_44722[(2)] = inst_44609);

(statearr_44660_44722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (18))){
var inst_44620 = (state_44637[(2)]);
var state_44637__$1 = state_44637;
var statearr_44661_44723 = state_44637__$1;
(statearr_44661_44723[(2)] = inst_44620);

(statearr_44661_44723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44638 === (8))){
var inst_44606 = cljs.core.async.close_BANG_.call(null,to);
var state_44637__$1 = state_44637;
var statearr_44662_44724 = state_44637__$1;
(statearr_44662_44724[(2)] = inst_44606);

(statearr_44662_44724[(1)] = (10));


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
});})(c__41400__auto__,jobs,results,process,async))
;
return ((function (switch__41379__auto__,c__41400__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_44666 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__);

(statearr_44666[(1)] = (1));

return statearr_44666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1 = (function (state_44637){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44667){if((e44667 instanceof Object)){
var ex__41383__auto__ = e44667;
var statearr_44668_44725 = state_44637;
(statearr_44668_44725[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44726 = state_44637;
state_44637 = G__44726;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__ = function(state_44637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1.call(this,state_44637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto__,jobs,results,process,async))
})();
var state__41402__auto__ = (function (){var statearr_44669 = f__41401__auto__.call(null);
(statearr_44669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto__);

return statearr_44669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto__,jobs,results,process,async))
);

return c__41400__auto__;
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
var args44727 = [];
var len__38501__auto___44730 = arguments.length;
var i__38502__auto___44731 = (0);
while(true){
if((i__38502__auto___44731 < len__38501__auto___44730)){
args44727.push((arguments[i__38502__auto___44731]));

var G__44732 = (i__38502__auto___44731 + (1));
i__38502__auto___44731 = G__44732;
continue;
} else {
}
break;
}

var G__44729 = args44727.length;
switch (G__44729) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44727.length)].join('')));

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
var args44734 = [];
var len__38501__auto___44737 = arguments.length;
var i__38502__auto___44738 = (0);
while(true){
if((i__38502__auto___44738 < len__38501__auto___44737)){
args44734.push((arguments[i__38502__auto___44738]));

var G__44739 = (i__38502__auto___44738 + (1));
i__38502__auto___44738 = G__44739;
continue;
} else {
}
break;
}

var G__44736 = args44734.length;
switch (G__44736) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44734.length)].join('')));

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
var args44741 = [];
var len__38501__auto___44794 = arguments.length;
var i__38502__auto___44795 = (0);
while(true){
if((i__38502__auto___44795 < len__38501__auto___44794)){
args44741.push((arguments[i__38502__auto___44795]));

var G__44796 = (i__38502__auto___44795 + (1));
i__38502__auto___44795 = G__44796;
continue;
} else {
}
break;
}

var G__44743 = args44741.length;
switch (G__44743) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44741.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41400__auto___44798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___44798,tc,fc){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___44798,tc,fc){
return (function (state_44769){
var state_val_44770 = (state_44769[(1)]);
if((state_val_44770 === (7))){
var inst_44765 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44771_44799 = state_44769__$1;
(statearr_44771_44799[(2)] = inst_44765);

(statearr_44771_44799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (1))){
var state_44769__$1 = state_44769;
var statearr_44772_44800 = state_44769__$1;
(statearr_44772_44800[(2)] = null);

(statearr_44772_44800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (4))){
var inst_44746 = (state_44769[(7)]);
var inst_44746__$1 = (state_44769[(2)]);
var inst_44747 = (inst_44746__$1 == null);
var state_44769__$1 = (function (){var statearr_44773 = state_44769;
(statearr_44773[(7)] = inst_44746__$1);

return statearr_44773;
})();
if(cljs.core.truth_(inst_44747)){
var statearr_44774_44801 = state_44769__$1;
(statearr_44774_44801[(1)] = (5));

} else {
var statearr_44775_44802 = state_44769__$1;
(statearr_44775_44802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (13))){
var state_44769__$1 = state_44769;
var statearr_44776_44803 = state_44769__$1;
(statearr_44776_44803[(2)] = null);

(statearr_44776_44803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (6))){
var inst_44746 = (state_44769[(7)]);
var inst_44752 = p.call(null,inst_44746);
var state_44769__$1 = state_44769;
if(cljs.core.truth_(inst_44752)){
var statearr_44777_44804 = state_44769__$1;
(statearr_44777_44804[(1)] = (9));

} else {
var statearr_44778_44805 = state_44769__$1;
(statearr_44778_44805[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (3))){
var inst_44767 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44769__$1,inst_44767);
} else {
if((state_val_44770 === (12))){
var state_44769__$1 = state_44769;
var statearr_44779_44806 = state_44769__$1;
(statearr_44779_44806[(2)] = null);

(statearr_44779_44806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (2))){
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44769__$1,(4),ch);
} else {
if((state_val_44770 === (11))){
var inst_44746 = (state_44769[(7)]);
var inst_44756 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44769__$1,(8),inst_44756,inst_44746);
} else {
if((state_val_44770 === (9))){
var state_44769__$1 = state_44769;
var statearr_44780_44807 = state_44769__$1;
(statearr_44780_44807[(2)] = tc);

(statearr_44780_44807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (5))){
var inst_44749 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44750 = cljs.core.async.close_BANG_.call(null,fc);
var state_44769__$1 = (function (){var statearr_44781 = state_44769;
(statearr_44781[(8)] = inst_44749);

return statearr_44781;
})();
var statearr_44782_44808 = state_44769__$1;
(statearr_44782_44808[(2)] = inst_44750);

(statearr_44782_44808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (14))){
var inst_44763 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44783_44809 = state_44769__$1;
(statearr_44783_44809[(2)] = inst_44763);

(statearr_44783_44809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (10))){
var state_44769__$1 = state_44769;
var statearr_44784_44810 = state_44769__$1;
(statearr_44784_44810[(2)] = fc);

(statearr_44784_44810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (8))){
var inst_44758 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
if(cljs.core.truth_(inst_44758)){
var statearr_44785_44811 = state_44769__$1;
(statearr_44785_44811[(1)] = (12));

} else {
var statearr_44786_44812 = state_44769__$1;
(statearr_44786_44812[(1)] = (13));

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
});})(c__41400__auto___44798,tc,fc))
;
return ((function (switch__41379__auto__,c__41400__auto___44798,tc,fc){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_44790 = [null,null,null,null,null,null,null,null,null];
(statearr_44790[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_44790[(1)] = (1));

return statearr_44790;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_44769){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44791){if((e44791 instanceof Object)){
var ex__41383__auto__ = e44791;
var statearr_44792_44813 = state_44769;
(statearr_44792_44813[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44814 = state_44769;
state_44769 = G__44814;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_44769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_44769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___44798,tc,fc))
})();
var state__41402__auto__ = (function (){var statearr_44793 = f__41401__auto__.call(null);
(statearr_44793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___44798);

return statearr_44793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___44798,tc,fc))
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
var c__41400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto__){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto__){
return (function (state_44878){
var state_val_44879 = (state_44878[(1)]);
if((state_val_44879 === (7))){
var inst_44874 = (state_44878[(2)]);
var state_44878__$1 = state_44878;
var statearr_44880_44901 = state_44878__$1;
(statearr_44880_44901[(2)] = inst_44874);

(statearr_44880_44901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (1))){
var inst_44858 = init;
var state_44878__$1 = (function (){var statearr_44881 = state_44878;
(statearr_44881[(7)] = inst_44858);

return statearr_44881;
})();
var statearr_44882_44902 = state_44878__$1;
(statearr_44882_44902[(2)] = null);

(statearr_44882_44902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (4))){
var inst_44861 = (state_44878[(8)]);
var inst_44861__$1 = (state_44878[(2)]);
var inst_44862 = (inst_44861__$1 == null);
var state_44878__$1 = (function (){var statearr_44883 = state_44878;
(statearr_44883[(8)] = inst_44861__$1);

return statearr_44883;
})();
if(cljs.core.truth_(inst_44862)){
var statearr_44884_44903 = state_44878__$1;
(statearr_44884_44903[(1)] = (5));

} else {
var statearr_44885_44904 = state_44878__$1;
(statearr_44885_44904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (6))){
var inst_44861 = (state_44878[(8)]);
var inst_44865 = (state_44878[(9)]);
var inst_44858 = (state_44878[(7)]);
var inst_44865__$1 = f.call(null,inst_44858,inst_44861);
var inst_44866 = cljs.core.reduced_QMARK_.call(null,inst_44865__$1);
var state_44878__$1 = (function (){var statearr_44886 = state_44878;
(statearr_44886[(9)] = inst_44865__$1);

return statearr_44886;
})();
if(inst_44866){
var statearr_44887_44905 = state_44878__$1;
(statearr_44887_44905[(1)] = (8));

} else {
var statearr_44888_44906 = state_44878__$1;
(statearr_44888_44906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (3))){
var inst_44876 = (state_44878[(2)]);
var state_44878__$1 = state_44878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44878__$1,inst_44876);
} else {
if((state_val_44879 === (2))){
var state_44878__$1 = state_44878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44878__$1,(4),ch);
} else {
if((state_val_44879 === (9))){
var inst_44865 = (state_44878[(9)]);
var inst_44858 = inst_44865;
var state_44878__$1 = (function (){var statearr_44889 = state_44878;
(statearr_44889[(7)] = inst_44858);

return statearr_44889;
})();
var statearr_44890_44907 = state_44878__$1;
(statearr_44890_44907[(2)] = null);

(statearr_44890_44907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (5))){
var inst_44858 = (state_44878[(7)]);
var state_44878__$1 = state_44878;
var statearr_44891_44908 = state_44878__$1;
(statearr_44891_44908[(2)] = inst_44858);

(statearr_44891_44908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (10))){
var inst_44872 = (state_44878[(2)]);
var state_44878__$1 = state_44878;
var statearr_44892_44909 = state_44878__$1;
(statearr_44892_44909[(2)] = inst_44872);

(statearr_44892_44909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44879 === (8))){
var inst_44865 = (state_44878[(9)]);
var inst_44868 = cljs.core.deref.call(null,inst_44865);
var state_44878__$1 = state_44878;
var statearr_44893_44910 = state_44878__$1;
(statearr_44893_44910[(2)] = inst_44868);

(statearr_44893_44910[(1)] = (10));


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
});})(c__41400__auto__))
;
return ((function (switch__41379__auto__,c__41400__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__41380__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41380__auto____0 = (function (){
var statearr_44897 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44897[(0)] = cljs$core$async$reduce_$_state_machine__41380__auto__);

(statearr_44897[(1)] = (1));

return statearr_44897;
});
var cljs$core$async$reduce_$_state_machine__41380__auto____1 = (function (state_44878){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44898){if((e44898 instanceof Object)){
var ex__41383__auto__ = e44898;
var statearr_44899_44911 = state_44878;
(statearr_44899_44911[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44912 = state_44878;
state_44878 = G__44912;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41380__auto__ = function(state_44878){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41380__auto____1.call(this,state_44878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41380__auto____0;
cljs$core$async$reduce_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41380__auto____1;
return cljs$core$async$reduce_$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto__))
})();
var state__41402__auto__ = (function (){var statearr_44900 = f__41401__auto__.call(null);
(statearr_44900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto__);

return statearr_44900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto__))
);

return c__41400__auto__;
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
var args44913 = [];
var len__38501__auto___44965 = arguments.length;
var i__38502__auto___44966 = (0);
while(true){
if((i__38502__auto___44966 < len__38501__auto___44965)){
args44913.push((arguments[i__38502__auto___44966]));

var G__44967 = (i__38502__auto___44966 + (1));
i__38502__auto___44966 = G__44967;
continue;
} else {
}
break;
}

var G__44915 = args44913.length;
switch (G__44915) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44913.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto__){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto__){
return (function (state_44940){
var state_val_44941 = (state_44940[(1)]);
if((state_val_44941 === (7))){
var inst_44922 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44942_44969 = state_44940__$1;
(statearr_44942_44969[(2)] = inst_44922);

(statearr_44942_44969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (1))){
var inst_44916 = cljs.core.seq.call(null,coll);
var inst_44917 = inst_44916;
var state_44940__$1 = (function (){var statearr_44943 = state_44940;
(statearr_44943[(7)] = inst_44917);

return statearr_44943;
})();
var statearr_44944_44970 = state_44940__$1;
(statearr_44944_44970[(2)] = null);

(statearr_44944_44970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (4))){
var inst_44917 = (state_44940[(7)]);
var inst_44920 = cljs.core.first.call(null,inst_44917);
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44940__$1,(7),ch,inst_44920);
} else {
if((state_val_44941 === (13))){
var inst_44934 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44945_44971 = state_44940__$1;
(statearr_44945_44971[(2)] = inst_44934);

(statearr_44945_44971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (6))){
var inst_44925 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44925)){
var statearr_44946_44972 = state_44940__$1;
(statearr_44946_44972[(1)] = (8));

} else {
var statearr_44947_44973 = state_44940__$1;
(statearr_44947_44973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (3))){
var inst_44938 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44940__$1,inst_44938);
} else {
if((state_val_44941 === (12))){
var state_44940__$1 = state_44940;
var statearr_44948_44974 = state_44940__$1;
(statearr_44948_44974[(2)] = null);

(statearr_44948_44974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (2))){
var inst_44917 = (state_44940[(7)]);
var state_44940__$1 = state_44940;
if(cljs.core.truth_(inst_44917)){
var statearr_44949_44975 = state_44940__$1;
(statearr_44949_44975[(1)] = (4));

} else {
var statearr_44950_44976 = state_44940__$1;
(statearr_44950_44976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (11))){
var inst_44931 = cljs.core.async.close_BANG_.call(null,ch);
var state_44940__$1 = state_44940;
var statearr_44951_44977 = state_44940__$1;
(statearr_44951_44977[(2)] = inst_44931);

(statearr_44951_44977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (9))){
var state_44940__$1 = state_44940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44952_44978 = state_44940__$1;
(statearr_44952_44978[(1)] = (11));

} else {
var statearr_44953_44979 = state_44940__$1;
(statearr_44953_44979[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (5))){
var inst_44917 = (state_44940[(7)]);
var state_44940__$1 = state_44940;
var statearr_44954_44980 = state_44940__$1;
(statearr_44954_44980[(2)] = inst_44917);

(statearr_44954_44980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (10))){
var inst_44936 = (state_44940[(2)]);
var state_44940__$1 = state_44940;
var statearr_44955_44981 = state_44940__$1;
(statearr_44955_44981[(2)] = inst_44936);

(statearr_44955_44981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44941 === (8))){
var inst_44917 = (state_44940[(7)]);
var inst_44927 = cljs.core.next.call(null,inst_44917);
var inst_44917__$1 = inst_44927;
var state_44940__$1 = (function (){var statearr_44956 = state_44940;
(statearr_44956[(7)] = inst_44917__$1);

return statearr_44956;
})();
var statearr_44957_44982 = state_44940__$1;
(statearr_44957_44982[(2)] = null);

(statearr_44957_44982[(1)] = (2));


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
});})(c__41400__auto__))
;
return ((function (switch__41379__auto__,c__41400__auto__){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_44961 = [null,null,null,null,null,null,null,null];
(statearr_44961[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_44961[(1)] = (1));

return statearr_44961;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_44940){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_44940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e44962){if((e44962 instanceof Object)){
var ex__41383__auto__ = e44962;
var statearr_44963_44983 = state_44940;
(statearr_44963_44983[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44984 = state_44940;
state_44940 = G__44984;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_44940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_44940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto__))
})();
var state__41402__auto__ = (function (){var statearr_44964 = f__41401__auto__.call(null);
(statearr_44964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto__);

return statearr_44964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto__))
);

return c__41400__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async45206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45206 = (function (mult,ch,cs,meta45207){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta45207 = meta45207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45208,meta45207__$1){
var self__ = this;
var _45208__$1 = this;
return (new cljs.core.async.t_cljs$core$async45206(self__.mult,self__.ch,self__.cs,meta45207__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45208){
var self__ = this;
var _45208__$1 = this;
return self__.meta45207;
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45207","meta45207",-1710280852,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45206";

cljs.core.async.t_cljs$core$async45206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async45206");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45206 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45206(mult__$1,ch__$1,cs__$1,meta45207){
return (new cljs.core.async.t_cljs$core$async45206(mult__$1,ch__$1,cs__$1,meta45207));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45206(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41400__auto___45427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___45427,cs,m,dchan,dctr,done){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___45427,cs,m,dchan,dctr,done){
return (function (state_45339){
var state_val_45340 = (state_45339[(1)]);
if((state_val_45340 === (7))){
var inst_45335 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45341_45428 = state_45339__$1;
(statearr_45341_45428[(2)] = inst_45335);

(statearr_45341_45428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (20))){
var inst_45240 = (state_45339[(7)]);
var inst_45250 = cljs.core.first.call(null,inst_45240);
var inst_45251 = cljs.core.nth.call(null,inst_45250,(0),null);
var inst_45252 = cljs.core.nth.call(null,inst_45250,(1),null);
var state_45339__$1 = (function (){var statearr_45342 = state_45339;
(statearr_45342[(8)] = inst_45251);

return statearr_45342;
})();
if(cljs.core.truth_(inst_45252)){
var statearr_45343_45429 = state_45339__$1;
(statearr_45343_45429[(1)] = (22));

} else {
var statearr_45344_45430 = state_45339__$1;
(statearr_45344_45430[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (27))){
var inst_45280 = (state_45339[(9)]);
var inst_45287 = (state_45339[(10)]);
var inst_45282 = (state_45339[(11)]);
var inst_45211 = (state_45339[(12)]);
var inst_45287__$1 = cljs.core._nth.call(null,inst_45280,inst_45282);
var inst_45288 = cljs.core.async.put_BANG_.call(null,inst_45287__$1,inst_45211,done);
var state_45339__$1 = (function (){var statearr_45345 = state_45339;
(statearr_45345[(10)] = inst_45287__$1);

return statearr_45345;
})();
if(cljs.core.truth_(inst_45288)){
var statearr_45346_45431 = state_45339__$1;
(statearr_45346_45431[(1)] = (30));

} else {
var statearr_45347_45432 = state_45339__$1;
(statearr_45347_45432[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (1))){
var state_45339__$1 = state_45339;
var statearr_45348_45433 = state_45339__$1;
(statearr_45348_45433[(2)] = null);

(statearr_45348_45433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (24))){
var inst_45240 = (state_45339[(7)]);
var inst_45257 = (state_45339[(2)]);
var inst_45258 = cljs.core.next.call(null,inst_45240);
var inst_45220 = inst_45258;
var inst_45221 = null;
var inst_45222 = (0);
var inst_45223 = (0);
var state_45339__$1 = (function (){var statearr_45349 = state_45339;
(statearr_45349[(13)] = inst_45220);

(statearr_45349[(14)] = inst_45223);

(statearr_45349[(15)] = inst_45222);

(statearr_45349[(16)] = inst_45257);

(statearr_45349[(17)] = inst_45221);

return statearr_45349;
})();
var statearr_45350_45434 = state_45339__$1;
(statearr_45350_45434[(2)] = null);

(statearr_45350_45434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (39))){
var state_45339__$1 = state_45339;
var statearr_45354_45435 = state_45339__$1;
(statearr_45354_45435[(2)] = null);

(statearr_45354_45435[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (4))){
var inst_45211 = (state_45339[(12)]);
var inst_45211__$1 = (state_45339[(2)]);
var inst_45212 = (inst_45211__$1 == null);
var state_45339__$1 = (function (){var statearr_45355 = state_45339;
(statearr_45355[(12)] = inst_45211__$1);

return statearr_45355;
})();
if(cljs.core.truth_(inst_45212)){
var statearr_45356_45436 = state_45339__$1;
(statearr_45356_45436[(1)] = (5));

} else {
var statearr_45357_45437 = state_45339__$1;
(statearr_45357_45437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (15))){
var inst_45220 = (state_45339[(13)]);
var inst_45223 = (state_45339[(14)]);
var inst_45222 = (state_45339[(15)]);
var inst_45221 = (state_45339[(17)]);
var inst_45236 = (state_45339[(2)]);
var inst_45237 = (inst_45223 + (1));
var tmp45351 = inst_45220;
var tmp45352 = inst_45222;
var tmp45353 = inst_45221;
var inst_45220__$1 = tmp45351;
var inst_45221__$1 = tmp45353;
var inst_45222__$1 = tmp45352;
var inst_45223__$1 = inst_45237;
var state_45339__$1 = (function (){var statearr_45358 = state_45339;
(statearr_45358[(18)] = inst_45236);

(statearr_45358[(13)] = inst_45220__$1);

(statearr_45358[(14)] = inst_45223__$1);

(statearr_45358[(15)] = inst_45222__$1);

(statearr_45358[(17)] = inst_45221__$1);

return statearr_45358;
})();
var statearr_45359_45438 = state_45339__$1;
(statearr_45359_45438[(2)] = null);

(statearr_45359_45438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (21))){
var inst_45261 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45363_45439 = state_45339__$1;
(statearr_45363_45439[(2)] = inst_45261);

(statearr_45363_45439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (31))){
var inst_45287 = (state_45339[(10)]);
var inst_45291 = done.call(null,null);
var inst_45292 = cljs.core.async.untap_STAR_.call(null,m,inst_45287);
var state_45339__$1 = (function (){var statearr_45364 = state_45339;
(statearr_45364[(19)] = inst_45291);

return statearr_45364;
})();
var statearr_45365_45440 = state_45339__$1;
(statearr_45365_45440[(2)] = inst_45292);

(statearr_45365_45440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (32))){
var inst_45280 = (state_45339[(9)]);
var inst_45282 = (state_45339[(11)]);
var inst_45279 = (state_45339[(20)]);
var inst_45281 = (state_45339[(21)]);
var inst_45294 = (state_45339[(2)]);
var inst_45295 = (inst_45282 + (1));
var tmp45360 = inst_45280;
var tmp45361 = inst_45279;
var tmp45362 = inst_45281;
var inst_45279__$1 = tmp45361;
var inst_45280__$1 = tmp45360;
var inst_45281__$1 = tmp45362;
var inst_45282__$1 = inst_45295;
var state_45339__$1 = (function (){var statearr_45366 = state_45339;
(statearr_45366[(9)] = inst_45280__$1);

(statearr_45366[(11)] = inst_45282__$1);

(statearr_45366[(22)] = inst_45294);

(statearr_45366[(20)] = inst_45279__$1);

(statearr_45366[(21)] = inst_45281__$1);

return statearr_45366;
})();
var statearr_45367_45441 = state_45339__$1;
(statearr_45367_45441[(2)] = null);

(statearr_45367_45441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (40))){
var inst_45307 = (state_45339[(23)]);
var inst_45311 = done.call(null,null);
var inst_45312 = cljs.core.async.untap_STAR_.call(null,m,inst_45307);
var state_45339__$1 = (function (){var statearr_45368 = state_45339;
(statearr_45368[(24)] = inst_45311);

return statearr_45368;
})();
var statearr_45369_45442 = state_45339__$1;
(statearr_45369_45442[(2)] = inst_45312);

(statearr_45369_45442[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (33))){
var inst_45298 = (state_45339[(25)]);
var inst_45300 = cljs.core.chunked_seq_QMARK_.call(null,inst_45298);
var state_45339__$1 = state_45339;
if(inst_45300){
var statearr_45370_45443 = state_45339__$1;
(statearr_45370_45443[(1)] = (36));

} else {
var statearr_45371_45444 = state_45339__$1;
(statearr_45371_45444[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (13))){
var inst_45230 = (state_45339[(26)]);
var inst_45233 = cljs.core.async.close_BANG_.call(null,inst_45230);
var state_45339__$1 = state_45339;
var statearr_45372_45445 = state_45339__$1;
(statearr_45372_45445[(2)] = inst_45233);

(statearr_45372_45445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (22))){
var inst_45251 = (state_45339[(8)]);
var inst_45254 = cljs.core.async.close_BANG_.call(null,inst_45251);
var state_45339__$1 = state_45339;
var statearr_45373_45446 = state_45339__$1;
(statearr_45373_45446[(2)] = inst_45254);

(statearr_45373_45446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (36))){
var inst_45298 = (state_45339[(25)]);
var inst_45302 = cljs.core.chunk_first.call(null,inst_45298);
var inst_45303 = cljs.core.chunk_rest.call(null,inst_45298);
var inst_45304 = cljs.core.count.call(null,inst_45302);
var inst_45279 = inst_45303;
var inst_45280 = inst_45302;
var inst_45281 = inst_45304;
var inst_45282 = (0);
var state_45339__$1 = (function (){var statearr_45374 = state_45339;
(statearr_45374[(9)] = inst_45280);

(statearr_45374[(11)] = inst_45282);

(statearr_45374[(20)] = inst_45279);

(statearr_45374[(21)] = inst_45281);

return statearr_45374;
})();
var statearr_45375_45447 = state_45339__$1;
(statearr_45375_45447[(2)] = null);

(statearr_45375_45447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (41))){
var inst_45298 = (state_45339[(25)]);
var inst_45314 = (state_45339[(2)]);
var inst_45315 = cljs.core.next.call(null,inst_45298);
var inst_45279 = inst_45315;
var inst_45280 = null;
var inst_45281 = (0);
var inst_45282 = (0);
var state_45339__$1 = (function (){var statearr_45376 = state_45339;
(statearr_45376[(9)] = inst_45280);

(statearr_45376[(11)] = inst_45282);

(statearr_45376[(27)] = inst_45314);

(statearr_45376[(20)] = inst_45279);

(statearr_45376[(21)] = inst_45281);

return statearr_45376;
})();
var statearr_45377_45448 = state_45339__$1;
(statearr_45377_45448[(2)] = null);

(statearr_45377_45448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (43))){
var state_45339__$1 = state_45339;
var statearr_45378_45449 = state_45339__$1;
(statearr_45378_45449[(2)] = null);

(statearr_45378_45449[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (29))){
var inst_45323 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45379_45450 = state_45339__$1;
(statearr_45379_45450[(2)] = inst_45323);

(statearr_45379_45450[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (44))){
var inst_45332 = (state_45339[(2)]);
var state_45339__$1 = (function (){var statearr_45380 = state_45339;
(statearr_45380[(28)] = inst_45332);

return statearr_45380;
})();
var statearr_45381_45451 = state_45339__$1;
(statearr_45381_45451[(2)] = null);

(statearr_45381_45451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (6))){
var inst_45271 = (state_45339[(29)]);
var inst_45270 = cljs.core.deref.call(null,cs);
var inst_45271__$1 = cljs.core.keys.call(null,inst_45270);
var inst_45272 = cljs.core.count.call(null,inst_45271__$1);
var inst_45273 = cljs.core.reset_BANG_.call(null,dctr,inst_45272);
var inst_45278 = cljs.core.seq.call(null,inst_45271__$1);
var inst_45279 = inst_45278;
var inst_45280 = null;
var inst_45281 = (0);
var inst_45282 = (0);
var state_45339__$1 = (function (){var statearr_45382 = state_45339;
(statearr_45382[(9)] = inst_45280);

(statearr_45382[(29)] = inst_45271__$1);

(statearr_45382[(11)] = inst_45282);

(statearr_45382[(30)] = inst_45273);

(statearr_45382[(20)] = inst_45279);

(statearr_45382[(21)] = inst_45281);

return statearr_45382;
})();
var statearr_45383_45452 = state_45339__$1;
(statearr_45383_45452[(2)] = null);

(statearr_45383_45452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (28))){
var inst_45298 = (state_45339[(25)]);
var inst_45279 = (state_45339[(20)]);
var inst_45298__$1 = cljs.core.seq.call(null,inst_45279);
var state_45339__$1 = (function (){var statearr_45384 = state_45339;
(statearr_45384[(25)] = inst_45298__$1);

return statearr_45384;
})();
if(inst_45298__$1){
var statearr_45385_45453 = state_45339__$1;
(statearr_45385_45453[(1)] = (33));

} else {
var statearr_45386_45454 = state_45339__$1;
(statearr_45386_45454[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (25))){
var inst_45282 = (state_45339[(11)]);
var inst_45281 = (state_45339[(21)]);
var inst_45284 = (inst_45282 < inst_45281);
var inst_45285 = inst_45284;
var state_45339__$1 = state_45339;
if(cljs.core.truth_(inst_45285)){
var statearr_45387_45455 = state_45339__$1;
(statearr_45387_45455[(1)] = (27));

} else {
var statearr_45388_45456 = state_45339__$1;
(statearr_45388_45456[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (34))){
var state_45339__$1 = state_45339;
var statearr_45389_45457 = state_45339__$1;
(statearr_45389_45457[(2)] = null);

(statearr_45389_45457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (17))){
var state_45339__$1 = state_45339;
var statearr_45390_45458 = state_45339__$1;
(statearr_45390_45458[(2)] = null);

(statearr_45390_45458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (3))){
var inst_45337 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45339__$1,inst_45337);
} else {
if((state_val_45340 === (12))){
var inst_45266 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45391_45459 = state_45339__$1;
(statearr_45391_45459[(2)] = inst_45266);

(statearr_45391_45459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (2))){
var state_45339__$1 = state_45339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45339__$1,(4),ch);
} else {
if((state_val_45340 === (23))){
var state_45339__$1 = state_45339;
var statearr_45392_45460 = state_45339__$1;
(statearr_45392_45460[(2)] = null);

(statearr_45392_45460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (35))){
var inst_45321 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45393_45461 = state_45339__$1;
(statearr_45393_45461[(2)] = inst_45321);

(statearr_45393_45461[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (19))){
var inst_45240 = (state_45339[(7)]);
var inst_45244 = cljs.core.chunk_first.call(null,inst_45240);
var inst_45245 = cljs.core.chunk_rest.call(null,inst_45240);
var inst_45246 = cljs.core.count.call(null,inst_45244);
var inst_45220 = inst_45245;
var inst_45221 = inst_45244;
var inst_45222 = inst_45246;
var inst_45223 = (0);
var state_45339__$1 = (function (){var statearr_45394 = state_45339;
(statearr_45394[(13)] = inst_45220);

(statearr_45394[(14)] = inst_45223);

(statearr_45394[(15)] = inst_45222);

(statearr_45394[(17)] = inst_45221);

return statearr_45394;
})();
var statearr_45395_45462 = state_45339__$1;
(statearr_45395_45462[(2)] = null);

(statearr_45395_45462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (11))){
var inst_45220 = (state_45339[(13)]);
var inst_45240 = (state_45339[(7)]);
var inst_45240__$1 = cljs.core.seq.call(null,inst_45220);
var state_45339__$1 = (function (){var statearr_45396 = state_45339;
(statearr_45396[(7)] = inst_45240__$1);

return statearr_45396;
})();
if(inst_45240__$1){
var statearr_45397_45463 = state_45339__$1;
(statearr_45397_45463[(1)] = (16));

} else {
var statearr_45398_45464 = state_45339__$1;
(statearr_45398_45464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (9))){
var inst_45268 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45399_45465 = state_45339__$1;
(statearr_45399_45465[(2)] = inst_45268);

(statearr_45399_45465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (5))){
var inst_45218 = cljs.core.deref.call(null,cs);
var inst_45219 = cljs.core.seq.call(null,inst_45218);
var inst_45220 = inst_45219;
var inst_45221 = null;
var inst_45222 = (0);
var inst_45223 = (0);
var state_45339__$1 = (function (){var statearr_45400 = state_45339;
(statearr_45400[(13)] = inst_45220);

(statearr_45400[(14)] = inst_45223);

(statearr_45400[(15)] = inst_45222);

(statearr_45400[(17)] = inst_45221);

return statearr_45400;
})();
var statearr_45401_45466 = state_45339__$1;
(statearr_45401_45466[(2)] = null);

(statearr_45401_45466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (14))){
var state_45339__$1 = state_45339;
var statearr_45402_45467 = state_45339__$1;
(statearr_45402_45467[(2)] = null);

(statearr_45402_45467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (45))){
var inst_45329 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45403_45468 = state_45339__$1;
(statearr_45403_45468[(2)] = inst_45329);

(statearr_45403_45468[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (26))){
var inst_45271 = (state_45339[(29)]);
var inst_45325 = (state_45339[(2)]);
var inst_45326 = cljs.core.seq.call(null,inst_45271);
var state_45339__$1 = (function (){var statearr_45404 = state_45339;
(statearr_45404[(31)] = inst_45325);

return statearr_45404;
})();
if(inst_45326){
var statearr_45405_45469 = state_45339__$1;
(statearr_45405_45469[(1)] = (42));

} else {
var statearr_45406_45470 = state_45339__$1;
(statearr_45406_45470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (16))){
var inst_45240 = (state_45339[(7)]);
var inst_45242 = cljs.core.chunked_seq_QMARK_.call(null,inst_45240);
var state_45339__$1 = state_45339;
if(inst_45242){
var statearr_45407_45471 = state_45339__$1;
(statearr_45407_45471[(1)] = (19));

} else {
var statearr_45408_45472 = state_45339__$1;
(statearr_45408_45472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (38))){
var inst_45318 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45409_45473 = state_45339__$1;
(statearr_45409_45473[(2)] = inst_45318);

(statearr_45409_45473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (30))){
var state_45339__$1 = state_45339;
var statearr_45410_45474 = state_45339__$1;
(statearr_45410_45474[(2)] = null);

(statearr_45410_45474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (10))){
var inst_45223 = (state_45339[(14)]);
var inst_45221 = (state_45339[(17)]);
var inst_45229 = cljs.core._nth.call(null,inst_45221,inst_45223);
var inst_45230 = cljs.core.nth.call(null,inst_45229,(0),null);
var inst_45231 = cljs.core.nth.call(null,inst_45229,(1),null);
var state_45339__$1 = (function (){var statearr_45411 = state_45339;
(statearr_45411[(26)] = inst_45230);

return statearr_45411;
})();
if(cljs.core.truth_(inst_45231)){
var statearr_45412_45475 = state_45339__$1;
(statearr_45412_45475[(1)] = (13));

} else {
var statearr_45413_45476 = state_45339__$1;
(statearr_45413_45476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (18))){
var inst_45264 = (state_45339[(2)]);
var state_45339__$1 = state_45339;
var statearr_45414_45477 = state_45339__$1;
(statearr_45414_45477[(2)] = inst_45264);

(statearr_45414_45477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (42))){
var state_45339__$1 = state_45339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45339__$1,(45),dchan);
} else {
if((state_val_45340 === (37))){
var inst_45298 = (state_45339[(25)]);
var inst_45307 = (state_45339[(23)]);
var inst_45211 = (state_45339[(12)]);
var inst_45307__$1 = cljs.core.first.call(null,inst_45298);
var inst_45308 = cljs.core.async.put_BANG_.call(null,inst_45307__$1,inst_45211,done);
var state_45339__$1 = (function (){var statearr_45415 = state_45339;
(statearr_45415[(23)] = inst_45307__$1);

return statearr_45415;
})();
if(cljs.core.truth_(inst_45308)){
var statearr_45416_45478 = state_45339__$1;
(statearr_45416_45478[(1)] = (39));

} else {
var statearr_45417_45479 = state_45339__$1;
(statearr_45417_45479[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45340 === (8))){
var inst_45223 = (state_45339[(14)]);
var inst_45222 = (state_45339[(15)]);
var inst_45225 = (inst_45223 < inst_45222);
var inst_45226 = inst_45225;
var state_45339__$1 = state_45339;
if(cljs.core.truth_(inst_45226)){
var statearr_45418_45480 = state_45339__$1;
(statearr_45418_45480[(1)] = (10));

} else {
var statearr_45419_45481 = state_45339__$1;
(statearr_45419_45481[(1)] = (11));

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
});})(c__41400__auto___45427,cs,m,dchan,dctr,done))
;
return ((function (switch__41379__auto__,c__41400__auto___45427,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__41380__auto__ = null;
var cljs$core$async$mult_$_state_machine__41380__auto____0 = (function (){
var statearr_45423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45423[(0)] = cljs$core$async$mult_$_state_machine__41380__auto__);

(statearr_45423[(1)] = (1));

return statearr_45423;
});
var cljs$core$async$mult_$_state_machine__41380__auto____1 = (function (state_45339){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_45339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e45424){if((e45424 instanceof Object)){
var ex__41383__auto__ = e45424;
var statearr_45425_45482 = state_45339;
(statearr_45425_45482[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45483 = state_45339;
state_45339 = G__45483;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41380__auto__ = function(state_45339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41380__auto____1.call(this,state_45339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41380__auto____0;
cljs$core$async$mult_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41380__auto____1;
return cljs$core$async$mult_$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___45427,cs,m,dchan,dctr,done))
})();
var state__41402__auto__ = (function (){var statearr_45426 = f__41401__auto__.call(null);
(statearr_45426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___45427);

return statearr_45426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___45427,cs,m,dchan,dctr,done))
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
var args45484 = [];
var len__38501__auto___45487 = arguments.length;
var i__38502__auto___45488 = (0);
while(true){
if((i__38502__auto___45488 < len__38501__auto___45487)){
args45484.push((arguments[i__38502__auto___45488]));

var G__45489 = (i__38502__auto___45488 + (1));
i__38502__auto___45488 = G__45489;
continue;
} else {
}
break;
}

var G__45486 = args45484.length;
switch (G__45486) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45484.length)].join('')));

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
var len__38501__auto___45501 = arguments.length;
var i__38502__auto___45502 = (0);
while(true){
if((i__38502__auto___45502 < len__38501__auto___45501)){
args__38508__auto__.push((arguments[i__38502__auto___45502]));

var G__45503 = (i__38502__auto___45502 + (1));
i__38502__auto___45502 = G__45503;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((3) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38509__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45495){
var map__45496 = p__45495;
var map__45496__$1 = ((((!((map__45496 == null)))?((((map__45496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45496):map__45496);
var opts = map__45496__$1;
var statearr_45498_45504 = state;
(statearr_45498_45504[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45496,map__45496__$1,opts){
return (function (val){
var statearr_45499_45505 = state;
(statearr_45499_45505[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45496,map__45496__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45500_45506 = state;
(statearr_45500_45506[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45491){
var G__45492 = cljs.core.first.call(null,seq45491);
var seq45491__$1 = cljs.core.next.call(null,seq45491);
var G__45493 = cljs.core.first.call(null,seq45491__$1);
var seq45491__$2 = cljs.core.next.call(null,seq45491__$1);
var G__45494 = cljs.core.first.call(null,seq45491__$2);
var seq45491__$3 = cljs.core.next.call(null,seq45491__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45492,G__45493,G__45494,seq45491__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45670 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45671){
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
this.meta45671 = meta45671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45672,meta45671__$1){
var self__ = this;
var _45672__$1 = this;
return (new cljs.core.async.t_cljs$core$async45670(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45672){
var self__ = this;
var _45672__$1 = this;
return self__.meta45671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45670.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45671","meta45671",1135197695,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45670";

cljs.core.async.t_cljs$core$async45670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async45670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45671){
return (new cljs.core.async.t_cljs$core$async45670(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45670(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41400__auto___45833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45770){
var state_val_45771 = (state_45770[(1)]);
if((state_val_45771 === (7))){
var inst_45688 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
var statearr_45772_45834 = state_45770__$1;
(statearr_45772_45834[(2)] = inst_45688);

(statearr_45772_45834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (20))){
var inst_45700 = (state_45770[(7)]);
var state_45770__$1 = state_45770;
var statearr_45773_45835 = state_45770__$1;
(statearr_45773_45835[(2)] = inst_45700);

(statearr_45773_45835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (27))){
var state_45770__$1 = state_45770;
var statearr_45774_45836 = state_45770__$1;
(statearr_45774_45836[(2)] = null);

(statearr_45774_45836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (1))){
var inst_45676 = (state_45770[(8)]);
var inst_45676__$1 = calc_state.call(null);
var inst_45678 = (inst_45676__$1 == null);
var inst_45679 = cljs.core.not.call(null,inst_45678);
var state_45770__$1 = (function (){var statearr_45775 = state_45770;
(statearr_45775[(8)] = inst_45676__$1);

return statearr_45775;
})();
if(inst_45679){
var statearr_45776_45837 = state_45770__$1;
(statearr_45776_45837[(1)] = (2));

} else {
var statearr_45777_45838 = state_45770__$1;
(statearr_45777_45838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (24))){
var inst_45723 = (state_45770[(9)]);
var inst_45730 = (state_45770[(10)]);
var inst_45744 = (state_45770[(11)]);
var inst_45744__$1 = inst_45723.call(null,inst_45730);
var state_45770__$1 = (function (){var statearr_45778 = state_45770;
(statearr_45778[(11)] = inst_45744__$1);

return statearr_45778;
})();
if(cljs.core.truth_(inst_45744__$1)){
var statearr_45779_45839 = state_45770__$1;
(statearr_45779_45839[(1)] = (29));

} else {
var statearr_45780_45840 = state_45770__$1;
(statearr_45780_45840[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (4))){
var inst_45691 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45691)){
var statearr_45781_45841 = state_45770__$1;
(statearr_45781_45841[(1)] = (8));

} else {
var statearr_45782_45842 = state_45770__$1;
(statearr_45782_45842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (15))){
var inst_45717 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45717)){
var statearr_45783_45843 = state_45770__$1;
(statearr_45783_45843[(1)] = (19));

} else {
var statearr_45784_45844 = state_45770__$1;
(statearr_45784_45844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (21))){
var inst_45722 = (state_45770[(12)]);
var inst_45722__$1 = (state_45770[(2)]);
var inst_45723 = cljs.core.get.call(null,inst_45722__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45724 = cljs.core.get.call(null,inst_45722__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45725 = cljs.core.get.call(null,inst_45722__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45770__$1 = (function (){var statearr_45785 = state_45770;
(statearr_45785[(9)] = inst_45723);

(statearr_45785[(13)] = inst_45724);

(statearr_45785[(12)] = inst_45722__$1);

return statearr_45785;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45770__$1,(22),inst_45725);
} else {
if((state_val_45771 === (31))){
var inst_45752 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45752)){
var statearr_45786_45845 = state_45770__$1;
(statearr_45786_45845[(1)] = (32));

} else {
var statearr_45787_45846 = state_45770__$1;
(statearr_45787_45846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (32))){
var inst_45729 = (state_45770[(14)]);
var state_45770__$1 = state_45770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45770__$1,(35),out,inst_45729);
} else {
if((state_val_45771 === (33))){
var inst_45722 = (state_45770[(12)]);
var inst_45700 = inst_45722;
var state_45770__$1 = (function (){var statearr_45788 = state_45770;
(statearr_45788[(7)] = inst_45700);

return statearr_45788;
})();
var statearr_45789_45847 = state_45770__$1;
(statearr_45789_45847[(2)] = null);

(statearr_45789_45847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (13))){
var inst_45700 = (state_45770[(7)]);
var inst_45707 = inst_45700.cljs$lang$protocol_mask$partition0$;
var inst_45708 = (inst_45707 & (64));
var inst_45709 = inst_45700.cljs$core$ISeq$;
var inst_45710 = (inst_45708) || (inst_45709);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45710)){
var statearr_45790_45848 = state_45770__$1;
(statearr_45790_45848[(1)] = (16));

} else {
var statearr_45791_45849 = state_45770__$1;
(statearr_45791_45849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (22))){
var inst_45730 = (state_45770[(10)]);
var inst_45729 = (state_45770[(14)]);
var inst_45728 = (state_45770[(2)]);
var inst_45729__$1 = cljs.core.nth.call(null,inst_45728,(0),null);
var inst_45730__$1 = cljs.core.nth.call(null,inst_45728,(1),null);
var inst_45731 = (inst_45729__$1 == null);
var inst_45732 = cljs.core._EQ_.call(null,inst_45730__$1,change);
var inst_45733 = (inst_45731) || (inst_45732);
var state_45770__$1 = (function (){var statearr_45792 = state_45770;
(statearr_45792[(10)] = inst_45730__$1);

(statearr_45792[(14)] = inst_45729__$1);

return statearr_45792;
})();
if(cljs.core.truth_(inst_45733)){
var statearr_45793_45850 = state_45770__$1;
(statearr_45793_45850[(1)] = (23));

} else {
var statearr_45794_45851 = state_45770__$1;
(statearr_45794_45851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (36))){
var inst_45722 = (state_45770[(12)]);
var inst_45700 = inst_45722;
var state_45770__$1 = (function (){var statearr_45795 = state_45770;
(statearr_45795[(7)] = inst_45700);

return statearr_45795;
})();
var statearr_45796_45852 = state_45770__$1;
(statearr_45796_45852[(2)] = null);

(statearr_45796_45852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (29))){
var inst_45744 = (state_45770[(11)]);
var state_45770__$1 = state_45770;
var statearr_45797_45853 = state_45770__$1;
(statearr_45797_45853[(2)] = inst_45744);

(statearr_45797_45853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (6))){
var state_45770__$1 = state_45770;
var statearr_45798_45854 = state_45770__$1;
(statearr_45798_45854[(2)] = false);

(statearr_45798_45854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (28))){
var inst_45740 = (state_45770[(2)]);
var inst_45741 = calc_state.call(null);
var inst_45700 = inst_45741;
var state_45770__$1 = (function (){var statearr_45799 = state_45770;
(statearr_45799[(7)] = inst_45700);

(statearr_45799[(15)] = inst_45740);

return statearr_45799;
})();
var statearr_45800_45855 = state_45770__$1;
(statearr_45800_45855[(2)] = null);

(statearr_45800_45855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (25))){
var inst_45766 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
var statearr_45801_45856 = state_45770__$1;
(statearr_45801_45856[(2)] = inst_45766);

(statearr_45801_45856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (34))){
var inst_45764 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
var statearr_45802_45857 = state_45770__$1;
(statearr_45802_45857[(2)] = inst_45764);

(statearr_45802_45857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (17))){
var state_45770__$1 = state_45770;
var statearr_45803_45858 = state_45770__$1;
(statearr_45803_45858[(2)] = false);

(statearr_45803_45858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (3))){
var state_45770__$1 = state_45770;
var statearr_45804_45859 = state_45770__$1;
(statearr_45804_45859[(2)] = false);

(statearr_45804_45859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (12))){
var inst_45768 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45770__$1,inst_45768);
} else {
if((state_val_45771 === (2))){
var inst_45676 = (state_45770[(8)]);
var inst_45681 = inst_45676.cljs$lang$protocol_mask$partition0$;
var inst_45682 = (inst_45681 & (64));
var inst_45683 = inst_45676.cljs$core$ISeq$;
var inst_45684 = (inst_45682) || (inst_45683);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45684)){
var statearr_45805_45860 = state_45770__$1;
(statearr_45805_45860[(1)] = (5));

} else {
var statearr_45806_45861 = state_45770__$1;
(statearr_45806_45861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (23))){
var inst_45729 = (state_45770[(14)]);
var inst_45735 = (inst_45729 == null);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45735)){
var statearr_45807_45862 = state_45770__$1;
(statearr_45807_45862[(1)] = (26));

} else {
var statearr_45808_45863 = state_45770__$1;
(statearr_45808_45863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (35))){
var inst_45755 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
if(cljs.core.truth_(inst_45755)){
var statearr_45809_45864 = state_45770__$1;
(statearr_45809_45864[(1)] = (36));

} else {
var statearr_45810_45865 = state_45770__$1;
(statearr_45810_45865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (19))){
var inst_45700 = (state_45770[(7)]);
var inst_45719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45700);
var state_45770__$1 = state_45770;
var statearr_45811_45866 = state_45770__$1;
(statearr_45811_45866[(2)] = inst_45719);

(statearr_45811_45866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (11))){
var inst_45700 = (state_45770[(7)]);
var inst_45704 = (inst_45700 == null);
var inst_45705 = cljs.core.not.call(null,inst_45704);
var state_45770__$1 = state_45770;
if(inst_45705){
var statearr_45812_45867 = state_45770__$1;
(statearr_45812_45867[(1)] = (13));

} else {
var statearr_45813_45868 = state_45770__$1;
(statearr_45813_45868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (9))){
var inst_45676 = (state_45770[(8)]);
var state_45770__$1 = state_45770;
var statearr_45814_45869 = state_45770__$1;
(statearr_45814_45869[(2)] = inst_45676);

(statearr_45814_45869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (5))){
var state_45770__$1 = state_45770;
var statearr_45815_45870 = state_45770__$1;
(statearr_45815_45870[(2)] = true);

(statearr_45815_45870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (14))){
var state_45770__$1 = state_45770;
var statearr_45816_45871 = state_45770__$1;
(statearr_45816_45871[(2)] = false);

(statearr_45816_45871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (26))){
var inst_45730 = (state_45770[(10)]);
var inst_45737 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45730);
var state_45770__$1 = state_45770;
var statearr_45817_45872 = state_45770__$1;
(statearr_45817_45872[(2)] = inst_45737);

(statearr_45817_45872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (16))){
var state_45770__$1 = state_45770;
var statearr_45818_45873 = state_45770__$1;
(statearr_45818_45873[(2)] = true);

(statearr_45818_45873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (38))){
var inst_45760 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
var statearr_45819_45874 = state_45770__$1;
(statearr_45819_45874[(2)] = inst_45760);

(statearr_45819_45874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (30))){
var inst_45723 = (state_45770[(9)]);
var inst_45730 = (state_45770[(10)]);
var inst_45724 = (state_45770[(13)]);
var inst_45747 = cljs.core.empty_QMARK_.call(null,inst_45723);
var inst_45748 = inst_45724.call(null,inst_45730);
var inst_45749 = cljs.core.not.call(null,inst_45748);
var inst_45750 = (inst_45747) && (inst_45749);
var state_45770__$1 = state_45770;
var statearr_45820_45875 = state_45770__$1;
(statearr_45820_45875[(2)] = inst_45750);

(statearr_45820_45875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (10))){
var inst_45676 = (state_45770[(8)]);
var inst_45696 = (state_45770[(2)]);
var inst_45697 = cljs.core.get.call(null,inst_45696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45698 = cljs.core.get.call(null,inst_45696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45699 = cljs.core.get.call(null,inst_45696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45700 = inst_45676;
var state_45770__$1 = (function (){var statearr_45821 = state_45770;
(statearr_45821[(16)] = inst_45698);

(statearr_45821[(7)] = inst_45700);

(statearr_45821[(17)] = inst_45697);

(statearr_45821[(18)] = inst_45699);

return statearr_45821;
})();
var statearr_45822_45876 = state_45770__$1;
(statearr_45822_45876[(2)] = null);

(statearr_45822_45876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (18))){
var inst_45714 = (state_45770[(2)]);
var state_45770__$1 = state_45770;
var statearr_45823_45877 = state_45770__$1;
(statearr_45823_45877[(2)] = inst_45714);

(statearr_45823_45877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (37))){
var state_45770__$1 = state_45770;
var statearr_45824_45878 = state_45770__$1;
(statearr_45824_45878[(2)] = null);

(statearr_45824_45878[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45771 === (8))){
var inst_45676 = (state_45770[(8)]);
var inst_45693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45676);
var state_45770__$1 = state_45770;
var statearr_45825_45879 = state_45770__$1;
(statearr_45825_45879[(2)] = inst_45693);

(statearr_45825_45879[(1)] = (10));


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
});})(c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__41379__auto__,c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__41380__auto__ = null;
var cljs$core$async$mix_$_state_machine__41380__auto____0 = (function (){
var statearr_45829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45829[(0)] = cljs$core$async$mix_$_state_machine__41380__auto__);

(statearr_45829[(1)] = (1));

return statearr_45829;
});
var cljs$core$async$mix_$_state_machine__41380__auto____1 = (function (state_45770){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_45770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e45830){if((e45830 instanceof Object)){
var ex__41383__auto__ = e45830;
var statearr_45831_45880 = state_45770;
(statearr_45831_45880[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45881 = state_45770;
state_45770 = G__45881;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41380__auto__ = function(state_45770){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41380__auto____1.call(this,state_45770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41380__auto____0;
cljs$core$async$mix_$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41380__auto____1;
return cljs$core$async$mix_$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41402__auto__ = (function (){var statearr_45832 = f__41401__auto__.call(null);
(statearr_45832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___45833);

return statearr_45832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___45833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args45882 = [];
var len__38501__auto___45885 = arguments.length;
var i__38502__auto___45886 = (0);
while(true){
if((i__38502__auto___45886 < len__38501__auto___45885)){
args45882.push((arguments[i__38502__auto___45886]));

var G__45887 = (i__38502__auto___45886 + (1));
i__38502__auto___45886 = G__45887;
continue;
} else {
}
break;
}

var G__45884 = args45882.length;
switch (G__45884) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45882.length)].join('')));

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
var args45890 = [];
var len__38501__auto___46015 = arguments.length;
var i__38502__auto___46016 = (0);
while(true){
if((i__38502__auto___46016 < len__38501__auto___46015)){
args45890.push((arguments[i__38502__auto___46016]));

var G__46017 = (i__38502__auto___46016 + (1));
i__38502__auto___46016 = G__46017;
continue;
} else {
}
break;
}

var G__45892 = args45890.length;
switch (G__45892) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45890.length)].join('')));

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
return (function (p1__45889_SHARP_){
if(cljs.core.truth_(p1__45889_SHARP_.call(null,topic))){
return p1__45889_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45889_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37443__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45893 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45894){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45894 = meta45894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45895,meta45894__$1){
var self__ = this;
var _45895__$1 = this;
return (new cljs.core.async.t_cljs$core$async45893(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45894__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45895){
var self__ = this;
var _45895__$1 = this;
return self__.meta45894;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45894","meta45894",883842684,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45893";

cljs.core.async.t_cljs$core$async45893.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async45893");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45893 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45894){
return (new cljs.core.async.t_cljs$core$async45893(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45894));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45893(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41400__auto___46019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46019,mults,ensure_mult,p){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46019,mults,ensure_mult,p){
return (function (state_45967){
var state_val_45968 = (state_45967[(1)]);
if((state_val_45968 === (7))){
var inst_45963 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_45969_46020 = state_45967__$1;
(statearr_45969_46020[(2)] = inst_45963);

(statearr_45969_46020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (20))){
var state_45967__$1 = state_45967;
var statearr_45970_46021 = state_45967__$1;
(statearr_45970_46021[(2)] = null);

(statearr_45970_46021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (1))){
var state_45967__$1 = state_45967;
var statearr_45971_46022 = state_45967__$1;
(statearr_45971_46022[(2)] = null);

(statearr_45971_46022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (24))){
var inst_45946 = (state_45967[(7)]);
var inst_45955 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45946);
var state_45967__$1 = state_45967;
var statearr_45972_46023 = state_45967__$1;
(statearr_45972_46023[(2)] = inst_45955);

(statearr_45972_46023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (4))){
var inst_45898 = (state_45967[(8)]);
var inst_45898__$1 = (state_45967[(2)]);
var inst_45899 = (inst_45898__$1 == null);
var state_45967__$1 = (function (){var statearr_45973 = state_45967;
(statearr_45973[(8)] = inst_45898__$1);

return statearr_45973;
})();
if(cljs.core.truth_(inst_45899)){
var statearr_45974_46024 = state_45967__$1;
(statearr_45974_46024[(1)] = (5));

} else {
var statearr_45975_46025 = state_45967__$1;
(statearr_45975_46025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (15))){
var inst_45940 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_45976_46026 = state_45967__$1;
(statearr_45976_46026[(2)] = inst_45940);

(statearr_45976_46026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (21))){
var inst_45960 = (state_45967[(2)]);
var state_45967__$1 = (function (){var statearr_45977 = state_45967;
(statearr_45977[(9)] = inst_45960);

return statearr_45977;
})();
var statearr_45978_46027 = state_45967__$1;
(statearr_45978_46027[(2)] = null);

(statearr_45978_46027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (13))){
var inst_45922 = (state_45967[(10)]);
var inst_45924 = cljs.core.chunked_seq_QMARK_.call(null,inst_45922);
var state_45967__$1 = state_45967;
if(inst_45924){
var statearr_45979_46028 = state_45967__$1;
(statearr_45979_46028[(1)] = (16));

} else {
var statearr_45980_46029 = state_45967__$1;
(statearr_45980_46029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (22))){
var inst_45952 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
if(cljs.core.truth_(inst_45952)){
var statearr_45981_46030 = state_45967__$1;
(statearr_45981_46030[(1)] = (23));

} else {
var statearr_45982_46031 = state_45967__$1;
(statearr_45982_46031[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (6))){
var inst_45946 = (state_45967[(7)]);
var inst_45948 = (state_45967[(11)]);
var inst_45898 = (state_45967[(8)]);
var inst_45946__$1 = topic_fn.call(null,inst_45898);
var inst_45947 = cljs.core.deref.call(null,mults);
var inst_45948__$1 = cljs.core.get.call(null,inst_45947,inst_45946__$1);
var state_45967__$1 = (function (){var statearr_45983 = state_45967;
(statearr_45983[(7)] = inst_45946__$1);

(statearr_45983[(11)] = inst_45948__$1);

return statearr_45983;
})();
if(cljs.core.truth_(inst_45948__$1)){
var statearr_45984_46032 = state_45967__$1;
(statearr_45984_46032[(1)] = (19));

} else {
var statearr_45985_46033 = state_45967__$1;
(statearr_45985_46033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (25))){
var inst_45957 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_45986_46034 = state_45967__$1;
(statearr_45986_46034[(2)] = inst_45957);

(statearr_45986_46034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (17))){
var inst_45922 = (state_45967[(10)]);
var inst_45931 = cljs.core.first.call(null,inst_45922);
var inst_45932 = cljs.core.async.muxch_STAR_.call(null,inst_45931);
var inst_45933 = cljs.core.async.close_BANG_.call(null,inst_45932);
var inst_45934 = cljs.core.next.call(null,inst_45922);
var inst_45908 = inst_45934;
var inst_45909 = null;
var inst_45910 = (0);
var inst_45911 = (0);
var state_45967__$1 = (function (){var statearr_45987 = state_45967;
(statearr_45987[(12)] = inst_45908);

(statearr_45987[(13)] = inst_45911);

(statearr_45987[(14)] = inst_45910);

(statearr_45987[(15)] = inst_45933);

(statearr_45987[(16)] = inst_45909);

return statearr_45987;
})();
var statearr_45988_46035 = state_45967__$1;
(statearr_45988_46035[(2)] = null);

(statearr_45988_46035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (3))){
var inst_45965 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45967__$1,inst_45965);
} else {
if((state_val_45968 === (12))){
var inst_45942 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_45989_46036 = state_45967__$1;
(statearr_45989_46036[(2)] = inst_45942);

(statearr_45989_46036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (2))){
var state_45967__$1 = state_45967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45967__$1,(4),ch);
} else {
if((state_val_45968 === (23))){
var state_45967__$1 = state_45967;
var statearr_45990_46037 = state_45967__$1;
(statearr_45990_46037[(2)] = null);

(statearr_45990_46037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (19))){
var inst_45948 = (state_45967[(11)]);
var inst_45898 = (state_45967[(8)]);
var inst_45950 = cljs.core.async.muxch_STAR_.call(null,inst_45948);
var state_45967__$1 = state_45967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45967__$1,(22),inst_45950,inst_45898);
} else {
if((state_val_45968 === (11))){
var inst_45922 = (state_45967[(10)]);
var inst_45908 = (state_45967[(12)]);
var inst_45922__$1 = cljs.core.seq.call(null,inst_45908);
var state_45967__$1 = (function (){var statearr_45991 = state_45967;
(statearr_45991[(10)] = inst_45922__$1);

return statearr_45991;
})();
if(inst_45922__$1){
var statearr_45992_46038 = state_45967__$1;
(statearr_45992_46038[(1)] = (13));

} else {
var statearr_45993_46039 = state_45967__$1;
(statearr_45993_46039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (9))){
var inst_45944 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_45994_46040 = state_45967__$1;
(statearr_45994_46040[(2)] = inst_45944);

(statearr_45994_46040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (5))){
var inst_45905 = cljs.core.deref.call(null,mults);
var inst_45906 = cljs.core.vals.call(null,inst_45905);
var inst_45907 = cljs.core.seq.call(null,inst_45906);
var inst_45908 = inst_45907;
var inst_45909 = null;
var inst_45910 = (0);
var inst_45911 = (0);
var state_45967__$1 = (function (){var statearr_45995 = state_45967;
(statearr_45995[(12)] = inst_45908);

(statearr_45995[(13)] = inst_45911);

(statearr_45995[(14)] = inst_45910);

(statearr_45995[(16)] = inst_45909);

return statearr_45995;
})();
var statearr_45996_46041 = state_45967__$1;
(statearr_45996_46041[(2)] = null);

(statearr_45996_46041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (14))){
var state_45967__$1 = state_45967;
var statearr_46000_46042 = state_45967__$1;
(statearr_46000_46042[(2)] = null);

(statearr_46000_46042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (16))){
var inst_45922 = (state_45967[(10)]);
var inst_45926 = cljs.core.chunk_first.call(null,inst_45922);
var inst_45927 = cljs.core.chunk_rest.call(null,inst_45922);
var inst_45928 = cljs.core.count.call(null,inst_45926);
var inst_45908 = inst_45927;
var inst_45909 = inst_45926;
var inst_45910 = inst_45928;
var inst_45911 = (0);
var state_45967__$1 = (function (){var statearr_46001 = state_45967;
(statearr_46001[(12)] = inst_45908);

(statearr_46001[(13)] = inst_45911);

(statearr_46001[(14)] = inst_45910);

(statearr_46001[(16)] = inst_45909);

return statearr_46001;
})();
var statearr_46002_46043 = state_45967__$1;
(statearr_46002_46043[(2)] = null);

(statearr_46002_46043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (10))){
var inst_45908 = (state_45967[(12)]);
var inst_45911 = (state_45967[(13)]);
var inst_45910 = (state_45967[(14)]);
var inst_45909 = (state_45967[(16)]);
var inst_45916 = cljs.core._nth.call(null,inst_45909,inst_45911);
var inst_45917 = cljs.core.async.muxch_STAR_.call(null,inst_45916);
var inst_45918 = cljs.core.async.close_BANG_.call(null,inst_45917);
var inst_45919 = (inst_45911 + (1));
var tmp45997 = inst_45908;
var tmp45998 = inst_45910;
var tmp45999 = inst_45909;
var inst_45908__$1 = tmp45997;
var inst_45909__$1 = tmp45999;
var inst_45910__$1 = tmp45998;
var inst_45911__$1 = inst_45919;
var state_45967__$1 = (function (){var statearr_46003 = state_45967;
(statearr_46003[(12)] = inst_45908__$1);

(statearr_46003[(13)] = inst_45911__$1);

(statearr_46003[(14)] = inst_45910__$1);

(statearr_46003[(17)] = inst_45918);

(statearr_46003[(16)] = inst_45909__$1);

return statearr_46003;
})();
var statearr_46004_46044 = state_45967__$1;
(statearr_46004_46044[(2)] = null);

(statearr_46004_46044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (18))){
var inst_45937 = (state_45967[(2)]);
var state_45967__$1 = state_45967;
var statearr_46005_46045 = state_45967__$1;
(statearr_46005_46045[(2)] = inst_45937);

(statearr_46005_46045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45968 === (8))){
var inst_45911 = (state_45967[(13)]);
var inst_45910 = (state_45967[(14)]);
var inst_45913 = (inst_45911 < inst_45910);
var inst_45914 = inst_45913;
var state_45967__$1 = state_45967;
if(cljs.core.truth_(inst_45914)){
var statearr_46006_46046 = state_45967__$1;
(statearr_46006_46046[(1)] = (10));

} else {
var statearr_46007_46047 = state_45967__$1;
(statearr_46007_46047[(1)] = (11));

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
});})(c__41400__auto___46019,mults,ensure_mult,p))
;
return ((function (switch__41379__auto__,c__41400__auto___46019,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46011[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46011[(1)] = (1));

return statearr_46011;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_45967){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_45967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46012){if((e46012 instanceof Object)){
var ex__41383__auto__ = e46012;
var statearr_46013_46048 = state_45967;
(statearr_46013_46048[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46049 = state_45967;
state_45967 = G__46049;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_45967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_45967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46019,mults,ensure_mult,p))
})();
var state__41402__auto__ = (function (){var statearr_46014 = f__41401__auto__.call(null);
(statearr_46014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46019);

return statearr_46014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46019,mults,ensure_mult,p))
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
var args46050 = [];
var len__38501__auto___46053 = arguments.length;
var i__38502__auto___46054 = (0);
while(true){
if((i__38502__auto___46054 < len__38501__auto___46053)){
args46050.push((arguments[i__38502__auto___46054]));

var G__46055 = (i__38502__auto___46054 + (1));
i__38502__auto___46054 = G__46055;
continue;
} else {
}
break;
}

var G__46052 = args46050.length;
switch (G__46052) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46050.length)].join('')));

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
var args46057 = [];
var len__38501__auto___46060 = arguments.length;
var i__38502__auto___46061 = (0);
while(true){
if((i__38502__auto___46061 < len__38501__auto___46060)){
args46057.push((arguments[i__38502__auto___46061]));

var G__46062 = (i__38502__auto___46061 + (1));
i__38502__auto___46061 = G__46062;
continue;
} else {
}
break;
}

var G__46059 = args46057.length;
switch (G__46059) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46057.length)].join('')));

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
var args46064 = [];
var len__38501__auto___46135 = arguments.length;
var i__38502__auto___46136 = (0);
while(true){
if((i__38502__auto___46136 < len__38501__auto___46135)){
args46064.push((arguments[i__38502__auto___46136]));

var G__46137 = (i__38502__auto___46136 + (1));
i__38502__auto___46136 = G__46137;
continue;
} else {
}
break;
}

var G__46066 = args46064.length;
switch (G__46066) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46064.length)].join('')));

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
var c__41400__auto___46139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46105){
var state_val_46106 = (state_46105[(1)]);
if((state_val_46106 === (7))){
var state_46105__$1 = state_46105;
var statearr_46107_46140 = state_46105__$1;
(statearr_46107_46140[(2)] = null);

(statearr_46107_46140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (1))){
var state_46105__$1 = state_46105;
var statearr_46108_46141 = state_46105__$1;
(statearr_46108_46141[(2)] = null);

(statearr_46108_46141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (4))){
var inst_46069 = (state_46105[(7)]);
var inst_46071 = (inst_46069 < cnt);
var state_46105__$1 = state_46105;
if(cljs.core.truth_(inst_46071)){
var statearr_46109_46142 = state_46105__$1;
(statearr_46109_46142[(1)] = (6));

} else {
var statearr_46110_46143 = state_46105__$1;
(statearr_46110_46143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (15))){
var inst_46101 = (state_46105[(2)]);
var state_46105__$1 = state_46105;
var statearr_46111_46144 = state_46105__$1;
(statearr_46111_46144[(2)] = inst_46101);

(statearr_46111_46144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (13))){
var inst_46094 = cljs.core.async.close_BANG_.call(null,out);
var state_46105__$1 = state_46105;
var statearr_46112_46145 = state_46105__$1;
(statearr_46112_46145[(2)] = inst_46094);

(statearr_46112_46145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (6))){
var state_46105__$1 = state_46105;
var statearr_46113_46146 = state_46105__$1;
(statearr_46113_46146[(2)] = null);

(statearr_46113_46146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (3))){
var inst_46103 = (state_46105[(2)]);
var state_46105__$1 = state_46105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46105__$1,inst_46103);
} else {
if((state_val_46106 === (12))){
var inst_46091 = (state_46105[(8)]);
var inst_46091__$1 = (state_46105[(2)]);
var inst_46092 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46091__$1);
var state_46105__$1 = (function (){var statearr_46114 = state_46105;
(statearr_46114[(8)] = inst_46091__$1);

return statearr_46114;
})();
if(cljs.core.truth_(inst_46092)){
var statearr_46115_46147 = state_46105__$1;
(statearr_46115_46147[(1)] = (13));

} else {
var statearr_46116_46148 = state_46105__$1;
(statearr_46116_46148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (2))){
var inst_46068 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46069 = (0);
var state_46105__$1 = (function (){var statearr_46117 = state_46105;
(statearr_46117[(9)] = inst_46068);

(statearr_46117[(7)] = inst_46069);

return statearr_46117;
})();
var statearr_46118_46149 = state_46105__$1;
(statearr_46118_46149[(2)] = null);

(statearr_46118_46149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (11))){
var inst_46069 = (state_46105[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46105,(10),Object,null,(9));
var inst_46078 = chs__$1.call(null,inst_46069);
var inst_46079 = done.call(null,inst_46069);
var inst_46080 = cljs.core.async.take_BANG_.call(null,inst_46078,inst_46079);
var state_46105__$1 = state_46105;
var statearr_46119_46150 = state_46105__$1;
(statearr_46119_46150[(2)] = inst_46080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (9))){
var inst_46069 = (state_46105[(7)]);
var inst_46082 = (state_46105[(2)]);
var inst_46083 = (inst_46069 + (1));
var inst_46069__$1 = inst_46083;
var state_46105__$1 = (function (){var statearr_46120 = state_46105;
(statearr_46120[(10)] = inst_46082);

(statearr_46120[(7)] = inst_46069__$1);

return statearr_46120;
})();
var statearr_46121_46151 = state_46105__$1;
(statearr_46121_46151[(2)] = null);

(statearr_46121_46151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (5))){
var inst_46089 = (state_46105[(2)]);
var state_46105__$1 = (function (){var statearr_46122 = state_46105;
(statearr_46122[(11)] = inst_46089);

return statearr_46122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46105__$1,(12),dchan);
} else {
if((state_val_46106 === (14))){
var inst_46091 = (state_46105[(8)]);
var inst_46096 = cljs.core.apply.call(null,f,inst_46091);
var state_46105__$1 = state_46105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46105__$1,(16),out,inst_46096);
} else {
if((state_val_46106 === (16))){
var inst_46098 = (state_46105[(2)]);
var state_46105__$1 = (function (){var statearr_46123 = state_46105;
(statearr_46123[(12)] = inst_46098);

return statearr_46123;
})();
var statearr_46124_46152 = state_46105__$1;
(statearr_46124_46152[(2)] = null);

(statearr_46124_46152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (10))){
var inst_46073 = (state_46105[(2)]);
var inst_46074 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46105__$1 = (function (){var statearr_46125 = state_46105;
(statearr_46125[(13)] = inst_46073);

return statearr_46125;
})();
var statearr_46126_46153 = state_46105__$1;
(statearr_46126_46153[(2)] = inst_46074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46105__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46106 === (8))){
var inst_46087 = (state_46105[(2)]);
var state_46105__$1 = state_46105;
var statearr_46127_46154 = state_46105__$1;
(statearr_46127_46154[(2)] = inst_46087);

(statearr_46127_46154[(1)] = (5));


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
});})(c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__41379__auto__,c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46131[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46131[(1)] = (1));

return statearr_46131;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46105){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46132){if((e46132 instanceof Object)){
var ex__41383__auto__ = e46132;
var statearr_46133_46155 = state_46105;
(statearr_46133_46155[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46156 = state_46105;
state_46105 = G__46156;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41402__auto__ = (function (){var statearr_46134 = f__41401__auto__.call(null);
(statearr_46134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46139);

return statearr_46134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46139,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46158 = [];
var len__38501__auto___46214 = arguments.length;
var i__38502__auto___46215 = (0);
while(true){
if((i__38502__auto___46215 < len__38501__auto___46214)){
args46158.push((arguments[i__38502__auto___46215]));

var G__46216 = (i__38502__auto___46215 + (1));
i__38502__auto___46215 = G__46216;
continue;
} else {
}
break;
}

var G__46160 = args46158.length;
switch (G__46160) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46158.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46218,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46218,out){
return (function (state_46190){
var state_val_46191 = (state_46190[(1)]);
if((state_val_46191 === (7))){
var inst_46169 = (state_46190[(7)]);
var inst_46170 = (state_46190[(8)]);
var inst_46169__$1 = (state_46190[(2)]);
var inst_46170__$1 = cljs.core.nth.call(null,inst_46169__$1,(0),null);
var inst_46171 = cljs.core.nth.call(null,inst_46169__$1,(1),null);
var inst_46172 = (inst_46170__$1 == null);
var state_46190__$1 = (function (){var statearr_46192 = state_46190;
(statearr_46192[(7)] = inst_46169__$1);

(statearr_46192[(9)] = inst_46171);

(statearr_46192[(8)] = inst_46170__$1);

return statearr_46192;
})();
if(cljs.core.truth_(inst_46172)){
var statearr_46193_46219 = state_46190__$1;
(statearr_46193_46219[(1)] = (8));

} else {
var statearr_46194_46220 = state_46190__$1;
(statearr_46194_46220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (1))){
var inst_46161 = cljs.core.vec.call(null,chs);
var inst_46162 = inst_46161;
var state_46190__$1 = (function (){var statearr_46195 = state_46190;
(statearr_46195[(10)] = inst_46162);

return statearr_46195;
})();
var statearr_46196_46221 = state_46190__$1;
(statearr_46196_46221[(2)] = null);

(statearr_46196_46221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (4))){
var inst_46162 = (state_46190[(10)]);
var state_46190__$1 = state_46190;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46190__$1,(7),inst_46162);
} else {
if((state_val_46191 === (6))){
var inst_46186 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
var statearr_46197_46222 = state_46190__$1;
(statearr_46197_46222[(2)] = inst_46186);

(statearr_46197_46222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (3))){
var inst_46188 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46190__$1,inst_46188);
} else {
if((state_val_46191 === (2))){
var inst_46162 = (state_46190[(10)]);
var inst_46164 = cljs.core.count.call(null,inst_46162);
var inst_46165 = (inst_46164 > (0));
var state_46190__$1 = state_46190;
if(cljs.core.truth_(inst_46165)){
var statearr_46199_46223 = state_46190__$1;
(statearr_46199_46223[(1)] = (4));

} else {
var statearr_46200_46224 = state_46190__$1;
(statearr_46200_46224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (11))){
var inst_46162 = (state_46190[(10)]);
var inst_46179 = (state_46190[(2)]);
var tmp46198 = inst_46162;
var inst_46162__$1 = tmp46198;
var state_46190__$1 = (function (){var statearr_46201 = state_46190;
(statearr_46201[(11)] = inst_46179);

(statearr_46201[(10)] = inst_46162__$1);

return statearr_46201;
})();
var statearr_46202_46225 = state_46190__$1;
(statearr_46202_46225[(2)] = null);

(statearr_46202_46225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (9))){
var inst_46170 = (state_46190[(8)]);
var state_46190__$1 = state_46190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46190__$1,(11),out,inst_46170);
} else {
if((state_val_46191 === (5))){
var inst_46184 = cljs.core.async.close_BANG_.call(null,out);
var state_46190__$1 = state_46190;
var statearr_46203_46226 = state_46190__$1;
(statearr_46203_46226[(2)] = inst_46184);

(statearr_46203_46226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (10))){
var inst_46182 = (state_46190[(2)]);
var state_46190__$1 = state_46190;
var statearr_46204_46227 = state_46190__$1;
(statearr_46204_46227[(2)] = inst_46182);

(statearr_46204_46227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46191 === (8))){
var inst_46169 = (state_46190[(7)]);
var inst_46171 = (state_46190[(9)]);
var inst_46170 = (state_46190[(8)]);
var inst_46162 = (state_46190[(10)]);
var inst_46174 = (function (){var cs = inst_46162;
var vec__46167 = inst_46169;
var v = inst_46170;
var c = inst_46171;
return ((function (cs,vec__46167,v,c,inst_46169,inst_46171,inst_46170,inst_46162,state_val_46191,c__41400__auto___46218,out){
return (function (p1__46157_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46157_SHARP_);
});
;})(cs,vec__46167,v,c,inst_46169,inst_46171,inst_46170,inst_46162,state_val_46191,c__41400__auto___46218,out))
})();
var inst_46175 = cljs.core.filterv.call(null,inst_46174,inst_46162);
var inst_46162__$1 = inst_46175;
var state_46190__$1 = (function (){var statearr_46205 = state_46190;
(statearr_46205[(10)] = inst_46162__$1);

return statearr_46205;
})();
var statearr_46206_46228 = state_46190__$1;
(statearr_46206_46228[(2)] = null);

(statearr_46206_46228[(1)] = (2));


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
});})(c__41400__auto___46218,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46218,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46210[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46210[(1)] = (1));

return statearr_46210;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46190){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46211){if((e46211 instanceof Object)){
var ex__41383__auto__ = e46211;
var statearr_46212_46229 = state_46190;
(statearr_46212_46229[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46230 = state_46190;
state_46190 = G__46230;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46218,out))
})();
var state__41402__auto__ = (function (){var statearr_46213 = f__41401__auto__.call(null);
(statearr_46213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46218);

return statearr_46213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46218,out))
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
var args46231 = [];
var len__38501__auto___46280 = arguments.length;
var i__38502__auto___46281 = (0);
while(true){
if((i__38502__auto___46281 < len__38501__auto___46280)){
args46231.push((arguments[i__38502__auto___46281]));

var G__46282 = (i__38502__auto___46281 + (1));
i__38502__auto___46281 = G__46282;
continue;
} else {
}
break;
}

var G__46233 = args46231.length;
switch (G__46233) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46231.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46284,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46284,out){
return (function (state_46257){
var state_val_46258 = (state_46257[(1)]);
if((state_val_46258 === (7))){
var inst_46239 = (state_46257[(7)]);
var inst_46239__$1 = (state_46257[(2)]);
var inst_46240 = (inst_46239__$1 == null);
var inst_46241 = cljs.core.not.call(null,inst_46240);
var state_46257__$1 = (function (){var statearr_46259 = state_46257;
(statearr_46259[(7)] = inst_46239__$1);

return statearr_46259;
})();
if(inst_46241){
var statearr_46260_46285 = state_46257__$1;
(statearr_46260_46285[(1)] = (8));

} else {
var statearr_46261_46286 = state_46257__$1;
(statearr_46261_46286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (1))){
var inst_46234 = (0);
var state_46257__$1 = (function (){var statearr_46262 = state_46257;
(statearr_46262[(8)] = inst_46234);

return statearr_46262;
})();
var statearr_46263_46287 = state_46257__$1;
(statearr_46263_46287[(2)] = null);

(statearr_46263_46287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (4))){
var state_46257__$1 = state_46257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46257__$1,(7),ch);
} else {
if((state_val_46258 === (6))){
var inst_46252 = (state_46257[(2)]);
var state_46257__$1 = state_46257;
var statearr_46264_46288 = state_46257__$1;
(statearr_46264_46288[(2)] = inst_46252);

(statearr_46264_46288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (3))){
var inst_46254 = (state_46257[(2)]);
var inst_46255 = cljs.core.async.close_BANG_.call(null,out);
var state_46257__$1 = (function (){var statearr_46265 = state_46257;
(statearr_46265[(9)] = inst_46254);

return statearr_46265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46257__$1,inst_46255);
} else {
if((state_val_46258 === (2))){
var inst_46234 = (state_46257[(8)]);
var inst_46236 = (inst_46234 < n);
var state_46257__$1 = state_46257;
if(cljs.core.truth_(inst_46236)){
var statearr_46266_46289 = state_46257__$1;
(statearr_46266_46289[(1)] = (4));

} else {
var statearr_46267_46290 = state_46257__$1;
(statearr_46267_46290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (11))){
var inst_46234 = (state_46257[(8)]);
var inst_46244 = (state_46257[(2)]);
var inst_46245 = (inst_46234 + (1));
var inst_46234__$1 = inst_46245;
var state_46257__$1 = (function (){var statearr_46268 = state_46257;
(statearr_46268[(10)] = inst_46244);

(statearr_46268[(8)] = inst_46234__$1);

return statearr_46268;
})();
var statearr_46269_46291 = state_46257__$1;
(statearr_46269_46291[(2)] = null);

(statearr_46269_46291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (9))){
var state_46257__$1 = state_46257;
var statearr_46270_46292 = state_46257__$1;
(statearr_46270_46292[(2)] = null);

(statearr_46270_46292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (5))){
var state_46257__$1 = state_46257;
var statearr_46271_46293 = state_46257__$1;
(statearr_46271_46293[(2)] = null);

(statearr_46271_46293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (10))){
var inst_46249 = (state_46257[(2)]);
var state_46257__$1 = state_46257;
var statearr_46272_46294 = state_46257__$1;
(statearr_46272_46294[(2)] = inst_46249);

(statearr_46272_46294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46258 === (8))){
var inst_46239 = (state_46257[(7)]);
var state_46257__$1 = state_46257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46257__$1,(11),out,inst_46239);
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
});})(c__41400__auto___46284,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46284,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46276 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46276[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46276[(1)] = (1));

return statearr_46276;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46257){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46277){if((e46277 instanceof Object)){
var ex__41383__auto__ = e46277;
var statearr_46278_46295 = state_46257;
(statearr_46278_46295[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46296 = state_46257;
state_46257 = G__46296;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46284,out))
})();
var state__41402__auto__ = (function (){var statearr_46279 = f__41401__auto__.call(null);
(statearr_46279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46284);

return statearr_46279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46284,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46304 = (function (map_LT_,f,ch,meta46305){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46305 = meta46305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46306,meta46305__$1){
var self__ = this;
var _46306__$1 = this;
return (new cljs.core.async.t_cljs$core$async46304(self__.map_LT_,self__.f,self__.ch,meta46305__$1));
});

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46306){
var self__ = this;
var _46306__$1 = this;
return self__.meta46305;
});

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46307 = (function (map_LT_,f,ch,meta46305,_,fn1,meta46308){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta46305 = meta46305;
this._ = _;
this.fn1 = fn1;
this.meta46308 = meta46308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46309,meta46308__$1){
var self__ = this;
var _46309__$1 = this;
return (new cljs.core.async.t_cljs$core$async46307(self__.map_LT_,self__.f,self__.ch,self__.meta46305,self__._,self__.fn1,meta46308__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46309){
var self__ = this;
var _46309__$1 = this;
return self__.meta46308;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46297_SHARP_){
return f1.call(null,(((p1__46297_SHARP_ == null))?null:self__.f.call(null,p1__46297_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46305","meta46305",516771451,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46304","cljs.core.async/t_cljs$core$async46304",1270562317,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46308","meta46308",2107005849,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46307";

cljs.core.async.t_cljs$core$async46307.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async46307");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46307 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46307(map_LT___$1,f__$1,ch__$1,meta46305__$1,___$2,fn1__$1,meta46308){
return (new cljs.core.async.t_cljs$core$async46307(map_LT___$1,f__$1,ch__$1,meta46305__$1,___$2,fn1__$1,meta46308));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46307(self__.map_LT_,self__.f,self__.ch,self__.meta46305,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46305","meta46305",516771451,null)], null);
});

cljs.core.async.t_cljs$core$async46304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46304";

cljs.core.async.t_cljs$core$async46304.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async46304");
});

cljs.core.async.__GT_t_cljs$core$async46304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46304(map_LT___$1,f__$1,ch__$1,meta46305){
return (new cljs.core.async.t_cljs$core$async46304(map_LT___$1,f__$1,ch__$1,meta46305));
});

}

return (new cljs.core.async.t_cljs$core$async46304(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46313 = (function (map_GT_,f,ch,meta46314){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta46314 = meta46314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46315,meta46314__$1){
var self__ = this;
var _46315__$1 = this;
return (new cljs.core.async.t_cljs$core$async46313(self__.map_GT_,self__.f,self__.ch,meta46314__$1));
});

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46315){
var self__ = this;
var _46315__$1 = this;
return self__.meta46314;
});

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46314","meta46314",1305468669,null)], null);
});

cljs.core.async.t_cljs$core$async46313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46313";

cljs.core.async.t_cljs$core$async46313.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async46313");
});

cljs.core.async.__GT_t_cljs$core$async46313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46313(map_GT___$1,f__$1,ch__$1,meta46314){
return (new cljs.core.async.t_cljs$core$async46313(map_GT___$1,f__$1,ch__$1,meta46314));
});

}

return (new cljs.core.async.t_cljs$core$async46313(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46319 = (function (filter_GT_,p,ch,meta46320){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta46320 = meta46320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46321,meta46320__$1){
var self__ = this;
var _46321__$1 = this;
return (new cljs.core.async.t_cljs$core$async46319(self__.filter_GT_,self__.p,self__.ch,meta46320__$1));
});

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46321){
var self__ = this;
var _46321__$1 = this;
return self__.meta46320;
});

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async46319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46320","meta46320",-1331788925,null)], null);
});

cljs.core.async.t_cljs$core$async46319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46319";

cljs.core.async.t_cljs$core$async46319.cljs$lang$ctorPrWriter = (function (this__38041__auto__,writer__38042__auto__,opt__38043__auto__){
return cljs.core._write.call(null,writer__38042__auto__,"cljs.core.async/t_cljs$core$async46319");
});

cljs.core.async.__GT_t_cljs$core$async46319 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46319(filter_GT___$1,p__$1,ch__$1,meta46320){
return (new cljs.core.async.t_cljs$core$async46319(filter_GT___$1,p__$1,ch__$1,meta46320));
});

}

return (new cljs.core.async.t_cljs$core$async46319(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args46322 = [];
var len__38501__auto___46366 = arguments.length;
var i__38502__auto___46367 = (0);
while(true){
if((i__38502__auto___46367 < len__38501__auto___46366)){
args46322.push((arguments[i__38502__auto___46367]));

var G__46368 = (i__38502__auto___46367 + (1));
i__38502__auto___46367 = G__46368;
continue;
} else {
}
break;
}

var G__46324 = args46322.length;
switch (G__46324) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46322.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46370,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46370,out){
return (function (state_46345){
var state_val_46346 = (state_46345[(1)]);
if((state_val_46346 === (7))){
var inst_46341 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
var statearr_46347_46371 = state_46345__$1;
(statearr_46347_46371[(2)] = inst_46341);

(statearr_46347_46371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (1))){
var state_46345__$1 = state_46345;
var statearr_46348_46372 = state_46345__$1;
(statearr_46348_46372[(2)] = null);

(statearr_46348_46372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (4))){
var inst_46327 = (state_46345[(7)]);
var inst_46327__$1 = (state_46345[(2)]);
var inst_46328 = (inst_46327__$1 == null);
var state_46345__$1 = (function (){var statearr_46349 = state_46345;
(statearr_46349[(7)] = inst_46327__$1);

return statearr_46349;
})();
if(cljs.core.truth_(inst_46328)){
var statearr_46350_46373 = state_46345__$1;
(statearr_46350_46373[(1)] = (5));

} else {
var statearr_46351_46374 = state_46345__$1;
(statearr_46351_46374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (6))){
var inst_46327 = (state_46345[(7)]);
var inst_46332 = p.call(null,inst_46327);
var state_46345__$1 = state_46345;
if(cljs.core.truth_(inst_46332)){
var statearr_46352_46375 = state_46345__$1;
(statearr_46352_46375[(1)] = (8));

} else {
var statearr_46353_46376 = state_46345__$1;
(statearr_46353_46376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (3))){
var inst_46343 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46345__$1,inst_46343);
} else {
if((state_val_46346 === (2))){
var state_46345__$1 = state_46345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46345__$1,(4),ch);
} else {
if((state_val_46346 === (11))){
var inst_46335 = (state_46345[(2)]);
var state_46345__$1 = state_46345;
var statearr_46354_46377 = state_46345__$1;
(statearr_46354_46377[(2)] = inst_46335);

(statearr_46354_46377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (9))){
var state_46345__$1 = state_46345;
var statearr_46355_46378 = state_46345__$1;
(statearr_46355_46378[(2)] = null);

(statearr_46355_46378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (5))){
var inst_46330 = cljs.core.async.close_BANG_.call(null,out);
var state_46345__$1 = state_46345;
var statearr_46356_46379 = state_46345__$1;
(statearr_46356_46379[(2)] = inst_46330);

(statearr_46356_46379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (10))){
var inst_46338 = (state_46345[(2)]);
var state_46345__$1 = (function (){var statearr_46357 = state_46345;
(statearr_46357[(8)] = inst_46338);

return statearr_46357;
})();
var statearr_46358_46380 = state_46345__$1;
(statearr_46358_46380[(2)] = null);

(statearr_46358_46380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46346 === (8))){
var inst_46327 = (state_46345[(7)]);
var state_46345__$1 = state_46345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46345__$1,(11),out,inst_46327);
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
});})(c__41400__auto___46370,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46370,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46362 = [null,null,null,null,null,null,null,null,null];
(statearr_46362[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46362[(1)] = (1));

return statearr_46362;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46345){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46363){if((e46363 instanceof Object)){
var ex__41383__auto__ = e46363;
var statearr_46364_46381 = state_46345;
(statearr_46364_46381[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46382 = state_46345;
state_46345 = G__46382;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46370,out))
})();
var state__41402__auto__ = (function (){var statearr_46365 = f__41401__auto__.call(null);
(statearr_46365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46370);

return statearr_46365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46370,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46383 = [];
var len__38501__auto___46386 = arguments.length;
var i__38502__auto___46387 = (0);
while(true){
if((i__38502__auto___46387 < len__38501__auto___46386)){
args46383.push((arguments[i__38502__auto___46387]));

var G__46388 = (i__38502__auto___46387 + (1));
i__38502__auto___46387 = G__46388;
continue;
} else {
}
break;
}

var G__46385 = args46383.length;
switch (G__46385) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46383.length)].join('')));

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
var c__41400__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto__){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto__){
return (function (state_46555){
var state_val_46556 = (state_46555[(1)]);
if((state_val_46556 === (7))){
var inst_46551 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
var statearr_46557_46598 = state_46555__$1;
(statearr_46557_46598[(2)] = inst_46551);

(statearr_46557_46598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (20))){
var inst_46521 = (state_46555[(7)]);
var inst_46532 = (state_46555[(2)]);
var inst_46533 = cljs.core.next.call(null,inst_46521);
var inst_46507 = inst_46533;
var inst_46508 = null;
var inst_46509 = (0);
var inst_46510 = (0);
var state_46555__$1 = (function (){var statearr_46558 = state_46555;
(statearr_46558[(8)] = inst_46507);

(statearr_46558[(9)] = inst_46508);

(statearr_46558[(10)] = inst_46510);

(statearr_46558[(11)] = inst_46532);

(statearr_46558[(12)] = inst_46509);

return statearr_46558;
})();
var statearr_46559_46599 = state_46555__$1;
(statearr_46559_46599[(2)] = null);

(statearr_46559_46599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (1))){
var state_46555__$1 = state_46555;
var statearr_46560_46600 = state_46555__$1;
(statearr_46560_46600[(2)] = null);

(statearr_46560_46600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (4))){
var inst_46496 = (state_46555[(13)]);
var inst_46496__$1 = (state_46555[(2)]);
var inst_46497 = (inst_46496__$1 == null);
var state_46555__$1 = (function (){var statearr_46561 = state_46555;
(statearr_46561[(13)] = inst_46496__$1);

return statearr_46561;
})();
if(cljs.core.truth_(inst_46497)){
var statearr_46562_46601 = state_46555__$1;
(statearr_46562_46601[(1)] = (5));

} else {
var statearr_46563_46602 = state_46555__$1;
(statearr_46563_46602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (15))){
var state_46555__$1 = state_46555;
var statearr_46567_46603 = state_46555__$1;
(statearr_46567_46603[(2)] = null);

(statearr_46567_46603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (21))){
var state_46555__$1 = state_46555;
var statearr_46568_46604 = state_46555__$1;
(statearr_46568_46604[(2)] = null);

(statearr_46568_46604[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (13))){
var inst_46507 = (state_46555[(8)]);
var inst_46508 = (state_46555[(9)]);
var inst_46510 = (state_46555[(10)]);
var inst_46509 = (state_46555[(12)]);
var inst_46517 = (state_46555[(2)]);
var inst_46518 = (inst_46510 + (1));
var tmp46564 = inst_46507;
var tmp46565 = inst_46508;
var tmp46566 = inst_46509;
var inst_46507__$1 = tmp46564;
var inst_46508__$1 = tmp46565;
var inst_46509__$1 = tmp46566;
var inst_46510__$1 = inst_46518;
var state_46555__$1 = (function (){var statearr_46569 = state_46555;
(statearr_46569[(8)] = inst_46507__$1);

(statearr_46569[(9)] = inst_46508__$1);

(statearr_46569[(10)] = inst_46510__$1);

(statearr_46569[(14)] = inst_46517);

(statearr_46569[(12)] = inst_46509__$1);

return statearr_46569;
})();
var statearr_46570_46605 = state_46555__$1;
(statearr_46570_46605[(2)] = null);

(statearr_46570_46605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (22))){
var state_46555__$1 = state_46555;
var statearr_46571_46606 = state_46555__$1;
(statearr_46571_46606[(2)] = null);

(statearr_46571_46606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (6))){
var inst_46496 = (state_46555[(13)]);
var inst_46505 = f.call(null,inst_46496);
var inst_46506 = cljs.core.seq.call(null,inst_46505);
var inst_46507 = inst_46506;
var inst_46508 = null;
var inst_46509 = (0);
var inst_46510 = (0);
var state_46555__$1 = (function (){var statearr_46572 = state_46555;
(statearr_46572[(8)] = inst_46507);

(statearr_46572[(9)] = inst_46508);

(statearr_46572[(10)] = inst_46510);

(statearr_46572[(12)] = inst_46509);

return statearr_46572;
})();
var statearr_46573_46607 = state_46555__$1;
(statearr_46573_46607[(2)] = null);

(statearr_46573_46607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (17))){
var inst_46521 = (state_46555[(7)]);
var inst_46525 = cljs.core.chunk_first.call(null,inst_46521);
var inst_46526 = cljs.core.chunk_rest.call(null,inst_46521);
var inst_46527 = cljs.core.count.call(null,inst_46525);
var inst_46507 = inst_46526;
var inst_46508 = inst_46525;
var inst_46509 = inst_46527;
var inst_46510 = (0);
var state_46555__$1 = (function (){var statearr_46574 = state_46555;
(statearr_46574[(8)] = inst_46507);

(statearr_46574[(9)] = inst_46508);

(statearr_46574[(10)] = inst_46510);

(statearr_46574[(12)] = inst_46509);

return statearr_46574;
})();
var statearr_46575_46608 = state_46555__$1;
(statearr_46575_46608[(2)] = null);

(statearr_46575_46608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (3))){
var inst_46553 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46555__$1,inst_46553);
} else {
if((state_val_46556 === (12))){
var inst_46541 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
var statearr_46576_46609 = state_46555__$1;
(statearr_46576_46609[(2)] = inst_46541);

(statearr_46576_46609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (2))){
var state_46555__$1 = state_46555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46555__$1,(4),in$);
} else {
if((state_val_46556 === (23))){
var inst_46549 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
var statearr_46577_46610 = state_46555__$1;
(statearr_46577_46610[(2)] = inst_46549);

(statearr_46577_46610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (19))){
var inst_46536 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
var statearr_46578_46611 = state_46555__$1;
(statearr_46578_46611[(2)] = inst_46536);

(statearr_46578_46611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (11))){
var inst_46521 = (state_46555[(7)]);
var inst_46507 = (state_46555[(8)]);
var inst_46521__$1 = cljs.core.seq.call(null,inst_46507);
var state_46555__$1 = (function (){var statearr_46579 = state_46555;
(statearr_46579[(7)] = inst_46521__$1);

return statearr_46579;
})();
if(inst_46521__$1){
var statearr_46580_46612 = state_46555__$1;
(statearr_46580_46612[(1)] = (14));

} else {
var statearr_46581_46613 = state_46555__$1;
(statearr_46581_46613[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (9))){
var inst_46543 = (state_46555[(2)]);
var inst_46544 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46555__$1 = (function (){var statearr_46582 = state_46555;
(statearr_46582[(15)] = inst_46543);

return statearr_46582;
})();
if(cljs.core.truth_(inst_46544)){
var statearr_46583_46614 = state_46555__$1;
(statearr_46583_46614[(1)] = (21));

} else {
var statearr_46584_46615 = state_46555__$1;
(statearr_46584_46615[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (5))){
var inst_46499 = cljs.core.async.close_BANG_.call(null,out);
var state_46555__$1 = state_46555;
var statearr_46585_46616 = state_46555__$1;
(statearr_46585_46616[(2)] = inst_46499);

(statearr_46585_46616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (14))){
var inst_46521 = (state_46555[(7)]);
var inst_46523 = cljs.core.chunked_seq_QMARK_.call(null,inst_46521);
var state_46555__$1 = state_46555;
if(inst_46523){
var statearr_46586_46617 = state_46555__$1;
(statearr_46586_46617[(1)] = (17));

} else {
var statearr_46587_46618 = state_46555__$1;
(statearr_46587_46618[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (16))){
var inst_46539 = (state_46555[(2)]);
var state_46555__$1 = state_46555;
var statearr_46588_46619 = state_46555__$1;
(statearr_46588_46619[(2)] = inst_46539);

(statearr_46588_46619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46556 === (10))){
var inst_46508 = (state_46555[(9)]);
var inst_46510 = (state_46555[(10)]);
var inst_46515 = cljs.core._nth.call(null,inst_46508,inst_46510);
var state_46555__$1 = state_46555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46555__$1,(13),out,inst_46515);
} else {
if((state_val_46556 === (18))){
var inst_46521 = (state_46555[(7)]);
var inst_46530 = cljs.core.first.call(null,inst_46521);
var state_46555__$1 = state_46555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46555__$1,(20),out,inst_46530);
} else {
if((state_val_46556 === (8))){
var inst_46510 = (state_46555[(10)]);
var inst_46509 = (state_46555[(12)]);
var inst_46512 = (inst_46510 < inst_46509);
var inst_46513 = inst_46512;
var state_46555__$1 = state_46555;
if(cljs.core.truth_(inst_46513)){
var statearr_46589_46620 = state_46555__$1;
(statearr_46589_46620[(1)] = (10));

} else {
var statearr_46590_46621 = state_46555__$1;
(statearr_46590_46621[(1)] = (11));

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
});})(c__41400__auto__))
;
return ((function (switch__41379__auto__,c__41400__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____0 = (function (){
var statearr_46594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46594[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__);

(statearr_46594[(1)] = (1));

return statearr_46594;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____1 = (function (state_46555){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46595){if((e46595 instanceof Object)){
var ex__41383__auto__ = e46595;
var statearr_46596_46622 = state_46555;
(statearr_46596_46622[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46623 = state_46555;
state_46555 = G__46623;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__ = function(state_46555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____1.call(this,state_46555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41380__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto__))
})();
var state__41402__auto__ = (function (){var statearr_46597 = f__41401__auto__.call(null);
(statearr_46597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto__);

return statearr_46597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto__))
);

return c__41400__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46624 = [];
var len__38501__auto___46627 = arguments.length;
var i__38502__auto___46628 = (0);
while(true){
if((i__38502__auto___46628 < len__38501__auto___46627)){
args46624.push((arguments[i__38502__auto___46628]));

var G__46629 = (i__38502__auto___46628 + (1));
i__38502__auto___46628 = G__46629;
continue;
} else {
}
break;
}

var G__46626 = args46624.length;
switch (G__46626) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46624.length)].join('')));

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
var args46631 = [];
var len__38501__auto___46634 = arguments.length;
var i__38502__auto___46635 = (0);
while(true){
if((i__38502__auto___46635 < len__38501__auto___46634)){
args46631.push((arguments[i__38502__auto___46635]));

var G__46636 = (i__38502__auto___46635 + (1));
i__38502__auto___46635 = G__46636;
continue;
} else {
}
break;
}

var G__46633 = args46631.length;
switch (G__46633) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46631.length)].join('')));

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
var args46638 = [];
var len__38501__auto___46689 = arguments.length;
var i__38502__auto___46690 = (0);
while(true){
if((i__38502__auto___46690 < len__38501__auto___46689)){
args46638.push((arguments[i__38502__auto___46690]));

var G__46691 = (i__38502__auto___46690 + (1));
i__38502__auto___46690 = G__46691;
continue;
} else {
}
break;
}

var G__46640 = args46638.length;
switch (G__46640) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46638.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46693,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46693,out){
return (function (state_46664){
var state_val_46665 = (state_46664[(1)]);
if((state_val_46665 === (7))){
var inst_46659 = (state_46664[(2)]);
var state_46664__$1 = state_46664;
var statearr_46666_46694 = state_46664__$1;
(statearr_46666_46694[(2)] = inst_46659);

(statearr_46666_46694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (1))){
var inst_46641 = null;
var state_46664__$1 = (function (){var statearr_46667 = state_46664;
(statearr_46667[(7)] = inst_46641);

return statearr_46667;
})();
var statearr_46668_46695 = state_46664__$1;
(statearr_46668_46695[(2)] = null);

(statearr_46668_46695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (4))){
var inst_46644 = (state_46664[(8)]);
var inst_46644__$1 = (state_46664[(2)]);
var inst_46645 = (inst_46644__$1 == null);
var inst_46646 = cljs.core.not.call(null,inst_46645);
var state_46664__$1 = (function (){var statearr_46669 = state_46664;
(statearr_46669[(8)] = inst_46644__$1);

return statearr_46669;
})();
if(inst_46646){
var statearr_46670_46696 = state_46664__$1;
(statearr_46670_46696[(1)] = (5));

} else {
var statearr_46671_46697 = state_46664__$1;
(statearr_46671_46697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (6))){
var state_46664__$1 = state_46664;
var statearr_46672_46698 = state_46664__$1;
(statearr_46672_46698[(2)] = null);

(statearr_46672_46698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (3))){
var inst_46661 = (state_46664[(2)]);
var inst_46662 = cljs.core.async.close_BANG_.call(null,out);
var state_46664__$1 = (function (){var statearr_46673 = state_46664;
(statearr_46673[(9)] = inst_46661);

return statearr_46673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46664__$1,inst_46662);
} else {
if((state_val_46665 === (2))){
var state_46664__$1 = state_46664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46664__$1,(4),ch);
} else {
if((state_val_46665 === (11))){
var inst_46644 = (state_46664[(8)]);
var inst_46653 = (state_46664[(2)]);
var inst_46641 = inst_46644;
var state_46664__$1 = (function (){var statearr_46674 = state_46664;
(statearr_46674[(7)] = inst_46641);

(statearr_46674[(10)] = inst_46653);

return statearr_46674;
})();
var statearr_46675_46699 = state_46664__$1;
(statearr_46675_46699[(2)] = null);

(statearr_46675_46699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (9))){
var inst_46644 = (state_46664[(8)]);
var state_46664__$1 = state_46664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46664__$1,(11),out,inst_46644);
} else {
if((state_val_46665 === (5))){
var inst_46644 = (state_46664[(8)]);
var inst_46641 = (state_46664[(7)]);
var inst_46648 = cljs.core._EQ_.call(null,inst_46644,inst_46641);
var state_46664__$1 = state_46664;
if(inst_46648){
var statearr_46677_46700 = state_46664__$1;
(statearr_46677_46700[(1)] = (8));

} else {
var statearr_46678_46701 = state_46664__$1;
(statearr_46678_46701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (10))){
var inst_46656 = (state_46664[(2)]);
var state_46664__$1 = state_46664;
var statearr_46679_46702 = state_46664__$1;
(statearr_46679_46702[(2)] = inst_46656);

(statearr_46679_46702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46665 === (8))){
var inst_46641 = (state_46664[(7)]);
var tmp46676 = inst_46641;
var inst_46641__$1 = tmp46676;
var state_46664__$1 = (function (){var statearr_46680 = state_46664;
(statearr_46680[(7)] = inst_46641__$1);

return statearr_46680;
})();
var statearr_46681_46703 = state_46664__$1;
(statearr_46681_46703[(2)] = null);

(statearr_46681_46703[(1)] = (2));


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
});})(c__41400__auto___46693,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46693,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46685[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46685[(1)] = (1));

return statearr_46685;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46664){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46686){if((e46686 instanceof Object)){
var ex__41383__auto__ = e46686;
var statearr_46687_46704 = state_46664;
(statearr_46687_46704[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46705 = state_46664;
state_46664 = G__46705;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46693,out))
})();
var state__41402__auto__ = (function (){var statearr_46688 = f__41401__auto__.call(null);
(statearr_46688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46693);

return statearr_46688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46693,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46706 = [];
var len__38501__auto___46776 = arguments.length;
var i__38502__auto___46777 = (0);
while(true){
if((i__38502__auto___46777 < len__38501__auto___46776)){
args46706.push((arguments[i__38502__auto___46777]));

var G__46778 = (i__38502__auto___46777 + (1));
i__38502__auto___46777 = G__46778;
continue;
} else {
}
break;
}

var G__46708 = args46706.length;
switch (G__46708) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46706.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46780,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46780,out){
return (function (state_46746){
var state_val_46747 = (state_46746[(1)]);
if((state_val_46747 === (7))){
var inst_46742 = (state_46746[(2)]);
var state_46746__$1 = state_46746;
var statearr_46748_46781 = state_46746__$1;
(statearr_46748_46781[(2)] = inst_46742);

(statearr_46748_46781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (1))){
var inst_46709 = (new Array(n));
var inst_46710 = inst_46709;
var inst_46711 = (0);
var state_46746__$1 = (function (){var statearr_46749 = state_46746;
(statearr_46749[(7)] = inst_46710);

(statearr_46749[(8)] = inst_46711);

return statearr_46749;
})();
var statearr_46750_46782 = state_46746__$1;
(statearr_46750_46782[(2)] = null);

(statearr_46750_46782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (4))){
var inst_46714 = (state_46746[(9)]);
var inst_46714__$1 = (state_46746[(2)]);
var inst_46715 = (inst_46714__$1 == null);
var inst_46716 = cljs.core.not.call(null,inst_46715);
var state_46746__$1 = (function (){var statearr_46751 = state_46746;
(statearr_46751[(9)] = inst_46714__$1);

return statearr_46751;
})();
if(inst_46716){
var statearr_46752_46783 = state_46746__$1;
(statearr_46752_46783[(1)] = (5));

} else {
var statearr_46753_46784 = state_46746__$1;
(statearr_46753_46784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (15))){
var inst_46736 = (state_46746[(2)]);
var state_46746__$1 = state_46746;
var statearr_46754_46785 = state_46746__$1;
(statearr_46754_46785[(2)] = inst_46736);

(statearr_46754_46785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (13))){
var state_46746__$1 = state_46746;
var statearr_46755_46786 = state_46746__$1;
(statearr_46755_46786[(2)] = null);

(statearr_46755_46786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (6))){
var inst_46711 = (state_46746[(8)]);
var inst_46732 = (inst_46711 > (0));
var state_46746__$1 = state_46746;
if(cljs.core.truth_(inst_46732)){
var statearr_46756_46787 = state_46746__$1;
(statearr_46756_46787[(1)] = (12));

} else {
var statearr_46757_46788 = state_46746__$1;
(statearr_46757_46788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (3))){
var inst_46744 = (state_46746[(2)]);
var state_46746__$1 = state_46746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46746__$1,inst_46744);
} else {
if((state_val_46747 === (12))){
var inst_46710 = (state_46746[(7)]);
var inst_46734 = cljs.core.vec.call(null,inst_46710);
var state_46746__$1 = state_46746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46746__$1,(15),out,inst_46734);
} else {
if((state_val_46747 === (2))){
var state_46746__$1 = state_46746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46746__$1,(4),ch);
} else {
if((state_val_46747 === (11))){
var inst_46726 = (state_46746[(2)]);
var inst_46727 = (new Array(n));
var inst_46710 = inst_46727;
var inst_46711 = (0);
var state_46746__$1 = (function (){var statearr_46758 = state_46746;
(statearr_46758[(7)] = inst_46710);

(statearr_46758[(10)] = inst_46726);

(statearr_46758[(8)] = inst_46711);

return statearr_46758;
})();
var statearr_46759_46789 = state_46746__$1;
(statearr_46759_46789[(2)] = null);

(statearr_46759_46789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (9))){
var inst_46710 = (state_46746[(7)]);
var inst_46724 = cljs.core.vec.call(null,inst_46710);
var state_46746__$1 = state_46746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46746__$1,(11),out,inst_46724);
} else {
if((state_val_46747 === (5))){
var inst_46714 = (state_46746[(9)]);
var inst_46710 = (state_46746[(7)]);
var inst_46719 = (state_46746[(11)]);
var inst_46711 = (state_46746[(8)]);
var inst_46718 = (inst_46710[inst_46711] = inst_46714);
var inst_46719__$1 = (inst_46711 + (1));
var inst_46720 = (inst_46719__$1 < n);
var state_46746__$1 = (function (){var statearr_46760 = state_46746;
(statearr_46760[(12)] = inst_46718);

(statearr_46760[(11)] = inst_46719__$1);

return statearr_46760;
})();
if(cljs.core.truth_(inst_46720)){
var statearr_46761_46790 = state_46746__$1;
(statearr_46761_46790[(1)] = (8));

} else {
var statearr_46762_46791 = state_46746__$1;
(statearr_46762_46791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (14))){
var inst_46739 = (state_46746[(2)]);
var inst_46740 = cljs.core.async.close_BANG_.call(null,out);
var state_46746__$1 = (function (){var statearr_46764 = state_46746;
(statearr_46764[(13)] = inst_46739);

return statearr_46764;
})();
var statearr_46765_46792 = state_46746__$1;
(statearr_46765_46792[(2)] = inst_46740);

(statearr_46765_46792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (10))){
var inst_46730 = (state_46746[(2)]);
var state_46746__$1 = state_46746;
var statearr_46766_46793 = state_46746__$1;
(statearr_46766_46793[(2)] = inst_46730);

(statearr_46766_46793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46747 === (8))){
var inst_46710 = (state_46746[(7)]);
var inst_46719 = (state_46746[(11)]);
var tmp46763 = inst_46710;
var inst_46710__$1 = tmp46763;
var inst_46711 = inst_46719;
var state_46746__$1 = (function (){var statearr_46767 = state_46746;
(statearr_46767[(7)] = inst_46710__$1);

(statearr_46767[(8)] = inst_46711);

return statearr_46767;
})();
var statearr_46768_46794 = state_46746__$1;
(statearr_46768_46794[(2)] = null);

(statearr_46768_46794[(1)] = (2));


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
});})(c__41400__auto___46780,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46780,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46772[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46772[(1)] = (1));

return statearr_46772;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46746){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46773){if((e46773 instanceof Object)){
var ex__41383__auto__ = e46773;
var statearr_46774_46795 = state_46746;
(statearr_46774_46795[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46796 = state_46746;
state_46746 = G__46796;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46780,out))
})();
var state__41402__auto__ = (function (){var statearr_46775 = f__41401__auto__.call(null);
(statearr_46775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46780);

return statearr_46775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46780,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args46797 = [];
var len__38501__auto___46871 = arguments.length;
var i__38502__auto___46872 = (0);
while(true){
if((i__38502__auto___46872 < len__38501__auto___46871)){
args46797.push((arguments[i__38502__auto___46872]));

var G__46873 = (i__38502__auto___46872 + (1));
i__38502__auto___46872 = G__46873;
continue;
} else {
}
break;
}

var G__46799 = args46797.length;
switch (G__46799) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46797.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41400__auto___46875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41400__auto___46875,out){
return (function (){
var f__41401__auto__ = (function (){var switch__41379__auto__ = ((function (c__41400__auto___46875,out){
return (function (state_46841){
var state_val_46842 = (state_46841[(1)]);
if((state_val_46842 === (7))){
var inst_46837 = (state_46841[(2)]);
var state_46841__$1 = state_46841;
var statearr_46843_46876 = state_46841__$1;
(statearr_46843_46876[(2)] = inst_46837);

(statearr_46843_46876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (1))){
var inst_46800 = [];
var inst_46801 = inst_46800;
var inst_46802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46841__$1 = (function (){var statearr_46844 = state_46841;
(statearr_46844[(7)] = inst_46802);

(statearr_46844[(8)] = inst_46801);

return statearr_46844;
})();
var statearr_46845_46877 = state_46841__$1;
(statearr_46845_46877[(2)] = null);

(statearr_46845_46877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (4))){
var inst_46805 = (state_46841[(9)]);
var inst_46805__$1 = (state_46841[(2)]);
var inst_46806 = (inst_46805__$1 == null);
var inst_46807 = cljs.core.not.call(null,inst_46806);
var state_46841__$1 = (function (){var statearr_46846 = state_46841;
(statearr_46846[(9)] = inst_46805__$1);

return statearr_46846;
})();
if(inst_46807){
var statearr_46847_46878 = state_46841__$1;
(statearr_46847_46878[(1)] = (5));

} else {
var statearr_46848_46879 = state_46841__$1;
(statearr_46848_46879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (15))){
var inst_46831 = (state_46841[(2)]);
var state_46841__$1 = state_46841;
var statearr_46849_46880 = state_46841__$1;
(statearr_46849_46880[(2)] = inst_46831);

(statearr_46849_46880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (13))){
var state_46841__$1 = state_46841;
var statearr_46850_46881 = state_46841__$1;
(statearr_46850_46881[(2)] = null);

(statearr_46850_46881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (6))){
var inst_46801 = (state_46841[(8)]);
var inst_46826 = inst_46801.length;
var inst_46827 = (inst_46826 > (0));
var state_46841__$1 = state_46841;
if(cljs.core.truth_(inst_46827)){
var statearr_46851_46882 = state_46841__$1;
(statearr_46851_46882[(1)] = (12));

} else {
var statearr_46852_46883 = state_46841__$1;
(statearr_46852_46883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (3))){
var inst_46839 = (state_46841[(2)]);
var state_46841__$1 = state_46841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46841__$1,inst_46839);
} else {
if((state_val_46842 === (12))){
var inst_46801 = (state_46841[(8)]);
var inst_46829 = cljs.core.vec.call(null,inst_46801);
var state_46841__$1 = state_46841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46841__$1,(15),out,inst_46829);
} else {
if((state_val_46842 === (2))){
var state_46841__$1 = state_46841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46841__$1,(4),ch);
} else {
if((state_val_46842 === (11))){
var inst_46809 = (state_46841[(10)]);
var inst_46805 = (state_46841[(9)]);
var inst_46819 = (state_46841[(2)]);
var inst_46820 = [];
var inst_46821 = inst_46820.push(inst_46805);
var inst_46801 = inst_46820;
var inst_46802 = inst_46809;
var state_46841__$1 = (function (){var statearr_46853 = state_46841;
(statearr_46853[(11)] = inst_46821);

(statearr_46853[(7)] = inst_46802);

(statearr_46853[(12)] = inst_46819);

(statearr_46853[(8)] = inst_46801);

return statearr_46853;
})();
var statearr_46854_46884 = state_46841__$1;
(statearr_46854_46884[(2)] = null);

(statearr_46854_46884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (9))){
var inst_46801 = (state_46841[(8)]);
var inst_46817 = cljs.core.vec.call(null,inst_46801);
var state_46841__$1 = state_46841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46841__$1,(11),out,inst_46817);
} else {
if((state_val_46842 === (5))){
var inst_46809 = (state_46841[(10)]);
var inst_46802 = (state_46841[(7)]);
var inst_46805 = (state_46841[(9)]);
var inst_46809__$1 = f.call(null,inst_46805);
var inst_46810 = cljs.core._EQ_.call(null,inst_46809__$1,inst_46802);
var inst_46811 = cljs.core.keyword_identical_QMARK_.call(null,inst_46802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46812 = (inst_46810) || (inst_46811);
var state_46841__$1 = (function (){var statearr_46855 = state_46841;
(statearr_46855[(10)] = inst_46809__$1);

return statearr_46855;
})();
if(cljs.core.truth_(inst_46812)){
var statearr_46856_46885 = state_46841__$1;
(statearr_46856_46885[(1)] = (8));

} else {
var statearr_46857_46886 = state_46841__$1;
(statearr_46857_46886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (14))){
var inst_46834 = (state_46841[(2)]);
var inst_46835 = cljs.core.async.close_BANG_.call(null,out);
var state_46841__$1 = (function (){var statearr_46859 = state_46841;
(statearr_46859[(13)] = inst_46834);

return statearr_46859;
})();
var statearr_46860_46887 = state_46841__$1;
(statearr_46860_46887[(2)] = inst_46835);

(statearr_46860_46887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (10))){
var inst_46824 = (state_46841[(2)]);
var state_46841__$1 = state_46841;
var statearr_46861_46888 = state_46841__$1;
(statearr_46861_46888[(2)] = inst_46824);

(statearr_46861_46888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46842 === (8))){
var inst_46809 = (state_46841[(10)]);
var inst_46805 = (state_46841[(9)]);
var inst_46801 = (state_46841[(8)]);
var inst_46814 = inst_46801.push(inst_46805);
var tmp46858 = inst_46801;
var inst_46801__$1 = tmp46858;
var inst_46802 = inst_46809;
var state_46841__$1 = (function (){var statearr_46862 = state_46841;
(statearr_46862[(7)] = inst_46802);

(statearr_46862[(14)] = inst_46814);

(statearr_46862[(8)] = inst_46801__$1);

return statearr_46862;
})();
var statearr_46863_46889 = state_46841__$1;
(statearr_46863_46889[(2)] = null);

(statearr_46863_46889[(1)] = (2));


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
});})(c__41400__auto___46875,out))
;
return ((function (switch__41379__auto__,c__41400__auto___46875,out){
return (function() {
var cljs$core$async$state_machine__41380__auto__ = null;
var cljs$core$async$state_machine__41380__auto____0 = (function (){
var statearr_46867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46867[(0)] = cljs$core$async$state_machine__41380__auto__);

(statearr_46867[(1)] = (1));

return statearr_46867;
});
var cljs$core$async$state_machine__41380__auto____1 = (function (state_46841){
while(true){
var ret_value__41381__auto__ = (function (){try{while(true){
var result__41382__auto__ = switch__41379__auto__.call(null,state_46841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41382__auto__;
}
break;
}
}catch (e46868){if((e46868 instanceof Object)){
var ex__41383__auto__ = e46868;
var statearr_46869_46890 = state_46841;
(statearr_46869_46890[(5)] = ex__41383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46891 = state_46841;
state_46841 = G__46891;
continue;
} else {
return ret_value__41381__auto__;
}
break;
}
});
cljs$core$async$state_machine__41380__auto__ = function(state_46841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41380__auto____1.call(this,state_46841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41380__auto____0;
cljs$core$async$state_machine__41380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41380__auto____1;
return cljs$core$async$state_machine__41380__auto__;
})()
;})(switch__41379__auto__,c__41400__auto___46875,out))
})();
var state__41402__auto__ = (function (){var statearr_46870 = f__41401__auto__.call(null);
(statearr_46870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41400__auto___46875);

return statearr_46870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41402__auto__);
});})(c__41400__auto___46875,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1458659769438