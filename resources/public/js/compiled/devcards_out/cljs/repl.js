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
var seq__43645_43659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43646_43660 = null;
var count__43647_43661 = (0);
var i__43648_43662 = (0);
while(true){
if((i__43648_43662 < count__43647_43661)){
var f_43663 = cljs.core._nth.call(null,chunk__43646_43660,i__43648_43662);
cljs.core.println.call(null,"  ",f_43663);

var G__43664 = seq__43645_43659;
var G__43665 = chunk__43646_43660;
var G__43666 = count__43647_43661;
var G__43667 = (i__43648_43662 + (1));
seq__43645_43659 = G__43664;
chunk__43646_43660 = G__43665;
count__43647_43661 = G__43666;
i__43648_43662 = G__43667;
continue;
} else {
var temp__4657__auto___43668 = cljs.core.seq.call(null,seq__43645_43659);
if(temp__4657__auto___43668){
var seq__43645_43669__$1 = temp__4657__auto___43668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43645_43669__$1)){
var c__38246__auto___43670 = cljs.core.chunk_first.call(null,seq__43645_43669__$1);
var G__43671 = cljs.core.chunk_rest.call(null,seq__43645_43669__$1);
var G__43672 = c__38246__auto___43670;
var G__43673 = cljs.core.count.call(null,c__38246__auto___43670);
var G__43674 = (0);
seq__43645_43659 = G__43671;
chunk__43646_43660 = G__43672;
count__43647_43661 = G__43673;
i__43648_43662 = G__43674;
continue;
} else {
var f_43675 = cljs.core.first.call(null,seq__43645_43669__$1);
cljs.core.println.call(null,"  ",f_43675);

var G__43676 = cljs.core.next.call(null,seq__43645_43669__$1);
var G__43677 = null;
var G__43678 = (0);
var G__43679 = (0);
seq__43645_43659 = G__43676;
chunk__43646_43660 = G__43677;
count__43647_43661 = G__43678;
i__43648_43662 = G__43679;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43680 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43680);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43680)))?cljs.core.second.call(null,arglists_43680):arglists_43680));
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
var seq__43649 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43650 = null;
var count__43651 = (0);
var i__43652 = (0);
while(true){
if((i__43652 < count__43651)){
var vec__43653 = cljs.core._nth.call(null,chunk__43650,i__43652);
var name = cljs.core.nth.call(null,vec__43653,(0),null);
var map__43654 = cljs.core.nth.call(null,vec__43653,(1),null);
var map__43654__$1 = ((((!((map__43654 == null)))?((((map__43654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43654):map__43654);
var doc = cljs.core.get.call(null,map__43654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43681 = seq__43649;
var G__43682 = chunk__43650;
var G__43683 = count__43651;
var G__43684 = (i__43652 + (1));
seq__43649 = G__43681;
chunk__43650 = G__43682;
count__43651 = G__43683;
i__43652 = G__43684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43649);
if(temp__4657__auto__){
var seq__43649__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43649__$1)){
var c__38246__auto__ = cljs.core.chunk_first.call(null,seq__43649__$1);
var G__43685 = cljs.core.chunk_rest.call(null,seq__43649__$1);
var G__43686 = c__38246__auto__;
var G__43687 = cljs.core.count.call(null,c__38246__auto__);
var G__43688 = (0);
seq__43649 = G__43685;
chunk__43650 = G__43686;
count__43651 = G__43687;
i__43652 = G__43688;
continue;
} else {
var vec__43656 = cljs.core.first.call(null,seq__43649__$1);
var name = cljs.core.nth.call(null,vec__43656,(0),null);
var map__43657 = cljs.core.nth.call(null,vec__43656,(1),null);
var map__43657__$1 = ((((!((map__43657 == null)))?((((map__43657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43657):map__43657);
var doc = cljs.core.get.call(null,map__43657__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43657__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43689 = cljs.core.next.call(null,seq__43649__$1);
var G__43690 = null;
var G__43691 = (0);
var G__43692 = (0);
seq__43649 = G__43689;
chunk__43650 = G__43690;
count__43651 = G__43691;
i__43652 = G__43692;
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

//# sourceMappingURL=repl.js.map?rel=1459008340911