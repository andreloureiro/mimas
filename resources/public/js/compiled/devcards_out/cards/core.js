// Compiled by ClojureScript 1.7.170 {}
goog.provide('cards.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mimas.subs');
goog.require('mimas.core');
goog.require('reagent.core');
goog.require('mimas.db');
goog.require('mimas.handlers');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscriptions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Tests for re-frame subscriptions\n```clojure\ndb (reagent/atom {:a :ok})\nquery [:a]");
}),(function (){
var db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"ok","ok",967785236)], null));
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ok","ok",967785236)),cljs.core.deref.call(null,mimas.subs.simple_sub.call(null,db,query)));
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}

return result__44492__auto__;
}catch (e58298){var t__44529__auto__ = e58298;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.subscriptions = (function cards$core$subscriptions(){
return cljs.test.test_var.call(null,cards$core$subscriptions.cljs$lang$var);
});
cards.core.subscriptions.cljs$lang$test = (function (){

var db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"ok","ok",967785236)], null));
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ok","ok",967785236)),cljs.core.deref.call(null,mimas.subs.simple_sub.call(null,db,query)));
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}

return result__44492__auto__;
}catch (e58299){var t__44529__auto__ = e58299;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}});

cards.core.subscriptions.cljs$lang$var = new cljs.core.Var(function(){return cards.core.subscriptions;},new cljs.core.Symbol("cards.core","subscriptions","cards.core/subscriptions",1272375565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),"/home/andre/Projects/ClojureScript/mimas/src/cards/core.cljs",23,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.subscriptions)?cards.core.subscriptions.cljs$lang$test:null)]));
cards.core.title_subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"title","title",636505583)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core58300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core58300 = (function (meta58301){
this.meta58301 = meta58301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core58300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58302,meta58301__$1){
var self__ = this;
var _58302__$1 = this;
return (new cards.core.t_cards$core58300(meta58301__$1));
});

cards.core.t_cards$core58300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58302){
var self__ = this;
var _58302__$1 = this;
return self__.meta58301;
});

cards.core.t_cards$core58300.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core58300.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46692__auto__,devcard_opts__46693__auto__){
var self__ = this;
var this__46692__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__46693__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46711__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.title,cljs.core.deref.call(null,cards.core.title_subs)], null);
if(cljs.core.fn_QMARK_.call(null,v__46711__auto__)){
return ((function (v__46711__auto__,this__46692__auto____$1){
return (function (data_atom__46712__auto__,owner__46713__auto__){
return reagent.core.as_element.call(null,v__46711__auto__.call(null,data_atom__46712__auto__,owner__46713__auto__));
});
;})(v__46711__auto__,this__46692__auto____$1))
} else {
return reagent.core.as_element.call(null,v__46711__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46693__auto__))));
});

cards.core.t_cards$core58300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58301","meta58301",1058501252,null)], null);
});

cards.core.t_cards$core58300.cljs$lang$type = true;

cards.core.t_cards$core58300.cljs$lang$ctorStr = "cards.core/t_cards$core58300";

cards.core.t_cards$core58300.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cards.core/t_cards$core58300");
});

cards.core.__GT_t_cards$core58300 = (function cards$core$__GT_t_cards$core58300(meta58301){
return (new cards.core.t_cards$core58300(meta58301));
});

}

return (new cards.core.t_cards$core58300(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cards.core.title_subs,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"title-tests","title-tests",1144197080)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,cards.core.title_subs)),"mimas");
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}

return result__44492__auto__;
}catch (e58303){var t__44529__auto__ = e58303;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}}),(function (){
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.title_subs))),String);
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}

return result__44492__auto__;
}catch (e58304){var t__44529__auto__ = e58304;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.title_tests = (function cards$core$title_tests(){
return cljs.test.test_var.call(null,cards$core$title_tests.cljs$lang$var);
});
cards.core.title_tests.cljs$lang$test = (function (){
try{var values__44491__auto___58307 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,cards.core.title_subs)),"mimas");
var result__44492__auto___58308 = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto___58307);
if(cljs.core.truth_(result__44492__auto___58308)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto___58307),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto___58307)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}

}catch (e58305){var t__44529__auto___58309 = e58305;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto___58309,new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.title_subs))),String);
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}

return result__44492__auto__;
}catch (e58306){var t__44529__auto__ = e58306;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}});

cards.core.title_tests.cljs$lang$var = new cljs.core.Var(function(){return cards.core.title_tests;},new cljs.core.Symbol("cards.core","title-tests","cards.core/title-tests",41503061,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"title-tests","title-tests",-1510238689,null),"/home/andre/Projects/ClojureScript/mimas/src/cards/core.cljs",21,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.title_tests)?cards.core.title_tests.cljs$lang$test:null)]));
cards.core.dropdown_subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"dropdown","dropdown",1343185805)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core58310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core58310 = (function (meta58311){
this.meta58311 = meta58311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core58310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58312,meta58311__$1){
var self__ = this;
var _58312__$1 = this;
return (new cards.core.t_cards$core58310(meta58311__$1));
});

cards.core.t_cards$core58310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58312){
var self__ = this;
var _58312__$1 = this;
return self__.meta58311;
});

cards.core.t_cards$core58310.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core58310.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46692__auto__,devcard_opts__46693__auto__){
var self__ = this;
var this__46692__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__46693__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46711__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.dropdown,cljs.core.deref.call(null,cards.core.dropdown_subs)], null);
if(cljs.core.fn_QMARK_.call(null,v__46711__auto__)){
return ((function (v__46711__auto__,this__46692__auto____$1){
return (function (data_atom__46712__auto__,owner__46713__auto__){
return reagent.core.as_element.call(null,v__46711__auto__.call(null,data_atom__46712__auto__,owner__46713__auto__));
});
;})(v__46711__auto__,this__46692__auto____$1))
} else {
return reagent.core.as_element.call(null,v__46711__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46693__auto__))));
});

cards.core.t_cards$core58310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58311","meta58311",-1350894407,null)], null);
});

cards.core.t_cards$core58310.cljs$lang$type = true;

cards.core.t_cards$core58310.cljs$lang$ctorStr = "cards.core/t_cards$core58310";

cards.core.t_cards$core58310.cljs$lang$ctorPrWriter = (function (this__36112__auto__,writer__36113__auto__,opt__36114__auto__){
return cljs.core._write.call(null,writer__36113__auto__,"cards.core/t_cards$core58310");
});

cards.core.__GT_t_cards$core58310 = (function cards$core$__GT_t_cards$core58310(meta58311){
return (new cards.core.t_cards$core58310(meta58311));
});

}

return (new cards.core.t_cards$core58310(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cards.core.dropdown_subs,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.core.println.call(null,mimas.core.dropdown);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"dropdown-tests","dropdown-tests",1492023994)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.dropdown_subs))),cljs.core.PersistentVector);
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
}

return result__44492__auto__;
}catch (e58313){var t__44529__auto__ = e58313;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.dropdown_tests = (function cards$core$dropdown_tests(){
return cljs.test.test_var.call(null,cards$core$dropdown_tests.cljs$lang$var);
});
cards.core.dropdown_tests.cljs$lang$test = (function (){
try{var values__44491__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.dropdown_subs))),cljs.core.PersistentVector);
var result__44492__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__44491__auto__);
if(cljs.core.truth_(result__44492__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__44491__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__44491__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
}

return result__44492__auto__;
}catch (e58314){var t__44529__auto__ = e58314;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__44529__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options is a vector"], null));
}});

cards.core.dropdown_tests.cljs$lang$var = new cljs.core.Var(function(){return cards.core.dropdown_tests;},new cljs.core.Symbol("cards.core","dropdown-tests","cards.core/dropdown-tests",287923931,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"dropdown-tests","dropdown-tests",-1162411775,null),"/home/andre/Projects/ClojureScript/mimas/src/cards/core.cljs",24,1,52,52,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.dropdown_tests)?cards.core.dropdown_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map?rel=1456367896151