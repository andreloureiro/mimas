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
var seq__48379_48393 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48380_48394 = null;
var count__48381_48395 = (0);
var i__48382_48396 = (0);
while(true){
if((i__48382_48396 < count__48381_48395)){
var f_48397 = cljs.core._nth.call(null,chunk__48380_48394,i__48382_48396);
cljs.core.println.call(null,"  ",f_48397);

var G__48398 = seq__48379_48393;
var G__48399 = chunk__48380_48394;
var G__48400 = count__48381_48395;
var G__48401 = (i__48382_48396 + (1));
seq__48379_48393 = G__48398;
chunk__48380_48394 = G__48399;
count__48381_48395 = G__48400;
i__48382_48396 = G__48401;
continue;
} else {
var temp__4425__auto___48402 = cljs.core.seq.call(null,seq__48379_48393);
if(temp__4425__auto___48402){
var seq__48379_48403__$1 = temp__4425__auto___48402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48379_48403__$1)){
var c__36319__auto___48404 = cljs.core.chunk_first.call(null,seq__48379_48403__$1);
var G__48405 = cljs.core.chunk_rest.call(null,seq__48379_48403__$1);
var G__48406 = c__36319__auto___48404;
var G__48407 = cljs.core.count.call(null,c__36319__auto___48404);
var G__48408 = (0);
seq__48379_48393 = G__48405;
chunk__48380_48394 = G__48406;
count__48381_48395 = G__48407;
i__48382_48396 = G__48408;
continue;
} else {
var f_48409 = cljs.core.first.call(null,seq__48379_48403__$1);
cljs.core.println.call(null,"  ",f_48409);

var G__48410 = cljs.core.next.call(null,seq__48379_48403__$1);
var G__48411 = null;
var G__48412 = (0);
var G__48413 = (0);
seq__48379_48393 = G__48410;
chunk__48380_48394 = G__48411;
count__48381_48395 = G__48412;
i__48382_48396 = G__48413;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48414 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35516__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48414);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48414)))?cljs.core.second.call(null,arglists_48414):arglists_48414));
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
var seq__48383 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48384 = null;
var count__48385 = (0);
var i__48386 = (0);
while(true){
if((i__48386 < count__48385)){
var vec__48387 = cljs.core._nth.call(null,chunk__48384,i__48386);
var name = cljs.core.nth.call(null,vec__48387,(0),null);
var map__48388 = cljs.core.nth.call(null,vec__48387,(1),null);
var map__48388__$1 = ((((!((map__48388 == null)))?((((map__48388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48388):map__48388);
var doc = cljs.core.get.call(null,map__48388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__48388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__48415 = seq__48383;
var G__48416 = chunk__48384;
var G__48417 = count__48385;
var G__48418 = (i__48386 + (1));
seq__48383 = G__48415;
chunk__48384 = G__48416;
count__48385 = G__48417;
i__48386 = G__48418;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__48383);
if(temp__4425__auto__){
var seq__48383__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48383__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__48383__$1);
var G__48419 = cljs.core.chunk_rest.call(null,seq__48383__$1);
var G__48420 = c__36319__auto__;
var G__48421 = cljs.core.count.call(null,c__36319__auto__);
var G__48422 = (0);
seq__48383 = G__48419;
chunk__48384 = G__48420;
count__48385 = G__48421;
i__48386 = G__48422;
continue;
} else {
var vec__48390 = cljs.core.first.call(null,seq__48383__$1);
var name = cljs.core.nth.call(null,vec__48390,(0),null);
var map__48391 = cljs.core.nth.call(null,vec__48390,(1),null);
var map__48391__$1 = ((((!((map__48391 == null)))?((((map__48391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48391):map__48391);
var doc = cljs.core.get.call(null,map__48391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__48391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__48423 = cljs.core.next.call(null,seq__48383__$1);
var G__48424 = null;
var G__48425 = (0);
var G__48426 = (0);
seq__48383 = G__48423;
chunk__48384 = G__48424;
count__48385 = G__48425;
i__48386 = G__48426;
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

//# sourceMappingURL=repl.js.map?rel=1456711312465