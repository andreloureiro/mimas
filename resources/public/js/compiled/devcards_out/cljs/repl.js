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
var seq__41996_42010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41997_42011 = null;
var count__41998_42012 = (0);
var i__41999_42013 = (0);
while(true){
if((i__41999_42013 < count__41998_42012)){
var f_42014 = cljs.core._nth.call(null,chunk__41997_42011,i__41999_42013);
cljs.core.println.call(null,"  ",f_42014);

var G__42015 = seq__41996_42010;
var G__42016 = chunk__41997_42011;
var G__42017 = count__41998_42012;
var G__42018 = (i__41999_42013 + (1));
seq__41996_42010 = G__42015;
chunk__41997_42011 = G__42016;
count__41998_42012 = G__42017;
i__41999_42013 = G__42018;
continue;
} else {
var temp__4425__auto___42019 = cljs.core.seq.call(null,seq__41996_42010);
if(temp__4425__auto___42019){
var seq__41996_42020__$1 = temp__4425__auto___42019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41996_42020__$1)){
var c__36319__auto___42021 = cljs.core.chunk_first.call(null,seq__41996_42020__$1);
var G__42022 = cljs.core.chunk_rest.call(null,seq__41996_42020__$1);
var G__42023 = c__36319__auto___42021;
var G__42024 = cljs.core.count.call(null,c__36319__auto___42021);
var G__42025 = (0);
seq__41996_42010 = G__42022;
chunk__41997_42011 = G__42023;
count__41998_42012 = G__42024;
i__41999_42013 = G__42025;
continue;
} else {
var f_42026 = cljs.core.first.call(null,seq__41996_42020__$1);
cljs.core.println.call(null,"  ",f_42026);

var G__42027 = cljs.core.next.call(null,seq__41996_42020__$1);
var G__42028 = null;
var G__42029 = (0);
var G__42030 = (0);
seq__41996_42010 = G__42027;
chunk__41997_42011 = G__42028;
count__41998_42012 = G__42029;
i__41999_42013 = G__42030;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42031 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35516__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42031);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42031)))?cljs.core.second.call(null,arglists_42031):arglists_42031));
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
var seq__42000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42001 = null;
var count__42002 = (0);
var i__42003 = (0);
while(true){
if((i__42003 < count__42002)){
var vec__42004 = cljs.core._nth.call(null,chunk__42001,i__42003);
var name = cljs.core.nth.call(null,vec__42004,(0),null);
var map__42005 = cljs.core.nth.call(null,vec__42004,(1),null);
var map__42005__$1 = ((((!((map__42005 == null)))?((((map__42005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42005):map__42005);
var doc = cljs.core.get.call(null,map__42005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__42005__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42032 = seq__42000;
var G__42033 = chunk__42001;
var G__42034 = count__42002;
var G__42035 = (i__42003 + (1));
seq__42000 = G__42032;
chunk__42001 = G__42033;
count__42002 = G__42034;
i__42003 = G__42035;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42000);
if(temp__4425__auto__){
var seq__42000__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42000__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__42000__$1);
var G__42036 = cljs.core.chunk_rest.call(null,seq__42000__$1);
var G__42037 = c__36319__auto__;
var G__42038 = cljs.core.count.call(null,c__36319__auto__);
var G__42039 = (0);
seq__42000 = G__42036;
chunk__42001 = G__42037;
count__42002 = G__42038;
i__42003 = G__42039;
continue;
} else {
var vec__42007 = cljs.core.first.call(null,seq__42000__$1);
var name = cljs.core.nth.call(null,vec__42007,(0),null);
var map__42008 = cljs.core.nth.call(null,vec__42007,(1),null);
var map__42008__$1 = ((((!((map__42008 == null)))?((((map__42008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42008):map__42008);
var doc = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__42008__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42040 = cljs.core.next.call(null,seq__42000__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__42000 = G__42040;
chunk__42001 = G__42041;
count__42002 = G__42042;
i__42003 = G__42043;
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

//# sourceMappingURL=repl.js.map?rel=1456713002125