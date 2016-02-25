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
var seq__55312_55326 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55313_55327 = null;
var count__55314_55328 = (0);
var i__55315_55329 = (0);
while(true){
if((i__55315_55329 < count__55314_55328)){
var f_55330 = cljs.core._nth.call(null,chunk__55313_55327,i__55315_55329);
cljs.core.println.call(null,"  ",f_55330);

var G__55331 = seq__55312_55326;
var G__55332 = chunk__55313_55327;
var G__55333 = count__55314_55328;
var G__55334 = (i__55315_55329 + (1));
seq__55312_55326 = G__55331;
chunk__55313_55327 = G__55332;
count__55314_55328 = G__55333;
i__55315_55329 = G__55334;
continue;
} else {
var temp__4425__auto___55335 = cljs.core.seq.call(null,seq__55312_55326);
if(temp__4425__auto___55335){
var seq__55312_55336__$1 = temp__4425__auto___55335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55312_55336__$1)){
var c__36317__auto___55337 = cljs.core.chunk_first.call(null,seq__55312_55336__$1);
var G__55338 = cljs.core.chunk_rest.call(null,seq__55312_55336__$1);
var G__55339 = c__36317__auto___55337;
var G__55340 = cljs.core.count.call(null,c__36317__auto___55337);
var G__55341 = (0);
seq__55312_55326 = G__55338;
chunk__55313_55327 = G__55339;
count__55314_55328 = G__55340;
i__55315_55329 = G__55341;
continue;
} else {
var f_55342 = cljs.core.first.call(null,seq__55312_55336__$1);
cljs.core.println.call(null,"  ",f_55342);

var G__55343 = cljs.core.next.call(null,seq__55312_55336__$1);
var G__55344 = null;
var G__55345 = (0);
var G__55346 = (0);
seq__55312_55326 = G__55343;
chunk__55313_55327 = G__55344;
count__55314_55328 = G__55345;
i__55315_55329 = G__55346;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55347 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35514__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55347);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55347)))?cljs.core.second.call(null,arglists_55347):arglists_55347));
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
var seq__55316 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55317 = null;
var count__55318 = (0);
var i__55319 = (0);
while(true){
if((i__55319 < count__55318)){
var vec__55320 = cljs.core._nth.call(null,chunk__55317,i__55319);
var name = cljs.core.nth.call(null,vec__55320,(0),null);
var map__55321 = cljs.core.nth.call(null,vec__55320,(1),null);
var map__55321__$1 = ((((!((map__55321 == null)))?((((map__55321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55321):map__55321);
var doc = cljs.core.get.call(null,map__55321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__55321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__55348 = seq__55316;
var G__55349 = chunk__55317;
var G__55350 = count__55318;
var G__55351 = (i__55319 + (1));
seq__55316 = G__55348;
chunk__55317 = G__55349;
count__55318 = G__55350;
i__55319 = G__55351;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__55316);
if(temp__4425__auto__){
var seq__55316__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55316__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__55316__$1);
var G__55352 = cljs.core.chunk_rest.call(null,seq__55316__$1);
var G__55353 = c__36317__auto__;
var G__55354 = cljs.core.count.call(null,c__36317__auto__);
var G__55355 = (0);
seq__55316 = G__55352;
chunk__55317 = G__55353;
count__55318 = G__55354;
i__55319 = G__55355;
continue;
} else {
var vec__55323 = cljs.core.first.call(null,seq__55316__$1);
var name = cljs.core.nth.call(null,vec__55323,(0),null);
var map__55324 = cljs.core.nth.call(null,vec__55323,(1),null);
var map__55324__$1 = ((((!((map__55324 == null)))?((((map__55324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55324):map__55324);
var doc = cljs.core.get.call(null,map__55324__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__55324__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__55356 = cljs.core.next.call(null,seq__55316__$1);
var G__55357 = null;
var G__55358 = (0);
var G__55359 = (0);
seq__55316 = G__55356;
chunk__55317 = G__55357;
count__55318 = G__55358;
i__55319 = G__55359;
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

//# sourceMappingURL=repl.js.map?rel=1456364844643