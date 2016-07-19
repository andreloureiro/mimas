// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__41584_41598 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41585_41599 = null;
var count__41586_41600 = (0);
var i__41587_41601 = (0);
while(true){
if((i__41587_41601 < count__41586_41600)){
var f_41602 = cljs.core._nth.call(null,chunk__41585_41599,i__41587_41601);
cljs.core.println.call(null,"  ",f_41602);

var G__41603 = seq__41584_41598;
var G__41604 = chunk__41585_41599;
var G__41605 = count__41586_41600;
var G__41606 = (i__41587_41601 + (1));
seq__41584_41598 = G__41603;
chunk__41585_41599 = G__41604;
count__41586_41600 = G__41605;
i__41587_41601 = G__41606;
continue;
} else {
var temp__4657__auto___41607 = cljs.core.seq.call(null,seq__41584_41598);
if(temp__4657__auto___41607){
var seq__41584_41608__$1 = temp__4657__auto___41607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41584_41608__$1)){
var c__38246__auto___41609 = cljs.core.chunk_first.call(null,seq__41584_41608__$1);
var G__41610 = cljs.core.chunk_rest.call(null,seq__41584_41608__$1);
var G__41611 = c__38246__auto___41609;
var G__41612 = cljs.core.count.call(null,c__38246__auto___41609);
var G__41613 = (0);
seq__41584_41598 = G__41610;
chunk__41585_41599 = G__41611;
count__41586_41600 = G__41612;
i__41587_41601 = G__41613;
continue;
} else {
var f_41614 = cljs.core.first.call(null,seq__41584_41608__$1);
cljs.core.println.call(null,"  ",f_41614);

var G__41615 = cljs.core.next.call(null,seq__41584_41608__$1);
var G__41616 = null;
var G__41617 = (0);
var G__41618 = (0);
seq__41584_41598 = G__41615;
chunk__41585_41599 = G__41616;
count__41586_41600 = G__41617;
i__41587_41601 = G__41618;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41619 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41619);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41619)))?cljs.core.second.call(null,arglists_41619):arglists_41619));
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
var seq__41588 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41589 = null;
var count__41590 = (0);
var i__41591 = (0);
while(true){
if((i__41591 < count__41590)){
var vec__41592 = cljs.core._nth.call(null,chunk__41589,i__41591);
var name = cljs.core.nth.call(null,vec__41592,(0),null);
var map__41593 = cljs.core.nth.call(null,vec__41592,(1),null);
var map__41593__$1 = ((((!((map__41593 == null)))?((((map__41593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41593):map__41593);
var doc = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41620 = seq__41588;
var G__41621 = chunk__41589;
var G__41622 = count__41590;
var G__41623 = (i__41591 + (1));
seq__41588 = G__41620;
chunk__41589 = G__41621;
count__41590 = G__41622;
i__41591 = G__41623;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41588);
if(temp__4657__auto__){
var seq__41588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41588__$1)){
var c__38246__auto__ = cljs.core.chunk_first.call(null,seq__41588__$1);
var G__41624 = cljs.core.chunk_rest.call(null,seq__41588__$1);
var G__41625 = c__38246__auto__;
var G__41626 = cljs.core.count.call(null,c__38246__auto__);
var G__41627 = (0);
seq__41588 = G__41624;
chunk__41589 = G__41625;
count__41590 = G__41626;
i__41591 = G__41627;
continue;
} else {
var vec__41595 = cljs.core.first.call(null,seq__41588__$1);
var name = cljs.core.nth.call(null,vec__41595,(0),null);
var map__41596 = cljs.core.nth.call(null,vec__41595,(1),null);
var map__41596__$1 = ((((!((map__41596 == null)))?((((map__41596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41596):map__41596);
var doc = cljs.core.get.call(null,map__41596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41628 = cljs.core.next.call(null,seq__41588__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__41588 = G__41628;
chunk__41589 = G__41629;
count__41590 = G__41630;
i__41591 = G__41631;
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

//# sourceMappingURL=repl.js.map?rel=1458659758292