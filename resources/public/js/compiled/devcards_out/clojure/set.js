// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__44658_SHARP_){
return (max === p1__44658_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args44659 = [];
var len__38501__auto___44665 = arguments.length;
var i__38502__auto___44666 = (0);
while(true){
if((i__38502__auto___44666 < len__38501__auto___44665)){
args44659.push((arguments[i__38502__auto___44666]));

var G__44667 = (i__38502__auto___44666 + (1));
i__38502__auto___44666 = G__44667;
continue;
} else {
}
break;
}

var G__44664 = args44659.length;
switch (G__44664) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__38520__auto__ = (new cljs.core.IndexedSeq(args44659.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38520__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq44660){
var G__44661 = cljs.core.first.call(null,seq44660);
var seq44660__$1 = cljs.core.next.call(null,seq44660);
var G__44662 = cljs.core.first.call(null,seq44660__$1);
var seq44660__$2 = cljs.core.next.call(null,seq44660__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__44661,G__44662,seq44660__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args44670 = [];
var len__38501__auto___44676 = arguments.length;
var i__38502__auto___44677 = (0);
while(true){
if((i__38502__auto___44677 < len__38501__auto___44676)){
args44670.push((arguments[i__38502__auto___44677]));

var G__44678 = (i__38502__auto___44677 + (1));
i__38502__auto___44677 = G__44678;
continue;
} else {
}
break;
}

var G__44675 = args44670.length;
switch (G__44675) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__38520__auto__ = (new cljs.core.IndexedSeq(args44670.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38520__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__44680 = s2;
var G__44681 = s1;
s1 = G__44680;
s2 = G__44681;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__44669_SHARP_){
return (- cljs.core.count.call(null,p1__44669_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq44671){
var G__44672 = cljs.core.first.call(null,seq44671);
var seq44671__$1 = cljs.core.next.call(null,seq44671);
var G__44673 = cljs.core.first.call(null,seq44671__$1);
var seq44671__$2 = cljs.core.next.call(null,seq44671__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__44672,G__44673,seq44671__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args44682 = [];
var len__38501__auto___44688 = arguments.length;
var i__38502__auto___44689 = (0);
while(true){
if((i__38502__auto___44689 < len__38501__auto___44688)){
args44682.push((arguments[i__38502__auto___44689]));

var G__44690 = (i__38502__auto___44689 + (1));
i__38502__auto___44689 = G__44690;
continue;
} else {
}
break;
}

var G__44687 = args44682.length;
switch (G__44687) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__38520__auto__ = (new cljs.core.IndexedSeq(args44682.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38520__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq44683){
var G__44684 = cljs.core.first.call(null,seq44683);
var seq44683__$1 = cljs.core.next.call(null,seq44683);
var G__44685 = cljs.core.first.call(null,seq44683__$1);
var seq44683__$2 = cljs.core.next.call(null,seq44683__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__44684,G__44685,seq44683__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__44692_SHARP_){
return cljs.core.select_keys.call(null,p1__44692_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__44695){
var vec__44696 = p__44695;
var old = cljs.core.nth.call(null,vec__44696,(0),null);
var new$ = cljs.core.nth.call(null,vec__44696,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__44697_SHARP_){
return clojure.set.rename_keys.call(null,p1__44697_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__44700){
var vec__44701 = p__44700;
var k = cljs.core.nth.call(null,vec__44701,(0),null);
var v = cljs.core.nth.call(null,vec__44701,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args44706 = [];
var len__38501__auto___44711 = arguments.length;
var i__38502__auto___44712 = (0);
while(true){
if((i__38502__auto___44712 < len__38501__auto___44711)){
args44706.push((arguments[i__38502__auto___44712]));

var G__44713 = (i__38502__auto___44712 + (1));
i__38502__auto___44712 = G__44713;
continue;
} else {
}
break;
}

var G__44708 = args44706.length;
switch (G__44708) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44706.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__44709 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__44709,(0),null);
var s = cljs.core.nth.call(null,vec__44709,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__44709,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__44709,r,s,idx){
return (function (p1__44702_SHARP_,p2__44703_SHARP_){
return cljs.core.conj.call(null,p1__44702_SHARP_,cljs.core.merge.call(null,p2__44703_SHARP_,x));
});})(found,ks,vec__44709,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__44709,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__44710 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__44710,(0),null);
var s = cljs.core.nth.call(null,vec__44710,(1),null);
var k = cljs.core.nth.call(null,vec__44710,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__44710,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__44710,r,s,k,idx){
return (function (p1__44704_SHARP_,p2__44705_SHARP_){
return cljs.core.conj.call(null,p1__44704_SHARP_,cljs.core.merge.call(null,p2__44705_SHARP_,x));
});})(found,vec__44710,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__44710,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__44715_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__44715_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__44716_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__44716_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1459008344041