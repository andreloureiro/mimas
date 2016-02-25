// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45463_45477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45464_45478 = null;
var count__45465_45479 = (0);
var i__45466_45480 = (0);
while(true){
if((i__45466_45480 < count__45465_45479)){
var f_45481 = cljs.core._nth.call(null,chunk__45464_45478,i__45466_45480);
cljs.core.println.call(null,"  ",f_45481);

var G__45482 = seq__45463_45477;
var G__45483 = chunk__45464_45478;
var G__45484 = count__45465_45479;
var G__45485 = (i__45466_45480 + (1));
seq__45463_45477 = G__45482;
chunk__45464_45478 = G__45483;
count__45465_45479 = G__45484;
i__45466_45480 = G__45485;
continue;
} else {
var temp__4425__auto___45486 = cljs.core.seq.call(null,seq__45463_45477);
if(temp__4425__auto___45486){
var seq__45463_45487__$1 = temp__4425__auto___45486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45463_45487__$1)){
var c__36317__auto___45488 = cljs.core.chunk_first.call(null,seq__45463_45487__$1);
var G__45489 = cljs.core.chunk_rest.call(null,seq__45463_45487__$1);
var G__45490 = c__36317__auto___45488;
var G__45491 = cljs.core.count.call(null,c__36317__auto___45488);
var G__45492 = (0);
seq__45463_45477 = G__45489;
chunk__45464_45478 = G__45490;
count__45465_45479 = G__45491;
i__45466_45480 = G__45492;
continue;
} else {
var f_45493 = cljs.core.first.call(null,seq__45463_45487__$1);
cljs.core.println.call(null,"  ",f_45493);

var G__45494 = cljs.core.next.call(null,seq__45463_45487__$1);
var G__45495 = null;
var G__45496 = (0);
var G__45497 = (0);
seq__45463_45477 = G__45494;
chunk__45464_45478 = G__45495;
count__45465_45479 = G__45496;
i__45466_45480 = G__45497;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45498 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35514__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45498);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45498)))?cljs.core.second.call(null,arglists_45498):arglists_45498));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45468 = null;
var count__45469 = (0);
var i__45470 = (0);
while(true){
if((i__45470 < count__45469)){
var vec__45471 = cljs.core._nth.call(null,chunk__45468,i__45470);
var name = cljs.core.nth.call(null,vec__45471,(0),null);
var map__45472 = cljs.core.nth.call(null,vec__45471,(1),null);
var map__45472__$1 = ((((!((map__45472 == null)))?((((map__45472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45472):map__45472);
var doc = cljs.core.get.call(null,map__45472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45499 = seq__45467;
var G__45500 = chunk__45468;
var G__45501 = count__45469;
var G__45502 = (i__45470 + (1));
seq__45467 = G__45499;
chunk__45468 = G__45500;
count__45469 = G__45501;
i__45470 = G__45502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45467);
if(temp__4425__auto__){
var seq__45467__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45467__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__45467__$1);
var G__45503 = cljs.core.chunk_rest.call(null,seq__45467__$1);
var G__45504 = c__36317__auto__;
var G__45505 = cljs.core.count.call(null,c__36317__auto__);
var G__45506 = (0);
seq__45467 = G__45503;
chunk__45468 = G__45504;
count__45469 = G__45505;
i__45470 = G__45506;
continue;
} else {
var vec__45474 = cljs.core.first.call(null,seq__45467__$1);
var name = cljs.core.nth.call(null,vec__45474,(0),null);
var map__45475 = cljs.core.nth.call(null,vec__45474,(1),null);
var map__45475__$1 = ((((!((map__45475 == null)))?((((map__45475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45475):map__45475);
var doc = cljs.core.get.call(null,map__45475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45507 = cljs.core.next.call(null,seq__45467__$1);
var G__45508 = null;
var G__45509 = (0);
var G__45510 = (0);
seq__45467 = G__45507;
chunk__45468 = G__45508;
count__45469 = G__45509;
i__45470 = G__45510;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1456361406893